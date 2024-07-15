import React from 'react'
// import StateDemo1 from './StateDemo1'
// import StateDemo2 from './StateDemo2'
// import List2 from './List2'
// import ImmerDemo from './ImmerDemo'
// import UseRefDemo from './useRefDemo'
// import UseMemoDemo from './UseMemoDemo'
// import UseCallbackDemo from './UseCallbackDemo'
// import { useTitle } from './hooks/useTitle'
import { useMouse } from './hooks/useMouse'

function App() {
  // useTitle('App page 11') //自定义hook
  const { x, y } = useMouse()
  return (
    <>
      <p>
        App page {x} {y}
      </p>
      {/*<List1 />*/}
      {/*<StateDemo1 />*/}
      {/*<StateDemo2 />*/}
      {/*<List2 />*/}
      {/*<ImmerDemo />*/}
      {/*<UseRefDemo />*/}
      {/*<UseMemoDemo />*/}
      {/*<UseCallbackDemo />*/}
    </>
  )
}
export default App
