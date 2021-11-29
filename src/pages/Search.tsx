import { useState, useEffect } from 'react';
import { Text, DateTimeDisplay } from '@pega/cosmos-react-core';
import { SearchResults } from '@pega/cosmos-react-work';
import { sendData } from '../services';
import { genStatus } from '../utils/status';

type SelectFilterProps = any;

const STATUS_TYPES = ['blocked', 'pending', 'new', 'open', 'resolved'];
const WORK_TYPES = ['All unresolved work', 'Work last entered by me', 'Work last updated by me'];
const LAST_UPDATED_TYPES = ['Last 90 days', 'Last 30 days', 'Last 7 days', 'Yesterday', 'Today'];
const singleselect = 'single-select';

const getFilterType = (list: any[], type?: string) => {
  return list.map(item => {
    return {
      id: item,
      label: type === 'status' ? genStatus(item) : item,
      checked: false,
      name: item
    };
  });
};
const initialFilters = [
  {
    type: 'select',
    id: 'status',
    name: 'Status',
    items: getFilterType(STATUS_TYPES, 'status')
  },
  {
    type: 'select',
    selectType: singleselect,
    id: 'type-of-work',
    name: 'Type of work',
    items: getFilterType(WORK_TYPES)
  },
  {
    type: 'select',
    selectType: singleselect,
    id: 'last-updated',
    name: 'Last updated',
    items: getFilterType(LAST_UPDATED_TYPES)
  }
];

const getAllFilters = () => {
  const filterList = [...initialFilters];
  if ((window as any).portal) {
    const listofcases = (window as any).portal.data.pyPortal.pyCaseTypesAvailableToCreate;
    filterList.unshift({
      type: 'select',
      id: 'case-type',
      name: 'Case type',
      items: listofcases.map((item: any) => {
        return {
          id: item.pyClassName,
          label: item.pyLabel,
          checked: false,
          name: item.pyLabel
        };
      })
    });
  }
  return filterList;
};
const renderSearchItem = (entry: any, statusFilters: any[]) => {
  const metaItems = [];
  const status = entry.pzWorkStatus ? entry.pzWorkStatus.toUpperCase() : '';
  if (
    statusFilters.length > 0 &&
    statusFilters.filter(e => status.indexOf(e.toUpperCase()) === 0).length === 0
  ) {
    return null;
  }
  if (status !== '') {
    metaItems.push(genStatus(status));
  }
  metaItems.push(
    <Text>
      Updated on{' '}
      <DateTimeDisplay value={new Date(entry.pxCreateDateTime)} variant='date' format='short' />
    </Text>
  );
  metaItems.push(<Text>Created by {entry.pxCreateOpName}</Text>);
  return {
    id: entry.pyID,
    title: entry.pyLabel,
    link: {
      href: `/case/${entry.pzCategory}/${entry.pyID}`
    },
    meta: metaItems,
    description: entry.pyDescription
  };
};
// ---------------------------------------------------------------------------------------------------------------------
// Search Page
// ---------------------------------------------------------------------------------------------------------------------
const Search = () => {
  let defaultSearchValue = '';
  let searchResult: any = [];

  if ((window as any).searchString) {
    defaultSearchValue = (window as any).searchString;
  }
  const [searchres, setSearchRes] = useState(searchResult);
  const [searchString, setSearchString] = useState(defaultSearchValue);
  const [filters, setFilters] = useState<SelectFilterProps | undefined>(getAllFilters());
  const [limit, setLimit] = useState(30);

  const handleShowMore = () => {
    if (limit < searchres.length) setLimit(curr => curr + 30);
  };

  const handleFilterChange = (changeEvent: any) => {
    setFilters((curr: any) => {
      return curr.map((filter: any) => {
        const newFilter = { ...filter };
        if (
          newFilter.name === changeEvent.name &&
          changeEvent.type === 'select' &&
          newFilter.type === 'select'
        ) {
          newFilter.items = newFilter.items.map((item: any) => {
            const newItem = { ...item };
            if (item.id === changeEvent.value.id) newItem.checked = changeEvent.value.checked;
            else if (newFilter.selectType === singleselect) newItem.checked = false;
            return newItem;
          });
        }
        return newFilter;
      });
    });
  };

  const clearAllFilters = () => {
    setFilters((curr: any) => {
      return curr.map((filter: any) => {
        if (filter.type === 'select') {
          filter.items = filter.items.map((item: any) => {
            item.checked = false;
            return item;
          });
        }
        return filter;
      });
    });
  };

  const handleClearFilter = (filterName: string) => {
    setFilters((curr: any) => {
      return curr.map((filter: any) => {
        if (filter.name === filterName && filter.type === 'select') {
          filter.items = filter.items.map((item: any) => {
            item.checked = false;
            return item;
          });
        }
        return filter;
      });
    });
  };

  useEffect(() => {
    if (!searchString || searchString === '') return;
    const searchTerm = searchString.replace(/['"]+/g, '');
    (window as any).searchString = searchTerm;
    const numResults = '500';
    let typeOfWork = 'All work';
    let updatedOn = 'Anytime';
    const caseTypeList = [];
    let statusFilters: any[] = [];
    filters.forEach((filter: any) => {
      filter.items.forEach((val: any) => {
        if (val.checked) {
          switch (filter.id) {
            case 'status':
              statusFilters.push(val.id);
              break;
            case 'type-of-work':
              typeOfWork = val.id;
              break;
            case 'last-updated':
              updatedOn = val.id;
              break;
            case 'case-type':
              caseTypeList.push(val.id);
              break;
            default:
              break;
          }
        }
      });
    });
    sendData(
      'dataviews',
      'D_pySearch',
      `{"dataViewParameters":[{"SearchString":"${encodeURIComponent(
        searchTerm
      )}"},{"TypeOfWork":"${typeOfWork}"},{"UpdatedOn":"${updatedOn}"},{"pyMaxResults":"${numResults}"}]}`
    )
      .then(response => {
        if (response.data !== null) {
          setSearchRes(
            response.data.reduce((curVal: any[], entry: any) => {
              const val = renderSearchItem(entry, statusFilters);
              if (val !== null) {
                curVal.push(val);
              }
              return curVal;
            }, [])
          );
        } else {
          setSearchRes([]);
        }
      })
      .catch(error => {
        console.log(error);
        setSearchRes([]);
      });
  }, [searchString, filters]);

  const updateSearchString = (value: string) => {
    setSearchString(value);
  };

  return (
    <SearchResults
      results={limit < searchres.length ? searchres.slice(0, limit) : searchres}
      searchInputProps={{
        value: searchString,
        onSearchSubmit: updateSearchString,
        searchInputAriaLabel: 'Enter a search'
      }}
      count={searchres.length}
      filters={filters}
      onFilterChange={handleFilterChange}
      onClearAllFilters={clearAllFilters}
      onClearFilter={handleClearFilter}
      onShowMore={limit < searchres.length ? handleShowMore : undefined}
    />
  );
};

export default Search;
