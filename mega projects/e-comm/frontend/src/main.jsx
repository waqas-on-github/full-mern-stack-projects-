import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { store } from '../store.js';
import { QueryClientProvider  , QueryClient} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';


const stripePromis = loadStripe("pk_test_51NWwK8FyZm3o9pq0IePIN9Ondla2Pwx0U08EexUMOXt6jLdCVOQmHNcxXhrwTZzbVUwL22GGu1oq0VYmOtwIkXeT00GXMwi98T")

const queryClient = new QueryClient()




let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store} >
<QueryClientProvider client={queryClient} >
  <Elements stripe={stripePromis} >
    <App />
  </Elements>
<ReactQueryDevtools initialIsOpen={false} />
</QueryClientProvider>
  </Provider>

)
