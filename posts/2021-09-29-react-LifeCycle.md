# 배경

class형태로 react코드를 프로그래밍 했었다.
lifeCycle을 통해서 원하는 시점에 특정 기능이 동작하도록 프로그래밍 할 수 있었다.
react 코드에서 hooks를 사용하게 되면서 lifeCycle을 어떻게 쓸 수 있는지 궁금해 졌다.
지금부터는 lifeCycle에 관해서 알아보고 예제를 통해 hooks을 통해 구현해 보려고 한다.

# Lifecycle methods ?

>[Lifecycle methods](https://en.wikipedia.org/wiki/React_(JavaScript_library)#Lifecycle_methods) use a form of [hooking](https://en.wikipedia.org/wiki/Hooking) that allows the execution of code at set points during a component's lifetime.

라이프사이클 메서드는 구성 요소의 수명 동안 설정된 지점에서 코드를 실행할 수 있는 후크 형식을 사용합니다.

# 왜 사용?
프로그래밍을 하면서 특정 시점에 코드를 수행해야 할 때 사용할 수 있습니다.

# [React 16.4 Life Cycle](https://miro.medium.com/max/2000/1*rrl7MQc41h5ElkLmMTdSUA.jpeg)

* life cycle은 업데이트 된다.
Why need to update to new LifeCycle?
---

# Mounting
```
These methods are called in the following order when an instance of a component is being created and inserted into the DOM:
```

constructor()
static getDerivedStateFromProps()
render()
componentDidMount()

# Updating

```
An update can be caused by changes to props or state. These methods are called in the following order when a component is being re-rendered:
```

static getDerivedStateFromProps()
shouldComponentUpdate()
render()
getSnapshotBeforeUpdate()
componentDidUpdate()

# Unmounting

```
This method is called when a component is being removed from the DOM:
```

componentWillUnmount()

---

# Commonly Used Lifecycle Methods

## [render](https://reactjs.org/docs/react-component.html#render)

* render 함수는 오직 클레스 컴포넌트에서 요청된다
* render 함수는 꺠끗하게 유지해야만 한다 그 의미는 그것은 수정하지 않는다 컴포넌트 상태를 ,그것은 반환한다 같은 결과를 그것이 호출되는 매시간 그리고 그것은 직접적으로 상호작용하지 않는다 브라우저에
* 만약 브라우저와 상호작용이 필요하다면 수행해라 당신의 작업을 `componentDidMount() ` 나 다른 `lifecycle methods`를 대신에.
* ` shouldComponentUpdate()` 이 `false`를 반환한다면 render()는 호출되지 않을 거다

### [constructor](https://reactjs.org/docs/react-component.html#constructor)
* If you don’t initialize state and you don’t bind methods, you don’t need to implement a constructor for your React component.
* You <b>should not call `setState()` in the `constructor()`.Instead, if your component needs to use local state, <b>assign the initial state to `this.state`</b> directly in the constructor:</b>

### componentDidMount
* componentDidMount() is invoked immediately after a component is mounted

### componentDidUpdate
* componentDidUpdate() is invoked immediately after updating occurs.

