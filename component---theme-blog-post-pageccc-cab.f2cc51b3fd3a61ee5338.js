(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{115:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(125),l=a(144),c=a(121);var i=function(e){var t=e.nextItem,a=e.prevItem;return r.a.createElement("nav",{className:"pagination-nav"},r.a.createElement("div",{className:"pagination-nav__item"},a&&r.a.createElement(c.a,{className:"pagination-nav__link",to:a.permalink},r.a.createElement("h5",{className:"pagination-nav__link--sublabel"},"Previous Post"),r.a.createElement("h4",{className:"pagination-nav__link--label"},"« ",a.title))),r.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&r.a.createElement(c.a,{className:"pagination-nav__link",to:t.permalink},r.a.createElement("h5",{className:"pagination-nav__link--sublabel"},"Next Post"),r.a.createElement("h4",{className:"pagination-nav__link--label"},t.title," »"))))};t.default=function(e){var t=e.content,a=e.metadata,n=e.nextItem,c=e.prevItem,s=t.frontMatter;return r.a.createElement(o.a,{title:a.title,description:a.description},t&&r.a.createElement("div",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--8 col--offset-2"},r.a.createElement(l.a,{frontMatter:s,metadata:a},r.a.createElement(t,null)),r.a.createElement("div",{className:"margin-vert--xl"},r.a.createElement(i,{nextItem:n,prevItem:c}))))))}},120:function(e,t,a){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=a(0),o=n(a(17));t.default=function(){return r.useContext(o.default)}},121:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(12);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var c=/^\/(?!\/)/;t.a=function(e){var t,a=e.to,i=e.href,s=a||i,u=c.test(s),m=!1,f="undefined"!=typeof window&&"IntersectionObserver"in window;return Object(n.useEffect)(function(){return!f&&u&&window.docusaurus.prefetch(s),function(){f&&t&&t.disconnect()}},[s,f,u]),s&&u?r.a.createElement(o.b,l({},e,{onMouseEnter:function(){m||(window.docusaurus.preload(s),m=!0)},innerRef:function(e){var a,n;f&&e&&u&&(a=e,n=function(){window.docusaurus.prefetch(s)},(t=new window.IntersectionObserver(function(e){e.forEach(function(e){a===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(a),t.disconnect(),n())})})).observe(a))},to:s})):r.a.createElement("a",l({},e,{href:s}))}},122:function(e,t,a){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=n(a(120));t.default=function(e){var t=(r.default().siteConfig||{}).baseUrl,a=void 0===t?"/":t;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?a+e.slice(1):a+e}},124:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(131);t.a=function(e){return r.a.createElement(o.Helmet,e)}},125:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(124),l=a(120),c=a.n(l),i=a(122),s=a.n(i),u=a(129),m=a.n(u),f=a(121),p=a(17),d=a.n(p);a(126);function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var E=function(e){function t(e){var a,n,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,(a=!(o=g(t).call(this,e))||"object"!==h(o)&&"function"!=typeof o?b(n):o).state={enabled:!0,isExpanded:!1},a.searchBarRef=r.a.createRef(),a.toggleSearchIconClick=a.toggleSearchIconClick.bind(b(a)),a}var o,l,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,r.a.Component),o=t,(l=[{key:"componentDidMount",value:function(){var e=this.context.siteConfig,t=(void 0===e?{}:e).themeConfig.algolia;"undefined"!=typeof window?a.e(86).then(a.t.bind(null,302,7)).then(function(e){(0,e.default)({appId:t.appId,apiKey:t.apiKey,indexName:t.indexName,inputSelector:"#search_input_react",algoliaOptions:t.algoliaOptions})}):(console.warn("Search has failed to load and now is being disabled"),this.setState({enabled:!1}))}},{key:"toggleSearchIconClick",value:function(){var e=this;this.setState(function(e){return{isExpanded:!e.isExpanded}},function(){e.searchBarRef.current.focus(),e.props.handleSearchBarToggle()})}},{key:"render",value:function(){var e=this.state,t=e.enabled,a=e.isExpanded;return t?r.a.createElement(n.Fragment,null,r.a.createElement("span",{role:"button",className:"search-icon ".concat(a?"search-icon-hidden":""),onClick:this.toggleSearchIconClick,onKeyDown:this.toggleSearchIconClick,tabIndex:0}),r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:"".concat(a?"search-bar-expanded":"search-bar"),onBlur:this.toggleSearchIconClick,ref:this.searchBarRef})):null}}])&&v(o.prototype,l),c&&v(o,c),t}();E.contextType=d.a;var _=E,k=a(123),O=a.n(k),w=a(127),N=a.n(w);function j(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=[],n=!0,r=!1,o=void 0;try{for(var l,c=e[Symbol.iterator]();!(n=(l=c.next()).done)&&(a.push(l.value),!t||a.length!==t);n=!0);}catch(e){r=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(r)throw o}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function S(e){return r.a.createElement(f.a,x({className:"navbar__item navbar__link"},e,e.href?{target:"_blank",rel:"noopener noreferrer",href:e.href}:{activeClassName:"navbar__link--active",to:s()(e.to)}),e.label)}var C=function(){return r.a.createElement("span",{className:O()(N.a.toggle,N.a.moon)})},P=function(){return r.a.createElement("span",{className:O()(N.a.toggle,N.a.sun)})};var I=function(){var e=c()(),t=j(Object(n.useState)(!1),2),a=t[0],l=t[1],i=j(Object(n.useState)(!1),2),u=i[0],p=i[1],d="undefined"!=typeof document?document.querySelector("html").getAttribute("data-theme"):"",h=j(Object(n.useState)(d),2),v=h[0],g=h[1],b=e.siteConfig,y=void 0===b?{}:b,E=y.baseUrl,k=y.themeConfig,w=void 0===k?{}:k,I=w.algolia,B=w.navbar,M=void 0===B?{}:B,T=M.title,D=M.logo,R=M.links,L=void 0===R?[]:R,A=Object(n.useCallback)(function(){l(!0)},[l]),F=Object(n.useCallback)(function(){l(!1)},[l]);Object(n.useEffect)(function(){try{var e=localStorage.getItem("theme");g(e)}catch(e){console.error(e)}},[]);var W=function(e){var t=e.target.checked?"dark":"";g(t);try{localStorage.setItem("theme",t)}catch(e){console.error(e)}};return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,null,r.a.createElement("html",{lang:"en","data-theme":v})),r.a.createElement("nav",{className:O()("navbar","navbar--light","navbar--fixed-top",{"navbar--sidebar-show":a})},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:A,onKeyDown:A},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement(f.a,{className:"navbar__brand",to:E},null!=D&&r.a.createElement("img",{className:"navbar__logo",src:s()(D.src),alt:D.alt}),null!=T&&r.a.createElement("strong",{className:u?N.a.hideLogoText:""},T)),L.filter(function(e){return"right"!==e.position}).map(function(e,t){return r.a.createElement(S,x({},e,{key:t}))})),r.a.createElement("div",{className:"navbar__items navbar__items--right"},L.filter(function(e){return"right"===e.position}).map(function(e,t){return r.a.createElement(S,x({},e,{key:t}))}),r.a.createElement(m.a,{className:N.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:"dark"===v,onChange:W,icons:{checked:r.a.createElement(C,null),unchecked:r.a.createElement(P,null)}}),I&&r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement(_,{handleSearchBarToggle:function(){p(!u)}})))),r.a.createElement("div",{role:"presentation",className:"navbar__sidebar__backdrop",onClick:function(){l(!1)}}),r.a.createElement("div",{className:"navbar__sidebar"},r.a.createElement("div",{className:"navbar__sidebar__brand"},r.a.createElement(f.a,{className:"navbar__brand",onClick:F,to:E},null!=D&&r.a.createElement("img",{className:"navbar__logo",src:s()(D.src),alt:D.alt}),null!=T&&r.a.createElement("strong",null,T)),a&&r.a.createElement(m.a,{"aria-label":"Dark mode toggle in sidebar",checked:"dark"===v,onChange:W,icons:{checked:r.a.createElement(C,null),unchecked:r.a.createElement(P,null)}})),r.a.createElement("div",{className:"navbar__sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},L.map(function(e,t){return r.a.createElement("li",{className:"menu__list-item",key:t},r.a.createElement(S,x({className:"menu__link"},e,{onClick:F})))})))))))};function B(){return(B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var M=function(){var e=c()().siteConfig,t=(void 0===e?{}:e).themeConfig,a=(void 0===t?{}:t).footer;if(!a)return null;var n=a.copyright,o=a.links,l=void 0===o?[]:o,i=a.logo;return r.a.createElement("footer",{className:O()("footer",{"footer--dark":"dark"===a.style})},r.a.createElement("div",{className:"container"},l&&l.length>0&&r.a.createElement("div",{className:"row footer__links"},l.map(function(e,t){return r.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.a.createElement("ul",{className:"footer__items"},e.items.map(function(e){return r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(f.a,B({className:"footer__link-item"},e,e.href?{target:"_blank",rel:"noopener noreferrer",href:e.href}:{to:s()(e.to)}),e.label))})):null)})),(i||n)&&r.a.createElement("div",{className:"text--center"},i&&i.src&&r.a.createElement("div",{className:"margin-bottom--sm"},r.a.createElement("img",{className:"footer__logo",alt:i.alt,src:i.src})),n)))};a(128);t.a=function(e){var t=c()().siteConfig,a=void 0===t?{}:t,n=a.favicon,l=a.tagline,i=a.title,u=a.themeConfig.image,m=a.url,f=e.children,p=e.title,d=e.noFooter,h=e.description,v=e.image,g=e.keywords,b=e.permalink,y=p||"".concat(i," · ").concat(l),E=v||u;return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,null,r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),r.a.createElement("meta",{name:"viewport",content:"width=device-width"}),y&&r.a.createElement("title",null,y),y&&r.a.createElement("meta",{property:"og:title",content:y}),n&&r.a.createElement("link",{rel:"shortcut icon",href:s()(n)}),h&&r.a.createElement("meta",{name:"description",content:h}),h&&r.a.createElement("meta",{property:"og:description",content:h}),g&&g.length&&r.a.createElement("meta",{property:"keywords",content:g}),E&&r.a.createElement("meta",{property:"og:image",content:m+s()(E)}),E&&r.a.createElement("meta",{property:"twitter:image",content:m+s()(E)}),E&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for ".concat(y)}),b&&r.a.createElement("meta",{property:"og:url",content:m+b}),r.a.createElement("meta",{name:"twitter:card",content:"summary"})),r.a.createElement(I,null),f,!d&&r.a.createElement(M,null))}},126:function(e,t,a){},127:function(e,t,a){e.exports={displayOnlyInLargeViewport:"displayOnlyInLargeViewport_23B8",toggle:"toggle_22Gx",moon:"moon_73DS",sun:"sun_2rjE",hideLogoText:"hideLogoText_fPFq"}},128:function(e,t,a){},136:function(e,t,a){e.exports={playgroundHeader:"playgroundHeader_1eiQ",playgroundPreview:"playgroundPreview_3g_B"}},137:function(e,t,a){e.exports={codeBlock:"codeBlock_SnYk",codeBlockWrapper:"codeBlockWrapper_263r",copyButton:"copyButton_1cZg"}},138:function(e,t,a){},139:function(e,t,a){e.exports={mdxCodeBlock:"mdxCodeBlock_273x"}},141:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(121),l=a(123),c=a.n(l),i=a(157),s=a(146),u=a.n(s),m=a(147),f=a.n(m),p=a(120),d=a.n(p),h=a(148),v=a(136),g=a.n(v);function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function y(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var E=function(e){var t=e.children,a=e.theme,r=e.transformCode,o=y(e,["children","theme","transformCode"]);return n.createElement(h.d,b({code:t,transformCode:r||function(e){return"".concat(e,";")},theme:a},o),n.createElement("div",{className:g.a.playgroundHeader},"LIVE EDITOR"),n.createElement(h.a,null),n.createElement("div",{className:g.a.playgroundHeader},"PREVIEW"),n.createElement("div",{className:g.a.playgroundPreview},n.createElement(h.c,null),n.createElement(h.b,null)))},_=a(137),k=a.n(_);function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function w(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function N(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?w(a,!0).forEach(function(t){j(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):w(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}function j(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function x(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=[],n=!0,r=!1,o=void 0;try{for(var l,c=e[Symbol.iterator]();!(n=(l=c.next()).done)&&(a.push(l.value),!t||a.length!==t);n=!0);}catch(e){r=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(r)throw o}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function S(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var C=function(e){var t=e.children,a=e.className,o=e.live,l=S(e,["children","className","live"]),s=d()().siteConfig.themeConfig.prismTheme,m=x(Object(n.useState)(!1),2),p=m[0],h=m[1],v=Object(n.useRef)(null),g=Object(n.useRef)(null);if(Object(n.useEffect)(function(){var e;return g.current&&(e=new f.a(g.current,{target:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){return v.current})})),function(){e&&e.destroy()}},[g.current,v.current]),o)return r.a.createElement(E,O({scope:N({},r.a),code:t.trim(),theme:s||u.a},l));var b=a&&a.replace(/language-/,""),y=function(){window.getSelection().empty(),h(!0),setTimeout(function(){return h(!1)},2e3)};return r.a.createElement(i.a,O({},i.b,{theme:s||u.a,code:t.trim(),language:b}),function(e){var t=e.className,a=e.style,n=e.tokens,o=e.getLineProps,l=e.getTokenProps;return r.a.createElement("div",{className:k.a.codeBlockWrapper},r.a.createElement("pre",{ref:v,className:c()(t,k.a.codeBlock),style:a},n.map(function(e,t){return r.a.createElement("div",O({key:t},o({line:e,key:t})),e.map(function(e,t){return r.a.createElement("span",O({key:t},l({token:e,key:t})))}))})),r.a.createElement("button",{ref:g,type:"button","aria-label":"Copy code to clipboard",className:k.a.copyButton,onClick:y},p?"Copied":"Copy"))})};a(138);function P(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var I=function(e){return function(t){var a=t.id,n=P(t,["id"]);return r.a.createElement(e,n,r.a.createElement("a",{"aria-hidden":"true",className:"anchor",id:a}),r.a.createElement("a",{"aria-hidden":"true",className:"hash-link",href:"#".concat(a)},"#"),n.children)}},B=a(139),M=a.n(B);function T(){return(T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}t.a={code:function(e){var t=e.children;return"string"==typeof t?r.a.createElement(C,e):t},a:o.a,pre:function(e){return r.a.createElement("pre",T({className:M.a.mdxCodeBlock},e))},h1:I("h1"),h2:I("h2"),h3:I("h3"),h4:I("h4"),h5:I("h5"),h6:I("h6")}},144:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(119),l=a(121),c=a(141);t.a=function(e){var t,a,n,i,s,u=e.children,m=e.frontMatter,f=e.metadata,p=e.truncated,d=f.date,h=f.permalink,v=f.tags,g=m.author,b=m.authorURL,y=m.authorTitle,E=m.authorFBID,_=m.title;return r.a.createElement("div",null,(t=d.substring(0,10).split("-"),a=t[0],n=["January","February","March","April","May","June","July","August","September","October","November","December"][parseInt(t[1],10)-1],i=parseInt(t[2],10),s=E?"https://graph.facebook.com/".concat(E,"/picture/?height=200&width=200"):m.authorImageURL,r.a.createElement("header",null,r.a.createElement("h1",{className:"margin-bottom--xs"},r.a.createElement(l.a,{to:h},_)),r.a.createElement("div",{className:"margin-bottom--sm"},r.a.createElement("small",null,n," ",i,", ",a)),r.a.createElement("div",{className:"avatar margin-bottom--md"},s&&r.a.createElement("a",{className:"avatar__photo-link",href:b,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("img",{className:"avatar__photo",src:s,alt:g})),r.a.createElement("div",{className:"avatar__intro"},g&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"avatar__name"},r.a.createElement("a",{href:b,target:"_blank",rel:"noreferrer noopener"},g)),r.a.createElement("small",{className:"avatar__subtitle"},y)))))),r.a.createElement("article",{className:"markdown"},r.a.createElement(o.a,{components:c.a},u)),r.a.createElement("div",{className:"row margin-vert--lg"},r.a.createElement("div",{className:"col"},v.length>0&&r.a.createElement(r.a.Fragment,null,r.a.createElement("strong",null,"Tags:"),v.map(function(e){var t=e.label,a=e.permalink;return r.a.createElement(l.a,{key:a,className:"margin-horiz--sm",to:a},t)}))),r.a.createElement("div",{className:"col text--right"},p&&r.a.createElement(l.a,{to:f.permalink},r.a.createElement("strong",null,"Read More")))))}}}]);