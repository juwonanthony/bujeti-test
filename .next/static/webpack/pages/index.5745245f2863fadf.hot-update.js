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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/icons */ \"./assets/icons/index.js\");\n/* harmony import */ var _assets_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/image */ \"./assets/image/index.js\");\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components */ \"./components/index.js\");\n/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! html-react-parser */ \"./node_modules/html-react-parser/index.mjs\");\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swiper */ \"./node_modules/swiper/swiper.esm.js\");\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! swiper/react */ \"./node_modules/swiper/react/swiper-react.js\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! swiper/css */ \"./node_modules/swiper/swiper.min.css\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! swiper/css/pagination */ \"./node_modules/swiper/modules/pagination/pagination.min.css\");\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(swiper_css_pagination__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var swiper_css_autoplay__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! swiper/css/autoplay */ \"./node_modules/swiper/modules/autoplay/autoplay.min.css\");\n/* harmony import */ var swiper_css_autoplay__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(swiper_css_autoplay__WEBPACK_IMPORTED_MODULE_11__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n// Import Swiper styles\n\n\n\n// import required modules\n\nconst Testi = [\n    {\n        name: \"Olumide Soyombo\",\n        postion: \"Co-Founder, Voltron Capital\",\n        logo: _assets_icons__WEBPACK_IMPORTED_MODULE_3__.voltron_svg,\n        para: 'Since we started using Bujeti, we’ve had peace of mind.\\n    <span className=\"font-normal\">All my expenses are tracked easily and I can see them in real time.</span>',\n        imgSrc: _assets_image__WEBPACK_IMPORTED_MODULE_4__.olumide\n    },\n    {\n        name: \"Anthony Daniel\",\n        postion: \"Co-Founder, Voltron Capital\",\n        logo: _assets_icons__WEBPACK_IMPORTED_MODULE_3__.voltron_svg,\n        para: 'The magic is to using Bujeti, we’ve had peace of mind.\\n    <span className=\"font-normal\">All my expenses are tracked easily and I can see them in real time.</span>',\n        imgSrc: _assets_image__WEBPACK_IMPORTED_MODULE_4__.olumide\n    },\n    {\n        name: \"Olabisi Samson\",\n        postion: \"Co-Founder, Voltron Capital\",\n        logo: _assets_icons__WEBPACK_IMPORTED_MODULE_3__.voltron_svg,\n        para: 'Since we started using Bujeti, we’ve had peace of mind.\\n    <span className=\"font-normal\">All my expenses are tracked easily and I can see them in real time.</span>',\n        imgSrc: _assets_image__WEBPACK_IMPORTED_MODULE_4__.olumide\n    },\n    {\n        name: \"Olumide Mani\",\n        postion: \"Co-Founder, Voltron Capital\",\n        logo: _assets_icons__WEBPACK_IMPORTED_MODULE_3__.voltron_svg,\n        para: 'Since we started using Bujeti, we’ve had peace of mind.\\n    <span className=\"font-normal\">All my expenses are tracked easily and I can see them in real time.</span>',\n        imgSrc: _assets_image__WEBPACK_IMPORTED_MODULE_4__.olumide\n    },\n    {\n        name: \"Olumide Joe\",\n        postion: \"Co-Founder, Voltron Capital\",\n        logo: _assets_icons__WEBPACK_IMPORTED_MODULE_3__.voltron_svg,\n        para: 'Since we started using Bujeti, we’ve had peace of mind.\\n    <span className=\"font-normal\">All my expenses are tracked easily and I can see them in real time.</span>',\n        imgSrc: _assets_image__WEBPACK_IMPORTED_MODULE_4__.olumide\n    }\n];\nconst Testimonials = ()=>{\n    _s();\n    const [controlledSwiper, setControlledSwiper] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    let changeText = Testi[controlledSwiper];\n    swiper__WEBPACK_IMPORTED_MODULE_7__[\"default\"].use([\n        swiper__WEBPACK_IMPORTED_MODULE_7__.Autoplay\n    ]);\n    const params = {\n        slidesPerView: 1,\n        spaceBetween: 10,\n        loop: false,\n        modules: [\n            swiper__WEBPACK_IMPORTED_MODULE_7__.Pagination,\n            swiper__WEBPACK_IMPORTED_MODULE_7__.Controller,\n            swiper__WEBPACK_IMPORTED_MODULE_7__.EffectFade,\n            swiper__WEBPACK_IMPORTED_MODULE_7__.Navigation\n        ],\n        effect: \"fade\",\n        navigation: {\n            nextEl: \".image-swiper-button-next\",\n            prevEl: \".image-swiper-button-prev\",\n            disabledClass: \"swiper-button-disabled\"\n        }\n    };\n    console.log(controlledSwiper);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"container mx-auto flex flex-col px-5 py-24\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"space-y-3 mb-20\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_5__.SmallHeading, {\n                        svg: _assets_icons__WEBPACK_IMPORTED_MODULE_3__.partner_svg,\n                        title: \"Partners\",\n                        color: \"#D28B28\"\n                    }, void 0, false, {\n                        fileName: \"/Users/rarumdj/Documents/NextJs/website-v1/containers/home/testimonials.jsx\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-5xl font-semibold text-gray-900\",\n                        children: [\n                            \"Here’s what they say \",\n                            '\"'\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/rarumdj/Documents/NextJs/website-v1/containers/home/testimonials.jsx\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/rarumdj/Documents/NextJs/website-v1/containers/home/testimonials.jsx\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid md:grid-cols-2 items-center bg-[#FBF5EC] rounded-3xl relative \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_8__.Swiper, {\n                        ...params,\n                        controller: {\n                            control: controlledSwiper\n                        },\n                        onSlideChange: (e)=>setControlledSwiper(e.realIndex),\n                        className: \"flex items-center\",\n                        children: Testi.map((items, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_8__.SwiperSlide, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    src: items.imgSrc,\n                                    alt: \"\",\n                                    className: \"object-cover w-full max-w-xl rounded-t-3xl h-fit md:rounded-none md:rounded-l-3xl static\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/rarumdj/Documents/NextJs/website-v1/containers/home/testimonials.jsx\",\n                                    lineNumber: 95,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, i, false, {\n                                fileName: \"/Users/rarumdj/Documents/NextJs/website-v1/containers/home/testimonials.jsx\",\n                                lineNumber: 94,\n                                columnNumber: 13\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/rarumdj/Documents/NextJs/website-v1/containers/home/testimonials.jsx\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col justify-between pr-28 py-20 leading-normal\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                src: changeText.logo,\n                                alt: \"\",\n                                className: \"mb-10\"\n                            }, void 0, false, {\n                                fileName: \"/Users/rarumdj/Documents/NextJs/website-v1/containers/home/testimonials.jsx\",\n                                lineNumber: 105,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                className: \"text-[42px] font-semibold tracking-tighter text-gray-900\",\n                                children: (0,html_react_parser__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(changeText.para)\n                            }, void 0, false, {\n                                fileName: \"/Users/rarumdj/Documents/NextJs/website-v1/containers/home/testimonials.jsx\",\n                                lineNumber: 107,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"my-8\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"mb-3 font-semibold text-gray-800 \",\n                                    children: [\n                                        changeText.name,\n                                        \" \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"/Users/rarumdj/Documents/NextJs/website-v1/containers/home/testimonials.jsx\",\n                                            lineNumber: 110,\n                                            columnNumber: 33\n                                        }, undefined),\n                                        \" \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"font-normal mt-2\",\n                                            children: changeText.postion\n                                        }, void 0, false, {\n                                            fileName: \"/Users/rarumdj/Documents/NextJs/website-v1/containers/home/testimonials.jsx\",\n                                            lineNumber: 110,\n                                            columnNumber: 40\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/rarumdj/Documents/NextJs/website-v1/containers/home/testimonials.jsx\",\n                                    lineNumber: 109,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/rarumdj/Documents/NextJs/website-v1/containers/home/testimonials.jsx\",\n                                lineNumber: 108,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex gap-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        src: _assets_icons__WEBPACK_IMPORTED_MODULE_3__.chevron_left,\n                                        alt: \"\",\n                                        className: \"image-swiper-button-prev swiper-button-disabled bg-black flex justify-center items-center p-2 h-8 w-8 rounded-full cursor-pointer\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/rarumdj/Documents/NextJs/website-v1/containers/home/testimonials.jsx\",\n                                        lineNumber: 114,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        src: _assets_icons__WEBPACK_IMPORTED_MODULE_3__.chevron_right,\n                                        alt: \"\",\n                                        className: \"image-swiper-button-next swiper-button-disabled bg-black flex justify-center items-center p-2 h-8 w-8 rounded-full cursor-pointer\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/rarumdj/Documents/NextJs/website-v1/containers/home/testimonials.jsx\",\n                                        lineNumber: 119,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/rarumdj/Documents/NextJs/website-v1/containers/home/testimonials.jsx\",\n                                lineNumber: 113,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/rarumdj/Documents/NextJs/website-v1/containers/home/testimonials.jsx\",\n                        lineNumber: 104,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/rarumdj/Documents/NextJs/website-v1/containers/home/testimonials.jsx\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/rarumdj/Documents/NextJs/website-v1/containers/home/testimonials.jsx\",\n        lineNumber: 78,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Testimonials, \"A5e/z8L2+Ya0nXU5rlclT0FDftA=\");\n_c = Testimonials;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Testimonials);\nvar _c;\n$RefreshReg$(_c, \"Testimonials\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c0RBQW9CZixXQUFXUCxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7OzswQ0FHbkYsOERBQUN1QjtnQ0FBSUQsV0FBVTs7a0RBQ2IsOERBQUMzQyxtREFBS0E7d0NBQ0p5RCxLQUFLdEQsdURBQVlBO3dDQUNqQnVELEtBQUk7d0NBQ0pmLFdBQVU7Ozs7OztrREFFWiw4REFBQzNDLG1EQUFLQTt3Q0FDSnlELEtBQUtyRCx3REFBYUE7d0NBQ2xCc0QsS0FBSTt3Q0FDSmYsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3hCO0dBckVNbEI7S0FBQUE7QUF1RU4sK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9ob21lL3Rlc3RpbW9uaWFscy5qc3g/MzhmNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjaGV2cm9uX2xlZnQsIGNoZXZyb25fcmlnaHQsIHBhcnRuZXJfc3ZnLCB2b2x0cm9uX3N2ZyB9IGZyb20gJy4uLy4uL2Fzc2V0cy9pY29ucyc7XG5pbXBvcnQgeyBvbHVtaWRlLCBDYXJkUGhvbmUgfSBmcm9tICcuLi8uLi9hc3NldHMvaW1hZ2UnO1xuaW1wb3J0IHsgU21hbGxIZWFkaW5nIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cyc7XG5pbXBvcnQgcGFyc2UgZnJvbSAnaHRtbC1yZWFjdC1wYXJzZXInO1xuaW1wb3J0IFN3aXBlckNvcmUsIHsgQ29udHJvbGxlciwgQXV0b3BsYXksIEVmZmVjdEZhZGUsIE5hdmlnYXRpb24gfSBmcm9tICdzd2lwZXInO1xuaW1wb3J0IHsgU3dpcGVyLCBTd2lwZXJTbGlkZSB9IGZyb20gJ3N3aXBlci9yZWFjdCc7XG5cbi8vIEltcG9ydCBTd2lwZXIgc3R5bGVzXG5pbXBvcnQgJ3N3aXBlci9jc3MnO1xuaW1wb3J0ICdzd2lwZXIvY3NzL3BhZ2luYXRpb24nO1xuaW1wb3J0ICdzd2lwZXIvY3NzL2F1dG9wbGF5JztcblxuLy8gaW1wb3J0IHJlcXVpcmVkIG1vZHVsZXNcbmltcG9ydCB7IFBhZ2luYXRpb24gfSBmcm9tICdzd2lwZXInO1xuY29uc3QgVGVzdGkgPSBbXG4gIHtcbiAgICBuYW1lOiAnT2x1bWlkZSBTb3lvbWJvJyxcbiAgICBwb3N0aW9uOiAnQ28tRm91bmRlciwgVm9sdHJvbiBDYXBpdGFsJyxcbiAgICBsb2dvOiB2b2x0cm9uX3N2ZyxcbiAgICBwYXJhOiBgU2luY2Ugd2Ugc3RhcnRlZCB1c2luZyBCdWpldGksIHdl4oCZdmUgaGFkIHBlYWNlIG9mIG1pbmQuXG4gICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ub3JtYWxcIj5BbGwgbXkgZXhwZW5zZXMgYXJlIHRyYWNrZWQgZWFzaWx5IGFuZCBJIGNhbiBzZWUgdGhlbSBpbiByZWFsIHRpbWUuPC9zcGFuPmAsXG4gICAgaW1nU3JjOiBvbHVtaWRlLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ0FudGhvbnkgRGFuaWVsJyxcbiAgICBwb3N0aW9uOiAnQ28tRm91bmRlciwgVm9sdHJvbiBDYXBpdGFsJyxcbiAgICBsb2dvOiB2b2x0cm9uX3N2ZyxcbiAgICBwYXJhOiBgVGhlIG1hZ2ljIGlzIHRvIHVzaW5nIEJ1amV0aSwgd2XigJl2ZSBoYWQgcGVhY2Ugb2YgbWluZC5cbiAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LW5vcm1hbFwiPkFsbCBteSBleHBlbnNlcyBhcmUgdHJhY2tlZCBlYXNpbHkgYW5kIEkgY2FuIHNlZSB0aGVtIGluIHJlYWwgdGltZS48L3NwYW4+YCxcbiAgICBpbWdTcmM6IG9sdW1pZGUsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnT2xhYmlzaSBTYW1zb24nLFxuICAgIHBvc3Rpb246ICdDby1Gb3VuZGVyLCBWb2x0cm9uIENhcGl0YWwnLFxuICAgIGxvZ286IHZvbHRyb25fc3ZnLFxuICAgIHBhcmE6IGBTaW5jZSB3ZSBzdGFydGVkIHVzaW5nIEJ1amV0aSwgd2XigJl2ZSBoYWQgcGVhY2Ugb2YgbWluZC5cbiAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LW5vcm1hbFwiPkFsbCBteSBleHBlbnNlcyBhcmUgdHJhY2tlZCBlYXNpbHkgYW5kIEkgY2FuIHNlZSB0aGVtIGluIHJlYWwgdGltZS48L3NwYW4+YCxcbiAgICBpbWdTcmM6IG9sdW1pZGUsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnT2x1bWlkZSBNYW5pJyxcbiAgICBwb3N0aW9uOiAnQ28tRm91bmRlciwgVm9sdHJvbiBDYXBpdGFsJyxcbiAgICBsb2dvOiB2b2x0cm9uX3N2ZyxcbiAgICBwYXJhOiBgU2luY2Ugd2Ugc3RhcnRlZCB1c2luZyBCdWpldGksIHdl4oCZdmUgaGFkIHBlYWNlIG9mIG1pbmQuXG4gICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ub3JtYWxcIj5BbGwgbXkgZXhwZW5zZXMgYXJlIHRyYWNrZWQgZWFzaWx5IGFuZCBJIGNhbiBzZWUgdGhlbSBpbiByZWFsIHRpbWUuPC9zcGFuPmAsXG4gICAgaW1nU3JjOiBvbHVtaWRlLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ09sdW1pZGUgSm9lJyxcbiAgICBwb3N0aW9uOiAnQ28tRm91bmRlciwgVm9sdHJvbiBDYXBpdGFsJyxcbiAgICBsb2dvOiB2b2x0cm9uX3N2ZyxcbiAgICBwYXJhOiBgU2luY2Ugd2Ugc3RhcnRlZCB1c2luZyBCdWpldGksIHdl4oCZdmUgaGFkIHBlYWNlIG9mIG1pbmQuXG4gICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ub3JtYWxcIj5BbGwgbXkgZXhwZW5zZXMgYXJlIHRyYWNrZWQgZWFzaWx5IGFuZCBJIGNhbiBzZWUgdGhlbSBpbiByZWFsIHRpbWUuPC9zcGFuPmAsXG4gICAgaW1nU3JjOiBvbHVtaWRlLFxuICB9LFxuXTtcblxuY29uc3QgVGVzdGltb25pYWxzID0gKCkgPT4ge1xuICBjb25zdCBbY29udHJvbGxlZFN3aXBlciwgc2V0Q29udHJvbGxlZFN3aXBlcl0gPSB1c2VTdGF0ZSgwKTtcbiAgbGV0IGNoYW5nZVRleHQgPSBUZXN0aVtjb250cm9sbGVkU3dpcGVyXTtcbiAgU3dpcGVyQ29yZS51c2UoW0F1dG9wbGF5XSk7XG4gIGNvbnN0IHBhcmFtcyA9IHtcbiAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgIHNwYWNlQmV0d2VlbjogMTAsXG4gICAgbG9vcDogZmFsc2UsXG4gICAgbW9kdWxlczogW1BhZ2luYXRpb24sIENvbnRyb2xsZXIsIEVmZmVjdEZhZGUsIE5hdmlnYXRpb25dLFxuICAgIGVmZmVjdDogJ2ZhZGUnLFxuICAgIG5hdmlnYXRpb246IHtcbiAgICAgIG5leHRFbDogJy5pbWFnZS1zd2lwZXItYnV0dG9uLW5leHQnLFxuICAgICAgcHJldkVsOiAnLmltYWdlLXN3aXBlci1idXR0b24tcHJldicsXG4gICAgICBkaXNhYmxlZENsYXNzOiAnc3dpcGVyLWJ1dHRvbi1kaXNhYmxlZCcsXG4gICAgfSxcbiAgfTtcbiAgY29uc29sZS5sb2coY29udHJvbGxlZFN3aXBlcik7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gZmxleCBmbGV4LWNvbCBweC01IHB5LTI0XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMyBtYi0yMFwiPlxuICAgICAgICA8U21hbGxIZWFkaW5nIHN2Zz17cGFydG5lcl9zdmd9IHRpdGxlPVwiUGFydG5lcnNcIiBjb2xvcj1cIiNEMjhCMjhcIiAvPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC01eGwgZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktOTAwXCI+SGVyZeKAmXMgd2hhdCB0aGV5IHNheSB7J1wiJ308L2gxPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBtZDpncmlkLWNvbHMtMiBpdGVtcy1jZW50ZXIgYmctWyNGQkY1RUNdIHJvdW5kZWQtM3hsIHJlbGF0aXZlIFwiPlxuICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJtaW4taC1mdWxsIHctZnVsbFwiPiAqL31cbiAgICAgICAgPFN3aXBlclxuICAgICAgICAgIHsuLi5wYXJhbXN9XG4gICAgICAgICAgY29udHJvbGxlcj17eyBjb250cm9sOiBjb250cm9sbGVkU3dpcGVyIH19XG4gICAgICAgICAgb25TbGlkZUNoYW5nZT17KGUpID0+IHNldENvbnRyb2xsZWRTd2lwZXIoZS5yZWFsSW5kZXgpfVxuICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCJcbiAgICAgICAgICAvLyBlZmZlY3Q9XCJmYWRlXCJcbiAgICAgICAgPlxuICAgICAgICAgIHtUZXN0aS5tYXAoKGl0ZW1zLCBpKSA9PiAoXG4gICAgICAgICAgICA8U3dpcGVyU2xpZGUga2V5PXtpfT5cbiAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgc3JjPXtpdGVtcy5pbWdTcmN9XG4gICAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvYmplY3QtY292ZXIgdy1mdWxsIG1heC13LXhsIHJvdW5kZWQtdC0zeGwgaC1maXQgbWQ6cm91bmRlZC1ub25lIG1kOnJvdW5kZWQtbC0zeGwgc3RhdGljXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvU3dpcGVyU2xpZGU+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvU3dpcGVyPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW4gcHItMjggcHktMjAgbGVhZGluZy1ub3JtYWxcIj5cbiAgICAgICAgICA8SW1hZ2Ugc3JjPXtjaGFuZ2VUZXh0LmxvZ299IGFsdD1cIlwiIGNsYXNzTmFtZT1cIm1iLTEwXCIgLz5cblxuICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJ0ZXh0LVs0MnB4XSBmb250LXNlbWlib2xkIHRyYWNraW5nLXRpZ2h0ZXIgdGV4dC1ncmF5LTkwMFwiPntwYXJzZShjaGFuZ2VUZXh0LnBhcmEpfTwvaDU+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS04XCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi0zIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTgwMCBcIj5cbiAgICAgICAgICAgICAge2NoYW5nZVRleHQubmFtZX0gPGJyIC8+IDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbm9ybWFsIG10LTJcIj57Y2hhbmdlVGV4dC5wb3N0aW9ufTwvc3Bhbj5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTRcIj5cbiAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICBzcmM9e2NoZXZyb25fbGVmdH1cbiAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1hZ2Utc3dpcGVyLWJ1dHRvbi1wcmV2ICBzd2lwZXItYnV0dG9uLWRpc2FibGVkIGJnLWJsYWNrIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHAtMiBoLTggdy04IHJvdW5kZWQtZnVsbCBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgIHNyYz17Y2hldnJvbl9yaWdodH1cbiAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1hZ2Utc3dpcGVyLWJ1dHRvbi1uZXh0IHN3aXBlci1idXR0b24tZGlzYWJsZWQgYmctYmxhY2sgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgcC0yIGgtOCB3LTggcm91bmRlZC1mdWxsIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGVzdGltb25pYWxzO1xuIl0sIm5hbWVzIjpbIkltYWdlIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImNoZXZyb25fbGVmdCIsImNoZXZyb25fcmlnaHQiLCJwYXJ0bmVyX3N2ZyIsInZvbHRyb25fc3ZnIiwib2x1bWlkZSIsIkNhcmRQaG9uZSIsIlNtYWxsSGVhZGluZyIsInBhcnNlIiwiU3dpcGVyQ29yZSIsIkNvbnRyb2xsZXIiLCJBdXRvcGxheSIsIkVmZmVjdEZhZGUiLCJOYXZpZ2F0aW9uIiwiU3dpcGVyIiwiU3dpcGVyU2xpZGUiLCJQYWdpbmF0aW9uIiwiVGVzdGkiLCJuYW1lIiwicG9zdGlvbiIsImxvZ28iLCJwYXJhIiwiaW1nU3JjIiwiVGVzdGltb25pYWxzIiwiY29udHJvbGxlZFN3aXBlciIsInNldENvbnRyb2xsZWRTd2lwZXIiLCJjaGFuZ2VUZXh0IiwidXNlIiwicGFyYW1zIiwic2xpZGVzUGVyVmlldyIsInNwYWNlQmV0d2VlbiIsImxvb3AiLCJtb2R1bGVzIiwiZWZmZWN0IiwibmF2aWdhdGlvbiIsIm5leHRFbCIsInByZXZFbCIsImRpc2FibGVkQ2xhc3MiLCJjb25zb2xlIiwibG9nIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsInN2ZyIsInRpdGxlIiwiY29sb3IiLCJoMSIsImNvbnRyb2xsZXIiLCJjb250cm9sIiwib25TbGlkZUNoYW5nZSIsImUiLCJyZWFsSW5kZXgiLCJtYXAiLCJpdGVtcyIsImkiLCJzcmMiLCJhbHQiLCJoNSIsInAiLCJiciIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./containers/home/testimonials.jsx\n"));

/***/ })

});