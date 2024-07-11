import React from 'react'
import logo from './logo.svg'
import './App.css'
import type { MouseEvent } from 'react'

function App() {
  const fn = (e: MouseEvent<HTMLButtonElement>, name: string) => {
    e.preventDefault()
    console.log('clicked...', name)
  }
  const style = { color: 'red', backgroundColor: 'white' }
  const flag = true
  const Hello = () => {
    if (flag) return <p>hello1</p>
    return <p>你好1</p>
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{logo}</p>
        {/*注释*/}
        <div>
          {flag && <p>Hello</p>}
          {flag ? <p>Hello</p> : <p>你好</p>}
          <Hello></Hello>
        </div>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <div>
          <button
            onClick={e => {
              fn(e, '你好')
            }}
          >
            click
          </button>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          style={style}
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
