import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App/App';
import { StateProvider } from './State/StateProvider';
import reducer, { initalState } from "./State/reducer";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initalState={initalState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);