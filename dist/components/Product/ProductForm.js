"use strict";

require("core-js/modules/es.weak-map.js");
require("core-js/modules/esnext.iterator.filter.js");
require("core-js/modules/esnext.iterator.for-each.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/esnext.iterator.constructor.js");
require("core-js/modules/esnext.iterator.map.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _reactRedux = require("react-redux");
var _productSlice = require("../../store/features/product/productSlice");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
const ProductForm = _ref => {
  let {
    product,
    setProduct
  } = _ref;
  const dispatch = (0, _reactRedux.useDispatch)();
  const [form, setForm] = (0, _react.useState)(product);
  (0, _react.useEffect)(() => {
    if (product) {
      setForm(product);
    }
  }, [product]);
  const getFormDetails = (entity, type, value) => {
    switch (type) {
      case 'string':
        return /*#__PURE__*/_react.default.createElement("div", {
          className: "mb-4"
        }, /*#__PURE__*/_react.default.createElement("label", {
          className: "block text-gray-700"
        }, entity), /*#__PURE__*/_react.default.createElement("input", {
          type: "text",
          className: "w-1/2 p-2 border rounded",
          value: value,
          onChange: e => setForm(_objectSpread(_objectSpread({}, form), {}, {
            [entity]: e.target.value
          }))
        }));
      case 'number':
        return /*#__PURE__*/_react.default.createElement("div", {
          className: "mb-2"
        }, /*#__PURE__*/_react.default.createElement("label", {
          className: "block text-gray-700"
        }, entity), /*#__PURE__*/_react.default.createElement("input", {
          type: "number",
          className: "w-1/2 p-2 border rounded",
          value: value,
          onChange: e => setForm(_objectSpread(_objectSpread({}, form), {}, {
            [entity]: e.target.value
          }))
        }));
      case 'date':
        return /*#__PURE__*/_react.default.createElement("div", {
          className: "mb-2"
        }, /*#__PURE__*/_react.default.createElement("label", {
          className: "block text-gray-700"
        }, entity), /*#__PURE__*/_react.default.createElement("input", {
          type: "date",
          className: "w-1/2 p-2 border rounded",
          value: value,
          onChange: e => setForm(_objectSpread(_objectSpread({}, form), {}, {
            [entity]: e.target.value
          }))
        }));
      default:
        return /*#__PURE__*/_react.default.createElement("div", {
          className: "mb-4"
        }, /*#__PURE__*/_react.default.createElement("label", {
          className: "block text-gray-700"
        }, entity), /*#__PURE__*/_react.default.createElement("input", {
          type: "text",
          className: "w-1/2 p-2 border rounded",
          value: value,
          onChange: e => setForm(_objectSpread(_objectSpread({}, form), {}, {
            [entity]: e.target.value
          }))
        }));
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (form && form.id) {
      dispatch((0, _productSlice.updateProduct)(form, "vender"));
      //dispatch(updateProduct(form,"product"));
    } else {
      dispatch((0, _productSlice.addProduct)(form, "vender"));
    }
    setProduct(null);
    {
      Object.keys(form).map(key => {
        setForm({
          key: ''
        });
      });
    }
  };
  //   if (isLoading) return <p>Loading...</p>;
  //   if (error) return <p>Error: {error.message}</p>;
  return /*#__PURE__*/_react.default.createElement("form", {
    onSubmit: handleSubmit,
    className: "p-4 bg-gray-100"
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: "text-xl font-bold mb-4"
  }, form && form.id ? 'Edit Product' : 'Add Product'), form && Object.keys(form).map(key => getFormDetails(key, typeof form[key], form[key])), /*#__PURE__*/_react.default.createElement("button", {
    className: "bg-green-500 text-white px-4 py-2 rounded",
    type: "submit"
  }, form && form.id ? 'Update' : 'Add'));
};
var _default = exports.default = /*#__PURE__*/(0, _react.memo)(ProductForm);