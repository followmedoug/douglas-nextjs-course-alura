"use strict";
exports.id = 0;
exports.ids = [0];
exports.modules = [
/* 0 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Link)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: ./src/components/LinkEstilizado/index.js


const LinkEstilizado = /*#__PURE__*/ external_react_default().forwardRef(({ onClick , children , href , ...props }, ref)=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("a", {
        href: href,
        onClick: onClick,
        ref: ref,
        style: {
            color: 'red'
        },
        ...props,
        children: children
    }));
});
/* harmony default export */ const components_LinkEstilizado = (LinkEstilizado);

;// CONCATENATED MODULE: ./src/components/Link/index.js



function Link({ children , href , ...props }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
        href: href,
        /*#__PURE__*/ passHref: true,
        children: /*#__PURE__*/ jsx_runtime_.jsx(components_LinkEstilizado, {
            ...props,
            children: children
        })
    }));
};


/***/ })
];
;