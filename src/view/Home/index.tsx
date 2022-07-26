import { Link } from "react-router-dom";
import cs from 'classnames';
import { observer } from 'mobx-react'

import reactLogo from '@assets/react.svg'

import './index.scss'
import store from '@store/HomeStore'

export type Props = {
  style?: React.CSSProperties;
  className?: string;
}


function Home({ style, className }: Props): JSX.Element {

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => store.incCount()}>
          count is {store.count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Link to="/about">About</Link>
    </div>
  )
}

export default observer(Home);
