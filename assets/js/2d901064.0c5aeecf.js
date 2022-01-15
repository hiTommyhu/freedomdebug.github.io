"use strict";(self.webpackChunkfreedomdebug_github_io=self.webpackChunkfreedomdebug_github_io||[]).push([[123],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return s}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=u(r),s=a,f=m["".concat(c,".").concat(s)]||m[s]||d[s]||o;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},28264:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return u},assets:function(){return l},toc:function(){return d},default:function(){return s}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],p={title:"webpack\u4ee3\u7406\u914d\u7f6e",authors:"oxygen"},c=void 0,u={permalink:"/2022/01/03/webpack\u4ee3\u7406\u914d\u7f6e",source:"@site/blog/2022-01-03-webpack\u4ee3\u7406\u914d\u7f6e.md",title:"webpack\u4ee3\u7406\u914d\u7f6e",description:"devServer",date:"2022-01-03T00:00:00.000Z",formattedDate:"2022\u5e741\u67083\u65e5",tags:[],readingTime:6.75,truncated:!0,authors:[{name:"Oxygen",title:"Front End Engineer",url:"https://github.com/wood3n",imageURL:"https://raw.githubusercontent.com/wood3n/wood3n/master/31716713.jpg",key:"oxygen"}],prevItem:{title:"\u4e2a\u4eba\u7f51\u7ad9\u8fc1\u79fb",permalink:"/2022/01/04/\u4e2a\u4eba\u7f51\u7ad9\u8fc1\u79fb"},nextItem:{title:"\u7f16\u5199vscode\u63d2\u4ef6",permalink:"/2022/01/03/\u5982\u4f55\u7f16\u5199vscode\u63d2\u4ef6"}},l={authorsImageUrls:[void 0]},d=[{value:"devServer",id:"devserver",children:[],level:2}],m={toc:d};function s(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"devserver"},"devServer"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://webpack.docschina.org/configuration/dev-server/#devserver"},(0,o.kt)("inlineCode",{parentName:"a"},"webpack-devServer")),"\uff0c\u4e00\u822c\u7b80\u79f0",(0,o.kt)("inlineCode",{parentName:"p"},"WDS"),"\uff0c\u662f webpack \u5185\u7f6e\u7684\u7528\u4e8e\u5f00\u53d1\u73af\u5883\u7684\u670d\u52a1\u5668\u914d\u7f6e\u3002",(0,o.kt)("inlineCode",{parentName:"p"},"webpack"),"\u672c\u8eab\u63d0\u4f9b\u4e09\u79cd\u65b9\u5f0f\u7528\u4e8e\u5f00\u53d1\u73af\u5883\u4fee\u6539\u4ee3\u7801\u4ee5\u540e\u81ea\u52a8\u7f16\u8bd1\uff0c\u4ee5\u63d0\u9ad8\u5f00\u53d1\u6548\u7387\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://webpack.docschina.org/guides/development/#using-watch-mode"},"\u89c2\u5bdf\u6a21\u5f0f"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://webpack.docschina.org/configuration/dev-server/#devserver"},"WDS"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://webpack.docschina.org/guides/development/#using-webpack-dev-middleware"},"webpack-dev-middleware")))),(0,o.kt)("p",null,"\u603b\u4f53\u6765\u8bf4\uff0cWDS \u914d\u7f6e\u6700\u5bb9\u6613\uff0c\u5e76\u4e14\u63d0\u4f9b HMR \u7684\u529f\u80fd\uff0c\u53ea\u9700\u8981\u914d\u7f6e",(0,o.kt)("inlineCode",{parentName:"p"},"devServer.hot: true"),"\u5c31\u76f4\u63a5\u542f\u7528\uff0c\u65b9\u4fbf\u5230\u4e86\u6781\u81f4\uff01\u4e0b\u9762\u5c31\u91cd\u70b9\u770b\u4e00\u4e0b WDS \u7684",(0,o.kt)("inlineCode",{parentName:"p"},"proxy"),"\u914d\u7f6e\u3002"))}s.isMDXComponent=!0}}]);