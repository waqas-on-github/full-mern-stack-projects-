import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ProductsScreen from './screens/ProductsScreen.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";




const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "temp",
        element: <ProductsScreen/>,
      },
    ],
  },
]);


    
    let root=ReactDOM.createRoot(document.getElementById("root"));
    root.render(<RouterProvider router={router} /> )
