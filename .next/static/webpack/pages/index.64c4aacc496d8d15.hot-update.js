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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/icons */ \"./assets/icons/index.js\");\n/* harmony import */ var _assets_icons_more_arrow_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/icons/more-arrow.svg */ \"./assets/icons/more-arrow.svg\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst opacity = {\n    \"0\": \"opacity-0\t\",\n    \"5\": opacity - 5,\n    \"10\": opacity - 10,\n    \"20\": opacity - 20,\n    \"25\": opacity - 25,\n    \"30\": opacity - 30,\n    \"40\": opacity - 40,\n    \"50\": opacity - 50,\n    \"60\": opacity - 60,\n    \"70\": opacity - 70,\n    \"75\": opacity - 75,\n    \"80\": opacity - 80,\n    \"90\": opacity - 90,\n    \"95\": opacity - 95,\n    \"100\": opacity - 100\n};\nconst SolutionAccodion = (param)=>{\n    let { solution , active , onToggle , length , percent  } = param;\n    _s();\n    const { title , description  } = solution;\n    const contentEl = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    const [scrollHeight, setScrollHeight] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const percents = String(percent) + \"%\";\n    const yh = \"opacity-[\".concat(percents, \"]\");\n    console.log(yh);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        var _contentEl_current;\n        setScrollHeight((_contentEl_current = contentEl.current) === null || _contentEl_current === void 0 ? void 0 : _contentEl_current.scrollHeight);\n    }, [\n        active\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"\".concat(active ? \"space-y-4\" : \"\", \" \"),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex\",\n                    onClick: onToggle,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"items-center flex my-4 cursor-pointer \".concat(active ? \" font-semibold text-accent-brown mb-0 md:text-5xl\" : \"text-gray-700 font-medium text-3xl group hover:text-accent-brown hover:font-semibold hover:md:text-5xl transition-all ease-in-out duration-300 opacity-5 \"),\n                        children: [\n                            title,\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                src: _assets_icons_more_arrow_svg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                                alt: _assets_icons_more_arrow_svg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                                className: \"ml-3 h-7 w-7 \".concat(active ? \"block\" : \"group-hover:block hidden\")\n                            }, void 0, false, {\n                                fileName: \"/Users/rarumdj/Documents/NextJs/website-v1/components/solution-accodion/index.jsx\",\n                                lineNumber: 47,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/rarumdj/Documents/NextJs/website-v1/components/solution-accodion/index.jsx\",\n                        lineNumber: 37,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/rarumdj/Documents/NextJs/website-v1/components/solution-accodion/index.jsx\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    ref: contentEl,\n                    style: active ? {\n                        height: scrollHeight\n                    } : {\n                        height: \"0px\"\n                    },\n                    className: \"h-0 overflow-hidden transition-all ease-in-out duration-200 \",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"leading-relaxed md:w-10/12 w-full text-gray-500 mb-7\",\n                        children: description\n                    }, void 0, false, {\n                        fileName: \"/Users/rarumdj/Documents/NextJs/website-v1/components/solution-accodion/index.jsx\",\n                        lineNumber: 61,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/rarumdj/Documents/NextJs/website-v1/components/solution-accodion/index.jsx\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/rarumdj/Documents/NextJs/website-v1/components/solution-accodion/index.jsx\",\n            lineNumber: 35,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/rarumdj/Documents/NextJs/website-v1/components/solution-accodion/index.jsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SolutionAccodion, \"yTvLOqMYKsWlVeuMb/qCpgqPkz4=\");\n_c = SolutionAccodion;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SolutionAccodion);\nvar _c;\n$RefreshReg$(_c, \"SolutionAccodion\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3NvbHV0aW9uLWFjY29kaW9uL2luZGV4LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFBK0I7QUFDNEI7QUFDSTtBQUNMO0FBQzFELE1BQU1RLFVBQVU7SUFDZixLQUFLO0lBQ0wsS0FBS0EsVUFBUTtJQUNiLE1BQU1BLFVBQVE7SUFDZCxNQUFNQSxVQUFRO0lBQ2QsTUFBTUEsVUFBUTtJQUNkLE1BQU1BLFVBQVE7SUFDYixNQUFNQSxVQUFRO0lBQ2QsTUFBTUEsVUFBUTtJQUNkLE1BQU1BLFVBQVE7SUFDZCxNQUFNQSxVQUFRO0lBQ2QsTUFBTUEsVUFBUTtJQUNkLE1BQU1BLFVBQVE7SUFDZCxNQUFNQSxVQUFRO0lBQ2QsTUFBTUEsVUFBUTtJQUNkLE9BQU9BLFVBQVE7QUFDakI7QUFDQSxNQUFNQyxtQkFBbUIsU0FBcUQ7UUFBcEQsRUFBRUMsU0FBUSxFQUFFQyxPQUFNLEVBQUVDLFNBQVEsRUFBRUMsT0FBTSxFQUFFQyxRQUFPLEVBQUU7O0lBQ3ZFLE1BQU0sRUFBRUMsTUFBSyxFQUFFQyxZQUFXLEVBQUUsR0FBR047SUFDL0IsTUFBTU8sWUFBWWQsNkNBQU1BO0lBQ3hCLE1BQU0sQ0FBQ2UsY0FBY0MsZ0JBQWdCLEdBQUdmLCtDQUFRQTtJQUNoRCxNQUFNZ0IsV0FBV0MsT0FBT1AsV0FBVztJQUNuQyxNQUFNUSxLQUFLLFlBQXFCLE9BQVRGLFVBQVM7SUFDaENHLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFDWnBCLGdEQUFTQSxDQUFDLElBQU07WUFDRWU7UUFBaEJFLGdCQUFnQkYsQ0FBQUEscUJBQUFBLFVBQVVRLE9BQU8sY0FBakJSLGdDQUFBQSxLQUFBQSxJQUFBQSxtQkFBbUJDLFlBQVk7SUFDakQsR0FBRztRQUFDUDtLQUFPO0lBRVgscUJBQ0UsOERBQUNlO2tCQUNDLDRFQUFDQTtZQUFJQyxXQUFXLEdBQTZCLE9BQTFCaEIsU0FBUyxjQUFjLEVBQUUsRUFBQzs7OEJBQzNDLDhEQUFDZTtvQkFBSUMsV0FBVTtvQkFBT0MsU0FBU2hCOzhCQUM3Qiw0RUFBQ2lCO3dCQUNDRixXQUFXLHlDQUlWLE9BSENoQixTQUNJLHNEQUNDLDJKQUEwSjs7NEJBSWhLSTswQ0FFRCw4REFBQ2YsbURBQUtBO2dDQUNKOEIsS0FBS3ZCLG9FQUFTQTtnQ0FDZHdCLEtBQUt4QixvRUFBU0E7Z0NBQ2RvQixXQUFXLGdCQUE4RCxPQUE5Q2hCLFNBQVMsVUFBVSwwQkFBMEI7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQU05RSw4REFBQ2U7b0JBQ0NNLEtBQUtmO29CQUNMZ0IsT0FBT3RCLFNBQVM7d0JBQUV1QixRQUFRaEI7b0JBQWEsSUFBSTt3QkFBRWdCLFFBQVE7b0JBQU0sQ0FBQztvQkFDNURQLFdBQVU7OEJBRVYsNEVBQUNRO3dCQUFFUixXQUFVO2tDQUF3RFg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLL0U7R0E1Q01QO0tBQUFBO0FBOENOLCtEQUFlQSxnQkFBZ0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zb2x1dGlvbi1hY2NvZGlvbi9pbmRleC5qc3g/YmFmMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbWludXNfY2lyY2xlLCBwbHVzX2NpcmNsZSB9IGZyb20gJy4uLy4uL2Fzc2V0cy9pY29ucyc7XG5pbXBvcnQgTW9yZUFycm93IGZyb20gJy4uLy4uL2Fzc2V0cy9pY29ucy9tb3JlLWFycm93LnN2Zyc7XG5jb25zdCBvcGFjaXR5ID0ge1xuICcwJzogJ29wYWNpdHktMFx0JyxcbiAnNSc6IG9wYWNpdHktNVx0LFxuICcxMCc6IG9wYWNpdHktMTBcdCxcbiAnMjAnOiBvcGFjaXR5LTIwXHQsXG4gJzI1Jzogb3BhY2l0eS0yNSxcbiAnMzAnOiBvcGFjaXR5LTMwXHQsXG4gICc0MCc6IG9wYWNpdHktNDAsXHRcbiAgJzUwJzogb3BhY2l0eS01MCxcbiAgJzYwJzogb3BhY2l0eS02MCxcbiAgJzcwJzogb3BhY2l0eS03MCAsXG4gICc3NSc6IG9wYWNpdHktNzUsXG4gICc4MCc6IG9wYWNpdHktODAsXG4gICc5MCc6IG9wYWNpdHktOTAsXG4gICc5NSc6IG9wYWNpdHktOTUsXG4gICcxMDAnOiBvcGFjaXR5LTEwMFxufVxuY29uc3QgU29sdXRpb25BY2NvZGlvbiA9ICh7IHNvbHV0aW9uLCBhY3RpdmUsIG9uVG9nZ2xlLCBsZW5ndGgsIHBlcmNlbnQgfSkgPT4ge1xuICBjb25zdCB7IHRpdGxlLCBkZXNjcmlwdGlvbiB9ID0gc29sdXRpb247XG4gIGNvbnN0IGNvbnRlbnRFbCA9IHVzZVJlZigpO1xuICBjb25zdCBbc2Nyb2xsSGVpZ2h0LCBzZXRTY3JvbGxIZWlnaHRdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgcGVyY2VudHMgPSBTdHJpbmcocGVyY2VudCkgKyAnJSc7XG4gIGNvbnN0IHloID0gYG9wYWNpdHktWyR7cGVyY2VudHN9XWBcbiAgY29uc29sZS5sb2coeWgpXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0U2Nyb2xsSGVpZ2h0KGNvbnRlbnRFbC5jdXJyZW50Py5zY3JvbGxIZWlnaHQpO1xuICB9LCBbYWN0aXZlXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2FjdGl2ZSA/ICdzcGFjZS15LTQnIDogJyd9IGB9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIiBvbkNsaWNrPXtvblRvZ2dsZX0+XG4gICAgICAgICAgPGgxXG4gICAgICAgICAgICBjbGFzc05hbWU9e2BpdGVtcy1jZW50ZXIgZmxleCBteS00IGN1cnNvci1wb2ludGVyICR7XG4gICAgICAgICAgICAgIGFjdGl2ZVxuICAgICAgICAgICAgICAgID8gJyBmb250LXNlbWlib2xkIHRleHQtYWNjZW50LWJyb3duIG1iLTAgbWQ6dGV4dC01eGwnXG4gICAgICAgICAgICAgICAgOiBgdGV4dC1ncmF5LTcwMCBmb250LW1lZGl1bSB0ZXh0LTN4bCBncm91cCBob3Zlcjp0ZXh0LWFjY2VudC1icm93biBob3Zlcjpmb250LXNlbWlib2xkIGhvdmVyOm1kOnRleHQtNXhsIHRyYW5zaXRpb24tYWxsIGVhc2UtaW4tb3V0IGR1cmF0aW9uLTMwMCBvcGFjaXR5LTUgYFxuICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAvLyBzdHlsZT17eyBvcGFjaXR5OiBwZXJjZW50IH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3RpdGxlfVxuXG4gICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgc3JjPXtNb3JlQXJyb3d9XG4gICAgICAgICAgICAgIGFsdD17TW9yZUFycm93fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BtbC0zIGgtNyB3LTcgJHthY3RpdmUgPyAnYmxvY2snIDogJ2dyb3VwLWhvdmVyOmJsb2NrIGhpZGRlbid9YH1cbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIHsvKiA8TW9yZUFycm93IGNsYXNzTmFtZT1cIm1sLTMgaC03IHctN1wiIC8+ICovfVxuICAgICAgICAgIDwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgcmVmPXtjb250ZW50RWx9XG4gICAgICAgICAgc3R5bGU9e2FjdGl2ZSA/IHsgaGVpZ2h0OiBzY3JvbGxIZWlnaHQgfSA6IHsgaGVpZ2h0OiAnMHB4JyB9fVxuICAgICAgICAgIGNsYXNzTmFtZT1cImgtMCBvdmVyZmxvdy1oaWRkZW4gdHJhbnNpdGlvbi1hbGwgZWFzZS1pbi1vdXQgZHVyYXRpb24tMjAwIFwiXG4gICAgICAgID5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsZWFkaW5nLXJlbGF4ZWQgbWQ6dy0xMC8xMiB3LWZ1bGwgdGV4dC1ncmF5LTUwMCBtYi03XCI+e2Rlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNvbHV0aW9uQWNjb2Rpb247XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwibWludXNfY2lyY2xlIiwicGx1c19jaXJjbGUiLCJNb3JlQXJyb3ciLCJvcGFjaXR5IiwiU29sdXRpb25BY2NvZGlvbiIsInNvbHV0aW9uIiwiYWN0aXZlIiwib25Ub2dnbGUiLCJsZW5ndGgiLCJwZXJjZW50IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImNvbnRlbnRFbCIsInNjcm9sbEhlaWdodCIsInNldFNjcm9sbEhlaWdodCIsInBlcmNlbnRzIiwiU3RyaW5nIiwieWgiLCJjb25zb2xlIiwibG9nIiwiY3VycmVudCIsImRpdiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJoMSIsInNyYyIsImFsdCIsInJlZiIsInN0eWxlIiwiaGVpZ2h0IiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/solution-accodion/index.jsx\n"));

/***/ })

});