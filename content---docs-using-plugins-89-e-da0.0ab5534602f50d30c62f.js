(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{119:function(e,n,a){"use strict";a.d(n,"a",function(){return o}),a.d(n,"b",function(){return p});var t=a(0),u=a.n(t),s=u.a.createContext({}),i=function(e){var n=u.a.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):Object.assign({},n,e)),a},o=function(e){var n=i(e.components);return u.a.createElement(s.Provider,{value:n},e.children)},r="mdxType",c={inlineCode:"code",wrapper:function(e){return u.a.createElement(u.a.Fragment,{},e.children)}},l=function(e){var n=e.components,a=e.mdxType,t=e.originalType,s=e.parentName,o=function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&-1===n.indexOf(t)&&(a[t]=e[t]);return a}(e,["components","mdxType","originalType","parentName"]),r=i(n);return u.a.createElement(r[s+"."+a]||r[a]||c[a]||t,n?Object.assign({},o,{components:n}):o)};function p(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var s=a.length,i=new Array(s);i[0]=l;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o[r]="string"==typeof e?e:t,i[1]=o;for(var p=2;p<s;p++)i[p]=a[p];return u.a.createElement.apply(null,i)}return u.a.createElement.apply(null,a)}l.displayName="MDXCreateElement"},95:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",function(){return i}),a.d(n,"rightToc",function(){return o}),a.d(n,"default",function(){return l});a(0);var t=a(119);function u(){return(u=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e}).apply(this,arguments)}function s(e,n){if(null==e)return{};var a,t,u=function(e,n){if(null==e)return{};var a,t,u={},s=Object.keys(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||(u[a]=e[a]);return u}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(u[a]=e[a])}return u}var i={id:"using-plugins",title:"Using Plugins",description:"A plugin is a package that exports a class which can be instantiated with configurable options (provided by the user) and its various lifecycle methods will be invoked by the Docusaurus runtime."},o=[{value:"Installing a plugin",id:"installing-a-plugin",children:[]},{value:"Configuring plugins",id:"configuring-plugins",children:[]},{value:"Passing options to Docusaurus plugins via preset",id:"passing-options-to-docusaurus-plugins-via-preset",children:[]},{value:"Official plugins by Docusaurus",id:"official-plugins-by-docusaurus",children:[]}],r={rightToc:o},c="wrapper";function l(e){var n=e.components,a=s(e,["components"]);return Object(t.b)(c,u({},r,a,{components:n,mdxType:"MDXLayout"}),Object(t.b)("p",null,"Plugins are the building blocks which add features to a Docusaurus 2 site. Each plugin handles its own individual feature. Plugins may work be bundled together and distributed via ",Object(t.b)("a",u({parentName:"p"},{href:"/docs/advanced-presets"}),"presets"),"."),Object(t.b)("p",null,"Docusaurus 2 provides a few essential plugins such as ",Object(t.b)("a",u({parentName:"p"},{href:"/docs/advanced-plugins#docusaurusplugin-google-analytics"}),"Google Analytics")," and ",Object(t.b)("a",u({parentName:"p"},{href:"/docs/advanced-plugins#docusaurusplugin-sitemap"}),"Sitemap"),". You may also write your own plugins for customized features."),Object(t.b)("p",null,"In this doc, we talk about how to use plugins with Docusaurus' official plugins. To learn about the design implementation and how to write your own plugins, check out ",Object(t.b)("a",u({parentName:"p"},{href:"/docs/advanced-plugins"}),"Advanced Guides: Plugins"),"."),Object(t.b)("h2",{id:"installing-a-plugin"},"Installing a plugin"),Object(t.b)("p",null,"A plugin is an npm package, so you install them like other npm packages using npm."),Object(t.b)("pre",null,Object(t.b)("code",u({parentName:"pre"},{className:"language-bash"}),"npm install --save docusaurus-plugin-name\n")),Object(t.b)("p",null,"Then you add it in your site's ",Object(t.b)("inlineCode",{parentName:"p"},"docusaurus.config.js"),"'s ",Object(t.b)("inlineCode",{parentName:"p"},"plugins")," option:"),Object(t.b)("pre",null,Object(t.b)("code",u({parentName:"pre"},{className:"language-jsx"}),"// docusaurus.config.js\nmodule.exports = {\n  plugins: ['@docusaurus/plugin-content-pages'],\n};\n")),Object(t.b)("p",null,"Docusaurus can also load plugins from your local directory, you can do something like the following:"),Object(t.b)("pre",null,Object(t.b)("code",u({parentName:"pre"},{className:"language-jsx"}),"// docusaurus.config.js\nconst path = require('path');\n\nmodule.exports = {\n  plugins: [path.resolve(__dirname, '/path/to/docusaurus-local-plugin')],\n};\n")),Object(t.b)("h2",{id:"configuring-plugins"},"Configuring plugins"),Object(t.b)("p",null,"To use a plugin, add the plugin to the ",Object(t.b)("inlineCode",{parentName:"p"},"plugins")," field of your ",Object(t.b)("inlineCode",{parentName:"p"},"docusaurus.config.js"),"."),Object(t.b)("p",null,"For the most basic usage of plugins, you can providing just the plugin name or the absolute path to the plugin. For plugins that require options, specify the plugin as an array where the first value is the plugin name/path and second value is an options object, e.g. ",Object(t.b)("inlineCode",{parentName:"p"},"['plugin-name', { path: 'foo/bar' }]")," array."),Object(t.b)("pre",null,Object(t.b)("code",u({parentName:"pre"},{className:"language-js"}),"// docusaurus.config.js\nmodule.exports = {\n  plugins: [\n    // Basic usage.\n    '@docusaurus/plugin-google-analytics',\n\n    // With options object.\n    [\n      '@docusaurus/plugin-sitemap',\n      {\n        cacheTime: 600 * 1000,\n      },\n    ],\n  ],\n};\n")),Object(t.b)("h2",{id:"passing-options-to-docusaurus-plugins-via-preset"},"Passing options to Docusaurus plugins via preset"),Object(t.b)("p",null,"If you initialized your site using the classic template, you do not have to specify plugin options individually in your ",Object(t.b)("inlineCode",{parentName:"p"},"docusaurus.config.js"),". To provide the neccesary fields to certain plugins, i.e. ",Object(t.b)("inlineCode",{parentName:"p"},"trackingID")," for ",Object(t.b)("inlineCode",{parentName:"p"},"@docusaurus/plugin-google-analytics"),", pass them in the preset field, like this:"),Object(t.b)("pre",null,Object(t.b)("code",u({parentName:"pre"},{className:"language-js"}),"// docusaurus.config.js\nmodule.exports = {\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        // Will be passed to @docusaurus/plugin-content-docs.\n        docs: {\n          sidebarPath: require.resolve('./sidebars.js'),\n        },\n        // Will be passed to @docusaurus/theme-classic.\n        theme: {\n          customCss: require.resolve('./src/css/custom.css'),\n        },\n        // Will be passed to @docusaurus/plugin-google-analytics.\n        googleAnalytics: {\n          trackingID: 'UA-1428571428-5',\n        },\n        ...\n      },\n    ],\n  ],\n};\n")),Object(t.b)("h2",{id:"official-plugins-by-docusaurus"},"Official plugins by Docusaurus"),Object(t.b)("p",null,"Docusaurus' classic template is scaffolded with the classic preset, which includes the following official plugins. You may read more about the configurations of these plugins in our ",Object(t.b)("a",u({parentName:"p"},{href:"/docs/advanced-plugins"}),"Advanced Guides: Plugins"),"."),Object(t.b)("ul",null,Object(t.b)("li",{parentName:"ul"},Object(t.b)("a",u({parentName:"li"},{href:"https://github.com/facebook/docusaurus/tree/master/packages/docusaurus-plugin-content-blog"}),"@docusaurus/plugin-content-blog")),Object(t.b)("li",{parentName:"ul"},Object(t.b)("a",u({parentName:"li"},{href:"https://github.com/facebook/docusaurus/tree/master/packages/docusaurus-plugin-content-docs-legacy"}),"@docusaurus/plugin-content-docs")),Object(t.b)("li",{parentName:"ul"},Object(t.b)("a",u({parentName:"li"},{href:"https://github.com/facebook/docusaurus/tree/master/packages/docusaurus-plugin-content-pages"}),"@docusaurus/plugin-content-pages")),Object(t.b)("li",{parentName:"ul"},Object(t.b)("a",u({parentName:"li"},{href:"https://github.com/facebook/docusaurus/tree/master/packages/docusaurus-plugin-google-analytics"}),"@docusaurus/plugin-google-analytics")),Object(t.b)("li",{parentName:"ul"},Object(t.b)("a",u({parentName:"li"},{href:"https://github.com/facebook/docusaurus/tree/master/packages/docusaurus-plugin-google-gtag"}),"@docusaurus/plugin-google-gtag")),Object(t.b)("li",{parentName:"ul"},Object(t.b)("a",u({parentName:"li"},{href:"https://github.com/facebook/docusaurus/tree/master/packages/docusaurus-plugin-sitemap"}),"@docusaurus/plugin-sitemap")),Object(t.b)("li",{parentName:"ul"},Object(t.b)("a",u({parentName:"li"},{href:"https://github.com/facebook/docusaurus/tree/master/packages/docusaurus-plugin-ideal-image"}),"@docusaurus/plugin-ideal-image"))))}l.isMDXComponent=!0}}]);