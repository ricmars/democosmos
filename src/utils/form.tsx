/**
 * always make sure that the return value is a string with 2 digits - prepend 0 in front
 */
export const pad2char = (v: any) => `0${v}`.slice(-2);
export const pad4char = (v: any) => `0${v}`.slice(-4);

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

/**
 * set the value of a property in an object content targeted by the path like 'props(1).pyLabel'
 */
export const setObjectFromRef = (content: any, path: string, value: any) => {
  if (typeof path !== 'string') {
    return;
  }
  const keys = path.split('.');
  let retObj = content;
  for (let i = 0; i < keys.length; i++) {
    let el = keys[i];
    const startParens = el.indexOf('(');
    if (startParens === -1) {
      // regular property - just add it to retObj
      if (i < keys.length - 1) {
        if (typeof retObj[el] === 'undefined') {
          retObj[el] = {};
        }
      } else {
        retObj[el] = value;
      }
      retObj = retObj[el];
    } else {
      const idx = parseInt(el.substring(startParens + 1, el.length - 1));
      el = el.substring(0, startParens);
      if (typeof retObj[el] === 'undefined') {
        retObj[el] = [];
      }
      for (let j = retObj[el].length; j < idx; j++) {
        retObj[el].push({});
      }
      retObj = retObj[el][idx - 1];
    }
  }
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
 * set the content and pageinstructions used to post body update
 */
export const setBodyContent = (
  content: any,
  path: string,
  pageinstructions: any,
  casedata: any,
  value: any
) => {
  if (typeof path !== 'string') {
    return;
  }
  // If no change, just return
  if (casedata) {
    const origVal = getValue(casedata, path);
    // eslint-disable-next-line eqeqeq
    if (origVal === value || `${origVal}` === `${value}` || (origVal === null && value === ''))
      return;
  }
  const propPath = path.lastIndexOf('.');
  if (propPath === -1) {
    content[path] = value;
    return;
  }
  if (!pageinstructions) {
    setObjectFromRef(content, path, value);
    return;
  }
  const data: any = {};
  let target = path.substring(0, propPath);
  data[path.substring(propPath + 1)] = value;
  const startParens = target.indexOf('(');
  if (startParens === -1) {
    pageinstructions.push({
      instruction: 'UPDATE',
      target,
      content: data
    });
  } else {
    const idx = target.substring(startParens + 1, target.length - 1);
    target = target.substring(0, startParens);
    pageinstructions.push({
      instruction: 'UPDATE',
      target,
      listIndex: parseInt(idx, 10),
      content: data
    });
  }
};

/**
 * Retrieve the values of all the form controls in the form and populate them in the content object
 */
export const getFormData = (form: any, content: any, pageinstructions: any, casedata: any) => {
  for (const el of form.elements) {
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.tagName === 'SELECT') {
      const ref = el.getAttribute('data-ref');
      if (ref !== null && ref !== 'pyID') {
        if (el.tagName === 'INPUT') {
          const type = el.getAttribute('type');
          if (type === 'checkbox') {
            setBodyContent(content, ref, pageinstructions, casedata, el.checked);
          } else if (type === 'radio') {
            if (el.checked) {
              setBodyContent(content, ref, pageinstructions, casedata, el.value);
            }
          } else if (type === 'tel') {
            let value = el.value;
            if (
              el.parentNode.firstElementChild.tagName === 'SELECT' &&
              el.parentNode.firstElementChild.className === 'field-countrycode'
            ) {
              value = el.parentNode.firstElementChild.value + value;
            }
            setBodyContent(content, ref, pageinstructions, casedata, value);
          } else if (type === 'date') {
            let dt;
            if (el.valueAsDate) {
              dt = new Date(el.valueAsDate);
            }
            // eslint-disable-next-line no-self-compare
            if (!dt || !(dt instanceof Date) || dt.getTime() !== dt.getTime()) {
              dt = new Date(el.value);
            }
            // eslint-disable-next-line no-self-compare
            if (dt && dt instanceof Date && dt.getTime() === dt.getTime()) {
              dt = new Date(dt.getTime() + dt.getTimezoneOffset() * 60000);
              setBodyContent(
                content,
                ref,
                pageinstructions,
                casedata,
                `${pad2char(dt.getMonth() + 1)}/${pad2char(dt.getDate())}/${dt.getFullYear()}`
              );
            } else {
              setBodyContent(content, ref, pageinstructions, casedata, el.value);
            }
          } else {
            setBodyContent(content, ref, pageinstructions, casedata, el.value);
          }
        } else {
          setBodyContent(content, ref, pageinstructions, casedata, el.value);
        }
      }
    }
  }
  if (form && form.querySelectorAll) {
    const editableElems = form.querySelectorAll('[contenteditable]');
    for (let i = 0; i < editableElems.length; i++) {
      const el = editableElems[i];
      const ref = el.getAttribute('data-ref');
      setBodyContent(content, ref, pageinstructions, casedata, escapeHTML(el.innerHTML));
    }
  }
};
