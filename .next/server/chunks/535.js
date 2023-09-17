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
        className: "z-50 w-[80px] h-[80px] bg-white rounded-full flex items-center justify-center hover:cursor-pointer fixed bottom-[100px] right-[150px]",
        onClick: ()=>{
            window.open("https://pf.kakao.com/_yxjsAG/chat");
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
            src: `/images/Contact.png`,
            alt: "contact",
            width: 49,
            height: 48,
            priority: true
        })
    });
};


/***/ }),

/***/ 6127:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7987);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_i18next__WEBPACK_IMPORTED_MODULE_2__]);
react_i18next__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const Footer = ()=>{
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "w-full h-[230px] bg-black py-[36px] text-vte-gray-7 text-[12px] font-notoSans flex flex-col items-center justify-center",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex gap-[35px]",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-[21px] h-[21px] hover:cursor-pointer",
                        onClick: ()=>{
                            window.open("https://www.facebook.com/profile.php?id=100091921937709");
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                            src: "/images/Facebook.png",
                            width: 10,
                            height: 21,
                            alt: "Facebook"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-[21px] h-[21px] hover:cursor-pointer",
                        onClick: ()=>{
                            window.open("https://instagram.com/vtecorp");
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                            src: "/images/Instagram.png",
                            width: 21,
                            height: 21,
                            alt: "Instagram"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "ml-[5px] w-[21px] h-[21px] hover:cursor-pointer",
                        onClick: ()=>{
                            window.open("https://blog.naver.com/vtecorp");
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                            src: "/images/Blog.png",
                            width: 21,
                            height: 19,
                            alt: "Blog"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mt-[30px]",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-center justify-center gap-[20px]",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex gap-[4px]",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "font-bold",
                                        children: t("word.tel")
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: t("footer.tel")
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex gap-[4px]",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "font-bold",
                                        children: t("word.fax")
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: t("footer.fax")
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "mt-[7px]",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex items-center justify-center gap-[4px]",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "font-bold",
                                    children: t("word.korea")
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    children: t("footer.korea")
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "mt-[3px]",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex items-center justify-center gap-[4px]",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "font-bold",
                                    children: t("word.china")
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    children: t("footer.china")
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mt-[20px]",
                children: t("footer.copyright")
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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
        cancellation: "Cancel",
        directInput: "Direct input",
        more: "MORE >",
        korea: "KOREA",
        china: "CHINA",
        tel: "TEL",
        fax: "FAX",
        contact: "CONTACT US >",
        profile: "Profile"
    },
    glass: {
        "1": {
            title: "Advanced Optics",
            title2: "Aspherical Lens",
            description: "The world's most sophisticated manufacturer of",
            description2: "advanced optical materials.",
            description3: "VTE optic is a leader in providing ",
            description4: "cutting-edge material and optical solutions",
            description5: "that serve a variety of commercial markets ",
            description6: "including, consumer electronics."
        },
        "2": {
            title: "Commercial Parts",
            description: "The glass we manufactures makes up",
            description2: "the entire environment in the world.",
            description3: "VTE's glass technology helps and improves most of",
            description4: "industry's complex challenges."
        },
        "3": {
            title: "Input Device",
            description: "Leading the future technology",
            description2: "through manufacturing advanced glass materials.",
            description3: "VTE' glass shows a vision for easier and",
            description4: "safer ways to connect your astonishing car experience ",
            description5: "with automotive technology.",
            description6: "Think curved, glass surfaces that respond to touch directly",
            description7: "and offers a better viewing experience."
        },
        "4": {
            title: "Hybrid",
            title2: "Low-E Glass",
            description: "Solving the world's energy challenges with",
            description2: "low-emissivity glass technology.",
            description3: "VTE's “Low Emissivity glass” provides",
            description4: "high performance in situations where",
            description5: "temperature separation is desired.",
            description6: "Low-E is used to help meet energy efficiency requirements",
            description7: "by blocking UV light and providing heat insulation.",
            description8: "• High performance of heat insulation (silver coating)",
            description9: "• High temperature heat resistance (1,000 ℃)"
        }
    },
    screen: {
        "1": {
            title: "Advanced",
            title2: "Optics",
            description: "Providing asherical lens for",
            description2: "automotive technology and mobile devices"
        },
        "2": {
            title: "Home",
            title2: "Appliance",
            description: "VTE's glass technology helps and improves most of",
            description2: "industry's complex challenges."
        },
        "3": {
            title: "Hybrid",
            description: "VTE's Low E coated glass is a game changer for",
            description2: "creating better performing homes and spaces."
        }
    },
    flow: {
        title: "We are Pioneer in Glass Material Technology.",
        subTitle: "VTE is a leading innovator in parts and materials industry.",
        subTitle2: "We produce a variety of glass materials and special glass materials.",
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
        title: "PRODUCTS",
        "1": {
            "1": "ASPHERICAL LENS2",
            "2": "ASPHERICAL LENS1",
            "3": "FLAT LENS",
            "4": "FLAT LENS",
            "5": "ASPHERICAL LENS1",
            "6": "ASPHERICAL LENS2",
            title: "Covers every field and applications",
            title2: "High quality, High precision",
            description: "VTE's advanced optics always steps ahead to lead the next-generation of consumer devices. The use of aspherics in an optical system achieves various advantages such as correction of spherical aberration, system miniaturization and weight reduction. Regarding optical design, the use of an aspherical lenses allows the optical system to be reduced in size and weight.",
            description2: "VTE is specialized in the production of aspheric lenses. A finished polished lens has no pores or cracks on a surface as well as the desired shape accuracy and surface quality because we process double-inspection and finishing for more precision."
        },
        "2": {
            "1": "TSP - M",
            "2": "OCA",
            "3": "Black Print",
            "4": "Glass",
            "5": "AF Coating",
            title: "High durability with better design",
            title2: "Leading the future and technology",
            description: "VTE's tempered glass can be applied to various ways in our life style. We believe that glass contributes to showing high-end quality in general home appliances such as oven and refrigerator.",
            description2: "VTE's tempered glass can be applied to kiosk and advanced interactive display."
        },
        "3": {
            "1": "AF Coating",
            "2": "Glass",
            "3": "Black Print",
            "4": "SI - OCA",
            "5": "TSP - M",
            title: "Driving towards the trend",
            title2: "Enhance your driving experience",
            description: "VTE's takes several steps ahead towords to contribute to global automotive technology. We manufacture durable and optically advanced cover glass solution specifically designed for auto interior applications.",
            description2: "VTE's glass solution for automotive is also applied to head-up display."
        },
        "4": {
            "1": "Glass",
            "2": "Siver Coating",
            "3": "Glass",
            title: "Thermal efficiency",
            title2: "Another level of Insulation and heat Resistance",
            description: "VTE manufactures a Low-E glass especially for oven doors with low-emissivity coating, which allows a high flexibility in the design phase of the oven by the customer.",
            description2: "VTE's Low-E glass makes it easy to have heat resistance even at 1000 degrees. This special glass with excellent insulation makes incredible energy efficiency."
        }
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
    },
    footer: {
        tel: ": 054-451-4568",
        fax: ": 054-441-4568",
        korea: ": 22-11, Indong 21-gil, Gumi-si, Gyeongsangbuk-do, Republic of Korea",
        china: ": NO.888 West of Renmin Rd. In West Development Zone Sheyang County 224300 Yancheng City, Jiangsu Prov.China",
        copyright: "Copyright\xa9VTE CORP. ALL RIGHTS RESERVED."
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
        cancellation: "Cancel",
        directInput: "Direct input",
        more: "MORE >",
        korea: "KOREA",
        china: "CHINA",
        tel: "TEL",
        fax: "FAX",
        contact: "CONTACT US >",
        profile: "Profile"
    },
    glass: {
        "1": {
            title: "Advanced Optics",
            title2: "Aspherical Lens",
            description: "The world's most sophisticated manufacturer of",
            description2: "advanced optical materials.",
            description3: "VTE optic is a leader in providing ",
            description4: "cutting-edge material and optical solutions",
            description5: "that serve a variety of commercial markets ",
            description6: "including, consumer electronics."
        },
        "2": {
            title: "Commercial Parts",
            description: "The glass we manufactures makes up",
            description2: "the entire environment in the world.",
            description3: "VTE's glass technology helps and improves most of",
            description4: "industry's complex challenges."
        },
        "3": {
            title: "Input Device",
            description: "Leading the future technology",
            description2: "through manufacturing advanced glass materials.",
            description3: "VTE' glass shows a vision for easier and",
            description4: "safer ways to connect your astonishing car experience ",
            description5: "with automotive technology.",
            description6: "Think curved, glass surfaces that respond to touch directly",
            description7: "and offers a better viewing experience."
        },
        "4": {
            title: "Hybrid",
            title2: "Low-E Glass",
            description: "Solving the world's energy challenges with",
            description2: "low-emissivity glass technology.",
            description3: "VTE's “Low Emissivity glass” provides",
            description4: "high performance in situations where",
            description5: "temperature separation is desired.",
            description6: "Low-E is used to help meet energy efficiency requirements",
            description7: "by blocking UV light and providing heat insulation.",
            description8: "• High performance of heat insulation (silver coating)",
            description9: "• High temperature heat resistance (1,000 ℃)"
        }
    },
    screen: {
        "1": {
            title: "Advanced",
            title2: "Optics",
            description: "Providing asherical lens for",
            description2: "automotive technology and mobile devices"
        },
        "2": {
            title: "Home",
            title2: "Appliance",
            description: "VTE's glass technology helps and improves most of",
            description2: "industry's complex challenges."
        },
        "3": {
            title: "Hybrid",
            description: "VTE's Low E coated glass is a game changer for",
            description2: "creating better performing homes and spaces."
        }
    },
    flow: {
        title: "We are Pioneer in Glass Material Technology.",
        subTitle: "VTE is a leading innovator in parts and materials industry.",
        subTitle2: "We produce a variety of glass materials and special glass materials.",
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
        title: "PRODUCTS",
        "1": {
            "1": "ASPHERICAL LENS2",
            "2": "ASPHERICAL LENS1",
            "3": "FLAT LENS",
            "4": "FLAT LENS",
            "5": "ASPHERICAL LENS1",
            "6": "ASPHERICAL LENS2",
            title: "Covers every field and applications",
            title2: "High quality, High precision",
            description: "VTE's advanced optics always steps ahead to lead the next-generation of consumer devices. The use of aspherics in an optical system achieves various advantages such as correction of spherical aberration, system miniaturization and weight reduction. Regarding optical design, the use of an aspherical lenses allows the optical system to be reduced in size and weight.",
            description2: "VTE is specialized in the production of aspheric lenses. A finished polished lens has no pores or cracks on a surface as well as the desired shape accuracy and surface quality because we process double-inspection and finishing for more precision."
        },
        "2": {
            "1": "TSP - M",
            "2": "OCA",
            "3": "Black Print",
            "4": "Glass",
            "5": "AF Coating",
            title: "High durability with better design",
            title2: "Leading the future and technology",
            description: "VTE's tempered glass can be applied to various ways in our life style. We believe that glass contributes to showing high-end quality in general home appliances such as oven and refrigerator.",
            description2: "VTE's tempered glass can be applied to kiosk and advanced interactive display."
        },
        "3": {
            "1": "AF Coating",
            "2": "Glass",
            "3": "Black Print",
            "4": "SI - OCA",
            "5": "TSP - M",
            title: "Driving towards the trend",
            title2: "Enhance your driving experience",
            description: "VTE's takes several steps ahead towords to contribute to global automotive technology. We manufacture durable and optically advanced cover glass solution specifically designed for auto interior applications.",
            description2: "VTE's glass solution for automotive is also applied to head-up display."
        },
        "4": {
            "1": "Glass",
            "2": "Siver Coating",
            "3": "Glass",
            title: "Thermal efficiency",
            title2: "Another level of Insulation and heat Resistance",
            description: "VTE manufactures a Low-E glass especially for oven doors with low-emissivity coating, which allows a high flexibility in the design phase of the oven by the customer.",
            description2: "VTE's Low-E glass makes it easy to have heat resistance even at 1000 degrees. This special glass with excellent insulation makes incredible energy efficiency."
        }
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
    },
    footer: {
        tel: ": 054-451-4568",
        fax: ": 054-441-4568",
        korea: ": 22-11, Indong 21-gil, Gumi-si, Gyeongsangbuk-do, Republic of Korea",
        china: ": NO.888 West of Renmin Rd. In West Development Zone Sheyang County 224300 Yancheng City, Jiangsu Prov.China",
        copyright: "Copyright\xa9VTE CORP. ALL RIGHTS RESERVED."
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
        name: "Name",
        phone: "Phone",
        email: "Email",
        inquiry: "Inquriy",
        subject: "Subject",
        message: "Message",
        receipt: "Receipt",
        cancellation: "Cancel",
        directInput: "Direct input",
        more: "MORE >",
        korea: "KOREA",
        china: "CHINA",
        tel: "TEL",
        fax: "FAX",
        contact: "CONTACT US >",
        profile: "Profile"
    },
    glass: {
        "1": {
            title: "Advanced Optics",
            title2: "Aspherical Lens",
            description: "The world's most sophisticated manufacturer of",
            description2: "advanced optical materials.",
            description3: "VTE optic is a leader in providing ",
            description4: "cutting-edge material and optical solutions",
            description5: "that serve a variety of commercial markets ",
            description6: "including, consumer electronics."
        },
        "2": {
            title: "Commercial Parts",
            description: "The glass we manufactures makes up",
            description2: "the entire environment in the world.",
            description3: "VTE's glass technology helps and improves most of",
            description4: "industry's complex challenges."
        },
        "3": {
            title: "Input Device",
            description: "Leading the future technology",
            description2: "through manufacturing advanced glass materials.",
            description3: "VTE' glass shows a vision for easier and",
            description4: "safer ways to connect your astonishing car experience ",
            description5: "with automotive technology.",
            description6: "Think curved, glass surfaces that respond to touch directly",
            description7: "and offers a better viewing experience."
        },
        "4": {
            title: "Hybrid",
            title2: "Low-E Glass",
            description: "Solving the world's energy challenges with",
            description2: "low-emissivity glass technology.",
            description3: "VTE's “Low Emissivity glass” provides",
            description4: "high performance in situations where",
            description5: "temperature separation is desired.",
            description6: "Low-E is used to help meet energy efficiency requirements",
            description7: "by blocking UV light and providing heat insulation.",
            description8: "• High performance of heat insulation (silver coating)",
            description9: "• High temperature heat resistance (1,000 ℃)"
        }
    },
    screen: {
        "1": {
            title: "Advanced",
            title2: "Optics",
            description: "Providing asherical lens for",
            description2: "automotive technology and mobile devices"
        },
        "2": {
            title: "Home",
            title2: "Appliance",
            description: "VTE's glass technology helps and improves most of",
            description2: "industry's complex challenges."
        },
        "3": {
            title: "Hybrid",
            description: "VTE's Low E coated glass is a game changer for",
            description2: "creating better performing homes and spaces."
        }
    },
    flow: {
        title: "We are Pioneer in Glass Material Technology.",
        subTitle: "VTE is a leading innovator in parts and materials industry.",
        subTitle2: "We produce a variety of glass materials and special glass materials.",
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
        title: "PRODUCTS",
        "1": {
            "1": "ASPHERICAL LENS2",
            "2": "ASPHERICAL LENS1",
            "3": "FLAT LENS",
            "4": "FLAT LENS",
            "5": "ASPHERICAL LENS1",
            "6": "ASPHERICAL LENS2",
            title: "Covers every field and applications",
            title2: "High quality, High precision",
            description: "VTE's advanced optics always steps ahead to lead the next-generation of consumer devices. The use of aspherics in an optical system achieves various advantages such as correction of spherical aberration, system miniaturization and weight reduction. Regarding optical design, the use of an aspherical lenses allows the optical system to be reduced in size and weight.",
            description2: "VTE is specialized in the production of aspheric lenses. A finished polished lens has no pores or cracks on a surface as well as the desired shape accuracy and surface quality because we process double-inspection and finishing for more precision."
        },
        "2": {
            "1": "TSP - M",
            "2": "OCA",
            "3": "Black Print",
            "4": "Glass",
            "5": "AF Coating",
            title: "High durability with better design",
            title2: "Leading the future and technology",
            description: "VTE's tempered glass can be applied to various ways in our life style. We believe that glass contributes to showing high-end quality in general home appliances such as oven and refrigerator.",
            description2: "VTE's tempered glass can be applied to kiosk and advanced interactive display."
        },
        "3": {
            "1": "AF Coating",
            "2": "Glass",
            "3": "Black Print",
            "4": "SI - OCA",
            "5": "TSP - M",
            title: "Driving towards the trend",
            title2: "Enhance your driving experience",
            description: "VTE's takes several steps ahead towords to contribute to global automotive technology. We manufacture durable and optically advanced cover glass solution specifically designed for auto interior applications.",
            description2: "VTE's glass solution for automotive is also applied to head-up display."
        },
        "4": {
            "1": "Glass",
            "2": "Siver Coating",
            "3": "Glass",
            title: "Thermal efficiency",
            title2: "Another level of Insulation and heat Resistance",
            description: "VTE manufactures a Low-E glass especially for oven doors with low-emissivity coating, which allows a high flexibility in the design phase of the oven by the customer.",
            description2: "VTE's Low-E glass makes it easy to have heat resistance even at 1000 degrees. This special glass with excellent insulation makes incredible energy efficiency."
        }
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
    },
    footer: {
        tel: ": 054-451-4568",
        fax: ": 054-441-4568",
        korea: ": 22-11, Indong 21-gil, Gumi-si, Gyeongsangbuk-do, Republic of Korea",
        china: ": NO.888 West of Renmin Rd. In West Development Zone Sheyang County 224300 Yancheng City, Jiangsu Prov.China",
        copyright: "Copyright\xa9VTE CORP. ALL RIGHTS RESERVED."
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
/* harmony import */ var _next_font_local_target_css_path_src_pages_app_tsx_import_arguments_src_path_public_fonts_AppleSDGothicNeoB_ttf_weight_400_variable_font_apple_variableName_Applefonts___WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(341);
/* harmony import */ var _next_font_local_target_css_path_src_pages_app_tsx_import_arguments_src_path_public_fonts_AppleSDGothicNeoB_ttf_weight_400_variable_font_apple_variableName_Applefonts___WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_next_font_local_target_css_path_src_pages_app_tsx_import_arguments_src_path_public_fonts_AppleSDGothicNeoB_ttf_weight_400_variable_font_apple_variableName_Applefonts___WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _next_font_local_target_css_path_src_pages_app_tsx_import_arguments_src_path_public_fonts_GmarketSansTTFMedium_ttf_weight_400_variable_font_gmarket_variableName_GmarketFonts___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(872);
/* harmony import */ var _next_font_local_target_css_path_src_pages_app_tsx_import_arguments_src_path_public_fonts_GmarketSansTTFMedium_ttf_weight_400_variable_font_gmarket_variableName_GmarketFonts___WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_next_font_local_target_css_path_src_pages_app_tsx_import_arguments_src_path_public_fonts_GmarketSansTTFMedium_ttf_weight_400_variable_font_gmarket_variableName_GmarketFonts___WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _next_font_local_target_css_path_src_pages_app_tsx_import_arguments_src_path_public_fonts_GmarketSansTTFBold_ttf_weight_400_variable_font_gmarketBold_variableName_GmarketBoldFonts___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2434);
/* harmony import */ var _next_font_local_target_css_path_src_pages_app_tsx_import_arguments_src_path_public_fonts_GmarketSansTTFBold_ttf_weight_400_variable_font_gmarketBold_variableName_GmarketBoldFonts___WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_next_font_local_target_css_path_src_pages_app_tsx_import_arguments_src_path_public_fonts_GmarketSansTTFBold_ttf_weight_400_variable_font_gmarketBold_variableName_GmarketBoldFonts___WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _next_font_local_target_css_path_src_pages_app_tsx_import_arguments_src_path_public_fonts_NotoSansRegular_ttf_weight_400_variable_font_notoSans_variableName_NotoSansRegularFonts___WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3825);
/* harmony import */ var _next_font_local_target_css_path_src_pages_app_tsx_import_arguments_src_path_public_fonts_NotoSansRegular_ttf_weight_400_variable_font_notoSans_variableName_NotoSansRegularFonts___WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_next_font_local_target_css_path_src_pages_app_tsx_import_arguments_src_path_public_fonts_NotoSansRegular_ttf_weight_400_variable_font_notoSans_variableName_NotoSansRegularFonts___WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _next_font_local_target_css_path_src_pages_app_tsx_import_arguments_src_path_public_fonts_NotoSansBold_ttf_weight_700_variable_font_notoSansBold_variableName_NotoSansBoldFonts___WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5123);
/* harmony import */ var _next_font_local_target_css_path_src_pages_app_tsx_import_arguments_src_path_public_fonts_NotoSansBold_ttf_weight_700_variable_font_notoSansBold_variableName_NotoSansBoldFonts___WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_next_font_local_target_css_path_src_pages_app_tsx_import_arguments_src_path_public_fonts_NotoSansBold_ttf_weight_700_variable_font_notoSansBold_variableName_NotoSansBoldFonts___WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(108);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3430);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5141);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6127);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([i18n__WEBPACK_IMPORTED_MODULE_2__, _components_Footer__WEBPACK_IMPORTED_MODULE_5__]);
([i18n__WEBPACK_IMPORTED_MODULE_2__, _components_Footer__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











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
                className: `${(_next_font_local_target_css_path_src_pages_app_tsx_import_arguments_src_path_public_fonts_GmarketSansTTFMedium_ttf_weight_400_variable_font_gmarket_variableName_GmarketFonts___WEBPACK_IMPORTED_MODULE_6___default().variable)} ${(_next_font_local_target_css_path_src_pages_app_tsx_import_arguments_src_path_public_fonts_GmarketSansTTFBold_ttf_weight_400_variable_font_gmarketBold_variableName_GmarketBoldFonts___WEBPACK_IMPORTED_MODULE_7___default().variable)} ${(_next_font_local_target_css_path_src_pages_app_tsx_import_arguments_src_path_public_fonts_AppleSDGothicNeoB_ttf_weight_400_variable_font_apple_variableName_Applefonts___WEBPACK_IMPORTED_MODULE_8___default().variable)} ${(_next_font_local_target_css_path_src_pages_app_tsx_import_arguments_src_path_public_fonts_NotoSansRegular_ttf_weight_400_variable_font_notoSans_variableName_NotoSansRegularFonts___WEBPACK_IMPORTED_MODULE_9___default().variable)} ${(_next_font_local_target_css_path_src_pages_app_tsx_import_arguments_src_path_public_fonts_NotoSansBold_ttf_weight_700_variable_font_notoSansBold_variableName_NotoSansBoldFonts___WEBPACK_IMPORTED_MODULE_10___default().variable)} font-gmarket`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                    ...pageProps
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_5__/* .Footer */ .$, {}),
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