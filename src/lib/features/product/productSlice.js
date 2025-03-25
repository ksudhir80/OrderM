import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {  useDispatch } from 'react-redux';

const API_URL = 'http://localhost:8080/api'; // Replace with your API URL



// export const getProducts= async () => {

//   try {
//     const response =await axios.get(API_URL+"/products");
//     return response;
//   } catch (error) {
    
//  return error;
//   }


// }


export const fetchDataSync=()=> {
  var request = new XMLHttpRequest();
  request.open("GET", API_URL+"/products", false); // `false` makes it synchronous
  request.send(null);

  if (request.status === 200) {
    console.log("Data:", request.responseText);
    return request.responseText;
  } else {
    console.error("Error:", request.status);
    return request.status;
  }
}


export const fetchProducts = createAsyncThunk('product/fetchAll',  async () => {
  debugger;
  try {
  //   debugger;
   
    const response =await axios.get(API_URL+"/products");
    console.log("after got response");
    
    return (response.data); // Convert to plain object
    

    
  } catch (error) {
    
    throw error;
   // dispatch(updateError(error));
    
  }
  

});

export const addProduct = createAsyncThunk('product/AddProducts', async (product) => {
  
  try{
  const response = await axios.post(API_URL+"/products", product
  );
  return response;
}catch (error) {
  
 // dispatch(updateError(error));
   }
});

export const updateProduct = createAsyncThunk('product/UpdateProducts', async (Product) => {
  try{
  const response = await axios.put(`${API_URL}/products/${Product.id}`, Product);
  return response;
}catch (error) {  
  //dispatch(updateError(error));
   
  }
});

export const deleteProduct = createAsyncThunk('product/DeleteProduct', async (id) => {
  try{
  await axios.delete(`${API_URL}/products/${id}`);
  return id;
}catch (error) {
  
  //dispatch(updateError(error));
   
}
});

export const updateStatus = createAsyncThunk('product/updateStatus', async (status) => {
  try{
  return status;
}catch (error) {
  
  //dispatch(updateError(error));
   
}
});


export const updateError = createAsyncThunk('product/updateError', async (status) => {
  try{
  return status;
}catch (error) {
  
 //dispatch(updateError(error));
   
}
});



const productSlice = createSlice({
  name: 'products',
  initialState: { list: [], status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        
        if(action.payload){
        state.list = action.payload;
        state.status = 'succeeded';
        console.log('after store');
        }else{
          state.status = 'failed';
        }
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        
      
        if(action.payload.data){
          state.list.push(action.payload.data);
          state.status = 'succeeded';
          }else{
            state.status = 'failed';
          }
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        
      
        if(action.payload.data){
          const index = state.list.findIndex((emp) => emp.id === action.payload.data.id);
          if (index !== -1) state.list[index] = action.payload.data;
          state.status = 'succeeded';
          }else{
            state.status = 'failed';
          }
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        
      
        if(!action.payload.message){
          state.list = state.list.filter((emp) => emp.id !== action.payload);
          state.status = 'succeeded';
          }else{
            state.status = 'failed';
          }
      })

      .addCase(updateStatus.fulfilled, (state, action) => {
        debugger;
        state.status = action.payload;
      })

      
      .addCase(updateError.fulfilled, (state, action) => {
        
        state.error = action.payload;
      });
  },
});

export default productSlice.reducer;
