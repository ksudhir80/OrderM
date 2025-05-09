"use strict";

require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/esnext.iterator.constructor.js");
require("core-js/modules/esnext.iterator.map.js");
var _react = _interopRequireWildcard(require("react"));
var _reactRedux = require("react-redux");
var _customerSlice = require("../../store/features/customer/customerSlice");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const CustomerList = _ref => {
  let {
    onEdit,
    Customers
  } = _ref;
  const dispatch = (0, _reactRedux.useDispatch)();
  const handleDelete = id => {
    dispatch((0, _customerSlice.deleteCustomer)(id));
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "p-4"
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: "text-xl font-bold mb-4"
  }, "Customer List"), /*#__PURE__*/_react.default.createElement("table", {
    className: "min-w-full bg-white border"
  }, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, Customers && Customers[0] && Object.keys(Customers[0]).map(key => /*#__PURE__*/_react.default.createElement("th", {
    className: "border px-4 py-2"
  }, key)))), /*#__PURE__*/_react.default.createElement("tbody", null, Customers && Customers[0] && Customers.map(Customer => /*#__PURE__*/_react.default.createElement("tr", {
    key: Customer.id
  }, Object.keys(Customer).map(key => /*#__PURE__*/_react.default.createElement("td", {
    className: "border px-4 py-2"
  }, Customer[key])), /*#__PURE__*/_react.default.createElement("td", {
    className: "border px-4 py-2"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "bg-blue-500 text-white px-2 py-1 rounded mr-2",
    onClick: () => onEdit(Customer)
  }, "Edit"), /*#__PURE__*/_react.default.createElement("button", {
    className: "bg-red-500 text-white px-2 py-1 rounded",
    onClick: () => handleDelete(Customer.id)
  }, "Delete")))))));
};
var _default = exports.default = /*#__PURE__*/(0, _react.memo)(CustomerList);