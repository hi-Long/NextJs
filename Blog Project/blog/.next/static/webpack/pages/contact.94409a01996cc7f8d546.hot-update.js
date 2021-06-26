self["webpackHotUpdate_N_E"]("pages/contact",{

/***/ "./components/ui/notification.tsx":
/*!****************************************!*\
  !*** ./components/ui/notification.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/hooks */ "./store/hooks.ts");
/* harmony import */ var _notification_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notification.module.css */ "./components/ui/notification.module.css");
/* harmony import */ var _notification_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_notification_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\Home studying\\Courses\\NextJs\\Blog Project\\blog\\components\\ui\\notification.tsx",
    _this = undefined,
    _s = $RefreshSig$();





var Notification = function Notification() {
  _s();

  var _useAppSelector = (0,_store_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)(function (selector) {
    return selector.ui;
  }),
      title = _useAppSelector.title,
      message = _useAppSelector.message,
      status = _useAppSelector.status;

  var statusClasses = '';

  if (status === 'success') {
    statusClasses = (_notification_module_css__WEBPACK_IMPORTED_MODULE_3___default().success);
  }

  if (status === 'error') {
    statusClasses = (_notification_module_css__WEBPACK_IMPORTED_MODULE_3___default().error);
  }

  var cssClasses = "".concat((_notification_module_css__WEBPACK_IMPORTED_MODULE_3___default().notification), " ").concat(statusClasses);
  return /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_1___default().createPortal( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: cssClasses,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: message
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 9
  }, _this), document.getElementById('notifications'));
};

_s(Notification, "ve+EuVF2b7oaDGuecjLsSTcjqZg=", false, function () {
  return [_store_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector];
});

_c = Notification;
/* harmony default export */ __webpack_exports__["default"] = (Notification);

var _c;

$RefreshReg$(_c, "Notification");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91aS9ub3RpZmljYXRpb24udHN4Il0sIm5hbWVzIjpbIk5vdGlmaWNhdGlvbiIsInVzZUFwcFNlbGVjdG9yIiwic2VsZWN0b3IiLCJ1aSIsInRpdGxlIiwibWVzc2FnZSIsInN0YXR1cyIsInN0YXR1c0NsYXNzZXMiLCJjbGFzc2VzIiwiY3NzQ2xhc3NlcyIsIlJlYWN0RE9NIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFBQTs7QUFBQSx3QkFDWUMsNERBQWMsQ0FBQyxVQUFBQyxRQUFRO0FBQUEsV0FBSUEsUUFBUSxDQUFDQyxFQUFiO0FBQUEsR0FBVCxDQUQxQjtBQUFBLE1BQ2ZDLEtBRGUsbUJBQ2ZBLEtBRGU7QUFBQSxNQUNSQyxPQURRLG1CQUNSQSxPQURRO0FBQUEsTUFDQ0MsTUFERCxtQkFDQ0EsTUFERDs7QUFHdkIsTUFBSUMsYUFBYSxHQUFHLEVBQXBCOztBQUVBLE1BQUlELE1BQU0sS0FBSyxTQUFmLEVBQTBCO0FBQ3RCQyxpQkFBYSxHQUFHQyx5RUFBaEI7QUFDSDs7QUFFRCxNQUFJRixNQUFNLEtBQUssT0FBZixFQUF3QjtBQUNwQkMsaUJBQWEsR0FBR0MsdUVBQWhCO0FBQ0g7O0FBRUQsTUFBTUMsVUFBVSxhQUFNRCw4RUFBTixjQUE4QkQsYUFBOUIsQ0FBaEI7QUFFQSxzQkFBT0csNkRBQUEsZUFDSDtBQUFLLGFBQVMsRUFBRUQsVUFBaEI7QUFBQSw0QkFDSTtBQUFBLGdCQUFLTDtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQUVJO0FBQUEsZ0JBQUlDO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURHLEVBS0hNLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixlQUF4QixDQUxHLENBQVA7QUFPSCxDQXRCRDs7R0FBTVosWTtVQUNpQ0Msd0Q7OztLQURqQ0QsWTtBQXdCTiwrREFBZUEsWUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jb250YWN0Ljk0NDA5YTAxOTk2Y2M3ZjhkNTQ2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xyXG5pbXBvcnQgeyB1c2VBcHBTZWxlY3RvciB9IGZyb20gJy4uLy4uL3N0b3JlL2hvb2tzJztcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9ub3RpZmljYXRpb24ubW9kdWxlLmNzcyc7XHJcblxyXG5jb25zdCBOb3RpZmljYXRpb24gPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IHRpdGxlLCBtZXNzYWdlLCBzdGF0dXMgfSA9IHVzZUFwcFNlbGVjdG9yKHNlbGVjdG9yID0+IHNlbGVjdG9yLnVpKTtcclxuXHJcbiAgICBsZXQgc3RhdHVzQ2xhc3NlcyA9ICcnO1xyXG5cclxuICAgIGlmIChzdGF0dXMgPT09ICdzdWNjZXNzJykge1xyXG4gICAgICAgIHN0YXR1c0NsYXNzZXMgPSBjbGFzc2VzLnN1Y2Nlc3M7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHN0YXR1cyA9PT0gJ2Vycm9yJykge1xyXG4gICAgICAgIHN0YXR1c0NsYXNzZXMgPSBjbGFzc2VzLmVycm9yO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNzc0NsYXNzZXMgPSBgJHtjbGFzc2VzLm5vdGlmaWNhdGlvbn0gJHtzdGF0dXNDbGFzc2VzfWA7XHJcblxyXG4gICAgcmV0dXJuIFJlYWN0RE9NLmNyZWF0ZVBvcnRhbChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzQ2xhc3Nlc30+XHJcbiAgICAgICAgICAgIDxoMj57dGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgPHA+e21lc3NhZ2V9PC9wPlxyXG4gICAgICAgIDwvZGl2PixcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm90aWZpY2F0aW9ucycpXHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOb3RpZmljYXRpb247Il0sInNvdXJjZVJvb3QiOiIifQ==