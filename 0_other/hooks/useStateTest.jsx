import React from 'react'
import { useState } from 'react'

function App() {
  /* 
  useState(初始值): 返回包含内部管理的state数据和更新数据的函数的数组
  我们可以用解构的写法取出state数据和更新数据的函数
  state数据变量根据数据意义取名: xxx  => 界面根据xxx来显示
  更新数据的函数一般取名: setXxx => 调用setXxx会重新执行组件函数 (也就是重新render组件)
  第一次调用useState
  重新redner调用useState
  */
  const [count, setCount] = useState(0)
  
  return <div>
    <h2>App组件</h2>
    <p>state.count: {count}</p>
    <button onClick={() => setCount(count + 1)}>更新count</button>
  </div>
}

export default App