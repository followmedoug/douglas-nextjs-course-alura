"use strict";
(() => {
var exports = {};
exports.id = 746;
exports.ids = [746];
exports.modules = {

/***/ 895:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ faq),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/components/Footer/index.js
var Footer = __webpack_require__(141);
// EXTERNAL MODULE: ./src/components/Link/index.js + 1 modules
var Link = __webpack_require__(0);
// EXTERNAL MODULE: ./src/components/theme/theme.js
var theme = __webpack_require__(770);
// EXTERNAL MODULE: ./src/components/Component/index.js
var Component = __webpack_require__(677);
;// CONCATENATED MODULE: ./src/Screens/FAQScreen/index.js





function FAQScreen({ faq: faq1  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Component/* Box */.xu, {
        styleSheet: {
            backgroundColor: theme/* theme.colors.neutral.050 */.r.colors.neutral["050"]
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Component/* Box */.xu, {
                as: "main",
                styleSheet: {
                    flex: 1,
                    maxWidth: theme/* theme.space.xcontainer_xl */.r.space.xcontainer_xl,
                    marginHorizontal: "auto",
                    paddingHorizontal: {
                        xs: theme/* theme.space.x4 */.r.space.x4,
                        sm: theme/* theme.space.x6 */.r.space.x6,
                        lg: theme/* theme.space.x8 */.r.space.x8
                    },
                    paddingVertical: {
                        xs: theme/* theme.space.x16 */.r.space.x16,
                        lg: theme/* theme.space.x20 */.r.space.x20
                    }
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Component/* Box */.xu, {
                    styleSheet: {
                        display: "grid",
                        gridTemplateColumns: {
                            lg: "repeat(3,minmax(0,1fr))"
                        },
                        gap: {
                            lg: theme/* theme.space.x8 */.r.space.x8
                        }
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Component/* Box */.xu, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(Component/* Text */.xv, {
                                    as: "h2",
                                    styleSheet: {
                                        textVariant: theme/* theme.typography.variants.heading2 */.r.typography.variants.heading2,
                                        color: theme/* theme.colors.neutral.900 */.r.colors.neutral[900]
                                    },
                                    children: "FAQ: Perguntas Frequentes"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Component/* Text */.xv, {
                                    as: "p",
                                    styleSheet: {
                                        marginTop: theme/* theme.space.x4 */.r.space.x4,
                                        textVariant: theme/* theme.typography.variants.body1 */.r.typography.variants.body1,
                                        color: theme/* theme.colors.neutral.500 */.r.colors.neutral[500]
                                    },
                                    children: [
                                        "N\xe3o consegue encontrar a resposta que procura? entre em contato com nosso",
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx(Link/* default */.Z, {
                                            href: "mailto:contato@alura.com.br",
                                            styleSheet: {
                                                color: theme/* theme.colors.primary.400 */.r.colors.primary[400],
                                                hover: {
                                                    color: theme/* theme.colors.primary.300 */.r.colors.primary[300]
                                                }
                                            },
                                            children: "time de suporte ao consumidor"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Component/* Text */.xv, {
                                    as: "p",
                                    styleSheet: {
                                        marginTop: theme/* theme.space.x4 */.r.space.x4,
                                        textVariant: theme/* theme.typography.variants.body1 */.r.typography.variants.body1,
                                        color: theme/* theme.colors.neutral.500 */.r.colors.neutral[500]
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Link/* default */.Z, {
                                        href: "/",
                                        styleSheet: {
                                            color: theme/* theme.colors.primary.400 */.r.colors.primary[400],
                                            fontWeight: "500",
                                            hover: {
                                                color: theme/* theme.colors.primary.300 */.r.colors.primary[300]
                                            }
                                        },
                                        children: "Voltar para home"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Component/* Box */.xu, {
                            styleSheet: {
                                marginTop: {
                                    xs: theme/* theme.space.x12 */.r.space.x12,
                                    lg: theme/* theme.space.x0 */.r.space.x0
                                },
                                gridColumn: {
                                    lg: "span 2 / span 2;"
                                }
                            },
                            children: [
                                faq1.length === 0 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Component/* Box */.xu, {
                                    styleSheet: {
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        borderTop: {
                                            xs: `${theme/* theme.space.xpx */.r.space.xpx} solid ${theme/* theme.colors.neutral.200 */.r.colors.neutral[200]}`,
                                            sm: "none"
                                        },
                                        paddingTop: {
                                            xs: theme/* theme.space.x6 */.r.space.x6,
                                            sm: 0
                                        },
                                        borderLeft: {
                                            sm: `${theme/* theme.space.xpx */.r.space.xpx} solid ${theme/* theme.colors.neutral.200 */.r.colors.neutral[200]}`
                                        },
                                        paddingLeft: {
                                            sm: theme/* theme.space.x6 */.r.space.x6
                                        },
                                        textAlign: "center",
                                        minHeight: theme/* theme.space.x1/1 */.r.space["x1/1"]
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(Component/* Text */.xv, {
                                            as: "h1",
                                            styleSheet: {
                                                textVariant: theme/* theme.typography.variants.heading1 */.r.typography.variants.heading1
                                            },
                                            children: "Nada por aqui"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Component/* Text */.xv, {
                                            as: "p",
                                            styleSheet: {
                                                marginTop: theme/* theme.space.x1 */.r.space.x1,
                                                textVariant: theme/* theme.typography.variants.body1 */.r.typography.variants.body1,
                                                color: theme/* theme.colors.neutral.500 */.r.colors.neutral[500]
                                            },
                                            children: "Talvez ainda n\xe3o existam d\xfavidas frequentes."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Component/* Box */.xu, {
                                    as: "dl",
                                    children: faq1.map((faq)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Component/* Box */.xu, {
                                            styleSheet: {
                                                marginBottom: theme/* theme.space.x12 */.r.space.x12
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(Component/* Text */.xv, {
                                                    as: "dt",
                                                    styleSheet: {
                                                        textVariant: theme/* theme.typography.variants.heading4 */.r.typography.variants.heading4,
                                                        color: theme/* theme.colors.neutral.900 */.r.colors.neutral[900]
                                                    },
                                                    children: faq.question
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(Component/* Text */.xv, {
                                                    as: "dd",
                                                    styleSheet: {
                                                        marginTop: theme/* theme.space.x2 */.r.space.x2,
                                                        textVariant: theme/* theme.typography.variants.body1 */.r.typography.variants.body1,
                                                        color: theme/* theme.colors.neutral.500 */.r.colors.neutral[500]
                                                    },
                                                    children: faq.answer
                                                })
                                            ]
                                        }, faq.question)
                                    )
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer/* default */.Z, {})
        ]
    }));
};
FAQScreen.defaultProps = {
    faqs: []
};

;// CONCATENATED MODULE: ./pages/faq.js

/* harmony default export */ const faq = (FAQScreen);
async function getStaticProps() {
    console.log("Em modo DEV, sempre roda! A cada acesso");
    console.log("Roda SOMENTE em build time");
    const FAQ_API_URL = "https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json";
    const faq = await fetch(FAQ_API_URL).then((respostaDoServidor)=>{
        return respostaDoServidor.json();
    }).then((resposta)=>{
        return resposta;
    });
    return {
        props: {
            faq
        }
    };
}


/***/ }),

/***/ 466:
/***/ ((module) => {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ 197:
/***/ ((module) => {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 14:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 20:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 52:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 422:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 816:
/***/ ((module) => {

module.exports = require("styled-jsx/style");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,141,0], () => (__webpack_exec__(895)));
module.exports = __webpack_exports__;

})();