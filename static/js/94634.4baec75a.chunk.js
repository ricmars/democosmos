"use strict";(self.webpackChunkdemocosmos=self.webpackChunkdemocosmos||[]).push([[94634,89740,48346],{94634:function(n,e,t){t.r(e),t.d(e,{default:function(){return $}});var a,r,i,s,o=t(29439),c=t(72791),l=t(1413),u=t(44925),d=t(93433),f=t(30168),g=t(80184),m=t(16444),Z=t(94342),h=t(36862),p=t(51633),v=t(90065),x=t(80068),b=t(63837),j=t(37260),w=t(14472),k=t(25935),P=t(16245),C=t(85051),y=t(91062),T=t(85560),S=t(41878),E=t(97451),_=t(27132),R=t(21750),D=t(41865),M=t(12616),L=t(1004),N=t(73180),B=t(39116),I=t(65739),A=t(48346),F=t(75528),U=["tags","availableTags","loading","error","onSearch","onTagClick","onEditTags"];(0,Z.q5)(A);var q=m.ZP.article((function(n){var e=n.isLoading,t=n.theme,i=n.viewAll;return(0,m.iv)(a||(a=(0,f.Z)(["\n      "," {\n        max-height: ",";\n        overflow-y: hidden;\n      }\n\n      "," {\n        margin-block-start: ",";\n      }\n\n      "," {\n        cursor: pointer;\n      }\n\n      "," + "," {\n        margin-inline-start: 0;\n      }\n\n      ","\n    "])),B.e,i?"fit-content":"10rem",I.M,t.base.spacing,E.w,E.w,E.w,e&&(0,m.iv)(r||(r=(0,f.Z)(["\n        & > "," {\n          height: 4rem;\n        }\n      "])),B.e))}));q.defaultProps=h.ns;var z=m.ZP.div(i||(i=(0,f.Z)(["\n  width: 40ch;\n"]))),V=(0,m.ZP)(p.ZP)((function(n){var e=n.theme;return(0,m.iv)(s||(s=(0,f.Z)(["\n    padding-block-end: calc(2 * ",");\n  "])),e.base.spacing)}));V.defaultProps=h.ns;var H=function(n){var e=n.tags,t=n.availableTags,a=void 0===t?[]:t,r=n.onSearch,i=n.onEditTags,s=(0,v.Z)().dismiss,l=(0,c.useRef)(null),u=(0,c.useState)(""),f=(0,o.Z)(u,2),m=f[0],Z=f[1],h=(0,c.useState)(""),p=(0,o.Z)(h,2),P=p[0],C=p[1],y=(0,c.useState)([]),T=(0,o.Z)(y,2),S=T[0],E=T[1],_=(0,c.useState)([]),R=(0,o.Z)(_,2),D=R[0],M=R[1],L=(0,c.useState)(!0),N=(0,o.Z)(L,2),B=N[0],I=N[1],A=(0,x.Z)(),U=!!m&&!(null===D||void 0===D||!D.length),q=(0,c.useMemo)((function(){return S.map((function(n){var e=n.text;return{id:e,text:e}}))}),[S]);(0,c.useEffect)((function(){U&&I(!0)}),[U]),(0,c.useEffect)((function(){E(e.map((function(n){return{text:n}})))}),[e]),(0,c.useEffect)((function(){var n=a.filter((function(n){return!S.some((function(e){return e.text===n}))})).map((function(n){return{id:n,primary:n}}));!m||n.some((function(n){return n.id===m}))||S.some((function(n){return n.text===m}))||n.push({id:"custom:".concat(m),primary:A("use_input_value",[m])}),M(n)}),[a,m,S]);var H=function(n){C(""),Z(n),null===r||void 0===r||r(n)},K=function(n){n&&!S.find((function(e){return e.text===n}))&&(D.find((function(e){return e.id===n}))?E((function(e){return[].concat((0,d.Z)(e),[{text:n}])})):E((function(e){return[].concat((0,d.Z)(e),[{text:n,newTag:!0}])})),H(""))};return(0,g.jsxs)(b.Z,{heading:A("edit_tags"),actions:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(j.ZP,{onClick:s,children:A("cancel")}),(0,g.jsx)(j.ZP,{variant:"primary",onClick:function(){i(S).then(s).catch((function(n){n instanceof Error?C(n.message||A("unknown_error")):C(A("unknown_error"))}))},children:A("submit")})]}),children:[P&&(0,g.jsx)(V,{id:"edit-tags-error",variant:"urgent",messages:[P],onDismiss:function(){C("")}}),(0,g.jsx)(F.Z,{ref:l,selected:q,value:m,onChange:function(n){H(n.target.value.trim())},onRemove:function(n,e){if(S[e].text===n){var t=(0,d.Z)(S);t.splice(e,1),E(t),C("")}},onBlur:function(){I(!0),H("")},onPaste:function(n){n.preventDefault(),n.clipboardData.getData("Text").split(" ").forEach((function(n){K(n)}))},onKeyDown:function(n){" "===n.key&&K(m)},onSelectedBlur:function(){I(!0)},onSelectedFocus:function(){I(!1)},pauseDescendantEvaluation:B,autoFocus:!0}),(0,g.jsx)(w.Z,{as:z,show:U,target:l.current,placement:"bottom-start",onMouseDown:function(n){return n.preventDefault()},children:(0,g.jsx)(k.Z,{role:"listbox",mode:"action",items:D,focusControlEl:l.current||void 0,onItemClick:function(n){if(n.includes("custom:")){var e=n.replace("custom:","");S.some((function(n){return n.text===e}))||E((function(n){return[].concat((0,d.Z)(n),[{text:e,newTag:!0}])}))}else E((function(e){return[].concat((0,d.Z)(e),[{text:n}])}));H("")},arrowNavigationUnsupported:!0})})]})},K=(0,c.forwardRef)((function(n,e){var t=n.tags,a=n.availableTags,r=n.loading,i=n.error,s=n.onSearch,d=n.onTagClick,f=n.onEditTags,m=(0,u.Z)(n,U),h=(0,P.Z)().create,p=(0,c.useRef)(),v=(0,c.useRef)(null),b=(0,c.useRef)(null),w=(0,C.Z)(v,e),k=(0,c.useState)(!1),A=(0,o.Z)(k,2),F=A[0],z=A[1],V=(0,c.useState)(!1),K=(0,o.Z)(V,2),O=K[0],X=K[1],$=(0,x.Z)();(0,c.useEffect)((function(){v.current&&b.current&&(b.current.getBoundingClientRect().bottom>v.current.getBoundingClientRect().bottom?z(!0):z(!1))}),[v.current,b.current,t]),(0,c.useEffect)((function(){var n,e;f?null===(n=p.current)||void 0===n||n.update({tags:t,availableTags:a,onSearch:s,onEditTags:f}):null===(e=p.current)||void 0===e||e.dismiss()}),[a,t,s,f]);var J=(0,c.useMemo)((function(){return r?(0,g.jsx)(y.Z,{placement:"local"}):i?"boolean"===typeof i?(0,g.jsx)(T.Z,{}):"string"===typeof i?(0,g.jsx)(T.Z,{message:i}):(0,g.jsx)(T.Z,(0,l.Z)({},i)):t.length>0?(0,g.jsx)(S.Z,{ref:b,container:{gap:1,wrap:"wrap"},children:t.map((function(n){return(0,g.jsx)(E.Z,{onClick:function(){return null===d||void 0===d?void 0:d(n)},children:n},n)}))}):(0,g.jsx)(_.Z,{})}),[r,i,t]);return(0,g.jsxs)(R.Z,(0,l.Z)((0,l.Z)({ref:w},m),{},{as:q,viewAll:O,isLoading:r,children:[(0,g.jsxs)(D.Z,{children:[(0,g.jsxs)(S.Z,{container:{alignItems:"center",gap:1},children:[(0,g.jsx)(Z.ZP,{name:"tag"}),(0,g.jsx)(M.Z,{variant:"h3",children:$("tags")}),(0,g.jsx)(L.Z,{children:t.length})]}),(0,g.jsx)(N.Z,{items:f?[{id:"editTags",text:$("edit"),icon:"pencil",onClick:function(){f&&(p.current=h(H,{tags:t,availableTags:a,onSearch:s,onEditTags:f}))},disabled:!!i}]:[],contextualLabel:$("tags")})]}),(0,g.jsx)(B.Z,{children:J}),F&&(0,g.jsx)(I.Z,{justify:"center",children:(0,g.jsx)(j.ZP,{variant:"link",onClick:function(){return X((function(n){return!n}))},children:$(O?"view_less":"view_all")})})]}))})),O=t(75613),X=t(49010);function $(n){var e=(0,c.useState)(),t=(0,o.Z)(e,2),a=t[0],r=t[1],i=(0,c.useState)(!1),s=(0,o.Z)(i,2),l=s[0],u=s[1],d=(0,c.useState)(0),f=(0,o.Z)(d,2),m=f[0],Z=f[1],h="".concat((0,O.iZ)(n.casetypeid).toUpperCase(),"%20").concat(n.caseid.toUpperCase());h=h.replace("-".concat(n.casetypeid.toUpperCase(),"%20"),"%20"),(0,c.useEffect)((function(){0!==m||l||(0,X.rQ)("cases","".concat(h,"/tags")).then((function(e){var t=e.tagsList;n.utilityCtx("Tags",{iconName:"tag",count:t.length}),r(t),u(!0)}))}),[h,m,l,n]);return(0,g.jsx)(K,{tags:a?a.map((function(n){var e;return null!==(e=n.tagName)&&void 0!==e?e:n})):[],availableTags:[],loading:!a,onEditTags:function(e){return new Promise((function(t){var i={};a&&a.forEach((function(n){i[n.tagName]=n.tagKey}));for(var s=[],c=e.map((function(n){return n.newTag?s.push({Name:n.text}):delete i[n.text],n.text})),l=0,d=0,f=Object.entries(i);d<f.length;d++){var g=(0,o.Z)(f[d],2)[1];l++,(0,X.$S)("cases","".concat(h,"/tags/").concat(g),"","DELETE").then((function(){Z((function(n){return n-1}))}))}s.length>0&&(l++,(0,X.$S)("cases","".concat(h,"/tags"),JSON.stringify({tags:s})).then((function(){Z((function(n){return n-1}))}))),n.utilityCtx("Tags",{iconName:"tag",count:c.length}),r(c),Z(l),u(!1),t()}))},onSearch:function(n){}})}},51633:function(n,e,t){t.d(e,{P:function(){return nn},ZP:function(){return ln}});var a,r,i,s,o,c=t(29439),l=t(1413),u=t(44925),d=t(30168),f=t(80184),g=t(72791),m=t(16444),Z=t(66010),h=t(36862),p=t(37260),v=t(87517),x=t(52288),b=t(38637),j=t(80068),w=t(85051),k=t(41878),P=t(12616),C=t(2461),y=t(85477),T=t(1004),S=t(94342),E=t(78189),_=t(20029),R=t(79602),D=t(95258),M=t(89740),L=t(96041),N=t(52278),B=t(44896),I=["items","variant","count","onToggleShow","depth","heading"],A=["decimal","lower-alpha","lower-roman"],F=["disc","circle","square"],U=m.ZP.div((function(n){var e=n.theme,t=n.depth,o=n.listType,c=(0,B.MX)(e.base["font-size"],e.base["font-scale"]);return(0,m.iv)(a||(a=(0,d.Z)(["\n    padding-inline-start: calc(2 * ",");\n\n    h3 {\n      margin-block-end: calc(2 * ",");\n    }\n\n    & > ol,\n    & > ul {\n      list-style-type: ",";\n\n      & > li {\n        &:not(:last-child) {\n          margin-block-end: calc(0.5 * ",");\n        }\n\n        ","\n      }\n\n      ","\n    }\n\n    & & > ol,\n    & & > ul {\n      padding-inline-start: 0;\n    }\n  "])),e.base.spacing,e.base.spacing,o,e.base.spacing,t>0?(0,m.iv)(r||(r=(0,d.Z)(["\n              font-size: ",";\n            "])),c.xs):(0,m.iv)(i||(i=(0,d.Z)(["\n              &::marker {\n                font-weight: ",";\n              }\n            "])),e.base["font-weight"].bold),0===t&&(0,m.iv)(s||(s=(0,d.Z)(["\n        padding-inline-start: calc(2 * ",");\n      "])),e.base.spacing))}));U.defaultProps=h.ns;var q,z,V,H,K,O,X=m.ZP.li(o||(o=(0,d.Z)(["\n  list-style: none;\n"]))),$=(0,g.forwardRef)((function(n,e){var t=n.items,a=n.variant,r=n.count,i=n.onToggleShow,s=n.depth,o=void 0===s?0:s,c=n.heading,d=(0,u.Z)(n,I),g=(0,j.Z)(),m=t.map((function(n,e){return Array.isArray(n)?(0,f.jsx)(X,{children:(0,f.jsx)($,{depth:o+1,variant:a,items:n})},e):(0,f.jsx)("li",{children:n},e)}));return(0,f.jsxs)(U,(0,l.Z)((0,l.Z)({},d),{},{ref:e,depth:o,listType:("ordered"===a?A:F)[o%3],children:[c&&(0,f.jsx)(P.Z,{variant:"h3",children:c}),"ordered"===a?(0,f.jsx)("ol",{children:m}):(0,f.jsx)("ul",{children:m}),r&&i&&(0,f.jsx)(p.ZP,{variant:"link",onClick:i,children:r>t.flat().length?g("show_more"):g("show_less")})]}))})),J=$,Q=(0,g.forwardRef)((function(n,e){return(0,f.jsx)(J,(0,l.Z)((0,l.Z)({},n),{},{variant:"unordered",ref:e}))})),G=["label","description","action"],W=["items"],Y=["variant","headingTag","messages","onDismiss","handle"];(0,S.q5)(E,_,R,D,M,L);var nn=m.ZP.div((function(n){var e=n.headingTag,t=n.theme;return(0,m.iv)(q||(q=(0,d.Z)(["\n      border-radius: ",";\n\n      &:has(",":focus) {\n        box-shadow: ",";\n      }\n    "])),t.components.card["border-radius"],e,t.base.shadow.focus)}));nn.defaultProps=h.ns;var en=m.ZP.div((function(n){var e=n.variant,t=n.theme,a=t.components.banner[e].background,r=(0,v.Z)((function(){return(0,Z.mj)(a,t.base.palette["primary-background"])>=3?t.base.palette["primary-background"]:(0,Z.XV)(a)}));return(0,m.iv)(z||(z=(0,d.Z)(["\n    background-color: ",";\n    color: ",";\n    border-start-start-radius: inherit;\n    border-end-start-radius: inherit;\n    border: 0.0625rem solid ",";\n    border-inline-end: none;\n    font-size: 1.25rem;\n  "])),a,r,t.base.palette["border-line"])}));en.defaultProps=h.ns;var tn=m.ZP.div((function(n){var e=n.theme,t=(0,b.Z)().rtl;return(0,m.iv)(V||(V=(0,d.Z)(["\n    min-height: 2.125rem;\n\n    ","[aria-expanded] {\n      "," {\n        transition: rotate "," ",";\n      }\n\n      &[aria-expanded='true'] "," {\n        rotate: 90deg;\n      }\n\n      &[aria-expanded='false'] "," {\n        rotate: ","deg;\n      }\n    }\n  "])),p.Sn,S.xL,e.base.animation.speed,e.base.animation.timing.ease,S.xL,S.xL,t?180:0)}));tn.defaultProps=h.ns;var an=m.ZP.div((function(n){var e=n.expandable,t=n.theme;return(0,m.iv)(H||(H=(0,d.Z)(["\n    background: ",";\n    padding-block: calc(0.5 * ",");\n    padding-inline-start: calc("," * ",");\n    padding-inline-end: calc(0.5 * ",");\n    border: 0.0625rem solid ",";\n    border-inline-start: none;\n    border-start-end-radius: inherit;\n    border-end-end-radius: inherit;\n  "])),t.components.card.background,t.base.spacing,e?.5:2,t.base.spacing,t.base.spacing,t.base.palette["border-line"])}));an.defaultProps=h.ns;var rn=(0,m.ZP)(Q)((function(n){var e=n.theme;return(0,m.iv)(K||(K=(0,d.Z)(["\n    padding-block-end: calc(0.5 * ",");\n    padding-inline-start: calc(5 * ",");\n    padding-inline-end: calc(2 * ",");\n  "])),e.base.spacing,e.base.spacing,e.base.spacing)}));rn.defaultProps=h.ns;var sn=m.ZP.span(O||(O=(0,d.Z)(["\n  overflow-wrap: break-word;\n  list-style: none;\n"])));sn.defaultProps=h.ns;var on=(0,g.forwardRef)((function(n,e){var t=n.label,a=n.description,r=n.action,i=(0,u.Z)(n,G);return(0,f.jsxs)(sn,(0,l.Z)((0,l.Z)({},i),{},{ref:e,children:[(0,f.jsx)("span",{children:t}),a&&(0,f.jsxs)(f.Fragment,{children:[" ",(0,f.jsx)(P.Z,{variant:"secondary",children:a})]}),r&&(0,f.jsxs)(f.Fragment,{children:[" ",(0,f.jsx)(P.Z,{variant:"secondary",children:(0,f.jsx)(p.ZP,(0,l.Z)((0,l.Z)({variant:"link",href:r.href,onClick:r.onClick},r),{},{children:r.text}))})]})]}))})),cn=function n(e){var t=0;return[e.flatMap((function(e){if(t+=1,"string"===typeof e)return[(0,f.jsx)(on,{label:e})];if(e.items){var a=e.items,r=(0,u.Z)(e,W),i=n(a),s=(0,c.Z)(i,2),o=s[0],d=s[1];return t+=d,[(0,f.jsx)(on,(0,l.Z)({},r)),o]}return[(0,f.jsx)(on,(0,l.Z)({},e))]})),t]},ln=(0,g.forwardRef)((function(n,e){var t,a,r,i,s=n.variant,o=n.headingTag,d=void 0===o?"h2":o,m=n.messages,Z=n.onDismiss,h=n.handle,v=(0,u.Z)(n,Y),b=(0,g.useMemo)((function(){return cn(m)}),[m]),E=(0,c.Z)(b,2),_=E[0],R=E[1],D=(0,j.Z)(),M=(0,g.useState)(R>2),L=(0,c.Z)(M,2),B=L[0],I=L[1],A=(0,w.Z)(e);switch(s){case"urgent":r=D("error"),a="warn-solid",t="alert",i="assertive";break;case"warning":r=D("warning"),a="flag-wave-solid",t="alert",i="assertive";break;case"success":r=D("success"),a="check",t="none",i="polite";break;default:r=D("information"),a="information-solid",t="none",i="polite"}return(0,g.useImperativeHandle)(h,(function(){return{focus:function(){A.current&&(0,x.Z)(A.current,r)}}}),[]),(0,f.jsxs)(C.Z,(0,l.Z)((0,l.Z)({},v),{},{as:nn,container:{cols:"2rem minmax(0, 1fr)"},role:t,"aria-live":i,headingTag:d,ref:A,children:[(0,f.jsx)(k.Z,{as:en,container:{justify:"center",alignItems:"start",pad:[1.5,0]},variant:s,children:(0,f.jsx)(S.ZP,{name:a})}),1===R?(0,f.jsxs)(k.Z,{container:{alignItems:"start"},as:an,children:[(0,f.jsx)(N.Z,{as:d,children:"".concat(r," ").concat(R)}),(0,f.jsx)(k.Z,{item:{alignSelf:"center",grow:1},as:"ul",children:"string"===typeof m[0]?(0,f.jsx)(on,{label:m[0],as:"li"}):(0,f.jsx)(on,(0,l.Z)((0,l.Z)({},m[0]),{},{as:"li"}))}),Z&&(0,f.jsx)(p.ZP,{onClick:Z,label:D("dismiss"),"aria-label":D("banner_dismiss_button_label_a11y"),variant:"simple",icon:!0,children:(0,f.jsx)(S.ZP,{name:"times"})})]}):(0,f.jsxs)(an,{expandable:!0,children:[(0,f.jsxs)(C.Z,{as:tn,container:{cols:"auto 1fr auto",areas:'"toggle heading dismiss"',gap:.5},children:[(0,f.jsxs)(C.Z,{container:{cols:"min-content min-content",gap:.5,alignItems:"center"},item:{area:"heading",alignSelf:"center"},as:P.Z,forwardedAs:d,variant:"h2",children:[r," ",(0,f.jsx)(T.Z,{children:R})]}),(0,f.jsx)(C.Z,{item:{area:"toggle",alignSelf:"center"},children:(0,f.jsx)(p.ZP,{onClick:function(){I((function(n){return!n}))},label:D(B?"expand":"collapse"),"aria-expanded":B?"false":"true",variant:"simple",icon:!0,children:(0,f.jsx)(S.ZP,{name:"caret-right"})})}),(0,f.jsx)(C.Z,{item:{area:"dismiss",alignSelf:"center"},children:Z&&(0,f.jsx)(p.ZP,{onClick:Z,label:D("dismiss"),"aria-label":D("banner_dismiss_button_label_a11y"),variant:"simple",icon:!0,children:(0,f.jsx)(S.ZP,{name:"times"})})})]}),(0,f.jsx)(y.Z,{collapsed:B,children:(0,f.jsx)(rn,{items:_})})]})]}))}))},89740:function(n,e,t){t.r(e),t.d(e,{Component:function(){return s},name:function(){return i},set:function(){return r},viewBox:function(){return o}});var a=t(80184),r="budicon",i="information-solid",s=function(){return(0,a.jsx)("path",{fillRule:"evenodd",d:"M4.37 20.63C2.122 18.386 1 15.69 1 12.5c0-3.19 1.123-5.885 3.37-8.13C6.614 2.122 9.31 1 12.5 1c3.19 0 5.885 1.123 8.13 3.37C22.878 6.614 24 9.31 24 12.5c0 3.19-1.123 5.885-3.37 8.13C18.386 22.878 15.69 24 12.5 24c-3.19 0-5.885-1.123-8.13-3.37Zm9.28-15.49c.843 0 1.61.69 1.61 1.61 0 .92-.69 1.61-1.61 1.61-.843 0-1.61-.69-1.61-1.61 0-.92.69-1.61 1.61-1.61ZM12.1 19.4c-1.263 0-2.175-1.04-1.824-2.274l1.5-4.36c.14-.51.359-1.437-.132-1.437-.328 0-.728.164-1.201.491.35-1.09 1.333-1.62 2.456-1.62 1.264 0 2.176 1.04 1.825 2.274l-1.5 4.36c-.14.51-.17 1.338.322 1.338.328 0 .665-.13 1.011-.392-.35 1.09-1.333 1.62-2.456 1.62Z"})},o="0 0 25 25"},48346:function(n,e,t){t.r(e),t.d(e,{Component:function(){return s},name:function(){return i},set:function(){return r},viewBox:function(){return o}});var a=t(80184),r="budicon",i="tag",s=function(){return(0,a.jsx)("path",{d:"M19.271 5.89 13.381.384C13.044.143 12.71 0 12.374 0c-.335 0-.67.144-1.005.383L5.479 5.89C5.144 6.226 5 6.56 5 6.945v16.092c0 .431.144.766.431 1.054.288.287.623.43 1.054.43h11.781c.432 0 .767-.143 1.054-.43.288-.288.432-.623.432-1.054V6.945c0-.383-.144-.72-.48-1.054Zm-.526 1.055v16.092c0 .335-.144.479-.48.479H6.486c-.336 0-.48-.144-.48-.48V6.946c0-.144.048-.24.144-.336l5.89-5.507a.434.434 0 0 1 .336-.144c.144 0 .24.047.335.144l5.89 5.507a.434.434 0 0 1 .145.336Zm-4.647-1.342a2.352 2.352 0 0 0-1.724-.719c-.67 0-1.245.24-1.724.72-.479.478-.719 1.053-.719 1.771 0 .67.24 1.245.719 1.724a2.35 2.35 0 0 0 1.724.719c.67 0 1.246-.24 1.724-.719.48-.48.72-1.054.72-1.724 0-.719-.24-1.293-.72-1.772Zm-.67 2.778a1.408 1.408 0 0 1-1.054.431 1.41 1.41 0 0 1-1.054-.43c-.287-.24-.43-.576-.43-1.006 0-.43.143-.767.43-1.054a1.408 1.408 0 0 1 1.054-.431c.431 0 .767.143 1.054.43.288.288.431.624.431 1.055 0 .431-.143.766-.43 1.005Z"})},o="0 0 25 25"}}]);
//# sourceMappingURL=94634.4baec75a.chunk.js.map