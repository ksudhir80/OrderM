"use strict";

require("core-js/modules/es.weak-map.js");
require("core-js/modules/esnext.iterator.constructor.js");
require("core-js/modules/esnext.iterator.filter.js");
require("core-js/modules/esnext.iterator.for-each.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Alerts", {
  enumerable: true,
  get: function get() {
    return _Alerts.default;
  }
});
Object.defineProperty(exports, "CustomerForm", {
  enumerable: true,
  get: function get() {
    return _CustomerForm.default;
  }
});
Object.defineProperty(exports, "CustomerList", {
  enumerable: true,
  get: function get() {
    return _CustomerList.default;
  }
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _reactRedux = require("react-redux");
var _customerSlice = require("../../store/features/customer/customerSlice");
var _reactQuery = require("@tanstack/react-query");
var _CustomerList = _interopRequireDefault(require("./CustomerList"));
var _CustomerForm = _interopRequireDefault(require("./CustomerForm"));
var _Alerts = _interopRequireDefault(require("../utills/Alerts"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
const Customer = () => {
  const [customer, setCustomer] = (0, _react.useState)(null);
  const Customers = (0, _reactRedux.useSelector)(state => state.customers.list);
  const status = (0, _reactRedux.useSelector)(state => state.customers.status);
  const dispatch = (0, _reactRedux.useDispatch)();
  const {
    data,
    error,
    isLoading
  } = (0, _reactQuery.useQuery)({
    queryKey: ["users"],
    queryFn: (0, _customerSlice.fetchCustomers)("")
  });
  (0, _react.useEffect)(() => {
    dispatch((0, _customerSlice.fetchCustomers)(""));
  }, []);
  const newCustomer = () => {
    if (!customer && Customers.length > 0) {
      let CustomerObj = _objectSpread({}, Customers[0]);
      CustomerObj.id = null;
      CustomerObj.name = "";
      CustomerObj.address = "";
      CustomerObj.contactnumber = 0;
      setCustomer(_objectSpread({}, CustomerObj));
    }
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "container mx-auto p-4"
  }, status && /*#__PURE__*/_react.default.createElement(_Alerts.default, {
    type: status
  }), customer && /*#__PURE__*/_react.default.createElement(_CustomerForm.default, {
    customer: customer,
    setCustomer: setCustomer
  }), !customer && /*#__PURE__*/_react.default.createElement("button", {
    onClick: newCustomer,
    className: "bg-green-500 text-white px-4 py-2 rounded",
    type: "submit"
  }, "Add New Customer"), /*#__PURE__*/_react.default.createElement(_CustomerList.default, {
    onEdit: setCustomer,
    Customers: Customers
  })));
};
var _default = exports.default = /*#__PURE__*/(0, _react.memo)(Customer);