(this.webpackJsonpdemoapp2p=this.webpackJsonpdemoapp2p||[]).push([[2,161,162],{1028:function(e,n,t){"use strict";t.d(n,"a",(function(){return m}));var o,r=t(3),i=t(7),a=t(4),c=t(1),d=t(0),l=t(2),s=t(9),u=t(10),b=t(26),f=t(19),v=t(45),j=t(43),O=["id","onSelect","onRemove","children","onClick","onKeyUp"];Object(f.c)(v);var m=l.e.div((function(e){var n=e.theme.components.badges.selectable.base,t=n.foreground,r=n.background,i=e.theme.base.palette.dark,c=e.theme.base["border-radius"],d=e.theme.base.spacing,v=Object(u.q)((function(){return Object(s.f)(.15,r,"#ffffff")})),j=Object(u.q)((function(){return Object(s.f)(.3,r,"#ffffff")})),O=Object(u.q)((function(){return Object(s.l)(.45,i)}));return Object(l.d)(o||(o=Object(a.a)(["\n    background: ",";\n    border: 0 solid transparent;\n    border-radius: calc("," * ",");\n    color: ",";\n    cursor: default;\n    display: inline-flex;\n    align-items: center;\n    font-size: 0.75rem;\n    height: ","rem;\n    padding: 0 ",";\n    min-width: max-content;\n    line-height: 1;\n\n    &:hover {\n      color: ",";\n      box-shadow: inset 0 0 0 0.0625rem ",";\n\n      "," {\n        color: ",";\n      }\n    }\n\n    &:active {\n      box-shadow: inset 0 0 0 0.0625rem ",";\n    }\n\n    &:focus {\n      color: ",";\n      box-shadow: 0 0 0.5rem -0.125rem ",", inset 0 0 0 0.125rem ",";\n      outline: none;\n\n      "," {\n        color: ",";\n      }\n    }\n\n    "," {\n      margin-inline-start: ",";\n      height: 1em;\n      width: 1em;\n    }\n  "])),v,1.125,c,t,1.125,d,e.theme.base.palette.interactive,j,b.a,e.theme.base.palette.interactive,r,e.theme.base.palette.interactive,O,r,b.a,e.theme.base.palette.interactive,f.a,d)})),h=Object(d.forwardRef)((function(e,n){var t=Object(j.a)(n),o=e.id,a=e.onSelect,d=e.onRemove,l=e.children,s=e.onClick,u=e.onKeyUp,v=Object(i.a)(e,O);return Object(c.jsxs)(b.b,Object(r.a)(Object(r.a)({role:"button",tabIndex:"0",as:m,ref:t,onClick:function(e){null===s||void 0===s||s(e),null===a||void 0===a||a(o)},onKeyUp:function(e){null===u||void 0===u||u(e),"Enter"===e.key&&(null===a||void 0===a||a(o)),"Backspace"!==e.key&&"Delete"!==e.key||null===d||void 0===d||d(o)}},v),{},{children:[l,Object(c.jsx)(b.b,{tabIndex:"-1",onClick:function(e){e.preventDefault(),e.stopPropagation(),null===d||void 0===d||d(o)},children:Object(c.jsx)(f.b,{name:"times"},void 0)},void 0)]}),void 0)}));n.b=h},1030:function(e,n,t){"use strict";var o,r=t(3),i=t(7),a=t(4),c=t(1),d=t(0),l=t(2),s=t(8),u=t(1028),b=t(1015),f=t(25),v=t(43),j=t(1045),O=t(121),m=t(10),h=t(57),p=["selected","value","onRemove","onChange","onKeyDown","actions","readOnly","disabled","status","placeholder","autoFocus"],g=l.e.div((function(e){var n=e.theme,t=n.components,r=t["form-control"],i=t.input.height,c=n.base;return Object(l.d)(o||(o=Object(a.a)(["\n    min-height: ",";\n\n    @media (pointer: coarse) {\n      min-height: ",";\n    }\n\n    &:focus-within {\n      border-color: ",";\n      box-shadow: ",";\n    }\n\n    &:hover:not([readonly]):not([disabled]):focus-within {\n      border-color: transparent;\n    }\n\n    ul {\n      list-style: none;\n    }\n\n    input {\n      min-width: 0;\n      width: 100%;\n      color: ",";\n      text-overflow: ellipsis;\n      margin-inline-start: ",";\n    }\n\n    input,\n    input:focus {\n      border: none;\n      outline: none;\n      flex-grow: 1;\n      background-color: transparent;\n\n      &:read-only {\n        cursor: default;\n      }\n    }\n\n    "," {\n      margin: calc(0.25 * ",");\n    }\n\n    > "," {\n      border-radius: calc("," * ",");\n      height: calc("," - 2 * ",");\n    }\n  "])),i,c["hit-area"]["finger-min"],r[":focus"]["border-color"],r[":focus"]["box-shadow"],r["foreground-color"],c.spacing,u.a,c.spacing,h.a,c["border-radius"],r["border-radius"],i,r["border-width"])}));g.defaultProps=s.b;var w=Object(d.forwardRef)((function(e,n){var t=e.selected,o=void 0===t?[]:t,a=e.value,l=e.onRemove,s=e.onChange,h=e.onKeyDown,w=e.actions,x=e.readOnly,y=e.disabled,k=e.status,C=e.placeholder,R=e.autoFocus,A=Object(i.a)(e,p),E=Object(v.a)(n),D=Object(d.useRef)(null);Object(j.a)(D,{selector:'div[role="button"], input',cycle:!1,dir:"left-right"});var S=Object(d.useCallback)((function(e){var n=o.length-1;"Backspace"===e.key&&!a&&o.length>0&&(null===l||void 0===l||l(o[n].id,n)),null===h||void 0===h||h(e)}),[h,a,o]),I=Object(O.a)().end;return Object(c.jsxs)(f.a,Object(r.a)(Object(r.a)({as:g,forwardedAs:b.a,container:{alignItems:"center"}},{readOnly:x,disabled:y,status:k}),{},{children:[Object(c.jsxs)(f.a,{ref:D,as:"ul",item:{grow:1},container:{alignItems:"center",wrap:"wrap"},onBlur:function(){var e;null===(e=D.current)||void 0===e||e.querySelectorAll('div[role="button"]').forEach((function(e){e.tabIndex=-1})),E.current&&(E.current.tabIndex=0)},children:[o.map((function(e,n){return Object(c.jsx)("li",{children:Object(c.jsx)(u.b,{id:e.id.toString(),disabled:x||y,status:k,onRemove:function(e){var t;null===l||void 0===l||l(e,n),null===(t=E.current)||void 0===t||t.focus()},onKeyDown:function(e){var t;"Backspace"===e.key&&e.preventDefault(),n===o.length-1&&e.key==="Arrow".concat(Object(m.a)(I))&&(null===(t=E.current)||void 0===t||t.focus())},children:e.text},void 0)},e.id)})),Object(c.jsx)(f.a,{as:"li",item:{grow:1},container:!0,children:Object(c.jsx)("input",Object(r.a)({size:5,ref:E,value:a,onChange:s||function(){},onKeyDown:S,readOnly:x||!s,placeholder:(null===o||void 0===o?void 0:o.length)?void 0:C,autoComplete:"off",autoFocus:R},A),void 0)},void 0)]},void 0),w]}),void 0)}));n.a=w},1045:function(e,n,t){"use strict";var o=t(5),r=t(0),i=t(10),a="\n  a[href],\n  button:enabled,\n  input[type='checkbox']:enabled,\n  input[type='radio']:enabled\n";n.a=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.cycle,c=void 0===t||t,d=n.selector,l=void 0===d?a:d,s=n.dir,u=void 0===s?"up-down":s,b="up-down"===u?["ArrowDown","ArrowUp"]:["ArrowRight","ArrowLeft"],f=Object(o.a)(b,2),v=f[0],j=f[1],O=Object(r.useCallback)((function(e){Array.from(e.querySelectorAll(l)).slice(1).forEach((function(e){e instanceof HTMLElement&&(e.checked||(e.tabIndex=-1))}))}),[l]),m=Object(r.useCallback)((function(n){if(["Home","End",v,j].includes(n.key)&&n.preventDefault(),i.f){var t=e.current;if(t){var o=Array.from(t.querySelectorAll(l)).filter((function(e){return e instanceof HTMLElement}));if(o.length){var r=t.getRootNode();if(r instanceof Document||r instanceof ShadowRoot){var a,d=o.indexOf(r.activeElement),s=o.length-1;if("Home"===n.key||n.key===v&&-1===d)a=0;else if("End"===n.key||n.key===j&&-1===d)a=s;else{if("Enter"===n.key)return void O(t);if(n.key===v)if(d===s){if(!c)return;a=0}else a=d+1;else{if(n.key!==j)return;if(0===d){if(!c)return;a=s}else a=d-1}}o[a].focus()}}}}}),[e.current,c,l]);Object(r.useEffect)((function(){var n=e.current;if(n)return O(n),n.addEventListener("keydown",m),function(){n.removeEventListener("keydown",m)}}),[e.current,l,m])}},1054:function(e,n,t){"use strict";var o,r=t(3),i=t(5),a=t(7),c=t(4),d=t(1),l=t(0),s=t(2),u=t(265),b=t(36),f=t(120),v=t(220),j=["children","name","disabled","onChange","readOnly","inline","autoStack","variant"],O=s.e.fieldset(o||(o=Object(c.a)(["\n  &[disabled] {\n    > "," {\n      opacity: unset;\n    }\n  }\n"])),u.a),m=Object(l.forwardRef)((function(e,n){var t=Object(f.a)(),o=e.children,c=e.name,s=void 0===c?t:c,m=e.disabled,h=e.onChange,p=e.readOnly,g=e.inline,w=void 0!==g&&g,x=e.autoStack,y=void 0===x||x,k=e.variant,C=void 0===k?"simple":k,R=Object(a.a)(e,j),A=Object(v.a)(),E=Object(i.a)(A,2),D=E[0],S=E[1],I=Object(l.useState)(w),P=Object(i.a)(I,2),q=P[0],z=P[1],_=Object(l.useRef)(w),B=Object(l.useRef)(0);return Object(l.useEffect)((function(){if(w&&D&&y){var e=new IntersectionObserver((function(e){e[0].intersectionRatio<1&&(e[0].rootBounds&&(B.current=e[0].rootBounds.width+1),_.current=!1,z(!1))}),{root:D,threshold:1}),n=new ResizeObserver((function(e){!_.current&&e[0].contentRect.width>B.current&&(_.current=!0,z(!0))}));return e.observe(D.lastChild),n.observe(D),function(){e.disconnect(),n.disconnect()}}}),[D,w,y]),Object(d.jsx)(u.b,Object(r.a)(Object(r.a)({},Object(r.a)({as:O,labelAs:"legend",ref:n,name:s,disabled:m},R)),{},{children:Object(d.jsx)(b.b,{ref:S,container:{colGap:1,rowGap:"card"===C?1:0,cols:q?"repeat(auto-fit, minmax(1ch, max-content))":"1fr"},children:l.Children.map(o,(function(e){return Object(l.cloneElement)(e,{name:s,disabled:m||e.props.disabled,readOnly:p||e.props.readOnly,variant:C,onChange:h?function(n){var t,o;p||e.props.readOnly||(null===(t=(o=e.props).onChange)||void 0===t||t.call(o,n),h(n))}:e.props.onChange})}))},void 0)}),void 0)}));m.defaultProps={required:!1,disabled:!1},n.a=m},1055:function(e,n,t){"use strict";var o,r,i,a,c,d,l,s,u,b,f=t(3),v=t(7),j=t(4),O=t(1),m=t(0),h=t(2),p=t(9),g=t(265),w=t(1015),x=t(8),y=t(10),k=t(121),C=t(120),R=t(43),A=t(154),E=t(23),D=["type","id","label","required","disabled","indeterminate","readOnly","variant","onClick","onKeyDown","status"],S=h.e.div((function(e){var n=e.theme,t=n.base,r=t.spacing,i=t.palette["primary-background"],a=n.components,c=a["form-field"],d=a["radio-check"],l=d.size,s=d["touch-size"],u=d["background-color"],b=d["border-color"],f=d["border-width"],v=e.status,O="error"===v?c.error["status-color"]:b,m=v&&c[v]?Object(y.q)((function(){return Object(p.f)(.8,i,c[v]["status-color"])})):u;return Object(h.d)(o||(o=Object(j.a)(["\n      display: flex;\n      flex-shrink: 0;\n      position: relative;\n      width: ",";\n      height: ",";\n      margin-inline-end: ",";\n      border: "," solid ",";\n      background-color: ",";\n\n      @media (pointer: coarse) {\n        width: ",";\n        height: ",";\n      }\n\n      &::after {\n        content: '';\n        display: none;\n      }\n    "])),l,l,r,f,O,m,s,s)}));S.defaultProps=x.b;var I=h.e.input((function(e){var n=e.theme,t=n.base["border-radius"],o=n.components,d=o["form-control"],l=d[":focus"],s=l["box-shadow"],u=l["border-color"],b=d[":read-only"]["background-color"],f=o["radio-check"][":checked"],v=f["background-color"],O=f["border-color"],m=o.checkbox["border-radius"],g=o["radio-button"]["border-radius"],w=e.readOnly?b:v,x=Object(y.q)((function(){return Object(p.i)(w)})),C="+ ".concat(A.a," ").concat(S),R=Object(k.a)().ltr;return Object(h.d)(r||(r=Object(j.a)(["\n    ","\n\n    ","\n\n    &:checked\n      ",",\n      &:checked:disabled\n      ",",\n      &[type='checkbox']:indeterminate\n      ",",\n      &[type='checkbox']:indeterminate:disabled\n      "," {\n      border-color: ",";\n      background-color: ",";\n\n      &::after {\n        display: block;\n      }\n    }\n\n    &[type='radio'] ",", &[type='radio'] ","::after {\n      border-radius: ",";\n    }\n\n    &[type='radio'] ","::after {\n      margin: auto;\n      width: 100%;\n      height: 100%;\n      background-color: ",";\n      transform: scale(0.4);\n    }\n\n    &[type='checkbox'] "," {\n      border-radius: min(calc("," * ","), 0.25rem);\n    }\n\n    &[type='checkbox']:not(:indeterminate) "," {\n      &::after {\n        width: 40%;\n        height: 75%;\n        ","\n        border-right: 0.15em solid ",";\n        border-bottom: 0.15em solid ",";\n      }\n    }\n\n    &[type='checkbox']:indeterminate "," {\n      display: flex;\n      &::after {\n        width: 90%;\n        height: 0.15em;\n        margin: auto;\n        background-color: ",";\n      }\n    }\n  "])),p.c,!(e.disabled||e.readOnly)&&Object(h.d)(i||(i=Object(j.a)(["\n      &:focus "," {\n        box-shadow: ",";\n        border-color: ",";\n      }\n    "])),C,s,u),C,C,C,C,e.readOnly?"inherit":O,w,C,C,g,C,x,C,t,m,C,R?Object(h.d)(a||(a=Object(j.a)(["\n              transform: rotate(45deg) translate(50%, -30%);\n            "]))):Object(h.d)(c||(c=Object(j.a)(["\n              transform: rotate(45deg) translate(-50%, 30%);\n            "]))),x,x,C,x)}));I.defaultProps=x.b;var P=h.e.div((function(e){var n=e.disabled,t=e.readOnly,o=e.theme,r=o.base,i=o.components,a=i["radio-check"].label,c=a.color,s=a["font-weight"],u=i["form-control"][":hover"]["border-color"],b=Object(E.a)(r["font-size"],r["font-scale"]);return Object(h.d)(d||(d=Object(j.a)(["\n      > "," {\n        cursor: pointer;\n        display: flex;\n        align-items: center;\n        font-weight: ",";\n        word-break: break-word;\n        font-size: ",";\n        color: ",";\n        margin: 0;\n        min-height: ",";\n\n        @media (pointer: coarse) {\n          min-height: ",";\n        }\n      }\n\n      ","\n    "])),A.a,s,b.s,c,r["hit-area"]["mouse-min"],r["hit-area"]["finger-min"],!(n||t)&&Object(h.d)(l||(l=Object(j.a)(["\n        &:not(:focus-within) > ",":hover "," {\n          border-color: ",";\n        }\n      "])),A.a,S,u))}));P.defaultProps=x.b;var q=h.e.label((function(e){var n=e.disabled,t=e.readOnly,o=e.status,r=e.theme,i=r.base,a=i.palette,c=i.shadow,d=i.spacing,l=r.components,f=l.card,v=l["form-field"],O=l["radio-check"].label,m=l["form-control"][":hover"]["border-color"],p="error"===o?v.error["status-color"]:a["border-line"];return Object(h.d)(s||(s=Object(j.a)(["\n      min-width: min-content;\n      align-items: start;\n      cursor: pointer;\n      background-color: ",";\n      border-radius: ",";\n      border: 0.0625rem solid ",";\n      padding: ",";\n\n      ","\n\n      ","\n\n    > "," {\n        display: grid;\n        grid-template-columns: auto 1fr;\n        color: ",";\n        font-weight: ",";\n      }\n    "])),f.background,f["border-radius"],p,d,n&&Object(h.d)(u||(u=Object(j.a)(["\n        cursor: not-allowed;\n      "]))),!(n||t)&&Object(h.d)(b||(b=Object(j.a)(["\n        :hover:not(:focus-within) {\n          border-color: ",";\n          "," "," {\n            border-color: ",";\n          }\n        }\n\n        :focus-within {\n          box-shadow: ",";\n          border-color: transparent;\n        }\n      "])),m,A.a,S,m,c.focus),A.a,O.color,O["font-weight"])}));q.defaultProps=x.b;var z=Object(m.forwardRef)((function(e,n){var t=Object(C.a)(),o=e.type,r=e.id,i=void 0===r?t:r,a=e.label,c=e.required,d=void 0!==c&&c,l=e.disabled,s=void 0!==l&&l,u=e.indeterminate,b=void 0!==u&&u,j=e.readOnly,h=void 0!==j&&j,p=e.variant,x=void 0===p?"simple":p,y=e.onClick,k=e.onKeyDown,A=e.status,E=Object(v.a)(e,D),z="radio"===o,_="card"===x,B=Object(R.a)(n);return Object(m.useEffect)((function(){!z&&B.current&&(B.current.indeterminate=!!b)}),[B,b,z]),Object(O.jsx)(g.b,{as:_?q:P,label:Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(S,{status:A,isRadio:z,as:w.a,required:d,disabled:s,readOnly:h},void 0),a]},void 0),labelAs:_?"div":void 0,id:i,required:d,disabled:s,readOnly:h,status:A,inline:!0,labelAfter:!0,children:Object(O.jsx)(I,Object(f.a)(Object(f.a)({},E),{},{id:i,type:o,required:d,disabled:s,readOnly:h,"aria-readonly":h,onClick:function(e){h&&e.preventDefault(),null===y||void 0===y||y(e)},onKeyDown:function(e){"checkbox"===o&&h&&" "===e.key&&e.preventDefault(),"radio"===o&&h&&e.key.includes("Arrow")&&e.preventDefault(),null===k||void 0===k||k(e)},ref:B}),void 0)},void 0)}));n.a=z},1056:function(e,n,t){"use strict";var o=t(3),r=t(1),i=t(0),a=t(1055),c=Object(i.forwardRef)((function(e,n){return Object(r.jsx)(a.a,Object(o.a)(Object(o.a)({},e),{},{type:"radio",ref:n}),void 0)}));c.defaultProps=a.a.defaultProps,n.a=c},1075:function(e,n,t){"use strict";var o,r,i,a=t(5),c=t(3),d=t(7),l=t(4),s=t(1),u=t(0),b=t(2),f=t(57),v=t(1017),j=t(25),O=t(19),m=t(63),h=t(225),p=t(8),g=t(47),w=t(23),x=["children","open","actions"],y=["children","name","actions","collapsible","defaultCollapsed"];Object(O.c)(m);var k=b.e.legend((function(e){var n=e.open,t=e.theme.base,i=t.spacing,a=t.animation;return Object(b.d)(o||(o=Object(l.a)(["\n    width: 100%;\n    margin-bottom: 0;\n    ","\n    transition: margin-block-end "," ",";\n\n    button "," {\n      transition: transform "," ",";\n    }\n\n    button[aria-expanded='true'] "," {\n      transform: rotate(90deg);\n    }\n    button[aria-expanded='false'] "," {\n      transform: rotate(0);\n    }\n  "])),n&&Object(b.d)(r||(r=Object(l.a)(["\n      margin-block-end: ",";\n    "])),i),a.speed,a.timing.ease,O.a,a.speed,a.timing.ease,O.a,O.a)}));k.defaultProps=p.b;var C=b.e.fieldset((function(e){var n=e.theme,t=n.base,o=t["font-size"],r=t["font-scale"],a=n.components.text,c=Object(w.a)(o,r);return Object(b.d)(i||(i=Object(l.a)(["\n      border: none;\n\n      "," "," {\n        font-weight: inherit;\n      }\n\n      & "," {\n        font-size: ",";\n        font-weight: ",";\n      }\n\n      & & "," {\n        font-size: ",";\n        font-weight: ",";\n      }\n\n      & & & "," {\n        font-size: ",";\n        font-weight: ",";\n      }\n\n      & & & & "," {\n        font-size: ",";\n        font-weight: ",";\n      }\n    "])),k,f.a,k,c[a.h3["font-size"]],a.h3["font-weight"],k,c[a.h4["font-size"]],a.h4["font-weight"],k,c[a.h5["font-size"]],a.h5["font-weight"],k,c[a.h6["font-size"]],a.h6["font-weight"])}));C.defaultProps=p.b;var R=function(e){var n=e.children,t=e.open,o=e.actions,r=Object(d.a)(e,x);return Object(s.jsx)(k,Object(c.a)(Object(c.a)({open:t},r),{},{children:Object(s.jsxs)(j.a,{container:{alignItems:"center",justify:"between"},children:[n,o&&Object(s.jsx)(h.a,{items:o},void 0)]},void 0)}),void 0)},A=Object(u.forwardRef)((function(e,n){var t=e.children,o=e.name,r=e.actions,i=e.collapsible,l=void 0!==i&&i,b=e.defaultCollapsed,m=void 0!==b&&b,h=Object(d.a)(e,y),p=Object(u.useState)(!m),w=Object(a.a)(p,2),x=w[0],k=w[1],A=Object(g.a)();return Object(s.jsxs)(C,Object(c.a)(Object(c.a)({"aria-label":o},h),{},{ref:n,children:[o&&Object(s.jsx)(R,{open:x,actions:r,children:l?Object(s.jsx)(f.b,{type:"button",variant:"text",onClick:function(){k((function(e){return!e}))},"aria-expanded":x?"true":"false","aria-label":A(x?"collapse_noun":"expand_noun",[o]),children:Object(s.jsxs)(j.a,{container:{direction:"row",alignItems:"center",gap:.5},forwardedAs:"span",children:[Object(s.jsx)(O.b,{name:"caret-right"},void 0),Object(s.jsx)("span",{children:o},void 0)]},void 0)},void 0):Object(s.jsx)("span",{children:o},void 0)},void 0),l?Object(s.jsx)(v.a,{collapsed:!x,children:t},void 0):t]}),void 0)}));n.a=A},1077:function(e,n,t){"use strict";var o,r,i,a=t(3),c=t(11),d=t(5),l=t(7),s=t(4),u=t(1),b=t(0),f=t(2),v=t(31),j=t(1033),O=t(123),m=t(40),h=t(47),p=t(57),g=t(225),w=t(25),x=t(122),y=t(35),k=t(8),C=t(124),R=t(233),A=t(1024),E=t(23),D=["loading","actions","items","searchInputProps"],S=f.e.div((function(e){var n=e.theme.base;return Object(f.d)(o||(o=Object(s.a)(["\n    position: sticky;\n    top: 0;\n    z-index: 1;\n    background-color: ",";\n    margin-bottom: ",";\n    transform: translateY(calc(-0.5 * ","));\n    padding: "," 0;\n\n    "," {\n      flex-grow: 1;\n    }\n  "])),n.palette["primary-background"],n.spacing,n.spacing,n.spacing,y.b)}));S.defaultProps=k.b;var I,P=f.e.div.withConfig(Object(E.c)("loading"))((function(e){var n=e.loading;return Object(f.d)(r||(r=Object(s.a)(["\n    ",":not("," "," > ",") {\n      padding: 0;\n    }\n\n    ","\n  "])),A.a,R.a,R.a,A.a,n&&Object(f.d)(i||(i=Object(s.a)(["\n      min-height: 8rem;\n    "]))))})),q=Object(b.forwardRef)((function(e,n){var t=e.loading,o=e.actions,r=e.items,i=e.searchInputProps,c=Object(l.a)(e,D);return Object(u.jsxs)(P,Object(a.a)(Object(a.a)({ref:n,loading:t},c),{},{children:[!t&&(i||o)&&Object(u.jsxs)(w.a,{container:{justify:"between",alignItems:"center",gap:2},as:S,children:[i&&Object(u.jsx)(w.a,{container:{alignItems:"center",gap:1},item:{grow:1},children:Object(u.jsx)(y.d,{onSearchChange:i.onSearchChange},void 0)},void 0),o&&Object(u.jsx)(g.a,{iconOnly:!1,items:o},void 0)]},void 0),t&&Object(u.jsx)(C.a,{placement:"local"},void 0),!t&&(r.length?Object(u.jsx)(j.c,{items:r},void 0):Object(u.jsx)(x.b,{},void 0))]}),void 0)})),z=t(1021),_=t(10),B=t(118),F=t(33),K=t(224),N=t(9),L=t(19),H=t(241),M=t(251),U=t(120),V=t(220),T=t(43),G=t(227),J=t(42),W=t(265),Z=t(1015),Y=t(229),Q=t(41),X=["value","readOnly","disabled","status","actions","onChange","selected"],$=f.e.div((function(e){var n=e.theme,t=n.base,o=n.components,r=o["form-control"],i=o.input.height;return Object(f.d)(I||(I=Object(s.a)(["\n    height: ",";\n\n    @media (pointer: coarse) {\n      min-height: ",";\n    }\n\n    &:focus-within {\n      border-color: ",";\n      box-shadow: ",";\n    }\n\n    &:hover:not([readonly]):not([disabled]):focus-within {\n      border-color: transparent;\n    }\n\n    input {\n      min-width: 0;\n      width: 100%;\n      color: ",";\n      text-overflow: ellipsis;\n      margin-inline-start: ",";\n    }\n\n    input,\n    input:focus {\n      border: none;\n      outline: none;\n      flex-grow: 1;\n      background-color: transparent;\n\n      &:read-only {\n        cursor: default;\n      }\n    }\n\n    > "," {\n      border-radius: calc("," * ",");\n      min-height: calc("," - 2 * ",");\n      height: calc("," - 2 * ",");\n    }\n  "])),i,t["hit-area"]["finger-min"],r[":focus"]["border-color"],r[":focus"]["box-shadow"],r["foreground-color"],t.spacing,p.a,t["border-radius"],r["border-radius"],i,r["border-width"],i,r["border-width"])}));$.defaultProps=k.b;var ee,ne,te=Object(b.forwardRef)((function(e,n){var t=e.value,o=e.readOnly,r=e.disabled,i=e.status,c=e.actions,d=e.onChange,s=e.selected,b=Object(l.a)(e,X);return Object(u.jsxs)(w.a,Object(a.a)(Object(a.a)({as:$,forwardedAs:Z.a,container:{alignItems:"center",wrap:"nowrap"}},{disabled:r,status:i,readOnly:o}),{},{children:[Object(u.jsx)("input",Object(a.a)(Object(a.a)({},{ref:n,disabled:r,status:i,readOnly:o}),{},{value:t||(null===s||void 0===s?void 0:s.text)||"",onChange:d||function(){},readOnly:o||!d,autoComplete:"off"},b),void 0),c]}),void 0)})),oe=t(1030),re=["value","mode","selected","onRemove"],ie=Object(b.forwardRef)((function(e,n){var t=e.value,o=e.mode,r=e.selected,i=e.onRemove,c=Object(l.a)(e,re);return"multi-select"===o?Object(u.jsx)(oe.a,Object(a.a)(Object(a.a)({selected:r,value:t},{ref:n,onRemove:i}),c),void 0):Object(u.jsx)(te,Object(a.a)({ref:n,selected:r,value:t},c),void 0)})),ae=["value","required","id","label","labelHidden","info","status","readOnly","disabled","mode","selected","onChange","actions","onFocus","onBlur","onDropdownButtonClick","onClick","menu"];Object(L.c)(H,M);var ce,de,le,se=[{name:"flip",enabled:!0,options:{fallbackPlacements:["top-start"]}},{name:"preventOverflow",enabled:!0},{name:"hide",enabled:!1},{name:"sameWidth",enabled:!0,phase:"beforeWrite",fn:function(e){var n=e.state;n.styles.popper.width="".concat(n.rects.reference.width,"px")},requires:["computeStyles"]}],ue=Object(f.e)(Z.a)(ee||(ee=Object(s.a)(["\n  border: 0;\n\n  & "," {\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n  }\n"])),J.a),be=f.e.p(ne||(ne=Object(s.a)(["\n  ","\n"])),N.c),fe=_.k&&navigator.userAgent.includes("Mobile"),ve=Object(b.forwardRef)((function(e,n){var t=Object(U.a)(),o=e.value,r=e.required,i=e.id,c=void 0===i?t:i,s=e.label,f=e.labelHidden,v=e.info,j=e.status,m=e.readOnly,g=e.disabled,w=e.mode,x=void 0===w?"single-select":w,y=e.selected,k=e.onChange,C=e.actions,R=e.onFocus,A=e.onBlur,E=e.onDropdownButtonClick,D=e.onClick,S=e.menu,I=Object(l.a)(e,ae),P=Object(h.a)(),q=Object(b.useRef)(null),z=Object(b.useState)(!1),_=Object(d.a)(z,2),B=_[0],F=_[1],K=Object(b.useRef)(null),N="".concat(c,"-listbox"),H=Object(V.a)(),M=Object(d.a)(H,2)[1],J=Object(T.a)(n,M),X=Object(G.a)([J],(function(e){e?(null===R||void 0===R||R(null===y||void 0===y?void 0:y.items),fe&&setTimeout((function(){var e;null===(e=J.current)||void 0===e||e.scrollIntoView({behavior:"smooth",block:"start"})}),150)):(F(!1),null===A||void 0===A||A(null===y||void 0===y?void 0:y.items))})),$=Object(b.useCallback)((function(e){if(S&&!m)switch(e.key){case"ArrowDown":e.preventDefault(),B||F(!0);break;case"Escape":e.preventDefault(),B&&e.stopPropagation(),F(!1)}}),[B,m,S,o]),ee=Object(b.useCallback)((function(){null===E||void 0===E||E(!B),F(!B)}),[B,E]),ne=Object(b.useMemo)((function(){var e;return!(null===S||void 0===S||null===(e=S.items)||void 0===e?void 0:e.length)&&!E&&k||m?null:Object(u.jsx)(p.b,{"aria-label":P(B?"combobox_close_list_button_a11y":"combobox_open_list_button_a11y"),icon:!0,variant:"simple",onClick:ee,disabled:g,tabIndex:"-1",children:Object(u.jsx)(L.b,{name:B?"caret-up":"caret-down"},void 0)},void 0)}),[ee,k,m,B,g]),te=Object(b.useCallback)((function(e){m||(F(!0),null===D||void 0===D||D(e))}),[m,D]);Object(b.useEffect)((function(){X&&S&&o&&o.length>0&&F(!0)}),[S,o,X]);var oe=Object(u.jsxs)(u.Fragment,{children:[ne,C]},void 0),re=Object(u.jsxs)(ue,{ref:J,as:Z.a,id:"".concat(c,"-combobox"),children:[Object(u.jsx)(ie,Object(a.a)(Object(a.a)({ref:q,role:"combobox","aria-haspopup":"listbox","aria-expanded":!m&&!g&&B,"aria-autocomplete":"list","aria-describedby":"".concat(c,"-inputDescription"),selected:null===y||void 0===y?void 0:y.items,spellCheck:!1},{id:c,readOnly:m,disabled:g,onChange:k,value:o,mode:x,status:j}),{},{actions:oe,onRemove:null===y||void 0===y?void 0:y.onRemove,onClick:te,onKeyDown:$},I),void 0),Object(u.jsxs)(be,{id:"".concat(c,"-inputDescription"),children:[P("combobox_open_close"),!!k&&" ".concat(P("combobox_search_instructions"))]},void 0),Object(u.jsx)(O.a,{show:B&&void 0!==S,target:J.current,placement:"bottom-start",modifiers:se,strategy:fe?"absolute":"fixed",onMouseDown:function(e){return e.preventDefault()},children:S&&Object(u.jsx)(Y.a,Object(a.a)(Object(a.a)({ref:K,id:N,role:"listbox",mode:x},S),{},{items:S.items,focusControlEl:q.current||void 0,onItemClick:function(e,n){var t;"single-select"===x&&F(!1),null===(t=S.onItemClick)||void 0===t||t.call(S,e,n);var o,r=Q.a.getItem(S.items,e);(null===r||void 0===r?void 0:r.primary)&&!(null===r||void 0===r?void 0:r.selected)&&(null===y||void 0===y||null===(o=y.onNew)||void 0===o||o.call(y,null===r||void 0===r?void 0:r.primary))},arrowNavigationUnsupported:!0}),void 0)},void 0)]},void 0);return s?Object(u.jsx)(W.b,Object(a.a)(Object(a.a)({},{label:s,labelHidden:f,id:c,info:v,status:j,required:r,disabled:g}),{},{children:re}),void 0):re})),je=t(1054),Oe=t(1056),me=t(232),he=function(e){var n=e.roles,t=e.currentRole,o=e.renderer,r=e.rendererProps,i=e.setSelectedRoleNameRef,c=Object(b.useRef)(null),l=Object(h.a)(),s=Object(b.useState)((function(){var e;if(n)return null===(e=t?n.find((function(e){return e.name===t.name})):n[0])||void 0===e?void 0:e.name})),f=Object(d.a)(s,2),v=f[0],j=f[1],O=null;if(n){var m=l("role");if(n.length>3){var p=n.map((function(e){return{id:e.name,primary:e.name,selected:e.name===v}})),g=p.find((function(e){return e.selected}));O=Object(u.jsx)(ve,{label:m,selected:g?{items:{id:g.id,text:g.primary}}:void 0,menu:{mode:"single-select",items:p,onItemClick:j}},void 0)}else O=Object(u.jsx)(je.a,{label:m,name:"role",inline:!0,onChange:function(e){j(e.target.value)},children:n.map((function(e){return Object(u.jsx)(Oe.a,{label:e.name,value:e.name,checked:e.name===v},e.name)}))},void 0)}else t&&(O=Object(u.jsx)(me.a,{readOnly:!0,label:l("role"),value:t.name,info:t.description},void 0));return Object(b.useEffect)((function(){var e;null===(e=Object(_.h)(c)[0])||void 0===e||e.focus()}),[]),Object(b.useEffect)((function(){n&&i(v)}),[v]),Object(u.jsxs)(w.a,{container:{direction:"column",gap:2},ref:c,children:[O,Object(u.jsx)(o,Object(a.a)(Object(a.a)({},r),{},{selectedRoleName:v}),void 0)]},void 0)},pe=["items","count","loading","onAddNew","form","onViewAll","viewAll","error"],ge=["onEdit","onRemove"],we=Object(f.e)(j.c)(ce||(ce=Object(s.a)([""]))),xe=f.e.div(de||(de=Object(s.a)(["\n  position: relative;\n  min-height: 8rem;\n\n  &[aria-busy='true'] > :nth-child(2) {\n    visibility: hidden;\n  }\n"]))),ye=Object(f.e)(O.a)(le||(le=Object(s.a)(["\n  width: 40ch;\n  min-height: 12rem;\n"]))),ke=Object(b.forwardRef)((function(e,n){var t=e.items,o=e.count,r=e.loading,i=e.onAddNew,s=e.form,f=e.onViewAll,j=e.viewAll,O=e.error,g=Object(l.a)(e,pe),x=Object(b.useContext)(m.b).create,y=Object(h.a)(),k=Object(b.useRef)(),R=Object(b.useState)(),A=Object(d.a)(R,2),E=A[0],D=A[1],S=Object(b.useState)(!1),I=Object(d.a)(S,2),P=I[0],N=I[1],L=Object(b.useRef)(null),H=Object(b.useRef)(y("loading")),M=Object(b.useRef)(),U=Object(b.useCallback)((function(e){M.current=e}),[]),V=Object(b.useState)(null),T=Object(d.a)(V,2),G=T[0],J=T[1],W=Object(b.useRef)({itemEls:[],viewAllItemEls:[]}),Z=function(e){return e.map((function(e,n){var t=e.onEdit,o=e.onRemove,r=Object(l.a)(e,ge),i=[],d=W.current["viewAll"===E?"viewAllItemEls":"itemEls"];return t&&(i=[{id:"edit",text:y("edit"),icon:"pencil",onClick:function(){N(!0),J({portal:d[n],button:d[n].querySelector('button[aria-haspopup="menu"]')}),null===t||void 0===t||t()}}]),o&&(i=[].concat(Object(c.a)(i),[{id:"remove",text:y("remove"),icon:"trash",onClick:function(){null===o||void 0===o||o()}}])),Object(a.a)(Object(a.a)({},r),{},{ref:function(e){d[n]=e},actions:i})}))},Y=function(){var e;!G||s.loading&&H.current===y("submitting")||(null===(e=G.button)||void 0===e||e.focus(),J(null),N(!1),H.current=y("loading"))},Q=null;"add"!==E&&!P||s.loading&&H.current!==y("submitting")||(Q=Object(u.jsx)(he,{roles:s.roles,currentRole:s.currentRole,renderer:s.renderer,rendererProps:s.rendererProps,setSelectedRoleNameRef:U},void 0));var X=null;if(("add"===E||P)&&(!s.loading||H.current===y("submitting"))){var $=function(){var e;"add"===E?null===(e=k.current)||void 0===e||e.dismiss():Y()};X=Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(p.b,{disabled:s.loading,onClick:function(){s.onDismiss({closeForm:$})},children:y("cancel")},void 0),Object(u.jsx)(p.b,{disabled:s.loading,type:"submit",variant:"primary",onClick:function(){H.current=y("submitting"),s.onSubmit({selectedRoleName:M.current,closeForm:$})},children:y("submit")},void 0)]},void 0)}var ee=null;"add"===E&&(ee=Q),!j.loading&&("viewAll"===E||P&&k.current)&&(ee=Object(u.jsx)(q,{items:Z(j.items),actions:[{id:"addStakeHolder",text:"Add new",onClick:function(){D("add"),null===i||void 0===i||i()}}],searchInputProps:j.onSearch?{onSearchChange:j.onSearch}:void 0},void 0)),Object(b.useEffect)((function(){if(E){var e={progress:"add"===E&&s.loading||j.loading?{message:H.current}:void 0,count:"viewAll"===E?o:void 0,children:ee,actions:"add"===E?X:void 0,onRequestDismiss:s.loading&&H.current===y("submitting")?function(){return!1}:void 0};k.current?k.current.update(e):"add"!==E&&"viewAll"!==E||(k.current=x(z.a,Object(a.a)(Object(a.a)({},e),{},{heading:"add"===E?y("add_noun",[y("stakeholders",[],{count:1})]):Object(_.a)(y("stakeholders")),onAfterClose:function(){var e,n;"add"===E?null===(e=s.onAfterClose)||void 0===e||e.call(s):null===(n=j.onAfterClose)||void 0===n||n.call(j);H.current=y("loading"),D(void 0)}})))}else k.current=void 0}),[E,ee,s.loading,X,o,j.loading]),Object(B.a)("mousedown",[L],Y);var ne=null;G&&(ne=Object(u.jsx)(ye,{ref:L,target:G.button,placement:"auto",role:"dialog",children:Object(u.jsxs)(w.a,{container:{direction:"column",gap:2,pad:2},children:[Object(u.jsx)(F.b,{variant:"h3",children:y("edit_noun",[y("stakeholders",[],{count:1})])},void 0),Object(u.jsxs)(xe,{"aria-busy":s.loading?"true":"false",children:[Object(u.jsx)(C.a,{placement:"local",visible:s.loading,message:H.current},void 0),(!s.loading||H.current===y("submitting"))&&Object(u.jsx)(he,{roles:s.roles,currentRole:s.currentRole,renderer:s.renderer,rendererProps:s.rendererProps,setSelectedRoleNameRef:U},void 0)]},void 0),X&&Object(u.jsx)(w.a,{container:{justify:"between"},children:X},void 0)]},void 0)},void 0));var te=function(e){"Escape"===e.key&&Y()};return Object(b.useEffect)((function(){if(G)return document.addEventListener("keydown",te),function(){document.removeEventListener("keydown",te)}}),[G]),Object(K.a)((function(){var e;G||null===(e=s.onAfterClose)||void 0===e||e.call(s)}),[G]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(we,Object(a.a)(Object(a.a)({},g),{},{ref:n,icon:"person",name:Object(_.a)(y("stakeholders")),loading:r,count:o,error:O,items:Object(b.useMemo)((function(){return Z(t.slice(0,3))}),[Z,t]),actions:i?[{text:y("add_noun",[y("stakeholders",[],{count:1})]),id:"addNew",icon:"plus",onClick:function(){D("add"),null===i||void 0===i||i()}}]:void 0,onViewAll:f&&o&&o>3?function(){D("viewAll"),null===f||void 0===f||f()}:void 0}),void 0),G&&Object(v.createPortal)(ne,G.portal)]},void 0)}));n.a=ke},241:function(e,n,t){"use strict";t.r(n),t.d(n,"name",(function(){return r})),t.d(n,"Component",(function(){return i})),t.d(n,"viewBox",(function(){return a}));var o=t(1),r="caret-down",i=function(){return Object(o.jsx)("path",{d:"M12.1476563,16.5726562 C12.1476563,16.5726562 3.2875,9.72421875 3.2875,9.72421875 C3.2875,9.72421875 3.14375,9.58046875 3.14375,9.58046875 C3.04765625,9.3890625 3,9.19765625 3,9.00546875 C3,9.00546875 3,9.00546875 3,9.00546875 C3,8.33515625 3.33515625,8 3.9578125,8 C3.9578125,8 3.9578125,8 3.9578125,8 C4.1015625,8 4.29296875,8.09609375 4.628125,8.2390625 C4.628125,8.2390625 4.628125,8.2390625 4.628125,8.2390625 C4.628125,8.2390625 12.8179688,14.2257813 12.8179688,14.2257813 C12.8179688,14.2257813 21.103125,8.19140625 21.103125,8.19140625 C21.3421875,8.04765625 21.534375,8 21.678125,8 C21.678125,8 21.678125,8 21.678125,8 C22.3007813,8 22.6359375,8.33515625 22.6359375,9.00546875 C22.6359375,9.00546875 22.6359375,9.00546875 22.6359375,9.00546875 C22.6359375,9.196875 22.5882813,9.38828125 22.4921875,9.58046875 C22.4921875,9.58046875 22.4921875,9.58046875 22.4921875,9.58046875 C22.4921875,9.58046875 22.3484375,9.72421875 22.3484375,9.72421875 C22.3484375,9.72421875 13.4882812,16.525 13.4882812,16.525 C13.296875,16.7164063 13.0570312,16.8125 12.8179688,16.8125 C12.8179688,16.8125 12.8179688,16.8125 12.8179688,16.8125 C12.5789062,16.8125 12.3867188,16.7164062 12.1476563,16.5734375 C12.1476563,16.5734375 12.1476563,16.5734375 12.1476563,16.5734375 L12.1476563,16.5726562 Z"},void 0)},a="0 0 25 25"},251:function(e,n,t){"use strict";t.r(n),t.d(n,"name",(function(){return r})),t.d(n,"Component",(function(){return i})),t.d(n,"viewBox",(function(){return a}));var o=t(1),r="caret-up",i=function(){return Object(o.jsx)("path",{d:"M13.4882812,8.23984375 C13.4882812,8.23984375 22.3484375,15.0882812 22.3484375,15.0882812 C22.3484375,15.0882812 22.4921875,15.2320313 22.4921875,15.2320313 C22.5882813,15.4234375 22.6359375,15.6148437 22.6359375,15.8070313 C22.6359375,15.8070313 22.6359375,15.8070313 22.6359375,15.8070313 C22.6359375,16.4773438 22.3007813,16.8125 21.678125,16.8125 C21.678125,16.8125 21.678125,16.8125 21.678125,16.8125 C21.534375,16.8125 21.3429688,16.7164062 21.0078125,16.5734375 C21.0078125,16.5734375 21.0078125,16.5734375 21.0078125,16.5734375 C21.0078125,16.5734375 12.8179688,10.5867187 12.8179688,10.5867187 C12.8179688,10.5867187 4.5328125,16.6210938 4.5328125,16.6210938 C4.29375,16.7648438 4.1015625,16.8125 3.9578125,16.8125 C3.9578125,16.8125 3.9578125,16.8125 3.9578125,16.8125 C3.33515625,16.8125 3,16.4773438 3,15.8070313 C3,15.8070313 3,15.8070313 3,15.8070313 C3,15.615625 3.04765625,15.4242188 3.14375,15.2320313 C3.14375,15.2320313 3.14375,15.2320313 3.14375,15.2320313 C3.14375,15.2320313 3.2875,15.0882812 3.2875,15.0882812 C3.2875,15.0882812 12.1476563,8.2875 12.1476563,8.2875 C12.3390625,8.09609375 12.5789062,8 12.8179688,8 C12.8179688,8 12.8179688,8 12.8179688,8 C13.0570312,8 13.2492188,8.09609375 13.4882812,8.2390625 C13.4882812,8.2390625 13.4882812,8.2390625 13.4882812,8.2390625 L13.4882812,8.23984375 Z"},void 0)},a="0 0 25 25"}}]);
//# sourceMappingURL=2.a458fc9d.chunk.js.map