import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider } from "react-redux";
import rootReducer from "./redux/reducer";
const app = () => {
  const pers = localStorage.getItem("persist") ? JSON.parse(localStorage.getItem("persist")) : {}
  const store = createStore(rootReducer, pers)
  store.subscribe(() => localStorage.setItem("persist", JSON.stringify(store.getState())))
  return (
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  )
}
ReactDOM.render(app(),
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
