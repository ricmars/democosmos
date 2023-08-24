"use strict";(self.webpackChunkdemoapp2p=self.webpackChunkdemoapp2p||[]).push([[41903,55278],{41903:function(n,e,t){t.r(e),t.d(e,{default:function(){return p}});var i=t(29439),r=t(72791),o=t(57689),a=t(4016),s=t(91003),c=t(12616),d=t(33039),l=t(37260),u=t(84053),v=t(27132),Z=t(75613),h=t(49010),m=t(66514),f=t(80184);function p(){var n=(0,o.s0)(),e=(0,r.useState)(!0),t=(0,i.Z)(e,2),p=t[0],g=t[1],x=window.portal.uiResources.context_data.pyPortal.summary_of_lists__.D_pyMyWorkList.pxResults.replace(".pxResults",""),j=[];window.portal.data[x].pxResults&&(j=window.portal.data[x].pxResults);return(0,f.jsx)(a.Z,{headerText:"My Worklist",count:j.length,items:j.filter((function(n,e){return!p||e<3})).map((function(e,t){var i=e.pxRefObjectKey.split(" "),r=i[i.length-1],o=encodeURI("/case/".concat(i[i.length-2]," ").concat(i[i.length-1]));return{name:e.pxTaskLabel,meta:(0,f.jsx)(s.ZP,{items:[(0,f.jsxs)(c.Z,{variant:"secondary",children:["Task in"," ",(0,f.jsx)(d.ZP,{href:o,onClick:function(e){!function(e,t){n(e,{state:{token:window.token,portal:window.portal,config:window.config}}),t.preventDefault(),t.stopPropagation()}(o,e)},children:r})]}),(0,m.D)(e.pyAssignmentStatus),(0,f.jsxs)(c.Z,{variant:"secondary",children:["Urgency ",e.pxUrgencyAssign]})]}),actions:(0,f.jsx)(l.Z,{variant:"primary",onClick:function(){},children:"Go"}),content:null}})),headerVisual:(0,f.jsx)(u.ZP,{size:"l",name:(0,Z.N9)(),imageSrc:(0,h.$k)("operatorimage",(0,Z.ew)())}),emptyPlaceholder:(0,f.jsx)(v.Z,{}),onExpandToggle:function(){g((function(n){return!n}))}})}},39116:function(n,e,t){t.d(e,{e:function(){return m}});var i,r=t(1413),o=t(44925),a=t(30168),s=t(80184),c=t(16444),d=t(36862),l=t(41878),u=t(57993),v=t(21750),Z=t(65739),h=["children","container"],m=c.ZP.div((function(n){var e=n.theme;return(0,c.iv)(i||(i=(0,a.Z)(["\n    "," &, &:not("," "," > &) {\n      position: relative;\n      padding: calc(1.5 * ",") calc("," * 2);\n\n      & + &,\n      & + "," {\n        padding-block-start: 0;\n      }\n    }\n  "])),u.u,v.r,v.r,e.base.spacing,e.components.card.padding,Z.M)}));m.defaultProps=d.ns;e.Z=function(n){var e=n.children,t=n.container,i=(0,o.Z)(n,h);return(0,s.jsx)(l.Z,(0,r.Z)((0,r.Z)({},i),{},{container:(0,r.Z)({direction:"column"},t),as:m,children:e}),void 0)}},65739:function(n,e,t){t.d(e,{M:function(){return h}});var i,r=t(1413),o=t(44925),a=t(30168),s=t(80184),c=t(16444),d=t(36862),l=t(41878),u=t(57993),v=t(21750),Z=["children","justify"],h=c.ZP.footer((function(n){var e=n.theme;return(0,c.iv)(i||(i=(0,a.Z)(["\n    "," &, &:not("," "," > &) {\n      padding: calc(1.5 * ",") calc("," * 2);\n    }\n  "])),u.u,v.r,v.r,e.base.spacing,e.components.card.padding)}));h.defaultProps=d.ns;e.Z=function(n){var e=n.children,t=n.justify,i=(0,o.Z)(n,Z);return(0,s.jsx)(l.Z,(0,r.Z)((0,r.Z)({as:h,container:{wrap:"wrap",alignItems:"center",justify:t}},i),{},{children:e}),void 0)}},41865:function(n,e,t){var i,r=t(1413),o=t(44925),a=t(30168),s=t(80184),c=t(72791),d=t(16444),l=t(36862),u=t(41878),v=t(57993),Z=t(21750),h=t(39116),m=["children","actions"],f=d.ZP.header((function(n){var e=n.theme,t=n.onClick;return(0,d.iv)(i||(i=(0,a.Z)(["\n    "," &, &:not("," "," > &) {\n      padding: calc(1.5 * ",") calc("," * 2);\n\n      + "," {\n        padding-block-start: 0;\n      }\n\n      &:hover {\n        ","\n      }\n    }\n  "])),v.u,Z.r,Z.r,e.base.spacing,e.components.card.padding,h.e,t?"cursor: pointer;":void 0)}));f.defaultProps=l.ns;var p=(0,c.forwardRef)((function(n,e){var t=n.children,i=n.actions,a=(0,o.Z)(n,m);return(0,s.jsx)(u.Z,(0,r.Z)((0,r.Z)({container:{alignItems:"center",justify:"between"},as:f},a),{},{ref:e,children:i?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(u.Z,{container:{alignItems:"center"},item:{grow:1},children:t},void 0),(0,s.jsx)("div",{children:i},void 0)]},void 0):t}),void 0)}));p.displayName="CardHeader",e.Z=p},80677:function(n,e,t){t.d(e,{Tl:function(){return M},qC:function(){return F}});var i,r,o,a=t(1413),s=t(44925),c=t(30168),d=t(80184),l=t(72791),u=t(16444),v=t(73180),Z=t(41878),h=t(12616),m=t(1004),f=t(64183),p=t(39116),g=t(21750),x=t(41865),j=t(65739),w=t(27132),y=t(44896),b=t(80068),P=t(36862),k=t(41976),_=t(70158),C=t(37260),T=t(85560),I=["id","actions"],R=["icon","name","count","actions","items","onViewAll","loading","noItemsText","error"],A=(0,u.ZP)(p.Z).withConfig((0,y.cZ)("loading"))((function(n){var e=n.theme,t=n.loading;return(0,u.iv)(i||(i=(0,c.Z)(["\n    ","\n\n    &:not(:last-child) > ul > li:last-child {\n      border-bottom: 0.0625rem solid ",";\n    }\n  "])),t&&(0,u.iv)(r||(r=(0,c.Z)(["\n      min-height: 4rem;\n    "]))),e.base.palette["border-line"])}));A.defaultProps=P.ns;var F=(0,u.ZP)(k.ZP)((function(n){var e=n.theme;return(0,u.iv)(o||(o=(0,c.Z)(["\n      padding: "," 0;\n\n      &:not(:last-child) {\n        border-bottom: 0.0625rem solid ",";\n      }\n    "])),e.base.spacing,e.base.palette["border-line"])}));F.defaultProps=P.ns;var M=function(n){var e=n.items;return(0,d.jsx)("ul",{children:e.map((function(n){var e=n.id,t=n.actions,i=(0,s.Z)(n,I);return(0,d.jsx)(F,(0,a.Z)((0,a.Z)({},i),{},{forwardedAs:"li",actions:t&&(0,d.jsx)(v.Z,{items:t},void 0)}),e)}))},void 0)},V=(0,l.forwardRef)((function(n,e){var t=n.icon,i=n.name,r=n.count,o=n.actions,c=n.items,u=n.onViewAll,p=n.loading,y=n.noItemsText,P=n.error,k=(0,s.Z)(n,R),I=(0,b.Z)(),F=(0,l.useMemo)((function(){return p?(0,d.jsx)(_.Z,{placement:"local",message:"string"===typeof p?p:void 0},void 0):P?(0,d.jsx)(T.Z,(0,a.Z)({},!0===P?{}:P),void 0):c.length>0?(0,d.jsx)(M,{items:c},void 0):(0,d.jsx)(w.Z,{message:y},void 0)}),[p,c,y,P]);return(0,d.jsxs)(g.Z,(0,a.Z)((0,a.Z)({ref:e},k),{},{children:[(t||i||"number"===typeof r||o)&&(0,d.jsxs)(x.Z,{children:[(0,d.jsxs)(Z.Z,{container:{alignItems:"center",gap:1},children:[t&&(0,d.jsx)(f.ZP,{name:t},void 0),i&&(0,d.jsx)(h.Z,{variant:"h2",children:i},void 0),"number"===typeof r&&(0,d.jsx)(m.Z,{children:r},void 0)]},void 0),o&&(0,d.jsx)(v.Z,{items:o},void 0)]},void 0),(0,d.jsx)(A,{loading:p,children:F},void 0),!P&&"number"===typeof r&&r>c.length&&u&&(0,d.jsx)(j.Z,{justify:"center",children:(0,d.jsx)(C.Z,{variant:"link","aria-label":i?I("view_all_noun",[i.toLowerCase()]):I("view_all"),onClick:u,children:I("view_all")},void 0)},void 0)]}),void 0)}));e.ZP=V},4016:function(n,e,t){t.d(e,{Z:function(){return R}});var i,r,o=t(1413),a=t(44925),s=t(30168),c=t(80184),d=t(72791),l=t(16444),u=t(21750),v=t(80068),Z=t(41865),h=t(41976),m=t(41878),f=t(12616),p=t(1004),g=t(39116),x=t(65739),j=t(37260),w=t(36862),y=t(80677),b=["name","avatar","meta","actions","content"],P=l.ZP.ul((function(n){var e=n.theme,t=n.hasFooter;return(0,l.iv)(i||(i=(0,s.Z)(["\n    ","\n  "])),t&&(0,l.iv)(r||(r=(0,s.Z)(["\n      > li:last-child {\n        border-bottom: 0.0625rem solid ",";\n      }\n    "])),e.base.palette["border-line"]))}));P.defaultProps=w.ns;var k,_=function(n){var e=n.name,t=n.avatar,i=n.meta,r=n.actions,s=n.content,d=(0,a.Z)(n,b),l=(0,c.jsx)(h.ZP,{visual:t,primary:e,secondary:i,actions:s?null:r},void 0);return(0,c.jsx)(m.Z,(0,o.Z)((0,o.Z)({container:{direction:"column",gap:2},item:{grow:1},as:y.qC,forwardedAs:"li"},d),{},{children:s?(0,c.jsxs)(c.Fragment,{children:[l,s]},void 0):l}),void 0)},C=(0,d.forwardRef)((function(n,e){var t=n.items,i=n.hasFooter,r=void 0!==i&&i;return(0,c.jsx)(m.Z,{container:{direction:"column"},as:P,hasFooter:r,ref:e,children:t.map((function(n,e){return(0,d.createElement)(_,(0,o.Z)((0,o.Z)({},n),{},{key:"".concat(e+1)}))}))},void 0)})),T=["items","headerText","headerVisual","headerSecondary","count","onExpandToggle","emptyPlaceholder"],I=(0,l.ZP)(u.Z)((function(n){var e=n.theme;return n.openItem?(0,l.iv)(k||(k=(0,s.Z)(["\n        box-shadow: ",";\n      "])),e.base.shadow.low):null})),R=function(n){var e=n.items,t=void 0===e?[]:e,i=n.headerText,r=n.headerVisual,s=n.headerSecondary,l=n.count,u=n.onExpandToggle,w=n.emptyPlaceholder,y=(0,a.Z)(n,T),b=t.find((function(n){return n.content})),P=(0,v.Z)(),k=(0,d.useMemo)((function(){return!b&&"number"===typeof l&&l>3}),[b,l]),R=(0,d.useMemo)((function(){return b?(0,c.jsx)(_,(0,o.Z)({},b),void 0):(0,c.jsx)(C,{items:t,hasFooter:k},void 0)}),[t,b]);return(0,c.jsxs)(I,(0,o.Z)((0,o.Z)({},y),{},{openItem:!!b,children:[!b&&(0,c.jsx)(Z.Z,{children:(0,c.jsx)(h.ZP,{visual:r,primary:(0,c.jsxs)(m.Z,{container:{alignItems:"center",gap:1},children:[(0,c.jsx)(f.Z,{variant:"h2",children:i},void 0),(0,c.jsx)(p.Z,{children:null!==l&&void 0!==l?l:null},void 0)]},void 0),secondary:s},void 0)},void 0),(0,c.jsx)(g.Z,{children:t.length>0?R:w},void 0),k&&(0,c.jsx)(x.Z,{justify:"center",children:(0,c.jsx)(j.Z,{variant:"link","aria-label":P(l&&l>t.length?"show_more":"show_less",["tasks"]),onClick:function(n){if(null===u||void 0===u||u(),l&&l<=t.length){var e=n.currentTarget;requestAnimationFrame((function(){e.getBoundingClientRect().top<0&&e.scrollIntoView()}))}},children:P(l&&l>t.length?"show_more":"show_less")},void 0)},void 0)]}),void 0)}}}]);
//# sourceMappingURL=41903.7bb9eb2a.chunk.js.map