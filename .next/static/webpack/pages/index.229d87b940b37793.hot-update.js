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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/icons */ \"./assets/icons/index.js\");\n/* harmony import */ var _assets_icons_more_arrow_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/icons/more-arrow.svg */ \"./assets/icons/more-arrow.svg\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst SolutionAccodion = (param)=>{\n    let { solution , active , onToggle , length , index , defaultItem  } = param;\n    var _contentEl_current;\n    _s();\n    const { title , description  } = solution;\n    const contentEl = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"\".concat(active ? \"space-y-4\" : \"\", \" \"),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex\",\n                    onClick: onToggle,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"items-center flex my-4 cursor-pointer \".concat(active ? \" font-semibold text-accent-brown mb-0 md:text-5xl\" : \"text-gray-700 font-medium text-3xl group hover:text-accent-brown hover:font-semibold hover:md:text-5xl transition-all ease-in-out duration-300\"),\n                        children: [\n                            title,\n                            \" \",\n                            active ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                src: _assets_icons_more_arrow_svg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                                alt: _assets_icons_more_arrow_svg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                                className: \"ml-3 h-7 w-7\"\n                            }, void 0, false, {\n                                fileName: \"/Users/rarumdj/Documents/NextJs/website-v1/components/solution-accodion/index.jsx\",\n                                lineNumber: 22,\n                                columnNumber: 15\n                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                src: _assets_icons_more_arrow_svg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                                alt: _assets_icons_more_arrow_svg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                                className: \"ml-3 h-7 w-7 group-hover:block hidden \"\n                            }, void 0, false, {\n                                fileName: \"/Users/rarumdj/Documents/NextJs/website-v1/components/solution-accodion/index.jsx\",\n                                lineNumber: 24,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/rarumdj/Documents/NextJs/website-v1/components/solution-accodion/index.jsx\",\n                        lineNumber: 13,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/rarumdj/Documents/NextJs/website-v1/components/solution-accodion/index.jsx\",\n                    lineNumber: 12,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    ref: contentEl,\n                    style: active ? {\n                        height: contentEl === null || contentEl === void 0 ? void 0 : (_contentEl_current = contentEl.current) === null || _contentEl_current === void 0 ? void 0 : _contentEl_current.scrollHeight\n                    } : {\n                        height: \"0px\"\n                    },\n                    className: \"h-0 overflow-hidden transition-all ease-in-out duration-200 \",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"leading-relaxed md:w-10/12 w-full text-gray-500 mb-7\",\n                        children: description\n                    }, void 0, false, {\n                        fileName: \"/Users/rarumdj/Documents/NextJs/website-v1/components/solution-accodion/index.jsx\",\n                        lineNumber: 34,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/rarumdj/Documents/NextJs/website-v1/components/solution-accodion/index.jsx\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/rarumdj/Documents/NextJs/website-v1/components/solution-accodion/index.jsx\",\n            lineNumber: 11,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/rarumdj/Documents/NextJs/website-v1/components/solution-accodion/index.jsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SolutionAccodion, \"wc/AeAxYNogeBCf02cMqxs+o2rk=\");\n_c = SolutionAccodion;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SolutionAccodion);\nvar _c;\n$RefreshReg$(_c, \"SolutionAccodion\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3NvbHV0aW9uLWFjY29kaW9uL2luZGV4LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFBK0I7QUFDTztBQUN5QjtBQUNMO0FBRTFELE1BQU1NLG1CQUFtQixTQUFnRTtRQUEvRCxFQUFFQyxTQUFRLEVBQUVDLE9BQU0sRUFBRUMsU0FBUSxFQUFFQyxPQUFNLEVBQUVDLE1BQUssRUFBRUMsWUFBVyxFQUFFO1FBeUIvQ0M7O0lBeEJuQyxNQUFNLEVBQUVDLE1BQUssRUFBRUMsWUFBVyxFQUFFLEdBQUdSO0lBQy9CLE1BQU1NLFlBQVlYLDZDQUFNQTtJQUN4QixxQkFDRSw4REFBQ2M7a0JBQ0MsNEVBQUNBO1lBQUlDLFdBQVcsR0FBNkIsT0FBMUJULFNBQVMsY0FBYyxFQUFFLEVBQUM7OzhCQUMzQyw4REFBQ1E7b0JBQUlDLFdBQVU7b0JBQU9DLFNBQVNUOzhCQUM3Qiw0RUFBQ1U7d0JBQ0NGLFdBQVcseUNBSVYsT0FIQ1QsU0FDSSxzREFDQSxnSkFBZ0o7OzRCQUdySk07NEJBQU87NEJBQ1BOLHVCQUNDLDhEQUFDUixtREFBS0E7Z0NBQUNvQixLQUFLZixvRUFBU0E7Z0NBQUVnQixLQUFLaEIsb0VBQVNBO2dDQUFFWSxXQUFVOzs7OzswREFFakQsOERBQUNqQixtREFBS0E7Z0NBQUNvQixLQUFLZixvRUFBU0E7Z0NBQUVnQixLQUFLaEIsb0VBQVNBO2dDQUFFWSxXQUFVOzs7Ozt5Q0FDbEQ7Ozs7Ozs7Ozs7Ozs4QkFJTCw4REFBQ0Q7b0JBQ0NNLEtBQUtUO29CQUNMVSxPQUFPZixTQUFVO3dCQUFFZ0IsUUFBUVgsc0JBQUFBLHVCQUFBQSxLQUFBQSxJQUFBQSxDQUFBQSxxQkFBQUEsVUFBV1ksT0FBTyxjQUFsQlosZ0NBQUFBLEtBQUFBLElBQUFBLG1CQUFvQmEsWUFBRjtvQkFBZSxJQUFJO3dCQUFFRixRQUFRO29CQUFNLENBQUM7b0JBQ2pGUCxXQUFVOzhCQUVWLDRFQUFDVTt3QkFBRVYsV0FBVTtrQ0FBd0RGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSy9FO0dBakNNVDtLQUFBQTtBQW1DTiwrREFBZUEsZ0JBQWdCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvc29sdXRpb24tYWNjb2Rpb24vaW5kZXguanN4P2JhZjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1pbnVzX2NpcmNsZSwgcGx1c19jaXJjbGUgfSBmcm9tICcuLi8uLi9hc3NldHMvaWNvbnMnO1xuaW1wb3J0IE1vcmVBcnJvdyBmcm9tICcuLi8uLi9hc3NldHMvaWNvbnMvbW9yZS1hcnJvdy5zdmcnO1xuXG5jb25zdCBTb2x1dGlvbkFjY29kaW9uID0gKHsgc29sdXRpb24sIGFjdGl2ZSwgb25Ub2dnbGUsIGxlbmd0aCwgaW5kZXgsIGRlZmF1bHRJdGVtIH0pID0+IHtcbiAgY29uc3QgeyB0aXRsZSwgZGVzY3JpcHRpb24gfSA9IHNvbHV0aW9uO1xuICBjb25zdCBjb250ZW50RWwgPSB1c2VSZWYoKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2FjdGl2ZSA/ICdzcGFjZS15LTQnIDogJyd9IGB9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIiBvbkNsaWNrPXtvblRvZ2dsZX0+XG4gICAgICAgICAgPGgxXG4gICAgICAgICAgICBjbGFzc05hbWU9e2BpdGVtcy1jZW50ZXIgZmxleCBteS00IGN1cnNvci1wb2ludGVyICR7XG4gICAgICAgICAgICAgIGFjdGl2ZVxuICAgICAgICAgICAgICAgID8gJyBmb250LXNlbWlib2xkIHRleHQtYWNjZW50LWJyb3duIG1iLTAgbWQ6dGV4dC01eGwnXG4gICAgICAgICAgICAgICAgOiAndGV4dC1ncmF5LTcwMCBmb250LW1lZGl1bSB0ZXh0LTN4bCBncm91cCBob3Zlcjp0ZXh0LWFjY2VudC1icm93biBob3Zlcjpmb250LXNlbWlib2xkIGhvdmVyOm1kOnRleHQtNXhsIHRyYW5zaXRpb24tYWxsIGVhc2UtaW4tb3V0IGR1cmF0aW9uLTMwMCdcbiAgICAgICAgICAgIH1gfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt0aXRsZX17JyAnfVxuICAgICAgICAgICAge2FjdGl2ZSA/IChcbiAgICAgICAgICAgICAgPEltYWdlIHNyYz17TW9yZUFycm93fSBhbHQ9e01vcmVBcnJvd30gY2xhc3NOYW1lPVwibWwtMyBoLTcgdy03XCIgLz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxJbWFnZSBzcmM9e01vcmVBcnJvd30gYWx0PXtNb3JlQXJyb3d9IGNsYXNzTmFtZT1cIm1sLTMgaC03IHctNyBncm91cC1ob3ZlcjpibG9jayBoaWRkZW4gXCIgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7LyogPE1vcmVBcnJvdyBjbGFzc05hbWU9XCJtbC0zIGgtNyB3LTdcIiAvPiAqL31cbiAgICAgICAgICA8L2gxPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHJlZj17Y29udGVudEVsfVxuICAgICAgICAgIHN0eWxlPXthY3RpdmUgID8geyBoZWlnaHQ6IGNvbnRlbnRFbD8uY3VycmVudD8uc2Nyb2xsSGVpZ2h0IH0gOiB7IGhlaWdodDogJzBweCcgfX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJoLTAgb3ZlcmZsb3ctaGlkZGVuIHRyYW5zaXRpb24tYWxsIGVhc2UtaW4tb3V0IGR1cmF0aW9uLTIwMCBcIlxuICAgICAgICA+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwibGVhZGluZy1yZWxheGVkIG1kOnctMTAvMTIgdy1mdWxsIHRleHQtZ3JheS01MDAgbWItN1wiPntkZXNjcmlwdGlvbn08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTb2x1dGlvbkFjY29kaW9uO1xuIl0sIm5hbWVzIjpbIkltYWdlIiwiUmVhY3QiLCJ1c2VSZWYiLCJtaW51c19jaXJjbGUiLCJwbHVzX2NpcmNsZSIsIk1vcmVBcnJvdyIsIlNvbHV0aW9uQWNjb2Rpb24iLCJzb2x1dGlvbiIsImFjdGl2ZSIsIm9uVG9nZ2xlIiwibGVuZ3RoIiwiaW5kZXgiLCJkZWZhdWx0SXRlbSIsImNvbnRlbnRFbCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiaDEiLCJzcmMiLCJhbHQiLCJyZWYiLCJzdHlsZSIsImhlaWdodCIsImN1cnJlbnQiLCJzY3JvbGxIZWlnaHQiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/solution-accodion/index.jsx\n"));

/***/ })

});