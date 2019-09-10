(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{119:function(e,t,n){"use strict";n.d(t,"a",function(){return c}),n.d(t,"b",function(){return m});var o=n(0),r=n.n(o),a=r.a.createContext({}),s=function(e){var t=r.a.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},c=function(e){var t=s(e.components);return r.a.createElement(a.Provider,{value:t},e.children)},u="mdxType",i={inlineCode:"code",wrapper:function(e){return r.a.createElement(r.a.Fragment,{},e.children)}},l=function(e){var t=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,c=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}(e,["components","mdxType","originalType","parentName"]),u=s(t);return r.a.createElement(u[a+"."+n]||u[n]||i[n]||o,t?Object.assign({},c,{components:t}):c)};function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=l;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:o,s[1]=c;for(var m=2;m<a;m++)s[m]=n[m];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}l.displayName="MDXCreateElement"},93:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",function(){return s}),n.d(t,"rightToc",function(){return c}),n.d(t,"default",function(){return l});n(0);var o=n(119);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s={id:"using-themes",title:"Using Themes"},c=[{value:"Using themes",id:"using-themes",children:[]},{value:"Swizzling theme components",id:"swizzling-theme-components",children:[]},{value:"Official themes by Docusaurus",id:"official-themes-by-docusaurus",children:[]}],u={rightToc:c},i="wrapper";function l(e){var t=e.components,n=a(e,["components"]);return Object(o.b)(i,r({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In Docusaurus 2, themes are there to finish the build step of your site by supplying the components used by your site, your plugins, and the themes themselves. Furthermore, you may easily swap out components from themes by ",Object(o.b)("em",{parentName:"p"},"swizzling")," them with your own components."),Object(o.b)("p",null,"In this document, we discuss the basic usages of themes. You will learn how to use a theme and how to swizzle a component. To grasp a deeper understanding of themes, and / or to learn how you may implement your own themes, check out our ",Object(o.b)("a",r({parentName:"p"},{href:"/docs/advanced-themes"}),"advanced guide on themes"),"."),Object(o.b)("h2",{id:"using-themes"},"Using themes"),Object(o.b)("p",null,"To use themes, specify the themes in your ",Object(o.b)("inlineCode",{parentName:"p"},"docusaurus.config.js"),". You may use multiple themes:"),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-js"}),"// docusaurus.config.js\nmodule.exports = {\n  themes: ['@docusaurus/theme-classic', '@docusaurus/theme-live-codeblock'],\n};\n")),Object(o.b)("h2",{id:"swizzling-theme-components"},"Swizzling theme components"),Object(o.b)("p",null,"Themes are all about components. Docusaurus Themes' components are designed to be easily replaceable. We created a command for you to replace the components called ",Object(o.b)("inlineCode",{parentName:"p"},"swizzle"),"."),Object(o.b)("p",null,"To swizzle a component for a theme, run the following command in your doc site:"),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-shell"}),"$ docusaurus swizzle [theme name] [component name]\n")),Object(o.b)("p",null,"As an example, to swizzle the ",Object(o.b)("inlineCode",{parentName:"p"},"<Footer />")," component in ",Object(o.b)("inlineCode",{parentName:"p"},"@docusaurus/theme-classic")," for your site, run:"),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-shell"}),"$ npm swizzle @docusaurus/theme-classic Footer\n")),Object(o.b)("p",null,"This will copy the current ",Object(o.b)("inlineCode",{parentName:"p"},"<Footer />")," component used by the theme to a ",Object(o.b)("inlineCode",{parentName:"p"},"theme/Footer")," directory under the root of your site, which is where Docusaurus will look for swizzled components. Docusaurus will then use swizzled component in place of the original one from the theme."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note"),": You need to restart your dev server for Docusaurus to pick up the new component."),Object(o.b)("h2",{id:"official-themes-by-docusaurus"},"Official themes by Docusaurus"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",r({parentName:"li"},{href:"https://github.com/facebook/docusaurus/tree/master/packages/docusaurus-theme-classic"}),"@docusaurus/theme-classic")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",r({parentName:"li"},{href:"https://github.com/facebook/docusaurus/tree/master/packages/docusaurus-theme-search-algolia"}),"@docusaurus/theme-search-algolia")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",r({parentName:"li"},{href:"https://github.com/facebook/docusaurus/tree/master/packages/docusaurus-theme-live-codeblock"}),"@docusaurus/theme-live-codeblock"))))}l.isMDXComponent=!0}}]);