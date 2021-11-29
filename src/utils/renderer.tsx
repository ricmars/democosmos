import { renderField } from '../utils/field';
import { Grid, Flex } from '@pega/cosmos-react-core';

export const renderView = (data: any, isReadOnly: boolean, context: any, casedata: any) => {
  if (typeof data === 'undefined') return '';
  if (data.config && data.config.template) {
    switch (data.config.template) {
      case 'TwoColumn':
        return (
          <Grid
            container={{
              cols: `repeat(2, minmax(0, 1fr))`,
              gap: 2
            }}
          >
            {data.children.map((child: any, i: number) => (
              <Flex
                container={{
                  direction: 'column',
                  itemGap: 2
                }}
                key={`${i + 1}`}
              >
                {renderView(child.children, isReadOnly, context, casedata)}
              </Flex>
            ))}
          </Grid>
        );
      case 'DefaultForm':
        return (
          <Grid
            container={{
              cols: `repeat(1, minmax(0, 1fr))`,
              gap: 1
            }}
          >
            {renderView(data.children[0].children, isReadOnly, context, casedata)}
          </Grid>
        );
      case 'OneColumn':
        return (
          <Grid
            container={{
              cols: `repeat(1, minmax(0, 1fr))`,
              gap: 1
            }}
          >
            {renderView(data.children[0].children, isReadOnly, context, casedata)}
          </Grid>
        );
      case 'Details' /* Details template is always read-only */:
        return (
          <Grid
            container={{
              cols: `repeat(1, minmax(0, 1fr))`,
              gap: 1
            }}
          >
            {renderView(data.children[0].children, isReadOnly, context, casedata)}
          </Grid>
        );
      default:
        return null;
    }
  } else {
    return data.map((item: any, index: number) => {
      if (item.type === 'Region') {
        return renderView(item.children, true, context, casedata);
      }
      if (item.type === 'reference' && item.config.type === 'view') {
        let newCtx = '';
        if (item.config.context) newCtx = item.config.context;
        if (
          item.config.inheritedProps &&
          item.config.inheritedProps.length === 1 &&
          item.config.inheritedProps[0].prop === 'label'
        ) {
          const subview = casedata.uiResources.resources.views[item.config.name];
          if (subview) {
            return (
              <Grid
                container={{
                  cols: `repeat(1, minmax(0, 1fr))`,
                  gap: 1
                }}
              >
                {renderView(
                  subview,
                  isReadOnly,
                  context === '' ? newCtx.substring(1) : context + newCtx,
                  casedata
                )}
              </Grid>
            );
          }
        }
        let viewName = item.config.name;
        if (viewName.indexOf('@P .') !== -1) {
          viewName = casedata.data.caseInfo.content[viewName.replace('@P .', '')];
        }
        return renderView(
          casedata.uiResources.resources.views[viewName],
          isReadOnly,
          !context || context === '' ? newCtx.substring(1) : context + newCtx,
          casedata
        );
      }
      return renderField(item, isReadOnly, context, casedata);
    });
  }
};
