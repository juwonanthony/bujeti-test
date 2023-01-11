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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/icons */ \"./assets/icons/index.js\");\n/* harmony import */ var _assets_icons_more_arrow_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/icons/more-arrow.svg */ \"./assets/icons/more-arrow.svg\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst SolutionAccodion = (param)=>{\n    let { solution , active , onToggle , length  } = param;\n    _s();\n    const { title , description  } = solution;\n    const contentEl = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    const [scrollHeight, setScrollHeight] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const percent = \"10%\";\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        var _contentEl_current;\n        setScrollHeight((_contentEl_current = contentEl.current) === null || _contentEl_current === void 0 ? void 0 : _contentEl_current.scrollHeight);\n    }, [\n        active\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"\".concat(active ? \"space-y-4\" : \"\", \" \"),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex\",\n                    onClick: onToggle,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"items-center flex my-4 cursor-pointer \".concat(active ? \" font-semibold text-accent-brown mb-0 md:text-5xl\" : \"text-gray-700 font-medium text-3xl group hover:text-accent-brown hover:font-semibold hover:md:text-5xl transition-all ease-in-out duration-300 opacity-['\".concat(percent, \"'%]\")),\n                        children: [\n                            title,\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                src: _assets_icons_more_arrow_svg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                                alt: _assets_icons_more_arrow_svg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                                className: \"ml-3 h-7 w-7 \".concat(active ? \"block\" : \"group-hover:block hidden\")\n                            }, void 0, false, {\n                                fileName: \"/Users/rarumdj/Documents/NextJs/website-v1/components/solution-accodion/index.jsx\",\n                                lineNumber: 29,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/rarumdj/Documents/NextJs/website-v1/components/solution-accodion/index.jsx\",\n                        lineNumber: 19,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/rarumdj/Documents/NextJs/website-v1/components/solution-accodion/index.jsx\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    ref: contentEl,\n                    style: active ? {\n                        height: scrollHeight\n                    } : {\n                        height: \"0px\"\n                    },\n                    className: \"h-0 overflow-hidden transition-all ease-in-out duration-200 \",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"leading-relaxed md:w-10/12 w-full text-gray-500 mb-7\",\n                        children: description\n                    }, void 0, false, {\n                        fileName: \"/Users/rarumdj/Documents/NextJs/website-v1/components/solution-accodion/index.jsx\",\n                        lineNumber: 43,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/rarumdj/Documents/NextJs/website-v1/components/solution-accodion/index.jsx\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/rarumdj/Documents/NextJs/website-v1/components/solution-accodion/index.jsx\",\n            lineNumber: 17,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/rarumdj/Documents/NextJs/website-v1/components/solution-accodion/index.jsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SolutionAccodion, \"yTvLOqMYKsWlVeuMb/qCpgqPkz4=\");\n_c = SolutionAccodion;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SolutionAccodion);\nvar _c;\n$RefreshReg$(_c, \"SolutionAccodion\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3NvbHV0aW9uLWFjY29kaW9uL2luZGV4LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFBK0I7QUFDNEI7QUFDSTtBQUNMO0FBRTFELE1BQU1RLG1CQUFtQixTQUE0QztRQUEzQyxFQUFFQyxTQUFRLEVBQUVDLE9BQU0sRUFBRUMsU0FBUSxFQUFFQyxPQUFNLEVBQUU7O0lBQzlELE1BQU0sRUFBRUMsTUFBSyxFQUFFQyxZQUFXLEVBQUUsR0FBR0w7SUFDL0IsTUFBTU0sWUFBWVosNkNBQU1BO0lBQ3hCLE1BQU0sQ0FBQ2EsY0FBY0MsZ0JBQWdCLEdBQUdiLCtDQUFRQTtJQUNoRCxNQUFNYyxVQUFVO0lBQ2hCaEIsZ0RBQVNBLENBQUMsSUFBTTtZQUNFYTtRQUFoQkUsZ0JBQWdCRixDQUFBQSxxQkFBQUEsVUFBVUksT0FBTyxjQUFqQkosZ0NBQUFBLEtBQUFBLElBQUFBLG1CQUFtQkMsWUFBWTtJQUNqRCxHQUFHO1FBQUNOO0tBQU87SUFFWCxxQkFDRSw4REFBQ1U7a0JBQ0MsNEVBQUNBO1lBQUlDLFdBQVcsR0FBNkIsT0FBMUJYLFNBQVMsY0FBYyxFQUFFLEVBQUM7OzhCQUMzQyw4REFBQ1U7b0JBQUlDLFdBQVU7b0JBQU9DLFNBQVNYOzhCQUM3Qiw0RUFBQ1k7d0JBQ0NGLFdBQVcseUNBSVYsT0FIQ1gsU0FDSSxzREFDQSw0SkFBb0ssT0FBUlEsU0FBUSxNQUFJOzs0QkFJN0tMOzBDQUVELDhEQUFDYixtREFBS0E7Z0NBQ0p3QixLQUFLakIsb0VBQVNBO2dDQUNka0IsS0FBS2xCLG9FQUFTQTtnQ0FDZGMsV0FBVyxnQkFBOEQsT0FBOUNYLFNBQVMsVUFBVSwwQkFBMEI7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQU05RSw4REFBQ1U7b0JBQ0NNLEtBQUtYO29CQUNMWSxPQUFPakIsU0FBUzt3QkFBRWtCLFFBQVFaO29CQUFhLElBQUk7d0JBQUVZLFFBQVE7b0JBQU0sQ0FBQztvQkFDNURQLFdBQVU7OEJBRVYsNEVBQUNRO3dCQUFFUixXQUFVO2tDQUF3RFA7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLL0U7R0ExQ01OO0tBQUFBO0FBNENOLCtEQUFlQSxnQkFBZ0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zb2x1dGlvbi1hY2NvZGlvbi9pbmRleC5qc3g/YmFmMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbWludXNfY2lyY2xlLCBwbHVzX2NpcmNsZSB9IGZyb20gJy4uLy4uL2Fzc2V0cy9pY29ucyc7XG5pbXBvcnQgTW9yZUFycm93IGZyb20gJy4uLy4uL2Fzc2V0cy9pY29ucy9tb3JlLWFycm93LnN2Zyc7XG5cbmNvbnN0IFNvbHV0aW9uQWNjb2Rpb24gPSAoeyBzb2x1dGlvbiwgYWN0aXZlLCBvblRvZ2dsZSwgbGVuZ3RoIH0pID0+IHtcbiAgY29uc3QgeyB0aXRsZSwgZGVzY3JpcHRpb24gfSA9IHNvbHV0aW9uO1xuICBjb25zdCBjb250ZW50RWwgPSB1c2VSZWYoKTtcbiAgY29uc3QgW3Njcm9sbEhlaWdodCwgc2V0U2Nyb2xsSGVpZ2h0XSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IHBlcmNlbnQgPSAnMTAlJztcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRTY3JvbGxIZWlnaHQoY29udGVudEVsLmN1cnJlbnQ/LnNjcm9sbEhlaWdodCk7XG4gIH0sIFthY3RpdmVdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YWN0aXZlID8gJ3NwYWNlLXktNCcgOiAnJ30gYH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiIG9uQ2xpY2s9e29uVG9nZ2xlfT5cbiAgICAgICAgICA8aDFcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGl0ZW1zLWNlbnRlciBmbGV4IG15LTQgY3Vyc29yLXBvaW50ZXIgJHtcbiAgICAgICAgICAgICAgYWN0aXZlXG4gICAgICAgICAgICAgICAgPyAnIGZvbnQtc2VtaWJvbGQgdGV4dC1hY2NlbnQtYnJvd24gbWItMCBtZDp0ZXh0LTV4bCdcbiAgICAgICAgICAgICAgICA6IGB0ZXh0LWdyYXktNzAwIGZvbnQtbWVkaXVtIHRleHQtM3hsIGdyb3VwIGhvdmVyOnRleHQtYWNjZW50LWJyb3duIGhvdmVyOmZvbnQtc2VtaWJvbGQgaG92ZXI6bWQ6dGV4dC01eGwgdHJhbnNpdGlvbi1hbGwgZWFzZS1pbi1vdXQgZHVyYXRpb24tMzAwIG9wYWNpdHktWycke3BlcmNlbnR9JyVdYFxuICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAvLyBzdHlsZT17eyBvcGFjaXR5OiBwZXJjZW50IH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3RpdGxlfVxuXG4gICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgc3JjPXtNb3JlQXJyb3d9XG4gICAgICAgICAgICAgIGFsdD17TW9yZUFycm93fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BtbC0zIGgtNyB3LTcgJHthY3RpdmUgPyAnYmxvY2snIDogJ2dyb3VwLWhvdmVyOmJsb2NrIGhpZGRlbid9YH1cbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIHsvKiA8TW9yZUFycm93IGNsYXNzTmFtZT1cIm1sLTMgaC03IHctN1wiIC8+ICovfVxuICAgICAgICAgIDwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgcmVmPXtjb250ZW50RWx9XG4gICAgICAgICAgc3R5bGU9e2FjdGl2ZSA/IHsgaGVpZ2h0OiBzY3JvbGxIZWlnaHQgfSA6IHsgaGVpZ2h0OiAnMHB4JyB9fVxuICAgICAgICAgIGNsYXNzTmFtZT1cImgtMCBvdmVyZmxvdy1oaWRkZW4gdHJhbnNpdGlvbi1hbGwgZWFzZS1pbi1vdXQgZHVyYXRpb24tMjAwIFwiXG4gICAgICAgID5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsZWFkaW5nLXJlbGF4ZWQgbWQ6dy0xMC8xMiB3LWZ1bGwgdGV4dC1ncmF5LTUwMCBtYi03XCI+e2Rlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNvbHV0aW9uQWNjb2Rpb247XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwibWludXNfY2lyY2xlIiwicGx1c19jaXJjbGUiLCJNb3JlQXJyb3ciLCJTb2x1dGlvbkFjY29kaW9uIiwic29sdXRpb24iLCJhY3RpdmUiLCJvblRvZ2dsZSIsImxlbmd0aCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJjb250ZW50RWwiLCJzY3JvbGxIZWlnaHQiLCJzZXRTY3JvbGxIZWlnaHQiLCJwZXJjZW50IiwiY3VycmVudCIsImRpdiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJoMSIsInNyYyIsImFsdCIsInJlZiIsInN0eWxlIiwiaGVpZ2h0IiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/solution-accodion/index.jsx\n"));

/***/ })

});