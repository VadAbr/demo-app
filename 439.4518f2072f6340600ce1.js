(self.webpackChunkreact_starter_split_webpack_5_ts = self.webpackChunkreact_starter_split_webpack_5_ts || []).push([ [ 439 ], {
    356: function(module, __unused_webpack_exports, __webpack_require__) {
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
        })(obj, "symbol" != typeof key ? key + "" : key, value), value), YouTube_exports = {};
        ((target, all) => {
            for (var name in all) __defProp(target, name, {
                get: all[name],
                enumerable: !0
            });
        })(YouTube_exports, {
            default: () => YouTube
        }), module.exports = (mod = YouTube_exports, __copyProps(__defProp({}, "__esModule", {
            value: !0
        }), mod));
        var import_react = ((mod, isNodeMode, target) => (target = null != mod ? __create(__getProtoOf(mod)) : {}, 
        __copyProps(!isNodeMode && mod && mod.__esModule ? target : __defProp(target, "default", {
            value: mod,
            enumerable: !0
        }), mod)))(__webpack_require__(7294)), import_utils = __webpack_require__(8045), import_patterns = __webpack_require__(1776);
        const MATCH_PLAYLIST = /[?&](?:list|channel)=([a-zA-Z0-9_-]+)/, MATCH_USER_UPLOADS = /user\/([a-zA-Z0-9_-]+)\/?/, MATCH_NOCOOKIE = /youtube-nocookie\.com/;
        class YouTube extends import_react.Component {
            constructor() {
                super(...arguments), __publicField(this, "callPlayer", import_utils.callPlayer), 
                __publicField(this, "parsePlaylist", (url => {
                    if (url instanceof Array) return {
                        listType: "playlist",
                        playlist: url.map(this.getID).join(",")
                    };
                    if (MATCH_PLAYLIST.test(url)) {
                        const [, playlistId] = url.match(MATCH_PLAYLIST);
                        return {
                            listType: "playlist",
                            list: playlistId.replace(/^UC/, "UU")
                        };
                    }
                    if (MATCH_USER_UPLOADS.test(url)) {
                        const [, username] = url.match(MATCH_USER_UPLOADS);
                        return {
                            listType: "user_uploads",
                            list: username
                        };
                    }
                    return {};
                })), __publicField(this, "onStateChange", (event => {
                    const {data: data} = event, {onPlay: onPlay, onPause: onPause, onBuffer: onBuffer, onBufferEnd: onBufferEnd, onEnded: onEnded, onReady: onReady, loop: loop, config: {playerVars: playerVars, onUnstarted: onUnstarted}} = this.props, {UNSTARTED: UNSTARTED, PLAYING: PLAYING, PAUSED: PAUSED, BUFFERING: BUFFERING, ENDED: ENDED, CUED: CUED} = window.YT.PlayerState;
                    if (data === UNSTARTED && onUnstarted(), data === PLAYING && (onPlay(), onBufferEnd()), 
                    data === PAUSED && onPause(), data === BUFFERING && onBuffer(), data === ENDED) {
                        const isPlaylist = !!this.callPlayer("getPlaylist");
                        loop && !isPlaylist && (playerVars.start ? this.seekTo(playerVars.start) : this.play()), 
                        onEnded();
                    }
                    data === CUED && onReady();
                })), __publicField(this, "mute", (() => {
                    this.callPlayer("mute");
                })), __publicField(this, "unmute", (() => {
                    this.callPlayer("unMute");
                })), __publicField(this, "ref", (container => {
                    this.container = container;
                }));
            }
            componentDidMount() {
                this.props.onMount && this.props.onMount(this);
            }
            getID(url) {
                return !url || url instanceof Array || MATCH_PLAYLIST.test(url) ? null : url.match(import_patterns.MATCH_URL_YOUTUBE)[1];
            }
            load(url, isReady) {
                const {playing: playing, muted: muted, playsinline: playsinline, controls: controls, loop: loop, config: config, onError: onError} = this.props, {playerVars: playerVars, embedOptions: embedOptions} = config, id = this.getID(url);
                if (isReady) return MATCH_PLAYLIST.test(url) || MATCH_USER_UPLOADS.test(url) || url instanceof Array ? void this.player.loadPlaylist(this.parsePlaylist(url)) : void this.player.cueVideoById({
                    videoId: id,
                    startSeconds: (0, import_utils.parseStartTime)(url) || playerVars.start,
                    endSeconds: (0, import_utils.parseEndTime)(url) || playerVars.end
                });
                (0, import_utils.getSDK)("https://www.youtube.com/iframe_api", "YT", "onYouTubeIframeAPIReady", (YT => YT.loaded)).then((YT => {
                    this.container && (this.player = new YT.Player(this.container, {
                        width: "100%",
                        height: "100%",
                        videoId: id,
                        playerVars: {
                            autoplay: playing ? 1 : 0,
                            mute: muted ? 1 : 0,
                            controls: controls ? 1 : 0,
                            start: (0, import_utils.parseStartTime)(url),
                            end: (0, import_utils.parseEndTime)(url),
                            origin: window.location.origin,
                            playsinline: playsinline ? 1 : 0,
                            ...this.parsePlaylist(url),
                            ...playerVars
                        },
                        events: {
                            onReady: () => {
                                loop && this.player.setLoop(!0), this.props.onReady();
                            },
                            onPlaybackRateChange: event => this.props.onPlaybackRateChange(event.data),
                            onPlaybackQualityChange: event => this.props.onPlaybackQualityChange(event),
                            onStateChange: this.onStateChange,
                            onError: event => onError(event.data)
                        },
                        host: MATCH_NOCOOKIE.test(url) ? "https://www.youtube-nocookie.com" : void 0,
                        ...embedOptions
                    }));
                }), onError), embedOptions.events && console.warn("Using `embedOptions.events` will likely break things. Use ReactPlayer’s callback props instead, eg onReady, onPlay, onPause");
            }
            play() {
                this.callPlayer("playVideo");
            }
            pause() {
                this.callPlayer("pauseVideo");
            }
            stop() {
                document.body.contains(this.callPlayer("getIframe")) && this.callPlayer("stopVideo");
            }
            seekTo(amount, keepPlaying = !1) {
                this.callPlayer("seekTo", amount), keepPlaying || this.props.playing || this.pause();
            }
            setVolume(fraction) {
                this.callPlayer("setVolume", 100 * fraction);
            }
            setPlaybackRate(rate) {
                this.callPlayer("setPlaybackRate", rate);
            }
            setLoop(loop) {
                this.callPlayer("setLoop", loop);
            }
            getDuration() {
                return this.callPlayer("getDuration");
            }
            getCurrentTime() {
                return this.callPlayer("getCurrentTime");
            }
            getSecondsLoaded() {
                return this.callPlayer("getVideoLoadedFraction") * this.getDuration();
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
        __publicField(YouTube, "displayName", "YouTube"), __publicField(YouTube, "canPlay", import_patterns.canPlay.youtube);
    }
} ]);