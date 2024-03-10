(self.webpackChunkreact_starter_split_webpack_5_ts = self.webpackChunkreact_starter_split_webpack_5_ts || []).push([ [ 667 ], {
    143: function(module, __unused_webpack_exports, __webpack_require__) {
        var mod, __create = Object.create, __defProp = Object.defineProperty, __getOwnPropDesc = Object.getOwnPropertyDescriptor, __getOwnPropNames = Object.getOwnPropertyNames, __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty, __copyProps = (to, from, except, desc) => {
            if (from && "object" == typeof from || "function" == typeof from) for (let key of __getOwnPropNames(from)) __hasOwnProp.call(to, key) || key === except || __defProp(to, key, {
                get: () => from[key],
                enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
            });
            return to;
        }, __publicField = (obj, key, value) => (((obj, key, value) => {
            key in obj ? __defProp(obj, key, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: value
            }) : obj[key] = value;
        })(obj, "symbol" != typeof key ? key + "" : key, value), value), Mixcloud_exports = {};
        ((target, all) => {
            for (var name in all) __defProp(target, name, {
                get: all[name],
                enumerable: !0
            });
        })(Mixcloud_exports, {
            default: () => Mixcloud
        }), module.exports = (mod = Mixcloud_exports, __copyProps(__defProp({}, "__esModule", {
            value: !0
        }), mod));
        var import_react = ((mod, isNodeMode, target) => (target = null != mod ? __create(__getProtoOf(mod)) : {}, 
        __copyProps(!isNodeMode && mod && mod.__esModule ? target : __defProp(target, "default", {
            value: mod,
            enumerable: !0
        }), mod)))(__webpack_require__(7294)), import_utils = __webpack_require__(8045), import_patterns = __webpack_require__(1776);
        class Mixcloud extends import_react.Component {
            constructor() {
                super(...arguments), __publicField(this, "callPlayer", import_utils.callPlayer), 
                __publicField(this, "duration", null), __publicField(this, "currentTime", null), 
                __publicField(this, "secondsLoaded", null), __publicField(this, "mute", (() => {})), 
                __publicField(this, "unmute", (() => {})), __publicField(this, "ref", (iframe => {
                    this.iframe = iframe;
                }));
            }
            componentDidMount() {
                this.props.onMount && this.props.onMount(this);
            }
            load(url) {
                (0, import_utils.getSDK)("https://widget.mixcloud.com/media/js/widgetApi.js", "Mixcloud").then((Mixcloud2 => {
                    this.player = Mixcloud2.PlayerWidget(this.iframe), this.player.ready.then((() => {
                        this.player.events.play.on(this.props.onPlay), this.player.events.pause.on(this.props.onPause), 
                        this.player.events.ended.on(this.props.onEnded), this.player.events.error.on(this.props.error), 
                        this.player.events.progress.on(((seconds, duration) => {
                            this.currentTime = seconds, this.duration = duration;
                        })), this.props.onReady();
                    }));
                }), this.props.onError);
            }
            play() {
                this.callPlayer("play");
            }
            pause() {
                this.callPlayer("pause");
            }
            stop() {}
            seekTo(seconds, keepPlaying = !0) {
                this.callPlayer("seek", seconds), keepPlaying || this.pause();
            }
            setVolume(fraction) {}
            getDuration() {
                return this.duration;
            }
            getCurrentTime() {
                return this.currentTime;
            }
            getSecondsLoaded() {
                return null;
            }
            render() {
                const {url: url, config: config} = this.props, id = url.match(import_patterns.MATCH_URL_MIXCLOUD)[1], query = (0, 
                import_utils.queryString)({
                    ...config.options,
                    feed: `/${id}/`
                });
                return import_react.default.createElement("iframe", {
                    key: id,
                    ref: this.ref,
                    style: {
                        width: "100%",
                        height: "100%"
                    },
                    src: `https://www.mixcloud.com/widget/iframe/?${query}`,
                    frameBorder: "0",
                    allow: "autoplay"
                });
            }
        }
        __publicField(Mixcloud, "displayName", "Mixcloud"), __publicField(Mixcloud, "canPlay", import_patterns.canPlay.mixcloud), 
        __publicField(Mixcloud, "loopOnEnded", !0);
    }
} ]);