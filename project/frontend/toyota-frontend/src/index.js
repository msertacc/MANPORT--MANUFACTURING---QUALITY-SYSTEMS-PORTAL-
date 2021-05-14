import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import App from './container/App'
import {Provider} from 'react-redux'
import configureStore from './redux/configureStore';
import './styles/dashboard.css'
import './styles/general.css'


const store = configureStore();

ReactDOM.render(
<Provider store={store}>
    <App></App>
    </Provider>,
  document.getElementById("root")
);
