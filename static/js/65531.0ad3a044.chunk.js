(self.webpackChunkdemoapp2p=self.webpackChunkdemoapp2p||[]).push([[65531],{65531:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return w}});var a=n(4942),r=n(1413),i=n(37762),s=n(29439),o=n(72791),c=n(57689),u=n(80758),l=n(37260),f=n(70158),d=n(84053),g=n(91003),m=n(12616),v=n(27132),p=n(64183),h=n(4016),y=n(72173),x=n(11554),Z=n(84900),b=n(49010),S=n(18427),T=n(77047),k=n(22426),j=function(e){return"0".concat(e).slice(-2)},I=function(e,t,n,a,r){if("string"===typeof t){if(a){var i=function(e,t){if("string"!==typeof t)return null;var n=e,a=t.split(".");for(var r in a){var i=a[r],s=i.indexOf("(");if(-1===s){if("undefined"===typeof n[i])return null;n=n[i]}else{var o=parseInt(i.substring(s+1,i.length-1),10),c=n[i.substring(0,s)];if(!(c&&Array.isArray(c)&&c.length>=o))return null;n=c[o-1]}}return n}(a,t);if(i===r||"".concat(i)==="".concat(r)||null===i&&""===r)return}var s=t.lastIndexOf(".");if(-1!==s)if(n){var o={},c=t.substring(0,s);o[t.substring(s+1)]=r;var u=c.indexOf("(");if(-1===u)n.push({instruction:"UPDATE",target:c,content:o});else{var l=c.substring(u+1,c.length-1);c=c.substring(0,u),n.push({instruction:"UPDATE",target:c,listIndex:parseInt(l,10),content:o})}}else!function(e,t,n){if("string"===typeof t)for(var a=t.split("."),r=e,i=0;i<a.length;i++){var s=a[i],o=s.indexOf("(");if(-1===o)i<a.length-1?"undefined"===typeof r[s]&&(r[s]={}):r[s]=n,r=r[s];else{var c=parseInt(s.substring(o+1,s.length-1));"undefined"===typeof r[s=s.substring(0,o)]&&(r[s]=[]);for(var u=r[s].length;u<c;u++)r[s].push({});r=r[s][c-1]}}}(e,t,r);else e[t]=r}},C=function(e,t,n,a){var r,s,o=(0,i.Z)(e.elements);try{for(o.s();!(r=o.n()).done;){var c=r.value;if("INPUT"===c.tagName||"TEXTAREA"===c.tagName||"SELECT"===c.tagName){var u=c.getAttribute("data-ref");if(null!==u&&"pyID"!==u)if("INPUT"===c.tagName){var l=c.getAttribute("type");if("checkbox"===l)I(t,u,n,a,c.checked);else if("radio"===l)c.checked&&I(t,u,n,a,c.value);else if("tel"===l){var f=c.value;"SELECT"===c.parentNode.firstElementChild.tagName&&"field-countrycode"===c.parentNode.firstElementChild.className&&(f=c.parentNode.firstElementChild.value+f),I(t,u,n,a,f)}else if("date"===l){var d=void 0;c.valueAsDate&&(d=new Date(c.valueAsDate)),d&&d instanceof Date&&d.getTime()===d.getTime()||(d=new Date(c.value)),d&&d instanceof Date&&d.getTime()===d.getTime()?(d=new Date(d.getTime()+6e4*d.getTimezoneOffset()),I(t,u,n,a,"".concat(j(d.getMonth()+1),"/").concat(j(d.getDate()),"/").concat(d.getFullYear()))):I(t,u,n,a,c.value)}else I(t,u,n,a,c.value)}else I(t,u,n,a,c.value)}}}catch(h){o.e(h)}finally{o.f()}if(e&&e.querySelectorAll)for(var g=e.querySelectorAll("[contenteditable]"),m=0;m<g.length;m++){var v=g[m],p=v.getAttribute("data-ref");I(t,p,n,a,(s=v.innerHTML)&&"string"===typeof s?s.replace(/[&<>'"]/g,(function(e){return{"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;","(":"&#40;",")":"&#41;",'"':"&quot;"}[e]||e})):"")}},E=n(80184);function w(){var e=(0,c.UO)().caseid,t=(0,o.useState)(!1),j=(0,s.Z)(t,2),I=j[0],w=j[1],P=(0,o.useState)(),A=(0,s.Z)(P,2),D=A[0],N=A[1],U=(0,o.useState)(!0),R=(0,s.Z)(U,2),O=R[0],F=R[1],L=(0,o.useState)(""),q=(0,s.Z)(L,2),z=q[0],M=q[1],W=(0,o.useState)(""),_=(0,s.Z)(W,2),B=_[0],Q=_[1],$=(0,o.useState)("tab-0"),G=(0,s.Z)($,2),H=G[0],J=G[1],V=(0,o.useState)([]),X=(0,s.Z)(V,2),Y=X[0],K=X[1],ee=(0,o.useState)([]),te=(0,s.Z)(ee,2),ne=te[0],ae=te[1],re=(0,o.useState)({}),ie=(0,s.Z)(re,2),se=ie[0],oe=ie[1],ce=(0,o.useState)(),ue=(0,s.Z)(ce,2),le=ue[0],fe=ue[1];(0,o.useEffect)((function(){var e=!0;return""!==z&&(0,b.rQ)("assignments",z).then((function(t){if(e&&t.uiResources){var n=t.uiResources.root.config.name;Q(t.data.caseInfo.content.pyViewName),fe((0,E.jsx)(k.default,{children:(0,T.e)(t.uiResources.resources.views[n],!1,"",t)}))}})),function(){e=!1}}),[z]);var de=function(e){var t=e.onSubmit,n=e.onCancel;return(0,E.jsx)(u.ZP,{actions:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(l.Z,{onClick:n,children:"Cancel"}),(0,E.jsx)(l.Z,{variant:"primary",onClick:t,children:"Submit"})]}),children:le})},ge=(0,o.useCallback)((function(e){if(!D||!D.uiResources.resources.views.pyDetails)return[];var t,n=(0,i.Z)(D.uiResources.resources.views.pyDetails[0].children);try{for(n.s();!(t=n.n()).done;){var a=t.value;if(a.name===e)return a}}catch(r){n.e(r)}finally{n.f()}return[]}),[D]);(0,o.useEffect)((function(){if(D){var t=ge("Utilities");K(t.children.map((function(t,a){try{var r=(0,o.lazy)((function(){return n(61413)("./".concat(t.type)).catch((function(e){console.error("An error has occured",e)}))}));return(0,E.jsx)(o.Suspense,{fallback:(0,E.jsx)(f.Z,{placement:"local"}),children:(0,E.jsx)(r,{caseid:e,utilityCtx:me})},"utility-".concat(a))}catch(i){return(0,E.jsxs)("div",{children:["Utility ",t.type," not found"]},"utility-".concat(a))}})))}}),[D,e,ge]),(0,o.useEffect)((function(){(0,b.rQ)("caseview",e).then((function(e){N(e),w(!0)}))}),[e]);var me=function(e,t){oe((function(n){return n[e]&&n[e].count===t.count?n:(0,r.Z)((0,r.Z)({},n),{},(0,a.Z)({},e,t))}))};(0,o.useEffect)((function(){if(D){var e=ge("Utilities");ae(e.children.reduce((function(e,t){var n=t.type;return n&&se[n]&&e.push(se[n]),e}),[]))}}),[se,D,ge]);var ve=function(e){return D.uiResources.resources.views.pyCaseSummary[0].children[e].children.map((function(e,t){return(0,S.rz)(D,e),{id:"p-".concat(t),name:(0,S.Te)(e),value:(0,S.hW)(e)}}))};return I?(0,E.jsx)(x.Z,{caseId:e,heading:D?D.data.caseInfo.content.pyLabel:"",icon:(0,E.jsx)(p.ZP,{name:"polaris-solid"}),followed:!1,onFollowedChange:function(){},onEdit:function(){},summary:(0,E.jsx)(Z.Z,{primaryFields:ve(0),secondaryFields:ve(1)}),tabs:{items:ge("Tabs").children.map((function(e,t){var n=e.config.label;return!n&&e.config.inheritedProps&&e.config.inheritedProps.length>0&&(n=e.config.inheritedProps[0]),{name:n="string"===typeof n?n.replace("@L ",""):"",id:"tab-".concat(t)}})),currentTabId:H,onClick:function(e){return J(e)}},tasks:D.data.caseInfo.assignments?(0,E.jsx)(h.Z,{headerText:"Tasks",count:D.data.caseInfo.assignments.length,items:D.data.caseInfo.assignments.filter((function(e,t){return!O||t<3})).map((function(t,n){return{avatar:(0,E.jsx)(d.ZP,{name:t.assigneeInfo.name,imageSrc:(0,b.$k)("operatorimage",t.assigneeInfo.image)}),name:t.name,meta:(0,E.jsx)(g.ZP,{items:[(0,E.jsxs)(m.Z,{variant:"secondary",children:["Task in ",e]}),(0,E.jsxs)(m.Z,{variant:"secondary",children:["Urgency ",t.urgency]})]}),actions:(0,E.jsx)(l.Z,{variant:"primary",onClick:function(){M(t.links.open.href)},children:"Go"}),content:""!==z?(0,E.jsx)(de,{onSubmit:function(e){var t={},n=[];C(e.target.closest("form"),t,n,D.data.caseInfo.content),(0,b.$S)("assignments",z.substring(1)+"/actions/"+B,JSON.stringify({content:t,pageInstructions:n})).then((function(e){if(e.uiResources){var t=e.uiResources.root.config.name;fe((0,E.jsx)(k.default,{children:(0,T.e)(e.uiResources.resources.views[t],!1,"",e)})),N((function(t){return(0,r.Z)((0,r.Z)({},t),{},{data:e.data})}))}})),M("")},onCancel:function(){M("")}}):null}})),emptyPlaceholder:(0,E.jsx)(v.Z,{}),onExpandToggle:function(){F((function(e){return!e}))}}):null,stages:(0,E.jsx)(y.Z,{stages:D.data.caseInfo.stages.map((function(e){return{name:e.name,id:"stage-".concat(e.name),complete:"completed"===e.visited_status}})),current:"stage-".concat(D.data.caseInfo.stageLabel),caseTitle:"Stages"}),actions:D.data.caseInfo.availableActions.map((function(e,t){return{text:e.name,id:"action-".concat(t),onClick:function(){}}})),utilities:Y,utilitiesSummaryItems:ne}):(0,E.jsx)(f.Z,{placement:"global"})}},61413:function(e,t,n){var a={"./ErrorBoundary":[22426],"./ErrorBoundary.tsx":[22426],"./FileUtility":[39872,39872],"./FileUtility.tsx":[39872,39872],"./Followers":[68497,68497],"./Followers.tsx":[68497,68497],"./Pulse":[89156,35302,89156],"./Pulse.tsx":[89156,35302,89156],"./RelatedCases":[71029,71029],"./RelatedCases.tsx":[71029,71029],"./Stakeholders":[95751,16205,55868,95751],"./Stakeholders.tsx":[95751,16205,55868,95751],"./Tags":[94634,94634],"./Tags.tsx":[94634,94634],"./Worklist":[41903,55278],"./Worklist.tsx":[41903,55278]};function r(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],r=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n(r)}))}r.keys=function(){return Object.keys(a)},r.id=61413,e.exports=r}}]);
//# sourceMappingURL=65531.0ad3a044.chunk.js.map