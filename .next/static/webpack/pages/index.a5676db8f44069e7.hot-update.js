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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/icons */ \"./assets/icons/index.js\");\n/* harmony import */ var _assets_icons_more_arrow_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/icons/more-arrow.svg */ \"./assets/icons/more-arrow.svg\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst SolutionAccodion = (param)=>{\n    let { solution , active , onToggle , length , percent  } = param;\n    _s();\n    const { title , description  } = solution;\n    const contentEl = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    const [scrollHeight, setScrollHeight] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        var _contentEl_current;\n        setScrollHeight((_contentEl_current = contentEl.current) === null || _contentEl_current === void 0 ? void 0 : _contentEl_current.scrollHeight);\n    }, [\n        active\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"\".concat(active ? \"space-y-4\" : \"\", \" \"),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex\",\n                    onClick: onToggle,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"items-center flex my-4 cursor-pointer \".concat(active ? \" font-semibold text-accent-brown mb-0 md:text-5xl\" : \"text-gray-700 font-medium text-3xl group hover:text-accent-brown hover:font-semibold hover:md:text-5xl transition-all ease-in-out duration-300\"),\n                        dty: true,\n                        children: [\n                            title,\n                            \" \",\n                            active ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                src: _assets_icons_more_arrow_svg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                                alt: _assets_icons_more_arrow_svg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                                className: \"ml-3 h-7 w-7\"\n                            }, void 0, false, {\n                                fileName: \"/Users/rarumdj/Documents/NextJs/website-v1/components/solution-accodion/index.jsx\",\n                                lineNumber: 28,\n                                columnNumber: 15\n                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                src: _assets_icons_more_arrow_svg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                                alt: _assets_icons_more_arrow_svg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                                className: \"ml-3 h-7 w-7 group-hover:block hidden \"\n                            }, void 0, false, {\n                                fileName: \"/Users/rarumdj/Documents/NextJs/website-v1/components/solution-accodion/index.jsx\",\n                                lineNumber: 30,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/rarumdj/Documents/NextJs/website-v1/components/solution-accodion/index.jsx\",\n                        lineNumber: 19,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/rarumdj/Documents/NextJs/website-v1/components/solution-accodion/index.jsx\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    ref: contentEl,\n                    style: active ? {\n                        height: scrollHeight\n                    } : {\n                        height: \"0px\"\n                    },\n                    className: \"h-0 overflow-hidden transition-all ease-in-out duration-200 \",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"leading-relaxed md:w-10/12 w-full text-gray-500 mb-7\",\n                        children: description\n                    }, void 0, false, {\n                        fileName: \"/Users/rarumdj/Documents/NextJs/website-v1/components/solution-accodion/index.jsx\",\n                        lineNumber: 40,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/rarumdj/Documents/NextJs/website-v1/components/solution-accodion/index.jsx\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/rarumdj/Documents/NextJs/website-v1/components/solution-accodion/index.jsx\",\n            lineNumber: 17,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/rarumdj/Documents/NextJs/website-v1/components/solution-accodion/index.jsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SolutionAccodion, \"yTvLOqMYKsWlVeuMb/qCpgqPkz4=\");\n_c = SolutionAccodion;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SolutionAccodion);\nvar _c;\n$RefreshReg$(_c, \"SolutionAccodion\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3NvbHV0aW9uLWFjY29kaW9uL2luZGV4LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFBK0I7QUFDNEI7QUFDSTtBQUNMO0FBRTFELE1BQU1RLG1CQUFtQixTQUFxRDtRQUFwRCxFQUFFQyxTQUFRLEVBQUVDLE9BQU0sRUFBRUMsU0FBUSxFQUFFQyxPQUFNLEVBQUVDLFFBQU8sRUFBRTs7SUFDdkUsTUFBTSxFQUFFQyxNQUFLLEVBQUVDLFlBQVcsRUFBRSxHQUFHTjtJQUMvQixNQUFNTyxZQUFZYiw2Q0FBTUE7SUFDeEIsTUFBTSxDQUFDYyxjQUFjQyxnQkFBZ0IsR0FBR2QsK0NBQVFBO0lBRWhERixnREFBU0EsQ0FBQyxJQUFNO1lBQ0NjO1FBQWhCRSxnQkFBZ0JGLENBQUFBLHFCQUFBQSxVQUFVRyxPQUFPLGNBQWpCSCxnQ0FBQUEsS0FBQUEsSUFBQUEsbUJBQW1CQyxZQUFZO0lBQ2hELEdBQUc7UUFBQ1A7S0FBTztJQUVYLHFCQUNFLDhEQUFDVTtrQkFDQyw0RUFBQ0E7WUFBSUMsV0FBVyxHQUE2QixPQUExQlgsU0FBUyxjQUFjLEVBQUUsRUFBQzs7OEJBQzNDLDhEQUFDVTtvQkFBSUMsV0FBVTtvQkFBT0MsU0FBU1g7OEJBQzdCLDRFQUFDWTt3QkFDQ0YsV0FBVyx5Q0FJVixPQUhDWCxTQUNJLHNEQUNBLGdKQUFnSjt3QkFDbEpjLEdBQUc7OzRCQUVOVjs0QkFBTzs0QkFDUEosdUJBQ0MsOERBQUNWLG1EQUFLQTtnQ0FBQ3lCLEtBQUtsQixvRUFBU0E7Z0NBQUVtQixLQUFLbkIsb0VBQVNBO2dDQUFFYyxXQUFVOzs7OzswREFFakQsOERBQUNyQixtREFBS0E7Z0NBQUN5QixLQUFLbEIsb0VBQVNBO2dDQUFFbUIsS0FBS25CLG9FQUFTQTtnQ0FBRWMsV0FBVTs7Ozs7eUNBQ2xEOzs7Ozs7Ozs7Ozs7OEJBSUwsOERBQUNEO29CQUNDTyxLQUFLWDtvQkFDTFksT0FBT2xCLFNBQVM7d0JBQUVtQixRQUFRWjtvQkFBYSxJQUFJO3dCQUFFWSxRQUFRO29CQUFNLENBQUM7b0JBQzVEUixXQUFVOzhCQUVWLDRFQUFDUzt3QkFBRVQsV0FBVTtrQ0FBd0ROOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSy9FO0dBdkNNUDtLQUFBQTtBQXlDTiwrREFBZUEsZ0JBQWdCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvc29sdXRpb24tYWNjb2Rpb24vaW5kZXguanN4P2JhZjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1pbnVzX2NpcmNsZSwgcGx1c19jaXJjbGUgfSBmcm9tICcuLi8uLi9hc3NldHMvaWNvbnMnO1xuaW1wb3J0IE1vcmVBcnJvdyBmcm9tICcuLi8uLi9hc3NldHMvaWNvbnMvbW9yZS1hcnJvdy5zdmcnO1xuXG5jb25zdCBTb2x1dGlvbkFjY29kaW9uID0gKHsgc29sdXRpb24sIGFjdGl2ZSwgb25Ub2dnbGUsIGxlbmd0aCwgcGVyY2VudCB9KSA9PiB7XG4gIGNvbnN0IHsgdGl0bGUsIGRlc2NyaXB0aW9uIH0gPSBzb2x1dGlvbjtcbiAgY29uc3QgY29udGVudEVsID0gdXNlUmVmKCk7XG4gIGNvbnN0IFtzY3JvbGxIZWlnaHQsIHNldFNjcm9sbEhlaWdodF0gPSB1c2VTdGF0ZSgpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgIHNldFNjcm9sbEhlaWdodChjb250ZW50RWwuY3VycmVudD8uc2Nyb2xsSGVpZ2h0KVxuICB9LCBbYWN0aXZlXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2FjdGl2ZSA/ICdzcGFjZS15LTQnIDogJyd9IGB9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIiBvbkNsaWNrPXtvblRvZ2dsZX0+XG4gICAgICAgICAgPGgxXG4gICAgICAgICAgICBjbGFzc05hbWU9e2BpdGVtcy1jZW50ZXIgZmxleCBteS00IGN1cnNvci1wb2ludGVyICR7XG4gICAgICAgICAgICAgIGFjdGl2ZVxuICAgICAgICAgICAgICAgID8gJyBmb250LXNlbWlib2xkIHRleHQtYWNjZW50LWJyb3duIG1iLTAgbWQ6dGV4dC01eGwnXG4gICAgICAgICAgICAgICAgOiAndGV4dC1ncmF5LTcwMCBmb250LW1lZGl1bSB0ZXh0LTN4bCBncm91cCBob3Zlcjp0ZXh0LWFjY2VudC1icm93biBob3Zlcjpmb250LXNlbWlib2xkIGhvdmVyOm1kOnRleHQtNXhsIHRyYW5zaXRpb24tYWxsIGVhc2UtaW4tb3V0IGR1cmF0aW9uLTMwMCdcbiAgICAgICAgICAgIH1gfSBkdHlcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7dGl0bGV9eycgJ31cbiAgICAgICAgICAgIHthY3RpdmUgPyAoXG4gICAgICAgICAgICAgIDxJbWFnZSBzcmM9e01vcmVBcnJvd30gYWx0PXtNb3JlQXJyb3d9IGNsYXNzTmFtZT1cIm1sLTMgaC03IHctN1wiIC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtNb3JlQXJyb3d9IGFsdD17TW9yZUFycm93fSBjbGFzc05hbWU9XCJtbC0zIGgtNyB3LTcgZ3JvdXAtaG92ZXI6YmxvY2sgaGlkZGVuIFwiIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgey8qIDxNb3JlQXJyb3cgY2xhc3NOYW1lPVwibWwtMyBoLTcgdy03XCIgLz4gKi99XG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICByZWY9e2NvbnRlbnRFbH1cbiAgICAgICAgICBzdHlsZT17YWN0aXZlID8geyBoZWlnaHQ6IHNjcm9sbEhlaWdodCB9IDogeyBoZWlnaHQ6ICcwcHgnIH19XG4gICAgICAgICAgY2xhc3NOYW1lPVwiaC0wIG92ZXJmbG93LWhpZGRlbiB0cmFuc2l0aW9uLWFsbCBlYXNlLWluLW91dCBkdXJhdGlvbi0yMDAgXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxlYWRpbmctcmVsYXhlZCBtZDp3LTEwLzEyIHctZnVsbCB0ZXh0LWdyYXktNTAwIG1iLTdcIj57ZGVzY3JpcHRpb259PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU29sdXRpb25BY2NvZGlvbjtcbiJdLCJuYW1lcyI6WyJJbWFnZSIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJtaW51c19jaXJjbGUiLCJwbHVzX2NpcmNsZSIsIk1vcmVBcnJvdyIsIlNvbHV0aW9uQWNjb2Rpb24iLCJzb2x1dGlvbiIsImFjdGl2ZSIsIm9uVG9nZ2xlIiwibGVuZ3RoIiwicGVyY2VudCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJjb250ZW50RWwiLCJzY3JvbGxIZWlnaHQiLCJzZXRTY3JvbGxIZWlnaHQiLCJjdXJyZW50IiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayIsImgxIiwiZHR5Iiwic3JjIiwiYWx0IiwicmVmIiwic3R5bGUiLCJoZWlnaHQiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/solution-accodion/index.jsx\n"));

/***/ })

});