"use strict";(self.webpackChunkdemocosmos=self.webpackChunkdemocosmos||[]).push([[68045,37492,41387],{41387:function(n,e,t){t.r(e),t.d(e,{default:function(){return f}});var i=t(29439),r=t(72791),o=t(49010),a=t(66226),s=t(73139),c=t(60461),l=t(35273),u=t(75613),d=t(80184);function f(){var n=(0,r.useState)([]),e=(0,i.Z)(n,2),t=e[0],f=e[1],p=(0,r.useState)(!1),m=(0,i.Z)(p,2)[1];(0,r.useEffect)((function(){(0,o.rQ)("feed","filterFor=DATA-PORTAL%20$DemoReact&feedClass=@baseclass&filterBy=&pageSize=9&olderThan=").then((function(n){null!==n.data&&n.data.FeedList&&n.data.FeedList.pxResults&&f(n.data.FeedList.pxResults),m(!0)})).catch((function(n){console.log(n)}))}),[]);var Z=function(n){return n.pxResults&&n.pxResults.length>0?n.pxResults.map((function(n){return(0,d.jsx)(a.Z,{id:n.pzInsKey,content:n.pyMessage,fullname:n.postedByUser.name,username:n.postedByUser.ID,postTimestamp:new Date(n.pxCreateDateTime),liked:!1,likes:[],likeCount:n.pyLikes.pxLikeCount,onLikeClick:function(){},onCommentClick:function(){}},n.pzInsKey)})):[]};return(0,d.jsx)(s.Z,{title:"Feed",searchTypes:["user","case"],userInfo:{username:(0,u.N9)(),fullname:(0,u.N9)(),avatarSrc:(0,o.$k)("operatorimage",(0,u.ew)())},newPostRegion:(0,d.jsx)(c.Z,{id:"newpost",interactionInfo:{textAreaPlaceholder:"Start a conversation",postLabel:"Post"},onFilesAdded:function(){},onSubmit:function(){}}),posts:t.map((function(n){return(0,d.jsx)(l.ZP,{id:n.pzInsKey,content:n.pyMessage,fullname:n.postedByUser.name,username:n.postedByUser.ID,postTimestamp:new Date(n.pyFeed.pyPostedOn),replies:Z(n),attachments:[],maxContentHeight:80,onCommentClick:function(){},liked:!1,likes:[],likeCount:n.pyLikes.pxLikeCount,onLikeClick:function(){},onUserClick:function(){},actions:[{text:"Bookmark",id:"Bookmark",onClick:function(){}}],replyInput:{attachments:[],onFilesAdded:function(){},onSubmit:function(){}}},n.pzInsKey)}))})}},39116:function(n,e,t){t.d(e,{e:function(){return Z}});var i,r=t(1413),o=t(44925),a=t(30168),s=t(80184),c=t(16444),l=t(36862),u=t(41878),d=t(57993),f=t(21750),p=t(65739),m=["children","container"],Z=c.ZP.div((function(n){var e=n.theme;return(0,c.iv)(i||(i=(0,a.Z)(["\n    "," &, &:not("," "," > &) {\n      position: relative;\n      padding: calc(1.5 * ",") calc("," * 2);\n\n      & + &,\n      & + "," {\n        padding-block-start: 0;\n      }\n    }\n  "])),d.u,f.r,f.r,e.base.spacing,e.components.card.padding,p.M)}));Z.defaultProps=l.ns;e.Z=function(n){var e=n.children,t=n.container,i=(0,o.Z)(n,m);return(0,s.jsx)(u.Z,(0,r.Z)((0,r.Z)({},i),{},{container:(0,r.Z)({direction:"column"},t),as:Z,children:e}))}},65739:function(n,e,t){t.d(e,{M:function(){return m}});var i,r=t(1413),o=t(44925),a=t(30168),s=t(80184),c=t(16444),l=t(36862),u=t(41878),d=t(57993),f=t(21750),p=["children","justify"],m=c.ZP.footer((function(n){var e=n.theme;return(0,c.iv)(i||(i=(0,a.Z)(["\n    "," &, &:not("," "," > &) {\n      padding: calc(1.5 * ",") calc("," * 2);\n    }\n  "])),d.u,f.r,f.r,e.base.spacing,e.components.card.padding)}));m.defaultProps=l.ns;e.Z=function(n){var e=n.children,t=n.justify,i=(0,o.Z)(n,p);return(0,s.jsx)(u.Z,(0,r.Z)((0,r.Z)({as:m,container:{wrap:"wrap",alignItems:"center",justify:t}},i),{},{children:e}))}},41865:function(n,e,t){t.d(e,{R:function(){return h}});var i,r=t(1413),o=t(44925),a=t(30168),s=t(80184),c=t(72791),l=t(16444),u=t(36862),d=t(41878),f=t(57993),p=t(21750),m=t(39116),Z=["children","actions"],h=l.ZP.header((function(n){var e=n.theme,t=n.onClick;return(0,l.iv)(i||(i=(0,a.Z)(["\n    "," &, &:not("," "," > &) {\n      padding: calc(1.5 * ",") calc("," * 2);\n\n      + "," {\n        padding-block-start: 0;\n      }\n\n      &:hover {\n        ","\n      }\n    }\n  "])),f.u,p.r,p.r,e.base.spacing,e.components.card.padding,m.e,t?"cursor: pointer;":void 0)}));h.defaultProps=u.ns;var g=(0,c.forwardRef)((function(n,e){var t=n.children,i=n.actions,a=(0,o.Z)(n,Z);return(0,s.jsx)(d.Z,(0,r.Z)((0,r.Z)({container:{alignItems:"center",justify:"between"},as:h},a),{},{ref:e,children:i?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(d.Z,{container:{alignItems:"center"},item:{grow:1},children:t}),(0,s.jsx)("div",{children:i})]}):t}))}));g.displayName="CardHeader",e.Z=g},80758:function(n,e,t){var i=t(1413),r=t(44925),o=t(80184),a=t(72791),s=t(9972),c=t(23211),l=["children","actions","progress","heading","description","banners"],u=(0,a.forwardRef)((function(n,e){var t=n.children,a=n.actions,u=n.progress,d=n.heading,f=n.description,p=n.banners,m=(0,r.Z)(n,l),Z=(0,s.Z)();return(0,o.jsx)(c.ZP,(0,i.Z)((0,i.Z)({},m),{},{heading:d,steps:[{id:Z,name:"",actions:a,content:t,description:f,banners:p}],currentStepId:Z,progress:u,ref:e,autoComplete:"off"}))}));e.Z=u},37492:function(n,e,t){t.r(e),t.d(e,{Component:function(){return a},name:function(){return o},set:function(){return r},viewBox:function(){return s}});var i=t(80184),r="budicon",o="filter",a=function(){return(0,i.jsx)("path",{d:"M11.573 18.615h1.853c.65 0 .973.322.973.92 0 .643-.324.965-.973.965h-1.853c-.649 0-.973-.322-.973-.965 0-.598.324-.92.973-.92Zm-3.8-4.69h9.454c.648 0 .973.322.973.92 0 .643-.325.965-.973.965H7.772c-.648 0-.972-.322-.972-.965 0-.598.324-.92.972-.92ZM5.871 9.19h13.255c.648 0 .972.322.972.965 0 .598-.324.92-.972.92H5.872c-.649 0-.973-.322-.973-.92 0-.643.324-.965.973-.965ZM22 5.465c0 .598-.324.92-.973.92H3.973c-.649 0-.973-.322-.973-.92 0-.643.324-.965.973-.965h17.054c.649 0 .973.322.973.965Z"})},s="0 0 25 25"},80677:function(n,e,t){t.d(e,{Tl:function(){return B},qC:function(){return F}});var i,r,o,a=t(1413),s=t(44925),c=t(30168),l=t(80184),u=t(72791),d=t(16444),f=t(73180),p=t(41878),m=t(12616),Z=t(1004),h=t(94342),g=t(39116),x=t(21750),v=t(41865),j=t(65739),b=t(27132),k=t(44896),y=t(80068),C=t(36862),w=t(53004),P=t(91062),I=t(37260),L=t(85560),R=["id","actions","contextualLabel"],T=["icon","name","headingTag","count","actions","items","onViewAll","loading","noItemsText","error"],A=(0,d.ZP)(g.Z).withConfig((0,k.cZ)("loading"))((function(n){var e=n.theme,t=n.loading;return(0,d.iv)(i||(i=(0,c.Z)(["\n    ","\n\n    &:not(:last-child) > ul > li:last-child {\n      border-bottom: 0.0625rem solid ",";\n    }\n  "])),t&&(0,d.iv)(r||(r=(0,c.Z)(["\n      min-height: 4rem;\n    "]))),e.base.palette["border-line"])}));A.defaultProps=C.ns;var F=(0,d.ZP)(w.ZP)((function(n){var e=n.theme;return(0,d.iv)(o||(o=(0,c.Z)(["\n      padding: "," 0;\n\n      &:not(:last-child) {\n        border-bottom: 0.0625rem solid ",";\n      }\n    "])),e.base.spacing,e.base.palette["border-line"])}));F.defaultProps=C.ns;var B=function(n){var e=n.name,t=n.items,i=(0,y.Z)();return(0,l.jsx)("ul",{children:t.map((function(n){var t=n.id,r=n.actions,o=n.contextualLabel,c=(0,s.Z)(n,R);return(0,l.jsx)(F,(0,a.Z)((0,a.Z)({},c),{},{forwardedAs:"li",actions:r&&(0,l.jsx)(f.Z,{items:r,contextualLabel:e&&o?i("action_from_summarylist_heading",[o,e]):o})}),t)}))})},M=(0,u.forwardRef)((function(n,e){var t=n.icon,i=n.name,r=n.headingTag,o=void 0===r?"h2":r,c=n.count,d=n.actions,g=n.items,k=n.onViewAll,C=n.loading,w=n.noItemsText,R=n.error,F=(0,s.Z)(n,T),M=(0,y.Z)(),S=(0,u.useMemo)((function(){return C?(0,l.jsx)(P.Z,{placement:"local",message:"string"===typeof C?C:void 0}):R?(0,l.jsx)(L.Z,(0,a.Z)({},!0===R?{}:R)):g.length>0?(0,l.jsx)(B,{name:i,items:g}):(0,l.jsx)(b.Z,{message:w})}),[C,g,w,R]);return(0,l.jsxs)(x.Z,(0,a.Z)((0,a.Z)({ref:e},F),{},{children:[(t||i||"number"===typeof c||d)&&(0,l.jsxs)(v.Z,{children:[(0,l.jsxs)(p.Z,{container:{alignItems:"center",gap:1},children:[t&&(0,l.jsx)(h.ZP,{name:t}),i&&(0,l.jsx)(m.Z,{variant:o,children:i}),"number"===typeof c&&(0,l.jsx)(Z.Z,{children:c})]}),d&&(0,l.jsx)(f.Z,{items:d,contextualLabel:i})]}),(0,l.jsx)(A,{loading:C,children:S}),!R&&"number"===typeof c&&c>g.length&&k&&(0,l.jsx)(j.Z,{justify:"center",children:(0,l.jsx)(I.ZP,{variant:"link","aria-label":i?M("view_all_noun",[i.toLowerCase()]):M("view_all"),onClick:k,children:M("view_all")})})]}))}));e.ZP=M}}]);
//# sourceMappingURL=68045.c43ccd7e.chunk.js.map