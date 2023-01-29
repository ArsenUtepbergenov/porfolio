import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <App />
    {/* <ReactQueryDevtools initialIsOpen={false} /> */}
  </QueryClientProvider>,
)
