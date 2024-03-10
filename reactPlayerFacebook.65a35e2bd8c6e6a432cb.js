/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkreact_starter_split_webpack_5_ts"] = self["webpackChunkreact_starter_split_webpack_5_ts"] || []).push([["reactPlayerFacebook"],{

/***/ "./node_modules/react-player/lib/players/Facebook.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-player/lib/players/Facebook.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var __create = Object.create;\nvar __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __getProtoOf = Object.getPrototypeOf;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;\nvar __export = (target, all) => {\n  for (var name in all)\n    __defProp(target, name, { get: all[name], enumerable: true });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === \"object\" || typeof from === \"function\") {\n    for (let key of __getOwnPropNames(from))\n      if (!__hasOwnProp.call(to, key) && key !== except)\n        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n  }\n  return to;\n};\nvar __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(\n  // If the importer is in node compatibility mode or this is not an ESM\n  // file that has been converted to a CommonJS file using a Babel-\n  // compatible transform (i.e. \"__esModule\" has not been set), then set\n  // \"default\" to the CommonJS \"module.exports\" for node compatibility.\n  isNodeMode || !mod || !mod.__esModule ? __defProp(target, \"default\", { value: mod, enumerable: true }) : target,\n  mod\n));\nvar __toCommonJS = (mod) => __copyProps(__defProp({}, \"__esModule\", { value: true }), mod);\nvar __publicField = (obj, key, value) => {\n  __defNormalProp(obj, typeof key !== \"symbol\" ? key + \"\" : key, value);\n  return value;\n};\nvar Facebook_exports = {};\n__export(Facebook_exports, {\n  default: () => Facebook\n});\nmodule.exports = __toCommonJS(Facebook_exports);\nvar import_react = __toESM(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nvar import_utils = __webpack_require__(/*! ../utils */ \"./node_modules/react-player/lib/utils.js\");\nvar import_patterns = __webpack_require__(/*! ../patterns */ \"./node_modules/react-player/lib/patterns.js\");\nconst SDK_URL = \"https://connect.facebook.net/en_US/sdk.js\";\nconst SDK_GLOBAL = \"FB\";\nconst SDK_GLOBAL_READY = \"fbAsyncInit\";\nconst PLAYER_ID_PREFIX = \"facebook-player-\";\nclass Facebook extends import_react.Component {\n  constructor() {\n    super(...arguments);\n    __publicField(this, \"callPlayer\", import_utils.callPlayer);\n    __publicField(this, \"playerID\", this.props.config.playerId || `${PLAYER_ID_PREFIX}${(0, import_utils.randomString)()}`);\n    __publicField(this, \"mute\", () => {\n      this.callPlayer(\"mute\");\n    });\n    __publicField(this, \"unmute\", () => {\n      this.callPlayer(\"unmute\");\n    });\n  }\n  componentDidMount() {\n    this.props.onMount && this.props.onMount(this);\n  }\n  load(url, isReady) {\n    if (isReady) {\n      (0, import_utils.getSDK)(SDK_URL, SDK_GLOBAL, SDK_GLOBAL_READY).then((FB) => FB.XFBML.parse());\n      return;\n    }\n    (0, import_utils.getSDK)(SDK_URL, SDK_GLOBAL, SDK_GLOBAL_READY).then((FB) => {\n      FB.init({\n        appId: this.props.config.appId,\n        xfbml: true,\n        version: this.props.config.version\n      });\n      FB.Event.subscribe(\"xfbml.render\", (msg) => {\n        this.props.onLoaded();\n      });\n      FB.Event.subscribe(\"xfbml.ready\", (msg) => {\n        if (msg.type === \"video\" && msg.id === this.playerID) {\n          this.player = msg.instance;\n          this.player.subscribe(\"startedPlaying\", this.props.onPlay);\n          this.player.subscribe(\"paused\", this.props.onPause);\n          this.player.subscribe(\"finishedPlaying\", this.props.onEnded);\n          this.player.subscribe(\"startedBuffering\", this.props.onBuffer);\n          this.player.subscribe(\"finishedBuffering\", this.props.onBufferEnd);\n          this.player.subscribe(\"error\", this.props.onError);\n          if (this.props.muted) {\n            this.callPlayer(\"mute\");\n          } else {\n            this.callPlayer(\"unmute\");\n          }\n          this.props.onReady();\n          document.getElementById(this.playerID).querySelector(\"iframe\").style.visibility = \"visible\";\n        }\n      });\n    });\n  }\n  play() {\n    this.callPlayer(\"play\");\n  }\n  pause() {\n    this.callPlayer(\"pause\");\n  }\n  stop() {\n  }\n  seekTo(seconds, keepPlaying = true) {\n    this.callPlayer(\"seek\", seconds);\n    if (!keepPlaying) {\n      this.pause();\n    }\n  }\n  setVolume(fraction) {\n    this.callPlayer(\"setVolume\", fraction);\n  }\n  getDuration() {\n    return this.callPlayer(\"getDuration\");\n  }\n  getCurrentTime() {\n    return this.callPlayer(\"getCurrentPosition\");\n  }\n  getSecondsLoaded() {\n    return null;\n  }\n  render() {\n    const { attributes } = this.props.config;\n    const style = {\n      width: \"100%\",\n      height: \"100%\"\n    };\n    return /* @__PURE__ */ import_react.default.createElement(\n      \"div\",\n      {\n        style,\n        id: this.playerID,\n        className: \"fb-video\",\n        \"data-href\": this.props.url,\n        \"data-autoplay\": this.props.playing ? \"true\" : \"false\",\n        \"data-allowfullscreen\": \"true\",\n        \"data-controls\": this.props.controls ? \"true\" : \"false\",\n        ...attributes\n      }\n    );\n  }\n}\n__publicField(Facebook, \"displayName\", \"Facebook\");\n__publicField(Facebook, \"canPlay\", import_patterns.canPlay.facebook);\n__publicField(Facebook, \"loopOnEnded\", true);\n\n\n//# sourceURL=webpack://react-starter-split-webpack-5-ts/./node_modules/react-player/lib/players/Facebook.js?");

/***/ })

}]);