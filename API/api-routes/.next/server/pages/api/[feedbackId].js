(function() {
var exports = {};
exports.id = "pages/api/[feedbackId]";
exports.ids = ["pages/api/[feedbackId]"];
exports.modules = {

/***/ "./pages/api/[feedbackId].ts":
/*!***********************************!*\
  !*** ./pages/api/[feedbackId].ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _feedback__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feedback */ "./pages/api/feedback.ts");


const handler = async (req, res) => {
  const feedbackId = req.query.feedbackId;
  const filePath = (0,_feedback__WEBPACK_IMPORTED_MODULE_0__.buildFeedbackPath)();
  const feedbacks = await (0,_feedback__WEBPACK_IMPORTED_MODULE_0__.extractFeedback)(filePath);

  switch (req.method) {
    case 'GET':
      const selectedFeedback = feedbacks.find(f => f.id === feedbackId);
      res.status(200).json({
        feedback: selectedFeedback
      });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (handler);

/***/ }),

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/[feedbackId].ts"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcGktcm91dGVzLy4vcGFnZXMvYXBpL1tmZWVkYmFja0lkXS50cyIsIndlYnBhY2s6Ly9hcGktcm91dGVzLy4vcGFnZXMvYXBpL2ZlZWRiYWNrLnRzIiwid2VicGFjazovL2FwaS1yb3V0ZXMvZXh0ZXJuYWwgXCJmcy9wcm9taXNlc1wiIiwid2VicGFjazovL2FwaS1yb3V0ZXMvZXh0ZXJuYWwgXCJwYXRoXCIiXSwibmFtZXMiOlsiaGFuZGxlciIsInJlcSIsInJlcyIsImZlZWRiYWNrSWQiLCJxdWVyeSIsImZpbGVQYXRoIiwiYnVpbGRGZWVkYmFja1BhdGgiLCJmZWVkYmFja3MiLCJleHRyYWN0RmVlZGJhY2siLCJtZXRob2QiLCJzZWxlY3RlZEZlZWRiYWNrIiwiZmluZCIsImYiLCJpZCIsInN0YXR1cyIsImpzb24iLCJmZWVkYmFjayIsInBhdGgiLCJwcm9jZXNzIiwiY3dkIiwiZmlsZURhdGEiLCJmcyIsIkpTT04iLCJwYXJzZSIsInRvU3RyaW5nIiwicmVxQm9keSIsImJvZHkiLCJkYXRhIiwibmV3RmVlZGJhY2siLCJwdXNoIiwic3RyaW5naWZ5IiwibWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUlBLE1BQU1BLE9BQU8sR0FBRyxPQUFPQyxHQUFQLEVBQTRCQyxHQUE1QixLQUFxRDtBQUNqRSxRQUFNQyxVQUFVLEdBQUdGLEdBQUcsQ0FBQ0csS0FBSixDQUFVRCxVQUE3QjtBQUNBLFFBQU1FLFFBQVEsR0FBR0MsNERBQWlCLEVBQWxDO0FBQ0EsUUFBTUMsU0FBUyxHQUFHLE1BQU1DLDBEQUFlLENBQUNILFFBQUQsQ0FBdkM7O0FBQ0EsVUFBUUosR0FBRyxDQUFDUSxNQUFaO0FBQ0ksU0FBSyxLQUFMO0FBQ0ksWUFBTUMsZ0JBQWdCLEdBQUdILFNBQVMsQ0FBQ0ksSUFBVixDQUFnQkMsQ0FBRCxJQUFpQkEsQ0FBQyxDQUFDQyxFQUFGLEtBQVNWLFVBQXpDLENBQXpCO0FBQ0FELFNBQUcsQ0FBQ1ksTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLGdCQUFRLEVBQUVOO0FBQVosT0FBckI7QUFIUjtBQUtILENBVEQ7O0FBV0EsK0RBQWVWLE9BQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUVBO0FBRU8sTUFBTU0saUJBQWlCLEdBQUcsTUFBTTtBQUNyQyxTQUFPVyxnREFBQSxDQUFVQyxPQUFPLENBQUNDLEdBQVIsRUFBVixFQUF5QixNQUF6QixFQUFpQyxlQUFqQyxDQUFQO0FBQ0QsQ0FGTTtBQUlBLE1BQU1YLGVBQWUsR0FBRyxNQUFPSCxRQUFQLElBQTRCO0FBQ3pELFFBQU1lLFFBQVEsR0FBRyxNQUFNQywyREFBQSxDQUFZaEIsUUFBWixDQUF2QjtBQUNBLFNBQU9pQixJQUFJLENBQUNDLEtBQUwsQ0FBV0gsUUFBUSxDQUFDSSxRQUFULEVBQVgsQ0FBUDtBQUNELENBSE07O0FBS1AsTUFBTXhCLE9BQU8sR0FBRyxPQUFPQyxHQUFQLEVBQTRCQyxHQUE1QixLQUFxRDtBQUNuRSxRQUFNdUIsT0FBTyxHQUFHeEIsR0FBRyxDQUFDeUIsSUFBcEI7QUFDQSxNQUFJckIsUUFBUSxHQUFHQyxpQkFBaUIsRUFBaEM7QUFDQSxNQUFJcUIsSUFBSSxHQUFHLElBQVg7O0FBQ0EsVUFBUTFCLEdBQUcsQ0FBQ1EsTUFBWjtBQUNFLFNBQUssTUFBTDtBQUNFLFlBQU1tQixXQUFXLEdBQUdILE9BQXBCO0FBQ0FFLFVBQUksR0FBRyxNQUFNbkIsZUFBZSxDQUFDSCxRQUFELENBQTVCO0FBQ0FzQixVQUFJLENBQUNFLElBQUwsQ0FBVUQsV0FBVjtBQUNBUCxrRUFBQSxDQUFhaEIsUUFBYixFQUF1QmlCLElBQUksQ0FBQ1EsU0FBTCxDQUFlSCxJQUFmLENBQXZCO0FBQ0F6QixTQUFHLENBQUNZLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFZ0IsZUFBTyxFQUFFLFVBQVg7QUFBdUJmLGdCQUFRLEVBQUVZO0FBQWpDLE9BQXJCOztBQUNGLFNBQUssS0FBTDtBQUNFRCxVQUFJLEdBQUcsTUFBTW5CLGVBQWUsQ0FBQ0gsUUFBRCxDQUE1QjtBQUNBMkIsYUFBTyxDQUFDQyxHQUFSLENBQVlOLElBQVo7QUFDQXpCLFNBQUcsQ0FBQ1ksTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVnQixlQUFPLEVBQUUsYUFBWDtBQUEwQkosWUFBSSxFQUFFQTtBQUFoQyxPQUFyQjtBQVZKO0FBWUQsQ0FoQkQ7O0FBa0JBLCtEQUFlM0IsT0FBZixFOzs7Ozs7Ozs7OztBQy9CQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxrQyIsImZpbGUiOiJwYWdlcy9hcGkvW2ZlZWRiYWNrSWRdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYnVpbGRGZWVkYmFja1BhdGgsIGV4dHJhY3RGZWVkYmFjayB9IGZyb20gJy4vZmVlZGJhY2snO1xyXG5pbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCc7XHJcbmltcG9ydCBGZWVkYmFjayBmcm9tICcuLi8uLi9tb2RlbHMvZmVlZGJhY2snO1xyXG5cclxuY29uc3QgaGFuZGxlciA9IGFzeW5jIChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkgPT4ge1xyXG4gICAgY29uc3QgZmVlZGJhY2tJZCA9IHJlcS5xdWVyeS5mZWVkYmFja0lkXHJcbiAgICBjb25zdCBmaWxlUGF0aCA9IGJ1aWxkRmVlZGJhY2tQYXRoKClcclxuICAgIGNvbnN0IGZlZWRiYWNrcyA9IGF3YWl0IGV4dHJhY3RGZWVkYmFjayhmaWxlUGF0aClcclxuICAgIHN3aXRjaCAocmVxLm1ldGhvZCkge1xyXG4gICAgICAgIGNhc2UgJ0dFVCc6XHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkRmVlZGJhY2sgPSBmZWVkYmFja3MuZmluZCgoZjogRmVlZGJhY2spID0+IGYuaWQgPT09IGZlZWRiYWNrSWQpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgZmVlZGJhY2s6IHNlbGVjdGVkRmVlZGJhY2sgfSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlciIsImltcG9ydCBmcyBmcm9tICdmcy9wcm9taXNlcydcbmltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0J1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcblxuZXhwb3J0IGNvbnN0IGJ1aWxkRmVlZGJhY2tQYXRoID0gKCkgPT4ge1xuICByZXR1cm4gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdkYXRhJywgJ2ZlZWRiYWNrLmpzb24nKVxufVxuXG5leHBvcnQgY29uc3QgZXh0cmFjdEZlZWRiYWNrID0gYXN5bmMgKGZpbGVQYXRoOiBzdHJpbmcpID0+IHtcbiAgY29uc3QgZmlsZURhdGEgPSBhd2FpdCBmcy5yZWFkRmlsZShmaWxlUGF0aClcbiAgcmV0dXJuIEpTT04ucGFyc2UoZmlsZURhdGEudG9TdHJpbmcoKSlcbn1cblxuY29uc3QgaGFuZGxlciA9IGFzeW5jIChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkgPT4ge1xuICBjb25zdCByZXFCb2R5ID0gcmVxLmJvZHlcbiAgbGV0IGZpbGVQYXRoID0gYnVpbGRGZWVkYmFja1BhdGgoKVxuICBsZXQgZGF0YSA9IG51bGxcbiAgc3dpdGNoIChyZXEubWV0aG9kKSB7XG4gICAgY2FzZSAnUE9TVCc6XG4gICAgICBjb25zdCBuZXdGZWVkYmFjayA9IHJlcUJvZHlcbiAgICAgIGRhdGEgPSBhd2FpdCBleHRyYWN0RmVlZGJhY2soZmlsZVBhdGgpXG4gICAgICBkYXRhLnB1c2gobmV3RmVlZGJhY2spXG4gICAgICBmcy53cml0ZUZpbGUoZmlsZVBhdGgsIEpTT04uc3RyaW5naWZ5KGRhdGEpKVxuICAgICAgcmVzLnN0YXR1cygyMDEpLmpzb24oeyBtZXNzYWdlOiAnU3VjY2VzcyEnLCBmZWVkYmFjazogbmV3RmVlZGJhY2sgfSlcbiAgICBjYXNlICdHRVQnOlxuICAgICAgZGF0YSA9IGF3YWl0IGV4dHJhY3RGZWVkYmFjayhmaWxlUGF0aClcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lc3NhZ2U6ICdUaGlzIHdvcmtzIScsIGRhdGE6IGRhdGEgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnMvcHJvbWlzZXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=