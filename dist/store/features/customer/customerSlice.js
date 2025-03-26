"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateStatus = exports.updateCustomer = exports.fetchCustomers = exports.deleteCustomer = exports.default = exports.addCustomer = void 0;
require("core-js/modules/es.promise.js");
require("core-js/modules/esnext.iterator.constructor.js");
require("core-js/modules/esnext.iterator.filter.js");
var _toolkit = require("@reduxjs/toolkit");
var _axios = _interopRequireDefault(require("axios"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const API_URL = 'http://localhost:8080/api'; // Replace with your API URL

const fetchCustomers = exports.fetchCustomers = (0, _toolkit.createAsyncThunk)('customer/fetchAll', async type => {
  try {
    const response = await _axios.default.get(API_URL + "/customers");
    return response;
  } catch (error) {
    return error;
  }
});
const addCustomer = exports.addCustomer = (0, _toolkit.createAsyncThunk)('customer/AddCustomers', async (customer, type) => {
  try {
    const response = await _axios.default.post(API_URL + "/customers", customer);
    return response;
  } catch (error) {
    return error;
  }
});
const updateCustomer = exports.updateCustomer = (0, _toolkit.createAsyncThunk)('customer/UpdateCustomers', async (customer, type) => {
  try {
    const response = await _axios.default.put("".concat(API_URL, "/customers/").concat(customer.id), customer);
    return response;
  } catch (error) {
    return error;
  }
});
const deleteCustomer = exports.deleteCustomer = (0, _toolkit.createAsyncThunk)('customer/Deletecustomer', async (id, type) => {
  try {
    await _axios.default.delete("".concat(API_URL, "/customers/").concat(id));
    return id;
  } catch (error) {
    return error;
  }
});
const updateStatus = exports.updateStatus = (0, _toolkit.createAsyncThunk)('customer/updateStatus', async status => {
  try {
    return status;
  } catch (error) {
    return error;
  }
});
const Customerslice = (0, _toolkit.createSlice)({
  name: 'Customers',
  initialState: {
    list: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchCustomers.fulfilled, (state, action) => {
      if (action.payload.data) {
        state.list = action.payload.data;
        state.status = 'succeeded';
      } else {
        state.status = 'failed';
      }
    }).addCase(addCustomer.fulfilled, (state, action) => {
      if (action.payload.data) {
        state.list.push(action.payload.data);
        state.status = 'succeeded';
      } else {
        state.status = 'failed';
      }
    }).addCase(updateCustomer.fulfilled, (state, action) => {
      if (action.payload.data) {
        const index = state.list.findIndex(emp => emp.id === action.payload.data.id);
        if (index !== -1) state.list[index] = action.payload.data;
        state.status = 'succeeded';
      } else {
        state.status = 'failed';
      }
    }).addCase(deleteCustomer.fulfilled, (state, action) => {
      if (!action.payload.message) {
        state.list = state.list.filter(emp => emp.id !== action.payload);
        state.status = 'succeeded';
      } else {
        state.status = 'failed';
      }
    }).addCase(updateStatus.fulfilled, (state, action) => {
      state.status = action.payload;
    });
  }
});
var _default = exports.default = Customerslice.reducer;