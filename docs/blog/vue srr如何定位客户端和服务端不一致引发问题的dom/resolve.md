

error

```javascript
vue.runtime.esm.js:619 [Vue warn]: The client-side rendered virtual DOM tree is not matching server-rendered content. This is likely caused by incorrect HTML markup, for example nesting block-level elements inside <p>, or missing <tbody>. Bailing hydration and performing full client-side render.
```



resolve

link：https://stackoverflow.com/questions/47862591/vuejs-error-the-client-side-rendered-virtual-dom-tree-is-not-matching-server-re?answertab=trending#tab-top

```
1、Show DevTools in Chrome (F12)
2、Load the page that causes "the client-side rendered virtual DOM tree..." warning.
3、Scroll to the warning in DevTools console.
4、Click at the source location hyperlink of the warning (in my case it was vue.runtime.esm.js:574).
5、Set a breakpoint there (left-clicking at line number in the source code browser).
6、Make the same warning to appear again. I'm not saying it is always possible, but in my case I simply reloaded the page. If there are many warnings, you can check the message by moving a mouse over msg variable.
7、When you found your message and stopped on a breakpoint, look at the call stack. Click one frame down to call to "patch" to open its source. Hover mouse over hydrate function call 4 lines above the execution line in patch. Hyperlink to the source of hydrate would open.
8、In the hydrate function, move about 15 lines from the start and set a breakpoint where false is returned after assertNodeMatch returned false. Set the breakpoint there and remove all other breakpoints.
9、Make the same warning to happen again. Now, when breakpoint is hit, execution should stop in the hydrate function. Switch to DevTools console and evaluate elm and then vnode. Here elm seem to be a server-rendered DOM element while vnode is a virtual DOM node. Elm is printed as HTML so you can figure out where the error happened.
```

