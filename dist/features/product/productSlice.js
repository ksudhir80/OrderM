"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateStatus = exports.updateProduct = exports.updateError = exports.fetchProducts = exports.fetchDataSync = exports.deleteProduct = exports.default = exports.addProduct = void 0;
require("core-js/modules/es.promise.js");
require("core-js/modules/esnext.iterator.constructor.js");
require("core-js/modules/esnext.iterator.filter.js");
var _toolkit = require("@reduxjs/toolkit");
var _axios = _interopRequireDefault(require("axios"));
var _reactRedux = require("react-redux");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const API_URL = 'http://localhost:8080/api'; // Replace with your API URL

// export const getProducts= async () => {

//   try {
//     const response =await axios.get(API_URL+"/products");
//     return response;
//   } catch (error) {

//  return error;
//   }

// }

const fetchDataSync = () => {
  var request = new XMLHttpRequest();
  request.open("GET", API_URL + "/products", false); // `false` makes it synchronous
  request.send(null);
  if (request.status === 200) {
    console.log("Data:", request.responseText);
    return request.responseText;
  } else {
    console.error("Error:", request.status);
    return request.status;
  }
};
exports.fetchDataSync = fetchDataSync;
const fetchProducts = exports.fetchProducts = (0, _toolkit.createAsyncThunk)('product/fetchAll', async () => {
  debugger;
  try {
    //   debugger;

    const response = await _axios.default.get(API_URL + "/products");
    console.log("after got response");
    return response.data; // Convert to plain object
  } catch (error) {
    throw error;
    // dispatch(updateError(error));
  }
});
const addProduct = exports.addProduct = (0, _toolkit.createAsyncThunk)('product/AddProducts', async product => {
  try {
    const response = await _axios.default.post(API_URL + "/products", product);
    return response;
  } catch (error) {

    // dispatch(updateError(error));
  }
});
const updateProduct = exports.updateProduct = (0, _toolkit.createAsyncThunk)('product/UpdateProducts', async Product => {
  try {
    const response = await _axios.default.put("".concat(API_URL, "/products/").concat(Product.id), Product);
    return response;
  } catch (error) {
    //dispatch(updateError(error));
  }
});
const deleteProduct = exports.deleteProduct = (0, _toolkit.createAsyncThunk)('product/DeleteProduct', async id => {
  try {
    await _axios.default.delete("".concat(API_URL, "/products/").concat(id));
    return id;
  } catch (error) {

    //dispatch(updateError(error));
  }
});
const updateStatus = exports.updateStatus = (0, _toolkit.createAsyncThunk)('product/updateStatus', async status => {
  try {
    return status;
  } catch (error) {

    //dispatch(updateError(error));
  }
});
const updateError = exports.updateError = (0, _toolkit.createAsyncThunk)('product/updateError', async status => {
  try {
    return status;
  } catch (error) {

    //dispatch(updateError(error));
  }
});
const productSlice = (0, _toolkit.createSlice)({
  name: 'products',
  initialState: {
    list: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      if (action.payload) {
        state.list = action.payload;
        state.status = 'succeeded';
        console.log('after store');
      } else {
        state.status = 'failed';
      }
    }).addCase(addProduct.fulfilled, (state, action) => {
      if (action.payload.data) {
        state.list.push(action.payload.data);
        state.status = 'succeeded';
      } else {
        state.status = 'failed';
      }
    }).addCase(updateProduct.fulfilled, (state, action) => {
      if (action.payload.data) {
        const index = state.list.findIndex(emp => emp.id === action.payload.data.id);
        if (index !== -1) state.list[index] = action.payload.data;
        state.status = 'succeeded';
      } else {
        state.status = 'failed';
      }
    }).addCase(deleteProduct.fulfilled, (state, action) => {
      if (!action.payload.message) {
        state.list = state.list.filter(emp => emp.id !== action.payload);
        state.status = 'succeeded';
      } else {
        state.status = 'failed';
      }
    }).addCase(updateStatus.fulfilled, (state, action) => {
      debugger;
      state.status = action.payload;
    }).addCase(updateError.fulfilled, (state, action) => {
      state.error = action.payload;
    });
  }
});
var _default = exports.default = productSlice.reducer;