"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "customersReducer", {
  enumerable: true,
  get: function get() {
    return _customerSlice.default;
  }
});
exports.default = void 0;
Object.defineProperty(exports, "productsReducer", {
  enumerable: true,
  get: function get() {
    return _productSlice.default;
  }
});
var _toolkit = require("@reduxjs/toolkit");
var _customerSlice = _interopRequireDefault(require("./features/customer/customerSlice"));
var _productSlice = _interopRequireDefault(require("./features/product/productSlice"));
var _redux = require("redux");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const rootReducer = (0, _redux.combineReducers)({
  customers: _customerSlice.default,
  products: _productSlice.default
});
const store = (0, _toolkit.configureStore)({
  reducer: rootReducer
});
var _default = exports.default = store;