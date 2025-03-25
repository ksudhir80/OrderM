"use strict";

require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRedux = require("react-redux");
var _productSlice = require("../../features/product/productSlice");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function Alerts(status) {
  const dispatch = (0, _reactRedux.useDispatch)();

  // useEffect(() => {
  //     setTimeout(function () {
  //         dispatch(updateStatus("idle"));
  //     }, 2000);
  //     }, [status]);

  const successAlert = () => {
    return /*#__PURE__*/_react.default.createElement("div", {
      class: "bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative",
      role: "alert"
    }, /*#__PURE__*/_react.default.createElement("strong", {
      class: "font-bold"
    }, "Success!"), /*#__PURE__*/_react.default.createElement("span", {
      class: "block sm:inline"
    }, "Product Updated Successfully!"), /*#__PURE__*/_react.default.createElement("span", {
      class: "absolute top-0 bottom-0 right-0 px-4 py-3",
      onClick: () => dispatch((0, _productSlice.updateStatus)("idle"))
    }, /*#__PURE__*/_react.default.createElement("svg", {
      class: "fill-current h-6 w-6 text-green-500",
      role: "button",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20"
    }, /*#__PURE__*/_react.default.createElement("title", null, "Close"), /*#__PURE__*/_react.default.createElement("path", {
      d: "M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"
    }))));
  };
  const failedAlert = () => {
    return /*#__PURE__*/_react.default.createElement("div", {
      class: "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative",
      role: "alert"
    }, /*#__PURE__*/_react.default.createElement("strong", {
      class: "font-bold"
    }, "Failed!"), /*#__PURE__*/_react.default.createElement("span", {
      class: "block sm:inline"
    }, "Something went wrong!"), /*#__PURE__*/_react.default.createElement("span", {
      class: "absolute top-0 bottom-0 right-0 px-4 py-3",
      onClick: () => dispatch((0, _productSlice.updateStatus)("idle"))
    }, /*#__PURE__*/_react.default.createElement("svg", {
      class: "fill-current h-6 w-6 text-red-500",
      role: "button",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20"
    }, /*#__PURE__*/_react.default.createElement("title", null, "Close"), /*#__PURE__*/_react.default.createElement("path", {
      d: "M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"
    }))));
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    role: "alert"
  }, status && status.type === "succeeded" ? successAlert() : status.type === "failed" && failedAlert());
}
var _default = exports.default = Alerts;