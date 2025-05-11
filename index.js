/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/api/api.js":
/*!************************!*\
  !*** ./src/api/api.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.esm.js");
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/database */ "./node_modules/firebase/database/dist/index.esm.js");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");



var firebaseConfig = {
  apiKey: "AIzaSyA4Ut5x488eODNFmnlisGKRSNYhuoHJ6Pw",
  authDomain: "mcu-tiers.firebaseapp.com",
  databaseURL: "https://mcu-tiers.firebaseio.com",
  projectId: "mcu-tiers",
  storageBucket: "mcu-tiers.appspot.com",
  messagingSenderId: "236578939074",
  appId: "1:236578939074:web:b57b6e1006f6b327"
}; // Initialize DB

var db = firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].initializeApp(firebaseConfig).database();
var API_BASE = 'https://gateway.marvel.com/v1/public';
var MARVEL_API_PUBLIC = 'a2247180c2419763e9dd936e4d1f0aab';
var requestConfig = window.location.hostname === 'localhost' ? {
  "method": "GET",
  "referrer": "developer.marvel.com",
  // required for API responses
  "referrerPolicy": "no-referrer-when-downgrade"
} : {
  "method": "GET"
};
/* harmony default export */ __webpack_exports__["default"] = ({
  // Marvel API Calls
  getComicsByDateDescriptor: function getComicsByDateDescriptor(dateDescriptor) {
    var fetchURI = "".concat(API_BASE, "/comics?dateDescriptor=").concat(dateDescriptor, "&apikey=").concat(MARVEL_API_PUBLIC, "&limit=100&orderBy=title");
    return fetch(fetchURI, requestConfig);
  },
  getCreator: function getCreator(creatorID) {
    var fetchURI = "".concat(API_BASE, "/creators/").concat(creatorID, "?&apikey=").concat(MARVEL_API_PUBLIC);
    return fetch(fetchURI, requestConfig);
  },
  getCharacter: function getCharacter(charID) {
    var fetchURI = "".concat(API_BASE, "/characters/").concat(charID, "?&apikey=").concat(MARVEL_API_PUBLIC);
    return fetch(fetchURI, requestConfig);
  },
  getStory: function getStory(storyID) {
    var fetchURI = "".concat(API_BASE, "/stories/").concat(storyID, "?&apikey=").concat(MARVEL_API_PUBLIC);
    return fetch(fetchURI, requestConfig);
  },
  // Firebase Calls
  getMoviesFB: function getMoviesFB() {
    return db.ref('movies').once('value');
  },
  getTiersFB: function getTiersFB() {
    return db.ref('tiers').once('value');
  },
  updateTiersFB: function updateTiersFB(tiers) {
    return db.ref('tiers').set(tiers);
  },
  updateMoviesFB: function updateMoviesFB(movies) {
    return db.ref('movies').set(movies);
  },
  login: function login(email, pass) {
    firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].auth().signInWithEmailAndPassword(email, pass).then(function (response) {
      console.log('response: ', response);
      console.log('...you are signed in!');
    }).catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
  },
  logout: function logout() {
    firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].auth().signOut().then(function () {
      return console.log('You have signed out');
    }).catch(function (error) {
      return console.log('Error signing out: ', error);
    });
  },
  getLoginObserver: function getLoginObserver(callback) {
    firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].auth().onAuthStateChanged(function (user) {
      user = user ? user : {};
      callback(user);
    });
  }
});

/***/ }),

/***/ "./src/api/index.js":
/*!**************************!*\
  !*** ./src/api/index.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./src/api/api.js");

/* harmony default export */ __webpack_exports__["default"] = (_api__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/Layout/CommonTemplate.js":
/*!*************************************************!*\
  !*** ./src/components/Layout/CommonTemplate.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _HeaderBar_HeaderBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HeaderBar/HeaderBar */ "./src/components/Layout/HeaderBar/HeaderBar.js");
/* harmony import */ var _Drawer_Drawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Drawer/Drawer */ "./src/components/Layout/Drawer/Drawer.js");
/* harmony import */ var _Lightbox_Lightbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Lightbox/Lightbox */ "./src/components/Layout/Lightbox/Lightbox.js");
/* harmony import */ var _WindowShade_WindowShade__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./WindowShade/WindowShade */ "./src/components/Layout/WindowShade/WindowShade.js");
/* harmony import */ var _CommonTemplate_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CommonTemplate.scss */ "./src/components/Layout/CommonTemplate.scss");








var CommonTemplate = function CommonTemplate(_ref) {
  var pageName = _ref.pageName,
      drawerChildren = _ref.drawerChildren,
      children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_HeaderBar_HeaderBar__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Drawer_Drawer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    section: pageName
  }, drawerChildren), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Lightbox_Lightbox__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_WindowShade_WindowShade__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", {
    className: "main-content-".concat(pageName)
  }, children));
};

CommonTemplate.propTypes = {
  pageName: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  drawerChildren: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().element),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().any)
};
/* harmony default export */ __webpack_exports__["default"] = (CommonTemplate);

/***/ }),

/***/ "./src/components/Layout/Drawer/Drawer.js":
/*!************************************************!*\
  !*** ./src/components/Layout/Drawer/Drawer.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Drawer_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Drawer.scss */ "./src/components/Layout/Drawer/Drawer.scss");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");






var Drawer = function Drawer(_ref) {
  var children = _ref.children;
  var drawerActive = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function (state) {
    return state.drawer;
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("nav", {
    id: "drawer",
    className: "".concat(drawerActive ? 'active' : '')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
    to: "/comics"
  }, "Admin")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
    to: "/admin"
  }, "Admin"))), children);
};

Drawer.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().any),
  section: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
/* harmony default export */ __webpack_exports__["default"] = (Drawer);

/***/ }),

/***/ "./src/components/Layout/HeaderBar/HeaderBar.js":
/*!******************************************************!*\
  !*** ./src/components/Layout/HeaderBar/HeaderBar.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _HeaderBar_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeaderBar.scss */ "./src/components/Layout/HeaderBar/HeaderBar.scss");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var store_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! store/actions */ "./src/store/actions/index.js");





var HeaderBar = function HeaderBar() {
  var drawerActive = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {
    return state.drawer;
  });
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();

  var toggleMenu = function toggleMenu() {
    if (drawerActive) {
      dispatch((0,store_actions__WEBPACK_IMPORTED_MODULE_3__.drawerHide)());
      dispatch((0,store_actions__WEBPACK_IMPORTED_MODULE_3__.windowshadeHide)());
    } else {
      dispatch((0,store_actions__WEBPACK_IMPORTED_MODULE_3__.drawerShow)());
      dispatch((0,store_actions__WEBPACK_IMPORTED_MODULE_3__.windowshadeShow)());
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "header-bar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "flex-left vertical-align-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "hamburger ".concat(drawerActive ? 'active' : ''),
    onClick: function onClick() {
      return toggleMenu();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "line"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "line"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "line"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "flex-center vertical-align-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "logo"
  }, "SLATER"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "logo logo2"
  }, "COMICS")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "flex-right vertical-align-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "\xA0")));
};

/* harmony default export */ __webpack_exports__["default"] = (HeaderBar);

/***/ }),

/***/ "./src/components/Layout/Lightbox/LBComicImage/LBComicImage.js":
/*!*********************************************************************!*\
  !*** ./src/components/Layout/Lightbox/LBComicImage/LBComicImage.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



var LBComicImage = function LBComicImage(_ref) {
  var url = _ref.url,
      title = _ref.title;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: url,
    alt: title
  });
};

LBComicImage.propTypes = {
  url: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
/* harmony default export */ __webpack_exports__["default"] = (LBComicImage);

/***/ }),

/***/ "./src/components/Layout/Lightbox/LBDetails/LBDetails.js":
/*!***************************************************************!*\
  !*** ./src/components/Layout/Lightbox/LBDetails/LBDetails.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



var LBDetails = function LBDetails(_ref) {
  var details = _ref.details;
  var url = null;
  var wikilink = details === null || details === void 0 ? void 0 : details.urls.find(function (url) {
    return url.type === 'wiki';
  });

  if (wikilink) {
    // Replace Given URL with desired charater page
    url = decodeURI(wikilink.url.split('?')[0]);
    url = url.replace(/_/g, '-');
    url = url.replace(/[()]/g, '');
    url = url.replace('/universe/', '/characters/');
    url = url.toLowerCase();
    url = "".concat(url, "/in-comics");
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "lb-details"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, details.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, details.description), url && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: url,
    target: "_blank",
    rel: "noreferrer"
  }, "wiki"));
};

LBDetails.propTypes = {
  details: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
};
/* harmony default export */ __webpack_exports__["default"] = (LBDetails);

/***/ }),

/***/ "./src/components/Layout/Lightbox/LBHickman/LBHickman.js":
/*!***************************************************************!*\
  !*** ./src/components/Layout/Lightbox/LBHickman/LBHickman.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_page_roots_HickmanPage_characterData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/page_roots/HickmanPage/characterData */ "./src/components/page_roots/HickmanPage/characterData.js");
/* harmony import */ var _LBHickman_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LBHickman.scss */ "./src/components/Layout/Lightbox/LBHickman/LBHickman.scss");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var LBDetails = function LBDetails(_ref) {
  var details = _ref.details;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 1),
      detailsOpen = _useState2[0];

  var info = components_page_roots_HickmanPage_characterData__WEBPACK_IMPORTED_MODULE_2__.characterData[details.character];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "lb-hickman",
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, info.name), info.identity && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "Identity: ", info.identity), info.first_appearance && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", null, "First Appearance: ", info.first_appearance), info.description && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", null, "Full Story & Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
    className: "".concat(detailsOpen ? 'active' : '')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: info.description
    }
  }))));
};

LBDetails.propTypes = {
  details: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
};
/* harmony default export */ __webpack_exports__["default"] = (LBDetails);

/***/ }),

/***/ "./src/components/Layout/Lightbox/Lightbox.js":
/*!****************************************************!*\
  !*** ./src/components/Layout/Lightbox/Lightbox.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _LBComicImage_LBComicImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LBComicImage/LBComicImage */ "./src/components/Layout/Lightbox/LBComicImage/LBComicImage.js");
/* harmony import */ var _LBDetails_LBDetails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LBDetails/LBDetails */ "./src/components/Layout/Lightbox/LBDetails/LBDetails.js");
/* harmony import */ var _LBHickman_LBHickman__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LBHickman/LBHickman */ "./src/components/Layout/Lightbox/LBHickman/LBHickman.js");
/* harmony import */ var _Lightbox_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Lightbox.scss */ "./src/components/Layout/Lightbox/Lightbox.scss");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var store_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! store/actions */ "./src/store/actions/index.js");








var Lightbox = function Lightbox() {
  var lightboxObj = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(function (state) {
    return state.lightbox;
  });
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();

  var handleClick = function handleClick() {
    dispatch((0,store_actions__WEBPACK_IMPORTED_MODULE_6__.lightboxHide)());
    dispatch((0,store_actions__WEBPACK_IMPORTED_MODULE_6__.windowshadeHide)());
  };

  var LBcontent = null;

  switch (lightboxObj.type) {
    case 'cover-image':
      LBcontent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_LBComicImage_LBComicImage__WEBPACK_IMPORTED_MODULE_1__["default"], {
        url: lightboxObj.url,
        title: lightboxObj.title
      });
      break;

    case 'details-character':
    case 'details-creator':
      LBcontent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_LBDetails_LBDetails__WEBPACK_IMPORTED_MODULE_2__["default"], {
        details: lightboxObj
      });
      break;

    case 'details-hickman':
      LBcontent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_LBHickman_LBHickman__WEBPACK_IMPORTED_MODULE_3__["default"], {
        details: lightboxObj
      });
      break;

    default:
      LBcontent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "DEFAULT LB");
      break;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "lightbox ".concat(lightboxObj.type ? 'active' : ''),
    onClick: function onClick() {
      return handleClick();
    }
  }, LBcontent);
};

/* harmony default export */ __webpack_exports__["default"] = (Lightbox);

/***/ }),

/***/ "./src/components/Layout/WindowShade/WindowShade.js":
/*!**********************************************************!*\
  !*** ./src/components/Layout/WindowShade/WindowShade.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _WindowShade_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WindowShade.scss */ "./src/components/Layout/WindowShade/WindowShade.scss");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var store_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! store/actions */ "./src/store/actions/index.js");





var WindowShade = function WindowShade() {
  var active = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {
    return state.windowshade;
  });
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();

  var closeShade = function closeShade() {
    dispatch((0,store_actions__WEBPACK_IMPORTED_MODULE_3__.windowshadeHide)());
    dispatch((0,store_actions__WEBPACK_IMPORTED_MODULE_3__.drawerHide)());
    dispatch((0,store_actions__WEBPACK_IMPORTED_MODULE_3__.lightboxHide)());
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "window-shade ".concat(active ? 'active' : ''),
    onClick: function onClick() {
      return closeShade();
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (WindowShade);

/***/ }),

/***/ "./src/components/forms/LoginForm/LoginForm.js":
/*!*****************************************************!*\
  !*** ./src/components/forms/LoginForm/LoginForm.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var src_api_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/api/api */ "./src/api/api.js");
/* harmony import */ var _useFormData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../useFormData */ "./src/components/forms/useFormData.js");
/* harmony import */ var _forms_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../forms.scss */ "./src/components/forms/forms.scss");





var handleLogin = function handleLogin(data) {
  return src_api_api__WEBPACK_IMPORTED_MODULE_1__["default"].login(data.login_email, data.login_pass);
};

var LoginForm = function LoginForm() {
  var _useFormData = (0,_useFormData__WEBPACK_IMPORTED_MODULE_2__.useFormData)(handleLogin),
      formData = _useFormData.formData,
      handleSubmit = _useFormData.handleSubmit,
      handleInputChange = _useFormData.handleInputChange;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
    className: "basic-form",
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Login Here"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "field-pair"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    htmlFor: "login_email"
  }, "Email "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "input-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "email",
    name: "login_email",
    id: "login_email",
    value: formData.login_email,
    onChange: handleInputChange
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "field-pair"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    htmlFor: "login_pass"
  }, "Password "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "input-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    id: "login_pass",
    type: "password",
    name: "login_pass",
    value: formData.login_pass,
    onChange: handleInputChange
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "submit"
  }, "login"));
};

/* harmony default export */ __webpack_exports__["default"] = (LoginForm);

/***/ }),

/***/ "./src/components/forms/useFormData.js":
/*!*********************************************!*\
  !*** ./src/components/forms/useFormData.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useFormData: function() { return /* binding */ useFormData; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// This hook handles input changes on a form
//   and returns them as an inputs object


var noop = function noop() {};

var useFormData = function useFormData() {
  var onSubmit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : noop;
  var init = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(init),
      _useState2 = _slicedToArray(_useState, 2),
      formData = _useState2[0],
      setFormData = _useState2[1];

  var handleReset = function handleReset(e) {
    if (e !== null && e !== void 0 && e.preventDefault) e === null || e === void 0 ? void 0 : e.preventDefault();
    setFormData(init);
  };

  var handleSetFormData = function handleSetFormData(data) {
    return setFormData(data);
  };

  var handleSubmit = function handleSubmit(e) {
    if (e !== null && e !== void 0 && e.preventDefault) e === null || e === void 0 ? void 0 : e.preventDefault();
    onSubmit(formData);
  };

  var handleInputChange = function handleInputChange(e) {
    if (e !== null && e !== void 0 && e.persist) e.persist();
    setFormData(function (formData) {
      return _objectSpread(_objectSpread({}, formData), {}, _defineProperty({}, e.target.name, e.target.value));
    });
  };

  return {
    formData: formData,
    handleSubmit: handleSubmit,
    handleInputChange: handleInputChange,
    handleReset: handleReset,
    handleSetFormData: handleSetFormData
  };
};

/***/ }),

/***/ "./src/components/page_roots/AdminPage/AdminPage.js":
/*!**********************************************************!*\
  !*** ./src/components/page_roots/AdminPage/AdminPage.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useFetchAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../useFetchAuth */ "./src/components/page_roots/useFetchAuth.js");
/* harmony import */ var src_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/api */ "./src/api/index.js");
/* harmony import */ var components_forms_LoginForm_LoginForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/forms/LoginForm/LoginForm */ "./src/components/forms/LoginForm/LoginForm.js");
/* harmony import */ var components_Layout_CommonTemplate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Layout/CommonTemplate */ "./src/components/Layout/CommonTemplate.js");
/* harmony import */ var _AdminRankings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AdminRankings */ "./src/components/page_roots/AdminPage/AdminRankings/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var AdminPage = function AdminPage() {
  var _useFetchAuth = (0,_useFetchAuth__WEBPACK_IMPORTED_MODULE_2__.useFetchAuth)(),
      _useFetchAuth2 = _slicedToArray(_useFetchAuth, 2),
      loadingUser = _useFetchAuth2[0],
      user = _useFetchAuth2[1];

  var logoutUser = function logoutUser() {
    return src_api__WEBPACK_IMPORTED_MODULE_3__["default"].logout();
  };

  var allRankings = function allRankings() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "MCU Rankings"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_AdminRankings__WEBPACK_IMPORTED_MODULE_6__["default"], {
      itemsAPI: src_api__WEBPACK_IMPORTED_MODULE_3__["default"].getMoviesFB,
      saveRankings: src_api__WEBPACK_IMPORTED_MODULE_3__["default"].updateMoviesFB,
      tiersAPI: src_api__WEBPACK_IMPORTED_MODULE_3__["default"].getTiersFB,
      updateTierData: src_api__WEBPACK_IMPORTED_MODULE_3__["default"].updateTiersFB
    }));
  };

  var AdminSection = function AdminSection(_ref) {
    var user = _ref.user;
    return user.logged_in ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "".concat(user.name, " is Logged In"), " | ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "hand",
      onClick: function onClick() {
        return logoutUser();
      }
    }, "logout")), allRankings()) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_forms_LoginForm_LoginForm__WEBPACK_IMPORTED_MODULE_4__["default"], null);
  };

  AdminSection.propTypes = {
    user: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_Layout_CommonTemplate__WEBPACK_IMPORTED_MODULE_5__["default"], {
    drawerChildren: null,
    pageName: "admin"
  }, loadingUser && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "loading"
  }, "loading..."), !loadingUser && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(AdminSection, {
    user: user
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (AdminPage);

/***/ }),

/***/ "./src/components/page_roots/AdminPage/AdminRankings/AdminRankings.js":
/*!****************************************************************************!*\
  !*** ./src/components/page_roots/AdminPage/AdminRankings/AdminRankings.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_utils_sorting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/utils/sorting */ "./src/utils/sorting.js");
/* harmony import */ var _TiersNameForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TiersNameForm */ "./src/components/page_roots/AdminPage/AdminRankings/TiersNameForm.js");
/* harmony import */ var _SortListItems__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SortListItems */ "./src/components/page_roots/AdminPage/AdminRankings/SortListItems.js");
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dnd */ "./node_modules/react-dnd/dist/esm/core/DndProvider.js");
/* harmony import */ var react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dnd-html5-backend */ "./node_modules/react-dnd-html5-backend/dist/esm/index.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var AdminRankings = function AdminRankings(_ref) {
  var itemsAPI = _ref.itemsAPI,
      tiersAPI = _ref.tiersAPI,
      updateTierData = _ref.updateTierData,
      saveRankings = _ref.saveRankings;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      tiers = _useState2[0],
      setTiers = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      items = _useState4[0],
      setItems = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState6 = _slicedToArray(_useState5, 2),
      newTitle = _useState6[0],
      setNewTitle = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState8 = _slicedToArray(_useState7, 2),
      newMovieKey = _useState8[0],
      setNewMovieKey = _useState8[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    return getTiers();
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    return getItems();
  }, []);

  function getItems() {
    itemsAPI().then(function (snapshot) {
      var sortedItems = snapshot.val().sort((0,src_utils_sorting__WEBPACK_IMPORTED_MODULE_2__.sorting)().sortBy('rank', true));
      setItems(sortedItems);
    });
  }

  function getTiers() {
    tiersAPI().then(function (snapshot) {
      var sortedTiers = snapshot.val().sort((0,src_utils_sorting__WEBPACK_IMPORTED_MODULE_2__.sorting)().sortBy('position', true));
      setTiers(sortedTiers);
    });
  }

  function handleAddItem() {
    if (!newTitle || !newMovieKey || newMovieKey.indexOf(' ') > -1) return;
    saveRankings([].concat(_toConsumableArray(items), [{
      title: newTitle,
      rank: items.length + 1,
      key: newMovieKey.trim()
    }]));
    setNewTitle('');
    setNewMovieKey('');
  }

  var tiersContent = tiers.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_dnd__WEBPACK_IMPORTED_MODULE_5__.DndProvider, {
    backend: react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_6__.HTML5Backend
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SortListItems__WEBPACK_IMPORTED_MODULE_4__["default"], {
    items: items,
    setItems: setItems,
    getItems: getItems,
    saveRankings: saveRankings
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    value: newTitle,
    placeholder: "Title",
    onChange: function onChange(e) {
      return setNewTitle(e.target.value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    value: newMovieKey,
    placeholder: "Key",
    onChange: function onChange(e) {
      return setNewMovieKey(e.target.value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "button",
    onClick: handleAddItem
  }, "Add New Item")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_TiersNameForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
    tiers: tiers,
    updateTierData: updateTierData
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "loading"
  }, "loading...");
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "admin-tiers-list"
  }, tiersContent);
};

AdminRankings.propTypes = {
  itemsAPI: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  saveRankings: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  tiersAPI: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  updateTierData: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
};
/* harmony default export */ __webpack_exports__["default"] = (AdminRankings);

/***/ }),

/***/ "./src/components/page_roots/AdminPage/AdminRankings/MoveableItem.js":
/*!***************************************************************************!*\
  !*** ./src/components/page_roots/AdminPage/AdminRankings/MoveableItem.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dnd */ "./node_modules/react-dnd/dist/esm/decorators/DropTarget.js");
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dnd */ "./node_modules/react-dnd/dist/esm/decorators/DragSource.js");
/* harmony import */ var src_api_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/api/api */ "./src/api/api.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var style = {
  border: '1px dashed gray',
  padding: '0.5rem 1rem',
  marginBottom: '.5rem',
  backgroundColor: 'white',
  cursor: 'move'
};
var buttonStyle = {
  'margin-left': '1rem'
};
var reviewStyle = {
  padding: '0.5rem 1rem'
}; // eslint-disable-next-line react/prop-types

var MoveableItem = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function Item(_ref, ref) {
  var index = _ref.index,
      item = _ref.item,
      getItems = _ref.getItems,
      isDragging = _ref.isDragging,
      connectDragSource = _ref.connectDragSource,
      connectDropTarget = _ref.connectDropTarget;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      showReview = _useState2[0],
      setShowReview = _useState2[1];

  var rootElement = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var reviewInput = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var metacriticInput = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  connectDragSource(rootElement);
  connectDropTarget(rootElement);
  var opacity = isDragging ? 0 : 1;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, function () {
    return {
      getNode: function getNode() {
        return rootElement.current;
      }
    };
  });
  var text = item.title;
  var review = item.review;
  var metacritic = item.metacritic;
  var itemId = item.rank - 1;

  var updateReview = function updateReview(e) {
    var _reviewInput$current, _metacriticInput$curr;

    e.preventDefault();
    var newReview = (reviewInput === null || reviewInput === void 0 ? void 0 : (_reviewInput$current = reviewInput.current) === null || _reviewInput$current === void 0 ? void 0 : _reviewInput$current.value) || '';
    var newMetacritic = (metacriticInput === null || metacriticInput === void 0 ? void 0 : (_metacriticInput$curr = metacriticInput.current) === null || _metacriticInput$curr === void 0 ? void 0 : _metacriticInput$curr.value) || '';
    src_api_api__WEBPACK_IMPORTED_MODULE_1__["default"].getMoviesFB().then(function (snapshot) {
      var movies = snapshot.val();
      var thisMovie = movies[itemId];

      if (thisMovie.review !== newReview) {
        thisMovie.review = newReview;
      }

      if (thisMovie.metacritic !== newMetacritic) {
        thisMovie.metacritic = newMetacritic;
      }

      src_api_api__WEBPACK_IMPORTED_MODULE_1__["default"].updateMoviesFB(movies).then(function () {
        getItems();
        setShowReview(false);
      });
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    ref: rootElement,
    style: _objectSpread(_objectSpread({}, style), {}, {
      opacity: opacity
    })
  }, index + 1, " | ", text, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    style: buttonStyle,
    onClick: function onClick() {
      return setShowReview(function (prev) {
        return !prev;
      });
    }
  }, showReview ? 'cancel' : 'edit'), showReview && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
    style: reviewStyle,
    method: "post",
    onSubmit: updateReview
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Review"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("textarea", {
    name: "".concat(itemId, "_review"),
    ref: reviewInput,
    defaultValue: review || ''
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Metacritic"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    name: "".concat(itemId, "_rmetacritic"),
    ref: metacriticInput,
    defaultValue: metacritic || ''
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", null, "save")));
});
/* harmony default export */ __webpack_exports__["default"] = ((0,react_dnd__WEBPACK_IMPORTED_MODULE_2__.DropTarget)('item', {
  hover: function hover(props, monitor, component) {
    if (!component) {
      return null;
    } // node = HTML Div element from imperative API


    var node = component.getNode();

    if (!node) {
      return null;
    }

    var dragIndex = monitor.getItem().index;
    var hoverIndex = props.index; // Don't replace items with themselves

    if (dragIndex === hoverIndex) {
      return;
    } // Determine rectangle on screen


    var hoverBoundingRect = node.getBoundingClientRect(); // Get vertical middle

    var hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2; // Determine mouse position

    var clientOffset = monitor.getClientOffset(); // Get pixels to the top

    var hoverClientY = clientOffset.y - hoverBoundingRect.top; // Only perform the move when the mouse has crossed half of the items height
    // When dragging downwards, only move when the cursor is below 50%
    // When dragging upwards, only move when the cursor is above 50%
    // Dragging downwards

    if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
      return;
    } // Dragging upwards


    if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
      return;
    } // Time to actually perform the action


    props.moveItem(dragIndex, hoverIndex); // Note: we're mutating the monitor item here!
    // Generally it's better to avoid mutations,
    // but it's good here for the sake of performance
    // to avoid expensive index searches.

    monitor.getItem().index = hoverIndex;
  }
}, function (connect) {
  return {
    connectDropTarget: connect.dropTarget()
  };
})((0,react_dnd__WEBPACK_IMPORTED_MODULE_3__.DragSource)('item', {
  beginDrag: function beginDrag(props) {
    return {
      id: props.id,
      index: props.index
    };
  }
}, function (connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
})(MoveableItem)));

/***/ }),

/***/ "./src/components/page_roots/AdminPage/AdminRankings/SortListItems.js":
/*!****************************************************************************!*\
  !*** ./src/components/page_roots/AdminPage/AdminRankings/SortListItems.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MoveableItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MoveableItem */ "./src/components/page_roots/AdminPage/AdminRankings/MoveableItem.js");
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! immutability-helper */ "./node_modules/immutability-helper/index.js");
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(immutability_helper__WEBPACK_IMPORTED_MODULE_3__);





var SortListItems = function SortListItems(_ref) {
  var items = _ref.items,
      setItems = _ref.setItems,
      getItems = _ref.getItems,
      saveRankings = _ref.saveRankings;

  var moveItem = function moveItem(dragIndex, hoverIndex) {
    var dragItem = items[dragIndex];
    setItems(immutability_helper__WEBPACK_IMPORTED_MODULE_3___default()(items, {
      $splice: [[dragIndex, 1], [hoverIndex, 0, dragItem]]
    }));
  };

  var saveItems = function saveItems() {
    saveRankings(items.map(function (item, idx) {
      item.rank = idx + 1;
      return item;
    }));
  };

  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    console.log({
      items: items
    });
  }, [items]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, items.map(function (item, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_MoveableItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: item.key,
      index: i,
      item: item,
      getItems: getItems,
      moveItem: moveItem
    });
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "button",
    onClick: saveItems
  }, "Save"));
};

SortListItems.propTypes = {
  items: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),
  setItems: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  saveRankings: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  getItems: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
};
/* harmony default export */ __webpack_exports__["default"] = (SortListItems);

/***/ }),

/***/ "./src/components/page_roots/AdminPage/AdminRankings/TiersNameForm.js":
/*!****************************************************************************!*\
  !*** ./src/components/page_roots/AdminPage/AdminRankings/TiersNameForm.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_components_forms_useFormData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/components/forms/useFormData */ "./src/components/forms/useFormData.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }





var TiersNameForm = function TiersNameForm(_ref) {
  var tiers = _ref.tiers,
      updateTierData = _ref.updateTierData;

  var updateTiers = function updateTiers() {
    var updateData = _toConsumableArray(tiers);

    updateData.forEach(function (tier) {
      tier.desc = formData[tier.title] === 0 || formData[tier.title] ? formData[tier.title] : tier.desc;

      if (tier.lowest) {
        tier.lowest = formData["".concat(tier.title, "_lowest")] === 0 || formData["".concat(tier.title, "_lowest")] ? parseInt(formData["".concat(tier.title, "_lowest")]) : tier.lowest;
      }
    });
    updateTierData(updateData);
  };

  var _useFormData = (0,src_components_forms_useFormData__WEBPACK_IMPORTED_MODULE_2__.useFormData)(updateTiers),
      formData = _useFormData.formData,
      handleSubmit = _useFormData.handleSubmit,
      handleInputChange = _useFormData.handleInputChange,
      handleSetFormData = _useFormData.handleSetFormData;

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var initFormData = function initFormData(tiers) {
      var formData = {};
      tiers.forEach(function (tier) {
        formData[tier.title] = tier.desc;
        formData["".concat(tier.title, "_lowest")] = tier.lowest;
      });
      return formData;
    };

    handleSetFormData(initFormData(tiers));
  }, []);
  var TierInputs = tiers.map(function (tier, idx) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      key: tier.title,
      className: "field-pair"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, tier.title.toUpperCase()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "input-container"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      value: formData[tier.title],
      onChange: handleInputChange,
      name: tier.title
    }), idx + 1 < tiers.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
      value: formData["".concat(tier.title, "_lowest")],
      onChange: handleInputChange,
      name: "".concat(tier.title, "_lowest")
    })));
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
    className: "basic-form",
    onSubmit: handleSubmit
  }, TierInputs, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "submit"
  }, "Update Tiers"));
};

TiersNameForm.propTypes = {
  tiers: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),
  updateTierData: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
};
/* harmony default export */ __webpack_exports__["default"] = (TiersNameForm);

/***/ }),

/***/ "./src/components/page_roots/AdminPage/AdminRankings/index.js":
/*!********************************************************************!*\
  !*** ./src/components/page_roots/AdminPage/AdminRankings/index.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AdminRankings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdminRankings */ "./src/components/page_roots/AdminPage/AdminRankings/AdminRankings.js");

/* harmony default export */ __webpack_exports__["default"] = (_AdminRankings__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/page_roots/AppRouter.js":
/*!************************************************!*\
  !*** ./src/components/page_roots/AppRouter.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ App; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _AdminPage_AdminPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdminPage/AdminPage */ "./src/components/page_roots/AdminPage/AdminPage.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
 // import HickmanPage from "./HickmanPage/HickmanPage"
// import McuRankPage from "./McuRankPage/McuRankPage"
// import ComicsPage from "./ComicsPage/ComicsPage"



function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Route, {
    path: "admin",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_AdminPage_AdminPage__WEBPACK_IMPORTED_MODULE_1__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Route, {
    path: "comics",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_AdminPage_AdminPage__WEBPACK_IMPORTED_MODULE_1__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Route, {
    path: "/comics",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_AdminPage_AdminPage__WEBPACK_IMPORTED_MODULE_1__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Route, {
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_AdminPage_AdminPage__WEBPACK_IMPORTED_MODULE_1__["default"], null)
  })));
}

/***/ }),

/***/ "./src/components/page_roots/HickmanPage/characterData.js":
/*!****************************************************************!*\
  !*** ./src/components/page_roots/HickmanPage/characterData.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   characterData: function() { return /* binding */ characterData; }
/* harmony export */ });
var characterData = {
  'captain-america': {
    name: "Captain America",
    identity: "Steve Rogers",
    first_appearance: "Avengers (2012) #1",
    moments: [{
      text: 'I Am Steve, not Steve-o',
      issue: 'Avengers #3',
      type: 'quote'
    }],
    description: "<p>Steve gets to show his strengths as a strategist with moral\n      conviction in every aspect of this story. Hickman shows how this is Cap's best asset\n      and achilles heel. His man-out-of-time condition is\n      taken in a completlely new cosmic direction. Hickman excels at taking what\n      a character represents to move plot and theme. Cap is the best example in this run.</p>\n      \n      <p>In Hickman's Avengers, Steve is a tragic hero. He is destined\n      to fail against both cosmic and team threats. Hickman still makes Steve\n      an inspirational and aspirational character until the final issues of\n      \"Time Runs Out\". In the end even Cap is brought down to trading blows\n      with Tony as the universes collapse.</p>\n      \n      <p>During the initial phases of the Illuminati's plans, Steve is the only one\n      holding the line at not destroying the incursion planets. Even while in control\n      of all six gems, the rest of the Illuminati is skeptical of Steve's plan to\n      use them to prevent the incursion with no casulaties.</p>\n\n      <p>After Steve's plan backfires and the gems are destroyed, he has to deal with\n      the consequences foir the remainder of the series. The remainder of the Illuminati\n      erase his memories of them and move forward with Tony's plan to destroy worlds.</p>\n\n      <p>Steve continues his plans to make the Avengers a bigger team with Tony,\n      not realizing that plan is partially a ruse by Tony to distract him from\n      the Illuminati's ongoing efforts to destroy worlds at incursion points.\n      \n      <p>Steve plays a key leadership role during the cosmic war. He is council with the\n      componay of Ronan, K'lurt, Brood Queen, Guardian. Annhilius and Json of Sparta \n      during the war agains the beyonders(?). Hickman shows that Steve's true power is\n      as a strategist. Each of these leaders lets Steve's plan take place. And it alwyas\n      works as Cap intends - even if only for a moment before the threat gets bigger.</p>\n\n      <p>Before the story can become Tony vs Steve, Hickman steers Cap into a completely\n      new take on his \"man out of time\" status. Reverberations from when Steve destroyed\n      the time gem send him and some Avengers forward in time.  Cap relaizes that Tony\n      is wrong - that the incursions are not the end of everything. He's just not certain\n      if its because of what the Illuminati plan to do or not.</p>\n\n      <p>It's here that Hickman takes the biggest swing with Steve. His moral code tells him\n      that even if what the Illuminati are doing saves all remaining life in the multiverses, it\n      is not worth it if it means destroying a single world. Steve doesn't even consider\n      sacrificing the few to save the many. Hickman draws a strong line in the sand that \n      Steve will never cross.</p>\n\n      <p>Unfortunately for Cap and Tony, fate doesn't work out the way either of them\n      intended. It feels unfinished as the world finally collapses around Steve as he and\n      Tony trade impotent punches. But that's the point. Tony and Steve are almost completely\n      sidelined for the final Secret act of this story after being the focus for so long. The point\n      is that it never mattered in the grand scheme. Steve wasn't punching Tony as much as he\n      was punching Hickman - for tricking him into believing he was the hero up until he\n      faded away.</p>\n    "
  },
  'iron-man': {
    name: "Iron Man",
    identity: "Tony Stark",
    moments: [{
      type: 'quote',
      text: "I can't lie, Bruce... I really am dying to know what's in that case.",
      issue: 'Avengers #28'
    }]
  },
  'hawkeye': {
    name: "Hawkeye",
    identity: "Clint Barton"
  },
  'hulk': {
    name: "Hulk",
    identity: "Dr. Bruce Banner",
    first_appearance: '',
    moments: [{
      type: 'quote',
      style: 'long',
      text: "\n          This team you assembled... this current version of the Avengers...\n          Why'd you build it this way? I've seen your wheel. Your grid of current\n          and potential members... your avengers machine.\n        ",
      issue: 'Avengers #28'
    }]
  },
  'black-widow': {
    name: "Black Widow",
    identity: "Natasha Romanov"
  },
  'thor': {
    name: "Thor",
    identity: "Odinson"
  }
};

/***/ }),

/***/ "./src/components/page_roots/useFetchAuth.js":
/*!***************************************************!*\
  !*** ./src/components/page_roots/useFetchAuth.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useFetchAuth: function() { return /* binding */ useFetchAuth; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var src_api_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/api/api */ "./src/api/api.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// This hook returns current user status


var useFetchAuth = function useFetchAuth() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
      _useState2 = _slicedToArray(_useState, 2),
      user = _useState2[0],
      setUser = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
      _useState4 = _slicedToArray(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setLoading(true);
    src_api_api__WEBPACK_IMPORTED_MODULE_1__["default"].getLoginObserver(function (user) {
      setUser({
        name: user.email || 'Guest',
        logged_in: user.email ? true : false
      });
      setLoading(false);
    });
  }, []);
  return [loading, user];
};

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var components_page_roots_AppRouter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/page_roots/AppRouter */ "./src/components/page_roots/AppRouter.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var store_reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! store/reducers */ "./src/store/reducers/index.js");
/* harmony import */ var styles_main_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styles/main.scss */ "./src/styles/main.scss");







var store = (0,redux__WEBPACK_IMPORTED_MODULE_6__.createStore)(store_reducers__WEBPACK_IMPORTED_MODULE_4__["default"]);
react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {
  store: store
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_page_roots_AppRouter__WEBPACK_IMPORTED_MODULE_2__["default"], null)), document.getElementById('app-container'));

/***/ }),

/***/ "./src/store/actions/index.js":
/*!************************************!*\
  !*** ./src/store/actions/index.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   counterDecrement: function() { return /* binding */ counterDecrement; },
/* harmony export */   counterIncrement: function() { return /* binding */ counterIncrement; },
/* harmony export */   drawerHide: function() { return /* binding */ drawerHide; },
/* harmony export */   drawerShow: function() { return /* binding */ drawerShow; },
/* harmony export */   lightboxHide: function() { return /* binding */ lightboxHide; },
/* harmony export */   lightboxShow: function() { return /* binding */ lightboxShow; },
/* harmony export */   windowshadeHide: function() { return /* binding */ windowshadeHide; },
/* harmony export */   windowshadeShow: function() { return /* binding */ windowshadeShow; }
/* harmony export */ });
// counter.js Actions
var counterIncrement = function counterIncrement() {
  var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  return {
    type: 'COUNTER_INCREMENT',
    payload: n
  };
};
var counterDecrement = function counterDecrement() {
  var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  return {
    type: 'COUNTER_DECREMENT',
    payload: n
  };
}; // lightbox.js Actions

var lightboxShow = function lightboxShow(content) {
  return {
    type: 'LIGHTBOX_SHOW',
    payload: content
  };
};
var lightboxHide = function lightboxHide() {
  return {
    type: 'LIGHTBOX_HIDE'
  };
}; // windowshade.js actions

var windowshadeShow = function windowshadeShow() {
  return {
    type: 'WINDOWSHADE_SHOW'
  };
};
var windowshadeHide = function windowshadeHide() {
  return {
    type: 'WINDOWSHADE_HIDE'
  };
}; // drawer.js actions

var drawerShow = function drawerShow() {
  return {
    type: 'DRAWER_SHOW'
  };
};
var drawerHide = function drawerHide() {
  return {
    type: 'DRAWER_HIDE'
  };
};

/***/ }),

/***/ "./src/store/reducers/drawer.js":
/*!**************************************!*\
  !*** ./src/store/reducers/drawer.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
var drawerReducer = function drawerReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'DRAWER_SHOW':
      return true;

    case 'DRAWER_HIDE':
      return false;

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (drawerReducer);

/***/ }),

/***/ "./src/store/reducers/index.js":
/*!*************************************!*\
  !*** ./src/store/reducers/index.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _drawer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drawer */ "./src/store/reducers/drawer.js");
/* harmony import */ var _lightbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lightbox */ "./src/store/reducers/lightbox.js");
/* harmony import */ var _windowshade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./windowshade */ "./src/store/reducers/windowshade.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
// This file combines all store reducers to a single export




var allReducers = (0,redux__WEBPACK_IMPORTED_MODULE_3__.combineReducers)({
  drawer: _drawer__WEBPACK_IMPORTED_MODULE_0__["default"],
  lightbox: _lightbox__WEBPACK_IMPORTED_MODULE_1__["default"],
  windowshade: _windowshade__WEBPACK_IMPORTED_MODULE_2__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (allReducers);

/***/ }),

/***/ "./src/store/reducers/lightbox.js":
/*!****************************************!*\
  !*** ./src/store/reducers/lightbox.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var lightboxReducer = function lightboxReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'LIGHTBOX_SHOW':
      return _objectSpread(_objectSpread({}, state), action.payload);

    case 'LIGHTBOX_HIDE':
      return {};

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (lightboxReducer);

/***/ }),

/***/ "./src/store/reducers/windowshade.js":
/*!*******************************************!*\
  !*** ./src/store/reducers/windowshade.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
var windowshadeReducer = function windowshadeReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'WINDOWSHADE_SHOW':
      return true;

    case 'WINDOWSHADE_HIDE':
      return false;

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (windowshadeReducer);

/***/ }),

/***/ "./src/utils/sorting.js":
/*!******************************!*\
  !*** ./src/utils/sorting.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sorting: function() { return /* binding */ sorting; }
/* harmony export */ });
var sorting = function sorting() {
  return {
    sortBy: function _sortBy(field, reverse, primer) {
      var key = function key(x) {
        return primer ? primer(x[field]) : x[field];
      };

      return function (a, b) {
        var A = key(a),
            B = key(b);
        return (A < B ? -1 : A > B ? 1 : 0) * [-1, 1][+!!reverse];
      };
    }
  };
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[4]!./src/components/Layout/CommonTemplate.scss":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[4]!./src/components/Layout/CommonTemplate.scss ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".wrapper {\n  max-width: 1600px;\n  margin: 0 auto;\n}\n\nmain {\n  padding-top: 44px;\n  z-index: 1;\n}\n\n#app-container {\n  height: 100%;\n  position: relative;\n}", "",{"version":3,"sources":["webpack://./CommonTemplate.scss","webpack://./../../styles/base/_settings.scss"],"names":[],"mappings":"AAEA;EACE,iBCFc;EDGd,cAAA;AADF;;AAGA;EACE,iBCHc;EDId,UCDgB;ADClB;;AAGA;EACE,YAAA;EACA,kBAAA;AAAF","sourcesContent":["@import './src/styles/base/settings';\n\n.wrapper {\n  max-width: $wrapper-width;\n  margin: 0 auto;\n}\nmain {\n  padding-top: $header-height;\n  z-index: $layer-main-body;\n}\n\n#app-container  {\n  height: 100%;\n  position: relative;\n}\n","// Site wrapper\n$wrapper-width: 1600px;\n\n// header Height\n$header-height: 44px;\n\n// Z-Index Layers\n$layer-main-body: 1;\n$layer-window-shade: 10;\n$layer-lightbox: 50;\n$layer-top-elements: 1000;\n\n// Drawer Settings:\n$drawer-width: 175px;\n$drawer-max-height: 500px;\n\n$transtion-drawer: all 0.3s ease-in-out;\n\n// =========== Breakpoint mixins\n@mixin breakpoint($point) {\n  @if $point == laptop {\n    @media (min-width: 840px) { @content ; }\n  }\n  @else if $point == tablet {\n    @media (min-width: 560px) { @content ; }\n  }\n}\n\n// =========== Site Colors\n\n// Chromes\n$color-black: #222;\n$color-white: #fff;\n$color-ltgrey: #f0eeee;\n$color-dkgrey: #363636;\n$color-ltltgrey: #fbf9f9;\n$color-medgrey: #a1a1a1;\n$color-newspaper: #ebe6e6;\n\n// blues\n$color-royal: #1484C8;\n$color-gold: #edc721;\n$color-pool: #83c1bf;\n$color-agua: #eef6f6;\n$color-dkdkblue: #001325;\n$color-soft-blue: #d7ebf3;\n$color-bright-blue: #93d8fd;\n\n// reds\n$color-red: #c00;\n$color-caution: #fff9e6;\n$color-soft-warning: #E0FFD7;\n$color-soft-red: #F1C8C8;\n$color-warning: #c00;\n$color-soft-pink: #e4afba;\n\n// yellows\n$color-soft-gold: #FFEB93;\n$color-bright-yellow: #f1d96e;\n$color-dirty-yellow: #ffc;\n$color-soft-yellow: #f3e9bd;\n\n// green\n$color-ltgreen: #eefeeb;\n$color-green: #009966;\n$color-soft-green: #b1eab2;\n$color-bright-green: #6ff373;\n\n// other\n$color-soft-purple: #c7beda;\n$color-soft-brown: #f3c28c;\n$color-soft-gray: #b1aca7;\n\n$brand-color: #0b9afb;\n\n// Used for generating paddings / margins\n$base-unit: 1em;\n$base-unit-half: $base-unit * 0.5;\n$base-unit-quarter: $base-unit * 0.25;\n\n// Fonts\n$base-font-family: sans-serif;\n$base-font-family-bold: sans-serif;\n$base-font-family-italic: sans-serif;\n$base-font-family-bold-italic: sans-serif;\n\n$base-font-size: 16px;\n$base-content-font: $base-font-size * 0.875;\n$base-rounded-corners: 3px;\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[4]!./src/components/Layout/Drawer/Drawer.scss":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[4]!./src/components/Layout/Drawer/Drawer.scss ***!
  \************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#drawer {\n  top: 43px;\n  background: #0b9afb;\n  width: 175px;\n  left: -175px;\n  overflow-y: auto;\n  position: fixed;\n  max-height: 500px;\n  z-index: 1000;\n  transition: all 0.3s ease-in-out;\n  border-radius: 0 0 3px 0;\n  padding-bottom: 3px;\n}\n#drawer.active {\n  left: 0;\n}\n#drawer ul {\n  display: flex;\n  flex-direction: column;\n  border-top: 1px solid #fff;\n}\n#drawer li {\n  border-bottom: 1px solid #fff;\n  transition: all 0.3s ease-in-out;\n}\n#drawer li.active, #drawer li:hover {\n  background: #222;\n}\n#drawer li a {\n  display: block;\n  padding: 0.5em;\n}\n@media (min-width: 560px) {\n  #drawer {\n    width: 262.5px;\n    left: -262.5px;\n  }\n}\n@media (min-width: 840px) {\n  #drawer {\n    width: 350px;\n    left: -350px;\n  }\n}", "",{"version":3,"sources":["webpack://./Drawer.scss","webpack://./../../../styles/base/_settings.scss"],"names":[],"mappings":"AAGA;EACE,SAAA;EACA,mBCoEY;EDnEZ,YCOa;EDNb,YAAA;EACA,gBAAA;EACA,eAAA;EACA,iBCIkB;EDHlB,aCDmB;EDEnB,gCCIiB;EDHjB,wBAAA;EACA,mBC0EqB;AD5EvB;AAIE;EACE,OAAA;AAFJ;AAME;EACE,aAAA;EACA,sBAAA;EACA,0BAAA;AAJJ;AAOE;EACE,6BAAA;EACA,gCCbe;ADQnB;AAOI;EAEE,gBCFQ;ADJd;AASI;EACE,cAAA;EACA,cCuCW;AD9CjB;ACPI;EDrBJ;IAuCI,cAAA;IACA,cAAA;EAPF;AACF;AChBI;EDlBJ;IA2CI,YAAA;IACA,YAAA;EALF;AACF","sourcesContent":["@import './src/styles/base/settings';\n\n// Layout\n#drawer {\n  top: $header-height - 1;\n  background: $brand-color;\n  width: $drawer-width;\n  left: -$drawer-width;\n  overflow-y: auto;\n  position: fixed;\n  max-height: $drawer-max-height;\n  z-index: $layer-top-elements;\n  transition: $transtion-drawer;\n  border-radius: 0 0 $base-rounded-corners 0;\n  padding-bottom: $base-rounded-corners;\n\n  &.active {\n    left: 0;\n  }\n\n  // Link Styles\n  ul {\n    display: flex;\n    flex-direction: column;\n    border-top: 1px solid $color-white;\n  }\n\n  li {\n    border-bottom: 1px solid $color-white;\n    transition: $transtion-drawer;\n\n    &.active,\n    &:hover {\n      background: $color-black;\n    }\n\n    a {\n      display: block;\n      padding: $base-unit-half;\n    }\n  }\n  @include breakpoint(tablet) {\n    width: $drawer-width * 1.5;\n    left: -$drawer-width * 1.5;\n  }\n  @include breakpoint(laptop) {\n    width: $drawer-width * 2;\n    left: -$drawer-width * 2;\n  }\n}\n","// Site wrapper\n$wrapper-width: 1600px;\n\n// header Height\n$header-height: 44px;\n\n// Z-Index Layers\n$layer-main-body: 1;\n$layer-window-shade: 10;\n$layer-lightbox: 50;\n$layer-top-elements: 1000;\n\n// Drawer Settings:\n$drawer-width: 175px;\n$drawer-max-height: 500px;\n\n$transtion-drawer: all 0.3s ease-in-out;\n\n// =========== Breakpoint mixins\n@mixin breakpoint($point) {\n  @if $point == laptop {\n    @media (min-width: 840px) { @content ; }\n  }\n  @else if $point == tablet {\n    @media (min-width: 560px) { @content ; }\n  }\n}\n\n// =========== Site Colors\n\n// Chromes\n$color-black: #222;\n$color-white: #fff;\n$color-ltgrey: #f0eeee;\n$color-dkgrey: #363636;\n$color-ltltgrey: #fbf9f9;\n$color-medgrey: #a1a1a1;\n$color-newspaper: #ebe6e6;\n\n// blues\n$color-royal: #1484C8;\n$color-gold: #edc721;\n$color-pool: #83c1bf;\n$color-agua: #eef6f6;\n$color-dkdkblue: #001325;\n$color-soft-blue: #d7ebf3;\n$color-bright-blue: #93d8fd;\n\n// reds\n$color-red: #c00;\n$color-caution: #fff9e6;\n$color-soft-warning: #E0FFD7;\n$color-soft-red: #F1C8C8;\n$color-warning: #c00;\n$color-soft-pink: #e4afba;\n\n// yellows\n$color-soft-gold: #FFEB93;\n$color-bright-yellow: #f1d96e;\n$color-dirty-yellow: #ffc;\n$color-soft-yellow: #f3e9bd;\n\n// green\n$color-ltgreen: #eefeeb;\n$color-green: #009966;\n$color-soft-green: #b1eab2;\n$color-bright-green: #6ff373;\n\n// other\n$color-soft-purple: #c7beda;\n$color-soft-brown: #f3c28c;\n$color-soft-gray: #b1aca7;\n\n$brand-color: #0b9afb;\n\n// Used for generating paddings / margins\n$base-unit: 1em;\n$base-unit-half: $base-unit * 0.5;\n$base-unit-quarter: $base-unit * 0.25;\n\n// Fonts\n$base-font-family: sans-serif;\n$base-font-family-bold: sans-serif;\n$base-font-family-italic: sans-serif;\n$base-font-family-bold-italic: sans-serif;\n\n$base-font-size: 16px;\n$base-content-font: $base-font-size * 0.875;\n$base-rounded-corners: 3px;\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[4]!./src/components/Layout/HeaderBar/HeaderBar.scss":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[4]!./src/components/Layout/HeaderBar/HeaderBar.scss ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".header-bar {\n  background: #0b9afb;\n  border-bottom: 1px solid #fff;\n  padding: 0.5em;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 44px;\n  z-index: 1000;\n  color: #fff;\n  display: flex;\n}\n.header-bar a {\n  color: #fff;\n}\n.header-bar .logo {\n  font-weight: bold;\n  padding: 5px;\n  border-top: 1px solid #fff;\n  border-bottom: 1px solid #fff;\n  letter-spacing: 5px;\n}\n.header-bar .logo2 {\n  background: #000;\n}\n.header-bar .flex-left {\n  flex-grow: 1;\n}\n.header-bar .flex-center {\n  justify-items: center;\n}\n.header-bar .flex-right {\n  text-align: right;\n  flex-grow: 1;\n}\n.header-bar .hamburger {\n  width: 30px;\n}\n.header-bar .hamburger .line {\n  width: 30px;\n  height: 3px;\n  background-color: #ecf0f1;\n  display: block;\n  margin: 6px auto;\n  transition: all 0.3s ease-in-out;\n}\n.header-bar .hamburger:hover {\n  cursor: pointer;\n}\n.header-bar .hamburger.active .line:nth-child(2) {\n  opacity: 0;\n}\n.header-bar .hamburger.active .line:nth-child(1) {\n  transform: translateY(9px) rotate(45deg);\n}\n.header-bar .hamburger.active .line:nth-child(3) {\n  transform: translateY(-9px) rotate(-45deg);\n}", "",{"version":3,"sources":["webpack://./HeaderBar.scss","webpack://./../../../styles/base/_settings.scss"],"names":[],"mappings":"AAEA;EACE,mBCsEY;EDrEZ,6BAAA;EACA,cAAA;EACA,eAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,YCNc;EDOd,aCDmB;EDEnB,WAAA;EACA,aAAA;AADF;AAGE;EACE,WAAA;AADJ;AAIE;EACE,iBAAA;EACA,YAAA;EACA,0BAAA;EACA,6BAAA;EACA,mBAAA;AAFJ;AAIE;EACE,gBAAA;AAFJ;AAKE;EACE,YAAA;AAHJ;AAME;EACE,qBAAA;AAJJ;AAOE;EACE,iBAAA;EACA,YAAA;AALJ;AAQE;EACE,WAAA;AANJ;AASE;EACE,WAAA;EACA,WAAA;EACA,yBAAA;EACA,cAAA;EACA,gBAAA;EACA,gCCrCe;AD8BnB;AAUE;EACE,eAAA;AARJ;AAWE;EACE,UAAA;AATJ;AAYE;EACE,wCAAA;AAVJ;AAaE;EACE,0CAAA;AAXJ","sourcesContent":["@import './src/styles/base/settings';\n\n.header-bar {\n  background: $brand-color;\n  border-bottom: 1px solid $color-white;\n  padding: 0.5em;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: $header-height;\n  z-index: $layer-top-elements;\n  color: #fff;\n  display: flex;\n\n  a {\n    color: #fff;\n  }\n\n  .logo {\n    font-weight: bold;\n    padding: 5px;\n    border-top: 1px solid #fff;\n    border-bottom: 1px solid #fff;\n    letter-spacing: 5px;;\n  }\n  .logo2 {\n    background: #000;\n  }\n\n  .flex-left {\n    flex-grow: 1;\n  }\n\n  .flex-center {\n    justify-items: center;\n  }\n\n  .flex-right {\n    text-align: right;\n    flex-grow: 1;\n  }\n\n  .hamburger {\n    width: 30px;\n  }\n\n  .hamburger .line{\n    width: 30px;\n    height: 3px;\n    background-color: #ecf0f1;\n    display: block;\n    margin: 6px auto;\n    transition: $transtion-drawer;\n  }\n\n  .hamburger:hover{\n    cursor: pointer;\n  }\n\n  .hamburger.active .line:nth-child(2){\n    opacity: 0;\n  }\n\n  .hamburger.active .line:nth-child(1){\n    transform: translateY(9px) rotate(45deg);\n  }\n\n  .hamburger.active .line:nth-child(3){\n    transform: translateY(-9px) rotate(-45deg);\n  }\n\n}\n","// Site wrapper\n$wrapper-width: 1600px;\n\n// header Height\n$header-height: 44px;\n\n// Z-Index Layers\n$layer-main-body: 1;\n$layer-window-shade: 10;\n$layer-lightbox: 50;\n$layer-top-elements: 1000;\n\n// Drawer Settings:\n$drawer-width: 175px;\n$drawer-max-height: 500px;\n\n$transtion-drawer: all 0.3s ease-in-out;\n\n// =========== Breakpoint mixins\n@mixin breakpoint($point) {\n  @if $point == laptop {\n    @media (min-width: 840px) { @content ; }\n  }\n  @else if $point == tablet {\n    @media (min-width: 560px) { @content ; }\n  }\n}\n\n// =========== Site Colors\n\n// Chromes\n$color-black: #222;\n$color-white: #fff;\n$color-ltgrey: #f0eeee;\n$color-dkgrey: #363636;\n$color-ltltgrey: #fbf9f9;\n$color-medgrey: #a1a1a1;\n$color-newspaper: #ebe6e6;\n\n// blues\n$color-royal: #1484C8;\n$color-gold: #edc721;\n$color-pool: #83c1bf;\n$color-agua: #eef6f6;\n$color-dkdkblue: #001325;\n$color-soft-blue: #d7ebf3;\n$color-bright-blue: #93d8fd;\n\n// reds\n$color-red: #c00;\n$color-caution: #fff9e6;\n$color-soft-warning: #E0FFD7;\n$color-soft-red: #F1C8C8;\n$color-warning: #c00;\n$color-soft-pink: #e4afba;\n\n// yellows\n$color-soft-gold: #FFEB93;\n$color-bright-yellow: #f1d96e;\n$color-dirty-yellow: #ffc;\n$color-soft-yellow: #f3e9bd;\n\n// green\n$color-ltgreen: #eefeeb;\n$color-green: #009966;\n$color-soft-green: #b1eab2;\n$color-bright-green: #6ff373;\n\n// other\n$color-soft-purple: #c7beda;\n$color-soft-brown: #f3c28c;\n$color-soft-gray: #b1aca7;\n\n$brand-color: #0b9afb;\n\n// Used for generating paddings / margins\n$base-unit: 1em;\n$base-unit-half: $base-unit * 0.5;\n$base-unit-quarter: $base-unit * 0.25;\n\n// Fonts\n$base-font-family: sans-serif;\n$base-font-family-bold: sans-serif;\n$base-font-family-italic: sans-serif;\n$base-font-family-bold-italic: sans-serif;\n\n$base-font-size: 16px;\n$base-content-font: $base-font-size * 0.875;\n$base-rounded-corners: 3px;\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[4]!./src/components/Layout/Lightbox/LBHickman/LBHickman.scss":
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[4]!./src/components/Layout/Lightbox/LBHickman/LBHickman.scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".lb-hickman {\n  background-color: #ebe6e6;\n  padding: 1em;\n  border: 2px solid #222;\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n}\n@media (min-width: 840px) {\n  .lb-hickman {\n    max-width: 860px;\n  }\n}\n.lb-hickman h3 {\n  text-align: justify;\n  border-top: 10px solid #c00;\n  padding-top: 0.5em;\n  font-size: 36px;\n  font-family: \"Courier New\", Courier, monospace;\n}\n.lb-hickman h4 {\n  text-align: justify;\n  padding-bottom: 0.5em;\n  font-size: 24px;\n  font-family: \"Courier New\", Courier, monospace;\n}\n.lb-hickman h5 {\n  text-align: justify;\n  padding-bottom: 0.5em;\n  font-size: 18px;\n  font-family: \"Courier New\", Courier, monospace;\n}\n.lb-hickman section {\n  padding-bottom: 0.5em;\n  border-bottom: 10px solid #c00;\n  flex-grow: 4;\n  transition: all linear 500ms;\n}\n.lb-hickman section p {\n  font-size: 16px;\n  text-align: justify;\n  font-family: \"Lucida Sans\", Lucida, sans-serif;\n  padding-bottom: 1em;\n  line-height: 24px;\n}", "",{"version":3,"sources":["webpack://./LBHickman.scss","webpack://./../../../../styles/base/_settings.scss"],"names":[],"mappings":"AAEA;EACI,yBCkCc;EDjCd,YCwEQ;EDvER,sBAAA;EACA,aAAA;EACA,sBAAA;EACA,gBAAA;AADJ;ACcI;EDnBJ;IASM,gBAAA;EAAJ;AACF;AAEI;EACE,mBAAA;EACA,2BAAA;EACA,kBC4DW;ED3DX,eAAA;EACA,8CAAA;AAAN;AAGI;EACE,mBAAA;EACA,qBCqDW;EDpDX,eAAA;EACA,8CAAA;AADN;AAII;EACE,mBAAA;EACA,qBC8CW;ED7CX,eAAA;EACA,8CAAA;AAFN;AAKI;EACE,qBCwCW;EDvCX,8BAAA;EACA,YAAA;EACA,4BAAA;AAHN;AAMI;EACE,eAAA;EACA,mBAAA;EACA,8CAAA;EACA,mBC6BM;ED5BN,iBAAA;AAJN","sourcesContent":["@import './src/styles/base/settings';\n\n.lb-hickman {\n    background-color: $color-newspaper;\n    padding: $base-unit;\n    border: 2px solid $color-black;\n    display: flex;\n    flex-direction: column;\n    overflow-y: auto;\n\n    @include breakpoint(laptop) {\n      max-width: 860px;\n    }\n\n    h3 {\n      text-align: justify;\n      border-top: 10px solid $color-red;\n      padding-top: $base-unit-half;\n      font-size: 36px;\n      font-family: 'Courier New', Courier, monospace;\n    }\n\n    h4 {\n      text-align: justify;\n      padding-bottom: $base-unit-half;\n      font-size: 24px;\n      font-family: 'Courier New', Courier, monospace;\n    }\n\n    h5 {\n      text-align: justify;\n      padding-bottom: $base-unit-half;\n      font-size: 18px;\n      font-family: 'Courier New', Courier, monospace;\n    }\n    \n    section {\n      padding-bottom: $base-unit-half;\n      border-bottom: 10px solid $color-red;\n      flex-grow: 4;\n      transition: all linear 500ms;\n    }\n\n    section p {\n      font-size: 16px;\n      text-align: justify;\n      font-family: \"Lucida Sans\", Lucida, sans-serif;\n      padding-bottom: $base-unit;\n      line-height: 24px;\n    }\n  \n}","// Site wrapper\n$wrapper-width: 1600px;\n\n// header Height\n$header-height: 44px;\n\n// Z-Index Layers\n$layer-main-body: 1;\n$layer-window-shade: 10;\n$layer-lightbox: 50;\n$layer-top-elements: 1000;\n\n// Drawer Settings:\n$drawer-width: 175px;\n$drawer-max-height: 500px;\n\n$transtion-drawer: all 0.3s ease-in-out;\n\n// =========== Breakpoint mixins\n@mixin breakpoint($point) {\n  @if $point == laptop {\n    @media (min-width: 840px) { @content ; }\n  }\n  @else if $point == tablet {\n    @media (min-width: 560px) { @content ; }\n  }\n}\n\n// =========== Site Colors\n\n// Chromes\n$color-black: #222;\n$color-white: #fff;\n$color-ltgrey: #f0eeee;\n$color-dkgrey: #363636;\n$color-ltltgrey: #fbf9f9;\n$color-medgrey: #a1a1a1;\n$color-newspaper: #ebe6e6;\n\n// blues\n$color-royal: #1484C8;\n$color-gold: #edc721;\n$color-pool: #83c1bf;\n$color-agua: #eef6f6;\n$color-dkdkblue: #001325;\n$color-soft-blue: #d7ebf3;\n$color-bright-blue: #93d8fd;\n\n// reds\n$color-red: #c00;\n$color-caution: #fff9e6;\n$color-soft-warning: #E0FFD7;\n$color-soft-red: #F1C8C8;\n$color-warning: #c00;\n$color-soft-pink: #e4afba;\n\n// yellows\n$color-soft-gold: #FFEB93;\n$color-bright-yellow: #f1d96e;\n$color-dirty-yellow: #ffc;\n$color-soft-yellow: #f3e9bd;\n\n// green\n$color-ltgreen: #eefeeb;\n$color-green: #009966;\n$color-soft-green: #b1eab2;\n$color-bright-green: #6ff373;\n\n// other\n$color-soft-purple: #c7beda;\n$color-soft-brown: #f3c28c;\n$color-soft-gray: #b1aca7;\n\n$brand-color: #0b9afb;\n\n// Used for generating paddings / margins\n$base-unit: 1em;\n$base-unit-half: $base-unit * 0.5;\n$base-unit-quarter: $base-unit * 0.25;\n\n// Fonts\n$base-font-family: sans-serif;\n$base-font-family-bold: sans-serif;\n$base-font-family-italic: sans-serif;\n$base-font-family-bold-italic: sans-serif;\n\n$base-font-size: 16px;\n$base-content-font: $base-font-size * 0.875;\n$base-rounded-corners: 3px;\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[4]!./src/components/Layout/Lightbox/Lightbox.scss":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[4]!./src/components/Layout/Lightbox/Lightbox.scss ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".lightbox {\n  transition: all 0.3s ease-in-out;\n  z-index: 50;\n  top: 49px;\n  left: 15px;\n  bottom: 15px;\n  right: 15px;\n  overflow: hidden;\n  position: fixed;\n  display: none;\n}\n.lightbox img {\n  max-height: 100vh;\n}\n.lightbox.active {\n  display: flex;\n  justify-content: space-around;\n}\n.lightbox .lb-details {\n  background-color: #fff;\n  padding: 1em;\n}\n.lightbox a {\n  color: #222;\n}", "",{"version":3,"sources":["webpack://./Lightbox.scss","webpack://./../../../styles/base/_settings.scss"],"names":[],"mappings":"AAEA;EACE,gCCaiB;EDZjB,WCKe;EDJf,SAAA;EACA,UAAA;EACA,YAAA;EACA,WAAA;EACA,gBAAA;EACA,eAAA;EACA,aAAA;AADF;AAGE;EACE,iBAAA;AADJ;AAIE;EACE,aAAA;EACA,6BAAA;AAFJ;AAKE;EACE,sBCSU;EDRV,YCoDQ;ADvDZ;AAME;EACE,WCGU;ADPd","sourcesContent":["@import './src/styles/base/settings';\n\n.lightbox {\n  transition: $transtion-drawer;\n  z-index: $layer-lightbox;\n  top: $header-height +5;\n  left: 15px;\n  bottom: 15px;\n  right: 15px;\n  overflow: hidden;\n  position: fixed;\n  display: none;\n\n  img {\n    max-height: 100vh;\n  }\n\n  &.active {\n    display: flex;\n    justify-content: space-around;\n  }\n\n  .lb-details {\n    background-color: $color-white;\n    padding: $base-unit;\n  }\n\n  a {\n    color: $color-black;\n  }\n}\n","// Site wrapper\n$wrapper-width: 1600px;\n\n// header Height\n$header-height: 44px;\n\n// Z-Index Layers\n$layer-main-body: 1;\n$layer-window-shade: 10;\n$layer-lightbox: 50;\n$layer-top-elements: 1000;\n\n// Drawer Settings:\n$drawer-width: 175px;\n$drawer-max-height: 500px;\n\n$transtion-drawer: all 0.3s ease-in-out;\n\n// =========== Breakpoint mixins\n@mixin breakpoint($point) {\n  @if $point == laptop {\n    @media (min-width: 840px) { @content ; }\n  }\n  @else if $point == tablet {\n    @media (min-width: 560px) { @content ; }\n  }\n}\n\n// =========== Site Colors\n\n// Chromes\n$color-black: #222;\n$color-white: #fff;\n$color-ltgrey: #f0eeee;\n$color-dkgrey: #363636;\n$color-ltltgrey: #fbf9f9;\n$color-medgrey: #a1a1a1;\n$color-newspaper: #ebe6e6;\n\n// blues\n$color-royal: #1484C8;\n$color-gold: #edc721;\n$color-pool: #83c1bf;\n$color-agua: #eef6f6;\n$color-dkdkblue: #001325;\n$color-soft-blue: #d7ebf3;\n$color-bright-blue: #93d8fd;\n\n// reds\n$color-red: #c00;\n$color-caution: #fff9e6;\n$color-soft-warning: #E0FFD7;\n$color-soft-red: #F1C8C8;\n$color-warning: #c00;\n$color-soft-pink: #e4afba;\n\n// yellows\n$color-soft-gold: #FFEB93;\n$color-bright-yellow: #f1d96e;\n$color-dirty-yellow: #ffc;\n$color-soft-yellow: #f3e9bd;\n\n// green\n$color-ltgreen: #eefeeb;\n$color-green: #009966;\n$color-soft-green: #b1eab2;\n$color-bright-green: #6ff373;\n\n// other\n$color-soft-purple: #c7beda;\n$color-soft-brown: #f3c28c;\n$color-soft-gray: #b1aca7;\n\n$brand-color: #0b9afb;\n\n// Used for generating paddings / margins\n$base-unit: 1em;\n$base-unit-half: $base-unit * 0.5;\n$base-unit-quarter: $base-unit * 0.25;\n\n// Fonts\n$base-font-family: sans-serif;\n$base-font-family-bold: sans-serif;\n$base-font-family-italic: sans-serif;\n$base-font-family-bold-italic: sans-serif;\n\n$base-font-size: 16px;\n$base-content-font: $base-font-size * 0.875;\n$base-rounded-corners: 3px;\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[4]!./src/components/Layout/WindowShade/WindowShade.scss":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[4]!./src/components/Layout/WindowShade/WindowShade.scss ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".window-shade {\n  transition: all 0.3s ease-in-out;\n  opacity: 0.75;\n  z-index: 20;\n  top: 44px;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  overflow: hidden;\n  position: fixed;\n  background: #222;\n  display: none;\n}\n.window-shade.active {\n  display: block;\n}", "",{"version":3,"sources":["webpack://./WindowShade.scss","webpack://./../../../styles/base/_settings.scss"],"names":[],"mappings":"AAEA;EACE,gCCaiB;EDZjB,aAAA;EACA,WAAA;EACA,SCFc;EDGd,OAAA;EACA,SAAA;EACA,QAAA;EACA,gBAAA;EACA,eAAA;EACA,gBCmBY;EDlBZ,aAAA;AADF;AAGE;EACE,cAAA;AADJ","sourcesContent":["@import './src/styles/base/settings';\n\n.window-shade {\n  transition: $transtion-drawer;\n  opacity: 0.75;\n  z-index: 20;\n  top: $header-height;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  overflow: hidden;\n  position: fixed;\n  background: $color-black;\n  display: none;\n\n  &.active {\n    display: block;\n  }\n}\n","// Site wrapper\n$wrapper-width: 1600px;\n\n// header Height\n$header-height: 44px;\n\n// Z-Index Layers\n$layer-main-body: 1;\n$layer-window-shade: 10;\n$layer-lightbox: 50;\n$layer-top-elements: 1000;\n\n// Drawer Settings:\n$drawer-width: 175px;\n$drawer-max-height: 500px;\n\n$transtion-drawer: all 0.3s ease-in-out;\n\n// =========== Breakpoint mixins\n@mixin breakpoint($point) {\n  @if $point == laptop {\n    @media (min-width: 840px) { @content ; }\n  }\n  @else if $point == tablet {\n    @media (min-width: 560px) { @content ; }\n  }\n}\n\n// =========== Site Colors\n\n// Chromes\n$color-black: #222;\n$color-white: #fff;\n$color-ltgrey: #f0eeee;\n$color-dkgrey: #363636;\n$color-ltltgrey: #fbf9f9;\n$color-medgrey: #a1a1a1;\n$color-newspaper: #ebe6e6;\n\n// blues\n$color-royal: #1484C8;\n$color-gold: #edc721;\n$color-pool: #83c1bf;\n$color-agua: #eef6f6;\n$color-dkdkblue: #001325;\n$color-soft-blue: #d7ebf3;\n$color-bright-blue: #93d8fd;\n\n// reds\n$color-red: #c00;\n$color-caution: #fff9e6;\n$color-soft-warning: #E0FFD7;\n$color-soft-red: #F1C8C8;\n$color-warning: #c00;\n$color-soft-pink: #e4afba;\n\n// yellows\n$color-soft-gold: #FFEB93;\n$color-bright-yellow: #f1d96e;\n$color-dirty-yellow: #ffc;\n$color-soft-yellow: #f3e9bd;\n\n// green\n$color-ltgreen: #eefeeb;\n$color-green: #009966;\n$color-soft-green: #b1eab2;\n$color-bright-green: #6ff373;\n\n// other\n$color-soft-purple: #c7beda;\n$color-soft-brown: #f3c28c;\n$color-soft-gray: #b1aca7;\n\n$brand-color: #0b9afb;\n\n// Used for generating paddings / margins\n$base-unit: 1em;\n$base-unit-half: $base-unit * 0.5;\n$base-unit-quarter: $base-unit * 0.25;\n\n// Fonts\n$base-font-family: sans-serif;\n$base-font-family-bold: sans-serif;\n$base-font-family-italic: sans-serif;\n$base-font-family-bold-italic: sans-serif;\n\n$base-font-size: 16px;\n$base-content-font: $base-font-size * 0.875;\n$base-rounded-corners: 3px;\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[4]!./src/components/forms/forms.scss":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[4]!./src/components/forms/forms.scss ***!
  \***************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".basic-form {\n  max-width: 75%;\n  padding: 0.5em;\n  margin: 0.5em;\n  border: 2px solid #222;\n  border-radius: 3px;\n}\n.basic-form .field-pair {\n  display: flex;\n  margin-bottom: 0.25em;\n}\n.basic-form .field-pair label {\n  width: 25%;\n}\n.basic-form .field-pair .input-container {\n  flex-grow: 1;\n}\n.basic-form .field-pair .input-container input {\n  width: 100%;\n}", "",{"version":3,"sources":["webpack://./forms.scss","webpack://./../../styles/base/_settings.scss"],"names":[],"mappings":"AAEA;EACE,cAAA;EACA,cCyEe;EDxEf,aCwEe;EDvEf,sBAAA;EACA,kBCiFqB;ADlFvB;AAGE;EACE,aAAA;EACA,qBCmEgB;ADpEpB;AAEI;EACE,UAAA;AAAN;AAEI;EACE,YAAA;AAAN;AACM;EACE,WAAA;AACR","sourcesContent":["@import './src/styles/base/settings';\n\n.basic-form {\n  max-width: 75%;\n  padding: $base-unit-half;\n  margin: $base-unit-half;\n  border: 2px solid $color-black;\n  border-radius: $base-rounded-corners;\n\n  .field-pair {\n    display: flex;\n    margin-bottom: $base-unit-quarter;\n    label {\n      width: 25%;\n    }\n    .input-container {\n      flex-grow: 1;\n      input {\n        width: 100%;\n      }\n    }\n  }\n}\n","// Site wrapper\n$wrapper-width: 1600px;\n\n// header Height\n$header-height: 44px;\n\n// Z-Index Layers\n$layer-main-body: 1;\n$layer-window-shade: 10;\n$layer-lightbox: 50;\n$layer-top-elements: 1000;\n\n// Drawer Settings:\n$drawer-width: 175px;\n$drawer-max-height: 500px;\n\n$transtion-drawer: all 0.3s ease-in-out;\n\n// =========== Breakpoint mixins\n@mixin breakpoint($point) {\n  @if $point == laptop {\n    @media (min-width: 840px) { @content ; }\n  }\n  @else if $point == tablet {\n    @media (min-width: 560px) { @content ; }\n  }\n}\n\n// =========== Site Colors\n\n// Chromes\n$color-black: #222;\n$color-white: #fff;\n$color-ltgrey: #f0eeee;\n$color-dkgrey: #363636;\n$color-ltltgrey: #fbf9f9;\n$color-medgrey: #a1a1a1;\n$color-newspaper: #ebe6e6;\n\n// blues\n$color-royal: #1484C8;\n$color-gold: #edc721;\n$color-pool: #83c1bf;\n$color-agua: #eef6f6;\n$color-dkdkblue: #001325;\n$color-soft-blue: #d7ebf3;\n$color-bright-blue: #93d8fd;\n\n// reds\n$color-red: #c00;\n$color-caution: #fff9e6;\n$color-soft-warning: #E0FFD7;\n$color-soft-red: #F1C8C8;\n$color-warning: #c00;\n$color-soft-pink: #e4afba;\n\n// yellows\n$color-soft-gold: #FFEB93;\n$color-bright-yellow: #f1d96e;\n$color-dirty-yellow: #ffc;\n$color-soft-yellow: #f3e9bd;\n\n// green\n$color-ltgreen: #eefeeb;\n$color-green: #009966;\n$color-soft-green: #b1eab2;\n$color-bright-green: #6ff373;\n\n// other\n$color-soft-purple: #c7beda;\n$color-soft-brown: #f3c28c;\n$color-soft-gray: #b1aca7;\n\n$brand-color: #0b9afb;\n\n// Used for generating paddings / margins\n$base-unit: 1em;\n$base-unit-half: $base-unit * 0.5;\n$base-unit-quarter: $base-unit * 0.25;\n\n// Fonts\n$base-font-family: sans-serif;\n$base-font-family-bold: sans-serif;\n$base-font-family-italic: sans-serif;\n$base-font-family-bold-italic: sans-serif;\n\n$base-font-size: 16px;\n$base-content-font: $base-font-size * 0.875;\n$base-rounded-corners: 3px;\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[4]!./src/styles/main.scss":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[4]!./src/styles/main.scss ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*! normalize.css v3.0.1 | MIT License | git.io/normalize */\n/**\n * 1. Set default font family to sans-serif.\n * 2. Prevent iOS text size adjust after orientation change, without disabling\n *    user zoom.\n */\nhtml {\n  -ms-text-size-adjust: 100%;\n  /* 2 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */\n}\n\n/**\n * Remove default margin.\n */\nbody {\n  margin: 0;\n}\n\n/* HTML5 display definitions\n   ========================================================================== */\n/**\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\n * Correct `block` display not defined for `details` or `summary` in IE 10/11 and Firefox.\n * Correct `block` display not defined for `main` in IE 11.\n */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nnav,\nsection,\nsummary {\n  display: block;\n}\n\n/**\n * 1. Correct `inline-block` display not defined in IE 8/9.\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\n */\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  /* 1 */\n  vertical-align: baseline;\n  /* 2 */\n}\n\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Address `[hidden]` styling not present in IE 8/9/10.\n * Hide the `template` element in IE 8/9/11, Safari, and Firefox < 22.\n */\n[hidden],\ntemplate {\n  display: none;\n}\n\n/* Links\n   ========================================================================== */\n/**\n * Remove the gray background color from active links in IE 10.\n */\na {\n  background: transparent;\n}\n\n/**\n * Improve readability when focused and also mouse hovered in all browsers.\n */\na:active,\na:hover {\n  outline: 0;\n}\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\n */\nabbr[title] {\n  border-bottom: 1px dotted;\n}\n\n/**\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\n */\nb,\nstrong {\n  font-weight: bold;\n}\n\n/**\n * Address styling not present in Safari and Chrome.\n */\ndfn {\n  font-style: italic;\n}\n\n/**\n * Address styling not present in IE 8/9.\n */\nmark {\n  background: #ff0;\n  color: #000;\n}\n\n/**\n * Address inconsistent and variable font size in all browsers.\n */\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsup {\n  top: -0.5em;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove border when inside `a` element in IE 8/9/10.\n */\nimg {\n  border: 0;\n}\n\n/**\n * Correct overflow not hidden in IE 9/10/11.\n */\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Grouping content\n   ========================================================================== */\n/**\n * Address margin not present in IE 8/9 and Safari.\n */\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * Address differences between Firefox and other browsers.\n */\nhr {\n  box-sizing: content-box;\n  height: 0;\n}\n\n/**\n * Contain overflow in all browsers.\n */\npre {\n  overflow: auto;\n}\n\n/**\n * Address odd `em`-unit font size rendering in all browsers.\n */\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\n\n/* forms\n   ========================================================================== */\n/**\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\n * styling of `select`, unless a `border` property is set.\n */\n/**\n * 1. Correct color not being inherited.\n *    Known issue: affects color of disabled elements.\n * 2. Correct font properties not being inherited.\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\n */\ninput,\noptgroup,\ntextarea {\n  color: inherit;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n  margin: 0;\n  /* 3 */\n}\n\nselect {\n  margin: 0;\n}\n\n/**\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\n */\nbutton {\n  overflow: visible;\n}\n\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\n * Correct `select` style inheritance in Firefox.\n */\nbutton,\nselect {\n  text-transform: none;\n}\n\n/**\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n *    and `video` controls.\n * 2. Correct inability to style clickable `input` types in iOS.\n * 3. Improve usability and consistency of cursor style between image-type\n *    `input` and others.\n */\nbutton,\nhtml input[type=button],\ninput[type=reset],\ninput[type=submit] {\n  -webkit-appearance: button;\n  /* 2 */\n  cursor: pointer;\n  /* 3 */\n}\n\n/**\n * Re-set default cursor for disabled elements.\n */\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\n\n/**\n * Remove inner padding and border in Firefox 4+.\n */\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n/**\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\ninput {\n  line-height: normal;\n}\n\n/**\n * It's recommended that you don't attempt to style these elements.\n * Firefox's implementation doesn't respect box-sizing, padding, or width.\n *\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\n * 2. Remove excess padding in IE 8/9/10.\n */\ninput[type=checkbox],\ninput[type=radio] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */\n}\n\n/**\n * Fix the cursor style for Chrome's increment/decrement buttons. For certain\n * `font-size` values of the `input`, it causes the cursor style of the\n * decrement button to change from `default` to `text`.\n */\ninput[type=number]::-webkit-inner-spin-button,\ninput[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\n * 2. Address `box-sizing` set to `border-box` in Safari and Chrome\n *    (include `-moz` to future-proof).\n */\ninput[type=search] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  /* 2 */\n  box-sizing: content-box;\n}\n\n/**\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\n * Safari (but not Chrome) clips the cancel button when the search input has\n * padding (and `textfield` appearance).\n */\ninput[type=search]::-webkit-search-cancel-button,\ninput[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * Define consistent border, margin, and padding.\n */\nfieldset {\n  border: none;\n  margin: 0;\n  padding: 0.5em;\n}\n\n/**\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\n */\nlegend {\n  border: 0;\n  /* 1 */\n  padding: 0;\n  /* 2 */\n}\n\n/**\n * Remove default vertical scrollbar in IE 8/9/10/11.\n */\ntextarea {\n  overflow: auto;\n}\n\n/**\n * Don't inherit the `font-weight` (applied by a rule above).\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\n */\noptgroup {\n  font-weight: bold;\n}\n\nhtml {\n  box-sizing: border-box;\n}\n\n*, *:before, *:after {\n  box-sizing: inherit;\n}\n\nhtml, body {\n  color: #222;\n  height: 100%;\n}\n\na {\n  color: #fff;\n  text-decoration: none;\n  transition: all 0.3s ease-in-out;\n}\n\nh1, h2, h3, h4, h5, h6, p, dl, ol, table {\n  margin-top: 0;\n  margin-bottom: 0.5em;\n}\n\ndd {\n  margin-left: 0;\n}\n\nul, li {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n\nimg {\n  max-width: 100%;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n  width: 100%;\n}\n\nthead tr {\n  font-family: sans-serif;\n}\n\ntd,\nth {\n  padding: 0.5em 0.25em;\n  border: 1px solid #ccc;\n  position: relative;\n  text-align: left;\n  vertical-align: top;\n  word-wrap: break-word;\n}\n\ninput[type=checkbox] {\n  width: auto;\n  transition: box-shadow 0.3s ease-in-out;\n  outline: none;\n  padding: 3px 0px 3px 3px;\n  margin: 5px 1px 3px 0px;\n  border: 1px solid #DDDDDD;\n}\ninput[type=checkbox]:focus {\n  box-shadow: 0 0 5px #51cbee;\n}\n\ntextarea {\n  width: 100%;\n}\n\nbody, html {\n  font-size: 16px;\n  font-family: sans-serif;\n}\n\nb, strong, .embolden {\n  font-family: sans-serif;\n}\n\n.italicize {\n  font-family: sans-serif;\n}\n\nem {\n  font-family: sans-serif;\n}\n\nb em, em b, strong em, em strong {\n  font-family: sans-serif;\n}\n\n.text-tiny {\n  font-size: 10.4px;\n}\n\n.text-small,\ntable {\n  font-size: 12px;\n}\n\n.text-normal,\np {\n  font-size: 14px;\n}\n\n.text-medlg,\nh6,\nh5 {\n  font-size: 16px;\n}\n\n.text-large,\nh4,\nh3,\nh1 {\n  font-size: 18px;\n}\n\n.text-largemed {\n  font-size: 20px;\n}\n\n.text-extralg,\nh2 {\n  font-size: 24px;\n}\n\n.text-verylarge {\n  font-size: 32px;\n}\n\n.text-superlarge {\n  font-size: 36px;\n}\n\nh1, h2, h3, h4, h5, h6 {\n  margin-top: 0;\n  font-family: sans-serif;\n}\n\n.align-right {\n  text-align: right;\n}\n\n.align-center {\n  text-align: center;\n}\n\n.align-left {\n  text-align: left;\n}\n\n.align-middle {\n  vertical-align: middle;\n}\n\n.float-left {\n  float: left;\n}\n\n.float-right {\n  float: right;\n}\n\n.floated-links {\n  float: right;\n  padding: 0.25em;\n}\n\n.floated-links > a {\n  margin-left: 1em;\n}\n\n.full-results td ul {\n  padding-left: 1.3em;\n}\n\n.full-results td li {\n  list-style-type: disc;\n}\n\n.display-block {\n  display: block;\n}\n\n.bottom-space-small {\n  padding-bottom: 0.5em;\n}\n\n.bottom-space-large {\n  padding-bottom: 2em;\n}\n\n.indented {\n  margin-left: 20px;\n}\n\n.selected {\n  background-color: pink !important;\n}\n\n.pad-right {\n  padding-right: 0.25em;\n}\n\n.pad-left {\n  padding-left: 0.25em;\n}\n\n.vertical-align-container {\n  display: flex;\n  align-items: center;\n}\n\n.hidden {\n  position: absolute !important;\n  top: -9999px !important;\n  left: -9999px !important;\n}\n\n.invisible {\n  visibility: hidden;\n}\n\n.slide {\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  transition: max-height 300ms;\n}\n\n.slide-hide {\n  max-height: 0;\n}\n\n.slide-show {\n  max-height: 80em;\n}\n\n.shadow {\n  box-shadow: 2px 2px 1px 0px rgba(121, 121, 121, 0.65);\n}\n\n.error {\n  border: 1px solid red;\n}\n\n.preserve-space {\n  white-space: pre-line;\n}\n\n.no-wrap {\n  white-space: nowrap;\n}\n\n.strike {\n  text-decoration: line-through;\n}\n\n.tag-spacer {\n  padding: 75px;\n}\n\n.inline-spacer {\n  padding: 0 0.5em;\n}\n\n.hand {\n  cursor: pointer;\n}\n\n.move {\n  cursor: move;\n}\n\n.full-width {\n  width: 100%;\n}\n\n.truncate {\n  max-height: 9em;\n  overflow-y: auto;\n  display: block;\n}\n\n.extra-spacing {\n  padding: 2em;\n}\n\n.prewrap {\n  white-space: pre-wrap;\n}\n\n:invalid {\n  box-shadow: none;\n}\n\n:-moz-submit-invalid {\n  box-shadow: none;\n}\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n.close {\n  cursor: pointer;\n}\n\n/* ==========================================================================\n   Print styles.\n   Based on HTML5-bolerplate print styles\n   ========================================================================== */\n@media print {\n  *,\n*:before,\n*:after,\np:first-letter,\ndiv:first-letter,\nblockquote:first-letter,\nli:first-letter,\np:first-line,\ndiv:first-line,\nblockquote:first-line,\nli:first-line {\n    background-color: transparent;\n    color: #000 !important;\n    /* Black prints faster:\n       http://www.sanbeiji.com/archives/953 */\n    box-shadow: none !important;\n    text-shadow: none !important;\n  }\n\n  pre {\n    white-space: pre-wrap !important;\n  }\n\n  pre,\nblockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid;\n  }\n\n  /*\n   * Printing Tables:\n   * http://css-discuss.incutio.com/wiki/Printing_Tables\n   */\n  thead {\n    display: table-header-group;\n  }\n\n  thead tr {\n    font-weight: bold;\n  }\n\n  tr,\nimg {\n    page-break-inside: avoid;\n  }\n\n  p,\nh2,\nh3 {\n    orphans: 3;\n    widows: 3;\n  }\n\n  h2,\nh3 {\n    page-break-after: avoid;\n  }\n\n  .noprint {\n    display: none !important;\n  }\n}", "",{"version":3,"sources":["webpack://./base/_normalize.scss","webpack://./main.scss","webpack://./base/_settings.scss","webpack://./base/_base.scss","webpack://./base/_typography.scss","webpack://./state/_state.scss","webpack://./base/_mixins.scss","webpack://./base/_print.scss"],"names":[],"mappings":"AAAA,2DAAA;AAEA;;;;EAAA;AAMA;EACE,0BAAA;EAA4B,MAAA;EAC5B,8BAAA;EAAgC,MAAA;ACClC;;ADEA;;EAAA;AAIA;EACE,SAAA;ACAF;;ADGA;+EAAA;AAGA;;;;EAAA;AAMA;;;;;;;;;;;;EAYE,cAAA;ACFF;;ADKA;;;EAAA;AAKA;;;;EAIE,qBAAA;EAAuB,MAAA;EACvB,wBAAA;EAA0B,MAAA;ACD5B;;ADIA;;;EAAA;AAKA;EACE,aAAA;EACA,SAAA;ACFF;;ADKA;;;EAAA;AAKA;;EAEE,aAAA;ACHF;;ADMA;+EAAA;AAGA;;EAAA;AAIA;EACE,uBAAA;ACLF;;ADQA;;EAAA;AAIA;;EAEE,UAAA;ACNF;;ADSA;+EAAA;AAGA;;EAAA;AAIA;EACE,yBAAA;ACRF;;ADWA;;EAAA;AAIA;;EAEE,iBAAA;ACTF;;ADYA;;EAAA;AAIA;EACE,kBAAA;ACVF;;ADaA;;EAAA;AAIA;EACE,gBAAA;EACA,WAAA;ACXF;;ADcA;;EAAA;AAIA;EACE,cAAA;ACZF;;ADeA;;EAAA;AAIA;;EAEE,cAAA;EACA,cAAA;EACA,kBAAA;EACA,wBAAA;ACbF;;ADgBA;EACE,WAAA;ACbF;;ADgBA;EACE,eAAA;ACbF;;ADgBA;+EAAA;AAGA;;EAAA;AAIA;EACE,SAAA;ACfF;;ADkBA;;EAAA;AAIA;EACE,gBAAA;AChBF;;ADmBA;+EAAA;AAGA;;EAAA;AAIA;EACE,gBAAA;AClBF;;ADqBA;;EAAA;AAIA;EAEE,uBAAA;EACA,SAAA;ACnBF;;ADsBA;;EAAA;AAIA;EACE,cAAA;ACpBF;;ADuBA;;EAAA;AAIA;;;;EAIE,iCAAA;EACA,cAAA;ACrBF;;ADwBA;+EAAA;AAGA;;;EAAA;AAKA;;;;;EAAA;AAOA;;;EAGE,cAAA;EAAgB,MAAA;EAChB,aAAA;EAAe,MAAA;EACf,SAAA;EAAW,MAAA;ACrBb;;ADwBA;EACE,SAAA;ACrBF;;ADyBA;;EAAA;AAIA;EACE,iBAAA;ACvBF;;AD0BA;;;;;EAAA;AAOA;;EAEE,oBAAA;ACxBF;;AD2BA;;;;;;EAAA;AAQA;;;;EAIE,0BAAA;EAA4B,MAAA;EAC5B,eAAA;EAAiB,MAAA;ACvBnB;;AD0BA;;EAAA;AAIA;;EAEE,eAAA;ACxBF;;AD2BA;;EAAA;AAIA;;EAEE,SAAA;EACA,UAAA;ACzBF;;AD4BA;;;EAAA;AAKA;EACE,mBAAA;AC1BF;;AD6BA;;;;;;EAAA;AAQA;;EAEE,sBAAA;EAAwB,MAAA;EACxB,UAAA;EAAY,MAAA;ACzBd;;AD4BA;;;;EAAA;AAMA;;EAEE,YAAA;AC1BF;;AD6BA;;;;EAAA;AAMA;EACE,6BAAA;EAA+B,MAAA;EAEE,MAAA;EACjC,uBAAA;ACzBF;;AD4BA;;;;EAAA;AAMA;;EAEE,wBAAA;AC1BF;;AD6BA;;EAAA;AAIA;EACE,YAAA;EACA,SAAA;EACA,cEtSe;AD2QjB;;AD8BA;;;EAAA;AAKA;EACE,SAAA;EAAW,MAAA;EACX,UAAA;EAAY,MAAA;AC1Bd;;AD6BA;;EAAA;AAIA;EACE,cAAA;AC3BF;;AD8BA;;;EAAA;AAKA;EACE,iBAAA;AC5BF;;AE/WA;EACE,sBAAA;AFkXF;;AEhXA;EACE,mBAAA;AFmXF;;AEhXA;EACE,WDoBY;ECnBZ,YAAA;AFmXF;;AEhXA;EACE,WDgBY;ECfZ,qBAAA;EACA,gCDFiB;ADqXnB;;AE9WA;EACE,aAAA;EACA,oBDoDe;AD6TjB;;AE9WA;EACE,cAAA;AFiXF;;AE7WA;EACE,qBAAA;EACA,SAAA;EACA,UAAA;AFgXF;;AE7WA;EACE,eAAA;AFgXF;;AE7WA;EAEE,yBAAA;EACA,iBAAA;EACA,WAAA;AF+WF;;AE5WA;EACE,uBD+BsB;ADgVxB;;AE5WA;;EAEE,qBAAA;EACA,sBAAA;EACA,kBAAA;EACA,gBAAA;EACA,mBAAA;EACA,qBAAA;AF+WF;;AE5WA;EACE,WAAA;EACA,uCAAA;EACA,aAAA;EACA,wBAAA;EACA,uBAAA;EACA,yBAAA;AF+WF;AE7WE;EACE,2BAAA;AF+WJ;;AE3WA;EACE,WAAA;AF8WF;;AG3bA;EACE,eFoFe;EEnFf,uBF8EiB;ADgXnB;;AG5bA;EACE,uBF4EsB;ADmXxB;;AG7bA;EACE,uBF0EwB;ADsX1B;;AG9bA;EACE,uBFqEiB;AD4XnB;;AG/bA;EACE,uBFqE6B;AD6X/B;;AG7bA;EAEE,iBAAA;AH+bF;;AG7bA;;EAEE,eAAA;AHgcF;;AG9bA;;EAEE,eFyDkB;ADwYpB;;AG/bA;;;EAEE,eFoDe;AD+YjB;;AGjcA;;;;EAEE,eAAA;AHscF;;AGpcA;EAEE,eAAA;AHscF;;AGpcA;;EAEE,eAAA;AHucF;;AGrcA;EAEE,eAAA;AHucF;;AGrcA;EAEE,eAAA;AHucF;;AGncA;EACE,aAAA;EACA,uBFsBsB;ADgbxB;;AIhgBA;EACE,iBAAA;AJmgBF;;AIhgBA;EACE,kBAAA;AJmgBF;;AIhgBA;EACE,gBAAA;AJmgBF;;AIhgBA;EACE,sBAAA;AJmgBF;;AIhgBA;EACE,WAAA;AJmgBF;;AIhgBA;EACE,YAAA;AJmgBF;;AIhgBA;EACE,YAAA;EACA,eHkDkB;ADidpB;;AIhgBA;EACE,gBH4CU;ADudZ;;AIhgBA;EACE,mBAAA;AJmgBF;;AIhgBA;EACE,qBAAA;AJmgBF;;AIhgBA;EACE,cAAA;AJmgBF;;AIhgBA;EACE,qBH6Be;ADsejB;;AIhgBA;EACE,mBAAA;AJmgBF;;AIhgBA;EACE,iBAAA;AJmgBF;;AIhgBA;EACE,iCAAA;AJmgBF;;AIhgBA;EACE,qBHckB;ADqfpB;;AIhgBA;EACE,oBHUkB;ADyfpB;;AIhgBA;EACE,aAAA;EACA,mBAAA;AJmgBF;;AIhgBA;EACE,6BAAA;EACA,uBAAA;EACA,wBAAA;AJmgBF;;AIhgBA;EACE,kBAAA;AJmgBF;;AIhgBA;EACE,SAAA;EACA,UAAA;EACA,gBAAA;EACA,4BAAA;AJmgBF;;AIhgBA;EACE,aAAA;AJmgBF;;AIhgBA;EACE,gBAAA;AJmgBF;;AIhgBA;EClGE,qDAAA;ALwmBF;;AIlgBA;EACE,qBAAA;AJqgBF;;AIlgBA;EACE,qBAAA;AJqgBF;;AIlgBA;EACE,mBAAA;AJqgBF;;AIlgBA;EACE,6BAAA;AJqgBF;;AIlgBA;EACE,aAAA;AJqgBF;;AIlgBA;EACE,gBAAA;AJqgBF;;AIlgBA;EACE,eAAA;AJqgBF;;AIlgBA;EACE,YAAA;AJqgBF;;AIlgBA;EACE,WAAA;AJqgBF;;AIlgBA;EACE,eAAA;EACA,gBAAA;EACA,cAAA;AJqgBF;;AIlgBA;EACE,YAAA;AJqgBF;;AIlgBA;EACE,qBAAA;AJqgBF;;AIjgBA;EACE,gBAAA;AJogBF;;AIjgBA;EACE,gBAAA;AJogBF;;AIjgBA;EACE,gBAAA;AJogBF;;AIjgBA;EACE,eAAA;AJogBF;;AM7qBA;;;+EAAA;AAIA;EACE;;;;;;;;;;;IAWE,6BAAA;IACA,sBAAA;IAAwB;6CAAA;IAExB,2BAAA;IACA,4BAAA;ENirBF;;EM9qBA;IACE,gCAAA;ENirBF;;EM/qBA;;IAEE,sBAAA;IACA,wBAAA;ENkrBF;;EM/qBA;;;IAAA;EAIA;IACE,2BAAA;ENkrBF;;EM/qBA;IACE,iBAAA;ENkrBF;;EM/qBA;;IAEE,wBAAA;ENkrBF;;EM/qBA;;;IAGE,UAAA;IACA,SAAA;ENkrBF;;EM/qBA;;IAEE,uBAAA;ENkrBF;;EMhrBA;IACE,wBAAA;ENmrBF;AACF","sourcesContent":["/*! normalize.css v3.0.1 | MIT License | git.io/normalize */\n\n/**\n * 1. Set default font family to sans-serif.\n * 2. Prevent iOS text size adjust after orientation change, without disabling\n *    user zoom.\n */\n\nhtml {\n  -ms-text-size-adjust: 100%; /* 2 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/**\n * Remove default margin.\n */\n\nbody {\n  margin: 0;\n}\n\n/* HTML5 display definitions\n   ========================================================================== */\n\n/**\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\n * Correct `block` display not defined for `details` or `summary` in IE 10/11 and Firefox.\n * Correct `block` display not defined for `main` in IE 11.\n */\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nnav,\nsection,\nsummary {\n  display: block;\n}\n\n/**\n * 1. Correct `inline-block` display not defined in IE 8/9.\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\n */\n\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block; /* 1 */\n  vertical-align: baseline; /* 2 */\n}\n\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Address `[hidden]` styling not present in IE 8/9/10.\n * Hide the `template` element in IE 8/9/11, Safari, and Firefox < 22.\n */\n\n[hidden],\ntemplate {\n  display: none;\n}\n\n/* Links\n   ========================================================================== */\n\n/**\n * Remove the gray background color from active links in IE 10.\n */\n\na {\n  background: transparent;\n}\n\n/**\n * Improve readability when focused and also mouse hovered in all browsers.\n */\n\na:active,\na:hover {\n  outline: 0;\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\n */\n\nabbr[title] {\n  border-bottom: 1px dotted;\n}\n\n/**\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\n */\n\nb,\nstrong {\n  font-weight: bold;\n}\n\n/**\n * Address styling not present in Safari and Chrome.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Address styling not present in IE 8/9.\n */\n\nmark {\n  background: #ff0;\n  color: #000;\n}\n\n/**\n * Address inconsistent and variable font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsup {\n  top: -0.5em;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove border when inside `a` element in IE 8/9/10.\n */\n\nimg {\n  border: 0;\n}\n\n/**\n * Correct overflow not hidden in IE 9/10/11.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * Address margin not present in IE 8/9 and Safari.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * Address differences between Firefox and other browsers.\n */\n\nhr {\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n  height: 0;\n}\n\n/**\n * Contain overflow in all browsers.\n */\n\npre {\n  overflow: auto;\n}\n\n/**\n * Address odd `em`-unit font size rendering in all browsers.\n */\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\n\n/* forms\n   ========================================================================== */\n\n/**\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\n * styling of `select`, unless a `border` property is set.\n */\n\n/**\n * 1. Correct color not being inherited.\n *    Known issue: affects color of disabled elements.\n * 2. Correct font properties not being inherited.\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\n */\n\ninput,\noptgroup,\ntextarea {\n  color: inherit; /* 1 */\n  font: inherit; /* 2 */\n  margin: 0; /* 3 */\n}\n\nselect {\n  margin: 0;\n}\n\n\n/**\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\n */\n\nbutton {\n  overflow: visible;\n}\n\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\n * Correct `select` style inheritance in Firefox.\n */\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/**\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n *    and `video` controls.\n * 2. Correct inability to style clickable `input` types in iOS.\n * 3. Improve usability and consistency of cursor style between image-type\n *    `input` and others.\n */\n\nbutton,\nhtml input[type=\"button\"], /* 1 */\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n  cursor: pointer; /* 3 */\n}\n\n/**\n * Re-set default cursor for disabled elements.\n */\n\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\n\n/**\n * Remove inner padding and border in Firefox 4+.\n */\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n/**\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\n\ninput {\n  line-height: normal;\n}\n\n/**\n * It's recommended that you don't attempt to style these elements.\n * Firefox's implementation doesn't respect box-sizing, padding, or width.\n *\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\n * 2. Remove excess padding in IE 8/9/10.\n */\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Fix the cursor style for Chrome's increment/decrement buttons. For certain\n * `font-size` values of the `input`, it causes the cursor style of the\n * decrement button to change from `default` to `text`.\n */\n\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\n * 2. Address `box-sizing` set to `border-box` in Safari and Chrome\n *    (include `-moz` to future-proof).\n */\n\ninput[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  -moz-box-sizing: content-box;\n  -webkit-box-sizing: content-box; /* 2 */\n  box-sizing: content-box;\n}\n\n/**\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\n * Safari (but not Chrome) clips the cancel button when the search input has\n * padding (and `textfield` appearance).\n */\n\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * Define consistent border, margin, and padding.\n */\n\nfieldset {\n  border: none;\n  margin: 0;\n  padding: $base-unit-half;\n}\n\n/**\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\n */\n\nlegend {\n  border: 0; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Remove default vertical scrollbar in IE 8/9/10/11.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * Don't inherit the `font-weight` (applied by a rule above).\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\n */\n\noptgroup {\n  font-weight: bold;\n}\n","/*! normalize.css v3.0.1 | MIT License | git.io/normalize */\n/**\n * 1. Set default font family to sans-serif.\n * 2. Prevent iOS text size adjust after orientation change, without disabling\n *    user zoom.\n */\nhtml {\n  -ms-text-size-adjust: 100%;\n  /* 2 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */\n}\n\n/**\n * Remove default margin.\n */\nbody {\n  margin: 0;\n}\n\n/* HTML5 display definitions\n   ========================================================================== */\n/**\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\n * Correct `block` display not defined for `details` or `summary` in IE 10/11 and Firefox.\n * Correct `block` display not defined for `main` in IE 11.\n */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nnav,\nsection,\nsummary {\n  display: block;\n}\n\n/**\n * 1. Correct `inline-block` display not defined in IE 8/9.\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\n */\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  /* 1 */\n  vertical-align: baseline;\n  /* 2 */\n}\n\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Address `[hidden]` styling not present in IE 8/9/10.\n * Hide the `template` element in IE 8/9/11, Safari, and Firefox < 22.\n */\n[hidden],\ntemplate {\n  display: none;\n}\n\n/* Links\n   ========================================================================== */\n/**\n * Remove the gray background color from active links in IE 10.\n */\na {\n  background: transparent;\n}\n\n/**\n * Improve readability when focused and also mouse hovered in all browsers.\n */\na:active,\na:hover {\n  outline: 0;\n}\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\n */\nabbr[title] {\n  border-bottom: 1px dotted;\n}\n\n/**\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\n */\nb,\nstrong {\n  font-weight: bold;\n}\n\n/**\n * Address styling not present in Safari and Chrome.\n */\ndfn {\n  font-style: italic;\n}\n\n/**\n * Address styling not present in IE 8/9.\n */\nmark {\n  background: #ff0;\n  color: #000;\n}\n\n/**\n * Address inconsistent and variable font size in all browsers.\n */\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsup {\n  top: -0.5em;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove border when inside `a` element in IE 8/9/10.\n */\nimg {\n  border: 0;\n}\n\n/**\n * Correct overflow not hidden in IE 9/10/11.\n */\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Grouping content\n   ========================================================================== */\n/**\n * Address margin not present in IE 8/9 and Safari.\n */\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * Address differences between Firefox and other browsers.\n */\nhr {\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n  height: 0;\n}\n\n/**\n * Contain overflow in all browsers.\n */\npre {\n  overflow: auto;\n}\n\n/**\n * Address odd `em`-unit font size rendering in all browsers.\n */\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\n\n/* forms\n   ========================================================================== */\n/**\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\n * styling of `select`, unless a `border` property is set.\n */\n/**\n * 1. Correct color not being inherited.\n *    Known issue: affects color of disabled elements.\n * 2. Correct font properties not being inherited.\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\n */\ninput,\noptgroup,\ntextarea {\n  color: inherit;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n  margin: 0;\n  /* 3 */\n}\n\nselect {\n  margin: 0;\n}\n\n/**\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\n */\nbutton {\n  overflow: visible;\n}\n\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\n * Correct `select` style inheritance in Firefox.\n */\nbutton,\nselect {\n  text-transform: none;\n}\n\n/**\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n *    and `video` controls.\n * 2. Correct inability to style clickable `input` types in iOS.\n * 3. Improve usability and consistency of cursor style between image-type\n *    `input` and others.\n */\nbutton,\nhtml input[type=button],\ninput[type=reset],\ninput[type=submit] {\n  -webkit-appearance: button;\n  /* 2 */\n  cursor: pointer;\n  /* 3 */\n}\n\n/**\n * Re-set default cursor for disabled elements.\n */\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\n\n/**\n * Remove inner padding and border in Firefox 4+.\n */\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n/**\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\ninput {\n  line-height: normal;\n}\n\n/**\n * It's recommended that you don't attempt to style these elements.\n * Firefox's implementation doesn't respect box-sizing, padding, or width.\n *\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\n * 2. Remove excess padding in IE 8/9/10.\n */\ninput[type=checkbox],\ninput[type=radio] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */\n}\n\n/**\n * Fix the cursor style for Chrome's increment/decrement buttons. For certain\n * `font-size` values of the `input`, it causes the cursor style of the\n * decrement button to change from `default` to `text`.\n */\ninput[type=number]::-webkit-inner-spin-button,\ninput[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\n * 2. Address `box-sizing` set to `border-box` in Safari and Chrome\n *    (include `-moz` to future-proof).\n */\ninput[type=search] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  -moz-box-sizing: content-box;\n  -webkit-box-sizing: content-box;\n  /* 2 */\n  box-sizing: content-box;\n}\n\n/**\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\n * Safari (but not Chrome) clips the cancel button when the search input has\n * padding (and `textfield` appearance).\n */\ninput[type=search]::-webkit-search-cancel-button,\ninput[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * Define consistent border, margin, and padding.\n */\nfieldset {\n  border: none;\n  margin: 0;\n  padding: 0.5em;\n}\n\n/**\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\n */\nlegend {\n  border: 0;\n  /* 1 */\n  padding: 0;\n  /* 2 */\n}\n\n/**\n * Remove default vertical scrollbar in IE 8/9/10/11.\n */\ntextarea {\n  overflow: auto;\n}\n\n/**\n * Don't inherit the `font-weight` (applied by a rule above).\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\n */\noptgroup {\n  font-weight: bold;\n}\n\nhtml {\n  box-sizing: border-box;\n}\n\n*, *:before, *:after {\n  box-sizing: inherit;\n}\n\nhtml, body {\n  color: #222;\n  height: 100%;\n}\n\na {\n  color: #fff;\n  text-decoration: none;\n  transition: all 0.3s ease-in-out;\n}\n\nh1, h2, h3, h4, h5, h6, p, dl, ol, table {\n  margin-top: 0;\n  margin-bottom: 0.5em;\n}\n\ndd {\n  margin-left: 0;\n}\n\nul, li {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n\nimg {\n  max-width: 100%;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n  width: 100%;\n}\n\nthead tr {\n  font-family: sans-serif;\n}\n\ntd,\nth {\n  padding: 0.5em 0.25em;\n  border: 1px solid #ccc;\n  position: relative;\n  text-align: left;\n  vertical-align: top;\n  word-wrap: break-word;\n}\n\ninput[type=checkbox] {\n  width: auto;\n  transition: box-shadow 0.3s ease-in-out;\n  outline: none;\n  padding: 3px 0px 3px 3px;\n  margin: 5px 1px 3px 0px;\n  border: 1px solid #DDDDDD;\n}\ninput[type=checkbox]:focus {\n  box-shadow: 0 0 5px #51cbee;\n}\n\ntextarea {\n  width: 100%;\n}\n\nbody, html {\n  font-size: 16px;\n  font-family: sans-serif;\n}\n\nb, strong, .embolden {\n  font-family: sans-serif;\n}\n\n.italicize {\n  font-family: sans-serif;\n}\n\nem {\n  font-family: sans-serif;\n}\n\nb em, em b, strong em, em strong {\n  font-family: sans-serif;\n}\n\n.text-tiny {\n  font-size: 10.4px;\n}\n\n.text-small,\ntable {\n  font-size: 12px;\n}\n\n.text-normal,\np {\n  font-size: 14px;\n}\n\n.text-medlg,\nh6,\nh5 {\n  font-size: 16px;\n}\n\n.text-large,\nh4,\nh3,\nh1 {\n  font-size: 18px;\n}\n\n.text-largemed {\n  font-size: 20px;\n}\n\n.text-extralg,\nh2 {\n  font-size: 24px;\n}\n\n.text-verylarge {\n  font-size: 32px;\n}\n\n.text-superlarge {\n  font-size: 36px;\n}\n\nh1, h2, h3, h4, h5, h6 {\n  margin-top: 0;\n  font-family: sans-serif;\n}\n\n.align-right {\n  text-align: right;\n}\n\n.align-center {\n  text-align: center;\n}\n\n.align-left {\n  text-align: left;\n}\n\n.align-middle {\n  vertical-align: middle;\n}\n\n.float-left {\n  float: left;\n}\n\n.float-right {\n  float: right;\n}\n\n.floated-links {\n  float: right;\n  padding: 0.25em;\n}\n\n.floated-links > a {\n  margin-left: 1em;\n}\n\n.full-results td ul {\n  padding-left: 1.3em;\n}\n\n.full-results td li {\n  list-style-type: disc;\n}\n\n.display-block {\n  display: block;\n}\n\n.bottom-space-small {\n  padding-bottom: 0.5em;\n}\n\n.bottom-space-large {\n  padding-bottom: 2em;\n}\n\n.indented {\n  margin-left: 20px;\n}\n\n.selected {\n  background-color: pink !important;\n}\n\n.pad-right {\n  padding-right: 0.25em;\n}\n\n.pad-left {\n  padding-left: 0.25em;\n}\n\n.vertical-align-container {\n  display: flex;\n  align-items: center;\n}\n\n.hidden {\n  position: absolute !important;\n  top: -9999px !important;\n  left: -9999px !important;\n}\n\n.invisible {\n  visibility: hidden;\n}\n\n.slide {\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  transition: max-height 300ms;\n}\n\n.slide-hide {\n  max-height: 0;\n}\n\n.slide-show {\n  max-height: 80em;\n}\n\n.shadow {\n  -webkit-box-shadow: 2px 2px 1px 0px rgba(121, 121, 121, 0.65);\n  -moz-box-shadow: 2px 2px 1px 0px rgba(121, 121, 121, 0.65);\n  box-shadow: 2px 2px 1px 0px rgba(121, 121, 121, 0.65);\n}\n\n.error {\n  border: 1px solid red;\n}\n\n.preserve-space {\n  white-space: pre-line;\n}\n\n.no-wrap {\n  white-space: nowrap;\n}\n\n.strike {\n  text-decoration: line-through;\n}\n\n.tag-spacer {\n  padding: 75px;\n}\n\n.inline-spacer {\n  padding: 0 0.5em;\n}\n\n.hand {\n  cursor: pointer;\n}\n\n.move {\n  cursor: move;\n}\n\n.full-width {\n  width: 100%;\n}\n\n.truncate {\n  max-height: 9em;\n  overflow-y: auto;\n  display: block;\n}\n\n.extra-spacing {\n  padding: 2em;\n}\n\n.prewrap {\n  white-space: pre-wrap;\n}\n\n:invalid {\n  box-shadow: none;\n}\n\n:-moz-submit-invalid {\n  box-shadow: none;\n}\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n.close {\n  cursor: pointer;\n}\n\n/* ==========================================================================\n   Print styles.\n   Based on HTML5-bolerplate print styles\n   ========================================================================== */\n@media print {\n  *,\n*:before,\n*:after,\np:first-letter,\ndiv:first-letter,\nblockquote:first-letter,\nli:first-letter,\np:first-line,\ndiv:first-line,\nblockquote:first-line,\nli:first-line {\n    background-color: transparent;\n    color: #000 !important;\n    /* Black prints faster:\n       http://www.sanbeiji.com/archives/953 */\n    box-shadow: none !important;\n    text-shadow: none !important;\n  }\n\n  pre {\n    white-space: pre-wrap !important;\n  }\n\n  pre,\nblockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid;\n  }\n\n  /*\n   * Printing Tables:\n   * http://css-discuss.incutio.com/wiki/Printing_Tables\n   */\n  thead {\n    display: table-header-group;\n  }\n\n  thead tr {\n    font-weight: bold;\n  }\n\n  tr,\nimg {\n    page-break-inside: avoid;\n  }\n\n  p,\nh2,\nh3 {\n    orphans: 3;\n    widows: 3;\n  }\n\n  h2,\nh3 {\n    page-break-after: avoid;\n  }\n\n  .noprint {\n    display: none !important;\n  }\n}","// Site wrapper\n$wrapper-width: 1600px;\n\n// header Height\n$header-height: 44px;\n\n// Z-Index Layers\n$layer-main-body: 1;\n$layer-window-shade: 10;\n$layer-lightbox: 50;\n$layer-top-elements: 1000;\n\n// Drawer Settings:\n$drawer-width: 175px;\n$drawer-max-height: 500px;\n\n$transtion-drawer: all 0.3s ease-in-out;\n\n// =========== Breakpoint mixins\n@mixin breakpoint($point) {\n  @if $point == laptop {\n    @media (min-width: 840px) { @content ; }\n  }\n  @else if $point == tablet {\n    @media (min-width: 560px) { @content ; }\n  }\n}\n\n// =========== Site Colors\n\n// Chromes\n$color-black: #222;\n$color-white: #fff;\n$color-ltgrey: #f0eeee;\n$color-dkgrey: #363636;\n$color-ltltgrey: #fbf9f9;\n$color-medgrey: #a1a1a1;\n$color-newspaper: #ebe6e6;\n\n// blues\n$color-royal: #1484C8;\n$color-gold: #edc721;\n$color-pool: #83c1bf;\n$color-agua: #eef6f6;\n$color-dkdkblue: #001325;\n$color-soft-blue: #d7ebf3;\n$color-bright-blue: #93d8fd;\n\n// reds\n$color-red: #c00;\n$color-caution: #fff9e6;\n$color-soft-warning: #E0FFD7;\n$color-soft-red: #F1C8C8;\n$color-warning: #c00;\n$color-soft-pink: #e4afba;\n\n// yellows\n$color-soft-gold: #FFEB93;\n$color-bright-yellow: #f1d96e;\n$color-dirty-yellow: #ffc;\n$color-soft-yellow: #f3e9bd;\n\n// green\n$color-ltgreen: #eefeeb;\n$color-green: #009966;\n$color-soft-green: #b1eab2;\n$color-bright-green: #6ff373;\n\n// other\n$color-soft-purple: #c7beda;\n$color-soft-brown: #f3c28c;\n$color-soft-gray: #b1aca7;\n\n$brand-color: #0b9afb;\n\n// Used for generating paddings / margins\n$base-unit: 1em;\n$base-unit-half: $base-unit * 0.5;\n$base-unit-quarter: $base-unit * 0.25;\n\n// Fonts\n$base-font-family: sans-serif;\n$base-font-family-bold: sans-serif;\n$base-font-family-italic: sans-serif;\n$base-font-family-bold-italic: sans-serif;\n\n$base-font-size: 16px;\n$base-content-font: $base-font-size * 0.875;\n$base-rounded-corners: 3px;\n","// Improved method of handling box sizing\n// Aug '14\n// http://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/\nhtml {\n  box-sizing: border-box;\n}\n*, *:before, *:after {\n  box-sizing: inherit;\n}\n\nhtml, body {\n  color: $color-black;\n  height: 100%;\n}\n\na {\n  color: $color-white;\n  text-decoration: none;\n  transition: $transtion-drawer;\n}\n\n// IMO top margins are annoying - MS\n// Standard block text lements should push the one below away\nh1, h2, h3, h4, h5, h6, p, dl, ol, table {\n  margin-top: 0;\n  margin-bottom: $base-unit-half;\n}\n\ndd {\n  margin-left: 0;\n}\n\n// Clean UL spacing\nul, li {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n\nimg {\n  max-width: 100%;\n}\n\ntable {\n  @extend %text-small;\n  border-collapse: collapse;\n  border-spacing: 0;\n  width: 100%;\n}\n\nthead tr {\n  font-family: $base-font-family-bold;\n}\n\ntd,\nth {\n  padding: $base-unit-half $base-unit-quarter;\n  border: 1px solid #ccc;\n  position: relative;\n  text-align: left;\n  vertical-align: top;\n  word-wrap:break-word;\n}\n\ninput[type=checkbox] {\n  width: auto;\n  transition: box-shadow 0.30s ease-in-out;\n  outline: none;\n  padding: 3px 0px 3px 3px;\n  margin: 5px 1px 3px 0px;\n  border: 1px solid #DDDDDD;\n\n  &:focus {\n    box-shadow: 0 0 5px rgba(81, 203, 238, 1);\n  }\n}\n\ntextarea {\n  width: 100%;\n}","// Base Font Family and Sizing\nbody, html {\n  font-size: $base-font-size;\n  font-family: $base-font-family;}\n\nb, strong, .embolden {\n  font-family: $base-font-family-bold;}\n\n.italicize {\n  font-family: $base-font-family-italic;}\n\nem {\n  font-family: $base-font-family;}\n\nb em, em b, strong em, em strong {\n  font-family: $base-font-family-bold-italic;}\n\n\n// Text sizing classes\n// =============================\n.text-tiny,\n%text-tiny {\n  font-size: $base-font-size * 0.65;} // 10px / .65em\n\n.text-small,\n%text-small {\n  font-size: $base-font-size * 0.75;} // 12px / .75em\n\n.text-normal,\n%text-normal {\n  font-size: $base-content-font;} // 14px / .875em\n\n.text-medlg,\n%text-medlg {\n  font-size: $base-font-size;} // 16px / 1em\n\n.text-large,\n%text-large {\n  font-size: $base-font-size * 1.125;} // 18px / 1.125em\n\n.text-largemed,\n%text-largemed {\n  font-size: $base-font-size * 1.25;} // 20px / 1.25em\n\n.text-extralg,\n%text-extralg {\n  font-size: $base-font-size * 1.5;} // 24px / 1.5em\n\n.text-verylarge,\n%text-verylarge {\n  font-size: $base-font-size * 2;} // 32px / 2em\n\n.text-superlarge,\n%text-superlarge {\n  font-size: $base-font-size * 2.25;} // 36px / 2.25em\n\n// Headings\n// =======================\nh1, h2, h3, h4, h5, h6 {\n  margin-top: 0;\n  font-family: $base-font-family-bold;}\n\nh1 {\n  @extend %text-large}\n\nh2 {\n  @extend %text-extralg}\n\nh3 {\n  @extend %text-large}\n\nh4 {\n  @extend %text-large}\n\nh5 {\n  @extend %text-medlg}\n\nh6 {\n  @extend %text-medlg}\n\np {\n  @extend %text-normal}\n","// Place state change stylesheets in these files (non-module-specific shared classes)\n\n.align-right {\n  text-align: right;\n}\n\n.align-center {\n  text-align: center;\n}\n\n.align-left {\n  text-align: left;\n}\n\n.align-middle {\n  vertical-align: middle;\n}\n\n.float-left {\n  float: left;\n}\n\n.float-right {\n  float: right;\n}\n\n.floated-links {\n  float: right;\n  padding: $base-unit-quarter;\n}\n\n.floated-links > a {\n  margin-left: $base-unit;\n}\n\n.full-results td ul {\n  padding-left: 1.3em;\n}\n\n.full-results td li {\n  list-style-type: disc;\n}\n\n.display-block {\n  display: block;\n}\n\n.bottom-space-small {\n  padding-bottom: $base-unit-half;\n}\n\n.bottom-space-large {\n  padding-bottom: $base-unit * 2;\n}\n\n.indented {\n  margin-left: 20px;\n}\n\n.selected {\n  background-color: pink !important;\n}\n\n.pad-right {\n  padding-right: $base-unit-quarter;\n}\n\n.pad-left {\n  padding-left: $base-unit-quarter;\n}\n\n.vertical-align-container {\n  display: flex;\n  align-items: center;\n}\n\n.hidden {\n  position: absolute !important;\n  top: -9999px !important;\n  left: -9999px !important;\n}\n\n.invisible {\n  visibility: hidden;\n}\n\n.slide {\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  transition: max-height 300ms;\n}\n\n.slide-hide {\n  max-height: 0;\n}\n\n.slide-show {\n  max-height: 80em;\n}\n\n.shadow {\n  @include default-box-shadow();\n}\n\n.error {\n  border: 1px solid red;\n}\n\n.preserve-space {\n  white-space: pre-line;\n}\n\n.no-wrap {\n  white-space: nowrap;\n}\n\n.strike {\n  text-decoration: line-through;\n}\n\n.tag-spacer {\n  padding: 75px;\n}\n\n.inline-spacer {\n  padding: 0 $base-unit-half;\n}\n\n.hand {\n  cursor: pointer;\n}\n\n.move {\n  cursor: move;\n}\n\n.full-width {\n  width: 100%;\n}\n\n.truncate {\n  max-height: $base-unit * 9;\n  overflow-y: auto;\n  display: block;\n}\n\n.extra-spacing {\n  padding: 2em;\n}\n\n.prewrap {\n  white-space: pre-wrap;\n}\n\n// Fixes bug/feature in Firefox that makes :invalid fields glow\n:invalid {\n  box-shadow: none;\n}\n\n:-moz-submit-invalid {\n  box-shadow: none;\n}\n\n:-moz-ui-invalid {\n  box-shadow:none;\n}\n\n.close {\n  cursor: pointer;\n}\n","@mixin default-box-shadow() {\n  -webkit-box-shadow: 2px 2px 1px 0px rgba(121,121,121,0.65);\n  -moz-box-shadow: 2px 2px 1px 0px rgba(121,121,121,0.65);\n  box-shadow: 2px 2px 1px 0px rgba(121,121,121,0.65);\n}\n\n@mixin double-box-shadow() {\n  -webkit-box-shadow: 6px 6px 3px 2px rgba(121,121,121,0.40);\n  -moz-box-shadow: 6px 6px 3px 2px rgba(121,121,121,0.40);\n  box-shadow: 6px 6px 3px 2px rgba(121,121,121,0.40);\n}\n\n@mixin border-radius($radius: $base-rounded-corners) {\n  border-radius: $radius;\n}\n\n@mixin border-left-radius($radius: $base-rounded-corners) {\n  border-radius: $radius 0 0 $radius;\n}\n\n@mixin border-top-radius($radius: $base-rounded-corners) {\n  border-radius: $radius $radius 0 0;\n}\n\n@mixin clearfix() {\n  overflow: hidden;\n}\n","/* ==========================================================================\n   Print styles.\n   Based on HTML5-bolerplate print styles\n   ========================================================================== */\n@media print {\n  *,\n  *:before,\n  *:after,\n  p:first-letter,\n  div:first-letter,\n  blockquote:first-letter,\n  li:first-letter,\n  p:first-line,\n  div:first-line,\n  blockquote:first-line,\n  li:first-line {\n    background-color: transparent;\n    color: #000 !important; /* Black prints faster:\n                               http://www.sanbeiji.com/archives/953 */\n    box-shadow: none !important;\n    text-shadow: none !important;\n  }\n\n  pre {\n    white-space: pre-wrap !important;\n  }\n  pre,\n  blockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid;\n  }\n\n  /*\n   * Printing Tables:\n   * http://css-discuss.incutio.com/wiki/Printing_Tables\n   */\n  thead {\n    display: table-header-group;\n  }\n\n  thead tr {\n    font-weight: bold;\n  }\n\n  tr,\n  img {\n    page-break-inside: avoid;\n  }\n\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3;\n  }\n\n  h2,\n  h3 {\n    page-break-after: avoid;\n  }\n  .noprint {\n    display: none !important;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/components/Layout/CommonTemplate.scss":
/*!***************************************************!*\
  !*** ./src/components/Layout/CommonTemplate.scss ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_4_CommonTemplate_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[4]!./CommonTemplate.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[4]!./src/components/Layout/CommonTemplate.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_4_CommonTemplate_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_4_CommonTemplate_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/components/Layout/Drawer/Drawer.scss":
/*!**************************************************!*\
  !*** ./src/components/Layout/Drawer/Drawer.scss ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_4_Drawer_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/resolve-url-loader/index.js!../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[4]!./Drawer.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[4]!./src/components/Layout/Drawer/Drawer.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_4_Drawer_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_4_Drawer_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/components/Layout/HeaderBar/HeaderBar.scss":
/*!********************************************************!*\
  !*** ./src/components/Layout/HeaderBar/HeaderBar.scss ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_4_HeaderBar_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/resolve-url-loader/index.js!../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[4]!./HeaderBar.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[4]!./src/components/Layout/HeaderBar/HeaderBar.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_4_HeaderBar_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_4_HeaderBar_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/components/Layout/Lightbox/LBHickman/LBHickman.scss":
/*!*****************************************************************!*\
  !*** ./src/components/Layout/Lightbox/LBHickman/LBHickman.scss ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_4_LBHickman_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/postcss-loader/dist/cjs.js!../../../../../node_modules/resolve-url-loader/index.js!../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[4]!./LBHickman.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[4]!./src/components/Layout/Lightbox/LBHickman/LBHickman.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_4_LBHickman_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_4_LBHickman_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/components/Layout/Lightbox/Lightbox.scss":
/*!******************************************************!*\
  !*** ./src/components/Layout/Lightbox/Lightbox.scss ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_4_Lightbox_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/resolve-url-loader/index.js!../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[4]!./Lightbox.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[4]!./src/components/Layout/Lightbox/Lightbox.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_4_Lightbox_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_4_Lightbox_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/components/Layout/WindowShade/WindowShade.scss":
/*!************************************************************!*\
  !*** ./src/components/Layout/WindowShade/WindowShade.scss ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_4_WindowShade_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/resolve-url-loader/index.js!../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[4]!./WindowShade.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[4]!./src/components/Layout/WindowShade/WindowShade.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_4_WindowShade_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_4_WindowShade_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/components/forms/forms.scss":
/*!*****************************************!*\
  !*** ./src/components/forms/forms.scss ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_4_forms_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[4]!./forms.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[4]!./src/components/forms/forms.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_4_forms_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_4_forms_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_4_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[4]!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[4]!./src/styles/main.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_4_main_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_4_main_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.hmd = function(module) {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: function() {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
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
/******/ 			"index": 0
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
/******/ 		var chunkLoadingGlobal = self["webpackChunkreact_marvel_api"] = self["webpackChunkreact_marvel_api"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	!function() {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], function() { return __webpack_require__("./src/pages/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map