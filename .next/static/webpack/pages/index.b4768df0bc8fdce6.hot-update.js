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

/***/ "./containers/home/testimonials.jsx":
/*!******************************************!*\
  !*** ./containers/home/testimonials.jsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/icons */ \"./assets/icons/index.js\");\n/* harmony import */ var _assets_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/image */ \"./assets/image/index.js\");\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components */ \"./components/index.js\");\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper */ \"./node_modules/swiper/swiper.esm.js\");\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swiper/react */ \"./node_modules/swiper/react/swiper-react.js\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! swiper/css */ \"./node_modules/swiper/swiper.min.css\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! swiper/css/pagination */ \"./node_modules/swiper/modules/pagination/pagination.min.css\");\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(swiper_css_pagination__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var swiper_css_autoplay__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! swiper/css/autoplay */ \"./node_modules/swiper/modules/autoplay/autoplay.min.css\");\n/* harmony import */ var swiper_css_autoplay__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(swiper_css_autoplay__WEBPACK_IMPORTED_MODULE_10__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n// Import Swiper styles\n\n\n\n// import required modules\n\nconst Testi = [\n    {\n        name: \"Kenedy James\",\n        para: \"I have been driving as a commercial driver for over 5 years\\n  but the exceptional service and ease of getting a car from\\n  Rapyd was amazing. I look forward to the day I'll have the\\n  original documents as I already own this car in my mind.\",\n        imgSrc: _assets_image__WEBPACK_IMPORTED_MODULE_4__.olumide\n    },\n    {\n        name: \"Anthony\",\n        para: \"My experience with Rapyd has left me with nothing but a grateful heart. This is more than a business for me, Rapyd Cars empowered me to achieve my personal goals. Thank you Rapyd Cars.\",\n        imgSrc: _assets_image__WEBPACK_IMPORTED_MODULE_4__.CardPhone\n    },\n    {\n        name: \"Sunday\",\n        para: \"Sometimes I have the impression that Rapyd is not a Nigerian company because of how fast and excellent their services are. The amount of concern they have for their Driver is highly commendable and I am more than grateful to be on this journey to own my own car. Thank you Rapyd.\",\n        imgSrc: _assets_image__WEBPACK_IMPORTED_MODULE_4__.olumide\n    },\n    {\n        name: \"Lucky\",\n        para: \"I feel like my name was what I experienced with Rapyd Cars. I feel so Lucky to be associated with a company like Rapyd Cars. Thank Rapyd for this opportunity to be my own Boss. \",\n        imgSrc: _assets_image__WEBPACK_IMPORTED_MODULE_4__.olumide\n    },\n    {\n        name: \"Lazarus\",\n        para: \"Rapyd cars was my saviour after the ugly experience I had during the pandemic. I enjoyed the best of treatment as a driver that any organization has ever given to me. \",\n        imgSrc: _assets_image__WEBPACK_IMPORTED_MODULE_4__.olumide\n    }\n];\nconst Testimonials = ()=>{\n    _s();\n    const [controlledSwiper, setControlledSwiper] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    let changeText = Testi[controlledSwiper];\n    swiper__WEBPACK_IMPORTED_MODULE_6__[\"default\"].use([\n        swiper__WEBPACK_IMPORTED_MODULE_6__.Autoplay\n    ]);\n    const params = {\n        slidesPerView: 1,\n        spaceBetween: 10,\n        loop: false,\n        modules: [\n            swiper__WEBPACK_IMPORTED_MODULE_6__.Pagination,\n            swiper__WEBPACK_IMPORTED_MODULE_6__.Controller,\n            swiper__WEBPACK_IMPORTED_MODULE_6__.EffectFade,\n            swiper__WEBPACK_IMPORTED_MODULE_6__.Navigation\n        ],\n        effect: \"fade\",\n        navigation: {\n            nextEl: \".image-swiper-button-next\",\n            prevEl: \".image-swiper-button-prev\",\n            disabledClass: \"swiper-button-disabled\"\n        }\n    };\n    console.log(controlledSwiper);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"container mx-auto flex flex-col px-5 py-24\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"space-y-3 mb-20\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_5__.SmallHeading, {\n                        svg: _assets_icons__WEBPACK_IMPORTED_MODULE_3__.partner_svg,\n                        title: \"Partners\",\n                        color: \"#D28B28\"\n                    }, void 0, false, {\n                        fileName: \"/Users/rarumdj/Documents/NextJs/website-v1/containers/home/testimonials.jsx\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-5xl font-semibold text-gray-900\",\n                        children: [\n                            \"Here’s what they say \",\n                            '\"'\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/rarumdj/Documents/NextJs/website-v1/containers/home/testimonials.jsx\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/rarumdj/Documents/NextJs/website-v1/containers/home/testimonials.jsx\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid md:grid-cols-2 items-center bg-[#FBF5EC] rounded-3xl\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_7__.Swiper, {\n                        ...params,\n                        controller: {\n                            control: controlledSwiper\n                        },\n                        onSlideChange: (e)=>setControlledSwiper(e.realIndex),\n                        className: \"flex items-center\",\n                        children: Testi.map((items, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_7__.SwiperSlide, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    src: items.imgSrc,\n                                    alt: \"\",\n                                    className: \"object-cover w-full max-w-xl rounded-t-3xl h-full md:rounded-none md:rounded-l-3xl\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/rarumdj/Documents/NextJs/website-v1/containers/home/testimonials.jsx\",\n                                    lineNumber: 83,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, i, false, {\n                                fileName: \"/Users/rarumdj/Documents/NextJs/website-v1/containers/home/testimonials.jsx\",\n                                lineNumber: 82,\n                                columnNumber: 13\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/rarumdj/Documents/NextJs/website-v1/containers/home/testimonials.jsx\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col justify-between pr-28 py-20 leading-normal\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                src: _assets_icons__WEBPACK_IMPORTED_MODULE_3__.voltron_svg,\n                                alt: \"\",\n                                className: \"mb-10\"\n                            }, void 0, false, {\n                                fileName: \"/Users/rarumdj/Documents/NextJs/website-v1/containers/home/testimonials.jsx\",\n                                lineNumber: 93,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                className: \"text-[42px] font-semibold tracking-tighter text-gray-900\",\n                                children: [\n                                    \"Since we started using Bujeti, we’ve had peace of mind.\",\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"font-normal\",\n                                        children: \"All my expenses are tracked easily and I can see them in real time.\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/rarumdj/Documents/NextJs/website-v1/containers/home/testimonials.jsx\",\n                                        lineNumber: 97,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/rarumdj/Documents/NextJs/website-v1/containers/home/testimonials.jsx\",\n                                lineNumber: 95,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"my-8\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"mb-3 font-semibold text-gray-800 \",\n                                    children: [\n                                        \"Olumide Soyombo \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"/Users/rarumdj/Documents/NextJs/website-v1/containers/home/testimonials.jsx\",\n                                            lineNumber: 101,\n                                            columnNumber: 31\n                                        }, undefined),\n                                        \" \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"font-normal mt-2\",\n                                            children: \"Co-Founder, Voltron Capital\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/rarumdj/Documents/NextJs/website-v1/containers/home/testimonials.jsx\",\n                                            lineNumber: 101,\n                                            columnNumber: 38\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/rarumdj/Documents/NextJs/website-v1/containers/home/testimonials.jsx\",\n                                    lineNumber: 100,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/rarumdj/Documents/NextJs/website-v1/containers/home/testimonials.jsx\",\n                                lineNumber: 99,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex gap-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        src: _assets_icons__WEBPACK_IMPORTED_MODULE_3__.chevron_left,\n                                        alt: \"\",\n                                        className: \"image-swiper-button-prev swiper-button-disabled flex justify-center items-center p-2 h-8 w-8 rounded-full cursor-pointer\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/rarumdj/Documents/NextJs/website-v1/containers/home/testimonials.jsx\",\n                                        lineNumber: 105,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        src: _assets_icons__WEBPACK_IMPORTED_MODULE_3__.chevron_right,\n                                        alt: \"\",\n                                        className: \"image-swiper-button-next bg-black flex justify-center items-center p-2 h-8 w-8 rounded-full cursor-pointer\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/rarumdj/Documents/NextJs/website-v1/containers/home/testimonials.jsx\",\n                                        lineNumber: 110,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/rarumdj/Documents/NextJs/website-v1/containers/home/testimonials.jsx\",\n                                lineNumber: 104,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/rarumdj/Documents/NextJs/website-v1/containers/home/testimonials.jsx\",\n                        lineNumber: 92,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/rarumdj/Documents/NextJs/website-v1/containers/home/testimonials.jsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/rarumdj/Documents/NextJs/website-v1/containers/home/testimonials.jsx\",\n        lineNumber: 66,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Testimonials, \"A5e/z8L2+Ya0nXU5rlclT0FDftA=\");\n_c = Testimonials;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Testimonials);\nvar _c;\n$RefreshReg$(_c, \"Testimonials\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250YWluZXJzL2hvbWUvdGVzdGltb25pYWxzLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBK0I7QUFDUztBQUNtRDtBQUNuQztBQUNSO0FBRWtDO0FBQy9CO0FBRW5ELHVCQUF1QjtBQUNIO0FBQ1c7QUFDRjtBQUU3QiwwQkFBMEI7QUFDVTtBQUNwQyxNQUFNa0IsUUFBUTtJQUNaO1FBQ0VDLE1BQU07UUFDTkMsTUFBTztRQUlQQyxRQUFRZCxrREFBT0E7SUFDakI7SUFDQTtRQUNFWSxNQUFNO1FBQ05DLE1BQU87UUFDUEMsUUFBUWIsb0RBQVNBO0lBQ25CO0lBQ0E7UUFDRVcsTUFBTTtRQUNOQyxNQUFPO1FBQ1BDLFFBQVFkLGtEQUFPQTtJQUNqQjtJQUNBO1FBQ0VZLE1BQU07UUFDTkMsTUFBTztRQUNQQyxRQUFRZCxrREFBT0E7SUFDakI7SUFDQTtRQUNFWSxNQUFNO1FBQ05DLE1BQU87UUFDUEMsUUFBUWQsa0RBQU9BO0lBQ2pCO0NBQ0Q7QUFFRCxNQUFNZSxlQUFlLElBQU07O0lBQ3pCLE1BQU0sQ0FBQ0Msa0JBQWtCQyxvQkFBb0IsR0FBR3RCLCtDQUFRQSxDQUFDO0lBQ3pELElBQUl1QixhQUFhUCxLQUFLLENBQUNLLGlCQUFpQjtJQUN4Q2Isa0RBQWMsQ0FBQztRQUFDRSw0Q0FBUUE7S0FBQztJQUN6QixNQUFNZSxTQUFTO1FBQ2JDLGVBQWU7UUFDZkMsY0FBYztRQUNkQyxNQUFNLEtBQUs7UUFDWEMsU0FBUztZQUFDZCw4Q0FBVUE7WUFBRU4sOENBQVVBO1lBQUVFLDhDQUFVQTtZQUFFQyw4Q0FBVUE7U0FBQztRQUN6RGtCLFFBQVE7UUFDUkMsWUFBWTtZQUNWQyxRQUFRO1lBQ1JDLFFBQVE7WUFDUkMsZUFBZTtRQUNqQjtJQUNGO0lBQ0FDLFFBQVFDLEdBQUcsQ0FBQ2Y7SUFDWixxQkFDRSw4REFBQ2dCO1FBQVFDLFdBQVU7OzBCQUNqQiw4REFBQ0M7Z0JBQUlELFdBQVU7O2tDQUNiLDhEQUFDL0IscURBQVlBO3dCQUFDaUMsS0FBS3JDLHNEQUFXQTt3QkFBRXNDLE9BQU07d0JBQVdDLE9BQU07Ozs7OztrQ0FDdkQsOERBQUNDO3dCQUFHTCxXQUFVOzs0QkFBdUM7NEJBQXNCOzs7Ozs7Ozs7Ozs7OzBCQUc3RSw4REFBQ0M7Z0JBQUlELFdBQVU7O2tDQUViLDhEQUFDekIsZ0RBQU1BO3dCQUNKLEdBQUdZLE1BQU07d0JBQ1ZtQixZQUFZOzRCQUFFQyxTQUFTeEI7d0JBQWlCO3dCQUN4Q3lCLGVBQWUsQ0FBQ0MsSUFBTXpCLG9CQUFvQnlCLEVBQUVDLFNBQVM7d0JBQ3JEVixXQUFVO2tDQUdUdEIsTUFBTWlDLEdBQUcsQ0FBQyxDQUFDQyxPQUFPQyxrQkFDakIsOERBQUNyQyxxREFBV0E7MENBQ1YsNEVBQUNoQixtREFBS0E7b0NBQ0pzRCxLQUFLRixNQUFNL0IsTUFBTTtvQ0FDakJrQyxLQUFJO29DQUNKZixXQUFVOzs7Ozs7K0JBSklhOzs7Ozs7Ozs7O2tDQVV0Qiw4REFBQ1o7d0JBQUlELFdBQVU7OzBDQUNiLDhEQUFDeEMsbURBQUtBO2dDQUFDc0QsS0FBS2hELHNEQUFXQTtnQ0FBRWlELEtBQUk7Z0NBQUdmLFdBQVU7Ozs7OzswQ0FFMUMsOERBQUNnQjtnQ0FBR2hCLFdBQVU7O29DQUEyRDtvQ0FDZjtrREFDeEQsOERBQUNpQjt3Q0FBS2pCLFdBQVU7a0RBQWM7Ozs7Ozs7Ozs7OzswQ0FFaEMsOERBQUNDO2dDQUFJRCxXQUFVOzBDQUNiLDRFQUFDa0I7b0NBQUVsQixXQUFVOzt3Q0FBb0M7c0RBQy9CLDhEQUFDbUI7Ozs7O3dDQUFLO3NEQUFDLDhEQUFDRjs0Q0FBS2pCLFdBQVU7c0RBQW1COzs7Ozs7Ozs7Ozs7Ozs7OzswQ0FHOUQsOERBQUNDO2dDQUFJRCxXQUFVOztrREFDYiw4REFBQ3hDLG1EQUFLQTt3Q0FDSnNELEtBQUtuRCx1REFBWUE7d0NBQ2pCb0QsS0FBSTt3Q0FDSmYsV0FBVTs7Ozs7O2tEQUVaLDhEQUFDeEMsbURBQUtBO3dDQUNKc0QsS0FBS2xELHdEQUFhQTt3Q0FDbEJtRCxLQUFJO3dDQUNKZixXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPeEI7R0F4RU1sQjtLQUFBQTtBQTBFTiwrREFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb250YWluZXJzL2hvbWUvdGVzdGltb25pYWxzLmpzeD8zOGY0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNoZXZyb25fbGVmdCwgY2hldnJvbl9yaWdodCwgcGFydG5lcl9zdmcsIHZvbHRyb25fc3ZnIH0gZnJvbSAnLi4vLi4vYXNzZXRzL2ljb25zJztcbmltcG9ydCB7IG9sdW1pZGUsIENhcmRQaG9uZSB9IGZyb20gJy4uLy4uL2Fzc2V0cy9pbWFnZSc7XG5pbXBvcnQgeyBTbWFsbEhlYWRpbmcgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzJztcblxuaW1wb3J0IFN3aXBlckNvcmUsIHsgQ29udHJvbGxlciwgQXV0b3BsYXksIEVmZmVjdEZhZGUsIE5hdmlnYXRpb24gfSBmcm9tICdzd2lwZXInO1xuaW1wb3J0IHsgU3dpcGVyLCBTd2lwZXJTbGlkZSB9IGZyb20gJ3N3aXBlci9yZWFjdCc7XG5cbi8vIEltcG9ydCBTd2lwZXIgc3R5bGVzXG5pbXBvcnQgJ3N3aXBlci9jc3MnO1xuaW1wb3J0ICdzd2lwZXIvY3NzL3BhZ2luYXRpb24nO1xuaW1wb3J0ICdzd2lwZXIvY3NzL2F1dG9wbGF5JztcblxuLy8gaW1wb3J0IHJlcXVpcmVkIG1vZHVsZXNcbmltcG9ydCB7IFBhZ2luYXRpb24gfSBmcm9tICdzd2lwZXInO1xuY29uc3QgVGVzdGkgPSBbXG4gIHtcbiAgICBuYW1lOiAnS2VuZWR5IEphbWVzJyxcbiAgICBwYXJhOiBgSSBoYXZlIGJlZW4gZHJpdmluZyBhcyBhIGNvbW1lcmNpYWwgZHJpdmVyIGZvciBvdmVyIDUgeWVhcnNcbiAgYnV0IHRoZSBleGNlcHRpb25hbCBzZXJ2aWNlIGFuZCBlYXNlIG9mIGdldHRpbmcgYSBjYXIgZnJvbVxuICBSYXB5ZCB3YXMgYW1hemluZy4gSSBsb29rIGZvcndhcmQgdG8gdGhlIGRheSBJJ2xsIGhhdmUgdGhlXG4gIG9yaWdpbmFsIGRvY3VtZW50cyBhcyBJIGFscmVhZHkgb3duIHRoaXMgY2FyIGluIG15IG1pbmQuYCxcbiAgICBpbWdTcmM6IG9sdW1pZGUsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnQW50aG9ueScsXG4gICAgcGFyYTogYE15IGV4cGVyaWVuY2Ugd2l0aCBSYXB5ZCBoYXMgbGVmdCBtZSB3aXRoIG5vdGhpbmcgYnV0IGEgZ3JhdGVmdWwgaGVhcnQuIFRoaXMgaXMgbW9yZSB0aGFuIGEgYnVzaW5lc3MgZm9yIG1lLCBSYXB5ZCBDYXJzIGVtcG93ZXJlZCBtZSB0byBhY2hpZXZlIG15IHBlcnNvbmFsIGdvYWxzLiBUaGFuayB5b3UgUmFweWQgQ2Fycy5gLFxuICAgIGltZ1NyYzogQ2FyZFBob25lLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ1N1bmRheScsXG4gICAgcGFyYTogYFNvbWV0aW1lcyBJIGhhdmUgdGhlIGltcHJlc3Npb24gdGhhdCBSYXB5ZCBpcyBub3QgYSBOaWdlcmlhbiBjb21wYW55IGJlY2F1c2Ugb2YgaG93IGZhc3QgYW5kIGV4Y2VsbGVudCB0aGVpciBzZXJ2aWNlcyBhcmUuIFRoZSBhbW91bnQgb2YgY29uY2VybiB0aGV5IGhhdmUgZm9yIHRoZWlyIERyaXZlciBpcyBoaWdobHkgY29tbWVuZGFibGUgYW5kIEkgYW0gbW9yZSB0aGFuIGdyYXRlZnVsIHRvIGJlIG9uIHRoaXMgam91cm5leSB0byBvd24gbXkgb3duIGNhci4gVGhhbmsgeW91IFJhcHlkLmAsXG4gICAgaW1nU3JjOiBvbHVtaWRlLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ0x1Y2t5JyxcbiAgICBwYXJhOiBgSSBmZWVsIGxpa2UgbXkgbmFtZSB3YXMgd2hhdCBJIGV4cGVyaWVuY2VkIHdpdGggUmFweWQgQ2Fycy4gSSBmZWVsIHNvIEx1Y2t5IHRvIGJlIGFzc29jaWF0ZWQgd2l0aCBhIGNvbXBhbnkgbGlrZSBSYXB5ZCBDYXJzLiBUaGFuayBSYXB5ZCBmb3IgdGhpcyBvcHBvcnR1bml0eSB0byBiZSBteSBvd24gQm9zcy4gYCxcbiAgICBpbWdTcmM6IG9sdW1pZGUsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnTGF6YXJ1cycsXG4gICAgcGFyYTogYFJhcHlkIGNhcnMgd2FzIG15IHNhdmlvdXIgYWZ0ZXIgdGhlIHVnbHkgZXhwZXJpZW5jZSBJIGhhZCBkdXJpbmcgdGhlIHBhbmRlbWljLiBJIGVuam95ZWQgdGhlIGJlc3Qgb2YgdHJlYXRtZW50IGFzIGEgZHJpdmVyIHRoYXQgYW55IG9yZ2FuaXphdGlvbiBoYXMgZXZlciBnaXZlbiB0byBtZS4gYCxcbiAgICBpbWdTcmM6IG9sdW1pZGUsXG4gIH0sXG5dO1xuXG5jb25zdCBUZXN0aW1vbmlhbHMgPSAoKSA9PiB7XG4gIGNvbnN0IFtjb250cm9sbGVkU3dpcGVyLCBzZXRDb250cm9sbGVkU3dpcGVyXSA9IHVzZVN0YXRlKDApO1xuICBsZXQgY2hhbmdlVGV4dCA9IFRlc3RpW2NvbnRyb2xsZWRTd2lwZXJdO1xuICBTd2lwZXJDb3JlLnVzZShbQXV0b3BsYXldKTtcbiAgY29uc3QgcGFyYW1zID0ge1xuICAgIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgc3BhY2VCZXR3ZWVuOiAxMCxcbiAgICBsb29wOiBmYWxzZSxcbiAgICBtb2R1bGVzOiBbUGFnaW5hdGlvbiwgQ29udHJvbGxlciwgRWZmZWN0RmFkZSwgTmF2aWdhdGlvbl0sXG4gICAgZWZmZWN0OiAnZmFkZScsXG4gICAgbmF2aWdhdGlvbjoge1xuICAgICAgbmV4dEVsOiAnLmltYWdlLXN3aXBlci1idXR0b24tbmV4dCcsXG4gICAgICBwcmV2RWw6ICcuaW1hZ2Utc3dpcGVyLWJ1dHRvbi1wcmV2JyxcbiAgICAgIGRpc2FibGVkQ2xhc3M6ICdzd2lwZXItYnV0dG9uLWRpc2FibGVkJyxcbiAgICB9LFxuICB9O1xuICBjb25zb2xlLmxvZyhjb250cm9sbGVkU3dpcGVyKTtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBmbGV4IGZsZXgtY29sIHB4LTUgcHktMjRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0zIG1iLTIwXCI+XG4gICAgICAgIDxTbWFsbEhlYWRpbmcgc3ZnPXtwYXJ0bmVyX3N2Z30gdGl0bGU9XCJQYXJ0bmVyc1wiIGNvbG9yPVwiI0QyOEIyOFwiIC8+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTV4bCBmb250LXNlbWlib2xkIHRleHQtZ3JheS05MDBcIj5IZXJl4oCZcyB3aGF0IHRoZXkgc2F5IHsnXCInfTwvaDE+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIG1kOmdyaWQtY29scy0yIGl0ZW1zLWNlbnRlciBiZy1bI0ZCRjVFQ10gcm91bmRlZC0zeGxcIj5cbiAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtZnVsbCB3LWZ1bGxcIj4gKi99XG4gICAgICAgIDxTd2lwZXJcbiAgICAgICAgICB7Li4ucGFyYW1zfVxuICAgICAgICAgIGNvbnRyb2xsZXI9e3sgY29udHJvbDogY29udHJvbGxlZFN3aXBlciB9fVxuICAgICAgICAgIG9uU2xpZGVDaGFuZ2U9eyhlKSA9PiBzZXRDb250cm9sbGVkU3dpcGVyKGUucmVhbEluZGV4KX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiXG4gICAgICAgICAgLy8gZWZmZWN0PVwiZmFkZVwiXG4gICAgICAgID5cbiAgICAgICAgICB7VGVzdGkubWFwKChpdGVtcywgaSkgPT4gKFxuICAgICAgICAgICAgPFN3aXBlclNsaWRlIGtleT17aX0+XG4gICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgIHNyYz17aXRlbXMuaW1nU3JjfVxuICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib2JqZWN0LWNvdmVyIHctZnVsbCBtYXgtdy14bCByb3VuZGVkLXQtM3hsIGgtZnVsbCBtZDpyb3VuZGVkLW5vbmUgbWQ6cm91bmRlZC1sLTN4bFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L1N3aXBlcj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuIHByLTI4IHB5LTIwIGxlYWRpbmctbm9ybWFsXCI+XG4gICAgICAgICAgPEltYWdlIHNyYz17dm9sdHJvbl9zdmd9IGFsdD1cIlwiIGNsYXNzTmFtZT1cIm1iLTEwXCIgLz5cblxuICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJ0ZXh0LVs0MnB4XSBmb250LXNlbWlib2xkIHRyYWNraW5nLXRpZ2h0ZXIgdGV4dC1ncmF5LTkwMFwiPlxuICAgICAgICAgICAgU2luY2Ugd2Ugc3RhcnRlZCB1c2luZyBCdWpldGksIHdl4oCZdmUgaGFkIHBlYWNlIG9mIG1pbmQueycgJ31cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbm9ybWFsXCI+QWxsIG15IGV4cGVuc2VzIGFyZSB0cmFja2VkIGVhc2lseSBhbmQgSSBjYW4gc2VlIHRoZW0gaW4gcmVhbCB0aW1lLjwvc3Bhbj5cbiAgICAgICAgICA8L2g1PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktOFwiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItMyBmb250LXNlbWlib2xkIHRleHQtZ3JheS04MDAgXCI+XG4gICAgICAgICAgICAgIE9sdW1pZGUgU295b21ibyA8YnIgLz4gPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ub3JtYWwgbXQtMlwiPkNvLUZvdW5kZXIsIFZvbHRyb24gQ2FwaXRhbDwvc3Bhbj5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTRcIj5cbiAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICBzcmM9e2NoZXZyb25fbGVmdH1cbiAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1hZ2Utc3dpcGVyLWJ1dHRvbi1wcmV2ICBzd2lwZXItYnV0dG9uLWRpc2FibGVkICBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBwLTIgaC04IHctOCByb3VuZGVkLWZ1bGwgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICBzcmM9e2NoZXZyb25fcmlnaHR9XG4gICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltYWdlLXN3aXBlci1idXR0b24tbmV4dCAgYmctYmxhY2sgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgcC0yIGgtOCB3LTggcm91bmRlZC1mdWxsIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGVzdGltb25pYWxzO1xuIl0sIm5hbWVzIjpbIkltYWdlIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImNoZXZyb25fbGVmdCIsImNoZXZyb25fcmlnaHQiLCJwYXJ0bmVyX3N2ZyIsInZvbHRyb25fc3ZnIiwib2x1bWlkZSIsIkNhcmRQaG9uZSIsIlNtYWxsSGVhZGluZyIsIlN3aXBlckNvcmUiLCJDb250cm9sbGVyIiwiQXV0b3BsYXkiLCJFZmZlY3RGYWRlIiwiTmF2aWdhdGlvbiIsIlN3aXBlciIsIlN3aXBlclNsaWRlIiwiUGFnaW5hdGlvbiIsIlRlc3RpIiwibmFtZSIsInBhcmEiLCJpbWdTcmMiLCJUZXN0aW1vbmlhbHMiLCJjb250cm9sbGVkU3dpcGVyIiwic2V0Q29udHJvbGxlZFN3aXBlciIsImNoYW5nZVRleHQiLCJ1c2UiLCJwYXJhbXMiLCJzbGlkZXNQZXJWaWV3Iiwic3BhY2VCZXR3ZWVuIiwibG9vcCIsIm1vZHVsZXMiLCJlZmZlY3QiLCJuYXZpZ2F0aW9uIiwibmV4dEVsIiwicHJldkVsIiwiZGlzYWJsZWRDbGFzcyIsImNvbnNvbGUiLCJsb2ciLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiZGl2Iiwic3ZnIiwidGl0bGUiLCJjb2xvciIsImgxIiwiY29udHJvbGxlciIsImNvbnRyb2wiLCJvblNsaWRlQ2hhbmdlIiwiZSIsInJlYWxJbmRleCIsIm1hcCIsIml0ZW1zIiwiaSIsInNyYyIsImFsdCIsImg1Iiwic3BhbiIsInAiLCJiciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./containers/home/testimonials.jsx\n"));

/***/ })

});