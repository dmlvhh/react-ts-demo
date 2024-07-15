import React from 'react'
// import StateDemo1 from './StateDemo1'
// import StateDemo2 from './StateDemo2'
import List2 from './List2'
// import ImmerDemo from './ImmerDemo'
// import UseRefDemo from './useRefDemo'
// import UseMemoDemo from './UseMemoDemo'
// import UseCallbackDemo from './UseCallbackDemo'
// import { useTitle } from './hooks/useTitle'
// import { useMouse } from './hooks/useMouse'
// import { useGetInfo } from './hooks/useGetInfo'
// import { useTitle } from 'ahooks'
// import { useMouse } from 'ahooks'
// import ClosureTrap from './ClosureTrap'

function App() {
  // useTitle('App page 11') //自定义hook
  // const { x, y } = useMouse()
  // const { loading, info } = useGetInfo()
  // useTitle('App page3')
  // const mouse = useMouse()
  return (
    <>
      {/*<ClosureTrap />*/}
      {/*<p>App page {x} {y}</p>*/}
      <p>{/*App page {mouse.pageX} {mouse.pageY}*/}</p>
      {/*<p>App page</p>*/}
      {/*<p>{loading ? '加载中...' : info}</p>*/}
      {/*<List1 />*/}
      {/*<StateDemo1 />*/}
      {/*<StateDemo2 />*/}
      <List2 />
      {/*<ImmerDemo />*/}
      {/*<UseRefDemo />*/}
      {/*<UseMemoDemo />*/}
      {/*<UseCallbackDemo />*/}
    </>
  )
}
export default App
