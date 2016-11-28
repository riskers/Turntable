(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Turntable", [], factory);
	else if(typeof exports === 'object')
		exports["Turntable"] = factory();
	else
		root["Turntable"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _TweenLite = __webpack_require__(3);

	var _TweenLite2 = _interopRequireDefault(_TweenLite);

	var _CSSPlugin = __webpack_require__(4);

	var _CSSPlugin2 = _interopRequireDefault(_CSSPlugin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Turntable = function () {
		function Turntable(container, config) {
			_classCallCheck(this, Turntable);

			var turnsCount = config.turnsCount;

			this.pointer = config.pointer || '';
			this.container = this.pointer || container;
			this.ANGLE = 360 / turnsCount;
			this.INIT_TIME = 8;
			this.ROTATION = 3600;
			this.NOW_ROTATION = 0;
		}

		_createClass(Turntable, [{
			key: 'action',
			value: function action(time, rotation, onComplete) {
				var container = this.container;
				var self = this;

				_TweenLite2.default.to(container, time, {
					rotation: rotation,
					onUpdate: function onUpdate() {
						self.NOW_ROTATION = Math.floor(this.ratio * self.ROTATION);
					},
					onComplete: onComplete
				});
			}
		}, {
			key: 'reset',
			value: function reset() {
				this.NOW_ROTATION = 0;
				_TweenLite2.default.set(this.container, { rotation: 0 });
			}
		}, {
			key: 'getRotation',
			value: function getRotation(index) {
				var nowRotation = this.NOW_ROTATION;
				var angle = this.ANGLE;
				var disRotation = this.pointer ? index * angle : -index * angle;

				return 360 * (Math.floor(nowRotation / 360) + 5) + disRotation;
			}
		}, {
			key: 'done',
			value: function done(index, fn) {
				var rotation = this.getRotation(index);

				this.action(4, rotation, fn);
			}
		}, {
			key: 'run',
			value: function run() {
				this.reset();

				this.action(this.INIT_TIME, this.ROTATION);
			}
		}]);

		return Turntable;
	}();

	exports.default = Turntable;
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(global) {"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/*!
	 * VERSION: 1.19.0
	 * DATE: 2016-07-16
	 * UPDATES AND DOCS AT: http://greensock.com
	 *
	 * @license Copyright (c) 2008-2016, GreenSock. All rights reserved.
	 * This work is subject to the terms at http://greensock.com/standard-license or for
	 * Club GreenSock members, the software agreement that was issued with your membership.
	 * 
	 * @author: Jack Doyle, jack@greensock.com
	 */
	!function (a, b) {
	  "use strict";
	  var c = {},
	      d = a.GreenSockGlobals = a.GreenSockGlobals || a;if (!d.TweenLite) {
	    var e,
	        f,
	        g,
	        h,
	        i,
	        j = function j(a) {
	      var b,
	          c = a.split("."),
	          e = d;for (b = 0; b < c.length; b++) {
	        e[c[b]] = e = e[c[b]] || {};
	      }return e;
	    },
	        k = j("com.greensock"),
	        l = 1e-10,
	        m = function m(a) {
	      var b,
	          c = [],
	          d = a.length;for (b = 0; b !== d; c.push(a[b++])) {}return c;
	    },
	        n = function n() {},
	        o = function () {
	      var a = Object.prototype.toString,
	          b = a.call([]);return function (c) {
	        return null != c && (c instanceof Array || "object" == (typeof c === "undefined" ? "undefined" : _typeof(c)) && !!c.push && a.call(c) === b);
	      };
	    }(),
	        p = {},
	        q = function q(e, f, g, h) {
	      this.sc = p[e] ? p[e].sc : [], p[e] = this, this.gsClass = null, this.func = g;var i = [];this.check = function (k) {
	        for (var l, m, n, o, r, s = f.length, t = s; --s > -1;) {
	          (l = p[f[s]] || new q(f[s], [])).gsClass ? (i[s] = l.gsClass, t--) : k && l.sc.push(this);
	        }if (0 === t && g) {
	          if (m = ("com.greensock." + e).split("."), n = m.pop(), o = j(m.join("."))[n] = this.gsClass = g.apply(g, i), h) if (d[n] = c[n] = o, r = "undefined" != typeof module && module.exports, !r && "function" == "function" && __webpack_require__(2)) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	            return o;
	          }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if (r) if (e === b) {
	            module.exports = c[b] = o;for (s in c) {
	              o[s] = c[s];
	            }
	          } else c[b] && (c[b][n] = o);for (s = 0; s < this.sc.length; s++) {
	            this.sc[s].check();
	          }
	        }
	      }, this.check(!0);
	    },
	        r = a._gsDefine = function (a, b, c, d) {
	      return new q(a, b, c, d);
	    },
	        s = k._class = function (a, b, c) {
	      return b = b || function () {}, r(a, [], function () {
	        return b;
	      }, c), b;
	    };r.globals = d;var t = [0, 0, 1, 1],
	        u = s("easing.Ease", function (a, b, c, d) {
	      this._func = a, this._type = c || 0, this._power = d || 0, this._params = b ? t.concat(b) : t;
	    }, !0),
	        v = u.map = {},
	        w = u.register = function (a, b, c, d) {
	      for (var e, f, g, h, i = b.split(","), j = i.length, l = (c || "easeIn,easeOut,easeInOut").split(","); --j > -1;) {
	        for (f = i[j], e = d ? s("easing." + f, null, !0) : k.easing[f] || {}, g = l.length; --g > -1;) {
	          h = l[g], v[f + "." + h] = v[h + f] = e[h] = a.getRatio ? a : a[h] || new a();
	        }
	      }
	    };for (g = u.prototype, g._calcEnd = !1, g.getRatio = function (a) {
	      if (this._func) return this._params[0] = a, this._func.apply(null, this._params);var b = this._type,
	          c = this._power,
	          d = 1 === b ? 1 - a : 2 === b ? a : .5 > a ? 2 * a : 2 * (1 - a);return 1 === c ? d *= d : 2 === c ? d *= d * d : 3 === c ? d *= d * d * d : 4 === c && (d *= d * d * d * d), 1 === b ? 1 - d : 2 === b ? d : .5 > a ? d / 2 : 1 - d / 2;
	    }, e = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], f = e.length; --f > -1;) {
	      g = e[f] + ",Power" + f, w(new u(null, null, 1, f), g, "easeOut", !0), w(new u(null, null, 2, f), g, "easeIn" + (0 === f ? ",easeNone" : "")), w(new u(null, null, 3, f), g, "easeInOut");
	    }v.linear = k.easing.Linear.easeIn, v.swing = k.easing.Quad.easeInOut;var x = s("events.EventDispatcher", function (a) {
	      this._listeners = {}, this._eventTarget = a || this;
	    });g = x.prototype, g.addEventListener = function (a, b, c, d, e) {
	      e = e || 0;var f,
	          g,
	          j = this._listeners[a],
	          k = 0;for (this !== h || i || h.wake(), null == j && (this._listeners[a] = j = []), g = j.length; --g > -1;) {
	        f = j[g], f.c === b && f.s === c ? j.splice(g, 1) : 0 === k && f.pr < e && (k = g + 1);
	      }j.splice(k, 0, { c: b, s: c, up: d, pr: e });
	    }, g.removeEventListener = function (a, b) {
	      var c,
	          d = this._listeners[a];if (d) for (c = d.length; --c > -1;) {
	        if (d[c].c === b) return void d.splice(c, 1);
	      }
	    }, g.dispatchEvent = function (a) {
	      var b,
	          c,
	          d,
	          e = this._listeners[a];if (e) for (b = e.length, b > 1 && (e = e.slice(0)), c = this._eventTarget; --b > -1;) {
	        d = e[b], d && (d.up ? d.c.call(d.s || c, { type: a, target: c }) : d.c.call(d.s || c));
	      }
	    };var y = a.requestAnimationFrame,
	        z = a.cancelAnimationFrame,
	        A = Date.now || function () {
	      return new Date().getTime();
	    },
	        B = A();for (e = ["ms", "moz", "webkit", "o"], f = e.length; --f > -1 && !y;) {
	      y = a[e[f] + "RequestAnimationFrame"], z = a[e[f] + "CancelAnimationFrame"] || a[e[f] + "CancelRequestAnimationFrame"];
	    }s("Ticker", function (a, b) {
	      var c,
	          d,
	          e,
	          f,
	          g,
	          j = this,
	          k = A(),
	          m = b !== !1 && y ? "auto" : !1,
	          o = 500,
	          p = 33,
	          q = "tick",
	          r = function r(a) {
	        var b,
	            h,
	            i = A() - B;i > o && (k += i - p), B += i, j.time = (B - k) / 1e3, b = j.time - g, (!c || b > 0 || a === !0) && (j.frame++, g += b + (b >= f ? .004 : f - b), h = !0), a !== !0 && (e = d(r)), h && j.dispatchEvent(q);
	      };x.call(j), j.time = j.frame = 0, j.tick = function () {
	        r(!0);
	      }, j.lagSmoothing = function (a, b) {
	        o = a || 1 / l, p = Math.min(b, o, 0);
	      }, j.sleep = function () {
	        null != e && (m && z ? z(e) : clearTimeout(e), d = n, e = null, j === h && (i = !1));
	      }, j.wake = function (a) {
	        null !== e ? j.sleep() : a ? k += -B + (B = A()) : j.frame > 10 && (B = A() - o + 5), d = 0 === c ? n : m && y ? y : function (a) {
	          return setTimeout(a, 1e3 * (g - j.time) + 1 | 0);
	        }, j === h && (i = !0), r(2);
	      }, j.fps = function (a) {
	        return arguments.length ? (c = a, f = 1 / (c || 60), g = this.time + f, void j.wake()) : c;
	      }, j.useRAF = function (a) {
	        return arguments.length ? (j.sleep(), m = a, void j.fps(c)) : m;
	      }, j.fps(a), setTimeout(function () {
	        "auto" === m && j.frame < 5 && "hidden" !== document.visibilityState && j.useRAF(!1);
	      }, 1500);
	    }), g = k.Ticker.prototype = new k.events.EventDispatcher(), g.constructor = k.Ticker;var C = s("core.Animation", function (a, b) {
	      if (this.vars = b = b || {}, this._duration = this._totalDuration = a || 0, this._delay = Number(b.delay) || 0, this._timeScale = 1, this._active = b.immediateRender === !0, this.data = b.data, this._reversed = b.reversed === !0, V) {
	        i || h.wake();var c = this.vars.useFrames ? U : V;c.add(this, c._time), this.vars.paused && this.paused(!0);
	      }
	    });h = C.ticker = new k.Ticker(), g = C.prototype, g._dirty = g._gc = g._initted = g._paused = !1, g._totalTime = g._time = 0, g._rawPrevTime = -1, g._next = g._last = g._onUpdate = g._timeline = g.timeline = null, g._paused = !1;var D = function D() {
	      i && A() - B > 2e3 && h.wake(), setTimeout(D, 2e3);
	    };D(), g.play = function (a, b) {
	      return null != a && this.seek(a, b), this.reversed(!1).paused(!1);
	    }, g.pause = function (a, b) {
	      return null != a && this.seek(a, b), this.paused(!0);
	    }, g.resume = function (a, b) {
	      return null != a && this.seek(a, b), this.paused(!1);
	    }, g.seek = function (a, b) {
	      return this.totalTime(Number(a), b !== !1);
	    }, g.restart = function (a, b) {
	      return this.reversed(!1).paused(!1).totalTime(a ? -this._delay : 0, b !== !1, !0);
	    }, g.reverse = function (a, b) {
	      return null != a && this.seek(a || this.totalDuration(), b), this.reversed(!0).paused(!1);
	    }, g.render = function (a, b, c) {}, g.invalidate = function () {
	      return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this;
	    }, g.isActive = function () {
	      var a,
	          b = this._timeline,
	          c = this._startTime;return !b || !this._gc && !this._paused && b.isActive() && (a = b.rawTime()) >= c && a < c + this.totalDuration() / this._timeScale;
	    }, g._enabled = function (a, b) {
	      return i || h.wake(), this._gc = !a, this._active = this.isActive(), b !== !0 && (a && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !a && this.timeline && this._timeline._remove(this, !0)), !1;
	    }, g._kill = function (a, b) {
	      return this._enabled(!1, !1);
	    }, g.kill = function (a, b) {
	      return this._kill(a, b), this;
	    }, g._uncache = function (a) {
	      for (var b = a ? this : this.timeline; b;) {
	        b._dirty = !0, b = b.timeline;
	      }return this;
	    }, g._swapSelfInParams = function (a) {
	      for (var b = a.length, c = a.concat(); --b > -1;) {
	        "{self}" === a[b] && (c[b] = this);
	      }return c;
	    }, g._callback = function (a) {
	      var b = this.vars,
	          c = b[a],
	          d = b[a + "Params"],
	          e = b[a + "Scope"] || b.callbackScope || this,
	          f = d ? d.length : 0;switch (f) {case 0:
	          c.call(e);break;case 1:
	          c.call(e, d[0]);break;case 2:
	          c.call(e, d[0], d[1]);break;default:
	          c.apply(e, d);}
	    }, g.eventCallback = function (a, b, c, d) {
	      if ("on" === (a || "").substr(0, 2)) {
	        var e = this.vars;if (1 === arguments.length) return e[a];null == b ? delete e[a] : (e[a] = b, e[a + "Params"] = o(c) && -1 !== c.join("").indexOf("{self}") ? this._swapSelfInParams(c) : c, e[a + "Scope"] = d), "onUpdate" === a && (this._onUpdate = b);
	      }return this;
	    }, g.delay = function (a) {
	      return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + a - this._delay), this._delay = a, this) : this._delay;
	    }, g.duration = function (a) {
	      return arguments.length ? (this._duration = this._totalDuration = a, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== a && this.totalTime(this._totalTime * (a / this._duration), !0), this) : (this._dirty = !1, this._duration);
	    }, g.totalDuration = function (a) {
	      return this._dirty = !1, arguments.length ? this.duration(a) : this._totalDuration;
	    }, g.time = function (a, b) {
	      return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(a > this._duration ? this._duration : a, b)) : this._time;
	    }, g.totalTime = function (a, b, c) {
	      if (i || h.wake(), !arguments.length) return this._totalTime;if (this._timeline) {
	        if (0 > a && !c && (a += this.totalDuration()), this._timeline.smoothChildTiming) {
	          this._dirty && this.totalDuration();var d = this._totalDuration,
	              e = this._timeline;if (a > d && !c && (a = d), this._startTime = (this._paused ? this._pauseTime : e._time) - (this._reversed ? d - a : a) / this._timeScale, e._dirty || this._uncache(!1), e._timeline) for (; e._timeline;) {
	            e._timeline._time !== (e._startTime + e._totalTime) / e._timeScale && e.totalTime(e._totalTime, !0), e = e._timeline;
	          }
	        }this._gc && this._enabled(!0, !1), (this._totalTime !== a || 0 === this._duration) && (I.length && X(), this.render(a, b, !1), I.length && X());
	      }return this;
	    }, g.progress = g.totalProgress = function (a, b) {
	      var c = this.duration();return arguments.length ? this.totalTime(c * a, b) : c ? this._time / c : this.ratio;
	    }, g.startTime = function (a) {
	      return arguments.length ? (a !== this._startTime && (this._startTime = a, this.timeline && this.timeline._sortChildren && this.timeline.add(this, a - this._delay)), this) : this._startTime;
	    }, g.endTime = function (a) {
	      return this._startTime + (0 != a ? this.totalDuration() : this.duration()) / this._timeScale;
	    }, g.timeScale = function (a) {
	      if (!arguments.length) return this._timeScale;if (a = a || l, this._timeline && this._timeline.smoothChildTiming) {
	        var b = this._pauseTime,
	            c = b || 0 === b ? b : this._timeline.totalTime();this._startTime = c - (c - this._startTime) * this._timeScale / a;
	      }return this._timeScale = a, this._uncache(!1);
	    }, g.reversed = function (a) {
	      return arguments.length ? (a != this._reversed && (this._reversed = a, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed;
	    }, g.paused = function (a) {
	      if (!arguments.length) return this._paused;var b,
	          c,
	          d = this._timeline;return a != this._paused && d && (i || a || h.wake(), b = d.rawTime(), c = b - this._pauseTime, !a && d.smoothChildTiming && (this._startTime += c, this._uncache(!1)), this._pauseTime = a ? b : null, this._paused = a, this._active = this.isActive(), !a && 0 !== c && this._initted && this.duration() && (b = d.smoothChildTiming ? this._totalTime : (b - this._startTime) / this._timeScale, this.render(b, b === this._totalTime, !0))), this._gc && !a && this._enabled(!0, !1), this;
	    };var E = s("core.SimpleTimeline", function (a) {
	      C.call(this, 0, a), this.autoRemoveChildren = this.smoothChildTiming = !0;
	    });g = E.prototype = new C(), g.constructor = E, g.kill()._gc = !1, g._first = g._last = g._recent = null, g._sortChildren = !1, g.add = g.insert = function (a, b, c, d) {
	      var e, f;if (a._startTime = Number(b || 0) + a._delay, a._paused && this !== a._timeline && (a._pauseTime = a._startTime + (this.rawTime() - a._startTime) / a._timeScale), a.timeline && a.timeline._remove(a, !0), a.timeline = a._timeline = this, a._gc && a._enabled(!0, !0), e = this._last, this._sortChildren) for (f = a._startTime; e && e._startTime > f;) {
	        e = e._prev;
	      }return e ? (a._next = e._next, e._next = a) : (a._next = this._first, this._first = a), a._next ? a._next._prev = a : this._last = a, a._prev = e, this._recent = a, this._timeline && this._uncache(!0), this;
	    }, g._remove = function (a, b) {
	      return a.timeline === this && (b || a._enabled(!1, !0), a._prev ? a._prev._next = a._next : this._first === a && (this._first = a._next), a._next ? a._next._prev = a._prev : this._last === a && (this._last = a._prev), a._next = a._prev = a.timeline = null, a === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this;
	    }, g.render = function (a, b, c) {
	      var d,
	          e = this._first;for (this._totalTime = this._time = this._rawPrevTime = a; e;) {
	        d = e._next, (e._active || a >= e._startTime && !e._paused) && (e._reversed ? e.render((e._dirty ? e.totalDuration() : e._totalDuration) - (a - e._startTime) * e._timeScale, b, c) : e.render((a - e._startTime) * e._timeScale, b, c)), e = d;
	      }
	    }, g.rawTime = function () {
	      return i || h.wake(), this._totalTime;
	    };var F = s("TweenLite", function (b, c, d) {
	      if (C.call(this, c, d), this.render = F.prototype.render, null == b) throw "Cannot tween a null target.";this.target = b = "string" != typeof b ? b : F.selector(b) || b;var e,
	          f,
	          g,
	          h = b.jquery || b.length && b !== a && b[0] && (b[0] === a || b[0].nodeType && b[0].style && !b.nodeType),
	          i = this.vars.overwrite;if (this._overwrite = i = null == i ? T[F.defaultOverwrite] : "number" == typeof i ? i >> 0 : T[i], (h || b instanceof Array || b.push && o(b)) && "number" != typeof b[0]) for (this._targets = g = m(b), this._propLookup = [], this._siblings = [], e = 0; e < g.length; e++) {
	        f = g[e], f ? "string" != typeof f ? f.length && f !== a && f[0] && (f[0] === a || f[0].nodeType && f[0].style && !f.nodeType) ? (g.splice(e--, 1), this._targets = g = g.concat(m(f))) : (this._siblings[e] = Y(f, this, !1), 1 === i && this._siblings[e].length > 1 && $(f, this, null, 1, this._siblings[e])) : (f = g[e--] = F.selector(f), "string" == typeof f && g.splice(e + 1, 1)) : g.splice(e--, 1);
	      } else this._propLookup = {}, this._siblings = Y(b, this, !1), 1 === i && this._siblings.length > 1 && $(b, this, null, 1, this._siblings);(this.vars.immediateRender || 0 === c && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -l, this.render(Math.min(0, -this._delay)));
	    }, !0),
	        G = function G(b) {
	      return b && b.length && b !== a && b[0] && (b[0] === a || b[0].nodeType && b[0].style && !b.nodeType);
	    },
	        H = function H(a, b) {
	      var c,
	          d = {};for (c in a) {
	        S[c] || c in b && "transform" !== c && "x" !== c && "y" !== c && "width" !== c && "height" !== c && "className" !== c && "border" !== c || !(!P[c] || P[c] && P[c]._autoCSS) || (d[c] = a[c], delete a[c]);
	      }a.css = d;
	    };g = F.prototype = new C(), g.constructor = F, g.kill()._gc = !1, g.ratio = 0, g._firstPT = g._targets = g._overwrittenProps = g._startAt = null, g._notifyPluginsOfEnabled = g._lazy = !1, F.version = "1.19.0", F.defaultEase = g._ease = new u(null, null, 1, 1), F.defaultOverwrite = "auto", F.ticker = h, F.autoSleep = 120, F.lagSmoothing = function (a, b) {
	      h.lagSmoothing(a, b);
	    }, F.selector = a.$ || a.jQuery || function (b) {
	      var c = a.$ || a.jQuery;return c ? (F.selector = c, c(b)) : "undefined" == typeof document ? b : document.querySelectorAll ? document.querySelectorAll(b) : document.getElementById("#" === b.charAt(0) ? b.substr(1) : b);
	    };var I = [],
	        J = {},
	        K = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
	        L = function L(a) {
	      for (var b, c = this._firstPT, d = 1e-6; c;) {
	        b = c.blob ? a ? this.join("") : this.start : c.c * a + c.s, c.m ? b = c.m(b, this._target || c.t) : d > b && b > -d && (b = 0), c.f ? c.fp ? c.t[c.p](c.fp, b) : c.t[c.p](b) : c.t[c.p] = b, c = c._next;
	      }
	    },
	        M = function M(a, b, c, d) {
	      var e,
	          f,
	          g,
	          h,
	          i,
	          j,
	          k,
	          l = [a, b],
	          m = 0,
	          n = "",
	          o = 0;for (l.start = a, c && (c(l), a = l[0], b = l[1]), l.length = 0, e = a.match(K) || [], f = b.match(K) || [], d && (d._next = null, d.blob = 1, l._firstPT = l._applyPT = d), i = f.length, h = 0; i > h; h++) {
	        k = f[h], j = b.substr(m, b.indexOf(k, m) - m), n += j || !h ? j : ",", m += j.length, o ? o = (o + 1) % 5 : "rgba(" === j.substr(-5) && (o = 1), k === e[h] || e.length <= h ? n += k : (n && (l.push(n), n = ""), g = parseFloat(e[h]), l.push(g), l._firstPT = { _next: l._firstPT, t: l, p: l.length - 1, s: g, c: ("=" === k.charAt(1) ? parseInt(k.charAt(0) + "1", 10) * parseFloat(k.substr(2)) : parseFloat(k) - g) || 0, f: 0, m: o && 4 > o ? Math.round : 0 }), m += k.length;
	      }return n += b.substr(m), n && l.push(n), l.setRatio = L, l;
	    },
	        N = function N(a, b, c, d, e, f, g, h, i) {
	      "function" == typeof d && (d = d(i || 0, a));var j,
	          k,
	          l = "get" === c ? a[b] : c,
	          m = _typeof(a[b]),
	          n = "string" == typeof d && "=" === d.charAt(1),
	          o = { t: a, p: b, s: l, f: "function" === m, pg: 0, n: e || b, m: f ? "function" == typeof f ? f : Math.round : 0, pr: 0, c: n ? parseInt(d.charAt(0) + "1", 10) * parseFloat(d.substr(2)) : parseFloat(d) - l || 0 };return "number" !== m && ("function" === m && "get" === c && (k = b.indexOf("set") || "function" != typeof a["get" + b.substr(3)] ? b : "get" + b.substr(3), o.s = l = g ? a[k](g) : a[k]()), "string" == typeof l && (g || isNaN(l)) ? (o.fp = g, j = M(l, d, h || F.defaultStringFilter, o), o = { t: j, p: "setRatio", s: 0, c: 1, f: 2, pg: 0, n: e || b, pr: 0, m: 0 }) : n || (o.s = parseFloat(l), o.c = parseFloat(d) - o.s || 0)), o.c ? ((o._next = this._firstPT) && (o._next._prev = o), this._firstPT = o, o) : void 0;
	    },
	        O = F._internals = { isArray: o, isSelector: G, lazyTweens: I, blobDif: M },
	        P = F._plugins = {},
	        Q = O.tweenLookup = {},
	        R = 0,
	        S = O.reservedProps = { ease: 1, delay: 1, overwrite: 1, onComplete: 1, onCompleteParams: 1, onCompleteScope: 1, useFrames: 1, runBackwards: 1, startAt: 1, onUpdate: 1, onUpdateParams: 1, onUpdateScope: 1, onStart: 1, onStartParams: 1, onStartScope: 1, onReverseComplete: 1, onReverseCompleteParams: 1, onReverseCompleteScope: 1, onRepeat: 1, onRepeatParams: 1, onRepeatScope: 1, easeParams: 1, yoyo: 1, immediateRender: 1, repeat: 1, repeatDelay: 1, data: 1, paused: 1, reversed: 1, autoCSS: 1, lazy: 1, onOverwrite: 1, callbackScope: 1, stringFilter: 1, id: 1 },
	        T = { none: 0, all: 1, auto: 2, concurrent: 3, allOnStart: 4, preexisting: 5, "true": 1, "false": 0 },
	        U = C._rootFramesTimeline = new E(),
	        V = C._rootTimeline = new E(),
	        W = 30,
	        X = O.lazyRender = function () {
	      var a,
	          b = I.length;for (J = {}; --b > -1;) {
	        a = I[b], a && a._lazy !== !1 && (a.render(a._lazy[0], a._lazy[1], !0), a._lazy = !1);
	      }I.length = 0;
	    };V._startTime = h.time, U._startTime = h.frame, V._active = U._active = !0, setTimeout(X, 1), C._updateRoot = F.render = function () {
	      var a, b, c;if (I.length && X(), V.render((h.time - V._startTime) * V._timeScale, !1, !1), U.render((h.frame - U._startTime) * U._timeScale, !1, !1), I.length && X(), h.frame >= W) {
	        W = h.frame + (parseInt(F.autoSleep, 10) || 120);for (c in Q) {
	          for (b = Q[c].tweens, a = b.length; --a > -1;) {
	            b[a]._gc && b.splice(a, 1);
	          }0 === b.length && delete Q[c];
	        }if (c = V._first, (!c || c._paused) && F.autoSleep && !U._first && 1 === h._listeners.tick.length) {
	          for (; c && c._paused;) {
	            c = c._next;
	          }c || h.sleep();
	        }
	      }
	    }, h.addEventListener("tick", C._updateRoot);var Y = function Y(a, b, c) {
	      var d,
	          e,
	          f = a._gsTweenID;if (Q[f || (a._gsTweenID = f = "t" + R++)] || (Q[f] = { target: a, tweens: [] }), b && (d = Q[f].tweens, d[e = d.length] = b, c)) for (; --e > -1;) {
	        d[e] === b && d.splice(e, 1);
	      }return Q[f].tweens;
	    },
	        Z = function Z(a, b, c, d) {
	      var e,
	          f,
	          g = a.vars.onOverwrite;return g && (e = g(a, b, c, d)), g = F.onOverwrite, g && (f = g(a, b, c, d)), e !== !1 && f !== !1;
	    },
	        $ = function $(a, b, c, d, e) {
	      var f, g, h, i;if (1 === d || d >= 4) {
	        for (i = e.length, f = 0; i > f; f++) {
	          if ((h = e[f]) !== b) h._gc || h._kill(null, a, b) && (g = !0);else if (5 === d) break;
	        }return g;
	      }var j,
	          k = b._startTime + l,
	          m = [],
	          n = 0,
	          o = 0 === b._duration;for (f = e.length; --f > -1;) {
	        (h = e[f]) === b || h._gc || h._paused || (h._timeline !== b._timeline ? (j = j || _(b, 0, o), 0 === _(h, j, o) && (m[n++] = h)) : h._startTime <= k && h._startTime + h.totalDuration() / h._timeScale > k && ((o || !h._initted) && k - h._startTime <= 2e-10 || (m[n++] = h)));
	      }for (f = n; --f > -1;) {
	        if (h = m[f], 2 === d && h._kill(c, a, b) && (g = !0), 2 !== d || !h._firstPT && h._initted) {
	          if (2 !== d && !Z(h, b)) continue;h._enabled(!1, !1) && (g = !0);
	        }
	      }return g;
	    },
	        _ = function _(a, b, c) {
	      for (var d = a._timeline, e = d._timeScale, f = a._startTime; d._timeline;) {
	        if (f += d._startTime, e *= d._timeScale, d._paused) return -100;d = d._timeline;
	      }return f /= e, f > b ? f - b : c && f === b || !a._initted && 2 * l > f - b ? l : (f += a.totalDuration() / a._timeScale / e) > b + l ? 0 : f - b - l;
	    };g._init = function () {
	      var a,
	          b,
	          c,
	          d,
	          e,
	          f,
	          g = this.vars,
	          h = this._overwrittenProps,
	          i = this._duration,
	          j = !!g.immediateRender,
	          k = g.ease;if (g.startAt) {
	        this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), e = {};for (d in g.startAt) {
	          e[d] = g.startAt[d];
	        }if (e.overwrite = !1, e.immediateRender = !0, e.lazy = j && g.lazy !== !1, e.startAt = e.delay = null, this._startAt = F.to(this.target, 0, e), j) if (this._time > 0) this._startAt = null;else if (0 !== i) return;
	      } else if (g.runBackwards && 0 !== i) if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;else {
	        0 !== this._time && (j = !1), c = {};for (d in g) {
	          S[d] && "autoCSS" !== d || (c[d] = g[d]);
	        }if (c.overwrite = 0, c.data = "isFromStart", c.lazy = j && g.lazy !== !1, c.immediateRender = j, this._startAt = F.to(this.target, 0, c), j) {
	          if (0 === this._time) return;
	        } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null);
	      }if (this._ease = k = k ? k instanceof u ? k : "function" == typeof k ? new u(k, g.easeParams) : v[k] || F.defaultEase : F.defaultEase, g.easeParams instanceof Array && k.config && (this._ease = k.config.apply(k, g.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets) for (f = this._targets.length, a = 0; f > a; a++) {
	        this._initProps(this._targets[a], this._propLookup[a] = {}, this._siblings[a], h ? h[a] : null, a) && (b = !0);
	      } else b = this._initProps(this.target, this._propLookup, this._siblings, h, 0);if (b && F._onPluginEvent("_onInitAllProps", this), h && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), g.runBackwards) for (c = this._firstPT; c;) {
	        c.s += c.c, c.c = -c.c, c = c._next;
	      }this._onUpdate = g.onUpdate, this._initted = !0;
	    }, g._initProps = function (b, c, d, e, f) {
	      var g, h, i, j, k, l;if (null == b) return !1;J[b._gsTweenID] && X(), this.vars.css || b.style && b !== a && b.nodeType && P.css && this.vars.autoCSS !== !1 && H(this.vars, b);for (g in this.vars) {
	        if (l = this.vars[g], S[g]) l && (l instanceof Array || l.push && o(l)) && -1 !== l.join("").indexOf("{self}") && (this.vars[g] = l = this._swapSelfInParams(l, this));else if (P[g] && (j = new P[g]())._onInitTween(b, this.vars[g], this, f)) {
	          for (this._firstPT = k = { _next: this._firstPT, t: j, p: "setRatio", s: 0, c: 1, f: 1, n: g, pg: 1, pr: j._priority, m: 0 }, h = j._overwriteProps.length; --h > -1;) {
	            c[j._overwriteProps[h]] = this._firstPT;
	          }(j._priority || j._onInitAllProps) && (i = !0), (j._onDisable || j._onEnable) && (this._notifyPluginsOfEnabled = !0), k._next && (k._next._prev = k);
	        } else c[g] = N.call(this, b, g, "get", l, g, 0, null, this.vars.stringFilter, f);
	      }return e && this._kill(e, b) ? this._initProps(b, c, d, e, f) : this._overwrite > 1 && this._firstPT && d.length > 1 && $(b, this, c, this._overwrite, d) ? (this._kill(c, b), this._initProps(b, c, d, e, f)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (J[b._gsTweenID] = !0), i);
	    }, g.render = function (a, b, c) {
	      var d,
	          e,
	          f,
	          g,
	          h = this._time,
	          i = this._duration,
	          j = this._rawPrevTime;if (a >= i - 1e-7) this._totalTime = this._time = i, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (d = !0, e = "onComplete", c = c || this._timeline.autoRemoveChildren), 0 === i && (this._initted || !this.vars.lazy || c) && (this._startTime === this._timeline._duration && (a = 0), (0 > j || 0 >= a && a >= -1e-7 || j === l && "isPause" !== this.data) && j !== a && (c = !0, j > l && (e = "onReverseComplete")), this._rawPrevTime = g = !b || a || j === a ? a : l);else if (1e-7 > a) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== h || 0 === i && j > 0) && (e = "onReverseComplete", d = this._reversed), 0 > a && (this._active = !1, 0 === i && (this._initted || !this.vars.lazy || c) && (j >= 0 && (j !== l || "isPause" !== this.data) && (c = !0), this._rawPrevTime = g = !b || a || j === a ? a : l)), this._initted || (c = !0);else if (this._totalTime = this._time = a, this._easeType) {
	        var k = a / i,
	            m = this._easeType,
	            n = this._easePower;(1 === m || 3 === m && k >= .5) && (k = 1 - k), 3 === m && (k *= 2), 1 === n ? k *= k : 2 === n ? k *= k * k : 3 === n ? k *= k * k * k : 4 === n && (k *= k * k * k * k), 1 === m ? this.ratio = 1 - k : 2 === m ? this.ratio = k : .5 > a / i ? this.ratio = k / 2 : this.ratio = 1 - k / 2;
	      } else this.ratio = this._ease.getRatio(a / i);if (this._time !== h || c) {
	        if (!this._initted) {
	          if (this._init(), !this._initted || this._gc) return;if (!c && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = h, this._rawPrevTime = j, I.push(this), void (this._lazy = [a, b]);this._time && !d ? this.ratio = this._ease.getRatio(this._time / i) : d && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1));
	        }for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== h && a >= 0 && (this._active = !0), 0 === h && (this._startAt && (a >= 0 ? this._startAt.render(a, b, c) : e || (e = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === i) && (b || this._callback("onStart"))), f = this._firstPT; f;) {
	          f.f ? f.t[f.p](f.c * this.ratio + f.s) : f.t[f.p] = f.c * this.ratio + f.s, f = f._next;
	        }this._onUpdate && (0 > a && this._startAt && a !== -1e-4 && this._startAt.render(a, b, c), b || (this._time !== h || d || c) && this._callback("onUpdate")), e && (!this._gc || c) && (0 > a && this._startAt && !this._onUpdate && a !== -1e-4 && this._startAt.render(a, b, c), d && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[e] && this._callback(e), 0 === i && this._rawPrevTime === l && g !== l && (this._rawPrevTime = 0));
	      }
	    }, g._kill = function (a, b, c) {
	      if ("all" === a && (a = null), null == a && (null == b || b === this.target)) return this._lazy = !1, this._enabled(!1, !1);b = "string" != typeof b ? b || this._targets || this.target : F.selector(b) || b;var d,
	          e,
	          f,
	          g,
	          h,
	          i,
	          j,
	          k,
	          l,
	          m = c && this._time && c._startTime === this._startTime && this._timeline === c._timeline;if ((o(b) || G(b)) && "number" != typeof b[0]) for (d = b.length; --d > -1;) {
	        this._kill(a, b[d], c) && (i = !0);
	      } else {
	        if (this._targets) {
	          for (d = this._targets.length; --d > -1;) {
	            if (b === this._targets[d]) {
	              h = this._propLookup[d] || {}, this._overwrittenProps = this._overwrittenProps || [], e = this._overwrittenProps[d] = a ? this._overwrittenProps[d] || {} : "all";break;
	            }
	          }
	        } else {
	          if (b !== this.target) return !1;h = this._propLookup, e = this._overwrittenProps = a ? this._overwrittenProps || {} : "all";
	        }if (h) {
	          if (j = a || h, k = a !== e && "all" !== e && a !== h && ("object" != (typeof a === "undefined" ? "undefined" : _typeof(a)) || !a._tempKill), c && (F.onOverwrite || this.vars.onOverwrite)) {
	            for (f in j) {
	              h[f] && (l || (l = []), l.push(f));
	            }if ((l || !a) && !Z(this, c, b, l)) return !1;
	          }for (f in j) {
	            (g = h[f]) && (m && (g.f ? g.t[g.p](g.s) : g.t[g.p] = g.s, i = !0), g.pg && g.t._kill(j) && (i = !0), g.pg && 0 !== g.t._overwriteProps.length || (g._prev ? g._prev._next = g._next : g === this._firstPT && (this._firstPT = g._next), g._next && (g._next._prev = g._prev), g._next = g._prev = null), delete h[f]), k && (e[f] = 1);
	          }!this._firstPT && this._initted && this._enabled(!1, !1);
	        }
	      }return i;
	    }, g.invalidate = function () {
	      return this._notifyPluginsOfEnabled && F._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], C.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -l, this.render(Math.min(0, -this._delay))), this;
	    }, g._enabled = function (a, b) {
	      if (i || h.wake(), a && this._gc) {
	        var c,
	            d = this._targets;if (d) for (c = d.length; --c > -1;) {
	          this._siblings[c] = Y(d[c], this, !0);
	        } else this._siblings = Y(this.target, this, !0);
	      }return C.prototype._enabled.call(this, a, b), this._notifyPluginsOfEnabled && this._firstPT ? F._onPluginEvent(a ? "_onEnable" : "_onDisable", this) : !1;
	    }, F.to = function (a, b, c) {
	      return new F(a, b, c);
	    }, F.from = function (a, b, c) {
	      return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender, new F(a, b, c);
	    }, F.fromTo = function (a, b, c, d) {
	      return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, new F(a, b, d);
	    }, F.delayedCall = function (a, b, c, d, e) {
	      return new F(b, 0, { delay: a, onComplete: b, onCompleteParams: c, callbackScope: d, onReverseComplete: b, onReverseCompleteParams: c, immediateRender: !1, lazy: !1, useFrames: e, overwrite: 0 });
	    }, F.set = function (a, b) {
	      return new F(a, 0, b);
	    }, F.getTweensOf = function (a, b) {
	      if (null == a) return [];a = "string" != typeof a ? a : F.selector(a) || a;var c, d, e, f;if ((o(a) || G(a)) && "number" != typeof a[0]) {
	        for (c = a.length, d = []; --c > -1;) {
	          d = d.concat(F.getTweensOf(a[c], b));
	        }for (c = d.length; --c > -1;) {
	          for (f = d[c], e = c; --e > -1;) {
	            f === d[e] && d.splice(c, 1);
	          }
	        }
	      } else for (d = Y(a).concat(), c = d.length; --c > -1;) {
	        (d[c]._gc || b && !d[c].isActive()) && d.splice(c, 1);
	      }return d;
	    }, F.killTweensOf = F.killDelayedCallsTo = function (a, b, c) {
	      "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && (c = b, b = !1);for (var d = F.getTweensOf(a, b), e = d.length; --e > -1;) {
	        d[e]._kill(c, a);
	      }
	    };var aa = s("plugins.TweenPlugin", function (a, b) {
	      this._overwriteProps = (a || "").split(","), this._propName = this._overwriteProps[0], this._priority = b || 0, this._super = aa.prototype;
	    }, !0);if (g = aa.prototype, aa.version = "1.19.0", aa.API = 2, g._firstPT = null, g._addTween = N, g.setRatio = L, g._kill = function (a) {
	      var b,
	          c = this._overwriteProps,
	          d = this._firstPT;if (null != a[this._propName]) this._overwriteProps = [];else for (b = c.length; --b > -1;) {
	        null != a[c[b]] && c.splice(b, 1);
	      }for (; d;) {
	        null != a[d.n] && (d._next && (d._next._prev = d._prev), d._prev ? (d._prev._next = d._next, d._prev = null) : this._firstPT === d && (this._firstPT = d._next)), d = d._next;
	      }return !1;
	    }, g._mod = g._roundProps = function (a) {
	      for (var b, c = this._firstPT; c;) {
	        b = a[this._propName] || null != c.n && a[c.n.split(this._propName + "_").join("")], b && "function" == typeof b && (2 === c.f ? c.t._applyPT.m = b : c.m = b), c = c._next;
	      }
	    }, F._onPluginEvent = function (a, b) {
	      var c,
	          d,
	          e,
	          f,
	          g,
	          h = b._firstPT;if ("_onInitAllProps" === a) {
	        for (; h;) {
	          for (g = h._next, d = e; d && d.pr > h.pr;) {
	            d = d._next;
	          }(h._prev = d ? d._prev : f) ? h._prev._next = h : e = h, (h._next = d) ? d._prev = h : f = h, h = g;
	        }h = b._firstPT = e;
	      }for (; h;) {
	        h.pg && "function" == typeof h.t[a] && h.t[a]() && (c = !0), h = h._next;
	      }return c;
	    }, aa.activate = function (a) {
	      for (var b = a.length; --b > -1;) {
	        a[b].API === aa.API && (P[new a[b]()._propName] = a[b]);
	      }return !0;
	    }, r.plugin = function (a) {
	      if (!(a && a.propName && a.init && a.API)) throw "illegal plugin definition.";var b,
	          c = a.propName,
	          d = a.priority || 0,
	          e = a.overwriteProps,
	          f = { init: "_onInitTween", set: "setRatio", kill: "_kill", round: "_mod", mod: "_mod", initAll: "_onInitAllProps" },
	          g = s("plugins." + c.charAt(0).toUpperCase() + c.substr(1) + "Plugin", function () {
	        aa.call(this, c, d), this._overwriteProps = e || [];
	      }, a.global === !0),
	          h = g.prototype = new aa(c);h.constructor = g, g.API = a.API;for (b in f) {
	        "function" == typeof a[b] && (h[f[b]] = a[b]);
	      }return g.version = a.version, aa.activate([g]), g;
	    }, e = a._gsQueue) {
	      for (f = 0; f < e.length; f++) {
	        e[f]();
	      }for (g in p) {
	        p[g].func || a.console.log("GSAP encountered missing dependency: " + g);
	      }
	    }i = !1;
	  }
	}("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : undefined || window, "TweenLite");
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 2 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;

	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(global) {/*!
	 * VERSION: 1.19.0
	 * DATE: 2016-07-16
	 * UPDATES AND DOCS AT: http://greensock.com
	 *
	 * @license Copyright (c) 2008-2016, GreenSock. All rights reserved.
	 * This work is subject to the terms at http://greensock.com/standard-license or for
	 * Club GreenSock members, the software agreement that was issued with your membership.
	 * 
	 * @author: Jack Doyle, jack@greensock.com
	 */
	(function(window, moduleName) {

			"use strict";
			var _exports = {},
				_globals = window.GreenSockGlobals = window.GreenSockGlobals || window;
			if (_globals.TweenLite) {
				return; //in case the core set of classes is already loaded, don't instantiate twice.
			}
			var _namespace = function(ns) {
					var a = ns.split("."),
						p = _globals, i;
					for (i = 0; i < a.length; i++) {
						p[a[i]] = p = p[a[i]] || {};
					}
					return p;
				},
				gs = _namespace("com.greensock"),
				_tinyNum = 0.0000000001,
				_slice = function(a) { //don't use Array.prototype.slice.call(target, 0) because that doesn't work in IE8 with a NodeList that's returned by querySelectorAll()
					var b = [],
						l = a.length,
						i;
					for (i = 0; i !== l; b.push(a[i++])) {}
					return b;
				},
				_emptyFunc = function() {},
				_isArray = (function() { //works around issues in iframe environments where the Array global isn't shared, thus if the object originates in a different window/iframe, "(obj instanceof Array)" will evaluate false. We added some speed optimizations to avoid Object.prototype.toString.call() unless it's absolutely necessary because it's VERY slow (like 20x slower)
					var toString = Object.prototype.toString,
						array = toString.call([]);
					return function(obj) {
						return obj != null && (obj instanceof Array || (typeof(obj) === "object" && !!obj.push && toString.call(obj) === array));
					};
				}()),
				a, i, p, _ticker, _tickerActive,
				_defLookup = {},

				/**
				 * @constructor
				 * Defines a GreenSock class, optionally with an array of dependencies that must be instantiated first and passed into the definition.
				 * This allows users to load GreenSock JS files in any order even if they have interdependencies (like CSSPlugin extends TweenPlugin which is
				 * inside TweenLite.js, but if CSSPlugin is loaded first, it should wait to run its code until TweenLite.js loads and instantiates TweenPlugin
				 * and then pass TweenPlugin to CSSPlugin's definition). This is all done automatically and internally.
				 *
				 * Every definition will be added to a "com.greensock" global object (typically window, but if a window.GreenSockGlobals object is found,
				 * it will go there as of v1.7). For example, TweenLite will be found at window.com.greensock.TweenLite and since it's a global class that should be available anywhere,
				 * it is ALSO referenced at window.TweenLite. However some classes aren't considered global, like the base com.greensock.core.Animation class, so
				 * those will only be at the package like window.com.greensock.core.Animation. Again, if you define a GreenSockGlobals object on the window, everything
				 * gets tucked neatly inside there instead of on the window directly. This allows you to do advanced things like load multiple versions of GreenSock
				 * files and put them into distinct objects (imagine a banner ad uses a newer version but the main site uses an older one). In that case, you could
				 * sandbox the banner one like:
				 *
				 * <script>
				 *     var gs = window.GreenSockGlobals = {}; //the newer version we're about to load could now be referenced in a "gs" object, like gs.TweenLite.to(...). Use whatever alias you want as long as it's unique, "gs" or "banner" or whatever.
				 * </script>
				 * <script src="js/greensock/v1.7/TweenMax.js"></script>
				 * <script>
				 *     window.GreenSockGlobals = window._gsQueue = window._gsDefine = null; //reset it back to null (along with the special _gsQueue variable) so that the next load of TweenMax affects the window and we can reference things directly like TweenLite.to(...)
				 * </script>
				 * <script src="js/greensock/v1.6/TweenMax.js"></script>
				 * <script>
				 *     gs.TweenLite.to(...); //would use v1.7
				 *     TweenLite.to(...); //would use v1.6
				 * </script>
				 *
				 * @param {!string} ns The namespace of the class definition, leaving off "com.greensock." as that's assumed. For example, "TweenLite" or "plugins.CSSPlugin" or "easing.Back".
				 * @param {!Array.<string>} dependencies An array of dependencies (described as their namespaces minus "com.greensock." prefix). For example ["TweenLite","plugins.TweenPlugin","core.Animation"]
				 * @param {!function():Object} func The function that should be called and passed the resolved dependencies which will return the actual class for this definition.
				 * @param {boolean=} global If true, the class will be added to the global scope (typically window unless you define a window.GreenSockGlobals object)
				 */
				Definition = function(ns, dependencies, func, global) {
					this.sc = (_defLookup[ns]) ? _defLookup[ns].sc : []; //subclasses
					_defLookup[ns] = this;
					this.gsClass = null;
					this.func = func;
					var _classes = [];
					this.check = function(init) {
						var i = dependencies.length,
							missing = i,
							cur, a, n, cl, hasModule;
						while (--i > -1) {
							if ((cur = _defLookup[dependencies[i]] || new Definition(dependencies[i], [])).gsClass) {
								_classes[i] = cur.gsClass;
								missing--;
							} else if (init) {
								cur.sc.push(this);
							}
						}
						if (missing === 0 && func) {
							a = ("com.greensock." + ns).split(".");
							n = a.pop();
							cl = _namespace(a.join("."))[n] = this.gsClass = func.apply(func, _classes);

							//exports to multiple environments
							if (global) {
								_globals[n] = _exports[n] = cl; //provides a way to avoid global namespace pollution. By default, the main classes like TweenLite, Power1, Strong, etc. are added to window unless a GreenSockGlobals is defined. So if you want to have things added to a custom object instead, just do something like window.GreenSockGlobals = {} before loading any GreenSock files. You can even set up an alias like window.GreenSockGlobals = windows.gs = {} so that you can access everything like gs.TweenLite. Also remember that ALL classes are added to the window.com.greensock object (in their respective packages, like com.greensock.easing.Power1, com.greensock.TweenLite, etc.)
								hasModule = (typeof(module) !== "undefined" && module.exports);
								if (!hasModule && "function" === "function" && __webpack_require__(2)){ //AMD
									!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() { return cl; }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
								} else if (hasModule){ //node
									if (ns === moduleName) {
										module.exports = _exports[moduleName] = cl;
										for (i in _exports) {
											cl[i] = _exports[i];
										}
									} else if (_exports[moduleName]) {
										_exports[moduleName][n] = cl;
									}
								}
							}
							for (i = 0; i < this.sc.length; i++) {
								this.sc[i].check();
							}
						}
					};
					this.check(true);
				},

				//used to create Definition instances (which basically registers a class that has dependencies).
				_gsDefine = window._gsDefine = function(ns, dependencies, func, global) {
					return new Definition(ns, dependencies, func, global);
				},

				//a quick way to create a class that doesn't have any dependencies. Returns the class, but first registers it in the GreenSock namespace so that other classes can grab it (other classes might be dependent on the class).
				_class = gs._class = function(ns, func, global) {
					func = func || function() {};
					_gsDefine(ns, [], function(){ return func; }, global);
					return func;
				};

			_gsDefine.globals = _globals;



	/*
	 * ----------------------------------------------------------------
	 * Ease
	 * ----------------------------------------------------------------
	 */
			var _baseParams = [0, 0, 1, 1],
				_blankArray = [],
				Ease = _class("easing.Ease", function(func, extraParams, type, power) {
					this._func = func;
					this._type = type || 0;
					this._power = power || 0;
					this._params = extraParams ? _baseParams.concat(extraParams) : _baseParams;
				}, true),
				_easeMap = Ease.map = {},
				_easeReg = Ease.register = function(ease, names, types, create) {
					var na = names.split(","),
						i = na.length,
						ta = (types || "easeIn,easeOut,easeInOut").split(","),
						e, name, j, type;
					while (--i > -1) {
						name = na[i];
						e = create ? _class("easing."+name, null, true) : gs.easing[name] || {};
						j = ta.length;
						while (--j > -1) {
							type = ta[j];
							_easeMap[name + "." + type] = _easeMap[type + name] = e[type] = ease.getRatio ? ease : ease[type] || new ease();
						}
					}
				};

			p = Ease.prototype;
			p._calcEnd = false;
			p.getRatio = function(p) {
				if (this._func) {
					this._params[0] = p;
					return this._func.apply(null, this._params);
				}
				var t = this._type,
					pw = this._power,
					r = (t === 1) ? 1 - p : (t === 2) ? p : (p < 0.5) ? p * 2 : (1 - p) * 2;
				if (pw === 1) {
					r *= r;
				} else if (pw === 2) {
					r *= r * r;
				} else if (pw === 3) {
					r *= r * r * r;
				} else if (pw === 4) {
					r *= r * r * r * r;
				}
				return (t === 1) ? 1 - r : (t === 2) ? r : (p < 0.5) ? r / 2 : 1 - (r / 2);
			};

			//create all the standard eases like Linear, Quad, Cubic, Quart, Quint, Strong, Power0, Power1, Power2, Power3, and Power4 (each with easeIn, easeOut, and easeInOut)
			a = ["Linear","Quad","Cubic","Quart","Quint,Strong"];
			i = a.length;
			while (--i > -1) {
				p = a[i]+",Power"+i;
				_easeReg(new Ease(null,null,1,i), p, "easeOut", true);
				_easeReg(new Ease(null,null,2,i), p, "easeIn" + ((i === 0) ? ",easeNone" : ""));
				_easeReg(new Ease(null,null,3,i), p, "easeInOut");
			}
			_easeMap.linear = gs.easing.Linear.easeIn;
			_easeMap.swing = gs.easing.Quad.easeInOut; //for jQuery folks


	/*
	 * ----------------------------------------------------------------
	 * EventDispatcher
	 * ----------------------------------------------------------------
	 */
			var EventDispatcher = _class("events.EventDispatcher", function(target) {
				this._listeners = {};
				this._eventTarget = target || this;
			});
			p = EventDispatcher.prototype;

			p.addEventListener = function(type, callback, scope, useParam, priority) {
				priority = priority || 0;
				var list = this._listeners[type],
					index = 0,
					listener, i;
				if (this === _ticker && !_tickerActive) {
					_ticker.wake();
				}
				if (list == null) {
					this._listeners[type] = list = [];
				}
				i = list.length;
				while (--i > -1) {
					listener = list[i];
					if (listener.c === callback && listener.s === scope) {
						list.splice(i, 1);
					} else if (index === 0 && listener.pr < priority) {
						index = i + 1;
					}
				}
				list.splice(index, 0, {c:callback, s:scope, up:useParam, pr:priority});
			};

			p.removeEventListener = function(type, callback) {
				var list = this._listeners[type], i;
				if (list) {
					i = list.length;
					while (--i > -1) {
						if (list[i].c === callback) {
							list.splice(i, 1);
							return;
						}
					}
				}
			};

			p.dispatchEvent = function(type) {
				var list = this._listeners[type],
					i, t, listener;
				if (list) {
					i = list.length;
					if (i > 1) { 
						list = list.slice(0); //in case addEventListener() is called from within a listener/callback (otherwise the index could change, resulting in a skip)
					}
					t = this._eventTarget;
					while (--i > -1) {
						listener = list[i];
						if (listener) {
							if (listener.up) {
								listener.c.call(listener.s || t, {type:type, target:t});
							} else {
								listener.c.call(listener.s || t);
							}
						}
					}
				}
			};


	/*
	 * ----------------------------------------------------------------
	 * Ticker
	 * ----------------------------------------------------------------
	 */
	 		var _reqAnimFrame = window.requestAnimationFrame,
				_cancelAnimFrame = window.cancelAnimationFrame,
				_getTime = Date.now || function() {return new Date().getTime();},
				_lastUpdate = _getTime();

			//now try to determine the requestAnimationFrame and cancelAnimationFrame functions and if none are found, we'll use a setTimeout()/clearTimeout() polyfill.
			a = ["ms","moz","webkit","o"];
			i = a.length;
			while (--i > -1 && !_reqAnimFrame) {
				_reqAnimFrame = window[a[i] + "RequestAnimationFrame"];
				_cancelAnimFrame = window[a[i] + "CancelAnimationFrame"] || window[a[i] + "CancelRequestAnimationFrame"];
			}

			_class("Ticker", function(fps, useRAF) {
				var _self = this,
					_startTime = _getTime(),
					_useRAF = (useRAF !== false && _reqAnimFrame) ? "auto" : false,
					_lagThreshold = 500,
					_adjustedLag = 33,
					_tickWord = "tick", //helps reduce gc burden
					_fps, _req, _id, _gap, _nextTime,
					_tick = function(manual) {
						var elapsed = _getTime() - _lastUpdate,
							overlap, dispatch;
						if (elapsed > _lagThreshold) {
							_startTime += elapsed - _adjustedLag;
						}
						_lastUpdate += elapsed;
						_self.time = (_lastUpdate - _startTime) / 1000;
						overlap = _self.time - _nextTime;
						if (!_fps || overlap > 0 || manual === true) {
							_self.frame++;
							_nextTime += overlap + (overlap >= _gap ? 0.004 : _gap - overlap);
							dispatch = true;
						}
						if (manual !== true) { //make sure the request is made before we dispatch the "tick" event so that timing is maintained. Otherwise, if processing the "tick" requires a bunch of time (like 15ms) and we're using a setTimeout() that's based on 16.7ms, it'd technically take 31.7ms between frames otherwise.
							_id = _req(_tick);
						}
						if (dispatch) {
							_self.dispatchEvent(_tickWord);
						}
					};

				EventDispatcher.call(_self);
				_self.time = _self.frame = 0;
				_self.tick = function() {
					_tick(true);
				};

				_self.lagSmoothing = function(threshold, adjustedLag) {
					_lagThreshold = threshold || (1 / _tinyNum); //zero should be interpreted as basically unlimited
					_adjustedLag = Math.min(adjustedLag, _lagThreshold, 0);
				};

				_self.sleep = function() {
					if (_id == null) {
						return;
					}
					if (!_useRAF || !_cancelAnimFrame) {
						clearTimeout(_id);
					} else {
						_cancelAnimFrame(_id);
					}
					_req = _emptyFunc;
					_id = null;
					if (_self === _ticker) {
						_tickerActive = false;
					}
				};

				_self.wake = function(seamless) {
					if (_id !== null) {
						_self.sleep();
					} else if (seamless) {
						_startTime += -_lastUpdate + (_lastUpdate = _getTime());
					} else if (_self.frame > 10) { //don't trigger lagSmoothing if we're just waking up, and make sure that at least 10 frames have elapsed because of the iOS bug that we work around below with the 1.5-second setTimout().
						_lastUpdate = _getTime() - _lagThreshold + 5;
					}
					_req = (_fps === 0) ? _emptyFunc : (!_useRAF || !_reqAnimFrame) ? function(f) { return setTimeout(f, ((_nextTime - _self.time) * 1000 + 1) | 0); } : _reqAnimFrame;
					if (_self === _ticker) {
						_tickerActive = true;
					}
					_tick(2);
				};

				_self.fps = function(value) {
					if (!arguments.length) {
						return _fps;
					}
					_fps = value;
					_gap = 1 / (_fps || 60);
					_nextTime = this.time + _gap;
					_self.wake();
				};

				_self.useRAF = function(value) {
					if (!arguments.length) {
						return _useRAF;
					}
					_self.sleep();
					_useRAF = value;
					_self.fps(_fps);
				};
				_self.fps(fps);

				//a bug in iOS 6 Safari occasionally prevents the requestAnimationFrame from working initially, so we use a 1.5-second timeout that automatically falls back to setTimeout() if it senses this condition.
				setTimeout(function() {
					if (_useRAF === "auto" && _self.frame < 5 && document.visibilityState !== "hidden") {
						_self.useRAF(false);
					}
				}, 1500);
			});

			p = gs.Ticker.prototype = new gs.events.EventDispatcher();
			p.constructor = gs.Ticker;


	/*
	 * ----------------------------------------------------------------
	 * Animation
	 * ----------------------------------------------------------------
	 */
			var Animation = _class("core.Animation", function(duration, vars) {
					this.vars = vars = vars || {};
					this._duration = this._totalDuration = duration || 0;
					this._delay = Number(vars.delay) || 0;
					this._timeScale = 1;
					this._active = (vars.immediateRender === true);
					this.data = vars.data;
					this._reversed = (vars.reversed === true);

					if (!_rootTimeline) {
						return;
					}
					if (!_tickerActive) { //some browsers (like iOS 6 Safari) shut down JavaScript execution when the tab is disabled and they [occasionally] neglect to start up requestAnimationFrame again when returning - this code ensures that the engine starts up again properly.
						_ticker.wake();
					}

					var tl = this.vars.useFrames ? _rootFramesTimeline : _rootTimeline;
					tl.add(this, tl._time);

					if (this.vars.paused) {
						this.paused(true);
					}
				});

			_ticker = Animation.ticker = new gs.Ticker();
			p = Animation.prototype;
			p._dirty = p._gc = p._initted = p._paused = false;
			p._totalTime = p._time = 0;
			p._rawPrevTime = -1;
			p._next = p._last = p._onUpdate = p._timeline = p.timeline = null;
			p._paused = false;


			//some browsers (like iOS) occasionally drop the requestAnimationFrame event when the user switches to a different tab and then comes back again, so we use a 2-second setTimeout() to sense if/when that condition occurs and then wake() the ticker.
			var _checkTimeout = function() {
					if (_tickerActive && _getTime() - _lastUpdate > 2000) {
						_ticker.wake();
					}
					setTimeout(_checkTimeout, 2000);
				};
			_checkTimeout();


			p.play = function(from, suppressEvents) {
				if (from != null) {
					this.seek(from, suppressEvents);
				}
				return this.reversed(false).paused(false);
			};

			p.pause = function(atTime, suppressEvents) {
				if (atTime != null) {
					this.seek(atTime, suppressEvents);
				}
				return this.paused(true);
			};

			p.resume = function(from, suppressEvents) {
				if (from != null) {
					this.seek(from, suppressEvents);
				}
				return this.paused(false);
			};

			p.seek = function(time, suppressEvents) {
				return this.totalTime(Number(time), suppressEvents !== false);
			};

			p.restart = function(includeDelay, suppressEvents) {
				return this.reversed(false).paused(false).totalTime(includeDelay ? -this._delay : 0, (suppressEvents !== false), true);
			};

			p.reverse = function(from, suppressEvents) {
				if (from != null) {
					this.seek((from || this.totalDuration()), suppressEvents);
				}
				return this.reversed(true).paused(false);
			};

			p.render = function(time, suppressEvents, force) {
				//stub - we override this method in subclasses.
			};

			p.invalidate = function() {
				this._time = this._totalTime = 0;
				this._initted = this._gc = false;
				this._rawPrevTime = -1;
				if (this._gc || !this.timeline) {
					this._enabled(true);
				}
				return this;
			};

			p.isActive = function() {
				var tl = this._timeline, //the 2 root timelines won't have a _timeline; they're always active.
					startTime = this._startTime,
					rawTime;
				return (!tl || (!this._gc && !this._paused && tl.isActive() && (rawTime = tl.rawTime()) >= startTime && rawTime < startTime + this.totalDuration() / this._timeScale));
			};

			p._enabled = function (enabled, ignoreTimeline) {
				if (!_tickerActive) {
					_ticker.wake();
				}
				this._gc = !enabled;
				this._active = this.isActive();
				if (ignoreTimeline !== true) {
					if (enabled && !this.timeline) {
						this._timeline.add(this, this._startTime - this._delay);
					} else if (!enabled && this.timeline) {
						this._timeline._remove(this, true);
					}
				}
				return false;
			};


			p._kill = function(vars, target) {
				return this._enabled(false, false);
			};

			p.kill = function(vars, target) {
				this._kill(vars, target);
				return this;
			};

			p._uncache = function(includeSelf) {
				var tween = includeSelf ? this : this.timeline;
				while (tween) {
					tween._dirty = true;
					tween = tween.timeline;
				}
				return this;
			};

			p._swapSelfInParams = function(params) {
				var i = params.length,
					copy = params.concat();
				while (--i > -1) {
					if (params[i] === "{self}") {
						copy[i] = this;
					}
				}
				return copy;
			};

			p._callback = function(type) {
				var v = this.vars,
					callback = v[type],
					params = v[type + "Params"],
					scope = v[type + "Scope"] || v.callbackScope || this,
					l = params ? params.length : 0;
				switch (l) { //speed optimization; call() is faster than apply() so use it when there are only a few parameters (which is by far most common). Previously we simply did var v = this.vars; v[type].apply(v[type + "Scope"] || v.callbackScope || this, v[type + "Params"] || _blankArray);
					case 0: callback.call(scope); break;
					case 1: callback.call(scope, params[0]); break;
					case 2: callback.call(scope, params[0], params[1]); break;
					default: callback.apply(scope, params);
				}
			};

	//----Animation getters/setters --------------------------------------------------------

			p.eventCallback = function(type, callback, params, scope) {
				if ((type || "").substr(0,2) === "on") {
					var v = this.vars;
					if (arguments.length === 1) {
						return v[type];
					}
					if (callback == null) {
						delete v[type];
					} else {
						v[type] = callback;
						v[type + "Params"] = (_isArray(params) && params.join("").indexOf("{self}") !== -1) ? this._swapSelfInParams(params) : params;
						v[type + "Scope"] = scope;
					}
					if (type === "onUpdate") {
						this._onUpdate = callback;
					}
				}
				return this;
			};

			p.delay = function(value) {
				if (!arguments.length) {
					return this._delay;
				}
				if (this._timeline.smoothChildTiming) {
					this.startTime( this._startTime + value - this._delay );
				}
				this._delay = value;
				return this;
			};

			p.duration = function(value) {
				if (!arguments.length) {
					this._dirty = false;
					return this._duration;
				}
				this._duration = this._totalDuration = value;
				this._uncache(true); //true in case it's a TweenMax or TimelineMax that has a repeat - we'll need to refresh the totalDuration.
				if (this._timeline.smoothChildTiming) if (this._time > 0) if (this._time < this._duration) if (value !== 0) {
					this.totalTime(this._totalTime * (value / this._duration), true);
				}
				return this;
			};

			p.totalDuration = function(value) {
				this._dirty = false;
				return (!arguments.length) ? this._totalDuration : this.duration(value);
			};

			p.time = function(value, suppressEvents) {
				if (!arguments.length) {
					return this._time;
				}
				if (this._dirty) {
					this.totalDuration();
				}
				return this.totalTime((value > this._duration) ? this._duration : value, suppressEvents);
			};

			p.totalTime = function(time, suppressEvents, uncapped) {
				if (!_tickerActive) {
					_ticker.wake();
				}
				if (!arguments.length) {
					return this._totalTime;
				}
				if (this._timeline) {
					if (time < 0 && !uncapped) {
						time += this.totalDuration();
					}
					if (this._timeline.smoothChildTiming) {
						if (this._dirty) {
							this.totalDuration();
						}
						var totalDuration = this._totalDuration,
							tl = this._timeline;
						if (time > totalDuration && !uncapped) {
							time = totalDuration;
						}
						this._startTime = (this._paused ? this._pauseTime : tl._time) - ((!this._reversed ? time : totalDuration - time) / this._timeScale);
						if (!tl._dirty) { //for performance improvement. If the parent's cache is already dirty, it already took care of marking the ancestors as dirty too, so skip the function call here.
							this._uncache(false);
						}
						//in case any of the ancestor timelines had completed but should now be enabled, we should reset their totalTime() which will also ensure that they're lined up properly and enabled. Skip for animations that are on the root (wasteful). Example: a TimelineLite.exportRoot() is performed when there's a paused tween on the root, the export will not complete until that tween is unpaused, but imagine a child gets restarted later, after all [unpaused] tweens have completed. The startTime of that child would get pushed out, but one of the ancestors may have completed.
						if (tl._timeline) {
							while (tl._timeline) {
								if (tl._timeline._time !== (tl._startTime + tl._totalTime) / tl._timeScale) {
									tl.totalTime(tl._totalTime, true);
								}
								tl = tl._timeline;
							}
						}
					}
					if (this._gc) {
						this._enabled(true, false);
					}
					if (this._totalTime !== time || this._duration === 0) {
						if (_lazyTweens.length) {
							_lazyRender();
						}
						this.render(time, suppressEvents, false);
						if (_lazyTweens.length) { //in case rendering caused any tweens to lazy-init, we should render them because typically when someone calls seek() or time() or progress(), they expect an immediate render.
							_lazyRender();
						}
					}
				}
				return this;
			};

			p.progress = p.totalProgress = function(value, suppressEvents) {
				var duration = this.duration();
				return (!arguments.length) ? (duration ? this._time / duration : this.ratio) : this.totalTime(duration * value, suppressEvents);
			};

			p.startTime = function(value) {
				if (!arguments.length) {
					return this._startTime;
				}
				if (value !== this._startTime) {
					this._startTime = value;
					if (this.timeline) if (this.timeline._sortChildren) {
						this.timeline.add(this, value - this._delay); //ensures that any necessary re-sequencing of Animations in the timeline occurs to make sure the rendering order is correct.
					}
				}
				return this;
			};

			p.endTime = function(includeRepeats) {
				return this._startTime + ((includeRepeats != false) ? this.totalDuration() : this.duration()) / this._timeScale;
			};

			p.timeScale = function(value) {
				if (!arguments.length) {
					return this._timeScale;
				}
				value = value || _tinyNum; //can't allow zero because it'll throw the math off
				if (this._timeline && this._timeline.smoothChildTiming) {
					var pauseTime = this._pauseTime,
						t = (pauseTime || pauseTime === 0) ? pauseTime : this._timeline.totalTime();
					this._startTime = t - ((t - this._startTime) * this._timeScale / value);
				}
				this._timeScale = value;
				return this._uncache(false);
			};

			p.reversed = function(value) {
				if (!arguments.length) {
					return this._reversed;
				}
				if (value != this._reversed) {
					this._reversed = value;
					this.totalTime(((this._timeline && !this._timeline.smoothChildTiming) ? this.totalDuration() - this._totalTime : this._totalTime), true);
				}
				return this;
			};

			p.paused = function(value) {
				if (!arguments.length) {
					return this._paused;
				}
				var tl = this._timeline,
					raw, elapsed;
				if (value != this._paused) if (tl) {
					if (!_tickerActive && !value) {
						_ticker.wake();
					}
					raw = tl.rawTime();
					elapsed = raw - this._pauseTime;
					if (!value && tl.smoothChildTiming) {
						this._startTime += elapsed;
						this._uncache(false);
					}
					this._pauseTime = value ? raw : null;
					this._paused = value;
					this._active = this.isActive();
					if (!value && elapsed !== 0 && this._initted && this.duration()) {
						raw = tl.smoothChildTiming ? this._totalTime : (raw - this._startTime) / this._timeScale;
						this.render(raw, (raw === this._totalTime), true); //in case the target's properties changed via some other tween or manual update by the user, we should force a render.
					}
				}
				if (this._gc && !value) {
					this._enabled(true, false);
				}
				return this;
			};


	/*
	 * ----------------------------------------------------------------
	 * SimpleTimeline
	 * ----------------------------------------------------------------
	 */
			var SimpleTimeline = _class("core.SimpleTimeline", function(vars) {
				Animation.call(this, 0, vars);
				this.autoRemoveChildren = this.smoothChildTiming = true;
			});

			p = SimpleTimeline.prototype = new Animation();
			p.constructor = SimpleTimeline;
			p.kill()._gc = false;
			p._first = p._last = p._recent = null;
			p._sortChildren = false;

			p.add = p.insert = function(child, position, align, stagger) {
				var prevTween, st;
				child._startTime = Number(position || 0) + child._delay;
				if (child._paused) if (this !== child._timeline) { //we only adjust the _pauseTime if it wasn't in this timeline already. Remember, sometimes a tween will be inserted again into the same timeline when its startTime is changed so that the tweens in the TimelineLite/Max are re-ordered properly in the linked list (so everything renders in the proper order).
					child._pauseTime = child._startTime + ((this.rawTime() - child._startTime) / child._timeScale);
				}
				if (child.timeline) {
					child.timeline._remove(child, true); //removes from existing timeline so that it can be properly added to this one.
				}
				child.timeline = child._timeline = this;
				if (child._gc) {
					child._enabled(true, true);
				}
				prevTween = this._last;
				if (this._sortChildren) {
					st = child._startTime;
					while (prevTween && prevTween._startTime > st) {
						prevTween = prevTween._prev;
					}
				}
				if (prevTween) {
					child._next = prevTween._next;
					prevTween._next = child;
				} else {
					child._next = this._first;
					this._first = child;
				}
				if (child._next) {
					child._next._prev = child;
				} else {
					this._last = child;
				}
				child._prev = prevTween;
				this._recent = child;
				if (this._timeline) {
					this._uncache(true);
				}
				return this;
			};

			p._remove = function(tween, skipDisable) {
				if (tween.timeline === this) {
					if (!skipDisable) {
						tween._enabled(false, true);
					}

					if (tween._prev) {
						tween._prev._next = tween._next;
					} else if (this._first === tween) {
						this._first = tween._next;
					}
					if (tween._next) {
						tween._next._prev = tween._prev;
					} else if (this._last === tween) {
						this._last = tween._prev;
					}
					tween._next = tween._prev = tween.timeline = null;
					if (tween === this._recent) {
						this._recent = this._last;
					}

					if (this._timeline) {
						this._uncache(true);
					}
				}
				return this;
			};

			p.render = function(time, suppressEvents, force) {
				var tween = this._first,
					next;
				this._totalTime = this._time = this._rawPrevTime = time;
				while (tween) {
					next = tween._next; //record it here because the value could change after rendering...
					if (tween._active || (time >= tween._startTime && !tween._paused)) {
						if (!tween._reversed) {
							tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force);
						} else {
							tween.render(((!tween._dirty) ? tween._totalDuration : tween.totalDuration()) - ((time - tween._startTime) * tween._timeScale), suppressEvents, force);
						}
					}
					tween = next;
				}
			};

			p.rawTime = function() {
				if (!_tickerActive) {
					_ticker.wake();
				}
				return this._totalTime;
			};

	/*
	 * ----------------------------------------------------------------
	 * TweenLite
	 * ----------------------------------------------------------------
	 */
			var TweenLite = _class("TweenLite", function(target, duration, vars) {
					Animation.call(this, duration, vars);
					this.render = TweenLite.prototype.render; //speed optimization (avoid prototype lookup on this "hot" method)

					if (target == null) {
						throw "Cannot tween a null target.";
					}

					this.target = target = (typeof(target) !== "string") ? target : TweenLite.selector(target) || target;

					var isSelector = (target.jquery || (target.length && target !== window && target[0] && (target[0] === window || (target[0].nodeType && target[0].style && !target.nodeType)))),
						overwrite = this.vars.overwrite,
						i, targ, targets;

					this._overwrite = overwrite = (overwrite == null) ? _overwriteLookup[TweenLite.defaultOverwrite] : (typeof(overwrite) === "number") ? overwrite >> 0 : _overwriteLookup[overwrite];

					if ((isSelector || target instanceof Array || (target.push && _isArray(target))) && typeof(target[0]) !== "number") {
						this._targets = targets = _slice(target);  //don't use Array.prototype.slice.call(target, 0) because that doesn't work in IE8 with a NodeList that's returned by querySelectorAll()
						this._propLookup = [];
						this._siblings = [];
						for (i = 0; i < targets.length; i++) {
							targ = targets[i];
							if (!targ) {
								targets.splice(i--, 1);
								continue;
							} else if (typeof(targ) === "string") {
								targ = targets[i--] = TweenLite.selector(targ); //in case it's an array of strings
								if (typeof(targ) === "string") {
									targets.splice(i+1, 1); //to avoid an endless loop (can't imagine why the selector would return a string, but just in case)
								}
								continue;
							} else if (targ.length && targ !== window && targ[0] && (targ[0] === window || (targ[0].nodeType && targ[0].style && !targ.nodeType))) { //in case the user is passing in an array of selector objects (like jQuery objects), we need to check one more level and pull things out if necessary. Also note that <select> elements pass all the criteria regarding length and the first child having style, so we must also check to ensure the target isn't an HTML node itself.
								targets.splice(i--, 1);
								this._targets = targets = targets.concat(_slice(targ));
								continue;
							}
							this._siblings[i] = _register(targ, this, false);
							if (overwrite === 1) if (this._siblings[i].length > 1) {
								_applyOverwrite(targ, this, null, 1, this._siblings[i]);
							}
						}

					} else {
						this._propLookup = {};
						this._siblings = _register(target, this, false);
						if (overwrite === 1) if (this._siblings.length > 1) {
							_applyOverwrite(target, this, null, 1, this._siblings);
						}
					}
					if (this.vars.immediateRender || (duration === 0 && this._delay === 0 && this.vars.immediateRender !== false)) {
						this._time = -_tinyNum; //forces a render without having to set the render() "force" parameter to true because we want to allow lazying by default (using the "force" parameter always forces an immediate full render)
						this.render(Math.min(0, -this._delay)); //in case delay is negative
					}
				}, true),
				_isSelector = function(v) {
					return (v && v.length && v !== window && v[0] && (v[0] === window || (v[0].nodeType && v[0].style && !v.nodeType))); //we cannot check "nodeType" if the target is window from within an iframe, otherwise it will trigger a security error in some browsers like Firefox.
				},
				_autoCSS = function(vars, target) {
					var css = {},
						p;
					for (p in vars) {
						if (!_reservedProps[p] && (!(p in target) || p === "transform" || p === "x" || p === "y" || p === "width" || p === "height" || p === "className" || p === "border") && (!_plugins[p] || (_plugins[p] && _plugins[p]._autoCSS))) { //note: <img> elements contain read-only "x" and "y" properties. We should also prioritize editing css width/height rather than the element's properties.
							css[p] = vars[p];
							delete vars[p];
						}
					}
					vars.css = css;
				};

			p = TweenLite.prototype = new Animation();
			p.constructor = TweenLite;
			p.kill()._gc = false;

	//----TweenLite defaults, overwrite management, and root updates ----------------------------------------------------

			p.ratio = 0;
			p._firstPT = p._targets = p._overwrittenProps = p._startAt = null;
			p._notifyPluginsOfEnabled = p._lazy = false;

			TweenLite.version = "1.19.0";
			TweenLite.defaultEase = p._ease = new Ease(null, null, 1, 1);
			TweenLite.defaultOverwrite = "auto";
			TweenLite.ticker = _ticker;
			TweenLite.autoSleep = 120;
			TweenLite.lagSmoothing = function(threshold, adjustedLag) {
				_ticker.lagSmoothing(threshold, adjustedLag);
			};

			TweenLite.selector = window.$ || window.jQuery || function(e) {
				var selector = window.$ || window.jQuery;
				if (selector) {
					TweenLite.selector = selector;
					return selector(e);
				}
				return (typeof(document) === "undefined") ? e : (document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById((e.charAt(0) === "#") ? e.substr(1) : e));
			};

			var _lazyTweens = [],
				_lazyLookup = {},
				_numbersExp = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,
				//_nonNumbersExp = /(?:([\-+](?!(\d|=)))|[^\d\-+=e]|(e(?![\-+][\d])))+/ig,
				_setRatio = function(v) {
					var pt = this._firstPT,
						min = 0.000001,
						val;
					while (pt) {
						val = !pt.blob ? pt.c * v + pt.s : v ? this.join("") : this.start;
						if (pt.m) {
							val = pt.m(val, this._target || pt.t);
						} else if (val < min) if (val > -min) { //prevents issues with converting very small numbers to strings in the browser
							val = 0;
						}
						if (!pt.f) {
							pt.t[pt.p] = val;
						} else if (pt.fp) {
							pt.t[pt.p](pt.fp, val);
						} else {
							pt.t[pt.p](val);
						}
						pt = pt._next;
					}
				},
				//compares two strings (start/end), finds the numbers that are different and spits back an array representing the whole value but with the changing values isolated as elements. For example, "rgb(0,0,0)" and "rgb(100,50,0)" would become ["rgb(", 0, ",", 50, ",0)"]. Notice it merges the parts that are identical (performance optimization). The array also has a linked list of PropTweens attached starting with _firstPT that contain the tweening data (t, p, s, c, f, etc.). It also stores the starting value as a "start" property so that we can revert to it if/when necessary, like when a tween rewinds fully. If the quantity of numbers differs between the start and end, it will always prioritize the end value(s). The pt parameter is optional - it's for a PropTween that will be appended to the end of the linked list and is typically for actually setting the value after all of the elements have been updated (with array.join("")).
				_blobDif = function(start, end, filter, pt) {
					var a = [start, end],
						charIndex = 0,
						s = "",
						color = 0,
						startNums, endNums, num, i, l, nonNumbers, currentNum;
					a.start = start;
					if (filter) {
						filter(a); //pass an array with the starting and ending values and let the filter do whatever it needs to the values.
						start = a[0];
						end = a[1];
					}
					a.length = 0;
					startNums = start.match(_numbersExp) || [];
					endNums = end.match(_numbersExp) || [];
					if (pt) {
						pt._next = null;
						pt.blob = 1;
						a._firstPT = a._applyPT = pt; //apply last in the linked list (which means inserting it first)
					}
					l = endNums.length;
					for (i = 0; i < l; i++) {
						currentNum = endNums[i];
						nonNumbers = end.substr(charIndex, end.indexOf(currentNum, charIndex)-charIndex);
						s += (nonNumbers || !i) ? nonNumbers : ","; //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
						charIndex += nonNumbers.length;
						if (color) { //sense rgba() values and round them.
							color = (color + 1) % 5;
						} else if (nonNumbers.substr(-5) === "rgba(") {
							color = 1;
						}
						if (currentNum === startNums[i] || startNums.length <= i) {
							s += currentNum;
						} else {
							if (s) {
								a.push(s);
								s = "";
							}
							num = parseFloat(startNums[i]);
							a.push(num);
							a._firstPT = {_next: a._firstPT, t:a, p: a.length-1, s:num, c:((currentNum.charAt(1) === "=") ? parseInt(currentNum.charAt(0) + "1", 10) * parseFloat(currentNum.substr(2)) : (parseFloat(currentNum) - num)) || 0, f:0, m:(color && color < 4) ? Math.round : 0};
							//note: we don't set _prev because we'll never need to remove individual PropTweens from this list.
						}
						charIndex += currentNum.length;
					}
					s += end.substr(charIndex);
					if (s) {
						a.push(s);
					}
					a.setRatio = _setRatio;
					return a;
				},
				//note: "funcParam" is only necessary for function-based getters/setters that require an extra parameter like getAttribute("width") and setAttribute("width", value). In this example, funcParam would be "width". Used by AttrPlugin for example.
				_addPropTween = function(target, prop, start, end, overwriteProp, mod, funcParam, stringFilter, index) {
					if (typeof(end) === "function") {
						end = end(index || 0, target);
					}
					var s = (start === "get") ? target[prop] : start,
						type = typeof(target[prop]),
						isRelative = (typeof(end) === "string" && end.charAt(1) === "="),
						pt = {t:target, p:prop, s:s, f:(type === "function"), pg:0, n:overwriteProp || prop, m:(!mod ? 0 : (typeof(mod) === "function") ? mod : Math.round), pr:0, c:isRelative ? parseInt(end.charAt(0) + "1", 10) * parseFloat(end.substr(2)) : (parseFloat(end) - s) || 0},
						blob, getterName;
					if (type !== "number") {
						if (type === "function" && start === "get") {
							getterName = ((prop.indexOf("set") || typeof(target["get" + prop.substr(3)]) !== "function") ? prop : "get" + prop.substr(3));
							pt.s = s = funcParam ? target[getterName](funcParam) : target[getterName]();
						}
						if (typeof(s) === "string" && (funcParam || isNaN(s))) {
							//a blob (string that has multiple numbers in it)
							pt.fp = funcParam;
							blob = _blobDif(s, end, stringFilter || TweenLite.defaultStringFilter, pt);
							pt = {t:blob, p:"setRatio", s:0, c:1, f:2, pg:0, n:overwriteProp || prop, pr:0, m:0}; //"2" indicates it's a Blob property tween. Needed for RoundPropsPlugin for example.
						} else if (!isRelative) {
							pt.s = parseFloat(s);
							pt.c = (parseFloat(end) - pt.s) || 0;
						}
					}
					if (pt.c) { //only add it to the linked list if there's a change.
						if ((pt._next = this._firstPT)) {
							pt._next._prev = pt;
						}
						this._firstPT = pt;
						return pt;
					}
				},
				_internals = TweenLite._internals = {isArray:_isArray, isSelector:_isSelector, lazyTweens:_lazyTweens, blobDif:_blobDif}, //gives us a way to expose certain private values to other GreenSock classes without contaminating tha main TweenLite object.
				_plugins = TweenLite._plugins = {},
				_tweenLookup = _internals.tweenLookup = {},
				_tweenLookupNum = 0,
				_reservedProps = _internals.reservedProps = {ease:1, delay:1, overwrite:1, onComplete:1, onCompleteParams:1, onCompleteScope:1, useFrames:1, runBackwards:1, startAt:1, onUpdate:1, onUpdateParams:1, onUpdateScope:1, onStart:1, onStartParams:1, onStartScope:1, onReverseComplete:1, onReverseCompleteParams:1, onReverseCompleteScope:1, onRepeat:1, onRepeatParams:1, onRepeatScope:1, easeParams:1, yoyo:1, immediateRender:1, repeat:1, repeatDelay:1, data:1, paused:1, reversed:1, autoCSS:1, lazy:1, onOverwrite:1, callbackScope:1, stringFilter:1, id:1},
				_overwriteLookup = {none:0, all:1, auto:2, concurrent:3, allOnStart:4, preexisting:5, "true":1, "false":0},
				_rootFramesTimeline = Animation._rootFramesTimeline = new SimpleTimeline(),
				_rootTimeline = Animation._rootTimeline = new SimpleTimeline(),
				_nextGCFrame = 30,
				_lazyRender = _internals.lazyRender = function() {
					var i = _lazyTweens.length,
						tween;
					_lazyLookup = {};
					while (--i > -1) {
						tween = _lazyTweens[i];
						if (tween && tween._lazy !== false) {
							tween.render(tween._lazy[0], tween._lazy[1], true);
							tween._lazy = false;
						}
					}
					_lazyTweens.length = 0;
				};

			_rootTimeline._startTime = _ticker.time;
			_rootFramesTimeline._startTime = _ticker.frame;
			_rootTimeline._active = _rootFramesTimeline._active = true;
			setTimeout(_lazyRender, 1); //on some mobile devices, there isn't a "tick" before code runs which means any lazy renders wouldn't run before the next official "tick".

			Animation._updateRoot = TweenLite.render = function() {
					var i, a, p;
					if (_lazyTweens.length) { //if code is run outside of the requestAnimationFrame loop, there may be tweens queued AFTER the engine refreshed, so we need to ensure any pending renders occur before we refresh again.
						_lazyRender();
					}
					_rootTimeline.render((_ticker.time - _rootTimeline._startTime) * _rootTimeline._timeScale, false, false);
					_rootFramesTimeline.render((_ticker.frame - _rootFramesTimeline._startTime) * _rootFramesTimeline._timeScale, false, false);
					if (_lazyTweens.length) {
						_lazyRender();
					}
					if (_ticker.frame >= _nextGCFrame) { //dump garbage every 120 frames or whatever the user sets TweenLite.autoSleep to
						_nextGCFrame = _ticker.frame + (parseInt(TweenLite.autoSleep, 10) || 120);
						for (p in _tweenLookup) {
							a = _tweenLookup[p].tweens;
							i = a.length;
							while (--i > -1) {
								if (a[i]._gc) {
									a.splice(i, 1);
								}
							}
							if (a.length === 0) {
								delete _tweenLookup[p];
							}
						}
						//if there are no more tweens in the root timelines, or if they're all paused, make the _timer sleep to reduce load on the CPU slightly
						p = _rootTimeline._first;
						if (!p || p._paused) if (TweenLite.autoSleep && !_rootFramesTimeline._first && _ticker._listeners.tick.length === 1) {
							while (p && p._paused) {
								p = p._next;
							}
							if (!p) {
								_ticker.sleep();
							}
						}
					}
				};

			_ticker.addEventListener("tick", Animation._updateRoot);

			var _register = function(target, tween, scrub) {
					var id = target._gsTweenID, a, i;
					if (!_tweenLookup[id || (target._gsTweenID = id = "t" + (_tweenLookupNum++))]) {
						_tweenLookup[id] = {target:target, tweens:[]};
					}
					if (tween) {
						a = _tweenLookup[id].tweens;
						a[(i = a.length)] = tween;
						if (scrub) {
							while (--i > -1) {
								if (a[i] === tween) {
									a.splice(i, 1);
								}
							}
						}
					}
					return _tweenLookup[id].tweens;
				},
				_onOverwrite = function(overwrittenTween, overwritingTween, target, killedProps) {
					var func = overwrittenTween.vars.onOverwrite, r1, r2;
					if (func) {
						r1 = func(overwrittenTween, overwritingTween, target, killedProps);
					}
					func = TweenLite.onOverwrite;
					if (func) {
						r2 = func(overwrittenTween, overwritingTween, target, killedProps);
					}
					return (r1 !== false && r2 !== false);
				},
				_applyOverwrite = function(target, tween, props, mode, siblings) {
					var i, changed, curTween, l;
					if (mode === 1 || mode >= 4) {
						l = siblings.length;
						for (i = 0; i < l; i++) {
							if ((curTween = siblings[i]) !== tween) {
								if (!curTween._gc) {
									if (curTween._kill(null, target, tween)) {
										changed = true;
									}
								}
							} else if (mode === 5) {
								break;
							}
						}
						return changed;
					}
					//NOTE: Add 0.0000000001 to overcome floating point errors that can cause the startTime to be VERY slightly off (when a tween's time() is set for example)
					var startTime = tween._startTime + _tinyNum,
						overlaps = [],
						oCount = 0,
						zeroDur = (tween._duration === 0),
						globalStart;
					i = siblings.length;
					while (--i > -1) {
						if ((curTween = siblings[i]) === tween || curTween._gc || curTween._paused) {
							//ignore
						} else if (curTween._timeline !== tween._timeline) {
							globalStart = globalStart || _checkOverlap(tween, 0, zeroDur);
							if (_checkOverlap(curTween, globalStart, zeroDur) === 0) {
								overlaps[oCount++] = curTween;
							}
						} else if (curTween._startTime <= startTime) if (curTween._startTime + curTween.totalDuration() / curTween._timeScale > startTime) if (!((zeroDur || !curTween._initted) && startTime - curTween._startTime <= 0.0000000002)) {
							overlaps[oCount++] = curTween;
						}
					}

					i = oCount;
					while (--i > -1) {
						curTween = overlaps[i];
						if (mode === 2) if (curTween._kill(props, target, tween)) {
							changed = true;
						}
						if (mode !== 2 || (!curTween._firstPT && curTween._initted)) {
							if (mode !== 2 && !_onOverwrite(curTween, tween)) {
								continue;
							}
							if (curTween._enabled(false, false)) { //if all property tweens have been overwritten, kill the tween.
								changed = true;
							}
						}
					}
					return changed;
				},
				_checkOverlap = function(tween, reference, zeroDur) {
					var tl = tween._timeline,
						ts = tl._timeScale,
						t = tween._startTime;
					while (tl._timeline) {
						t += tl._startTime;
						ts *= tl._timeScale;
						if (tl._paused) {
							return -100;
						}
						tl = tl._timeline;
					}
					t /= ts;
					return (t > reference) ? t - reference : ((zeroDur && t === reference) || (!tween._initted && t - reference < 2 * _tinyNum)) ? _tinyNum : ((t += tween.totalDuration() / tween._timeScale / ts) > reference + _tinyNum) ? 0 : t - reference - _tinyNum;
				};


	//---- TweenLite instance methods -----------------------------------------------------------------------------

			p._init = function() {
				var v = this.vars,
					op = this._overwrittenProps,
					dur = this._duration,
					immediate = !!v.immediateRender,
					ease = v.ease,
					i, initPlugins, pt, p, startVars, l;
				if (v.startAt) {
					if (this._startAt) {
						this._startAt.render(-1, true); //if we've run a startAt previously (when the tween instantiated), we should revert it so that the values re-instantiate correctly particularly for relative tweens. Without this, a TweenLite.fromTo(obj, 1, {x:"+=100"}, {x:"-=100"}), for example, would actually jump to +=200 because the startAt would run twice, doubling the relative change.
						this._startAt.kill();
					}
					startVars = {};
					for (p in v.startAt) { //copy the properties/values into a new object to avoid collisions, like var to = {x:0}, from = {x:500}; timeline.fromTo(e, 1, from, to).fromTo(e, 1, to, from);
						startVars[p] = v.startAt[p];
					}
					startVars.overwrite = false;
					startVars.immediateRender = true;
					startVars.lazy = (immediate && v.lazy !== false);
					startVars.startAt = startVars.delay = null; //no nesting of startAt objects allowed (otherwise it could cause an infinite loop).
					this._startAt = TweenLite.to(this.target, 0, startVars);
					if (immediate) {
						if (this._time > 0) {
							this._startAt = null; //tweens that render immediately (like most from() and fromTo() tweens) shouldn't revert when their parent timeline's playhead goes backward past the startTime because the initial render could have happened anytime and it shouldn't be directly correlated to this tween's startTime. Imagine setting up a complex animation where the beginning states of various objects are rendered immediately but the tween doesn't happen for quite some time - if we revert to the starting values as soon as the playhead goes backward past the tween's startTime, it will throw things off visually. Reversion should only happen in TimelineLite/Max instances where immediateRender was false (which is the default in the convenience methods like from()).
						} else if (dur !== 0) {
							return; //we skip initialization here so that overwriting doesn't occur until the tween actually begins. Otherwise, if you create several immediateRender:true tweens of the same target/properties to drop into a TimelineLite or TimelineMax, the last one created would overwrite the first ones because they didn't get placed into the timeline yet before the first render occurs and kicks in overwriting.
						}
					}
				} else if (v.runBackwards && dur !== 0) {
					//from() tweens must be handled uniquely: their beginning values must be rendered but we don't want overwriting to occur yet (when time is still 0). Wait until the tween actually begins before doing all the routines like overwriting. At that time, we should render at the END of the tween to ensure that things initialize correctly (remember, from() tweens go backwards)
					if (this._startAt) {
						this._startAt.render(-1, true);
						this._startAt.kill();
						this._startAt = null;
					} else {
						if (this._time !== 0) { //in rare cases (like if a from() tween runs and then is invalidate()-ed), immediateRender could be true but the initial forced-render gets skipped, so there's no need to force the render in this context when the _time is greater than 0
							immediate = false;
						}
						pt = {};
						for (p in v) { //copy props into a new object and skip any reserved props, otherwise onComplete or onUpdate or onStart could fire. We should, however, permit autoCSS to go through.
							if (!_reservedProps[p] || p === "autoCSS") {
								pt[p] = v[p];
							}
						}
						pt.overwrite = 0;
						pt.data = "isFromStart"; //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
						pt.lazy = (immediate && v.lazy !== false);
						pt.immediateRender = immediate; //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
						this._startAt = TweenLite.to(this.target, 0, pt);
						if (!immediate) {
							this._startAt._init(); //ensures that the initial values are recorded
							this._startAt._enabled(false); //no need to have the tween render on the next cycle. Disable it because we'll always manually control the renders of the _startAt tween.
							if (this.vars.immediateRender) {
								this._startAt = null;
							}
						} else if (this._time === 0) {
							return;
						}
					}
				}
				this._ease = ease = (!ease) ? TweenLite.defaultEase : (ease instanceof Ease) ? ease : (typeof(ease) === "function") ? new Ease(ease, v.easeParams) : _easeMap[ease] || TweenLite.defaultEase;
				if (v.easeParams instanceof Array && ease.config) {
					this._ease = ease.config.apply(ease, v.easeParams);
				}
				this._easeType = this._ease._type;
				this._easePower = this._ease._power;
				this._firstPT = null;

				if (this._targets) {
					l = this._targets.length;
					for (i = 0; i < l; i++) {
						if ( this._initProps( this._targets[i], (this._propLookup[i] = {}), this._siblings[i], (op ? op[i] : null), i) ) {
							initPlugins = true;
						}
					}
				} else {
					initPlugins = this._initProps(this.target, this._propLookup, this._siblings, op, 0);
				}

				if (initPlugins) {
					TweenLite._onPluginEvent("_onInitAllProps", this); //reorders the array in order of priority. Uses a static TweenPlugin method in order to minimize file size in TweenLite
				}
				if (op) if (!this._firstPT) if (typeof(this.target) !== "function") { //if all tweening properties have been overwritten, kill the tween. If the target is a function, it's probably a delayedCall so let it live.
					this._enabled(false, false);
				}
				if (v.runBackwards) {
					pt = this._firstPT;
					while (pt) {
						pt.s += pt.c;
						pt.c = -pt.c;
						pt = pt._next;
					}
				}
				this._onUpdate = v.onUpdate;
				this._initted = true;
			};

			p._initProps = function(target, propLookup, siblings, overwrittenProps, index) {
				var p, i, initPlugins, plugin, pt, v;
				if (target == null) {
					return false;
				}

				if (_lazyLookup[target._gsTweenID]) {
					_lazyRender(); //if other tweens of the same target have recently initted but haven't rendered yet, we've got to force the render so that the starting values are correct (imagine populating a timeline with a bunch of sequential tweens and then jumping to the end)
				}

				if (!this.vars.css) if (target.style) if (target !== window && target.nodeType) if (_plugins.css) if (this.vars.autoCSS !== false) { //it's so common to use TweenLite/Max to animate the css of DOM elements, we assume that if the target is a DOM element, that's what is intended (a convenience so that users don't have to wrap things in css:{}, although we still recommend it for a slight performance boost and better specificity). Note: we cannot check "nodeType" on the window inside an iframe.
					_autoCSS(this.vars, target);
				}
				for (p in this.vars) {
					v = this.vars[p];
					if (_reservedProps[p]) {
						if (v) if ((v instanceof Array) || (v.push && _isArray(v))) if (v.join("").indexOf("{self}") !== -1) {
							this.vars[p] = v = this._swapSelfInParams(v, this);
						}

					} else if (_plugins[p] && (plugin = new _plugins[p]())._onInitTween(target, this.vars[p], this, index)) {

						//t - target 		[object]
						//p - property 		[string]
						//s - start			[number]
						//c - change		[number]
						//f - isFunction	[boolean]
						//n - name			[string]
						//pg - isPlugin 	[boolean]
						//pr - priority		[number]
						//m - mod           [function | 0]
						this._firstPT = pt = {_next:this._firstPT, t:plugin, p:"setRatio", s:0, c:1, f:1, n:p, pg:1, pr:plugin._priority, m:0};
						i = plugin._overwriteProps.length;
						while (--i > -1) {
							propLookup[plugin._overwriteProps[i]] = this._firstPT;
						}
						if (plugin._priority || plugin._onInitAllProps) {
							initPlugins = true;
						}
						if (plugin._onDisable || plugin._onEnable) {
							this._notifyPluginsOfEnabled = true;
						}
						if (pt._next) {
							pt._next._prev = pt;
						}

					} else {
						propLookup[p] = _addPropTween.call(this, target, p, "get", v, p, 0, null, this.vars.stringFilter, index);
					}
				}

				if (overwrittenProps) if (this._kill(overwrittenProps, target)) { //another tween may have tried to overwrite properties of this tween before init() was called (like if two tweens start at the same time, the one created second will run first)
					return this._initProps(target, propLookup, siblings, overwrittenProps, index);
				}
				if (this._overwrite > 1) if (this._firstPT) if (siblings.length > 1) if (_applyOverwrite(target, this, propLookup, this._overwrite, siblings)) {
					this._kill(propLookup, target);
					return this._initProps(target, propLookup, siblings, overwrittenProps, index);
				}
				if (this._firstPT) if ((this.vars.lazy !== false && this._duration) || (this.vars.lazy && !this._duration)) { //zero duration tweens don't lazy render by default; everything else does.
					_lazyLookup[target._gsTweenID] = true;
				}
				return initPlugins;
			};

			p.render = function(time, suppressEvents, force) {
				var prevTime = this._time,
					duration = this._duration,
					prevRawPrevTime = this._rawPrevTime,
					isComplete, callback, pt, rawPrevTime;
				if (time >= duration - 0.0000001) { //to work around occasional floating point math artifacts.
					this._totalTime = this._time = duration;
					this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1;
					if (!this._reversed ) {
						isComplete = true;
						callback = "onComplete";
						force = (force || this._timeline.autoRemoveChildren); //otherwise, if the animation is unpaused/activated after it's already finished, it doesn't get removed from the parent timeline.
					}
					if (duration === 0) if (this._initted || !this.vars.lazy || force) { //zero-duration tweens are tricky because we must discern the momentum/direction of time in order to determine whether the starting values should be rendered or the ending values. If the "playhead" of its timeline goes past the zero-duration tween in the forward direction or lands directly on it, the end values should be rendered, but if the timeline's "playhead" moves past it in the backward direction (from a postitive time to a negative time), the starting values must be rendered.
						if (this._startTime === this._timeline._duration) { //if a zero-duration tween is at the VERY end of a timeline and that timeline renders at its end, it will typically add a tiny bit of cushion to the render time to prevent rounding errors from getting in the way of tweens rendering their VERY end. If we then reverse() that timeline, the zero-duration tween will trigger its onReverseComplete even though technically the playhead didn't pass over it again. It's a very specific edge case we must accommodate.
							time = 0;
						}
						if (prevRawPrevTime < 0 || (time <= 0 && time >= -0.0000001) || (prevRawPrevTime === _tinyNum && this.data !== "isPause")) if (prevRawPrevTime !== time) { //note: when this.data is "isPause", it's a callback added by addPause() on a timeline that we should not be triggered when LEAVING its exact start time. In other words, tl.addPause(1).play(1) shouldn't pause.
							force = true;
							if (prevRawPrevTime > _tinyNum) {
								callback = "onReverseComplete";
							}
						}
						this._rawPrevTime = rawPrevTime = (!suppressEvents || time || prevRawPrevTime === time) ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
					}

				} else if (time < 0.0000001) { //to work around occasional floating point math artifacts, round super small values to 0.
					this._totalTime = this._time = 0;
					this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0;
					if (prevTime !== 0 || (duration === 0 && prevRawPrevTime > 0)) {
						callback = "onReverseComplete";
						isComplete = this._reversed;
					}
					if (time < 0) {
						this._active = false;
						if (duration === 0) if (this._initted || !this.vars.lazy || force) { //zero-duration tweens are tricky because we must discern the momentum/direction of time in order to determine whether the starting values should be rendered or the ending values. If the "playhead" of its timeline goes past the zero-duration tween in the forward direction or lands directly on it, the end values should be rendered, but if the timeline's "playhead" moves past it in the backward direction (from a postitive time to a negative time), the starting values must be rendered.
							if (prevRawPrevTime >= 0 && !(prevRawPrevTime === _tinyNum && this.data === "isPause")) {
								force = true;
							}
							this._rawPrevTime = rawPrevTime = (!suppressEvents || time || prevRawPrevTime === time) ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
						}
					}
					if (!this._initted) { //if we render the very beginning (time == 0) of a fromTo(), we must force the render (normal tweens wouldn't need to render at a time of 0 when the prevTime was also 0). This is also mandatory to make sure overwriting kicks in immediately.
						force = true;
					}
				} else {
					this._totalTime = this._time = time;

					if (this._easeType) {
						var r = time / duration, type = this._easeType, pow = this._easePower;
						if (type === 1 || (type === 3 && r >= 0.5)) {
							r = 1 - r;
						}
						if (type === 3) {
							r *= 2;
						}
						if (pow === 1) {
							r *= r;
						} else if (pow === 2) {
							r *= r * r;
						} else if (pow === 3) {
							r *= r * r * r;
						} else if (pow === 4) {
							r *= r * r * r * r;
						}

						if (type === 1) {
							this.ratio = 1 - r;
						} else if (type === 2) {
							this.ratio = r;
						} else if (time / duration < 0.5) {
							this.ratio = r / 2;
						} else {
							this.ratio = 1 - (r / 2);
						}

					} else {
						this.ratio = this._ease.getRatio(time / duration);
					}
				}

				if (this._time === prevTime && !force) {
					return;
				} else if (!this._initted) {
					this._init();
					if (!this._initted || this._gc) { //immediateRender tweens typically won't initialize until the playhead advances (_time is greater than 0) in order to ensure that overwriting occurs properly. Also, if all of the tweening properties have been overwritten (which would cause _gc to be true, as set in _init()), we shouldn't continue otherwise an onStart callback could be called for example.
						return;
					} else if (!force && this._firstPT && ((this.vars.lazy !== false && this._duration) || (this.vars.lazy && !this._duration))) {
						this._time = this._totalTime = prevTime;
						this._rawPrevTime = prevRawPrevTime;
						_lazyTweens.push(this);
						this._lazy = [time, suppressEvents];
						return;
					}
					//_ease is initially set to defaultEase, so now that init() has run, _ease is set properly and we need to recalculate the ratio. Overall this is faster than using conditional logic earlier in the method to avoid having to set ratio twice because we only init() once but renderTime() gets called VERY frequently.
					if (this._time && !isComplete) {
						this.ratio = this._ease.getRatio(this._time / duration);
					} else if (isComplete && this._ease._calcEnd) {
						this.ratio = this._ease.getRatio((this._time === 0) ? 0 : 1);
					}
				}
				if (this._lazy !== false) { //in case a lazy render is pending, we should flush it because the new render is occurring now (imagine a lazy tween instantiating and then immediately the user calls tween.seek(tween.duration()), skipping to the end - the end render would be forced, and then if we didn't flush the lazy render, it'd fire AFTER the seek(), rendering it at the wrong time.
					this._lazy = false;
				}
				if (!this._active) if (!this._paused && this._time !== prevTime && time >= 0) {
					this._active = true;  //so that if the user renders a tween (as opposed to the timeline rendering it), the timeline is forced to re-render and align it with the proper time/frame on the next rendering cycle. Maybe the tween already finished but the user manually re-renders it as halfway done.
				}
				if (prevTime === 0) {
					if (this._startAt) {
						if (time >= 0) {
							this._startAt.render(time, suppressEvents, force);
						} else if (!callback) {
							callback = "_dummyGS"; //if no callback is defined, use a dummy value just so that the condition at the end evaluates as true because _startAt should render AFTER the normal render loop when the time is negative. We could handle this in a more intuitive way, of course, but the render loop is the MOST important thing to optimize, so this technique allows us to avoid adding extra conditional logic in a high-frequency area.
						}
					}
					if (this.vars.onStart) if (this._time !== 0 || duration === 0) if (!suppressEvents) {
						this._callback("onStart");
					}
				}
				pt = this._firstPT;
				while (pt) {
					if (pt.f) {
						pt.t[pt.p](pt.c * this.ratio + pt.s);
					} else {
						pt.t[pt.p] = pt.c * this.ratio + pt.s;
					}
					pt = pt._next;
				}

				if (this._onUpdate) {
					if (time < 0) if (this._startAt && time !== -0.0001) { //if the tween is positioned at the VERY beginning (_startTime 0) of its parent timeline, it's illegal for the playhead to go back further, so we should not render the recorded startAt values.
						this._startAt.render(time, suppressEvents, force); //note: for performance reasons, we tuck this conditional logic inside less traveled areas (most tweens don't have an onUpdate). We'd just have it at the end before the onComplete, but the values should be updated before any onUpdate is called, so we ALSO put it here and then if it's not called, we do so later near the onComplete.
					}
					if (!suppressEvents) if (this._time !== prevTime || isComplete || force) {
						this._callback("onUpdate");
					}
				}
				if (callback) if (!this._gc || force) { //check _gc because there's a chance that kill() could be called in an onUpdate
					if (time < 0 && this._startAt && !this._onUpdate && time !== -0.0001) { //-0.0001 is a special value that we use when looping back to the beginning of a repeated TimelineMax, in which case we shouldn't render the _startAt values.
						this._startAt.render(time, suppressEvents, force);
					}
					if (isComplete) {
						if (this._timeline.autoRemoveChildren) {
							this._enabled(false, false);
						}
						this._active = false;
					}
					if (!suppressEvents && this.vars[callback]) {
						this._callback(callback);
					}
					if (duration === 0 && this._rawPrevTime === _tinyNum && rawPrevTime !== _tinyNum) { //the onComplete or onReverseComplete could trigger movement of the playhead and for zero-duration tweens (which must discern direction) that land directly back on their start time, we don't want to fire again on the next render. Think of several addPause()'s in a timeline that forces the playhead to a certain spot, but what if it's already paused and another tween is tweening the "time" of the timeline? Each time it moves [forward] past that spot, it would move back, and since suppressEvents is true, it'd reset _rawPrevTime to _tinyNum so that when it begins again, the callback would fire (so ultimately it could bounce back and forth during that tween). Again, this is a very uncommon scenario, but possible nonetheless.
						this._rawPrevTime = 0;
					}
				}
			};

			p._kill = function(vars, target, overwritingTween) {
				if (vars === "all") {
					vars = null;
				}
				if (vars == null) if (target == null || target === this.target) {
					this._lazy = false;
					return this._enabled(false, false);
				}
				target = (typeof(target) !== "string") ? (target || this._targets || this.target) : TweenLite.selector(target) || target;
				var simultaneousOverwrite = (overwritingTween && this._time && overwritingTween._startTime === this._startTime && this._timeline === overwritingTween._timeline),
					i, overwrittenProps, p, pt, propLookup, changed, killProps, record, killed;
				if ((_isArray(target) || _isSelector(target)) && typeof(target[0]) !== "number") {
					i = target.length;
					while (--i > -1) {
						if (this._kill(vars, target[i], overwritingTween)) {
							changed = true;
						}
					}
				} else {
					if (this._targets) {
						i = this._targets.length;
						while (--i > -1) {
							if (target === this._targets[i]) {
								propLookup = this._propLookup[i] || {};
								this._overwrittenProps = this._overwrittenProps || [];
								overwrittenProps = this._overwrittenProps[i] = vars ? this._overwrittenProps[i] || {} : "all";
								break;
							}
						}
					} else if (target !== this.target) {
						return false;
					} else {
						propLookup = this._propLookup;
						overwrittenProps = this._overwrittenProps = vars ? this._overwrittenProps || {} : "all";
					}

					if (propLookup) {
						killProps = vars || propLookup;
						record = (vars !== overwrittenProps && overwrittenProps !== "all" && vars !== propLookup && (typeof(vars) !== "object" || !vars._tempKill)); //_tempKill is a super-secret way to delete a particular tweening property but NOT have it remembered as an official overwritten property (like in BezierPlugin)
						if (overwritingTween && (TweenLite.onOverwrite || this.vars.onOverwrite)) {
							for (p in killProps) {
								if (propLookup[p]) {
									if (!killed) {
										killed = [];
									}
									killed.push(p);
								}
							}
							if ((killed || !vars) && !_onOverwrite(this, overwritingTween, target, killed)) { //if the onOverwrite returned false, that means the user wants to override the overwriting (cancel it).
								return false;
							}
						}

						for (p in killProps) {
							if ((pt = propLookup[p])) {
								if (simultaneousOverwrite) { //if another tween overwrites this one and they both start at exactly the same time, yet this tween has already rendered once (for example, at 0.001) because it's first in the queue, we should revert the values to where they were at 0 so that the starting values aren't contaminated on the overwriting tween.
									if (pt.f) {
										pt.t[pt.p](pt.s);
									} else {
										pt.t[pt.p] = pt.s;
									}
									changed = true;
								}
								if (pt.pg && pt.t._kill(killProps)) {
									changed = true; //some plugins need to be notified so they can perform cleanup tasks first
								}
								if (!pt.pg || pt.t._overwriteProps.length === 0) {
									if (pt._prev) {
										pt._prev._next = pt._next;
									} else if (pt === this._firstPT) {
										this._firstPT = pt._next;
									}
									if (pt._next) {
										pt._next._prev = pt._prev;
									}
									pt._next = pt._prev = null;
								}
								delete propLookup[p];
							}
							if (record) {
								overwrittenProps[p] = 1;
							}
						}
						if (!this._firstPT && this._initted) { //if all tweening properties are killed, kill the tween. Without this line, if there's a tween with multiple targets and then you killTweensOf() each target individually, the tween would technically still remain active and fire its onComplete even though there aren't any more properties tweening.
							this._enabled(false, false);
						}
					}
				}
				return changed;
			};

			p.invalidate = function() {
				if (this._notifyPluginsOfEnabled) {
					TweenLite._onPluginEvent("_onDisable", this);
				}
				this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null;
				this._notifyPluginsOfEnabled = this._active = this._lazy = false;
				this._propLookup = (this._targets) ? {} : [];
				Animation.prototype.invalidate.call(this);
				if (this.vars.immediateRender) {
					this._time = -_tinyNum; //forces a render without having to set the render() "force" parameter to true because we want to allow lazying by default (using the "force" parameter always forces an immediate full render)
					this.render(Math.min(0, -this._delay)); //in case delay is negative.
				}
				return this;
			};

			p._enabled = function(enabled, ignoreTimeline) {
				if (!_tickerActive) {
					_ticker.wake();
				}
				if (enabled && this._gc) {
					var targets = this._targets,
						i;
					if (targets) {
						i = targets.length;
						while (--i > -1) {
							this._siblings[i] = _register(targets[i], this, true);
						}
					} else {
						this._siblings = _register(this.target, this, true);
					}
				}
				Animation.prototype._enabled.call(this, enabled, ignoreTimeline);
				if (this._notifyPluginsOfEnabled) if (this._firstPT) {
					return TweenLite._onPluginEvent((enabled ? "_onEnable" : "_onDisable"), this);
				}
				return false;
			};


	//----TweenLite static methods -----------------------------------------------------

			TweenLite.to = function(target, duration, vars) {
				return new TweenLite(target, duration, vars);
			};

			TweenLite.from = function(target, duration, vars) {
				vars.runBackwards = true;
				vars.immediateRender = (vars.immediateRender != false);
				return new TweenLite(target, duration, vars);
			};

			TweenLite.fromTo = function(target, duration, fromVars, toVars) {
				toVars.startAt = fromVars;
				toVars.immediateRender = (toVars.immediateRender != false && fromVars.immediateRender != false);
				return new TweenLite(target, duration, toVars);
			};

			TweenLite.delayedCall = function(delay, callback, params, scope, useFrames) {
				return new TweenLite(callback, 0, {delay:delay, onComplete:callback, onCompleteParams:params, callbackScope:scope, onReverseComplete:callback, onReverseCompleteParams:params, immediateRender:false, lazy:false, useFrames:useFrames, overwrite:0});
			};

			TweenLite.set = function(target, vars) {
				return new TweenLite(target, 0, vars);
			};

			TweenLite.getTweensOf = function(target, onlyActive) {
				if (target == null) { return []; }
				target = (typeof(target) !== "string") ? target : TweenLite.selector(target) || target;
				var i, a, j, t;
				if ((_isArray(target) || _isSelector(target)) && typeof(target[0]) !== "number") {
					i = target.length;
					a = [];
					while (--i > -1) {
						a = a.concat(TweenLite.getTweensOf(target[i], onlyActive));
					}
					i = a.length;
					//now get rid of any duplicates (tweens of arrays of objects could cause duplicates)
					while (--i > -1) {
						t = a[i];
						j = i;
						while (--j > -1) {
							if (t === a[j]) {
								a.splice(i, 1);
							}
						}
					}
				} else {
					a = _register(target).concat();
					i = a.length;
					while (--i > -1) {
						if (a[i]._gc || (onlyActive && !a[i].isActive())) {
							a.splice(i, 1);
						}
					}
				}
				return a;
			};

			TweenLite.killTweensOf = TweenLite.killDelayedCallsTo = function(target, onlyActive, vars) {
				if (typeof(onlyActive) === "object") {
					vars = onlyActive; //for backwards compatibility (before "onlyActive" parameter was inserted)
					onlyActive = false;
				}
				var a = TweenLite.getTweensOf(target, onlyActive),
					i = a.length;
				while (--i > -1) {
					a[i]._kill(vars, target);
				}
			};



	/*
	 * ----------------------------------------------------------------
	 * TweenPlugin   (could easily be split out as a separate file/class, but included for ease of use (so that people don't need to include another script call before loading plugins which is easy to forget)
	 * ----------------------------------------------------------------
	 */
			var TweenPlugin = _class("plugins.TweenPlugin", function(props, priority) {
						this._overwriteProps = (props || "").split(",");
						this._propName = this._overwriteProps[0];
						this._priority = priority || 0;
						this._super = TweenPlugin.prototype;
					}, true);

			p = TweenPlugin.prototype;
			TweenPlugin.version = "1.19.0";
			TweenPlugin.API = 2;
			p._firstPT = null;
			p._addTween = _addPropTween;
			p.setRatio = _setRatio;

			p._kill = function(lookup) {
				var a = this._overwriteProps,
					pt = this._firstPT,
					i;
				if (lookup[this._propName] != null) {
					this._overwriteProps = [];
				} else {
					i = a.length;
					while (--i > -1) {
						if (lookup[a[i]] != null) {
							a.splice(i, 1);
						}
					}
				}
				while (pt) {
					if (lookup[pt.n] != null) {
						if (pt._next) {
							pt._next._prev = pt._prev;
						}
						if (pt._prev) {
							pt._prev._next = pt._next;
							pt._prev = null;
						} else if (this._firstPT === pt) {
							this._firstPT = pt._next;
						}
					}
					pt = pt._next;
				}
				return false;
			};

			p._mod = p._roundProps = function(lookup) {
				var pt = this._firstPT,
					val;
				while (pt) {
					val = lookup[this._propName] || (pt.n != null && lookup[ pt.n.split(this._propName + "_").join("") ]);
					if (val && typeof(val) === "function") { //some properties that are very plugin-specific add a prefix named after the _propName plus an underscore, so we need to ignore that extra stuff here.
						if (pt.f === 2) {
							pt.t._applyPT.m = val;
						} else {
							pt.m = val;
						}
					}
					pt = pt._next;
				}
			};

			TweenLite._onPluginEvent = function(type, tween) {
				var pt = tween._firstPT,
					changed, pt2, first, last, next;
				if (type === "_onInitAllProps") {
					//sorts the PropTween linked list in order of priority because some plugins need to render earlier/later than others, like MotionBlurPlugin applies its effects after all x/y/alpha tweens have rendered on each frame.
					while (pt) {
						next = pt._next;
						pt2 = first;
						while (pt2 && pt2.pr > pt.pr) {
							pt2 = pt2._next;
						}
						if ((pt._prev = pt2 ? pt2._prev : last)) {
							pt._prev._next = pt;
						} else {
							first = pt;
						}
						if ((pt._next = pt2)) {
							pt2._prev = pt;
						} else {
							last = pt;
						}
						pt = next;
					}
					pt = tween._firstPT = first;
				}
				while (pt) {
					if (pt.pg) if (typeof(pt.t[type]) === "function") if (pt.t[type]()) {
						changed = true;
					}
					pt = pt._next;
				}
				return changed;
			};

			TweenPlugin.activate = function(plugins) {
				var i = plugins.length;
				while (--i > -1) {
					if (plugins[i].API === TweenPlugin.API) {
						_plugins[(new plugins[i]())._propName] = plugins[i];
					}
				}
				return true;
			};

			//provides a more concise way to define plugins that have no dependencies besides TweenPlugin and TweenLite, wrapping common boilerplate stuff into one function (added in 1.9.0). You don't NEED to use this to define a plugin - the old way still works and can be useful in certain (rare) situations.
			_gsDefine.plugin = function(config) {
				if (!config || !config.propName || !config.init || !config.API) { throw "illegal plugin definition."; }
				var propName = config.propName,
					priority = config.priority || 0,
					overwriteProps = config.overwriteProps,
					map = {init:"_onInitTween", set:"setRatio", kill:"_kill", round:"_mod", mod:"_mod", initAll:"_onInitAllProps"},
					Plugin = _class("plugins." + propName.charAt(0).toUpperCase() + propName.substr(1) + "Plugin",
						function() {
							TweenPlugin.call(this, propName, priority);
							this._overwriteProps = overwriteProps || [];
						}, (config.global === true)),
					p = Plugin.prototype = new TweenPlugin(propName),
					prop;
				p.constructor = Plugin;
				Plugin.API = config.API;
				for (prop in map) {
					if (typeof(config[prop]) === "function") {
						p[map[prop]] = config[prop];
					}
				}
				Plugin.version = config.version;
				TweenPlugin.activate([Plugin]);
				return Plugin;
			};


			//now run through all the dependencies discovered and if any are missing, log that to the console as a warning. This is why it's best to have TweenLite load last - it can check all the dependencies for you.
			a = window._gsQueue;
			if (a) {
				for (i = 0; i < a.length; i++) {
					a[i]();
				}
				for (p in _defLookup) {
					if (!_defLookup[p].func) {
						window.console.log("GSAP encountered missing dependency: " + p);
					}
				}
			}

			_tickerActive = false; //ensures that the first official animation forces a ticker.tick() to update the time when it is instantiated

	})((typeof(module) !== "undefined" && module.exports && typeof(global) !== "undefined") ? global : this || window, "TweenLite");
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(global) {/*!
	 * VERSION: 1.19.0
	 * DATE: 2016-07-14
	 * UPDATES AND DOCS AT: http://greensock.com
	 *
	 * @license Copyright (c) 2008-2016, GreenSock. All rights reserved.
	 * This work is subject to the terms at http://greensock.com/standard-license or for
	 * Club GreenSock members, the software agreement that was issued with your membership.
	 * 
	 * @author: Jack Doyle, jack@greensock.com
	 */
	var _gsScope = (typeof(module) !== "undefined" && module.exports && typeof(global) !== "undefined") ? global : this || window; //helps ensure compatibility with AMD/RequireJS and CommonJS/Node
	(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push( function() {

		"use strict";

		_gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin","TweenLite"], function(TweenPlugin, TweenLite) {

			/** @constructor **/
			var CSSPlugin = function() {
					TweenPlugin.call(this, "css");
					this._overwriteProps.length = 0;
					this.setRatio = CSSPlugin.prototype.setRatio; //speed optimization (avoid prototype lookup on this "hot" method)
				},
				_globals = _gsScope._gsDefine.globals,
				_hasPriority, //turns true whenever a CSSPropTween instance is created that has a priority other than 0. This helps us discern whether or not we should spend the time organizing the linked list or not after a CSSPlugin's _onInitTween() method is called.
				_suffixMap, //we set this in _onInitTween() each time as a way to have a persistent variable we can use in other methods like _parse() without having to pass it around as a parameter and we keep _parse() decoupled from a particular CSSPlugin instance
				_cs, //computed style (we store this in a shared variable to conserve memory and make minification tighter
				_overwriteProps, //alias to the currently instantiating CSSPlugin's _overwriteProps array. We use this closure in order to avoid having to pass a reference around from method to method and aid in minification.
				_specialProps = {},
				p = CSSPlugin.prototype = new TweenPlugin("css");

			p.constructor = CSSPlugin;
			CSSPlugin.version = "1.19.0";
			CSSPlugin.API = 2;
			CSSPlugin.defaultTransformPerspective = 0;
			CSSPlugin.defaultSkewType = "compensated";
			CSSPlugin.defaultSmoothOrigin = true;
			p = "px"; //we'll reuse the "p" variable to keep file size down
			CSSPlugin.suffixMap = {top:p, right:p, bottom:p, left:p, width:p, height:p, fontSize:p, padding:p, margin:p, perspective:p, lineHeight:""};


			var _numExp = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
				_relNumExp = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
				_valuesExp = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi, //finds all the values that begin with numbers or += or -= and then a number. Includes suffixes. We use this to split complex values apart like "1px 5px 20px rgb(255,102,51)"
				_NaNExp = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g, //also allows scientific notation and doesn't kill the leading -/+ in -= and +=
				_suffixExp = /(?:\d|\-|\+|=|#|\.)*/g,
				_opacityExp = /opacity *= *([^)]*)/i,
				_opacityValExp = /opacity:([^;]*)/i,
				_alphaFilterExp = /alpha\(opacity *=.+?\)/i,
				_rgbhslExp = /^(rgb|hsl)/,
				_capsExp = /([A-Z])/g,
				_camelExp = /-([a-z])/gi,
				_urlExp = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi, //for pulling out urls from url(...) or url("...") strings (some browsers wrap urls in quotes, some don't when reporting things like backgroundImage)
				_camelFunc = function(s, g) { return g.toUpperCase(); },
				_horizExp = /(?:Left|Right|Width)/i,
				_ieGetMatrixExp = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
				_ieSetMatrixExp = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
				_commasOutsideParenExp = /,(?=[^\)]*(?:\(|$))/gi, //finds any commas that are not within parenthesis
				_complexExp = /[\s,\(]/i, //for testing a string to find if it has a space, comma, or open parenthesis (clues that it's a complex value)
				_DEG2RAD = Math.PI / 180,
				_RAD2DEG = 180 / Math.PI,
				_forcePT = {},
				_doc = document,
				_createElement = function(type) {
					return _doc.createElementNS ? _doc.createElementNS("http://www.w3.org/1999/xhtml", type) : _doc.createElement(type);
				},
				_tempDiv = _createElement("div"),
				_tempImg = _createElement("img"),
				_internals = CSSPlugin._internals = {_specialProps:_specialProps}, //provides a hook to a few internal methods that we need to access from inside other plugins
				_agent = navigator.userAgent,
				_autoRound,
				_reqSafariFix, //we won't apply the Safari transform fix until we actually come across a tween that affects a transform property (to maintain best performance).

				_isSafari,
				_isFirefox, //Firefox has a bug that causes 3D transformed elements to randomly disappear unless a repaint is forced after each update on each element.
				_isSafariLT6, //Safari (and Android 4 which uses a flavor of Safari) has a bug that prevents changes to "top" and "left" properties from rendering properly if changed on the same frame as a transform UNLESS we set the element's WebkitBackfaceVisibility to hidden (weird, I know). Doing this for Android 3 and earlier seems to actually cause other problems, though (fun!)
				_ieVers,
				_supportsOpacity = (function() { //we set _isSafari, _ieVers, _isFirefox, and _supportsOpacity all in one function here to reduce file size slightly, especially in the minified version.
					var i = _agent.indexOf("Android"),
						a = _createElement("a");
					_isSafari = (_agent.indexOf("Safari") !== -1 && _agent.indexOf("Chrome") === -1 && (i === -1 || Number(_agent.substr(i+8, 1)) > 3));
					_isSafariLT6 = (_isSafari && (Number(_agent.substr(_agent.indexOf("Version/")+8, 1)) < 6));
					_isFirefox = (_agent.indexOf("Firefox") !== -1);
					if ((/MSIE ([0-9]{1,}[\.0-9]{0,})/).exec(_agent) || (/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/).exec(_agent)) {
						_ieVers = parseFloat( RegExp.$1 );
					}
					if (!a) {
						return false;
					}
					a.style.cssText = "top:1px;opacity:.55;";
					return /^0.55/.test(a.style.opacity);
				}()),
				_getIEOpacity = function(v) {
					return (_opacityExp.test( ((typeof(v) === "string") ? v : (v.currentStyle ? v.currentStyle.filter : v.style.filter) || "") ) ? ( parseFloat( RegExp.$1 ) / 100 ) : 1);
				},
				_log = function(s) {//for logging messages, but in a way that won't throw errors in old versions of IE.
					if (window.console) {
						console.log(s);
					}
				},
				_target, //when initting a CSSPlugin, we set this variable so that we can access it from within many other functions without having to pass it around as params
				_index, //when initting a CSSPlugin, we set this variable so that we can access it from within many other functions without having to pass it around as params

				_prefixCSS = "", //the non-camelCase vendor prefix like "-o-", "-moz-", "-ms-", or "-webkit-"
				_prefix = "", //camelCase vendor prefix like "O", "ms", "Webkit", or "Moz".

				// @private feed in a camelCase property name like "transform" and it will check to see if it is valid as-is or if it needs a vendor prefix. It returns the corrected camelCase property name (i.e. "WebkitTransform" or "MozTransform" or "transform" or null if no such property is found, like if the browser is IE8 or before, "transform" won't be found at all)
				_checkPropPrefix = function(p, e) {
					e = e || _tempDiv;
					var s = e.style,
						a, i;
					if (s[p] !== undefined) {
						return p;
					}
					p = p.charAt(0).toUpperCase() + p.substr(1);
					a = ["O","Moz","ms","Ms","Webkit"];
					i = 5;
					while (--i > -1 && s[a[i]+p] === undefined) { }
					if (i >= 0) {
						_prefix = (i === 3) ? "ms" : a[i];
						_prefixCSS = "-" + _prefix.toLowerCase() + "-";
						return _prefix + p;
					}
					return null;
				},

				_getComputedStyle = _doc.defaultView ? _doc.defaultView.getComputedStyle : function() {},

				/**
				 * @private Returns the css style for a particular property of an element. For example, to get whatever the current "left" css value for an element with an ID of "myElement", you could do:
				 * var currentLeft = CSSPlugin.getStyle( document.getElementById("myElement"), "left");
				 *
				 * @param {!Object} t Target element whose style property you want to query
				 * @param {!string} p Property name (like "left" or "top" or "marginTop", etc.)
				 * @param {Object=} cs Computed style object. This just provides a way to speed processing if you're going to get several properties on the same element in quick succession - you can reuse the result of the getComputedStyle() call.
				 * @param {boolean=} calc If true, the value will not be read directly from the element's "style" property (if it exists there), but instead the getComputedStyle() result will be used. This can be useful when you want to ensure that the browser itself is interpreting the value.
				 * @param {string=} dflt Default value that should be returned in the place of null, "none", "auto" or "auto auto".
				 * @return {?string} The current property value
				 */
				_getStyle = CSSPlugin.getStyle = function(t, p, cs, calc, dflt) {
					var rv;
					if (!_supportsOpacity) if (p === "opacity") { //several versions of IE don't use the standard "opacity" property - they use things like filter:alpha(opacity=50), so we parse that here.
						return _getIEOpacity(t);
					}
					if (!calc && t.style[p]) {
						rv = t.style[p];
					} else if ((cs = cs || _getComputedStyle(t))) {
						rv = cs[p] || cs.getPropertyValue(p) || cs.getPropertyValue(p.replace(_capsExp, "-$1").toLowerCase());
					} else if (t.currentStyle) {
						rv = t.currentStyle[p];
					}
					return (dflt != null && (!rv || rv === "none" || rv === "auto" || rv === "auto auto")) ? dflt : rv;
				},

				/**
				 * @private Pass the target element, the property name, the numeric value, and the suffix (like "%", "em", "px", etc.) and it will spit back the equivalent pixel number.
				 * @param {!Object} t Target element
				 * @param {!string} p Property name (like "left", "top", "marginLeft", etc.)
				 * @param {!number} v Value
				 * @param {string=} sfx Suffix (like "px" or "%" or "em")
				 * @param {boolean=} recurse If true, the call is a recursive one. In some browsers (like IE7/8), occasionally the value isn't accurately reported initially, but if we run the function again it will take effect.
				 * @return {number} value in pixels
				 */
				_convertToPixels = _internals.convertToPixels = function(t, p, v, sfx, recurse) {
					if (sfx === "px" || !sfx) { return v; }
					if (sfx === "auto" || !v) { return 0; }
					var horiz = _horizExp.test(p),
						node = t,
						style = _tempDiv.style,
						neg = (v < 0),
						precise = (v === 1),
						pix, cache, time;
					if (neg) {
						v = -v;
					}
					if (precise) {
						v *= 100;
					}
					if (sfx === "%" && p.indexOf("border") !== -1) {
						pix = (v / 100) * (horiz ? t.clientWidth : t.clientHeight);
					} else {
						style.cssText = "border:0 solid red;position:" + _getStyle(t, "position") + ";line-height:0;";
						if (sfx === "%" || !node.appendChild || sfx.charAt(0) === "v" || sfx === "rem") {
							node = t.parentNode || _doc.body;
							cache = node._gsCache;
							time = TweenLite.ticker.frame;
							if (cache && horiz && cache.time === time) { //performance optimization: we record the width of elements along with the ticker frame so that we can quickly get it again on the same tick (seems relatively safe to assume it wouldn't change on the same tick)
								return cache.width * v / 100;
							}
							style[(horiz ? "width" : "height")] = v + sfx;
						} else {
							style[(horiz ? "borderLeftWidth" : "borderTopWidth")] = v + sfx;
						}
						node.appendChild(_tempDiv);
						pix = parseFloat(_tempDiv[(horiz ? "offsetWidth" : "offsetHeight")]);
						node.removeChild(_tempDiv);
						if (horiz && sfx === "%" && CSSPlugin.cacheWidths !== false) {
							cache = node._gsCache = node._gsCache || {};
							cache.time = time;
							cache.width = pix / v * 100;
						}
						if (pix === 0 && !recurse) {
							pix = _convertToPixels(t, p, v, sfx, true);
						}
					}
					if (precise) {
						pix /= 100;
					}
					return neg ? -pix : pix;
				},
				_calculateOffset = _internals.calculateOffset = function(t, p, cs) { //for figuring out "top" or "left" in px when it's "auto". We need to factor in margin with the offsetLeft/offsetTop
					if (_getStyle(t, "position", cs) !== "absolute") { return 0; }
					var dim = ((p === "left") ? "Left" : "Top"),
						v = _getStyle(t, "margin" + dim, cs);
					return t["offset" + dim] - (_convertToPixels(t, p, parseFloat(v), v.replace(_suffixExp, "")) || 0);
				},

				// @private returns at object containing ALL of the style properties in camelCase and their associated values.
				_getAllStyles = function(t, cs) {
					var s = {},
						i, tr, p;
					if ((cs = cs || _getComputedStyle(t, null))) {
						if ((i = cs.length)) {
							while (--i > -1) {
								p = cs[i];
								if (p.indexOf("-transform") === -1 || _transformPropCSS === p) { //Some webkit browsers duplicate transform values, one non-prefixed and one prefixed ("transform" and "WebkitTransform"), so we must weed out the extra one here.
									s[p.replace(_camelExp, _camelFunc)] = cs.getPropertyValue(p);
								}
							}
						} else { //some browsers behave differently - cs.length is always 0, so we must do a for...in loop.
							for (i in cs) {
								if (i.indexOf("Transform") === -1 || _transformProp === i) { //Some webkit browsers duplicate transform values, one non-prefixed and one prefixed ("transform" and "WebkitTransform"), so we must weed out the extra one here.
									s[i] = cs[i];
								}
							}
						}
					} else if ((cs = t.currentStyle || t.style)) {
						for (i in cs) {
							if (typeof(i) === "string" && s[i] === undefined) {
								s[i.replace(_camelExp, _camelFunc)] = cs[i];
							}
						}
					}
					if (!_supportsOpacity) {
						s.opacity = _getIEOpacity(t);
					}
					tr = _getTransform(t, cs, false);
					s.rotation = tr.rotation;
					s.skewX = tr.skewX;
					s.scaleX = tr.scaleX;
					s.scaleY = tr.scaleY;
					s.x = tr.x;
					s.y = tr.y;
					if (_supports3D) {
						s.z = tr.z;
						s.rotationX = tr.rotationX;
						s.rotationY = tr.rotationY;
						s.scaleZ = tr.scaleZ;
					}
					if (s.filters) {
						delete s.filters;
					}
					return s;
				},

				// @private analyzes two style objects (as returned by _getAllStyles()) and only looks for differences between them that contain tweenable values (like a number or color). It returns an object with a "difs" property which refers to an object containing only those isolated properties and values for tweening, and a "firstMPT" property which refers to the first MiniPropTween instance in a linked list that recorded all the starting values of the different properties so that we can revert to them at the end or beginning of the tween - we don't want the cascading to get messed up. The forceLookup parameter is an optional generic object with properties that should be forced into the results - this is necessary for className tweens that are overwriting others because imagine a scenario where a rollover/rollout adds/removes a class and the user swipes the mouse over the target SUPER fast, thus nothing actually changed yet and the subsequent comparison of the properties would indicate they match (especially when px rounding is taken into consideration), thus no tweening is necessary even though it SHOULD tween and remove those properties after the tween (otherwise the inline styles will contaminate things). See the className SpecialProp code for details.
				_cssDif = function(t, s1, s2, vars, forceLookup) {
					var difs = {},
						style = t.style,
						val, p, mpt;
					for (p in s2) {
						if (p !== "cssText") if (p !== "length") if (isNaN(p)) if (s1[p] !== (val = s2[p]) || (forceLookup && forceLookup[p])) if (p.indexOf("Origin") === -1) if (typeof(val) === "number" || typeof(val) === "string") {
							difs[p] = (val === "auto" && (p === "left" || p === "top")) ? _calculateOffset(t, p) : ((val === "" || val === "auto" || val === "none") && typeof(s1[p]) === "string" && s1[p].replace(_NaNExp, "") !== "") ? 0 : val; //if the ending value is defaulting ("" or "auto"), we check the starting value and if it can be parsed into a number (a string which could have a suffix too, like 700px), then we swap in 0 for "" or "auto" so that things actually tween.
							if (style[p] !== undefined) { //for className tweens, we must remember which properties already existed inline - the ones that didn't should be removed when the tween isn't in progress because they were only introduced to facilitate the transition between classes.
								mpt = new MiniPropTween(style, p, style[p], mpt);
							}
						}
					}
					if (vars) {
						for (p in vars) { //copy properties (except className)
							if (p !== "className") {
								difs[p] = vars[p];
							}
						}
					}
					return {difs:difs, firstMPT:mpt};
				},
				_dimensions = {width:["Left","Right"], height:["Top","Bottom"]},
				_margins = ["marginLeft","marginRight","marginTop","marginBottom"],

				/**
				 * @private Gets the width or height of an element
				 * @param {!Object} t Target element
				 * @param {!string} p Property name ("width" or "height")
				 * @param {Object=} cs Computed style object (if one exists). Just a speed optimization.
				 * @return {number} Dimension (in pixels)
				 */
				_getDimension = function(t, p, cs) {
					if ((t.nodeName + "").toLowerCase() === "svg") { //Chrome no longer supports offsetWidth/offsetHeight on SVG elements.
						return (cs || _getComputedStyle(t))[p] || 0;
					} else if (t.getBBox && _isSVG(t)) {
						return t.getBBox()[p] || 0;
					}
					var v = parseFloat((p === "width") ? t.offsetWidth : t.offsetHeight),
						a = _dimensions[p],
						i = a.length;
					cs = cs || _getComputedStyle(t, null);
					while (--i > -1) {
						v -= parseFloat( _getStyle(t, "padding" + a[i], cs, true) ) || 0;
						v -= parseFloat( _getStyle(t, "border" + a[i] + "Width", cs, true) ) || 0;
					}
					return v;
				},

				// @private Parses position-related complex strings like "top left" or "50px 10px" or "70% 20%", etc. which are used for things like transformOrigin or backgroundPosition. Optionally decorates a supplied object (recObj) with the following properties: "ox" (offsetX), "oy" (offsetY), "oxp" (if true, "ox" is a percentage not a pixel value), and "oxy" (if true, "oy" is a percentage not a pixel value)
				_parsePosition = function(v, recObj) {
					if (v === "contain" || v === "auto" || v === "auto auto") { //note: Firefox uses "auto auto" as default whereas Chrome uses "auto".
						return v + " ";
					}
					if (v == null || v === "") {
						v = "0 0";
					}
					var a = v.split(" "),
						x = (v.indexOf("left") !== -1) ? "0%" : (v.indexOf("right") !== -1) ? "100%" : a[0],
						y = (v.indexOf("top") !== -1) ? "0%" : (v.indexOf("bottom") !== -1) ? "100%" : a[1],
						i;
					if (a.length > 3 && !recObj) { //multiple positions
						a = v.split(", ").join(",").split(",");
						v = [];
						for (i = 0; i < a.length; i++) {
							v.push(_parsePosition(a[i]));
						}
						return v.join(",");
					}
					if (y == null) {
						y = (x === "center") ? "50%" : "0";
					} else if (y === "center") {
						y = "50%";
					}
					if (x === "center" || (isNaN(parseFloat(x)) && (x + "").indexOf("=") === -1)) { //remember, the user could flip-flop the values and say "bottom center" or "center bottom", etc. "center" is ambiguous because it could be used to describe horizontal or vertical, hence the isNaN(). If there's an "=" sign in the value, it's relative.
						x = "50%";
					}
					v = x + " " + y + ((a.length > 2) ? " " + a[2] : "");
					if (recObj) {
						recObj.oxp = (x.indexOf("%") !== -1);
						recObj.oyp = (y.indexOf("%") !== -1);
						recObj.oxr = (x.charAt(1) === "=");
						recObj.oyr = (y.charAt(1) === "=");
						recObj.ox = parseFloat(x.replace(_NaNExp, ""));
						recObj.oy = parseFloat(y.replace(_NaNExp, ""));
						recObj.v = v;
					}
					return recObj || v;
				},

				/**
				 * @private Takes an ending value (typically a string, but can be a number) and a starting value and returns the change between the two, looking for relative value indicators like += and -= and it also ignores suffixes (but make sure the ending value starts with a number or +=/-= and that the starting value is a NUMBER!)
				 * @param {(number|string)} e End value which is typically a string, but could be a number
				 * @param {(number|string)} b Beginning value which is typically a string but could be a number
				 * @return {number} Amount of change between the beginning and ending values (relative values that have a "+=" or "-=" are recognized)
				 */
				_parseChange = function(e, b) {
					if (typeof(e) === "function") {
						e = e(_index, _target);
					}
					return (typeof(e) === "string" && e.charAt(1) === "=") ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2)) : (parseFloat(e) - parseFloat(b)) || 0;
				},

				/**
				 * @private Takes a value and a default number, checks if the value is relative, null, or numeric and spits back a normalized number accordingly. Primarily used in the _parseTransform() function.
				 * @param {Object} v Value to be parsed
				 * @param {!number} d Default value (which is also used for relative calculations if "+=" or "-=" is found in the first parameter)
				 * @return {number} Parsed value
				 */
				_parseVal = function(v, d) {
					if (typeof(v) === "function") {
						v = v(_index, _target);
					}
					return (v == null) ? d : (typeof(v) === "string" && v.charAt(1) === "=") ? parseInt(v.charAt(0) + "1", 10) * parseFloat(v.substr(2)) + d : parseFloat(v) || 0;
				},

				/**
				 * @private Translates strings like "40deg" or "40" or 40rad" or "+=40deg" or "270_short" or "-90_cw" or "+=45_ccw" to a numeric radian angle. Of course a starting/default value must be fed in too so that relative values can be calculated properly.
				 * @param {Object} v Value to be parsed
				 * @param {!number} d Default value (which is also used for relative calculations if "+=" or "-=" is found in the first parameter)
				 * @param {string=} p property name for directionalEnd (optional - only used when the parsed value is directional ("_short", "_cw", or "_ccw" suffix). We need a way to store the uncompensated value so that at the end of the tween, we set it to exactly what was requested with no directional compensation). Property name would be "rotation", "rotationX", or "rotationY"
				 * @param {Object=} directionalEnd An object that will store the raw end values for directional angles ("_short", "_cw", or "_ccw" suffix). We need a way to store the uncompensated value so that at the end of the tween, we set it to exactly what was requested with no directional compensation.
				 * @return {number} parsed angle in radians
				 */
				_parseAngle = function(v, d, p, directionalEnd) {
					var min = 0.000001,
						cap, split, dif, result, isRelative;
					if (typeof(v) === "function") {
						v = v(_index, _target);
					}
					if (v == null) {
						result = d;
					} else if (typeof(v) === "number") {
						result = v;
					} else {
						cap = 360;
						split = v.split("_");
						isRelative = (v.charAt(1) === "=");
						dif = (isRelative ? parseInt(v.charAt(0) + "1", 10) * parseFloat(split[0].substr(2)) : parseFloat(split[0])) * ((v.indexOf("rad") === -1) ? 1 : _RAD2DEG) - (isRelative ? 0 : d);
						if (split.length) {
							if (directionalEnd) {
								directionalEnd[p] = d + dif;
							}
							if (v.indexOf("short") !== -1) {
								dif = dif % cap;
								if (dif !== dif % (cap / 2)) {
									dif = (dif < 0) ? dif + cap : dif - cap;
								}
							}
							if (v.indexOf("_cw") !== -1 && dif < 0) {
								dif = ((dif + cap * 9999999999) % cap) - ((dif / cap) | 0) * cap;
							} else if (v.indexOf("ccw") !== -1 && dif > 0) {
								dif = ((dif - cap * 9999999999) % cap) - ((dif / cap) | 0) * cap;
							}
						}
						result = d + dif;
					}
					if (result < min && result > -min) {
						result = 0;
					}
					return result;
				},

				_colorLookup = {aqua:[0,255,255],
					lime:[0,255,0],
					silver:[192,192,192],
					black:[0,0,0],
					maroon:[128,0,0],
					teal:[0,128,128],
					blue:[0,0,255],
					navy:[0,0,128],
					white:[255,255,255],
					fuchsia:[255,0,255],
					olive:[128,128,0],
					yellow:[255,255,0],
					orange:[255,165,0],
					gray:[128,128,128],
					purple:[128,0,128],
					green:[0,128,0],
					red:[255,0,0],
					pink:[255,192,203],
					cyan:[0,255,255],
					transparent:[255,255,255,0]},

				_hue = function(h, m1, m2) {
					h = (h < 0) ? h + 1 : (h > 1) ? h - 1 : h;
					return ((((h * 6 < 1) ? m1 + (m2 - m1) * h * 6 : (h < 0.5) ? m2 : (h * 3 < 2) ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * 255) + 0.5) | 0;
				},

				/**
				 * @private Parses a color (like #9F0, #FF9900, rgb(255,51,153) or hsl(108, 50%, 10%)) into an array with 3 elements for red, green, and blue or if toHSL parameter is true, it will populate the array with hue, saturation, and lightness values. If a relative value is found in an hsl() or hsla() string, it will preserve those relative prefixes and all the values in the array will be strings instead of numbers (in all other cases it will be populated with numbers).
				 * @param {(string|number)} v The value the should be parsed which could be a string like #9F0 or rgb(255,102,51) or rgba(255,0,0,0.5) or it could be a number like 0xFF00CC or even a named color like red, blue, purple, etc.
				 * @param {(boolean)} toHSL If true, an hsl() or hsla() value will be returned instead of rgb() or rgba()
				 * @return {Array.<number>} An array containing red, green, and blue (and optionally alpha) in that order, or if the toHSL parameter was true, the array will contain hue, saturation and lightness (and optionally alpha) in that order. Always numbers unless there's a relative prefix found in an hsl() or hsla() string and toHSL is true.
				 */
				_parseColor = CSSPlugin.parseColor = function(v, toHSL) {
					var a, r, g, b, h, s, l, max, min, d, wasHSL;
					if (!v) {
						a = _colorLookup.black;
					} else if (typeof(v) === "number") {
						a = [v >> 16, (v >> 8) & 255, v & 255];
					} else {
						if (v.charAt(v.length - 1) === ",") { //sometimes a trailing comma is included and we should chop it off (typically from a comma-delimited list of values like a textShadow:"2px 2px 2px blue, 5px 5px 5px rgb(255,0,0)" - in this example "blue," has a trailing comma. We could strip it out inside parseComplex() but we'd need to do it to the beginning and ending values plus it wouldn't provide protection from other potential scenarios like if the user passes in a similar value.
							v = v.substr(0, v.length - 1);
						}
						if (_colorLookup[v]) {
							a = _colorLookup[v];
						} else if (v.charAt(0) === "#") {
							if (v.length === 4) { //for shorthand like #9F0
								r = v.charAt(1);
								g = v.charAt(2);
								b = v.charAt(3);
								v = "#" + r + r + g + g + b + b;
							}
							v = parseInt(v.substr(1), 16);
							a = [v >> 16, (v >> 8) & 255, v & 255];
						} else if (v.substr(0, 3) === "hsl") {
							a = wasHSL = v.match(_numExp);
							if (!toHSL) {
								h = (Number(a[0]) % 360) / 360;
								s = Number(a[1]) / 100;
								l = Number(a[2]) / 100;
								g = (l <= 0.5) ? l * (s + 1) : l + s - l * s;
								r = l * 2 - g;
								if (a.length > 3) {
									a[3] = Number(v[3]);
								}
								a[0] = _hue(h + 1 / 3, r, g);
								a[1] = _hue(h, r, g);
								a[2] = _hue(h - 1 / 3, r, g);
							} else if (v.indexOf("=") !== -1) { //if relative values are found, just return the raw strings with the relative prefixes in place.
								return v.match(_relNumExp);
							}
						} else {
							a = v.match(_numExp) || _colorLookup.transparent;
						}
						a[0] = Number(a[0]);
						a[1] = Number(a[1]);
						a[2] = Number(a[2]);
						if (a.length > 3) {
							a[3] = Number(a[3]);
						}
					}
					if (toHSL && !wasHSL) {
						r = a[0] / 255;
						g = a[1] / 255;
						b = a[2] / 255;
						max = Math.max(r, g, b);
						min = Math.min(r, g, b);
						l = (max + min) / 2;
						if (max === min) {
							h = s = 0;
						} else {
							d = max - min;
							s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
							h = (max === r) ? (g - b) / d + (g < b ? 6 : 0) : (max === g) ? (b - r) / d + 2 : (r - g) / d + 4;
							h *= 60;
						}
						a[0] = (h + 0.5) | 0;
						a[1] = (s * 100 + 0.5) | 0;
						a[2] = (l * 100 + 0.5) | 0;
					}
					return a;
				},
				_formatColors = function(s, toHSL) {
					var colors = s.match(_colorExp) || [],
						charIndex = 0,
						parsed = colors.length ? "" : s,
						i, color, temp;
					for (i = 0; i < colors.length; i++) {
						color = colors[i];
						temp = s.substr(charIndex, s.indexOf(color, charIndex)-charIndex);
						charIndex += temp.length + color.length;
						color = _parseColor(color, toHSL);
						if (color.length === 3) {
							color.push(1);
						}
						parsed += temp + (toHSL ? "hsla(" + color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : "rgba(" + color.join(",")) + ")";
					}
					return parsed + s.substr(charIndex);
				},
				_colorExp = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b"; //we'll dynamically build this Regular Expression to conserve file size. After building it, it will be able to find rgb(), rgba(), # (hexadecimal), and named color values like red, blue, purple, etc.

			for (p in _colorLookup) {
				_colorExp += "|" + p + "\\b";
			}
			_colorExp = new RegExp(_colorExp+")", "gi");

			CSSPlugin.colorStringFilter = function(a) {
				var combined = a[0] + a[1],
					toHSL;
				if (_colorExp.test(combined)) {
					toHSL = (combined.indexOf("hsl(") !== -1 || combined.indexOf("hsla(") !== -1);
					a[0] = _formatColors(a[0], toHSL);
					a[1] = _formatColors(a[1], toHSL);
				}
				_colorExp.lastIndex = 0;
			};

			if (!TweenLite.defaultStringFilter) {
				TweenLite.defaultStringFilter = CSSPlugin.colorStringFilter;
			}

			/**
			 * @private Returns a formatter function that handles taking a string (or number in some cases) and returning a consistently formatted one in terms of delimiters, quantity of values, etc. For example, we may get boxShadow values defined as "0px red" or "0px 0px 10px rgb(255,0,0)" or "0px 0px 20px 20px #F00" and we need to ensure that what we get back is described with 4 numbers and a color. This allows us to feed it into the _parseComplex() method and split the values up appropriately. The neat thing about this _getFormatter() function is that the dflt defines a pattern as well as a default, so for example, _getFormatter("0px 0px 0px 0px #777", true) not only sets the default as 0px for all distances and #777 for the color, but also sets the pattern such that 4 numbers and a color will always get returned.
			 * @param {!string} dflt The default value and pattern to follow. So "0px 0px 0px 0px #777" will ensure that 4 numbers and a color will always get returned.
			 * @param {boolean=} clr If true, the values should be searched for color-related data. For example, boxShadow values typically contain a color whereas borderRadius don't.
			 * @param {boolean=} collapsible If true, the value is a top/left/right/bottom style one that acts like margin or padding, where if only one value is received, it's used for all 4; if 2 are received, the first is duplicated for 3rd (bottom) and the 2nd is duplicated for the 4th spot (left), etc.
			 * @return {Function} formatter function
			 */
			var _getFormatter = function(dflt, clr, collapsible, multi) {
					if (dflt == null) {
						return function(v) {return v;};
					}
					var dColor = clr ? (dflt.match(_colorExp) || [""])[0] : "",
						dVals = dflt.split(dColor).join("").match(_valuesExp) || [],
						pfx = dflt.substr(0, dflt.indexOf(dVals[0])),
						sfx = (dflt.charAt(dflt.length - 1) === ")") ? ")" : "",
						delim = (dflt.indexOf(" ") !== -1) ? " " : ",",
						numVals = dVals.length,
						dSfx = (numVals > 0) ? dVals[0].replace(_numExp, "") : "",
						formatter;
					if (!numVals) {
						return function(v) {return v;};
					}
					if (clr) {
						formatter = function(v) {
							var color, vals, i, a;
							if (typeof(v) === "number") {
								v += dSfx;
							} else if (multi && _commasOutsideParenExp.test(v)) {
								a = v.replace(_commasOutsideParenExp, "|").split("|");
								for (i = 0; i < a.length; i++) {
									a[i] = formatter(a[i]);
								}
								return a.join(",");
							}
							color = (v.match(_colorExp) || [dColor])[0];
							vals = v.split(color).join("").match(_valuesExp) || [];
							i = vals.length;
							if (numVals > i--) {
								while (++i < numVals) {
									vals[i] = collapsible ? vals[(((i - 1) / 2) | 0)] : dVals[i];
								}
							}
							return pfx + vals.join(delim) + delim + color + sfx + (v.indexOf("inset") !== -1 ? " inset" : "");
						};
						return formatter;

					}
					formatter = function(v) {
						var vals, a, i;
						if (typeof(v) === "number") {
							v += dSfx;
						} else if (multi && _commasOutsideParenExp.test(v)) {
							a = v.replace(_commasOutsideParenExp, "|").split("|");
							for (i = 0; i < a.length; i++) {
								a[i] = formatter(a[i]);
							}
							return a.join(",");
						}
						vals = v.match(_valuesExp) || [];
						i = vals.length;
						if (numVals > i--) {
							while (++i < numVals) {
								vals[i] = collapsible ? vals[(((i - 1) / 2) | 0)] : dVals[i];
							}
						}
						return pfx + vals.join(delim) + sfx;
					};
					return formatter;
				},

				/**
				 * @private returns a formatter function that's used for edge-related values like marginTop, marginLeft, paddingBottom, paddingRight, etc. Just pass a comma-delimited list of property names related to the edges.
				 * @param {!string} props a comma-delimited list of property names in order from top to left, like "marginTop,marginRight,marginBottom,marginLeft"
				 * @return {Function} a formatter function
				 */
				_getEdgeParser = function(props) {
					props = props.split(",");
					return function(t, e, p, cssp, pt, plugin, vars) {
						var a = (e + "").split(" "),
							i;
						vars = {};
						for (i = 0; i < 4; i++) {
							vars[props[i]] = a[i] = a[i] || a[(((i - 1) / 2) >> 0)];
						}
						return cssp.parse(t, vars, pt, plugin);
					};
				},

				// @private used when other plugins must tween values first, like BezierPlugin or ThrowPropsPlugin, etc. That plugin's setRatio() gets called first so that the values are updated, and then we loop through the MiniPropTweens which handle copying the values into their appropriate slots so that they can then be applied correctly in the main CSSPlugin setRatio() method. Remember, we typically create a proxy object that has a bunch of uniquely-named properties that we feed to the sub-plugin and it does its magic normally, and then we must interpret those values and apply them to the css because often numbers must get combined/concatenated, suffixes added, etc. to work with css, like boxShadow could have 4 values plus a color.
				_setPluginRatio = _internals._setPluginRatio = function(v) {
					this.plugin.setRatio(v);
					var d = this.data,
						proxy = d.proxy,
						mpt = d.firstMPT,
						min = 0.000001,
						val, pt, i, str, p;
					while (mpt) {
						val = proxy[mpt.v];
						if (mpt.r) {
							val = Math.round(val);
						} else if (val < min && val > -min) {
							val = 0;
						}
						mpt.t[mpt.p] = val;
						mpt = mpt._next;
					}
					if (d.autoRotate) {
						d.autoRotate.rotation = d.mod ? d.mod(proxy.rotation, this.t) : proxy.rotation; //special case for ModifyPlugin to hook into an auto-rotating bezier
					}
					//at the end, we must set the CSSPropTween's "e" (end) value dynamically here because that's what is used in the final setRatio() method. Same for "b" at the beginning.
					if (v === 1 || v === 0) {
						mpt = d.firstMPT;
						p = (v === 1) ? "e" : "b";
						while (mpt) {
							pt = mpt.t;
							if (!pt.type) {
								pt[p] = pt.s + pt.xs0;
							} else if (pt.type === 1) {
								str = pt.xs0 + pt.s + pt.xs1;
								for (i = 1; i < pt.l; i++) {
									str += pt["xn"+i] + pt["xs"+(i+1)];
								}
								pt[p] = str;
							}
							mpt = mpt._next;
						}
					}
				},

				/**
				 * @private @constructor Used by a few SpecialProps to hold important values for proxies. For example, _parseToProxy() creates a MiniPropTween instance for each property that must get tweened on the proxy, and we record the original property name as well as the unique one we create for the proxy, plus whether or not the value needs to be rounded plus the original value.
				 * @param {!Object} t target object whose property we're tweening (often a CSSPropTween)
				 * @param {!string} p property name
				 * @param {(number|string|object)} v value
				 * @param {MiniPropTween=} next next MiniPropTween in the linked list
				 * @param {boolean=} r if true, the tweened value should be rounded to the nearest integer
				 */
				MiniPropTween = function(t, p, v, next, r) {
					this.t = t;
					this.p = p;
					this.v = v;
					this.r = r;
					if (next) {
						next._prev = this;
						this._next = next;
					}
				},

				/**
				 * @private Most other plugins (like BezierPlugin and ThrowPropsPlugin and others) can only tween numeric values, but CSSPlugin must accommodate special values that have a bunch of extra data (like a suffix or strings between numeric values, etc.). For example, boxShadow has values like "10px 10px 20px 30px rgb(255,0,0)" which would utterly confuse other plugins. This method allows us to split that data apart and grab only the numeric data and attach it to uniquely-named properties of a generic proxy object ({}) so that we can feed that to virtually any plugin to have the numbers tweened. However, we must also keep track of which properties from the proxy go with which CSSPropTween values and instances. So we create a linked list of MiniPropTweens. Each one records a target (the original CSSPropTween), property (like "s" or "xn1" or "xn2") that we're tweening and the unique property name that was used for the proxy (like "boxShadow_xn1" and "boxShadow_xn2") and whether or not they need to be rounded. That way, in the _setPluginRatio() method we can simply copy the values over from the proxy to the CSSPropTween instance(s). Then, when the main CSSPlugin setRatio() method runs and applies the CSSPropTween values accordingly, they're updated nicely. So the external plugin tweens the numbers, _setPluginRatio() copies them over, and setRatio() acts normally, applying css-specific values to the element.
				 * This method returns an object that has the following properties:
				 *  - proxy: a generic object containing the starting values for all the properties that will be tweened by the external plugin.  This is what we feed to the external _onInitTween() as the target
				 *  - end: a generic object containing the ending values for all the properties that will be tweened by the external plugin. This is what we feed to the external plugin's _onInitTween() as the destination values
				 *  - firstMPT: the first MiniPropTween in the linked list
				 *  - pt: the first CSSPropTween in the linked list that was created when parsing. If shallow is true, this linked list will NOT attach to the one passed into the _parseToProxy() as the "pt" (4th) parameter.
				 * @param {!Object} t target object to be tweened
				 * @param {!(Object|string)} vars the object containing the information about the tweening values (typically the end/destination values) that should be parsed
				 * @param {!CSSPlugin} cssp The CSSPlugin instance
				 * @param {CSSPropTween=} pt the next CSSPropTween in the linked list
				 * @param {TweenPlugin=} plugin the external TweenPlugin instance that will be handling tweening the numeric values
				 * @param {boolean=} shallow if true, the resulting linked list from the parse will NOT be attached to the CSSPropTween that was passed in as the "pt" (4th) parameter.
				 * @return An object containing the following properties: proxy, end, firstMPT, and pt (see above for descriptions)
				 */
				_parseToProxy = _internals._parseToProxy = function(t, vars, cssp, pt, plugin, shallow) {
					var bpt = pt,
						start = {},
						end = {},
						transform = cssp._transform,
						oldForce = _forcePT,
						i, p, xp, mpt, firstPT;
					cssp._transform = null;
					_forcePT = vars;
					pt = firstPT = cssp.parse(t, vars, pt, plugin);
					_forcePT = oldForce;
					//break off from the linked list so the new ones are isolated.
					if (shallow) {
						cssp._transform = transform;
						if (bpt) {
							bpt._prev = null;
							if (bpt._prev) {
								bpt._prev._next = null;
							}
						}
					}
					while (pt && pt !== bpt) {
						if (pt.type <= 1) {
							p = pt.p;
							end[p] = pt.s + pt.c;
							start[p] = pt.s;
							if (!shallow) {
								mpt = new MiniPropTween(pt, "s", p, mpt, pt.r);
								pt.c = 0;
							}
							if (pt.type === 1) {
								i = pt.l;
								while (--i > 0) {
									xp = "xn" + i;
									p = pt.p + "_" + xp;
									end[p] = pt.data[xp];
									start[p] = pt[xp];
									if (!shallow) {
										mpt = new MiniPropTween(pt, xp, p, mpt, pt.rxp[xp]);
									}
								}
							}
						}
						pt = pt._next;
					}
					return {proxy:start, end:end, firstMPT:mpt, pt:firstPT};
				},



				/**
				 * @constructor Each property that is tweened has at least one CSSPropTween associated with it. These instances store important information like the target, property, starting value, amount of change, etc. They can also optionally have a number of "extra" strings and numeric values named xs1, xn1, xs2, xn2, xs3, xn3, etc. where "s" indicates string and "n" indicates number. These can be pieced together in a complex-value tween (type:1) that has alternating types of data like a string, number, string, number, etc. For example, boxShadow could be "5px 5px 8px rgb(102, 102, 51)". In that value, there are 6 numbers that may need to tween and then pieced back together into a string again with spaces, suffixes, etc. xs0 is special in that it stores the suffix for standard (type:0) tweens, -OR- the first string (prefix) in a complex-value (type:1) CSSPropTween -OR- it can be the non-tweening value in a type:-1 CSSPropTween. We do this to conserve memory.
				 * CSSPropTweens have the following optional properties as well (not defined through the constructor):
				 *  - l: Length in terms of the number of extra properties that the CSSPropTween has (default: 0). For example, for a boxShadow we may need to tween 5 numbers in which case l would be 5; Keep in mind that the start/end values for the first number that's tweened are always stored in the s and c properties to conserve memory. All additional values thereafter are stored in xn1, xn2, etc.
				 *  - xfirst: The first instance of any sub-CSSPropTweens that are tweening properties of this instance. For example, we may split up a boxShadow tween so that there's a main CSSPropTween of type:1 that has various xs* and xn* values associated with the h-shadow, v-shadow, blur, color, etc. Then we spawn a CSSPropTween for each of those that has a higher priority and runs BEFORE the main CSSPropTween so that the values are all set by the time it needs to re-assemble them. The xfirst gives us an easy way to identify the first one in that chain which typically ends at the main one (because they're all prepende to the linked list)
				 *  - plugin: The TweenPlugin instance that will handle the tweening of any complex values. For example, sometimes we don't want to use normal subtweens (like xfirst refers to) to tween the values - we might want ThrowPropsPlugin or BezierPlugin some other plugin to do the actual tweening, so we create a plugin instance and store a reference here. We need this reference so that if we get a request to round values or disable a tween, we can pass along that request.
				 *  - data: Arbitrary data that needs to be stored with the CSSPropTween. Typically if we're going to have a plugin handle the tweening of a complex-value tween, we create a generic object that stores the END values that we're tweening to and the CSSPropTween's xs1, xs2, etc. have the starting values. We store that object as data. That way, we can simply pass that object to the plugin and use the CSSPropTween as the target.
				 *  - setRatio: Only used for type:2 tweens that require custom functionality. In this case, we call the CSSPropTween's setRatio() method and pass the ratio each time the tween updates. This isn't quite as efficient as doing things directly in the CSSPlugin's setRatio() method, but it's very convenient and flexible.
				 * @param {!Object} t Target object whose property will be tweened. Often a DOM element, but not always. It could be anything.
				 * @param {string} p Property to tween (name). For example, to tween element.width, p would be "width".
				 * @param {number} s Starting numeric value
				 * @param {number} c Change in numeric value over the course of the entire tween. For example, if element.width starts at 5 and should end at 100, c would be 95.
				 * @param {CSSPropTween=} next The next CSSPropTween in the linked list. If one is defined, we will define its _prev as the new instance, and the new instance's _next will be pointed at it.
				 * @param {number=} type The type of CSSPropTween where -1 = a non-tweening value, 0 = a standard simple tween, 1 = a complex value (like one that has multiple numbers in a comma- or space-delimited string like border:"1px solid red"), and 2 = one that uses a custom setRatio function that does all of the work of applying the values on each update.
				 * @param {string=} n Name of the property that should be used for overwriting purposes which is typically the same as p but not always. For example, we may need to create a subtween for the 2nd part of a "clip:rect(...)" tween in which case "p" might be xs1 but "n" is still "clip"
				 * @param {boolean=} r If true, the value(s) should be rounded
				 * @param {number=} pr Priority in the linked list order. Higher priority CSSPropTweens will be updated before lower priority ones. The default priority is 0.
				 * @param {string=} b Beginning value. We store this to ensure that it is EXACTLY what it was when the tween began without any risk of interpretation issues.
				 * @param {string=} e Ending value. We store this to ensure that it is EXACTLY what the user defined at the end of the tween without any risk of interpretation issues.
				 */
				CSSPropTween = _internals.CSSPropTween = function(t, p, s, c, next, type, n, r, pr, b, e) {
					this.t = t; //target
					this.p = p; //property
					this.s = s; //starting value
					this.c = c; //change value
					this.n = n || p; //name that this CSSPropTween should be associated to (usually the same as p, but not always - n is what overwriting looks at)
					if (!(t instanceof CSSPropTween)) {
						_overwriteProps.push(this.n);
					}
					this.r = r; //round (boolean)
					this.type = type || 0; //0 = normal tween, -1 = non-tweening (in which case xs0 will be applied to the target's property, like tp.t[tp.p] = tp.xs0), 1 = complex-value SpecialProp, 2 = custom setRatio() that does all the work
					if (pr) {
						this.pr = pr;
						_hasPriority = true;
					}
					this.b = (b === undefined) ? s : b;
					this.e = (e === undefined) ? s + c : e;
					if (next) {
						this._next = next;
						next._prev = this;
					}
				},

				_addNonTweeningNumericPT = function(target, prop, start, end, next, overwriteProp) { //cleans up some code redundancies and helps minification. Just a fast way to add a NUMERIC non-tweening CSSPropTween
					var pt = new CSSPropTween(target, prop, start, end - start, next, -1, overwriteProp);
					pt.b = start;
					pt.e = pt.xs0 = end;
					return pt;
				},

				/**
				 * Takes a target, the beginning value and ending value (as strings) and parses them into a CSSPropTween (possibly with child CSSPropTweens) that accommodates multiple numbers, colors, comma-delimited values, etc. For example:
				 * sp.parseComplex(element, "boxShadow", "5px 10px 20px rgb(255,102,51)", "0px 0px 0px red", true, "0px 0px 0px rgb(0,0,0,0)", pt);
				 * It will walk through the beginning and ending values (which should be in the same format with the same number and type of values) and figure out which parts are numbers, what strings separate the numeric/tweenable values, and then create the CSSPropTweens accordingly. If a plugin is defined, no child CSSPropTweens will be created. Instead, the ending values will be stored in the "data" property of the returned CSSPropTween like: {s:-5, xn1:-10, xn2:-20, xn3:255, xn4:0, xn5:0} so that it can be fed to any other plugin and it'll be plain numeric tweens but the recomposition of the complex value will be handled inside CSSPlugin's setRatio().
				 * If a setRatio is defined, the type of the CSSPropTween will be set to 2 and recomposition of the values will be the responsibility of that method.
				 *
				 * @param {!Object} t Target whose property will be tweened
				 * @param {!string} p Property that will be tweened (its name, like "left" or "backgroundColor" or "boxShadow")
				 * @param {string} b Beginning value
				 * @param {string} e Ending value
				 * @param {boolean} clrs If true, the value could contain a color value like "rgb(255,0,0)" or "#F00" or "red". The default is false, so no colors will be recognized (a performance optimization)
				 * @param {(string|number|Object)} dflt The default beginning value that should be used if no valid beginning value is defined or if the number of values inside the complex beginning and ending values don't match
				 * @param {?CSSPropTween} pt CSSPropTween instance that is the current head of the linked list (we'll prepend to this).
				 * @param {number=} pr Priority in the linked list order. Higher priority properties will be updated before lower priority ones. The default priority is 0.
				 * @param {TweenPlugin=} plugin If a plugin should handle the tweening of extra properties, pass the plugin instance here. If one is defined, then NO subtweens will be created for any extra properties (the properties will be created - just not additional CSSPropTween instances to tween them) because the plugin is expected to do so. However, the end values WILL be populated in the "data" property, like {s:100, xn1:50, xn2:300}
				 * @param {function(number)=} setRatio If values should be set in a custom function instead of being pieced together in a type:1 (complex-value) CSSPropTween, define that custom function here.
				 * @return {CSSPropTween} The first CSSPropTween in the linked list which includes the new one(s) added by the parseComplex() call.
				 */
				_parseComplex = CSSPlugin.parseComplex = function(t, p, b, e, clrs, dflt, pt, pr, plugin, setRatio) {
					//DEBUG: _log("parseComplex: "+p+", b: "+b+", e: "+e);
					b = b || dflt || "";
					if (typeof(e) === "function") {
						e = e(_index, _target);
					}
					pt = new CSSPropTween(t, p, 0, 0, pt, (setRatio ? 2 : 1), null, false, pr, b, e);
					e += ""; //ensures it's a string
					if (clrs && _colorExp.test(e + b)) { //if colors are found, normalize the formatting to rgba() or hsla().
						e = [b, e];
						CSSPlugin.colorStringFilter(e);
						b = e[0];
						e = e[1];
					}
					var ba = b.split(", ").join(",").split(" "), //beginning array
						ea = e.split(", ").join(",").split(" "), //ending array
						l = ba.length,
						autoRound = (_autoRound !== false),
						i, xi, ni, bv, ev, bnums, enums, bn, hasAlpha, temp, cv, str, useHSL;
					if (e.indexOf(",") !== -1 || b.indexOf(",") !== -1) {
						ba = ba.join(" ").replace(_commasOutsideParenExp, ", ").split(" ");
						ea = ea.join(" ").replace(_commasOutsideParenExp, ", ").split(" ");
						l = ba.length;
					}
					if (l !== ea.length) {
						//DEBUG: _log("mismatched formatting detected on " + p + " (" + b + " vs " + e + ")");
						ba = (dflt || "").split(" ");
						l = ba.length;
					}
					pt.plugin = plugin;
					pt.setRatio = setRatio;
					_colorExp.lastIndex = 0;
					for (i = 0; i < l; i++) {
						bv = ba[i];
						ev = ea[i];
						bn = parseFloat(bv);
						//if the value begins with a number (most common). It's fine if it has a suffix like px
						if (bn || bn === 0) {
							pt.appendXtra("", bn, _parseChange(ev, bn), ev.replace(_relNumExp, ""), (autoRound && ev.indexOf("px") !== -1), true);

						//if the value is a color
						} else if (clrs && _colorExp.test(bv)) {
							str = ev.indexOf(")") + 1;
							str = ")" + (str ? ev.substr(str) : ""); //if there's a comma or ) at the end, retain it.
							useHSL = (ev.indexOf("hsl") !== -1 && _supportsOpacity);
							bv = _parseColor(bv, useHSL);
							ev = _parseColor(ev, useHSL);
							hasAlpha = (bv.length + ev.length > 6);
							if (hasAlpha && !_supportsOpacity && ev[3] === 0) { //older versions of IE don't support rgba(), so if the destination alpha is 0, just use "transparent" for the end color
								pt["xs" + pt.l] += pt.l ? " transparent" : "transparent";
								pt.e = pt.e.split(ea[i]).join("transparent");
							} else {
								if (!_supportsOpacity) { //old versions of IE don't support rgba().
									hasAlpha = false;
								}
								if (useHSL) {
									pt.appendXtra((hasAlpha ? "hsla(" : "hsl("), bv[0], _parseChange(ev[0], bv[0]), ",", false, true)
										.appendXtra("", bv[1], _parseChange(ev[1], bv[1]), "%,", false)
										.appendXtra("", bv[2], _parseChange(ev[2], bv[2]), (hasAlpha ? "%," : "%" + str), false);
								} else {
									pt.appendXtra((hasAlpha ? "rgba(" : "rgb("), bv[0], ev[0] - bv[0], ",", true, true)
										.appendXtra("", bv[1], ev[1] - bv[1], ",", true)
										.appendXtra("", bv[2], ev[2] - bv[2], (hasAlpha ? "," : str), true);
								}

								if (hasAlpha) {
									bv = (bv.length < 4) ? 1 : bv[3];
									pt.appendXtra("", bv, ((ev.length < 4) ? 1 : ev[3]) - bv, str, false);
								}
							}
							_colorExp.lastIndex = 0; //otherwise the test() on the RegExp could move the lastIndex and taint future results.

						} else {
							bnums = bv.match(_numExp); //gets each group of numbers in the beginning value string and drops them into an array

							//if no number is found, treat it as a non-tweening value and just append the string to the current xs.
							if (!bnums) {
								pt["xs" + pt.l] += (pt.l || pt["xs" + pt.l]) ? " " + ev : ev;

							//loop through all the numbers that are found and construct the extra values on the pt.
							} else {
								enums = ev.match(_relNumExp); //get each group of numbers in the end value string and drop them into an array. We allow relative values too, like +=50 or -=.5
								if (!enums || enums.length !== bnums.length) {
									//DEBUG: _log("mismatched formatting detected on " + p + " (" + b + " vs " + e + ")");
									return pt;
								}
								ni = 0;
								for (xi = 0; xi < bnums.length; xi++) {
									cv = bnums[xi];
									temp = bv.indexOf(cv, ni);
									pt.appendXtra(bv.substr(ni, temp - ni), Number(cv), _parseChange(enums[xi], cv), "", (autoRound && bv.substr(temp + cv.length, 2) === "px"), (xi === 0));
									ni = temp + cv.length;
								}
								pt["xs" + pt.l] += bv.substr(ni);
							}
						}
					}
					//if there are relative values ("+=" or "-=" prefix), we need to adjust the ending value to eliminate the prefixes and combine the values properly.
					if (e.indexOf("=") !== -1) if (pt.data) {
						str = pt.xs0 + pt.data.s;
						for (i = 1; i < pt.l; i++) {
							str += pt["xs" + i] + pt.data["xn" + i];
						}
						pt.e = str + pt["xs" + i];
					}
					if (!pt.l) {
						pt.type = -1;
						pt.xs0 = pt.e;
					}
					return pt.xfirst || pt;
				},
				i = 9;


			p = CSSPropTween.prototype;
			p.l = p.pr = 0; //length (number of extra properties like xn1, xn2, xn3, etc.
			while (--i > 0) {
				p["xn" + i] = 0;
				p["xs" + i] = "";
			}
			p.xs0 = "";
			p._next = p._prev = p.xfirst = p.data = p.plugin = p.setRatio = p.rxp = null;


			/**
			 * Appends and extra tweening value to a CSSPropTween and automatically manages any prefix and suffix strings. The first extra value is stored in the s and c of the main CSSPropTween instance, but thereafter any extras are stored in the xn1, xn2, xn3, etc. The prefixes and suffixes are stored in the xs0, xs1, xs2, etc. properties. For example, if I walk through a clip value like "rect(10px, 5px, 0px, 20px)", the values would be stored like this:
			 * xs0:"rect(", s:10, xs1:"px, ", xn1:5, xs2:"px, ", xn2:0, xs3:"px, ", xn3:20, xn4:"px)"
			 * And they'd all get joined together when the CSSPlugin renders (in the setRatio() method).
			 * @param {string=} pfx Prefix (if any)
			 * @param {!number} s Starting value
			 * @param {!number} c Change in numeric value over the course of the entire tween. For example, if the start is 5 and the end is 100, the change would be 95.
			 * @param {string=} sfx Suffix (if any)
			 * @param {boolean=} r Round (if true).
			 * @param {boolean=} pad If true, this extra value should be separated by the previous one by a space. If there is no previous extra and pad is true, it will automatically drop the space.
			 * @return {CSSPropTween} returns itself so that multiple methods can be chained together.
			 */
			p.appendXtra = function(pfx, s, c, sfx, r, pad) {
				var pt = this,
					l = pt.l;
				pt["xs" + l] += (pad && (l || pt["xs" + l])) ? " " + pfx : pfx || "";
				if (!c) if (l !== 0 && !pt.plugin) { //typically we'll combine non-changing values right into the xs to optimize performance, but we don't combine them when there's a plugin that will be tweening the values because it may depend on the values being split apart, like for a bezier, if a value doesn't change between the first and second iteration but then it does on the 3rd, we'll run into trouble because there's no xn slot for that value!
					pt["xs" + l] += s + (sfx || "");
					return pt;
				}
				pt.l++;
				pt.type = pt.setRatio ? 2 : 1;
				pt["xs" + pt.l] = sfx || "";
				if (l > 0) {
					pt.data["xn" + l] = s + c;
					pt.rxp["xn" + l] = r; //round extra property (we need to tap into this in the _parseToProxy() method)
					pt["xn" + l] = s;
					if (!pt.plugin) {
						pt.xfirst = new CSSPropTween(pt, "xn" + l, s, c, pt.xfirst || pt, 0, pt.n, r, pt.pr);
						pt.xfirst.xs0 = 0; //just to ensure that the property stays numeric which helps modern browsers speed up processing. Remember, in the setRatio() method, we do pt.t[pt.p] = val + pt.xs0 so if pt.xs0 is "" (the default), it'll cast the end value as a string. When a property is a number sometimes and a string sometimes, it prevents the compiler from locking in the data type, slowing things down slightly.
					}
					return pt;
				}
				pt.data = {s:s + c};
				pt.rxp = {};
				pt.s = s;
				pt.c = c;
				pt.r = r;
				return pt;
			};

			/**
			 * @constructor A SpecialProp is basically a css property that needs to be treated in a non-standard way, like if it may contain a complex value like boxShadow:"5px 10px 15px rgb(255, 102, 51)" or if it is associated with another plugin like ThrowPropsPlugin or BezierPlugin. Every SpecialProp is associated with a particular property name like "boxShadow" or "throwProps" or "bezier" and it will intercept those values in the vars object that's passed to the CSSPlugin and handle them accordingly.
			 * @param {!string} p Property name (like "boxShadow" or "throwProps")
			 * @param {Object=} options An object containing any of the following configuration options:
			 *                      - defaultValue: the default value
			 *                      - parser: A function that should be called when the associated property name is found in the vars. This function should return a CSSPropTween instance and it should ensure that it is properly inserted into the linked list. It will receive 4 paramters: 1) The target, 2) The value defined in the vars, 3) The CSSPlugin instance (whose _firstPT should be used for the linked list), and 4) A computed style object if one was calculated (this is a speed optimization that allows retrieval of starting values quicker)
			 *                      - formatter: a function that formats any value received for this special property (for example, boxShadow could take "5px 5px red" and format it to "5px 5px 0px 0px red" so that both the beginning and ending values have a common order and quantity of values.)
			 *                      - prefix: if true, we'll determine whether or not this property requires a vendor prefix (like Webkit or Moz or ms or O)
			 *                      - color: set this to true if the value for this SpecialProp may contain color-related values like rgb(), rgba(), etc.
			 *                      - priority: priority in the linked list order. Higher priority SpecialProps will be updated before lower priority ones. The default priority is 0.
			 *                      - multi: if true, the formatter should accommodate a comma-delimited list of values, like boxShadow could have multiple boxShadows listed out.
			 *                      - collapsible: if true, the formatter should treat the value like it's a top/right/bottom/left value that could be collapsed, like "5px" would apply to all, "5px, 10px" would use 5px for top/bottom and 10px for right/left, etc.
			 *                      - keyword: a special keyword that can [optionally] be found inside the value (like "inset" for boxShadow). This allows us to validate beginning/ending values to make sure they match (if the keyword is found in one, it'll be added to the other for consistency by default).
			 */
			var SpecialProp = function(p, options) {
					options = options || {};
					this.p = options.prefix ? _checkPropPrefix(p) || p : p;
					_specialProps[p] = _specialProps[this.p] = this;
					this.format = options.formatter || _getFormatter(options.defaultValue, options.color, options.collapsible, options.multi);
					if (options.parser) {
						this.parse = options.parser;
					}
					this.clrs = options.color;
					this.multi = options.multi;
					this.keyword = options.keyword;
					this.dflt = options.defaultValue;
					this.pr = options.priority || 0;
				},

				//shortcut for creating a new SpecialProp that can accept multiple properties as a comma-delimited list (helps minification). dflt can be an array for multiple values (we don't do a comma-delimited list because the default value may contain commas, like rect(0px,0px,0px,0px)). We attach this method to the SpecialProp class/object instead of using a private _createSpecialProp() method so that we can tap into it externally if necessary, like from another plugin.
				_registerComplexSpecialProp = _internals._registerComplexSpecialProp = function(p, options, defaults) {
					if (typeof(options) !== "object") {
						options = {parser:defaults}; //to make backwards compatible with older versions of BezierPlugin and ThrowPropsPlugin
					}
					var a = p.split(","),
						d = options.defaultValue,
						i, temp;
					defaults = defaults || [d];
					for (i = 0; i < a.length; i++) {
						options.prefix = (i === 0 && options.prefix);
						options.defaultValue = defaults[i] || d;
						temp = new SpecialProp(a[i], options);
					}
				},

				//creates a placeholder special prop for a plugin so that the property gets caught the first time a tween of it is attempted, and at that time it makes the plugin register itself, thus taking over for all future tweens of that property. This allows us to not mandate that things load in a particular order and it also allows us to log() an error that informs the user when they attempt to tween an external plugin-related property without loading its .js file.
				_registerPluginProp = _internals._registerPluginProp = function(p) {
					if (!_specialProps[p]) {
						var pluginName = p.charAt(0).toUpperCase() + p.substr(1) + "Plugin";
						_registerComplexSpecialProp(p, {parser:function(t, e, p, cssp, pt, plugin, vars) {
							var pluginClass = _globals.com.greensock.plugins[pluginName];
							if (!pluginClass) {
								_log("Error: " + pluginName + " js file not loaded.");
								return pt;
							}
							pluginClass._cssRegister();
							return _specialProps[p].parse(t, e, p, cssp, pt, plugin, vars);
						}});
					}
				};


			p = SpecialProp.prototype;

			/**
			 * Alias for _parseComplex() that automatically plugs in certain values for this SpecialProp, like its property name, whether or not colors should be sensed, the default value, and priority. It also looks for any keyword that the SpecialProp defines (like "inset" for boxShadow) and ensures that the beginning and ending values have the same number of values for SpecialProps where multi is true (like boxShadow and textShadow can have a comma-delimited list)
			 * @param {!Object} t target element
			 * @param {(string|number|object)} b beginning value
			 * @param {(string|number|object)} e ending (destination) value
			 * @param {CSSPropTween=} pt next CSSPropTween in the linked list
			 * @param {TweenPlugin=} plugin If another plugin will be tweening the complex value, that TweenPlugin instance goes here.
			 * @param {function=} setRatio If a custom setRatio() method should be used to handle this complex value, that goes here.
			 * @return {CSSPropTween=} First CSSPropTween in the linked list
			 */
			p.parseComplex = function(t, b, e, pt, plugin, setRatio) {
				var kwd = this.keyword,
					i, ba, ea, l, bi, ei;
				//if this SpecialProp's value can contain a comma-delimited list of values (like boxShadow or textShadow), we must parse them in a special way, and look for a keyword (like "inset" for boxShadow) and ensure that the beginning and ending BOTH have it if the end defines it as such. We also must ensure that there are an equal number of values specified (we can't tween 1 boxShadow to 3 for example)
				if (this.multi) if (_commasOutsideParenExp.test(e) || _commasOutsideParenExp.test(b)) {
					ba = b.replace(_commasOutsideParenExp, "|").split("|");
					ea = e.replace(_commasOutsideParenExp, "|").split("|");
				} else if (kwd) {
					ba = [b];
					ea = [e];
				}
				if (ea) {
					l = (ea.length > ba.length) ? ea.length : ba.length;
					for (i = 0; i < l; i++) {
						b = ba[i] = ba[i] || this.dflt;
						e = ea[i] = ea[i] || this.dflt;
						if (kwd) {
							bi = b.indexOf(kwd);
							ei = e.indexOf(kwd);
							if (bi !== ei) {
								if (ei === -1) { //if the keyword isn't in the end value, remove it from the beginning one.
									ba[i] = ba[i].split(kwd).join("");
								} else if (bi === -1) { //if the keyword isn't in the beginning, add it.
									ba[i] += " " + kwd;
								}
							}
						}
					}
					b = ba.join(", ");
					e = ea.join(", ");
				}
				return _parseComplex(t, this.p, b, e, this.clrs, this.dflt, pt, this.pr, plugin, setRatio);
			};

			/**
			 * Accepts a target and end value and spits back a CSSPropTween that has been inserted into the CSSPlugin's linked list and conforms with all the conventions we use internally, like type:-1, 0, 1, or 2, setting up any extra property tweens, priority, etc. For example, if we have a boxShadow SpecialProp and call:
			 * this._firstPT = sp.parse(element, "5px 10px 20px rgb(2550,102,51)", "boxShadow", this);
			 * It should figure out the starting value of the element's boxShadow, compare it to the provided end value and create all the necessary CSSPropTweens of the appropriate types to tween the boxShadow. The CSSPropTween that gets spit back should already be inserted into the linked list (the 4th parameter is the current head, so prepend to that).
			 * @param {!Object} t Target object whose property is being tweened
			 * @param {Object} e End value as provided in the vars object (typically a string, but not always - like a throwProps would be an object).
			 * @param {!string} p Property name
			 * @param {!CSSPlugin} cssp The CSSPlugin instance that should be associated with this tween.
			 * @param {?CSSPropTween} pt The CSSPropTween that is the current head of the linked list (we'll prepend to it)
			 * @param {TweenPlugin=} plugin If a plugin will be used to tween the parsed value, this is the plugin instance.
			 * @param {Object=} vars Original vars object that contains the data for parsing.
			 * @return {CSSPropTween} The first CSSPropTween in the linked list which includes the new one(s) added by the parse() call.
			 */
			p.parse = function(t, e, p, cssp, pt, plugin, vars) {
				return this.parseComplex(t.style, this.format(_getStyle(t, this.p, _cs, false, this.dflt)), this.format(e), pt, plugin);
			};

			/**
			 * Registers a special property that should be intercepted from any "css" objects defined in tweens. This allows you to handle them however you want without CSSPlugin doing it for you. The 2nd parameter should be a function that accepts 3 parameters:
			 *  1) Target object whose property should be tweened (typically a DOM element)
			 *  2) The end/destination value (could be a string, number, object, or whatever you want)
			 *  3) The tween instance (you probably don't need to worry about this, but it can be useful for looking up information like the duration)
			 *
			 * Then, your function should return a function which will be called each time the tween gets rendered, passing a numeric "ratio" parameter to your function that indicates the change factor (usually between 0 and 1). For example:
			 *
			 * CSSPlugin.registerSpecialProp("myCustomProp", function(target, value, tween) {
			 *      var start = target.style.width;
			 *      return function(ratio) {
			 *              target.style.width = (start + value * ratio) + "px";
			 *              console.log("set width to " + target.style.width);
			 *          }
			 * }, 0);
			 *
			 * Then, when I do this tween, it will trigger my special property:
			 *
			 * TweenLite.to(element, 1, {css:{myCustomProp:100}});
			 *
			 * In the example, of course, we're just changing the width, but you can do anything you want.
			 *
			 * @param {!string} name Property name (or comma-delimited list of property names) that should be intercepted and handled by your function. For example, if I define "myCustomProp", then it would handle that portion of the following tween: TweenLite.to(element, 1, {css:{myCustomProp:100}})
			 * @param {!function(Object, Object, Object, string):function(number)} onInitTween The function that will be called when a tween of this special property is performed. The function will receive 4 parameters: 1) Target object that should be tweened, 2) Value that was passed to the tween, 3) The tween instance itself (rarely used), and 4) The property name that's being tweened. Your function should return a function that should be called on every update of the tween. That function will receive a single parameter that is a "change factor" value (typically between 0 and 1) indicating the amount of change as a ratio. You can use this to determine how to set the values appropriately in your function.
			 * @param {number=} priority Priority that helps the engine determine the order in which to set the properties (default: 0). Higher priority properties will be updated before lower priority ones.
			 */
			CSSPlugin.registerSpecialProp = function(name, onInitTween, priority) {
				_registerComplexSpecialProp(name, {parser:function(t, e, p, cssp, pt, plugin, vars) {
					var rv = new CSSPropTween(t, p, 0, 0, pt, 2, p, false, priority);
					rv.plugin = plugin;
					rv.setRatio = onInitTween(t, e, cssp._tween, p);
					return rv;
				}, priority:priority});
			};






			//transform-related methods and properties
			CSSPlugin.useSVGTransformAttr = _isSafari || _isFirefox; //Safari and Firefox both have some rendering bugs when applying CSS transforms to SVG elements, so default to using the "transform" attribute instead (users can override this).
			var _transformProps = ("scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent").split(","),
				_transformProp = _checkPropPrefix("transform"), //the Javascript (camelCase) transform property, like msTransform, WebkitTransform, MozTransform, or OTransform.
				_transformPropCSS = _prefixCSS + "transform",
				_transformOriginProp = _checkPropPrefix("transformOrigin"),
				_supports3D = (_checkPropPrefix("perspective") !== null),
				Transform = _internals.Transform = function() {
					this.perspective = parseFloat(CSSPlugin.defaultTransformPerspective) || 0;
					this.force3D = (CSSPlugin.defaultForce3D === false || !_supports3D) ? false : CSSPlugin.defaultForce3D || "auto";
				},
				_SVGElement = window.SVGElement,
				_useSVGTransformAttr,
				//Some browsers (like Firefox and IE) don't honor transform-origin properly in SVG elements, so we need to manually adjust the matrix accordingly. We feature detect here rather than always doing the conversion for certain browsers because they may fix the problem at some point in the future.

				_createSVG = function(type, container, attributes) {
					var element = _doc.createElementNS("http://www.w3.org/2000/svg", type),
						reg = /([a-z])([A-Z])/g,
						p;
					for (p in attributes) {
						element.setAttributeNS(null, p.replace(reg, "$1-$2").toLowerCase(), attributes[p]);
					}
					container.appendChild(element);
					return element;
				},
				_docElement = _doc.documentElement,
				_forceSVGTransformAttr = (function() {
					//IE and Android stock don't support CSS transforms on SVG elements, so we must write them to the "transform" attribute. We populate this variable in the _parseTransform() method, and only if/when we come across an SVG element
					var force = _ieVers || (/Android/i.test(_agent) && !window.chrome),
						svg, rect, width;
					if (_doc.createElementNS && !force) { //IE8 and earlier doesn't support SVG anyway
						svg = _createSVG("svg", _docElement);
						rect = _createSVG("rect", svg, {width:100, height:50, x:100});
						width = rect.getBoundingClientRect().width;
						rect.style[_transformOriginProp] = "50% 50%";
						rect.style[_transformProp] = "scaleX(0.5)";
						force = (width === rect.getBoundingClientRect().width && !(_isFirefox && _supports3D)); //note: Firefox fails the test even though it does support CSS transforms in 3D. Since we can't push 3D stuff into the transform attribute, we force Firefox to pass the test here (as long as it does truly support 3D).
						_docElement.removeChild(svg);
					}
					return force;
				})(),
				_parseSVGOrigin = function(e, local, decoratee, absolute, smoothOrigin, skipRecord) {
					var tm = e._gsTransform,
						m = _getMatrix(e, true),
						v, x, y, xOrigin, yOrigin, a, b, c, d, tx, ty, determinant, xOriginOld, yOriginOld;
					if (tm) {
						xOriginOld = tm.xOrigin; //record the original values before we alter them.
						yOriginOld = tm.yOrigin;
					}
					if (!absolute || (v = absolute.split(" ")).length < 2) {
						b = e.getBBox();
						local = _parsePosition(local).split(" ");
						v = [(local[0].indexOf("%") !== -1 ? parseFloat(local[0]) / 100 * b.width : parseFloat(local[0])) + b.x,
							 (local[1].indexOf("%") !== -1 ? parseFloat(local[1]) / 100 * b.height : parseFloat(local[1])) + b.y];
					}
					decoratee.xOrigin = xOrigin = parseFloat(v[0]);
					decoratee.yOrigin = yOrigin = parseFloat(v[1]);
					if (absolute && m !== _identity2DMatrix) { //if svgOrigin is being set, we must invert the matrix and determine where the absolute point is, factoring in the current transforms. Otherwise, the svgOrigin would be based on the element's non-transformed position on the canvas.
						a = m[0];
						b = m[1];
						c = m[2];
						d = m[3];
						tx = m[4];
						ty = m[5];
						determinant = (a * d - b * c);
						x = xOrigin * (d / determinant) + yOrigin * (-c / determinant) + ((c * ty - d * tx) / determinant);
						y = xOrigin * (-b / determinant) + yOrigin * (a / determinant) - ((a * ty - b * tx) / determinant);
						xOrigin = decoratee.xOrigin = v[0] = x;
						yOrigin = decoratee.yOrigin = v[1] = y;
					}
					if (tm) { //avoid jump when transformOrigin is changed - adjust the x/y values accordingly
						if (skipRecord) {
							decoratee.xOffset = tm.xOffset;
							decoratee.yOffset = tm.yOffset;
							tm = decoratee;
						}
						if (smoothOrigin || (smoothOrigin !== false && CSSPlugin.defaultSmoothOrigin !== false)) {
							x = xOrigin - xOriginOld;
							y = yOrigin - yOriginOld;
							//originally, we simply adjusted the x and y values, but that would cause problems if, for example, you created a rotational tween part-way through an x/y tween. Managing the offset in a separate variable gives us ultimate flexibility.
							//tm.x -= x - (x * m[0] + y * m[2]);
							//tm.y -= y - (x * m[1] + y * m[3]);
							tm.xOffset += (x * m[0] + y * m[2]) - x;
							tm.yOffset += (x * m[1] + y * m[3]) - y;
						} else {
							tm.xOffset = tm.yOffset = 0;
						}
					}
					if (!skipRecord) {
						e.setAttribute("data-svg-origin", v.join(" "));
					}
				},
				_canGetBBox = function(e) {
					try {
						return e.getBBox(); //Firefox throws errors if you try calling getBBox() on an SVG element that's not rendered (like in a <symbol> or <defs>). https://bugzilla.mozilla.org/show_bug.cgi?id=612118
					} catch (e) {}
				},
				_isSVG = function(e) { //reports if the element is an SVG on which getBBox() actually works
					return !!(_SVGElement && e.getBBox && e.getCTM && _canGetBBox(e) && (!e.parentNode || (e.parentNode.getBBox && e.parentNode.getCTM)));
				},
				_identity2DMatrix = [1,0,0,1,0,0],
				_getMatrix = function(e, force2D) {
					var tm = e._gsTransform || new Transform(),
						rnd = 100000,
						style = e.style,
						isDefault, s, m, n, dec, none;
					if (_transformProp) {
						s = _getStyle(e, _transformPropCSS, null, true);
					} else if (e.currentStyle) {
						//for older versions of IE, we need to interpret the filter portion that is in the format: progid:DXImageTransform.Microsoft.Matrix(M11=6.123233995736766e-17, M12=-1, M21=1, M22=6.123233995736766e-17, sizingMethod='auto expand') Notice that we need to swap b and c compared to a normal matrix.
						s = e.currentStyle.filter.match(_ieGetMatrixExp);
						s = (s && s.length === 4) ? [s[0].substr(4), Number(s[2].substr(4)), Number(s[1].substr(4)), s[3].substr(4), (tm.x || 0), (tm.y || 0)].join(",") : "";
					}
					isDefault = (!s || s === "none" || s === "matrix(1, 0, 0, 1, 0, 0)");
					if (isDefault && _transformProp && ((none = (_getComputedStyle(e).display === "none")) || !e.parentNode)) {
						if (none) { //browsers don't report transforms accurately unless the element is in the DOM and has a display value that's not "none".
							n = style.display;
							style.display = "block";
						}
						if (!e.parentNode) {
							dec = 1; //flag
							_docElement.appendChild(e);
						}
						s = _getStyle(e, _transformPropCSS, null, true);
						isDefault = (!s || s === "none" || s === "matrix(1, 0, 0, 1, 0, 0)");
						if (n) {
							style.display = n;
						} else if (none) {
							_removeProp(style, "display");
						}
						if (dec) {
							_docElement.removeChild(e);
						}
					}
					if (tm.svg || (e.getBBox && _isSVG(e))) {
						if (isDefault && (style[_transformProp] + "").indexOf("matrix") !== -1) { //some browsers (like Chrome 40) don't correctly report transforms that are applied inline on an SVG element (they don't get included in the computed style), so we double-check here and accept matrix values
							s = style[_transformProp];
							isDefault = 0;
						}
						m = e.getAttribute("transform");
						if (isDefault && m) {
							if (m.indexOf("matrix") !== -1) { //just in case there's a "transform" value specified as an attribute instead of CSS style. Accept either a matrix() or simple translate() value though.
								s = m;
								isDefault = 0;
							} else if (m.indexOf("translate") !== -1) {
								s = "matrix(1,0,0,1," + m.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")";
								isDefault = 0;
							}
						}
					}
					if (isDefault) {
						return _identity2DMatrix;
					}
					//split the matrix values out into an array (m for matrix)
					m = (s || "").match(_numExp) || [];
					i = m.length;
					while (--i > -1) {
						n = Number(m[i]);
						m[i] = (dec = n - (n |= 0)) ? ((dec * rnd + (dec < 0 ? -0.5 : 0.5)) | 0) / rnd + n : n; //convert strings to Numbers and round to 5 decimal places to avoid issues with tiny numbers. Roughly 20x faster than Number.toFixed(). We also must make sure to round before dividing so that values like 0.9999999999 become 1 to avoid glitches in browser rendering and interpretation of flipped/rotated 3D matrices. And don't just multiply the number by rnd, floor it, and then divide by rnd because the bitwise operations max out at a 32-bit signed integer, thus it could get clipped at a relatively low value (like 22,000.00000 for example).
					}
					return (force2D && m.length > 6) ? [m[0], m[1], m[4], m[5], m[12], m[13]] : m;
				},

				/**
				 * Parses the transform values for an element, returning an object with x, y, z, scaleX, scaleY, scaleZ, rotation, rotationX, rotationY, skewX, and skewY properties. Note: by default (for performance reasons), all skewing is combined into skewX and rotation but skewY still has a place in the transform object so that we can record how much of the skew is attributed to skewX vs skewY. Remember, a skewY of 10 looks the same as a rotation of 10 and skewX of -10.
				 * @param {!Object} t target element
				 * @param {Object=} cs computed style object (optional)
				 * @param {boolean=} rec if true, the transform values will be recorded to the target element's _gsTransform object, like target._gsTransform = {x:0, y:0, z:0, scaleX:1...}
				 * @param {boolean=} parse if true, we'll ignore any _gsTransform values that already exist on the element, and force a reparsing of the css (calculated style)
				 * @return {object} object containing all of the transform properties/values like {x:0, y:0, z:0, scaleX:1...}
				 */
				_getTransform = _internals.getTransform = function(t, cs, rec, parse) {
					if (t._gsTransform && rec && !parse) {
						return t._gsTransform; //if the element already has a _gsTransform, use that. Note: some browsers don't accurately return the calculated style for the transform (particularly for SVG), so it's almost always safest to just use the values we've already applied rather than re-parsing things.
					}
					var tm = rec ? t._gsTransform || new Transform() : new Transform(),
						invX = (tm.scaleX < 0), //in order to interpret things properly, we need to know if the user applied a negative scaleX previously so that we can adjust the rotation and skewX accordingly. Otherwise, if we always interpret a flipped matrix as affecting scaleY and the user only wants to tween the scaleX on multiple sequential tweens, it would keep the negative scaleY without that being the user's intent.
						min = 0.00002,
						rnd = 100000,
						zOrigin = _supports3D ? parseFloat(_getStyle(t, _transformOriginProp, cs, false, "0 0 0").split(" ")[2]) || tm.zOrigin  || 0 : 0,
						defaultTransformPerspective = parseFloat(CSSPlugin.defaultTransformPerspective) || 0,
						m, i, scaleX, scaleY, rotation, skewX;

					tm.svg = !!(t.getBBox && _isSVG(t));
					if (tm.svg) {
						_parseSVGOrigin(t, _getStyle(t, _transformOriginProp, cs, false, "50% 50%") + "", tm, t.getAttribute("data-svg-origin"));
						_useSVGTransformAttr = CSSPlugin.useSVGTransformAttr || _forceSVGTransformAttr;
					}
					m = _getMatrix(t);
					if (m !== _identity2DMatrix) {

						if (m.length === 16) {
							//we'll only look at these position-related 6 variables first because if x/y/z all match, it's relatively safe to assume we don't need to re-parse everything which risks losing important rotational information (like rotationX:180 plus rotationY:180 would look the same as rotation:180 - there's no way to know for sure which direction was taken based solely on the matrix3d() values)
							var a11 = m[0], a21 = m[1], a31 = m[2], a41 = m[3],
								a12 = m[4], a22 = m[5], a32 = m[6], a42 = m[7],
								a13 = m[8], a23 = m[9], a33 = m[10],
								a14 = m[12], a24 = m[13], a34 = m[14],
								a43 = m[11],
								angle = Math.atan2(a32, a33),
								t1, t2, t3, t4, cos, sin;

							//we manually compensate for non-zero z component of transformOrigin to work around bugs in Safari
							if (tm.zOrigin) {
								a34 = -tm.zOrigin;
								a14 = a13*a34-m[12];
								a24 = a23*a34-m[13];
								a34 = a33*a34+tm.zOrigin-m[14];
							}
							tm.rotationX = angle * _RAD2DEG;
							//rotationX
							if (angle) {
								cos = Math.cos(-angle);
								sin = Math.sin(-angle);
								t1 = a12*cos+a13*sin;
								t2 = a22*cos+a23*sin;
								t3 = a32*cos+a33*sin;
								a13 = a12*-sin+a13*cos;
								a23 = a22*-sin+a23*cos;
								a33 = a32*-sin+a33*cos;
								a43 = a42*-sin+a43*cos;
								a12 = t1;
								a22 = t2;
								a32 = t3;
							}
							//rotationY
							angle = Math.atan2(-a31, a33);
							tm.rotationY = angle * _RAD2DEG;
							if (angle) {
								cos = Math.cos(-angle);
								sin = Math.sin(-angle);
								t1 = a11*cos-a13*sin;
								t2 = a21*cos-a23*sin;
								t3 = a31*cos-a33*sin;
								a23 = a21*sin+a23*cos;
								a33 = a31*sin+a33*cos;
								a43 = a41*sin+a43*cos;
								a11 = t1;
								a21 = t2;
								a31 = t3;
							}
							//rotationZ
							angle = Math.atan2(a21, a11);
							tm.rotation = angle * _RAD2DEG;
							if (angle) {
								cos = Math.cos(-angle);
								sin = Math.sin(-angle);
								a11 = a11*cos+a12*sin;
								t2 = a21*cos+a22*sin;
								a22 = a21*-sin+a22*cos;
								a32 = a31*-sin+a32*cos;
								a21 = t2;
							}

							if (tm.rotationX && Math.abs(tm.rotationX) + Math.abs(tm.rotation) > 359.9) { //when rotationY is set, it will often be parsed as 180 degrees different than it should be, and rotationX and rotation both being 180 (it looks the same), so we adjust for that here.
								tm.rotationX = tm.rotation = 0;
								tm.rotationY = 180 - tm.rotationY;
							}

							tm.scaleX = ((Math.sqrt(a11 * a11 + a21 * a21) * rnd + 0.5) | 0) / rnd;
							tm.scaleY = ((Math.sqrt(a22 * a22 + a23 * a23) * rnd + 0.5) | 0) / rnd;
							tm.scaleZ = ((Math.sqrt(a32 * a32 + a33 * a33) * rnd + 0.5) | 0) / rnd;
							if (tm.rotationX || tm.rotationY) {
								tm.skewX = 0;
							} else {
								tm.skewX = (a12 || a22) ? Math.atan2(a12, a22) * _RAD2DEG + tm.rotation : tm.skewX || 0;
								if (Math.abs(tm.skewX) > 90 && Math.abs(tm.skewX) < 270) {
									if (invX) {
										tm.scaleX *= -1;
										tm.skewX += (tm.rotation <= 0) ? 180 : -180;
										tm.rotation += (tm.rotation <= 0) ? 180 : -180;
									} else {
										tm.scaleY *= -1;
										tm.skewX += (tm.skewX <= 0) ? 180 : -180;
									}
								}
							}
							tm.perspective = a43 ? 1 / ((a43 < 0) ? -a43 : a43) : 0;
							tm.x = a14;
							tm.y = a24;
							tm.z = a34;
							if (tm.svg) {
								tm.x -= tm.xOrigin - (tm.xOrigin * a11 - tm.yOrigin * a12);
								tm.y -= tm.yOrigin - (tm.yOrigin * a21 - tm.xOrigin * a22);
							}

						} else if ((!_supports3D || parse || !m.length || tm.x !== m[4] || tm.y !== m[5] || (!tm.rotationX && !tm.rotationY))) { //sometimes a 6-element matrix is returned even when we performed 3D transforms, like if rotationX and rotationY are 180. In cases like this, we still need to honor the 3D transforms. If we just rely on the 2D info, it could affect how the data is interpreted, like scaleY might get set to -1 or rotation could get offset by 180 degrees. For example, do a TweenLite.to(element, 1, {css:{rotationX:180, rotationY:180}}) and then later, TweenLite.to(element, 1, {css:{rotationX:0}}) and without this conditional logic in place, it'd jump to a state of being unrotated when the 2nd tween starts. Then again, we need to honor the fact that the user COULD alter the transforms outside of CSSPlugin, like by manually applying new css, so we try to sense that by looking at x and y because if those changed, we know the changes were made outside CSSPlugin and we force a reinterpretation of the matrix values. Also, in Webkit browsers, if the element's "display" is "none", its calculated style value will always return empty, so if we've already recorded the values in the _gsTransform object, we'll just rely on those.
							var k = (m.length >= 6),
								a = k ? m[0] : 1,
								b = m[1] || 0,
								c = m[2] || 0,
								d = k ? m[3] : 1;
							tm.x = m[4] || 0;
							tm.y = m[5] || 0;
							scaleX = Math.sqrt(a * a + b * b);
							scaleY = Math.sqrt(d * d + c * c);
							rotation = (a || b) ? Math.atan2(b, a) * _RAD2DEG : tm.rotation || 0; //note: if scaleX is 0, we cannot accurately measure rotation. Same for skewX with a scaleY of 0. Therefore, we default to the previously recorded value (or zero if that doesn't exist).
							skewX = (c || d) ? Math.atan2(c, d) * _RAD2DEG + rotation : tm.skewX || 0;
							if (Math.abs(skewX) > 90 && Math.abs(skewX) < 270) {
								if (invX) {
									scaleX *= -1;
									skewX += (rotation <= 0) ? 180 : -180;
									rotation += (rotation <= 0) ? 180 : -180;
								} else {
									scaleY *= -1;
									skewX += (skewX <= 0) ? 180 : -180;
								}
							}
							tm.scaleX = scaleX;
							tm.scaleY = scaleY;
							tm.rotation = rotation;
							tm.skewX = skewX;
							if (_supports3D) {
								tm.rotationX = tm.rotationY = tm.z = 0;
								tm.perspective = defaultTransformPerspective;
								tm.scaleZ = 1;
							}
							if (tm.svg) {
								tm.x -= tm.xOrigin - (tm.xOrigin * a + tm.yOrigin * c);
								tm.y -= tm.yOrigin - (tm.xOrigin * b + tm.yOrigin * d);
							}
						}
						tm.zOrigin = zOrigin;
						//some browsers have a hard time with very small values like 2.4492935982947064e-16 (notice the "e-" towards the end) and would render the object slightly off. So we round to 0 in these cases. The conditional logic here is faster than calling Math.abs(). Also, browsers tend to render a SLIGHTLY rotated object in a fuzzy way, so we need to snap to exactly 0 when appropriate.
						for (i in tm) {
							if (tm[i] < min) if (tm[i] > -min) {
								tm[i] = 0;
							}
						}
					}
					//DEBUG: _log("parsed rotation of " + t.getAttribute("id")+": "+(tm.rotationX)+", "+(tm.rotationY)+", "+(tm.rotation)+", scale: "+tm.scaleX+", "+tm.scaleY+", "+tm.scaleZ+", position: "+tm.x+", "+tm.y+", "+tm.z+", perspective: "+tm.perspective+ ", origin: "+ tm.xOrigin+ ","+ tm.yOrigin);
					if (rec) {
						t._gsTransform = tm; //record to the object's _gsTransform which we use so that tweens can control individual properties independently (we need all the properties to accurately recompose the matrix in the setRatio() method)
						if (tm.svg) { //if we're supposed to apply transforms to the SVG element's "transform" attribute, make sure there aren't any CSS transforms applied or they'll override the attribute ones. Also clear the transform attribute if we're using CSS, just to be clean.
							if (_useSVGTransformAttr && t.style[_transformProp]) {
								TweenLite.delayedCall(0.001, function(){ //if we apply this right away (before anything has rendered), we risk there being no transforms for a brief moment and it also interferes with adjusting the transformOrigin in a tween with immediateRender:true (it'd try reading the matrix and it wouldn't have the appropriate data in place because we just removed it).
									_removeProp(t.style, _transformProp);
								});
							} else if (!_useSVGTransformAttr && t.getAttribute("transform")) {
								TweenLite.delayedCall(0.001, function(){
									t.removeAttribute("transform");
								});
							}
						}
					}
					return tm;
				},

				//for setting 2D transforms in IE6, IE7, and IE8 (must use a "filter" to emulate the behavior of modern day browser transforms)
				_setIETransformRatio = function(v) {
					var t = this.data, //refers to the element's _gsTransform object
						ang = -t.rotation * _DEG2RAD,
						skew = ang + t.skewX * _DEG2RAD,
						rnd = 100000,
						a = ((Math.cos(ang) * t.scaleX * rnd) | 0) / rnd,
						b = ((Math.sin(ang) * t.scaleX * rnd) | 0) / rnd,
						c = ((Math.sin(skew) * -t.scaleY * rnd) | 0) / rnd,
						d = ((Math.cos(skew) * t.scaleY * rnd) | 0) / rnd,
						style = this.t.style,
						cs = this.t.currentStyle,
						filters, val;
					if (!cs) {
						return;
					}
					val = b; //just for swapping the variables an inverting them (reused "val" to avoid creating another variable in memory). IE's filter matrix uses a non-standard matrix configuration (angle goes the opposite way, and b and c are reversed and inverted)
					b = -c;
					c = -val;
					filters = cs.filter;
					style.filter = ""; //remove filters so that we can accurately measure offsetWidth/offsetHeight
					var w = this.t.offsetWidth,
						h = this.t.offsetHeight,
						clip = (cs.position !== "absolute"),
						m = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + b + ", M21=" + c + ", M22=" + d,
						ox = t.x + (w * t.xPercent / 100),
						oy = t.y + (h * t.yPercent / 100),
						dx, dy;

					//if transformOrigin is being used, adjust the offset x and y
					if (t.ox != null) {
						dx = ((t.oxp) ? w * t.ox * 0.01 : t.ox) - w / 2;
						dy = ((t.oyp) ? h * t.oy * 0.01 : t.oy) - h / 2;
						ox += dx - (dx * a + dy * b);
						oy += dy - (dx * c + dy * d);
					}

					if (!clip) {
						m += ", sizingMethod='auto expand')";
					} else {
						dx = (w / 2);
						dy = (h / 2);
						//translate to ensure that transformations occur around the correct origin (default is center).
						m += ", Dx=" + (dx - (dx * a + dy * b) + ox) + ", Dy=" + (dy - (dx * c + dy * d) + oy) + ")";
					}
					if (filters.indexOf("DXImageTransform.Microsoft.Matrix(") !== -1) {
						style.filter = filters.replace(_ieSetMatrixExp, m);
					} else {
						style.filter = m + " " + filters; //we must always put the transform/matrix FIRST (before alpha(opacity=xx)) to avoid an IE bug that slices part of the object when rotation is applied with alpha.
					}

					//at the end or beginning of the tween, if the matrix is normal (1, 0, 0, 1) and opacity is 100 (or doesn't exist), remove the filter to improve browser performance.
					if (v === 0 || v === 1) if (a === 1) if (b === 0) if (c === 0) if (d === 1) if (!clip || m.indexOf("Dx=0, Dy=0") !== -1) if (!_opacityExp.test(filters) || parseFloat(RegExp.$1) === 100) if (filters.indexOf("gradient(" && filters.indexOf("Alpha")) === -1) {
						style.removeAttribute("filter");
					}

					//we must set the margins AFTER applying the filter in order to avoid some bugs in IE8 that could (in rare scenarios) cause them to be ignored intermittently (vibration).
					if (!clip) {
						var mult = (_ieVers < 8) ? 1 : -1, //in Internet Explorer 7 and before, the box model is broken, causing the browser to treat the width/height of the actual rotated filtered image as the width/height of the box itself, but Microsoft corrected that in IE8. We must use a negative offset in IE8 on the right/bottom
							marg, prop, dif;
						dx = t.ieOffsetX || 0;
						dy = t.ieOffsetY || 0;
						t.ieOffsetX = Math.round((w - ((a < 0 ? -a : a) * w + (b < 0 ? -b : b) * h)) / 2 + ox);
						t.ieOffsetY = Math.round((h - ((d < 0 ? -d : d) * h + (c < 0 ? -c : c) * w)) / 2 + oy);
						for (i = 0; i < 4; i++) {
							prop = _margins[i];
							marg = cs[prop];
							//we need to get the current margin in case it is being tweened separately (we want to respect that tween's changes)
							val = (marg.indexOf("px") !== -1) ? parseFloat(marg) : _convertToPixels(this.t, prop, parseFloat(marg), marg.replace(_suffixExp, "")) || 0;
							if (val !== t[prop]) {
								dif = (i < 2) ? -t.ieOffsetX : -t.ieOffsetY; //if another tween is controlling a margin, we cannot only apply the difference in the ieOffsets, so we essentially zero-out the dx and dy here in that case. We record the margin(s) later so that we can keep comparing them, making this code very flexible.
							} else {
								dif = (i < 2) ? dx - t.ieOffsetX : dy - t.ieOffsetY;
							}
							style[prop] = (t[prop] = Math.round( val - dif * ((i === 0 || i === 2) ? 1 : mult) )) + "px";
						}
					}
				},

				/* translates a super small decimal to a string WITHOUT scientific notation
				_safeDecimal = function(n) {
					var s = (n < 0 ? -n : n) + "",
						a = s.split("e-");
					return (n < 0 ? "-0." : "0.") + new Array(parseInt(a[1], 10) || 0).join("0") + a[0].split(".").join("");
				},
				*/

				_setTransformRatio = _internals.set3DTransformRatio = _internals.setTransformRatio = function(v) {
					var t = this.data, //refers to the element's _gsTransform object
						style = this.t.style,
						angle = t.rotation,
						rotationX = t.rotationX,
						rotationY = t.rotationY,
						sx = t.scaleX,
						sy = t.scaleY,
						sz = t.scaleZ,
						x = t.x,
						y = t.y,
						z = t.z,
						isSVG = t.svg,
						perspective = t.perspective,
						force3D = t.force3D,
						a11, a12, a13, a21, a22, a23, a31, a32, a33, a41, a42, a43,
						zOrigin, min, cos, sin, t1, t2, transform, comma, zero, skew, rnd;
					//check to see if we should render as 2D (and SVGs must use 2D when _useSVGTransformAttr is true)
					if (((((v === 1 || v === 0) && force3D === "auto" && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime)) || !force3D) && !z && !perspective && !rotationY && !rotationX && sz === 1) || (_useSVGTransformAttr && isSVG) || !_supports3D) { //on the final render (which could be 0 for a from tween), if there are no 3D aspects, render in 2D to free up memory and improve performance especially on mobile devices. Check the tween's totalTime/totalDuration too in order to make sure it doesn't happen between repeats if it's a repeating tween.

						//2D
						if (angle || t.skewX || isSVG) {
							angle *= _DEG2RAD;
							skew = t.skewX * _DEG2RAD;
							rnd = 100000;
							a11 = Math.cos(angle) * sx;
							a21 = Math.sin(angle) * sx;
							a12 = Math.sin(angle - skew) * -sy;
							a22 = Math.cos(angle - skew) * sy;
							if (skew && t.skewType === "simple") { //by default, we compensate skewing on the other axis to make it look more natural, but you can set the skewType to "simple" to use the uncompensated skewing that CSS does
								t1 = Math.tan(skew - t.skewY * _DEG2RAD);
								t1 = Math.sqrt(1 + t1 * t1);
								a12 *= t1;
								a22 *= t1;
								if (t.skewY) {
									t1 = Math.tan(t.skewY * _DEG2RAD);
									t1 = Math.sqrt(1 + t1 * t1);
									a11 *= t1;
									a21 *= t1;
								}
							}
							if (isSVG) {
								x += t.xOrigin - (t.xOrigin * a11 + t.yOrigin * a12) + t.xOffset;
								y += t.yOrigin - (t.xOrigin * a21 + t.yOrigin * a22) + t.yOffset;
								if (_useSVGTransformAttr && (t.xPercent || t.yPercent)) { //The SVG spec doesn't support percentage-based translation in the "transform" attribute, so we merge it into the matrix to simulate it.
									min = this.t.getBBox();
									x += t.xPercent * 0.01 * min.width;
									y += t.yPercent * 0.01 * min.height;
								}
								min = 0.000001;
								if (x < min) if (x > -min) {
									x = 0;
								}
								if (y < min) if (y > -min) {
									y = 0;
								}
							}
							transform = (((a11 * rnd) | 0) / rnd) + "," + (((a21 * rnd) | 0) / rnd) + "," + (((a12 * rnd) | 0) / rnd) + "," + (((a22 * rnd) | 0) / rnd) + "," + x + "," + y + ")";
							if (isSVG && _useSVGTransformAttr) {
								this.t.setAttribute("transform", "matrix(" + transform);
							} else {
								//some browsers have a hard time with very small values like 2.4492935982947064e-16 (notice the "e-" towards the end) and would render the object slightly off. So we round to 5 decimal places.
								style[_transformProp] = ((t.xPercent || t.yPercent) ? "translate(" + t.xPercent + "%," + t.yPercent + "%) matrix(" : "matrix(") + transform;
							}
						} else {
							style[_transformProp] = ((t.xPercent || t.yPercent) ? "translate(" + t.xPercent + "%," + t.yPercent + "%) matrix(" : "matrix(") + sx + ",0,0," + sy + "," + x + "," + y + ")";
						}
						return;

					}
					if (_isFirefox) { //Firefox has a bug (at least in v25) that causes it to render the transparent part of 32-bit PNG images as black when displayed inside an iframe and the 3D scale is very small and doesn't change sufficiently enough between renders (like if you use a Power4.easeInOut to scale from 0 to 1 where the beginning values only change a tiny amount to begin the tween before accelerating). In this case, we force the scale to be 0.00002 instead which is visually the same but works around the Firefox issue.
						min = 0.0001;
						if (sx < min && sx > -min) {
							sx = sz = 0.00002;
						}
						if (sy < min && sy > -min) {
							sy = sz = 0.00002;
						}
						if (perspective && !t.z && !t.rotationX && !t.rotationY) { //Firefox has a bug that causes elements to have an odd super-thin, broken/dotted black border on elements that have a perspective set but aren't utilizing 3D space (no rotationX, rotationY, or z).
							perspective = 0;
						}
					}
					if (angle || t.skewX) {
						angle *= _DEG2RAD;
						cos = a11 = Math.cos(angle);
						sin = a21 = Math.sin(angle);
						if (t.skewX) {
							angle -= t.skewX * _DEG2RAD;
							cos = Math.cos(angle);
							sin = Math.sin(angle);
							if (t.skewType === "simple") { //by default, we compensate skewing on the other axis to make it look more natural, but you can set the skewType to "simple" to use the uncompensated skewing that CSS does
								t1 = Math.tan((t.skewX - t.skewY) * _DEG2RAD);
								t1 = Math.sqrt(1 + t1 * t1);
								cos *= t1;
								sin *= t1;
								if (t.skewY) {
									t1 = Math.tan(t.skewY * _DEG2RAD);
									t1 = Math.sqrt(1 + t1 * t1);
									a11 *= t1;
									a21 *= t1;
								}
							}
						}
						a12 = -sin;
						a22 = cos;

					} else if (!rotationY && !rotationX && sz === 1 && !perspective && !isSVG) { //if we're only translating and/or 2D scaling, this is faster...
						style[_transformProp] = ((t.xPercent || t.yPercent) ? "translate(" + t.xPercent + "%," + t.yPercent + "%) translate3d(" : "translate3d(") + x + "px," + y + "px," + z +"px)" + ((sx !== 1 || sy !== 1) ? " scale(" + sx + "," + sy + ")" : "");
						return;
					} else {
						a11 = a22 = 1;
						a12 = a21 = 0;
					}
					// KEY  INDEX   AFFECTS
					// a11  0       rotation, rotationY, scaleX
					// a21  1       rotation, rotationY, scaleX
					// a31  2       rotationY, scaleX
					// a41  3       rotationY, scaleX
					// a12  4       rotation, skewX, rotationX, scaleY
					// a22  5       rotation, skewX, rotationX, scaleY
					// a32  6       rotationX, scaleY
					// a42  7       rotationX, scaleY
					// a13  8       rotationY, rotationX, scaleZ
					// a23  9       rotationY, rotationX, scaleZ
					// a33  10      rotationY, rotationX, scaleZ
					// a43  11      rotationY, rotationX, perspective, scaleZ
					// a14  12      x, zOrigin, svgOrigin
					// a24  13      y, zOrigin, svgOrigin
					// a34  14      z, zOrigin
					// a44  15
					// rotation: Math.atan2(a21, a11)
					// rotationY: Math.atan2(a13, a33) (or Math.atan2(a13, a11))
					// rotationX: Math.atan2(a32, a33)
					a33 = 1;
					a13 = a23 = a31 = a32 = a41 = a42 = 0;
					a43 = (perspective) ? -1 / perspective : 0;
					zOrigin = t.zOrigin;
					min = 0.000001; //threshold below which browsers use scientific notation which won't work.
					comma = ",";
					zero = "0";
					angle = rotationY * _DEG2RAD;
					if (angle) {
						cos = Math.cos(angle);
						sin = Math.sin(angle);
						a31 = -sin;
						a41 = a43*-sin;
						a13 = a11*sin;
						a23 = a21*sin;
						a33 = cos;
						a43 *= cos;
						a11 *= cos;
						a21 *= cos;
					}
					angle = rotationX * _DEG2RAD;
					if (angle) {
						cos = Math.cos(angle);
						sin = Math.sin(angle);
						t1 = a12*cos+a13*sin;
						t2 = a22*cos+a23*sin;
						a32 = a33*sin;
						a42 = a43*sin;
						a13 = a12*-sin+a13*cos;
						a23 = a22*-sin+a23*cos;
						a33 = a33*cos;
						a43 = a43*cos;
						a12 = t1;
						a22 = t2;
					}
					if (sz !== 1) {
						a13*=sz;
						a23*=sz;
						a33*=sz;
						a43*=sz;
					}
					if (sy !== 1) {
						a12*=sy;
						a22*=sy;
						a32*=sy;
						a42*=sy;
					}
					if (sx !== 1) {
						a11*=sx;
						a21*=sx;
						a31*=sx;
						a41*=sx;
					}

					if (zOrigin || isSVG) {
						if (zOrigin) {
							x += a13*-zOrigin;
							y += a23*-zOrigin;
							z += a33*-zOrigin+zOrigin;
						}
						if (isSVG) { //due to bugs in some browsers, we need to manage the transform-origin of SVG manually
							x += t.xOrigin - (t.xOrigin * a11 + t.yOrigin * a12) + t.xOffset;
							y += t.yOrigin - (t.xOrigin * a21 + t.yOrigin * a22) + t.yOffset;
						}
						if (x < min && x > -min) {
							x = zero;
						}
						if (y < min && y > -min) {
							y = zero;
						}
						if (z < min && z > -min) {
							z = 0; //don't use string because we calculate perspective later and need the number.
						}
					}

					//optimized way of concatenating all the values into a string. If we do it all in one shot, it's slower because of the way browsers have to create temp strings and the way it affects memory. If we do it piece-by-piece with +=, it's a bit slower too. We found that doing it in these sized chunks works best overall:
					transform = ((t.xPercent || t.yPercent) ? "translate(" + t.xPercent + "%," + t.yPercent + "%) matrix3d(" : "matrix3d(");
					transform += ((a11 < min && a11 > -min) ? zero : a11) + comma + ((a21 < min && a21 > -min) ? zero : a21) + comma + ((a31 < min && a31 > -min) ? zero : a31);
					transform += comma + ((a41 < min && a41 > -min) ? zero : a41) + comma + ((a12 < min && a12 > -min) ? zero : a12) + comma + ((a22 < min && a22 > -min) ? zero : a22);
					if (rotationX || rotationY || sz !== 1) { //performance optimization (often there's no rotationX or rotationY, so we can skip these calculations)
						transform += comma + ((a32 < min && a32 > -min) ? zero : a32) + comma + ((a42 < min && a42 > -min) ? zero : a42) + comma + ((a13 < min && a13 > -min) ? zero : a13);
						transform += comma + ((a23 < min && a23 > -min) ? zero : a23) + comma + ((a33 < min && a33 > -min) ? zero : a33) + comma + ((a43 < min && a43 > -min) ? zero : a43) + comma;
					} else {
						transform += ",0,0,0,0,1,0,";
					}
					transform += x + comma + y + comma + z + comma + (perspective ? (1 + (-z / perspective)) : 1) + ")";

					style[_transformProp] = transform;
				};

			p = Transform.prototype;
			p.x = p.y = p.z = p.skewX = p.skewY = p.rotation = p.rotationX = p.rotationY = p.zOrigin = p.xPercent = p.yPercent = p.xOffset = p.yOffset = 0;
			p.scaleX = p.scaleY = p.scaleZ = 1;

			_registerComplexSpecialProp("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {parser:function(t, e, parsingProp, cssp, pt, plugin, vars) {
				if (cssp._lastParsedTransform === vars) { return pt; } //only need to parse the transform once, and only if the browser supports it.
				cssp._lastParsedTransform = vars;
				var swapFunc;
				if (typeof(vars[parsingProp]) === "function") { //whatever property triggers the initial parsing might be a function-based value in which case it already got called in parse(), thus we don't want to call it again in here. The most efficient way to avoid this is to temporarily swap the value directly into the vars object, and then after we do all our parsing in this function, we'll swap it back again.
					swapFunc = vars[parsingProp];
					vars[parsingProp] = e;
				}
				var originalGSTransform = t._gsTransform,
					style = t.style,
					min = 0.000001,
					i = _transformProps.length,
					v = vars,
					endRotations = {},
					transformOriginString = "transformOrigin",
					m1 = _getTransform(t, _cs, true, v.parseTransform),
					orig = v.transform && ((typeof(v.transform) === "function") ? v.transform(_index, _target) : v.transform),
					m2, copy, has3D, hasChange, dr, x, y, matrix, p;
				cssp._transform = m1;
				if (orig && typeof(orig) === "string" && _transformProp) { //for values like transform:"rotate(60deg) scale(0.5, 0.8)"
					copy = _tempDiv.style; //don't use the original target because it might be SVG in which case some browsers don't report computed style correctly.
					copy[_transformProp] = orig;
					copy.display = "block"; //if display is "none", the browser often refuses to report the transform properties correctly.
					copy.position = "absolute";
					_doc.body.appendChild(_tempDiv);
					m2 = _getTransform(_tempDiv, null, false);
					if (m1.svg) { //if it's an SVG element, x/y part of the matrix will be affected by whatever we use as the origin and the offsets, so compensate here...
						x = m1.xOrigin;
						y = m1.yOrigin;
						m2.x -= m1.xOffset;
						m2.y -= m1.yOffset;
						if (v.transformOrigin || v.svgOrigin) { //if this tween is altering the origin, we must factor that in here. The actual work of recording the transformOrigin values and setting up the PropTween is done later (still inside this function) so we cannot leave the changes intact here - we only want to update the x/y accordingly.
							orig = {};
							_parseSVGOrigin(t, _parsePosition(v.transformOrigin), orig, v.svgOrigin, v.smoothOrigin, true);
							x = orig.xOrigin;
							y = orig.yOrigin;
							m2.x -= orig.xOffset - m1.xOffset;
							m2.y -= orig.yOffset - m1.yOffset;
						}
						if (x || y) {
							matrix = _getMatrix(_tempDiv, true);
							m2.x -= x - (x * matrix[0] + y * matrix[2]);
							m2.y -= y - (x * matrix[1] + y * matrix[3]);
						}
					}
					_doc.body.removeChild(_tempDiv);
					if (!m2.perspective) {
						m2.perspective = m1.perspective; //tweening to no perspective gives very unintuitive results - just keep the same perspective in that case.
					}
					if (v.xPercent != null) {
						m2.xPercent = _parseVal(v.xPercent, m1.xPercent);
					}
					if (v.yPercent != null) {
						m2.yPercent = _parseVal(v.yPercent, m1.yPercent);
					}
				} else if (typeof(v) === "object") { //for values like scaleX, scaleY, rotation, x, y, skewX, and skewY or transform:{...} (object)
					m2 = {scaleX:_parseVal((v.scaleX != null) ? v.scaleX : v.scale, m1.scaleX),
						scaleY:_parseVal((v.scaleY != null) ? v.scaleY : v.scale, m1.scaleY),
						scaleZ:_parseVal(v.scaleZ, m1.scaleZ),
						x:_parseVal(v.x, m1.x),
						y:_parseVal(v.y, m1.y),
						z:_parseVal(v.z, m1.z),
						xPercent:_parseVal(v.xPercent, m1.xPercent),
						yPercent:_parseVal(v.yPercent, m1.yPercent),
						perspective:_parseVal(v.transformPerspective, m1.perspective)};
					dr = v.directionalRotation;
					if (dr != null) {
						if (typeof(dr) === "object") {
							for (copy in dr) {
								v[copy] = dr[copy];
							}
						} else {
							v.rotation = dr;
						}
					}
					if (typeof(v.x) === "string" && v.x.indexOf("%") !== -1) {
						m2.x = 0;
						m2.xPercent = _parseVal(v.x, m1.xPercent);
					}
					if (typeof(v.y) === "string" && v.y.indexOf("%") !== -1) {
						m2.y = 0;
						m2.yPercent = _parseVal(v.y, m1.yPercent);
					}

					m2.rotation = _parseAngle(("rotation" in v) ? v.rotation : ("shortRotation" in v) ? v.shortRotation + "_short" : ("rotationZ" in v) ? v.rotationZ : m1.rotation - m1.skewY, m1.rotation - m1.skewY, "rotation", endRotations); //see notes below about skewY for why we subtract it from rotation here
					if (_supports3D) {
						m2.rotationX = _parseAngle(("rotationX" in v) ? v.rotationX : ("shortRotationX" in v) ? v.shortRotationX + "_short" : m1.rotationX || 0, m1.rotationX, "rotationX", endRotations);
						m2.rotationY = _parseAngle(("rotationY" in v) ? v.rotationY : ("shortRotationY" in v) ? v.shortRotationY + "_short" : m1.rotationY || 0, m1.rotationY, "rotationY", endRotations);
					}
					m2.skewX = _parseAngle(v.skewX, m1.skewX - m1.skewY); //see notes below about skewY and why we subtract it from skewX here

					//note: for performance reasons, we combine all skewing into the skewX and rotation values, ignoring skewY but we must still record it so that we can discern how much of the overall skew is attributed to skewX vs. skewY. Otherwise, if the skewY would always act relative (tween skewY to 10deg, for example, multiple times and if we always combine things into skewX, we can't remember that skewY was 10 from last time). Remember, a skewY of 10 degrees looks the same as a rotation of 10 degrees plus a skewX of -10 degrees.
					if ((m2.skewY = _parseAngle(v.skewY, m1.skewY))) {
						m2.skewX += m2.skewY;
						m2.rotation += m2.skewY;
					}
				}
				if (_supports3D && v.force3D != null) {
					m1.force3D = v.force3D;
					hasChange = true;
				}

				m1.skewType = v.skewType || m1.skewType || CSSPlugin.defaultSkewType;

				has3D = (m1.force3D || m1.z || m1.rotationX || m1.rotationY || m2.z || m2.rotationX || m2.rotationY || m2.perspective);
				if (!has3D && v.scale != null) {
					m2.scaleZ = 1; //no need to tween scaleZ.
				}

				while (--i > -1) {
					p = _transformProps[i];
					orig = m2[p] - m1[p];
					if (orig > min || orig < -min || v[p] != null || _forcePT[p] != null) {
						hasChange = true;
						pt = new CSSPropTween(m1, p, m1[p], orig, pt);
						if (p in endRotations) {
							pt.e = endRotations[p]; //directional rotations typically have compensated values during the tween, but we need to make sure they end at exactly what the user requested
						}
						pt.xs0 = 0; //ensures the value stays numeric in setRatio()
						pt.plugin = plugin;
						cssp._overwriteProps.push(pt.n);
					}
				}

				orig = v.transformOrigin;
				if (m1.svg && (orig || v.svgOrigin)) {
					x = m1.xOffset; //when we change the origin, in order to prevent things from jumping we adjust the x/y so we must record those here so that we can create PropTweens for them and flip them at the same time as the origin
					y = m1.yOffset;
					_parseSVGOrigin(t, _parsePosition(orig), m2, v.svgOrigin, v.smoothOrigin);
					pt = _addNonTweeningNumericPT(m1, "xOrigin", (originalGSTransform ? m1 : m2).xOrigin, m2.xOrigin, pt, transformOriginString); //note: if there wasn't a transformOrigin defined yet, just start with the destination one; it's wasteful otherwise, and it causes problems with fromTo() tweens. For example, TweenLite.to("#wheel", 3, {rotation:180, transformOrigin:"50% 50%", delay:1}); TweenLite.fromTo("#wheel", 3, {scale:0.5, transformOrigin:"50% 50%"}, {scale:1, delay:2}); would cause a jump when the from values revert at the beginning of the 2nd tween.
					pt = _addNonTweeningNumericPT(m1, "yOrigin", (originalGSTransform ? m1 : m2).yOrigin, m2.yOrigin, pt, transformOriginString);
					if (x !== m1.xOffset || y !== m1.yOffset) {
						pt = _addNonTweeningNumericPT(m1, "xOffset", (originalGSTransform ? x : m1.xOffset), m1.xOffset, pt, transformOriginString);
						pt = _addNonTweeningNumericPT(m1, "yOffset", (originalGSTransform ? y : m1.yOffset), m1.yOffset, pt, transformOriginString);
					}
					orig = _useSVGTransformAttr ? null : "0px 0px"; //certain browsers (like firefox) completely botch transform-origin, so we must remove it to prevent it from contaminating transforms. We manage it ourselves with xOrigin and yOrigin
				}
				if (orig || (_supports3D && has3D && m1.zOrigin)) { //if anything 3D is happening and there's a transformOrigin with a z component that's non-zero, we must ensure that the transformOrigin's z-component is set to 0 so that we can manually do those calculations to get around Safari bugs. Even if the user didn't specifically define a "transformOrigin" in this particular tween (maybe they did it via css directly).
					if (_transformProp) {
						hasChange = true;
						p = _transformOriginProp;
						orig = (orig || _getStyle(t, p, _cs, false, "50% 50%")) + ""; //cast as string to avoid errors
						pt = new CSSPropTween(style, p, 0, 0, pt, -1, transformOriginString);
						pt.b = style[p];
						pt.plugin = plugin;
						if (_supports3D) {
							copy = m1.zOrigin;
							orig = orig.split(" ");
							m1.zOrigin = ((orig.length > 2 && !(copy !== 0 && orig[2] === "0px")) ? parseFloat(orig[2]) : copy) || 0; //Safari doesn't handle the z part of transformOrigin correctly, so we'll manually handle it in the _set3DTransformRatio() method.
							pt.xs0 = pt.e = orig[0] + " " + (orig[1] || "50%") + " 0px"; //we must define a z value of 0px specifically otherwise iOS 5 Safari will stick with the old one (if one was defined)!
							pt = new CSSPropTween(m1, "zOrigin", 0, 0, pt, -1, pt.n); //we must create a CSSPropTween for the _gsTransform.zOrigin so that it gets reset properly at the beginning if the tween runs backward (as opposed to just setting m1.zOrigin here)
							pt.b = copy;
							pt.xs0 = pt.e = m1.zOrigin;
						} else {
							pt.xs0 = pt.e = orig;
						}

						//for older versions of IE (6-8), we need to manually calculate things inside the setRatio() function. We record origin x and y (ox and oy) and whether or not the values are percentages (oxp and oyp).
					} else {
						_parsePosition(orig + "", m1);
					}
				}
				if (hasChange) {
					cssp._transformType = (!(m1.svg && _useSVGTransformAttr) && (has3D || this._transformType === 3)) ? 3 : 2; //quicker than calling cssp._enableTransforms();
				}
				if (swapFunc) {
					vars[parsingProp] = swapFunc;
				}
				return pt;
			}, prefix:true});

			_registerComplexSpecialProp("boxShadow", {defaultValue:"0px 0px 0px 0px #999", prefix:true, color:true, multi:true, keyword:"inset"});

			_registerComplexSpecialProp("borderRadius", {defaultValue:"0px", parser:function(t, e, p, cssp, pt, plugin) {
				e = this.format(e);
				var props = ["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],
					style = t.style,
					ea1, i, es2, bs2, bs, es, bn, en, w, h, esfx, bsfx, rel, hn, vn, em;
				w = parseFloat(t.offsetWidth);
				h = parseFloat(t.offsetHeight);
				ea1 = e.split(" ");
				for (i = 0; i < props.length; i++) { //if we're dealing with percentages, we must convert things separately for the horizontal and vertical axis!
					if (this.p.indexOf("border")) { //older browsers used a prefix
						props[i] = _checkPropPrefix(props[i]);
					}
					bs = bs2 = _getStyle(t, props[i], _cs, false, "0px");
					if (bs.indexOf(" ") !== -1) {
						bs2 = bs.split(" ");
						bs = bs2[0];
						bs2 = bs2[1];
					}
					es = es2 = ea1[i];
					bn = parseFloat(bs);
					bsfx = bs.substr((bn + "").length);
					rel = (es.charAt(1) === "=");
					if (rel) {
						en = parseInt(es.charAt(0)+"1", 10);
						es = es.substr(2);
						en *= parseFloat(es);
						esfx = es.substr((en + "").length - (en < 0 ? 1 : 0)) || "";
					} else {
						en = parseFloat(es);
						esfx = es.substr((en + "").length);
					}
					if (esfx === "") {
						esfx = _suffixMap[p] || bsfx;
					}
					if (esfx !== bsfx) {
						hn = _convertToPixels(t, "borderLeft", bn, bsfx); //horizontal number (we use a bogus "borderLeft" property just because the _convertToPixels() method searches for the keywords "Left", "Right", "Top", and "Bottom" to determine of it's a horizontal or vertical property, and we need "border" in the name so that it knows it should measure relative to the element itself, not its parent.
						vn = _convertToPixels(t, "borderTop", bn, bsfx); //vertical number
						if (esfx === "%") {
							bs = (hn / w * 100) + "%";
							bs2 = (vn / h * 100) + "%";
						} else if (esfx === "em") {
							em = _convertToPixels(t, "borderLeft", 1, "em");
							bs = (hn / em) + "em";
							bs2 = (vn / em) + "em";
						} else {
							bs = hn + "px";
							bs2 = vn + "px";
						}
						if (rel) {
							es = (parseFloat(bs) + en) + esfx;
							es2 = (parseFloat(bs2) + en) + esfx;
						}
					}
					pt = _parseComplex(style, props[i], bs + " " + bs2, es + " " + es2, false, "0px", pt);
				}
				return pt;
			}, prefix:true, formatter:_getFormatter("0px 0px 0px 0px", false, true)});
			_registerComplexSpecialProp("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {defaultValue:"0px", parser:function(t, e, p, cssp, pt, plugin) {
				return _parseComplex(t.style, p, this.format(_getStyle(t, p, _cs, false, "0px 0px")), this.format(e), false, "0px", pt);
			}, prefix:true, formatter:_getFormatter("0px 0px", false, true)});
			_registerComplexSpecialProp("backgroundPosition", {defaultValue:"0 0", parser:function(t, e, p, cssp, pt, plugin) {
				var bp = "background-position",
					cs = (_cs || _getComputedStyle(t, null)),
					bs = this.format( ((cs) ? _ieVers ? cs.getPropertyValue(bp + "-x") + " " + cs.getPropertyValue(bp + "-y") : cs.getPropertyValue(bp) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"), //Internet Explorer doesn't report background-position correctly - we must query background-position-x and background-position-y and combine them (even in IE10). Before IE9, we must do the same with the currentStyle object and use camelCase
					es = this.format(e),
					ba, ea, i, pct, overlap, src;
				if ((bs.indexOf("%") !== -1) !== (es.indexOf("%") !== -1) && es.split(",").length < 2) {
					src = _getStyle(t, "backgroundImage").replace(_urlExp, "");
					if (src && src !== "none") {
						ba = bs.split(" ");
						ea = es.split(" ");
						_tempImg.setAttribute("src", src); //set the temp IMG's src to the background-image so that we can measure its width/height
						i = 2;
						while (--i > -1) {
							bs = ba[i];
							pct = (bs.indexOf("%") !== -1);
							if (pct !== (ea[i].indexOf("%") !== -1)) {
								overlap = (i === 0) ? t.offsetWidth - _tempImg.width : t.offsetHeight - _tempImg.height;
								ba[i] = pct ? (parseFloat(bs) / 100 * overlap) + "px" : (parseFloat(bs) / overlap * 100) + "%";
							}
						}
						bs = ba.join(" ");
					}
				}
				return this.parseComplex(t.style, bs, es, pt, plugin);
			}, formatter:_parsePosition});
			_registerComplexSpecialProp("backgroundSize", {defaultValue:"0 0", formatter:function(v) {
				v += ""; //ensure it's a string
				return _parsePosition(v.indexOf(" ") === -1 ? v + " " + v : v); //if set to something like "100% 100%", Safari typically reports the computed style as just "100%" (no 2nd value), but we should ensure that there are two values, so copy the first one. Otherwise, it'd be interpreted as "100% 0" (wrong).
			}});
			_registerComplexSpecialProp("perspective", {defaultValue:"0px", prefix:true});
			_registerComplexSpecialProp("perspectiveOrigin", {defaultValue:"50% 50%", prefix:true});
			_registerComplexSpecialProp("transformStyle", {prefix:true});
			_registerComplexSpecialProp("backfaceVisibility", {prefix:true});
			_registerComplexSpecialProp("userSelect", {prefix:true});
			_registerComplexSpecialProp("margin", {parser:_getEdgeParser("marginTop,marginRight,marginBottom,marginLeft")});
			_registerComplexSpecialProp("padding", {parser:_getEdgeParser("paddingTop,paddingRight,paddingBottom,paddingLeft")});
			_registerComplexSpecialProp("clip", {defaultValue:"rect(0px,0px,0px,0px)", parser:function(t, e, p, cssp, pt, plugin){
				var b, cs, delim;
				if (_ieVers < 9) { //IE8 and earlier don't report a "clip" value in the currentStyle - instead, the values are split apart into clipTop, clipRight, clipBottom, and clipLeft. Also, in IE7 and earlier, the values inside rect() are space-delimited, not comma-delimited.
					cs = t.currentStyle;
					delim = _ieVers < 8 ? " " : ",";
					b = "rect(" + cs.clipTop + delim + cs.clipRight + delim + cs.clipBottom + delim + cs.clipLeft + ")";
					e = this.format(e).split(",").join(delim);
				} else {
					b = this.format(_getStyle(t, this.p, _cs, false, this.dflt));
					e = this.format(e);
				}
				return this.parseComplex(t.style, b, e, pt, plugin);
			}});
			_registerComplexSpecialProp("textShadow", {defaultValue:"0px 0px 0px #999", color:true, multi:true});
			_registerComplexSpecialProp("autoRound,strictUnits", {parser:function(t, e, p, cssp, pt) {return pt;}}); //just so that we can ignore these properties (not tween them)
			_registerComplexSpecialProp("border", {defaultValue:"0px solid #000", parser:function(t, e, p, cssp, pt, plugin) {
				var bw = _getStyle(t, "borderTopWidth", _cs, false, "0px"),
					end = this.format(e).split(" "),
					esfx = end[0].replace(_suffixExp, "");
				if (esfx !== "px") { //if we're animating to a non-px value, we need to convert the beginning width to that unit.
					bw = (parseFloat(bw) / _convertToPixels(t, "borderTopWidth", 1, esfx)) + esfx;
				}
				return this.parseComplex(t.style, this.format(bw + " " + _getStyle(t, "borderTopStyle", _cs, false, "solid") + " " + _getStyle(t, "borderTopColor", _cs, false, "#000")), end.join(" "), pt, plugin);
				}, color:true, formatter:function(v) {
					var a = v.split(" ");
					return a[0] + " " + (a[1] || "solid") + " " + (v.match(_colorExp) || ["#000"])[0];
				}});
			_registerComplexSpecialProp("borderWidth", {parser:_getEdgeParser("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}); //Firefox doesn't pick up on borderWidth set in style sheets (only inline).
			_registerComplexSpecialProp("float,cssFloat,styleFloat", {parser:function(t, e, p, cssp, pt, plugin) {
				var s = t.style,
					prop = ("cssFloat" in s) ? "cssFloat" : "styleFloat";
				return new CSSPropTween(s, prop, 0, 0, pt, -1, p, false, 0, s[prop], e);
			}});

			//opacity-related
			var _setIEOpacityRatio = function(v) {
					var t = this.t, //refers to the element's style property
						filters = t.filter || _getStyle(this.data, "filter") || "",
						val = (this.s + this.c * v) | 0,
						skip;
					if (val === 100) { //for older versions of IE that need to use a filter to apply opacity, we should remove the filter if opacity hits 1 in order to improve performance, but make sure there isn't a transform (matrix) or gradient in the filters.
						if (filters.indexOf("atrix(") === -1 && filters.indexOf("radient(") === -1 && filters.indexOf("oader(") === -1) {
							t.removeAttribute("filter");
							skip = (!_getStyle(this.data, "filter")); //if a class is applied that has an alpha filter, it will take effect (we don't want that), so re-apply our alpha filter in that case. We must first remove it and then check.
						} else {
							t.filter = filters.replace(_alphaFilterExp, "");
							skip = true;
						}
					}
					if (!skip) {
						if (this.xn1) {
							t.filter = filters = filters || ("alpha(opacity=" + val + ")"); //works around bug in IE7/8 that prevents changes to "visibility" from being applied properly if the filter is changed to a different alpha on the same frame.
						}
						if (filters.indexOf("pacity") === -1) { //only used if browser doesn't support the standard opacity style property (IE 7 and 8). We omit the "O" to avoid case-sensitivity issues
							if (val !== 0 || !this.xn1) { //bugs in IE7/8 won't render the filter properly if opacity is ADDED on the same frame/render as "visibility" changes (this.xn1 is 1 if this tween is an "autoAlpha" tween)
								t.filter = filters + " alpha(opacity=" + val + ")"; //we round the value because otherwise, bugs in IE7/8 can prevent "visibility" changes from being applied properly.
							}
						} else {
							t.filter = filters.replace(_opacityExp, "opacity=" + val);
						}
					}
				};
			_registerComplexSpecialProp("opacity,alpha,autoAlpha", {defaultValue:"1", parser:function(t, e, p, cssp, pt, plugin) {
				var b = parseFloat(_getStyle(t, "opacity", _cs, false, "1")),
					style = t.style,
					isAutoAlpha = (p === "autoAlpha");
				if (typeof(e) === "string" && e.charAt(1) === "=") {
					e = ((e.charAt(0) === "-") ? -1 : 1) * parseFloat(e.substr(2)) + b;
				}
				if (isAutoAlpha && b === 1 && _getStyle(t, "visibility", _cs) === "hidden" && e !== 0) { //if visibility is initially set to "hidden", we should interpret that as intent to make opacity 0 (a convenience)
					b = 0;
				}
				if (_supportsOpacity) {
					pt = new CSSPropTween(style, "opacity", b, e - b, pt);
				} else {
					pt = new CSSPropTween(style, "opacity", b * 100, (e - b) * 100, pt);
					pt.xn1 = isAutoAlpha ? 1 : 0; //we need to record whether or not this is an autoAlpha so that in the setRatio(), we know to duplicate the setting of the alpha in order to work around a bug in IE7 and IE8 that prevents changes to "visibility" from taking effect if the filter is changed to a different alpha(opacity) at the same time. Setting it to the SAME value first, then the new value works around the IE7/8 bug.
					style.zoom = 1; //helps correct an IE issue.
					pt.type = 2;
					pt.b = "alpha(opacity=" + pt.s + ")";
					pt.e = "alpha(opacity=" + (pt.s + pt.c) + ")";
					pt.data = t;
					pt.plugin = plugin;
					pt.setRatio = _setIEOpacityRatio;
				}
				if (isAutoAlpha) { //we have to create the "visibility" PropTween after the opacity one in the linked list so that they run in the order that works properly in IE8 and earlier
					pt = new CSSPropTween(style, "visibility", 0, 0, pt, -1, null, false, 0, ((b !== 0) ? "inherit" : "hidden"), ((e === 0) ? "hidden" : "inherit"));
					pt.xs0 = "inherit";
					cssp._overwriteProps.push(pt.n);
					cssp._overwriteProps.push(p);
				}
				return pt;
			}});


			var _removeProp = function(s, p) {
					if (p) {
						if (s.removeProperty) {
							if (p.substr(0,2) === "ms" || p.substr(0,6) === "webkit") { //Microsoft and some Webkit browsers don't conform to the standard of capitalizing the first prefix character, so we adjust so that when we prefix the caps with a dash, it's correct (otherwise it'd be "ms-transform" instead of "-ms-transform" for IE9, for example)
								p = "-" + p;
							}
							s.removeProperty(p.replace(_capsExp, "-$1").toLowerCase());
						} else { //note: old versions of IE use "removeAttribute()" instead of "removeProperty()"
							s.removeAttribute(p);
						}
					}
				},
				_setClassNameRatio = function(v) {
					this.t._gsClassPT = this;
					if (v === 1 || v === 0) {
						this.t.setAttribute("class", (v === 0) ? this.b : this.e);
						var mpt = this.data, //first MiniPropTween
							s = this.t.style;
						while (mpt) {
							if (!mpt.v) {
								_removeProp(s, mpt.p);
							} else {
								s[mpt.p] = mpt.v;
							}
							mpt = mpt._next;
						}
						if (v === 1 && this.t._gsClassPT === this) {
							this.t._gsClassPT = null;
						}
					} else if (this.t.getAttribute("class") !== this.e) {
						this.t.setAttribute("class", this.e);
					}
				};
			_registerComplexSpecialProp("className", {parser:function(t, e, p, cssp, pt, plugin, vars) {
				var b = t.getAttribute("class") || "", //don't use t.className because it doesn't work consistently on SVG elements; getAttribute("class") and setAttribute("class", value") is more reliable.
					cssText = t.style.cssText,
					difData, bs, cnpt, cnptLookup, mpt;
				pt = cssp._classNamePT = new CSSPropTween(t, p, 0, 0, pt, 2);
				pt.setRatio = _setClassNameRatio;
				pt.pr = -11;
				_hasPriority = true;
				pt.b = b;
				bs = _getAllStyles(t, _cs);
				//if there's a className tween already operating on the target, force it to its end so that the necessary inline styles are removed and the class name is applied before we determine the end state (we don't want inline styles interfering that were there just for class-specific values)
				cnpt = t._gsClassPT;
				if (cnpt) {
					cnptLookup = {};
					mpt = cnpt.data; //first MiniPropTween which stores the inline styles - we need to force these so that the inline styles don't contaminate things. Otherwise, there's a small chance that a tween could start and the inline values match the destination values and they never get cleaned.
					while (mpt) {
						cnptLookup[mpt.p] = 1;
						mpt = mpt._next;
					}
					cnpt.setRatio(1);
				}
				t._gsClassPT = pt;
				pt.e = (e.charAt(1) !== "=") ? e : b.replace(new RegExp("(?:\\s|^)" + e.substr(2) + "(?![\\w-])"), "") + ((e.charAt(0) === "+") ? " " + e.substr(2) : "");
				t.setAttribute("class", pt.e);
				difData = _cssDif(t, bs, _getAllStyles(t), vars, cnptLookup);
				t.setAttribute("class", b);
				pt.data = difData.firstMPT;
				t.style.cssText = cssText; //we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).
				pt = pt.xfirst = cssp.parse(t, difData.difs, pt, plugin); //we record the CSSPropTween as the xfirst so that we can handle overwriting propertly (if "className" gets overwritten, we must kill all the properties associated with the className part of the tween, so we can loop through from xfirst to the pt itself)
				return pt;
			}});


			var _setClearPropsRatio = function(v) {
				if (v === 1 || v === 0) if (this.data._totalTime === this.data._totalDuration && this.data.data !== "isFromStart") { //this.data refers to the tween. Only clear at the END of the tween (remember, from() tweens make the ratio go from 1 to 0, so we can't just check that and if the tween is the zero-duration one that's created internally to render the starting values in a from() tween, ignore that because otherwise, for example, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in).
					var s = this.t.style,
						transformParse = _specialProps.transform.parse,
						a, p, i, clearTransform, transform;
					if (this.e === "all") {
						s.cssText = "";
						clearTransform = true;
					} else {
						a = this.e.split(" ").join("").split(",");
						i = a.length;
						while (--i > -1) {
							p = a[i];
							if (_specialProps[p]) {
								if (_specialProps[p].parse === transformParse) {
									clearTransform = true;
								} else {
									p = (p === "transformOrigin") ? _transformOriginProp : _specialProps[p].p; //ensures that special properties use the proper browser-specific property name, like "scaleX" might be "-webkit-transform" or "boxShadow" might be "-moz-box-shadow"
								}
							}
							_removeProp(s, p);
						}
					}
					if (clearTransform) {
						_removeProp(s, _transformProp);
						transform = this.t._gsTransform;
						if (transform) {
							if (transform.svg) {
								this.t.removeAttribute("data-svg-origin");
								this.t.removeAttribute("transform");
							}
							delete this.t._gsTransform;
						}
					}

				}
			};
			_registerComplexSpecialProp("clearProps", {parser:function(t, e, p, cssp, pt) {
				pt = new CSSPropTween(t, p, 0, 0, pt, 2);
				pt.setRatio = _setClearPropsRatio;
				pt.e = e;
				pt.pr = -10;
				pt.data = cssp._tween;
				_hasPriority = true;
				return pt;
			}});

			p = "bezier,throwProps,physicsProps,physics2D".split(",");
			i = p.length;
			while (i--) {
				_registerPluginProp(p[i]);
			}








			p = CSSPlugin.prototype;
			p._firstPT = p._lastParsedTransform = p._transform = null;

			//gets called when the tween renders for the first time. This kicks everything off, recording start/end values, etc.
			p._onInitTween = function(target, vars, tween, index) {
				if (!target.nodeType) { //css is only for dom elements
					return false;
				}
				this._target = _target = target;
				this._tween = tween;
				this._vars = vars;
				_index = index;
				_autoRound = vars.autoRound;
				_hasPriority = false;
				_suffixMap = vars.suffixMap || CSSPlugin.suffixMap;
				_cs = _getComputedStyle(target, "");
				_overwriteProps = this._overwriteProps;
				var style = target.style,
					v, pt, pt2, first, last, next, zIndex, tpt, threeD;
				if (_reqSafariFix) if (style.zIndex === "") {
					v = _getStyle(target, "zIndex", _cs);
					if (v === "auto" || v === "") {
						//corrects a bug in [non-Android] Safari that prevents it from repainting elements in their new positions if they don't have a zIndex set. We also can't just apply this inside _parseTransform() because anything that's moved in any way (like using "left" or "top" instead of transforms like "x" and "y") can be affected, so it is best to ensure that anything that's tweening has a z-index. Setting "WebkitPerspective" to a non-zero value worked too except that on iOS Safari things would flicker randomly. Plus zIndex is less memory-intensive.
						this._addLazySet(style, "zIndex", 0);
					}
				}

				if (typeof(vars) === "string") {
					first = style.cssText;
					v = _getAllStyles(target, _cs);
					style.cssText = first + ";" + vars;
					v = _cssDif(target, v, _getAllStyles(target)).difs;
					if (!_supportsOpacity && _opacityValExp.test(vars)) {
						v.opacity = parseFloat( RegExp.$1 );
					}
					vars = v;
					style.cssText = first;
				}

				if (vars.className) { //className tweens will combine any differences they find in the css with the vars that are passed in, so {className:"myClass", scale:0.5, left:20} would work.
					this._firstPT = pt = _specialProps.className.parse(target, vars.className, "className", this, null, null, vars);
				} else {
					this._firstPT = pt = this.parse(target, vars, null);
				}

				if (this._transformType) {
					threeD = (this._transformType === 3);
					if (!_transformProp) {
						style.zoom = 1; //helps correct an IE issue.
					} else if (_isSafari) {
						_reqSafariFix = true;
						//if zIndex isn't set, iOS Safari doesn't repaint things correctly sometimes (seemingly at random).
						if (style.zIndex === "") {
							zIndex = _getStyle(target, "zIndex", _cs);
							if (zIndex === "auto" || zIndex === "") {
								this._addLazySet(style, "zIndex", 0);
							}
						}
						//Setting WebkitBackfaceVisibility corrects 3 bugs:
						// 1) [non-Android] Safari skips rendering changes to "top" and "left" that are made on the same frame/render as a transform update.
						// 2) iOS Safari sometimes neglects to repaint elements in their new positions. Setting "WebkitPerspective" to a non-zero value worked too except that on iOS Safari things would flicker randomly.
						// 3) Safari sometimes displayed odd artifacts when tweening the transform (or WebkitTransform) property, like ghosts of the edges of the element remained. Definitely a browser bug.
						//Note: we allow the user to override the auto-setting by defining WebkitBackfaceVisibility in the vars of the tween.
						if (_isSafariLT6) {
							this._addLazySet(style, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (threeD ? "visible" : "hidden"));
						}
					}
					pt2 = pt;
					while (pt2 && pt2._next) {
						pt2 = pt2._next;
					}
					tpt = new CSSPropTween(target, "transform", 0, 0, null, 2);
					this._linkCSSP(tpt, null, pt2);
					tpt.setRatio = _transformProp ? _setTransformRatio : _setIETransformRatio;
					tpt.data = this._transform || _getTransform(target, _cs, true);
					tpt.tween = tween;
					tpt.pr = -1; //ensures that the transforms get applied after the components are updated.
					_overwriteProps.pop(); //we don't want to force the overwrite of all "transform" tweens of the target - we only care about individual transform properties like scaleX, rotation, etc. The CSSPropTween constructor automatically adds the property to _overwriteProps which is why we need to pop() here.
				}

				if (_hasPriority) {
					//reorders the linked list in order of pr (priority)
					while (pt) {
						next = pt._next;
						pt2 = first;
						while (pt2 && pt2.pr > pt.pr) {
							pt2 = pt2._next;
						}
						if ((pt._prev = pt2 ? pt2._prev : last)) {
							pt._prev._next = pt;
						} else {
							first = pt;
						}
						if ((pt._next = pt2)) {
							pt2._prev = pt;
						} else {
							last = pt;
						}
						pt = next;
					}
					this._firstPT = first;
				}
				return true;
			};


			p.parse = function(target, vars, pt, plugin) {
				var style = target.style,
					p, sp, bn, en, bs, es, bsfx, esfx, isStr, rel;
				for (p in vars) {
					es = vars[p]; //ending value string
					if (typeof(es) === "function") {
						es = es(_index, _target);
					}
					sp = _specialProps[p]; //SpecialProp lookup.
					if (sp) {
						pt = sp.parse(target, es, p, this, pt, plugin, vars);

					} else {
						bs = _getStyle(target, p, _cs) + "";
						isStr = (typeof(es) === "string");
						if (p === "color" || p === "fill" || p === "stroke" || p.indexOf("Color") !== -1 || (isStr && _rgbhslExp.test(es))) { //Opera uses background: to define color sometimes in addition to backgroundColor:
							if (!isStr) {
								es = _parseColor(es);
								es = ((es.length > 3) ? "rgba(" : "rgb(") + es.join(",") + ")";
							}
							pt = _parseComplex(style, p, bs, es, true, "transparent", pt, 0, plugin);

						} else if (isStr && _complexExp.test(es)) {
							pt = _parseComplex(style, p, bs, es, true, null, pt, 0, plugin);

						} else {
							bn = parseFloat(bs);
							bsfx = (bn || bn === 0) ? bs.substr((bn + "").length) : ""; //remember, bs could be non-numeric like "normal" for fontWeight, so we should default to a blank suffix in that case.

							if (bs === "" || bs === "auto") {
								if (p === "width" || p === "height") {
									bn = _getDimension(target, p, _cs);
									bsfx = "px";
								} else if (p === "left" || p === "top") {
									bn = _calculateOffset(target, p, _cs);
									bsfx = "px";
								} else {
									bn = (p !== "opacity") ? 0 : 1;
									bsfx = "";
								}
							}

							rel = (isStr && es.charAt(1) === "=");
							if (rel) {
								en = parseInt(es.charAt(0) + "1", 10);
								es = es.substr(2);
								en *= parseFloat(es);
								esfx = es.replace(_suffixExp, "");
							} else {
								en = parseFloat(es);
								esfx = isStr ? es.replace(_suffixExp, "") : "";
							}

							if (esfx === "") {
								esfx = (p in _suffixMap) ? _suffixMap[p] : bsfx; //populate the end suffix, prioritizing the map, then if none is found, use the beginning suffix.
							}

							es = (en || en === 0) ? (rel ? en + bn : en) + esfx : vars[p]; //ensures that any += or -= prefixes are taken care of. Record the end value before normalizing the suffix because we always want to end the tween on exactly what they intended even if it doesn't match the beginning value's suffix.

							//if the beginning/ending suffixes don't match, normalize them...
							if (bsfx !== esfx) if (esfx !== "") if (en || en === 0) if (bn) { //note: if the beginning value (bn) is 0, we don't need to convert units!
								bn = _convertToPixels(target, p, bn, bsfx);
								if (esfx === "%") {
									bn /= _convertToPixels(target, p, 100, "%") / 100;
									if (vars.strictUnits !== true) { //some browsers report only "px" values instead of allowing "%" with getComputedStyle(), so we assume that if we're tweening to a %, we should start there too unless strictUnits:true is defined. This approach is particularly useful for responsive designs that use from() tweens.
										bs = bn + "%";
									}

								} else if (esfx === "em" || esfx === "rem" || esfx === "vw" || esfx === "vh") {
									bn /= _convertToPixels(target, p, 1, esfx);

								//otherwise convert to pixels.
								} else if (esfx !== "px") {
									en = _convertToPixels(target, p, en, esfx);
									esfx = "px"; //we don't use bsfx after this, so we don't need to set it to px too.
								}
								if (rel) if (en || en === 0) {
									es = (en + bn) + esfx; //the changes we made affect relative calculations, so adjust the end value here.
								}
							}

							if (rel) {
								en += bn;
							}

							if ((bn || bn === 0) && (en || en === 0)) { //faster than isNaN(). Also, previously we required en !== bn but that doesn't really gain much performance and it prevents _parseToProxy() from working properly if beginning and ending values match but need to get tweened by an external plugin anyway. For example, a bezier tween where the target starts at left:0 and has these points: [{left:50},{left:0}] wouldn't work properly because when parsing the last point, it'd match the first (current) one and a non-tweening CSSPropTween would be recorded when we actually need a normal tween (type:0) so that things get updated during the tween properly.
								pt = new CSSPropTween(style, p, bn, en - bn, pt, 0, p, (_autoRound !== false && (esfx === "px" || p === "zIndex")), 0, bs, es);
								pt.xs0 = esfx;
								//DEBUG: _log("tween "+p+" from "+pt.b+" ("+bn+esfx+") to "+pt.e+" with suffix: "+pt.xs0);
							} else if (style[p] === undefined || !es && (es + "" === "NaN" || es == null)) {
								_log("invalid " + p + " tween value: " + vars[p]);
							} else {
								pt = new CSSPropTween(style, p, en || bn || 0, 0, pt, -1, p, false, 0, bs, es);
								pt.xs0 = (es === "none" && (p === "display" || p.indexOf("Style") !== -1)) ? bs : es; //intermediate value should typically be set immediately (end value) except for "display" or things like borderTopStyle, borderBottomStyle, etc. which should use the beginning value during the tween.
								//DEBUG: _log("non-tweening value "+p+": "+pt.xs0);
							}
						}
					}
					if (plugin) if (pt && !pt.plugin) {
						pt.plugin = plugin;
					}
				}
				return pt;
			};


			//gets called every time the tween updates, passing the new ratio (typically a value between 0 and 1, but not always (for example, if an Elastic.easeOut is used, the value can jump above 1 mid-tween). It will always start and 0 and end at 1.
			p.setRatio = function(v) {
				var pt = this._firstPT,
					min = 0.000001,
					val, str, i;
				//at the end of the tween, we set the values to exactly what we received in order to make sure non-tweening values (like "position" or "float" or whatever) are set and so that if the beginning/ending suffixes (units) didn't match and we normalized to px, the value that the user passed in is used here. We check to see if the tween is at its beginning in case it's a from() tween in which case the ratio will actually go from 1 to 0 over the course of the tween (backwards).
				if (v === 1 && (this._tween._time === this._tween._duration || this._tween._time === 0)) {
					while (pt) {
						if (pt.type !== 2) {
							if (pt.r && pt.type !== -1) {
								val = Math.round(pt.s + pt.c);
								if (!pt.type) {
									pt.t[pt.p] = val + pt.xs0;
								} else if (pt.type === 1) { //complex value (one that typically has multiple numbers inside a string, like "rect(5px,10px,20px,25px)"
									i = pt.l;
									str = pt.xs0 + val + pt.xs1;
									for (i = 1; i < pt.l; i++) {
										str += pt["xn"+i] + pt["xs"+(i+1)];
									}
									pt.t[pt.p] = str;
								}
							} else {
								pt.t[pt.p] = pt.e;
							}
						} else {
							pt.setRatio(v);
						}
						pt = pt._next;
					}

				} else if (v || !(this._tween._time === this._tween._duration || this._tween._time === 0) || this._tween._rawPrevTime === -0.000001) {
					while (pt) {
						val = pt.c * v + pt.s;
						if (pt.r) {
							val = Math.round(val);
						} else if (val < min) if (val > -min) {
							val = 0;
						}
						if (!pt.type) {
							pt.t[pt.p] = val + pt.xs0;
						} else if (pt.type === 1) { //complex value (one that typically has multiple numbers inside a string, like "rect(5px,10px,20px,25px)"
							i = pt.l;
							if (i === 2) {
								pt.t[pt.p] = pt.xs0 + val + pt.xs1 + pt.xn1 + pt.xs2;
							} else if (i === 3) {
								pt.t[pt.p] = pt.xs0 + val + pt.xs1 + pt.xn1 + pt.xs2 + pt.xn2 + pt.xs3;
							} else if (i === 4) {
								pt.t[pt.p] = pt.xs0 + val + pt.xs1 + pt.xn1 + pt.xs2 + pt.xn2 + pt.xs3 + pt.xn3 + pt.xs4;
							} else if (i === 5) {
								pt.t[pt.p] = pt.xs0 + val + pt.xs1 + pt.xn1 + pt.xs2 + pt.xn2 + pt.xs3 + pt.xn3 + pt.xs4 + pt.xn4 + pt.xs5;
							} else {
								str = pt.xs0 + val + pt.xs1;
								for (i = 1; i < pt.l; i++) {
									str += pt["xn"+i] + pt["xs"+(i+1)];
								}
								pt.t[pt.p] = str;
							}

						} else if (pt.type === -1) { //non-tweening value
							pt.t[pt.p] = pt.xs0;

						} else if (pt.setRatio) { //custom setRatio() for things like SpecialProps, external plugins, etc.
							pt.setRatio(v);
						}
						pt = pt._next;
					}

				//if the tween is reversed all the way back to the beginning, we need to restore the original values which may have different units (like % instead of px or em or whatever).
				} else {
					while (pt) {
						if (pt.type !== 2) {
							pt.t[pt.p] = pt.b;
						} else {
							pt.setRatio(v);
						}
						pt = pt._next;
					}
				}
			};

			/**
			 * @private
			 * Forces rendering of the target's transforms (rotation, scale, etc.) whenever the CSSPlugin's setRatio() is called.
			 * Basically, this tells the CSSPlugin to create a CSSPropTween (type 2) after instantiation that runs last in the linked
			 * list and calls the appropriate (3D or 2D) rendering function. We separate this into its own method so that we can call
			 * it from other plugins like BezierPlugin if, for example, it needs to apply an autoRotation and this CSSPlugin
			 * doesn't have any transform-related properties of its own. You can call this method as many times as you
			 * want and it won't create duplicate CSSPropTweens.
			 *
			 * @param {boolean} threeD if true, it should apply 3D tweens (otherwise, just 2D ones are fine and typically faster)
			 */
			p._enableTransforms = function(threeD) {
				this._transform = this._transform || _getTransform(this._target, _cs, true); //ensures that the element has a _gsTransform property with the appropriate values.
				this._transformType = (!(this._transform.svg && _useSVGTransformAttr) && (threeD || this._transformType === 3)) ? 3 : 2;
			};

			var lazySet = function(v) {
				this.t[this.p] = this.e;
				this.data._linkCSSP(this, this._next, null, true); //we purposefully keep this._next even though it'd make sense to null it, but this is a performance optimization, as this happens during the while (pt) {} loop in setRatio() at the bottom of which it sets pt = pt._next, so if we null it, the linked list will be broken in that loop.
			};
			/** @private Gives us a way to set a value on the first render (and only the first render). **/
			p._addLazySet = function(t, p, v) {
				var pt = this._firstPT = new CSSPropTween(t, p, 0, 0, this._firstPT, 2);
				pt.e = v;
				pt.setRatio = lazySet;
				pt.data = this;
			};

			/** @private **/
			p._linkCSSP = function(pt, next, prev, remove) {
				if (pt) {
					if (next) {
						next._prev = pt;
					}
					if (pt._next) {
						pt._next._prev = pt._prev;
					}
					if (pt._prev) {
						pt._prev._next = pt._next;
					} else if (this._firstPT === pt) {
						this._firstPT = pt._next;
						remove = true; //just to prevent resetting this._firstPT 5 lines down in case pt._next is null. (optimized for speed)
					}
					if (prev) {
						prev._next = pt;
					} else if (!remove && this._firstPT === null) {
						this._firstPT = pt;
					}
					pt._next = next;
					pt._prev = prev;
				}
				return pt;
			};

			p._mod = function(lookup) {
				var pt = this._firstPT;
				while (pt) {
					if (typeof(lookup[pt.p]) === "function" && lookup[pt.p] === Math.round) { //only gets called by RoundPropsPlugin (ModifyPlugin manages all the rendering internally for CSSPlugin properties that need modification). Remember, we handle rounding a bit differently in this plugin for performance reasons, leveraging "r" as an indicator that the value should be rounded internally..
						pt.r = 1;
					}
					pt = pt._next;
				}
			};

			//we need to make sure that if alpha or autoAlpha is killed, opacity is too. And autoAlpha affects the "visibility" property.
			p._kill = function(lookup) {
				var copy = lookup,
					pt, p, xfirst;
				if (lookup.autoAlpha || lookup.alpha) {
					copy = {};
					for (p in lookup) { //copy the lookup so that we're not changing the original which may be passed elsewhere.
						copy[p] = lookup[p];
					}
					copy.opacity = 1;
					if (copy.autoAlpha) {
						copy.visibility = 1;
					}
				}
				if (lookup.className && (pt = this._classNamePT)) { //for className tweens, we need to kill any associated CSSPropTweens too; a linked list starts at the className's "xfirst".
					xfirst = pt.xfirst;
					if (xfirst && xfirst._prev) {
						this._linkCSSP(xfirst._prev, pt._next, xfirst._prev._prev); //break off the prev
					} else if (xfirst === this._firstPT) {
						this._firstPT = pt._next;
					}
					if (pt._next) {
						this._linkCSSP(pt._next, pt._next._next, xfirst._prev);
					}
					this._classNamePT = null;
				}
				pt = this._firstPT;
				while (pt) {
					if (pt.plugin && pt.plugin !== p && pt.plugin._kill) { //for plugins that are registered with CSSPlugin, we should notify them of the kill.
						pt.plugin._kill(lookup);
						p = pt.plugin;
					}
					pt = pt._next;
				}
				return TweenPlugin.prototype._kill.call(this, copy);
			};



			//used by cascadeTo() for gathering all the style properties of each child element into an array for comparison.
			var _getChildStyles = function(e, props, targets) {
					var children, i, child, type;
					if (e.slice) {
						i = e.length;
						while (--i > -1) {
							_getChildStyles(e[i], props, targets);
						}
						return;
					}
					children = e.childNodes;
					i = children.length;
					while (--i > -1) {
						child = children[i];
						type = child.type;
						if (child.style) {
							props.push(_getAllStyles(child));
							if (targets) {
								targets.push(child);
							}
						}
						if ((type === 1 || type === 9 || type === 11) && child.childNodes.length) {
							_getChildStyles(child, props, targets);
						}
					}
				};

			/**
			 * Typically only useful for className tweens that may affect child elements, this method creates a TweenLite
			 * and then compares the style properties of all the target's child elements at the tween's start and end, and
			 * if any are different, it also creates tweens for those and returns an array containing ALL of the resulting
			 * tweens (so that you can easily add() them to a TimelineLite, for example). The reason this functionality is
			 * wrapped into a separate static method of CSSPlugin instead of being integrated into all regular className tweens
			 * is because it creates entirely new tweens that may have completely different targets than the original tween,
			 * so if they were all lumped into the original tween instance, it would be inconsistent with the rest of the API
			 * and it would create other problems. For example:
			 *  - If I create a tween of elementA, that tween instance may suddenly change its target to include 50 other elements (unintuitive if I specifically defined the target I wanted)
			 *  - We can't just create new independent tweens because otherwise, what happens if the original/parent tween is reversed or pause or dropped into a TimelineLite for tight control? You'd expect that tween's behavior to affect all the others.
			 *  - Analyzing every style property of every child before and after the tween is an expensive operation when there are many children, so this behavior shouldn't be imposed on all className tweens by default, especially since it's probably rare that this extra functionality is needed.
			 *
			 * @param {Object} target object to be tweened
			 * @param {number} Duration in seconds (or frames for frames-based tweens)
			 * @param {Object} Object containing the end values, like {className:"newClass", ease:Linear.easeNone}
			 * @return {Array} An array of TweenLite instances
			 */
			CSSPlugin.cascadeTo = function(target, duration, vars) {
				var tween = TweenLite.to(target, duration, vars),
					results = [tween],
					b = [],
					e = [],
					targets = [],
					_reservedProps = TweenLite._internals.reservedProps,
					i, difs, p, from;
				target = tween._targets || tween.target;
				_getChildStyles(target, b, targets);
				tween.render(duration, true, true);
				_getChildStyles(target, e);
				tween.render(0, true, true);
				tween._enabled(true);
				i = targets.length;
				while (--i > -1) {
					difs = _cssDif(targets[i], b[i], e[i]);
					if (difs.firstMPT) {
						difs = difs.difs;
						for (p in vars) {
							if (_reservedProps[p]) {
								difs[p] = vars[p];
							}
						}
						from = {};
						for (p in difs) {
							from[p] = b[i][p];
						}
						results.push(TweenLite.fromTo(targets[i], duration, from, difs));
					}
				}
				return results;
			};

			TweenPlugin.activate([CSSPlugin]);
			return CSSPlugin;

		}, true);
		
	}); if (_gsScope._gsDefine) { _gsScope._gsQueue.pop()(); }

	//export to AMD/RequireJS and CommonJS/Node (precursor to full modular build system coming at a later date)
	(function(name) {
		"use strict";
		var getGlobal = function() {
			return (_gsScope.GreenSockGlobals || _gsScope)[name];
		};
		if (true) { //AMD
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (getGlobal), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (typeof(module) !== "undefined" && module.exports) { //node
			require("../TweenLite.js");
			module.exports = getGlobal();
		}
	}("CSSPlugin"));

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }
/******/ ])
});
;