import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { store } from '../store.js';
import 'tailwindcss/tailwind.css';








let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store} >

    <App />
  </Provider>

)