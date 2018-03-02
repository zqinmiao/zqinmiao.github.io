---
title: React官方文档知识点归纳-1
date: 2018-02-08 10:14:52
update:
comments:
tags: React
categories: 框架
permalink:
toc: true
---
>阅读了一下React的官方文档，翻译并归纳了一些知识点。这只是QUICK START部分
<!--more-->


## JSX语法：
### 元素属性名命名规则
* __属性名采用camelCase命名法，比如，类（class）就叫：'className'，tabindex就叫：'tabIndex'。[引用](https://reactjs.org/docs/introducing-jsx.html#specifying-attributes-with-jsx)__



## 组件
* __命名规则：始终以大写字母开头。[引用](https://reactjs.org/docs/components-and-props.html#rendering-a-component)__
* <font color=red>__[React is pretty flexible but it has a single strict rule :](https://reactjs.org/docs/components-and-props.html#props-are-read-only)__ __All React components must act like pure functions with respect to their props.__</font>

### 组件状态（state）
* __不要直接修改状态__

```
// 错误的
this.state.comment = 'Hello';
```
```
// 正确的
this.setState({comment: 'Hello'});
```
__唯一可以指定this.state的地方是构造函数。__

* __因为this.props和this.state可能会异步更新，所以不应该依赖它们的值来计算下一个状态。__

```
// 错误
this.setState({
  counter: this.state.counter + this.props.increment,
});
```
```
// 正确
this.setState((prevState, props) => ({
  counter: prevState.counter + props.increment
}));
```
```
// 正确
this.setState(function(prevState, props) {
  return {
    counter: prevState.counter + props.increment
  };
});
```

* This is commonly called a “top-down” or “unidirectional” data flow. Any state is always owned by some specific component, and any data or UI derived from that state can only affect components “below” them in the tree.

## [状态与生命周期（State and Lifecycle）](https://reactjs.org/docs/state-and-lifecycle.html)

* __componentDidMount()__
* __componentWillUnmount()__

## 处理事件（Handling Events）
* __[React事件使用camelCase命名，而不是小写。](https://reactjs.org/docs/handling-events.html)__
* __[使用JSX，您将传递一个函数作为事件处理程序，而不是字符串。](https://reactjs.org/docs/handling-events.html)__

For example, the HTML:

```
<button onclick="activateLasers()">
  Activate Lasers
</button>
```

in React:

```
<button onClick={activateLasers}>
  Activate Lasers
</button>
```

* __另一个区别是你不能返回false来防止React中的默认行为。您必须显式调用preventDefault。例如，对于纯HTML，为了防止打开新页面的默认链接行为，可以这样写：__

```
<a href="#" onclick="console.log('The link was clicked.'); return false">
  Click me
</a>
```

in React:

```
function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  return (
    <a href="#" onClick={handleClick}>
      Click me
    </a>
  );
}
```

## [条件渲染（Conditional Rendering）](https://reactjs.org/docs/conditional-rendering.html)

## [列表和键（Lists and Keys）](https://reactjs.org/docs/lists-and-keys.html)

* __关于列表中的key的添加的正确用法__

```
//错误的写法
function ListItem(props) {
  const value = props.value;
  return (
    // Wrong! There is no need to specify the key here:
    <li key={value.toString()}>
      {value}
    </li>
  );
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    // Wrong! The key should have been specified here:
    <ListItem value={number} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);
```
```
//正确的写法
function ListItem(props) {
  // Correct! There is no need to specify the key here:
  return <li>{props.value}</li>;
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    // Correct! Key should be specified inside the array.
    <ListItem key={number.toString()}
              value={number} />

  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);
```

* __key在兄弟元素之间必须是唯一的__

* __在JSX中插入map()__

```
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <ListItem key={number.toString()}
              value={number} />

  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}
```

## [表单（Forms）](https://reactjs.org/docs/forms.html)

## [<font color=red>状态提升（Lifting State Up）</font>](https://reactjs.org/docs/forms.html)

## [构成与继承（Composition vs Inheritance））](https://reactjs.org/docs/composition-vs-inheritance.html)
