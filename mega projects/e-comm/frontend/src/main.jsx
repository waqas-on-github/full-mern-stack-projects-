import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { store } from '../store.js';
import { QueryClientProvider  , QueryClient} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'



const queryClient = new QueryClient()




let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store} >
<QueryClientProvider client={queryClient} >
    <App />
<ReactQueryDevtools initialIsOpen={false} />
</QueryClientProvider>
  </Provider>

)
