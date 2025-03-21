import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './AppOrderM';
import { Provider } from 'react-redux';
import store from './store';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root'));


const OrderM=()=>{

  return (<QueryClientProvider client={queryClient}>
  <Provider store={store}>
  <React.StrictMode>
  
    <AppOrderM />
   
  </React.StrictMode>
  </Provider>
  </QueryClientProvider>)

}
export default OrderM;
