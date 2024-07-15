import React from 'react'
import { useTitle } from './hooks/useTitle'
// import StateDemo1 from './StateDemo1'
// import StateDemo2 from './StateDemo2'
// import List2 from './List2'
// import ImmerDemo from './ImmerDemo'
// import UseRefDemo from './useRefDemo'
// import UseMemoDemo from './UseMemoDemo'
// import UseCallbackDemo from './UseCallbackDemo'

function App() {
  useTitle('App page 11') //自定义hook
  return (
    <>
      <p>App page</p>
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
