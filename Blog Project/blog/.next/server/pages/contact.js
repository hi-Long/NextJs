(function() {
var exports = {};
exports.id = "pages/contact";
exports.ids = ["pages/contact"];
exports.modules = {

/***/ "./components/contact/contact-form.tsx":
/*!*********************************************!*\
  !*** ./components/contact/contact-form.tsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store */ "./store/index.ts");
/* harmony import */ var _store_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/hooks */ "./store/hooks.ts");
/* harmony import */ var _contact_form_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact-form.module.css */ "./components/contact/contact-form.module.css");
/* harmony import */ var _contact_form_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_contact_form_module_css__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "D:\\Home studying\\Courses\\NextJs\\Blog Project\\blog\\components\\contact\\contact-form.tsx";






const ContactForm = props => {
  const dispatch = (0,_store_hooks__WEBPACK_IMPORTED_MODULE_4__.useAppDispatch)();
  const emailRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  const nameRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  const messageRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);

  const sendMessageHandler = async event => {
    event.preventDefault();
    const email = emailRef.current.value;
    const name = nameRef.current.value;
    const message = messageRef.current.value;
    const newMessage = {
      email,
      name,
      message
    };
    let newNotification;

    try {
      const response = await axios__WEBPACK_IMPORTED_MODULE_1___default().post('/api/contact', newMessage);
      console.log(response);
      newNotification = {
        title: 'aa',
        message: 'bb',
        status: 'success'
      };
      dispatch(_store__WEBPACK_IMPORTED_MODULE_3__.uiActions.setNotification(newNotification));
    } catch (err) {
      console.log(err.message);
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
    className: (_contact_form_module_css__WEBPACK_IMPORTED_MODULE_5___default().contact),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: "How can I help you?"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
      className: (_contact_form_module_css__WEBPACK_IMPORTED_MODULE_5___default().form),
      onSubmit: sendMessageHandler,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_contact_form_module_css__WEBPACK_IMPORTED_MODULE_5___default().controls),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_contact_form_module_css__WEBPACK_IMPORTED_MODULE_5___default().control),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            htmlFor: "email",
            children: "Your email"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 21
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "email",
            id: "email",
            ref: emailRef
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 21
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_contact_form_module_css__WEBPACK_IMPORTED_MODULE_5___default().control),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            htmlFor: "name",
            children: "Your name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 21
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "text",
            id: "name",
            ref: nameRef
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 21
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 17
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_contact_form_module_css__WEBPACK_IMPORTED_MODULE_5___default().control),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "message",
          children: "Your message"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("textarea", {
          rows: 5,
          id: "message",
          ref: messageRef
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 17
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_contact_form_module_css__WEBPACK_IMPORTED_MODULE_5___default().actions),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          children: "Send message"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 12
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ContactForm);

function useDispatch() {
  throw new Error('Function not implemented.');
}

/***/ }),

/***/ "./components/ui/notification.tsx":
/*!****************************************!*\
  !*** ./components/ui/notification.tsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/hooks */ "./store/hooks.ts");
/* harmony import */ var _notification_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notification.module.css */ "./components/ui/notification.module.css");
/* harmony import */ var _notification_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_notification_module_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "D:\\Home studying\\Courses\\NextJs\\Blog Project\\blog\\components\\ui\\notification.tsx";




const Notification = () => {
  const {
    title,
    message,
    status
  } = (0,_store_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)(selector => selector.ui);
  let statusClasses = '';

  if (status === 'success') {
    statusClasses = (_notification_module_css__WEBPACK_IMPORTED_MODULE_3___default().success);
  }

  if (status === 'error') {
    statusClasses = (_notification_module_css__WEBPACK_IMPORTED_MODULE_3___default().error);
  }

  const cssClasses = `${(_notification_module_css__WEBPACK_IMPORTED_MODULE_3___default().notification)} ${statusClasses}`;
  return /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_1___default().createPortal( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: cssClasses,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: message
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 9
  }, undefined), document.getElementById('notifications'));
};

/* harmony default export */ __webpack_exports__["default"] = (Notification);

/***/ }),

/***/ "./pages/contact.tsx":
/*!***************************!*\
  !*** ./pages/contact.tsx ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_contact_contact_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/contact/contact-form */ "./components/contact/contact-form.tsx");
/* harmony import */ var _components_ui_notification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ui/notification */ "./components/ui/notification.tsx");

var _jsxFileName = "D:\\Home studying\\Courses\\NextJs\\Blog Project\\blog\\pages\\contact.tsx";




const ContactPage = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_contact_contact_form__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_notification__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 12
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ContactPage);

/***/ }),

/***/ "./store/hooks.ts":
/*!************************!*\
  !*** ./store/hooks.ts ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useAppDispatch": function() { return /* binding */ useAppDispatch; },
/* harmony export */   "useAppSelector": function() { return /* binding */ useAppSelector; }
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);

// Use throughout your app instead of plain `useDispatch` and `useSelector`
const useAppDispatch = () => (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)();
const useAppSelector = react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector;

/***/ }),

/***/ "./store/index.ts":
/*!************************!*\
  !*** ./store/index.ts ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "uiActions": function() { return /* binding */ uiActions; }
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialUiState = {
  message: '',
  status: '',
  title: ''
};
const uiSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: 'ui',
  initialState: initialUiState,
  reducers: {
    setNotification: (state, action) => {
      const {
        message,
        title,
        status
      } = action.payload;
      state.message = message;
      state.title = title;
      state.status = status;
    },
    resetNotification: state => {
      state.message = '';
      state.title = '';
      state.status = '';
    }
  }
});
const store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({
  reducer: {
    ui: uiSlice.reducer
  }
});
/* harmony default export */ __webpack_exports__["default"] = (store);
const uiActions = uiSlice.actions;

/***/ }),

/***/ "./components/contact/contact-form.module.css":
/*!****************************************************!*\
  !*** ./components/contact/contact-form.module.css ***!
  \****************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"contact": "contact-form_contact__2DYss",
	"form": "contact-form_form__1RTmV",
	"controls": "contact-form_controls__3o80h",
	"control": "contact-form_control__1hqvU",
	"actions": "contact-form_actions__RzW-v"
};


/***/ }),

/***/ "./components/ui/notification.module.css":
/*!***********************************************!*\
  !*** ./components/ui/notification.module.css ***!
  \***********************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"notification": "notification_notification__3oWBf",
	"success": "notification_success__3Hbna",
	"error": "notification_error__1LYKp"
};


/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@reduxjs/toolkit");;

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-dom");;

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/contact.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ibG9nLy4vY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QtZm9ybS50c3giLCJ3ZWJwYWNrOi8vYmxvZy8uL2NvbXBvbmVudHMvdWkvbm90aWZpY2F0aW9uLnRzeCIsIndlYnBhY2s6Ly9ibG9nLy4vcGFnZXMvY29udGFjdC50c3giLCJ3ZWJwYWNrOi8vYmxvZy8uL3N0b3JlL2hvb2tzLnRzIiwid2VicGFjazovL2Jsb2cvLi9zdG9yZS9pbmRleC50cyIsIndlYnBhY2s6Ly9ibG9nLy4vY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QtZm9ybS5tb2R1bGUuY3NzIiwid2VicGFjazovL2Jsb2cvLi9jb21wb25lbnRzL3VpL25vdGlmaWNhdGlvbi5tb2R1bGUuY3NzIiwid2VicGFjazovL2Jsb2cvZXh0ZXJuYWwgXCJAcmVkdXhqcy90b29sa2l0XCIiLCJ3ZWJwYWNrOi8vYmxvZy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vYmxvZy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vYmxvZy9leHRlcm5hbCBcInJlYWN0LWRvbVwiIiwid2VicGFjazovL2Jsb2cvZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovL2Jsb2cvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJDb250YWN0Rm9ybSIsInByb3BzIiwiZGlzcGF0Y2giLCJ1c2VBcHBEaXNwYXRjaCIsImVtYWlsUmVmIiwidXNlUmVmIiwibmFtZVJlZiIsIm1lc3NhZ2VSZWYiLCJzZW5kTWVzc2FnZUhhbmRsZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZW1haWwiLCJjdXJyZW50IiwidmFsdWUiLCJuYW1lIiwibWVzc2FnZSIsIm5ld01lc3NhZ2UiLCJuZXdOb3RpZmljYXRpb24iLCJyZXNwb25zZSIsImF4aW9zIiwiY29uc29sZSIsImxvZyIsInRpdGxlIiwic3RhdHVzIiwidWlBY3Rpb25zIiwiZXJyIiwiY2xhc3NlcyIsInVzZURpc3BhdGNoIiwiRXJyb3IiLCJOb3RpZmljYXRpb24iLCJ1c2VBcHBTZWxlY3RvciIsInNlbGVjdG9yIiwidWkiLCJzdGF0dXNDbGFzc2VzIiwiY3NzQ2xhc3NlcyIsIlJlYWN0RE9NIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIkNvbnRhY3RQYWdlIiwidXNlU2VsZWN0b3IiLCJpbml0aWFsVWlTdGF0ZSIsInVpU2xpY2UiLCJjcmVhdGVTbGljZSIsImluaXRpYWxTdGF0ZSIsInJlZHVjZXJzIiwic2V0Tm90aWZpY2F0aW9uIiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwicmVzZXROb3RpZmljYXRpb24iLCJzdG9yZSIsImNvbmZpZ3VyZVN0b3JlIiwicmVkdWNlciIsImFjdGlvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7QUFFQSxNQUFNQSxXQUFtQixHQUFHQyxLQUFLLElBQUk7QUFDakMsUUFBTUMsUUFBUSxHQUFHQyw0REFBYyxFQUEvQjtBQUVBLFFBQU1DLFFBQVEsR0FBR0MsNkNBQU0sQ0FBbUIsSUFBbkIsQ0FBdkI7QUFDQSxRQUFNQyxPQUFPLEdBQUdELDZDQUFNLENBQW1CLElBQW5CLENBQXRCO0FBQ0EsUUFBTUUsVUFBVSxHQUFHRiw2Q0FBTSxDQUFzQixJQUF0QixDQUF6Qjs7QUFFQSxRQUFNRyxrQkFBa0IsR0FBRyxNQUFPQyxLQUFQLElBQWtDO0FBQ3pEQSxTQUFLLENBQUNDLGNBQU47QUFDQSxVQUFNQyxLQUFLLEdBQUdQLFFBQVEsQ0FBQ1EsT0FBVCxDQUFrQkMsS0FBaEM7QUFDQSxVQUFNQyxJQUFJLEdBQUdSLE9BQU8sQ0FBQ00sT0FBUixDQUFpQkMsS0FBOUI7QUFDQSxVQUFNRSxPQUFPLEdBQUdSLFVBQVUsQ0FBQ0ssT0FBWCxDQUFvQkMsS0FBcEM7QUFDQSxVQUFNRyxVQUFtQixHQUFHO0FBQUVMLFdBQUY7QUFBU0csVUFBVDtBQUFlQztBQUFmLEtBQTVC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RUFBUUMsTUFBUixLQUFnRDtBQUM3RCxZQUFNO0FBQUVoQyxlQUFGO0FBQVdPLGFBQVg7QUFBa0JDO0FBQWxCLFVBQThCd0IsTUFBTSxDQUFDQyxPQUEzQztBQUNBRixXQUFLLENBQUMvQixPQUFOLEdBQWdCQSxPQUFoQjtBQUNBK0IsV0FBSyxDQUFDeEIsS0FBTixHQUFjQSxLQUFkO0FBQ0F3QixXQUFLLENBQUN2QixNQUFOLEdBQWVBLE1BQWY7QUFDSCxLQU5LO0FBT04wQixxQkFBaUIsRUFBRUgsS0FBSyxJQUFJO0FBQ3hCQSxXQUFLLENBQUMvQixPQUFOLEdBQWdCLEVBQWhCO0FBQ0ErQixXQUFLLENBQUN4QixLQUFOLEdBQWMsRUFBZDtBQUNBd0IsV0FBSyxDQUFDdkIsTUFBTixHQUFlLEVBQWY7QUFDSDtBQVhLO0FBSGMsQ0FBRCxDQUEzQjtBQWtCQSxNQUFNMkIsS0FBSyxHQUFHQyxnRUFBYyxDQUFDO0FBQ3pCQyxTQUFPLEVBQUU7QUFBRXBCLE1BQUUsRUFBRVMsT0FBTyxDQUFDVztBQUFkO0FBRGdCLENBQUQsQ0FBNUI7QUFRQSwrREFBZUYsS0FBZjtBQUdPLE1BQU0xQixTQUFTLEdBQUdpQixPQUFPLENBQUNZLE9BQTFCLEM7Ozs7Ozs7Ozs7QUN0Q1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0xBLDhDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6InBhZ2VzL2NvbnRhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCBSZWFjdCwgeyBGQywgdXNlUmVmIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBNZXNzYWdlIGZyb20gJy4uLy4uL21vZGVscy9NZXNzYWdlJ1xyXG5pbXBvcnQgeyB1aUFjdGlvbnMgfSBmcm9tICcuLi8uLi9zdG9yZSdcclxuaW1wb3J0IHsgdXNlQXBwRGlzcGF0Y2ggfSBmcm9tICcuLi8uLi9zdG9yZS9ob29rcydcclxuaW1wb3J0IE5vdGlmaWNhdGlvbiBmcm9tICcuLi8uLi9tb2RlbHMvTm90aWZpY2F0aW9uJ1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL2NvbnRhY3QtZm9ybS5tb2R1bGUuY3NzJ1xyXG5cclxuY29uc3QgQ29udGFjdEZvcm06IEZDPHt9PiA9IHByb3BzID0+IHtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlQXBwRGlzcGF0Y2goKVxyXG5cclxuICAgIGNvbnN0IGVtYWlsUmVmID0gdXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KG51bGwpXHJcbiAgICBjb25zdCBuYW1lUmVmID0gdXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KG51bGwpXHJcbiAgICBjb25zdCBtZXNzYWdlUmVmID0gdXNlUmVmPEhUTUxUZXh0QXJlYUVsZW1lbnQ+KG51bGwpXHJcblxyXG4gICAgY29uc3Qgc2VuZE1lc3NhZ2VIYW5kbGVyID0gYXN5bmMgKGV2ZW50OiBSZWFjdC5Gb3JtRXZlbnQpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgY29uc3QgZW1haWwgPSBlbWFpbFJlZi5jdXJyZW50IS52YWx1ZVxyXG4gICAgICAgIGNvbnN0IG5hbWUgPSBuYW1lUmVmLmN1cnJlbnQhLnZhbHVlXHJcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IG1lc3NhZ2VSZWYuY3VycmVudCEudmFsdWVcclxuICAgICAgICBjb25zdCBuZXdNZXNzYWdlOiBNZXNzYWdlID0geyBlbWFpbCwgbmFtZSwgbWVzc2FnZSB9XHJcblxyXG4gICAgICAgIGxldCBuZXdOb3RpZmljYXRpb246IE5vdGlmaWNhdGlvblxyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoJy9hcGkvY29udGFjdCcsIG5ld01lc3NhZ2UpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxyXG4gICAgICAgICAgICBuZXdOb3RpZmljYXRpb24gPSB7IHRpdGxlOiAnYWEnLCBtZXNzYWdlOiAnYmInLCBzdGF0dXM6ICdzdWNjZXNzJyB9XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHVpQWN0aW9ucy5zZXROb3RpZmljYXRpb24obmV3Tm90aWZpY2F0aW9uKSlcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiA8c2VjdGlvbiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFjdH0+XHJcbiAgICAgICAgPGgxPkhvdyBjYW4gSSBoZWxwIHlvdT88L2gxPlxyXG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtfSBvblN1Ym1pdD17c2VuZE1lc3NhZ2VIYW5kbGVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udHJvbHN9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udHJvbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J2VtYWlsJz5Zb3VyIGVtYWlsPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0nZW1haWwnIGlkPSdlbWFpbCcgcmVmPXtlbWFpbFJlZn0+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udHJvbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J25hbWUnPllvdXIgbmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIGlkPSduYW1lJyByZWY9e25hbWVSZWZ9PjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRyb2x9PlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J21lc3NhZ2UnPllvdXIgbWVzc2FnZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgcm93cz17NX0gaWQ9J21lc3NhZ2UnIHJlZj17bWVzc2FnZVJlZn0+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmFjdGlvbnN9PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbj5TZW5kIG1lc3NhZ2U8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgPC9zZWN0aW9uPlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWN0Rm9ybVxyXG5cclxuZnVuY3Rpb24gdXNlRGlzcGF0Y2goKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0Z1bmN0aW9uIG5vdCBpbXBsZW1lbnRlZC4nKVxyXG59XHJcbiIsImltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXHJcbmltcG9ydCB7IHVzZUFwcFNlbGVjdG9yIH0gZnJvbSAnLi4vLi4vc3RvcmUvaG9va3MnO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL25vdGlmaWNhdGlvbi5tb2R1bGUuY3NzJztcclxuXHJcbmNvbnN0IE5vdGlmaWNhdGlvbiA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgdGl0bGUsIG1lc3NhZ2UsIHN0YXR1cyB9ID0gdXNlQXBwU2VsZWN0b3Ioc2VsZWN0b3IgPT4gc2VsZWN0b3IudWkpO1xyXG5cclxuICAgIGxldCBzdGF0dXNDbGFzc2VzID0gJyc7XHJcblxyXG4gICAgaWYgKHN0YXR1cyA9PT0gJ3N1Y2Nlc3MnKSB7XHJcbiAgICAgICAgc3RhdHVzQ2xhc3NlcyA9IGNsYXNzZXMuc3VjY2VzcztcclxuICAgIH1cclxuXHJcbiAgICBpZiAoc3RhdHVzID09PSAnZXJyb3InKSB7XHJcbiAgICAgICAgc3RhdHVzQ2xhc3NlcyA9IGNsYXNzZXMuZXJyb3I7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY3NzQ2xhc3NlcyA9IGAke2NsYXNzZXMubm90aWZpY2F0aW9ufSAke3N0YXR1c0NsYXNzZXN9YDtcclxuXHJcbiAgICByZXR1cm4gUmVhY3RET00uY3JlYXRlUG9ydGFsKChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzQ2xhc3Nlc30+XHJcbiAgICAgICAgICAgIDxoMj57dGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgPHA+e21lc3NhZ2V9PC9wPlxyXG4gICAgICAgIDwvZGl2PiksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub3RpZmljYXRpb25zJylcclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5vdGlmaWNhdGlvbjsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IENvbnRhY3RGb3JtIGZyb20gXCIuLi9jb21wb25lbnRzL2NvbnRhY3QvY29udGFjdC1mb3JtXCJcclxuaW1wb3J0IE5vdGlmaWNhdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy91aS9ub3RpZmljYXRpb25cIlxyXG5cclxuY29uc3QgQ29udGFjdFBhZ2UgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gPGRpdj5cclxuICAgICAgICA8Q29udGFjdEZvcm0+PC9Db250YWN0Rm9ybT5cclxuICAgICAgICA8Tm90aWZpY2F0aW9uPjwvTm90aWZpY2F0aW9uPlxyXG4gICAgPC9kaXY+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RQYWdlIiwiaW1wb3J0IHsgVHlwZWRVc2VTZWxlY3Rvckhvb2ssIHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgdHlwZSB7IFJvb3RTdGF0ZSwgQXBwRGlzcGF0Y2ggfSBmcm9tICcuL2luZGV4J1xyXG5cclxuLy8gVXNlIHRocm91Z2hvdXQgeW91ciBhcHAgaW5zdGVhZCBvZiBwbGFpbiBgdXNlRGlzcGF0Y2hgIGFuZCBgdXNlU2VsZWN0b3JgXHJcbmV4cG9ydCBjb25zdCB1c2VBcHBEaXNwYXRjaCA9ICgpID0+IHVzZURpc3BhdGNoPEFwcERpc3BhdGNoPigpXHJcbmV4cG9ydCBjb25zdCB1c2VBcHBTZWxlY3RvcjogVHlwZWRVc2VTZWxlY3Rvckhvb2s8Um9vdFN0YXRlPiA9IHVzZVNlbGVjdG9yIiwiaW1wb3J0IHsgY29uZmlndXJlU3RvcmUsIGNyZWF0ZVNsaWNlLCBQYXlsb2FkQWN0aW9uIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuaW1wb3J0IE5vdGlmaWNhdGlvbiBmcm9tICcuLi9tb2RlbHMvTm90aWZpY2F0aW9uJ1xyXG5cclxuY29uc3QgaW5pdGlhbFVpU3RhdGU6IE5vdGlmaWNhdGlvbiA9IHtcclxuICAgIG1lc3NhZ2U6ICcnLFxyXG4gICAgc3RhdHVzOiAnJyxcclxuICAgIHRpdGxlOiAnJ1xyXG59XHJcblxyXG5jb25zdCB1aVNsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gICAgbmFtZTogJ3VpJyxcclxuICAgIGluaXRpYWxTdGF0ZTogaW5pdGlhbFVpU3RhdGUsXHJcbiAgICByZWR1Y2Vyczoge1xyXG4gICAgICAgIHNldE5vdGlmaWNhdGlvbjogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248Tm90aWZpY2F0aW9uPikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB7IG1lc3NhZ2UsIHRpdGxlLCBzdGF0dXMgfSA9IChhY3Rpb24ucGF5bG9hZClcclxuICAgICAgICAgICAgc3RhdGUubWVzc2FnZSA9IG1lc3NhZ2VcclxuICAgICAgICAgICAgc3RhdGUudGl0bGUgPSB0aXRsZVxyXG4gICAgICAgICAgICBzdGF0ZS5zdGF0dXMgPSBzdGF0dXNcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlc2V0Tm90aWZpY2F0aW9uOiBzdGF0ZSA9PiB7XHJcbiAgICAgICAgICAgIHN0YXRlLm1lc3NhZ2UgPSAnJ1xyXG4gICAgICAgICAgICBzdGF0ZS50aXRsZSA9ICcnXHJcbiAgICAgICAgICAgIHN0YXRlLnN0YXR1cyA9ICcnXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KVxyXG5cclxuY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSh7XHJcbiAgICByZWR1Y2VyOiB7IHVpOiB1aVNsaWNlLnJlZHVjZXIgfVxyXG59KVxyXG5cclxuZXhwb3J0IHR5cGUgUm9vdFN0YXRlID0gUmV0dXJuVHlwZTx0eXBlb2Ygc3RvcmUuZ2V0U3RhdGU+XHJcblxyXG5leHBvcnQgdHlwZSBBcHBEaXNwYXRjaCA9IHR5cGVvZiBzdG9yZS5kaXNwYXRjaFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3RvcmVcclxuXHJcblxyXG5leHBvcnQgY29uc3QgdWlBY3Rpb25zID0gdWlTbGljZS5hY3Rpb25zXHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhY3RcIjogXCJjb250YWN0LWZvcm1fY29udGFjdF9fMkRZc3NcIixcblx0XCJmb3JtXCI6IFwiY29udGFjdC1mb3JtX2Zvcm1fXzFSVG1WXCIsXG5cdFwiY29udHJvbHNcIjogXCJjb250YWN0LWZvcm1fY29udHJvbHNfXzNvODBoXCIsXG5cdFwiY29udHJvbFwiOiBcImNvbnRhY3QtZm9ybV9jb250cm9sX18xaHF2VVwiLFxuXHRcImFjdGlvbnNcIjogXCJjb250YWN0LWZvcm1fYWN0aW9uc19fUnpXLXZcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm5vdGlmaWNhdGlvblwiOiBcIm5vdGlmaWNhdGlvbl9ub3RpZmljYXRpb25fXzNvV0JmXCIsXG5cdFwic3VjY2Vzc1wiOiBcIm5vdGlmaWNhdGlvbl9zdWNjZXNzX18zSGJuYVwiLFxuXHRcImVycm9yXCI6IFwibm90aWZpY2F0aW9uX2Vycm9yX18xTFlLcFwiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJlZHV4anMvdG9vbGtpdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kb21cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=