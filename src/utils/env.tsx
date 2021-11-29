export const getOperatorName = () => {
  return (window as any).config ? (window as any).config.environmentInfo.pxOperator.pyUserName : '';
};
export const getOperatorUrl = () => {
  if (!(window as any).config) return '';
  const op = (window as any).config.environmentInfo.pxOperator;
  const route = (window as any).config.routingInfo;
  return `${op.pyImageInsKey}?org=${route.orgName}`;
};

export const getCaseTypeName = (caseObjClass: string) => {
  let caseTypeName = '';
  if (!(window as any).config) return '';
  (window as any).config.environmentInfo.pyCaseTypeList.forEach((item: any) => {
    if (item.pyWorkTypeImplementationClassName === caseObjClass) {
      caseTypeName = item.pyWorkTypeName.toLowerCase();
    }
  });
  return caseTypeName;
};

export const getCaseTypeClass = (caseTypeName: string) => {
  if (!(window as any).config) return '';
  let caseTypeClass = '';
  (window as any).config.environmentInfo.pyCaseTypeList.forEach((item: any) => {
    if (item.pyWorkTypeName.toUpperCase() === caseTypeName.toUpperCase()) {
      caseTypeClass = item.pyWorkTypeImplementationClassName;
    }
  });
  return caseTypeClass;
};
