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
    selector: 'h3',
    default: 'Localization Wrapper'
  },
  ui_state: {
    type: 'boolean',
    default: false
  },
  is_default_block: {
    type: 'boolean',
    default: false
  },
  other_locales_show: {
    type: 'boolean',
    default: false
  },
  block_locale_us_en: {
    type: 'boolean',
    default: false
  },
  block_locale_ca_en: {
    type: 'boolean',
    default: false
  },
  block_locale_ca_fr: {
    type: 'boolean',
    default: false
  },
  block_locale_au_en: {
    type: 'boolean',
    default: false
  },
  block_locale_gb_en: {
    type: 'boolean',
    default: false
  },
  block_locale_nz_en: {
    type: 'boolean',
    default: false
  },
  block_locale_de_de: {
    type: 'boolean',
    default: false
  },
  block_locale_fr_fr: {
    type: 'boolean',
    default: false
  },
  block_locale_fr_en: {
    type: 'boolean',
    default: false
  },
  block_locale_ph_en: {
    type: 'boolean',
    default: false
  },
  block_locale_mx_en: {
    type: 'boolean',
    default: false
  },
  block_locale_mx_es: {
    type: 'boolean',
    default: false
  },
  block_locale_es_en: {
    type: 'boolean',
    default: false
  },
  block_locale_es_es: {
    type: 'boolean',
    default: false
  },
  block_locale_sg_en: {
    type: 'boolean',
    default: false
  },
  block_locale_it_en: {
    type: 'boolean',
    default: false
  },
  block_locale_ch_en: {
    type: 'boolean',
    default: false
  },
  block_locale_ch_fr: {
    type: 'boolean',
    default: false
  },
  block_locale_ch_de: {
    type: 'boolean',
    default: false
  },
  block_locale_nl_en: {
    type: 'boolean',
    default: false
  },
  block_locale_nl_nl: {
    type: 'boolean',
    default: false
  },
  block_locale_se_en: {
    type: 'boolean',
    default: false
  },
  block_locale_be_en: {
    type: 'boolean',
    default: false
  },
  block_locale_be_fr: {
    type: 'boolean',
    default: false
  },
  block_locale_id_en: {
    type: 'boolean',
    default: false
  },
  block_locale_cl_es: {
    type: 'boolean',
    default: false
  },
  block_locale_cl_en: {
    type: 'boolean',
    default: false
  },
  block_locale_za_en: {
    type: 'boolean',
    default: false
  },
  block_locale_ie_en: {
    type: 'boolean',
    default: false
  },
  block_locale_no_es: {
    type: 'boolean',
    default: false
  },
  block_locale_hk_en: {
    type: 'boolean',
    default: false
  },
  block_locale_fi_en: {
    type: 'boolean',
    default: false
  },
  block_locale_at_en: {
    type: 'boolean',
    default: false
  },
  block_locale_jp_en: {
    type: 'boolean',
    default: false
  },
  block_locale_gr_en: {
    type: 'boolean',
    default: false
  },
  block_locale_pt_en: {
    type: 'boolean',
    default: false
  },
  block_locale_dk_en: {
    type: 'boolean',
    default: false
  },
  block_locale_cz_en: {
    type: 'boolean',
    default: false
  },
  block_locale_il_en: {
    type: 'boolean',
    default: false
  },
  block_locale_fr_fr: {
    type: 'boolean',
    default: false
  },
  block_locale_at_de: {
    type: 'boolean',
    default: false
  },
  block_locale_be_de: {
    type: 'boolean',
    default: false
  },
  block_locale_be_nl: {
    type: 'boolean',
    default: false
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






function Edit(_ref) {
  let {
    clientId,
    attributes,
    setAttributes,
    className
  } = _ref;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)();
  const otherLocaleOptions = function () {
    if (attributes.other_locales_show == true) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        class: "locale-picker"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
        label: "ph en",
        checked: attributes.block_locale_ph_en,
        onChange: () => setAttributes({
          block_locale_ph_en: !attributes.block_locale_ph_en
        })
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
        label: "mx en",
        checked: attributes.block_locale_mx_en,
        onChange: () => setAttributes({
          block_locale_mx_en: !attributes.block_locale_mx_en
        })
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
        label: "mx es",
        checked: attributes.block_locale_mx_es,
        onChange: () => setAttributes({
          block_locale_mx_es: !attributes.block_locale_mx_es
        })
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
        label: "es en",
        checked: attributes.block_locale_es_en,
        onChange: () => setAttributes({
          block_locale_es_en: !attributes.block_locale_es_en
        })
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
        label: "es es",
        checked: attributes.block_locale_es_es,
        onChange: () => setAttributes({
          block_locale_es_es: !attributes.block_locale_es_es
        })
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
        label: "sg en",
        checked: attributes.block_locale_sg_en,
        onChange: () => setAttributes({
          block_locale_sg_en: !attributes.block_locale_sg_en
        })
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
        label: "it en",
        checked: attributes.block_locale_it_en,
        onChange: () => setAttributes({
          block_locale_it_en: !attributes.block_locale_it_en
        })
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
        label: "ch en",
        checked: attributes.block_locale_ch_en,
        onChange: () => setAttributes({
          block_locale_ch_en: !attributes.block_locale_ch_en
        })
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
        label: "ch fr",
        checked: attributes.block_locale_ch_fr,
        onChange: () => setAttributes({
          block_locale_ch_fr: !attributes.block_locale_ch_fr
        })
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
        label: "ch de",
        checked: attributes.block_locale_ch_de,
        onChange: () => setAttributes({
          block_locale_ch_de: !attributes.block_locale_ch_de
        })
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
        label: "nl en",
        checked: attributes.block_locale_nl_en,
        onChange: () => setAttributes({
          block_locale_nl_en: !attributes.block_locale_nl_en
        })
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
        label: "nl nl",
        checked: attributes.block_locale_nl_nl,
        onChange: () => setAttributes({
          block_locale_nl_nl: !attributes.block_locale_nl_nl
        })
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
        label: "se en",
        checked: attributes.block_locale_se_en,
        onChange: () => setAttributes({
          block_locale_se_en: !attributes.block_locale_se_en
        })
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
        label: "be en",
        checked: attributes.block_locale_be_en,
        onChange: () => setAttributes({
          block_locale_be_en: !attributes.block_locale_be_en
        })
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
        label: "be fr",
        checked: attributes.block_locale_be_fr,
        onChange: () => setAttributes({
          block_locale_be_fr: !attributes.block_locale_be_fr
        })
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
        label: "id en",
        checked: attributes.block_locale_id_en,
        onChange: () => setAttributes({
          block_locale_id_en: !attributes.block_locale_id_en
        })
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
        label: "cl es",
        checked: attributes.block_locale_cl_es,
        onChange: () => setAttributes({
          block_locale_cl_es: !attributes.block_locale_cl_es
        })
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
        label: "cl en",
        checked: attributes.block_locale_cl_en,
        onChange: () => setAttributes({
          block_locale_cl_en: !attributes.block_locale_cl_en
        })
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
        label: "za en",
        checked: attributes.block_locale_za_en,
        onChange: () => setAttributes({
          block_locale_za_en: !attributes.block_locale_za_en
        })
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
        label: "ie en",
        checked: attributes.block_locale_ie_en,
        onChange: () => setAttributes({
          block_locale_ie_en: !attributes.block_locale_ie_en
        })
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
        label: "no es",
        checked: attributes.block_locale_no_es,
        onChange: () => setAttributes({
          block_locale_no_es: !attributes.block_locale_no_es
        })
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
        label: "hk en",
        checked: attributes.block_locale_hk_en,
        onChange: () => setAttributes({
          block_locale_hk_en: !attributes.block_locale_hk_en
        })
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
        label: "fi en",
        checked: attributes.block_locale_fi_en,
        onChange: () => setAttributes({
          block_locale_fi_en: !attributes.block_locale_fi_en
        })
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
        label: "at en",
        checked: attributes.block_locale_at_en,
        onChange: () => setAttributes({
          block_locale_at_en: !attributes.block_locale_at_en
        })
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
        label: "jp en",
        checked: attributes.block_locale_jp_en,
        onChange: () => setAttributes({
          block_locale_jp_en: !attributes.block_locale_jp_en
        })
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
        label: "gr en",
        checked: attributes.block_locale_gr_en,
        onChange: () => setAttributes({
          block_locale_gr_en: !attributes.block_locale_gr_en
        })
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
        label: "pt en",
        checked: attributes.block_locale_pt_en,
        onChange: () => setAttributes({
          block_locale_pt_en: !attributes.block_locale_pt_en
        })
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
        label: "dk en",
        checked: attributes.block_locale_dk_en,
        onChange: () => setAttributes({
          block_locale_dk_en: !attributes.block_locale_dk_en
        })
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
        label: "cz en",
        checked: attributes.block_locale_cz_en,
        onChange: () => setAttributes({
          block_locale_cz_en: !attributes.block_locale_cz_en
        })
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
        label: "il en",
        checked: attributes.block_locale_il_en,
        onChange: () => setAttributes({
          block_locale_il_en: !attributes.block_locale_il_en
        })
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
        label: "fr fr",
        checked: attributes.block_locale_fr_fr,
        onChange: () => setAttributes({
          block_locale_fr_fr: !attributes.block_locale_fr_fr
        })
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
        label: "at de",
        checked: attributes.block_locale_at_de,
        onChange: () => setAttributes({
          block_locale_at_de: !attributes.block_locale_at_de
        })
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
        label: "be de",
        checked: attributes.block_locale_be_de,
        onChange: () => setAttributes({
          block_locale_be_de: !attributes.block_locale_be_de
        })
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
        label: "be nl",
        checked: attributes.block_locale_be_nl,
        onChange: () => setAttributes({
          block_locale_be_nl: !attributes.block_locale_be_nl
        })
      }));
    }
  };
  const activeLocales = function () {
    let localeList = [];
    let localesState = '';
    if (attributes.is_default_block) {
      localesState = 'Locales excluded:';
    } else {
      localesState = 'Locales included:';
    }
    if (attributes.block_locale_us_en) {
      localeList.push(" us/en, ");
    }
    if (attributes.block_locale_ca_en) {
      localeList.push(" ca/en, ");
    }
    if (attributes.block_locale_ca_fr) {
      localeList.push(" ca/fr, ");
    }
    if (attributes.block_locale_au_en) {
      localeList.push(" au/en, ");
    }
    if (attributes.block_locale_gb_en) {
      localeList.push(" gb/en, ");
    }
    if (attributes.block_locale_nz_en) {
      localeList.push(" nz/en, ");
    }
    if (attributes.block_locale_de_de) {
      localeList.push(" de/de, ");
    }
    if (attributes.block_locale_fr_fr) {
      localeList.push(" fr/fr, ");
    }
    if (attributes.block_locale_fr_en) {
      localeList.push(" fr/en, ");
    }
    if (attributes.block_locale_ph_en) {
      localeList.push(" ph/en, ");
    }
    if (attributes.block_locale_mx_en) {
      localeList.push(" mx/en, ");
    }
    if (attributes.block_locale_mx_es) {
      localeList.push(" mx/es, ");
    }
    if (attributes.block_locale_es_en) {
      localeList.push(" es/en, ");
    }
    if (attributes.block_locale_es_es) {
      localeList.push(" es/es, ");
    }
    if (attributes.block_locale_sg_en) {
      localeList.push(" sg/en, ");
    }
    if (attributes.block_locale_it_en) {
      localeList.push(" it/en, ");
    }
    if (attributes.block_locale_ch_en) {
      localeList.push(" ch/en, ");
    }
    if (attributes.block_locale_ch_fr) {
      localeList.push(" ch/fr, ");
    }
    if (attributes.block_locale_ch_de) {
      localeList.push(" ch/de, ");
    }
    if (attributes.block_locale_nl_en) {
      localeList.push(" nl/en, ");
    }
    if (attributes.block_locale_nl_nl) {
      localeList.push(" nl/nl, ");
    }
    if (attributes.block_locale_se_en) {
      localeList.push(" se/en, ");
    }
    if (attributes.block_locale_be_en) {
      localeList.push(" be/en, ");
    }
    if (attributes.block_locale_be_fr) {
      localeList.push(" be/fr, ");
    }
    if (attributes.block_locale_id_en) {
      localeList.push(" id/en, ");
    }
    if (attributes.block_locale_cl_es) {
      localeList.push(" cl/es, ");
    }
    if (attributes.block_locale_cl_en) {
      localeList.push(" cl/en, ");
    }
    if (attributes.block_locale_za_en) {
      localeList.push(" za/en, ");
    }
    if (attributes.block_locale_ie_en) {
      localeList.push(" ie/en, ");
    }
    if (attributes.block_locale_no_es) {
      localeList.push(" no/es, ");
    }
    if (attributes.block_locale_hk_en) {
      localeList.push(" hk/en, ");
    }
    if (attributes.block_locale_fi_en) {
      localeList.push(" fi/en, ");
    }
    if (attributes.block_locale_at_en) {
      localeList.push(" at/en, ");
    }
    if (attributes.block_locale_jp_en) {
      localeList.push(" jp/en, ");
    }
    if (attributes.block_locale_gr_en) {
      localeList.push(" gr/en, ");
    }
    if (attributes.block_locale_pt_en) {
      localeList.push(" pt/en, ");
    }
    if (attributes.block_locale_dk_en) {
      localeList.push(" dk/en, ");
    }
    if (attributes.block_locale_cz_en) {
      localeList.push(" cz/en, ");
    }
    if (attributes.block_locale_il_en) {
      localeList.push(" il/en, ");
    }
    if (attributes.block_locale_at_de) {
      localeList.push(" at/de, ");
    }
    if (attributes.block_locale_be_de) {
      localeList.push(" be/de, ");
    }
    if (attributes.block_locale_be_nl) {
      localeList.push(" be/nl, ");
    }
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: "locales-state"
    }, " ", localesState, " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, localeList), " ");
  };
  const blockState = function () {
    let uiState = '';
    if (attributes.ui_state) {
      uiState = 'ui-minify';
    } else {
      uiState = '';
    }
    return uiState;
  };

  // Block contents constructor.
  let blockContents = [];
  setTimeout(function () {
    let blockId = 'block-' + clientId;
    var blockList = document.getElementById(blockId).querySelectorAll(".block-editor-block-list__layout > div");
    Array.from(blockList).forEach((element, index) => {
      var blockDataTitle = element.getAttribute('data-title');
      blockContents.push(blockDataTitle);
      document.querySelector('.list-' + clientId).innerHTML = blockContents.toString().replaceAll(",", ", ");
    });
  }, 2000);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "header-row"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    className: "h3-style"
  }, "Localization Wrapper", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: "Minify / Expand block",
    checked: attributes.ui_state,
    onChange: () => setAttributes({
      ui_state: !attributes.ui_state
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, activeLocales(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'inner-list list-' + clientId
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: "Is this a 'default' block?",
    checked: attributes.is_default_block,
    onChange: () => setAttributes({
      is_default_block: !attributes.is_default_block
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col " + blockState()
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", {
    className: "h5-style"
  }, "Top locales"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "locale-picker border-bottom"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: "us en",
    checked: attributes.block_locale_us_en,
    onChange: () => setAttributes({
      block_locale_us_en: !attributes.block_locale_us_en
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: "ca en",
    checked: attributes.block_locale_ca_en,
    onChange: () => setAttributes({
      block_locale_ca_en: !attributes.block_locale_ca_en
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: "ca fr",
    checked: attributes.block_locale_ca_fr,
    onChange: () => setAttributes({
      block_locale_ca_fr: !attributes.block_locale_ca_fr
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: "gb en",
    checked: attributes.block_locale_gb_en,
    onChange: () => setAttributes({
      block_locale_gb_en: !attributes.block_locale_gb_en
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: "au en",
    checked: attributes.block_locale_au_en,
    onChange: () => setAttributes({
      block_locale_au_en: !attributes.block_locale_au_en
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: "nz en",
    checked: attributes.block_locale_nz_en,
    onChange: () => setAttributes({
      block_locale_nz_en: !attributes.block_locale_nz_en
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: "de de",
    checked: attributes.block_locale_de_de,
    onChange: () => setAttributes({
      block_locale_de_de: !attributes.block_locale_de_de
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: "fr fr",
    checked: attributes.block_locale_fr_fr,
    onChange: () => setAttributes({
      block_locale_fr_fr: !attributes.block_locale_fr_fr
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: "fr en",
    checked: attributes.block_locale_fr_en,
    onChange: () => setAttributes({
      block_locale_fr_en: !attributes.block_locale_fr_en
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", {
    className: "h5-style"
  }, "Other locales"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: "Show other locale options",
    checked: attributes.other_locales_show,
    onChange: () => setAttributes({
      other_locales_show: !attributes.other_locales_show
    })
  }), otherLocaleOptions()), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col " + blockState()
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks
  // templateLock="all"
  , null)));
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./attributes */ "./src/attributes.js");






(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('ridewrap-block/localization-wrapper', {
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_5__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_4__["default"],
  save: () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks.Content, null)
});

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 		var chunkLoadingGlobal = self["webpackChunklocalization_wrapper"] = self["webpackChunklocalization_wrapper"] || [];
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