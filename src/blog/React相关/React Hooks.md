# React Hooks

## Hook 简介

### Hook 是什么？

一句话表述：Hook 是 React16.8 的新增特性，它是一个函数，可以在不编写 class 的情况下使用 state 和 React 的其他特性。

作为示例：看看 useState hook 是如何使用的：

```tsx
import React, { useState } from 'react';

function Example() {
  // 声明一个新的叫做 “count” 的 state 变量
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

useState 这个 hook 的接收一个状态的初始值作为参数，返回一个数组，数组的第一个元素是状态本身，另一个是变更状态的方法，这个方法接收变更后的值作为参数。

### 什么时候使用 hook?

如果在编写或扩展一个函数组件时需要向其添加一些 state, 以前的做法是必须将其转换为 class 组件，而现在有了hook，我们可以直接在函数组件中使用 class 的能力。

### 动机

hook 的出现，是用来解决以下问题的：

#### 1. 在组件之间难以复用状态逻辑

如果一些需要复用的逻辑里面包含了状态( state/prop )，我们可以使用 HOC 或 render props 来实现，但它们的共同特点是：需要重新组织组件结构。而 hook 不需要。

#### 2. 生命周期函数中存在着太多不相关的副作用

我们的组件一开始可能只有很简单的逻辑，但是随着业务的发展，逐渐会被状态逻辑和副作用充斥， 每个生命周期中可能都存在着各不相关的逻辑。比如组件经常会在 componentDidMount 和 componentDidUpdate 中获取数据（比如搜索框组件，每次输入后都需要重新查询数据），但 componentDidMount 中又可能包含其他的逻辑，比如设置事件监听，然后这个事件监听又需要再 componentWillUnmuont中清除。

这种方式就会产生一些问题：请求数据的逻辑需要在不同的生命周期中书写，如果有改动也需要同时改动多处代码；而不相关的事件监听却和请求数据被一同放在了 componentDidMount 中，这样很容易造成一些bug。

为了解决这个问题，Hook 将组件中相关的逻辑拆分成了更小粒度的函数（如将请求数据和事件监听分离），而非在生命周期中书写。

#### 3. 难以理解的 class

在使用 class 时，必须要去理解 javascript 中 this 的工作方式，而且还需要绑定事件处理器。

在 hook 出现之前，我们需要根据组件的类型去决定到底使用 class 组件还是函数组件（有状态使用 class，无状态使用函数组件），而现在，在函数组件中使用 hook，可以做到大部分 class 可以做到的事情，而且在大多数时候的使用更为方便。

### class 会被放弃吗？

> 没有计划从 React 中移除 class。

你可以在项目中使用 class，可以使用 hook，也可以两者混用。

React 官方计划为 hook 覆盖所有 class 组件的使用场景，但也会继续为 class 提供支持。

>注意：
>
>`getSnapshotBeforeUpdate`，`componentDidCatch` 以及 `getDerivedStateFromError`：目前还没有这些方法的 Hook 等价写法，但很快会被添加。

## React 预置的 Hook

### useState

`useState` 接受一个参数：初始 state，返回一个数组，第一个元素为当前 state，第二个元素为更新 state 的函数。它们类似于 class 组件中的 state 和 setState，区别在于使用 useState hook，赋的值可以不是对象，且需要成对获取 state 本身与更新函数。

#### 基础用法

```tsx
import React, { useState } from 'react';

function Example() {
  // 声明一个叫 "count" 的 state 变量
  const [count, setCount] = useState(0);
  return (
    <button onClick={()=>setCount(count+1)}>点击次数：{count}</button>
  )
}
```

在 Example 组件中，初始化了一个名为 count 的 state，并给它赋值为0，当用户点击按钮时，会传递加1后的值给 setCount 方法并调用，React 会重新渲染 Example 组件并传递最新的 count 值给它。

#### 使用多个 state

```tsx
function ExampleWithManyStates() {
  // 声明多个 state 变量
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState('banana');
  const [todos, setTodos] = useState([{ text: '学习 Hook' }]);
}
```

#### 注意

当 state 为一个对象时，跟 class 中的 setState 不同的是，使用 hook 更新 state 变量总是会 **替换** 它而不是合并它。

### useEffect

effct hook 可以让你在函数组件中执行副作用操作，如请求数据、添加事件监听、设置定时器、操作DOM等。它可以告诉 React 组件需要在渲染后执行上述操作。React 会保存你的函数，并在执行 DOM 更新之后调用它。

> 可以把 useEffct 看成是 componentDidMount、componentDidUpdate、componentWillUnMount 的组合。

让我们来用 useEffect 来实现一个操作 DOM 的副作用：

```tsx
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() =>
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

在上面的组件中，我们使用 useEffct 来实现用户点击时记录点击次数并更新页面标题，它相当于在 class 组件中的 componentDidMount 和 componentDidUpdate 生命周期中执行相同的逻辑。

#### effct 分类

##### 无需清除的 effct

有时候，我们只想在 React 更新 DOM 之后运行一些额外的代码，比如发送网络请求，手动变更 DOM，记录日志等，这些都是常见的无需清除的操作，因为我们在执行完这些操作之后就可以忽略他们了。

##### 需要清除的 effect

有一些副作用是需要清除的，比如订阅外部数据源、设置定时器等。在这些情况下，清除工作是非常重要的，因为它们可能会引起内存泄漏。

在 class 中，通常在 componentDidMount 中设置订阅，然后在 componentWillUnMount 中清除订阅。而使用 useEffect，我们可以 一次就执行完相关的逻辑：

```tsx
import React, { useState, useEffect } from 'react';

function FriendStatus(props) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });

  if (isOnline === null) {
    return 'Loading...';
  }
  return isOnline ? 'Online' : 'Offline';
}
```

每一个 effct 中都可以返回一个函数，来指定如何清除副作用。如果你的 effct 中返回了一个函数，React 将在组件卸载时调用它。

#### 执行时机

默认情况下，useEffect 在第一次渲染和每一次重新渲染之后都会执行。你不用去关心组件到底是出于“挂载”还是“更新”状态。React 保证了每次运行 useEffect 时，DOM 都已经更新完毕。

我们会注意到，传递给 useEffect 的函数在每次渲染中都是不同的，这是刻意为之的设计。正是因为如此，它才保证了我们可以在 effect 中获取最新的 count 值，而不用担心其过期。每次重新渲染，都会生成新的 effect，替换掉之前的。从某种意义上来说，effect 更像渲染结果的一部分 —— 每一个 effect 都属于一次特定的渲染。

> 提示：与 componentDidMount 和 componentDidUpdate 不同，使用 useEffect 调度的 effect 不会阻止浏览器更新屏幕，这让应用看起来响应得更快。大多数情况下，effct 不需要同步执行。在个别情况下（比如测量布局），有单独的 useLayoutEffect Hook 可以使用，它的 API 和 useEffect 相同。

#### 使用多个 useEffect

```tsx
function FriendStatusWithCounter(props) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  const [isOnline, setIsOnline] = useState(null);
  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });
}
```

#### 通过跳过 Effect 进行性能优化

每次渲染之后都执行清理或调用 effect 可能会产生性能问题。在 class 组件中，一般通过在 componentDidUpdate 中比较前后的 props 或 state 来解决：

```tsx
componentDidUpdate(prevProps, prevState) {
  if (prevState.count !== this.state.count) {
    document.title = `You clicked ${this.state.count} times`;
  }
}
```

在 effect hook 中，如果某些特定值在两次重渲染之间没有发生变化，我们可以通知 React 跳过对 effct 的调用，方式是传递数组给 useEffect 的第二个参数：

```tsx
useEffect(() => {
  document.title = `You clicked ${count} times`;
}, [count]); // 仅在 count 更改时更新
```

上述代码中，第二个参数 `[count]` 的作用是什么呢？React 在 effect 调用之前对 useEffect 中的第二个参数数组进行对比，如果数组中的所有元素都跟之前的值完全相等，React 就会跳过这个 effect，从而实现性能优化；而如果数组中有多个元素，其中任意一个在重渲染之后发生了变化，React 都会执行这个 effect。

在上述的例子中，如果 count 的值是5，而重渲染之后的值还是5，React 就会跳过这个 effect。

> 注意：
>
> 如果你要使用此优化方式，请确保数组中包含了**所有外部作用域中会随时间变化并且在 effect 中使用的变量**，否则你的代码会引用到先前渲染中的旧变量。
>
> 如果想执行只运行一次的 effect（仅在组件挂载和卸载时执行），可以传递一个空数组（`[]`）作为第二个参数。这就告诉 React 你的 effect 不依赖于 props 或 state 中的任何值，所以它永远都不需要重复执行。这并不属于特殊情况 —— 它依然遵循依赖数组的工作方式。
>
> 如果你传入了一个空数组（`[]`），effect 内部的 props 和 state 就会一直拥有其初始值。

## Hook 的使用规则

hook 就是 js 函数，但是使用它会有两个额外的规则：

#### 只能在函数最外层调用 hook

不要在循环、条件判断或者子函数中调用；

#### 只能在 React 的函数中调用 hook

不要在普通的 JavaScript 函数中调用 hook。可以在以下情况调用 hook：

- 在 React 的函数组件中调用
- 在自定义 hook 中调用其他 hook

#### Hook 书写规则

我们可以在单个组件中使用多个 State Hook 或 Effect Hook

```tsx
function Form() {
  // 1. Use the name state variable
  const [name, setName] = useState('Mary');

  // 2. Use an effect for persisting the form
  useEffect(function persistForm() {
    localStorage.setItem('formData', name);
  });

  // 3. Use the surname state variable
  const [surname, setSurname] = useState('Poppins');

  // 4. Use an effect for updating the title
  useEffect(function updateTitle() {
    document.title = name + ' ' + surname;
  });

  // ...
}
```

React 怎么知道哪个 state 对应哪个 useState？答案是靠 Hook 调用的顺序。

```tsx
// 首次渲染
// ------------
useState('Mary')           // 1. 使用 'Mary' 初始化变量名为 name 的 state
useEffect(persistForm)     // 2. 添加 effect 以保存 form 操作
useState('Poppins')        // 3. 使用 'Poppins' 初始化变量名为 surname 的 state
useEffect(updateTitle)     // 4. 添加 effect 以更新标题

// -------------
// 二次渲染
// -------------
useState('Mary')           // 1. 读取变量名为 name 的 state（参数被忽略）
useEffect(persistForm)     // 2. 替换保存 form 的 effect
useState('Poppins')        // 3. 读取变量名为 surname 的 state（参数被忽略）
useEffect(updateTitle)     // 4. 替换更新标题的 effect
```

在上面的示例中，hook 的调用顺序在每次渲染时都是相同的，所以它能够正常工作。

但如果我们将一个 hook 放到一个条件语句中呢？

```tsx
if (name !== '') {
  useEffect(function persistForm() {
    localStorage.setItem('formData', name);
  });
}
```

在第一次渲染时，name 的值不为空，所以 hook 可以正常被执行。但在某一次渲染中，如果表单值被清空了，这个 hook 就不会被执行了。hook 调用顺序变成了如下：

```tsx
useState('Mary')           // 1. 读取变量名为 name 的 state（参数被忽略）
// useEffect(persistForm)  // 🔴 此 Hook 被忽略！
useState('Poppins')        // 🔴 2 （之前为 3）。读取变量名为 surname 的 state 失败
useEffect(updateTitle)     // 🔴 3 （之前为 4）。替换更新标题的 effect 失败
```

React 不知道第二个 `useState` 的 Hook 应该返回什么。React 会以为在该组件中第二个 Hook 的调用像上次的渲染一样，对应的是 `persistForm` 的 effect，但并非如此。从这里开始，后面的 Hook 调用都被提前执行，导致 bug 的产生。

这就是为什么 **hook 要在函数的最顶层调用** 。

如果我们想要有条件地执行一个 effect，可以将判断放到 Hook 的*内部*：

```tsx
useEffect(function persistForm() {
  // 👍 将条件判断放置在 effect 中
  if (name !== '') {
    localStorage.setItem('formData', name);
  }
});
```

## 自定义 Hook

自定义 hook 可以将组件逻辑提取到可重用的函数中。它是一种自然遵循 hook 设计的约定，而不是 React 的特性。

注意：

**自定义 hook 必须以 use 开头** ，否则 React 将无法自动检查你的 hook 是否违反了 hook 的定义规则。

**在两个组件中使用相同的 hook 会共享 state 吗？** 不会。自定义 hook 是一种重用状态逻辑的机制（例如设置为订阅并存储当前值），所以每次使用自定义 hook 时，其中的所有 state 和副作用都是完全隔离的。

**自定义 hook 如何获取独立的 state？** 每次调用 hook，它都会获取独立的 state。

自定义 hook 解决了以前在 React 组件中无法灵活共享逻辑的问题。你可以创建涵盖各种场景的自定义 hook，如表单处理、动画、订阅声明、计时器，甚至可能还有其他我们没有想象到的场景。

## Hook API 索引 - 基础 Hook

### useState

```tsx
const [state, setState] = useState(initialState);
```

返回一个数组，第一个元素为 state，第二个元素为更新这个 state 的函数。

在初始渲染期间，返回的状态与传入的初始值（initialState）值相同。

`setState`函数用于更新 state，它接收一个新的 state 值并将组件的一次重新渲染加入队列。

```tsx
setState(newState);
```

在后续的重新渲染中，useState 返回的第一个值将始终是更新后最新的 state。

>**注意：**
>
>React 会确保 setState 的函数标识是稳定的，并且不会在组件重新渲染时发生变化。这就是为什么可以安全地从 useEffect 或 useCallback 的依赖列表中省略 setState。

#### 函数式更新

如果新的 state 需要通过先前的 state 计算得出，那么可以将函数传给 setState。该函数将接收之前的 state，并返回一个更新后的值。下面的示例展示了 setState 的两种用法：

```tsx
function Counter({initialCount}) {
  const [count, setCount] = useState(initialCount);
  return (
    <>
      Count: {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
    </>
  );
}
```

加减按钮采用函数形式，因为被更新的 state 需要基于之前的 state 计算而来。但是“重置”按钮则采用普通形式，因为它总是把 count 设置回初始值。

如果更新函数的返回值与当前 state 完全相同，则随后的重渲染会被跳过。

> 注意：
>
> 与 class 组件的 setState 方法不同，useState 不会自动合并更新对象。我们可以使用函数式的 setState 结合展开运算符来达到合并更新后的效果。
>
> ```tsx
> setState(prevState => {
>   // 也可以使用 Object.assign
>   return {...prevState, ...updatedValues};
> });
> ```
>
> `useReducer`是另一种可选方案，它更适用于管理包含多个子值的 state 对象。

#### 惰性初始 state

`initialState`参数只会在组件的初始渲染中起作用，后续渲染时会被忽略。如果初始 state 需要通过复杂计算获得，则可以传入一个函数，在函数中计算并返回初始的 state，此函数只在初始渲染时被调用：

```tsx
const [state, setState] = useState(()=>{
	const initialState = someExpensiveComputation(props)
	return initialState
})
```

#### 跳过 state 更新

调用 State Hook 的更新函数并传入当前的 state 时，React 将跳过子组件的渲染及 effect 的执行（React 使用 `Object.is` 比较算法来比较 state）。

需要注意的是，React 仍可能需要在跳过渲染前渲染该组件。不过由于 React 不会对组件树的深层节点进行不必要的渲染，所以大可不必担心。如果在渲染期间执行了高开销的计算，可以使用 useMemo 进行优化。

### useEffect

```tsx
useEffect(didUpdate);
```

该 hook 接收一个包含命令式，且可能包含副作用代码的函数。

**在函数组件主体内（在React渲染阶段）改变DOM、添加订阅、设置定时器、记录日志以及执行其他包含副作用的操作都是不被允许的，** 因为这可能产生莫名其妙的 bug 并破坏 UI 的一致性。

使用 useEffect 完成副作用操作。赋值给 useEffect 的函数会在组件渲染到屏幕之后开始执行。*可以把 effect 看作从 React 的纯函数式世界通往命令式世界的逃生通道。*

**默认情况下，effct 将在每轮渲染结束后执行，但我们可以选择让他在只有某些值改变的时候执行。**

#### 清除 effect

通常，组件卸载时需要清除 effect 创建的诸如订阅或计时器ID 等资源。要实现此功能，useEffect 需要返回一个清除函数。以下就是一个创建订阅的例子：

```tsx
useEffect(()=>{
	const subscription = props.source.subscribe()
	return ()=>{
		subscription.unsubscribe()
	}
})
```

为防止内存泄漏，清除函数会在组件卸载前执行。另外，如果组件多次渲染，则在执行下一个 effect 之前，上一个 effect 就已经被清除。在上述示例中，意味着组件的每一次更新都会创建新的订阅。想要避免每次更新都触发 effect 的更新，请参阅如下。

#### effect 的执行时机

与 componentDidMount、componentDidUpdate 不同的是，在浏览器完成布局与绘制之后，传给 useEffect 的函数会被延迟调用 。这使得它适用于许多常见的副作用场景，比如设置订阅和事件处理等情况，因此 **不应该在函数中执行阻塞浏览器更新屏幕的操作** 。

然而并非所有 effect 都可以被延迟执行，比如在浏览器执行下一次绘制前，用户可见的 DOM 变更就必须被同步执行，这样用户才不会感觉到视觉上的不一致（概念上类似于被动监听事件和主动监听事件的区别）。React 为此提供了一个额外的 useLayoutEffect Hook 来处理这一类 effect。他和 useEffect 的 API 相同，只是调用时机不同。

虽然 useEffect 会在浏览器绘制后延迟执行，但会保证在任何新的渲染前执行。React 将在组件更新前刷新上一轮的 effect。

#### effect 的条件执行

默认情况下，effect 会在每轮组件渲染后执行。这样的话，一旦 effect 的依赖发生变化，它就会被重新创建。

然而，在某些场景下这么做可能会矫枉过正，比如在订阅的示例中，我们不需要在每一次组件更新时都重新创建订阅，而只需要在 source prop 属性改变时重新创建。

要实现此功能，需要给 useEffect 传递第二个参数，它表示 **effect 所依赖的值数组**  ：

```tsx
useEffect(
  () => {
    const subscription = props.source.subscribe();
    return () => {
      subscription.unsubscribe();
    };
  },
  [props.source],
);
```

这样一来，只有当 props.source 改变后才会重新创建订阅。

> 注意：
>
> 如果要使用此优化方式，需要确保数组中包含了 **所有外部作用域会发生变化且在 effect 中使用的变量**，否则代码将会引用到先前渲染中的旧变量。
>
> 如果想执行只运行一次的 effect（仅在组件挂载和卸载时执行），可以传递一个空数组（`[]`）作为第二个参数。这就告诉 React 你的 effect 不依赖于 props 或 state 中的任何值，所以它永远都不需要重复执行。这并不属于特殊情况 —— 它依然遵循输入数组的工作方式。

依赖项数组不会作为参数传给 effect 函数。虽然从概念上来说它表现为：所有 effect 函数中引用的值都应该出现在依赖项数组中。未来编译器会更加智能，届时自动创建数组将成为可能。

### useContext

```tsx
const value = useContext(MyContext);
```

它接收一个 Context 对象 (React.createContext的返回值) 并返回该 context 的当前值。当前的 context 值由上层组件中距离当前组件最近的 `<MyContext.Provider>` 的 `value` prop 决定。

当组件上层最近的 `MyContext.Provider` 更新时，该 hook 会触发重新渲染，并使用最新传递给 `MyContext` Provider 的 context value值。即使祖先使用 React.memo 或 shouldComponentUpdate，也会在组件本身使用 useContext 时重新渲染。

调用了 useContext 的组件总会在 context 值变化时重新渲染。如果重渲染组件的开销较大，可以使用 [memorization](https://github.com/facebook/react/issues/15156#issuecomment-474590693) 来优化。

示例：

```tsx
const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

const ThemeContext = React.createContext(themes.light);

function App() {
  return (
    <ThemeContext.Provider value={themes.dark}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      I am styled by theme context!
    </button>
  );
}
```

## Hook API 索引 - 额外 Hook

以下介绍的 hook，有些是基础 hook 的变体，有些则仅在特殊情况下会用到。

### useReducer

```tsx
const [state, dispatch] = useReducer(reducer, initialArg, init);
```

useState 的替代方案。

它接收一个形如 `(state, dispatch) => newState` 的 reducer， 并返回当前的 state 以及与其配套的 `dispatch` 方法（类似于 redux）。

在某些场景下，useReducer 会比 useState 更加适用，例如 state 逻辑较复杂且包含多个子值，或者下一个 state 依赖前一个 state 等。并且，使用 useReducer 还能给那些触发深更新的组件做性能优化，因为你可以向子组件传递 dispatch 而不是回调函数（基于context）。

使用 useReducer 重写计数器：

```tsx
const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
}
```

> 注意：
>
> React 会确保 dispatch 函数的标识是稳定的，并且不会在组件重新渲染时改变。这就是为什么可以安全地从 useEffect 或 useCallback 的依赖列表中省略 dispatch。

#### 指定初始 state

有两种不同的初始化 useReducer state 的方式，可以根据场景选择其中的一种。

##### 1. 将初始 state 作为 useReducer 的第二个参数传入

```tsx
const [ state, dispatch ] = useReducer(reducer, {count: initialCount})
```

> 注意
>
> React 不使用 `state = initialState` 这一由 Redux 推广开来的参数约定。有时候初始值依赖于 props，因此需要在调用 Hook 时指定。如果你特别喜欢上述的参数约定，可以通过调用 `useReducer(reducer, undefined, reducer)` 来模拟 Redux 的行为，但我们不鼓励你这么做。

##### 2. 惰性初始化

我们也可以选择惰性初始化 state。为此，需要将 init 函数作为 useReducer 的第三个参数传入，这样初始 state 将会被设置为 `init(initialArg)`。

这样做可以将用于计算 state 的逻辑提取到 reducer 外部，这也为将来重置 state 的 action 做处理提供了便利。

```tsx
function init(initialCount) {
  return {count: initialCount};
}

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    case 'reset':
      return init(action.payload);
    default:
      throw new Error();
  }
}

function Counter({initialCount}) {
  const [state, dispatch] = useReducer(reducer, initialCount, init);
  return (
    <>
      Count: {state.count}
      <button
        onClick={() => dispatch({type: 'reset', payload: initialCount})}>
        Reset
      </button>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
}

```

### useRef

```tsx
const refContainer = useRef(initialValue)
```

useRef 返回一个可变的 ref 对象，其 `.current` 属性被初始化为传入的参数（initialValue）。返回的 ref 对象在组件的整个生命周期内保持不变。

一个常见的用例便是命令式地访问子组件：

```tsx
function TextInputWithButton() {
	const inputRef = useRef(null)
  const onButtonClick = () => {
    // current指向已经挂载到 DOM 上的input元素
    inputRef.current.focus()
  }
  return (
  	<>
    	<input ref={inputRef} />
	    <button onClick={onButtonClick}>focus the input</button>
    </>
  )
}
```

从本质上说，`useRef()` 就像是一个可以在其 .current 属性中保存一个可变值的盒子。

就上面的用法来收，`useRef()` 跟 ref 并没有什么不同。但它比 ref 更加有用，它可以很方便地保存任何可变值，类似于在 class 中使用实例字段的方式。

这是因为它创建的是一个普通的 javascript 对象。**而 `useRef()` 和自建一个 `{current: ...}` 对象的唯一区别是，useRef 会在每一次渲染时返回同一个 ref 对象** 。

需要注意的是，当 ref 对象内容发生变化时，useRef 并不会通知你。变更 `.current` 属性不会引发重新渲染。如果想在 React 绑定或解绑 DOM 节点的 ref 时运行某些代码，请参考[回调ref](https://react.docschina.org/docs/hooks-faq.html#how-can-i-measure-a-dom-node)。

### useImperativeHandle

```tsx
useImperativeHandle(ref, createHandle, [deps])
```

`useImperative` 可以让你在使用 ref 时自定义暴露给父组件的实例值。大多数情况下，应当避免使用 ref 这样的命令式代码。`useImperativeHandle` 应当与 `React.forwordRef` 一起使用。

```tsx
function FancyInput(props, ref) {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    }
  }));
  return <input ref={inputRef} ... />;
}
FancyInput = forwardRef(FancyInput);
```

这样一来，渲染 `<FancyInput ref={inputRef} />` 的父组件可以调用 `inputRef.current.inputfocus()` 来使子组件中的 input 获得焦点。

### useLayoutEffect

其函数签名与 `useEffect` 相同，但它会在所有的 DOM 变更之后同步调用 effect。可以使用它来读取 DOM 布局并同步触发重渲染。在浏览器执行绘制之前，`useLayoutEffect` 内部的更新计划将被同步刷新。

尽可能使用标准的 `useEffect` 以避免阻塞视觉更新。

### useCallback

把内联回调函数和依赖项作为参数传递给 `useCallback`，它将返回该函数的 memorize 版本，也就是说会缓存该函数。

示例：

```jsx
import { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function HookIndex() {

	const store = useSelector(({count})=>({count}))
	const dispatch = useDispatch()
	const { count } = store
  
  // 优化：使用useCallback缓存方法，防止每次渲染都重新定义
  const add = useCallback(() => {
    // 调用dispatch
    dispatch({type: 'INCREMENT'})
  }, [])  // 无依赖项

	return (
		<div>
			Hook Index
			<div>
				{count}
			</div>
			<button onClick={()=>dispatch({type: 'INCREMENT'})}>add</button>
			<button onClick={()=>dispatch({type: 'DECREMENT'})}>minus</button>
		</div>
	)
}
```

### useDebugValue

```tsx
useDebugValue(value)
```

官方的说明是指能够在 React 开发者工具中显示自定义 hook 的标签，但是实际使用未能生效，暂时还找不到原因。

### useMemo

暂时还没完全理解这个 hook。













