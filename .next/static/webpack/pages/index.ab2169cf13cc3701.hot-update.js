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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/icons */ \"./assets/icons/index.js\");\n/* harmony import */ var _assets_icons_more_arrow_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/icons/more-arrow.svg */ \"./assets/icons/more-arrow.svg\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst SolutionAccodion = (param)=>{\n    let { solution , active , onToggle , length , percent  } = param;\n    _s();\n    const { title , description  } = solution;\n    const contentEl = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    const [scrollHeight, setScrollHeight] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        var _contentEl_current;\n        setScrollHeight((_contentEl_current = contentEl.current) === null || _contentEl_current === void 0 ? void 0 : _contentEl_current.scrollHeight);\n    }, [\n        active\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"\".concat(active ? \"space-y-4\" : \"\", \" \"),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex\",\n                    onClick: onToggle,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"items-center flex my-4 cursor-pointer \".concat(active ? \" font-semibold text-accent-brown mb-0 md:text-5xl\" : \"text-gray-700 font-medium text-3xl group hover:text-accent-brown hover:font-semibold hover:md:text-5xl transition-all ease-in-out duration-300\"),\n                        style: {\n                            opacity: percent\n                        },\n                        children: [\n                            title,\n                            \" \",\n                            active ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                src: _assets_icons_more_arrow_svg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                                alt: _assets_icons_more_arrow_svg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                                className: \"ml-3 h-7 w-7\"\n                            }, void 0, false, {\n                                fileName: \"/Users/rarumdj/Documents/NextJs/website-v1/components/solution-accodion/index.jsx\",\n                                lineNumber: 29,\n                                columnNumber: 15\n                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                src: _assets_icons_more_arrow_svg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                                alt: _assets_icons_more_arrow_svg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                                className: \"ml-3 h-7 w-7 group-hover:block hidden \"\n                            }, void 0, false, {\n                                fileName: \"/Users/rarumdj/Documents/NextJs/website-v1/components/solution-accodion/index.jsx\",\n                                lineNumber: 31,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/rarumdj/Documents/NextJs/website-v1/components/solution-accodion/index.jsx\",\n                        lineNumber: 19,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/rarumdj/Documents/NextJs/website-v1/components/solution-accodion/index.jsx\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    ref: contentEl,\n                    style: active ? {\n                        height: scrollHeight\n                    } : {\n                        height: \"0px\"\n                    },\n                    className: \"h-0 overflow-hidden transition-all ease-in-out duration-200 \",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"leading-relaxed md:w-10/12 w-full text-gray-500 mb-7\",\n                        children: description\n                    }, void 0, false, {\n                        fileName: \"/Users/rarumdj/Documents/NextJs/website-v1/components/solution-accodion/index.jsx\",\n                        lineNumber: 41,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/rarumdj/Documents/NextJs/website-v1/components/solution-accodion/index.jsx\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/rarumdj/Documents/NextJs/website-v1/components/solution-accodion/index.jsx\",\n            lineNumber: 17,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/rarumdj/Documents/NextJs/website-v1/components/solution-accodion/index.jsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SolutionAccodion, \"yTvLOqMYKsWlVeuMb/qCpgqPkz4=\");\n_c = SolutionAccodion;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SolutionAccodion);\nvar _c;\n$RefreshReg$(_c, \"SolutionAccodion\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3NvbHV0aW9uLWFjY29kaW9uL2luZGV4LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFBK0I7QUFDNEI7QUFDSTtBQUNMO0FBRTFELE1BQU1RLG1CQUFtQixTQUFxRDtRQUFwRCxFQUFFQyxTQUFRLEVBQUVDLE9BQU0sRUFBRUMsU0FBUSxFQUFFQyxPQUFNLEVBQUVDLFFBQU8sRUFBRTs7SUFDdkUsTUFBTSxFQUFFQyxNQUFLLEVBQUVDLFlBQVcsRUFBRSxHQUFHTjtJQUMvQixNQUFNTyxZQUFZYiw2Q0FBTUE7SUFDeEIsTUFBTSxDQUFDYyxjQUFjQyxnQkFBZ0IsR0FBR2QsK0NBQVFBO0lBRWhERixnREFBU0EsQ0FBQyxJQUFNO1lBQ0VjO1FBQWhCRSxnQkFBZ0JGLENBQUFBLHFCQUFBQSxVQUFVRyxPQUFPLGNBQWpCSCxnQ0FBQUEsS0FBQUEsSUFBQUEsbUJBQW1CQyxZQUFZO0lBQ2pELEdBQUc7UUFBQ1A7S0FBTztJQUVYLHFCQUNFLDhEQUFDVTtrQkFDQyw0RUFBQ0E7WUFBSUMsV0FBVyxHQUE2QixPQUExQlgsU0FBUyxjQUFjLEVBQUUsRUFBQzs7OEJBQzNDLDhEQUFDVTtvQkFBSUMsV0FBVTtvQkFBT0MsU0FBU1g7OEJBQzdCLDRFQUFDWTt3QkFDQ0YsV0FBVyx5Q0FJVixPQUhDWCxTQUNJLHNEQUNBLGdKQUFnSjt3QkFFdEpjLE9BQU87NEJBQUVDLFNBQVNaO3dCQUFROzs0QkFFekJDOzRCQUFPOzRCQUNQSix1QkFDQyw4REFBQ1YsbURBQUtBO2dDQUFDMEIsS0FBS25CLG9FQUFTQTtnQ0FBRW9CLEtBQUtwQixvRUFBU0E7Z0NBQUVjLFdBQVU7Ozs7OzBEQUVqRCw4REFBQ3JCLG1EQUFLQTtnQ0FBQzBCLEtBQUtuQixvRUFBU0E7Z0NBQUVvQixLQUFLcEIsb0VBQVNBO2dDQUFFYyxXQUFVOzs7Ozt5Q0FDbEQ7Ozs7Ozs7Ozs7Ozs4QkFJTCw4REFBQ0Q7b0JBQ0NRLEtBQUtaO29CQUNMUSxPQUFPZCxTQUFTO3dCQUFFbUIsUUFBUVo7b0JBQWEsSUFBSTt3QkFBRVksUUFBUTtvQkFBTSxDQUFDO29CQUM1RFIsV0FBVTs4QkFFViw0RUFBQ1M7d0JBQUVULFdBQVU7a0NBQXdETjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUsvRTtHQXhDTVA7S0FBQUE7QUEwQ04sK0RBQWVBLGdCQUFnQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3NvbHV0aW9uLWFjY29kaW9uL2luZGV4LmpzeD9iYWYyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtaW51c19jaXJjbGUsIHBsdXNfY2lyY2xlIH0gZnJvbSAnLi4vLi4vYXNzZXRzL2ljb25zJztcbmltcG9ydCBNb3JlQXJyb3cgZnJvbSAnLi4vLi4vYXNzZXRzL2ljb25zL21vcmUtYXJyb3cuc3ZnJztcblxuY29uc3QgU29sdXRpb25BY2NvZGlvbiA9ICh7IHNvbHV0aW9uLCBhY3RpdmUsIG9uVG9nZ2xlLCBsZW5ndGgsIHBlcmNlbnQgfSkgPT4ge1xuICBjb25zdCB7IHRpdGxlLCBkZXNjcmlwdGlvbiB9ID0gc29sdXRpb247XG4gIGNvbnN0IGNvbnRlbnRFbCA9IHVzZVJlZigpO1xuICBjb25zdCBbc2Nyb2xsSGVpZ2h0LCBzZXRTY3JvbGxIZWlnaHRdID0gdXNlU3RhdGUoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFNjcm9sbEhlaWdodChjb250ZW50RWwuY3VycmVudD8uc2Nyb2xsSGVpZ2h0KTtcbiAgfSwgW2FjdGl2ZV0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHthY3RpdmUgPyAnc3BhY2UteS00JyA6ICcnfSBgfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCIgb25DbGljaz17b25Ub2dnbGV9PlxuICAgICAgICAgIDxoMVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgaXRlbXMtY2VudGVyIGZsZXggbXktNCBjdXJzb3ItcG9pbnRlciAke1xuICAgICAgICAgICAgICBhY3RpdmVcbiAgICAgICAgICAgICAgICA/ICcgZm9udC1zZW1pYm9sZCB0ZXh0LWFjY2VudC1icm93biBtYi0wIG1kOnRleHQtNXhsJ1xuICAgICAgICAgICAgICAgIDogJ3RleHQtZ3JheS03MDAgZm9udC1tZWRpdW0gdGV4dC0zeGwgZ3JvdXAgaG92ZXI6dGV4dC1hY2NlbnQtYnJvd24gaG92ZXI6Zm9udC1zZW1pYm9sZCBob3ZlcjptZDp0ZXh0LTV4bCB0cmFuc2l0aW9uLWFsbCBlYXNlLWluLW91dCBkdXJhdGlvbi0zMDAnXG4gICAgICAgICAgICB9YH1cbiAgICAgICAgICAgIHN0eWxlPXt7IG9wYWNpdHk6IHBlcmNlbnQgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7dGl0bGV9eycgJ31cbiAgICAgICAgICAgIHthY3RpdmUgPyAoXG4gICAgICAgICAgICAgIDxJbWFnZSBzcmM9e01vcmVBcnJvd30gYWx0PXtNb3JlQXJyb3d9IGNsYXNzTmFtZT1cIm1sLTMgaC03IHctN1wiIC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtNb3JlQXJyb3d9IGFsdD17TW9yZUFycm93fSBjbGFzc05hbWU9XCJtbC0zIGgtNyB3LTcgZ3JvdXAtaG92ZXI6YmxvY2sgaGlkZGVuIFwiIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgey8qIDxNb3JlQXJyb3cgY2xhc3NOYW1lPVwibWwtMyBoLTcgdy03XCIgLz4gKi99XG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICByZWY9e2NvbnRlbnRFbH1cbiAgICAgICAgICBzdHlsZT17YWN0aXZlID8geyBoZWlnaHQ6IHNjcm9sbEhlaWdodCB9IDogeyBoZWlnaHQ6ICcwcHgnIH19XG4gICAgICAgICAgY2xhc3NOYW1lPVwiaC0wIG92ZXJmbG93LWhpZGRlbiB0cmFuc2l0aW9uLWFsbCBlYXNlLWluLW91dCBkdXJhdGlvbi0yMDAgXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxlYWRpbmctcmVsYXhlZCBtZDp3LTEwLzEyIHctZnVsbCB0ZXh0LWdyYXktNTAwIG1iLTdcIj57ZGVzY3JpcHRpb259PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU29sdXRpb25BY2NvZGlvbjtcbiJdLCJuYW1lcyI6WyJJbWFnZSIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJtaW51c19jaXJjbGUiLCJwbHVzX2NpcmNsZSIsIk1vcmVBcnJvdyIsIlNvbHV0aW9uQWNjb2Rpb24iLCJzb2x1dGlvbiIsImFjdGl2ZSIsIm9uVG9nZ2xlIiwibGVuZ3RoIiwicGVyY2VudCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJjb250ZW50RWwiLCJzY3JvbGxIZWlnaHQiLCJzZXRTY3JvbGxIZWlnaHQiLCJjdXJyZW50IiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayIsImgxIiwic3R5bGUiLCJvcGFjaXR5Iiwic3JjIiwiYWx0IiwicmVmIiwiaGVpZ2h0IiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/solution-accodion/index.jsx\n"));

/***/ })

});