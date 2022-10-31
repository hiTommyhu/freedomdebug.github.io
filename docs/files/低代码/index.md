> 记录一些低代码的收集和感悟以及一些碎片


[tmagic-editor](/files/低代码/tmagicEditor.md)


### vue动态加载js和css以及部分页面加载特定的js和css

```typescript
export class WMTools {
  /**
   * 动态加载css文件
   * @param {*} url
   * @param {*} isCache
   */
  static loadCSS(url: string, isCache = false) {
    const element = document.createElement("link");
    element.setAttribute("rel", "stylesheet");
    element.setAttribute("type", "text/css");
    if (isCache) {
      element.setAttribute("href", url + "?t=" + new Date().getTime());
    } else {
      element.setAttribute("href", url);
    }
    document.head.appendChild(element);
  }
  /**
   * 动态加载js文件
   * @param {*} src
   * @param {*} callback
   *   loadScript("",function(){
   *   console.log("加载成功")
   * })
   * var that = this; 在方法里面使用that
   */
  static loadJS(
    src: string,
    callback: (this: HTMLScriptElement, ev: Event) => void,
    isCache = false
  ): void {
    const script = document.createElement("script");
    script.type = "text/JavaScript";
    if (isCache) {
      script.src = src + "?t=" + new Date().getTime();
    } else {
      script.src = src;
    }
    if (script.addEventListener) {
      script.addEventListener("load", callback, false);
    }
    document.head.appendChild(script);
  }
}
```

```javascript

/**
 * 动态加载css文件
 * @param {*} url
 * @param {*} isCache
 */
export function loadCSS(url,isCache=false) {
  let element = document.createElement("link");
  element.setAttribute("rel", "stylesheet");
  element.setAttribute("type", "text/css");
  if (isCache) {
    element.setAttribute("href", url + "?t=" + new Date().getTime());
  } else {
    element.setAttribute("href", url);
  }
  document.head.appendChild(element);
}

/**
 * 动态加载js文件
 * @param {*} src
 * @param {*} callback
 *   loadScript("",function(){
 *   console.log("加载成功")
 * })
 * var that = this; 在方法里面使用that
 */
export function loadJS(jsUrl, callback,isCache = false) {
  var script = document.createElement('script');
  var head = document.head;
  script.type = 'text/JavaScript';
  if (isCache) {
      script.src = jsUrl + "?t=" + new Date().getTime();
  }else {
    script.src = jsUrl
  }
  if (script.addEventListener) {
    script.addEventListener('load', callback, false);
  }
  head.appendChild(script);
}
```

```
loadJS("xxxx.js", function () {
   console.log("加载成功")
});
```
