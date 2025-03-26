"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "AppOrderM", {
  enumerable: true,
  get: function get() {
    return _AppOrderM.default;
  }
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _AppOrderM = _interopRequireDefault(require("./AppOrderM"));
var _reactRedux = require("react-redux");
var _store = _interopRequireDefault(require("../store/store"));
var _reactQuery = require("@tanstack/react-query");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const queryClient = new _reactQuery.QueryClient();
const OrderM = () => {
  return /*#__PURE__*/_react.default.createElement(_reactQuery.QueryClientProvider, {
    client: queryClient
  }, /*#__PURE__*/_react.default.createElement(_reactRedux.Provider, {
    store: _store.default
  }, /*#__PURE__*/_react.default.createElement(_AppOrderM.default, null)));
};
var _default = exports.default = OrderM;