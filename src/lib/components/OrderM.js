import React from 'react';
import AppOrderM from './AppOrderM';
import { Provider } from 'react-redux';
import store from '../store/store';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();


const OrderM=()=>{

  return (<QueryClientProvider client={queryClient}>
  <Provider store={store}>  
    <AppOrderM />   
  </Provider>
  </QueryClientProvider>)

}
export {AppOrderM};
export default OrderM;
