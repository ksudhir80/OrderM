"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./index.css");
var _AppOrderM = _interopRequireDefault(require("./AppOrderM"));
var _reactRedux = require("react-redux");
var _store = _interopRequireDefault(require("./store"));
var _reactQuery = require("@tanstack/react-query");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const queryClient = new _reactQuery.QueryClient();
const OrderM = () => {
  return /*#__PURE__*/_react.default.createElement(_reactQuery.QueryClientProvider, {
    client: queryClient
  }, /*#__PURE__*/_react.default.createElement(_reactRedux.Provider, {
    store: _store.default
  }, /*#__PURE__*/_react.default.createElement(_react.default.StrictMode, null, /*#__PURE__*/_react.default.createElement(_AppOrderM.default, null))));
};
var _default = exports.default = OrderM;