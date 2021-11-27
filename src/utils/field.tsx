import { genStatus } from './status';
import { DateTimeDisplay, CurrencyDisplay, Progress } from '@pega/cosmos-react-core';
import { RichTextViewer } from '@pega/cosmos-react-rte';
import { Suspense, lazy } from 'react';

/**
 * escape and unescape the HTML entities
 */
export const escapeHTML = (str: string) => {
  if (!str || typeof str !== 'string') return '';
  return str.replace(
    /[&<>'"]/g,
    tag =>
      ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '(': '&#40;',
        ')': '&#41;',
        '"': '&quot;'
      }[tag] || tag)
  );
};

export const unescapeHTML = (str: string) => {
  if (!str || typeof str !== 'string') return '';
  return str.replace(
    /&amp;|&lt;|&gt;|&#39;|&#40;|&#41;|&quot;/g,
    tag =>
      ({
        '&amp;': '&',
        '&lt;': '<',
        '&gt;': '>',
        '&#39;': "'",
        '&#40;': '(',
        '&#41;': ')',
        '&quot;': '"'
      }[tag] || tag)
  );
};

export const i18nt = (msg: string) => {
  if (!msg) return '';
  if (typeof msg !== 'string') return msg;
  let key = msg;
  if (key.indexOf('@L ') === 0) key = key.substring(3);
  key = key.replace(/^"|"$/g, '').trim();
  key = unescapeHTML(key);
  return key;
};

function compare(post: string, operator: string, value: any) {
  try {
    switch (operator) {
      case '>':
        return parseInt(post, 10) > parseInt(value, 10);
      case '<':
        return parseInt(post, 10) < parseInt(value, 10);
      case '>=':
        return parseInt(post, 10) >= parseInt(value, 10);
      case '<=':
        return parseInt(post, 10) <= parseInt(value, 10);
      case '==':
        // eslint-disable-next-line eqeqeq
        return `${post}` == `${value}`;
      case '!=':
        // eslint-disable-next-line eqeqeq
        return `${post}` != `${value}`;
    }
  } catch (e) {}
  return false;
}

export const isValidExpression = (expression: string, content: any) => {
  const exprs = expression.replace('@E ', '').split('&&');
  for (const expr in exprs) {
    const ops: any = exprs[expr].trim().match(/[\w.]+|[><=!]+|'[^']+'/g);
    if (!ops && ops.length === 3) {
      const val = content[ops[0].substring(1)];
      if (typeof val !== 'undefined') {
        if (!compare(val, ops[1], ops[2].replace(/^'|'$/g, ''))) {
          return false;
        }
      }
    }
  }
  return true;
};

/**
 * get the value targeted by path - path can be a complex string like 'props(1).pyLabel'
 * Note that path is using 1 as the starting index
 */
export const getValue = (obj: any, path: string) => {
  if (typeof path !== 'string') {
    return null;
  }
  let retObj = obj;
  const keys = path.split('.');
  for (const i in keys) {
    const key = keys[i];
    const startParens = key.indexOf('(');
    if (startParens === -1) {
      if (typeof retObj[key] !== 'undefined') {
        retObj = retObj[key];
      } else {
        return null;
      }
    } else {
      const idx = parseInt(key.substring(startParens + 1, key.length - 1), 10);
      if (isNaN(idx)) {
        return null;
      }
      const el = retObj[key.substring(0, startParens)];
      if (el && Array.isArray(el) && el.length >= idx) {
        retObj = el[idx - 1];
      } else {
        return null;
      }
    }
  }
  return retObj;
};

/**
 * update the data object with displayLabel and displayValue
 * context is the caseview object - pageContext could be a subpage
 */
export const getField = (context: any, data: any, pageContext?: any) => {
  if (data.config.visibility === false) return null;
  let isDeclarativeTarget = false;
  data.config.displayvalue = '';
  data.config.displaylabel = i18nt(data.config.label);
  data.config.displayplaceholder = i18nt(data.config.placeholder);
  data.config.displayhelperText = i18nt(data.config.helperText);
  data.config.displaycaption = i18nt(data.config.caption);
  if (data.config.value) {
    let propName = data.config.value.replace('@P .', '');
    data.config.reference =
      typeof pageContext === 'undefined' || pageContext === ''
        ? propName
        : `${pageContext}.${propName}`;
    data.config.displayvalue = getValue(context.data.caseInfo.content, data.config.reference);
    if (
      typeof data.config.datasource === 'string' &&
      data.config.datasource.indexOf('@ASSOCIATED') === 0
    ) {
      propName = data.config.datasource.replace('@ASSOCIATED .', '');
      let val: any = '';
      if (context.data.caseInfo) {
        val = context.data.caseInfo.content;
      } else if (
        context.uiResources.context_data &&
        context.uiResources.context_data.caseInfo &&
        context.uiResources.context_data.caseInfo.content
      ) {
        val = context.uiResources.context_data.caseInfo.content;
      }
      const obj = !pageContext || pageContext === '' ? val : getValue(val, pageContext);
      if (obj && obj.summary_of_associated_lists__) {
        data.config.options = obj.summary_of_associated_lists__[propName];
      }
      if (typeof data.config.options === 'undefined') {
        val = context.uiResources.resources.fields[propName];
        if (val.length === 1) val = val[0];
        if (val && val.datasource) {
          if (val.datasource.records) {
            data.config.options = val.datasource.records;
          } else if (
            val.datasource.name &&
            context.data.data &&
            context.data.data.shared &&
            context.data.data.shared[val.datasource.name]
          ) {
            const dp = context.data.data.shared[val.datasource.name];
            if (Object.keys(dp).length > 0) {
              const dpName = Object.keys(dp)[0];
              if (dp[dpName].pxResults) {
                const keyName = val.datasource.propertyForValue.replace('@P .', '');
                const valueName = val.datasource.propertyForDisplayText.replace('@P .', '');
                data.config.options = [];
                for (const item in dp[dpName].pxResults) {
                  const elem = dp[dpName].pxResults[item];
                  data.config.options[item] = { key: elem[keyName], value: elem[valueName] };
                }
              }
            }
          }
        }
      }
    } else if (
      typeof data.config.datasource === 'object' &&
      data.config.datasource.source &&
      data.config.datasource.source.indexOf('@DATASOURCE') === 0
    ) {
      const ref = data.config.datasource.source
        .replace('@DATASOURCE ', '')
        .replace('.pxResults', '');
      if (context.data.data[ref] && context.data.data[ref].pxResults) {
        data.config.options = context.data.data[ref].pxResults;
      } else if (
        context.uiResources.context_data &&
        context.uiResources.context_data.caseInfo &&
        context.uiResources.context_data.caseInfo.content
      ) {
        const val = context.uiResources.context_data.caseInfo.content;
        if (
          val[context] &&
          val[context].summary_of_lists__[ref] &&
          val[context].summary_of_lists__[ref].pxResults
        ) {
          const paramDP = val[context].summary_of_lists__[ref].pxResults.replace('.pxResults', '');
          if (context.data.data[paramDP] && context.data.data[paramDP].pxResults) {
            data.config.options = [];
            const keyName = data.config.datasource.fields.key.replace('@P .', '');
            const valueName = data.config.datasource.fields.text.replace('@P .', '');
            for (const item in context.data.data[paramDP].pxResults) {
              const elem = context.data.data[paramDP].pxResults[item];
              data.config.options[item] = { key: elem[keyName], value: elem[valueName] };
            }
          }
        }
      }
    }
    if (!data.config.options) {
      data.config.options = [];
    }
    if (!data.config.displayvalue) {
      data.config.displayvalue = '';
    } else if (typeof data.config.displayvalue !== 'object') {
      data.config.displayvalue = `${data.config.displayvalue}`;
    }
    if (
      context.uiResources &&
      context.uiResources.resources &&
      context.uiResources.resources.fields &&
      context.uiResources.resources.fields[propName]
    ) {
      if (context.uiResources.resources.fields[propName][0].isDeclarativeTarget) {
        isDeclarativeTarget = true;
        context.isDeclarativeTarget = true;
      }
    }
  }
  if (
    typeof data.config.visibility === 'string' ||
    typeof data.config.readOnly === 'string' ||
    typeof data.config.disabled === 'string' ||
    typeof data.config.required === 'string'
  ) {
    context.refreshOnChange = true;
  }
  const content = context.data.caseInfo.content;

  /* Visibility condition */
  if (typeof data.config.visibility === 'string' && data.config.visibility !== 'true') {
    if (!isValidExpression(data.config.visibility, content)) return null;
  } else if (data.config.visibility === false || data.config.visibility === 'false') {
    return null;
  }
  /* Read-only condition */
  data.config.readonlystate = false;
  if (typeof data.config.readOnly === 'string' && data.config.readOnly !== 'false') {
    data.config.readonlystate = isValidExpression(data.config.readOnly, content);
  } else if (
    data.config.readOnly === true ||
    data.config.readOnly === 'true' ||
    isDeclarativeTarget
  ) {
    data.config.readonlystate = true;
  }
  /* Required condition */
  data.config.requiredstate = false;
  if (typeof data.config.required === 'string' && data.config.required !== 'false') {
    data.config.requiredstate = isValidExpression(data.config.required, content);
  } else if (data.config.required === true || data.config.required === 'true') {
    data.config.requiredstate = true;
  }
  /* Disabled condition */
  data.config.disabledstate = false;
  if (typeof data.config.disabled === 'string' && data.config.disabled !== 'false') {
    data.config.disabledstate = isValidExpression(data.config.disabled, content);
  } else if (data.config.disabled === true || data.config.disabled === 'true') {
    data.config.disabledstate = true;
  }
  if (data.config.disabledstate) {
    data.config.requiredstate = false;
    data.config.readonlystate = false;
  }
};

export const renderDisplayFieldValue = (data: any) => {
  if (data.config.value === '@P .pyStatusWork') {
    return genStatus(data.config.displayvalue);
  }
  switch (data.type) {
    case 'RichText':
      return <RichTextViewer content={data.config.displayvalue} type='html' />;
    case 'Currency':
      return (
        <CurrencyDisplay
          value={data.config.displayvalue}
          currencyISOCode='USD'
          formattingOptions={{
            showGroupSeparators: true,
            showDecimal: false
          }}
        />
      );
    case 'DateTime':
      return <DateTimeDisplay value={data.config.displayvalue} variant='datetime' format='long' />;
    case 'Date':
      return <DateTimeDisplay value={data.config.displayvalue} variant='date' format='long' />;
    default:
      return data.config.displayvalue;
  }
};

export const renderDisplayFieldLabel = (data: any) => {
  switch (data.type) {
    case 'Checkbox':
      return data.config.displaycaption;
    default:
      return data.config.displaylabel;
  }
};

export const renderField = (data: any, isReadOnly: boolean, context: any, casedata: any) => {
  getField(casedata, data);
  const Utility = lazy(() =>
    import(`../fields/${data.type}`).catch((err: string) => {
      console.error(err);
    })
  );
  return (
    <Suspense key={`field-${data.config.label}`} fallback={<Progress placement='local' />}>
      <Utility field={data.config} />
    </Suspense>
  );
};
