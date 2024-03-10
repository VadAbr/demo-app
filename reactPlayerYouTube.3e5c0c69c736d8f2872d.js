/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkreact_starter_split_webpack_5_ts"] = self["webpackChunkreact_starter_split_webpack_5_ts"] || []).push([["reactPlayerYouTube"],{

/***/ "./node_modules/react-player/lib/players/YouTube.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-player/lib/players/YouTube.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var __create = Object.create;\nvar __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __getProtoOf = Object.getPrototypeOf;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;\nvar __export = (target, all) => {\n  for (var name in all)\n    __defProp(target, name, { get: all[name], enumerable: true });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === \"object\" || typeof from === \"function\") {\n    for (let key of __getOwnPropNames(from))\n      if (!__hasOwnProp.call(to, key) && key !== except)\n        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n  }\n  return to;\n};\nvar __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(\n  // If the importer is in node compatibility mode or this is not an ESM\n  // file that has been converted to a CommonJS file using a Babel-\n  // compatible transform (i.e. \"__esModule\" has not been set), then set\n  // \"default\" to the CommonJS \"module.exports\" for node compatibility.\n  isNodeMode || !mod || !mod.__esModule ? __defProp(target, \"default\", { value: mod, enumerable: true }) : target,\n  mod\n));\nvar __toCommonJS = (mod) => __copyProps(__defProp({}, \"__esModule\", { value: true }), mod);\nvar __publicField = (obj, key, value) => {\n  __defNormalProp(obj, typeof key !== \"symbol\" ? key + \"\" : key, value);\n  return value;\n};\nvar YouTube_exports = {};\n__export(YouTube_exports, {\n  default: () => YouTube\n});\nmodule.exports = __toCommonJS(YouTube_exports);\nvar import_react = __toESM(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nvar import_utils = __webpack_require__(/*! ../utils */ \"./node_modules/react-player/lib/utils.js\");\nvar import_patterns = __webpack_require__(/*! ../patterns */ \"./node_modules/react-player/lib/patterns.js\");\nconst SDK_URL = \"https://www.youtube.com/iframe_api\";\nconst SDK_GLOBAL = \"YT\";\nconst SDK_GLOBAL_READY = \"onYouTubeIframeAPIReady\";\nconst MATCH_PLAYLIST = /[?&](?:list|channel)=([a-zA-Z0-9_-]+)/;\nconst MATCH_USER_UPLOADS = /user\\/([a-zA-Z0-9_-]+)\\/?/;\nconst MATCH_NOCOOKIE = /youtube-nocookie\\.com/;\nconst NOCOOKIE_HOST = \"https://www.youtube-nocookie.com\";\nclass YouTube extends import_react.Component {\n  constructor() {\n    super(...arguments);\n    __publicField(this, \"callPlayer\", import_utils.callPlayer);\n    __publicField(this, \"parsePlaylist\", (url) => {\n      if (url instanceof Array) {\n        return {\n          listType: \"playlist\",\n          playlist: url.map(this.getID).join(\",\")\n        };\n      }\n      if (MATCH_PLAYLIST.test(url)) {\n        const [, playlistId] = url.match(MATCH_PLAYLIST);\n        return {\n          listType: \"playlist\",\n          list: playlistId.replace(/^UC/, \"UU\")\n        };\n      }\n      if (MATCH_USER_UPLOADS.test(url)) {\n        const [, username] = url.match(MATCH_USER_UPLOADS);\n        return {\n          listType: \"user_uploads\",\n          list: username\n        };\n      }\n      return {};\n    });\n    __publicField(this, \"onStateChange\", (event) => {\n      const { data } = event;\n      const { onPlay, onPause, onBuffer, onBufferEnd, onEnded, onReady, loop, config: { playerVars, onUnstarted } } = this.props;\n      const { UNSTARTED, PLAYING, PAUSED, BUFFERING, ENDED, CUED } = window[SDK_GLOBAL].PlayerState;\n      if (data === UNSTARTED)\n        onUnstarted();\n      if (data === PLAYING) {\n        onPlay();\n        onBufferEnd();\n      }\n      if (data === PAUSED)\n        onPause();\n      if (data === BUFFERING)\n        onBuffer();\n      if (data === ENDED) {\n        const isPlaylist = !!this.callPlayer(\"getPlaylist\");\n        if (loop && !isPlaylist) {\n          if (playerVars.start) {\n            this.seekTo(playerVars.start);\n          } else {\n            this.play();\n          }\n        }\n        onEnded();\n      }\n      if (data === CUED)\n        onReady();\n    });\n    __publicField(this, \"mute\", () => {\n      this.callPlayer(\"mute\");\n    });\n    __publicField(this, \"unmute\", () => {\n      this.callPlayer(\"unMute\");\n    });\n    __publicField(this, \"ref\", (container) => {\n      this.container = container;\n    });\n  }\n  componentDidMount() {\n    this.props.onMount && this.props.onMount(this);\n  }\n  getID(url) {\n    if (!url || url instanceof Array || MATCH_PLAYLIST.test(url)) {\n      return null;\n    }\n    return url.match(import_patterns.MATCH_URL_YOUTUBE)[1];\n  }\n  load(url, isReady) {\n    const { playing, muted, playsinline, controls, loop, config, onError } = this.props;\n    const { playerVars, embedOptions } = config;\n    const id = this.getID(url);\n    if (isReady) {\n      if (MATCH_PLAYLIST.test(url) || MATCH_USER_UPLOADS.test(url) || url instanceof Array) {\n        this.player.loadPlaylist(this.parsePlaylist(url));\n        return;\n      }\n      this.player.cueVideoById({\n        videoId: id,\n        startSeconds: (0, import_utils.parseStartTime)(url) || playerVars.start,\n        endSeconds: (0, import_utils.parseEndTime)(url) || playerVars.end\n      });\n      return;\n    }\n    (0, import_utils.getSDK)(SDK_URL, SDK_GLOBAL, SDK_GLOBAL_READY, (YT) => YT.loaded).then((YT) => {\n      if (!this.container)\n        return;\n      this.player = new YT.Player(this.container, {\n        width: \"100%\",\n        height: \"100%\",\n        videoId: id,\n        playerVars: {\n          autoplay: playing ? 1 : 0,\n          mute: muted ? 1 : 0,\n          controls: controls ? 1 : 0,\n          start: (0, import_utils.parseStartTime)(url),\n          end: (0, import_utils.parseEndTime)(url),\n          origin: window.location.origin,\n          playsinline: playsinline ? 1 : 0,\n          ...this.parsePlaylist(url),\n          ...playerVars\n        },\n        events: {\n          onReady: () => {\n            if (loop) {\n              this.player.setLoop(true);\n            }\n            this.props.onReady();\n          },\n          onPlaybackRateChange: (event) => this.props.onPlaybackRateChange(event.data),\n          onPlaybackQualityChange: (event) => this.props.onPlaybackQualityChange(event),\n          onStateChange: this.onStateChange,\n          onError: (event) => onError(event.data)\n        },\n        host: MATCH_NOCOOKIE.test(url) ? NOCOOKIE_HOST : void 0,\n        ...embedOptions\n      });\n    }, onError);\n    if (embedOptions.events) {\n      console.warn(\"Using `embedOptions.events` will likely break things. Use ReactPlayer\\u2019s callback props instead, eg onReady, onPlay, onPause\");\n    }\n  }\n  play() {\n    this.callPlayer(\"playVideo\");\n  }\n  pause() {\n    this.callPlayer(\"pauseVideo\");\n  }\n  stop() {\n    if (!document.body.contains(this.callPlayer(\"getIframe\")))\n      return;\n    this.callPlayer(\"stopVideo\");\n  }\n  seekTo(amount, keepPlaying = false) {\n    this.callPlayer(\"seekTo\", amount);\n    if (!keepPlaying && !this.props.playing) {\n      this.pause();\n    }\n  }\n  setVolume(fraction) {\n    this.callPlayer(\"setVolume\", fraction * 100);\n  }\n  setPlaybackRate(rate) {\n    this.callPlayer(\"setPlaybackRate\", rate);\n  }\n  setLoop(loop) {\n    this.callPlayer(\"setLoop\", loop);\n  }\n  getDuration() {\n    return this.callPlayer(\"getDuration\");\n  }\n  getCurrentTime() {\n    return this.callPlayer(\"getCurrentTime\");\n  }\n  getSecondsLoaded() {\n    return this.callPlayer(\"getVideoLoadedFraction\") * this.getDuration();\n  }\n  render() {\n    const { display } = this.props;\n    const style = {\n      width: \"100%\",\n      height: \"100%\",\n      display\n    };\n    return /* @__PURE__ */ import_react.default.createElement(\"div\", { style }, /* @__PURE__ */ import_react.default.createElement(\"div\", { ref: this.ref }));\n  }\n}\n__publicField(YouTube, \"displayName\", \"YouTube\");\n__publicField(YouTube, \"canPlay\", import_patterns.canPlay.youtube);\n\n\n//# sourceURL=webpack://react-starter-split-webpack-5-ts/./node_modules/react-player/lib/players/YouTube.js?");

/***/ })

}]);