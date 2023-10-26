import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import GlobalStyles  from './styles/GlobleStyles.js'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClientProvider , QueryClient } from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'



const queryClient = new QueryClient()



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient} >
    <GlobalStyles/>
    <App />
    <ReactQueryDevtools initialIsOpen={false}/>
    </QueryClientProvider>
    <Toaster 
    position='top-center'
    gutter={12}
    containerStyle={{margin : '8px'}}
    toastOptions={ {
      success : {
        duration : 3000
      },
      error : {
        duration : 3000
      }, 

      style : {
        fontSize :"16px" , 
        maxWidth : "500px" , 
        padding : "16px  24px",
        backgroundColor : "var(--color-grey-0)",
        color :"var(--color-grey-700)"
      }
    }}
    />
  </React.StrictMode>,
)
