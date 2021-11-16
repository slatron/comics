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
  getRemAlbumsFB: function getRemAlbumsFB() {
    return db.ref('rem-albums').once('value');
  },
  getRemTiersFB: function getRemTiersFB() {
    return db.ref('rem-tiers').once('value');
  },
  updateRemTiersFB: function updateRemTiersFB(tiers) {
    return db.ref('rem-tiers').set(tiers);
  },
  updateRemAlbumsFB: function updateRemAlbumsFB(albums) {
    return db.ref('rem-albums').set(albums);
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

/***/ "./src/components/ComicsList/ComicListItem/ComicListItem.js":
/*!******************************************************************!*\
  !*** ./src/components/ComicsList/ComicListItem/ComicListItem.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var store_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! store/actions */ "./src/store/actions/index.js");
/* harmony import */ var _ComicsListItemDetails_ComicsListItemDetails__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ComicsListItemDetails/ComicsListItemDetails */ "./src/components/ComicsList/ComicListItem/ComicsListItemDetails/ComicsListItemDetails.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var ComicListItem = function ComicListItem(_ref) {
  var comic = _ref.comic;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      detailsOpen = _useState2[0],
      setDetailsOpen = _useState2[1];

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();

  var generateImgUrl = function generateImgUrl(comic) {
    return comic.images.length ? "".concat(comic.images[0].path, ".").concat(comic.images[0].extension) : 'https://via.placeholder.com/150';
  };

  var handleShowDetailsClick = function handleShowDetailsClick() {
    setDetailsOpen(!detailsOpen);
  };

  var handleImageClick = function handleImageClick() {
    dispatch((0,store_actions__WEBPACK_IMPORTED_MODULE_3__.lightboxShow)(_objectSpread(_objectSpread({}, comic), {
      type: 'cover-image',
      url: generateImgUrl(comic)
    })));
    dispatch((0,store_actions__WEBPACK_IMPORTED_MODULE_3__.windowshadeShow)());
  };

  var stripParens = function stripParens(str) {
    return str.replace(/ *\(\d[^)]*\) */g, ' ');
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    key: comic.id.toString(),
    className: "".concat(detailsOpen ? 'expanded' : '')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "comic-img"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: generateImgUrl(comic),
    onClick: function onClick() {
      return handleImageClick();
    },
    alt: comic.title
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "comic-details"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, stripParens(comic.title)), detailsOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ComicsListItemDetails_ComicsListItemDetails__WEBPACK_IMPORTED_MODULE_4__["default"], {
    comic: comic
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "comic-expand",
    onClick: function onClick() {
      return handleShowDetailsClick();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    x: "0",
    y: "0",
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M 0 20 H 20 V 0 L 0 20",
    stroke: "#000000",
    strokeWidth: "3",
    fill: "#ff0000"
  }))));
};

ComicListItem.propTypes = {
  comic: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object.isRequired)
};
/* harmony default export */ __webpack_exports__["default"] = (ComicListItem);

/***/ }),

/***/ "./src/components/ComicsList/ComicListItem/ComicsListItemDetails/ComicsListItemDetails.js":
/*!************************************************************************************************!*\
  !*** ./src/components/ComicsList/ComicListItem/ComicsListItemDetails/ComicsListItemDetails.js ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DetailsCharacterList_DetailsCharacterList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DetailsCharacterList/DetailsCharacterList */ "./src/components/ComicsList/ComicListItem/ComicsListItemDetails/DetailsCharacterList/DetailsCharacterList.js");
/* harmony import */ var _DetailsCreatorList_DetailsCreatorList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DetailsCreatorList/DetailsCreatorList */ "./src/components/ComicsList/ComicListItem/ComicsListItemDetails/DetailsCreatorList/DetailsCreatorList.js");





var ComicsListItemDetails = function ComicsListItemDetails(_ref) {
  var comic = _ref.comic;
  var characters = comic.characters,
      creators = comic.creators;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    key: comic.id.toString()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DetailsCharacterList_DetailsCharacterList__WEBPACK_IMPORTED_MODULE_2__["default"], {
    characters: characters
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DetailsCreatorList_DetailsCreatorList__WEBPACK_IMPORTED_MODULE_3__["default"], {
    creators: creators
  }));
};

ComicsListItemDetails.propTypes = {
  comic: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object.isRequired)
};
/* harmony default export */ __webpack_exports__["default"] = (ComicsListItemDetails);

/***/ }),

/***/ "./src/components/ComicsList/ComicListItem/ComicsListItemDetails/DetailsCharacterList/CharacterLinks/CharacterLinks.js":
/*!*****************************************************************************************************************************!*\
  !*** ./src/components/ComicsList/ComicListItem/ComicsListItemDetails/DetailsCharacterList/CharacterLinks/CharacterLinks.js ***!
  \*****************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var src_api_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/api/api */ "./src/api/api.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var store_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! store/actions */ "./src/store/actions/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var CharacterLinks = function CharacterLinks(_ref) {
  var label = _ref.label,
      names = _ref.names,
      urls = _ref.urls;

  var simplePlural = function simplePlural(string, n) {
    return n > 1 ? "".concat(string, "s") : string;
  };

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();

  var getId = function getId(url) {
    var segs = url.split('/');
    return segs[segs.length - 1];
  };

  var handleCharacterClick = function handleCharacterClick(url) {
    src_api_api__WEBPACK_IMPORTED_MODULE_1__["default"].getCharacter(getId(url)).then(function (response) {
      return response.json();
    }).then(function (response) {
      var _response$data$result;

      if ((_response$data$result = response.data.results) !== null && _response$data$result !== void 0 && _response$data$result.length) {
        dispatch((0,store_actions__WEBPACK_IMPORTED_MODULE_4__.lightboxShow)(_objectSpread(_objectSpread({}, response.data.results[0]), {
          type: 'details-character'
        })));
        dispatch((0,store_actions__WEBPACK_IMPORTED_MODULE_4__.windowshadeShow)());
      }
    });
  };

  if (!names.length) return null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "detail-entry"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h6", null, simplePlural(label, names.length)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "hand",
    onClick: function onClick() {
      return handleCharacterClick(urls[0]);
    }
  }, names[0]));
};

CharacterLinks.propTypes = {
  label: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  names: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().array),
  urls: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().array)
};
/* harmony default export */ __webpack_exports__["default"] = (CharacterLinks);

/***/ }),

/***/ "./src/components/ComicsList/ComicListItem/ComicsListItemDetails/DetailsCharacterList/DetailsCharacterList.js":
/*!********************************************************************************************************************!*\
  !*** ./src/components/ComicsList/ComicListItem/ComicsListItemDetails/DetailsCharacterList/DetailsCharacterList.js ***!
  \********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CharacterLinks_CharacterLinks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CharacterLinks/CharacterLinks */ "./src/components/ComicsList/ComicListItem/ComicsListItemDetails/DetailsCharacterList/CharacterLinks/CharacterLinks.js");




var DetailsCharacterList = function DetailsCharacterList(_ref) {
  var characters = _ref.characters;
  var items = characters.items;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "detail-area"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CharacterLinks_CharacterLinks__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: "Main Character",
    names: items.map(function (item) {
      return item.name;
    }),
    type: "character",
    urls: items.map(function (item) {
      return item.resourceURI;
    })
  }));
};

DetailsCharacterList.propTypes = {
  characters: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
};
/* harmony default export */ __webpack_exports__["default"] = (DetailsCharacterList);

/***/ }),

/***/ "./src/components/ComicsList/ComicListItem/ComicsListItemDetails/DetailsCreatorList/CreatorLinks/CreatorLinks.js":
/*!***********************************************************************************************************************!*\
  !*** ./src/components/ComicsList/ComicListItem/ComicsListItemDetails/DetailsCreatorList/CreatorLinks/CreatorLinks.js ***!
  \***********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



var getId = function getId(url) {
  var segs = url.split('/');
  return segs[segs.length - 1];
};

var DetailEntry = function DetailEntry(_ref) {
  var label = _ref.label,
      names = _ref.names,
      urls = _ref.urls;

  var simplePlural = function simplePlural(string, n) {
    return n > 1 ? "".concat(string, "s") : string;
  };

  var urlLinks = urls.map(function (url, idx) {
    return "https://www.marvel.com/comics/creators/".concat(getId(url), "/").concat(names[idx].split(' ').join('_'));
  });
  var nameLinks = names.map(function (creator, idx) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      href: urlLinks[idx],
      key: idx,
      target: "_blank",
      rel: "noreferrer"
    }, creator, idx !== names.length - 1 ? ',' : '');
  });
  if (!names.length) return null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "detail-entry detail-creator"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h6", null, simplePlural(label, names.length)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, nameLinks));
};

DetailEntry.propTypes = {
  label: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  names: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),
  urls: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array)
};
/* harmony default export */ __webpack_exports__["default"] = (DetailEntry);

/***/ }),

/***/ "./src/components/ComicsList/ComicListItem/ComicsListItemDetails/DetailsCreatorList/DetailsCreatorList.js":
/*!****************************************************************************************************************!*\
  !*** ./src/components/ComicsList/ComicListItem/ComicsListItemDetails/DetailsCreatorList/DetailsCreatorList.js ***!
  \****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CreatorLinks_CreatorLinks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CreatorLinks/CreatorLinks */ "./src/components/ComicsList/ComicListItem/ComicsListItemDetails/DetailsCreatorList/CreatorLinks/CreatorLinks.js");




var DetailsCreatorList = function DetailsCreatorList(_ref) {
  var creators = _ref.creators;
  var items = creators.items;
  var writers = items.filter(function (item) {
    return item.role === 'writer';
  });
  var pencilers = items.filter(function (item) {
    return item.role === 'penciler';
  });
  var inkers = items.filter(function (item) {
    return item.role === 'inker';
  });
  var colorists = items.filter(function (item) {
    return item.role === 'colorist';
  });
  var covers = items.filter(function (item) {
    return item.role.includes('cover');
  });
  var detailAreas = [{
    label: 'Writer',
    names: writers.map(function (writer) {
      return writer.name;
    }),
    urls: writers.map(function (writer) {
      return writer.resourceURI;
    })
  }, {
    label: 'Penciler',
    names: pencilers.map(function (writer) {
      return writer.name;
    }),
    urls: pencilers.map(function (writer) {
      return writer.resourceURI;
    })
  }, {
    label: 'Inker',
    names: inkers.map(function (writer) {
      return writer.name;
    }),
    urls: inkers.map(function (writer) {
      return writer.resourceURI;
    })
  }, {
    label: 'Colorist',
    names: colorists.map(function (writer) {
      return writer.name;
    }),
    urls: colorists.map(function (writer) {
      return writer.resourceURI;
    })
  }, {
    label: 'Cover',
    names: covers.map(function (writer) {
      return writer.name;
    }),
    urls: covers.map(function (writer) {
      return writer.resourceURI;
    })
  }];
  var detailEntries = detailAreas.map(function (area) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CreatorLinks_CreatorLinks__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: area.label,
      label: area.label,
      names: area.names,
      type: "creator",
      urls: area.urls
    });
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "detail-area"
  }, detailEntries);
};

DetailsCreatorList.propTypes = {
  creators: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
};
/* harmony default export */ __webpack_exports__["default"] = (DetailsCreatorList);

/***/ }),

/***/ "./src/components/ComicsList/ComicsList.js":
/*!*************************************************!*\
  !*** ./src/components/ComicsList/ComicsList.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ComicListItem_ComicListItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ComicListItem/ComicListItem */ "./src/components/ComicsList/ComicListItem/ComicListItem.js");
/* harmony import */ var _ComicsList_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ComicsList.scss */ "./src/components/ComicsList/ComicsList.scss");





var ComicsList = function ComicsList(_ref) {
  var comics = _ref.comics;

  function AllComics() {
    var comicsListDOM = comics.length ? comics.map(function (comic) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ComicListItem_ComicListItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
        key: comic.id.toString(),
        comic: comic
      });
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "no comics in selected filter");
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
      className: "comics-list"
    }, comicsListDOM);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(AllComics, null);
};

ComicsList.propTypes = {
  comics: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array)
};
/* harmony default export */ __webpack_exports__["default"] = (ComicsList);

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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");






var Drawer = function Drawer(_ref) {
  var children = _ref.children,
      section = _ref.section;
  var drawerActive = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function (state) {
    return state.drawer;
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("nav", {
    id: "drawer",
    className: "".concat(drawerActive ? 'active' : '')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "".concat(section === 'mcu' ? 'active' : '')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
    to: "/mcu-rank"
  }, "MCU Rank")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "".concat(section === 'comics' ? 'active' : '')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
    to: "/comics"
  }, "Comics")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "".concat(section === 'mcu' ? 'active' : '')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
    to: "/rem-rank"
  }, "REM Rank")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "".concat(section === 'lifetracker' ? 'active' : '')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
    to: "/lifetracker"
  }, "Lifetracker"))), children);
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

/***/ "./src/components/Rankings/Item/Item.js":
/*!**********************************************!*\
  !*** ./src/components/Rankings/Item/Item.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Item_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Item.scss */ "./src/components/Rankings/Item/Item.scss");



var IMG_PATH = window.location.hostname === 'localhost' ? './assets/images/' : './comics/assets/images/';

var Item = function Item(_ref) {
  var item = _ref.item;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
    className: "item ".concat(item.key),
    "data-testid": "item",
    style: {
      backgroundImage: "url('".concat(IMG_PATH).concat(item.key, ".jpg')")
    },
    key: item.key
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "ranking clarify"
  }, item.rank), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "title clarify"
  }, item.title));
};

Item.propTypes = {
  item: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
};
/* harmony default export */ __webpack_exports__["default"] = (Item);

/***/ }),

/***/ "./src/components/Rankings/Item/index.js":
/*!***********************************************!*\
  !*** ./src/components/Rankings/Item/index.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Item */ "./src/components/Rankings/Item/Item.js");

/* harmony default export */ __webpack_exports__["default"] = (_Item__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/Rankings/Tier/Tier.js":
/*!**********************************************!*\
  !*** ./src/components/Rankings/Tier/Tier.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_Rankings_Item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Rankings/Item */ "./src/components/Rankings/Item/index.js");
/* harmony import */ var _Tier_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Tier.scss */ "./src/components/Rankings/Tier/Tier.scss");





var Tier = function Tier(_ref) {
  var items = _ref.items,
      tier = _ref.tier;
  var itemListDOM = items.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_Rankings_Item__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: item.key,
      item: item
    });
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "data-testid": "tier",
    className: "tier tier-".concat(tier.title)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, tier.desc), itemListDOM);
};

Tier.propTypes = {
  items: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),
  tier: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
};
/* harmony default export */ __webpack_exports__["default"] = (Tier);

/***/ }),

/***/ "./src/components/Rankings/Tier/index.js":
/*!***********************************************!*\
  !*** ./src/components/Rankings/Tier/index.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tier_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tier.js */ "./src/components/Rankings/Tier/Tier.js");

/* harmony default export */ __webpack_exports__["default"] = (_Tier_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/Rankings/TiersList/TiersList.js":
/*!********************************************************!*\
  !*** ./src/components/Rankings/TiersList/TiersList.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_Rankings_Tier__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Rankings/Tier */ "./src/components/Rankings/Tier/index.js");
// This component takes items and tiers and sorts them into Tier components




var TiersList = function TiersList(_ref) {
  var items = _ref.items,
      tiers = _ref.tiers;
  // Sort items into object keyed by tier title
  var itemsByTier = {};
  items.forEach(function (item) {
    if (!itemsByTier[item.tier]) itemsByTier[item.tier] = [];
    itemsByTier[item.tier].push(item);
  }); // Generate list of tiers if populated

  var tiersListDOM = tiers.length ? tiers.map(function (tier) {
    return itemsByTier[tier.title] ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_Rankings_Tier__WEBPACK_IMPORTED_MODULE_2__["default"], {
      tier: tier,
      key: tier.title,
      items: itemsByTier[tier.title]
    }) : null;
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "loading"
  }, "loading...");
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "tiers-list"
  }, tiersListDOM);
};

TiersList.propTypes = {
  items: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),
  tiers: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array)
};
/* harmony default export */ __webpack_exports__["default"] = (TiersList);

/***/ }),

/***/ "./src/components/Rankings/TiersList/index.js":
/*!****************************************************!*\
  !*** ./src/components/Rankings/TiersList/index.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TiersList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TiersList */ "./src/components/Rankings/TiersList/TiersList.js");

/* harmony default export */ __webpack_exports__["default"] = (_TiersList__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/Rankings/useSetTierNames.js":
/*!****************************************************!*\
  !*** ./src/components/Rankings/useSetTierNames.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useSetTierNames": function() { return /* binding */ useSetTierNames; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var utils_sorting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/sorting */ "./src/utils/sorting.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var useSetTierNames = function useSetTierNames(tiersAPI, itemsAPI) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      allItems = _useState2[0],
      setAllItems = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      allTiers = _useState4[0],
      setAllTiers = _useState4[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    return getTiers();
  }, []);
  var tiersKey = {};
  var tiersBreakpoints = [];

  var setTierName = function setTierName(rank) {
    var rankKey;

    for (var i = 0; i < tiersBreakpoints.length; i++) {
      if (rank <= tiersBreakpoints[i]) {
        rankKey = tiersBreakpoints[i];
        break;
      }
    }

    return tiersKey[rankKey || 'last'];
  };

  function getTiers() {
    tiersAPI().then(function (snapshot) {
      var sortedTiers = snapshot.val().sort((0,utils_sorting__WEBPACK_IMPORTED_MODULE_1__.sorting)().sortBy('position', true));
      sortedTiers.forEach(function (t) {
        t.lowest && tiersBreakpoints.push(t.lowest);
        tiersKey[t.lowest || 'last'] = t.title;
      });
      getItems(sortedTiers);
    });
  }

  function getItems(tiers) {
    itemsAPI().then(function (snapshot) {
      var sortedItems = snapshot.val().sort((0,utils_sorting__WEBPACK_IMPORTED_MODULE_1__.sorting)().sortBy('rank', true));
      var itemsWithTier = sortedItems.map(function (a) {
        return _objectSpread(_objectSpread({}, a), {}, {
          tier: setTierName(a.rank)
        });
      });
      setAllTiers(tiers);
      setAllItems(itemsWithTier);
    });
  }

  return [allItems, allTiers];
};

/***/ }),

/***/ "./src/components/forms/FilterComics/FilterComics.js":
/*!***********************************************************!*\
  !*** ./src/components/forms/FilterComics/FilterComics.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _FilterComics_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FilterComics.scss */ "./src/components/forms/FilterComics/FilterComics.scss");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var FilterComics = function FilterComics(_ref) {
  var filterComics = _ref.filterComics,
      activeFilter = _ref.activeFilter,
      resetComics = _ref.resetComics,
      handleFilterDateChange = _ref.handleFilterDateChange,
      filterDate = _ref.filterDate;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      filterOpen = _useState2[0],
      setFilterOpen = _useState2[1];

  var toggleFilterOpen = function toggleFilterOpen() {
    setFilterOpen(!filterOpen);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "filter-controls"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h6", {
    onClick: toggleFilterOpen
  }, "+ Filter Results"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "filter-controls-body ".concat(filterOpen ? 'active' : '')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", {
    value: filterDate,
    onChange: handleFilterDateChange
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
    value: "lastWeek"
  }, "Last Week"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
    value: "thisWeek"
  }, "This Week"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
    value: "nextWeek"
  }, "Next Week"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
    value: "thisMonth"
  }, "This Month")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "switch ".concat(activeFilter === '(all)' ? 'active' : ''),
    onClick: resetComics
  }, "All"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "switch ".concat(activeFilter === '(Variant)' ? 'active' : ''),
    onClick: function onClick() {
      return filterComics('(Variant)');
    }
  }, "Variants"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "switch ".concat(activeFilter === '(Trade Paperback)' ? 'active' : ''),
    onClick: function onClick() {
      return filterComics('(Trade Paperback)');
    }
  }, "Trades")));
};

FilterComics.propTypes = {
  filterComics: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  activeFilter: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  resetComics: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  handleFilterDateChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  filterDate: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
/* harmony default export */ __webpack_exports__["default"] = (FilterComics);

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
/* harmony export */   "useFormData": function() { return /* binding */ useFormData; }
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









var noop = function noop() {};

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
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "REM Album Rankings"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_AdminRankings__WEBPACK_IMPORTED_MODULE_6__["default"], {
      itemsAPI: src_api__WEBPACK_IMPORTED_MODULE_3__["default"].getRemAlbumsFB,
      saveRankings: src_api__WEBPACK_IMPORTED_MODULE_3__["default"].updateRemAlbumsFB,
      tiersAPI: src_api__WEBPACK_IMPORTED_MODULE_3__["default"].getRemTiersFB,
      updateTierData: src_api__WEBPACK_IMPORTED_MODULE_3__["default"].updateRemTiersFB
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
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dnd */ "./node_modules/react-dnd/dist/esm/decorators/DropTarget.js");
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dnd */ "./node_modules/react-dnd/dist/esm/decorators/DragSource.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var style = {
  border: '1px dashed gray',
  padding: '0.5rem 1rem',
  marginBottom: '.5rem',
  backgroundColor: 'white',
  cursor: 'move'
};
var MoveableItem = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function Item(_ref, ref) {
  var index = _ref.index,
      text = _ref.text,
      isDragging = _ref.isDragging,
      connectDragSource = _ref.connectDragSource,
      connectDropTarget = _ref.connectDropTarget;
  var elementRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  connectDragSource(elementRef);
  connectDropTarget(elementRef);
  var opacity = isDragging ? 0 : 1;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, function () {
    return {
      getNode: function getNode() {
        return elementRef.current;
      }
    };
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    ref: elementRef,
    style: _objectSpread(_objectSpread({}, style), {}, {
      opacity: opacity
    })
  }, index + 1, " | ", text);
});
/* harmony default export */ __webpack_exports__["default"] = ((0,react_dnd__WEBPACK_IMPORTED_MODULE_1__.DropTarget)('item', {
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
})((0,react_dnd__WEBPACK_IMPORTED_MODULE_2__.DragSource)('item', {
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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, items.map(function (item, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_MoveableItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: item.key,
      index: i,
      id: item.key,
      text: item.title,
      moveItem: moveItem
    });
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "button",
    onClick: saveItems
  }, "Save"));
};

SortListItems.prototypes = {
  items: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),
  setItems: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  saveRankings: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
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
/* harmony import */ var _McuRankPage_McuRankPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./McuRankPage/McuRankPage */ "./src/components/page_roots/McuRankPage/McuRankPage.js");
/* harmony import */ var _ComicsPage_ComicsPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ComicsPage/ComicsPage */ "./src/components/page_roots/ComicsPage/ComicsPage.js");
/* harmony import */ var _RemRankPage_RemRankPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RemRankPage/RemRankPage */ "./src/components/page_roots/RemRankPage/RemRankPage.js");
/* harmony import */ var _LifetrackerPage_LifetrackerPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LifetrackerPage/LifetrackerPage */ "./src/components/page_roots/LifetrackerPage/LifetrackerPage.js");
/* harmony import */ var _AdminPage_AdminPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AdminPage/AdminPage */ "./src/components/page_roots/AdminPage/AdminPage.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");







function App() {
  var path = localStorage.getItem('redirect-path') || null;

  if (path) {
    localStorage.removeItem('redirect-path');
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Redirect, {
      to: path
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Switch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, {
    path: "/lifetracker"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_LifetrackerPage_LifetrackerPage__WEBPACK_IMPORTED_MODULE_4__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, {
    path: "/mcu-rank"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_McuRankPage_McuRankPage__WEBPACK_IMPORTED_MODULE_1__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, {
    path: "/rem-rank"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_RemRankPage_RemRankPage__WEBPACK_IMPORTED_MODULE_3__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, {
    path: "/admin"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_AdminPage_AdminPage__WEBPACK_IMPORTED_MODULE_5__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, {
    path: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ComicsPage_ComicsPage__WEBPACK_IMPORTED_MODULE_2__["default"], null))));
}

/***/ }),

/***/ "./src/components/page_roots/ComicsPage/ComicsPage.js":
/*!************************************************************!*\
  !*** ./src/components/page_roots/ComicsPage/ComicsPage.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var components_Layout_CommonTemplate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/Layout/CommonTemplate */ "./src/components/Layout/CommonTemplate.js");
/* harmony import */ var components_ComicsList_ComicsList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/ComicsList/ComicsList */ "./src/components/ComicsList/ComicsList.js");
/* harmony import */ var components_forms_FilterComics_FilterComics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/forms/FilterComics/FilterComics */ "./src/components/forms/FilterComics/FilterComics.js");
/* harmony import */ var _useFetchComics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useFetchComics */ "./src/components/page_roots/ComicsPage/useFetchComics.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var ComicsPage = function ComicsPage() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('(all)'),
      _useState2 = _slicedToArray(_useState, 2),
      activeFilter = _useState2[0],
      setActiveFilter = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('thisWeek'),
      _useState4 = _slicedToArray(_useState3, 2),
      filterDate = _useState4[0],
      setFilterDate = _useState4[1];

  var _useFetchComics = (0,_useFetchComics__WEBPACK_IMPORTED_MODULE_4__.useFetchComics)(filterDate),
      _useFetchComics2 = _slicedToArray(_useFetchComics, 2),
      loadingComics = _useFetchComics2[0],
      comicsRaw = _useFetchComics2[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState6 = _slicedToArray(_useState5, 2),
      comicResults = _useState6[0],
      setComicResults = _useState6[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setComicResults(comicsRaw);
  }, [comicsRaw]);

  var filterComics = function filterComics(term) {
    setActiveFilter(term);

    if (comicsRaw.length) {
      var filteredComics = comicsRaw.filter(function (comic) {
        return comic.title.indexOf(term) !== -1;
      });
      setComicResults(filteredComics);
    }
  };

  var resetComics = function resetComics() {
    setActiveFilter('(all)');
    setComicResults(comicsRaw);
  };

  var handleFilterDateChange = function handleFilterDateChange(e) {
    setFilterDate(e.target.value);
  };

  var FilterComicsProps = {
    resetComics: resetComics,
    filterComics: filterComics,
    filterDate: filterDate,
    activeFilter: activeFilter,
    handleFilterDateChange: handleFilterDateChange
  };
  if (loadingComics) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "loading"
  }, "loading...");
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_Layout_CommonTemplate__WEBPACK_IMPORTED_MODULE_1__["default"], {
    drawerChildren: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_forms_FilterComics_FilterComics__WEBPACK_IMPORTED_MODULE_3__["default"], FilterComicsProps),
    pageName: "comics"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_ComicsList_ComicsList__WEBPACK_IMPORTED_MODULE_2__["default"], {
    comics: comicResults
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ComicsPage);

/***/ }),

/***/ "./src/components/page_roots/ComicsPage/useFetchComics.js":
/*!****************************************************************!*\
  !*** ./src/components/page_roots/ComicsPage/useFetchComics.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useFetchComics": function() { return /* binding */ useFetchComics; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var src_api_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/api/api */ "./src/api/api.js");
/* harmony import */ var utils_sorting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/sorting */ "./src/utils/sorting.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// This hook returns comics for the dateString from the api provider


 // Clear Cached Responses after 1 hour

var lastStore = localStorage.getItem('lastStore');
var sinceLastStore = Date.now() - lastStore;
console.log(' ** sinceLastStore: ', sinceLastStore);

if (sinceLastStore > 3600000) {
  localStorage.clear();
}

var useFetchComics = function useFetchComics(dateString) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      comics = _useState2[0],
      setComics = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
      _useState4 = _slicedToArray(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setLoading(true);

    if (localStorage.getItem(dateString)) {
      console.log(' ** Getting Comics Results From Cache');
      setComics(JSON.parse(localStorage.getItem(dateString)));
      setLoading(false);
    } else {
      src_api_api__WEBPACK_IMPORTED_MODULE_1__["default"].getComicsByDateDescriptor(dateString).then(function (response) {
        return response.json();
      }).then(function (response) {
        if (response.data.results.length) {
          console.log(' ** Getting Comics Results From API');
          var results = response.data.results.filter(function (comic) {
            return comic.title.toLowerCase().indexOf('star wars') === -1;
          }).sort((0,utils_sorting__WEBPACK_IMPORTED_MODULE_2__.sorting)().sortBy('title', true));
          localStorage.setItem(dateString, JSON.stringify(results));
          localStorage.setItem('lastStore', Date.now());
          setComics(results);
        }
      }).catch(function (err) {
        console.log(err);
      }).finally(function () {
        return setLoading(false);
      });
    }
  }, [dateString]);
  return [loading, comics];
};

/***/ }),

/***/ "./src/components/page_roots/HickmanPage/characterData.js":
/*!****************************************************************!*\
  !*** ./src/components/page_roots/HickmanPage/characterData.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "characterData": function() { return /* binding */ characterData; }
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

/***/ "./src/components/page_roots/LifetrackerPage/LifeSection/CounterSection.js":
/*!*********************************************************************************!*\
  !*** ./src/components/page_roots/LifetrackerPage/LifeSection/CounterSection.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



var CounterSection = function CounterSection(_ref) {
  var available = _ref.available,
      counters = _ref.counters,
      counterDispatch = _ref.counterDispatch;

  var makePlayerSections = function makePlayerSections(sections) {
    return sections.map(function (color) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "counter-section centered",
        style: {
          backgroundColor: color
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
        className: "down",
        onClick: function onClick() {
          return counterDispatch({
            type: 'CHANGE_COUNTER',
            payload: {
              color: color,
              change: -1
            }
          });
        }
      }, "-1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "counter-count"
      }, counters[color]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
        className: "up",
        onClick: function onClick() {
          return counterDispatch({
            type: 'CHANGE_COUNTER',
            payload: {
              color: color,
              change: 1
            }
          });
        }
      }, "+1"));
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
    className: "counter-sections"
  }, makePlayerSections(Object.keys(counters)), available.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "choose-color-section centered"
  }, available.map(function (color) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      key: color,
      className: "color-chooser bg-".concat(color),
      onClick: function onClick() {
        return counterDispatch({
          type: 'ASSIGN_COLOR',
          payload: {
            color: color
          }
        });
      }
    }, "\xA0");
  })) : null);
};

CounterSection.propTypes = {
  available: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),
  counters: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  counterDispatch: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
};
/* harmony default export */ __webpack_exports__["default"] = (CounterSection);

/***/ }),

/***/ "./src/components/page_roots/LifetrackerPage/LifeSection/LifeButton.js":
/*!*****************************************************************************!*\
  !*** ./src/components/page_roots/LifetrackerPage/LifeSection/LifeButton.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



var LifeButton = function LifeButton(_ref) {
  var change = _ref.change,
      cls = _ref.cls,
      dispatch = _ref.dispatch,
      id = _ref.id;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: cls + ' life-button',
    onClick: function onClick() {
      return dispatch({
        type: 'CHANGE_LIFE',
        payload: {
          id: id,
          change: change
        }
      });
    },
    type: "button"
  }, change);
};

LifeButton.propTypes = {
  change: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number.isRequired),
  cls: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  dispatch: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  id: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)
};
/* harmony default export */ __webpack_exports__["default"] = (LifeButton);

/***/ }),

/***/ "./src/components/page_roots/LifetrackerPage/LifeSection/LifeSection.js":
/*!******************************************************************************!*\
  !*** ./src/components/page_roots/LifetrackerPage/LifeSection/LifeSection.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lifeSection_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lifeSection.scss */ "./src/components/page_roots/LifetrackerPage/LifeSection/lifeSection.scss");
/* harmony import */ var _LifeButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LifeButton */ "./src/components/page_roots/LifetrackerPage/LifeSection/LifeButton.js");
/* harmony import */ var _CounterSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CounterSection */ "./src/components/page_roots/LifetrackerPage/LifeSection/CounterSection.js");
/* harmony import */ var _Pawn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Pawn */ "./src/components/page_roots/LifetrackerPage/LifeSection/Pawn.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var ALL_COLORS = ['aqua', 'pink', 'yellow', 'goldenrod', 'plum', 'thistle'];

var getInitColors = function getInitColors(playerCount, id) {
  var colorCount = playerCount - 1 || 1;
  var OTHER_COLORS = [].concat(ALL_COLORS); // remove id index

  OTHER_COLORS.splice(id - 1, 1);
  return OTHER_COLORS.splice(0, colorCount);
};

var initialCountersState = function initialCountersState(playerCount, id) {
  return {
    colors: getInitColors(playerCount, id),
    counters: {}
  };
};

var reducer = function reducer(state, action) {
  switch (action.type) {
    case 'CHANGE_COUNTER':
      {
        var _action$payload = action.payload,
            color = _action$payload.color,
            change = _action$payload.change;
        state.counters[color] += change;
        return _objectSpread({}, state);
      }

    case 'ASSIGN_COLOR':
      {
        var _color = action.payload.color;
        state.counters[_color] = 0;
        state.colors = state.colors.filter(function (c) {
          return c !== _color;
        });
        return _objectSpread({}, state);
      }

    case 'INIT_COLORS':
      {
        var _action$payload2 = action.payload,
            playerCount = _action$payload2.playerCount,
            id = _action$payload2.id;
        var newColors = getInitColors(playerCount, id);
        state.colors = newColors;
        state.counters = {};
        return _objectSpread({}, state);
      }
  }

  return state;
};

var LifeSection = function LifeSection(_ref) {
  var id = _ref.id,
      flip = _ref.flip,
      life = _ref.life,
      name = _ref.name,
      dispatch = _ref.dispatch,
      playerCount = _ref.playerCount;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      viewCounters = _useState2[0],
      setViewCounters = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(playerCount),
      _useState4 = _slicedToArray(_useState3, 2),
      currentPlayerCount = _useState4[0],
      setPlayerCount = _useState4[1];

  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(reducer, initialCountersState(playerCount, id)),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      state = _useReducer2[0],
      counterDispatch = _useReducer2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (playerCount !== currentPlayerCount) {
      setPlayerCount(playerCount);
      counterDispatch({
        type: 'INIT_COLORS',
        payload: {
          id: id,
          playerCount: playerCount
        }
      });
    }
  }, [playerCount, id]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "full-height-layout life-section ".concat(flip ? 'flip' : '')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "header-row align-row align-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, name))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
    className: "counter-area".concat(viewCounters ? ' active' : '')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    class: "counter-area-control-icon",
    onClick: function onClick() {
      return setViewCounters(!viewCounters);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Pawn__WEBPACK_IMPORTED_MODULE_5__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
    className: "counter-sections"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CounterSection__WEBPACK_IMPORTED_MODULE_4__["default"], {
    available: state.colors,
    counters: state.counters,
    counterDispatch: counterDispatch
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "align-content centered align-row align-footer",
    onClick: function onClick() {
      return dispatch({
        type: 'CHANGE_LIFE',
        payload: {
          id: id,
          change: -1
        }
      });
    }
  }, life), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "double-col-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
    className: "centered"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_LifeButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
    cls: "down",
    change: -1,
    dispatch: dispatch,
    id: id
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_LifeButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
    cls: "down-big",
    change: -5,
    dispatch: dispatch,
    id: id
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
    className: "centered"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_LifeButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
    cls: "up-big",
    change: +5,
    dispatch: dispatch,
    id: id
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_LifeButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
    cls: "up",
    change: +1,
    dispatch: dispatch,
    id: id
  }))));
};

LifeSection.propTypes = {
  id: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  flip: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  life: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  name: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  dispatch: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  playerCount: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)
};
/* harmony default export */ __webpack_exports__["default"] = (LifeSection);

/***/ }),

/***/ "./src/components/page_roots/LifetrackerPage/LifeSection/Pawn.js":
/*!***********************************************************************!*\
  !*** ./src/components/page_roots/LifetrackerPage/LifeSection/Pawn.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
 // import PropTypes from 'prop-types'

var Pawn = function Pawn() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    viewBox: "0 0 512 512",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#000",
    d: "M255.875 19.47c-33.142 0-59.844 26.822-59.844 60.186 0 33.364 26.703 60.156 59.845 60.156 33.142 0 59.875-26.792 59.875-60.156S289.017 19.47 255.875 19.47zm-50.688 120.343c-2.908 1.23-5.658 2.53-8.187 3.937-14.467 8.046-21.47 17.86-21.47 27.094 0 9.234 7.003 19.08 21.47 27.125 14.467 8.044 35.51 13.436 58.875 13.436 23.365 0 44.408-5.392 58.875-13.437 14.467-8.047 21.47-17.892 21.47-27.126 0-9.234-7.003-19.048-21.47-27.094-2.53-1.406-5.28-2.708-8.188-3.938-13.696 11.647-31.392 18.688-50.687 18.688-19.3 0-36.996-7.034-50.688-18.688zm78.875 87.906c-8.948 1.54-18.394 2.374-28.187 2.374-9.315 0-18.316-.758-26.875-2.156 2.69 6.923 4.36 14.186 4.906 21.656 2.456 33.554-17.04 69.573-58.47 93.594l-.155.093-.155.095c-20.062 10.653-30.28 24.056-30.28 36.97 0 12.9 10.28 26.46 30.343 37.217 20.062 10.76 48.86 17.844 80.75 17.844s60.687-7.085 80.75-17.844c20.062-10.758 30.343-24.318 30.343-37.218 0-13.127-10.773-26.656-31.655-37.406l-.22-.125-.186-.094c-40.344-23.394-58.705-59.676-55.908-93.22.626-7.497 2.31-14.813 5-21.78zM128.845 395.655c-5.592 3.72-10.256 7.61-13.875 11.53-6.9 7.48-9.94 14.64-9.94 21.845 0 7.206 3.04 14.397 9.94 21.876 6.898 7.48 17.6 14.852 31.28 21.125 27.36 12.547 66.42 20.69 109.625 20.69 43.206 0 82.295-8.143 109.656-20.69 13.682-6.27 24.352-13.644 31.25-21.124 6.9-7.48 9.97-14.67 9.97-21.875 0-7.204-3.07-14.363-9.97-21.842-3.597-3.902-8.238-7.767-13.78-11.47-5.638 15.6-19.584 28.706-37.5 38.313-23.533 12.62-54.947 20.095-89.563 20.095-34.615 0-66.06-7.474-89.593-20.094-17.94-9.62-31.887-22.747-37.5-38.374z"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Pawn);

/***/ }),

/***/ "./src/components/page_roots/LifetrackerPage/LifetrackerMenu/LifetrackerMenu.js":
/*!**************************************************************************************!*\
  !*** ./src/components/page_roots/LifetrackerPage/LifetrackerMenu/LifetrackerMenu.js ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lifetrackerMenu_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lifetrackerMenu.scss */ "./src/components/page_roots/LifetrackerPage/LifetrackerMenu/lifetrackerMenu.scss");




var LifetrackerMenu = function LifetrackerMenu(_ref) {
  var state = _ref.state,
      dispatch = _ref.dispatch,
      resetGame = _ref.resetGame;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "life-tracker-menu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("fieldset", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Players"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "input-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", {
    value: state.playerCount,
    onChange: function onChange(e) {
      return dispatch({
        type: 'SET_PLAYER_COUNT',
        payload: parseInt(e.target.value)
      });
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
    value: "1"
  }, "1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
    value: "2"
  }, "2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
    value: "3"
  }, "3"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
    value: "4"
  }, "4"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
    value: "5"
  }, "5"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
    value: "6"
  }, "6")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("fieldset", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, "Life"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "input-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", {
    value: state.startingLife,
    onChange: function onChange(e) {
      return dispatch({
        type: 'SET_STARTING_LIFE',
        payload: parseInt(e.target.value)
      });
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
    value: "20"
  }, "20"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
    value: "25"
  }, "25"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
    value: "30"
  }, "30"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
    value: "35"
  }, "35"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
    value: "40"
  }, "40"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
    value: "45"
  }, "45"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
    value: "50"
  }, "50"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
    value: "75"
  }, "75"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
    value: "100"
  }, "100")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("fieldset", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    htmlFor: "multiplayer_cb"
  }, "Flip"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "input-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    id: "multiplayer_cb",
    checked: state.multiplayerMode,
    type: "checkbox",
    onChange: function onChange(e) {
      return dispatch({
        type: 'SET_MULTIPLAYER_MODE',
        payload: e.target.checked
      });
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("fieldset", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return resetGame();
    }
  }, "Reset")));
};

LifetrackerMenu.propTypes = {
  state: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  dispatch: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  resetGame: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
};
/* harmony default export */ __webpack_exports__["default"] = (LifetrackerMenu);

/***/ }),

/***/ "./src/components/page_roots/LifetrackerPage/LifetrackerPage.js":
/*!**********************************************************************!*\
  !*** ./src/components/page_roots/LifetrackerPage/LifetrackerPage.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var components_Layout_CommonTemplate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/Layout/CommonTemplate */ "./src/components/Layout/CommonTemplate.js");
/* harmony import */ var _LifeSection_LifeSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LifeSection/LifeSection */ "./src/components/page_roots/LifetrackerPage/LifeSection/LifeSection.js");
/* harmony import */ var _LifetrackerMenu_LifetrackerMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LifetrackerMenu/LifetrackerMenu */ "./src/components/page_roots/LifetrackerPage/LifetrackerMenu/LifetrackerMenu.js");
/* harmony import */ var _lifetrackerPage_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lifetrackerPage.scss */ "./src/components/page_roots/LifetrackerPage/lifetrackerPage.scss");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var MULTIPLAYER_MODE = false;
var STARTING_LIFE = 20;
var STARTING_PLAYERS = 2;

var initSections = function initSections(_ref) {
  var playerCount = _ref.playerCount,
      startingLife = _ref.startingLife,
      multiplayerMode = _ref.multiplayerMode;
  return Array.from(new Array(playerCount), function (x, i) {
    return {
      id: i + 1,
      life: startingLife,
      flip: multiplayerMode && i < playerCount / 2,
      name: "Player ".concat(i + 1)
    };
  });
};

var initialState = {
  multiplayerMode: false,
  startingLife: 20,
  playerCount: STARTING_PLAYERS,
  sections: initSections({
    playerCount: STARTING_PLAYERS,
    startingLife: STARTING_LIFE,
    multiplayerMode: MULTIPLAYER_MODE
  })
};

var reducer = function reducer(state, action) {
  switch (action.type) {
    case 'RESET_LIFE':
      {
        state.sections.forEach(function (s) {
          return s.life = state.startingLife;
        });
        return _objectSpread(_objectSpread({}, state), {}, {
          sections: _toConsumableArray(state.sections)
        });
      }

    case 'SET_MULTIPLAYER_MODE':
      {
        state.sections.forEach(function (s) {
          return s.flip = action.payload && s.id - 1 < state.playerCount / 2;
        });
        return _objectSpread(_objectSpread({}, state), {}, {
          multiplayerMode: action.payload,
          sections: _toConsumableArray(state.sections)
        });
      }

    case 'SET_STARTING_LIFE':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          startingLife: action.payload,
          sections: initSections({
            playerCount: state.playerCount,
            startingLife: action.payload,
            multiplayerMode: state.multiplayerMode
          })
        });
      }

    case 'SET_PLAYER_COUNT':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          playerCount: action.payload,
          sections: initSections({
            playerCount: action.payload,
            startingLife: state.startingLife,
            multiplayerMode: state.multiplayerMode
          })
        });
      }

    case 'CHANGE_LIFE':
      {
        var _action$payload = action.payload,
            id = _action$payload.id,
            change = _action$payload.change;
        var section = state.sections.find(function (s) {
          return s.id === id;
        });
        section.life += change;
        return _objectSpread(_objectSpread({}, state), {}, {
          sections: _toConsumableArray(state.sections)
        });
      }
  }

  return state;
};

var LifetrackerPage = function LifetrackerPage() {
  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(reducer, initialState),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  var resetGame = function resetGame() {
    return dispatch({
      type: 'RESET_LIFE'
    });
  };

  var MenuProps = {
    state: state,
    dispatch: dispatch,
    resetGame: resetGame
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_Layout_CommonTemplate__WEBPACK_IMPORTED_MODULE_1__["default"], {
    drawerChildren: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_LifetrackerMenu_LifetrackerMenu__WEBPACK_IMPORTED_MODULE_3__["default"], MenuProps),
    pageName: "lifetracker"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "full-height-layout"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "align-row align-content life-tracker-wrapper"
  }, state.sections.map(function (section) {
    section.dispatch = dispatch;
    section.playerCount = state.playerCount;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
      key: section.id,
      className: "life-section ".concat(state.playerCount < 3 ? 'low-players' : '')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_LifeSection_LifeSection__WEBPACK_IMPORTED_MODULE_2__["default"], section));
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (LifetrackerPage);

/***/ }),

/***/ "./src/components/page_roots/McuRankPage/McuRankPage.js":
/*!**************************************************************!*\
  !*** ./src/components/page_roots/McuRankPage/McuRankPage.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var components_Layout_CommonTemplate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/Layout/CommonTemplate */ "./src/components/Layout/CommonTemplate.js");
/* harmony import */ var components_Rankings_TiersList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Rankings/TiersList */ "./src/components/Rankings/TiersList/index.js");
/* harmony import */ var src_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/api */ "./src/api/index.js");
/* harmony import */ var src_components_Rankings_useSetTierNames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/components/Rankings/useSetTierNames */ "./src/components/Rankings/useSetTierNames.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var McuRankPage = function McuRankPage() {
  var _useSetTierNames = (0,src_components_Rankings_useSetTierNames__WEBPACK_IMPORTED_MODULE_4__.useSetTierNames)(src_api__WEBPACK_IMPORTED_MODULE_3__["default"].getTiersFB, src_api__WEBPACK_IMPORTED_MODULE_3__["default"].getMoviesFB),
      _useSetTierNames2 = _slicedToArray(_useSetTierNames, 2),
      allMovies = _useSetTierNames2[0],
      allTiers = _useSetTierNames2[1];

  if (!allMovies.length || !allTiers.length) return null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_Layout_CommonTemplate__WEBPACK_IMPORTED_MODULE_1__["default"], {
    pageName: "mcu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_Rankings_TiersList__WEBPACK_IMPORTED_MODULE_2__["default"], {
    items: allMovies,
    tiers: allTiers
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (McuRankPage);

/***/ }),

/***/ "./src/components/page_roots/RemRankPage/RemRankPage.js":
/*!**************************************************************!*\
  !*** ./src/components/page_roots/RemRankPage/RemRankPage.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var components_Layout_CommonTemplate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/Layout/CommonTemplate */ "./src/components/Layout/CommonTemplate.js");
/* harmony import */ var components_Rankings_TiersList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Rankings/TiersList */ "./src/components/Rankings/TiersList/index.js");
/* harmony import */ var src_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/api */ "./src/api/index.js");
/* harmony import */ var src_components_Rankings_useSetTierNames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/components/Rankings/useSetTierNames */ "./src/components/Rankings/useSetTierNames.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var RemRankPage = function RemRankPage() {
  var _useSetTierNames = (0,src_components_Rankings_useSetTierNames__WEBPACK_IMPORTED_MODULE_4__.useSetTierNames)(src_api__WEBPACK_IMPORTED_MODULE_3__["default"].getRemTiersFB, src_api__WEBPACK_IMPORTED_MODULE_3__["default"].getRemAlbumsFB),
      _useSetTierNames2 = _slicedToArray(_useSetTierNames, 2),
      allAlbums = _useSetTierNames2[0],
      allTiers = _useSetTierNames2[1];

  if (!allAlbums.length || !allTiers.length) return null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_Layout_CommonTemplate__WEBPACK_IMPORTED_MODULE_1__["default"], {
    pageName: "rem"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_Rankings_TiersList__WEBPACK_IMPORTED_MODULE_2__["default"], {
    items: allAlbums,
    tiers: allTiers
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (RemRankPage);

/***/ }),

/***/ "./src/components/page_roots/useFetchAuth.js":
/*!***************************************************!*\
  !*** ./src/components/page_roots/useFetchAuth.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useFetchAuth": function() { return /* binding */ useFetchAuth; }
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
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.async-iterator.js */ "./node_modules/core-js/modules/es.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_has_instance_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.has-instance.js */ "./node_modules/core-js/modules/es.symbol.has-instance.js");
/* harmony import */ var core_js_modules_es_symbol_has_instance_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_has_instance_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_is_concat_spreadable_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.is-concat-spreadable.js */ "./node_modules/core-js/modules/es.symbol.is-concat-spreadable.js");
/* harmony import */ var core_js_modules_es_symbol_is_concat_spreadable_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_is_concat_spreadable_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_match_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.match.js */ "./node_modules/core-js/modules/es.symbol.match.js");
/* harmony import */ var core_js_modules_es_symbol_match_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_match_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_replace_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.replace.js */ "./node_modules/core-js/modules/es.symbol.replace.js");
/* harmony import */ var core_js_modules_es_symbol_replace_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_replace_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_search_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.search.js */ "./node_modules/core-js/modules/es.symbol.search.js");
/* harmony import */ var core_js_modules_es_symbol_search_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_search_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_species_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.species.js */ "./node_modules/core-js/modules/es.symbol.species.js");
/* harmony import */ var core_js_modules_es_symbol_species_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_species_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_split_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.split.js */ "./node_modules/core-js/modules/es.symbol.split.js");
/* harmony import */ var core_js_modules_es_symbol_split_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_split_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.symbol.to-string-tag.js */ "./node_modules/core-js/modules/es.symbol.to-string-tag.js");
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_symbol_unscopables_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.symbol.unscopables.js */ "./node_modules/core-js/modules/es.symbol.unscopables.js");
/* harmony import */ var core_js_modules_es_symbol_unscopables_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_unscopables_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_copy_within_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.array.copy-within.js */ "./node_modules/core-js/modules/es.array.copy-within.js");
/* harmony import */ var core_js_modules_es_array_copy_within_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_copy_within_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_fill_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.fill.js */ "./node_modules/core-js/modules/es.array.fill.js");
/* harmony import */ var core_js_modules_es_array_fill_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_fill_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.array.find-index.js */ "./node_modules/core-js/modules/es.array.find-index.js");
/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_array_flat_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.array.flat.js */ "./node_modules/core-js/modules/es.array.flat.js");
/* harmony import */ var core_js_modules_es_array_flat_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_flat_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_array_flat_map_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.array.flat-map.js */ "./node_modules/core-js/modules/es.array.flat-map.js");
/* harmony import */ var core_js_modules_es_array_flat_map_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_flat_map_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_array_of_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.array.of.js */ "./node_modules/core-js/modules/es.array.of.js");
/* harmony import */ var core_js_modules_es_array_of_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_of_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_array_species_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/es.array.species.js */ "./node_modules/core-js/modules/es.array.species.js");
/* harmony import */ var core_js_modules_es_array_species_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_species_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var core_js_modules_es_array_unscopables_flat_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! core-js/modules/es.array.unscopables.flat.js */ "./node_modules/core-js/modules/es.array.unscopables.flat.js");
/* harmony import */ var core_js_modules_es_array_unscopables_flat_js__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_unscopables_flat_js__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var core_js_modules_es_array_unscopables_flat_map_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! core-js/modules/es.array.unscopables.flat-map.js */ "./node_modules/core-js/modules/es.array.unscopables.flat-map.js");
/* harmony import */ var core_js_modules_es_array_unscopables_flat_map_js__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_unscopables_flat_map_js__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var core_js_modules_es_array_buffer_constructor_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! core-js/modules/es.array-buffer.constructor.js */ "./node_modules/core-js/modules/es.array-buffer.constructor.js");
/* harmony import */ var core_js_modules_es_array_buffer_constructor_js__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_buffer_constructor_js__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var core_js_modules_es_function_has_instance_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! core-js/modules/es.function.has-instance.js */ "./node_modules/core-js/modules/es.function.has-instance.js");
/* harmony import */ var core_js_modules_es_function_has_instance_js__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_has_instance_js__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! core-js/modules/es.json.to-string-tag.js */ "./node_modules/core-js/modules/es.json.to-string-tag.js");
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! core-js/modules/es.map.js */ "./node_modules/core-js/modules/es.map.js");
/* harmony import */ var core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var core_js_modules_es_math_acosh_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! core-js/modules/es.math.acosh.js */ "./node_modules/core-js/modules/es.math.acosh.js");
/* harmony import */ var core_js_modules_es_math_acosh_js__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_acosh_js__WEBPACK_IMPORTED_MODULE_40__);
/* harmony import */ var core_js_modules_es_math_asinh_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! core-js/modules/es.math.asinh.js */ "./node_modules/core-js/modules/es.math.asinh.js");
/* harmony import */ var core_js_modules_es_math_asinh_js__WEBPACK_IMPORTED_MODULE_41___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_asinh_js__WEBPACK_IMPORTED_MODULE_41__);
/* harmony import */ var core_js_modules_es_math_atanh_js__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! core-js/modules/es.math.atanh.js */ "./node_modules/core-js/modules/es.math.atanh.js");
/* harmony import */ var core_js_modules_es_math_atanh_js__WEBPACK_IMPORTED_MODULE_42___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_atanh_js__WEBPACK_IMPORTED_MODULE_42__);
/* harmony import */ var core_js_modules_es_math_cbrt_js__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! core-js/modules/es.math.cbrt.js */ "./node_modules/core-js/modules/es.math.cbrt.js");
/* harmony import */ var core_js_modules_es_math_cbrt_js__WEBPACK_IMPORTED_MODULE_43___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_cbrt_js__WEBPACK_IMPORTED_MODULE_43__);
/* harmony import */ var core_js_modules_es_math_clz32_js__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! core-js/modules/es.math.clz32.js */ "./node_modules/core-js/modules/es.math.clz32.js");
/* harmony import */ var core_js_modules_es_math_clz32_js__WEBPACK_IMPORTED_MODULE_44___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_clz32_js__WEBPACK_IMPORTED_MODULE_44__);
/* harmony import */ var core_js_modules_es_math_cosh_js__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! core-js/modules/es.math.cosh.js */ "./node_modules/core-js/modules/es.math.cosh.js");
/* harmony import */ var core_js_modules_es_math_cosh_js__WEBPACK_IMPORTED_MODULE_45___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_cosh_js__WEBPACK_IMPORTED_MODULE_45__);
/* harmony import */ var core_js_modules_es_math_expm1_js__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! core-js/modules/es.math.expm1.js */ "./node_modules/core-js/modules/es.math.expm1.js");
/* harmony import */ var core_js_modules_es_math_expm1_js__WEBPACK_IMPORTED_MODULE_46___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_expm1_js__WEBPACK_IMPORTED_MODULE_46__);
/* harmony import */ var core_js_modules_es_math_fround_js__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! core-js/modules/es.math.fround.js */ "./node_modules/core-js/modules/es.math.fround.js");
/* harmony import */ var core_js_modules_es_math_fround_js__WEBPACK_IMPORTED_MODULE_47___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_fround_js__WEBPACK_IMPORTED_MODULE_47__);
/* harmony import */ var core_js_modules_es_math_hypot_js__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! core-js/modules/es.math.hypot.js */ "./node_modules/core-js/modules/es.math.hypot.js");
/* harmony import */ var core_js_modules_es_math_hypot_js__WEBPACK_IMPORTED_MODULE_48___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_hypot_js__WEBPACK_IMPORTED_MODULE_48__);
/* harmony import */ var core_js_modules_es_math_imul_js__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! core-js/modules/es.math.imul.js */ "./node_modules/core-js/modules/es.math.imul.js");
/* harmony import */ var core_js_modules_es_math_imul_js__WEBPACK_IMPORTED_MODULE_49___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_imul_js__WEBPACK_IMPORTED_MODULE_49__);
/* harmony import */ var core_js_modules_es_math_log10_js__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! core-js/modules/es.math.log10.js */ "./node_modules/core-js/modules/es.math.log10.js");
/* harmony import */ var core_js_modules_es_math_log10_js__WEBPACK_IMPORTED_MODULE_50___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_log10_js__WEBPACK_IMPORTED_MODULE_50__);
/* harmony import */ var core_js_modules_es_math_log1p_js__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! core-js/modules/es.math.log1p.js */ "./node_modules/core-js/modules/es.math.log1p.js");
/* harmony import */ var core_js_modules_es_math_log1p_js__WEBPACK_IMPORTED_MODULE_51___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_log1p_js__WEBPACK_IMPORTED_MODULE_51__);
/* harmony import */ var core_js_modules_es_math_log2_js__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! core-js/modules/es.math.log2.js */ "./node_modules/core-js/modules/es.math.log2.js");
/* harmony import */ var core_js_modules_es_math_log2_js__WEBPACK_IMPORTED_MODULE_52___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_log2_js__WEBPACK_IMPORTED_MODULE_52__);
/* harmony import */ var core_js_modules_es_math_sign_js__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! core-js/modules/es.math.sign.js */ "./node_modules/core-js/modules/es.math.sign.js");
/* harmony import */ var core_js_modules_es_math_sign_js__WEBPACK_IMPORTED_MODULE_53___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_sign_js__WEBPACK_IMPORTED_MODULE_53__);
/* harmony import */ var core_js_modules_es_math_sinh_js__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! core-js/modules/es.math.sinh.js */ "./node_modules/core-js/modules/es.math.sinh.js");
/* harmony import */ var core_js_modules_es_math_sinh_js__WEBPACK_IMPORTED_MODULE_54___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_sinh_js__WEBPACK_IMPORTED_MODULE_54__);
/* harmony import */ var core_js_modules_es_math_tanh_js__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! core-js/modules/es.math.tanh.js */ "./node_modules/core-js/modules/es.math.tanh.js");
/* harmony import */ var core_js_modules_es_math_tanh_js__WEBPACK_IMPORTED_MODULE_55___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_tanh_js__WEBPACK_IMPORTED_MODULE_55__);
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! core-js/modules/es.math.to-string-tag.js */ "./node_modules/core-js/modules/es.math.to-string-tag.js");
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_56___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_56__);
/* harmony import */ var core_js_modules_es_math_trunc_js__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! core-js/modules/es.math.trunc.js */ "./node_modules/core-js/modules/es.math.trunc.js");
/* harmony import */ var core_js_modules_es_math_trunc_js__WEBPACK_IMPORTED_MODULE_57___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_trunc_js__WEBPACK_IMPORTED_MODULE_57__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_58___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_58__);
/* harmony import */ var core_js_modules_es_number_epsilon_js__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! core-js/modules/es.number.epsilon.js */ "./node_modules/core-js/modules/es.number.epsilon.js");
/* harmony import */ var core_js_modules_es_number_epsilon_js__WEBPACK_IMPORTED_MODULE_59___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_epsilon_js__WEBPACK_IMPORTED_MODULE_59__);
/* harmony import */ var core_js_modules_es_number_is_finite_js__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! core-js/modules/es.number.is-finite.js */ "./node_modules/core-js/modules/es.number.is-finite.js");
/* harmony import */ var core_js_modules_es_number_is_finite_js__WEBPACK_IMPORTED_MODULE_60___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_is_finite_js__WEBPACK_IMPORTED_MODULE_60__);
/* harmony import */ var core_js_modules_es_number_is_integer_js__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! core-js/modules/es.number.is-integer.js */ "./node_modules/core-js/modules/es.number.is-integer.js");
/* harmony import */ var core_js_modules_es_number_is_integer_js__WEBPACK_IMPORTED_MODULE_61___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_is_integer_js__WEBPACK_IMPORTED_MODULE_61__);
/* harmony import */ var core_js_modules_es_number_is_nan_js__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! core-js/modules/es.number.is-nan.js */ "./node_modules/core-js/modules/es.number.is-nan.js");
/* harmony import */ var core_js_modules_es_number_is_nan_js__WEBPACK_IMPORTED_MODULE_62___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_is_nan_js__WEBPACK_IMPORTED_MODULE_62__);
/* harmony import */ var core_js_modules_es_number_is_safe_integer_js__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! core-js/modules/es.number.is-safe-integer.js */ "./node_modules/core-js/modules/es.number.is-safe-integer.js");
/* harmony import */ var core_js_modules_es_number_is_safe_integer_js__WEBPACK_IMPORTED_MODULE_63___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_is_safe_integer_js__WEBPACK_IMPORTED_MODULE_63__);
/* harmony import */ var core_js_modules_es_number_max_safe_integer_js__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! core-js/modules/es.number.max-safe-integer.js */ "./node_modules/core-js/modules/es.number.max-safe-integer.js");
/* harmony import */ var core_js_modules_es_number_max_safe_integer_js__WEBPACK_IMPORTED_MODULE_64___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_max_safe_integer_js__WEBPACK_IMPORTED_MODULE_64__);
/* harmony import */ var core_js_modules_es_number_min_safe_integer_js__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! core-js/modules/es.number.min-safe-integer.js */ "./node_modules/core-js/modules/es.number.min-safe-integer.js");
/* harmony import */ var core_js_modules_es_number_min_safe_integer_js__WEBPACK_IMPORTED_MODULE_65___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_min_safe_integer_js__WEBPACK_IMPORTED_MODULE_65__);
/* harmony import */ var core_js_modules_es_number_parse_float_js__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! core-js/modules/es.number.parse-float.js */ "./node_modules/core-js/modules/es.number.parse-float.js");
/* harmony import */ var core_js_modules_es_number_parse_float_js__WEBPACK_IMPORTED_MODULE_66___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_parse_float_js__WEBPACK_IMPORTED_MODULE_66__);
/* harmony import */ var core_js_modules_es_number_parse_int_js__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! core-js/modules/es.number.parse-int.js */ "./node_modules/core-js/modules/es.number.parse-int.js");
/* harmony import */ var core_js_modules_es_number_parse_int_js__WEBPACK_IMPORTED_MODULE_67___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_parse_int_js__WEBPACK_IMPORTED_MODULE_67__);
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! core-js/modules/es.number.to-fixed.js */ "./node_modules/core-js/modules/es.number.to-fixed.js");
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_68___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_68__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_69___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_69__);
/* harmony import */ var core_js_modules_es_object_define_getter_js__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! core-js/modules/es.object.define-getter.js */ "./node_modules/core-js/modules/es.object.define-getter.js");
/* harmony import */ var core_js_modules_es_object_define_getter_js__WEBPACK_IMPORTED_MODULE_70___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_getter_js__WEBPACK_IMPORTED_MODULE_70__);
/* harmony import */ var core_js_modules_es_object_define_setter_js__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! core-js/modules/es.object.define-setter.js */ "./node_modules/core-js/modules/es.object.define-setter.js");
/* harmony import */ var core_js_modules_es_object_define_setter_js__WEBPACK_IMPORTED_MODULE_71___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_setter_js__WEBPACK_IMPORTED_MODULE_71__);
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! core-js/modules/es.object.entries.js */ "./node_modules/core-js/modules/es.object.entries.js");
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_72___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_72__);
/* harmony import */ var core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! core-js/modules/es.object.freeze.js */ "./node_modules/core-js/modules/es.object.freeze.js");
/* harmony import */ var core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_73___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_73__);
/* harmony import */ var core_js_modules_es_object_from_entries_js__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! core-js/modules/es.object.from-entries.js */ "./node_modules/core-js/modules/es.object.from-entries.js");
/* harmony import */ var core_js_modules_es_object_from_entries_js__WEBPACK_IMPORTED_MODULE_74___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_from_entries_js__WEBPACK_IMPORTED_MODULE_74__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_75___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_75__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_76___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_76__);
/* harmony import */ var core_js_modules_es_object_get_own_property_names_js__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-names.js */ "./node_modules/core-js/modules/es.object.get-own-property-names.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_names_js__WEBPACK_IMPORTED_MODULE_77___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_names_js__WEBPACK_IMPORTED_MODULE_77__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_78___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_78__);
/* harmony import */ var core_js_modules_es_object_is_js__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! core-js/modules/es.object.is.js */ "./node_modules/core-js/modules/es.object.is.js");
/* harmony import */ var core_js_modules_es_object_is_js__WEBPACK_IMPORTED_MODULE_79___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_is_js__WEBPACK_IMPORTED_MODULE_79__);
/* harmony import */ var core_js_modules_es_object_is_extensible_js__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! core-js/modules/es.object.is-extensible.js */ "./node_modules/core-js/modules/es.object.is-extensible.js");
/* harmony import */ var core_js_modules_es_object_is_extensible_js__WEBPACK_IMPORTED_MODULE_80___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_is_extensible_js__WEBPACK_IMPORTED_MODULE_80__);
/* harmony import */ var core_js_modules_es_object_is_frozen_js__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! core-js/modules/es.object.is-frozen.js */ "./node_modules/core-js/modules/es.object.is-frozen.js");
/* harmony import */ var core_js_modules_es_object_is_frozen_js__WEBPACK_IMPORTED_MODULE_81___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_is_frozen_js__WEBPACK_IMPORTED_MODULE_81__);
/* harmony import */ var core_js_modules_es_object_is_sealed_js__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! core-js/modules/es.object.is-sealed.js */ "./node_modules/core-js/modules/es.object.is-sealed.js");
/* harmony import */ var core_js_modules_es_object_is_sealed_js__WEBPACK_IMPORTED_MODULE_82___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_is_sealed_js__WEBPACK_IMPORTED_MODULE_82__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_83___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_83__);
/* harmony import */ var core_js_modules_es_object_lookup_getter_js__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! core-js/modules/es.object.lookup-getter.js */ "./node_modules/core-js/modules/es.object.lookup-getter.js");
/* harmony import */ var core_js_modules_es_object_lookup_getter_js__WEBPACK_IMPORTED_MODULE_84___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_lookup_getter_js__WEBPACK_IMPORTED_MODULE_84__);
/* harmony import */ var core_js_modules_es_object_lookup_setter_js__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! core-js/modules/es.object.lookup-setter.js */ "./node_modules/core-js/modules/es.object.lookup-setter.js");
/* harmony import */ var core_js_modules_es_object_lookup_setter_js__WEBPACK_IMPORTED_MODULE_85___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_lookup_setter_js__WEBPACK_IMPORTED_MODULE_85__);
/* harmony import */ var core_js_modules_es_object_prevent_extensions_js__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! core-js/modules/es.object.prevent-extensions.js */ "./node_modules/core-js/modules/es.object.prevent-extensions.js");
/* harmony import */ var core_js_modules_es_object_prevent_extensions_js__WEBPACK_IMPORTED_MODULE_86___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_prevent_extensions_js__WEBPACK_IMPORTED_MODULE_86__);
/* harmony import */ var core_js_modules_es_object_seal_js__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! core-js/modules/es.object.seal.js */ "./node_modules/core-js/modules/es.object.seal.js");
/* harmony import */ var core_js_modules_es_object_seal_js__WEBPACK_IMPORTED_MODULE_87___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_seal_js__WEBPACK_IMPORTED_MODULE_87__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_88___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_88__);
/* harmony import */ var core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(/*! core-js/modules/es.object.values.js */ "./node_modules/core-js/modules/es.object.values.js");
/* harmony import */ var core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_89___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_89__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_90___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_90__);
/* harmony import */ var core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_91__ = __webpack_require__(/*! core-js/modules/es.promise.finally.js */ "./node_modules/core-js/modules/es.promise.finally.js");
/* harmony import */ var core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_91___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_91__);
/* harmony import */ var core_js_modules_es_reflect_apply_js__WEBPACK_IMPORTED_MODULE_92__ = __webpack_require__(/*! core-js/modules/es.reflect.apply.js */ "./node_modules/core-js/modules/es.reflect.apply.js");
/* harmony import */ var core_js_modules_es_reflect_apply_js__WEBPACK_IMPORTED_MODULE_92___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_apply_js__WEBPACK_IMPORTED_MODULE_92__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_93__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_93___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_93__);
/* harmony import */ var core_js_modules_es_reflect_define_property_js__WEBPACK_IMPORTED_MODULE_94__ = __webpack_require__(/*! core-js/modules/es.reflect.define-property.js */ "./node_modules/core-js/modules/es.reflect.define-property.js");
/* harmony import */ var core_js_modules_es_reflect_define_property_js__WEBPACK_IMPORTED_MODULE_94___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_define_property_js__WEBPACK_IMPORTED_MODULE_94__);
/* harmony import */ var core_js_modules_es_reflect_delete_property_js__WEBPACK_IMPORTED_MODULE_95__ = __webpack_require__(/*! core-js/modules/es.reflect.delete-property.js */ "./node_modules/core-js/modules/es.reflect.delete-property.js");
/* harmony import */ var core_js_modules_es_reflect_delete_property_js__WEBPACK_IMPORTED_MODULE_95___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_delete_property_js__WEBPACK_IMPORTED_MODULE_95__);
/* harmony import */ var core_js_modules_es_reflect_get_js__WEBPACK_IMPORTED_MODULE_96__ = __webpack_require__(/*! core-js/modules/es.reflect.get.js */ "./node_modules/core-js/modules/es.reflect.get.js");
/* harmony import */ var core_js_modules_es_reflect_get_js__WEBPACK_IMPORTED_MODULE_96___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_get_js__WEBPACK_IMPORTED_MODULE_96__);
/* harmony import */ var core_js_modules_es_reflect_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_97__ = __webpack_require__(/*! core-js/modules/es.reflect.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.reflect.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_reflect_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_97___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_97__);
/* harmony import */ var core_js_modules_es_reflect_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_98__ = __webpack_require__(/*! core-js/modules/es.reflect.get-prototype-of.js */ "./node_modules/core-js/modules/es.reflect.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_reflect_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_98___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_98__);
/* harmony import */ var core_js_modules_es_reflect_has_js__WEBPACK_IMPORTED_MODULE_99__ = __webpack_require__(/*! core-js/modules/es.reflect.has.js */ "./node_modules/core-js/modules/es.reflect.has.js");
/* harmony import */ var core_js_modules_es_reflect_has_js__WEBPACK_IMPORTED_MODULE_99___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_has_js__WEBPACK_IMPORTED_MODULE_99__);
/* harmony import */ var core_js_modules_es_reflect_is_extensible_js__WEBPACK_IMPORTED_MODULE_100__ = __webpack_require__(/*! core-js/modules/es.reflect.is-extensible.js */ "./node_modules/core-js/modules/es.reflect.is-extensible.js");
/* harmony import */ var core_js_modules_es_reflect_is_extensible_js__WEBPACK_IMPORTED_MODULE_100___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_is_extensible_js__WEBPACK_IMPORTED_MODULE_100__);
/* harmony import */ var core_js_modules_es_reflect_own_keys_js__WEBPACK_IMPORTED_MODULE_101__ = __webpack_require__(/*! core-js/modules/es.reflect.own-keys.js */ "./node_modules/core-js/modules/es.reflect.own-keys.js");
/* harmony import */ var core_js_modules_es_reflect_own_keys_js__WEBPACK_IMPORTED_MODULE_101___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_own_keys_js__WEBPACK_IMPORTED_MODULE_101__);
/* harmony import */ var core_js_modules_es_reflect_prevent_extensions_js__WEBPACK_IMPORTED_MODULE_102__ = __webpack_require__(/*! core-js/modules/es.reflect.prevent-extensions.js */ "./node_modules/core-js/modules/es.reflect.prevent-extensions.js");
/* harmony import */ var core_js_modules_es_reflect_prevent_extensions_js__WEBPACK_IMPORTED_MODULE_102___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_prevent_extensions_js__WEBPACK_IMPORTED_MODULE_102__);
/* harmony import */ var core_js_modules_es_reflect_set_js__WEBPACK_IMPORTED_MODULE_103__ = __webpack_require__(/*! core-js/modules/es.reflect.set.js */ "./node_modules/core-js/modules/es.reflect.set.js");
/* harmony import */ var core_js_modules_es_reflect_set_js__WEBPACK_IMPORTED_MODULE_103___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_set_js__WEBPACK_IMPORTED_MODULE_103__);
/* harmony import */ var core_js_modules_es_reflect_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_104__ = __webpack_require__(/*! core-js/modules/es.reflect.set-prototype-of.js */ "./node_modules/core-js/modules/es.reflect.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_reflect_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_104___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_104__);
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_105__ = __webpack_require__(/*! core-js/modules/es.regexp.constructor.js */ "./node_modules/core-js/modules/es.regexp.constructor.js");
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_105___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_105__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_106__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_106___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_106__);
/* harmony import */ var core_js_modules_es_regexp_flags_js__WEBPACK_IMPORTED_MODULE_107__ = __webpack_require__(/*! core-js/modules/es.regexp.flags.js */ "./node_modules/core-js/modules/es.regexp.flags.js");
/* harmony import */ var core_js_modules_es_regexp_flags_js__WEBPACK_IMPORTED_MODULE_107___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_flags_js__WEBPACK_IMPORTED_MODULE_107__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_108__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_108___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_108__);
/* harmony import */ var core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_109__ = __webpack_require__(/*! core-js/modules/es.set.js */ "./node_modules/core-js/modules/es.set.js");
/* harmony import */ var core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_109___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_109__);
/* harmony import */ var core_js_modules_es_string_code_point_at_js__WEBPACK_IMPORTED_MODULE_110__ = __webpack_require__(/*! core-js/modules/es.string.code-point-at.js */ "./node_modules/core-js/modules/es.string.code-point-at.js");
/* harmony import */ var core_js_modules_es_string_code_point_at_js__WEBPACK_IMPORTED_MODULE_110___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_code_point_at_js__WEBPACK_IMPORTED_MODULE_110__);
/* harmony import */ var core_js_modules_es_string_ends_with_js__WEBPACK_IMPORTED_MODULE_111__ = __webpack_require__(/*! core-js/modules/es.string.ends-with.js */ "./node_modules/core-js/modules/es.string.ends-with.js");
/* harmony import */ var core_js_modules_es_string_ends_with_js__WEBPACK_IMPORTED_MODULE_111___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_ends_with_js__WEBPACK_IMPORTED_MODULE_111__);
/* harmony import */ var core_js_modules_es_string_from_code_point_js__WEBPACK_IMPORTED_MODULE_112__ = __webpack_require__(/*! core-js/modules/es.string.from-code-point.js */ "./node_modules/core-js/modules/es.string.from-code-point.js");
/* harmony import */ var core_js_modules_es_string_from_code_point_js__WEBPACK_IMPORTED_MODULE_112___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_from_code_point_js__WEBPACK_IMPORTED_MODULE_112__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_113__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_113___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_113__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_114__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_114___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_114__);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_115__ = __webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_115___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_115__);
/* harmony import */ var core_js_modules_es_string_pad_end_js__WEBPACK_IMPORTED_MODULE_116__ = __webpack_require__(/*! core-js/modules/es.string.pad-end.js */ "./node_modules/core-js/modules/es.string.pad-end.js");
/* harmony import */ var core_js_modules_es_string_pad_end_js__WEBPACK_IMPORTED_MODULE_116___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_pad_end_js__WEBPACK_IMPORTED_MODULE_116__);
/* harmony import */ var core_js_modules_es_string_pad_start_js__WEBPACK_IMPORTED_MODULE_117__ = __webpack_require__(/*! core-js/modules/es.string.pad-start.js */ "./node_modules/core-js/modules/es.string.pad-start.js");
/* harmony import */ var core_js_modules_es_string_pad_start_js__WEBPACK_IMPORTED_MODULE_117___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_pad_start_js__WEBPACK_IMPORTED_MODULE_117__);
/* harmony import */ var core_js_modules_es_string_raw_js__WEBPACK_IMPORTED_MODULE_118__ = __webpack_require__(/*! core-js/modules/es.string.raw.js */ "./node_modules/core-js/modules/es.string.raw.js");
/* harmony import */ var core_js_modules_es_string_raw_js__WEBPACK_IMPORTED_MODULE_118___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_raw_js__WEBPACK_IMPORTED_MODULE_118__);
/* harmony import */ var core_js_modules_es_string_repeat_js__WEBPACK_IMPORTED_MODULE_119__ = __webpack_require__(/*! core-js/modules/es.string.repeat.js */ "./node_modules/core-js/modules/es.string.repeat.js");
/* harmony import */ var core_js_modules_es_string_repeat_js__WEBPACK_IMPORTED_MODULE_119___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_repeat_js__WEBPACK_IMPORTED_MODULE_119__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_120__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_120___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_120__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_121__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_121___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_121__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_122__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_122___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_122__);
/* harmony import */ var core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_123__ = __webpack_require__(/*! core-js/modules/es.string.starts-with.js */ "./node_modules/core-js/modules/es.string.starts-with.js");
/* harmony import */ var core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_123___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_123__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_124__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_124___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_124__);
/* harmony import */ var core_js_modules_es_string_trim_end_js__WEBPACK_IMPORTED_MODULE_125__ = __webpack_require__(/*! core-js/modules/es.string.trim-end.js */ "./node_modules/core-js/modules/es.string.trim-end.js");
/* harmony import */ var core_js_modules_es_string_trim_end_js__WEBPACK_IMPORTED_MODULE_125___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_end_js__WEBPACK_IMPORTED_MODULE_125__);
/* harmony import */ var core_js_modules_es_string_trim_start_js__WEBPACK_IMPORTED_MODULE_126__ = __webpack_require__(/*! core-js/modules/es.string.trim-start.js */ "./node_modules/core-js/modules/es.string.trim-start.js");
/* harmony import */ var core_js_modules_es_string_trim_start_js__WEBPACK_IMPORTED_MODULE_126___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_start_js__WEBPACK_IMPORTED_MODULE_126__);
/* harmony import */ var core_js_modules_es_string_anchor_js__WEBPACK_IMPORTED_MODULE_127__ = __webpack_require__(/*! core-js/modules/es.string.anchor.js */ "./node_modules/core-js/modules/es.string.anchor.js");
/* harmony import */ var core_js_modules_es_string_anchor_js__WEBPACK_IMPORTED_MODULE_127___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_anchor_js__WEBPACK_IMPORTED_MODULE_127__);
/* harmony import */ var core_js_modules_es_string_big_js__WEBPACK_IMPORTED_MODULE_128__ = __webpack_require__(/*! core-js/modules/es.string.big.js */ "./node_modules/core-js/modules/es.string.big.js");
/* harmony import */ var core_js_modules_es_string_big_js__WEBPACK_IMPORTED_MODULE_128___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_big_js__WEBPACK_IMPORTED_MODULE_128__);
/* harmony import */ var core_js_modules_es_string_blink_js__WEBPACK_IMPORTED_MODULE_129__ = __webpack_require__(/*! core-js/modules/es.string.blink.js */ "./node_modules/core-js/modules/es.string.blink.js");
/* harmony import */ var core_js_modules_es_string_blink_js__WEBPACK_IMPORTED_MODULE_129___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_blink_js__WEBPACK_IMPORTED_MODULE_129__);
/* harmony import */ var core_js_modules_es_string_bold_js__WEBPACK_IMPORTED_MODULE_130__ = __webpack_require__(/*! core-js/modules/es.string.bold.js */ "./node_modules/core-js/modules/es.string.bold.js");
/* harmony import */ var core_js_modules_es_string_bold_js__WEBPACK_IMPORTED_MODULE_130___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_bold_js__WEBPACK_IMPORTED_MODULE_130__);
/* harmony import */ var core_js_modules_es_string_fixed_js__WEBPACK_IMPORTED_MODULE_131__ = __webpack_require__(/*! core-js/modules/es.string.fixed.js */ "./node_modules/core-js/modules/es.string.fixed.js");
/* harmony import */ var core_js_modules_es_string_fixed_js__WEBPACK_IMPORTED_MODULE_131___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_fixed_js__WEBPACK_IMPORTED_MODULE_131__);
/* harmony import */ var core_js_modules_es_string_fontcolor_js__WEBPACK_IMPORTED_MODULE_132__ = __webpack_require__(/*! core-js/modules/es.string.fontcolor.js */ "./node_modules/core-js/modules/es.string.fontcolor.js");
/* harmony import */ var core_js_modules_es_string_fontcolor_js__WEBPACK_IMPORTED_MODULE_132___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_fontcolor_js__WEBPACK_IMPORTED_MODULE_132__);
/* harmony import */ var core_js_modules_es_string_fontsize_js__WEBPACK_IMPORTED_MODULE_133__ = __webpack_require__(/*! core-js/modules/es.string.fontsize.js */ "./node_modules/core-js/modules/es.string.fontsize.js");
/* harmony import */ var core_js_modules_es_string_fontsize_js__WEBPACK_IMPORTED_MODULE_133___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_fontsize_js__WEBPACK_IMPORTED_MODULE_133__);
/* harmony import */ var core_js_modules_es_string_italics_js__WEBPACK_IMPORTED_MODULE_134__ = __webpack_require__(/*! core-js/modules/es.string.italics.js */ "./node_modules/core-js/modules/es.string.italics.js");
/* harmony import */ var core_js_modules_es_string_italics_js__WEBPACK_IMPORTED_MODULE_134___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_italics_js__WEBPACK_IMPORTED_MODULE_134__);
/* harmony import */ var core_js_modules_es_string_link_js__WEBPACK_IMPORTED_MODULE_135__ = __webpack_require__(/*! core-js/modules/es.string.link.js */ "./node_modules/core-js/modules/es.string.link.js");
/* harmony import */ var core_js_modules_es_string_link_js__WEBPACK_IMPORTED_MODULE_135___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_link_js__WEBPACK_IMPORTED_MODULE_135__);
/* harmony import */ var core_js_modules_es_string_small_js__WEBPACK_IMPORTED_MODULE_136__ = __webpack_require__(/*! core-js/modules/es.string.small.js */ "./node_modules/core-js/modules/es.string.small.js");
/* harmony import */ var core_js_modules_es_string_small_js__WEBPACK_IMPORTED_MODULE_136___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_small_js__WEBPACK_IMPORTED_MODULE_136__);
/* harmony import */ var core_js_modules_es_string_strike_js__WEBPACK_IMPORTED_MODULE_137__ = __webpack_require__(/*! core-js/modules/es.string.strike.js */ "./node_modules/core-js/modules/es.string.strike.js");
/* harmony import */ var core_js_modules_es_string_strike_js__WEBPACK_IMPORTED_MODULE_137___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_strike_js__WEBPACK_IMPORTED_MODULE_137__);
/* harmony import */ var core_js_modules_es_string_sub_js__WEBPACK_IMPORTED_MODULE_138__ = __webpack_require__(/*! core-js/modules/es.string.sub.js */ "./node_modules/core-js/modules/es.string.sub.js");
/* harmony import */ var core_js_modules_es_string_sub_js__WEBPACK_IMPORTED_MODULE_138___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_sub_js__WEBPACK_IMPORTED_MODULE_138__);
/* harmony import */ var core_js_modules_es_string_sup_js__WEBPACK_IMPORTED_MODULE_139__ = __webpack_require__(/*! core-js/modules/es.string.sup.js */ "./node_modules/core-js/modules/es.string.sup.js");
/* harmony import */ var core_js_modules_es_string_sup_js__WEBPACK_IMPORTED_MODULE_139___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_sup_js__WEBPACK_IMPORTED_MODULE_139__);
/* harmony import */ var core_js_modules_es_typed_array_float32_array_js__WEBPACK_IMPORTED_MODULE_140__ = __webpack_require__(/*! core-js/modules/es.typed-array.float32-array.js */ "./node_modules/core-js/modules/es.typed-array.float32-array.js");
/* harmony import */ var core_js_modules_es_typed_array_float32_array_js__WEBPACK_IMPORTED_MODULE_140___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_float32_array_js__WEBPACK_IMPORTED_MODULE_140__);
/* harmony import */ var core_js_modules_es_typed_array_float64_array_js__WEBPACK_IMPORTED_MODULE_141__ = __webpack_require__(/*! core-js/modules/es.typed-array.float64-array.js */ "./node_modules/core-js/modules/es.typed-array.float64-array.js");
/* harmony import */ var core_js_modules_es_typed_array_float64_array_js__WEBPACK_IMPORTED_MODULE_141___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_float64_array_js__WEBPACK_IMPORTED_MODULE_141__);
/* harmony import */ var core_js_modules_es_typed_array_int8_array_js__WEBPACK_IMPORTED_MODULE_142__ = __webpack_require__(/*! core-js/modules/es.typed-array.int8-array.js */ "./node_modules/core-js/modules/es.typed-array.int8-array.js");
/* harmony import */ var core_js_modules_es_typed_array_int8_array_js__WEBPACK_IMPORTED_MODULE_142___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_int8_array_js__WEBPACK_IMPORTED_MODULE_142__);
/* harmony import */ var core_js_modules_es_typed_array_int16_array_js__WEBPACK_IMPORTED_MODULE_143__ = __webpack_require__(/*! core-js/modules/es.typed-array.int16-array.js */ "./node_modules/core-js/modules/es.typed-array.int16-array.js");
/* harmony import */ var core_js_modules_es_typed_array_int16_array_js__WEBPACK_IMPORTED_MODULE_143___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_int16_array_js__WEBPACK_IMPORTED_MODULE_143__);
/* harmony import */ var core_js_modules_es_typed_array_int32_array_js__WEBPACK_IMPORTED_MODULE_144__ = __webpack_require__(/*! core-js/modules/es.typed-array.int32-array.js */ "./node_modules/core-js/modules/es.typed-array.int32-array.js");
/* harmony import */ var core_js_modules_es_typed_array_int32_array_js__WEBPACK_IMPORTED_MODULE_144___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_int32_array_js__WEBPACK_IMPORTED_MODULE_144__);
/* harmony import */ var core_js_modules_es_typed_array_uint8_array_js__WEBPACK_IMPORTED_MODULE_145__ = __webpack_require__(/*! core-js/modules/es.typed-array.uint8-array.js */ "./node_modules/core-js/modules/es.typed-array.uint8-array.js");
/* harmony import */ var core_js_modules_es_typed_array_uint8_array_js__WEBPACK_IMPORTED_MODULE_145___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_uint8_array_js__WEBPACK_IMPORTED_MODULE_145__);
/* harmony import */ var core_js_modules_es_typed_array_uint8_clamped_array_js__WEBPACK_IMPORTED_MODULE_146__ = __webpack_require__(/*! core-js/modules/es.typed-array.uint8-clamped-array.js */ "./node_modules/core-js/modules/es.typed-array.uint8-clamped-array.js");
/* harmony import */ var core_js_modules_es_typed_array_uint8_clamped_array_js__WEBPACK_IMPORTED_MODULE_146___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_uint8_clamped_array_js__WEBPACK_IMPORTED_MODULE_146__);
/* harmony import */ var core_js_modules_es_typed_array_uint16_array_js__WEBPACK_IMPORTED_MODULE_147__ = __webpack_require__(/*! core-js/modules/es.typed-array.uint16-array.js */ "./node_modules/core-js/modules/es.typed-array.uint16-array.js");
/* harmony import */ var core_js_modules_es_typed_array_uint16_array_js__WEBPACK_IMPORTED_MODULE_147___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_uint16_array_js__WEBPACK_IMPORTED_MODULE_147__);
/* harmony import */ var core_js_modules_es_typed_array_uint32_array_js__WEBPACK_IMPORTED_MODULE_148__ = __webpack_require__(/*! core-js/modules/es.typed-array.uint32-array.js */ "./node_modules/core-js/modules/es.typed-array.uint32-array.js");
/* harmony import */ var core_js_modules_es_typed_array_uint32_array_js__WEBPACK_IMPORTED_MODULE_148___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_uint32_array_js__WEBPACK_IMPORTED_MODULE_148__);
/* harmony import */ var core_js_modules_es_typed_array_copy_within_js__WEBPACK_IMPORTED_MODULE_149__ = __webpack_require__(/*! core-js/modules/es.typed-array.copy-within.js */ "./node_modules/core-js/modules/es.typed-array.copy-within.js");
/* harmony import */ var core_js_modules_es_typed_array_copy_within_js__WEBPACK_IMPORTED_MODULE_149___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_copy_within_js__WEBPACK_IMPORTED_MODULE_149__);
/* harmony import */ var core_js_modules_es_typed_array_every_js__WEBPACK_IMPORTED_MODULE_150__ = __webpack_require__(/*! core-js/modules/es.typed-array.every.js */ "./node_modules/core-js/modules/es.typed-array.every.js");
/* harmony import */ var core_js_modules_es_typed_array_every_js__WEBPACK_IMPORTED_MODULE_150___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_every_js__WEBPACK_IMPORTED_MODULE_150__);
/* harmony import */ var core_js_modules_es_typed_array_fill_js__WEBPACK_IMPORTED_MODULE_151__ = __webpack_require__(/*! core-js/modules/es.typed-array.fill.js */ "./node_modules/core-js/modules/es.typed-array.fill.js");
/* harmony import */ var core_js_modules_es_typed_array_fill_js__WEBPACK_IMPORTED_MODULE_151___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_fill_js__WEBPACK_IMPORTED_MODULE_151__);
/* harmony import */ var core_js_modules_es_typed_array_filter_js__WEBPACK_IMPORTED_MODULE_152__ = __webpack_require__(/*! core-js/modules/es.typed-array.filter.js */ "./node_modules/core-js/modules/es.typed-array.filter.js");
/* harmony import */ var core_js_modules_es_typed_array_filter_js__WEBPACK_IMPORTED_MODULE_152___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_filter_js__WEBPACK_IMPORTED_MODULE_152__);
/* harmony import */ var core_js_modules_es_typed_array_find_js__WEBPACK_IMPORTED_MODULE_153__ = __webpack_require__(/*! core-js/modules/es.typed-array.find.js */ "./node_modules/core-js/modules/es.typed-array.find.js");
/* harmony import */ var core_js_modules_es_typed_array_find_js__WEBPACK_IMPORTED_MODULE_153___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_find_js__WEBPACK_IMPORTED_MODULE_153__);
/* harmony import */ var core_js_modules_es_typed_array_find_index_js__WEBPACK_IMPORTED_MODULE_154__ = __webpack_require__(/*! core-js/modules/es.typed-array.find-index.js */ "./node_modules/core-js/modules/es.typed-array.find-index.js");
/* harmony import */ var core_js_modules_es_typed_array_find_index_js__WEBPACK_IMPORTED_MODULE_154___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_find_index_js__WEBPACK_IMPORTED_MODULE_154__);
/* harmony import */ var core_js_modules_es_typed_array_for_each_js__WEBPACK_IMPORTED_MODULE_155__ = __webpack_require__(/*! core-js/modules/es.typed-array.for-each.js */ "./node_modules/core-js/modules/es.typed-array.for-each.js");
/* harmony import */ var core_js_modules_es_typed_array_for_each_js__WEBPACK_IMPORTED_MODULE_155___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_for_each_js__WEBPACK_IMPORTED_MODULE_155__);
/* harmony import */ var core_js_modules_es_typed_array_from_js__WEBPACK_IMPORTED_MODULE_156__ = __webpack_require__(/*! core-js/modules/es.typed-array.from.js */ "./node_modules/core-js/modules/es.typed-array.from.js");
/* harmony import */ var core_js_modules_es_typed_array_from_js__WEBPACK_IMPORTED_MODULE_156___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_from_js__WEBPACK_IMPORTED_MODULE_156__);
/* harmony import */ var core_js_modules_es_typed_array_includes_js__WEBPACK_IMPORTED_MODULE_157__ = __webpack_require__(/*! core-js/modules/es.typed-array.includes.js */ "./node_modules/core-js/modules/es.typed-array.includes.js");
/* harmony import */ var core_js_modules_es_typed_array_includes_js__WEBPACK_IMPORTED_MODULE_157___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_includes_js__WEBPACK_IMPORTED_MODULE_157__);
/* harmony import */ var core_js_modules_es_typed_array_index_of_js__WEBPACK_IMPORTED_MODULE_158__ = __webpack_require__(/*! core-js/modules/es.typed-array.index-of.js */ "./node_modules/core-js/modules/es.typed-array.index-of.js");
/* harmony import */ var core_js_modules_es_typed_array_index_of_js__WEBPACK_IMPORTED_MODULE_158___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_index_of_js__WEBPACK_IMPORTED_MODULE_158__);
/* harmony import */ var core_js_modules_es_typed_array_iterator_js__WEBPACK_IMPORTED_MODULE_159__ = __webpack_require__(/*! core-js/modules/es.typed-array.iterator.js */ "./node_modules/core-js/modules/es.typed-array.iterator.js");
/* harmony import */ var core_js_modules_es_typed_array_iterator_js__WEBPACK_IMPORTED_MODULE_159___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_iterator_js__WEBPACK_IMPORTED_MODULE_159__);
/* harmony import */ var core_js_modules_es_typed_array_join_js__WEBPACK_IMPORTED_MODULE_160__ = __webpack_require__(/*! core-js/modules/es.typed-array.join.js */ "./node_modules/core-js/modules/es.typed-array.join.js");
/* harmony import */ var core_js_modules_es_typed_array_join_js__WEBPACK_IMPORTED_MODULE_160___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_join_js__WEBPACK_IMPORTED_MODULE_160__);
/* harmony import */ var core_js_modules_es_typed_array_last_index_of_js__WEBPACK_IMPORTED_MODULE_161__ = __webpack_require__(/*! core-js/modules/es.typed-array.last-index-of.js */ "./node_modules/core-js/modules/es.typed-array.last-index-of.js");
/* harmony import */ var core_js_modules_es_typed_array_last_index_of_js__WEBPACK_IMPORTED_MODULE_161___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_last_index_of_js__WEBPACK_IMPORTED_MODULE_161__);
/* harmony import */ var core_js_modules_es_typed_array_map_js__WEBPACK_IMPORTED_MODULE_162__ = __webpack_require__(/*! core-js/modules/es.typed-array.map.js */ "./node_modules/core-js/modules/es.typed-array.map.js");
/* harmony import */ var core_js_modules_es_typed_array_map_js__WEBPACK_IMPORTED_MODULE_162___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_map_js__WEBPACK_IMPORTED_MODULE_162__);
/* harmony import */ var core_js_modules_es_typed_array_of_js__WEBPACK_IMPORTED_MODULE_163__ = __webpack_require__(/*! core-js/modules/es.typed-array.of.js */ "./node_modules/core-js/modules/es.typed-array.of.js");
/* harmony import */ var core_js_modules_es_typed_array_of_js__WEBPACK_IMPORTED_MODULE_163___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_of_js__WEBPACK_IMPORTED_MODULE_163__);
/* harmony import */ var core_js_modules_es_typed_array_reduce_js__WEBPACK_IMPORTED_MODULE_164__ = __webpack_require__(/*! core-js/modules/es.typed-array.reduce.js */ "./node_modules/core-js/modules/es.typed-array.reduce.js");
/* harmony import */ var core_js_modules_es_typed_array_reduce_js__WEBPACK_IMPORTED_MODULE_164___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_reduce_js__WEBPACK_IMPORTED_MODULE_164__);
/* harmony import */ var core_js_modules_es_typed_array_reduce_right_js__WEBPACK_IMPORTED_MODULE_165__ = __webpack_require__(/*! core-js/modules/es.typed-array.reduce-right.js */ "./node_modules/core-js/modules/es.typed-array.reduce-right.js");
/* harmony import */ var core_js_modules_es_typed_array_reduce_right_js__WEBPACK_IMPORTED_MODULE_165___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_reduce_right_js__WEBPACK_IMPORTED_MODULE_165__);
/* harmony import */ var core_js_modules_es_typed_array_reverse_js__WEBPACK_IMPORTED_MODULE_166__ = __webpack_require__(/*! core-js/modules/es.typed-array.reverse.js */ "./node_modules/core-js/modules/es.typed-array.reverse.js");
/* harmony import */ var core_js_modules_es_typed_array_reverse_js__WEBPACK_IMPORTED_MODULE_166___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_reverse_js__WEBPACK_IMPORTED_MODULE_166__);
/* harmony import */ var core_js_modules_es_typed_array_set_js__WEBPACK_IMPORTED_MODULE_167__ = __webpack_require__(/*! core-js/modules/es.typed-array.set.js */ "./node_modules/core-js/modules/es.typed-array.set.js");
/* harmony import */ var core_js_modules_es_typed_array_set_js__WEBPACK_IMPORTED_MODULE_167___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_set_js__WEBPACK_IMPORTED_MODULE_167__);
/* harmony import */ var core_js_modules_es_typed_array_slice_js__WEBPACK_IMPORTED_MODULE_168__ = __webpack_require__(/*! core-js/modules/es.typed-array.slice.js */ "./node_modules/core-js/modules/es.typed-array.slice.js");
/* harmony import */ var core_js_modules_es_typed_array_slice_js__WEBPACK_IMPORTED_MODULE_168___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_slice_js__WEBPACK_IMPORTED_MODULE_168__);
/* harmony import */ var core_js_modules_es_typed_array_some_js__WEBPACK_IMPORTED_MODULE_169__ = __webpack_require__(/*! core-js/modules/es.typed-array.some.js */ "./node_modules/core-js/modules/es.typed-array.some.js");
/* harmony import */ var core_js_modules_es_typed_array_some_js__WEBPACK_IMPORTED_MODULE_169___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_some_js__WEBPACK_IMPORTED_MODULE_169__);
/* harmony import */ var core_js_modules_es_typed_array_sort_js__WEBPACK_IMPORTED_MODULE_170__ = __webpack_require__(/*! core-js/modules/es.typed-array.sort.js */ "./node_modules/core-js/modules/es.typed-array.sort.js");
/* harmony import */ var core_js_modules_es_typed_array_sort_js__WEBPACK_IMPORTED_MODULE_170___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_sort_js__WEBPACK_IMPORTED_MODULE_170__);
/* harmony import */ var core_js_modules_es_typed_array_subarray_js__WEBPACK_IMPORTED_MODULE_171__ = __webpack_require__(/*! core-js/modules/es.typed-array.subarray.js */ "./node_modules/core-js/modules/es.typed-array.subarray.js");
/* harmony import */ var core_js_modules_es_typed_array_subarray_js__WEBPACK_IMPORTED_MODULE_171___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_subarray_js__WEBPACK_IMPORTED_MODULE_171__);
/* harmony import */ var core_js_modules_es_typed_array_to_locale_string_js__WEBPACK_IMPORTED_MODULE_172__ = __webpack_require__(/*! core-js/modules/es.typed-array.to-locale-string.js */ "./node_modules/core-js/modules/es.typed-array.to-locale-string.js");
/* harmony import */ var core_js_modules_es_typed_array_to_locale_string_js__WEBPACK_IMPORTED_MODULE_172___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_to_locale_string_js__WEBPACK_IMPORTED_MODULE_172__);
/* harmony import */ var core_js_modules_es_typed_array_to_string_js__WEBPACK_IMPORTED_MODULE_173__ = __webpack_require__(/*! core-js/modules/es.typed-array.to-string.js */ "./node_modules/core-js/modules/es.typed-array.to-string.js");
/* harmony import */ var core_js_modules_es_typed_array_to_string_js__WEBPACK_IMPORTED_MODULE_173___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_to_string_js__WEBPACK_IMPORTED_MODULE_173__);
/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_174__ = __webpack_require__(/*! core-js/modules/es.weak-map.js */ "./node_modules/core-js/modules/es.weak-map.js");
/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_174___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_174__);
/* harmony import */ var core_js_modules_es_weak_set_js__WEBPACK_IMPORTED_MODULE_175__ = __webpack_require__(/*! core-js/modules/es.weak-set.js */ "./node_modules/core-js/modules/es.weak-set.js");
/* harmony import */ var core_js_modules_es_weak_set_js__WEBPACK_IMPORTED_MODULE_175___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_weak_set_js__WEBPACK_IMPORTED_MODULE_175__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_176__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_176___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_176__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_177__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_177___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_177__);
/* harmony import */ var core_js_modules_web_queue_microtask_js__WEBPACK_IMPORTED_MODULE_178__ = __webpack_require__(/*! core-js/modules/web.queue-microtask.js */ "./node_modules/core-js/modules/web.queue-microtask.js");
/* harmony import */ var core_js_modules_web_queue_microtask_js__WEBPACK_IMPORTED_MODULE_178___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_queue_microtask_js__WEBPACK_IMPORTED_MODULE_178__);
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_179__ = __webpack_require__(/*! core-js/modules/web.url.js */ "./node_modules/core-js/modules/web.url.js");
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_179___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_179__);
/* harmony import */ var core_js_modules_web_url_to_json_js__WEBPACK_IMPORTED_MODULE_180__ = __webpack_require__(/*! core-js/modules/web.url.to-json.js */ "./node_modules/core-js/modules/web.url.to-json.js");
/* harmony import */ var core_js_modules_web_url_to_json_js__WEBPACK_IMPORTED_MODULE_180___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_to_json_js__WEBPACK_IMPORTED_MODULE_180__);
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_181__ = __webpack_require__(/*! core-js/modules/web.url-search-params.js */ "./node_modules/core-js/modules/web.url-search-params.js");
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_181___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_181__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_182__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_182___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_182__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_183__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_184__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var components_page_roots_AppRouter__WEBPACK_IMPORTED_MODULE_185__ = __webpack_require__(/*! components/page_roots/AppRouter */ "./src/components/page_roots/AppRouter.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_186__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_189__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var store_reducers__WEBPACK_IMPORTED_MODULE_187__ = __webpack_require__(/*! store/reducers */ "./src/store/reducers/index.js");
/* harmony import */ var styles_main_scss__WEBPACK_IMPORTED_MODULE_188__ = __webpack_require__(/*! styles/main.scss */ "./src/styles/main.scss");






























































































































































































var store = (0,redux__WEBPACK_IMPORTED_MODULE_189__.createStore)(store_reducers__WEBPACK_IMPORTED_MODULE_187__["default"]);
react_dom__WEBPACK_IMPORTED_MODULE_184__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_183__.createElement(react_redux__WEBPACK_IMPORTED_MODULE_186__.Provider, {
  store: store
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_183__.createElement(components_page_roots_AppRouter__WEBPACK_IMPORTED_MODULE_185__["default"], null)), document.getElementById('app-container'));

/***/ }),

/***/ "./src/store/actions/index.js":
/*!************************************!*\
  !*** ./src/store/actions/index.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "counterIncrement": function() { return /* binding */ counterIncrement; },
/* harmony export */   "counterDecrement": function() { return /* binding */ counterDecrement; },
/* harmony export */   "lightboxShow": function() { return /* binding */ lightboxShow; },
/* harmony export */   "lightboxHide": function() { return /* binding */ lightboxHide; },
/* harmony export */   "windowshadeShow": function() { return /* binding */ windowshadeShow; },
/* harmony export */   "windowshadeHide": function() { return /* binding */ windowshadeHide; },
/* harmony export */   "drawerShow": function() { return /* binding */ drawerShow; },
/* harmony export */   "drawerHide": function() { return /* binding */ drawerHide; }
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
/* harmony export */   "sorting": function() { return /* binding */ sorting; }
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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[4]!./src/components/ComicsList/ComicsList.scss":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[4]!./src/components/ComicsList/ComicsList.scss ***!
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
___CSS_LOADER_EXPORT___.push([module.id, ".comics-list ul {\n  border-top: 1px solid #000;\n  padding-top: 40px;\n  padding-left: 0;\n}\n.comics-list li {\n  list-style-type: none;\n  font-size: 18px;\n  border-bottom: 1px solid #000;\n  display: flex;\n  padding: 1em;\n}\n.comics-list li .comic-img {\n  flex: 0 0 80px;\n  width: 80px;\n  padding-right: 1em;\n  transition: all 0.3s ease-in-out;\n}\n.comics-list li .comic-details {\n  flex: 1 1 auto;\n  max-height: 92px;\n  transition: all 0.7s ease-in-out;\n  overflow-y: hidden;\n}\n.comics-list li .comic-details h3 {\n  font-weight: normal;\n}\n.comics-list li .comic-expand {\n  flex: 0 0 26px;\n  align-self: flex-start;\n  cursor: pointer;\n  font-size: 24px;\n  font-weight: bold;\n  padding-left: 0.5em;\n  transition: all 0.3s ease-in-out;\n  transform: rotate(-90deg);\n}\n.comics-list li.expanded .comic-img {\n  flex: 0 0 160px;\n  width: 160px;\n}\n.comics-list li.expanded .comic-details {\n  max-height: 500px;\n}\n.comics-list li.expanded .comic-details h3 {\n  font-weight: bold;\n}\n.comics-list li.expanded .comic-expand {\n  transform: rotate(45deg);\n}\n.comics-list li:nth-of-type(odd) {\n  background: #dcdcdc;\n}\n.comics-list .detail-entry h6 {\n  margin-bottom: 0;\n}\n.comics-list .detail-entry p {\n  margin-bottom: 0.25em;\n}\n@media (min-width: 840px) {\n  .comics-list .detail-entry {\n    display: flex;\n  }\n  .comics-list .detail-entry h6 {\n    margin-bottom: 0.25em;\n    padding-right: 0.25em;\n  }\n  .comics-list .detail-entry p {\n    flex-grow: 1;\n  }\n}\n.comics-list .detail-area {\n  margin-bottom: 1em;\n}\n.comics-list .detail-creator a {\n  color: #222;\n  padding-right: 0.25em;\n}", "",{"version":3,"sources":["webpack://./ComicsList.scss","webpack://./../../styles/base/_settings.scss"],"names":[],"mappings":"AAIE;EACE,0BAAA;EACA,iBAAA;EACA,eAAA;AAHJ;AAME;EACE,qBAAA;EACA,eAAA;EACA,6BAAA;EACA,aAAA;EACA,YC2DQ;AD/DZ;AAMI;EACE,cAAA;EACA,WAlBY;EAmBZ,kBCsDM;EDrDN,gCCLa;ADCnB;AAOI;EACE,cAAA;EACA,gBAAA;EACA,gCAAA;EACA,kBAAA;AALN;AAMM;EACE,mBAAA;AAJR;AAQI;EACE,cAAA;EACA,sBAAA;EACA,eAAA;EACA,eAAA;EACA,iBAAA;EACA,mBCmCW;EDlCX,gCCzBa;ED0Bb,yBAAA;AANN;AAUM;EACE,eAAA;EACA,YAAA;AARR;AAUM;EACE,iBAAA;AARR;AAUM;EACE,iBAAA;AARR;AAUM;EACE,wBAAA;AARR;AAYI;EACE,mBAAA;AAVN;AAeI;EACE,gBAAA;AAbN;AAeI;EACE,qBCKc;ADlBpB;ACrCI;ED6CF;IAQI,aAAA;EAZJ;EAaI;IACE,qBAAA;IACA,qBCDY;EDVlB;EAaI;IACE,YAAA;EAXN;AACF;AAeE;EACE,kBCZQ;ADDZ;AAgBE;EACE,WC3DU;ED4DV,qBCfgB;ADCpB","sourcesContent":["@import './src/styles/base/settings';\n$comic-img-width: 80px;\n\n.comics-list {\n  ul {\n    border-top: 1px solid #000;\n    padding-top: 40px;\n    padding-left: 0;\n  }\n\n  li {\n    list-style-type: none;\n    font-size: 18px;\n    border-bottom: 1px solid #000;\n    display: flex;\n    padding: $base-unit;\n\n    .comic-img {\n      flex: 0 0 $comic-img-width;\n      width: $comic-img-width;\n      padding-right: $base-unit;\n      transition: $transtion-drawer;\n    }\n\n    .comic-details {\n      flex: 1 1 auto;\n      max-height: 92px;\n      transition: all 0.7s ease-in-out;\n      overflow-y: hidden;\n      h3 {\n        font-weight: normal\n      }\n    }\n\n    .comic-expand {\n      flex: 0 0 26px;\n      align-self: flex-start;\n      cursor: pointer;\n      font-size: 24px;\n      font-weight: bold;\n      padding-left: $base-unit-half;\n      transition: $transtion-drawer;\n      transform: rotate(-90deg);\n    }\n\n    &.expanded {\n      .comic-img {\n        flex: 0 0 $comic-img-width * 2;\n        width: $comic-img-width * 2;\n      }\n      .comic-details  {\n        max-height: 500px;\n      }\n      .comic-details h3 {\n        font-weight: bold;\n      }\n      .comic-expand {\n        transform: rotate(45deg);\n      }\n    }\n\n    &:nth-of-type(odd) {\n      background: #dcdcdc;\n    }\n  }\n\n  .detail-entry {\n    h6 {\n      margin-bottom: 0;\n    }\n    p {\n      margin-bottom: $base-unit-quarter;\n    }\n    @include breakpoint(laptop) {\n      display: flex;\n      h6 {\n        margin-bottom: $base-unit-quarter;\n        padding-right: $base-unit-quarter;\n      }\n      p {\n        flex-grow: 1;\n      }\n    }\n  }\n\n  .detail-area {\n    margin-bottom: $base-unit;\n  }\n\n  .detail-creator a {\n    color: $color-black;\n    padding-right: $base-unit-quarter;\n  }\n}\n","// Site wrapper\n$wrapper-width: 1600px;\n\n// header Height\n$header-height: 44px;\n\n// Z-Index Layers\n$layer-main-body: 1;\n$layer-window-shade: 10;\n$layer-lightbox: 50;\n$layer-top-elements: 1000;\n\n// Drawer Settings:\n$drawer-width: 175px;\n$drawer-max-height: 500px;\n\n$transtion-drawer: all 0.3s ease-in-out;\n\n// =========== Breakpoint mixins\n@mixin breakpoint($point) {\n  @if $point == laptop {\n    @media (min-width: 840px) { @content ; }\n  }\n  @else if $point == tablet {\n    @media (min-width: 560px) { @content ; }\n  }\n}\n\n// =========== Site Colors\n\n// Chromes\n$color-black: #222;\n$color-white: #fff;\n$color-ltgrey: #f0eeee;\n$color-dkgrey: #363636;\n$color-ltltgrey: #fbf9f9;\n$color-medgrey: #a1a1a1;\n$color-newspaper: #ebe6e6;\n\n// blues\n$color-royal: #1484C8;\n$color-gold: #edc721;\n$color-pool: #83c1bf;\n$color-agua: #eef6f6;\n$color-dkdkblue: #001325;\n$color-soft-blue: #d7ebf3;\n$color-bright-blue: #93d8fd;\n\n// reds\n$color-red: #c00;\n$color-caution: #fff9e6;\n$color-soft-warning: #E0FFD7;\n$color-soft-red: #F1C8C8;\n$color-warning: #c00;\n$color-soft-pink: #e4afba;\n\n// yellows\n$color-soft-gold: #FFEB93;\n$color-bright-yellow: #f1d96e;\n$color-dirty-yellow: #ffc;\n$color-soft-yellow: #f3e9bd;\n\n// green\n$color-ltgreen: #eefeeb;\n$color-green: #009966;\n$color-soft-green: #b1eab2;\n$color-bright-green: #6ff373;\n\n// other\n$color-soft-purple: #c7beda;\n$color-soft-brown: #f3c28c;\n$color-soft-gray: #b1aca7;\n\n// Used for generating paddings / margins\n$base-unit: 1em;\n$base-unit-half: $base-unit * 0.5;\n$base-unit-quarter: $base-unit * 0.25;\n\n// Fonts\n$base-font-family: sans-serif;\n$base-font-family-bold: sans-serif;\n$base-font-family-italic: sans-serif;\n$base-font-family-bold-italic: sans-serif;\n\n$base-font-size: 16px;\n$base-content-font: $base-font-size * 0.875;\n$base-rounded-corners: 3px;\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


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
___CSS_LOADER_EXPORT___.push([module.id, ".wrapper {\n  max-width: 1600px;\n  margin: 0 auto;\n}\n\nmain {\n  padding-top: 44px;\n  z-index: 1;\n}\n\n#lifetracker,\n#app-container,\n.main-content-lifetracker {\n  height: 100%;\n  position: relative;\n}", "",{"version":3,"sources":["webpack://./CommonTemplate.scss","webpack://./../../styles/base/_settings.scss"],"names":[],"mappings":"AAEA;EACE,iBCFc;EDGd,cAAA;AADF;;AAGA;EACE,iBCHc;EDId,UCDgB;ADClB;;AAGA;;;EAGE,YAAA;EACA,kBAAA;AAAF","sourcesContent":["@import './src/styles/base/settings';\n\n.wrapper {\n  max-width: $wrapper-width;\n  margin: 0 auto;\n}\nmain {\n  padding-top: $header-height;\n  z-index: $layer-main-body;\n}\n\n#lifetracker,\n#app-container,\n.main-content-lifetracker  {\n  height: 100%;\n  position: relative;\n}\n","// Site wrapper\n$wrapper-width: 1600px;\n\n// header Height\n$header-height: 44px;\n\n// Z-Index Layers\n$layer-main-body: 1;\n$layer-window-shade: 10;\n$layer-lightbox: 50;\n$layer-top-elements: 1000;\n\n// Drawer Settings:\n$drawer-width: 175px;\n$drawer-max-height: 500px;\n\n$transtion-drawer: all 0.3s ease-in-out;\n\n// =========== Breakpoint mixins\n@mixin breakpoint($point) {\n  @if $point == laptop {\n    @media (min-width: 840px) { @content ; }\n  }\n  @else if $point == tablet {\n    @media (min-width: 560px) { @content ; }\n  }\n}\n\n// =========== Site Colors\n\n// Chromes\n$color-black: #222;\n$color-white: #fff;\n$color-ltgrey: #f0eeee;\n$color-dkgrey: #363636;\n$color-ltltgrey: #fbf9f9;\n$color-medgrey: #a1a1a1;\n$color-newspaper: #ebe6e6;\n\n// blues\n$color-royal: #1484C8;\n$color-gold: #edc721;\n$color-pool: #83c1bf;\n$color-agua: #eef6f6;\n$color-dkdkblue: #001325;\n$color-soft-blue: #d7ebf3;\n$color-bright-blue: #93d8fd;\n\n// reds\n$color-red: #c00;\n$color-caution: #fff9e6;\n$color-soft-warning: #E0FFD7;\n$color-soft-red: #F1C8C8;\n$color-warning: #c00;\n$color-soft-pink: #e4afba;\n\n// yellows\n$color-soft-gold: #FFEB93;\n$color-bright-yellow: #f1d96e;\n$color-dirty-yellow: #ffc;\n$color-soft-yellow: #f3e9bd;\n\n// green\n$color-ltgreen: #eefeeb;\n$color-green: #009966;\n$color-soft-green: #b1eab2;\n$color-bright-green: #6ff373;\n\n// other\n$color-soft-purple: #c7beda;\n$color-soft-brown: #f3c28c;\n$color-soft-gray: #b1aca7;\n\n// Used for generating paddings / margins\n$base-unit: 1em;\n$base-unit-half: $base-unit * 0.5;\n$base-unit-quarter: $base-unit * 0.25;\n\n// Fonts\n$base-font-family: sans-serif;\n$base-font-family-bold: sans-serif;\n$base-font-family-italic: sans-serif;\n$base-font-family-bold-italic: sans-serif;\n\n$base-font-size: 16px;\n$base-content-font: $base-font-size * 0.875;\n$base-rounded-corners: 3px;\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "#drawer {\n  top: 43px;\n  background: red;\n  width: 175px;\n  left: -175px;\n  overflow-y: auto;\n  position: fixed;\n  max-height: 500px;\n  z-index: 1000;\n  transition: all 0.3s ease-in-out;\n  border-radius: 0 0 3px 0;\n  padding-bottom: 3px;\n}\n#drawer.active {\n  left: 0;\n}\n#drawer ul {\n  display: flex;\n  flex-direction: column;\n  border-top: 1px solid #fff;\n}\n#drawer li {\n  border-bottom: 1px solid #fff;\n  transition: all 0.3s ease-in-out;\n}\n#drawer li.active, #drawer li:hover {\n  background: #222;\n}\n#drawer li a {\n  display: block;\n  padding: 0.5em;\n}\n@media (min-width: 560px) {\n  #drawer {\n    width: 262.5px;\n    left: -262.5px;\n  }\n}\n@media (min-width: 840px) {\n  #drawer {\n    width: 350px;\n    left: -350px;\n  }\n}", "",{"version":3,"sources":["webpack://./Drawer.scss","webpack://./../../../styles/base/_settings.scss"],"names":[],"mappings":"AAGA;EACE,SAAA;EACA,eAAA;EACA,YCOa;EDNb,YAAA;EACA,gBAAA;EACA,eAAA;EACA,iBCIkB;EDHlB,aCDmB;EDEnB,gCCIiB;EDHjB,wBAAA;EACA,mBCwEqB;AD1EvB;AAIE;EACE,OAAA;AAFJ;AAME;EACE,aAAA;EACA,sBAAA;EACA,0BAAA;AAJJ;AAOE;EACE,6BAAA;EACA,gCCbe;ADQnB;AAOI;EAEE,gBCFQ;ADJd;AASI;EACE,cAAA;EACA,cCqCW;AD5CjB;ACPI;EDrBJ;IAuCI,cAAA;IACA,cAAA;EAPF;AACF;AChBI;EDlBJ;IA2CI,YAAA;IACA,YAAA;EALF;AACF","sourcesContent":["@import './src/styles/base/settings';\n\n// Layout\n#drawer {\n  top: $header-height - 1;\n  background: red;\n  width: $drawer-width;\n  left: -$drawer-width;\n  overflow-y: auto;\n  position: fixed;\n  max-height: $drawer-max-height;\n  z-index: $layer-top-elements;\n  transition: $transtion-drawer;\n  border-radius: 0 0 $base-rounded-corners 0;\n  padding-bottom: $base-rounded-corners;\n\n  &.active {\n    left: 0;\n  }\n\n  // Link Styles\n  ul {\n    display: flex;\n    flex-direction: column;\n    border-top: 1px solid $color-white;\n  }\n\n  li {\n    border-bottom: 1px solid $color-white;\n    transition: $transtion-drawer;\n\n    &.active,\n    &:hover {\n      background: $color-black;\n    }\n\n    a {\n      display: block;\n      padding: $base-unit-half;\n    }\n  }\n  @include breakpoint(tablet) {\n    width: $drawer-width * 1.5;\n    left: -$drawer-width * 1.5;\n  }\n  @include breakpoint(laptop) {\n    width: $drawer-width * 2;\n    left: -$drawer-width * 2;\n  }\n}\n","// Site wrapper\n$wrapper-width: 1600px;\n\n// header Height\n$header-height: 44px;\n\n// Z-Index Layers\n$layer-main-body: 1;\n$layer-window-shade: 10;\n$layer-lightbox: 50;\n$layer-top-elements: 1000;\n\n// Drawer Settings:\n$drawer-width: 175px;\n$drawer-max-height: 500px;\n\n$transtion-drawer: all 0.3s ease-in-out;\n\n// =========== Breakpoint mixins\n@mixin breakpoint($point) {\n  @if $point == laptop {\n    @media (min-width: 840px) { @content ; }\n  }\n  @else if $point == tablet {\n    @media (min-width: 560px) { @content ; }\n  }\n}\n\n// =========== Site Colors\n\n// Chromes\n$color-black: #222;\n$color-white: #fff;\n$color-ltgrey: #f0eeee;\n$color-dkgrey: #363636;\n$color-ltltgrey: #fbf9f9;\n$color-medgrey: #a1a1a1;\n$color-newspaper: #ebe6e6;\n\n// blues\n$color-royal: #1484C8;\n$color-gold: #edc721;\n$color-pool: #83c1bf;\n$color-agua: #eef6f6;\n$color-dkdkblue: #001325;\n$color-soft-blue: #d7ebf3;\n$color-bright-blue: #93d8fd;\n\n// reds\n$color-red: #c00;\n$color-caution: #fff9e6;\n$color-soft-warning: #E0FFD7;\n$color-soft-red: #F1C8C8;\n$color-warning: #c00;\n$color-soft-pink: #e4afba;\n\n// yellows\n$color-soft-gold: #FFEB93;\n$color-bright-yellow: #f1d96e;\n$color-dirty-yellow: #ffc;\n$color-soft-yellow: #f3e9bd;\n\n// green\n$color-ltgreen: #eefeeb;\n$color-green: #009966;\n$color-soft-green: #b1eab2;\n$color-bright-green: #6ff373;\n\n// other\n$color-soft-purple: #c7beda;\n$color-soft-brown: #f3c28c;\n$color-soft-gray: #b1aca7;\n\n// Used for generating paddings / margins\n$base-unit: 1em;\n$base-unit-half: $base-unit * 0.5;\n$base-unit-quarter: $base-unit * 0.25;\n\n// Fonts\n$base-font-family: sans-serif;\n$base-font-family-bold: sans-serif;\n$base-font-family-italic: sans-serif;\n$base-font-family-bold-italic: sans-serif;\n\n$base-font-size: 16px;\n$base-content-font: $base-font-size * 0.875;\n$base-rounded-corners: 3px;\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ".header-bar {\n  background: red;\n  border-bottom: 1px solid #fff;\n  padding: 0.5em;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 44px;\n  z-index: 1000;\n  color: #fff;\n  display: flex;\n}\n.header-bar a {\n  color: #fff;\n}\n.header-bar .logo {\n  font-weight: bold;\n  padding: 5px;\n  border-top: 1px solid #fff;\n  border-bottom: 1px solid #fff;\n  letter-spacing: 5px;\n}\n.header-bar .logo2 {\n  background: #000;\n}\n.header-bar .flex-left {\n  flex-grow: 1;\n}\n.header-bar .flex-center {\n  justify-items: center;\n}\n.header-bar .flex-right {\n  text-align: right;\n  flex-grow: 1;\n}\n.header-bar .hamburger {\n  width: 30px;\n}\n.header-bar .hamburger .line {\n  width: 30px;\n  height: 3px;\n  background-color: #ecf0f1;\n  display: block;\n  margin: 6px auto;\n  transition: all 0.3s ease-in-out;\n}\n.header-bar .hamburger:hover {\n  cursor: pointer;\n}\n.header-bar .hamburger.active .line:nth-child(2) {\n  opacity: 0;\n}\n.header-bar .hamburger.active .line:nth-child(1) {\n  transform: translateY(9px) rotate(45deg);\n}\n.header-bar .hamburger.active .line:nth-child(3) {\n  transform: translateY(-9px) rotate(-45deg);\n}", "",{"version":3,"sources":["webpack://./HeaderBar.scss","webpack://./../../../styles/base/_settings.scss"],"names":[],"mappings":"AAEA;EACE,eAAA;EACA,6BAAA;EACA,cAAA;EACA,eAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,YCNc;EDOd,aCDmB;EDEnB,WAAA;EACA,aAAA;AADF;AAGE;EACE,WAAA;AADJ;AAIE;EACE,iBAAA;EACA,YAAA;EACA,0BAAA;EACA,6BAAA;EACA,mBAAA;AAFJ;AAIE;EACE,gBAAA;AAFJ;AAKE;EACE,YAAA;AAHJ;AAME;EACE,qBAAA;AAJJ;AAOE;EACE,iBAAA;EACA,YAAA;AALJ;AAQE;EACE,WAAA;AANJ;AASE;EACE,WAAA;EACA,WAAA;EACA,yBAAA;EACA,cAAA;EACA,gBAAA;EACA,gCCrCe;AD8BnB;AAUE;EACE,eAAA;AARJ;AAWE;EACE,UAAA;AATJ;AAYE;EACE,wCAAA;AAVJ;AAaE;EACE,0CAAA;AAXJ","sourcesContent":["@import './src/styles/base/settings';\n\n.header-bar {\n  background: red;\n  border-bottom: 1px solid $color-white;\n  padding: 0.5em;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: $header-height;\n  z-index: $layer-top-elements;\n  color: #fff;\n  display: flex;\n\n  a {\n    color: #fff;\n  }\n\n  .logo {\n    font-weight: bold;\n    padding: 5px;\n    border-top: 1px solid #fff;\n    border-bottom: 1px solid #fff;\n    letter-spacing: 5px;;\n  }\n  .logo2 {\n    background: #000;\n  }\n\n  .flex-left {\n    flex-grow: 1;\n  }\n\n  .flex-center {\n    justify-items: center;\n  }\n\n  .flex-right {\n    text-align: right;\n    flex-grow: 1;\n  }\n\n  .hamburger {\n    width: 30px;\n  }\n\n  .hamburger .line{\n    width: 30px;\n    height: 3px;\n    background-color: #ecf0f1;\n    display: block;\n    margin: 6px auto;\n    transition: $transtion-drawer;\n  }\n\n  .hamburger:hover{\n    cursor: pointer;\n  }\n\n  .hamburger.active .line:nth-child(2){\n    opacity: 0;\n  }\n\n  .hamburger.active .line:nth-child(1){\n    transform: translateY(9px) rotate(45deg);\n  }\n\n  .hamburger.active .line:nth-child(3){\n    transform: translateY(-9px) rotate(-45deg);\n  }\n\n}\n","// Site wrapper\n$wrapper-width: 1600px;\n\n// header Height\n$header-height: 44px;\n\n// Z-Index Layers\n$layer-main-body: 1;\n$layer-window-shade: 10;\n$layer-lightbox: 50;\n$layer-top-elements: 1000;\n\n// Drawer Settings:\n$drawer-width: 175px;\n$drawer-max-height: 500px;\n\n$transtion-drawer: all 0.3s ease-in-out;\n\n// =========== Breakpoint mixins\n@mixin breakpoint($point) {\n  @if $point == laptop {\n    @media (min-width: 840px) { @content ; }\n  }\n  @else if $point == tablet {\n    @media (min-width: 560px) { @content ; }\n  }\n}\n\n// =========== Site Colors\n\n// Chromes\n$color-black: #222;\n$color-white: #fff;\n$color-ltgrey: #f0eeee;\n$color-dkgrey: #363636;\n$color-ltltgrey: #fbf9f9;\n$color-medgrey: #a1a1a1;\n$color-newspaper: #ebe6e6;\n\n// blues\n$color-royal: #1484C8;\n$color-gold: #edc721;\n$color-pool: #83c1bf;\n$color-agua: #eef6f6;\n$color-dkdkblue: #001325;\n$color-soft-blue: #d7ebf3;\n$color-bright-blue: #93d8fd;\n\n// reds\n$color-red: #c00;\n$color-caution: #fff9e6;\n$color-soft-warning: #E0FFD7;\n$color-soft-red: #F1C8C8;\n$color-warning: #c00;\n$color-soft-pink: #e4afba;\n\n// yellows\n$color-soft-gold: #FFEB93;\n$color-bright-yellow: #f1d96e;\n$color-dirty-yellow: #ffc;\n$color-soft-yellow: #f3e9bd;\n\n// green\n$color-ltgreen: #eefeeb;\n$color-green: #009966;\n$color-soft-green: #b1eab2;\n$color-bright-green: #6ff373;\n\n// other\n$color-soft-purple: #c7beda;\n$color-soft-brown: #f3c28c;\n$color-soft-gray: #b1aca7;\n\n// Used for generating paddings / margins\n$base-unit: 1em;\n$base-unit-half: $base-unit * 0.5;\n$base-unit-quarter: $base-unit * 0.25;\n\n// Fonts\n$base-font-family: sans-serif;\n$base-font-family-bold: sans-serif;\n$base-font-family-italic: sans-serif;\n$base-font-family-bold-italic: sans-serif;\n\n$base-font-size: 16px;\n$base-content-font: $base-font-size * 0.875;\n$base-rounded-corners: 3px;\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ".lb-hickman {\n  background-color: #ebe6e6;\n  padding: 1em;\n  border: 2px solid #222;\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n}\n@media (min-width: 840px) {\n  .lb-hickman {\n    max-width: 860px;\n  }\n}\n.lb-hickman h3 {\n  text-align: justify;\n  border-top: 10px solid #c00;\n  padding-top: 0.5em;\n  font-size: 36px;\n  font-family: \"Courier New\", Courier, monospace;\n}\n.lb-hickman h4 {\n  text-align: justify;\n  padding-bottom: 0.5em;\n  font-size: 24px;\n  font-family: \"Courier New\", Courier, monospace;\n}\n.lb-hickman h5 {\n  text-align: justify;\n  padding-bottom: 0.5em;\n  font-size: 18px;\n  font-family: \"Courier New\", Courier, monospace;\n}\n.lb-hickman section {\n  padding-bottom: 0.5em;\n  border-bottom: 10px solid #c00;\n  flex-grow: 4;\n  transition: all linear 500ms;\n}\n.lb-hickman section p {\n  font-size: 16px;\n  text-align: justify;\n  font-family: \"Lucida Sans\", Lucida, sans-serif;\n  padding-bottom: 1em;\n  line-height: 24px;\n}", "",{"version":3,"sources":["webpack://./LBHickman.scss","webpack://./../../../../styles/base/_settings.scss"],"names":[],"mappings":"AAEA;EACI,yBCkCc;EDjCd,YCsEQ;EDrER,sBAAA;EACA,aAAA;EACA,sBAAA;EACA,gBAAA;AADJ;ACcI;EDnBJ;IASM,gBAAA;EAAJ;AACF;AAEI;EACE,mBAAA;EACA,2BAAA;EACA,kBC0DW;EDzDX,eAAA;EACA,8CAAA;AAAN;AAGI;EACE,mBAAA;EACA,qBCmDW;EDlDX,eAAA;EACA,8CAAA;AADN;AAII;EACE,mBAAA;EACA,qBC4CW;ED3CX,eAAA;EACA,8CAAA;AAFN;AAKI;EACE,qBCsCW;EDrCX,8BAAA;EACA,YAAA;EACA,4BAAA;AAHN;AAMI;EACE,eAAA;EACA,mBAAA;EACA,8CAAA;EACA,mBC2BM;ED1BN,iBAAA;AAJN","sourcesContent":["@import './src/styles/base/settings';\n\n.lb-hickman {\n    background-color: $color-newspaper;\n    padding: $base-unit;\n    border: 2px solid $color-black;\n    display: flex;\n    flex-direction: column;\n    overflow-y: auto;\n\n    @include breakpoint(laptop) {\n      max-width: 860px;\n    }\n\n    h3 {\n      text-align: justify;\n      border-top: 10px solid $color-red;\n      padding-top: $base-unit-half;\n      font-size: 36px;\n      font-family: 'Courier New', Courier, monospace;\n    }\n\n    h4 {\n      text-align: justify;\n      padding-bottom: $base-unit-half;\n      font-size: 24px;\n      font-family: 'Courier New', Courier, monospace;\n    }\n\n    h5 {\n      text-align: justify;\n      padding-bottom: $base-unit-half;\n      font-size: 18px;\n      font-family: 'Courier New', Courier, monospace;\n    }\n    \n    section {\n      padding-bottom: $base-unit-half;\n      border-bottom: 10px solid $color-red;\n      flex-grow: 4;\n      transition: all linear 500ms;\n    }\n\n    section p {\n      font-size: 16px;\n      text-align: justify;\n      font-family: \"Lucida Sans\", Lucida, sans-serif;\n      padding-bottom: $base-unit;\n      line-height: 24px;\n    }\n  \n}","// Site wrapper\n$wrapper-width: 1600px;\n\n// header Height\n$header-height: 44px;\n\n// Z-Index Layers\n$layer-main-body: 1;\n$layer-window-shade: 10;\n$layer-lightbox: 50;\n$layer-top-elements: 1000;\n\n// Drawer Settings:\n$drawer-width: 175px;\n$drawer-max-height: 500px;\n\n$transtion-drawer: all 0.3s ease-in-out;\n\n// =========== Breakpoint mixins\n@mixin breakpoint($point) {\n  @if $point == laptop {\n    @media (min-width: 840px) { @content ; }\n  }\n  @else if $point == tablet {\n    @media (min-width: 560px) { @content ; }\n  }\n}\n\n// =========== Site Colors\n\n// Chromes\n$color-black: #222;\n$color-white: #fff;\n$color-ltgrey: #f0eeee;\n$color-dkgrey: #363636;\n$color-ltltgrey: #fbf9f9;\n$color-medgrey: #a1a1a1;\n$color-newspaper: #ebe6e6;\n\n// blues\n$color-royal: #1484C8;\n$color-gold: #edc721;\n$color-pool: #83c1bf;\n$color-agua: #eef6f6;\n$color-dkdkblue: #001325;\n$color-soft-blue: #d7ebf3;\n$color-bright-blue: #93d8fd;\n\n// reds\n$color-red: #c00;\n$color-caution: #fff9e6;\n$color-soft-warning: #E0FFD7;\n$color-soft-red: #F1C8C8;\n$color-warning: #c00;\n$color-soft-pink: #e4afba;\n\n// yellows\n$color-soft-gold: #FFEB93;\n$color-bright-yellow: #f1d96e;\n$color-dirty-yellow: #ffc;\n$color-soft-yellow: #f3e9bd;\n\n// green\n$color-ltgreen: #eefeeb;\n$color-green: #009966;\n$color-soft-green: #b1eab2;\n$color-bright-green: #6ff373;\n\n// other\n$color-soft-purple: #c7beda;\n$color-soft-brown: #f3c28c;\n$color-soft-gray: #b1aca7;\n\n// Used for generating paddings / margins\n$base-unit: 1em;\n$base-unit-half: $base-unit * 0.5;\n$base-unit-quarter: $base-unit * 0.25;\n\n// Fonts\n$base-font-family: sans-serif;\n$base-font-family-bold: sans-serif;\n$base-font-family-italic: sans-serif;\n$base-font-family-bold-italic: sans-serif;\n\n$base-font-size: 16px;\n$base-content-font: $base-font-size * 0.875;\n$base-rounded-corners: 3px;\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ".lightbox {\n  transition: all 0.3s ease-in-out;\n  z-index: 50;\n  top: 49px;\n  left: 15px;\n  bottom: 15px;\n  right: 15px;\n  overflow: hidden;\n  position: fixed;\n  display: none;\n}\n.lightbox img {\n  max-height: 100vh;\n}\n.lightbox.active {\n  display: flex;\n  justify-content: space-around;\n}\n.lightbox .lb-details {\n  background-color: #fff;\n  padding: 1em;\n}\n.lightbox a {\n  color: #222;\n}", "",{"version":3,"sources":["webpack://./Lightbox.scss","webpack://./../../../styles/base/_settings.scss"],"names":[],"mappings":"AAEA;EACE,gCCaiB;EDZjB,WCKe;EDJf,SAAA;EACA,UAAA;EACA,YAAA;EACA,WAAA;EACA,gBAAA;EACA,eAAA;EACA,aAAA;AADF;AAGE;EACE,iBAAA;AADJ;AAIE;EACE,aAAA;EACA,6BAAA;AAFJ;AAKE;EACE,sBCSU;EDRV,YCkDQ;ADrDZ;AAME;EACE,WCGU;ADPd","sourcesContent":["@import './src/styles/base/settings';\n\n.lightbox {\n  transition: $transtion-drawer;\n  z-index: $layer-lightbox;\n  top: $header-height +5;\n  left: 15px;\n  bottom: 15px;\n  right: 15px;\n  overflow: hidden;\n  position: fixed;\n  display: none;\n\n  img {\n    max-height: 100vh;\n  }\n\n  &.active {\n    display: flex;\n    justify-content: space-around;\n  }\n\n  .lb-details {\n    background-color: $color-white;\n    padding: $base-unit;\n  }\n\n  a {\n    color: $color-black;\n  }\n}\n","// Site wrapper\n$wrapper-width: 1600px;\n\n// header Height\n$header-height: 44px;\n\n// Z-Index Layers\n$layer-main-body: 1;\n$layer-window-shade: 10;\n$layer-lightbox: 50;\n$layer-top-elements: 1000;\n\n// Drawer Settings:\n$drawer-width: 175px;\n$drawer-max-height: 500px;\n\n$transtion-drawer: all 0.3s ease-in-out;\n\n// =========== Breakpoint mixins\n@mixin breakpoint($point) {\n  @if $point == laptop {\n    @media (min-width: 840px) { @content ; }\n  }\n  @else if $point == tablet {\n    @media (min-width: 560px) { @content ; }\n  }\n}\n\n// =========== Site Colors\n\n// Chromes\n$color-black: #222;\n$color-white: #fff;\n$color-ltgrey: #f0eeee;\n$color-dkgrey: #363636;\n$color-ltltgrey: #fbf9f9;\n$color-medgrey: #a1a1a1;\n$color-newspaper: #ebe6e6;\n\n// blues\n$color-royal: #1484C8;\n$color-gold: #edc721;\n$color-pool: #83c1bf;\n$color-agua: #eef6f6;\n$color-dkdkblue: #001325;\n$color-soft-blue: #d7ebf3;\n$color-bright-blue: #93d8fd;\n\n// reds\n$color-red: #c00;\n$color-caution: #fff9e6;\n$color-soft-warning: #E0FFD7;\n$color-soft-red: #F1C8C8;\n$color-warning: #c00;\n$color-soft-pink: #e4afba;\n\n// yellows\n$color-soft-gold: #FFEB93;\n$color-bright-yellow: #f1d96e;\n$color-dirty-yellow: #ffc;\n$color-soft-yellow: #f3e9bd;\n\n// green\n$color-ltgreen: #eefeeb;\n$color-green: #009966;\n$color-soft-green: #b1eab2;\n$color-bright-green: #6ff373;\n\n// other\n$color-soft-purple: #c7beda;\n$color-soft-brown: #f3c28c;\n$color-soft-gray: #b1aca7;\n\n// Used for generating paddings / margins\n$base-unit: 1em;\n$base-unit-half: $base-unit * 0.5;\n$base-unit-quarter: $base-unit * 0.25;\n\n// Fonts\n$base-font-family: sans-serif;\n$base-font-family-bold: sans-serif;\n$base-font-family-italic: sans-serif;\n$base-font-family-bold-italic: sans-serif;\n\n$base-font-size: 16px;\n$base-content-font: $base-font-size * 0.875;\n$base-rounded-corners: 3px;\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ".window-shade {\n  transition: all 0.3s ease-in-out;\n  opacity: 0.75;\n  z-index: 20;\n  top: 44px;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  overflow: hidden;\n  position: fixed;\n  background: #222;\n  display: none;\n}\n.window-shade.active {\n  display: block;\n}", "",{"version":3,"sources":["webpack://./WindowShade.scss","webpack://./../../../styles/base/_settings.scss"],"names":[],"mappings":"AAEA;EACE,gCCaiB;EDZjB,aAAA;EACA,WAAA;EACA,SCFc;EDGd,OAAA;EACA,SAAA;EACA,QAAA;EACA,gBAAA;EACA,eAAA;EACA,gBCmBY;EDlBZ,aAAA;AADF;AAGE;EACE,cAAA;AADJ","sourcesContent":["@import './src/styles/base/settings';\n\n.window-shade {\n  transition: $transtion-drawer;\n  opacity: 0.75;\n  z-index: 20;\n  top: $header-height;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  overflow: hidden;\n  position: fixed;\n  background: $color-black;\n  display: none;\n\n  &.active {\n    display: block;\n  }\n}\n","// Site wrapper\n$wrapper-width: 1600px;\n\n// header Height\n$header-height: 44px;\n\n// Z-Index Layers\n$layer-main-body: 1;\n$layer-window-shade: 10;\n$layer-lightbox: 50;\n$layer-top-elements: 1000;\n\n// Drawer Settings:\n$drawer-width: 175px;\n$drawer-max-height: 500px;\n\n$transtion-drawer: all 0.3s ease-in-out;\n\n// =========== Breakpoint mixins\n@mixin breakpoint($point) {\n  @if $point == laptop {\n    @media (min-width: 840px) { @content ; }\n  }\n  @else if $point == tablet {\n    @media (min-width: 560px) { @content ; }\n  }\n}\n\n// =========== Site Colors\n\n// Chromes\n$color-black: #222;\n$color-white: #fff;\n$color-ltgrey: #f0eeee;\n$color-dkgrey: #363636;\n$color-ltltgrey: #fbf9f9;\n$color-medgrey: #a1a1a1;\n$color-newspaper: #ebe6e6;\n\n// blues\n$color-royal: #1484C8;\n$color-gold: #edc721;\n$color-pool: #83c1bf;\n$color-agua: #eef6f6;\n$color-dkdkblue: #001325;\n$color-soft-blue: #d7ebf3;\n$color-bright-blue: #93d8fd;\n\n// reds\n$color-red: #c00;\n$color-caution: #fff9e6;\n$color-soft-warning: #E0FFD7;\n$color-soft-red: #F1C8C8;\n$color-warning: #c00;\n$color-soft-pink: #e4afba;\n\n// yellows\n$color-soft-gold: #FFEB93;\n$color-bright-yellow: #f1d96e;\n$color-dirty-yellow: #ffc;\n$color-soft-yellow: #f3e9bd;\n\n// green\n$color-ltgreen: #eefeeb;\n$color-green: #009966;\n$color-soft-green: #b1eab2;\n$color-bright-green: #6ff373;\n\n// other\n$color-soft-purple: #c7beda;\n$color-soft-brown: #f3c28c;\n$color-soft-gray: #b1aca7;\n\n// Used for generating paddings / margins\n$base-unit: 1em;\n$base-unit-half: $base-unit * 0.5;\n$base-unit-quarter: $base-unit * 0.25;\n\n// Fonts\n$base-font-family: sans-serif;\n$base-font-family-bold: sans-serif;\n$base-font-family-italic: sans-serif;\n$base-font-family-bold-italic: sans-serif;\n\n$base-font-size: 16px;\n$base-content-font: $base-font-size * 0.875;\n$base-rounded-corners: 3px;\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[4]!./src/components/Rankings/Item/Item.scss":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[4]!./src/components/Rankings/Item/Item.scss ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".main-content-rem section.item {\n  background-position: center center;\n}", "",{"version":3,"sources":["webpack://./Item.scss"],"names":[],"mappings":"AAAA;EACE,kCAAA;AACF","sourcesContent":[".main-content-rem section.item {\n  background-position: center center;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[4]!./src/components/Rankings/Tier/Tier.scss":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[4]!./src/components/Rankings/Tier/Tier.scss ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".tier > p {\n  font-weight: bold;\n  padding: 0.5em;\n  margin: 0;\n}\n\n.tier-great {\n  background-color: #3dad3c;\n}\n\n.tier-high {\n  background-color: #9370ff;\n}\n\n.tier-good {\n  background-color: red;\n}\n\n.tier-medium {\n  background-color: #ff8100;\n}\n\n.tier-low {\n  background-color: #787878;\n  color: #efefef;\n}\n\nsection.item {\n  height: 300px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: top center;\n  margin-left: 0.25em;\n  position: relative;\n}\n\n.clarify {\n  border-radius: 1em;\n  padding: 0.25em;\n  background: #1484C8;\n  color: #fff;\n  opacity: 0.9;\n}\n\n.title {\n  left: 1em;\n  position: absolute;\n  top: 1em;\n  padding: 3px 6px;\n  font-weight: bold;\n}\n@media (min-width: 560px) {\n  .title {\n    padding: 0 3px;\n    font-size: 28px;\n  }\n}\n\n.ranking {\n  left: 1em;\n  position: absolute;\n  bottom: 1em;\n  font-weight: bold;\n  padding: 3px 6px;\n  font-size: 18px;\n}\n@media (min-width: 560px) {\n  .ranking {\n    padding: 0 3px;\n    font-size: 36px;\n  }\n}", "",{"version":3,"sources":["webpack://./Tier.scss","webpack://./../../../styles/base/_settings.scss"],"names":[],"mappings":"AAEA;EACE,iBAAA;EACA,cAAA;EACA,SAAA;AADF;;AAIA;EACE,yBAAA;AADF;;AAIA;EACE,yBAAA;AADF;;AAIA;EACE,qBAAA;AADF;;AAIA;EACE,yBAAA;AADF;;AAIA;EACE,yBAAA;EACA,cAAA;AADF;;AAIA;EACE,aAAA;EACA,4BAAA;EACA,sBAAA;EACA,+BAAA;EACA,mBAAA;EACA,kBAAA;AADF;;AAIA;EACE,kBAAA;EACA,eAAA;EACA,mBAAA;EACA,WAAA;EACA,YAAA;AADF;;AAIA;EACE,SAAA;EACA,kBAAA;EACA,QAAA;EACA,gBAAA;EACA,iBAAA;AADF;AC1BI;EDsBJ;IAOI,cAAA;IACA,eAAA;EACF;AACF;;AAEA;EACE,SAAA;EACA,kBAAA;EACA,WAAA;EACA,iBAAA;EACA,gBAAA;EACA,eAAA;AACF;ACzCI;EDkCJ;IAQI,cAAA;IACA,eAAA;EAGF;AACF","sourcesContent":["@import './src/styles/base/settings';\n\n.tier > p {\n  font-weight: bold;\n  padding: 0.5em;\n  margin: 0;\n}\n\n.tier-great {\n  background-color: #3dad3c;\n}\n\n.tier-high {\n  background-color: #9370ff;\n}\n\n.tier-good {\n  background-color: red;\n}\n\n.tier-medium {\n  background-color: #ff8100;\n}\n\n.tier-low {\n  background-color: #787878;\n  color: #efefef;\n}\n\nsection.item {\n  height: 300px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: top center;\n  margin-left: 0.25em;\n  position: relative;\n}\n\n.clarify {\n  border-radius: 1em;\n  padding: 0.25em;\n  background: #1484C8;\n  color: #fff;\n  opacity: 0.9;\n}\n\n.title {\n  left: 1em;\n  position: absolute;\n  top: 1em;\n  padding: 3px 6px;\n  font-weight: bold;\n  @include breakpoint(tablet) {\n    padding: 0 3px;\n    font-size: 28px;\n  }\n}\n\n.ranking {\n  left: 1em;\n  position: absolute;\n  bottom: 1em;\n  font-weight: bold;\n  padding: 3px 6px;\n  font-size: 18px;\n  @include breakpoint(tablet) {\n    padding: 0 3px;\n    font-size: 36px;\n  }\n}\n","// Site wrapper\n$wrapper-width: 1600px;\n\n// header Height\n$header-height: 44px;\n\n// Z-Index Layers\n$layer-main-body: 1;\n$layer-window-shade: 10;\n$layer-lightbox: 50;\n$layer-top-elements: 1000;\n\n// Drawer Settings:\n$drawer-width: 175px;\n$drawer-max-height: 500px;\n\n$transtion-drawer: all 0.3s ease-in-out;\n\n// =========== Breakpoint mixins\n@mixin breakpoint($point) {\n  @if $point == laptop {\n    @media (min-width: 840px) { @content ; }\n  }\n  @else if $point == tablet {\n    @media (min-width: 560px) { @content ; }\n  }\n}\n\n// =========== Site Colors\n\n// Chromes\n$color-black: #222;\n$color-white: #fff;\n$color-ltgrey: #f0eeee;\n$color-dkgrey: #363636;\n$color-ltltgrey: #fbf9f9;\n$color-medgrey: #a1a1a1;\n$color-newspaper: #ebe6e6;\n\n// blues\n$color-royal: #1484C8;\n$color-gold: #edc721;\n$color-pool: #83c1bf;\n$color-agua: #eef6f6;\n$color-dkdkblue: #001325;\n$color-soft-blue: #d7ebf3;\n$color-bright-blue: #93d8fd;\n\n// reds\n$color-red: #c00;\n$color-caution: #fff9e6;\n$color-soft-warning: #E0FFD7;\n$color-soft-red: #F1C8C8;\n$color-warning: #c00;\n$color-soft-pink: #e4afba;\n\n// yellows\n$color-soft-gold: #FFEB93;\n$color-bright-yellow: #f1d96e;\n$color-dirty-yellow: #ffc;\n$color-soft-yellow: #f3e9bd;\n\n// green\n$color-ltgreen: #eefeeb;\n$color-green: #009966;\n$color-soft-green: #b1eab2;\n$color-bright-green: #6ff373;\n\n// other\n$color-soft-purple: #c7beda;\n$color-soft-brown: #f3c28c;\n$color-soft-gray: #b1aca7;\n\n// Used for generating paddings / margins\n$base-unit: 1em;\n$base-unit-half: $base-unit * 0.5;\n$base-unit-quarter: $base-unit * 0.25;\n\n// Fonts\n$base-font-family: sans-serif;\n$base-font-family-bold: sans-serif;\n$base-font-family-italic: sans-serif;\n$base-font-family-bold-italic: sans-serif;\n\n$base-font-size: 16px;\n$base-content-font: $base-font-size * 0.875;\n$base-rounded-corners: 3px;\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[4]!./src/components/forms/FilterComics/FilterComics.scss":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[4]!./src/components/forms/FilterComics/FilterComics.scss ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".filter-controls {\n  transition: all 0.3s ease-in-out;\n}\n.filter-controls .filter-controls-body {\n  max-height: 0;\n  margin-left: 1.5em;\n}\n.filter-controls .filter-controls-body.active {\n  max-height: 200px;\n}\n.filter-controls h6 {\n  cursor: pointer;\n  margin-top: 0.25em;\n  margin-left: 0.5em;\n  margin-bottom: 0;\n}\n.filter-controls .filter-controls-body > select,\n.filter-controls .filter-controls-body > .switch {\n  margin-bottom: 0.5em;\n  display: none;\n}\n.filter-controls .filter-controls-body.active > select {\n  display: inline-block;\n  margin: 0.5em 0.25em 0.5em 0;\n}\n.filter-controls .filter-controls-body.active > .switch {\n  display: block;\n  cursor: pointer;\n  margin: 0;\n  padding: 0.5em 0.25em 0.5em 1em;\n}\n.filter-controls .filter-controls-body.active > .switch.active {\n  color: #fff;\n  background: #222;\n}", "",{"version":3,"sources":["webpack://./FilterComics.scss","webpack://./../../../styles/base/_settings.scss"],"names":[],"mappings":"AAEA;EACE,gCCaiB;ADdnB;AAGE;EACE,aAAA;EACA,kBAAA;AADJ;AAGI;EACE,iBAAA;AADN;AAKE;EACE,eAAA;EACA,kBC4DgB;ED3DhB,kBC0Da;EDzDb,gBAAA;AAHJ;AAME;;EAEE,oBCoDa;EDnDb,aAAA;AAJJ;AAOE;EACE,qBAAA;EACA,4BAAA;AALJ;AAOE;EACE,cAAA;EACA,eAAA;EACA,SAAA;EACA,+BAAA;AALJ;AAOI;EACE,WCNQ;EDOR,gBCRQ;ADGd","sourcesContent":["@import './src/styles/base/settings';\n\n.filter-controls {\n  transition: $transtion-drawer;\n\n  .filter-controls-body  {\n    max-height: 0;\n    margin-left: $base-unit * 1.5;\n\n    &.active {\n      max-height: 200px;\n    }\n  }\n\n  h6 {\n    cursor: pointer;\n    margin-top: $base-unit-quarter;\n    margin-left: $base-unit-half;\n    margin-bottom: 0;\n  }\n\n  .filter-controls-body>select,\n  .filter-controls-body>.switch {\n    margin-bottom: $base-unit-half;\n    display: none;\n  }\n\n  .filter-controls-body.active>select {\n    display: inline-block;\n    margin: $base-unit-half $base-unit-quarter $base-unit-half 0;\n  }\n  .filter-controls-body.active>.switch {\n    display: block;\n    cursor: pointer;\n    margin: 0;\n    padding: $base-unit-half $base-unit-quarter$base-unit-half $base-unit;\n\n    &.active {\n      color: $color-white;\n      background: $color-black;\n    }\n  }\n}\n","// Site wrapper\n$wrapper-width: 1600px;\n\n// header Height\n$header-height: 44px;\n\n// Z-Index Layers\n$layer-main-body: 1;\n$layer-window-shade: 10;\n$layer-lightbox: 50;\n$layer-top-elements: 1000;\n\n// Drawer Settings:\n$drawer-width: 175px;\n$drawer-max-height: 500px;\n\n$transtion-drawer: all 0.3s ease-in-out;\n\n// =========== Breakpoint mixins\n@mixin breakpoint($point) {\n  @if $point == laptop {\n    @media (min-width: 840px) { @content ; }\n  }\n  @else if $point == tablet {\n    @media (min-width: 560px) { @content ; }\n  }\n}\n\n// =========== Site Colors\n\n// Chromes\n$color-black: #222;\n$color-white: #fff;\n$color-ltgrey: #f0eeee;\n$color-dkgrey: #363636;\n$color-ltltgrey: #fbf9f9;\n$color-medgrey: #a1a1a1;\n$color-newspaper: #ebe6e6;\n\n// blues\n$color-royal: #1484C8;\n$color-gold: #edc721;\n$color-pool: #83c1bf;\n$color-agua: #eef6f6;\n$color-dkdkblue: #001325;\n$color-soft-blue: #d7ebf3;\n$color-bright-blue: #93d8fd;\n\n// reds\n$color-red: #c00;\n$color-caution: #fff9e6;\n$color-soft-warning: #E0FFD7;\n$color-soft-red: #F1C8C8;\n$color-warning: #c00;\n$color-soft-pink: #e4afba;\n\n// yellows\n$color-soft-gold: #FFEB93;\n$color-bright-yellow: #f1d96e;\n$color-dirty-yellow: #ffc;\n$color-soft-yellow: #f3e9bd;\n\n// green\n$color-ltgreen: #eefeeb;\n$color-green: #009966;\n$color-soft-green: #b1eab2;\n$color-bright-green: #6ff373;\n\n// other\n$color-soft-purple: #c7beda;\n$color-soft-brown: #f3c28c;\n$color-soft-gray: #b1aca7;\n\n// Used for generating paddings / margins\n$base-unit: 1em;\n$base-unit-half: $base-unit * 0.5;\n$base-unit-quarter: $base-unit * 0.25;\n\n// Fonts\n$base-font-family: sans-serif;\n$base-font-family-bold: sans-serif;\n$base-font-family-italic: sans-serif;\n$base-font-family-bold-italic: sans-serif;\n\n$base-font-size: 16px;\n$base-content-font: $base-font-size * 0.875;\n$base-rounded-corners: 3px;\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ".basic-form {\n  max-width: 75%;\n  padding: 0.5em;\n  margin: 0.5em;\n  border: 2px solid #222;\n  border-radius: 3px;\n}\n.basic-form .field-pair {\n  display: flex;\n  margin-bottom: 0.25em;\n}\n.basic-form .field-pair label {\n  width: 25%;\n}\n.basic-form .field-pair .input-container {\n  flex-grow: 1;\n}\n.basic-form .field-pair .input-container input {\n  width: 100%;\n}", "",{"version":3,"sources":["webpack://./forms.scss","webpack://./../../styles/base/_settings.scss"],"names":[],"mappings":"AAEA;EACE,cAAA;EACA,cCuEe;EDtEf,aCsEe;EDrEf,sBAAA;EACA,kBC+EqB;ADhFvB;AAGE;EACE,aAAA;EACA,qBCiEgB;ADlEpB;AAEI;EACE,UAAA;AAAN;AAEI;EACE,YAAA;AAAN;AACM;EACE,WAAA;AACR","sourcesContent":["@import './src/styles/base/settings';\n\n.basic-form {\n  max-width: 75%;\n  padding: $base-unit-half;\n  margin: $base-unit-half;\n  border: 2px solid $color-black;\n  border-radius: $base-rounded-corners;\n\n  .field-pair {\n    display: flex;\n    margin-bottom: $base-unit-quarter;\n    label {\n      width: 25%;\n    }\n    .input-container {\n      flex-grow: 1;\n      input {\n        width: 100%;\n      }\n    }\n  }\n}\n","// Site wrapper\n$wrapper-width: 1600px;\n\n// header Height\n$header-height: 44px;\n\n// Z-Index Layers\n$layer-main-body: 1;\n$layer-window-shade: 10;\n$layer-lightbox: 50;\n$layer-top-elements: 1000;\n\n// Drawer Settings:\n$drawer-width: 175px;\n$drawer-max-height: 500px;\n\n$transtion-drawer: all 0.3s ease-in-out;\n\n// =========== Breakpoint mixins\n@mixin breakpoint($point) {\n  @if $point == laptop {\n    @media (min-width: 840px) { @content ; }\n  }\n  @else if $point == tablet {\n    @media (min-width: 560px) { @content ; }\n  }\n}\n\n// =========== Site Colors\n\n// Chromes\n$color-black: #222;\n$color-white: #fff;\n$color-ltgrey: #f0eeee;\n$color-dkgrey: #363636;\n$color-ltltgrey: #fbf9f9;\n$color-medgrey: #a1a1a1;\n$color-newspaper: #ebe6e6;\n\n// blues\n$color-royal: #1484C8;\n$color-gold: #edc721;\n$color-pool: #83c1bf;\n$color-agua: #eef6f6;\n$color-dkdkblue: #001325;\n$color-soft-blue: #d7ebf3;\n$color-bright-blue: #93d8fd;\n\n// reds\n$color-red: #c00;\n$color-caution: #fff9e6;\n$color-soft-warning: #E0FFD7;\n$color-soft-red: #F1C8C8;\n$color-warning: #c00;\n$color-soft-pink: #e4afba;\n\n// yellows\n$color-soft-gold: #FFEB93;\n$color-bright-yellow: #f1d96e;\n$color-dirty-yellow: #ffc;\n$color-soft-yellow: #f3e9bd;\n\n// green\n$color-ltgreen: #eefeeb;\n$color-green: #009966;\n$color-soft-green: #b1eab2;\n$color-bright-green: #6ff373;\n\n// other\n$color-soft-purple: #c7beda;\n$color-soft-brown: #f3c28c;\n$color-soft-gray: #b1aca7;\n\n// Used for generating paddings / margins\n$base-unit: 1em;\n$base-unit-half: $base-unit * 0.5;\n$base-unit-quarter: $base-unit * 0.25;\n\n// Fonts\n$base-font-family: sans-serif;\n$base-font-family-bold: sans-serif;\n$base-font-family-italic: sans-serif;\n$base-font-family-bold-italic: sans-serif;\n\n$base-font-size: 16px;\n$base-content-font: $base-font-size * 0.875;\n$base-rounded-corners: 3px;\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[4]!./src/components/page_roots/LifetrackerPage/LifeSection/lifeSection.scss":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[4]!./src/components/page_roots/LifetrackerPage/LifeSection/lifeSection.scss ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".bg-aqua {\n  background-color: aqua;\n}\n\n.bg-pink {\n  background-color: pink;\n}\n\n.bg-yellow {\n  background-color: yellow;\n}\n\n.bg-goldenrod {\n  background-color: goldenrod;\n}\n\n.bg-plum {\n  background-color: plum;\n}\n\n.bg-thistle {\n  background-color: thistle;\n}\n\nbutton {\n  font-size: 16px;\n  background-color: #fff;\n  margin: 0.15em;\n  padding: 0.5em;\n  border-radius: 0.25em;\n}\n\n@media (min-width: 768px) {\n  button {\n    font-size: 26px;\n    background-color: #fff;\n    padding: 0.75em;\n    border-radius: 0.25em;\n  }\n}\nbutton.up {\n  border: 1px solid green;\n}\n\nbutton.down {\n  border: 1px solid red;\n}\n\nbutton.up-big {\n  border: 3px solid green;\n}\n\nbutton.down-big {\n  border: 3px solid red;\n}\n\n.life-section .edit-name-form {\n  background: #000;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  opacity: 0.95;\n  text-align: center;\n  z-index: 1000;\n}\n.life-section .edit-name-form span {\n  color: #fdfdfd;\n}\n.life-section .header-row {\n  font-size: 14px;\n}\n@media (min-width: 768px) {\n  .life-section .header-row {\n    font-size: 24px;\n  }\n}\n.life-section .header-row button {\n  font-size: 10px;\n}\n@media (min-width: 768px) {\n  .life-section .header-row button {\n    font-size: 20px;\n  }\n}\n.life-section .counter-area {\n  background: #efefef;\n  border-left: 1px solid #333;\n  border-bottom: 1px solid #333;\n  border-radius: 0 0 0 1rem;\n  font-size: 26px;\n  padding-left: 3rem;\n  position: absolute;\n  top: 0;\n  right: -95px;\n  transition: right 0.3s ease;\n}\n.life-section .counter-area.active {\n  right: 0;\n}\n.life-section .counter-area .counter-area-control-icon {\n  cursor: pointer;\n  padding: 0.3rem 0.3rem 2rem 0.6rem;\n  width: 42px;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n@media (min-width: 768px) {\n  .life-section .counter-area {\n    right: -167px;\n  }\n  .life-section .counter-area .counter-area-control-icon {\n    padding: 0.6rem 0.6rem 2rem;\n  }\n}\n.life-section .counter-sections {\n  width: 95px;\n}\n@media (min-width: 768px) {\n  .life-section .counter-sections {\n    height: auto;\n    width: 155px;\n    max-height: 216px;\n    overflow-y: scroll;\n  }\n}\n.life-section .align-content {\n  cursor: pointer;\n  font-size: 124px;\n  line-height: 1;\n}\n@media (min-width: 768px) {\n  .life-section .align-content {\n    font-size: 158px;\n  }\n}\n.life-section .life-section {\n  transition: transform 0.3s;\n  position: relative;\n  overflow: hidden;\n}\n.life-section .double-col-row > section > span {\n  padding-right: 1.5rem;\n}\n.life-section .low-players .life-section button {\n  padding: 1.25em;\n}\n\n.counter-sections {\n  text-align: center;\n  width: 95px;\n  height: 40px;\n}\n.counter-sections .choose-color-section {\n  text-align: center;\n  width: 95px;\n  height: 40px;\n}\n@media (min-width: 768px) {\n  .counter-sections .counter-section,\n.counter-sections .choose-color-section {\n    width: 155px;\n    height: 68px;\n  }\n}\n.counter-sections .counter-count {\n  width: 40px;\n}\n.counter-sections .color-chooser {\n  padding: 0;\n  margin: 0 2px;\n  height: 30px;\n  width: 50px;\n  border: none;\n}\n@media (min-width: 768px) {\n  .counter-sections .color-chooser {\n    height: 50px;\n  }\n}\n.counter-sections button {\n  font-size: 10px;\n  padding: 0.25em;\n  margin: 0 0.25em;\n}\n@media (min-width: 768px) {\n  .counter-sections button {\n    font-size: 16px;\n  }\n}", "",{"version":3,"sources":["webpack://./lifeSection.scss"],"names":[],"mappings":"AACA;EAAgB,sBAAA;AAChB;;AAAA;EAAgB,sBAAA;AAIhB;;AAHA;EAAgB,wBAAA;AAOhB;;AANA;EAAgB,2BAAA;AAUhB;;AATA;EAAgB,sBAAA;AAahB;;AAZA;EAAgB,yBAAA;AAgBhB;;AAdA;EACE,eAAA;EACA,sBAAA;EACA,cAAA;EACA,cAAA;EACA,qBAAA;AAiBF;;AAfA;EACE;IACE,eAAA;IACA,sBAAA;IACA,eAAA;IACA,qBAAA;EAkBF;AACF;AAhBA;EACE,uBAAA;AAkBF;;AAhBA;EACE,qBAAA;AAmBF;;AAjBA;EACE,uBAAA;AAoBF;;AAlBA;EACE,qBAAA;AAqBF;;AAhBE;EACE,gBAAA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,SAAA;EACA,QAAA;EACA,aAAA;EACA,kBAAA;EACA,aAAA;AAmBJ;AAlBI;EACE,cAAA;AAoBN;AAhBE;EACE,eAAA;AAkBJ;AAhBE;EACE;IACE,eAAA;EAkBJ;AACF;AAhBE;EACE,eAAA;AAkBJ;AAhBE;EACE;IACE,eAAA;EAkBJ;AACF;AAhBE;EACE,mBAAA;EACA,2BAAA;EACA,6BAAA;EACA,yBAAA;EACA,eAAA;EACA,kBAAA;EACA,kBAAA;EACA,MAAA;EACA,YAAA;EACA,2BAAA;AAkBJ;AAhBI;EACE,QAAA;AAkBN;AAhBI;EACE,eAAA;EACA,kCAAA;EACA,WAAA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;AAkBN;AAfE;EACE;IACE,aAAA;EAiBJ;EAhBI;IACE,2BAAA;EAkBN;AACF;AAfE;EACE,WAAA;AAiBJ;AAfE;EACE;IACE,YAAA;IACA,YAAA;IACA,iBAAA;IACA,kBAAA;EAiBJ;AACF;AAfE;EACE,eAAA;EACA,gBAAA;EACA,cAAA;AAiBJ;AAfE;EACE;IACE,gBAAA;EAiBJ;AACF;AAfE;EACE,0BAAA;EACA,kBAAA;EACA,gBAAA;AAiBJ;AAfE;EACE,qBAAA;AAiBJ;AAfE;EACE,eAAA;AAiBJ;;AAbA;EACE,kBAAA;EACA,WAAA;EACA,YAAA;AAgBF;AAdE;EACE,kBAAA;EACA,WAAA;EACA,YAAA;AAgBJ;AAdE;EACE;;IAEE,YAAA;IACA,YAAA;EAgBJ;AACF;AAdE;EACE,WAAA;AAgBJ;AAdE;EACE,UAAA;EACA,aAAA;EACA,YAAA;EACA,WAAA;EACA,YAAA;AAgBJ;AAdE;EACE;IACE,YAAA;EAgBJ;AACF;AAdE;EACE,eAAA;EACA,eAAA;EACA,gBAAA;AAgBJ;AAdE;EACE;IACE,eAAA;EAgBJ;AACF","sourcesContent":["// Common\n.bg-aqua      { background-color: aqua; }\n.bg-pink      { background-color: pink; }\n.bg-yellow    { background-color: yellow; }\n.bg-goldenrod { background-color: goldenrod; }\n.bg-plum      { background-color: plum; }\n.bg-thistle   { background-color: thistle; }\n\nbutton {\n  font-size: 16px;\n  background-color: #fff;\n  margin: 0.15em;\n  padding: 0.5em;\n  border-radius: 0.25em;\n}\n@media (min-width: 768px) {\n  button {\n    font-size: 26px;\n    background-color: #fff;\n    padding: 0.75em;\n    border-radius: 0.25em;\n  }\n}\nbutton.up {\n  border: 1px solid green;\n}\nbutton.down {\n  border: 1px solid red;\n}\nbutton.up-big {\n  border: 3px solid green;\n}\nbutton.down-big {\n  border: 3px solid red;\n}\n\n// Specific\n.life-section {\n  .edit-name-form {\n    background: #000;\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    opacity: 0.95;\n    text-align: center;\n    z-index: 1000;\n    span {\n      color: #fdfdfd;\n    }\n  }\n  \n  .header-row {\n    font-size: 14px;\n  }\n  @media (min-width: 768px) {\n    .header-row {\n      font-size: 24px;\n    }\n  }\n  .header-row button {\n    font-size: 10px;\n  }\n  @media (min-width: 768px) {\n    .header-row button {\n      font-size: 20px;\n    }\n  }\n  .counter-area {\n    background: #efefef;\n    border-left: 1px solid #333;\n    border-bottom: 1px solid #333;\n    border-radius: 0 0 0 1rem;\n    font-size: 26px;\n    padding-left: 3rem;\n    position: absolute;\n    top: 0;\n    right: -95px;\n    transition: right 0.3s ease;\n  \n    &.active {\n      right: 0;\n    }\n    .counter-area-control-icon {\n      cursor: pointer;\n      padding: 0.3rem 0.3rem 2rem 0.6rem;\n      width: 42px;\n      position: absolute;\n      top: 0;\n      left: 0;\n    }\n  }\n  @media (min-width: 768px) {\n    .counter-area {\n      right: -167px;\n      .counter-area-control-icon {\n        padding: 0.6rem 0.6rem 2rem;\n      }\n    }\n  }\n  .counter-sections {\n    width: 95px;\n  }\n  @media (min-width: 768px) {\n    .counter-sections {\n      height: auto;\n      width: 155px;\n      max-height: 216px;\n      overflow-y: scroll;\n    }\n  }\n  .align-content {\n    cursor: pointer;\n    font-size: 124px;\n    line-height: 1.0;\n  }\n  @media (min-width: 768px) {\n    .align-content {\n      font-size: 158px;\n    }\n  }\n  .life-section {\n    transition: transform 0.3s;\n    position: relative;\n    overflow: hidden;\n  }\n  .double-col-row > section > span {\n    padding-right: 1.5rem;\n  }\n  .low-players .life-section button {\n    padding: 1.25em;\n  }\n}\n\n.counter-sections {\n  text-align: center;\n  width: 95px;\n  height: 40px;\n\n  .choose-color-section {\n    text-align: center;\n    width: 95px;\n    height: 40px;\n  }\n  @media (min-width: 768px) {\n    .counter-section,\n    .choose-color-section {\n      width: 155px;\n      height: 68px;\n    }\n  }\n  .counter-count {\n    width: 40px;\n  }\n  .color-chooser {\n    padding: 0;\n    margin: 0 2px;\n    height: 30px;\n    width: 50px;\n    border: none;\n  }\n  @media (min-width: 768px) {\n    .color-chooser {\n      height: 50px;\n    }\n  }\n  button {\n    font-size: 10px;\n    padding: 0.25em;\n    margin: 0 0.25em;\n  }\n  @media (min-width: 768px) {\n    button {\n      font-size: 16px;\n    }\n  }\n}\n\n\n\n\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[4]!./src/components/page_roots/LifetrackerPage/LifetrackerMenu/lifetrackerMenu.scss":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[4]!./src/components/page_roots/LifetrackerPage/LifetrackerMenu/lifetrackerMenu.scss ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".life-tracker-menu {\n  display: flex;\n  flex-direction: column;\n  margin: 0.5rem;\n  color: #fff;\n}\n@media (min-width: 768px) {\n  .life-tracker-menu {\n    font-size: 18px;\n  }\n}\n.life-tracker-menu fieldset {\n  padding: 0;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\n.life-tracker-menu fieldset label {\n  padding: 0.25rem 0;\n  text-align: right;\n  width: 55px;\n}\n.life-tracker-menu fieldset .input-container {\n  flex: 1 0 auto;\n  margin-left: 1rem;\n}\n.life-tracker-menu button {\n  padding: 0.2rem;\n  background-color: transparent;\n  border: none;\n  font-size: 12px;\n}\n@media (min-width: 768px) {\n  .life-tracker-menu button {\n    padding: 0.5rem;\n  }\n}", "",{"version":3,"sources":["webpack://./lifetrackerMenu.scss"],"names":[],"mappings":"AAAA;EACE,aAAA;EACA,sBAAA;EACA,cAAA;EACA,WAAA;AACF;AACE;EANF;IAOI,eAAA;EAEF;AACF;AAAE;EACE,UAAA;EACA,aAAA;EACA,mBAAA;EACA,yBAAA;AAEJ;AAAI;EACE,kBAAA;EACA,iBAAA;EACA,WAAA;AAEN;AACI;EACE,cAAA;EACA,iBAAA;AACN;AAGE;EACE,eAAA;EACA,6BAAA;EACA,YAAA;EACA,eAAA;AADJ;AAIE;EACE;IACE,eAAA;EAFJ;AACF","sourcesContent":[".life-tracker-menu {\n  display: flex;\n  flex-direction: column;\n  margin: .5rem;\n  color: #fff;\n\n  @media (min-width: 768px) {\n    font-size: 18px;\n  }\n\n  fieldset {\n    padding: 0;\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n\n    label {\n      padding: 0.25rem 0;\n      text-align: right;\n      width: 55px;\n    }\n  \n    .input-container {\n      flex: 1 0 auto;\n      margin-left: 1rem;\n    }\n  }\n\n  button {\n    padding: 0.2rem; \n    background-color: transparent;\n    border: none;\n    font-size: 12px;\n  }\n\n  @media (min-width: 768px) {\n    button {\n      padding: 0.5rem;\n    }\n  }\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[4]!./src/components/page_roots/LifetrackerPage/lifetrackerPage.scss":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[4]!./src/components/page_roots/LifetrackerPage/lifetrackerPage.scss ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".life-tracker-wrapper {\n  width: 100%;\n  height: 100%;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr;\n  grid-auto-columns: 1fr;\n  grid-auto-rows: 1fr;\n}\n\nsection.life-section {\n  color: #000;\n  border: 1px solid #fff;\n}\nsection.life-section.low-players {\n  grid-column: 1/span 2;\n}\nsection.life-section:nth-child(1) {\n  background-color: aqua;\n}\nsection.life-section:nth-child(2) {\n  background-color: pink;\n}\nsection.life-section:nth-child(3) {\n  background-color: yellow;\n}\nsection.life-section:nth-child(4) {\n  background-color: goldenrod;\n}\nsection.life-section:nth-child(5) {\n  background-color: plum;\n}\nsection.life-section:nth-child(6) {\n  background-color: thistle;\n}\n\n.layout-wrap {\n  height: 100%;\n  position: relative;\n}\n\n.centered {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.centered-vert {\n  display: flex;\n  align-items: center;\n}\n\n.full-height-layout {\n  display: flex;\n  flex-flow: column;\n  height: 100%;\n}\n\n.full-height-layout .align-row.align-content {\n  flex: 1 1 auto;\n}\n\n.double-col-row {\n  display: flex;\n}\n.double-col-row > section {\n  flex-grow: 1;\n}\n.double-col-row > section:nth-child(2) {\n  text-align: right;\n}\n\n.flip {\n  transform: rotate(180deg);\n}", "",{"version":3,"sources":["webpack://./lifetrackerPage.scss"],"names":[],"mappings":"AAAA;EACE,WAAA;EACA,YAAA;EACA,aAAA;EACA,8BAAA;EACA,uBAAA;EACA,sBAAA;EACA,mBAAA;AACF;;AAEA;EACE,WAAA;EACA,sBAAA;AACF;AAAE;EACE,qBAAA;AAEJ;AAAE;EACE,sBAAA;AAEJ;AAAE;EACE,sBAAA;AAEJ;AAAE;EACE,wBAAA;AAEJ;AAAE;EACE,2BAAA;AAEJ;AAAE;EACE,sBAAA;AAEJ;AAAE;EACE,yBAAA;AAEJ;;AAGA;EACE,YAAA;EACA,kBAAA;AAAF;;AAEA;EACE,aAAA;EACA,mBAAA;EACA,uBAAA;AACF;;AACA;EACE,aAAA;EACA,mBAAA;AAEF;;AAAA;EACE,aAAA;EACA,iBAAA;EACA,YAAA;AAGF;;AAAA;EACE,cAAA;AAGF;;AAAA;EACE,aAAA;AAGF;AAFE;EACE,YAAA;AAIJ;AAHI;EACE,iBAAA;AAKN;;AADA;EACE,yBAAA;AAIF","sourcesContent":[".life-tracker-wrapper {\n  width: 100%;\n  height: 100%;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr;\n  grid-auto-columns: 1fr;\n  grid-auto-rows: 1fr;\n}\n\nsection.life-section {\n  color: #000;\n  border: 1px solid #fff;\n  &.low-players {\n    grid-column: 1 / span 2;\n  }\n  &:nth-child(1) {\n    background-color: aqua;\n  }\n  &:nth-child(2) {\n    background-color: pink;\n  }\n  &:nth-child(3) {\n    background-color: yellow;\n  }\n  &:nth-child(4) {\n    background-color: goldenrod;\n  }\n  &:nth-child(5) {\n    background-color: plum;\n  }\n  &:nth-child(6) {\n    background-color: thistle;\n  }\n}\n\n// lifetracker layout classes\n.layout-wrap {\n  height: 100%;\n  position: relative;\n}\n.centered {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.centered-vert {\n  display: flex;\n  align-items: center;\n}\n.full-height-layout {\n  display: flex;\n  flex-flow: column;\n  height: 100%;\n}\n\n.full-height-layout .align-row.align-content {\n  flex: 1 1 auto;\n}\n\n.double-col-row {\n  display: flex;\n  > section {\n    flex-grow: 1;\n    &:nth-child(2) {\n      text-align: right;\n    }\n  }\n}\n.flip {\n  transform: rotate(180deg);\n}"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "/*! normalize.css v3.0.1 | MIT License | git.io/normalize */\n/**\n * 1. Set default font family to sans-serif.\n * 2. Prevent iOS text size adjust after orientation change, without disabling\n *    user zoom.\n */\nhtml {\n  -ms-text-size-adjust: 100%;\n  /* 2 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */\n}\n\n/**\n * Remove default margin.\n */\nbody {\n  margin: 0;\n}\n\n/* HTML5 display definitions\n   ========================================================================== */\n/**\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\n * Correct `block` display not defined for `details` or `summary` in IE 10/11 and Firefox.\n * Correct `block` display not defined for `main` in IE 11.\n */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nnav,\nsection,\nsummary {\n  display: block;\n}\n\n/**\n * 1. Correct `inline-block` display not defined in IE 8/9.\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\n */\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  /* 1 */\n  vertical-align: baseline;\n  /* 2 */\n}\n\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Address `[hidden]` styling not present in IE 8/9/10.\n * Hide the `template` element in IE 8/9/11, Safari, and Firefox < 22.\n */\n[hidden],\ntemplate {\n  display: none;\n}\n\n/* Links\n   ========================================================================== */\n/**\n * Remove the gray background color from active links in IE 10.\n */\na {\n  background: transparent;\n}\n\n/**\n * Improve readability when focused and also mouse hovered in all browsers.\n */\na:active,\na:hover {\n  outline: 0;\n}\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\n */\nabbr[title] {\n  border-bottom: 1px dotted;\n}\n\n/**\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\n */\nb,\nstrong {\n  font-weight: bold;\n}\n\n/**\n * Address styling not present in Safari and Chrome.\n */\ndfn {\n  font-style: italic;\n}\n\n/**\n * Address styling not present in IE 8/9.\n */\nmark {\n  background: #ff0;\n  color: #000;\n}\n\n/**\n * Address inconsistent and variable font size in all browsers.\n */\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsup {\n  top: -0.5em;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove border when inside `a` element in IE 8/9/10.\n */\nimg {\n  border: 0;\n}\n\n/**\n * Correct overflow not hidden in IE 9/10/11.\n */\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Grouping content\n   ========================================================================== */\n/**\n * Address margin not present in IE 8/9 and Safari.\n */\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * Address differences between Firefox and other browsers.\n */\nhr {\n  box-sizing: content-box;\n  height: 0;\n}\n\n/**\n * Contain overflow in all browsers.\n */\npre {\n  overflow: auto;\n}\n\n/**\n * Address odd `em`-unit font size rendering in all browsers.\n */\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\n\n/* forms\n   ========================================================================== */\n/**\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\n * styling of `select`, unless a `border` property is set.\n */\n/**\n * 1. Correct color not being inherited.\n *    Known issue: affects color of disabled elements.\n * 2. Correct font properties not being inherited.\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\n */\ninput,\noptgroup,\ntextarea {\n  color: inherit;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n  margin: 0;\n  /* 3 */\n}\n\nselect {\n  margin: 0;\n}\n\n/**\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\n */\nbutton {\n  overflow: visible;\n}\n\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\n * Correct `select` style inheritance in Firefox.\n */\nbutton,\nselect {\n  text-transform: none;\n}\n\n/**\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n *    and `video` controls.\n * 2. Correct inability to style clickable `input` types in iOS.\n * 3. Improve usability and consistency of cursor style between image-type\n *    `input` and others.\n */\nbutton,\nhtml input[type=button],\ninput[type=reset],\ninput[type=submit] {\n  -webkit-appearance: button;\n  /* 2 */\n  cursor: pointer;\n  /* 3 */\n}\n\n/**\n * Re-set default cursor for disabled elements.\n */\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\n\n/**\n * Remove inner padding and border in Firefox 4+.\n */\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n/**\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\ninput {\n  line-height: normal;\n}\n\n/**\n * It's recommended that you don't attempt to style these elements.\n * Firefox's implementation doesn't respect box-sizing, padding, or width.\n *\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\n * 2. Remove excess padding in IE 8/9/10.\n */\ninput[type=checkbox],\ninput[type=radio] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */\n}\n\n/**\n * Fix the cursor style for Chrome's increment/decrement buttons. For certain\n * `font-size` values of the `input`, it causes the cursor style of the\n * decrement button to change from `default` to `text`.\n */\ninput[type=number]::-webkit-inner-spin-button,\ninput[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\n * 2. Address `box-sizing` set to `border-box` in Safari and Chrome\n *    (include `-moz` to future-proof).\n */\ninput[type=search] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  /* 2 */\n  box-sizing: content-box;\n}\n\n/**\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\n * Safari (but not Chrome) clips the cancel button when the search input has\n * padding (and `textfield` appearance).\n */\ninput[type=search]::-webkit-search-cancel-button,\ninput[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * Define consistent border, margin, and padding.\n */\nfieldset {\n  border: none;\n  margin: 0;\n  padding: 0.5em;\n}\n\n/**\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\n */\nlegend {\n  border: 0;\n  /* 1 */\n  padding: 0;\n  /* 2 */\n}\n\n/**\n * Remove default vertical scrollbar in IE 8/9/10/11.\n */\ntextarea {\n  overflow: auto;\n}\n\n/**\n * Don't inherit the `font-weight` (applied by a rule above).\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\n */\noptgroup {\n  font-weight: bold;\n}\n\nhtml {\n  box-sizing: border-box;\n}\n\n*, *:before, *:after {\n  box-sizing: inherit;\n}\n\nhtml, body {\n  color: #222;\n  height: 100%;\n}\n\na {\n  color: #fff;\n  text-decoration: none;\n  transition: all 0.3s ease-in-out;\n}\n\nh1, h2, h3, h4, h5, h6, p, dl, ol, table {\n  margin-top: 0;\n  margin-bottom: 0.5em;\n}\n\ndd {\n  margin-left: 0;\n}\n\nul, li {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n\nimg {\n  max-width: 100%;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n  width: 100%;\n}\n\nthead tr {\n  font-family: sans-serif;\n}\n\ntd,\nth {\n  padding: 0.5em 0.25em;\n  border: 1px solid #ccc;\n  position: relative;\n  text-align: left;\n  vertical-align: top;\n  word-wrap: break-word;\n}\n\ninput[type=checkbox] {\n  width: auto;\n  transition: box-shadow 0.3s ease-in-out;\n  outline: none;\n  padding: 3px 0px 3px 3px;\n  margin: 5px 1px 3px 0px;\n  border: 1px solid #DDDDDD;\n}\ninput[type=checkbox]:focus {\n  box-shadow: 0 0 5px #51cbee;\n}\n\nbody, html {\n  font-size: 16px;\n  font-family: sans-serif;\n}\n\nb, strong, .embolden {\n  font-family: sans-serif;\n}\n\n.italicize {\n  font-family: sans-serif;\n}\n\nem {\n  font-family: sans-serif;\n}\n\nb em, em b, strong em, em strong {\n  font-family: sans-serif;\n}\n\n.text-tiny {\n  font-size: 10.4px;\n}\n\n.text-small,\ntable {\n  font-size: 12px;\n}\n\n.text-normal,\np {\n  font-size: 14px;\n}\n\n.text-medlg,\nh6,\nh5 {\n  font-size: 16px;\n}\n\n.text-large,\nh4,\nh3,\nh1 {\n  font-size: 18px;\n}\n\n.text-largemed {\n  font-size: 20px;\n}\n\n.text-extralg,\nh2 {\n  font-size: 24px;\n}\n\n.text-verylarge {\n  font-size: 32px;\n}\n\n.text-superlarge {\n  font-size: 36px;\n}\n\nh1, h2, h3, h4, h5, h6 {\n  margin-top: 0;\n  font-family: sans-serif;\n}\n\n.align-right {\n  text-align: right;\n}\n\n.align-center {\n  text-align: center;\n}\n\n.align-left {\n  text-align: left;\n}\n\n.align-middle {\n  vertical-align: middle;\n}\n\n.float-left {\n  float: left;\n}\n\n.float-right {\n  float: right;\n}\n\n.floated-links {\n  float: right;\n  padding: 0.25em;\n}\n\n.floated-links > a {\n  margin-left: 1em;\n}\n\n.full-results td ul {\n  padding-left: 1.3em;\n}\n\n.full-results td li {\n  list-style-type: disc;\n}\n\n.display-block {\n  display: block;\n}\n\n.bottom-space-small {\n  padding-bottom: 0.5em;\n}\n\n.bottom-space-large {\n  padding-bottom: 2em;\n}\n\n.indented {\n  margin-left: 20px;\n}\n\n.selected {\n  background-color: pink !important;\n}\n\n.pad-right {\n  padding-right: 0.25em;\n}\n\n.pad-left {\n  padding-left: 0.25em;\n}\n\n.vertical-align-container {\n  display: flex;\n  align-items: center;\n}\n\n.hidden {\n  position: absolute !important;\n  top: -9999px !important;\n  left: -9999px !important;\n}\n\n.invisible {\n  visibility: hidden;\n}\n\n.slide {\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  transition: max-height 300ms;\n}\n\n.slide-hide {\n  max-height: 0;\n}\n\n.slide-show {\n  max-height: 80em;\n}\n\n.shadow {\n  box-shadow: 2px 2px 1px 0px rgba(121, 121, 121, 0.65);\n}\n\n.error {\n  border: 1px solid red;\n}\n\n.preserve-space {\n  white-space: pre-line;\n}\n\n.no-wrap {\n  white-space: nowrap;\n}\n\n.strike {\n  text-decoration: line-through;\n}\n\n.tag-spacer {\n  padding: 75px;\n}\n\n.inline-spacer {\n  padding: 0 0.5em;\n}\n\n.hand {\n  cursor: pointer;\n}\n\n.move {\n  cursor: move;\n}\n\n.full-width {\n  width: 100%;\n}\n\n.truncate {\n  max-height: 9em;\n  overflow-y: auto;\n  display: block;\n}\n\n.extra-spacing {\n  padding: 2em;\n}\n\n.prewrap {\n  white-space: pre-wrap;\n}\n\n:invalid {\n  box-shadow: none;\n}\n\n:-moz-submit-invalid {\n  box-shadow: none;\n}\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n.close {\n  cursor: pointer;\n}\n\n/* ==========================================================================\n   Print styles.\n   Based on HTML5-bolerplate print styles\n   ========================================================================== */\n@media print {\n  *,\n*:before,\n*:after,\np:first-letter,\ndiv:first-letter,\nblockquote:first-letter,\nli:first-letter,\np:first-line,\ndiv:first-line,\nblockquote:first-line,\nli:first-line {\n    background-color: transparent;\n    color: #000 !important;\n    /* Black prints faster:\n       http://www.sanbeiji.com/archives/953 */\n    box-shadow: none !important;\n    text-shadow: none !important;\n  }\n\n  pre {\n    white-space: pre-wrap !important;\n  }\n\n  pre,\nblockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid;\n  }\n\n  /*\n   * Printing Tables:\n   * http://css-discuss.incutio.com/wiki/Printing_Tables\n   */\n  thead {\n    display: table-header-group;\n  }\n\n  thead tr {\n    font-weight: bold;\n  }\n\n  tr,\nimg {\n    page-break-inside: avoid;\n  }\n\n  p,\nh2,\nh3 {\n    orphans: 3;\n    widows: 3;\n  }\n\n  h2,\nh3 {\n    page-break-after: avoid;\n  }\n\n  .noprint {\n    display: none !important;\n  }\n}", "",{"version":3,"sources":["webpack://./base/_normalize.scss","webpack://./main.scss","webpack://./base/_settings.scss","webpack://./base/_base.scss","webpack://./base/_typography.scss","webpack://./state/_state.scss","webpack://./base/_mixins.scss","webpack://./base/_print.scss"],"names":[],"mappings":"AAAA,2DAAA;AAEA;;;;EAAA;AAMA;EACE,0BAAA;EAA4B,MAAA;EAC5B,8BAAA;EAAgC,MAAA;ACClC;;ADEA;;EAAA;AAIA;EACE,SAAA;ACAF;;ADGA;+EAAA;AAGA;;;;EAAA;AAMA;;;;;;;;;;;;EAYE,cAAA;ACFF;;ADKA;;;EAAA;AAKA;;;;EAIE,qBAAA;EAAuB,MAAA;EACvB,wBAAA;EAA0B,MAAA;ACD5B;;ADIA;;;EAAA;AAKA;EACE,aAAA;EACA,SAAA;ACFF;;ADKA;;;EAAA;AAKA;;EAEE,aAAA;ACHF;;ADMA;+EAAA;AAGA;;EAAA;AAIA;EACE,uBAAA;ACLF;;ADQA;;EAAA;AAIA;;EAEE,UAAA;ACNF;;ADSA;+EAAA;AAGA;;EAAA;AAIA;EACE,yBAAA;ACRF;;ADWA;;EAAA;AAIA;;EAEE,iBAAA;ACTF;;ADYA;;EAAA;AAIA;EACE,kBAAA;ACVF;;ADaA;;EAAA;AAIA;EACE,gBAAA;EACA,WAAA;ACXF;;ADcA;;EAAA;AAIA;EACE,cAAA;ACZF;;ADeA;;EAAA;AAIA;;EAEE,cAAA;EACA,cAAA;EACA,kBAAA;EACA,wBAAA;ACbF;;ADgBA;EACE,WAAA;ACbF;;ADgBA;EACE,eAAA;ACbF;;ADgBA;+EAAA;AAGA;;EAAA;AAIA;EACE,SAAA;ACfF;;ADkBA;;EAAA;AAIA;EACE,gBAAA;AChBF;;ADmBA;+EAAA;AAGA;;EAAA;AAIA;EACE,gBAAA;AClBF;;ADqBA;;EAAA;AAIA;EAEE,uBAAA;EACA,SAAA;ACnBF;;ADsBA;;EAAA;AAIA;EACE,cAAA;ACpBF;;ADuBA;;EAAA;AAIA;;;;EAIE,iCAAA;EACA,cAAA;ACrBF;;ADwBA;+EAAA;AAGA;;;EAAA;AAKA;;;;;EAAA;AAOA;;;EAGE,cAAA;EAAgB,MAAA;EAChB,aAAA;EAAe,MAAA;EACf,SAAA;EAAW,MAAA;ACrBb;;ADwBA;EACE,SAAA;ACrBF;;ADyBA;;EAAA;AAIA;EACE,iBAAA;ACvBF;;AD0BA;;;;;EAAA;AAOA;;EAEE,oBAAA;ACxBF;;AD2BA;;;;;;EAAA;AAQA;;;;EAIE,0BAAA;EAA4B,MAAA;EAC5B,eAAA;EAAiB,MAAA;ACvBnB;;AD0BA;;EAAA;AAIA;;EAEE,eAAA;ACxBF;;AD2BA;;EAAA;AAIA;;EAEE,SAAA;EACA,UAAA;ACzBF;;AD4BA;;;EAAA;AAKA;EACE,mBAAA;AC1BF;;AD6BA;;;;;;EAAA;AAQA;;EAEE,sBAAA;EAAwB,MAAA;EACxB,UAAA;EAAY,MAAA;ACzBd;;AD4BA;;;;EAAA;AAMA;;EAEE,YAAA;AC1BF;;AD6BA;;;;EAAA;AAMA;EACE,6BAAA;EAA+B,MAAA;EAEE,MAAA;EACjC,uBAAA;ACzBF;;AD4BA;;;;EAAA;AAMA;;EAEE,wBAAA;AC1BF;;AD6BA;;EAAA;AAIA;EACE,YAAA;EACA,SAAA;EACA,cExSe;AD6QjB;;AD8BA;;;EAAA;AAKA;EACE,SAAA;EAAW,MAAA;EACX,UAAA;EAAY,MAAA;AC1Bd;;AD6BA;;EAAA;AAIA;EACE,cAAA;AC3BF;;AD8BA;;;EAAA;AAKA;EACE,iBAAA;AC5BF;;AE/WA;EACE,sBAAA;AFkXF;;AEhXA;EACE,mBAAA;AFmXF;;AEhXA;EACE,WDoBY;ECnBZ,YAAA;AFmXF;;AEhXA;EACE,WDgBY;ECfZ,qBAAA;EACA,gCDFiB;ADqXnB;;AE9WA;EACE,aAAA;EACA,oBDkDe;AD+TjB;;AE9WA;EACE,cAAA;AFiXF;;AE7WA;EACE,qBAAA;EACA,SAAA;EACA,UAAA;AFgXF;;AE7WA;EACE,eAAA;AFgXF;;AE7WA;EAEE,yBAAA;EACA,iBAAA;EACA,WAAA;AF+WF;;AE5WA;EACE,uBD6BsB;ADkVxB;;AE5WA;;EAEE,qBAAA;EACA,sBAAA;EACA,kBAAA;EACA,gBAAA;EACA,mBAAA;EACA,qBAAA;AF+WF;;AE5WA;EACE,WAAA;EACA,uCAAA;EACA,aAAA;EACA,wBAAA;EACA,uBAAA;EACA,yBAAA;AF+WF;AE7WE;EACE,2BAAA;AF+WJ;;AGvbA;EACE,eFkFe;EEjFf,uBF4EiB;AD8WnB;;AGxbA;EACE,uBF0EsB;ADiXxB;;AGzbA;EACE,uBFwEwB;ADoX1B;;AG1bA;EACE,uBFmEiB;AD0XnB;;AG3bA;EACE,uBFmE6B;AD2X/B;;AGzbA;EAEE,iBAAA;AH2bF;;AGzbA;;EAEE,eAAA;AH4bF;;AG1bA;;EAEE,eFuDkB;ADsYpB;;AG3bA;;;EAEE,eFkDe;AD6YjB;;AG7bA;;;;EAEE,eAAA;AHkcF;;AGhcA;EAEE,eAAA;AHkcF;;AGhcA;;EAEE,eAAA;AHmcF;;AGjcA;EAEE,eAAA;AHmcF;;AGjcA;EAEE,eAAA;AHmcF;;AG/bA;EACE,aAAA;EACA,uBFoBsB;AD8axB;;AI5fA;EACE,iBAAA;AJ+fF;;AI5fA;EACE,kBAAA;AJ+fF;;AI5fA;EACE,gBAAA;AJ+fF;;AI5fA;EACE,sBAAA;AJ+fF;;AI5fA;EACE,WAAA;AJ+fF;;AI5fA;EACE,YAAA;AJ+fF;;AI5fA;EACE,YAAA;EACA,eHgDkB;AD+cpB;;AI5fA;EACE,gBH0CU;ADqdZ;;AI5fA;EACE,mBAAA;AJ+fF;;AI5fA;EACE,qBAAA;AJ+fF;;AI5fA;EACE,cAAA;AJ+fF;;AI5fA;EACE,qBH2Be;ADoejB;;AI5fA;EACE,mBAAA;AJ+fF;;AI5fA;EACE,iBAAA;AJ+fF;;AI5fA;EACE,iCAAA;AJ+fF;;AI5fA;EACE,qBHYkB;ADmfpB;;AI5fA;EACE,oBHQkB;ADufpB;;AI5fA;EACE,aAAA;EACA,mBAAA;AJ+fF;;AI5fA;EACE,6BAAA;EACA,uBAAA;EACA,wBAAA;AJ+fF;;AI5fA;EACE,kBAAA;AJ+fF;;AI5fA;EACE,SAAA;EACA,UAAA;EACA,gBAAA;EACA,4BAAA;AJ+fF;;AI5fA;EACE,aAAA;AJ+fF;;AI5fA;EACE,gBAAA;AJ+fF;;AI5fA;EClGE,qDAAA;ALomBF;;AI9fA;EACE,qBAAA;AJigBF;;AI9fA;EACE,qBAAA;AJigBF;;AI9fA;EACE,mBAAA;AJigBF;;AI9fA;EACE,6BAAA;AJigBF;;AI9fA;EACE,aAAA;AJigBF;;AI9fA;EACE,gBAAA;AJigBF;;AI9fA;EACE,eAAA;AJigBF;;AI9fA;EACE,YAAA;AJigBF;;AI9fA;EACE,WAAA;AJigBF;;AI9fA;EACE,eAAA;EACA,gBAAA;EACA,cAAA;AJigBF;;AI9fA;EACE,YAAA;AJigBF;;AI9fA;EACE,qBAAA;AJigBF;;AI7fA;EACE,gBAAA;AJggBF;;AI7fA;EACE,gBAAA;AJggBF;;AI7fA;EACE,gBAAA;AJggBF;;AI7fA;EACE,eAAA;AJggBF;;AMzqBA;;;+EAAA;AAIA;EACE;;;;;;;;;;;IAWE,6BAAA;IACA,sBAAA;IAAwB;6CAAA;IAExB,2BAAA;IACA,4BAAA;EN6qBF;;EM1qBA;IACE,gCAAA;EN6qBF;;EM3qBA;;IAEE,sBAAA;IACA,wBAAA;EN8qBF;;EM3qBA;;;IAAA;EAIA;IACE,2BAAA;EN8qBF;;EM3qBA;IACE,iBAAA;EN8qBF;;EM3qBA;;IAEE,wBAAA;EN8qBF;;EM3qBA;;;IAGE,UAAA;IACA,SAAA;EN8qBF;;EM3qBA;;IAEE,uBAAA;EN8qBF;;EM5qBA;IACE,wBAAA;EN+qBF;AACF","sourcesContent":["/*! normalize.css v3.0.1 | MIT License | git.io/normalize */\n\n/**\n * 1. Set default font family to sans-serif.\n * 2. Prevent iOS text size adjust after orientation change, without disabling\n *    user zoom.\n */\n\nhtml {\n  -ms-text-size-adjust: 100%; /* 2 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/**\n * Remove default margin.\n */\n\nbody {\n  margin: 0;\n}\n\n/* HTML5 display definitions\n   ========================================================================== */\n\n/**\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\n * Correct `block` display not defined for `details` or `summary` in IE 10/11 and Firefox.\n * Correct `block` display not defined for `main` in IE 11.\n */\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nnav,\nsection,\nsummary {\n  display: block;\n}\n\n/**\n * 1. Correct `inline-block` display not defined in IE 8/9.\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\n */\n\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block; /* 1 */\n  vertical-align: baseline; /* 2 */\n}\n\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Address `[hidden]` styling not present in IE 8/9/10.\n * Hide the `template` element in IE 8/9/11, Safari, and Firefox < 22.\n */\n\n[hidden],\ntemplate {\n  display: none;\n}\n\n/* Links\n   ========================================================================== */\n\n/**\n * Remove the gray background color from active links in IE 10.\n */\n\na {\n  background: transparent;\n}\n\n/**\n * Improve readability when focused and also mouse hovered in all browsers.\n */\n\na:active,\na:hover {\n  outline: 0;\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\n */\n\nabbr[title] {\n  border-bottom: 1px dotted;\n}\n\n/**\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\n */\n\nb,\nstrong {\n  font-weight: bold;\n}\n\n/**\n * Address styling not present in Safari and Chrome.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Address styling not present in IE 8/9.\n */\n\nmark {\n  background: #ff0;\n  color: #000;\n}\n\n/**\n * Address inconsistent and variable font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsup {\n  top: -0.5em;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove border when inside `a` element in IE 8/9/10.\n */\n\nimg {\n  border: 0;\n}\n\n/**\n * Correct overflow not hidden in IE 9/10/11.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * Address margin not present in IE 8/9 and Safari.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * Address differences between Firefox and other browsers.\n */\n\nhr {\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n  height: 0;\n}\n\n/**\n * Contain overflow in all browsers.\n */\n\npre {\n  overflow: auto;\n}\n\n/**\n * Address odd `em`-unit font size rendering in all browsers.\n */\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\n\n/* forms\n   ========================================================================== */\n\n/**\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\n * styling of `select`, unless a `border` property is set.\n */\n\n/**\n * 1. Correct color not being inherited.\n *    Known issue: affects color of disabled elements.\n * 2. Correct font properties not being inherited.\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\n */\n\ninput,\noptgroup,\ntextarea {\n  color: inherit; /* 1 */\n  font: inherit; /* 2 */\n  margin: 0; /* 3 */\n}\n\nselect {\n  margin: 0;\n}\n\n\n/**\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\n */\n\nbutton {\n  overflow: visible;\n}\n\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\n * Correct `select` style inheritance in Firefox.\n */\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/**\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n *    and `video` controls.\n * 2. Correct inability to style clickable `input` types in iOS.\n * 3. Improve usability and consistency of cursor style between image-type\n *    `input` and others.\n */\n\nbutton,\nhtml input[type=\"button\"], /* 1 */\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n  cursor: pointer; /* 3 */\n}\n\n/**\n * Re-set default cursor for disabled elements.\n */\n\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\n\n/**\n * Remove inner padding and border in Firefox 4+.\n */\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n/**\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\n\ninput {\n  line-height: normal;\n}\n\n/**\n * It's recommended that you don't attempt to style these elements.\n * Firefox's implementation doesn't respect box-sizing, padding, or width.\n *\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\n * 2. Remove excess padding in IE 8/9/10.\n */\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Fix the cursor style for Chrome's increment/decrement buttons. For certain\n * `font-size` values of the `input`, it causes the cursor style of the\n * decrement button to change from `default` to `text`.\n */\n\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\n * 2. Address `box-sizing` set to `border-box` in Safari and Chrome\n *    (include `-moz` to future-proof).\n */\n\ninput[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  -moz-box-sizing: content-box;\n  -webkit-box-sizing: content-box; /* 2 */\n  box-sizing: content-box;\n}\n\n/**\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\n * Safari (but not Chrome) clips the cancel button when the search input has\n * padding (and `textfield` appearance).\n */\n\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * Define consistent border, margin, and padding.\n */\n\nfieldset {\n  border: none;\n  margin: 0;\n  padding: $base-unit-half;\n}\n\n/**\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\n */\n\nlegend {\n  border: 0; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Remove default vertical scrollbar in IE 8/9/10/11.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * Don't inherit the `font-weight` (applied by a rule above).\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\n */\n\noptgroup {\n  font-weight: bold;\n}\n","/*! normalize.css v3.0.1 | MIT License | git.io/normalize */\n/**\n * 1. Set default font family to sans-serif.\n * 2. Prevent iOS text size adjust after orientation change, without disabling\n *    user zoom.\n */\nhtml {\n  -ms-text-size-adjust: 100%;\n  /* 2 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */\n}\n\n/**\n * Remove default margin.\n */\nbody {\n  margin: 0;\n}\n\n/* HTML5 display definitions\n   ========================================================================== */\n/**\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\n * Correct `block` display not defined for `details` or `summary` in IE 10/11 and Firefox.\n * Correct `block` display not defined for `main` in IE 11.\n */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nnav,\nsection,\nsummary {\n  display: block;\n}\n\n/**\n * 1. Correct `inline-block` display not defined in IE 8/9.\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\n */\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  /* 1 */\n  vertical-align: baseline;\n  /* 2 */\n}\n\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Address `[hidden]` styling not present in IE 8/9/10.\n * Hide the `template` element in IE 8/9/11, Safari, and Firefox < 22.\n */\n[hidden],\ntemplate {\n  display: none;\n}\n\n/* Links\n   ========================================================================== */\n/**\n * Remove the gray background color from active links in IE 10.\n */\na {\n  background: transparent;\n}\n\n/**\n * Improve readability when focused and also mouse hovered in all browsers.\n */\na:active,\na:hover {\n  outline: 0;\n}\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\n */\nabbr[title] {\n  border-bottom: 1px dotted;\n}\n\n/**\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\n */\nb,\nstrong {\n  font-weight: bold;\n}\n\n/**\n * Address styling not present in Safari and Chrome.\n */\ndfn {\n  font-style: italic;\n}\n\n/**\n * Address styling not present in IE 8/9.\n */\nmark {\n  background: #ff0;\n  color: #000;\n}\n\n/**\n * Address inconsistent and variable font size in all browsers.\n */\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsup {\n  top: -0.5em;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove border when inside `a` element in IE 8/9/10.\n */\nimg {\n  border: 0;\n}\n\n/**\n * Correct overflow not hidden in IE 9/10/11.\n */\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Grouping content\n   ========================================================================== */\n/**\n * Address margin not present in IE 8/9 and Safari.\n */\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * Address differences between Firefox and other browsers.\n */\nhr {\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n  height: 0;\n}\n\n/**\n * Contain overflow in all browsers.\n */\npre {\n  overflow: auto;\n}\n\n/**\n * Address odd `em`-unit font size rendering in all browsers.\n */\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\n\n/* forms\n   ========================================================================== */\n/**\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\n * styling of `select`, unless a `border` property is set.\n */\n/**\n * 1. Correct color not being inherited.\n *    Known issue: affects color of disabled elements.\n * 2. Correct font properties not being inherited.\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\n */\ninput,\noptgroup,\ntextarea {\n  color: inherit;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n  margin: 0;\n  /* 3 */\n}\n\nselect {\n  margin: 0;\n}\n\n/**\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\n */\nbutton {\n  overflow: visible;\n}\n\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\n * Correct `select` style inheritance in Firefox.\n */\nbutton,\nselect {\n  text-transform: none;\n}\n\n/**\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n *    and `video` controls.\n * 2. Correct inability to style clickable `input` types in iOS.\n * 3. Improve usability and consistency of cursor style between image-type\n *    `input` and others.\n */\nbutton,\nhtml input[type=button],\ninput[type=reset],\ninput[type=submit] {\n  -webkit-appearance: button;\n  /* 2 */\n  cursor: pointer;\n  /* 3 */\n}\n\n/**\n * Re-set default cursor for disabled elements.\n */\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\n\n/**\n * Remove inner padding and border in Firefox 4+.\n */\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n/**\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\ninput {\n  line-height: normal;\n}\n\n/**\n * It's recommended that you don't attempt to style these elements.\n * Firefox's implementation doesn't respect box-sizing, padding, or width.\n *\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\n * 2. Remove excess padding in IE 8/9/10.\n */\ninput[type=checkbox],\ninput[type=radio] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */\n}\n\n/**\n * Fix the cursor style for Chrome's increment/decrement buttons. For certain\n * `font-size` values of the `input`, it causes the cursor style of the\n * decrement button to change from `default` to `text`.\n */\ninput[type=number]::-webkit-inner-spin-button,\ninput[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\n * 2. Address `box-sizing` set to `border-box` in Safari and Chrome\n *    (include `-moz` to future-proof).\n */\ninput[type=search] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  -moz-box-sizing: content-box;\n  -webkit-box-sizing: content-box;\n  /* 2 */\n  box-sizing: content-box;\n}\n\n/**\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\n * Safari (but not Chrome) clips the cancel button when the search input has\n * padding (and `textfield` appearance).\n */\ninput[type=search]::-webkit-search-cancel-button,\ninput[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * Define consistent border, margin, and padding.\n */\nfieldset {\n  border: none;\n  margin: 0;\n  padding: 0.5em;\n}\n\n/**\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\n */\nlegend {\n  border: 0;\n  /* 1 */\n  padding: 0;\n  /* 2 */\n}\n\n/**\n * Remove default vertical scrollbar in IE 8/9/10/11.\n */\ntextarea {\n  overflow: auto;\n}\n\n/**\n * Don't inherit the `font-weight` (applied by a rule above).\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\n */\noptgroup {\n  font-weight: bold;\n}\n\nhtml {\n  box-sizing: border-box;\n}\n\n*, *:before, *:after {\n  box-sizing: inherit;\n}\n\nhtml, body {\n  color: #222;\n  height: 100%;\n}\n\na {\n  color: #fff;\n  text-decoration: none;\n  transition: all 0.3s ease-in-out;\n}\n\nh1, h2, h3, h4, h5, h6, p, dl, ol, table {\n  margin-top: 0;\n  margin-bottom: 0.5em;\n}\n\ndd {\n  margin-left: 0;\n}\n\nul, li {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n\nimg {\n  max-width: 100%;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n  width: 100%;\n}\n\nthead tr {\n  font-family: sans-serif;\n}\n\ntd,\nth {\n  padding: 0.5em 0.25em;\n  border: 1px solid #ccc;\n  position: relative;\n  text-align: left;\n  vertical-align: top;\n  word-wrap: break-word;\n}\n\ninput[type=checkbox] {\n  width: auto;\n  transition: box-shadow 0.3s ease-in-out;\n  outline: none;\n  padding: 3px 0px 3px 3px;\n  margin: 5px 1px 3px 0px;\n  border: 1px solid #DDDDDD;\n}\ninput[type=checkbox]:focus {\n  box-shadow: 0 0 5px #51cbee;\n}\n\nbody, html {\n  font-size: 16px;\n  font-family: sans-serif;\n}\n\nb, strong, .embolden {\n  font-family: sans-serif;\n}\n\n.italicize {\n  font-family: sans-serif;\n}\n\nem {\n  font-family: sans-serif;\n}\n\nb em, em b, strong em, em strong {\n  font-family: sans-serif;\n}\n\n.text-tiny {\n  font-size: 10.4px;\n}\n\n.text-small,\ntable {\n  font-size: 12px;\n}\n\n.text-normal,\np {\n  font-size: 14px;\n}\n\n.text-medlg,\nh6,\nh5 {\n  font-size: 16px;\n}\n\n.text-large,\nh4,\nh3,\nh1 {\n  font-size: 18px;\n}\n\n.text-largemed {\n  font-size: 20px;\n}\n\n.text-extralg,\nh2 {\n  font-size: 24px;\n}\n\n.text-verylarge {\n  font-size: 32px;\n}\n\n.text-superlarge {\n  font-size: 36px;\n}\n\nh1, h2, h3, h4, h5, h6 {\n  margin-top: 0;\n  font-family: sans-serif;\n}\n\n.align-right {\n  text-align: right;\n}\n\n.align-center {\n  text-align: center;\n}\n\n.align-left {\n  text-align: left;\n}\n\n.align-middle {\n  vertical-align: middle;\n}\n\n.float-left {\n  float: left;\n}\n\n.float-right {\n  float: right;\n}\n\n.floated-links {\n  float: right;\n  padding: 0.25em;\n}\n\n.floated-links > a {\n  margin-left: 1em;\n}\n\n.full-results td ul {\n  padding-left: 1.3em;\n}\n\n.full-results td li {\n  list-style-type: disc;\n}\n\n.display-block {\n  display: block;\n}\n\n.bottom-space-small {\n  padding-bottom: 0.5em;\n}\n\n.bottom-space-large {\n  padding-bottom: 2em;\n}\n\n.indented {\n  margin-left: 20px;\n}\n\n.selected {\n  background-color: pink !important;\n}\n\n.pad-right {\n  padding-right: 0.25em;\n}\n\n.pad-left {\n  padding-left: 0.25em;\n}\n\n.vertical-align-container {\n  display: flex;\n  align-items: center;\n}\n\n.hidden {\n  position: absolute !important;\n  top: -9999px !important;\n  left: -9999px !important;\n}\n\n.invisible {\n  visibility: hidden;\n}\n\n.slide {\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  transition: max-height 300ms;\n}\n\n.slide-hide {\n  max-height: 0;\n}\n\n.slide-show {\n  max-height: 80em;\n}\n\n.shadow {\n  -webkit-box-shadow: 2px 2px 1px 0px rgba(121, 121, 121, 0.65);\n  -moz-box-shadow: 2px 2px 1px 0px rgba(121, 121, 121, 0.65);\n  box-shadow: 2px 2px 1px 0px rgba(121, 121, 121, 0.65);\n}\n\n.error {\n  border: 1px solid red;\n}\n\n.preserve-space {\n  white-space: pre-line;\n}\n\n.no-wrap {\n  white-space: nowrap;\n}\n\n.strike {\n  text-decoration: line-through;\n}\n\n.tag-spacer {\n  padding: 75px;\n}\n\n.inline-spacer {\n  padding: 0 0.5em;\n}\n\n.hand {\n  cursor: pointer;\n}\n\n.move {\n  cursor: move;\n}\n\n.full-width {\n  width: 100%;\n}\n\n.truncate {\n  max-height: 9em;\n  overflow-y: auto;\n  display: block;\n}\n\n.extra-spacing {\n  padding: 2em;\n}\n\n.prewrap {\n  white-space: pre-wrap;\n}\n\n:invalid {\n  box-shadow: none;\n}\n\n:-moz-submit-invalid {\n  box-shadow: none;\n}\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n.close {\n  cursor: pointer;\n}\n\n/* ==========================================================================\n   Print styles.\n   Based on HTML5-bolerplate print styles\n   ========================================================================== */\n@media print {\n  *,\n*:before,\n*:after,\np:first-letter,\ndiv:first-letter,\nblockquote:first-letter,\nli:first-letter,\np:first-line,\ndiv:first-line,\nblockquote:first-line,\nli:first-line {\n    background-color: transparent;\n    color: #000 !important;\n    /* Black prints faster:\n       http://www.sanbeiji.com/archives/953 */\n    box-shadow: none !important;\n    text-shadow: none !important;\n  }\n\n  pre {\n    white-space: pre-wrap !important;\n  }\n\n  pre,\nblockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid;\n  }\n\n  /*\n   * Printing Tables:\n   * http://css-discuss.incutio.com/wiki/Printing_Tables\n   */\n  thead {\n    display: table-header-group;\n  }\n\n  thead tr {\n    font-weight: bold;\n  }\n\n  tr,\nimg {\n    page-break-inside: avoid;\n  }\n\n  p,\nh2,\nh3 {\n    orphans: 3;\n    widows: 3;\n  }\n\n  h2,\nh3 {\n    page-break-after: avoid;\n  }\n\n  .noprint {\n    display: none !important;\n  }\n}","// Site wrapper\n$wrapper-width: 1600px;\n\n// header Height\n$header-height: 44px;\n\n// Z-Index Layers\n$layer-main-body: 1;\n$layer-window-shade: 10;\n$layer-lightbox: 50;\n$layer-top-elements: 1000;\n\n// Drawer Settings:\n$drawer-width: 175px;\n$drawer-max-height: 500px;\n\n$transtion-drawer: all 0.3s ease-in-out;\n\n// =========== Breakpoint mixins\n@mixin breakpoint($point) {\n  @if $point == laptop {\n    @media (min-width: 840px) { @content ; }\n  }\n  @else if $point == tablet {\n    @media (min-width: 560px) { @content ; }\n  }\n}\n\n// =========== Site Colors\n\n// Chromes\n$color-black: #222;\n$color-white: #fff;\n$color-ltgrey: #f0eeee;\n$color-dkgrey: #363636;\n$color-ltltgrey: #fbf9f9;\n$color-medgrey: #a1a1a1;\n$color-newspaper: #ebe6e6;\n\n// blues\n$color-royal: #1484C8;\n$color-gold: #edc721;\n$color-pool: #83c1bf;\n$color-agua: #eef6f6;\n$color-dkdkblue: #001325;\n$color-soft-blue: #d7ebf3;\n$color-bright-blue: #93d8fd;\n\n// reds\n$color-red: #c00;\n$color-caution: #fff9e6;\n$color-soft-warning: #E0FFD7;\n$color-soft-red: #F1C8C8;\n$color-warning: #c00;\n$color-soft-pink: #e4afba;\n\n// yellows\n$color-soft-gold: #FFEB93;\n$color-bright-yellow: #f1d96e;\n$color-dirty-yellow: #ffc;\n$color-soft-yellow: #f3e9bd;\n\n// green\n$color-ltgreen: #eefeeb;\n$color-green: #009966;\n$color-soft-green: #b1eab2;\n$color-bright-green: #6ff373;\n\n// other\n$color-soft-purple: #c7beda;\n$color-soft-brown: #f3c28c;\n$color-soft-gray: #b1aca7;\n\n// Used for generating paddings / margins\n$base-unit: 1em;\n$base-unit-half: $base-unit * 0.5;\n$base-unit-quarter: $base-unit * 0.25;\n\n// Fonts\n$base-font-family: sans-serif;\n$base-font-family-bold: sans-serif;\n$base-font-family-italic: sans-serif;\n$base-font-family-bold-italic: sans-serif;\n\n$base-font-size: 16px;\n$base-content-font: $base-font-size * 0.875;\n$base-rounded-corners: 3px;\n","// Improved method of handling box sizing\n// Aug '14\n// http://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/\nhtml {\n  box-sizing: border-box;\n}\n*, *:before, *:after {\n  box-sizing: inherit;\n}\n\nhtml, body {\n  color: $color-black;\n  height: 100%;\n}\n\na {\n  color: $color-white;\n  text-decoration: none;\n  transition: $transtion-drawer;\n}\n\n// IMO top margins are annoying - MS\n// Standard block text lements should push the one below away\nh1, h2, h3, h4, h5, h6, p, dl, ol, table {\n  margin-top: 0;\n  margin-bottom: $base-unit-half;\n}\n\ndd {\n  margin-left: 0;\n}\n\n// Clean UL spacing\nul, li {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n\nimg {\n  max-width: 100%;\n}\n\ntable {\n  @extend %text-small;\n  border-collapse: collapse;\n  border-spacing: 0;\n  width: 100%;\n}\n\nthead tr {\n  font-family: $base-font-family-bold;\n}\n\ntd,\nth {\n  padding: $base-unit-half $base-unit-quarter;\n  border: 1px solid #ccc;\n  position: relative;\n  text-align: left;\n  vertical-align: top;\n  word-wrap:break-word;\n}\n\ninput[type=checkbox] {\n  width: auto;\n  transition: box-shadow 0.30s ease-in-out;\n  outline: none;\n  padding: 3px 0px 3px 3px;\n  margin: 5px 1px 3px 0px;\n  border: 1px solid #DDDDDD;\n\n  &:focus {\n    box-shadow: 0 0 5px rgba(81, 203, 238, 1);\n  }\n}\n","// Base Font Family and Sizing\nbody, html {\n  font-size: $base-font-size;\n  font-family: $base-font-family;}\n\nb, strong, .embolden {\n  font-family: $base-font-family-bold;}\n\n.italicize {\n  font-family: $base-font-family-italic;}\n\nem {\n  font-family: $base-font-family;}\n\nb em, em b, strong em, em strong {\n  font-family: $base-font-family-bold-italic;}\n\n\n// Text sizing classes\n// =============================\n.text-tiny,\n%text-tiny {\n  font-size: $base-font-size * 0.65;} // 10px / .65em\n\n.text-small,\n%text-small {\n  font-size: $base-font-size * 0.75;} // 12px / .75em\n\n.text-normal,\n%text-normal {\n  font-size: $base-content-font;} // 14px / .875em\n\n.text-medlg,\n%text-medlg {\n  font-size: $base-font-size;} // 16px / 1em\n\n.text-large,\n%text-large {\n  font-size: $base-font-size * 1.125;} // 18px / 1.125em\n\n.text-largemed,\n%text-largemed {\n  font-size: $base-font-size * 1.25;} // 20px / 1.25em\n\n.text-extralg,\n%text-extralg {\n  font-size: $base-font-size * 1.5;} // 24px / 1.5em\n\n.text-verylarge,\n%text-verylarge {\n  font-size: $base-font-size * 2;} // 32px / 2em\n\n.text-superlarge,\n%text-superlarge {\n  font-size: $base-font-size * 2.25;} // 36px / 2.25em\n\n// Headings\n// =======================\nh1, h2, h3, h4, h5, h6 {\n  margin-top: 0;\n  font-family: $base-font-family-bold;}\n\nh1 {\n  @extend %text-large}\n\nh2 {\n  @extend %text-extralg}\n\nh3 {\n  @extend %text-large}\n\nh4 {\n  @extend %text-large}\n\nh5 {\n  @extend %text-medlg}\n\nh6 {\n  @extend %text-medlg}\n\np {\n  @extend %text-normal}\n","// Place state change stylesheets in these files (non-module-specific shared classes)\n\n.align-right {\n  text-align: right;\n}\n\n.align-center {\n  text-align: center;\n}\n\n.align-left {\n  text-align: left;\n}\n\n.align-middle {\n  vertical-align: middle;\n}\n\n.float-left {\n  float: left;\n}\n\n.float-right {\n  float: right;\n}\n\n.floated-links {\n  float: right;\n  padding: $base-unit-quarter;\n}\n\n.floated-links > a {\n  margin-left: $base-unit;\n}\n\n.full-results td ul {\n  padding-left: 1.3em;\n}\n\n.full-results td li {\n  list-style-type: disc;\n}\n\n.display-block {\n  display: block;\n}\n\n.bottom-space-small {\n  padding-bottom: $base-unit-half;\n}\n\n.bottom-space-large {\n  padding-bottom: $base-unit * 2;\n}\n\n.indented {\n  margin-left: 20px;\n}\n\n.selected {\n  background-color: pink !important;\n}\n\n.pad-right {\n  padding-right: $base-unit-quarter;\n}\n\n.pad-left {\n  padding-left: $base-unit-quarter;\n}\n\n.vertical-align-container {\n  display: flex;\n  align-items: center;\n}\n\n.hidden {\n  position: absolute !important;\n  top: -9999px !important;\n  left: -9999px !important;\n}\n\n.invisible {\n  visibility: hidden;\n}\n\n.slide {\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  transition: max-height 300ms;\n}\n\n.slide-hide {\n  max-height: 0;\n}\n\n.slide-show {\n  max-height: 80em;\n}\n\n.shadow {\n  @include default-box-shadow();\n}\n\n.error {\n  border: 1px solid red;\n}\n\n.preserve-space {\n  white-space: pre-line;\n}\n\n.no-wrap {\n  white-space: nowrap;\n}\n\n.strike {\n  text-decoration: line-through;\n}\n\n.tag-spacer {\n  padding: 75px;\n}\n\n.inline-spacer {\n  padding: 0 $base-unit-half;\n}\n\n.hand {\n  cursor: pointer;\n}\n\n.move {\n  cursor: move;\n}\n\n.full-width {\n  width: 100%;\n}\n\n.truncate {\n  max-height: $base-unit * 9;\n  overflow-y: auto;\n  display: block;\n}\n\n.extra-spacing {\n  padding: 2em;\n}\n\n.prewrap {\n  white-space: pre-wrap;\n}\n\n// Fixes bug/feature in Firefox that makes :invalid fields glow\n:invalid {\n  box-shadow: none;\n}\n\n:-moz-submit-invalid {\n  box-shadow: none;\n}\n\n:-moz-ui-invalid {\n  box-shadow:none;\n}\n\n.close {\n  cursor: pointer;\n}\n","@mixin default-box-shadow() {\n  -webkit-box-shadow: 2px 2px 1px 0px rgba(121,121,121,0.65);\n  -moz-box-shadow: 2px 2px 1px 0px rgba(121,121,121,0.65);\n  box-shadow: 2px 2px 1px 0px rgba(121,121,121,0.65);\n}\n\n@mixin double-box-shadow() {\n  -webkit-box-shadow: 6px 6px 3px 2px rgba(121,121,121,0.40);\n  -moz-box-shadow: 6px 6px 3px 2px rgba(121,121,121,0.40);\n  box-shadow: 6px 6px 3px 2px rgba(121,121,121,0.40);\n}\n\n@mixin border-radius($radius: $base-rounded-corners) {\n  border-radius: $radius;\n}\n\n@mixin border-left-radius($radius: $base-rounded-corners) {\n  border-radius: $radius 0 0 $radius;\n}\n\n@mixin border-top-radius($radius: $base-rounded-corners) {\n  border-radius: $radius $radius 0 0;\n}\n\n@mixin clearfix() {\n  overflow: hidden;\n}\n","/* ==========================================================================\n   Print styles.\n   Based on HTML5-bolerplate print styles\n   ========================================================================== */\n@media print {\n  *,\n  *:before,\n  *:after,\n  p:first-letter,\n  div:first-letter,\n  blockquote:first-letter,\n  li:first-letter,\n  p:first-line,\n  div:first-line,\n  blockquote:first-line,\n  li:first-line {\n    background-color: transparent;\n    color: #000 !important; /* Black prints faster:\n                               http://www.sanbeiji.com/archives/953 */\n    box-shadow: none !important;\n    text-shadow: none !important;\n  }\n\n  pre {\n    white-space: pre-wrap !important;\n  }\n  pre,\n  blockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid;\n  }\n\n  /*\n   * Printing Tables:\n   * http://css-discuss.incutio.com/wiki/Printing_Tables\n   */\n  thead {\n    display: table-header-group;\n  }\n\n  thead tr {\n    font-weight: bold;\n  }\n\n  tr,\n  img {\n    page-break-inside: avoid;\n  }\n\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3;\n  }\n\n  h2,\n  h3 {\n    page-break-after: avoid;\n  }\n  .noprint {\n    display: none !important;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/components/ComicsList/ComicsList.scss":
/*!***************************************************!*\
  !*** ./src/components/ComicsList/ComicsList.scss ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_4_ComicsList_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/resolve-url-loader/index.js!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[4]!./ComicsList.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[4]!./src/components/ComicsList/ComicsList.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_4_ComicsList_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_4_ComicsList_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./src/components/Rankings/Item/Item.scss":
/*!************************************************!*\
  !*** ./src/components/Rankings/Item/Item.scss ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_4_Item_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/resolve-url-loader/index.js!../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[4]!./Item.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[4]!./src/components/Rankings/Item/Item.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_4_Item_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_4_Item_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/components/Rankings/Tier/Tier.scss":
/*!************************************************!*\
  !*** ./src/components/Rankings/Tier/Tier.scss ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_4_Tier_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/resolve-url-loader/index.js!../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[4]!./Tier.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[4]!./src/components/Rankings/Tier/Tier.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_4_Tier_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_4_Tier_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/components/forms/FilterComics/FilterComics.scss":
/*!*************************************************************!*\
  !*** ./src/components/forms/FilterComics/FilterComics.scss ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_4_FilterComics_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/resolve-url-loader/index.js!../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[4]!./FilterComics.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[4]!./src/components/forms/FilterComics/FilterComics.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_4_FilterComics_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_4_FilterComics_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./src/components/page_roots/LifetrackerPage/LifeSection/lifeSection.scss":
/*!********************************************************************************!*\
  !*** ./src/components/page_roots/LifetrackerPage/LifeSection/lifeSection.scss ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_4_lifeSection_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/postcss-loader/dist/cjs.js!../../../../../node_modules/resolve-url-loader/index.js!../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[4]!./lifeSection.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[4]!./src/components/page_roots/LifetrackerPage/LifeSection/lifeSection.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_4_lifeSection_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_4_lifeSection_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/components/page_roots/LifetrackerPage/LifetrackerMenu/lifetrackerMenu.scss":
/*!****************************************************************************************!*\
  !*** ./src/components/page_roots/LifetrackerPage/LifetrackerMenu/lifetrackerMenu.scss ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_4_lifetrackerMenu_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/postcss-loader/dist/cjs.js!../../../../../node_modules/resolve-url-loader/index.js!../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[4]!./lifetrackerMenu.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[4]!./src/components/page_roots/LifetrackerPage/LifetrackerMenu/lifetrackerMenu.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_4_lifetrackerMenu_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_4_lifetrackerMenu_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/components/page_roots/LifetrackerPage/lifetrackerPage.scss":
/*!************************************************************************!*\
  !*** ./src/components/page_roots/LifetrackerPage/lifetrackerPage.scss ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_4_lifetrackerPage_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/resolve-url-loader/index.js!../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[4]!./lifetrackerPage.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[2].use[4]!./src/components/page_roots/LifetrackerPage/lifetrackerPage.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_4_lifetrackerPage_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_2_use_4_lifetrackerPage_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkreact_marvel_api"] = self["webpackChunkreact_marvel_api"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
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