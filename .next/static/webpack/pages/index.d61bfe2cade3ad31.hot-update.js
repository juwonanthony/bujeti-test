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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/icons */ \"./assets/icons/index.js\");\n/* harmony import */ var _assets_icons_more_arrow_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/icons/more-arrow.svg */ \"./assets/icons/more-arrow.svg\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst SolutionAccodion = (param)=>{\n    let { solution , active , onToggle , length , index  } = param;\n    _s();\n    const { title , description  } = solution;\n    const contentEl = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"\".concat(active ? \"space-y-4\" : \"\", \" \"),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex\",\n                    onClick: onToggle,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"items-center flex my-4  \".concat(active ? \" font-semibold text-accent-brown mb-0 md:text-5xl\" : \"text-gray-700 font-medium text-3xl\"),\n                        children: [\n                            title,\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                src: _assets_icons_more_arrow_svg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                                alt: _assets_icons_more_arrow_svg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                                className: \"ml-3 h-7 w-7\"\n                            }, void 0, false, {\n                                fileName: \"/Users/rarumdj/Documents/NextJs/website-v1/components/solution-accodion/index.jsx\",\n                                lineNumber: 27,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/rarumdj/Documents/NextJs/website-v1/components/solution-accodion/index.jsx\",\n                        lineNumber: 22,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/rarumdj/Documents/NextJs/website-v1/components/solution-accodion/index.jsx\",\n                    lineNumber: 12,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    ref: contentEl,\n                    style: active ? {\n                        height: contentEl.current.scrollHeight\n                    } : {\n                        height: \"0px\"\n                    },\n                    className: \"h-0 overflow-hidden transition-all ease-in-out duration-200 \",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"leading-relaxed md:w-10/12 w-full text-gray-500 mb-7\",\n                        children: description\n                    }, void 0, false, {\n                        fileName: \"/Users/rarumdj/Documents/NextJs/website-v1/components/solution-accodion/index.jsx\",\n                        lineNumber: 36,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/rarumdj/Documents/NextJs/website-v1/components/solution-accodion/index.jsx\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/rarumdj/Documents/NextJs/website-v1/components/solution-accodion/index.jsx\",\n            lineNumber: 11,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/rarumdj/Documents/NextJs/website-v1/components/solution-accodion/index.jsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SolutionAccodion, \"wc/AeAxYNogeBCf02cMqxs+o2rk=\");\n_c = SolutionAccodion;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SolutionAccodion);\nvar _c;\n$RefreshReg$(_c, \"SolutionAccodion\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3NvbHV0aW9uLWFjY29kaW9uL2luZGV4LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFBK0I7QUFDTztBQUN5QjtBQUNMO0FBRTFELE1BQU1NLG1CQUFtQixTQUFtRDtRQUFsRCxFQUFFQyxTQUFRLEVBQUVDLE9BQU0sRUFBRUMsU0FBUSxFQUFFQyxPQUFNLEVBQUVDLE1BQUssRUFBRTs7SUFDckUsTUFBTSxFQUFFQyxNQUFLLEVBQUVDLFlBQVcsRUFBRSxHQUFHTjtJQUMvQixNQUFNTyxZQUFZWiw2Q0FBTUE7SUFDeEIscUJBQ0UsOERBQUNhO2tCQUNDLDRFQUFDQTtZQUFJQyxXQUFXLEdBQTZCLE9BQTFCUixTQUFTLGNBQWMsRUFBRSxFQUFDOzs4QkFDM0MsOERBQUNPO29CQUFJQyxXQUFVO29CQUFPQyxTQUFTUjs4QkFVN0IsNEVBQUNTO3dCQUNDRixXQUFXLDJCQUVWLE9BRENSLFNBQVMsc0RBQXNELG9DQUFvQzs7NEJBR3BHSTs0QkFBTTswQ0FBQyw4REFBQ1osbURBQUtBO2dDQUFDbUIsS0FBS2Qsb0VBQVNBO2dDQUFFZSxLQUFLZixvRUFBU0E7Z0NBQUVXLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUk3RCw4REFBQ0Q7b0JBQ0NNLEtBQUtQO29CQUNMUSxPQUFPZCxTQUFTO3dCQUFFZSxRQUFRVCxVQUFVVSxPQUFPLENBQUNDLFlBQVk7b0JBQUMsSUFBSTt3QkFBRUYsUUFBUTtvQkFBTSxDQUFDO29CQUM5RVAsV0FBVTs4QkFFViw0RUFBQ1U7d0JBQUVWLFdBQVU7a0NBQXdESDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUsvRTtHQW5DTVA7S0FBQUE7QUFxQ04sK0RBQWVBLGdCQUFnQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3NvbHV0aW9uLWFjY29kaW9uL2luZGV4LmpzeD9iYWYyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtaW51c19jaXJjbGUsIHBsdXNfY2lyY2xlIH0gZnJvbSAnLi4vLi4vYXNzZXRzL2ljb25zJztcbmltcG9ydCBNb3JlQXJyb3cgZnJvbSAnLi4vLi4vYXNzZXRzL2ljb25zL21vcmUtYXJyb3cuc3ZnJztcblxuY29uc3QgU29sdXRpb25BY2NvZGlvbiA9ICh7IHNvbHV0aW9uLCBhY3RpdmUsIG9uVG9nZ2xlLCBsZW5ndGgsIGluZGV4IH0pID0+IHtcbiAgY29uc3QgeyB0aXRsZSwgZGVzY3JpcHRpb24gfSA9IHNvbHV0aW9uO1xuICBjb25zdCBjb250ZW50RWwgPSB1c2VSZWYoKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2FjdGl2ZSA/ICdzcGFjZS15LTQnIDogJyd9IGB9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIiBvbkNsaWNrPXtvblRvZ2dsZX0+XG4gICAgICAgICAgey8qIDxoNSBjbGFzc05hbWU9e2BtZDp0ZXh0LTN4bCB0ZXh0LWxnICR7YWN0aXZlID8gJyBmb250LXNlbWlib2xkIHRleHQtYWNjZW50LW9yYW5nZScgOiAndGV4dC1bI0E5QTI5RF0gZm9udC1tZWRpdW0nfWB9Pnt0aXRsZX08L2g1PiAqL31cbiAgICAgICAgICB7LyogPHNwYW4gY2xhc3NOYW1lPVwibWwtYXV0b1wiPlxuICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICBzcmM9e2FjdGl2ZSA/IG1pbnVzX2NpcmNsZSA6IHBsdXNfY2lyY2xlfVxuICAgICAgICAgICAgICAgIGFsdD1cIkltYWdlIGljb25cIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRyYW5zaXRpb24tYWxsIGVhc2UtaW4tb3V0IGR1cmF0aW9uLTMwMFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L3NwYW4+ICovfVxuXG4gICAgICAgICAgPGgxXG4gICAgICAgICAgICBjbGFzc05hbWU9e2BpdGVtcy1jZW50ZXIgZmxleCBteS00ICAke1xuICAgICAgICAgICAgICBhY3RpdmUgPyAnIGZvbnQtc2VtaWJvbGQgdGV4dC1hY2NlbnQtYnJvd24gbWItMCBtZDp0ZXh0LTV4bCcgOiAndGV4dC1ncmF5LTcwMCBmb250LW1lZGl1bSB0ZXh0LTN4bCdcbiAgICAgICAgICAgIH1gfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt0aXRsZX0gPEltYWdlIHNyYz17TW9yZUFycm93fSBhbHQ9e01vcmVBcnJvd30gY2xhc3NOYW1lPVwibWwtMyBoLTcgdy03XCIgLz5cbiAgICAgICAgICAgIHsvKiA8TW9yZUFycm93IGNsYXNzTmFtZT1cIm1sLTMgaC03IHctN1wiIC8+ICovfVxuICAgICAgICAgIDwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgcmVmPXtjb250ZW50RWx9XG4gICAgICAgICAgc3R5bGU9e2FjdGl2ZSA/IHsgaGVpZ2h0OiBjb250ZW50RWwuY3VycmVudC5zY3JvbGxIZWlnaHQgfSA6IHsgaGVpZ2h0OiAnMHB4JyB9fVxuICAgICAgICAgIGNsYXNzTmFtZT1cImgtMCBvdmVyZmxvdy1oaWRkZW4gdHJhbnNpdGlvbi1hbGwgZWFzZS1pbi1vdXQgZHVyYXRpb24tMjAwIFwiXG4gICAgICAgID5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsZWFkaW5nLXJlbGF4ZWQgbWQ6dy0xMC8xMiB3LWZ1bGwgdGV4dC1ncmF5LTUwMCBtYi03XCI+e2Rlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNvbHV0aW9uQWNjb2Rpb247XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJSZWFjdCIsInVzZVJlZiIsIm1pbnVzX2NpcmNsZSIsInBsdXNfY2lyY2xlIiwiTW9yZUFycm93IiwiU29sdXRpb25BY2NvZGlvbiIsInNvbHV0aW9uIiwiYWN0aXZlIiwib25Ub2dnbGUiLCJsZW5ndGgiLCJpbmRleCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJjb250ZW50RWwiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiaDEiLCJzcmMiLCJhbHQiLCJyZWYiLCJzdHlsZSIsImhlaWdodCIsImN1cnJlbnQiLCJzY3JvbGxIZWlnaHQiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/solution-accodion/index.jsx\n"));

/***/ })

});