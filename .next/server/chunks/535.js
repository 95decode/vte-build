exports.id = 535;
exports.ids = [535];
exports.modules = {

/***/ 3430:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2021);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7987);
/* harmony import */ var _lang_English__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8875);
/* harmony import */ var _lang_Korean__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4326);
/* harmony import */ var _lang_Chinese__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6634);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([i18next__WEBPACK_IMPORTED_MODULE_0__, react_i18next__WEBPACK_IMPORTED_MODULE_1__]);
([i18next__WEBPACK_IMPORTED_MODULE_0__, react_i18next__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const resources = {
    en: {
        translation: _lang_English__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z
    },
    ko: {
        translation: _lang_Korean__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z
    },
    cn: {
        translation: _lang_Chinese__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z
    }
};
i18next__WEBPACK_IMPORTED_MODULE_0__["default"].use(react_i18next__WEBPACK_IMPORTED_MODULE_1__.initReactI18next).init({
    resources: resources,
    lng: "ko",
    fallbackLng: {
        en: [
            "en"
        ],
        ko: [
            "ko"
        ],
        cn: [
            "cn"
        ],
        default: [
            "ko"
        ]
    },
    defaultNS: "translation",
    ns: "translation",
    keySeparator: ".",
    interpolation: {
        escapeValue: false
    },
    react: {
        useSuspense: false
    }
});
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (i18n)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5141:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ Contact)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);


const Contact = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "z-30 w-[120px] h-[120px] bg-white rounded-full flex items-center justify-center hover:cursor-pointer fixed bottom-[50px] right-[110px]",
        onClick: ()=>{
            window.open("https://pf.kakao.com/_yxjsAG/chat");
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
            src: `/images/Contact.png`,
            alt: "contact",
            width: 73,
            height: 72
        })
    });
};


/***/ }),

/***/ 6634:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Chinese = {
    test: {
        test: "CH"
    },
    word: {
        company: "COMPANY",
        products: "PRODUCTS",
        support: "SUPPORT",
        download: "download",
        name: "Name",
        phone: "Phone",
        email: "Email",
        inquiry: "Inquriy",
        subject: "Subject",
        message: "Message",
        receipt: "Receipt",
        cancellation: "Cancellation",
        directInput: "Direct input"
    },
    glass: {
        "1": {
            title: "Optical Lens",
            subTitle: "Aspherical Lens",
            description: "FOO"
        },
        "2": {
            title: "2D/3D Glass",
            subTitle: "Home Appliance",
            description: "BAR"
        },
        "3": {
            title: "Touch Glass",
            subTitle: "In-vehicle Infotainment",
            description: "BAZ"
        },
        "4": {
            title: "Hybrid Glass",
            subTitle: "Low-Emissivity Glass",
            description: "QUX"
        }
    },
    screen: {
        "1": "Aspherical Lens",
        "2": "Home Appliance",
        "3": "Hybrid Glass"
    },
    flow: {
        title: "We are a pioneer in Glass Technology.",
        subTitle: "VTE Corp is a leading innovator in materials industry",
        "1": "Raw materials of Glass",
        "2": "Glass Cutting",
        "3": "CNC",
        "4": "Temper",
        "5": "Press",
        "6": "AF Coating",
        "6sub": "(Anti-Fingerprint)",
        "7": "Inspection/Cleaning",
        "8": "Packing/Shipment"
    },
    company: {
        title: "COMPANY HISTORY",
        "2012": {
            "1": "• Construct and produce reinforced glass in Suzhou.",
            "2": "- Exclusive contractor of TYE.",
            "3": "- Supply entire quantity of GS / GV / CS / SDC series.",
            "4": "• Supplied Samsung SDC TABLET PC COVER GLASS (ELK)."
        },
        "2013": {
            "1": "• Establish corporation of HDC in China.",
            "2": "• Construct mass production line for JCOP Optical lens.",
            "3": "• Establish VTE CORP, developed a glass for Samsung Electronics (Print division).",
            "4": "• Develop subsidiary materials and supplied to Hitechno-cell Corp Print division.",
            "5": "• Registered to official supplier of Samsung Electronics (print division)."
        },
        "2014": {
            "1": "• Supplied silicon conductive tape (Samsung electronics print division)."
        },
        "2015": {
            "1": "• Contract MOU with Suzhou Padnic Conductive Material Co., Ltd.",
            "2": "- Supplied Graphite / silicon PAD (LGD)."
        },
        "2017": {
            "1": "• Samsung Electronics (Consumer Electronics division)",
            "2": "parts registration approved (ELK in progress)",
            "3": "• Registered to official supplier of LG Electronics(Consumer Electronics division)",
            "4": "(Exclusive supplier of SMART INSTA VIEW model)"
        },
        "2018": {
            "1": "• Registered to HP Print solution vender (Tactic supplier of LSU_Polygon Mirror)",
            "2": "• Supply furniture glass (IKEA) / exported to Vietnam",
            "3": "• Supply IVI glass , HUD cover glass (HYUNDAI MOBIS)"
        },
        "2019": {
            "1": "• Tactic supplier of collimator glass HP / regiesterd aspherical rens for Canon.",
            "2": "• Exclusive supplier of Samsung Electronics (Consumer Electronics division)",
            "3": "family hub 4.0 model.",
            "4": "• Mass production supplier of LG Electronics CineBeam 4K model.",
            "5": "• Participate develop project of lens(CONIC type) with HYUNDAI."
        },
        "2020": {
            "1": "• Supply quartz for manufacturing artificial optics. (TE Bios)",
            "2": "• Supply robby phone supply (KD Navien).",
            "3": "• Supply 3D GLASS etching/pattern GLASS (Astell&Kern)"
        },
        "2021": {
            "1": "• Supply quartz glass supply (KD Network).",
            "2": "• Supply quartz glass (KD Everon).",
            "3": "• Supply quartz glass (KD Navien).",
            "4": "• Supply OVEN GLASS (Samsung Electronics SEMA CORP)."
        },
        "2023": {
            "1": "• Supply and developed 3D air hood for kitchen oven (KD Navien).",
            "2": "• Develop Borosilicate Glass and UV Glass (Samsung Electronics).",
            "3": "• Develop vehicle sensor glass (in progress)",
            "4": "• Supply glass for FCBGA.",
            "5": "• Develop Composite Material and Specialty Glass."
        }
    },
    products: {
        title: "PRODUCTS"
    },
    support: {
        title: "SUPPORT",
        description: {
            "1": "We're here to help.",
            "2": "Check out our customer service contact information and product-specification below.",
            "3": "If you can't find what you need, just fill out our contact form and a friendly representative will reach out soon."
        },
        tab: {
            "1": "Customer Support",
            "2": "Contact Us"
        }
    },
    mail: {
        success: "Message sent successfully!",
        fail: "Message sending failed..."
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Chinese);


/***/ }),

/***/ 8875:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const English = {
    test: {
        test: "영어"
    },
    word: {
        company: "COMPANY",
        products: "PRODUCTS",
        support: "SUPPORT",
        download: "download",
        name: "Name",
        phone: "Phone",
        email: "Email",
        inquiry: "Inquriy",
        subject: "Subject",
        message: "Message",
        receipt: "Receipt",
        cancellation: "Cancellation",
        directInput: "Direct input"
    },
    glass: {
        "1": {
            title: "Optical Lens",
            subTitle: "Aspherical Lens",
            description: "FOO"
        },
        "2": {
            title: "2D/3D Glass",
            subTitle: "Home Appliance",
            description: "BAR"
        },
        "3": {
            title: "Touch Glass",
            subTitle: "In-vehicle Infotainment",
            description: "BAZ"
        },
        "4": {
            title: "Hybrid Glass",
            subTitle: "Low-Emissivity Glass",
            description: "QUX"
        }
    },
    screen: {
        "1": "Aspherical Lens",
        "2": "Home Appliance",
        "3": "Hybrid Glass"
    },
    flow: {
        title: "We are a pioneer in Glass Technology.",
        subTitle: "VTE Corp is a leading innovator in materials industry",
        "1": "Raw materials of Glass",
        "2": "Glass Cutting",
        "3": "CNC",
        "4": "Temper",
        "5": "Press",
        "6": "AF Coating",
        "6sub": "(Anti-Fingerprint)",
        "7": "Inspection/Cleaning",
        "8": "Packing/Shipment"
    },
    company: {
        title: "COMPANY HISTORY",
        "2012": {
            "1": "• Construct and produce reinforced glass in Suzhou.",
            "2": "- Exclusive contractor of TYE.",
            "3": "- Supply entire quantity of GS / GV / CS / SDC series.",
            "4": "• Supplied Samsung SDC TABLET PC COVER GLASS (ELK)."
        },
        "2013": {
            "1": "• Establish corporation of HDC in China.",
            "2": "• Construct mass production line for JCOP Optical lens.",
            "3": "• Establish VTE CORP, developed a glass for Samsung Electronics (Print division).",
            "4": "• Develop subsidiary materials and supplied to Hitechno-cell Corp Print division.",
            "5": "• Registered to official supplier of Samsung Electronics (print division)."
        },
        "2014": {
            "1": "• Supplied silicon conductive tape (Samsung electronics print division)."
        },
        "2015": {
            "1": "• Contract MOU with Suzhou Padnic Conductive Material Co., Ltd.",
            "2": "- Supplied Graphite / silicon PAD (LGD)."
        },
        "2017": {
            "1": "• Samsung Electronics (Consumer Electronics division)",
            "2": "parts registration approved (ELK in progress)",
            "3": "• Registered to official supplier of LG Electronics(Consumer Electronics division)",
            "4": "(Exclusive supplier of SMART INSTA VIEW model)"
        },
        "2018": {
            "1": "• Registered to HP Print solution vender (Tactic supplier of LSU_Polygon Mirror)",
            "2": "• Supply furniture glass (IKEA) / exported to Vietnam",
            "3": "• Supply IVI glass , HUD cover glass (HYUNDAI MOBIS)"
        },
        "2019": {
            "1": "• Tactic supplier of collimator glass HP / regiesterd aspherical rens for Canon.",
            "2": "• Exclusive supplier of Samsung Electronics (Consumer Electronics division)",
            "3": "family hub 4.0 model.",
            "4": "• Mass production supplier of LG Electronics CineBeam 4K model.",
            "5": "• Participate develop project of lens(CONIC type) with HYUNDAI."
        },
        "2020": {
            "1": "• Supply quartz for manufacturing artificial optics. (TE Bios)",
            "2": "• Supply robby phone supply (KD Navien).",
            "3": "• Supply 3D GLASS etching/pattern GLASS (Astell&Kern)"
        },
        "2021": {
            "1": "• Supply quartz glass supply (KD Network).",
            "2": "• Supply quartz glass (KD Everon).",
            "3": "• Supply quartz glass (KD Navien).",
            "4": "• Supply OVEN GLASS (Samsung Electronics SEMA CORP)."
        },
        "2023": {
            "1": "• Supply and developed 3D air hood for kitchen oven (KD Navien).",
            "2": "• Develop Borosilicate Glass and UV Glass (Samsung Electronics).",
            "3": "• Develop vehicle sensor glass (in progress)",
            "4": "• Supply glass for FCBGA.",
            "5": "• Develop Composite Material and Specialty Glass."
        }
    },
    products: {
        title: "PRODUCTS"
    },
    support: {
        title: "SUPPORT",
        description: {
            "1": "We're here to help.",
            "2": "Check out our customer service contact information and product-specification below.",
            "3": "If you can't find what you need, just fill out our contact form and a friendly representative will reach out soon."
        },
        tab: {
            "1": "Customer Support",
            "2": "Contact Us"
        }
    },
    mail: {
        success: "Message sent successfully!",
        fail: "Message sending failed..."
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (English);


/***/ }),

/***/ 4326:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Korean = {
    test: {
        test: "한글"
    },
    word: {
        company: "COMPANY",
        products: "PRODUCTS",
        support: "SUPPORT",
        download: "download",
        profile: "Profile",
        name: "Name",
        phone: "Phone",
        email: "Email",
        inquiry: "Inquriy",
        subject: "Subject",
        message: "Message",
        receipt: "Receipt",
        cancellation: "Cancellation",
        directInput: "Direct input"
    },
    glass: {
        "1": {
            title: "Optical Lens",
            subTitle: "Aspherical Lens",
            description: "FOO"
        },
        "2": {
            title: "2D/3D Glass",
            subTitle: "Home Appliance",
            description: "BAR"
        },
        "3": {
            title: "Touch Glass",
            subTitle: "In-vehicle Infotainment",
            description: "BAZ"
        },
        "4": {
            title: "Hybrid Glass",
            subTitle: "Low-Emissivity Glass",
            description: "QUX"
        }
    },
    screen: {
        "1": "Aspherical Lens",
        "2": "Home Appliance",
        "3": "Hybrid Glass"
    },
    flow: {
        title: "We are a pioneer in Glass Technology.",
        subTitle: "VTE Corp is a leading innovator in materials industry",
        "1": "Raw materials of Glass",
        "2": "Glass Cutting",
        "3": "CNC",
        "4": "Temper",
        "5": "Press",
        "6": "AF Coating",
        "6sub": "(Anti-Fingerprint)",
        "7": "Inspection/Cleaning",
        "8": "Packing/Shipment"
    },
    company: {
        title: "COMPANY HISTORY",
        "2012": {
            "1": "• Construct and produce reinforced glass in Suzhou.",
            "2": "- Exclusive contractor of TYE.",
            "3": "- Supply entire quantity of GS / GV / CS / SDC series.",
            "4": "• Supplied Samsung SDC TABLET PC COVER GLASS (ELK)."
        },
        "2013": {
            "1": "• Establish corporation of HDC in China.",
            "2": "• Construct mass production line for JCOP Optical lens.",
            "3": "• Establish VTE CORP, developed a glass for Samsung Electronics (Print division).",
            "4": "• Develop subsidiary materials and supplied to Hitechno-cell Corp Print division.",
            "5": "• Registered to official supplier of Samsung Electronics (print division)."
        },
        "2014": {
            "1": "• Supplied silicon conductive tape (Samsung electronics print division)."
        },
        "2015": {
            "1": "• Contract MOU with Suzhou Padnic Conductive Material Co., Ltd.",
            "2": "- Supplied Graphite / silicon PAD (LGD)."
        },
        "2017": {
            "1": "• Samsung Electronics (Consumer Electronics division)",
            "2": "parts registration approved (ELK in progress)",
            "3": "• Registered to official supplier of LG Electronics(Consumer Electronics division)",
            "4": "(Exclusive supplier of SMART INSTA VIEW model)"
        },
        "2018": {
            "1": "• Registered to HP Print solution vender (Tactic supplier of LSU_Polygon Mirror)",
            "2": "• Supply furniture glass (IKEA) / exported to Vietnam",
            "3": "• Supply IVI glass , HUD cover glass (HYUNDAI MOBIS)"
        },
        "2019": {
            "1": "• Tactic supplier of collimator glass HP / regiesterd aspherical rens for Canon.",
            "2": "• Exclusive supplier of Samsung Electronics (Consumer Electronics division)",
            "3": "family hub 4.0 model.",
            "4": "• Mass production supplier of LG Electronics CineBeam 4K model.",
            "5": "• Participate develop project of lens(CONIC type) with HYUNDAI."
        },
        "2020": {
            "1": "• Supply quartz for manufacturing artificial optics. (TE Bios)",
            "2": "• Supply robby phone supply (KD Navien).",
            "3": "• Supply 3D GLASS etching/pattern GLASS (Astell&Kern)"
        },
        "2021": {
            "1": "• Supply quartz glass supply (KD Network).",
            "2": "• Supply quartz glass (KD Everon).",
            "3": "• Supply quartz glass (KD Navien).",
            "4": "• Supply OVEN GLASS (Samsung Electronics SEMA CORP)."
        },
        "2023": {
            "1": "• Supply and developed 3D air hood for kitchen oven (KD Navien).",
            "2": "• Develop Borosilicate Glass and UV Glass (Samsung Electronics).",
            "3": "• Develop vehicle sensor glass (in progress)",
            "4": "• Supply glass for FCBGA.",
            "5": "• Develop Composite Material and Specialty Glass."
        }
    },
    products: {
        title: "PRODUCTS"
    },
    support: {
        title: "SUPPORT",
        description: {
            "1": "We're here to help.",
            "2": "Check out our customer service contact information and product-specification below.",
            "3": "If you can't find what you need, just fill out our contact form and a friendly representative will reach out soon."
        },
        tab: {
            "1": "Customer Support",
            "2": "Contact Us"
        }
    },
    mail: {
        success: "Message sent successfully!",
        fail: "Message sending failed..."
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Korean);


/***/ }),

/***/ 9212:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _next_font_local_target_css_path_src_pages_app_tsx_import_arguments_src_path_public_fonts_AppleSDGothicNeoB_ttf_weight_400_variable_font_apple_variableName_Applefonts___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(341);
/* harmony import */ var _next_font_local_target_css_path_src_pages_app_tsx_import_arguments_src_path_public_fonts_AppleSDGothicNeoB_ttf_weight_400_variable_font_apple_variableName_Applefonts___WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_next_font_local_target_css_path_src_pages_app_tsx_import_arguments_src_path_public_fonts_AppleSDGothicNeoB_ttf_weight_400_variable_font_apple_variableName_Applefonts___WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _next_font_local_target_css_path_src_pages_app_tsx_import_arguments_src_path_public_fonts_GmarketSansTTFMedium_ttf_weight_400_variable_font_gmarket_variableName_GmarketFonts___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(872);
/* harmony import */ var _next_font_local_target_css_path_src_pages_app_tsx_import_arguments_src_path_public_fonts_GmarketSansTTFMedium_ttf_weight_400_variable_font_gmarket_variableName_GmarketFonts___WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_next_font_local_target_css_path_src_pages_app_tsx_import_arguments_src_path_public_fonts_GmarketSansTTFMedium_ttf_weight_400_variable_font_gmarket_variableName_GmarketFonts___WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _next_font_local_target_css_path_src_pages_app_tsx_import_arguments_src_path_public_fonts_GmarketSansTTFBold_ttf_weight_400_variable_font_gmarketBold_variableName_GmarketBoldFonts___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2434);
/* harmony import */ var _next_font_local_target_css_path_src_pages_app_tsx_import_arguments_src_path_public_fonts_GmarketSansTTFBold_ttf_weight_400_variable_font_gmarketBold_variableName_GmarketBoldFonts___WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_next_font_local_target_css_path_src_pages_app_tsx_import_arguments_src_path_public_fonts_GmarketSansTTFBold_ttf_weight_400_variable_font_gmarketBold_variableName_GmarketBoldFonts___WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _next_font_local_target_css_path_src_pages_app_tsx_import_arguments_src_path_public_fonts_NotoSansRegular_ttf_weight_400_variable_font_notoSans_variableName_NotoSansRegularFonts___WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3825);
/* harmony import */ var _next_font_local_target_css_path_src_pages_app_tsx_import_arguments_src_path_public_fonts_NotoSansRegular_ttf_weight_400_variable_font_notoSans_variableName_NotoSansRegularFonts___WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_next_font_local_target_css_path_src_pages_app_tsx_import_arguments_src_path_public_fonts_NotoSansRegular_ttf_weight_400_variable_font_notoSans_variableName_NotoSansRegularFonts___WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _next_font_local_target_css_path_src_pages_app_tsx_import_arguments_src_path_public_fonts_NotoSansBold_ttf_weight_700_variable_font_notoSansBold_variableName_NotoSansBoldFonts___WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5123);
/* harmony import */ var _next_font_local_target_css_path_src_pages_app_tsx_import_arguments_src_path_public_fonts_NotoSansBold_ttf_weight_700_variable_font_notoSansBold_variableName_NotoSansBoldFonts___WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_next_font_local_target_css_path_src_pages_app_tsx_import_arguments_src_path_public_fonts_NotoSansBold_ttf_weight_700_variable_font_notoSansBold_variableName_NotoSansBoldFonts___WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(108);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3430);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5141);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([i18n__WEBPACK_IMPORTED_MODULE_2__]);
i18n__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










const App = ({ Component, pageProps })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "VTE"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: "VTE corporation"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `${(_next_font_local_target_css_path_src_pages_app_tsx_import_arguments_src_path_public_fonts_GmarketSansTTFMedium_ttf_weight_400_variable_font_gmarket_variableName_GmarketFonts___WEBPACK_IMPORTED_MODULE_5___default().variable)} ${(_next_font_local_target_css_path_src_pages_app_tsx_import_arguments_src_path_public_fonts_GmarketSansTTFBold_ttf_weight_400_variable_font_gmarketBold_variableName_GmarketBoldFonts___WEBPACK_IMPORTED_MODULE_6___default().variable)} ${(_next_font_local_target_css_path_src_pages_app_tsx_import_arguments_src_path_public_fonts_AppleSDGothicNeoB_ttf_weight_400_variable_font_apple_variableName_Applefonts___WEBPACK_IMPORTED_MODULE_7___default().variable)} ${(_next_font_local_target_css_path_src_pages_app_tsx_import_arguments_src_path_public_fonts_NotoSansRegular_ttf_weight_400_variable_font_notoSans_variableName_NotoSansRegularFonts___WEBPACK_IMPORTED_MODULE_8___default().variable)} ${(_next_font_local_target_css_path_src_pages_app_tsx_import_arguments_src_path_public_fonts_NotoSansBold_ttf_weight_700_variable_font_notoSansBold_variableName_NotoSansBoldFonts___WEBPACK_IMPORTED_MODULE_9___default().variable)} font-gmarket`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                    ...pageProps
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Contact__WEBPACK_IMPORTED_MODULE_4__/* .Contact */ .r, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3104:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6859);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);


const Document = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {
        className: "bg-default",
        lang: "en",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("body", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {})
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Document);


/***/ }),

/***/ 108:
/***/ (() => {



/***/ })

};
;