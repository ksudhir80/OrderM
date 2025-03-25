"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Navigationbar;
require("core-js/modules/esnext.iterator.constructor.js");
require("core-js/modules/esnext.iterator.filter.js");
var _react = require("@headlessui/react");
var _outline = require("@heroicons/react/24/outline");
const navigation = [{
  name: 'Home',
  href: '/home',
  current: true
}, {
  name: 'Products',
  href: 'product',
  current: false
}, {
  name: 'Customer',
  href: '/customer',
  current: false
}, {
  name: 'Vendor',
  href: '/inout',
  current: false
}, {
  name: 'Invoice',
  href: '/expenses',
  current: false
}];
function classNames() {
  for (var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++) {
    classes[_key] = arguments[_key];
  }
  return classes.filter(Boolean).join(' ');
}
function Navigationbar() {
  return /*#__PURE__*/React.createElement(_react.Disclosure, {
    as: "nav",
    className: "bg-gray-800"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-7xl px-2 sm:px-6 lg:px-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative flex h-16 items-center justify-between"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-y-0 left-0 flex items-center sm:hidden"
  }, /*#__PURE__*/React.createElement(_react.DisclosureButton, {
    className: "group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset"
  }, /*#__PURE__*/React.createElement("span", {
    className: "absolute -inset-0.5"
  }), /*#__PURE__*/React.createElement("span", {
    className: "sr-only"
  }, "Open main menu"), /*#__PURE__*/React.createElement(_outline.Bars3Icon, {
    "aria-hidden": "true",
    className: "block size-6 group-data-open:hidden"
  }), /*#__PURE__*/React.createElement(_outline.XMarkIcon, {
    "aria-hidden": "true",
    className: "hidden size-6 group-data-open:block"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex shrink-0 items-center"
  }, /*#__PURE__*/React.createElement("img", {
    alt: "Your Company",
    src: "https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500",
    className: "h-8 w-auto"
  })), /*#__PURE__*/React.createElement("div", {
    className: "hidden sm:ml-6 sm:block"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex space-x-4"
  }, navigation.map(item => /*#__PURE__*/React.createElement("a", {
    key: item.name,
    href: item.href,
    "aria-current": item.current ? 'page' : undefined,
    className: classNames(item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'rounded-md px-3 py-2 text-sm font-medium')
  }, item.name))))), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
  }, /*#__PURE__*/React.createElement("span", {
    className: "absolute -inset-1.5"
  }), /*#__PURE__*/React.createElement("span", {
    className: "sr-only"
  }, "View notifications"), /*#__PURE__*/React.createElement(_outline.BellIcon, {
    "aria-hidden": "true",
    className: "size-6"
  })), /*#__PURE__*/React.createElement(_react.Menu, {
    as: "div",
    className: "relative ml-3"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_react.MenuButton, {
    className: "relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
  }, /*#__PURE__*/React.createElement("span", {
    className: "absolute -inset-1.5"
  }), /*#__PURE__*/React.createElement("span", {
    className: "sr-only"
  }, "Open user menu"), /*#__PURE__*/React.createElement("img", {
    alt: "",
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    className: "size-8 rounded-full"
  }))), /*#__PURE__*/React.createElement(_react.MenuItems, {
    transition: true,
    className: "absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
  }, /*#__PURE__*/React.createElement(_react.MenuItem, null, /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
  }, "Your Profile")), /*#__PURE__*/React.createElement(_react.MenuItem, null, /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
  }, "Settings")), /*#__PURE__*/React.createElement(_react.MenuItem, null, /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
  }, "Sign out"))))))), /*#__PURE__*/React.createElement(_react.DisclosurePanel, {
    className: "sm:hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-1 px-2 pt-2 pb-3"
  }, navigation.map(item => /*#__PURE__*/React.createElement(_react.DisclosureButton, {
    key: item.name,
    as: "a",
    href: item.href,
    "aria-current": item.current ? 'page' : undefined,
    className: classNames(item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block rounded-md px-3 py-2 text-base font-medium')
  }, item.name)))));
}