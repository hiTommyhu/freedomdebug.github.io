"use strict";(self.webpackChunkfreedomdebug_github_io=self.webpackChunkfreedomdebug_github_io||[]).push([[3561],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),u=c(t),m=o,k=u["".concat(p,".").concat(m)]||u[m]||s[m]||i;return t?r.createElement(k,l(l({ref:n},d),{},{components:t})):r.createElement(k,l({ref:n},d))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,l=new Array(i);l[0]=u;var a={};for(var p in n)hasOwnProperty.call(n,p)&&(a[p]=n[p]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var c=2;c<i;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},17930:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return d},default:function(){return u}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),l=["components"],a={title:"stack reconciler"},p=void 0,c={unversionedId:"react/react\u6e90\u7801\u5b66\u4e60/stack reconciler",id:"react/react\u6e90\u7801\u5b66\u4e60/stack reconciler",title:"stack reconciler",description:"\u4e13\u6709\u540d\u8bcd",source:"@site/docs/react/react\u6e90\u7801\u5b66\u4e60/stack reconciler.md",sourceDirName:"react/react\u6e90\u7801\u5b66\u4e60",slug:"/react/react\u6e90\u7801\u5b66\u4e60/stack reconciler",permalink:"/docs/react/react\u6e90\u7801\u5b66\u4e60/stack reconciler",editUrl:"https://github.com/freedomdebug/freedomdebug.github.io/tree/master/docs/react/react\u6e90\u7801\u5b66\u4e60/stack reconciler.md",tags:[],version:"current",frontMatter:{title:"stack reconciler"},sidebar:"react",previous:{title:"fiber reconciler",permalink:"/docs/react/react\u6e90\u7801\u5b66\u4e60/fiber reconciler"},next:{title:"Redux\u5165\u95e8",permalink:"/docs/react/redux/redux\u5165\u95e8"}},d=[{value:"\u4e13\u6709\u540d\u8bcd",id:"\u4e13\u6709\u540d\u8bcd",children:[{value:"renderer - \u6e32\u67d3\u5668",id:"renderer---\u6e32\u67d3\u5668",children:[],level:3},{value:"reconcilers",id:"reconcilers",children:[],level:3},{value:"stack reconciler",id:"stack-reconciler",children:[],level:3},{value:"fiber reconciler",id:"fiber-reconciler",children:[],level:3},{value:"virtual dom",id:"virtual-dom",children:[],level:3}],level:2},{value:"stack reconciler",id:"stack-reconciler-1",children:[{value:"\u6302\u8f7d\u9636\u6bb5",id:"\u6302\u8f7d\u9636\u6bb5",children:[{value:"\u81ea\u5b9a\u4e49\u7ec4\u4ef6",id:"\u81ea\u5b9a\u4e49\u7ec4\u4ef6",children:[],level:4},{value:"\u5bbf\u4e3b\u5143\u7d20",id:"\u5bbf\u4e3b\u5143\u7d20",children:[],level:4}],level:3},{value:"\u5378\u8f7d\u9636\u6bb5",id:"\u5378\u8f7d\u9636\u6bb5",children:[],level:3},{value:"\u66f4\u65b0\u9636\u6bb5",id:"\u66f4\u65b0\u9636\u6bb5",children:[{value:"diff \u7b97\u6cd5",id:"diff-\u7b97\u6cd5",children:[],level:4},{value:"\u6267\u884c\u66f4\u65b0",id:"\u6267\u884c\u66f4\u65b0",children:[],level:4}],level:3},{value:"\u7f3a\u9677",id:"\u7f3a\u9677",children:[],level:3}],level:2}],s={toc:d};function u(e){var n=e.components,t=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u4e13\u6709\u540d\u8bcd"},"\u4e13\u6709\u540d\u8bcd"),(0,i.kt)("h3",{id:"renderer---\u6e32\u67d3\u5668"},"renderer - \u6e32\u67d3\u5668"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"renderer"),"\u4e5f\u5c31\u662f\u6e32\u67d3\u5668\u7684\u610f\u601d\u3002React \u6700\u521d\u53ea\u662f\u670d\u52a1\u4e8e DOM\uff0c\u4f46\u662f\u8fd9\u4e4b\u540e\u88ab\u6539\u7f16\u6210\u4e5f\u80fd\u540c\u65f6\u652f\u6301\u539f\u751f\u5e73\u53f0\u7684 ",(0,i.kt)("a",{parentName:"p",href:"https://reactnative.dev/"},"React Native"),"\u3002\u56e0\u6b64\uff0c\u5728 React \u5185\u90e8\u673a\u5236\u4e2d\u5f15\u5165\u4e86",(0,i.kt)("inlineCode",{parentName:"p"},"renderer"),"\u8fd9\u4e2a\u6982\u5ff5\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"renderer"),"\u5728\u6d4f\u89c8\u5668\u4e2d\u5bf9\u5e94 ReactDOM API\uff0c\u8d1f\u8d23\u5c06 React \u7ec4\u4ef6\u6e32\u67d3\u6210 DOM\u3002"),(0,i.kt)("h3",{id:"reconcilers"},"reconcilers"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"reconcilers"),"\u7ffb\u8bd1\u8fc7\u6765\u662f\u534f\u8c03\u5668\u7684\u610f\u601d\uff0c\u5176\u5b9e\u5c31\u662f\u8d1f\u8d23\u627e\u51fa React virtual dom \u66f4\u65b0\u7684\u90e8\u5206\uff0c\u5c3d\u53ef\u80fd\u590d\u7528\u73b0\u6709\u5b9e\u4f8b\u6765\u4fdd\u7559 DOM \u548c\u72b6\u6001\uff0c\u4ee5\u53ca\u5982\u4f55\u534f\u8c03",(0,i.kt)("inlineCode",{parentName:"p"},"renderer"),"\u53bb\u5904\u7406\u8be5\u90e8\u5206\u66f4\u65b0\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"reconcilers"),"\u4e3b\u8981\u6267\u884c\u7684\u662f Virtual DOM \u7684 diff \u7b97\u6cd5\uff0c\u627e\u5230\u66f4\u65b0\u8fc7\u7a0b\u4e2d\u53d8\u5316\u7684\u7ec4\u4ef6\u3002"),(0,i.kt)("p",null,"\u4e0d\u540c\u5e73\u53f0\u4e0a\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"renderer"),"\u5171\u4eab\u4e00\u81f4\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"reconciler"),"\u3002"),(0,i.kt)("h3",{id:"stack-reconciler"},"stack reconciler"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"stack reconciler"),"\u662f React 15 \u53ca\u4e4b\u524d\u7248\u672c\u66f4\u65b0\u8c03\u5ea6\u7684\u5b9e\u73b0\u3002"),(0,i.kt)("h3",{id:"fiber-reconciler"},"fiber reconciler"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"fiber reconciler"),"\u662f React 16 \u53ca\u4e4b\u540e\u7248\u672c\u66f4\u65b0\u8c03\u5ea6\u7684\u5b9e\u73b0\u3002"),(0,i.kt)("h3",{id:"virtual-dom"},"virtual dom"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"virtual dom"),"\u4e5f\u5c31\u662f\u865a\u62df DOM\uff0c\u672c\u8d28\u4e0a\u5c31\u662f React \u7a0b\u5e8f\u6267\u884c\u8fc7\u7a0b\u4e2d\u5728\u5185\u5b58\u4e2d\u4ea7\u751f\u7684\u4e00\u4e2a\u5bf9\u8c61\u3002"),(0,i.kt)("h2",{id:"stack-reconciler-1"},"stack reconciler"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"https://zh-hans.reactjs.org/docs/implementation-notes.html"},"\u5b9e\u73b0\u8bf4\u660e \u2013 React (reactjs.org)"))),(0,i.kt)("h3",{id:"\u6302\u8f7d\u9636\u6bb5"},"\u6302\u8f7d\u9636\u6bb5"),(0,i.kt)("p",null,"React \u7a0b\u5e8f\u7684\u5165\u53e3\u4e00\u822c\u662f",(0,i.kt)("inlineCode",{parentName:"p"},"index.js"),"\u4e0b\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"ReactDOM.render(<App />, document.getElementById('root'))"),"\u8fd9\u6bb5\u4ee3\u7801\uff0c\u800c JSX \u7684\u6807\u8bb0\u5728\u7f16\u8bd1\u8fc7\u540e\u4f1a\u8f6c\u6362\u6210",(0,i.kt)("inlineCode",{parentName:"p"},"React.createElement(type, props, ...children)"),"\u8fd9\u4e2a\u65b9\u6cd5\uff0c\u5b9e\u9645\u4e0a\u662f\u4e0b\u9762\u8fd9\u6837\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"ReactDOM.render(React.createElement(App), document.getElementById('root'));\n")),(0,i.kt)("p",null,"\u5f53\u9996\u6b21\u6267\u884c",(0,i.kt)("inlineCode",{parentName:"p"},"ReactDOM.render"),"\uff0cReact DOM \u4f5c\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"renderer"),"\u4f1a\u5c06",(0,i.kt)("inlineCode",{parentName:"p"},"App"),"\u4f20\u9012\u7ed9",(0,i.kt)("inlineCode",{parentName:"p"},"reconciler"),"\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"reconciler"),"\u4f1a\u6839\u636e",(0,i.kt)("inlineCode",{parentName:"p"},"type"),"\u5224\u65ad\u8be5\u7ec4\u4ef6\u662f\u4e00\u4e2a\u51fd\u6570\u3001\u7c7b\u6216\u8005\u5bbf\u4e3b\u7ec4\u4ef6\uff08\u539f\u751f HTML \u6807\u8bb0\uff0c\u5982",(0,i.kt)("inlineCode",{parentName:"p"},"<div>"),"\uff09\uff0c\u53bb\u9009\u62e9\u6267\u884c\u4e0d\u540c\u7684\u64cd\u4f5c\u83b7\u53d6\u6e32\u67d3\u7684\u5143\u7d20\uff0c\u8fd9\u4e2a\u8fc7\u7a0b\u4f1a\u9012\u5f52\u6e32\u67d3\u6240\u6709\u5b50\u5143\u7d20\uff0c\u5e76\u6700\u7ec8\u5f62\u6210\u4e00\u4e2a virtual dom tree."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// \u5b9e\u4f8b\u5316\u7ec4\u4ef6\nfunction instantiateComponent(element) {\n  const type = element.type;\n  if (typeof type === 'function') {\n    // \u81ea\u5b9a\u4e49\u7ec4\u4ef6\n    return new CompositeComponent(element);\n  } else if (typeof type === 'string') {\n    // \u5bbf\u4e3b\u5143\u7d20\n    return new DOMComponent(element);\n  }\n}\n\n// \u76f8\u5f53\u4e8eReactDOM.render\nfunction mountTree(element, containerNode) {\n  // \u521b\u5efa\u9876\u5c42\u5185\u90e8\u5b9e\u4f8b\n  const rootComponent = instantiateComponent(element);\n\n  // \u6302\u8f7d\u9876\u5c42\u7ec4\u4ef6\u5230\u5bb9\u5668\u4e2d\n  const node = rootComponent.mount();\n  containerNode.appendChild(node);\n\n  // \u8fd4\u56de\u5b83\u63d0\u4f9b\u7684\u516c\u5171\u5b9e\u4f8b\n  const publicInstance = rootComponent.getPublicInstance();\n  return publicInstance;\n}\n\nmountTree(<App />, document.getElementById('root'));\n")),(0,i.kt)("h4",{id:"\u81ea\u5b9a\u4e49\u7ec4\u4ef6"},"\u81ea\u5b9a\u4e49\u7ec4\u4ef6"),(0,i.kt)("p",null,"\u5982\u679c\u662f\u7528\u6237\u5b9a\u4e49\u7684\u7ec4\u4ef6\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"reconciler"),"\u4f1a\u521b\u5efa\u4e00\u4e2a",(0,i.kt)("inlineCode",{parentName:"p"},"CompositeComponent"),"\u7c7b\u578b\u7684\u5b9e\u4f8b\uff0c\u5b9e\u4f8b\u4e0a\u4fdd\u5b58\u4e86\u5f53\u524d\u7ec4\u4ef6\u5fc5\u8981\u7684\u4fe1\u606f\uff0c\u4ee5\u53ca\u6302\u8f7d\u3001\u66f4\u65b0\u7b49\u65b9\u6cd5\u3002"),(0,i.kt)("p",null,"\u8fd9\u91cc\u8fd8\u4f1a\u6839\u636e\u539f\u578b\u4e0a\u662f\u5426\u5177\u6709",(0,i.kt)("inlineCode",{parentName:"p"},"isReactComponent"),"\u8fd9\u4e2a\u5c5e\u6027\u6765\u533a\u5206\u51fd\u6570\u7ec4\u4ef6\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"class"),"\u7ec4\u4ef6\uff0c\u5982\u679c\u662f\u51fd\u6570\u7ec4\u4ef6\u5219\u76f4\u63a5\u8c03\u7528\u7ec4\u4ef6\u51fd\u6570\uff0c\u5982\u679c\u662f\u7c7b\u7ec4\u4ef6\u5219",(0,i.kt)("inlineCode",{parentName:"p"},"new"),"\u4e00\u4e2a\u7ec4\u4ef6\u5b9e\u4f8b\u51fa\u6765\uff0c\u5e76\u6267\u884c\u5b9e\u4f8b\u4e0a\u7684\u751f\u547d\u5468\u671f\u65b9\u6cd5\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"class CompositeComponent {\n  constructor(element) {\n    // \u5f53\u524d\u7ec4\u4ef6\n    this.currentElement = element;\n    // \u5f53\u524d\u7ec4\u4ef6\u6e32\u67d3\u7684\u5b50\u7ec4\u4ef6\u5143\u7d20\n    this.renderedComponent = null;\n    // \u5f53\u524d\u7ec4\u4ef6\u5b9e\u4f8b\n    this.publicInstance = null;\n  }\n\n  getPublicInstance() {\n    // \u5bf9\u4e8e\u7ec4\u5408\u7ec4\u4ef6\uff0c\u516c\u5171\u7c7b\u5b9e\u4f8b\n    return this.publicInstance;\n  }\n\n  mount() {\n    const element = this.currentElement;\n    const type = element.type;\n    const props = element.props;\n\n    let publicInstance, renderedElement;\n    if (isClass(type)) {\n      // \u7c7b\u7ec4\u4ef6\n      publicInstance = new type(props);\n      // \u8bbe\u7f6e props\n      publicInstance.props = props;\n      // \u5982\u679c\u6709\u751f\u547d\u5468\u671f\u65b9\u6cd5\u5c31\u8c03\u7528\n      if (publicInstance.componentWillMount) {\n        publicInstance.componentWillMount();\n      }\n      // \u83b7\u53d6\u7ec4\u4ef6\u8fd4\u56de\u7684\u5143\u7d20\n      renderedElement = publicInstance.render();\n    } else if (typeof type === 'function') {\n      // \u51fd\u6570\u7ec4\u4ef6\n      publicInstance = null;\n      renderedElement = type(props);\n    }\n\n    // \u4fdd\u5b58\u516c\u5171\u5b9e\u4f8b\n    this.publicInstance = publicInstance;\n\n    // \u6839\u636e\u5143\u7d20\u5b9e\u4f8b\u5316\u5b50\u5185\u90e8\u5b9e\u4f8b\u3002\n    // <div /> \u6216\u8005 <p /> \u662f DOMComponent\uff0c\n    // \u800c <App /> \u6216\u8005 <Button /> \u662f CompositeComponent\u3002\n    const renderedComponent = instantiateComponent(renderedElement);\n    this.renderedComponent = renderedComponent;\n\n    // \u9012\u5f52\u6302\u8f7d\u6e32\u67d3\u540e\u7684\u8f93\u51fa\n    return renderedComponent.mount();\n  }\n}\n")),(0,i.kt)("h4",{id:"\u5bbf\u4e3b\u5143\u7d20"},"\u5bbf\u4e3b\u5143\u7d20"),(0,i.kt)("p",null,"\u5bf9\u4e8e HTML \u5b58\u5728\u7684\u5bbf\u4e3b\u5143\u7d20\uff0c\u4f8b\u5982",(0,i.kt)("inlineCode",{parentName:"p"},"<div>"),"\u7b49\uff0c\u4f1a\u521b\u5efa",(0,i.kt)("inlineCode",{parentName:"p"},"DOMComponent"),"\u7684\u5b9e\u4f8b\uff0c\u5c5e\u6027\u548c\u65b9\u6cd5\u548c\u4e0a\u9762\u7c7b\u4f3c"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"class DOMComponent {\n  constructor(element) {\n    // \u5f53\u524d\u7ec4\u4ef6\n    this.currentElement = element;\n    this.renderedChildren = [];\n    // \u5f53\u524d\u7ec4\u4ef6\u6e32\u67d3\u7684 DOM \u8282\u70b9\n    this.node = null;\n  }\n\n  getPublicInstance() {\n    // \u5bf9\u4e8e DOM \u7ec4\u4ef6\uff0c\u53ea\u516c\u5171 DOM \u8282\u70b9\n    return this.node;\n  }\n\n  mount() {\n    const element = this.currentElement;\n    const type = element.type;\n    const props = element.props;\n    const children = props.children || [];\n    if (!Array.isArray(children)) {\n      children = [children];\n    }\n\n    // \u521b\u5efa\u5e76\u4fdd\u5b58\u8282\u70b9\n    const node = document.createElement(type);\n    this.node = node;\n\n    // \u8bbe\u7f6e\u5c5e\u6027\n    Object.keys(props).forEach(propName => {\n      if (propName !== 'children') {\n        node.setAttribute(propName, props[propName]);\n      }\n    });\n\n    // \u521b\u5efa\u5e76\u4fdd\u5b58\u5305\u542b\u7684\u5b50\u9879\n    // \u4ed6\u4eec\u6bcf\u4e2a\u90fd\u53ef\u4ee5\u662f DOMComponent \u6216\u8005\u662f CompositeComponent\uff0c\n    // \u53d6\u51b3\u4e8e\u7c7b\u578b\u662f\u5b57\u7b26\u4e32\u8fd8\u662f\u51fd\u6570\n    const renderedChildren = children.map(instantiateComponent);\n    this.renderedChildren = renderedChildren;\n\n    // \u6536\u96c6\u4ed6\u4eec\u5728 mount \u4e0a\u8fd4\u56de\u7684\u8282\u70b9\n    const childNodes = renderedChildren.map(child => child.mount());\n    childNodes.forEach(childNode => node.appendChild(childNode));\n\n    // DOM \u8282\u70b9\u4f5c\u4e3a\u6302\u8f7d\u7ed3\u679c\u8fd4\u56de\n    return node;\n  }\n}\n")),(0,i.kt)("h3",{id:"\u5378\u8f7d\u9636\u6bb5"},"\u5378\u8f7d\u9636\u6bb5"),(0,i.kt)("p",null,"\u7ec4\u4ef6\u5378\u8f7d\u4e5f\u662f\u4e00\u4e2a\u9012\u5f52\u7684\u8fc7\u7a0b\uff0c\u4ece\u5f53\u524d\u7ec4\u4ef6\u5f00\u59cb\u9012\u5f52\u5378\u8f7d\u5b50\u7ec4\u4ef6\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"class CompositeComponent {\n  // ...\n\n  unmount() {\n    // \u5982\u679c\u6709\u751f\u547d\u5468\u671f\u65b9\u6cd5\u5c31\u8c03\u7528\n    const publicInstance = this.publicInstance;\n    if (publicInstance) {\n      if (publicInstance.componentWillUnmount) {\n        publicInstance.componentWillUnmount();\n      }\n    }\n\n    // \u5378\u8f7d\u5b50\u7ec4\u4ef6\n    const renderedComponent = this.renderedComponent;\n    renderedComponent.unmount();\n  }\n}\n")),(0,i.kt)("h3",{id:"\u66f4\u65b0\u9636\u6bb5"},"\u66f4\u65b0\u9636\u6bb5"),(0,i.kt)("h4",{id:"diff-\u7b97\u6cd5"},"diff \u7b97\u6cd5"),(0,i.kt)("p",null,"\u5728\u4e0a\u8ff0\u8fc7\u7a0b\u8bf4\u5230",(0,i.kt)("inlineCode",{parentName:"p"},"reconciler"),"\u4f1a\u521b\u5efa\u4e00\u68f5 virtual dom tree\uff0c\u5f53",(0,i.kt)("inlineCode",{parentName:"p"},"state"),"\u6216\u8005",(0,i.kt)("inlineCode",{parentName:"p"},"props"),"\u66f4\u65b0\u7684\u65f6\u5019\uff0c\u4ece\u7ec4\u4ef6\u83b7\u53d6\u7684\u5143\u7d20\u53ef\u80fd\u53d1\u751f\u53d8\u5316\uff0cReact \u9700\u8981\u5bf9\u4e24\u4e2a\u4e0d\u540c\u7684 dom \u5143\u7d20\u8fdb\u884c\u5bf9\u6bd4\u4ee5\u786e\u5b9a\u9700\u8981\u66f4\u65b0\u7684\u90e8\u5206\u3002"),(0,i.kt)("p",null,"React \u57fa\u4e8e",(0,i.kt)("strong",{parentName:"p"},"\u4e24\u4e2a\u5047\u8bbe"),"\u7684\u524d\u63d0\u63d0\u51fa\u4e86\u4e00\u79cd\u9ad8\u6548\u7684\u66f4\u65b0\u7b97\u6cd5\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4e24\u4e2a\u4e0d\u540c\u7c7b\u578b\u7684\u5143\u7d20\u4f1a\u4ea7\u751f\u51fa\u4e0d\u540c\u7684 dom tree\uff1b"),(0,i.kt)("li",{parentName:"ul"},"\u5f00\u53d1\u8005\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e ",(0,i.kt)("inlineCode",{parentName:"li"},"key")," \u5c5e\u6027\uff0c\u6765\u544a\u77e5\u6e32\u67d3\u54ea\u4e9b\u5b50\u5143\u7d20\u5728\u4e0d\u540c\u7684\u6e32\u67d3\u4e0b\u53ef\u4ee5\u4fdd\u5b58\u4e0d\u53d8")),(0,i.kt)("p",null,"\u5728\u8fd9\u4e24\u4e2a\u57fa\u7840\u5047\u8bbe\u7684\u524d\u63d0\u4e0b\uff0c\u6267\u884c diff \u7b97\u6cd5\uff0c\u9996\u5148\u4f1a\u5bf9\u6bd4\u66f4\u65b0\u5143\u7d20\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"type"),"\uff0c\u5f53\u7c7b\u578b\u53d1\u751f\u53d8\u5316\u65f6\uff0c\u4ece\u5f53\u524d\u5143\u7d20\u5230\u6240\u6709\u5b50\u5143\u7d20\u5168\u90e8\u5378\u8f7d\u91cd\u5efa\uff0c\u72b6\u6001\u4e5f\u4f1a\u88ab\u9500\u6bc1\uff0c\u5982\u679c\u662f\u7c7b\u7ec4\u4ef6\u4f1a\u6267\u884c\u5378\u8f7d\u7684\u751f\u547d\u5468\u671f\u65b9\u6cd5\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"<div>\n  <Counter />\n</div>\n\n// \u66f4\u65b0\u540e\n<span>\n  <Counter />\n</span>\n")),(0,i.kt)("p",null,"\u5982\u679c\u5f53\u524d\u5143\u7d20\u7c7b\u578b\u6ca1\u6709\u6539\u53d8\uff0c\u7b2c\u4e8c\u6b65\u5f00\u59cb\u5bf9\u6bd4\u5b83\u4eec\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"props"),"\u5c5e\u6027\uff0c\u9009\u62e9\u4ec5\u66f4\u65b0\u53d1\u751f\u6539\u53d8\u7684\u5c5e\u6027\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"| pure","|":!0,pure:!0},'<div className="before" title="stuff" />\n\n<div className="after" title="stuff" />\n')),(0,i.kt)("p",null,"\u5f53\u524d\u8282\u70b9\u5bf9\u6bd4\u5b8c\u4ee5\u540e\u5982\u679c\u5b58\u5728\u5b50\u5143\u7d20\uff0c\u5219\u4f1a\u9012\u5f52\u5bf9\u6bd4\u5b50\u5143\u7d20\u3002\u7531\u4e8e\u5b50\u5143\u7d20\u53ef\u80fd\u5b58\u5728\u591a\u4e2a\uff0c\u5f53\u5b58\u5728\u591a\u4e2a\u5b50\u5143\u7d20\u65f6\uff0cReact \u4f1a\u540c\u65f6\u904d\u5386\u5b50\u5143\u7d20\u7684\u5217\u8868\uff0c\u56e0\u6b64\u8fd9\u91cc\u5f15\u5165\u4e86",(0,i.kt)("inlineCode",{parentName:"p"},"key"),"\u6765\u6807\u8bb0\u5b50\u5143\u7d20\u3002"),(0,i.kt)("p",null,"\u5728\u4e0a\u8ff0\u7b2c\u4e8c\u4e2a\u5047\u8bbe\u7684\u524d\u63d0\u4e0b\uff0c\u5f53",(0,i.kt)("inlineCode",{parentName:"p"},"key"),"\u53d1\u751f\u53d8\u5316\u7684\u65f6\u5019\uff0c\u5c31\u8868\u793a\u5f53\u524d\u5b50\u5143\u7d20\u53d1\u751f\u53d8\u5316\uff0c\u5982\u679c\u4e0d\u53d8\u5219\u670d\u7528\u5f53\u524d\u5b50\u5143\u7d20\u5b9e\u4f8b\uff0c\u8fd9\u6837\u6765\u63d0\u9ad8 diff \u7b97\u6cd5\u7684\u6548\u7387\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"| pure","|":!0,pure:!0},'<ul>\n  <li key="2015">Duke</li>\n  <li key="2016">Villanova</li>\n</ul>\n\n<ul>\n  <li key="2014">Connecticut</li>\n  <li key="2015">Duke</li>\n  <li key="2016">Villanova</li>\n</ul>\n')),(0,i.kt)("p",null,"\u8fd9\u91cc\u6709\u4e2a\u9700\u8981\u6ce8\u610f\u7684\u70b9\u662f\uff0c\u5bf9\u4e8e\u4f1a\u53d1\u751f\u91cd\u65b0\u6392\u5e8f\uff0c\u5220\u9664\uff0c\u65b0\u589e\u7b49\u60c5\u51b5\u7684\u65f6\u5019\uff0c\u7981\u6b62\u4f7f\u7528\u6570\u7ec4\u4e0b\u6807\u4f5c\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"key"),"\uff0c\u56e0\u4e3a\u8fd9\u6837\u751f\u6210\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"key"),"\u5728\u8fd9\u4e9b\u60c5\u51b5\u4e0b\u90fd\u4f1a\u53d1\u751f\u53d8\u5316\uff0c",(0,i.kt)("strong",{parentName:"p"},"\u4e0d\u7a33\u5b9a\u7684",(0,i.kt)("inlineCode",{parentName:"strong"},"key"),"\u4f1a\u5bfc\u81f4\u8bb8\u591a\u7ec4\u4ef6\u5b9e\u4f8b\u548c DOM \u8282\u70b9\u88ab\u4e0d\u5fc5\u8981\u5730\u91cd\u65b0\u521b\u5efa\uff0c\u8fd9\u53ef\u80fd\u5bfc\u81f4\u6027\u80fd\u4e0b\u964d\u548c\u5b50\u7ec4\u4ef6\u4e2d\u7684\u72b6\u6001\u4e22\u5931"),"\u3002"),(0,i.kt)("h4",{id:"\u6267\u884c\u66f4\u65b0"},"\u6267\u884c\u66f4\u65b0"),(0,i.kt)("p",null,"\u4e0a\u9762\u7b80\u5355\u4ecb\u7ecd\u4e86 diff \u7b97\u6cd5\u7684\u8fc7\u7a0b\uff0c\u800c\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"CompositeComponent"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"DOMComponent"),"\u5185\u90e8\u5177\u6709",(0,i.kt)("inlineCode",{parentName:"p"},"receive"),"\u65b9\u6cd5\uff0c\u5176\u63a5\u6536",(0,i.kt)("inlineCode",{parentName:"p"},"state"),"\u6216\u8005",(0,i.kt)("inlineCode",{parentName:"p"},"props"),"\u66f4\u65b0\u4ee5\u540e\u8fd4\u56de\u7684\u65b0\u7684\u7ec4\u4ef6\u5143\u7d20\u4f5c\u4e3a\u53c2\u6570\uff0c\u5e76\u8fdb\u884c diff"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"class CompositeComponent {\n  receive(nextElement) {\n    const prevRenderedComponent = this.renderedComponent;\n\n    // \u627e\u5f53\u524d\u5143\u7d20\u4e0b\u4e00\u6b21\u66f4\u65b0\u8f93\u51fa\u7684\u5143\u7d20\n    let nextRenderedElement;\n    if (isClass(type)) {\n      // \u7c7b\u7ec4\u4ef6\n      // \u5982\u679c\u6709\u751f\u547d\u5468\u671f\u65b9\u6cd5\u5c31\u8c03\u7528\n      if (publicInstance.componentWillUpdate) {\n        publicInstance.componentWillUpdate(nextProps);\n      }\n      // \u66f4\u65b0 props\n      publicInstance.props = nextProps;\n      // \u91cd\u65b0\u6e32\u67d3\n      nextRenderedElement = publicInstance.render();\n    } else if (typeof type === 'function') {\n      // \u51fd\u6570\u7ec4\u4ef6\n      nextRenderedElement = type(nextProps);\n    }\n\n    // \u5982\u679c\u6e32\u67d3\u5143\u7d20\u7684 type \u6ca1\u6709\u66f4\u6539\uff0c\u91cd\u7528\u5df2\u7ecf\u5b58\u5728\u7ec4\u4ef6\u5b9e\u4f8b\u5e76\u9000\u51fa\u3002\n    if (prevRenderedElement.type === nextRenderedElement.type) {\n      prevRenderedComponent.receive(nextRenderedElement);\n      return;\n    }\n\n    // \u5982\u679c\u6e32\u67d3\u7684\u5143\u7d20 type \u53d1\u751f\u6539\u53d8\uff0c\u5219\u9012\u5f52\u5378\u8f7d\u5f53\u524d\u5143\u7d20\u53ca\u5176\u5b50\u5143\u7d20\n    prevRenderedComponent.unmount();\n    // \u83b7\u53d6\u65b0\u7684\u5143\u7d20\n    const nextRenderedComponent = instantiateComponent(nextRenderedElement);\n    // \u66ff\u6362\u5b50\u7ec4\u4ef6\u7684\u5f15\u7528\n    this.renderedComponent = nextRenderedComponent;\n  }\n}\n")),(0,i.kt)("p",null,"\u5982\u679c\u662f\u5bbf\u4e3b\u5143\u7d20\uff0c\u5bf9\u5e94\u5b9e\u9645\u7684 DOM \u5143\u7d20\uff0c\u6240\u4ee5\u4f1a\u521b\u5efa\u66f4\u65b0 DOM \u7684\u961f\u5217\uff0c\u8fdb\u884c\u6279\u91cf DOM \u64cd\u4f5c"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"class DOMComponent {\n  receive(nextElement) {\n    // \u5f53\u6211\u4eec\u8fed\u4ee3\u5b50\u7ec4\u4ef6\u65f6\uff0c\u6211\u4eec\u5c06\u5411\u6570\u7ec4\u6dfb\u52a0\u76f8\u5e94\u64cd\u4f5c\u3002\n    const operationQueue = [];\n    const nextRenderedChildren = [];\n    const nextChildren = nextElement.props.children || [];\n\n    // \u9012\u5f52\u5904\u7406\u5b50\u5143\u7d20\n    for (var i = 0; i < nextChildren.length; i++) {\n      // \u5c1d\u8bd5\u53bb\u83b7\u53d6\u6b64\u5b50\u7ec4\u4ef6\u73b0\u6709\u7684\u5185\u90e8\u5b9e\u4f8b\n      const prevChild = this.renderedChildren[i];\n\n      // \u5982\u679c\u6b64\u7d22\u5f15\u4e0b\u6ca1\u6709\u5185\u90e8\u5b9e\u4f8b\uff0c\u5219\u521b\u5efa\u65b0\u7684\u5185\u90e8\u5b9e\u4f8b,\u6302\u8f7d\u5b83,\u5e76\u4f7f\u7528\u5176\u8282\u70b9\u3002\n      if (!prevChild) {\n        const nextChild = instantiateComponent(nextChildren[i]);\n        const node = nextChild.mount();\n\n        // \u8bb0\u5f55\u6211\u4eec\u9700\u8981\u8ffd\u52a0\u7684\u8282\u70b9\n        operationQueue.push({ type: 'ADD', node });\n        nextRenderedChildren.push(nextChild);\n        continue;\n      }\n\n      // \u7c7b\u578b\u4e0d\u540c\uff0c\u5378\u8f7d\u5f53\u524d\u5b50\u5143\u7d20\u5e76\u66ff\u6362\u6210\u65b0\u7684\u5b50\u5143\u7d20\n      if (prevChild.type !== nextChildren[i].type) {\n        var prevNode = prevChild.getHostNode();\n        prevChild.unmount();\n\n        const nextChild = instantiateComponent(nextChildren[i]);\n        const nextNode = nextChild.mount();\n\n        // \u8bb0\u5f55\u6211\u4eec\u9700\u8981\u66ff\u6362\u7684\u8282\u70b9\n        operationQueue.push({ type: 'REPLACE', prevNode, nextNode });\n        nextRenderedChildren.push(nextChild);\n        continue;\n      }\n    }\n\n    // \u6279\u91cf\u64cd\u4f5c DOM\n    while (operationQueue.length > 0) {\n      var operation = operationQueue.shift();\n      switch (operation.type) {\n        case 'ADD':\n          this.node.appendChild(operation.node);\n          break;\n        case 'REPLACE':\n          this.node.replaceChild(operation.nextNode, operation.prevNode);\n          break;\n        case 'REMOVE':\n          this.node.removeChild(operation.node);\n          break;\n      }\n    }\n  }\n}\n")),(0,i.kt)("h3",{id:"\u7f3a\u9677"},"\u7f3a\u9677"),(0,i.kt)("p",null,"\u4ece",(0,i.kt)("inlineCode",{parentName:"p"},"stack reconciler"),"\u7684\u4f2a\u4ee3\u7801\u4ecb\u7ecd\u53ef\u4ee5\u770b\u51fa\u6700\u540e\u6267\u884c DOM \u66f4\u65b0\u7684\u8fc7\u7a0b\u662f\u4e00\u4e2a\u961f\u5217\u904d\u5386\u7684\u8fc7\u7a0b\uff0c\u4f1a\u5bf9\u6240\u6709\u4ea7\u751f\u7684\u66f4\u65b0\u4e00\u6b21\u6027\u5b8c\u6210\uff0c\u8fd9\u5c31\u5bfc\u81f4\u5728\u5b58\u5728\u5927\u91cf\u8282\u70b9\u66f4\u65b0\u7684\u65f6\u5019\uff0c\u8fd9\u4e2a\u8fc7\u7a0b\u4f1a\u5f02\u5e38\u8017\u65f6\uff0c\u8fdb\u800c\u963b\u585e\u9875\u9762\u6e32\u67d3\uff0c\u5bfc\u81f4\u66f4\u65b0\u8fc7\u7a0b\u7684\u9875\u9762\u5361\u987f\u3002\u540c\u65f6\uff0c\u8fd9\u4e2a\u8fc7\u7a0b\u6ca1\u6709\u4f18\u5148\u7ea7\u533a\u5206\uff0c\u4e5f\u4e0d\u53ef\u4e2d\u65ad\u3002"))}u.isMDXComponent=!0}}]);