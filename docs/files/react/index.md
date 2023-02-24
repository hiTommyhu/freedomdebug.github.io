
## 入门
 https://zh-hans.reactjs.org/docs/getting-started.html
 
 
## 单项数据流

> 这通常会被叫做“自上而下”或是“单向”的数据流。任何的 state 总是所属于特定的组件，而且从该 state 派生的任何数据或 UI 只能影响树中“低于”它们的组件。


## Fragments
https://zh-hans.reactjs.org/docs/fragments.html

你可以使用一种新的，且更简短的语法来声明 Fragments。它看起来像空标签：
```
class Columns extends React.Component {
  render() {
    return (
      <>
        <td>Hello</td>
        <td>World</td>
      </>
    );
  }
}
```
你可以像使用其他任意元素一样使用  ***<> </>***  ，但它并不支持 key 或属性。

