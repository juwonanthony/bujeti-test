"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/solution-accodion/index.jsx":
/*!************************************************!*\
  !*** ./components/solution-accodion/index.jsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/icons */ \"./assets/icons/index.js\");\n/* harmony import */ var _assets_icons_more_arrow_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/icons/more-arrow.svg */ \"./assets/icons/more-arrow.svg\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst SolutionAccodion = (param)=>{\n    let { solution , active , onToggle , length , percent  } = param;\n    _s();\n    const { title , description  } = solution;\n    const contentEl = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    const [scrollHeight, setScrollHeight] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const percents = String(percent) + \"%\";\n    console.log(percents);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        var _contentEl_current;\n        setScrollHeight((_contentEl_current = contentEl.current) === null || _contentEl_current === void 0 ? void 0 : _contentEl_current.scrollHeight);\n    }, [\n        active\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"\".concat(active ? \"space-y-4\" : \"\", \" \"),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex\",\n                    onClick: onToggle,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"items-center flex my-4 cursor-pointer \".concat(active ? \" font-semibold text-accent-brown mb-0 md:text-5xl\" : \"text-gray-700 font-medium text-3xl group hover:text-accent-brown hover:font-semibold hover:md:text-5xl transition-all ease-in-out duration-300 \"),\n                        children: [\n                            title,\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                src: _assets_icons_more_arrow_svg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                                alt: _assets_icons_more_arrow_svg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                                className: \"ml-3 h-7 w-7 \".concat(active ? \"block\" : \"group-hover:block hidden\")\n                            }, void 0, false, {\n                                fileName: \"/Users/rarumdj/Documents/NextJs/website-v1/components/solution-accodion/index.jsx\",\n                                lineNumber: 30,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/rarumdj/Documents/NextJs/website-v1/components/solution-accodion/index.jsx\",\n                        lineNumber: 20,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/rarumdj/Documents/NextJs/website-v1/components/solution-accodion/index.jsx\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    ref: contentEl,\n                    style: active ? {\n                        height: scrollHeight\n                    } : {\n                        height: \"0px\"\n                    },\n                    className: \"h-0 overflow-hidden transition-all ease-in-out duration-200 \",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"leading-relaxed md:w-10/12 w-full text-gray-500 mb-7\",\n                        children: description\n                    }, void 0, false, {\n                        fileName: \"/Users/rarumdj/Documents/NextJs/website-v1/components/solution-accodion/index.jsx\",\n                        lineNumber: 44,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/rarumdj/Documents/NextJs/website-v1/components/solution-accodion/index.jsx\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/rarumdj/Documents/NextJs/website-v1/components/solution-accodion/index.jsx\",\n            lineNumber: 18,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/rarumdj/Documents/NextJs/website-v1/components/solution-accodion/index.jsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SolutionAccodion, \"yTvLOqMYKsWlVeuMb/qCpgqPkz4=\");\n_c = SolutionAccodion;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SolutionAccodion);\nvar _c;\n$RefreshReg$(_c, \"SolutionAccodion\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3NvbHV0aW9uLWFjY29kaW9uL2luZGV4LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFBK0I7QUFDNEI7QUFDSTtBQUNMO0FBRTFELE1BQU1RLG1CQUFtQixTQUFxRDtRQUFwRCxFQUFFQyxTQUFRLEVBQUVDLE9BQU0sRUFBRUMsU0FBUSxFQUFFQyxPQUFNLEVBQUVDLFFBQU8sRUFBRTs7SUFDdkUsTUFBTSxFQUFFQyxNQUFLLEVBQUVDLFlBQVcsRUFBRSxHQUFHTjtJQUMvQixNQUFNTyxZQUFZYiw2Q0FBTUE7SUFDeEIsTUFBTSxDQUFDYyxjQUFjQyxnQkFBZ0IsR0FBR2QsK0NBQVFBO0lBQ2hELE1BQU1lLFdBQVdDLE9BQU9QLFdBQVc7SUFDbkNRLFFBQVFDLEdBQUcsQ0FBQ0g7SUFDWmpCLGdEQUFTQSxDQUFDLElBQU07WUFDRWM7UUFBaEJFLGdCQUFnQkYsQ0FBQUEscUJBQUFBLFVBQVVPLE9BQU8sY0FBakJQLGdDQUFBQSxLQUFBQSxJQUFBQSxtQkFBbUJDLFlBQVk7SUFDakQsR0FBRztRQUFDUDtLQUFPO0lBRVgscUJBQ0UsOERBQUNjO2tCQUNDLDRFQUFDQTtZQUFJQyxXQUFXLEdBQTZCLE9BQTFCZixTQUFTLGNBQWMsRUFBRSxFQUFDOzs4QkFDM0MsOERBQUNjO29CQUFJQyxXQUFVO29CQUFPQyxTQUFTZjs4QkFDN0IsNEVBQUNnQjt3QkFDQ0YsV0FBVyx5Q0FJVixPQUhDZixTQUNJLHNEQUNDLGlKQUFnSjs7NEJBSXRKSTswQ0FFRCw4REFBQ2QsbURBQUtBO2dDQUNKNEIsS0FBS3JCLG9FQUFTQTtnQ0FDZHNCLEtBQUt0QixvRUFBU0E7Z0NBQ2RrQixXQUFXLGdCQUE4RCxPQUE5Q2YsU0FBUyxVQUFVLDBCQUEwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBTTlFLDhEQUFDYztvQkFDQ00sS0FBS2Q7b0JBQ0xlLE9BQU9yQixTQUFTO3dCQUFFc0IsUUFBUWY7b0JBQWEsSUFBSTt3QkFBRWUsUUFBUTtvQkFBTSxDQUFDO29CQUM1RFAsV0FBVTs4QkFFViw0RUFBQ1E7d0JBQUVSLFdBQVU7a0NBQXdEVjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUsvRTtHQTNDTVA7S0FBQUE7QUE2Q04sK0RBQWVBLGdCQUFnQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3NvbHV0aW9uLWFjY29kaW9uL2luZGV4LmpzeD9iYWYyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtaW51c19jaXJjbGUsIHBsdXNfY2lyY2xlIH0gZnJvbSAnLi4vLi4vYXNzZXRzL2ljb25zJztcbmltcG9ydCBNb3JlQXJyb3cgZnJvbSAnLi4vLi4vYXNzZXRzL2ljb25zL21vcmUtYXJyb3cuc3ZnJztcblxuY29uc3QgU29sdXRpb25BY2NvZGlvbiA9ICh7IHNvbHV0aW9uLCBhY3RpdmUsIG9uVG9nZ2xlLCBsZW5ndGgsIHBlcmNlbnQgfSkgPT4ge1xuICBjb25zdCB7IHRpdGxlLCBkZXNjcmlwdGlvbiB9ID0gc29sdXRpb247XG4gIGNvbnN0IGNvbnRlbnRFbCA9IHVzZVJlZigpO1xuICBjb25zdCBbc2Nyb2xsSGVpZ2h0LCBzZXRTY3JvbGxIZWlnaHRdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgcGVyY2VudHMgPSBTdHJpbmcocGVyY2VudCkgKyAnJSc7XG4gIGNvbnNvbGUubG9nKHBlcmNlbnRzKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFNjcm9sbEhlaWdodChjb250ZW50RWwuY3VycmVudD8uc2Nyb2xsSGVpZ2h0KTtcbiAgfSwgW2FjdGl2ZV0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHthY3RpdmUgPyAnc3BhY2UteS00JyA6ICcnfSBgfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCIgb25DbGljaz17b25Ub2dnbGV9PlxuICAgICAgICAgIDxoMVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgaXRlbXMtY2VudGVyIGZsZXggbXktNCBjdXJzb3ItcG9pbnRlciAke1xuICAgICAgICAgICAgICBhY3RpdmVcbiAgICAgICAgICAgICAgICA/ICcgZm9udC1zZW1pYm9sZCB0ZXh0LWFjY2VudC1icm93biBtYi0wIG1kOnRleHQtNXhsJ1xuICAgICAgICAgICAgICAgIDogYHRleHQtZ3JheS03MDAgZm9udC1tZWRpdW0gdGV4dC0zeGwgZ3JvdXAgaG92ZXI6dGV4dC1hY2NlbnQtYnJvd24gaG92ZXI6Zm9udC1zZW1pYm9sZCBob3ZlcjptZDp0ZXh0LTV4bCB0cmFuc2l0aW9uLWFsbCBlYXNlLWluLW91dCBkdXJhdGlvbi0zMDAgYFxuICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAvLyBzdHlsZT17eyBvcGFjaXR5OiBwZXJjZW50IH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3RpdGxlfVxuXG4gICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgc3JjPXtNb3JlQXJyb3d9XG4gICAgICAgICAgICAgIGFsdD17TW9yZUFycm93fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BtbC0zIGgtNyB3LTcgJHthY3RpdmUgPyAnYmxvY2snIDogJ2dyb3VwLWhvdmVyOmJsb2NrIGhpZGRlbid9YH1cbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIHsvKiA8TW9yZUFycm93IGNsYXNzTmFtZT1cIm1sLTMgaC03IHctN1wiIC8+ICovfVxuICAgICAgICAgIDwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgcmVmPXtjb250ZW50RWx9XG4gICAgICAgICAgc3R5bGU9e2FjdGl2ZSA/IHsgaGVpZ2h0OiBzY3JvbGxIZWlnaHQgfSA6IHsgaGVpZ2h0OiAnMHB4JyB9fVxuICAgICAgICAgIGNsYXNzTmFtZT1cImgtMCBvdmVyZmxvdy1oaWRkZW4gdHJhbnNpdGlvbi1hbGwgZWFzZS1pbi1vdXQgZHVyYXRpb24tMjAwIFwiXG4gICAgICAgID5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsZWFkaW5nLXJlbGF4ZWQgbWQ6dy0xMC8xMiB3LWZ1bGwgdGV4dC1ncmF5LTUwMCBtYi03XCI+e2Rlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNvbHV0aW9uQWNjb2Rpb247XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwibWludXNfY2lyY2xlIiwicGx1c19jaXJjbGUiLCJNb3JlQXJyb3ciLCJTb2x1dGlvbkFjY29kaW9uIiwic29sdXRpb24iLCJhY3RpdmUiLCJvblRvZ2dsZSIsImxlbmd0aCIsInBlcmNlbnQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiY29udGVudEVsIiwic2Nyb2xsSGVpZ2h0Iiwic2V0U2Nyb2xsSGVpZ2h0IiwicGVyY2VudHMiLCJTdHJpbmciLCJjb25zb2xlIiwibG9nIiwiY3VycmVudCIsImRpdiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJoMSIsInNyYyIsImFsdCIsInJlZiIsInN0eWxlIiwiaGVpZ2h0IiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/solution-accodion/index.jsx\n"));

/***/ })

});