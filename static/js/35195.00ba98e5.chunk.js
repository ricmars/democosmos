"use strict";(self.webpackChunkdemocosmos=self.webpackChunkdemocosmos||[]).push([[35195],{35195:function(e,t,n){n.r(t),n.d(t,{default:function(){return O}});var a,l,i=n(29439),o=n(72791),r=n(1413),u=n(44925),d=n(80184),s=n(94496),c=n(87946),h=n(72029),f=n(79661),v=n(9972),g=n(80068),Z=n(98716),p=n(94313),y=function(e,t){var n=(0,o.useRef)(null),a=(0,o.useState)(t||0),l=(0,i.Z)(a,2),r=l[0],u=l[1],d=(0,p.Z)((function(){var t,a,l,i=n.current;n.current&&n.current instanceof HTMLIFrameElement&&(t=n.current,i=null!==(a=null===(l=n.current.contentDocument)||void 0===l?void 0:l.querySelector("body"))&&void 0!==a?a:n.current);if(n.current){var o=r;if(r||(o=i.scrollHeight+(i.offsetHeight-i.clientHeight),u(o)),i.style.height="".concat(o,"px"),e){i.style.overflowY=i.scrollHeight>e?"auto":"hidden";var d="".concat(Math.min(i.scrollHeight+(i.offsetHeight-i.clientHeight),e),"px");i.style.height=d,t&&(t.style.height=d)}else{i.style.overflowY="hidden";var s=i.scrollHeight+(i.offsetHeight-i.clientHeight);i.style.height="".concat(s,"px"),t&&(t.style.height="".concat(s,"px"))}}}),100);return[n,d]},b=n(85051),m=n(12616),x=n(30168),H=n(16444),C=n(36862),S=H.ZP.textarea((function(e){var t=e.resizable;return(0,H.iv)(a||(a=(0,x.Z)(["\n    width: 100%;\n    min-height: ",";\n    padding: ",";\n    -webkit-appearance: none;\n    ","\n  "])),(function(e){return e.theme.components["text-area"]["min-height"]}),(function(e){return e.theme.components["text-area"].padding}),!t&&(0,H.iv)(l||(l=(0,x.Z)(["\n      resize: none;\n    "]))))}));S.defaultProps=C.ns;var R=S,w=n(93433),z=n(18173),I=n(97796),V=(0,z.Z)("text-area",["control"].concat((0,w.Z)(I.R))),k=["testId","additionalInfo","id","value","defaultValue","required","disabled","readOnly","label","labelHidden","info","status","resizable","autoResize","maxLength","displayCharCount","hardStop","onChange","onResolveSuggestion"],q=(0,o.forwardRef)((function(e,t){var n=(0,v.Z)(),a=e.testId,l=e.additionalInfo,f=e.id,p=void 0===f?n:f,x=e.value,H=e.defaultValue,C=e.required,S=void 0!==C&&C,w=e.disabled,z=void 0!==w&&w,I=e.readOnly,q=void 0!==I&&I,L=e.label,O=e.labelHidden,j=e.info,P=e.status,_=e.resizable,D=void 0!==_&&_,E=e.autoResize,M=void 0===E||E,Y=e.maxLength,F=e.displayCharCount,T=void 0!==F&&F,A=e.hardStop,B=void 0===A||A,G=e.onChange,J=e.onResolveSuggestion,K=(0,u.Z)(e,k),N=(0,g.Z)(),Q=(0,Z.Z)(a,V),U=y(),W=(0,i.Z)(U,2),X=W[0],$=W[1],ee=(0,b.Z)(X,t),te=(0,o.useState)(0),ne=(0,i.Z)(te,2),ae=ne[0],le=ne[1],ie={};(0,o.useEffect)((function(){"value"in e?le(e.value?e.value.length:0):"defaultValue"in e&&le(e.defaultValue?e.defaultValue.length:0)}),[e]),(0,h.Z)(e,"value")?ie.value=null!==x&&void 0!==x?x:"":(0,h.Z)(e,"defaultValue")&&(ie.defaultValue=null!==H&&void 0!==H?H:"");var oe=(0,o.useCallback)((function(e){(!B||void 0===Y||e.target.value.length<=Y)&&(null===G||void 0===G||G(e),le(e.target.value.length),$())}),[G,$,B,Y]),re=(0,d.jsx)(c._,(0,r.Z)({},(0,r.Z)((0,r.Z)((0,r.Z)({"data-testid":Q.control,ref:M?ee:t,id:p,required:S,disabled:z,status:P,readOnly:q,resizable:D,maxLength:B?Y:void 0,hasSuggestion:"pending"===P&&!!J},ie),K),{},{onChange:oe,as:R})));return L||T?(0,d.jsx)(s.ZP,(0,r.Z)((0,r.Z)({},{testId:Q,additionalInfo:l,label:L,labelHidden:O,id:p,readOnly:q,info:j,status:P,charLimitDisplay:T&&"number"===typeof Y?(0,d.jsx)(m.Z,{readOnly:q,variant:"secondary","aria-live":Y>=0&&Y-ae<=20?"polite":"off",children:Y>=0?N("x_of_y",[ae||"0",Y]):ae}):void 0,required:S,disabled:z,onResolveSuggestion:J}),{},{children:re})):re})),L=(0,f.Z)(q,V);function O(e){var t=e.field,n=(0,o.useState)(t.displayvalue),a=(0,i.Z)(n,2),l=a[0],r=a[1];return(0,d.jsx)(L,{type:"text",label:t.displaylabel,value:l,onChange:function(e){r(e.target.value)}})}}}]);
//# sourceMappingURL=35195.00ba98e5.chunk.js.map