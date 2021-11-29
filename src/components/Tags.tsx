import { useEffect, useState } from 'react';
import { Tags as CosmosTags, TagsProps } from '@pega/cosmos-react-work';
import { getCaseTypeClass } from '../utils/env';
import { fetchData, sendData } from '../services';

export default function Tags(props: any) {
  const [tags, setTags] = useState<TagsProps['tags']>();
  const [isLoaded, setIsLoaded] = useState(false);
  const [countEdit, setcountEdit] = useState(0);
  let caseKey = `${getCaseTypeClass(
    props.casetypeid
  ).toUpperCase()}%20${props.caseid.toUpperCase()}`;
  caseKey = caseKey.replace(`-${props.casetypeid.toUpperCase()}%20`, '%20');

  useEffect(() => {
    if (countEdit === 0 && !isLoaded) {
      fetchData('cases', `${caseKey}/tags`).then(response => {
        const caseTags = response.tagsList;
        props.utilityCtx('Tags', {
          iconName: 'tag',
          count: caseTags.length
        });
        setTags(caseTags);
        setIsLoaded(true);
      });
    }
  }, [caseKey, countEdit, isLoaded, props]);

  const handleEditTags = (selectedTags: any[]) => {
    return new Promise<void>(resolve => {
      const tagsMap: any = {};
      if (tags) {
        tags.forEach((item: any) => {
          tagsMap[item.tagName] = item.tagKey;
        });
      }
      const newTags: any = [];
      const updatedTags = selectedTags.map(tag => {
        if (tag.newTag) {
          newTags.push({ Name: tag.text });
        } else {
          delete tagsMap[tag.text];
        }
        return tag.text;
      });
      let numReq = 0;
      for (const [, value] of Object.entries(tagsMap)) {
        numReq++;
        sendData('cases', `${caseKey}/tags/${value}`, '', 'DELETE').then(() => {
          setcountEdit(prevCount => prevCount - 1);
        });
      }
      if (newTags.length > 0) {
        numReq++;
        sendData('cases', `${caseKey}/tags`, JSON.stringify({ tags: newTags })).then(() => {
          setcountEdit(prevCount => prevCount - 1);
        });
      }
      props.utilityCtx('Tags', {
        iconName: 'tag',
        count: updatedTags.length
      });
      setTags(updatedTags);
      setcountEdit(numReq);
      setIsLoaded(false);
      resolve();
    });
  };

  return (
    <CosmosTags
      tags={
        tags
          ? tags.map((item: any) => {
              return item.tagName ?? item;
            })
          : []
      }
      availableTags={[]}
      loading={!tags}
      onEditTags={handleEditTags}
      onSearch={(query: string) => {}}
    />
  );
}
