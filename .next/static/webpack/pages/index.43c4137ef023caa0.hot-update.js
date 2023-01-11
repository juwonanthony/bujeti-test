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

/***/ "./containers/home/industry.jsx":
/*!**************************************!*\
  !*** ./containers/home/industry.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/image */ \"./assets/image/index.js\");\n/* harmony import */ var _assets_icons_more_arrow_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/icons/more-arrow.svg */ \"./assets/icons/more-arrow.svg\");\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components */ \"./components/index.js\");\n/* harmony import */ var _assets_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/icons */ \"./assets/icons/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst theIndustry = [\n    {\n        title: \"Startups\",\n        description: \" Create a plan that works for your unique needs and goals with our easy-to-use budgeting structure.\",\n        image: _assets_image__WEBPACK_IMPORTED_MODULE_2__.usecase\n    },\n    {\n        title: \"Financial Services\",\n        description: \" Create a plan that works for your unique needs and goals with our easy-to-use budgeting structure.\",\n        image: _assets_image__WEBPACK_IMPORTED_MODULE_2__.usecase\n    },\n    {\n        title: \"Travel & Hospitality\",\n        description: \"Create a plan that works for your unique needs and goals with our easy-to-use budgeting structure.\",\n        image: _assets_image__WEBPACK_IMPORTED_MODULE_2__.usecase\n    },\n    {\n        title: \"Technology\",\n        description: \" Create a plan that works for your unique needs and goals with our easy-to-use budgeting structure.\",\n        image: _assets_image__WEBPACK_IMPORTED_MODULE_2__.usecase\n    },\n    {\n        title: \"Healthcare\",\n        description: \" Create a plan that works for your unique needs and goals with our easy-to-use budgeting structure.\",\n        image: _assets_image__WEBPACK_IMPORTED_MODULE_2__.usecase\n    },\n    {\n        title: \"Marketing\",\n        description: \" Create a plan that works for your unique needs and goals with our easy-to-use budgeting structure.\",\n        image: _assets_image__WEBPACK_IMPORTED_MODULE_2__.usecase\n    },\n    {\n        title: \"Non-Profit\",\n        description: \" Create a plan that works for your unique needs and goals with our easy-to-use budgeting structure.\",\n        image: _assets_image__WEBPACK_IMPORTED_MODULE_2__.usecase\n    }\n];\nconst Industry = ()=>{\n    _s();\n    const [clicked, setClicked] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"0\");\n    const [imageIndex, setImageIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const handleToggle = (index)=>{\n        setImageIndex(index);\n        if (clicked === index) {\n            return setClicked(\"0\");\n        }\n        setClicked(index);\n    };\n    let changeImage = theIndustry[imageIndex];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"pt-37 px-0\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-accent-light_yellow flex flex-wrap h-full w-full\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-wrap lg:w-7/12 sm:w-2/3 content-start sm:pr-10\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full sm:pl-28 sm:pr-20 px-4 pt-36 mb-6\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_4__.SmallHeading, {\n                                color: \"#AF7421\",\n                                svg: _assets_icons__WEBPACK_IMPORTED_MODULE_5__.case_svg,\n                                title: \"Use Cases\"\n                            }, void 0, false, {\n                                fileName: \"/Users/rarumdj/Documents/NextJs/website-v1/containers/home/industry.jsx\",\n                                lineNumber: 63,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"leading-tight font-normal text-5xl my-4 text-accent-gray\",\n                                children: [\n                                    \"The expense solution \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/Users/rarumdj/Documents/NextJs/website-v1/containers/home/industry.jsx\",\n                                        lineNumber: 65,\n                                        columnNumber: 36\n                                    }, undefined),\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"font-semibold\",\n                                        children: \"for every industry\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/rarumdj/Documents/NextJs/website-v1/containers/home/industry.jsx\",\n                                        lineNumber: 65,\n                                        columnNumber: 43\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/rarumdj/Documents/NextJs/website-v1/containers/home/industry.jsx\",\n                                lineNumber: 64,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mt-8\",\n                                children: theIndustry.map((solution, index)=>{\n                                    const number = (index + 1) * 10;\n                                    const percent = 100 - number + \"%\";\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_4__.SolutionAccodion, {\n                                        solution: solution,\n                                        index: index + 1,\n                                        length: theIndustry.length,\n                                        onToggle: ()=>handleToggle(index),\n                                        active: +clicked === index\n                                    }, index, false, {\n                                        fileName: \"/Users/rarumdj/Documents/NextJs/website-v1/containers/home/industry.jsx\",\n                                        lineNumber: 73,\n                                        columnNumber: 19\n                                    }, undefined);\n                                })\n                            }, void 0, false, {\n                                fileName: \"/Users/rarumdj/Documents/NextJs/website-v1/containers/home/industry.jsx\",\n                                lineNumber: 68,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/rarumdj/Documents/NextJs/website-v1/containers/home/industry.jsx\",\n                        lineNumber: 62,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/rarumdj/Documents/NextJs/website-v1/containers/home/industry.jsx\",\n                    lineNumber: 61,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"lg:w-5/12 sm:w-1/3 w-full h-full flex overflow-hidden \",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {\n                        src: changeImage.image,\n                        className: \"w-fit h-fit ml-auto \",\n                        alt: \"\"\n                    }, void 0, false, {\n                        fileName: \"/Users/rarumdj/Documents/NextJs/website-v1/containers/home/industry.jsx\",\n                        lineNumber: 87,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/rarumdj/Documents/NextJs/website-v1/containers/home/industry.jsx\",\n                    lineNumber: 86,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/rarumdj/Documents/NextJs/website-v1/containers/home/industry.jsx\",\n            lineNumber: 60,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/rarumdj/Documents/NextJs/website-v1/containers/home/industry.jsx\",\n        lineNumber: 59,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Industry, \"/jKtFDqMehRMs/aYc2157+/BJNc=\");\n_c = Industry;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Industry); //  <h4\n //                   key={index}\n //                   onClick={() => handleClick(index)}\n //                   className=\"text-gray-700 font-medium text-3xl mb-5\"\n //                   style={{ opacity: percent }}\n //                 >\n //                   {title}\n //                 </h4>\nvar _c;\n$RefreshReg$(_c, \"Industry\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250YWluZXJzL2hvbWUvaW5kdXN0cnkuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQXdDO0FBQ0s7QUFDYTtBQUNRO0FBQ3BCO0FBQ2Y7QUFFL0IsTUFBTVEsY0FBYztJQUNsQjtRQUNFQyxPQUFPO1FBQ1BDLGFBQWE7UUFDYkMsT0FBT1Qsa0RBQU9BO0lBQ2hCO0lBQ0E7UUFDRU8sT0FBTztRQUNQQyxhQUFhO1FBQ2JDLE9BQU9ULGtEQUFPQTtJQUNoQjtJQUNBO1FBQ0VPLE9BQU87UUFDUEMsYUFBYTtRQUNiQyxPQUFPVCxrREFBT0E7SUFDaEI7SUFDQTtRQUNFTyxPQUFPO1FBQ1BDLGFBQWE7UUFDYkMsT0FBT1Qsa0RBQU9BO0lBQ2hCO0lBQ0E7UUFDRU8sT0FBTztRQUNQQyxhQUFhO1FBQ2JDLE9BQU9ULGtEQUFPQTtJQUNoQjtJQUNBO1FBQ0VPLE9BQU87UUFDUEMsYUFBYTtRQUNiQyxPQUFPVCxrREFBT0E7SUFDaEI7SUFDQTtRQUNFTyxPQUFPO1FBQ1BDLGFBQWE7UUFDYkMsT0FBT1Qsa0RBQU9BO0lBQ2hCO0NBQ0Q7QUFDRCxNQUFNVSxXQUFXLElBQU07O0lBQ3JCLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHYiwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNjLFlBQVlDLGNBQWMsR0FBR2YsK0NBQVFBLENBQUM7SUFDN0MsTUFBTWdCLGVBQWUsQ0FBQ0MsUUFBVTtRQUM5QkYsY0FBY0U7UUFDZCxJQUFJTCxZQUFZSyxPQUFPO1lBQ3JCLE9BQU9KLFdBQVc7UUFDcEIsQ0FBQztRQUNEQSxXQUFXSTtJQUNiO0lBRUEsSUFBSUMsY0FBY1gsV0FBVyxDQUFDTyxXQUFXO0lBRXpDLHFCQUNFLDhEQUFDSztRQUFRQyxXQUFVO2tCQUNqQiw0RUFBQ0M7WUFBSUQsV0FBVTs7OEJBQ2IsOERBQUNDO29CQUFJRCxXQUFVOzhCQUNiLDRFQUFDQzt3QkFBSUQsV0FBVTs7MENBQ2IsOERBQUNqQixxREFBWUE7Z0NBQUNtQixPQUFNO2dDQUFVQyxLQUFLbEIsbURBQVFBO2dDQUFFRyxPQUFNOzs7Ozs7MENBQ25ELDhEQUFDZ0I7Z0NBQUdKLFdBQVU7O29DQUEyRDtrREFDbEQsOERBQUNLOzs7OztvQ0FBSztrREFBQyw4REFBQ0M7d0NBQUtOLFdBQVU7a0RBQWdCOzs7Ozs7Ozs7Ozs7MENBRzlELDhEQUFDQztnQ0FBSUQsV0FBVTswQ0FDWmIsWUFBWW9CLEdBQUcsQ0FBQyxDQUFDQyxVQUFVWCxRQUFVO29DQUNwQyxNQUFNWSxTQUFTLENBQUNaLFFBQVEsS0FBSztvQ0FDN0IsTUFBTWEsVUFBVSxNQUFNRCxTQUFTO29DQUMvQixxQkFDRSw4REFBQ3pCLHlEQUFnQkE7d0NBQ2Z3QixVQUFVQTt3Q0FDVlgsT0FBT0EsUUFBUTt3Q0FDZmMsUUFBUXhCLFlBQVl3QixNQUFNO3dDQUMxQkMsVUFBVSxJQUFNaEIsYUFBYUM7d0NBQzdCZ0IsUUFBUSxDQUFDckIsWUFBWUs7dUNBQ2hCQTs7Ozs7Z0NBR1g7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUlOLDhEQUFDSTtvQkFBSUQsV0FBVTs4QkFDYiw0RUFBQ2QsbURBQUtBO3dCQUFDNEIsS0FBS2hCLFlBQVlSLEtBQUs7d0JBQUVVLFdBQVU7d0JBQXVCZSxLQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzlFO0dBL0NNeEI7S0FBQUE7QUFpRE4sK0RBQWVBLFFBQVFBLEVBQUMsQ0FDeEIsT0FBTztDQUNQLGdDQUFnQztDQUNoQyx1REFBdUQ7Q0FDdkQsd0VBQXdFO0NBQ3hFLGlEQUFpRDtDQUNqRCxvQkFBb0I7Q0FDcEIsNEJBQTRCO0NBQzVCLHdCQUF3QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb250YWluZXJzL2hvbWUvaW5kdXN0cnkuanN4PzRiMjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlY2FzZSB9IGZyb20gJy4uLy4uL2Fzc2V0cy9pbWFnZSc7XG5pbXBvcnQgTW9yZUFycm93IGZyb20gJy4uLy4uL2Fzc2V0cy9pY29ucy9tb3JlLWFycm93LnN2Zyc7XG5pbXBvcnQgeyBTbWFsbEhlYWRpbmcsIFNvbHV0aW9uQWNjb2Rpb24gfSBmcm9tICcuLi8uLi9jb21wb25lbnRzJztcbmltcG9ydCB7IGNhc2Vfc3ZnIH0gZnJvbSAnLi4vLi4vYXNzZXRzL2ljb25zJztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcblxuY29uc3QgdGhlSW5kdXN0cnkgPSBbXG4gIHtcbiAgICB0aXRsZTogJ1N0YXJ0dXBzJyxcbiAgICBkZXNjcmlwdGlvbjogJyBDcmVhdGUgYSBwbGFuIHRoYXQgd29ya3MgZm9yIHlvdXIgdW5pcXVlIG5lZWRzIGFuZCBnb2FscyB3aXRoIG91ciBlYXN5LXRvLXVzZSBidWRnZXRpbmcgc3RydWN0dXJlLicsXG4gICAgaW1hZ2U6IHVzZWNhc2UsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ0ZpbmFuY2lhbCBTZXJ2aWNlcycsXG4gICAgZGVzY3JpcHRpb246ICcgQ3JlYXRlIGEgcGxhbiB0aGF0IHdvcmtzIGZvciB5b3VyIHVuaXF1ZSBuZWVkcyBhbmQgZ29hbHMgd2l0aCBvdXIgZWFzeS10by11c2UgYnVkZ2V0aW5nIHN0cnVjdHVyZS4nLFxuICAgIGltYWdlOiB1c2VjYXNlLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdUcmF2ZWwgJiBIb3NwaXRhbGl0eScsXG4gICAgZGVzY3JpcHRpb246ICdDcmVhdGUgYSBwbGFuIHRoYXQgd29ya3MgZm9yIHlvdXIgdW5pcXVlIG5lZWRzIGFuZCBnb2FscyB3aXRoIG91ciBlYXN5LXRvLXVzZSBidWRnZXRpbmcgc3RydWN0dXJlLicsXG4gICAgaW1hZ2U6IHVzZWNhc2UsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ1RlY2hub2xvZ3knLFxuICAgIGRlc2NyaXB0aW9uOiAnIENyZWF0ZSBhIHBsYW4gdGhhdCB3b3JrcyBmb3IgeW91ciB1bmlxdWUgbmVlZHMgYW5kIGdvYWxzIHdpdGggb3VyIGVhc3ktdG8tdXNlIGJ1ZGdldGluZyBzdHJ1Y3R1cmUuJyxcbiAgICBpbWFnZTogdXNlY2FzZSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnSGVhbHRoY2FyZScsXG4gICAgZGVzY3JpcHRpb246ICcgQ3JlYXRlIGEgcGxhbiB0aGF0IHdvcmtzIGZvciB5b3VyIHVuaXF1ZSBuZWVkcyBhbmQgZ29hbHMgd2l0aCBvdXIgZWFzeS10by11c2UgYnVkZ2V0aW5nIHN0cnVjdHVyZS4nLFxuICAgIGltYWdlOiB1c2VjYXNlLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdNYXJrZXRpbmcnLFxuICAgIGRlc2NyaXB0aW9uOiAnIENyZWF0ZSBhIHBsYW4gdGhhdCB3b3JrcyBmb3IgeW91ciB1bmlxdWUgbmVlZHMgYW5kIGdvYWxzIHdpdGggb3VyIGVhc3ktdG8tdXNlIGJ1ZGdldGluZyBzdHJ1Y3R1cmUuJyxcbiAgICBpbWFnZTogdXNlY2FzZSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnTm9uLVByb2ZpdCcsXG4gICAgZGVzY3JpcHRpb246ICcgQ3JlYXRlIGEgcGxhbiB0aGF0IHdvcmtzIGZvciB5b3VyIHVuaXF1ZSBuZWVkcyBhbmQgZ29hbHMgd2l0aCBvdXIgZWFzeS10by11c2UgYnVkZ2V0aW5nIHN0cnVjdHVyZS4nLFxuICAgIGltYWdlOiB1c2VjYXNlLFxuICB9LFxuXTtcbmNvbnN0IEluZHVzdHJ5ID0gKCkgPT4ge1xuICBjb25zdCBbY2xpY2tlZCwgc2V0Q2xpY2tlZF0gPSB1c2VTdGF0ZSgnMCcpO1xuICBjb25zdCBbaW1hZ2VJbmRleCwgc2V0SW1hZ2VJbmRleF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgaGFuZGxlVG9nZ2xlID0gKGluZGV4KSA9PiB7XG4gICAgc2V0SW1hZ2VJbmRleChpbmRleCk7XG4gICAgaWYgKGNsaWNrZWQgPT09IGluZGV4KSB7XG4gICAgICByZXR1cm4gc2V0Q2xpY2tlZCgnMCcpO1xuICAgIH1cbiAgICBzZXRDbGlja2VkKGluZGV4KTtcbiAgfTtcblxuICBsZXQgY2hhbmdlSW1hZ2UgPSB0aGVJbmR1c3RyeVtpbWFnZUluZGV4XTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInB0LTM3IHB4LTBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctYWNjZW50LWxpZ2h0X3llbGxvdyBmbGV4IGZsZXgtd3JhcCBoLWZ1bGwgdy1mdWxsXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgbGc6dy03LzEyIHNtOnctMi8zIGNvbnRlbnQtc3RhcnQgc206cHItMTBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBzbTpwbC0yOCBzbTpwci0yMCBweC00IHB0LTM2IG1iLTZcIj5cbiAgICAgICAgICAgIDxTbWFsbEhlYWRpbmcgY29sb3I9XCIjQUY3NDIxXCIgc3ZnPXtjYXNlX3N2Z30gdGl0bGU9XCJVc2UgQ2FzZXNcIiAvPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImxlYWRpbmctdGlnaHQgZm9udC1ub3JtYWwgdGV4dC01eGwgbXktNCB0ZXh0LWFjY2VudC1ncmF5XCI+XG4gICAgICAgICAgICAgIFRoZSBleHBlbnNlIHNvbHV0aW9uIDxiciAvPiA8c3BhbiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkXCI+Zm9yIGV2ZXJ5IGluZHVzdHJ5PC9zcGFuPlxuICAgICAgICAgICAgPC9oMT5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC04XCI+XG4gICAgICAgICAgICAgIHt0aGVJbmR1c3RyeS5tYXAoKHNvbHV0aW9uLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG51bWJlciA9IChpbmRleCArIDEpICogMTA7XG4gICAgICAgICAgICAgICAgY29uc3QgcGVyY2VudCA9IDEwMCAtIG51bWJlciArICclJztcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPFNvbHV0aW9uQWNjb2Rpb25cbiAgICAgICAgICAgICAgICAgICAgc29sdXRpb249e3NvbHV0aW9ufVxuICAgICAgICAgICAgICAgICAgICBpbmRleD17aW5kZXggKyAxfVxuICAgICAgICAgICAgICAgICAgICBsZW5ndGg9e3RoZUluZHVzdHJ5Lmxlbmd0aH1cbiAgICAgICAgICAgICAgICAgICAgb25Ub2dnbGU9eygpID0+IGhhbmRsZVRvZ2dsZShpbmRleCl9XG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17K2NsaWNrZWQgPT09IGluZGV4fVxuICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzp3LTUvMTIgc206dy0xLzMgdy1mdWxsIGgtZnVsbCBmbGV4IG92ZXJmbG93LWhpZGRlbiBcIj5cbiAgICAgICAgICA8SW1hZ2Ugc3JjPXtjaGFuZ2VJbWFnZS5pbWFnZX0gY2xhc3NOYW1lPVwidy1maXQgaC1maXQgbWwtYXV0byBcIiBhbHQ9XCJcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZHVzdHJ5O1xuLy8gIDxoNFxuLy8gICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbi8vICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKGluZGV4KX1cbi8vICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtZ3JheS03MDAgZm9udC1tZWRpdW0gdGV4dC0zeGwgbWItNVwiXG4vLyAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBvcGFjaXR5OiBwZXJjZW50IH19XG4vLyAgICAgICAgICAgICAgICAgPlxuLy8gICAgICAgICAgICAgICAgICAge3RpdGxlfVxuLy8gICAgICAgICAgICAgICAgIDwvaDQ+XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZWNhc2UiLCJNb3JlQXJyb3ciLCJTbWFsbEhlYWRpbmciLCJTb2x1dGlvbkFjY29kaW9uIiwiY2FzZV9zdmciLCJJbWFnZSIsInRoZUluZHVzdHJ5IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImltYWdlIiwiSW5kdXN0cnkiLCJjbGlja2VkIiwic2V0Q2xpY2tlZCIsImltYWdlSW5kZXgiLCJzZXRJbWFnZUluZGV4IiwiaGFuZGxlVG9nZ2xlIiwiaW5kZXgiLCJjaGFuZ2VJbWFnZSIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJkaXYiLCJjb2xvciIsInN2ZyIsImgxIiwiYnIiLCJzcGFuIiwibWFwIiwic29sdXRpb24iLCJudW1iZXIiLCJwZXJjZW50IiwibGVuZ3RoIiwib25Ub2dnbGUiLCJhY3RpdmUiLCJzcmMiLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./containers/home/industry.jsx\n"));

/***/ })

});