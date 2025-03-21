import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:8080/api'; // Replace with your API URL


export const getCustomers= async () => {

  try {
    const response =await axios.get(API_URL+"/customers");
    return response;
  } catch (error) {
    
 return error;
  }


}

export const fetchCustomers = createAsyncThunk('customer/fetchAll', async (type) => {
  try {
    const response =await axios.get(API_URL+"/customers");
    return response;
  } catch (error) {
    
    return error;
    
  }

});

export const addCustomer = createAsyncThunk('customer/AddCustomers', async (customer,type) => {
  
  try{
  const response = await axios.post(API_URL+"/customers", customer
  );
  return response;
}catch (error) {
  
  return error;}
});

export const updateCustomer = createAsyncThunk('customer/UpdateCustomers', async (customer,type) => {
  try{
  const response = await axios.put(`${API_URL}/customers/${customer.id}`, customer);
  return response;
}catch (error) {  
  return error;
  }
});

export const deleteCustomer = createAsyncThunk('customer/Deletecustomer', async (id,type) => {
  try{
  await axios.delete(`${API_URL}/customers/${id}`);
  return id;
}catch (error) {
  
  return error;
}
});

export const updateStatus = createAsyncThunk('customer/updateStatus', async (status) => {
  try{
  return status;
}catch (error) {
  
  return error;
}
});

const Customerslice = createSlice({
  name: 'Customers',
  initialState: { list: [], status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCustomers.fulfilled, (state, action) => {
        
        if(action.payload.data){
        state.list = action.payload.data;
        state.status = 'succeeded';
        }else{
          state.status = 'failed';
        }
      })
      .addCase(addCustomer.fulfilled, (state, action) => {
        
      
        if(action.payload.data){
          state.list.push(action.payload.data);
          state.status = 'succeeded';
          }else{
            state.status = 'failed';
          }
      })
      .addCase(updateCustomer.fulfilled, (state, action) => {
        
      
        if(action.payload.data){
          const index = state.list.findIndex((emp) => emp.id === action.payload.data.id);
          if (index !== -1) state.list[index] = action.payload.data;
          state.status = 'succeeded';
          }else{
            state.status = 'failed';
          }
      })
      .addCase(deleteCustomer.fulfilled, (state, action) => {
        
      
        if(!action.payload.message){
          state.list = state.list.filter((emp) => emp.id !== action.payload);
          state.status = 'succeeded';
          }else{
            state.status = 'failed';
          }
      })

      .addCase(updateStatus.fulfilled, (state, action) => {
        
        state.status = action.payload;
      });
  },
});

export default Customerslice.reducer;
