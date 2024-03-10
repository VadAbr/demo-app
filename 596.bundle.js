(self.webpackChunkreact_starter_split_webpack_5_ts = self.webpackChunkreact_starter_split_webpack_5_ts || []).push([ [ 596 ], {
    6807: function(module, __unused_webpack_exports, __webpack_require__) {
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
        })(obj, "symbol" != typeof key ? key + "" : key, value), value), DailyMotion_exports = {};
        ((target, all) => {
            for (var name in all) __defProp(target, name, {
                get: all[name],
                enumerable: !0
            });
        })(DailyMotion_exports, {
            default: () => DailyMotion
        }), module.exports = (mod = DailyMotion_exports, __copyProps(__defProp({}, "__esModule", {
            value: !0
        }), mod));
        var import_react = ((mod, isNodeMode, target) => (target = null != mod ? __create(__getProtoOf(mod)) : {}, 
        __copyProps(!isNodeMode && mod && mod.__esModule ? target : __defProp(target, "default", {
            value: mod,
            enumerable: !0
        }), mod)))(__webpack_require__(7294)), import_utils = __webpack_require__(8045), import_patterns = __webpack_require__(1776);
        class DailyMotion extends import_react.Component {
            constructor() {
                super(...arguments), __publicField(this, "callPlayer", import_utils.callPlayer), 
                __publicField(this, "onDurationChange", (() => {
                    const duration = this.getDuration();
                    this.props.onDuration(duration);
                })), __publicField(this, "mute", (() => {
                    this.callPlayer("setMuted", !0);
                })), __publicField(this, "unmute", (() => {
                    this.callPlayer("setMuted", !1);
                })), __publicField(this, "ref", (container => {
                    this.container = container;
                }));
            }
            componentDidMount() {
                this.props.onMount && this.props.onMount(this);
            }
            load(url) {
                const {controls: controls, config: config, onError: onError, playing: playing} = this.props, [, id] = url.match(import_patterns.MATCH_URL_DAILYMOTION);
                this.player ? this.player.load(id, {
                    start: (0, import_utils.parseStartTime)(url),
                    autoplay: playing
                }) : (0, import_utils.getSDK)("https://api.dmcdn.net/all.js", "DM", "dmAsyncInit", (DM => DM.player)).then((DM => {
                    if (!this.container) return;
                    const Player = DM.player;
                    this.player = new Player(this.container, {
                        width: "100%",
                        height: "100%",
                        video: id,
                        params: {
                            controls: controls,
                            autoplay: this.props.playing,
                            mute: this.props.muted,
                            start: (0, import_utils.parseStartTime)(url),
                            origin: window.location.origin,
                            ...config.params
                        },
                        events: {
                            apiready: this.props.onReady,
                            seeked: () => this.props.onSeek(this.player.currentTime),
                            video_end: this.props.onEnded,
                            durationchange: this.onDurationChange,
                            pause: this.props.onPause,
                            playing: this.props.onPlay,
                            waiting: this.props.onBuffer,
                            error: event => onError(event)
                        }
                    });
                }), onError);
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
            setVolume(fraction) {
                this.callPlayer("setVolume", fraction);
            }
            getDuration() {
                return this.player.duration || null;
            }
            getCurrentTime() {
                return this.player.currentTime;
            }
            getSecondsLoaded() {
                return this.player.bufferedTime;
            }
            render() {
                const {display: display} = this.props, style = {
                    width: "100%",
                    height: "100%",
                    display: display
                };
                return import_react.default.createElement("div", {
                    style: style
                }, import_react.default.createElement("div", {
                    ref: this.ref
                }));
            }
        }
        __publicField(DailyMotion, "displayName", "DailyMotion"), __publicField(DailyMotion, "canPlay", import_patterns.canPlay.dailymotion), 
        __publicField(DailyMotion, "loopOnEnded", !0);
    }
} ]);