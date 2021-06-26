(function() {
var exports = {};
exports.id = "pages/feedbacks";
exports.ids = ["pages/feedbacks"];
exports.modules = {

/***/ "./pages/api/feedback.ts":
/*!*******************************!*\
  !*** ./pages/api/feedback.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildFeedbackPath": function() { return /* binding */ buildFeedbackPath; },
/* harmony export */   "extractFeedback": function() { return /* binding */ extractFeedback; }
/* harmony export */ });
/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs/promises */ "fs/promises");
/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs_promises__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);


const buildFeedbackPath = () => {
  return path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), 'data', 'feedback.json');
};
const extractFeedback = async filePath => {
  const fileData = await fs_promises__WEBPACK_IMPORTED_MODULE_0___default().readFile(filePath);
  return JSON.parse(fileData.toString());
};

const handler = async (req, res) => {
  const reqBody = req.body;
  let filePath = buildFeedbackPath();
  let data = null;

  switch (req.method) {
    case 'POST':
      const newFeedback = reqBody;
      data = await extractFeedback(filePath);
      data.push(newFeedback);
      fs_promises__WEBPACK_IMPORTED_MODULE_0___default().writeFile(filePath, JSON.stringify(data));
      res.status(201).json({
        message: 'Success!',
        feedback: newFeedback
      });

    case 'GET':
      data = await extractFeedback(filePath);
      console.log(data);
      res.status(200).json({
        message: 'This works!',
        data: data
      });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (handler);

/***/ }),

/***/ "./pages/feedbacks.tsx":
/*!*****************************!*\
  !*** ./pages/feedbacks.tsx ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_feedback__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api/feedback */ "./pages/api/feedback.ts");

var _jsxFileName = "D:\\Home studying\\Courses\\NextJs\\API\\api-routes\\pages\\feedbacks.tsx";



const FeedBackPage = props => {
  const {
    0: feedback,
    1: settFeedback
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();

  const loadFeedbackHandler = id => {
    fetch('/api/' + id).then(response => response.json()).then(data => {
      settFeedback(data.feedback);
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [feedback && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: feedback
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 26
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      children: props.feedbacks.map(f => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: [f.feedback, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: loadFeedbackHandler(null, f.id)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 37
        }, undefined)]
      }, f.id, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 21
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 9
  }, undefined);
};

const getStaticProps = async () => {
  const dataPath = (0,_api_feedback__WEBPACK_IMPORTED_MODULE_2__.buildFeedbackPath)();
  const data = await (0,_api_feedback__WEBPACK_IMPORTED_MODULE_2__.extractFeedback)(dataPath);
  return {
    props: {
      feedbacks: data
    }
  };
};
/* harmony default export */ __webpack_exports__["default"] = (FeedBackPage);

/***/ }),

/***/ "fs/promises":
/*!******************************!*\
  !*** external "fs/promises" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("fs/promises");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("path");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

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
var __webpack_exports__ = (__webpack_exec__("./pages/feedbacks.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcGktcm91dGVzLy4vcGFnZXMvYXBpL2ZlZWRiYWNrLnRzIiwid2VicGFjazovL2FwaS1yb3V0ZXMvLi9wYWdlcy9mZWVkYmFja3MudHN4Iiwid2VicGFjazovL2FwaS1yb3V0ZXMvZXh0ZXJuYWwgXCJmcy9wcm9taXNlc1wiIiwid2VicGFjazovL2FwaS1yb3V0ZXMvZXh0ZXJuYWwgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vYXBpLXJvdXRlcy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vYXBpLXJvdXRlcy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbImJ1aWxkRmVlZGJhY2tQYXRoIiwicGF0aCIsInByb2Nlc3MiLCJjd2QiLCJleHRyYWN0RmVlZGJhY2siLCJmaWxlUGF0aCIsImZpbGVEYXRhIiwiZnMiLCJKU09OIiwicGFyc2UiLCJ0b1N0cmluZyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJyZXFCb2R5IiwiYm9keSIsImRhdGEiLCJtZXRob2QiLCJuZXdGZWVkYmFjayIsInB1c2giLCJzdHJpbmdpZnkiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsImZlZWRiYWNrIiwiY29uc29sZSIsImxvZyIsIkZlZWRCYWNrUGFnZSIsInByb3BzIiwic2V0dEZlZWRiYWNrIiwidXNlU3RhdGUiLCJsb2FkRmVlZGJhY2tIYW5kbGVyIiwiaWQiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImZlZWRiYWNrcyIsIm1hcCIsImYiLCJnZXRTdGF0aWNQcm9wcyIsImRhdGFQYXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVPLE1BQU1BLGlCQUFpQixHQUFHLE1BQU07QUFDckMsU0FBT0MsZ0RBQUEsQ0FBVUMsT0FBTyxDQUFDQyxHQUFSLEVBQVYsRUFBeUIsTUFBekIsRUFBaUMsZUFBakMsQ0FBUDtBQUNELENBRk07QUFJQSxNQUFNQyxlQUFlLEdBQUcs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Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoicGFnZXMvZmVlZGJhY2tzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZzIGZyb20gJ2ZzL3Byb21pc2VzJ1xuaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuXG5leHBvcnQgY29uc3QgYnVpbGRGZWVkYmFja1BhdGggPSAoKSA9PiB7XG4gIHJldHVybiBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ2RhdGEnLCAnZmVlZGJhY2suanNvbicpXG59XG5cbmV4cG9ydCBjb25zdCBleHRyYWN0RmVlZGJhY2sgPSBhc3luYyAoZmlsZVBhdGg6IHN0cmluZykgPT4ge1xuICBjb25zdCBmaWxlRGF0YSA9IGF3YWl0IGZzLnJlYWRGaWxlKGZpbGVQYXRoKVxuICByZXR1cm4gSlNPTi5wYXJzZShmaWxlRGF0YS50b1N0cmluZygpKVxufVxuXG5jb25zdCBoYW5kbGVyID0gYXN5bmMgKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSA9PiB7XG4gIGNvbnN0IHJlcUJvZHkgPSByZXEuYm9keVxuICBsZXQgZmlsZVBhdGggPSBidWlsZEZlZWRiYWNrUGF0aCgpXG4gIGxldCBkYXRhID0gbnVsbFxuICBzd2l0Y2ggKHJlcS5tZXRob2QpIHtcbiAgICBjYXNlICdQT1NUJzpcbiAgICAgIGNvbnN0IG5ld0ZlZWRiYWNrID0gcmVxQm9keVxuICAgICAgZGF0YSA9IGF3YWl0IGV4dHJhY3RGZWVkYmFjayhmaWxlUGF0aClcbiAgICAgIGRhdGEucHVzaChuZXdGZWVkYmFjaylcbiAgICAgIGZzLndyaXRlRmlsZShmaWxlUGF0aCwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpXG4gICAgICByZXMuc3RhdHVzKDIwMSkuanNvbih7IG1lc3NhZ2U6ICdTdWNjZXNzIScsIGZlZWRiYWNrOiBuZXdGZWVkYmFjayB9KVxuICAgIGNhc2UgJ0dFVCc6XG4gICAgICBkYXRhID0gYXdhaXQgZXh0cmFjdEZlZWRiYWNrKGZpbGVQYXRoKVxuICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVzc2FnZTogJ1RoaXMgd29ya3MhJywgZGF0YTogZGF0YSB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXIiLCJpbXBvcnQgUmVhY3QsIHsgRkMsIEZyYWdtZW50LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBGZWVkYmFjayBmcm9tIFwiLi4vbW9kZWxzL2ZlZWRiYWNrXCJcclxuaW1wb3J0IHsgYnVpbGRGZWVkYmFja1BhdGgsIGV4dHJhY3RGZWVkYmFjayB9IGZyb20gXCIuL2FwaS9mZWVkYmFja1wiXHJcblxyXG5jb25zdCBGZWVkQmFja1BhZ2U6IEZDPHsgZmVlZGJhY2tzOiBGZWVkYmFja1tdIH0+ID0gcHJvcHMgPT4ge1xyXG4gICAgY29uc3QgW2ZlZWRiYWNrLCBzZXR0RmVlZGJhY2tdID0gdXNlU3RhdGUoKVxyXG5cclxuICAgIGNvbnN0IGxvYWRGZWVkYmFja0hhbmRsZXIgPSAoaWQ6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIGZldGNoKCcvYXBpLycgKyBpZClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIHNldHRGZWVkYmFjayhkYXRhLmZlZWRiYWNrKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZyYWdtZW50PlxyXG4gICAgICAgICAgICB7ZmVlZGJhY2sgJiYgPHA+e2ZlZWRiYWNrfTwvcD59XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIHtwcm9wcy5mZWVkYmFja3MubWFwKGYgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2YuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Zi5mZWVkYmFja308YnV0dG9uIG9uQ2xpY2s9e2xvYWRGZWVkYmFja0hhbmRsZXIobnVsbCwgZi5pZCl9PjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBkYXRhUGF0aCA9IGJ1aWxkRmVlZGJhY2tQYXRoKClcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBleHRyYWN0RmVlZGJhY2soZGF0YVBhdGgpXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczogeyBmZWVkYmFja3M6IGRhdGEgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGZWVkQmFja1BhZ2UiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmcy9wcm9taXNlc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==