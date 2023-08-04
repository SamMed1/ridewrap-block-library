/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/attributes.js":
/*!***************************!*\
  !*** ./src/attributes.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  title: {
    type: 'string',
    selector: 'h3'
  },
  paragraph: {
    type: 'string',
    selector: 'p'
  },
  quicklinks_show: {
    type: 'boolean',
    default: true
  },
  block_color: {
    type: 'string',
    default: 'block-background-red-medium'
  },
  cta_text: {
    type: 'string'
  },
  cta_link: {
    type: 'string'
  },
  bike_type: {
    type: 'string',
    default: 'bike-type-mtb'
  }
});

/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);





const TEMPLATE = [['core/list']];
function Edit(_ref) {
  let {
    attributes,
    setAttributes,
    className
  } = _ref;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)();
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "custom-block-controls"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: "Block background color",
    value: attributes.block_color,
    options: [{
      label: 'Red Medium',
      value: 'block-background-red-medium'
    }, {
      label: 'Blue Medium',
      value: 'block-background-blue-medium'
    }],
    onChange: value => setAttributes({
      block_color: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: "Bike Type",
    value: attributes.bike_type,
    options: [{
      label: 'MTB',
      value: 'bike-type-mtb'
    }, {
      label: 'Road',
      value: 'bike-type-road'
    }, {
      label: 'Gravel',
      value: 'bike-type-gravel'
    }, {
      label: 'City',
      value: 'bike-type-city'
    }, {
      label: 'E-Bike',
      value: 'bike-type-e'
    }, {
      label: 'Kids',
      value: 'bike-type-kids'
    }, {
      label: 'Essential',
      value: 'bike-type-essential'
    }, {
      label: 'Covered',
      value: 'bike-type-covered'
    }],
    onChange: value => setAttributes({
      bike_type: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: "Show quicklinks?",
    checked: attributes.quicklinks_show,
    onChange: () => setAttributes({
      quicklinks_show: !attributes.quicklinks_show
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    className: "h3-style",
    tagName: "h3",
    value: attributes.title,
    onChange: title => setAttributes({
      title
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Block Title', 'gutenberg')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    className: "",
    tagName: "p",
    value: attributes.paragraph,
    onChange: paragraph => setAttributes({
      paragraph
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Block Text', 'gutenberg')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks, {
    template: TEMPLATE,
    allowedBlocks: ['core/list', 'acf/faq-selector']
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    className: "",
    tagName: "h5",
    value: attributes.cta_text,
    onChange: cta_text => setAttributes({
      cta_text
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('CTA Text', 'gutenberg')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    className: "",
    tagName: "a",
    value: attributes.cta_link,
    onChange: cta_link => setAttributes({
      cta_link
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('CTA Link', 'gutenberg')
  })));
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./attributes */ "./src/attributes.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/save.js");





(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('ridewrap-block/frame-protection', {
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_2__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"]
});

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ save; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_mtb_2_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/mtb/2.png */ "./src/images/mtb/2.png");
/* harmony import */ var _images_mtb_3_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/mtb/3.png */ "./src/images/mtb/3.png");
/* harmony import */ var _images_mtb_4_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/mtb/4.png */ "./src/images/mtb/4.png");
/* harmony import */ var _images_mtb_5_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/mtb/5.png */ "./src/images/mtb/5.png");
/* harmony import */ var _images_mtb_6_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/mtb/6.png */ "./src/images/mtb/6.png");
/* harmony import */ var _images_mtb_7_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/mtb/7.png */ "./src/images/mtb/7.png");
/* harmony import */ var _images_mtb_8_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/mtb/8.png */ "./src/images/mtb/8.png");
/* harmony import */ var _images_road_2_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./images/road/2.png */ "./src/images/road/2.png");
/* harmony import */ var _images_road_3_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./images/road/3.png */ "./src/images/road/3.png");
/* harmony import */ var _images_road_4_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./images/road/4.png */ "./src/images/road/4.png");
/* harmony import */ var _images_road_5_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./images/road/5.png */ "./src/images/road/5.png");
/* harmony import */ var _images_road_6_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./images/road/6.png */ "./src/images/road/6.png");
/* harmony import */ var _images_road_7_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./images/road/7.png */ "./src/images/road/7.png");
/* harmony import */ var _images_road_8_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./images/road/8.png */ "./src/images/road/8.png");
/* harmony import */ var _images_road_9_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./images/road/9.png */ "./src/images/road/9.png");
/* harmony import */ var _images_road_10_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./images/road/10.png */ "./src/images/road/10.png");
/* harmony import */ var _images_city_2_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./images/city/2.png */ "./src/images/city/2.png");
/* harmony import */ var _images_city_3_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./images/city/3.png */ "./src/images/city/3.png");
/* harmony import */ var _images_city_4_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./images/city/4.png */ "./src/images/city/4.png");
/* harmony import */ var _images_city_5_png__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./images/city/5.png */ "./src/images/city/5.png");
/* harmony import */ var _images_city_6_png__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./images/city/6.png */ "./src/images/city/6.png");
/* harmony import */ var _images_city_7_png__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./images/city/7.png */ "./src/images/city/7.png");
/* harmony import */ var _images_city_8_png__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./images/city/8.png */ "./src/images/city/8.png");
/* harmony import */ var _images_e_2_png__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./images/e/2.png */ "./src/images/e/2.png");
/* harmony import */ var _images_e_3_png__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./images/e/3.png */ "./src/images/e/3.png");
/* harmony import */ var _images_e_4_png__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./images/e/4.png */ "./src/images/e/4.png");
/* harmony import */ var _images_e_5_png__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./images/e/5.png */ "./src/images/e/5.png");
/* harmony import */ var _images_e_6_png__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./images/e/6.png */ "./src/images/e/6.png");
/* harmony import */ var _images_e_7_png__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./images/e/7.png */ "./src/images/e/7.png");
/* harmony import */ var _images_e_8_png__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./images/e/8.png */ "./src/images/e/8.png");
/* harmony import */ var _images_e_9_png__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./images/e/9.png */ "./src/images/e/9.png");
/* harmony import */ var _images_kids_2_png__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./images/kids/2.png */ "./src/images/kids/2.png");
/* harmony import */ var _images_kids_3_png__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./images/kids/3.png */ "./src/images/kids/3.png");
/* harmony import */ var _images_kids_4_png__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./images/kids/4.png */ "./src/images/kids/4.png");
/* harmony import */ var _images_kids_5_png__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./images/kids/5.png */ "./src/images/kids/5.png");
/* harmony import */ var _images_kids_6_png__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./images/kids/6.png */ "./src/images/kids/6.png");
/* harmony import */ var _images_kids_7_png__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./images/kids/7.png */ "./src/images/kids/7.png");
/* harmony import */ var _images_kids_8_png__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./images/kids/8.png */ "./src/images/kids/8.png");
/* harmony import */ var _images_essential_2_png__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./images/essential/2.png */ "./src/images/essential/2.png");
/* harmony import */ var _images_essential_3_png__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./images/essential/3.png */ "./src/images/essential/3.png");
/* harmony import */ var _images_essential_4_png__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./images/essential/4.png */ "./src/images/essential/4.png");
/* harmony import */ var _images_essential_5_png__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./images/essential/5.png */ "./src/images/essential/5.png");
/* harmony import */ var _images_essential_6_png__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./images/essential/6.png */ "./src/images/essential/6.png");
/* harmony import */ var _images_covered_2_png__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./images/covered/2.png */ "./src/images/covered/2.png");
/* harmony import */ var _images_covered_3_png__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./images/covered/3.png */ "./src/images/covered/3.png");
/* harmony import */ var _images_covered_4_png__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./images/covered/4.png */ "./src/images/covered/4.png");
/* harmony import */ var _images_covered_5_png__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./images/covered/5.png */ "./src/images/covered/5.png");
/* harmony import */ var _images_covered_6_png__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./images/covered/6.png */ "./src/images/covered/6.png");
/* harmony import */ var _images_covered_7_png__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./images/covered/7.png */ "./src/images/covered/7.png");


 // MTB bike animation components.







 // Road bike animation components.









 // City bike animation components.







 // E bike animation components.








 // Kids bike animation components.







 // Essential bike animation components.





 // Covered bike animation components.







function save(_ref) {
  let {
    attributes
  } = _ref;
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save({
    className: attributes.block_color
  });

  const bikeAnimationGraphic = function () {
    if (attributes.bike_type == 'bike-type-mtb') {
      let imageAltText = 'mtb frame protection animated component';
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        class: "frame-protection-anim-inner bike-type-mtb"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        class: "mtb-frame-protection-anim-img-two"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _images_mtb_2_png__WEBPACK_IMPORTED_MODULE_3__,
        alt: imageAltText,
        width: "100",
        height: "200"
      })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        class: "mtb-frame-protection-anim-img-three"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _images_mtb_3_png__WEBPACK_IMPORTED_MODULE_4__,
        alt: imageAltText,
        width: "200",
        height: "325"
      })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        class: "mtb-frame-protection-anim-img-four"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _images_mtb_4_png__WEBPACK_IMPORTED_MODULE_5__,
        alt: imageAltText,
        width: "350",
        height: "55"
      })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        class: "mtb-frame-protection-anim-img-five"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _images_mtb_5_png__WEBPACK_IMPORTED_MODULE_6__,
        alt: imageAltText,
        width: "355",
        height: "190"
      })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        class: "mtb-frame-protection-anim-img-six"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _images_mtb_6_png__WEBPACK_IMPORTED_MODULE_7__,
        alt: imageAltText,
        width: "120",
        height: "290"
      })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        class: "mtb-frame-protection-anim-img-seven"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _images_mtb_7_png__WEBPACK_IMPORTED_MODULE_8__,
        alt: imageAltText,
        width: "315",
        height: "200"
      })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        class: "mtb-frame-protection-anim-img-eight"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _images_mtb_8_png__WEBPACK_IMPORTED_MODULE_9__,
        alt: imageAltText,
        width: "120",
        height: "120"
      })));
    } else if (attributes.bike_type == 'bike-type-road') {
      let imageAltText = 'road frame protection animated component';
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        class: "frame-protection-anim-inner bike-type-road"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        class: "road-frame-protection-anim-img-two"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _images_road_2_png__WEBPACK_IMPORTED_MODULE_10__,
        alt: imageAltText,
        width: "100",
        height: "150"
      })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        class: "road-frame-protection-anim-img-three"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _images_road_3_png__WEBPACK_IMPORTED_MODULE_11__,
        alt: imageAltText,
        width: "275",
        height: "350"
      })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        class: "road-frame-protection-anim-img-four"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _images_road_4_png__WEBPACK_IMPORTED_MODULE_12__,
        alt: imageAltText,
        width: "375",
        height: "100"
      })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        class: "road-frame-protection-anim-img-five"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _images_road_5_png__WEBPACK_IMPORTED_MODULE_13__,
        alt: imageAltText,
        width: "225",
        height: "275"
      })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        class: "road-frame-protection-anim-img-six"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _images_road_6_png__WEBPACK_IMPORTED_MODULE_14__,
        alt: imageAltText,
        width: "120",
        height: "300"
      })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        class: "road-frame-protection-anim-img-seven"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _images_road_7_png__WEBPACK_IMPORTED_MODULE_15__,
        alt: imageAltText,
        width: "50",
        height: "100"
      })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        class: "road-frame-protection-anim-img-eight"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _images_road_8_png__WEBPACK_IMPORTED_MODULE_16__,
        alt: imageAltText,
        width: "300",
        height: "100"
      })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        class: "road-frame-protection-anim-img-nine"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _images_road_9_png__WEBPACK_IMPORTED_MODULE_17__,
        alt: imageAltText,
        width: "150",
        height: "260"
      })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        class: "road-frame-protection-anim-img-ten"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _images_road_10_png__WEBPACK_IMPORTED_MODULE_18__,
        alt: imageAltText,
        width: "50",
        height: "25"
      })));
    } else if (attributes.bike_type == 'bike-type-gravel') {
      // Use the same components and styling as road animation.
      let imageAltText = 'gravel frame protection animated component';
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        class: "frame-protection-anim-inner bike-type-road"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        class: "road-frame-protection-anim-img-two"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _images_road_2_png__WEBPACK_IMPORTED_MODULE_10__,
        alt: imageAltText,
        width: "100",
        height: "150"
      })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        class: "road-frame-protection-anim-img-three"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _images_road_3_png__WEBPACK_IMPORTED_MODULE_11__,
        alt: imageAltText,
        width: "275",
        height: "350"
      })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        class: "road-frame-protection-anim-img-four"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _images_road_4_png__WEBPACK_IMPORTED_MODULE_12__,
        alt: imageAltText,
        width: "375",
        height: "100"
      })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        class: "road-frame-protection-anim-img-five"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _images_road_5_png__WEBPACK_IMPORTED_MODULE_13__,
        alt: imageAltText,
        width: "225",
        height: "275"
      })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        class: "road-frame-protection-anim-img-six"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _images_road_6_png__WEBPACK_IMPORTED_MODULE_14__,
        alt: imageAltText,
        width: "120",
        height: "300"
      })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        class: "road-frame-protection-anim-img-seven"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _images_road_7_png__WEBPACK_IMPORTED_MODULE_15__,
        alt: imageAltText,
        width: "50",
        height: "100"
      })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        class: "road-frame-protection-anim-img-eight"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _images_road_8_png__WEBPACK_IMPORTED_MODULE_16__,
        alt: imageAltText,
        width: "300",
        height: "100"
      })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        class: "road-frame-protection-anim-img-nine"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _images_road_9_png__WEBPACK_IMPORTED_MODULE_17__,
        alt: imageAltText,
        width: "150",
        height: "260"
      })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        class: "road-frame-protection-anim-img-ten"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _images_road_10_png__WEBPACK_IMPORTED_MODULE_18__,
        alt: imageAltText,
        width: "50",
        height: "25"
      })));
    } else if (attributes.bike_type == 'bike-type-city') {
      let imageAltText = 'city frame protection animated component';
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        class: "frame-protection-anim-inner bike-type-city"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        class: "city-frame-protection-anim-img-two"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _images_city_2_png__WEBPACK_IMPORTED_MODULE_19__,
        alt: imageAltText,
        width: "60",
        height: "100"
      })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        class: "city-frame-protection-anim-img-three"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _images_city_3_png__WEBPACK_IMPORTED_MODULE_20__,
        alt: imageAltText,
        width: "275",
        height: "350"
      })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        class: "city-frame-protection-anim-img-four"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _images_city_4_png__WEBPACK_IMPORTED_MODULE_21__,
        alt: imageAltText,
        width: "350",
        height: "75"
      })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        class: "city-frame-protection-anim-img-five"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _images_city_5_png__WEBPACK_IMPORTED_MODULE_22__,
        alt: imageAltText,
        width: "250",
        height: "230"
      })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        class: "city-frame-protection-anim-img-six"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _images_city_6_png__WEBPACK_IMPORTED_MODULE_23__,
        alt: imageAltText,
        width: "100",
        height: "290"
      })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        class: "city-frame-protection-anim-img-seven"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _images_city_7_png__WEBPACK_IMPORTED_MODULE_24__,
        alt: imageAltText,
        width: "325",
        height: "275"
      })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        class: "city-frame-protection-anim-img-eight"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _images_city_8_png__WEBPACK_IMPORTED_MODULE_25__,
        alt: imageAltText,
        width: "150",
        height: "275"
      })));
    } else if (attributes.bike_type == 'bike-type-e') {
      let imageAltText = 'e frame protection animated component';
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        class: "frame-protection-anim-inner bike-type-e"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        class: "e-frame-protection-anim-img-two"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _images_e_2_png__WEBPACK_IMPORTED_MODULE_26__,
        alt: imageAltText,
        width: "130",
        height: "175"
      })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        class: "e-frame-protection-anim-img-three"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _images_e_3_png__WEBPACK_IMPORTED_MODULE_27__,
        alt: imageAltText,
        width: "150",
        height: "280"
      })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        class: "e-frame-protection-anim-img-four"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _images_e_4_png__WEBPACK_IMPORTED_MODULE_28__,
        alt: imageAltText,
        width: "310",
        height: "60"
      })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        class: "e-frame-protection-anim-img-five"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _images_e_5_png__WEBPACK_IMPORTED_MODULE_29__,
        alt: imageAltText,
        width: "315",
        height: "160"
      })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        class: "e-frame-protection-anim-img-six"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _images_e_6_png__WEBPACK_IMPORTED_MODULE_30__,
        alt: imageAltText,
        width: "45",
        height: "100"
      })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        class: "e-frame-protection-anim-img-seven"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _images_e_7_png__WEBPACK_IMPORTED_MODULE_31__,
        alt: imageAltText,
        width: "90",
        height: "130"
      })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        class: "e-frame-protection-anim-img-eight"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _images_e_8_png__WEBPACK_IMPORTED_MODULE_32__,
        alt: imageAltText,
        width: "125",
        height: "125"
      })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        class: "e-frame-protection-anim-img-nine"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _images_e_9_png__WEBPACK_IMPORTED_MODULE_33__,
        alt: imageAltText,
        width: "280",
        height: "180"
      })));
    } else if (attributes.bike_type == 'bike-type-kids') {
      let imageAltText = 'kids frame protection animated component';
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        class: "frame-protection-anim-inner bike-type-kids"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        class: "kids-frame-protection-anim-img-two"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _images_kids_2_png__WEBPACK_IMPORTED_MODULE_34__,
        alt: imageAltText,
        width: "75",
        height: "110"
      })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        class: "kids-frame-protection-anim-img-three"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _images_kids_3_png__WEBPACK_IMPORTED_MODULE_35__,
        alt: imageAltText,
        width: "250",
        height: "300"
      })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        class: "kids-frame-protection-anim-img-four"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _images_kids_4_png__WEBPACK_IMPORTED_MODULE_36__,
        alt: imageAltText,
        width: "260",
        height: "30"
      })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        class: "kids-frame-protection-anim-img-five"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _images_kids_5_png__WEBPACK_IMPORTED_MODULE_37__,
        alt: imageAltText,
        width: "275",
        height: "190"
      })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        class: "kids-frame-protection-anim-img-six"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _images_kids_6_png__WEBPACK_IMPORTED_MODULE_38__,
        alt: imageAltText,
        width: "80",
        height: "195"
      })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        class: "kids-frame-protection-anim-img-seven"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _images_kids_7_png__WEBPACK_IMPORTED_MODULE_39__,
        alt: imageAltText,
        width: "240",
        height: "150"
      })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        class: "kids-frame-protection-anim-img-eight"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _images_kids_8_png__WEBPACK_IMPORTED_MODULE_40__,
        alt: imageAltText,
        width: "160",
        height: "260"
      })));
    } else if (attributes.bike_type == 'bike-type-essential') {
      let imageAltText = 'essential frame protection animated component';
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        class: "frame-protection-anim-inner bike-type-essential"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        class: "essential-frame-protection-anim-img-two"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _images_essential_2_png__WEBPACK_IMPORTED_MODULE_41__,
        alt: imageAltText,
        width: "75",
        height: "110"
      })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        class: "essential-frame-protection-anim-img-three"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _images_essential_3_png__WEBPACK_IMPORTED_MODULE_42__,
        alt: imageAltText,
        width: "250",
        height: "300"
      })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        class: "essential-frame-protection-anim-img-four"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _images_essential_4_png__WEBPACK_IMPORTED_MODULE_43__,
        alt: imageAltText,
        width: "260",
        height: "30"
      })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        class: "essential-frame-protection-anim-img-five"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _images_essential_5_png__WEBPACK_IMPORTED_MODULE_44__,
        alt: imageAltText,
        width: "275",
        height: "190"
      })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        class: "essential-frame-protection-anim-img-six"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _images_essential_6_png__WEBPACK_IMPORTED_MODULE_45__,
        alt: imageAltText,
        width: "275",
        height: "190"
      })));
    } else if (attributes.bike_type == 'bike-type-covered') {
      let imageAltText = 'covered frame protection animated component';
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        class: "frame-protection-anim-inner bike-type-covered"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        class: "covered-frame-protection-anim-img-two"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _images_covered_2_png__WEBPACK_IMPORTED_MODULE_46__,
        alt: imageAltText,
        width: "75",
        height: "110"
      })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        class: "covered-frame-protection-anim-img-three"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _images_covered_3_png__WEBPACK_IMPORTED_MODULE_47__,
        alt: imageAltText,
        width: "250",
        height: "300"
      })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        class: "covered-frame-protection-anim-img-four"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _images_covered_4_png__WEBPACK_IMPORTED_MODULE_48__,
        alt: imageAltText,
        width: "260",
        height: "30"
      })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        class: "covered-frame-protection-anim-img-five"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _images_covered_5_png__WEBPACK_IMPORTED_MODULE_49__,
        alt: imageAltText,
        width: "275",
        height: "190"
      })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        class: "covered-frame-protection-anim-img-six"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _images_covered_6_png__WEBPACK_IMPORTED_MODULE_50__,
        alt: imageAltText,
        width: "275",
        height: "190"
      })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        class: "covered-frame-protection-anim-img-seven"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: _images_covered_7_png__WEBPACK_IMPORTED_MODULE_51__,
        alt: imageAltText,
        width: "275",
        height: "190"
      })));
    } else {
      return;
    }
  };

  const quicklinks = function () {
    if (attributes.quicklinks_show == true) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        class: "frame-protection-quicklinks"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
        href: "#protection-benefits"
      }, "Protection benefits")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
        href: "#degrees-of-protection"
      }, "Degrees of protection")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
        href: "#ridewrap-features"
      }, "Ridewrap features")));
    } else {
      return;
    }
  };

  const cta = function () {
    if (attributes.cta_text) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
        tagName: "a",
        className: "btn dark",
        href: attributes.cta_link,
        value: attributes.cta_text
      });
    }
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "container container-wide container-flex-wrap"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "h2-style"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    tagName: "span",
    value: attributes.title
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    tagName: "p",
    value: attributes.paragraph
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.Content, null), quicklinks(), cta()), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "frame-protection-anim"
  }, bikeAnimationGraphic()))));
}

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/images/city/2.png":
/*!*******************************!*\
  !*** ./src/images/city/2.png ***!
  \*******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/2.92f04e20.png";

/***/ }),

/***/ "./src/images/city/3.png":
/*!*******************************!*\
  !*** ./src/images/city/3.png ***!
  \*******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/3.5f7992bf.png";

/***/ }),

/***/ "./src/images/city/4.png":
/*!*******************************!*\
  !*** ./src/images/city/4.png ***!
  \*******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/4.ac163085.png";

/***/ }),

/***/ "./src/images/city/5.png":
/*!*******************************!*\
  !*** ./src/images/city/5.png ***!
  \*******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/5.666bb17d.png";

/***/ }),

/***/ "./src/images/city/6.png":
/*!*******************************!*\
  !*** ./src/images/city/6.png ***!
  \*******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/6.809d90bb.png";

/***/ }),

/***/ "./src/images/city/7.png":
/*!*******************************!*\
  !*** ./src/images/city/7.png ***!
  \*******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/7.44d4407a.png";

/***/ }),

/***/ "./src/images/city/8.png":
/*!*******************************!*\
  !*** ./src/images/city/8.png ***!
  \*******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/8.1429a544.png";

/***/ }),

/***/ "./src/images/covered/2.png":
/*!**********************************!*\
  !*** ./src/images/covered/2.png ***!
  \**********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/2.85f0ea54.png";

/***/ }),

/***/ "./src/images/covered/3.png":
/*!**********************************!*\
  !*** ./src/images/covered/3.png ***!
  \**********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/3.f9f15fec.png";

/***/ }),

/***/ "./src/images/covered/4.png":
/*!**********************************!*\
  !*** ./src/images/covered/4.png ***!
  \**********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/4.71a5b247.png";

/***/ }),

/***/ "./src/images/covered/5.png":
/*!**********************************!*\
  !*** ./src/images/covered/5.png ***!
  \**********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/5.b10ef50e.png";

/***/ }),

/***/ "./src/images/covered/6.png":
/*!**********************************!*\
  !*** ./src/images/covered/6.png ***!
  \**********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/6.9c897a52.png";

/***/ }),

/***/ "./src/images/covered/7.png":
/*!**********************************!*\
  !*** ./src/images/covered/7.png ***!
  \**********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/7.845675ce.png";

/***/ }),

/***/ "./src/images/e/2.png":
/*!****************************!*\
  !*** ./src/images/e/2.png ***!
  \****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/2.392d9b66.png";

/***/ }),

/***/ "./src/images/e/3.png":
/*!****************************!*\
  !*** ./src/images/e/3.png ***!
  \****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/3.0822295b.png";

/***/ }),

/***/ "./src/images/e/4.png":
/*!****************************!*\
  !*** ./src/images/e/4.png ***!
  \****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/4.48ec1755.png";

/***/ }),

/***/ "./src/images/e/5.png":
/*!****************************!*\
  !*** ./src/images/e/5.png ***!
  \****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/5.76eba2c0.png";

/***/ }),

/***/ "./src/images/e/6.png":
/*!****************************!*\
  !*** ./src/images/e/6.png ***!
  \****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/6.7533fd0a.png";

/***/ }),

/***/ "./src/images/e/7.png":
/*!****************************!*\
  !*** ./src/images/e/7.png ***!
  \****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/7.78434ff9.png";

/***/ }),

/***/ "./src/images/e/8.png":
/*!****************************!*\
  !*** ./src/images/e/8.png ***!
  \****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/8.92ce17a1.png";

/***/ }),

/***/ "./src/images/e/9.png":
/*!****************************!*\
  !*** ./src/images/e/9.png ***!
  \****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/9.1d45ead8.png";

/***/ }),

/***/ "./src/images/essential/2.png":
/*!************************************!*\
  !*** ./src/images/essential/2.png ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/2.85f0ea54.png";

/***/ }),

/***/ "./src/images/essential/3.png":
/*!************************************!*\
  !*** ./src/images/essential/3.png ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/3.d2c5f889.png";

/***/ }),

/***/ "./src/images/essential/4.png":
/*!************************************!*\
  !*** ./src/images/essential/4.png ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/4.449c1e62.png";

/***/ }),

/***/ "./src/images/essential/5.png":
/*!************************************!*\
  !*** ./src/images/essential/5.png ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/5.fa7adf6f.png";

/***/ }),

/***/ "./src/images/essential/6.png":
/*!************************************!*\
  !*** ./src/images/essential/6.png ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/6.33b17fcd.png";

/***/ }),

/***/ "./src/images/kids/2.png":
/*!*******************************!*\
  !*** ./src/images/kids/2.png ***!
  \*******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/2.5a815440.png";

/***/ }),

/***/ "./src/images/kids/3.png":
/*!*******************************!*\
  !*** ./src/images/kids/3.png ***!
  \*******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/3.5d7a3ade.png";

/***/ }),

/***/ "./src/images/kids/4.png":
/*!*******************************!*\
  !*** ./src/images/kids/4.png ***!
  \*******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/4.c44e7597.png";

/***/ }),

/***/ "./src/images/kids/5.png":
/*!*******************************!*\
  !*** ./src/images/kids/5.png ***!
  \*******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/5.6e910629.png";

/***/ }),

/***/ "./src/images/kids/6.png":
/*!*******************************!*\
  !*** ./src/images/kids/6.png ***!
  \*******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/6.f80a0ebe.png";

/***/ }),

/***/ "./src/images/kids/7.png":
/*!*******************************!*\
  !*** ./src/images/kids/7.png ***!
  \*******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/7.266234a5.png";

/***/ }),

/***/ "./src/images/kids/8.png":
/*!*******************************!*\
  !*** ./src/images/kids/8.png ***!
  \*******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/8.e9227cc2.png";

/***/ }),

/***/ "./src/images/mtb/2.png":
/*!******************************!*\
  !*** ./src/images/mtb/2.png ***!
  \******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/2.845b18e8.png";

/***/ }),

/***/ "./src/images/mtb/3.png":
/*!******************************!*\
  !*** ./src/images/mtb/3.png ***!
  \******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/3.a85e095f.png";

/***/ }),

/***/ "./src/images/mtb/4.png":
/*!******************************!*\
  !*** ./src/images/mtb/4.png ***!
  \******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/4.231d9806.png";

/***/ }),

/***/ "./src/images/mtb/5.png":
/*!******************************!*\
  !*** ./src/images/mtb/5.png ***!
  \******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/5.a7786aef.png";

/***/ }),

/***/ "./src/images/mtb/6.png":
/*!******************************!*\
  !*** ./src/images/mtb/6.png ***!
  \******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/6.c5e2071b.png";

/***/ }),

/***/ "./src/images/mtb/7.png":
/*!******************************!*\
  !*** ./src/images/mtb/7.png ***!
  \******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/7.b5defd14.png";

/***/ }),

/***/ "./src/images/mtb/8.png":
/*!******************************!*\
  !*** ./src/images/mtb/8.png ***!
  \******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/8.94399d6f.png";

/***/ }),

/***/ "./src/images/road/10.png":
/*!********************************!*\
  !*** ./src/images/road/10.png ***!
  \********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/10.31710236.png";

/***/ }),

/***/ "./src/images/road/2.png":
/*!*******************************!*\
  !*** ./src/images/road/2.png ***!
  \*******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/2.3a87b349.png";

/***/ }),

/***/ "./src/images/road/3.png":
/*!*******************************!*\
  !*** ./src/images/road/3.png ***!
  \*******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/3.0a76cefe.png";

/***/ }),

/***/ "./src/images/road/4.png":
/*!*******************************!*\
  !*** ./src/images/road/4.png ***!
  \*******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/4.1158f352.png";

/***/ }),

/***/ "./src/images/road/5.png":
/*!*******************************!*\
  !*** ./src/images/road/5.png ***!
  \*******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/5.79c6fe05.png";

/***/ }),

/***/ "./src/images/road/6.png":
/*!*******************************!*\
  !*** ./src/images/road/6.png ***!
  \*******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/6.d16c3953.png";

/***/ }),

/***/ "./src/images/road/7.png":
/*!*******************************!*\
  !*** ./src/images/road/7.png ***!
  \*******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/7.97eb7884.png";

/***/ }),

/***/ "./src/images/road/8.png":
/*!*******************************!*\
  !*** ./src/images/road/8.png ***!
  \*******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/8.9e5167b2.png";

/***/ }),

/***/ "./src/images/road/9.png":
/*!*******************************!*\
  !*** ./src/images/road/9.png ***!
  \*******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/9.d60d71a3.png";

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["i18n"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkframe_protection"] = self["webpackChunkframe_protection"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], function() { return __webpack_require__("./src/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map