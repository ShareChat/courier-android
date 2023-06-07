"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[514,608],{9068:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Ee});var a=n(7294),o=n(4608),l=n(8277),r=n(6010),c=n(5999),i=n(2466),s=n(5936);var d=n(5281);const m={backToTopButton:"backToTopButton_RiI4",backToTopButtonShow:"backToTopButtonShow_ssHd"};function u(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[n,o]=(0,a.useState)(!1),l=(0,a.useRef)(!1),{startScroll:r,cancelScroll:c}=(0,i.Ct)();return(0,i.RF)(((e,n)=>{let{scrollY:a}=e;const r=n?.scrollY;r&&(l.current?l.current=!1:a>=r?(c(),o(!1)):a<t?o(!1):a+window.innerHeight<document.documentElement.scrollHeight&&o(!0))})),(0,s.S)((e=>{e.location.hash&&(l.current=!0,o(!1))})),{shown:n,scrollToTop:()=>r(0)}}({threshold:300});return a.createElement("button",{"aria-label":(0,c.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,r.Z)("clean-btn",d.k.common.backToTopButton,m.backToTopButton,e&&m.backToTopButtonShow),type:"button",onClick:t})}var b=n(7524),p=n(6668),h=n(5537),E=n(7462);function f(e){return a.createElement("svg",(0,E.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}const g={collapseSidebarButton:"collapseSidebarButton_FykI",collapseSidebarButtonIcon:"collapseSidebarButtonIcon_DTRl"};function v(e){let{onClick:t}=e;return a.createElement("button",{type:"button",title:(0,c.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,c.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,r.Z)("button button--secondary button--outline",g.collapseSidebarButton),onClick:t},a.createElement(f,{className:g.collapseSidebarButtonIcon}))}var k=n(9689),_=n(902),C=n(2802),S=n(8596),I=n(6043);const N=Symbol("EmptyContext"),T=a.createContext(N);function Z(e){let{children:t}=e;const[n,o]=(0,a.useState)(null),l=(0,a.useMemo)((()=>({expandedItem:n,setExpandedItem:o})),[n]);return a.createElement(T.Provider,{value:l},t)}var x=n(9960),y=n(2389);function B(e){let{categoryLabel:t,onClick:n}=e;return a.createElement("button",{"aria-label":(0,c.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:n})}function L(e){let{item:t,onItemClick:n,activePath:o,level:l,index:c,...i}=e;const{items:s,label:m,collapsible:u,className:b,href:h}=t,f=function(e){const t=(0,y.Z)();return(0,a.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,C.Wl)(e):void 0),[e,t])}(t),g=(0,C._F)(t,o),v=(0,S.Mg)(h,o),{collapsed:k,setCollapsed:Z}=(0,I.u)({initialState:()=>!!u&&(!g&&t.collapsed)});!function(e){let{isActive:t,collapsed:n,setCollapsed:o}=e;const l=(0,_.D9)(t);(0,a.useEffect)((()=>{t&&!l&&n&&o(!1)}),[t,l,n,o])}({isActive:g,collapsed:k,setCollapsed:Z});const{expandedItem:L,setExpandedItem:w}=function(){const e=(0,a.useContext)(T);if(e===N)throw new _.i6("DocSidebarItemsExpandedStateProvider");return e}();function A(e){void 0===e&&(e=!k),w(e?null:c),Z(e)}const{docs:{sidebar:{autoCollapseCategories:H}}}=(0,p.L)();return(0,a.useEffect)((()=>{u&&L&&L!==c&&H&&Z(!0)}),[u,L,c,Z,H]),a.createElement("li",{className:(0,r.Z)(d.k.docs.docSidebarItemCategory,d.k.docs.docSidebarItemCategoryLevel(l),"menu__list-item",{"menu__list-item--collapsed":k},b)},a.createElement("div",{className:(0,r.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":v})},a.createElement(x.Z,(0,E.Z)({className:(0,r.Z)("menu__link",{"menu__link--sublist":u,"menu__link--sublist-caret":!h&&u,"menu__link--active":g}),onClick:u?e=>{n?.(t),h?A(!1):(e.preventDefault(),A())}:()=>{n?.(t)},"aria-current":v?"page":void 0,"aria-expanded":u?!k:void 0,href:u?f??"#":f},i),m),h&&u&&a.createElement(B,{categoryLabel:m,onClick:e=>{e.preventDefault(),A()}})),a.createElement(I.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:k},a.createElement(R,{items:s,tabIndex:k?-1:0,onItemClick:n,activePath:o,level:l+1})))}var w=n(3919),A=n(541);const H={menuExternalLink:"menuExternalLink_KU1_"};function F(e){let{item:t,onItemClick:n,activePath:o,level:l,index:c,...i}=e;const{href:s,label:m,className:u}=t,b=(0,C._F)(t,o),p=(0,w.Z)(s);return a.createElement("li",{className:(0,r.Z)(d.k.docs.docSidebarItemLink,d.k.docs.docSidebarItemLinkLevel(l),"menu__list-item",u),key:m},a.createElement(x.Z,(0,E.Z)({className:(0,r.Z)("menu__link",!p&&H.menuExternalLink,{"menu__link--active":b}),"aria-current":b?"page":void 0,to:s},p&&{onClick:n?()=>n(t):void 0},i),m,!p&&a.createElement(A.Z,null)))}const P={menuHtmlItem:"menuHtmlItem_hP_2"};function M(e){let{item:t,level:n,index:o}=e;const{value:l,defaultStyle:c,className:i}=t;return a.createElement("li",{className:(0,r.Z)(d.k.docs.docSidebarItemLink,d.k.docs.docSidebarItemLinkLevel(n),c&&`${P.menuHtmlItem} menu__list-item`,i),key:o,dangerouslySetInnerHTML:{__html:l}})}function W(e){let{item:t,...n}=e;switch(t.type){case"category":return a.createElement(L,(0,E.Z)({item:t},n));case"html":return a.createElement(M,(0,E.Z)({item:t},n));default:return a.createElement(F,(0,E.Z)({item:t},n))}}function D(e){let{items:t,...n}=e;return a.createElement(Z,null,t.map(((e,t)=>a.createElement(W,(0,E.Z)({key:t,item:e,index:t},n)))))}const R=(0,a.memo)(D),z={menu:"menu_izAj",menuWithAnnouncementBar:"menuWithAnnouncementBar_l2a_"};function U(e){let{path:t,sidebar:n,className:o}=e;const l=function(){const{isActive:e}=(0,k.nT)(),[t,n]=(0,a.useState)(e);return(0,i.RF)((t=>{let{scrollY:a}=t;e&&n(0===a)}),[e]),e&&t}();return a.createElement("nav",{className:(0,r.Z)("menu thin-scrollbar",z.menu,l&&z.menuWithAnnouncementBar,o)},a.createElement("ul",{className:(0,r.Z)(d.k.docs.docSidebarMenu,"menu__list")},a.createElement(R,{items:n,activePath:t,level:1})))}const V="sidebar_RiAD",Y="sidebarWithHideableNavbar_d0QC",q="sidebarHidden_Lg_2",K="sidebarLogo_YUvz";function Q(e){let{path:t,sidebar:n,onCollapse:o,isHidden:l}=e;const{navbar:{hideOnScroll:c},docs:{sidebar:{hideable:i}}}=(0,p.L)();return a.createElement("div",{className:(0,r.Z)(V,c&&Y,l&&q)},c&&a.createElement(h.Z,{tabIndex:-1,className:K}),a.createElement(U,{path:t,sidebar:n}),i&&a.createElement(v,{onClick:o}))}const j=a.memo(Q);var X=n(2961),G=n(3102);const J=e=>{let{sidebar:t,path:n}=e;const o=(0,X.e)();return a.createElement("ul",{className:(0,r.Z)(d.k.docs.docSidebarMenu,"menu__list")},a.createElement(R,{items:t,activePath:n,onItemClick:e=>{"category"===e.type&&e.href&&o.toggle(),"link"===e.type&&o.toggle()},level:1}))};function O(e){return a.createElement(G.Zo,{component:J,props:e})}const $=a.memo(O);function ee(e){const t=(0,b.i)(),n="desktop"===t||"ssr"===t,o="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(j,e),o&&a.createElement($,e))}var te=n(6550);const ne={expandButton:"expandButton__5cy",expandButtonIcon:"expandButtonIcon_FlNX"};function ae(e){let{toggleSidebar:t}=e;return a.createElement("div",{className:ne.expandButton,title:(0,c.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,c.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},a.createElement(f,{className:ne.expandButtonIcon}))}const oe={docSidebarContainer:"docSidebarContainer_UQUJ",docSidebarContainerHidden:"docSidebarContainerHidden_f7XD"};var le=n(1116);function re(e){let{children:t}=e;const n=(0,le.V)();return a.createElement(a.Fragment,{key:n?.name??"noSidebar"},t)}function ce(e){let{sidebar:t,hiddenSidebarContainer:n,setHiddenSidebarContainer:o}=e;const{pathname:l}=(0,te.TH)(),[c,i]=(0,a.useState)(!1),s=(0,a.useCallback)((()=>{c&&i(!1),o((e=>!e))}),[o,c]);return a.createElement("aside",{className:(0,r.Z)(d.k.docs.docSidebarContainer,oe.docSidebarContainer,n&&oe.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(oe.docSidebarContainer)&&n&&i(!0)}},a.createElement(re,null,a.createElement(ee,{sidebar:t,path:l,onCollapse:s,isHidden:c})),c&&a.createElement(ae,{toggleSidebar:s}))}const ie={docMainContainer:"docMainContainer_uL0j",docMainContainerEnhanced:"docMainContainerEnhanced_oQfM",docItemWrapperEnhanced:"docItemWrapperEnhanced_HFwV"};function se(e){let{hiddenSidebarContainer:t,children:n}=e;const o=(0,le.V)();return a.createElement("main",{className:(0,r.Z)(ie.docMainContainer,(t||!o)&&ie.docMainContainerEnhanced)},a.createElement("div",{className:(0,r.Z)("container padding-top--md padding-bottom--lg",ie.docItemWrapper,t&&ie.docItemWrapperEnhanced)},n))}const de={docPage:"docPage_ualW",docsWrapper:"docsWrapper_mKqt"};function me(e){let{children:t}=e;const n=(0,le.V)(),[o,r]=(0,a.useState)(!1);return a.createElement(l.Z,{wrapperClassName:de.docsWrapper},a.createElement(u,null),a.createElement("div",{className:de.docPage},n&&a.createElement(ce,{sidebar:n.items,hiddenSidebarContainer:o,setHiddenSidebarContainer:r}),a.createElement(se,{hiddenSidebarContainer:o},t)))}var ue=n(3320),be=n(1944),pe=n(4477),he=n(4739);function Ee(e){const{versionMetadata:t}=e,n=(0,C.hI)(e);if(!n)return a.createElement(o.default,null);const{docElement:l,sidebarName:c,sidebarItems:i}=n;return a.createElement(a.Fragment,null,a.createElement(he.Z,{version:t.version,tag:(0,ue.os)(t.pluginId,t.version)}),a.createElement(be.FG,{className:(0,r.Z)(d.k.wrapper.docsPages,d.k.page.docsDocPage,e.versionMetadata.className)},a.createElement(pe.q,{version:t},a.createElement(le.b,{name:c,items:i},a.createElement(me,null,l)))))}},4608:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var a=n(7294),o=n(8277),l=n(5999),r=n(1944);function c(){return a.createElement(a.Fragment,null,a.createElement(r.d,{title:(0,l.I)({id:"theme.NotFound.title",message:"Page Not Found"})}),a.createElement(o.Z,null,a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(l.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(l.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(l.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}},4477:(e,t,n)=>{n.d(t,{E:()=>c,q:()=>r});var a=n(7294),o=n(902);const l=a.createContext(null);function r(e){let{children:t,version:n}=e;return a.createElement(l.Provider,{value:n},t)}function c(){const e=(0,a.useContext)(l);if(null===e)throw new o.i6("DocsVersionProvider");return e}}}]);