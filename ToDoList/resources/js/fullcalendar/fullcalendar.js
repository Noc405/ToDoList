/**
 * @license
 FullCalendar v3.9.0
 Docs & License: https://fullcalendar.io/
 (c) 2018 Adam Shaw
*/
'use strict';
!function(global, factory) {
  if ("object" == typeof exports && "object" == typeof module) {
    module.exports = factory(require("moment"), require("jquery"));
  } else {
    if ("function" == typeof define && define.amd) {
      define(["moment", "jquery"], factory);
    } else {
      if ("object" == typeof exports) {
        exports.FullCalendar = factory(require("moment"), require("jquery"));
      } else {
        global.FullCalendar = factory(global.moment, global.jQuery);
      }
    }
  }
}("undefined" != typeof self ? self : this, function(__WEBPACK_EXTERNAL_MODULE_61__, e) {
  return function(modules) {
    /**
     * @param {number} moduleId
     * @return {?}
     */
    function __webpack_require__(moduleId) {
      if (installedModules[moduleId]) {
        return installedModules[moduleId].exports;
      }
      var module = installedModules[moduleId] = {
        i : moduleId,
        l : false,
        exports : {}
      };
      return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), module.l = true, module.exports;
    }
    var installedModules = {};
    return __webpack_require__.m = modules, __webpack_require__.c = installedModules, __webpack_require__.d = function(d, name, n) {
      if (!__webpack_require__.o(d, name)) {
        Object.defineProperty(d, name, {
          configurable : false,
          enumerable : true,
          get : n
        });
      }
    }, __webpack_require__.n = function(module) {
      /** @type {function(): ?} */
      var n = module && module.__esModule ? function() {
        return module.default;
      } : function() {
        return module;
      };
      return __webpack_require__.d(n, "a", n), n;
    }, __webpack_require__.o = function(t, object) {
      return Object.prototype.hasOwnProperty.call(t, object);
    }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 236);
  }([function(module, n) {
    /** @type {!Function} */
    module.exports = __WEBPACK_EXTERNAL_MODULE_61__;
  }, , function(canCreateDiscussions, Parent) {
    /** @type {function(!Object, ?): !Object} */
    var create = Object.setPrototypeOf || {
      __proto__ : []
    } instanceof Array && function(locals, app) {
      /** @type {!Object} */
      locals.__proto__ = app;
    } || function(params, items) {
      var i;
      for (i in items) {
        if (items.hasOwnProperty(i)) {
          params[i] = items[i];
        }
      }
    };
    /**
     * @param {!Function} name
     * @param {!Object} parent
     * @return {undefined}
     */
    Parent.__extends = function(name, parent) {
      /**
       * @return {undefined}
       */
      function ctor() {
        /** @type {!Function} */
        this.constructor = name;
      }
      create(name, parent);
      name.prototype = null === parent ? Object.create(parent) : (ctor.prototype = parent.prototype, new ctor);
    };
  }, function(context, n) {
    /** @type {!Function} */
    context.exports = e;
  }, function(canCreateDiscussions, exports, require) {
    /**
     * @param {!Object} rowEls
     * @param {!Object} size
     * @return {undefined}
     */
    function NodeConstructor(rowEls, size) {
      if (size.left) {
        rowEls.css({
          "border-left-width" : 1,
          "margin-left" : size.left - 1
        });
      }
      if (size.right) {
        rowEls.css({
          "border-right-width" : 1,
          "margin-right" : size.right - 1
        });
      }
    }
    /**
     * @param {!Object} rowEls
     * @return {undefined}
     */
    function uiCleanupFunc(rowEls) {
      rowEls.css({
        "margin-left" : "",
        "margin-right" : "",
        "border-left-width" : "",
        "border-right-width" : ""
      });
    }
    /**
     * @return {undefined}
     */
    function SnackbarInstance() {
      $("body").addClass("fc-not-allowed");
    }
    /**
     * @return {undefined}
     */
    function hideDisqussion() {
      $("body").removeClass("fc-not-allowed");
    }
    /**
     * @param {!Object} data
     * @param {number} position
     * @param {boolean} el
     * @return {undefined}
     */
    function GridStack(data, position, el) {
      /** @type {number} */
      var undefined = Math.floor(position / data.length);
      /** @type {number} */
      var value = Math.floor(position - undefined * (data.length - 1));
      /** @type {!Array} */
      var attr = [];
      /** @type {!Array} */
      var buffer = [];
      /** @type {!Array} */
      var garbage = [];
      /** @type {number} */
      var sum = 0;
      size(data);
      data.each(function(type, e) {
        var closest = type === data.length - 1 ? value : undefined;
        var delta = $(e).outerHeight(true);
        if (delta < closest) {
          attr.push(e);
          buffer.push(delta);
          garbage.push($(e).height());
        } else {
          sum = sum + delta;
        }
      });
      if (el) {
        /** @type {number} */
        position = position - sum;
        /** @type {number} */
        undefined = Math.floor(position / attr.length);
        /** @type {number} */
        value = Math.floor(position - undefined * (attr.length - 1));
      }
      $(attr).each(function(i, renderedSnippet) {
        var v = i === attr.length - 1 ? value : undefined;
        var t = buffer[i];
        var k = garbage[i];
        /** @type {number} */
        var min = v - (t - k);
        if (t < v) {
          $(renderedSnippet).height(min);
        }
      });
    }
    /**
     * @param {!Object} val
     * @return {undefined}
     */
    function size(val) {
      val.height("");
    }
    /**
     * @param {!Object} other
     * @return {?}
     */
    function rename(other) {
      /** @type {number} */
      var width = 0;
      return other.find("> *").each(function(canCreateDiscussions, tileTitle) {
        var boundswidth = $(tileTitle).outerWidth();
        if (boundswidth > width) {
          width = boundswidth;
        }
      }), width++, other.width(width), width;
    }
    /**
     * @param {!Object} container
     * @param {!Object} e
     * @return {?}
     */
    function elementLibrary(container, e) {
      var n;
      var $blockSelectorChildren = container.add(e);
      return $blockSelectorChildren.css({
        position : "relative",
        left : -1
      }), n = container.outerHeight() - e.outerHeight(), $blockSelectorChildren.css({
        position : "",
        left : ""
      }), n;
    }
    /**
     * @param {!Object} element
     * @return {?}
     */
    function scrollParent(element) {
      var undefined = element.css("position");
      var extensionContextMenus = element.parents().filter(function() {
        var parent = $(this);
        return /(auto|scroll)/.test(parent.css("overflow") + parent.css("overflow-y") + parent.css("overflow-x"));
      }).eq(0);
      return "fixed" !== undefined && extensionContextMenus.length ? extensionContextMenus : $(element[0].ownerDocument || document);
    }
    /**
     * @param {!Object} element
     * @param {number} origin
     * @return {?}
     */
    function getHtmlPlacement(element, origin) {
      var offset = element.offset();
      /** @type {number} */
      var areaOffsetLeft = offset.left - (origin ? origin.left : 0);
      /** @type {number} */
      var clippedTop = offset.top - (origin ? origin.top : 0);
      return {
        left : areaOffsetLeft,
        right : areaOffsetLeft + element.outerWidth(),
        top : clippedTop,
        bottom : clippedTop + element.outerHeight()
      };
    }
    /**
     * @param {!Object} element
     * @param {number} relative
     * @return {?}
     */
    function getSize(element, relative) {
      var offset = element.offset();
      var actual = render(element);
      /** @type {number} */
      var left = offset.left + getStyle(element, "border-left-width") + actual.left - (relative ? relative.left : 0);
      /** @type {number} */
      var top = offset.top + getStyle(element, "border-top-width") + actual.top - (relative ? relative.top : 0);
      return {
        left : left,
        right : left + element[0].clientWidth,
        top : top,
        bottom : top + element[0].clientHeight
      };
    }
    /**
     * @param {!Object} target
     * @param {number} relative
     * @return {?}
     */
    function getOffset(target, relative) {
      var offset = target.offset();
      /** @type {number} */
      var areaOffsetLeft = offset.left + getStyle(target, "border-left-width") + getStyle(target, "padding-left") - (relative ? relative.left : 0);
      /** @type {number} */
      var clippedTop = offset.top + getStyle(target, "border-top-width") + getStyle(target, "padding-top") - (relative ? relative.top : 0);
      return {
        left : areaOffsetLeft,
        right : areaOffsetLeft + target.width(),
        top : clippedTop,
        bottom : clippedTop + target.height()
      };
    }
    /**
     * @param {!Object} element
     * @return {?}
     */
    function render(element) {
      var ret;
      /** @type {number} */
      var value = element[0].offsetWidth - element[0].clientWidth;
      /** @type {number} */
      var pos = element[0].offsetHeight - element[0].clientHeight;
      return value = clone(value), pos = clone(pos), ret = {
        left : 0,
        right : 0,
        top : 0,
        bottom : pos
      }, renderRows() && "rtl" === element.css("direction") ? ret.left = value : ret.right = value, ret;
    }
    /**
     * @param {number} t
     * @return {?}
     */
    function clone(t) {
      return t = Math.max(0, t), t = Math.round(t);
    }
    /**
     * @return {?}
     */
    function renderRows() {
      return null === scrollbarCompensation && (scrollbarCompensation = getScrollbarWidth()), scrollbarCompensation;
    }
    /**
     * @return {?}
     */
    function getScrollbarWidth() {
      var t = $("<div><div/></div>").css({
        position : "absolute",
        top : -1e3,
        left : 0,
        border : 0,
        padding : 0,
        overflow : "scroll",
        direction : "rtl"
      }).appendTo("body");
      var rowWithMoreColumns = t.children();
      /** @type {boolean} */
      var n = rowWithMoreColumns.offset().left > t.offset().left;
      return t.remove(), n;
    }
    /**
     * @param {!Object} obj
     * @param {string} prop
     * @return {?}
     */
    function getStyle(obj, prop) {
      return parseFloat(obj.css(prop)) || 0;
    }
    /**
     * @param {!Object} ev
     * @return {?}
     */
    function elStop(ev) {
      return 1 === ev.which && !ev.ctrlKey;
    }
    /**
     * @param {!Object} ev
     * @return {?}
     */
    function event_mouse_position(ev) {
      var touch = ev.originalEvent.touches;
      return touch && touch.length ? touch[0].pageX : ev.pageX;
    }
    /**
     * @param {!Object} event
     * @return {?}
     */
    function touchStartListener(event) {
      var touches = event.originalEvent.touches;
      return touches && touches.length ? touches[0].pageY : event.pageY;
    }
    /**
     * @param {!Object} str
     * @return {?}
     */
    function kwtest(str) {
      return /^touch/.test(str.type);
    }
    /**
     * @param {!Object} el
     * @return {undefined}
     */
    function on(el) {
      el.addClass("fc-unselectable").on("selectstart", noop);
    }
    /**
     * @param {!Object} el
     * @return {undefined}
     */
    function stop(el) {
      el.removeClass("fc-unselectable").off("selectstart", noop);
    }
    /**
     * @param {!Event} event
     * @return {undefined}
     */
    function noop(event) {
      event.preventDefault();
    }
    /**
     * @param {!ClientRect} coords
     * @param {!Object} style
     * @return {?}
     */
    function getParentRect(coords, style) {
      var res = {
        left : Math.max(coords.left, style.left),
        right : Math.min(coords.right, style.right),
        top : Math.max(coords.top, style.top),
        bottom : Math.min(coords.bottom, style.bottom)
      };
      return res.left < res.right && res.top < res.bottom && res;
    }
    /**
     * @param {!Object} geometry
     * @param {!Object} style
     * @return {?}
     */
    function _getContentStyle(geometry, style) {
      return {
        left : Math.min(Math.max(geometry.left, style.left), style.right),
        top : Math.min(Math.max(geometry.top, style.top), style.bottom)
      };
    }
    /**
     * @param {!Object} box
     * @return {?}
     */
    function getAbsoluteBoundingClientRect(box) {
      return {
        left : (box.left + box.right) / 2,
        top : (box.top + box.bottom) / 2
      };
    }
    /**
     * @param {!Object} pos
     * @param {!Object} e
     * @return {?}
     */
    function offsetXYFromParent(pos, e) {
      return {
        left : pos.left - e.left,
        top : pos.top - e.top
      };
    }
    /**
     * @param {string} a
     * @return {?}
     */
    function _(a) {
      var i;
      var arg;
      /** @type {!Array} */
      var ret = [];
      /** @type {!Array} */
      var args = [];
      if ("string" == typeof a) {
        /** @type {!Array<string>} */
        args = a.split(/\s*,\s*/);
      } else {
        if ("function" == typeof a) {
          /** @type {!Array} */
          args = [a];
        } else {
          if ($.isArray(a)) {
            /** @type {string} */
            args = a;
          }
        }
      }
      /** @type {number} */
      i = 0;
      for (; i < args.length; i++) {
        arg = args[i];
        if ("string" == typeof arg) {
          ret.push("-" === arg.charAt(0) ? {
            field : arg.substring(1),
            order : -1
          } : {
            field : arg,
            order : 1
          });
        } else {
          if ("function" == typeof arg) {
            ret.push({
              func : arg
            });
          }
        }
      }
      return ret;
    }
    /**
     * @param {undefined} output
     * @param {undefined} params
     * @param {!Array} obj
     * @param {undefined} data
     * @param {undefined} value
     * @return {?}
     */
    function _validate_presence_of(output, params, obj, data, value) {
      var i;
      var result;
      /** @type {number} */
      i = 0;
      for (; i < obj.length; i++) {
        if (result = set(output, params, obj[i], data, value)) {
          return result;
        }
      }
      return 0;
    }
    /**
     * @param {!Object} data
     * @param {!Object} params
     * @param {!Object} model
     * @param {!Object} doc
     * @param {!Object} attrs
     * @return {?}
     */
    function set(data, params, model, doc, attrs) {
      if (model.func) {
        return model.func(data, params);
      }
      var w = data[model.field];
      var val = params[model.field];
      return null == w && doc && (w = doc[model.field]), null == val && attrs && (val = attrs[model.field]), equal(w, val) * (model.order || 1);
    }
    /**
     * @param {number} a
     * @param {number} b
     * @return {?}
     */
    function equal(a, b) {
      return a || b ? null == b ? -1 : null == a ? 1 : "string" === $.type(a) || "string" === $.type(b) ? String(a).localeCompare(String(b)) : a - b : 0;
    }
    /**
     * @param {!Object} e
     * @param {!Object} state
     * @return {?}
     */
    function expandEvent(e, state) {
      return moment.duration({
        days : e.clone().stripTime().diff(state.clone().stripTime(), "days"),
        ms : e.time() - state.time()
      });
    }
    /**
     * @param {!Object} a
     * @param {!Object} fn
     * @return {?}
     */
    function pick(a, fn) {
      return moment.duration({
        days : a.clone().stripTime().diff(fn.clone().stripTime(), "days")
      });
    }
    /**
     * @param {!Object} t
     * @param {!Object} value
     * @param {!Object} type
     * @return {?}
     */
    function format(t, value, type) {
      return moment.duration(Math.round(t.diff(value, type, true)), type);
    }
    /**
     * @param {!Object} val
     * @param {!Object} data
     * @return {?}
     */
    function parse(val, data) {
      var t;
      var current;
      var i;
      /** @type {number} */
      t = 0;
      for (; t < exports.unitsDesc.length && (current = exports.unitsDesc[t], !((i = put(current, val, data)) >= 1 && floor(i))); t++) {
      }
      return current;
    }
    /**
     * @param {!Object} str
     * @param {!Object} value
     * @return {?}
     */
    function toDate(str, value) {
      var unit = parse(str);
      return "week" === unit && "object" == typeof value && value.days && (unit = "day"), unit;
    }
    /**
     * @param {string} type
     * @param {!Object} start
     * @param {!Object} data
     * @return {?}
     */
    function put(type, start, data) {
      return null != data ? data.diff(start, type, true) : moment.isDuration(start) ? start.as(type) : start.end.diff(start.start, type, true);
    }
    /**
     * @param {!Date} start
     * @param {!Date} end
     * @param {?} d
     * @return {?}
     */
    function init(start, end, d) {
      var months;
      return click(d) ? (end - start) / d : (months = d.asMonths(), Math.abs(months) >= 1 && floor(months) ? end.diff(start, "months", true) / months : end.diff(start, "days", true) / d.asDays());
    }
    /**
     * @param {!Object} d
     * @param {!Object} duration
     * @return {?}
     */
    function serializeDuration(d, duration) {
      var n;
      var i;
      return click(d) || click(duration) ? d / duration : (n = d.asMonths(), i = duration.asMonths(), Math.abs(n) >= 1 && floor(n) && Math.abs(i) >= 1 && floor(i) ? n / i : d.asDays() / duration.asDays());
    }
    /**
     * @param {number} dur
     * @param {number} n
     * @return {?}
     */
    function transitionPath(dur, n) {
      var num;
      return click(dur) ? moment.duration(dur * n) : (num = dur.asMonths(), Math.abs(num) >= 1 && floor(num) ? moment.duration({
        months : num * n
      }) : moment.duration({
        days : dur.asDays() * n
      }));
    }
    /**
     * @param {!Object} x
     * @return {?}
     */
    function click(x) {
      return Boolean(x.hours() || x.minutes() || x.seconds() || x.milliseconds());
    }
    /**
     * @param {!AudioNode} target
     * @return {?}
     */
    function isMutableObject(target) {
      return "[object Date]" === Object.prototype.toString.call(target) || target instanceof Date;
    }
    /**
     * @param {?} message
     * @return {?}
     */
    function isServiceName(message) {
      return "string" == typeof message && /^\d+:\d+(?::\d+\.?(?:\d{3})?)?$/.test(message);
    }
    /**
     * @return {?}
     */
    function logger() {
      /** @type {!Array} */
      var argumentsArray = [];
      /** @type {number} */
      var i = 0;
      for (; i < arguments.length; i++) {
        argumentsArray[i] = arguments[i];
      }
      /** @type {!Console} */
      var console = window.console;
      if (console && console.log) {
        return console.log.apply(console, argumentsArray);
      }
    }
    /**
     * @return {?}
     */
    function warn() {
      /** @type {!Array} */
      var args = [];
      /** @type {number} */
      var i = 0;
      for (; i < arguments.length; i++) {
        args[i] = arguments[i];
      }
      /** @type {!Console} */
      var console = window.console;
      return console && console.warn ? console.warn.apply(console, args) : logger.apply(null, args);
    }
    /**
     * @param {!Array} val
     * @param {!Array} s
     * @return {?}
     */
    function merge(val, s) {
      var j;
      var i;
      var array;
      var g;
      var k;
      var obj;
      var result = {};
      if (s) {
        /** @type {number} */
        j = 0;
        for (; j < s.length; j++) {
          i = s[j];
          /** @type {!Array} */
          array = [];
          /** @type {number} */
          g = val.length - 1;
          for (; g >= 0; g--) {
            if ("object" == typeof(k = val[g][i])) {
              array.unshift(k);
            } else {
              if (void 0 !== k) {
                result[i] = k;
                break;
              }
            }
          }
          if (array.length) {
            result[i] = merge(array);
          }
        }
      }
      /** @type {number} */
      j = val.length - 1;
      for (; j >= 0; j--) {
        obj = val[j];
        for (i in obj) {
          if (!(i in result)) {
            result[i] = obj[i];
          }
        }
      }
      return result;
    }
    /**
     * @param {!Object} obj
     * @param {!Object} data
     * @return {undefined}
     */
    function VersionableMap(obj, data) {
      var i;
      for (i in obj) {
        if (call(obj, i)) {
          data[i] = obj[i];
        }
      }
    }
    /**
     * @param {!Object} args
     * @param {string} key
     * @return {?}
     */
    function call(args, key) {
      return has.call(args, key);
    }
    /**
     * @param {!Array} t
     * @param {?} f
     * @param {!Array} args
     * @return {?}
     */
    function applyAll(t, f, args) {
      if ($.isFunction(t) && (t = [t]), t) {
        var k = void 0;
        var ret = void 0;
        /** @type {number} */
        k = 0;
        for (; k < t.length; k++) {
          ret = t[k].apply(f, args) || ret;
        }
        return ret;
      }
    }
    /**
     * @param {!Array} b
     * @param {!Function} sub
     * @return {?}
     */
    function streamlines(b, sub) {
      /** @type {number} */
      var output = 0;
      /** @type {number} */
      var i = 0;
      for (; i < b.length;) {
        if (sub(b[i])) {
          b.splice(i, 1);
          output++;
        } else {
          i++;
        }
      }
      return output;
    }
    /**
     * @param {!Array} data
     * @param {!Object} event
     * @return {?}
     */
    function deferredInsert(data, event) {
      /** @type {number} */
      var n = 0;
      /** @type {number} */
      var i = 0;
      for (; i < data.length;) {
        if (data[i] === event) {
          data.splice(i, 1);
          n++;
        } else {
          i++;
        }
      }
      return n;
    }
    /**
     * @param {!Array} b
     * @param {!Array} a
     * @return {?}
     */
    function tree_equals(b, a) {
      var prop;
      var len = b.length;
      if (null == len || len !== a.length) {
        return false;
      }
      /** @type {number} */
      prop = 0;
      for (; prop < len; prop++) {
        if (b[prop] !== a[prop]) {
          return false;
        }
      }
      return true;
    }
    /**
     * @return {?}
     */
    function isLineComplete() {
      /** @type {!Array} */
      var ar = [];
      /** @type {number} */
      var i = 0;
      for (; i < arguments.length; i++) {
        ar[i] = arguments[i];
      }
      /** @type {number} */
      var n = 0;
      for (; n < ar.length; n++) {
        if (void 0 !== ar[n]) {
          return ar[n];
        }
      }
    }
    /**
     * @param {string} text
     * @return {?}
     */
    function htmlEscape(text) {
      return (text + "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#039;").replace(/"/g, "&quot;").replace(/\n/g, "<br />");
    }
    /**
     * @param {string} enc
     * @return {?}
     */
    function collectFileContentsFromStream(enc) {
      return enc.replace(/&.*?;/g, "");
    }
    /**
     * @param {?} params
     * @return {?}
     */
    function _getPubUrl(params) {
      /** @type {!Array} */
      var text = [];
      return $.each(params, function(url, fileExtension) {
        if (null != fileExtension) {
          text.push(url + ":" + fileExtension);
        }
      }), text.join(";");
    }
    /**
     * @param {string} obj
     * @return {?}
     */
    function html(obj) {
      /** @type {!Array} */
      var drilldownLevelLabels = [];
      return $.each(obj, function(attempt, text) {
        if (null != text) {
          drilldownLevelLabels.push(attempt + '="' + htmlEscape(text) + '"');
        }
      }), drilldownLevelLabels.join(" ");
    }
    /**
     * @param {string} type
     * @return {?}
     */
    function sentencecase(type) {
      return type.charAt(0).toUpperCase() + type.slice(1);
    }
    /**
     * @param {(boolean|number|string)} p
     * @param {(boolean|number|string)} n
     * @return {?}
     */
    function lngView(p, n) {
      return p - n;
    }
    /**
     * @param {number} val
     * @return {?}
     */
    function floor(val) {
      return val % 1 == 0;
    }
    /**
     * @param {!Function} value
     * @param {string} i
     * @return {?}
     */
    function proxy(value, i) {
      var source = value[i];
      return function() {
        return source.apply(value, arguments);
      };
    }
    /**
     * @param {!Function} callback
     * @param {number} delay
     * @param {number} immediate
     * @return {?}
     */
    function debounce(callback, delay, immediate) {
      if (void 0 === immediate) {
        /** @type {boolean} */
        immediate = false;
      }
      var timeoutId;
      var options;
      var o;
      var lastMove;
      var i;
      /**
       * @return {undefined}
       */
      var reset = function() {
        /** @type {number} */
        var elapsed = +new Date - lastMove;
        if (elapsed < delay) {
          /** @type {number} */
          timeoutId = setTimeout(reset, delay - elapsed);
        } else {
          /** @type {null} */
          timeoutId = null;
          if (!immediate) {
            i = callback.apply(o, options);
            /** @type {null} */
            o = options = null;
          }
        }
      };
      return function() {
        o = this;
        /** @type {!Arguments} */
        options = arguments;
        /** @type {number} */
        lastMove = +new Date;
        var callNow = immediate && !timeoutId;
        return timeoutId || (timeoutId = setTimeout(reset, delay)), callNow && (i = callback.apply(o, options), o = options = null), i;
      };
    }
    Object.defineProperty(exports, "__esModule", {
      value : true
    });
    var moment = require(0);
    var $ = require(3);
    /** @type {function(!Object, !Object): undefined} */
    exports.compensateScroll = NodeConstructor;
    /** @type {function(!Object): undefined} */
    exports.uncompensateScroll = uiCleanupFunc;
    /** @type {function(): undefined} */
    exports.disableCursor = SnackbarInstance;
    /** @type {function(): undefined} */
    exports.enableCursor = hideDisqussion;
    /** @type {function(!Object, number, boolean): undefined} */
    exports.distributeHeight = GridStack;
    /** @type {function(!Object): undefined} */
    exports.undistributeHeight = size;
    /** @type {function(!Object): ?} */
    exports.matchCellWidths = rename;
    /** @type {function(!Object, !Object): ?} */
    exports.subtractInnerElHeight = elementLibrary;
    /** @type {function(!Object): ?} */
    exports.getScrollParent = scrollParent;
    /** @type {function(!Object, number): ?} */
    exports.getOuterRect = getHtmlPlacement;
    /** @type {function(!Object, number): ?} */
    exports.getClientRect = getSize;
    /** @type {function(!Object, number): ?} */
    exports.getContentRect = getOffset;
    /** @type {function(!Object): ?} */
    exports.getScrollbarWidths = render;
    /** @type {null} */
    var scrollbarCompensation = null;
    /** @type {function(!Object): ?} */
    exports.isPrimaryMouseButton = elStop;
    /** @type {function(!Object): ?} */
    exports.getEvX = event_mouse_position;
    /** @type {function(!Object): ?} */
    exports.getEvY = touchStartListener;
    /** @type {function(!Object): ?} */
    exports.getEvIsTouch = kwtest;
    /** @type {function(!Object): undefined} */
    exports.preventSelection = on;
    /** @type {function(!Object): undefined} */
    exports.allowSelection = stop;
    /** @type {function(!Event): undefined} */
    exports.preventDefault = noop;
    /** @type {function(!ClientRect, !Object): ?} */
    exports.intersectRects = getParentRect;
    /** @type {function(!Object, !Object): ?} */
    exports.constrainPoint = _getContentStyle;
    /** @type {function(!Object): ?} */
    exports.getRectCenter = getAbsoluteBoundingClientRect;
    /** @type {function(!Object, !Object): ?} */
    exports.diffPoints = offsetXYFromParent;
    /** @type {function(string): ?} */
    exports.parseFieldSpecs = _;
    /** @type {function(undefined, undefined, !Array, undefined, undefined): ?} */
    exports.compareByFieldSpecs = _validate_presence_of;
    /** @type {function(!Object, !Object, !Object, !Object, !Object): ?} */
    exports.compareByFieldSpec = set;
    /** @type {function(number, number): ?} */
    exports.flexibleCompare = equal;
    /** @type {!Array} */
    exports.dayIDs = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
    /** @type {!Array} */
    exports.unitsDesc = ["year", "month", "week", "day", "hour", "minute", "second", "millisecond"];
    /** @type {function(!Object, !Object): ?} */
    exports.diffDayTime = expandEvent;
    /** @type {function(!Object, !Object): ?} */
    exports.diffDay = pick;
    /** @type {function(!Object, !Object, !Object): ?} */
    exports.diffByUnit = format;
    /** @type {function(!Object, !Object): ?} */
    exports.computeGreatestUnit = parse;
    /** @type {function(!Object, !Object): ?} */
    exports.computeDurationGreatestUnit = toDate;
    /** @type {function(!Date, !Date, ?): ?} */
    exports.divideRangeByDuration = init;
    /** @type {function(!Object, !Object): ?} */
    exports.divideDurationByDuration = serializeDuration;
    /** @type {function(number, number): ?} */
    exports.multiplyDuration = transitionPath;
    /** @type {function(!Object): ?} */
    exports.durationHasTime = click;
    /** @type {function(!AudioNode): ?} */
    exports.isNativeDate = isMutableObject;
    /** @type {function(?): ?} */
    exports.isTimeString = isServiceName;
    /** @type {function(): ?} */
    exports.log = logger;
    /** @type {function(): ?} */
    exports.warn = warn;
    /** @type {function(this:Object, *): boolean} */
    var has = {}.hasOwnProperty;
    /** @type {function(!Array, !Array): ?} */
    exports.mergeProps = merge;
    /** @type {function(!Object, !Object): undefined} */
    exports.copyOwnProps = VersionableMap;
    /** @type {function(!Object, string): ?} */
    exports.hasOwnProp = call;
    /** @type {function(!Array, ?, !Array): ?} */
    exports.applyAll = applyAll;
    /** @type {function(!Array, !Function): ?} */
    exports.removeMatching = streamlines;
    /** @type {function(!Array, !Object): ?} */
    exports.removeExact = deferredInsert;
    /** @type {function(!Array, !Array): ?} */
    exports.isArraysEqual = tree_equals;
    /** @type {function(): ?} */
    exports.firstDefined = isLineComplete;
    /** @type {function(string): ?} */
    exports.htmlEscape = htmlEscape;
    /** @type {function(string): ?} */
    exports.stripHtmlEntities = collectFileContentsFromStream;
    /** @type {function(?): ?} */
    exports.cssToStr = _getPubUrl;
    /** @type {function(string): ?} */
    exports.attrsToStr = html;
    /** @type {function(string): ?} */
    exports.capitaliseFirstLetter = sentencecase;
    /** @type {function((boolean|number|string), (boolean|number|string)): ?} */
    exports.compareNumbers = lngView;
    /** @type {function(number): ?} */
    exports.isInt = floor;
    /** @type {function(!Function, string): ?} */
    exports.proxy = proxy;
    /** @type {function(!Function, number, number): ?} */
    exports.debounce = debounce;
  }, function(canCreateDiscussions, e, require) {
    /**
     * @param {?} name
     * @param {?} def
     * @return {?}
     */
    function index(name, def) {
      return name.startMs - def.startMs;
    }
    Object.defineProperty(e, "__esModule", {
      value : true
    });
    var moment = require(0);
    var config = require(10);
    var newOrg = function() {
      /**
       * @param {string} e
       * @param {string} input
       * @return {undefined}
       */
      function BoundingSphere(e, input) {
        /** @type {boolean} */
        this.isStart = true;
        /** @type {boolean} */
        this.isEnd = true;
        if (moment.isMoment(e)) {
          e = e.clone().stripZone();
        }
        if (moment.isMoment(input)) {
          input = input.clone().stripZone();
        }
        if (e) {
          this.startMs = e.valueOf();
        }
        if (input) {
          this.endMs = input.valueOf();
        }
      }
      return BoundingSphere.invertRanges = function(ranges, options) {
        var i;
        var item;
        /** @type {!Array} */
        var occluder = [];
        var result = options.startMs;
        ranges.sort(index);
        /** @type {number} */
        i = 0;
        for (; i < ranges.length; i++) {
          item = ranges[i];
          if (item.startMs > result) {
            occluder.push(new BoundingSphere(result, item.startMs));
          }
          if (item.endMs > result) {
            result = item.endMs;
          }
        }
        return result < options.endMs && occluder.push(new BoundingSphere(result, options.endMs)), occluder;
      }, BoundingSphere.prototype.intersect = function(array) {
        var i = this.startMs;
        var radius = this.endMs;
        /** @type {null} */
        var rect = null;
        return null != array.startMs && (i = null == i ? array.startMs : Math.max(i, array.startMs)), null != array.endMs && (radius = null == radius ? array.endMs : Math.min(radius, array.endMs)), (null == i || null == radius || i < radius) && (rect = new BoundingSphere(i, radius), rect.isStart = this.isStart && i === this.startMs, rect.isEnd = this.isEnd && radius === this.endMs), rect;
      }, BoundingSphere.prototype.intersectsWith = function(rect) {
        return (null == this.endMs || null == rect.startMs || this.endMs > rect.startMs) && (null == this.startMs || null == rect.endMs || this.startMs < rect.endMs);
      }, BoundingSphere.prototype.containsRange = function(range) {
        return (null == this.startMs || null != range.startMs && range.startMs >= this.startMs) && (null == this.endMs || null != range.endMs && range.endMs <= this.endMs);
      }, BoundingSphere.prototype.containsDate = function(date) {
        var e = date.valueOf();
        return (null == this.startMs || e >= this.startMs) && (null == this.endMs || e < this.endMs);
      }, BoundingSphere.prototype.constrainDate = function(date) {
        var e = date.valueOf();
        return null != this.startMs && e < this.startMs && (e = this.startMs), null != this.endMs && e >= this.endMs && (e = this.endMs - 1), e;
      }, BoundingSphere.prototype.equals = function(def) {
        return this.startMs === def.startMs && this.endMs === def.endMs;
      }, BoundingSphere.prototype.clone = function() {
        var rect = new BoundingSphere(this.startMs, this.endMs);
        return rect.isStart = this.isStart, rect.isEnd = this.isEnd, rect;
      }, BoundingSphere.prototype.getStart = function() {
        return null != this.startMs ? config.default.utc(this.startMs).stripZone() : null;
      }, BoundingSphere.prototype.getEnd = function() {
        return null != this.endMs ? config.default.utc(this.endMs).stripZone() : null;
      }, BoundingSphere.prototype.as = function(n) {
        return moment.utc(this.endMs).diff(moment.utc(this.startMs), n, true);
      }, BoundingSphere;
    }();
    e.default = newOrg;
  }, function(canCreateDiscussions, exports, require) {
    Object.defineProperty(exports, "__esModule", {
      value : true
    });
    var Util = require(2);
    var _ = require(3);
    var o = require(208);
    var h = require(33);
    var x = require(49);
    var events = function(_super) {
      /**
       * @param {?} calendar
       * @return {?}
       */
      function update(calendar) {
        var self = _super.call(this) || this;
        return self.calendar = calendar, self.className = [], self.uid = String(update.uuid++), self;
      }
      return Util.__extends(update, _super), update.parse = function(data, source) {
        var gcmPush = new this(source);
        return !("object" != typeof data || !gcmPush.applyProps(data)) && gcmPush;
      }, update.normalizeId = function(id) {
        return id ? String(id) : null;
      }, update.prototype.fetch = function(optTld, optStart, pagesInfoAndParameters) {
      }, update.prototype.removeEventDefsById = function(ast) {
      }, update.prototype.removeAllEventDefs = function() {
      }, update.prototype.getPrimitive = function(item) {
      }, update.prototype.parseEventDefs = function(c) {
        var i;
        var n;
        /** @type {!Array} */
        var colorDist = [];
        /** @type {number} */
        i = 0;
        for (; i < c.length; i++) {
          if (n = this.parseEventDef(c[i])) {
            colorDist.push(n);
          }
        }
        return colorDist;
      }, update.prototype.parseEventDef = function(a) {
        var r = this.calendar.opt("eventDataTransform");
        var n = this.eventDataTransform;
        return r && (a = r(a, this.calendar)), n && (a = n(a, this.calendar)), x.default.parse(a, this);
      }, update.prototype.applyManualStandardProps = function(msg) {
        return null != msg.id && (this.id = update.normalizeId(msg.id)), _.isArray(msg.className) ? this.className = msg.className : "string" == typeof msg.className && (this.className = msg.className.split(/\s+/)), true;
      }, update.uuid = 0, update.defineStandardProps = o.default.defineStandardProps, update.copyVerbatimStandardProps = o.default.copyVerbatimStandardProps, update;
    }(h.default);
    exports.default = events;
    o.default.mixInto(events);
    events.defineStandardProps({
      id : false,
      className : false,
      color : true,
      backgroundColor : true,
      borderColor : true,
      textColor : true,
      editable : true,
      startEditable : true,
      durationEditable : true,
      rendering : true,
      overlap : true,
      constraint : true,
      allDayDefault : true,
      eventDataTransform : true
    });
  }, function(canCreateDiscussions, e, fn) {
    Object.defineProperty(e, "__esModule", {
      value : true
    });
    var tslib_1 = fn(2);
    var promise = fn(3);
    var o = fn(14);
    /** @type {number} */
    var guid = 0;
    var newOrg = function(_super) {
      /**
       * @return {?}
       */
      function ParseError() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      return tslib_1.__extends(ParseError, _super), ParseError.prototype.listenTo = function(object, type, callback) {
        if ("object" == typeof type) {
          var event;
          for (event in type) {
            if (type.hasOwnProperty(event)) {
              this.listenTo(object, event, type[event]);
            }
          }
        } else {
          if ("string" == typeof type) {
            object.on(type + "." + this.getListenerNamespace(), promise.proxy(callback, this));
          }
        }
      }, ParseError.prototype.stopListeningTo = function(other, eventName) {
        other.off((eventName || "") + "." + this.getListenerNamespace());
      }, ParseError.prototype.getListenerNamespace = function() {
        return null == this.listenerId && (this.listenerId = guid++), "_listener" + this.listenerId;
      }, ParseError;
    }(o.default);
    e.default = newOrg;
  }, , , function(canCreateDiscussions, exports, __webpack_require__) {
    /**
     * @param {!Object} template
     * @param {string} value
     * @return {?}
     */
    function format(template, value) {
      return d.format.call(template, value);
    }
    /**
     * @param {!Array} args
     * @param {number} scope
     * @param {number} options
     * @return {?}
     */
    function render(args, scope, options) {
      if (void 0 === scope) {
        /** @type {boolean} */
        scope = false;
      }
      if (void 0 === options) {
        /** @type {boolean} */
        options = false;
      }
      var searchParams;
      var useHide;
      var hiddenTypeElement;
      var mom;
      var input = args[0];
      /** @type {boolean} */
      var shallow = 1 === args.length && "string" == typeof input;
      return moment.isMoment(input) || b.isNativeDate(input) || void 0 === input ? mom = moment.apply(null, args) : (searchParams = false, useHide = false, shallow ? templateStartAlphaRegex.test(input) ? (input = input + "-01", args = [input], searchParams = true, useHide = true) : (hiddenTypeElement = doctypeRegex.exec(input)) && (searchParams = !hiddenTypeElement[5], useHide = true) : a.isArray(input) && (useHide = true), mom = scope || searchParams ? moment.utc.apply(moment, args) : moment.apply(null, 
      args), searchParams ? (mom._ambigTime = true, mom._ambigZone = true) : options && (useHide ? mom._ambigZone = true : shallow && mom.utcOffset(input))), mom._fullCalendar = true, mom;
    }
    Object.defineProperty(exports, "__esModule", {
      value : true
    });
    var moment = __webpack_require__(0);
    var a = __webpack_require__(3);
    var b = __webpack_require__(4);
    /** @type {!RegExp} */
    var templateStartAlphaRegex = /^\s*\d{4}-\d\d$/;
    /** @type {!RegExp} */
    var doctypeRegex = /^\s*\d{4}-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?)?$/;
    var end = moment.fn;
    exports.newMomentProto = end;
    var d = a.extend({}, end);
    exports.oldMomentProto = d;
    var momentProperties = moment.momentProperties;
    momentProperties.push("_fullCalendar");
    momentProperties.push("_ambigTime");
    momentProperties.push("_ambigZone");
    /** @type {function(!Object, string): ?} */
    exports.oldMomentFormat = format;
    /**
     * @return {?}
     */
    var result = function() {
      return render(arguments);
    };
    /** @type {function(): ?} */
    exports.default = result;
    /**
     * @return {?}
     */
    result.utc = function() {
      var mom = render(arguments, true);
      return mom.hasTime() && mom.utc(), mom;
    };
    /**
     * @return {?}
     */
    result.parseZone = function() {
      return render(arguments, true, true);
    };
    /** @type {function(string): ?} */
    end.week = end.weeks = function(i) {
      var weekCalc = this._locale._fullCalendar_weekCalc;
      return null == i && "function" == typeof weekCalc ? weekCalc(this) : "ISO" === weekCalc ? d.isoWeek.apply(this, arguments) : d.week.apply(this, arguments);
    };
    /**
     * @param {!Object} time
     * @return {?}
     */
    end.time = function(time) {
      if (!this._fullCalendar) {
        return d.time.apply(this, arguments);
      }
      if (null == time) {
        return moment.duration({
          hours : this.hours(),
          minutes : this.minutes(),
          seconds : this.seconds(),
          milliseconds : this.milliseconds()
        });
      }
      /** @type {boolean} */
      this._ambigTime = false;
      if (!(moment.isDuration(time) || moment.isMoment(time))) {
        time = moment.duration(time);
      }
      /** @type {number} */
      var dayHours = 0;
      return moment.isDuration(time) && (dayHours = 24 * Math.floor(time.asDays())), this.hours(dayHours + time.hours()).minutes(time.minutes()).seconds(time.seconds()).milliseconds(time.milliseconds());
    };
    /**
     * @return {?}
     */
    end.stripTime = function() {
      return this._ambigTime || (this.utc(true), this.set({
        hours : 0,
        minutes : 0,
        seconds : 0,
        ms : 0
      }), this._ambigTime = true, this._ambigZone = true), this;
    };
    /**
     * @return {?}
     */
    end.hasTime = function() {
      return !this._ambigTime;
    };
    /**
     * @return {?}
     */
    end.stripZone = function() {
      var wasAmbigTime;
      return this._ambigZone || (wasAmbigTime = this._ambigTime, this.utc(true), this._ambigTime = wasAmbigTime || false, this._ambigZone = true), this;
    };
    /**
     * @return {?}
     */
    end.hasZone = function() {
      return !this._ambigZone;
    };
    /**
     * @param {boolean} keepLocalTime
     * @return {?}
     */
    end.local = function(keepLocalTime) {
      return d.local.call(this, this._ambigZone || keepLocalTime), this._ambigTime = false, this._ambigZone = false, this;
    };
    /**
     * @param {boolean} date
     * @return {?}
     */
    end.utc = function(date) {
      return d.utc.call(this, date), this._ambigTime = false, this._ambigZone = false, this;
    };
    /**
     * @param {?} tzo
     * @return {?}
     */
    end.utcOffset = function(tzo) {
      return null != tzo && (this._ambigTime = false, this._ambigZone = false), d.utcOffset.apply(this, arguments);
    };
  }, function(canCreateDiscussions, e, require) {
    Object.defineProperty(e, "__esModule", {
      value : true
    });
    var Util = require(2);
    var $ = require(3);
    var o = require(14);
    var newOrg = function(_super) {
      /**
       * @return {?}
       */
      function Model() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      return Util.__extends(Model, _super), Model.prototype.on = function(type, handler) {
        return $(this).on(type, this._prepareIntercept(handler)), this;
      }, Model.prototype.one = function(type, handler) {
        return $(this).one(type, this._prepareIntercept(handler)), this;
      }, Model.prototype._prepareIntercept = function(handler) {
        /**
         * @param {?} data
         * @param {!Object} name
         * @return {?}
         */
        var intercept = function(data, name) {
          return handler.apply(name.context || this, name.args || []);
        };
        return handler.guid || (handler.guid = $.guid++), intercept.guid = handler.guid, intercept;
      }, Model.prototype.off = function(event, callback) {
        return $(this).off(event, callback), this;
      }, Model.prototype.trigger = function(type) {
        /** @type {!Array} */
        var rest = [];
        /** @type {number} */
        var i = 1;
        for (; i < arguments.length; i++) {
          rest[i - 1] = arguments[i];
        }
        return $(this).triggerHandler(type, {
          args : rest
        }), this;
      }, Model.prototype.triggerWith = function(types, context, args) {
        return $(this).triggerHandler(types, {
          context : context,
          args : args
        }), this;
      }, Model.prototype.hasHandlers = function(name) {
        var events = $._data(this, "events");
        return events && events[name] && events[name].length > 0;
      }, Model;
    }(o.default);
    e.default = newOrg;
  }, function(canCreateDiscussions, e) {
    Object.defineProperty(e, "__esModule", {
      value : true
    });
    var newOrg = function() {
      /**
       * @param {string} publisher_authrole
       * @param {boolean} retained
       * @return {undefined}
       */
      function Event(publisher_authrole, retained) {
        /** @type {boolean} */
        this.isAllDay = false;
        /** @type {string} */
        this.unzonedRange = publisher_authrole;
        /** @type {boolean} */
        this.isAllDay = retained;
      }
      return Event.prototype.toLegacy = function(canCreateDiscussions) {
        return {
          start : canCreateDiscussions.msToMoment(this.unzonedRange.startMs, this.isAllDay),
          end : canCreateDiscussions.msToMoment(this.unzonedRange.endMs, this.isAllDay)
        };
      }, Event;
    }();
    e.default = newOrg;
  }, function(canCreateDiscussions, e, n) {
    Object.defineProperty(e, "__esModule", {
      value : true
    });
    var tslib_1 = n(2);
    var a = n(34);
    var o = n(209);
    var m = n(17);
    var data = function(_super) {
      /**
       * @return {?}
       */
      function ParseError() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      return tslib_1.__extends(ParseError, _super), ParseError.prototype.buildInstances = function() {
        return [this.buildInstance()];
      }, ParseError.prototype.buildInstance = function() {
        return new o.default(this, this.dateProfile);
      }, ParseError.prototype.isAllDay = function() {
        return this.dateProfile.isAllDay();
      }, ParseError.prototype.clone = function() {
        var deps = _super.prototype.clone.call(this);
        return deps.dateProfile = this.dateProfile, deps;
      }, ParseError.prototype.rezone = function() {
        var calendar = this.source.calendar;
        var options = this.dateProfile;
        this.dateProfile = new m.default(calendar.moment(options.start), options.end ? calendar.moment(options.end) : null, calendar);
      }, ParseError.prototype.applyManualStandardProps = function(o) {
        var options = _super.prototype.applyManualStandardProps.call(this, o);
        var watching = m.default.parse(o, this.source);
        return !!watching && (this.dateProfile = watching, null != o.date && (this.miscProps.date = o.date), options);
      }, ParseError;
    }(a.default);
    e.default = data;
    data.defineStandardProps({
      start : false,
      date : false,
      end : false,
      allDay : false
    });
  }, function(canCreateDiscussions, e) {
    Object.defineProperty(e, "__esModule", {
      value : true
    });
    var newOrg = function() {
      /**
       * @return {undefined}
       */
      function utils() {
      }
      return utils.mixInto = function(target) {
        var vroot = this;
        Object.getOwnPropertyNames(this.prototype).forEach(function(i) {
          if (!target.prototype[i]) {
            target.prototype[i] = vroot.prototype[i];
          }
        });
      }, utils.mixOver = function(nodeChain) {
        var Tween = this;
        Object.getOwnPropertyNames(this.prototype).forEach(function(n) {
          nodeChain.prototype[n] = Tween.prototype[n];
        });
      }, utils;
    }();
    e.default = newOrg;
  }, function(canCreateDiscussions, e) {
    Object.defineProperty(e, "__esModule", {
      value : true
    });
    var newOrg = function() {
      /**
       * @param {string} component
       * @return {undefined}
       */
      function callback(component) {
        this.view = component._getView();
        /** @type {string} */
        this.component = component;
      }
      return callback.prototype.opt = function(name) {
        return this.view.opt(name);
      }, callback.prototype.end = function() {
      }, callback;
    }();
    e.default = newOrg;
  }, function(canCreateDiscussions, exports, _interopRequireDefault) {
    Object.defineProperty(exports, "__esModule", {
      value : true
    });
    /** @type {string} */
    exports.version = "3.9.0";
    /** @type {number} */
    exports.internalApiVersion = 12;
    var utils = _interopRequireDefault(4);
    exports.applyAll = utils.applyAll;
    exports.debounce = utils.debounce;
    exports.isInt = utils.isInt;
    exports.htmlEscape = utils.htmlEscape;
    exports.cssToStr = utils.cssToStr;
    exports.proxy = utils.proxy;
    exports.capitaliseFirstLetter = utils.capitaliseFirstLetter;
    exports.getOuterRect = utils.getOuterRect;
    exports.getClientRect = utils.getClientRect;
    exports.getContentRect = utils.getContentRect;
    exports.getScrollbarWidths = utils.getScrollbarWidths;
    exports.preventDefault = utils.preventDefault;
    exports.parseFieldSpecs = utils.parseFieldSpecs;
    exports.compareByFieldSpecs = utils.compareByFieldSpecs;
    exports.compareByFieldSpec = utils.compareByFieldSpec;
    exports.flexibleCompare = utils.flexibleCompare;
    exports.computeGreatestUnit = utils.computeGreatestUnit;
    exports.divideRangeByDuration = utils.divideRangeByDuration;
    exports.divideDurationByDuration = utils.divideDurationByDuration;
    exports.multiplyDuration = utils.multiplyDuration;
    exports.durationHasTime = utils.durationHasTime;
    exports.log = utils.log;
    exports.warn = utils.warn;
    exports.removeExact = utils.removeExact;
    exports.intersectRects = utils.intersectRects;
    var self = _interopRequireDefault(47);
    exports.formatDate = self.formatDate;
    exports.formatRange = self.formatRange;
    exports.queryMostGranularFormatUnit = self.queryMostGranularFormatUnit;
    var i18n = _interopRequireDefault(31);
    exports.datepickerLocale = i18n.datepickerLocale;
    exports.locale = i18n.locale;
    var _keyboardControls2 = _interopRequireDefault(10);
    exports.moment = _keyboardControls2.default;
    var _browser2 = _interopRequireDefault(11);
    exports.EmitterMixin = _browser2.default;
    var _thirdapp2 = _interopRequireDefault(7);
    exports.ListenerMixin = _thirdapp2.default;
    var _Model2 = _interopRequireDefault(48);
    exports.Model = _Model2.default;
    var _params2 = _interopRequireDefault(207);
    exports.Constraints = _params2.default;
    var _FacebookLogin2 = _interopRequireDefault(5);
    exports.UnzonedRange = _FacebookLogin2.default;
    var _tetrisGame2 = _interopRequireDefault(12);
    exports.ComponentFootprint = _tetrisGame2.default;
    var _atan6 = _interopRequireDefault(212);
    exports.BusinessHourGenerator = _atan6.default;
    var _log3 = _interopRequireDefault(34);
    exports.EventDef = _log3.default;
    var _scoreObserver2 = _interopRequireDefault(37);
    exports.EventDefMutation = _scoreObserver2.default;
    var _Complex3 = _interopRequireDefault(38);
    exports.EventSourceParser = _Complex3.default;
    var _Sparse3 = _interopRequireDefault(6);
    exports.EventSource = _Sparse3.default;
    var _tetromino2 = _interopRequireDefault(51);
    exports.defineThemeSystem = _tetromino2.defineThemeSystem;
    var _abs3 = _interopRequireDefault(18);
    exports.EventInstanceGroup = _abs3.default;
    var _acos3 = _interopRequireDefault(52);
    exports.ArrayEventSource = _acos3.default;
    var _and3 = _interopRequireDefault(215);
    exports.FuncEventSource = _and3.default;
    var _asin3 = _interopRequireDefault(216);
    exports.JsonFeedEventSource = _asin3.default;
    var _GoogleLogin2 = _interopRequireDefault(36);
    exports.EventFootprint = _GoogleLogin2.default;
    var _identity3 = _interopRequireDefault(33);
    exports.Class = _identity3.default;
    var _round3 = _interopRequireDefault(14);
    exports.Mixin = _round3.default;
    var _VectorMarkers3 = _interopRequireDefault(53);
    exports.CoordCache = _VectorMarkers3.default;
    var _subscribe2 = _interopRequireDefault(54);
    exports.DragListener = _subscribe2.default;
    var _promise2 = _interopRequireDefault(20);
    exports.Promise = _promise2.default;
    var _HashRouter3 = _interopRequireDefault(217);
    exports.TaskQueue = _HashRouter3.default;
    var _BrowserRouter3 = _interopRequireDefault(218);
    exports.RenderQueue = _BrowserRouter3.default;
    var _MemoryRouter3 = _interopRequireDefault(39);
    exports.Scroller = _MemoryRouter3.default;
    var _Route3 = _interopRequireDefault(19);
    exports.Theme = _Route3.default;
    var _Link3 = _interopRequireDefault(219);
    exports.DateComponent = _Link3.default;
    var _CacheLink3 = _interopRequireDefault(40);
    exports.InteractiveDateComponent = _CacheLink3.default;
    var _HistoryControl2 = _interopRequireDefault(220);
    exports.Calendar = _HistoryControl2.default;
    var _score2 = _interopRequireDefault(41);
    exports.View = _score2.default;
    var _serviceWorker2 = _interopRequireDefault(22);
    exports.defineView = _serviceWorker2.defineView;
    exports.getViewConfig = _serviceWorker2.getViewConfig;
    var _Icon3 = _interopRequireDefault(55);
    exports.DayTableMixin = _Icon3.default;
    var _version2 = _interopRequireDefault(56);
    exports.BusinessHourRenderer = _version2.default;
    var _behavior2 = _interopRequireDefault(42);
    exports.EventRenderer = _behavior2.default;
    var _computed2 = _interopRequireDefault(57);
    exports.FillRenderer = _computed2.default;
    var _reaction2 = _interopRequireDefault(58);
    exports.HelperRenderer = _reaction2.default;
    var _combobox2 = _interopRequireDefault(222);
    exports.ExternalDropping = _combobox2.default;
    var _option2 = _interopRequireDefault(223);
    exports.EventResizing = _option2.default;
    var _selectableGroup2 = _interopRequireDefault(59);
    exports.EventPointing = _selectableGroup2.default;
    var _createSelectable2 = _interopRequireDefault(224);
    exports.EventDragging = _createSelectable2.default;
    var _atan4 = _interopRequireDefault(225);
    exports.DateSelecting = _atan4.default;
    var _boxShadow2 = _interopRequireDefault(60);
    exports.StandardInteractionsMixin = _boxShadow2.default;
    var _clearfix2 = _interopRequireDefault(226);
    exports.AgendaView = _clearfix2.default;
    var _imageReplacement2 = _interopRequireDefault(227);
    exports.TimeGrid = _imageReplacement2.default;
    var _linearGradient2 = _interopRequireDefault(61);
    exports.DayGrid = _linearGradient2.default;
    var _horizontalCentering2 = _interopRequireDefault(62);
    exports.BasicView = _horizontalCentering2.default;
    var _verticalCentering2 = _interopRequireDefault(229);
    exports.MonthView = _verticalCentering2.default;
    var _aliapp2 = _interopRequireDefault(230);
    exports.ListView = _aliapp2.default;
  }, function(canCreateDiscussions, e, saveNotifs) {
    Object.defineProperty(e, "__esModule", {
      value : true
    });
    var _className2 = saveNotifs(5);
    var newOrg = function() {
      /**
       * @param {number} a
       * @param {number} b
       * @param {?} s
       * @return {undefined}
       */
      function Path(a, b, s) {
        /** @type {number} */
        this.start = a;
        this.end = b || null;
        this.unzonedRange = this.buildUnzonedRange(s);
      }
      return Path.parse = function(data, options) {
        var now = data.start || data.date;
        var d = data.end;
        if (!now) {
          return false;
        }
        var t = options.calendar;
        var start = t.moment(now);
        var end = d ? t.moment(d) : null;
        var allDay = data.allDay;
        var first = t.opt("forceEventDuration");
        return !!start.isValid() && (!end || end.isValid() && end.isAfter(start) || (end = null), null == allDay && null == (allDay = options.allDayDefault) && (allDay = t.opt("allDayDefault")), true === allDay ? (start.stripTime(), end && end.stripTime()) : false === allDay && (start.hasTime() || start.time(0), end && !end.hasTime() && end.time(0)), !end && first && (end = t.getDefaultEventEnd(!start.hasTime(), start)), new Path(start, end, t));
      }, Path.isStandardProp = function(undefined) {
        return "start" === undefined || "date" === undefined || "end" === undefined || "allDay" === undefined;
      }, Path.prototype.isAllDay = function() {
        return !(this.start.hasTime() || this.end && this.end.hasTime());
      }, Path.prototype.buildUnzonedRange = function(component) {
        var opts = this.start.clone().stripZone().valueOf();
        var position = this.getEnd(component).stripZone().valueOf();
        return new _className2.default(opts, position);
      }, Path.prototype.getEnd = function(cmp) {
        return this.end ? this.end.clone() : cmp.getDefaultEventEnd(this.isAllDay(), this.start);
      }, Path;
    }();
    e.default = newOrg;
  }, function(canCreateDiscussions, e, _interopRequireDefault) {
    Object.defineProperty(e, "__esModule", {
      value : true
    });
    var _deepAssign2 = _interopRequireDefault(5);
    var TcApp = _interopRequireDefault(35);
    var _step2 = _interopRequireDefault(211);
    var newOrg = function() {
      /**
       * @param {!Array} callback
       * @return {undefined}
       */
      function extractPresetLocal(callback) {
        this.eventInstances = callback || [];
      }
      return extractPresetLocal.prototype.getAllEventRanges = function(t) {
        return t ? this.sliceNormalRenderRanges(t) : this.eventInstances.map(TcApp.eventInstanceToEventRange);
      }, extractPresetLocal.prototype.sliceRenderRanges = function(from) {
        return this.isInverse() ? this.sliceInverseRenderRanges(from) : this.sliceNormalRenderRanges(from);
      }, extractPresetLocal.prototype.sliceNormalRenderRanges = function(b) {
        var i;
        var _this;
        var stepConfig;
        var elts = this.eventInstances;
        /** @type {!Array} */
        var newNodeLists = [];
        /** @type {number} */
        i = 0;
        for (; i < elts.length; i++) {
          _this = elts[i];
          if (stepConfig = _this.dateProfile.unzonedRange.intersect(b)) {
            newNodeLists.push(new _step2.default(stepConfig, _this.def, _this));
          }
        }
        return newNodeLists;
      }, extractPresetLocal.prototype.sliceInverseRenderRanges = function(arg0) {
        var variables = this.eventInstances.map(TcApp.eventInstanceToUnzonedRange);
        var index = this.getEventDef();
        return variables = _deepAssign2.default.invertRanges(variables, arg0), variables.map(function(stepConfig) {
          return new _step2.default(stepConfig, index);
        });
      }, extractPresetLocal.prototype.isInverse = function() {
        return this.getEventDef().hasInverseRendering();
      }, extractPresetLocal.prototype.getEventDef = function() {
        return this.explicitEventDef || this.eventInstances[0].def;
      }, extractPresetLocal;
    }();
    e.default = newOrg;
  }, function(canCreateDiscussions, child, require) {
    Object.defineProperty(child, "__esModule", {
      value : true
    });
    var $ = require(3);
    var current = function() {
      /**
       * @param {string} a
       * @return {undefined}
       */
      function FMSquareWave(a) {
        /** @type {string} */
        this.optionsManager = a;
        this.processIconOverride();
      }
      return FMSquareWave.prototype.processIconOverride = function() {
        if (this.iconOverrideOption) {
          this.setIconOverride(this.optionsManager.get(this.iconOverrideOption));
        }
      }, FMSquareWave.prototype.setIconOverride = function(collection) {
        var modelPage;
        var prop;
        if ($.isPlainObject(collection)) {
          modelPage = $.extend({}, this.iconClasses);
          for (prop in collection) {
            modelPage[prop] = this.applyIconOverridePrefix(collection[prop]);
          }
          this.iconClasses = modelPage;
        } else {
          if (false === collection) {
            this.iconClasses = {};
          }
        }
      }, FMSquareWave.prototype.applyIconOverridePrefix = function(t) {
        var p = this.iconOverridePrefix;
        return p && 0 !== t.indexOf(p) && (t = p + t), t;
      }, FMSquareWave.prototype.getClass = function(name) {
        return this.classes[name] || "";
      }, FMSquareWave.prototype.getIconClass = function(type) {
        var cls = this.iconClasses[type];
        return cls ? this.baseIconClass + " " + cls : "";
      }, FMSquareWave.prototype.getCustomButtonIconClass = function(a) {
        var x;
        return this.iconOverrideCustomButtonOption && (x = a[this.iconOverrideCustomButtonOption]) ? this.baseIconClass + " " + this.applyIconOverridePrefix(x) : "";
      }, FMSquareWave;
    }();
    child.default = current;
    current.prototype.classes = {};
    current.prototype.iconClasses = {};
    /** @type {string} */
    current.prototype.baseIconClass = "";
    /** @type {string} */
    current.prototype.iconOverridePrefix = "";
  }, function(canCreateDiscussions, o, require) {
    /**
     * @param {?} i
     * @param {!Function} value
     * @return {undefined}
     */
    function cb(i, value) {
      /**
       * @param {!Function} func
       * @return {?}
       */
      i.then = function(func) {
        return "function" == typeof func ? ret.resolve(func(value)) : i;
      };
    }
    /**
     * @param {?} instance
     * @return {undefined}
     */
    function callback(instance) {
      /**
       * @param {!Function} onRes
       * @param {!Function} onRej
       * @return {?}
       */
      instance.then = function(onRes, onRej) {
        return "function" == typeof onRej && onRej(), instance;
      };
    }
    Object.defineProperty(o, "__esModule", {
      value : true
    });
    var $ = require(3);
    var ret = {
      construct : function(callback) {
        var logInDeferred = $.Deferred();
        var c = logInDeferred.promise();
        return "function" == typeof callback && callback(function(h) {
          logInDeferred.resolve(h);
          cb(c, h);
        }, function() {
          logInDeferred.reject();
          callback(c);
        }), c;
      },
      resolve : function(a) {
        var e = $.Deferred().resolve(a);
        var n = e.promise();
        return cb(n, a), n;
      },
      reject : function() {
        var totalDeferred = $.Deferred().reject();
        var value = totalDeferred.promise();
        return callback(value), value;
      }
    };
    o.default = ret;
  }, function(canCreateDiscussions, exports, require) {
    Object.defineProperty(exports, "__esModule", {
      value : true
    });
    var jQuery = require(3);
    var config = require(16);
    var o = require(11);
    var a = require(7);
    /** @type {number} */
    config.touchMouseIgnoreWait = 500;
    /** @type {null} */
    var $allFields = null;
    /** @type {number} */
    var l = 0;
    var Log = function() {
      /**
       * @return {undefined}
       */
      function GestureRecognizer() {
        /** @type {boolean} */
        this.isTouching = false;
        /** @type {number} */
        this.mouseIgnoreDepth = 0;
      }
      return GestureRecognizer.get = function() {
        return $allFields || ($allFields = new GestureRecognizer, $allFields.bind()), $allFields;
      }, GestureRecognizer.needed = function() {
        GestureRecognizer.get();
        l++;
      }, GestureRecognizer.unneeded = function() {
        if (!--l) {
          $allFields.unbind();
          /** @type {null} */
          $allFields = null;
        }
      }, GestureRecognizer.prototype.bind = function() {
        var self = this;
        this.listenTo(jQuery(document), {
          touchstart : this.handleTouchStart,
          touchcancel : this.handleTouchCancel,
          touchend : this.handleTouchEnd,
          mousedown : this.handleMouseDown,
          mousemove : this.handleMouseMove,
          mouseup : this.handleMouseUp,
          click : this.handleClick,
          selectstart : this.handleSelectStart,
          contextmenu : this.handleContextMenu
        });
        window.addEventListener("touchmove", this.handleTouchMoveProxy = function(type) {
          self.handleTouchMove(jQuery.Event(type));
        }, {
          passive : false
        });
        window.addEventListener("scroll", this.handleScrollProxy = function(type) {
          self.handleScroll(jQuery.Event(type));
        }, true);
      }, GestureRecognizer.prototype.unbind = function() {
        this.stopListeningTo(jQuery(document));
        window.removeEventListener("touchmove", this.handleTouchMoveProxy);
        window.removeEventListener("scroll", this.handleScrollProxy, true);
      }, GestureRecognizer.prototype.handleTouchStart = function(event) {
        this.stopTouch(event, true);
        /** @type {boolean} */
        this.isTouching = true;
        this.trigger("touchstart", event);
      }, GestureRecognizer.prototype.handleTouchMove = function(event) {
        if (this.isTouching) {
          this.trigger("touchmove", event);
        }
      }, GestureRecognizer.prototype.handleTouchCancel = function(event) {
        if (this.isTouching) {
          this.trigger("touchcancel", event);
          this.stopTouch(event);
        }
      }, GestureRecognizer.prototype.handleTouchEnd = function(key) {
        this.stopTouch(key);
      }, GestureRecognizer.prototype.handleMouseDown = function(e) {
        if (!this.shouldIgnoreMouse()) {
          this.trigger("mousedown", e);
        }
      }, GestureRecognizer.prototype.handleMouseMove = function(event) {
        if (!this.shouldIgnoreMouse()) {
          this.trigger("mousemove", event);
        }
      }, GestureRecognizer.prototype.handleMouseUp = function(x) {
        if (!this.shouldIgnoreMouse()) {
          this.trigger("mouseup", x);
        }
      }, GestureRecognizer.prototype.handleClick = function(status) {
        if (!this.shouldIgnoreMouse()) {
          this.trigger("click", status);
        }
      }, GestureRecognizer.prototype.handleSelectStart = function(e) {
        this.trigger("selectstart", e);
      }, GestureRecognizer.prototype.handleContextMenu = function(event) {
        this.trigger("contextmenu", event);
      }, GestureRecognizer.prototype.handleScroll = function(event) {
        this.trigger("scroll", event);
      }, GestureRecognizer.prototype.stopTouch = function(name, isPk) {
        if (void 0 === isPk) {
          /** @type {boolean} */
          isPk = false;
        }
        if (this.isTouching) {
          /** @type {boolean} */
          this.isTouching = false;
          this.trigger("touchend", name);
          if (!isPk) {
            this.startTouchMouseIgnore();
          }
        }
      }, GestureRecognizer.prototype.startTouchMouseIgnore = function() {
        var t = this;
        var after = config.touchMouseIgnoreWait;
        if (after) {
          this.mouseIgnoreDepth++;
          setTimeout(function() {
            t.mouseIgnoreDepth--;
          }, after);
        }
      }, GestureRecognizer.prototype.shouldIgnoreMouse = function() {
        return this.isTouching || Boolean(this.mouseIgnoreDepth);
      }, GestureRecognizer;
    }();
    exports.default = Log;
    a.default.mixInto(Log);
    o.default.mixInto(Log);
  }, function(canCreateDiscussions, design, require) {
    /**
     * @param {string} viewName
     * @param {?} data
     * @return {undefined}
     */
    function legacyDisplay(viewName, data) {
      design.viewHash[viewName] = data;
    }
    /**
     * @param {?} view
     * @return {?}
     */
    function normal(view) {
      return design.viewHash[view];
    }
    Object.defineProperty(design, "__esModule", {
      value : true
    });
    var designDoc = require(16);
    design.viewHash = {};
    designDoc.views = design.viewHash;
    /** @type {function(string, ?): undefined} */
    design.defineView = legacyDisplay;
    /** @type {function(?): ?} */
    design.getViewConfig = normal;
  }, function(canCreateDiscussions, e, require) {
    /**
     * @param {!Object} prev
     * @param {!Object} next
     * @return {?}
     */
    function notify(prev, next) {
      return !prev && !next || !(!prev || !next) && (prev.component === next.component && callback(prev, next) && callback(next, prev));
    }
    /**
     * @param {!Object} c
     * @param {!Object} d
     * @return {?}
     */
    function callback(c, d) {
      var i;
      for (i in c) {
        if (!/^(component|left|right|top|bottom)$/.test(i) && c[i] !== d[i]) {
          return false;
        }
      }
      return true;
    }
    Object.defineProperty(e, "__esModule", {
      value : true
    });
    var Util = require(2);
    var s = require(4);
    var a = require(54);
    var newOrg = function(_super) {
      /**
       * @param {string} value
       * @param {?} props
       * @return {?}
       */
      function Editor(value, props) {
        var x = _super.call(this, props) || this;
        return x.component = value, x;
      }
      return Util.__extends(Editor, _super), Editor.prototype.handleInteractionStart = function(ev) {
        var x;
        var p;
        var point;
        var value = this.subjectEl;
        this.component.hitsNeeded();
        this.computeScrollBounds();
        if (ev) {
          p = {
            left : s.getEvX(ev),
            top : s.getEvY(ev)
          };
          point = p;
          if (value) {
            x = s.getOuterRect(value);
            point = s.constrainPoint(point, x);
          }
          this.origHit = this.queryHit(point.left, point.top);
          if (value && this.options.subjectCenter) {
            if (this.origHit) {
              x = s.intersectRects(this.origHit, x) || x;
            }
            point = s.getRectCenter(x);
          }
          this.coordAdjust = s.diffPoints(point, p);
        } else {
          /** @type {null} */
          this.origHit = null;
          /** @type {null} */
          this.coordAdjust = null;
        }
        _super.prototype.handleInteractionStart.call(this, ev);
      }, Editor.prototype.handleDragStart = function(ev) {
        var hit;
        _super.prototype.handleDragStart.call(this, ev);
        if (hit = this.queryHit(s.getEvX(ev), s.getEvY(ev))) {
          this.handleHitOver(hit);
        }
      }, Editor.prototype.handleDrag = function(e, id, ev) {
        var hit;
        _super.prototype.handleDrag.call(this, e, id, ev);
        hit = this.queryHit(s.getEvX(ev), s.getEvY(ev));
        if (!notify(hit, this.hit)) {
          if (this.hit) {
            this.handleHitOut();
          }
          if (hit) {
            this.handleHitOver(hit);
          }
        }
      }, Editor.prototype.handleDragEnd = function(event) {
        this.handleHitDone();
        _super.prototype.handleDragEnd.call(this, event);
      }, Editor.prototype.handleHitOver = function(hit) {
        var isOrig = notify(hit, this.origHit);
        /** @type {!Object} */
        this.hit = hit;
        this.trigger("hitOver", this.hit, isOrig, this.origHit);
      }, Editor.prototype.handleHitOut = function() {
        if (this.hit) {
          this.trigger("hitOut", this.hit);
          this.handleHitDone();
          /** @type {null} */
          this.hit = null;
        }
      }, Editor.prototype.handleHitDone = function() {
        if (this.hit) {
          this.trigger("hitDone", this.hit);
        }
      }, Editor.prototype.handleInteractionEnd = function(key, level) {
        _super.prototype.handleInteractionEnd.call(this, key, level);
        /** @type {null} */
        this.origHit = null;
        /** @type {null} */
        this.hit = null;
        this.component.hitsNotNeeded();
      }, Editor.prototype.handleScrollEnd = function() {
        _super.prototype.handleScrollEnd.call(this);
        if (this.isDragging) {
          this.component.releaseHits();
          this.component.prepareHits();
        }
      }, Editor.prototype.queryHit = function(left, top) {
        return this.coordAdjust && (left = left + this.coordAdjust.left, top = top + this.coordAdjust.top), this.component.queryHit(left, top);
      }, Editor;
    }(a.default);
    e.default = newOrg;
  }, , , , , , , , function(canCreateDiscussions, self, require) {
    /**
     * @param {!Object} obj
     * @return {undefined}
     */
    function inject(obj) {
      $.each(fields_to_add, function(property, extend) {
        if (null == obj[property]) {
          obj[property] = extend(obj);
        }
      });
    }
    /**
     * @param {?} key
     * @param {?} dpLangCode
     * @param {!Object} dpOptions
     * @return {undefined}
     */
    function init(key, dpLangCode, dpOptions) {
      var fcOptions = self.localeOptionHash[key] || (self.localeOptionHash[key] = {});
      fcOptions.isRTL = dpOptions.isRTL;
      fcOptions.weekNumberTitle = dpOptions.weekHeader;
      $.each(defaultOptions, function(name, func) {
        fcOptions[name] = func(dpOptions);
      });
      var datepicker = $.datepicker;
      if (datepicker) {
        datepicker.regional[dpLangCode] = datepicker.regional[key] = dpOptions;
        datepicker.regional.en = datepicker.regional[""];
        datepicker.setDefaults(dpOptions);
      }
    }
    /**
     * @param {string} language
     * @param {?} domain
     * @return {undefined}
     */
    function get(language, domain) {
      var result;
      var filename;
      result = self.localeOptionHash[language] || (self.localeOptionHash[language] = {});
      if (domain) {
        result = self.localeOptionHash[language] = options.mergeOptions([result, domain]);
      }
      filename = factory(language);
      $.each(output_script_array, function(name, callback) {
        if (null == result[name]) {
          result[name] = callback(filename, result);
        }
      });
      /** @type {string} */
      options.globalDefaults.locale = language;
    }
    /**
     * @param {string} key
     * @return {?}
     */
    function factory(key) {
      return moment.localeData(key) || moment.localeData("en");
    }
    Object.defineProperty(self, "__esModule", {
      value : true
    });
    var $ = require(3);
    var moment = require(0);
    var manifest = require(16);
    var options = require(32);
    var text = require(4);
    self.localeOptionHash = {};
    manifest.locales = self.localeOptionHash;
    var defaultOptions = {
      buttonText : function(o) {
        return {
          prev : text.stripHtmlEntities(o.prevText),
          next : text.stripHtmlEntities(o.nextText),
          today : text.stripHtmlEntities(o.currentText)
        };
      },
      monthYearFormat : function(dpOptions) {
        return dpOptions.showMonthAfterYear ? "YYYY[" + dpOptions.yearSuffix + "] MMMM" : "MMMM YYYY[" + dpOptions.yearSuffix + "]";
      }
    };
    var output_script_array = {
      dayOfMonthFormat : function(momOptions, fcOptions) {
        var s = momOptions.longDateFormat("l");
        return s = s.replace(/^Y+[^\w\s]*|[^\w\s]*Y+$/g, ""), fcOptions.isRTL ? s = s + " ddd" : s = "ddd " + s, s;
      },
      mediumTimeFormat : function(momOptions) {
        return momOptions.longDateFormat("LT").replace(/\s*a$/i, "a");
      },
      smallTimeFormat : function(momOptions) {
        return momOptions.longDateFormat("LT").replace(":mm", "(:mm)").replace(/(\Wmm)$/, "($1)").replace(/\s*a$/i, "a");
      },
      extraSmallTimeFormat : function(momOptions) {
        return momOptions.longDateFormat("LT").replace(":mm", "(:mm)").replace(/(\Wmm)$/, "($1)").replace(/\s*a$/i, "t");
      },
      hourFormat : function(momOptions) {
        return momOptions.longDateFormat("LT").replace(":mm", "").replace(/(\Wmm)$/, "").replace(/\s*a$/i, "a");
      },
      noMeridiemTimeFormat : function(momOptions) {
        return momOptions.longDateFormat("LT").replace(/\s*a$/i, "");
      }
    };
    var fields_to_add = {
      smallDayDateFormat : function(options) {
        return options.isRTL ? "D dd" : "dd D";
      },
      weekFormat : function(options) {
        return options.isRTL ? "w[ " + options.weekNumberTitle + "]" : "[" + options.weekNumberTitle + " ]w";
      },
      smallWeekFormat : function(options) {
        return options.isRTL ? "w[" + options.weekNumberTitle + "]" : "[" + options.weekNumberTitle + "]w";
      }
    };
    /** @type {function(!Object): undefined} */
    self.populateInstanceComputableOptions = inject;
    /** @type {function(?, ?, !Object): undefined} */
    self.datepickerLocale = init;
    /** @type {function(string, ?): undefined} */
    self.locale = get;
    /** @type {function(string): ?} */
    self.getMomentLocaleData = factory;
    get("en", options.englishDefaults);
  }, function(canCreateDiscussions, self, require) {
    /**
     * @param {!Array} props
     * @return {?}
     */
    function StoreData(props) {
      return utils.mergeProps(props, keys);
    }
    Object.defineProperty(self, "__esModule", {
      value : true
    });
    var utils = require(4);
    self.globalDefaults = {
      titleRangeSeparator : " \u2013 ",
      monthYearFormat : "MMMM YYYY",
      defaultTimedEventDuration : "02:00:00",
      defaultAllDayEventDuration : {
        days : 1
      },
      forceEventDuration : false,
      nextDayThreshold : "09:00:00",
      columnHeader : true,
      defaultView : "month",
      aspectRatio : 1.35,
      header : {
        left : "title",
        center : "",
        right : "today prev,next"
      },
      weekends : true,
      weekNumbers : false,
      weekNumberTitle : "W",
      weekNumberCalculation : "local",
      scrollTime : "06:00:00",
      minTime : "00:00:00",
      maxTime : "24:00:00",
      showNonCurrentDates : true,
      lazyFetching : true,
      startParam : "start",
      endParam : "end",
      timezoneParam : "timezone",
      timezone : false,
      locale : null,
      isRTL : false,
      buttonText : {
        prev : "prev",
        next : "next",
        prevYear : "prev year",
        nextYear : "next year",
        year : "year",
        today : "today",
        month : "month",
        week : "week",
        day : "day"
      },
      allDayText : "all-day",
      agendaEventMinHeight : 0,
      theme : false,
      dragOpacity : .75,
      dragRevertDuration : 500,
      dragScroll : true,
      unselectAuto : true,
      dropAccept : "*",
      eventOrder : "title",
      eventLimit : false,
      eventLimitText : "more",
      eventLimitClick : "popover",
      dayPopoverFormat : "LL",
      handleWindowResize : true,
      windowResizeDelay : 100,
      longPressDelay : 1e3
    };
    self.englishDefaults = {
      dayPopoverFormat : "dddd, MMMM D"
    };
    self.rtlDefaults = {
      header : {
        left : "next,prev today",
        center : "",
        right : "title"
      },
      buttonIcons : {
        prev : "right-single-arrow",
        next : "left-single-arrow",
        prevYear : "right-double-arrow",
        nextYear : "left-double-arrow"
      },
      themeButtonIcons : {
        prev : "circle-triangle-e",
        next : "circle-triangle-w",
        nextYear : "seek-prev",
        prevYear : "seek-next"
      }
    };
    /** @type {!Array} */
    var keys = ["header", "footer", "buttonText", "buttonIcons", "themeButtonIcons"];
    /** @type {function(!Array): ?} */
    self.mergeOptions = StoreData;
  }, function(canCreateDiscussions, e, require) {
    Object.defineProperty(e, "__esModule", {
      value : true
    });
    var Util = require(2);
    var $ = require(4);
    var newOrg = function() {
      /**
       * @return {undefined}
       */
      function Collection() {
      }
      return Collection.extend = function(value) {
        var result = function(_super) {
          /**
           * @return {?}
           */
          function Controller() {
            return null !== _super && _super.apply(this, arguments) || this;
          }
          return Util.__extends(Controller, _super), Controller;
        }(this);
        return $.copyOwnProps(value, result.prototype), result;
      }, Collection.mixin = function(data) {
        $.copyOwnProps(data, this.prototype);
      }, Collection;
    }();
    e.default = newOrg;
  }, function(canCreateDiscussions, group, createElement) {
    Object.defineProperty(group, "__esModule", {
      value : true
    });
    var o = createElement(3);
    var a = createElement(208);
    var results = function() {
      /**
       * @param {!Object} data
       * @return {undefined}
       */
      function self(data) {
        /** @type {!Object} */
        this.source = data;
        /** @type {!Array} */
        this.className = [];
        this.miscProps = {};
      }
      return self.parse = function(data, source) {
        var gcmPush = new this(source);
        return !!gcmPush.applyProps(data) && gcmPush;
      }, self.normalizeId = function(parentId) {
        return String(parentId);
      }, self.generateId = function() {
        return "_fc" + self.uuid++;
      }, self.prototype.clone = function() {
        var event = new this.constructor(this.source);
        return event.id = this.id, event.rawId = this.rawId, event.uid = this.uid, self.copyVerbatimStandardProps(this, event), event.className = this.className.slice(), event.miscProps = o.extend({}, this.miscProps), event;
      }, self.prototype.hasInverseRendering = function() {
        return "inverse-background" === this.getRendering();
      }, self.prototype.hasBgRendering = function() {
        var undefined = this.getRendering();
        return "inverse-background" === undefined || "background" === undefined;
      }, self.prototype.getRendering = function() {
        return null != this.rendering ? this.rendering : this.source.rendering;
      }, self.prototype.getConstraint = function() {
        return null != this.constraint ? this.constraint : null != this.source.constraint ? this.source.constraint : this.source.calendar.opt("eventConstraint");
      }, self.prototype.getOverlap = function() {
        return null != this.overlap ? this.overlap : null != this.source.overlap ? this.source.overlap : this.source.calendar.opt("eventOverlap");
      }, self.prototype.isStartExplicitlyEditable = function() {
        return null != this.startEditable ? this.startEditable : this.source.startEditable;
      }, self.prototype.isDurationExplicitlyEditable = function() {
        return null != this.durationEditable ? this.durationEditable : this.source.durationEditable;
      }, self.prototype.isExplicitlyEditable = function() {
        return null != this.editable ? this.editable : this.source.editable;
      }, self.prototype.toLegacy = function() {
        var data = o.extend({}, this.miscProps);
        return data._id = this.uid, data.source = this.source, data.className = this.className.slice(), data.allDay = this.isAllDay(), null != this.rawId && (data.id = this.rawId), self.copyVerbatimStandardProps(this, data), data;
      }, self.prototype.applyManualStandardProps = function(options) {
        return null != options.id ? this.id = self.normalizeId(this.rawId = options.id) : this.id = self.generateId(), null != options._id ? this.uid = String(options._id) : this.uid = self.generateId(), o.isArray(options.className) && (this.className = options.className), "string" == typeof options.className && (this.className = options.className.split(/\s+/)), true;
      }, self.prototype.applyMiscProps = function(topic) {
        o.extend(this.miscProps, topic);
      }, self.uuid = 0, self.defineStandardProps = a.default.defineStandardProps, self.copyVerbatimStandardProps = a.default.copyVerbatimStandardProps, self;
    }();
    group.default = results;
    a.default.mixInto(results);
    results.defineStandardProps({
      _id : false,
      id : false,
      className : false,
      source : false,
      title : true,
      url : true,
      rendering : true,
      constraint : true,
      overlap : true,
      editable : true,
      startEditable : true,
      durationEditable : true,
      color : true,
      backgroundColor : true,
      borderColor : true,
      textColor : true
    });
  }, function(canCreateDiscussions, data, require) {
    /**
     * @param {!Array} e
     * @param {?} a
     * @return {?}
     */
    function i(e, a) {
      var i;
      /** @type {!Array} */
      var str = [];
      /** @type {number} */
      i = 0;
      for (; i < e.length; i++) {
        str.push.apply(str, e[i].buildInstances(a));
      }
      return str;
    }
    /**
     * @param {!Object} config
     * @return {?}
     */
    function stats(config) {
      return new redis.default(config.dateProfile.unzonedRange, config.def, config);
    }
    /**
     * @param {?} self
     * @return {?}
     */
    function process(self) {
      return new App.default(new storage.default(self.unzonedRange, self.eventDef.isAllDay()), self.eventDef, self.eventInstance);
    }
    /**
     * @param {?} callback
     * @return {?}
     */
    function oembedRender(callback) {
      return callback.dateProfile.unzonedRange;
    }
    /**
     * @param {?} selector
     * @return {?}
     */
    function clickWithWebdriver(selector) {
      return selector.componentFootprint;
    }
    Object.defineProperty(data, "__esModule", {
      value : true
    });
    var redis = require(211);
    var App = require(36);
    var storage = require(12);
    /** @type {function(!Array, ?): ?} */
    data.eventDefsToEventInstances = i;
    /** @type {function(!Object): ?} */
    data.eventInstanceToEventRange = stats;
    /** @type {function(?): ?} */
    data.eventRangeToEventFootprint = process;
    /** @type {function(?): ?} */
    data.eventInstanceToUnzonedRange = oembedRender;
    /** @type {function(?): ?} */
    data.eventFootprintToComponentFootprint = clickWithWebdriver;
  }, function(canCreateDiscussions, e) {
    Object.defineProperty(e, "__esModule", {
      value : true
    });
    var newOrg = function() {
      /**
       * @param {!Object} eta
       * @param {!Object} lmbda
       * @param {!Object} n
       * @return {undefined}
       */
      function updateMiniBatch(eta, lmbda, n) {
        /** @type {!Object} */
        this.componentFootprint = eta;
        /** @type {!Object} */
        this.eventDef = lmbda;
        if (n) {
          /** @type {!Object} */
          this.eventInstance = n;
        }
      }
      return updateMiniBatch.prototype.getEventLegacy = function() {
        return (this.eventInstance || this.eventDef).toLegacy();
      }, updateMiniBatch;
    }();
    e.default = newOrg;
  }, function(canCreateDiscussions, e, require) {
    Object.defineProperty(e, "__esModule", {
      value : true
    });
    var assert = require(4);
    var ModuleParser = require(17);
    var o = require(34);
    var s = require(50);
    var m = require(13);
    var newOrg = function() {
      /**
       * @return {undefined}
       */
      function Model() {
      }
      return Model.createFromRawProps = function(prop, obj, i) {
        var k;
        var line;
        var n;
        var a;
        var p = prop.def;
        var result = {};
        var f = {};
        var out = {};
        var uboard = {};
        /** @type {null} */
        var filename = null;
        /** @type {null} */
        var c = null;
        for (k in obj) {
          if (ModuleParser.default.isStandardProp(k)) {
            result[k] = obj[k];
          } else {
            if (p.isStandardProp(k)) {
              f[k] = obj[k];
            } else {
              if (p.miscProps[k] !== obj[k]) {
                out[k] = obj[k];
              }
            }
          }
        }
        return line = ModuleParser.default.parse(result, p.source), line && (n = s.default.createFromDiff(prop.dateProfile, line, i)), f.id !== p.id && (filename = f.id), assert.isArraysEqual(f.className, p.className) || (c = f.className), o.default.copyVerbatimStandardProps(f, uboard), a = new Model, a.eventDefId = filename, a.className = c, a.verbatimStandardProps = uboard, a.miscProps = out, n && (a.dateMutation = n), a;
      }, Model.prototype.mutateSingle = function(a) {
        var b;
        return this.dateMutation && (b = a.dateProfile, a.dateProfile = this.dateMutation.buildNewDateProfile(b, a.source.calendar)), null != this.eventDefId && (a.id = o.default.normalizeId(a.rawId = this.eventDefId)), this.className && (a.className = this.className), this.verbatimStandardProps && m.default.copyVerbatimStandardProps(this.verbatimStandardProps, a), this.miscProps && a.applyMiscProps(this.miscProps), b ? function() {
          a.dateProfile = b;
        } : function() {
        };
      }, Model.prototype.setDateMutation = function(t) {
        if (t && !t.isEmpty()) {
          /** @type {string} */
          this.dateMutation = t;
        } else {
          /** @type {null} */
          this.dateMutation = null;
        }
      }, Model.prototype.isEmpty = function() {
        return !this.dateMutation;
      }, Model;
    }();
    e.default = newOrg;
  }, function(canCreateDiscussions, cli) {
    Object.defineProperty(cli, "__esModule", {
      value : true
    });
    cli.default = {
      sourceClasses : [],
      registerClass : function(type) {
        this.sourceClasses.unshift(type);
      },
      parse : function(type, a) {
        var i;
        var temp;
        var bucket = this.sourceClasses;
        /** @type {number} */
        i = 0;
        for (; i < bucket.length; i++) {
          if (temp = bucket[i].parse(type, a)) {
            return temp;
          }
        }
      }
    };
  }, function(canCreateDiscussions, e, $) {
    Object.defineProperty(e, "__esModule", {
      value : true
    });
    var instance = $(2);
    var $compile = $(3);
    var item = $(4);
    var s = $(33);
    var newOrg = function(_super) {
      /**
       * @param {!Object} props
       * @return {?}
       */
      function editor(props) {
        var me = _super.call(this) || this;
        return props = props || {}, me.overflowX = props.overflowX || props.overflow || "auto", me.overflowY = props.overflowY || props.overflow || "auto", me;
      }
      return instance.__extends(editor, _super), editor.prototype.render = function() {
        this.el = this.renderEl();
        this.applyOverflow();
      }, editor.prototype.renderEl = function() {
        return this.scrollEl = $compile('<div class="fc-scroller"></div>');
      }, editor.prototype.clear = function() {
        this.setHeight("auto");
        this.applyOverflow();
      }, editor.prototype.destroy = function() {
        this.el.remove();
      }, editor.prototype.applyOverflow = function() {
        this.scrollEl.css({
          "overflow-x" : this.overflowX,
          "overflow-y" : this.overflowY
        });
      }, editor.prototype.lockOverflow = function(scrollbarWidths) {
        var overflowX = this.overflowX;
        var overflowY = this.overflowY;
        scrollbarWidths = scrollbarWidths || this.getScrollbarWidths();
        if ("auto" === overflowX) {
          /** @type {string} */
          overflowX = scrollbarWidths.top || scrollbarWidths.bottom || this.scrollEl[0].scrollWidth - 1 > this.scrollEl[0].clientWidth ? "scroll" : "hidden";
        }
        if ("auto" === overflowY) {
          /** @type {string} */
          overflowY = scrollbarWidths.left || scrollbarWidths.right || this.scrollEl[0].scrollHeight - 1 > this.scrollEl[0].clientHeight ? "scroll" : "hidden";
        }
        this.scrollEl.css({
          "overflow-x" : overflowX,
          "overflow-y" : overflowY
        });
      }, editor.prototype.setHeight = function(height) {
        this.scrollEl.height(height);
      }, editor.prototype.getScrollTop = function() {
        return this.scrollEl.scrollTop();
      }, editor.prototype.setScrollTop = function(top) {
        this.scrollEl.scrollTop(top);
      }, editor.prototype.getClientWidth = function() {
        return this.scrollEl[0].clientWidth;
      }, editor.prototype.getClientHeight = function() {
        return this.scrollEl[0].clientHeight;
      }, editor.prototype.getScrollbarWidths = function() {
        return item.getScrollbarWidths(this.scrollEl);
      }, editor;
    }(s.default);
    e.default = newOrg;
  }, function(canCreateDiscussions, e, require) {
    Object.defineProperty(e, "__esModule", {
      value : true
    });
    var util = require(2);
    var $ = require(3);
    var view = require(4);
    var s = require(219);
    var a = require(21);
    var newOrg = function(_super) {
      /**
       * @param {?} animationDefinitions
       * @param {?} playSequentially
       * @return {?}
       */
      function Animation(animationDefinitions, playSequentially) {
        var s = _super.call(this, animationDefinitions, playSequentially) || this;
        return s.segSelector = ".fc-event-container > *", s.dateSelectingClass && (s.dateClicking = new s.dateClickingClass(s)), s.dateSelectingClass && (s.dateSelecting = new s.dateSelectingClass(s)), s.eventPointingClass && (s.eventPointing = new s.eventPointingClass(s)), s.eventDraggingClass && s.eventPointing && (s.eventDragging = new s.eventDraggingClass(s, s.eventPointing)), s.eventResizingClass && s.eventPointing && (s.eventResizing = new s.eventResizingClass(s, s.eventPointing)), s.externalDroppingClass && 
        (s.externalDropping = new s.externalDroppingClass(s)), s;
      }
      return util.__extends(Animation, _super), Animation.prototype.setElement = function(moduleObjects) {
        _super.prototype.setElement.call(this, moduleObjects);
        if (this.dateClicking) {
          this.dateClicking.bindToEl(moduleObjects);
        }
        if (this.dateSelecting) {
          this.dateSelecting.bindToEl(moduleObjects);
        }
        this.bindAllSegHandlersToEl(moduleObjects);
      }, Animation.prototype.removeElement = function() {
        this.endInteractions();
        _super.prototype.removeElement.call(this);
      }, Animation.prototype.executeEventUnrender = function() {
        this.endInteractions();
        _super.prototype.executeEventUnrender.call(this);
      }, Animation.prototype.bindGlobalHandlers = function() {
        _super.prototype.bindGlobalHandlers.call(this);
        if (this.externalDropping) {
          this.externalDropping.bindToDocument();
        }
      }, Animation.prototype.unbindGlobalHandlers = function() {
        _super.prototype.unbindGlobalHandlers.call(this);
        if (this.externalDropping) {
          this.externalDropping.unbindFromDocument();
        }
      }, Animation.prototype.bindDateHandlerToEl = function(moduleObjects, event, type) {
        var _this = this;
        this.el.on(event, function(e) {
          if (!$(e.target).is(_this.segSelector + ":not(.fc-helper)," + _this.segSelector + ":not(.fc-helper) *,.fc-more,a[data-goto]")) {
            return type.call(_this, e);
          }
        });
      }, Animation.prototype.bindAllSegHandlersToEl = function(moduleObjects) {
        [this.eventPointing, this.eventDragging, this.eventResizing].forEach(function(Promise) {
          if (Promise) {
            Promise.bindToEl(moduleObjects);
          }
        });
      }, Animation.prototype.bindSegHandlerToEl = function(el, name, handler) {
        var currTarget = this;
        el.on(name, this.segSelector, function(event) {
          var el = $(event.currentTarget);
          if (!el.is(".fc-helper")) {
            var seg = el.data("fc-seg");
            if (seg && !currTarget.shouldIgnoreEventPointing()) {
              return handler.call(currTarget, seg, event);
            }
          }
        });
      }, Animation.prototype.shouldIgnoreMouse = function() {
        return a.default.get().shouldIgnoreMouse();
      }, Animation.prototype.shouldIgnoreTouch = function() {
        var view = this._getView();
        return view.isSelected || view.selectedEvent;
      }, Animation.prototype.shouldIgnoreEventPointing = function() {
        return this.eventDragging && this.eventDragging.isDragging || this.eventResizing && this.eventResizing.isResizing;
      }, Animation.prototype.canStartSelection = function(item, evt) {
        return view.getEvIsTouch(evt) && !this.canStartResize(item, evt) && (this.isEventDefDraggable(item.footprint.eventDef) || this.isEventDefResizable(item.footprint.eventDef));
      }, Animation.prototype.canStartDrag = function(item, x) {
        return !this.canStartResize(item, x) && this.isEventDefDraggable(item.footprint.eventDef);
      }, Animation.prototype.canStartResize = function(item, e) {
        var v = this._getView();
        var search = item.footprint.eventDef;
        return (!view.getEvIsTouch(e) || v.isEventDefSelected(search)) && this.isEventDefResizable(search) && $(e.target).is(".fc-resizer");
      }, Animation.prototype.endInteractions = function() {
        [this.dateClicking, this.dateSelecting, this.eventPointing, this.eventDragging, this.eventResizing].forEach(function(persistedSelection) {
          if (persistedSelection) {
            persistedSelection.end();
          }
        });
      }, Animation.prototype.isEventDefDraggable = function(value) {
        return this.isEventDefStartEditable(value);
      }, Animation.prototype.isEventDefStartEditable = function(props) {
        var expr = props.isStartExplicitlyEditable();
        return null == expr && null == (expr = this.opt("eventStartEditable")) && (expr = this.isEventDefGenerallyEditable(props)), expr;
      }, Animation.prototype.isEventDefGenerallyEditable = function(prop) {
        var separatorAfterItem = prop.isExplicitlyEditable();
        return null == separatorAfterItem && (separatorAfterItem = this.opt("editable")), separatorAfterItem;
      }, Animation.prototype.isEventDefResizableFromStart = function(event) {
        return this.opt("eventResizableFromStart") && this.isEventDefResizable(event);
      }, Animation.prototype.isEventDefResizableFromEnd = function(source) {
        return this.isEventDefResizable(source);
      }, Animation.prototype.isEventDefResizable = function(controller) {
        var object_searchCourseContent = controller.isDurationExplicitlyEditable();
        return null == object_searchCourseContent && null == (object_searchCourseContent = this.opt("eventDurationEditable")) && (object_searchCourseContent = this.isEventDefGenerallyEditable(controller)), object_searchCourseContent;
      }, Animation.prototype.diffDates = function(b, a) {
        return this.largeUnit ? view.diffByUnit(b, a, this.largeUnit) : view.diffDayTime(b, a);
      }, Animation.prototype.isEventInstanceGroupAllowed = function(type) {
        var layer_i;
        var context = this._getView();
        var featureCache = this.dateProfile;
        var crossfilterable_layers = this.eventRangesToEventFootprints(type.getAllEventRanges());
        /** @type {number} */
        layer_i = 0;
        for (; layer_i < crossfilterable_layers.length; layer_i++) {
          if (!featureCache.validUnzonedRange.containsRange(crossfilterable_layers[layer_i].componentFootprint.unzonedRange)) {
            return false;
          }
        }
        return context.calendar.constraints.isEventInstanceGroupAllowed(type);
      }, Animation.prototype.isExternalInstanceGroupAllowed = function(relation_symbol) {
        var layer_i;
        var context = this._getView();
        var featureCache = this.dateProfile;
        var crossfilterable_layers = this.eventRangesToEventFootprints(relation_symbol.getAllEventRanges());
        /** @type {number} */
        layer_i = 0;
        for (; layer_i < crossfilterable_layers.length; layer_i++) {
          if (!featureCache.validUnzonedRange.containsRange(crossfilterable_layers[layer_i].componentFootprint.unzonedRange)) {
            return false;
          }
        }
        /** @type {number} */
        layer_i = 0;
        for (; layer_i < crossfilterable_layers.length; layer_i++) {
          if (!context.calendar.constraints.isSelectionFootprintAllowed(crossfilterable_layers[layer_i].componentFootprint)) {
            return false;
          }
        }
        return true;
      }, Animation;
    }(s.default);
    e.default = newOrg;
  }, function(canCreateDiscussions, option, require) {
    Object.defineProperty(option, "__esModule", {
      value : true
    });
    var instance = require(2);
    var $ = require(3);
    var moment = require(0);
    var handler = require(4);
    var Immutable = require(218);
    var _deepAssign2 = require(221);
    var History_1 = require(40);
    var d = require(21);
    var JS = require(5);
    var h = function(target) {
      /**
       * @param {!Object} val
       * @param {!Object} options
       * @return {?}
       */
      function self(val, options) {
        var self = target.call(this, null, options.options) || this;
        return self.batchRenderDepth = 0, self.isSelected = false, self.calendar = val, self.viewSpec = options, self.type = options.type, self.name = self.type, self.initRenderQueue(), self.initHiddenDays(), self.dateProfileGenerator = new self.dateProfileGeneratorClass(self), self.bindBaseRenderHandlers(), self.eventOrderSpecs = handler.parseFieldSpecs(self.opt("eventOrder")), self.initialize && self.initialize(), self;
      }
      return instance.__extends(self, target), self.prototype._getView = function() {
        return this;
      }, self.prototype.opt = function(name) {
        return this.options[name];
      }, self.prototype.initRenderQueue = function() {
        this.renderQueue = new Immutable.default({
          event : this.opt("eventRenderWait")
        });
        this.renderQueue.on("start", this.onRenderQueueStart.bind(this));
        this.renderQueue.on("stop", this.onRenderQueueStop.bind(this));
        this.on("before:change", this.startBatchRender);
        this.on("change", this.stopBatchRender);
      }, self.prototype.onRenderQueueStart = function() {
        this.calendar.freezeContentHeight();
        this.addScroll(this.queryScroll());
      }, self.prototype.onRenderQueueStop = function() {
        if (this.calendar.updateViewSize()) {
          this.popScroll();
        }
        this.calendar.thawContentHeight();
      }, self.prototype.startBatchRender = function() {
        if (!this.batchRenderDepth++) {
          this.renderQueue.pause();
        }
      }, self.prototype.stopBatchRender = function() {
        if (!--this.batchRenderDepth) {
          this.renderQueue.resume();
        }
      }, self.prototype.requestRender = function(type, fn, data) {
        this.renderQueue.queue(type, fn, data);
      }, self.prototype.whenSizeUpdated = function(t) {
        if (this.renderQueue.isRunning) {
          this.renderQueue.one("stop", t.bind(this));
        } else {
          t.call(this);
        }
      }, self.prototype.computeTitle = function(message) {
        var range;
        return range = /^(year|month)$/.test(message.currentRangeUnit) ? message.currentUnzonedRange : message.activeUnzonedRange, this.formatRange({
          start : this.calendar.msToMoment(range.startMs, message.isRangeAllDay),
          end : this.calendar.msToMoment(range.endMs, message.isRangeAllDay)
        }, message.isRangeAllDay, this.opt("titleFormat") || this.computeTitleFormat(message), this.opt("titleRangeSeparator"));
      }, self.prototype.computeTitleFormat = function(win) {
        var undefined = win.currentRangeUnit;
        return "year" === undefined ? "YYYY" : "month" === undefined ? this.opt("monthYearFormat") : win.currentUnzonedRange.as("days") > 1 ? "ll" : "LL";
      }, self.prototype.setDate = function(text) {
        var currentDateProfile = this.get("dateProfile");
        var n = this.dateProfileGenerator.build(text, void 0, true);
        if (!(currentDateProfile && currentDateProfile.activeUnzonedRange.equals(n.activeUnzonedRange))) {
          this.set("dateProfile", n);
        }
      }, self.prototype.unsetDate = function() {
        this.unset("dateProfile");
      }, self.prototype.fetchInitialEvents = function(dateProfile) {
        var t = this.calendar;
        var bar = dateProfile.isRangeAllDay && !this.usesMinMaxTime;
        return t.requestEvents(t.msToMoment(dateProfile.activeUnzonedRange.startMs, bar), t.msToMoment(dateProfile.activeUnzonedRange.endMs, bar));
      }, self.prototype.bindEventChanges = function() {
        this.listenTo(this.calendar, "eventsReset", this.resetEvents);
      }, self.prototype.unbindEventChanges = function() {
        this.stopListeningTo(this.calendar, "eventsReset");
      }, self.prototype.setEvents = function(obj) {
        this.set("currentEvents", obj);
        this.set("hasEvents", true);
      }, self.prototype.unsetEvents = function() {
        this.unset("currentEvents");
        this.unset("hasEvents");
      }, self.prototype.resetEvents = function(events) {
        this.startBatchRender();
        this.unsetEvents();
        this.setEvents(events);
        this.stopBatchRender();
      }, self.prototype.requestDateRender = function(dateProfile) {
        var _this = this;
        this.requestRender(function() {
          _this.executeDateRender(dateProfile);
        }, "date", "init");
      }, self.prototype.requestDateUnrender = function() {
        var _this = this;
        this.requestRender(function() {
          _this.executeDateUnrender();
        }, "date", "destroy");
      }, self.prototype.executeDateRender = function(dateProfile) {
        target.prototype.executeDateRender.call(this, dateProfile);
        if (this.render) {
          this.render();
        }
        this.trigger("datesRendered");
        this.addScroll({
          isDateInit : true
        });
        this.startNowIndicator();
      }, self.prototype.executeDateUnrender = function() {
        this.unselect();
        this.stopNowIndicator();
        this.trigger("before:datesUnrendered");
        if (this.destroy) {
          this.destroy();
        }
        target.prototype.executeDateUnrender.call(this);
      }, self.prototype.bindBaseRenderHandlers = function() {
        var wrk = this;
        this.on("datesRendered", function() {
          wrk.whenSizeUpdated(wrk.triggerViewRender);
        });
        this.on("before:datesUnrendered", function() {
          wrk.triggerViewDestroy();
        });
      }, self.prototype.triggerViewRender = function() {
        this.publiclyTrigger("viewRender", {
          context : this,
          args : [this, this.el]
        });
      }, self.prototype.triggerViewDestroy = function() {
        this.publiclyTrigger("viewDestroy", {
          context : this,
          args : [this, this.el]
        });
      }, self.prototype.requestEventsRender = function(events) {
        var $toolkit = this;
        this.requestRender(function() {
          $toolkit.executeEventRender(events);
          $toolkit.whenSizeUpdated($toolkit.triggerAfterEventsRendered);
        }, "event", "init");
      }, self.prototype.requestEventsUnrender = function() {
        var t = this;
        this.requestRender(function() {
          t.triggerBeforeEventsDestroyed();
          t.executeEventUnrender();
        }, "event", "destroy");
      }, self.prototype.requestBusinessHoursRender = function(stat) {
        var haproxyStats = this;
        this.requestRender(function() {
          haproxyStats.renderBusinessHours(stat);
        }, "businessHours", "init");
      }, self.prototype.requestBusinessHoursUnrender = function() {
        var t = this;
        this.requestRender(function() {
          t.unrenderBusinessHours();
        }, "businessHours", "destroy");
      }, self.prototype.bindGlobalHandlers = function() {
        target.prototype.bindGlobalHandlers.call(this);
        this.listenTo(d.default.get(), {
          touchstart : this.processUnselect,
          mousedown : this.handleDocumentMousedown
        });
      }, self.prototype.unbindGlobalHandlers = function() {
        target.prototype.unbindGlobalHandlers.call(this);
        this.stopListeningTo(d.default.get());
      }, self.prototype.startNowIndicator = function() {
        var unit;
        var update;
        var delay;
        var _this = this;
        if (this.opt("nowIndicator") && (unit = this.getNowIndicatorUnit())) {
          update = handler.proxy(this, "updateNowIndicator");
          this.initialNowDate = this.calendar.getNow();
          /** @type {number} */
          this.initialNowQueriedMs = (new Date).valueOf();
          /** @type {number} */
          delay = this.initialNowDate.clone().startOf(unit).add(1, unit).valueOf() - this.initialNowDate.valueOf();
          /** @type {number} */
          this.nowIndicatorTimeoutID = setTimeout(function() {
            /** @type {null} */
            _this.nowIndicatorTimeoutID = null;
            update();
            /** @type {number} */
            delay = +moment.duration(1, unit);
            /** @type {number} */
            delay = Math.max(100, delay);
            /** @type {number} */
            _this.nowIndicatorIntervalID = setInterval(update, delay);
          }, delay);
        }
      }, self.prototype.updateNowIndicator = function() {
        if (this.isDatesRendered && this.initialNowDate) {
          this.unrenderNowIndicator();
          this.renderNowIndicator(this.initialNowDate.clone().add((new Date).valueOf() - this.initialNowQueriedMs));
          /** @type {boolean} */
          this.isNowIndicatorRendered = true;
        }
      }, self.prototype.stopNowIndicator = function() {
        if (this.isNowIndicatorRendered) {
          if (this.nowIndicatorTimeoutID) {
            clearTimeout(this.nowIndicatorTimeoutID);
            /** @type {null} */
            this.nowIndicatorTimeoutID = null;
          }
          if (this.nowIndicatorIntervalID) {
            clearInterval(this.nowIndicatorIntervalID);
            /** @type {null} */
            this.nowIndicatorIntervalID = null;
          }
          this.unrenderNowIndicator();
          /** @type {boolean} */
          this.isNowIndicatorRendered = false;
        }
      }, self.prototype.updateSize = function(width, height, force) {
        if (this.setHeight) {
          this.setHeight(width, height);
        } else {
          target.prototype.updateSize.call(this, width, height, force);
        }
        this.updateNowIndicator();
      }, self.prototype.addScroll = function(properties) {
        var queuedScroll = this.queuedScroll || (this.queuedScroll = {});
        $.extend(queuedScroll, properties);
      }, self.prototype.popScroll = function() {
        this.applyQueuedScroll();
        /** @type {null} */
        this.queuedScroll = null;
      }, self.prototype.applyQueuedScroll = function() {
        if (this.queuedScroll) {
          this.applyScroll(this.queuedScroll);
        }
      }, self.prototype.queryScroll = function() {
        var MultiSuggest = {};
        return this.isDatesRendered && $.extend(MultiSuggest, this.queryDateScroll()), MultiSuggest;
      }, self.prototype.applyScroll = function(scroll) {
        if (scroll.isDateInit && this.isDatesRendered) {
          $.extend(scroll, this.computeInitialDateScroll());
        }
        if (this.isDatesRendered) {
          this.applyDateScroll(scroll);
        }
      }, self.prototype.computeInitialDateScroll = function() {
        return {};
      }, self.prototype.queryDateScroll = function() {
        return {};
      }, self.prototype.applyDateScroll = function(scroll) {
      }, self.prototype.reportEventDrop = function(event, dropLocation, el, ev) {
        var view = this.calendar.eventManager;
        var presetItemClicked = view.mutateEventsWithId(event.def.id, dropLocation);
        var pos = dropLocation.dateMutation;
        if (pos) {
          event.dateProfile = pos.buildNewDateProfile(event.dateProfile, this.calendar);
        }
        this.triggerEventDrop(event, pos && pos.dateDelta || moment.duration(), presetItemClicked, el, ev);
      }, self.prototype.triggerEventDrop = function(ev, count, event, el, text) {
        this.publiclyTrigger("eventDrop", {
          context : el[0],
          args : [ev.toLegacy(), count, event, text, {}, this]
        });
      }, self.prototype.reportExternalDrop = function(event, dropLocation, el, ev, ui, value) {
        if (dropLocation) {
          this.calendar.eventManager.addEventDef(event, el);
        }
        this.triggerExternalDrop(event, dropLocation, ev, ui, value);
      }, self.prototype.triggerExternalDrop = function(event, dropLocation, el, name, value) {
        this.publiclyTrigger("drop", {
          context : el[0],
          args : [event.dateProfile.start.clone(), name, value, this]
        });
        if (dropLocation) {
          this.publiclyTrigger("eventReceive", {
            context : this,
            args : [event.buildInstance().toLegacy(), this]
          });
        }
      }, self.prototype.reportEventResize = function(item, event, el, ev) {
        var store = this.calendar.eventManager;
        var e = store.mutateEventsWithId(item.def.id, event);
        item.dateProfile = event.dateMutation.buildNewDateProfile(item.dateProfile, this.calendar);
        this.triggerEventResize(item, event.dateMutation.endDelta, e, el, ev);
      }, self.prototype.triggerEventResize = function(ev, count, event, el, text) {
        this.publiclyTrigger("eventResize", {
          context : el[0],
          args : [ev.toLegacy(), count, event, text, {}, this]
        });
      }, self.prototype.select = function(range, ev) {
        this.unselect(ev);
        this.renderSelectionFootprint(range);
        this.reportSelection(range, ev);
      }, self.prototype.renderSelectionFootprint = function(subject) {
        if (this.renderSelection) {
          this.renderSelection(subject.toLegacy(this.calendar));
        } else {
          target.prototype.renderSelectionFootprint.call(this, subject);
        }
      }, self.prototype.reportSelection = function(range, ev) {
        /** @type {boolean} */
        this.isSelected = true;
        this.triggerSelect(range, ev);
      }, self.prototype.triggerSelect = function(e, eventName) {
        var ourSelection = this.calendar.footprintToDateProfile(e);
        this.publiclyTrigger("select", {
          context : this,
          args : [ourSelection.start, ourSelection.end, eventName, this]
        });
      }, self.prototype.unselect = function(type) {
        if (this.isSelected) {
          /** @type {boolean} */
          this.isSelected = false;
          if (this.destroySelection) {
            this.destroySelection();
          }
          this.unrenderSelection();
          this.publiclyTrigger("unselect", {
            context : this,
            args : [type, this]
          });
        }
      }, self.prototype.selectEventInstance = function(name) {
        if (!(this.selectedEventInstance && this.selectedEventInstance === name)) {
          this.unselectEventInstance();
          this.getEventSegs().forEach(function(item) {
            if (item.footprint.eventInstance === name && item.el) {
              item.el.addClass("fc-selected");
            }
          });
          /** @type {string} */
          this.selectedEventInstance = name;
        }
      }, self.prototype.unselectEventInstance = function() {
        if (this.selectedEventInstance) {
          this.getEventSegs().forEach(function(oldContainer) {
            if (oldContainer.el) {
              oldContainer.el.removeClass("fc-selected");
            }
          });
          /** @type {null} */
          this.selectedEventInstance = null;
        }
      }, self.prototype.isEventDefSelected = function(obj) {
        return this.selectedEventInstance && this.selectedEventInstance.def.id === obj.id;
      }, self.prototype.handleDocumentMousedown = function(ev) {
        if (handler.isPrimaryMouseButton(ev)) {
          this.processUnselect(ev);
        }
      }, self.prototype.processUnselect = function(ev) {
        this.processRangeUnselect(ev);
        this.processEventUnselect(ev);
      }, self.prototype.processRangeUnselect = function(ev) {
        var ignore;
        if (this.isSelected && this.opt("unselectAuto")) {
          if (!((ignore = this.opt("unselectCancel")) && $(ev.target).closest(ignore).length)) {
            this.unselect(ev);
          }
        }
      }, self.prototype.processEventUnselect = function(ev) {
        if (this.selectedEventInstance) {
          if (!$(ev.target).closest(".fc-selected").length) {
            this.unselectEventInstance();
          }
        }
      }, self.prototype.triggerBaseRendered = function() {
        this.publiclyTrigger("viewRender", {
          context : this,
          args : [this, this.el]
        });
      }, self.prototype.triggerBaseUnrendered = function() {
        this.publiclyTrigger("viewDestroy", {
          context : this,
          args : [this, this.el]
        });
      }, self.prototype.triggerDayClick = function(span, base, text) {
        var ngRepeatDiv = this.calendar.footprintToDateProfile(span);
        this.publiclyTrigger("dayClick", {
          context : base,
          args : [ngRepeatDiv.start, text, this]
        });
      }, self.prototype.isDateInOtherMonth = function(order, rotationShift12ths) {
        return false;
      }, self.prototype.getUnzonedRangeOption = function(name) {
        var val = this.opt(name);
        if ("function" == typeof val && (val = val.apply(null, Array.prototype.slice.call(arguments, 1))), val) {
          return this.calendar.parseUnzonedRange(val);
        }
      }, self.prototype.initHiddenDays = function() {
        var eventType;
        var compareTerms = this.opt("hiddenDays") || [];
        /** @type {!Array} */
        var finalCustomEvents = [];
        /** @type {number} */
        var i = 0;
        if (false === this.opt("weekends")) {
          compareTerms.push(0, 6);
        }
        /** @type {number} */
        eventType = 0;
        for (; eventType < 7; eventType++) {
          if (!(finalCustomEvents[eventType] = -1 !== $.inArray(eventType, compareTerms))) {
            i++;
          }
        }
        if (!i) {
          throw new Error("invalid hiddenDays");
        }
        /** @type {!Array} */
        this.isHiddenDayHash = finalCustomEvents;
      }, self.prototype.trimHiddenDays = function(s) {
        var start = s.getStart();
        var end = s.getEnd();
        return start && (start = this.skipHiddenDays(start)), end && (end = this.skipHiddenDays(end, -1, true)), null === start || null === end || start < end ? new JS.default(start, end) : null;
      }, self.prototype.isHiddenDay = function(day) {
        return moment.isMoment(day) && (day = day.day()), this.isHiddenDayHash[day];
      }, self.prototype.skipHiddenDays = function(date, value, add) {
        if (void 0 === value) {
          /** @type {number} */
          value = 1;
        }
        if (void 0 === add) {
          /** @type {boolean} */
          add = false;
        }
        var out = date.clone();
        for (; this.isHiddenDayHash[(out.day() + (add ? value : 0) + 7) % 7];) {
          out.add(value, "days");
        }
        return out;
      }, self;
    }(History_1.default);
    option.default = h;
    /** @type {boolean} */
    h.prototype.usesMinMaxTime = false;
    h.prototype.dateProfileGeneratorClass = _deepAssign2.default;
    h.watch("displayingDates", ["isInDom", "dateProfile"], function(deps) {
      this.requestDateRender(deps.dateProfile);
    }, function() {
      this.requestDateUnrender();
    });
    h.watch("displayingBusinessHours", ["displayingDates", "businessHourGenerator"], function(canCreateDiscussions) {
      this.requestBusinessHoursRender(canCreateDiscussions.businessHourGenerator);
    }, function() {
      this.requestBusinessHoursUnrender();
    });
    h.watch("initialEvents", ["dateProfile"], function(deps) {
      return this.fetchInitialEvents(deps.dateProfile);
    });
    h.watch("bindingEvents", ["initialEvents"], function(deps) {
      this.setEvents(deps.initialEvents);
      this.bindEventChanges();
    }, function() {
      this.unbindEventChanges();
      this.unsetEvents();
    });
    h.watch("displayingEvents", ["displayingDates", "hasEvents"], function() {
      this.requestEventsRender(this.get("currentEvents"));
    }, function() {
      this.requestEventsUnrender();
    });
    h.watch("title", ["dateProfile"], function(deps) {
      return this.title = this.computeTitle(deps.dateProfile);
    });
    h.watch("legacyDateProps", ["dateProfile"], function(docHolder) {
      var cal = this.calendar;
      var doc = docHolder.dateProfile;
      this.start = cal.msToMoment(doc.activeUnzonedRange.startMs, doc.isRangeAllDay);
      this.end = cal.msToMoment(doc.activeUnzonedRange.endMs, doc.isRangeAllDay);
      this.intervalStart = cal.msToMoment(doc.currentUnzonedRange.startMs, doc.isRangeAllDay);
      this.intervalEnd = cal.msToMoment(doc.currentUnzonedRange.endMs, doc.isRangeAllDay);
    });
  }, function(canCreateDiscussions, e, require) {
    Object.defineProperty(e, "__esModule", {
      value : true
    });
    var jQuery = require(3);
    var $ = require(4);
    var newOrg = function() {
      /**
       * @param {string} val
       * @param {?} name
       * @return {undefined}
       */
      function self(val, name) {
        this.view = val._getView();
        /** @type {string} */
        this.component = val;
        this.fillRenderer = name;
      }
      return self.prototype.opt = function(name) {
        return this.view.opt(name);
      }, self.prototype.rangeUpdated = function() {
        var displayEventTime;
        var displayEventEnd;
        this.eventTimeFormat = this.opt("eventTimeFormat") || this.opt("timeFormat") || this.computeEventTimeFormat();
        displayEventTime = this.opt("displayEventTime");
        if (null == displayEventTime) {
          displayEventTime = this.computeDisplayEventTime();
        }
        displayEventEnd = this.opt("displayEventEnd");
        if (null == displayEventEnd) {
          displayEventEnd = this.computeDisplayEventEnd();
        }
        this.displayEventTime = displayEventTime;
        this.displayEventEnd = displayEventEnd;
      }, self.prototype.render = function(params) {
        var i;
        var target;
        var searchPipeline;
        var curOpts = this.component._getDateProfile();
        /** @type {!Array} */
        var val = [];
        /** @type {!Array} */
        var scale = [];
        for (i in params) {
          target = params[i];
          searchPipeline = target.sliceRenderRanges(curOpts.activeUnzonedRange);
          if (target.getEventDef().hasBgRendering()) {
            val.push.apply(val, searchPipeline);
          } else {
            scale.push.apply(scale, searchPipeline);
          }
        }
        this.renderBgRanges(val);
        this.renderFgRanges(scale);
      }, self.prototype.unrender = function() {
        this.unrenderBgRanges();
        this.unrenderFgRanges();
      }, self.prototype.renderFgRanges = function(zoom) {
        var data = this.component.eventRangesToEventFootprints(zoom);
        var segs = this.component.eventFootprintsToSegs(data);
        segs = this.renderFgSegEls(segs);
        if (false !== this.renderFgSegs(segs)) {
          this.fgSegs = segs;
        }
      }, self.prototype.unrenderFgRanges = function() {
        this.unrenderFgSegs(this.fgSegs || []);
        /** @type {null} */
        this.fgSegs = null;
      }, self.prototype.renderBgRanges = function(zoom) {
        var data = this.component.eventRangesToEventFootprints(zoom);
        var segs = this.component.eventFootprintsToSegs(data);
        if (false !== this.renderBgSegs(segs)) {
          this.bgSegs = segs;
        }
      }, self.prototype.unrenderBgRanges = function() {
        this.unrenderBgSegs();
        /** @type {null} */
        this.bgSegs = null;
      }, self.prototype.getSegs = function() {
        return (this.bgSegs || []).concat(this.fgSegs || []);
      }, self.prototype.renderFgSegs = function(segs) {
        return false;
      }, self.prototype.unrenderFgSegs = function(canCreateDiscussions) {
      }, self.prototype.renderBgSegs = function(val) {
        var $scope = this;
        if (!this.fillRenderer) {
          return false;
        }
        this.fillRenderer.renderSegs("bgEvent", val, {
          getClasses : function(object) {
            return $scope.getBgClasses(object.footprint.eventDef);
          },
          getCss : function(res) {
            return {
              "background-color" : $scope.getBgColor(res.footprint.eventDef)
            };
          },
          filterEl : function(item, e) {
            return $scope.filterEventRenderEl(item.footprint, e);
          }
        });
      }, self.prototype.unrenderBgSegs = function() {
        if (this.fillRenderer) {
          this.fillRenderer.unrender("bgEvent");
        }
      }, self.prototype.renderFgSegEls = function(segs, disableResizing) {
        var rect = this;
        if (void 0 === disableResizing) {
          /** @type {boolean} */
          disableResizing = false;
        }
        var i;
        var custom = this.view.hasPublicHandlers("eventRender");
        /** @type {string} */
        var html = "";
        /** @type {!Array} */
        var renderedSegs = [];
        if (segs.length) {
          /** @type {number} */
          i = 0;
          for (; i < segs.length; i++) {
            this.beforeFgSegHtml(segs[i]);
            html = html + this.fgSegHtml(segs[i], disableResizing);
          }
          jQuery(html).each(function(i, text) {
            var seg = segs[i];
            var el = jQuery(text);
            if (custom) {
              el = rect.filterEventRenderEl(seg.footprint, el);
            }
            if (el) {
              el.data("fc-seg", seg);
              seg.el = el;
              renderedSegs.push(seg);
            }
          });
        }
        return renderedSegs;
      }, self.prototype.beforeFgSegHtml = function(canCreateDiscussions) {
      }, self.prototype.fgSegHtml = function(midiOutObj, name) {
      }, self.prototype.getSegClasses = function(seg, n, a) {
        /** @type {!Array<?>} */
        var classes = ["fc-event", seg.isStart ? "fc-start" : "fc-not-start", seg.isEnd ? "fc-end" : "fc-not-end"].concat(this.getClasses(seg.footprint.eventDef));
        return n && classes.push("fc-draggable"), a && classes.push("fc-resizable"), this.view.isEventDefSelected(seg.footprint.eventDef) && classes.push("fc-selected"), classes;
      }, self.prototype.filterEventRenderEl = function(willFail, result) {
        var context = willFail.getEventLegacy();
        var value = this.view.publiclyTrigger("eventRender", {
          context : context,
          args : [context, result, this.view]
        });
        return false === value ? result = null : value && true !== value && (result = jQuery(value)), result;
      }, self.prototype.getTimeText = function(label, id, time) {
        return this._getTimeText(label.eventInstance.dateProfile.start, label.eventInstance.dateProfile.end, label.componentFootprint.isAllDay, id, time);
      }, self.prototype._getTimeText = function(dt, o, n, i, v) {
        return null == i && (i = this.eventTimeFormat), null == v && (v = this.displayEventEnd), this.displayEventTime && !n ? v && o ? this.view.formatRange({
          start : dt,
          end : o
        }, false, i) : dt.format(i) : "";
      }, self.prototype.computeEventTimeFormat = function() {
        return this.opt("smallTimeFormat");
      }, self.prototype.computeDisplayEventTime = function() {
        return true;
      }, self.prototype.computeDisplayEventEnd = function() {
        return true;
      }, self.prototype.getBgClasses = function($this) {
        var selectors = this.getClasses($this);
        return selectors.push("fc-bgevent"), selectors;
      }, self.prototype.getClasses = function(node) {
        var i;
        var classes = this.getStylingObjs(node);
        /** @type {!Array} */
        var result = [];
        /** @type {number} */
        i = 0;
        for (; i < classes.length; i++) {
          result.push.apply(result, classes[i].eventClassName || classes[i].className || []);
        }
        return result;
      }, self.prototype.getSkinCss = function(key) {
        return {
          "background-color" : this.getBgColor(key),
          "border-color" : this.getBorderColor(key),
          color : this.getTextColor(key)
        };
      }, self.prototype.getBgColor = function(element) {
        var i;
        var ok;
        var rows = this.getStylingObjs(element);
        /** @type {number} */
        i = 0;
        for (; i < rows.length && !ok; i++) {
          ok = rows[i].eventBackgroundColor || rows[i].eventColor || rows[i].backgroundColor || rows[i].color;
        }
        return ok || (ok = this.opt("eventBackgroundColor") || this.opt("eventColor")), ok;
      }, self.prototype.getBorderColor = function(node) {
        var i;
        var ok;
        var data = this.getStylingObjs(node);
        /** @type {number} */
        i = 0;
        for (; i < data.length && !ok; i++) {
          ok = data[i].eventBorderColor || data[i].eventColor || data[i].borderColor || data[i].color;
        }
        return ok || (ok = this.opt("eventBorderColor") || this.opt("eventColor")), ok;
      }, self.prototype.getTextColor = function(data) {
        var i;
        var ok;
        var presets = this.getStylingObjs(data);
        /** @type {number} */
        i = 0;
        for (; i < presets.length && !ok; i++) {
          ok = presets[i].eventTextColor || presets[i].textColor;
        }
        return ok || (ok = this.opt("eventTextColor")), ok;
      }, self.prototype.getStylingObjs = function(value) {
        var result = this.getFallbackStylingObjs(value);
        return result.unshift(value), result;
      }, self.prototype.getFallbackStylingObjs = function(pulse) {
        return [pulse.source];
      }, self.prototype.sortEventSegs = function(segs) {
        segs.sort($.proxy(this, "compareEventSegs"));
      }, self.prototype.compareEventSegs = function(seg1, seg2) {
        var evt = seg1.footprint;
        var o = seg2.footprint;
        var args = evt.componentFootprint;
        var oEvent = o.componentFootprint;
        var def = args.unzonedRange;
        var processObj = oEvent.unzonedRange;
        return def.startMs - processObj.startMs || processObj.endMs - processObj.startMs - (def.endMs - def.startMs) || oEvent.isAllDay - args.isAllDay || $.compareByFieldSpecs(evt.eventDef, o.eventDef, this.view.eventOrderSpecs, evt.eventDef.miscProps, o.eventDef.miscProps);
      }, self;
    }();
    e.default = newOrg;
  }, , , , , function(canCreateDiscussions, exports, lua_newtable) {
    /**
     * @param {string} options
     * @return {?}
     */
    function toString(options) {
      return "en" !== options.locale() ? options.clone().locale("en") : options;
    }
    /**
     * @param {!Object} date
     * @param {string} formatStr
     * @return {?}
     */
    function formatDate(date, formatStr) {
      return renderFakeFormatString(getParsedFormatString(formatStr).fakeFormatString, date);
    }
    /**
     * @param {?} date1
     * @param {string} date2
     * @param {string} formatStr
     * @param {string} separator
     * @param {undefined} isRTL
     * @return {?}
     */
    function formatRange(date1, date2, formatStr, separator, isRTL) {
      var localeData;
      return date1 = t.default.parseZone(date1), date2 = t.default.parseZone(date2), localeData = date1.localeData(), formatStr = localeData.longDateFormat(formatStr) || formatStr, renderParsedFormat(getParsedFormatString(formatStr), date1, date2, separator || " - ", isRTL);
    }
    /**
     * @param {?} parsedFormat
     * @param {?} date1
     * @param {!Object} date2
     * @param {string} separator
     * @param {number} isRTL
     * @return {?}
     */
    function renderParsedFormat(parsedFormat, date1, date2, separator, isRTL) {
      var leftI;
      var rightI;
      var middleI;
      var sameUnits = parsedFormat.sameUnits;
      var unzonedDate1 = date1.clone().stripZone();
      var unzonedDate2 = date2.clone().stripZone();
      var renderedParts1 = renderFakeFormatStringParts(parsedFormat.fakeFormatString, date1);
      var renderedParts2 = renderFakeFormatStringParts(parsedFormat.fakeFormatString, date2);
      /** @type {string} */
      var leftStr = "";
      /** @type {string} */
      var rightStr = "";
      /** @type {string} */
      var middleStr1 = "";
      /** @type {string} */
      var middleStr2 = "";
      /** @type {string} */
      var middleStr = "";
      /** @type {number} */
      leftI = 0;
      for (; leftI < sameUnits.length && (!sameUnits[leftI] || unzonedDate1.isSame(unzonedDate2, sameUnits[leftI])); leftI++) {
        leftStr = leftStr + renderedParts1[leftI];
      }
      /** @type {number} */
      rightI = sameUnits.length - 1;
      for (; rightI > leftI && (!sameUnits[rightI] || unzonedDate1.isSame(unzonedDate2, sameUnits[rightI])) && (rightI - 1 !== leftI || "." !== renderedParts1[rightI]); rightI--) {
        rightStr = renderedParts1[rightI] + rightStr;
      }
      /** @type {number} */
      middleI = leftI;
      for (; middleI <= rightI; middleI++) {
        middleStr1 = middleStr1 + renderedParts1[middleI];
        middleStr2 = middleStr2 + renderedParts2[middleI];
      }
      return (middleStr1 || middleStr2) && (middleStr = isRTL ? middleStr2 + separator + middleStr1 : middleStr1 + separator + middleStr2), processMaybeMarkers(leftStr + middleStr + rightStr);
    }
    /**
     * @param {string} formatStr
     * @return {?}
     */
    function getParsedFormatString(formatStr) {
      return parsedFormatStrCache[formatStr] || (parsedFormatStrCache[formatStr] = parseFormatString(formatStr));
    }
    /**
     * @param {string} formatStr
     * @return {?}
     */
    function parseFormatString(formatStr) {
      var chunks = chunkFormatString(formatStr);
      return {
        fakeFormatString : buildFakeFormatString(chunks),
        sameUnits : buildSameUnits(chunks)
      };
    }
    /**
     * @param {string} formatStr
     * @return {?}
     */
    function chunkFormatString(formatStr) {
      var match;
      /** @type {!Array} */
      var chunks = [];
      /** @type {!RegExp} */
      var chunker = /\[([^\]]*)\]|\(([^\)]*)\)|(LTS|LT|(\w)\4*o?)|([^\w\[\(]+)/g;
      for (; match = chunker.exec(formatStr);) {
        if (match[1]) {
          chunks.push.apply(chunks, splitStringLiteral(match[1]));
        } else {
          if (match[2]) {
            chunks.push({
              maybe : chunkFormatString(match[2])
            });
          } else {
            if (match[3]) {
              chunks.push({
                token : match[3]
              });
            } else {
              if (match[5]) {
                chunks.push.apply(chunks, splitStringLiteral(match[5]));
              }
            }
          }
        }
      }
      return chunks;
    }
    /**
     * @param {string} s
     * @return {?}
     */
    function splitStringLiteral(s) {
      return ". " === s ? [".", " "] : [s];
    }
    /**
     * @param {!Array} chunks
     * @return {?}
     */
    function buildFakeFormatString(chunks) {
      var i;
      var chunk;
      /** @type {!Array} */
      var parts = [];
      /** @type {number} */
      i = 0;
      for (; i < chunks.length; i++) {
        chunk = chunks[i];
        if ("string" == typeof chunk) {
          parts.push("[" + chunk + "]");
        } else {
          if (chunk.token) {
            if (chunk.token in specialTokens) {
              parts.push(SPECIAL_TOKEN_MARKER + "[" + chunk.token + "]");
            } else {
              parts.push(chunk.token);
            }
          } else {
            if (chunk.maybe) {
              parts.push(MAYBE_MARKER + buildFakeFormatString(chunk.maybe) + MAYBE_MARKER);
            }
          }
        }
      }
      return parts.join(sub);
    }
    /**
     * @param {!Array} chunks
     * @return {?}
     */
    function buildSameUnits(chunks) {
      var i;
      var chunk;
      var tokenInfo;
      /** @type {!Array} */
      var units = [];
      /** @type {number} */
      i = 0;
      for (; i < chunks.length; i++) {
        chunk = chunks[i];
        if (chunk.token) {
          tokenInfo = largeTokenMap[chunk.token.charAt(0)];
          units.push(tokenInfo ? tokenInfo.unit : "second");
        } else {
          if (chunk.maybe) {
            units.push.apply(units, buildSameUnits(chunk.maybe));
          } else {
            units.push(null);
          }
        }
      }
      return units;
    }
    /**
     * @param {string} fakeFormatString
     * @param {!Object} date
     * @return {?}
     */
    function renderFakeFormatString(fakeFormatString, date) {
      return processMaybeMarkers(renderFakeFormatStringParts(fakeFormatString, date).join(""));
    }
    /**
     * @param {string} uuid
     * @param {!Object} date
     * @return {?}
     */
    function renderFakeFormatStringParts(uuid, date) {
      var l;
      var i;
      /** @type {!Array} */
      var parts = [];
      var result = t.oldMomentFormat(date, uuid);
      var s = result.split(sub);
      /** @type {number} */
      l = 0;
      for (; l < s.length; l++) {
        i = s[l];
        if (i.charAt(0) === SPECIAL_TOKEN_MARKER) {
          parts.push(specialTokens[i.substring(1)](date));
        } else {
          parts.push(i);
        }
      }
      return parts;
    }
    /**
     * @param {string} s
     * @return {?}
     */
    function processMaybeMarkers(s) {
      return s.replace(regex_delimiters, function(canCreateDiscussions, _testModuleName) {
        return _testModuleName.match(/[1-9]/) ? _testModuleName : "";
      });
    }
    /**
     * @param {string} formatStr
     * @return {?}
     */
    function queryMostGranularFormatUnit(formatStr) {
      var layer_i;
      var tmpPeek;
      var candidate;
      var best;
      var crossfilterable_layers = chunkFormatString(formatStr);
      /** @type {number} */
      layer_i = 0;
      for (; layer_i < crossfilterable_layers.length; layer_i++) {
        tmpPeek = crossfilterable_layers[layer_i];
        if (tmpPeek.token && (candidate = largeTokenMap[tmpPeek.token.charAt(0)]) && (!best || candidate.value > best.value)) {
          best = candidate;
        }
      }
      return best ? best.unit : null;
    }
    Object.defineProperty(exports, "__esModule", {
      value : true
    });
    var t = lua_newtable(10);
    /**
     * @return {?}
     */
    t.newMomentProto.format = function() {
      return this._fullCalendar && arguments[0] ? formatDate(this, arguments[0]) : this._ambigTime ? t.oldMomentFormat(toString(this), "YYYY-MM-DD") : this._ambigZone ? t.oldMomentFormat(toString(this), "YYYY-MM-DD[T]HH:mm:ss") : this._fullCalendar ? t.oldMomentFormat(toString(this)) : t.oldMomentProto.format.apply(this, arguments);
    };
    /**
     * @return {?}
     */
    t.newMomentProto.toISOString = function() {
      return this._ambigTime ? t.oldMomentFormat(toString(this), "YYYY-MM-DD") : this._ambigZone ? t.oldMomentFormat(toString(this), "YYYY-MM-DD[T]HH:mm:ss") : this._fullCalendar ? t.oldMomentProto.toISOString.apply(toString(this), arguments) : t.oldMomentProto.toISOString.apply(this, arguments);
    };
    /** @type {string} */
    var sub = "\v";
    /** @type {string} */
    var SPECIAL_TOKEN_MARKER = "\u001f";
    /** @type {string} */
    var MAYBE_MARKER = "\u001e";
    /** @type {!RegExp} */
    var regex_delimiters = new RegExp(MAYBE_MARKER + "([^" + MAYBE_MARKER + "]*)" + MAYBE_MARKER, "g");
    var specialTokens = {
      t : function(date) {
        return t.oldMomentFormat(date, "a").charAt(0);
      },
      T : function(date) {
        return t.oldMomentFormat(date, "A").charAt(0);
      }
    };
    var largeTokenMap = {
      Y : {
        value : 1,
        unit : "year"
      },
      M : {
        value : 2,
        unit : "month"
      },
      W : {
        value : 3,
        unit : "week"
      },
      w : {
        value : 3,
        unit : "week"
      },
      D : {
        value : 4,
        unit : "day"
      },
      d : {
        value : 4,
        unit : "day"
      }
    };
    /** @type {function(!Object, string): ?} */
    exports.formatDate = formatDate;
    /** @type {function(?, string, string, string, undefined): ?} */
    exports.formatRange = formatRange;
    var parsedFormatStrCache = {};
    /** @type {function(string): ?} */
    exports.queryMostGranularFormatUnit = queryMostGranularFormatUnit;
  }, function(canCreateDiscussions, exports, require) {
    Object.defineProperty(exports, "__esModule", {
      value : true
    });
    var util = require(2);
    var r = require(33);
    var o = require(11);
    var s = require(7);
    var Log = function(_super) {
      /**
       * @return {?}
       */
      function self() {
        var vm = _super.call(this) || this;
        return vm._watchers = {}, vm._props = {}, vm.applyGlobalWatchers(), vm.constructed(), vm;
      }
      return util.__extends(self, _super), self.watch = function(field) {
        /** @type {!Array} */
        var parts = [];
        /** @type {number} */
        var i = 1;
        for (; i < arguments.length; i++) {
          parts[i - 1] = arguments[i];
        }
        if (!this.prototype.hasOwnProperty("_globalWatchArgs")) {
          /** @type {!Object} */
          this.prototype._globalWatchArgs = Object.create(this.prototype._globalWatchArgs);
        }
        /** @type {!Array} */
        this.prototype._globalWatchArgs[field] = parts;
      }, self.prototype.constructed = function() {
      }, self.prototype.applyGlobalWatchers = function() {
        var i;
        var extraMethods = this._globalWatchArgs;
        for (i in extraMethods) {
          this.watch.apply(this, [i].concat(extraMethods[i]));
        }
      }, self.prototype.has = function(name) {
        return name in this._props;
      }, self.prototype.get = function(name) {
        return void 0 === name ? this._props : this._props[name];
      }, self.prototype.set = function(name, val) {
        var newProps;
        if ("string" == typeof name) {
          newProps = {};
          newProps[name] = void 0 === val ? null : val;
        } else {
          /** @type {string} */
          newProps = name;
        }
        this.setProps(newProps);
      }, self.prototype.reset = function(level) {
        var key;
        var props = this._props;
        var newProps = {};
        for (key in props) {
          newProps[key] = void 0;
        }
        for (key in level) {
          newProps[key] = level[key];
        }
        this.setProps(newProps);
      }, self.prototype.unset = function(fn) {
        var comparandProps;
        var i;
        var props = {};
        comparandProps = "string" == typeof fn ? [fn] : fn;
        /** @type {number} */
        i = 0;
        for (; i < comparandProps.length; i++) {
          props[comparandProps[i]] = void 0;
        }
        this.setProps(props);
      }, self.prototype.setProps = function(props) {
        var name;
        var value;
        var key = {};
        /** @type {number} */
        var r = 0;
        for (name in props) {
          if (!("object" != typeof(value = props[name]) && value === this._props[name])) {
            key[name] = value;
            r++;
          }
        }
        if (r) {
          this.trigger("before:batchChange", key);
          for (name in key) {
            value = key[name];
            this.trigger("before:change", name, value);
            this.trigger("before:change:" + name, value);
          }
          for (name in key) {
            value = key[name];
            if (void 0 === value) {
              delete this._props[name];
            } else {
              this._props[name] = value;
            }
            this.trigger("change:" + name, value);
            this.trigger("change", name, value);
          }
          this.trigger("batchChange", key);
        }
      }, self.prototype.watch = function(name, dir, n, prop) {
        var r = this;
        this.unwatch(name);
        this._watchers[name] = this._watchDeps(dir, function(notification) {
          var result = n.call(r, notification);
          if (result && result.then) {
            r.unset(name);
            result.then(function(e) {
              r.set(name, e);
            });
          } else {
            r.set(name, result);
          }
        }, function(selector) {
          r.unset(name);
          if (prop) {
            prop.call(r, selector);
          }
        });
      }, self.prototype.unwatch = function(file) {
        var watcher = this._watchers[file];
        if (watcher) {
          delete this._watchers[file];
          watcher.teardown();
        }
      }, self.prototype._watchDeps = function(depList, startFunc, stopFunc) {
        var x = this;
        /** @type {number} */
        var r = 0;
        var depCnt = depList.length;
        /** @type {number} */
        var type_ = 0;
        var values = {};
        /** @type {!Array} */
        var data = [];
        /** @type {boolean} */
        var u = false;
        /**
         * @param {?} val
         * @param {?} isOptional
         * @param {?} isQuantifier
         * @return {undefined}
         */
        var onBeforeDepChange = function(val, isOptional, isQuantifier) {
          if (1 === ++r && type_ === depCnt) {
            /** @type {boolean} */
            u = true;
            stopFunc(values);
            /** @type {boolean} */
            u = false;
          }
        };
        /**
         * @param {string} depName
         * @param {!Array} val
         * @param {string} isOptional
         * @return {undefined}
         */
        var onDepChange = function(depName, val, isOptional) {
          if (void 0 === val) {
            if (!(isOptional || void 0 === values[depName])) {
              type_--;
            }
            delete values[depName];
          } else {
            if (!(isOptional || void 0 !== values[depName])) {
              type_++;
            }
            /** @type {!Array} */
            values[depName] = val;
          }
          if (!--r) {
            if (type_ === depCnt) {
              if (!u) {
                startFunc(values);
              }
            }
          }
        };
        /**
         * @param {string} o
         * @param {!Function} c
         * @return {undefined}
         */
        var bind = function(o, c) {
          x.on(o, c);
          data.push([o, c]);
        };
        return depList.forEach(function(depName) {
          /** @type {boolean} */
          var isOptional = false;
          if ("?" === depName.charAt(0)) {
            depName = depName.substring(1);
            /** @type {boolean} */
            isOptional = true;
          }
          bind("before:change:" + depName, function(canCreateDiscussions) {
            onBeforeDepChange();
          });
          bind("change:" + depName, function(val) {
            onDepChange(depName, val, isOptional);
          });
        }), depList.forEach(function(name) {
          /** @type {boolean} */
          var e = false;
          if ("?" === name.charAt(0)) {
            name = name.substring(1);
            /** @type {boolean} */
            e = true;
          }
          if (x.has(name)) {
            values[name] = x.get(name);
            type_++;
          } else {
            if (e) {
              type_++;
            }
          }
        }), type_ === depCnt && startFunc(values), {
          teardown : function() {
            /** @type {number} */
            var byteIndex = 0;
            for (; byteIndex < data.length; byteIndex++) {
              x.off(data[byteIndex][0], data[byteIndex][1]);
            }
            /** @type {null} */
            data = null;
            if (type_ === depCnt) {
              stopFunc();
            }
          },
          flash : function() {
            if (type_ === depCnt) {
              stopFunc();
              startFunc(values);
            }
          }
        };
      }, self.prototype.flash = function(key) {
        var watcher = this._watchers[key];
        if (watcher) {
          watcher.flash();
        }
      }, self;
    }(r.default);
    exports.default = Log;
    Log.prototype._globalWatchArgs = {};
    o.default.mixInto(Log);
    s.default.mixInto(Log);
  }, function(canCreateDiscussions, exports, require) {
    Object.defineProperty(exports, "__esModule", {
      value : true
    });
    var assert = require(0);
    var pa = require(4);
    var o = require(13);
    var uri_1 = require(210);
    exports.default = {
      parse : function(data, t) {
        return pa.isTimeString(data.start) || assert.isDuration(data.start) || pa.isTimeString(data.end) || assert.isDuration(data.end) ? uri_1.default.parse(data, t) : o.default.parse(data, t);
      }
    };
  }, function(canCreateDiscussions, e, $) {
    Object.defineProperty(e, "__esModule", {
      value : true
    });
    var self = $(4);
    var source = $(17);
    var newOrg = function() {
      /**
       * @return {undefined}
       */
      function _ContextSet() {
        /** @type {boolean} */
        this.clearEnd = false;
        /** @type {boolean} */
        this.forceTimed = false;
        /** @type {boolean} */
        this.forceAllDay = false;
      }
      return _ContextSet.createFromDiff = function(item, data, value) {
        /**
         * @param {!Object} start
         * @param {!Object} callback
         * @return {?}
         */
        function fn(start, callback) {
          return value ? self.diffByUnit(start, callback, value) : data.isAllDay() ? self.diffDay(start, callback) : self.diffDayTime(start, callback);
        }
        var s;
        var d;
        var e;
        var edge;
        var site0 = item.end && !data.end;
        var folding_angle = item.isAllDay() && !data.isAllDay();
        var topogramId = !item.isAllDay() && data.isAllDay();
        return s = fn(data.start, item.start), data.end && (d = fn(data.unzonedRange.getEnd(), item.unzonedRange.getEnd()), e = d.subtract(s)), edge = new _ContextSet, edge.clearEnd = site0, edge.forceTimed = folding_angle, edge.forceAllDay = topogramId, edge.setDateDelta(s), edge.setEndDelta(e), edge;
      }, _ContextSet.prototype.buildNewDateProfile = function(event, t) {
        var start = event.start.clone();
        /** @type {null} */
        var end = null;
        /** @type {boolean} */
        var o = false;
        return event.end && !this.clearEnd ? end = event.end.clone() : this.endDelta && !end && (end = t.getDefaultEventEnd(event.isAllDay(), start)), this.forceTimed ? (o = true, start.hasTime() || start.time(0), end && !end.hasTime() && end.time(0)) : this.forceAllDay && (start.hasTime() && start.stripTime(), end && end.hasTime() && end.stripTime()), this.dateDelta && (o = true, start.add(this.dateDelta), end && end.add(this.dateDelta)), this.endDelta && (o = true, end.add(this.endDelta)), this.startDelta && 
        (o = true, start.add(this.startDelta)), o && (start = t.applyTimezone(start), end && (end = t.applyTimezone(end))), !end && t.opt("forceEventDuration") && (end = t.getDefaultEventEnd(event.isAllDay(), start)), new source.default(start, end, t);
      }, _ContextSet.prototype.setDateDelta = function(b) {
        if (b && b.valueOf()) {
          /** @type {string} */
          this.dateDelta = b;
        } else {
          /** @type {null} */
          this.dateDelta = null;
        }
      }, _ContextSet.prototype.setStartDelta = function(b) {
        if (b && b.valueOf()) {
          /** @type {string} */
          this.startDelta = b;
        } else {
          /** @type {null} */
          this.startDelta = null;
        }
      }, _ContextSet.prototype.setEndDelta = function(b) {
        if (b && b.valueOf()) {
          /** @type {string} */
          this.endDelta = b;
        } else {
          /** @type {null} */
          this.endDelta = null;
        }
      }, _ContextSet.prototype.isEmpty = function() {
        return !(this.clearEnd || this.forceTimed || this.forceAllDay || this.dateDelta || this.startDelta || this.endDelta);
      }, _ContextSet;
    }();
    e.default = newOrg;
  }, function(canCreateDiscussions, xhr, _interopRequireDefault) {
    /**
     * @param {string} c
     * @param {?} n
     * @return {undefined}
     */
    function e(c, n) {
      a[c] = n;
    }
    /**
     * @param {(!Function|boolean)} j
     * @return {?}
     */
    function r(j) {
      return j ? true === j ? _deepAssign2.default : a[j] : _noframeworkWaypoints2.default;
    }
    Object.defineProperty(xhr, "__esModule", {
      value : true
    });
    var _noframeworkWaypoints2 = _interopRequireDefault(213);
    var _deepAssign2 = _interopRequireDefault(214);
    var a = {};
    /** @type {function(string, ?): undefined} */
    xhr.defineThemeSystem = e;
    /** @type {function((!Function|boolean)): ?} */
    xhr.getThemeSystemClass = r;
  }, function(canCreateDiscussions, res, require) {
    Object.defineProperty(res, "__esModule", {
      value : true
    });
    var Util = require(2);
    var assert = require(3);
    var _package = require(4);
    var p = require(20);
    var o = require(6);
    var nodes = require(13);
    var event = function(_super) {
      /**
       * @param {?} props
       * @return {?}
       */
      function Editor(props) {
        var n = _super.call(this, props) || this;
        return n.eventDefs = [], n;
      }
      return Util.__extends(Editor, _super), Editor.parse = function(value, source) {
        var result;
        return assert.isArray(value.events) ? result = value : assert.isArray(value) && (result = {
          events : value
        }), !!result && o.default.parse.call(this, result, source);
      }, Editor.prototype.setRawEventDefs = function(apexdist) {
        /** @type {!Array} */
        this.rawEventDefs = apexdist;
        this.eventDefs = this.parseEventDefs(apexdist);
      }, Editor.prototype.fetch = function(kw, cb, async) {
        var i;
        var vals = this.eventDefs;
        if (null != this.currentTimezone && this.currentTimezone !== async) {
          /** @type {number} */
          i = 0;
          for (; i < vals.length; i++) {
            if (vals[i] instanceof nodes.default) {
              vals[i].rezone();
            }
          }
        }
        return this.currentTimezone = async, p.default.resolve(vals);
      }, Editor.prototype.addEventDef = function(tagName) {
        this.eventDefs.push(tagName);
      }, Editor.prototype.removeEventDefsById = function(t) {
        return _package.removeMatching(this.eventDefs, function(api_result) {
          return api_result.id === t;
        });
      }, Editor.prototype.removeAllEventDefs = function() {
        /** @type {!Array} */
        this.eventDefs = [];
      }, Editor.prototype.getPrimitive = function() {
        return this.rawEventDefs;
      }, Editor.prototype.applyManualStandardProps = function(e) {
        var $retHtml = _super.prototype.applyManualStandardProps.call(this, e);
        return this.setRawEventDefs(e.events), $retHtml;
      }, Editor;
    }(o.default);
    res.default = event;
    event.defineStandardProps({
      events : false
    });
  }, function(canCreateDiscussions, e, require) {
    Object.defineProperty(e, "__esModule", {
      value : true
    });
    var $ = require(3);
    var shape = require(4);
    var newOrg = function() {
      /**
       * @param {!HTMLElement} options
       * @return {undefined}
       */
      function Node(options) {
        /** @type {boolean} */
        this.isHorizontal = false;
        /** @type {boolean} */
        this.isVertical = false;
        this.els = $(options.els);
        this.isHorizontal = options.isHorizontal;
        this.isVertical = options.isVertical;
        this.forcedOffsetParentEl = options.offsetParent ? $(options.offsetParent) : null;
      }
      return Node.prototype.build = function() {
        var offsetParentEl = this.forcedOffsetParentEl;
        if (!offsetParentEl && this.els.length > 0) {
          offsetParentEl = this.els.eq(0).offsetParent();
        }
        this.origin = offsetParentEl ? offsetParentEl.offset() : null;
        this.boundingRect = this.queryBoundingRect();
        if (this.isHorizontal) {
          this.buildElHorizontals();
        }
        if (this.isVertical) {
          this.buildElVerticals();
        }
      }, Node.prototype.clear = function() {
        /** @type {null} */
        this.origin = null;
        /** @type {null} */
        this.boundingRect = null;
        /** @type {null} */
        this.lefts = null;
        /** @type {null} */
        this.rights = null;
        /** @type {null} */
        this.tops = null;
        /** @type {null} */
        this.bottoms = null;
      }, Node.prototype.ensureBuilt = function() {
        if (!this.origin) {
          this.build();
        }
      }, Node.prototype.buildElHorizontals = function() {
        /** @type {!Array} */
        var lefts = [];
        /** @type {!Array} */
        var rights = [];
        this.els.each(function(n, directions) {
          var o = $(directions);
          var left = o.offset().left;
          var width = o.outerWidth();
          lefts.push(left);
          rights.push(left + width);
        });
        /** @type {!Array} */
        this.lefts = lefts;
        /** @type {!Array} */
        this.rights = rights;
      }, Node.prototype.buildElVerticals = function() {
        /** @type {!Array} */
        var tops = [];
        /** @type {!Array} */
        var bottoms = [];
        this.els.each(function(n, directions) {
          var o = $(directions);
          var top = o.offset().top;
          var height = o.outerHeight();
          tops.push(top);
          bottoms.push(top + height);
        });
        /** @type {!Array} */
        this.tops = tops;
        /** @type {!Array} */
        this.bottoms = bottoms;
      }, Node.prototype.getHorizontalIndex = function(leftOffset) {
        this.ensureBuilt();
        var i;
        var lefts = this.lefts;
        var rights = this.rights;
        var len = lefts.length;
        /** @type {number} */
        i = 0;
        for (; i < len; i++) {
          if (leftOffset >= lefts[i] && leftOffset < rights[i]) {
            return i;
          }
        }
      }, Node.prototype.getVerticalIndex = function(topOffset) {
        this.ensureBuilt();
        var i;
        var tops = this.tops;
        var bottoms = this.bottoms;
        var len = tops.length;
        /** @type {number} */
        i = 0;
        for (; i < len; i++) {
          if (topOffset >= tops[i] && topOffset < bottoms[i]) {
            return i;
          }
        }
      }, Node.prototype.getLeftOffset = function(element) {
        return this.ensureBuilt(), this.lefts[element];
      }, Node.prototype.getLeftPosition = function(leftIndex) {
        return this.ensureBuilt(), this.lefts[leftIndex] - this.origin.left;
      }, Node.prototype.getRightOffset = function(rowId) {
        return this.ensureBuilt(), this.rights[rowId];
      }, Node.prototype.getRightPosition = function(leftIndex) {
        return this.ensureBuilt(), this.rights[leftIndex] - this.origin.left;
      }, Node.prototype.getWidth = function(leftIndex) {
        return this.ensureBuilt(), this.rights[leftIndex] - this.lefts[leftIndex];
      }, Node.prototype.getTopOffset = function(topIndex) {
        return this.ensureBuilt(), this.tops[topIndex];
      }, Node.prototype.getTopPosition = function(topIndex) {
        return this.ensureBuilt(), this.tops[topIndex] - this.origin.top;
      }, Node.prototype.getBottomOffset = function(topIndex) {
        return this.ensureBuilt(), this.bottoms[topIndex];
      }, Node.prototype.getBottomPosition = function(topIndex) {
        return this.ensureBuilt(), this.bottoms[topIndex] - this.origin.top;
      }, Node.prototype.getHeight = function(topIndex) {
        return this.ensureBuilt(), this.bottoms[topIndex] - this.tops[topIndex];
      }, Node.prototype.queryBoundingRect = function() {
        var node;
        return this.els.length > 0 && (node = shape.getScrollParent(this.els.eq(0)), !node.is(document)) ? shape.getClientRect(node) : null;
      }, Node.prototype.isPointInBounds = function(leftOffset, topOffset) {
        return this.isLeftInBounds(leftOffset) && this.isTopInBounds(topOffset);
      }, Node.prototype.isLeftInBounds = function(leftOffset) {
        return !this.boundingRect || leftOffset >= this.boundingRect.left && leftOffset < this.boundingRect.right;
      }, Node.prototype.isTopInBounds = function(topOffset) {
        return !this.boundingRect || topOffset >= this.boundingRect.top && topOffset < this.boundingRect.bottom;
      }, Node;
    }();
    e.default = newOrg;
  }, function(canCreateDiscussions, exports, require) {
    Object.defineProperty(exports, "__esModule", {
      value : true
    });
    var $ = require(3);
    var util = require(4);
    var o = require(7);
    var s = require(21);
    var Log = function() {
      /**
       * @param {!Object} options
       * @return {undefined}
       */
      function action(options) {
        /** @type {boolean} */
        this.isInteracting = false;
        /** @type {boolean} */
        this.isDistanceSurpassed = false;
        /** @type {boolean} */
        this.isDelayEnded = false;
        /** @type {boolean} */
        this.isDragging = false;
        /** @type {boolean} */
        this.isTouch = false;
        /** @type {boolean} */
        this.isGeneric = false;
        /** @type {boolean} */
        this.shouldCancelTouchScroll = true;
        /** @type {boolean} */
        this.scrollAlwaysKills = false;
        /** @type {boolean} */
        this.isAutoScroll = false;
        /** @type {number} */
        this.scrollSensitivity = 30;
        /** @type {number} */
        this.scrollSpeed = 200;
        /** @type {number} */
        this.scrollIntervalMs = 50;
        this.options = options || {};
      }
      return action.prototype.startInteraction = function(e, options) {
        if (void 0 === options && (options = {}), "mousedown" === e.type) {
          if (s.default.get().shouldIgnoreMouse()) {
            return;
          }
          if (!util.isPrimaryMouseButton(e)) {
            return;
          }
          e.preventDefault();
        }
        if (!this.isInteracting) {
          this.delay = util.firstDefined(options.delay, this.options.delay, 0);
          this.minDistance = util.firstDefined(options.distance, this.options.distance, 0);
          this.subjectEl = this.options.subjectEl;
          util.preventSelection($("body"));
          /** @type {boolean} */
          this.isInteracting = true;
          this.isTouch = util.getEvIsTouch(e);
          /** @type {boolean} */
          this.isGeneric = "dragstart" === e.type;
          /** @type {boolean} */
          this.isDelayEnded = false;
          /** @type {boolean} */
          this.isDistanceSurpassed = false;
          this.originX = util.getEvX(e);
          this.originY = util.getEvY(e);
          this.scrollEl = util.getScrollParent($(e.target));
          this.bindHandlers();
          this.initAutoScroll();
          this.handleInteractionStart(e);
          this.startDelay(e);
          if (!this.minDistance) {
            this.handleDistanceSurpassed(e);
          }
        }
      }, action.prototype.handleInteractionStart = function(ev) {
        this.trigger("interactionStart", ev);
      }, action.prototype.endInteraction = function(timeStamp, level) {
        if (this.isInteracting) {
          this.endDrag(timeStamp);
          if (this.delayTimeoutId) {
            clearTimeout(this.delayTimeoutId);
            /** @type {null} */
            this.delayTimeoutId = null;
          }
          this.destroyAutoScroll();
          this.unbindHandlers();
          /** @type {boolean} */
          this.isInteracting = false;
          this.handleInteractionEnd(timeStamp, level);
          util.allowSelection($("body"));
        }
      }, action.prototype.handleInteractionEnd = function(key, options) {
        this.trigger("interactionEnd", key, options || false);
      }, action.prototype.bindHandlers = function() {
        var account = s.default.get();
        if (this.isGeneric) {
          this.listenTo($(document), {
            drag : this.handleMove,
            dragstop : this.endInteraction
          });
        } else {
          if (this.isTouch) {
            this.listenTo(account, {
              touchmove : this.handleTouchMove,
              touchend : this.endInteraction,
              scroll : this.handleTouchScroll
            });
          } else {
            this.listenTo(account, {
              mousemove : this.handleMouseMove,
              mouseup : this.endInteraction
            });
          }
        }
        this.listenTo(account, {
          selectstart : util.preventDefault,
          contextmenu : util.preventDefault
        });
      }, action.prototype.unbindHandlers = function() {
        this.stopListeningTo(s.default.get());
        this.stopListeningTo($(document));
      }, action.prototype.startDrag = function(e, panel) {
        this.startInteraction(e, panel);
        if (!this.isDragging) {
          /** @type {boolean} */
          this.isDragging = true;
          this.handleDragStart(e);
        }
      }, action.prototype.handleDragStart = function(e) {
        this.trigger("dragStart", e);
      }, action.prototype.handleMove = function(message) {
        /** @type {number} */
        var e = util.getEvX(message) - this.originX;
        /** @type {number} */
        var f = util.getEvY(message) - this.originY;
        var minDistance = this.minDistance;
        if (!this.isDistanceSurpassed) {
          if (e * e + f * f >= minDistance * minDistance) {
            this.handleDistanceSurpassed(message);
          }
        }
        if (this.isDragging) {
          this.handleDrag(e, f, message);
        }
      }, action.prototype.handleDrag = function(width, e, id) {
        this.trigger("drag", width, e, id);
        this.updateAutoScroll(id);
      }, action.prototype.endDrag = function(e) {
        if (this.isDragging) {
          /** @type {boolean} */
          this.isDragging = false;
          this.handleDragEnd(e);
        }
      }, action.prototype.handleDragEnd = function(e) {
        this.trigger("dragEnd", e);
      }, action.prototype.startDelay = function(e) {
        var draggingArgs = this;
        if (this.delay) {
          /** @type {number} */
          this.delayTimeoutId = setTimeout(function() {
            draggingArgs.handleDelayEnd(e);
          }, this.delay);
        } else {
          this.handleDelayEnd(e);
        }
      }, action.prototype.handleDelayEnd = function(event) {
        /** @type {boolean} */
        this.isDelayEnded = true;
        if (this.isDistanceSurpassed) {
          this.startDrag(event);
        }
      }, action.prototype.handleDistanceSurpassed = function(event) {
        /** @type {boolean} */
        this.isDistanceSurpassed = true;
        if (this.isDelayEnded) {
          this.startDrag(event);
        }
      }, action.prototype.handleTouchMove = function(e) {
        if (this.isDragging && this.shouldCancelTouchScroll) {
          e.preventDefault();
        }
        this.handleMove(e);
      }, action.prototype.handleMouseMove = function(e) {
        this.handleMove(e);
      }, action.prototype.handleTouchScroll = function(timeStamp) {
        if (!(this.isDragging && !this.scrollAlwaysKills)) {
          this.endInteraction(timeStamp, true);
        }
      }, action.prototype.trigger = function(type) {
        /** @type {!Array} */
        var writes = [];
        /** @type {number} */
        var i = 1;
        for (; i < arguments.length; i++) {
          writes[i - 1] = arguments[i];
        }
        if (this.options[type]) {
          this.options[type].apply(this, writes);
        }
        if (this["_" + type]) {
          this["_" + type].apply(this, writes);
        }
      }, action.prototype.initAutoScroll = function() {
        var scrollEl = this.scrollEl;
        this.isAutoScroll = this.options.scroll && scrollEl && !scrollEl.is(window) && !scrollEl.is(document);
        if (this.isAutoScroll) {
          this.listenTo(scrollEl, "scroll", util.debounce(this.handleDebouncedScroll, 100));
        }
      }, action.prototype.destroyAutoScroll = function() {
        this.endAutoScroll();
        if (this.isAutoScroll) {
          this.stopListeningTo(this.scrollEl, "scroll");
        }
      }, action.prototype.computeScrollBounds = function() {
        if (this.isAutoScroll) {
          this.scrollBounds = util.getOuterRect(this.scrollEl);
        }
      }, action.prototype.updateAutoScroll = function(ev) {
        var topCloseness;
        var bottomCloseness;
        var leftCloseness;
        var rightCloseness;
        var sensitivity = this.scrollSensitivity;
        var bounds = this.scrollBounds;
        /** @type {number} */
        var topVel = 0;
        /** @type {number} */
        var leftVel = 0;
        if (bounds) {
          /** @type {number} */
          topCloseness = (sensitivity - (util.getEvY(ev) - bounds.top)) / sensitivity;
          /** @type {number} */
          bottomCloseness = (sensitivity - (bounds.bottom - util.getEvY(ev))) / sensitivity;
          /** @type {number} */
          leftCloseness = (sensitivity - (util.getEvX(ev) - bounds.left)) / sensitivity;
          /** @type {number} */
          rightCloseness = (sensitivity - (bounds.right - util.getEvX(ev))) / sensitivity;
          if (topCloseness >= 0 && topCloseness <= 1) {
            /** @type {number} */
            topVel = topCloseness * this.scrollSpeed * -1;
          } else {
            if (bottomCloseness >= 0 && bottomCloseness <= 1) {
              /** @type {number} */
              topVel = bottomCloseness * this.scrollSpeed;
            }
          }
          if (leftCloseness >= 0 && leftCloseness <= 1) {
            /** @type {number} */
            leftVel = leftCloseness * this.scrollSpeed * -1;
          } else {
            if (rightCloseness >= 0 && rightCloseness <= 1) {
              /** @type {number} */
              leftVel = rightCloseness * this.scrollSpeed;
            }
          }
        }
        this.setScrollVel(topVel, leftVel);
      }, action.prototype.setScrollVel = function(topVel, leftVel) {
        /** @type {number} */
        this.scrollTopVel = topVel;
        /** @type {number} */
        this.scrollLeftVel = leftVel;
        this.constrainScrollVel();
        if (!(!this.scrollTopVel && !this.scrollLeftVel || this.scrollIntervalId)) {
          /** @type {number} */
          this.scrollIntervalId = setInterval(util.proxy(this, "scrollIntervalFunc"), this.scrollIntervalMs);
        }
      }, action.prototype.constrainScrollVel = function() {
        var el = this.scrollEl;
        if (this.scrollTopVel < 0) {
          if (el.scrollTop() <= 0) {
            /** @type {number} */
            this.scrollTopVel = 0;
          }
        } else {
          if (this.scrollTopVel > 0 && el.scrollTop() + el[0].clientHeight >= el[0].scrollHeight) {
            /** @type {number} */
            this.scrollTopVel = 0;
          }
        }
        if (this.scrollLeftVel < 0) {
          if (el.scrollLeft() <= 0) {
            /** @type {number} */
            this.scrollLeftVel = 0;
          }
        } else {
          if (this.scrollLeftVel > 0 && el.scrollLeft() + el[0].clientWidth >= el[0].scrollWidth) {
            /** @type {number} */
            this.scrollLeftVel = 0;
          }
        }
      }, action.prototype.scrollIntervalFunc = function() {
        var scrollEl = this.scrollEl;
        /** @type {number} */
        var frac = this.scrollIntervalMs / 1E3;
        if (this.scrollTopVel) {
          scrollEl.scrollTop(scrollEl.scrollTop() + this.scrollTopVel * frac);
        }
        if (this.scrollLeftVel) {
          scrollEl.scrollLeft(scrollEl.scrollLeft() + this.scrollLeftVel * frac);
        }
        this.constrainScrollVel();
        if (!(this.scrollTopVel || this.scrollLeftVel)) {
          this.endAutoScroll();
        }
      }, action.prototype.endAutoScroll = function() {
        if (this.scrollIntervalId) {
          clearInterval(this.scrollIntervalId);
          /** @type {null} */
          this.scrollIntervalId = null;
          this.handleScrollEnd();
        }
      }, action.prototype.handleDebouncedScroll = function() {
        if (!this.scrollIntervalId) {
          this.handleScrollEnd();
        }
      }, action.prototype.handleScrollEnd = function() {
      }, action;
    }();
    exports.default = Log;
    o.default.mixInto(Log);
  }, function(canCreateDiscussions, e, observable) {
    Object.defineProperty(e, "__esModule", {
      value : true
    });
    var Util = observable(2);
    var self = observable(4);
    var o = observable(14);
    var newOrg = function(_super) {
      /**
       * @return {?}
       */
      function Editor() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      return Util.__extends(Editor, _super), Editor.prototype.updateDayTable = function() {
        var daysPerRow;
        var e;
        var rowCnt;
        var ifTag = this;
        var view = ifTag.view;
        var calendar = view.calendar;
        var date = calendar.msToUtcMoment(ifTag.dateProfile.renderUnzonedRange.startMs, true);
        var endValue = calendar.msToUtcMoment(ifTag.dateProfile.renderUnzonedRange.endMs, true);
        /** @type {number} */
        var msg = -1;
        /** @type {!Array} */
        var ws = [];
        /** @type {!Array} */
        var dayDates = [];
        for (; date.isBefore(endValue);) {
          if (view.isHiddenDay(date)) {
            ws.push(msg + .5);
          } else {
            msg++;
            ws.push(msg);
            dayDates.push(date.clone());
          }
          date.add(1, "days");
        }
        if (this.breakOnWeeks) {
          e = dayDates[0].day();
          /** @type {number} */
          daysPerRow = 1;
          for (; daysPerRow < dayDates.length && dayDates[daysPerRow].day() !== e; daysPerRow++) {
          }
          /** @type {number} */
          rowCnt = Math.ceil(dayDates.length / daysPerRow);
        } else {
          /** @type {number} */
          rowCnt = 1;
          /** @type {number} */
          daysPerRow = dayDates.length;
        }
        /** @type {!Array} */
        this.dayDates = dayDates;
        /** @type {!Array} */
        this.dayIndices = ws;
        /** @type {number} */
        this.daysPerRow = daysPerRow;
        /** @type {number} */
        this.rowCnt = rowCnt;
        this.updateDayTableCols();
      }, Editor.prototype.updateDayTableCols = function() {
        this.colCnt = this.computeColCnt();
        this.colHeadFormat = this.opt("columnHeaderFormat") || this.opt("columnFormat") || this.computeColHeadFormat();
      }, Editor.prototype.computeColCnt = function() {
        return this.daysPerRow;
      }, Editor.prototype.getCellDate = function(row, col) {
        return this.dayDates[this.getCellDayIndex(row, col)].clone();
      }, Editor.prototype.getCellRange = function(row, col) {
        var start = this.getCellDate(row, col);
        return {
          start : start,
          end : start.clone().add(1, "days")
        };
      }, Editor.prototype.getCellDayIndex = function(row, col) {
        return row * this.daysPerRow + this.getColDayIndex(col);
      }, Editor.prototype.getColDayIndex = function(col) {
        return this.isRTL ? this.colCnt - 1 - col : col;
      }, Editor.prototype.getDateDayIndex = function(date) {
        var filteredList = this.dayIndices;
        var index = date.diff(this.dayDates[0], "days");
        return index < 0 ? filteredList[0] - 1 : index >= filteredList.length ? filteredList[filteredList.length - 1] + 1 : filteredList[index];
      }, Editor.prototype.computeColHeadFormat = function() {
        return this.rowCnt > 1 || this.colCnt > 10 ? "ddd" : this.colCnt > 1 ? this.opt("dayOfMonthFormat") : "dddd";
      }, Editor.prototype.sliceRangeByRow = function(range) {
        var row;
        var rowFirst;
        var i;
        var segFirst;
        var segLast;
        var daysPerRow = this.daysPerRow;
        var normalRange = this.view.computeDayRange(range);
        var rangeFirst = this.getDateDayIndex(normalRange.start);
        var rangeLast = this.getDateDayIndex(normalRange.end.clone().subtract(1, "days"));
        /** @type {!Array} */
        var segs = [];
        /** @type {number} */
        row = 0;
        for (; row < this.rowCnt; row++) {
          /** @type {number} */
          rowFirst = row * daysPerRow;
          /** @type {number} */
          i = rowFirst + daysPerRow - 1;
          /** @type {number} */
          segFirst = Math.max(rangeFirst, rowFirst);
          /** @type {number} */
          segLast = Math.min(rangeLast, i);
          /** @type {number} */
          segFirst = Math.ceil(segFirst);
          /** @type {number} */
          segLast = Math.floor(segLast);
          if (segFirst <= segLast) {
            segs.push({
              row : row,
              firstRowDayIndex : segFirst - rowFirst,
              lastRowDayIndex : segLast - rowFirst,
              isStart : segFirst === rangeFirst,
              isEnd : segLast === rangeLast
            });
          }
        }
        return segs;
      }, Editor.prototype.sliceRangeByDay = function(range) {
        var row;
        var rowFirst;
        var vSectors;
        var i;
        var segFirst;
        var segLast;
        var daysPerRow = this.daysPerRow;
        var normalRange = this.view.computeDayRange(range);
        var rangeFirst = this.getDateDayIndex(normalRange.start);
        var rangeLast = this.getDateDayIndex(normalRange.end.clone().subtract(1, "days"));
        /** @type {!Array} */
        var segs = [];
        /** @type {number} */
        row = 0;
        for (; row < this.rowCnt; row++) {
          /** @type {number} */
          rowFirst = row * daysPerRow;
          /** @type {number} */
          vSectors = rowFirst + daysPerRow - 1;
          /** @type {number} */
          i = rowFirst;
          for (; i <= vSectors; i++) {
            /** @type {number} */
            segFirst = Math.max(rangeFirst, i);
            /** @type {number} */
            segLast = Math.min(rangeLast, i);
            /** @type {number} */
            segFirst = Math.ceil(segFirst);
            /** @type {number} */
            segLast = Math.floor(segLast);
            if (segFirst <= segLast) {
              segs.push({
                row : row,
                firstRowDayIndex : segFirst - rowFirst,
                lastRowDayIndex : segLast - rowFirst,
                isStart : segFirst === rangeFirst,
                isEnd : segLast === rangeLast
              });
            }
          }
        }
        return segs;
      }, Editor.prototype.renderHeadHtml = function() {
        var Dom = this.view.calendar.theme;
        return '<div class="fc-row ' + Dom.getClass("headerRow") + '"><table class="' + Dom.getClass("tableGrid") + '"><thead>' + this.renderHeadTrHtml() + "</thead></table></div>";
      }, Editor.prototype.renderHeadIntroHtml = function() {
        return this.renderIntroHtml();
      }, Editor.prototype.renderHeadTrHtml = function() {
        return "<tr>" + (this.isRTL ? "" : this.renderHeadIntroHtml()) + this.renderHeadDateCellsHtml() + (this.isRTL ? this.renderHeadIntroHtml() : "") + "</tr>";
      }, Editor.prototype.renderHeadDateCellsHtml = function() {
        var col;
        var date;
        /** @type {!Array} */
        var htmls = [];
        /** @type {number} */
        col = 0;
        for (; col < this.colCnt; col++) {
          date = this.getCellDate(0, col);
          htmls.push(this.renderHeadDateCellHtml(date));
        }
        return htmls.join("");
      }, Editor.prototype.renderHeadDateCellHtml = function(date, colspan, otherAttrs) {
        var innerHtml;
        var scope = this;
        var view = scope.view;
        var isDateValid = scope.dateProfile.activeUnzonedRange.containsDate(date);
        /** @type {!Array} */
        var classNames = ["fc-day-header", view.calendar.theme.getClass("widgetHeader")];
        return innerHtml = "function" == typeof scope.opt("columnHeaderHtml") ? scope.opt("columnHeaderHtml")(date) : "function" == typeof scope.opt("columnHeaderText") ? self.htmlEscape(scope.opt("columnHeaderText")(date)) : self.htmlEscape(date.format(scope.colHeadFormat)), 1 === scope.rowCnt ? classNames = classNames.concat(scope.getDayClasses(date, true)) : classNames.push("fc-" + self.dayIDs[date.day()]), '<th class="' + classNames.join(" ") + '"' + (1 === (isDateValid && scope.rowCnt) ? ' data-date="' + 
        date.format("YYYY-MM-DD") + '"' : "") + (colspan > 1 ? ' colspan="' + colspan + '"' : "") + (otherAttrs ? " " + otherAttrs : "") + ">" + (isDateValid ? view.buildGotoAnchorHtml({
          date : date,
          forceOff : scope.rowCnt > 1 || 1 === scope.colCnt
        }, innerHtml) : innerHtml) + "</th>";
      }, Editor.prototype.renderBgTrHtml = function(row) {
        return "<tr>" + (this.isRTL ? "" : this.renderBgIntroHtml(row)) + this.renderBgCellsHtml(row) + (this.isRTL ? this.renderBgIntroHtml(row) : "") + "</tr>";
      }, Editor.prototype.renderBgIntroHtml = function(row) {
        return this.renderIntroHtml();
      }, Editor.prototype.renderBgCellsHtml = function(row) {
        var col;
        var date;
        /** @type {!Array} */
        var htmls = [];
        /** @type {number} */
        col = 0;
        for (; col < this.colCnt; col++) {
          date = this.getCellDate(row, col);
          htmls.push(this.renderBgCellHtml(date));
        }
        return htmls.join("");
      }, Editor.prototype.renderBgCellHtml = function(date, otherAttrs) {
        var scope = this;
        var view = scope.view;
        var isDateValid = scope.dateProfile.activeUnzonedRange.containsDate(date);
        var classes = scope.getDayClasses(date);
        return classes.unshift("fc-day", view.calendar.theme.getClass("widgetContent")), '<td class="' + classes.join(" ") + '"' + (isDateValid ? ' data-date="' + date.format("YYYY-MM-DD") + '"' : "") + (otherAttrs ? " " + otherAttrs : "") + "></td>";
      }, Editor.prototype.renderIntroHtml = function() {
      }, Editor.prototype.bookendCells = function(trEl) {
        var introHtml = this.renderIntroHtml();
        if (introHtml) {
          if (this.isRTL) {
            trEl.append(introHtml);
          } else {
            trEl.prepend(introHtml);
          }
        }
      }, Editor;
    }(o.default);
    e.default = newOrg;
  }, function(canCreateDiscussions, e) {
    Object.defineProperty(e, "__esModule", {
      value : true
    });
    var newOrg = function() {
      /**
       * @param {string} options
       * @param {!Object} text
       * @return {undefined}
       */
      function TextCell(options, text) {
        /** @type {string} */
        this.component = options;
        /** @type {!Object} */
        this.fillRenderer = text;
      }
      return TextCell.prototype.render = function(t) {
        var view = this.component;
        var A = view._getDateProfile().activeUnzonedRange;
        var links = t.buildEventInstanceGroup(view.hasAllDayBusinessHours, A);
        var skeletonId = links ? view.eventRangesToEventFootprints(links.sliceRenderRanges(A)) : [];
        this.renderEventFootprints(skeletonId);
      }, TextCell.prototype.renderEventFootprints = function(name) {
        var val = this.component.eventFootprintsToSegs(name);
        this.renderSegs(val);
        this.segs = val;
      }, TextCell.prototype.renderSegs = function(type) {
        if (this.fillRenderer) {
          this.fillRenderer.renderSegs("businessHours", type, {
            getClasses : function(object) {
              return ["fc-nonbusiness", "fc-bgevent"];
            }
          });
        }
      }, TextCell.prototype.unrender = function() {
        if (this.fillRenderer) {
          this.fillRenderer.unrender("businessHours");
        }
        /** @type {null} */
        this.segs = null;
      }, TextCell.prototype.getSegs = function() {
        return this.segs || [];
      }, TextCell;
    }();
    e.default = newOrg;
  }, function(canCreateDiscussions, e, require) {
    Object.defineProperty(e, "__esModule", {
      value : true
    });
    var $ = require(3);
    var frontEndModuleConfig = require(4);
    var newOrg = function() {
      /**
       * @param {!Object} component
       * @return {undefined}
       */
      function MeteorDataManager(component) {
        /** @type {string} */
        this.fillSegTag = "div";
        /** @type {!Object} */
        this.component = component;
        this.elsByFill = {};
      }
      return MeteorDataManager.prototype.renderFootprint = function(name, e, n) {
        this.renderSegs(name, this.component.componentFootprintToSegs(e), n);
      }, MeteorDataManager.prototype.renderSegs = function(type, item, id) {
        var node;
        return item = this.buildSegEls(type, item, id), node = this.attachSegEls(type, item), node && this.reportEls(type, node), item;
      }, MeteorDataManager.prototype.unrender = function(type) {
        var el = this.elsByFill[type];
        if (el) {
          el.remove();
          delete this.elsByFill[type];
        }
      }, MeteorDataManager.prototype.buildSegEls = function(type, path, options) {
        var i;
        var _this = this;
        /** @type {string} */
        var html = "";
        /** @type {!Array} */
        var linesTrimmed = [];
        if (path.length) {
          /** @type {number} */
          i = 0;
          for (; i < path.length; i++) {
            html = html + this.buildSegHtml(type, path[i], options);
          }
          $(html).each(function(index, text) {
            var item = path[index];
            var el = $(text);
            if (options.filterEl) {
              el = options.filterEl(item, el);
            }
            if (el) {
              el = $(el);
              if (el.is(_this.fillSegTag)) {
                item.el = el;
                linesTrimmed.push(item);
              }
            }
          });
        }
        return linesTrimmed;
      }, MeteorDataManager.prototype.buildSegHtml = function(value, element, options) {
        var codesDeps = options.getClasses ? options.getClasses(element) : [];
        var enable_keys = frontEndModuleConfig.cssToStr(options.getCss ? options.getCss(element) : {});
        return "<" + this.fillSegTag + (codesDeps.length ? ' class="' + codesDeps.join(" ") + '"' : "") + (enable_keys ? ' style="' + enable_keys + '"' : "") + " />";
      }, MeteorDataManager.prototype.attachSegEls = function(event, photographer) {
      }, MeteorDataManager.prototype.reportEls = function(type, nodes) {
        if (this.elsByFill[type]) {
          this.elsByFill[type] = this.elsByFill[type].add(nodes);
        } else {
          this.elsByFill[type] = $(nodes);
        }
      }, MeteorDataManager;
    }();
    e.default = newOrg;
  }, function(canCreateDiscussions, e, $) {
    Object.defineProperty(e, "__esModule", {
      value : true
    });
    var templates = $(13);
    var errors = $(36);
    var field = $(6);
    var newOrg = function() {
      /**
       * @param {string} component
       * @param {!Object} e
       * @return {undefined}
       */
      function callback(component, e) {
        this.view = component._getView();
        /** @type {string} */
        this.component = component;
        /** @type {!Object} */
        this.eventRenderer = e;
      }
      return callback.prototype.renderComponentFootprint = function(interval) {
        this.renderEventFootprints([this.fabricateEventFootprint(interval)]);
      }, callback.prototype.renderEventDraggingFootprints = function(s, index, event) {
        this.renderEventFootprints(s, index, "fc-dragging", event ? null : this.view.opt("dragOpacity"));
      }, callback.prototype.renderEventResizingFootprints = function(event, fn, add) {
        this.renderEventFootprints(event, fn, "fc-resizing");
      }, callback.prototype.renderEventFootprints = function(name, val, n, i) {
        var index;
        var array = this.component.eventFootprintsToSegs(name);
        /** @type {string} */
        var classIdPrefix = "fc-helper " + (n || "");
        array = this.eventRenderer.renderFgSegEls(array);
        /** @type {number} */
        index = 0;
        for (; index < array.length; index++) {
          array[index].el.addClass(classIdPrefix);
        }
        if (null != i) {
          /** @type {number} */
          index = 0;
          for (; index < array.length; index++) {
            array[index].el.css("opacity", i);
          }
        }
        this.helperEls = this.renderSegs(array, val);
      }, callback.prototype.renderSegs = function(type, keys) {
      }, callback.prototype.unrender = function() {
        if (this.helperEls) {
          this.helperEls.remove();
          /** @type {null} */
          this.helperEls = null;
        }
      }, callback.prototype.fabricateEventFootprint = function(id) {
        var data;
        var value = this.view.calendar;
        var bar = value.footprintToDateProfile(id);
        var error = new templates.default(new field.default(value));
        return error.dateProfile = bar, data = error.buildInstance(), new errors.default(id, error, data);
      }, callback;
    }();
    e.default = newOrg;
  }, function(canCreateDiscussions, e, parse) {
    Object.defineProperty(e, "__esModule", {
      value : true
    });
    var tslib_1 = parse(2);
    var proxy = parse(21);
    var mappings = parse(15);
    var newOrg = function(_super) {
      /**
       * @return {?}
       */
      function ParseError() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      return tslib_1.__extends(ParseError, _super), ParseError.prototype.bindToEl = function(moduleObjects) {
        var _module = this.component;
        _module.bindSegHandlerToEl(moduleObjects, "click", this.handleClick.bind(this));
        _module.bindSegHandlerToEl(moduleObjects, "mouseenter", this.handleMouseover.bind(this));
        _module.bindSegHandlerToEl(moduleObjects, "mouseleave", this.handleMouseout.bind(this));
      }, ParseError.prototype.handleClick = function(item, event) {
        if (false === this.component.publiclyTrigger("eventClick", {
          context : item.el[0],
          args : [item.footprint.getEventLegacy(), event, this.view]
        })) {
          event.preventDefault();
        }
      }, ParseError.prototype.handleMouseover = function(component, event) {
        if (!(proxy.default.get().shouldIgnoreMouse() || this.mousedOverSeg)) {
          /** @type {!Object} */
          this.mousedOverSeg = component;
          if (this.view.isEventDefResizable(component.footprint.eventDef)) {
            component.el.addClass("fc-allow-mouse-resize");
          }
          this.component.publiclyTrigger("eventMouseover", {
            context : component.el[0],
            args : [component.footprint.getEventLegacy(), event, this.view]
          });
        }
      }, ParseError.prototype.handleMouseout = function(item, to) {
        if (this.mousedOverSeg) {
          /** @type {null} */
          this.mousedOverSeg = null;
          if (this.view.isEventDefResizable(item.footprint.eventDef)) {
            item.el.removeClass("fc-allow-mouse-resize");
          }
          this.component.publiclyTrigger("eventMouseout", {
            context : item.el[0],
            args : [item.footprint.getEventLegacy(), to || {}, this.view]
          });
        }
      }, ParseError.prototype.end = function() {
        if (this.mousedOverSeg) {
          this.handleMouseout(this.mousedOverSeg);
        }
      }, ParseError;
    }(mappings.default);
    e.default = newOrg;
  }, function(canCreateDiscussions, exports, n) {
    Object.defineProperty(exports, "__esModule", {
      value : true
    });
    var tslib_1 = n(2);
    var i = n(14);
    var o = n(245);
    var p = n(225);
    var a = n(59);
    var h = n(224);
    var m = n(223);
    var r = n(222);
    var CepPromiseError = function(_super) {
      /**
       * @return {?}
       */
      function ParseError() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      return tslib_1.__extends(ParseError, _super), ParseError;
    }(i.default);
    exports.default = CepPromiseError;
    CepPromiseError.prototype.dateClickingClass = o.default;
    CepPromiseError.prototype.dateSelectingClass = p.default;
    CepPromiseError.prototype.eventPointingClass = a.default;
    CepPromiseError.prototype.eventDraggingClass = h.default;
    CepPromiseError.prototype.eventResizingClass = m.default;
    CepPromiseError.prototype.externalDroppingClass = r.default;
  }, function(canCreateDiscussions, exports, _interopRequireDefault) {
    Object.defineProperty(exports, "__esModule", {
      value : true
    });
    var tslib_1 = _interopRequireDefault(2);
    var $ = _interopRequireDefault(3);
    var text = _interopRequireDefault(4);
    var _deepAssign2 = _interopRequireDefault(53);
    var _noframeworkWaypoints2 = _interopRequireDefault(249);
    var _renderer2 = _interopRequireDefault(5);
    var _className2 = _interopRequireDefault(12);
    var _UiIcon2 = _interopRequireDefault(36);
    var _readArchive2 = _interopRequireDefault(56);
    var _colorsList2 = _interopRequireDefault(60);
    var _validateUrl2 = _interopRequireDefault(40);
    var _aliapp2 = _interopRequireDefault(55);
    var _browser2 = _interopRequireDefault(250);
    var _thirdapp2 = _interopRequireDefault(251);
    var _params2 = _interopRequireDefault(252);
    var Content = function(_super) {
      /**
       * @param {?} name
       * @return {?}
       */
      function ParseError(name) {
        var view = _super.call(this, name) || this;
        return view.cellWeekNumbersVisible = false, view.bottomCoordPadding = 0, view.isRigid = false, view.hasAllDayBusinessHours = true, view;
      }
      return tslib_1.__extends(ParseError, _super), ParseError.prototype.componentFootprintToSegs = function(a22) {
        var i;
        var seg;
        var segs = this.sliceRangeByRow(a22.unzonedRange);
        /** @type {number} */
        i = 0;
        for (; i < segs.length; i++) {
          seg = segs[i];
          if (this.isRTL) {
            /** @type {number} */
            seg.leftCol = this.daysPerRow - 1 - seg.lastRowDayIndex;
            /** @type {number} */
            seg.rightCol = this.daysPerRow - 1 - seg.firstRowDayIndex;
          } else {
            seg.leftCol = seg.firstRowDayIndex;
            seg.rightCol = seg.lastRowDayIndex;
          }
        }
        return segs;
      }, ParseError.prototype.renderDates = function(isRigid) {
        /** @type {!Object} */
        this.dateProfile = isRigid;
        this.updateDayTable();
        this.renderGrid();
      }, ParseError.prototype.unrenderDates = function() {
        this.removeSegPopover();
      }, ParseError.prototype.renderGrid = function() {
        var row;
        var col;
        var target = this.view;
        var rowCnt = this.rowCnt;
        var colCnt = this.colCnt;
        /** @type {string} */
        var html = "";
        if (this.headContainerEl) {
          this.headContainerEl.html(this.renderHeadHtml());
        }
        /** @type {number} */
        row = 0;
        for (; row < rowCnt; row++) {
          html = html + this.renderDayRowHtml(row, this.isRigid);
        }
        this.el.html(html);
        this.rowEls = this.el.find(".fc-row");
        this.cellEls = this.el.find(".fc-day, .fc-disabled-day");
        this.rowCoordCache = new _deepAssign2.default({
          els : this.rowEls,
          isVertical : true
        });
        this.colCoordCache = new _deepAssign2.default({
          els : this.cellEls.slice(0, this.colCnt),
          isHorizontal : true
        });
        /** @type {number} */
        row = 0;
        for (; row < rowCnt; row++) {
          /** @type {number} */
          col = 0;
          for (; col < colCnt; col++) {
            this.publiclyTrigger("dayRender", {
              context : target,
              args : [this.getCellDate(row, col), this.getCellEl(row, col), target]
            });
          }
        }
      }, ParseError.prototype.renderDayRowHtml = function(row, isRigid) {
        var me = this.view.calendar.theme;
        /** @type {!Array} */
        var classes = ["fc-row", "fc-week", me.getClass("dayRow")];
        return isRigid && classes.push("fc-rigid"), '<div class="' + classes.join(" ") + '"><div class="fc-bg"><table class="' + me.getClass("tableGrid") + '">' + this.renderBgTrHtml(row) + '</table></div><div class="fc-content-skeleton"><table>' + (this.getIsNumbersVisible() ? "<thead>" + this.renderNumberTrHtml(row) + "</thead>" : "") + "</table></div></div>";
      }, ParseError.prototype.getIsNumbersVisible = function() {
        return this.getIsDayNumbersVisible() || this.cellWeekNumbersVisible;
      }, ParseError.prototype.getIsDayNumbersVisible = function() {
        return this.rowCnt > 1;
      }, ParseError.prototype.renderNumberTrHtml = function(row) {
        return "<tr>" + (this.isRTL ? "" : this.renderNumberIntroHtml(row)) + this.renderNumberCellsHtml(row) + (this.isRTL ? this.renderNumberIntroHtml(row) : "") + "</tr>";
      }, ParseError.prototype.renderNumberIntroHtml = function(row) {
        return this.renderIntroHtml();
      }, ParseError.prototype.renderNumberCellsHtml = function(row) {
        var col;
        var date;
        /** @type {!Array} */
        var htmls = [];
        /** @type {number} */
        col = 0;
        for (; col < this.colCnt; col++) {
          date = this.getCellDate(row, col);
          htmls.push(this.renderNumberCellHtml(date));
        }
        return htmls.join("");
      }, ParseError.prototype.renderNumberCellHtml = function(date) {
        var classes;
        var n;
        var view = this.view;
        /** @type {string} */
        var output = "";
        var title = this.dateProfile.activeUnzonedRange.containsDate(date);
        var add_title_to_td = this.getIsDayNumbersVisible() && title;
        return add_title_to_td || this.cellWeekNumbersVisible ? (classes = this.getDayClasses(date), classes.unshift("fc-day-top"), this.cellWeekNumbersVisible && (n = "ISO" === date._locale._fullCalendar_weekCalc ? 1 : date._locale.firstDayOfWeek()), output = output + ('<td class="' + classes.join(" ") + '"' + (title ? ' data-date="' + date.format() + '"' : "") + ">"), this.cellWeekNumbersVisible && date.day() === n && (output = output + view.buildGotoAnchorHtml({
          date : date,
          type : "week"
        }, {
          class : "fc-week-number"
        }, date.format("w"))), add_title_to_td && (output = output + view.buildGotoAnchorHtml(date, {
          class : "fc-day-number"
        }, date.format("D"))), output = output + "</td>") : "<td/>";
      }, ParseError.prototype.prepareHits = function() {
        this.colCoordCache.build();
        this.rowCoordCache.build();
        this.rowCoordCache.bottoms[this.rowCnt - 1] += this.bottomCoordPadding;
      }, ParseError.prototype.releaseHits = function() {
        this.colCoordCache.clear();
        this.rowCoordCache.clear();
      }, ParseError.prototype.queryHit = function(leftOffset, topOffset) {
        if (this.colCoordCache.isLeftInBounds(leftOffset) && this.rowCoordCache.isTopInBounds(topOffset)) {
          var col = this.colCoordCache.getHorizontalIndex(leftOffset);
          var row = this.rowCoordCache.getVerticalIndex(topOffset);
          if (null != row && null != col) {
            return this.getCellHit(row, col);
          }
        }
      }, ParseError.prototype.getHitFootprint = function(hit) {
        var _this = this.getCellRange(hit.row, hit.col);
        return new _className2.default(new _renderer2.default(_this.start, _this.end), true);
      }, ParseError.prototype.getHitEl = function(hit) {
        return this.getCellEl(hit.row, hit.col);
      }, ParseError.prototype.getCellHit = function(row, col) {
        return {
          row : row,
          col : col,
          component : this,
          left : this.colCoordCache.getLeftOffset(col),
          right : this.colCoordCache.getRightOffset(col),
          top : this.rowCoordCache.getTopOffset(row),
          bottom : this.rowCoordCache.getBottomOffset(row)
        };
      }, ParseError.prototype.getCellEl = function(row, col) {
        return this.cellEls.eq(row * this.colCnt + col);
      }, ParseError.prototype.executeEventUnrender = function() {
        this.removeSegPopover();
        _super.prototype.executeEventUnrender.call(this);
      }, ParseError.prototype.getOwnEventSegs = function() {
        return _super.prototype.getOwnEventSegs.call(this).concat(this.popoverSegs || []);
      }, ParseError.prototype.renderDrag = function(value, item, eventLocation) {
        var i;
        /** @type {number} */
        i = 0;
        for (; i < value.length; i++) {
          this.renderHighlight(value[i].componentFootprint);
        }
        if (value.length && item && item.component !== this) {
          return this.helperRenderer.renderEventDraggingFootprints(value, item, eventLocation), true;
        }
      }, ParseError.prototype.unrenderDrag = function() {
        this.unrenderHighlight();
        this.helperRenderer.unrender();
      }, ParseError.prototype.renderEventResize = function(range, seg, className) {
        var index;
        /** @type {number} */
        index = 0;
        for (; index < range.length; index++) {
          this.renderHighlight(range[index].componentFootprint);
        }
        this.helperRenderer.renderEventResizingFootprints(range, seg, className);
      }, ParseError.prototype.unrenderEventResize = function() {
        this.unrenderHighlight();
        this.helperRenderer.unrender();
      }, ParseError.prototype.removeSegPopover = function() {
        if (this.segPopover) {
          this.segPopover.hide();
        }
      }, ParseError.prototype.limitRows = function(options) {
        var row;
        var rowLevelLimit;
        var trackNameRows = this.eventRenderer.rowStructs || [];
        /** @type {number} */
        row = 0;
        for (; row < trackNameRows.length; row++) {
          this.unlimitRow(row);
          if (false !== (rowLevelLimit = !!options && ("number" == typeof options ? options : this.computeRowLevelLimit(row)))) {
            this.limitRow(row, rowLevelLimit);
          }
        }
      }, ParseError.prototype.computeRowLevelLimit = function(row) {
        /**
         * @param {?} i
         * @param {?} childNode
         * @return {undefined}
         */
        function iterInnerHeights(i, childNode) {
          /** @type {number} */
          j = Math.max(j, $(childNode).outerHeight());
        }
        var i;
        var trEl;
        var j;
        var s = this.rowEls.eq(row);
        var el = s.height();
        var $appointment = this.eventRenderer.rowStructs[row].tbodyEl.children();
        /** @type {number} */
        i = 0;
        for (; i < $appointment.length; i++) {
          if (trEl = $appointment.eq(i).removeClass("fc-limited"), j = 0, trEl.find("> td > :first-child").each(iterInnerHeights), trEl.position().top + j > el) {
            return i;
          }
        }
        return false;
      }, ParseError.prototype.limitRow = function(row, levelLimit) {
        var segs;
        var cellMatrix;
        var limitedNodes;
        var i;
        var seg;
        var segsBelow;
        var totalSegsBelow;
        var colSegsBelow;
        var td;
        var rowspan;
        var segMoreNodes;
        var j;
        var moreTd;
        var moreWrap;
        var moreLink;
        var _this = this;
        var rowStruct = this.eventRenderer.rowStructs[row];
        /** @type {!Array} */
        var moreNodes = [];
        /** @type {number} */
        var col = 0;
        /**
         * @param {?} endCol
         * @return {undefined}
         */
        var emptyCellsUntil = function(endCol) {
          for (; col < endCol;) {
            segsBelow = _this.getCellSegs(row, col, levelLimit);
            if (segsBelow.length) {
              td = cellMatrix[levelLimit - 1][col];
              moreLink = _this.renderMoreLink(row, col, segsBelow);
              moreWrap = $("<div/>").append(moreLink);
              td.append(moreWrap);
              moreNodes.push(moreWrap[0]);
            }
            col++;
          }
        };
        if (levelLimit && levelLimit < rowStruct.segLevels.length) {
          segs = rowStruct.segLevels[levelLimit - 1];
          cellMatrix = rowStruct.cellMatrix;
          limitedNodes = rowStruct.tbodyEl.children().slice(levelLimit).addClass("fc-limited").get();
          /** @type {number} */
          i = 0;
          for (; i < segs.length; i++) {
            seg = segs[i];
            emptyCellsUntil(seg.leftCol);
            /** @type {!Array} */
            colSegsBelow = [];
            /** @type {number} */
            totalSegsBelow = 0;
            for (; col <= seg.rightCol;) {
              segsBelow = this.getCellSegs(row, col, levelLimit);
              colSegsBelow.push(segsBelow);
              totalSegsBelow = totalSegsBelow + segsBelow.length;
              col++;
            }
            if (totalSegsBelow) {
              td = cellMatrix[levelLimit - 1][seg.leftCol];
              rowspan = td.attr("rowspan") || 1;
              /** @type {!Array} */
              segMoreNodes = [];
              /** @type {number} */
              j = 0;
              for (; j < colSegsBelow.length; j++) {
                moreTd = $('<td class="fc-more-cell"/>').attr("rowspan", rowspan);
                segsBelow = colSegsBelow[j];
                moreLink = this.renderMoreLink(row, seg.leftCol + j, [seg].concat(segsBelow));
                moreWrap = $("<div/>").append(moreLink);
                moreTd.append(moreWrap);
                segMoreNodes.push(moreTd[0]);
                moreNodes.push(moreTd[0]);
              }
              td.addClass("fc-limited").after($(segMoreNodes));
              limitedNodes.push(td[0]);
            }
          }
          emptyCellsUntil(this.colCnt);
          rowStruct.moreEls = $(moreNodes);
          rowStruct.limitedEls = $(limitedNodes);
        }
      }, ParseError.prototype.unlimitRow = function(row) {
        var rowStruct = this.eventRenderer.rowStructs[row];
        if (rowStruct.moreEls) {
          rowStruct.moreEls.remove();
          /** @type {null} */
          rowStruct.moreEls = null;
        }
        if (rowStruct.limitedEls) {
          rowStruct.limitedEls.removeClass("fc-limited");
          /** @type {null} */
          rowStruct.limitedEls = null;
        }
      }, ParseError.prototype.renderMoreLink = function(row, col, hiddenSegs) {
        var _this = this;
        var view = this.view;
        return $('<a class="fc-more"/>').text(this.getMoreLinkText(hiddenSegs.length)).on("click", function(event) {
          var clickOption = _this.opt("eventLimitClick");
          var date = _this.getCellDate(row, col);
          var moreEl = $(event.currentTarget);
          var dayEl = _this.getCellEl(row, col);
          var allSegs = _this.getCellSegs(row, col);
          var reslicedAllSegs = _this.resliceDaySegs(allSegs, date);
          var reslicedHiddenSegs = _this.resliceDaySegs(hiddenSegs, date);
          if ("function" == typeof clickOption) {
            clickOption = _this.publiclyTrigger("eventLimitClick", {
              context : view,
              args : [{
                date : date.clone(),
                dayEl : dayEl,
                moreEl : moreEl,
                segs : reslicedAllSegs,
                hiddenSegs : reslicedHiddenSegs
              }, event, view]
            });
          }
          if ("popover" === clickOption) {
            _this.showSegPopover(row, col, moreEl, reslicedAllSegs);
          } else {
            if ("string" == typeof clickOption) {
              view.calendar.zoomTo(date, clickOption);
            }
          }
        });
      }, ParseError.prototype.showSegPopover = function(row, col, moreLink, segs) {
        var $pers;
        var options;
        var _this = this;
        var view = this.view;
        var $attachTo = moreLink.parent();
        $pers = 1 === this.rowCnt ? view.el : this.rowEls.eq(row);
        options = {
          className : "fc-more-popover " + view.calendar.theme.getClass("popover"),
          content : this.renderSegPopoverContent(row, col, segs),
          parentEl : view.el,
          top : $pers.offset().top,
          autoHide : true,
          viewportConstrain : this.opt("popoverViewportConstrain"),
          hide : function() {
            if (_this.popoverSegs) {
              _this.triggerBeforeEventSegsDestroyed(_this.popoverSegs);
            }
            _this.segPopover.removeElement();
            /** @type {null} */
            _this.segPopover = null;
            /** @type {null} */
            _this.popoverSegs = null;
          }
        };
        if (this.isRTL) {
          options.right = $attachTo.offset().left + $attachTo.outerWidth() + 1;
        } else {
          /** @type {number} */
          options.left = $attachTo.offset().left - 1;
        }
        this.segPopover = new _noframeworkWaypoints2.default(options);
        this.segPopover.show();
        this.bindAllSegHandlersToEl(this.segPopover.el);
        this.triggerAfterEventSegsRendered(segs);
      }, ParseError.prototype.renderSegPopoverContent = function(row, col, segs) {
        var i;
        var view = this.view;
        var me = view.calendar.theme;
        var tldUrl = this.getCellDate(row, col).format(this.opt("dayPopoverFormat"));
        var content = $('<div class="fc-header ' + me.getClass("popoverHeader") + '"><span class="fc-close ' + me.getIconClass("close") + '"></span><span class="fc-title">' + text.htmlEscape(tldUrl) + '</span><div class="fc-clear"/></div><div class="fc-body ' + me.getClass("popoverContent") + '"><div class="fc-event-container"></div></div>');
        var benchSection = content.find(".fc-event-container");
        segs = this.eventRenderer.renderFgSegEls(segs, true);
        /** @type {string} */
        this.popoverSegs = segs;
        /** @type {number} */
        i = 0;
        for (; i < segs.length; i++) {
          this.hitsNeeded();
          segs[i].hit = this.getCellHit(row, col);
          this.hitsNotNeeded();
          benchSection.append(segs[i].el);
        }
        return content;
      }, ParseError.prototype.resliceDaySegs = function(segs, dayDate) {
        var i;
        var node;
        var opts;
        var options = dayDate.clone();
        var index = options.clone().add(1, "days");
        var item = new _renderer2.default(options, index);
        /** @type {!Array} */
        var res = [];
        /** @type {number} */
        i = 0;
        for (; i < segs.length; i++) {
          node = segs[i];
          if (opts = node.footprint.componentFootprint.unzonedRange.intersect(item)) {
            res.push($.extend({}, node, {
              footprint : new _UiIcon2.default(new _className2.default(opts, node.footprint.componentFootprint.isAllDay), node.footprint.eventDef, node.footprint.eventInstance),
              isStart : node.isStart && opts.isStart,
              isEnd : node.isEnd && opts.isEnd
            }));
          }
        }
        return this.eventRenderer.sortEventSegs(res), res;
      }, ParseError.prototype.getMoreLinkText = function(i) {
        var state = this.opt("eventLimitText");
        return "function" == typeof state ? state(i) : "+" + i + " " + state;
      }, ParseError.prototype.getCellSegs = function(row, col, startLevel) {
        var seg;
        var segMatrix = this.eventRenderer.rowStructs[row].segMatrix;
        var level = startLevel || 0;
        /** @type {!Array} */
        var segs = [];
        for (; level < segMatrix.length;) {
          seg = segMatrix[level][col];
          if (seg) {
            segs.push(seg);
          }
          level++;
        }
        return segs;
      }, ParseError;
    }(_validateUrl2.default);
    exports.default = Content;
    Content.prototype.eventRendererClass = _browser2.default;
    Content.prototype.businessHourRendererClass = _readArchive2.default;
    Content.prototype.helperRendererClass = _thirdapp2.default;
    Content.prototype.fillRendererClass = _params2.default;
    _colorsList2.default.mixInto(Content);
    _aliapp2.default.mixInto(Content);
  }, function(canCreateDiscussions, exports, require) {
    /**
     * @param {!Object} event
     * @return {?}
     */
    function createContext(event) {
      return function(_super) {
        /**
         * @return {?}
         */
        function Editor() {
          var view = null !== _super && _super.apply(this, arguments) || this;
          return view.colWeekNumbersVisible = false, view;
        }
        return Util.__extends(Editor, _super), Editor.prototype.renderHeadIntroHtml = function() {
          var view = this.view;
          return this.colWeekNumbersVisible ? '<th class="fc-week-number ' + view.calendar.theme.getClass("widgetHeader") + '" ' + view.weekNumberStyleAttr() + "><span>" + $.htmlEscape(this.opt("weekNumberTitle")) + "</span></th>" : "";
        }, Editor.prototype.renderNumberIntroHtml = function(row) {
          var view = this.view;
          var weekStart = this.getCellDate(row, 0);
          return this.colWeekNumbersVisible ? '<td class="fc-week-number" ' + view.weekNumberStyleAttr() + ">" + view.buildGotoAnchorHtml({
            date : weekStart,
            type : "week",
            forceOff : 1 === this.colCnt
          }, weekStart.format("w")) + "</td>" : "";
        }, Editor.prototype.renderBgIntroHtml = function() {
          var view = this.view;
          return this.colWeekNumbersVisible ? '<td class="fc-week-number ' + view.calendar.theme.getClass("widgetContent") + '" ' + view.weekNumberStyleAttr() + "></td>" : "";
        }, Editor.prototype.renderIntroHtml = function() {
          var view = this.view;
          return this.colWeekNumbersVisible ? '<td class="fc-week-number" ' + view.weekNumberStyleAttr() + "></td>" : "";
        }, Editor.prototype.getIsNumbersVisible = function() {
          return o.default.prototype.getIsNumbersVisible.apply(this, arguments) || this.colWeekNumbersVisible;
        }, Editor;
      }(event);
    }
    Object.defineProperty(exports, "__esModule", {
      value : true
    });
    var Util = require(2);
    var b = require(3);
    var $ = require(4);
    var a = require(39);
    var History_1 = require(41);
    var _deepAssign2 = require(228);
    var o = require(61);
    var CepPromiseError = function(_super) {
      /**
       * @param {?} gl
       * @param {?} url
       * @return {?}
       */
      function create(gl, url) {
        var view = _super.call(this, gl, url) || this;
        return view.dayGrid = view.instantiateDayGrid(), view.dayGrid.isRigid = view.hasRigidRows(), view.opt("weekNumbers") && (view.opt("weekNumbersWithinDays") ? (view.dayGrid.cellWeekNumbersVisible = true, view.dayGrid.colWeekNumbersVisible = false) : (view.dayGrid.cellWeekNumbersVisible = false, view.dayGrid.colWeekNumbersVisible = true)), view.addChild(view.dayGrid), view.scroller = new a.default({
          overflowX : "hidden",
          overflowY : "auto"
        }), view;
      }
      return Util.__extends(create, _super), create.prototype.instantiateDayGrid = function() {
        return new (createContext(this.dayGridClass))(this);
      }, create.prototype.executeDateRender = function(dateProfile) {
        /** @type {boolean} */
        this.dayGrid.breakOnWeeks = /year|month|week/.test(dateProfile.currentRangeUnit);
        _super.prototype.executeDateRender.call(this, dateProfile);
      }, create.prototype.renderSkeleton = function() {
        var layersLi;
        var dayGridEl;
        this.el.addClass("fc-basic-view").html(this.renderSkeletonHtml());
        this.scroller.render();
        layersLi = this.scroller.el.addClass("fc-day-grid-container");
        dayGridEl = b('<div class="fc-day-grid" />').appendTo(layersLi);
        this.el.find(".fc-body > tr > td").append(layersLi);
        this.dayGrid.headContainerEl = this.el.find(".fc-head-container");
        this.dayGrid.setElement(dayGridEl);
      }, create.prototype.unrenderSkeleton = function() {
        this.dayGrid.removeElement();
        this.scroller.destroy();
      }, create.prototype.renderSkeletonHtml = function() {
        var widgetContainer = this.calendar.theme;
        return '<table class="' + widgetContainer.getClass("tableGrid") + '">' + (this.opt("columnHeader") ? '<thead class="fc-head"><tr><td class="fc-head-container ' + widgetContainer.getClass("widgetHeader") + '">&nbsp;</td></tr></thead>' : "") + '<tbody class="fc-body"><tr><td class="' + widgetContainer.getClass("widgetContent") + '"></td></tr></tbody></table>';
      }, create.prototype.weekNumberStyleAttr = function() {
        return null != this.weekNumberWidth ? 'style="width:' + this.weekNumberWidth + 'px"' : "";
      }, create.prototype.hasRigidRows = function() {
        var eventLimit = this.opt("eventLimit");
        return eventLimit && "number" != typeof eventLimit;
      }, create.prototype.updateSize = function(totalHeight, isAuto, force) {
        var scrollerHeight;
        var o;
        var eventLimit = this.opt("eventLimit");
        var temptitle = this.dayGrid.headContainerEl.find(".fc-row");
        if (!this.dayGrid.rowEls) {
          return void(isAuto || (scrollerHeight = this.computeScrollerHeight(totalHeight), this.scroller.setHeight(scrollerHeight)));
        }
        _super.prototype.updateSize.call(this, totalHeight, isAuto, force);
        if (this.dayGrid.colWeekNumbersVisible) {
          this.weekNumberWidth = $.matchCellWidths(this.el.find(".fc-week-number"));
        }
        this.scroller.clear();
        $.uncompensateScroll(temptitle);
        this.dayGrid.removeSegPopover();
        if (eventLimit && "number" == typeof eventLimit) {
          this.dayGrid.limitRows(eventLimit);
        }
        scrollerHeight = this.computeScrollerHeight(totalHeight);
        this.setGridHeight(scrollerHeight, isAuto);
        if (eventLimit && "number" != typeof eventLimit) {
          this.dayGrid.limitRows(eventLimit);
        }
        if (!isAuto) {
          this.scroller.setHeight(scrollerHeight);
          o = this.scroller.getScrollbarWidths();
          if (o.left || o.right) {
            $.compensateScroll(temptitle, o);
            scrollerHeight = this.computeScrollerHeight(totalHeight);
            this.scroller.setHeight(scrollerHeight);
          }
          this.scroller.lockOverflow(o);
        }
      }, create.prototype.computeScrollerHeight = function(totalHeight) {
        return totalHeight - $.subtractInnerElHeight(this.el, this.scroller.el);
      }, create.prototype.setGridHeight = function(height, isAuto) {
        if (isAuto) {
          $.undistributeHeight(this.dayGrid.rowEls);
        } else {
          $.distributeHeight(this.dayGrid.rowEls, height, true);
        }
      }, create.prototype.computeInitialDateScroll = function() {
        return {
          top : 0
        };
      }, create.prototype.queryDateScroll = function() {
        return {
          top : this.scroller.getScrollTop()
        };
      }, create.prototype.applyDateScroll = function(scroll) {
        if (void 0 !== scroll.top) {
          this.scroller.setScrollTop(scroll.top);
        }
      }, create;
    }(History_1.default);
    exports.default = CepPromiseError;
    CepPromiseError.prototype.dateProfileGeneratorClass = _deepAssign2.default;
    CepPromiseError.prototype.dayGridClass = o.default;
  }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(canCreateDiscussions, e, n) {
    /**
     * @param {!Object} n
     * @param {!Object} b
     * @param {string} a
     * @return {?}
     */
    function l(n, b, a) {
      var i;
      /** @type {number} */
      i = 0;
      for (; i < n.length; i++) {
        if (!b(n[i].eventInstance.toLegacy(), a ? a.toLegacy() : null)) {
          return false;
        }
      }
      return true;
    }
    /**
     * @param {!Object} options
     * @param {boolean} data
     * @return {?}
     */
    function parse(options, data) {
      var i;
      var a;
      var def;
      var o;
      var $Vy1 = data.toLegacy();
      /** @type {number} */
      i = 0;
      for (; i < options.length; i++) {
        if (a = options[i].eventInstance, def = a.def, false === (o = def.getOverlap())) {
          return false;
        }
        if ("function" == typeof o && !o(a.toLegacy(), $Vy1)) {
          return false;
        }
      }
      return true;
    }
    Object.defineProperty(e, "__esModule", {
      value : true
    });
    var h = n(5);
    var a = n(12);
    var m = n(49);
    var o = n(6);
    var u = n(35);
    var newOrg = function() {
      /**
       * @param {!Object} eventManager
       * @param {!Object} mainMenu
       * @return {undefined}
       */
      function UpdateTriggerBindingBehavior(eventManager, mainMenu) {
        /** @type {!Object} */
        this.eventManager = eventManager;
        /** @type {!Object} */
        this._calendar = mainMenu;
      }
      return UpdateTriggerBindingBehavior.prototype.opt = function(name) {
        return this._calendar.opt(name);
      }, UpdateTriggerBindingBehavior.prototype.isEventInstanceGroupAllowed = function(target) {
        var layer_i;
        var self = target.getEventDef();
        var crossfilterable_layers = this.eventRangesToEventFootprints(target.getAllEventRanges());
        var ids = this.getPeerEventInstances(self);
        var dtDeltaList = ids.map(u.eventInstanceToEventRange);
        var index = this.eventRangesToEventFootprints(dtDeltaList);
        var uncert = self.getConstraint();
        var UTC_FEB_29_1972 = self.getOverlap();
        var eventAllowFunc = this.opt("eventAllow");
        /** @type {number} */
        layer_i = 0;
        for (; layer_i < crossfilterable_layers.length; layer_i++) {
          if (!this.isFootprintAllowed(crossfilterable_layers[layer_i].componentFootprint, index, uncert, UTC_FEB_29_1972, crossfilterable_layers[layer_i].eventInstance)) {
            return false;
          }
        }
        if (eventAllowFunc) {
          /** @type {number} */
          layer_i = 0;
          for (; layer_i < crossfilterable_layers.length; layer_i++) {
            if (false === eventAllowFunc(crossfilterable_layers[layer_i].componentFootprint.toLegacy(this._calendar), crossfilterable_layers[layer_i].getEventLegacy())) {
              return false;
            }
          }
        }
        return true;
      }, UpdateTriggerBindingBehavior.prototype.getPeerEventInstances = function(instance) {
        return this.eventManager.getEventInstancesWithoutId(instance.id);
      }, UpdateTriggerBindingBehavior.prototype.isSelectionFootprintAllowed = function(isBgroundImg) {
        var operator;
        var arcgis = this.eventManager.getEventInstances();
        var dtDeltaList = arcgis.map(u.eventInstanceToEventRange);
        var index = this.eventRangesToEventFootprints(dtDeltaList);
        return !!this.isFootprintAllowed(isBgroundImg, index, this.opt("selectConstraint"), this.opt("selectOverlap")) && (!(operator = this.opt("selectAllow")) || false !== operator(isBgroundImg.toLegacy(this._calendar)));
      }, UpdateTriggerBindingBehavior.prototype.isFootprintAllowed = function(data, e, n, t, f) {
        var w;
        var o;
        if (null != n && (w = this.constraintValToFootprints(n, data.isAllDay), !this.isFootprintWithinConstraints(data, w))) {
          return false;
        }
        if (o = this.collectOverlapEventFootprints(e, data), false === t) {
          if (o.length) {
            return false;
          }
        } else {
          if ("function" == typeof t && !l(o, t, f)) {
            return false;
          }
        }
        return !(f && !parse(o, f));
      }, UpdateTriggerBindingBehavior.prototype.isFootprintWithinConstraints = function(value, str1) {
        var i;
        /** @type {number} */
        i = 0;
        for (; i < str1.length; i++) {
          if (this.footprintContainsFootprint(str1[i], value)) {
            return true;
          }
        }
        return false;
      }, UpdateTriggerBindingBehavior.prototype.constraintValToFootprints = function(t, f) {
        var x;
        return "businessHours" === t ? this.buildCurrentBusinessFootprints(f) : "object" == typeof t ? (x = this.parseEventDefToInstances(t), x ? this.eventInstancesToFootprints(x) : this.parseFootprints(t)) : null != t ? (x = this.eventManager.getEventInstancesWithId(t), this.eventInstancesToFootprints(x)) : void 0;
      }, UpdateTriggerBindingBehavior.prototype.buildCurrentBusinessFootprints = function(data) {
        var previousView = this._calendar.view;
        var multiField = previousView.get("businessHourGenerator");
        var item = previousView.dateProfile.activeUnzonedRange;
        var file = multiField.buildEventInstanceGroup(data, item);
        return file ? this.eventInstancesToFootprints(file.eventInstances) : [];
      }, UpdateTriggerBindingBehavior.prototype.eventInstancesToFootprints = function(_) {
        var searchesValues = _.map(u.eventInstanceToEventRange);
        return this.eventRangesToEventFootprints(searchesValues).map(u.eventFootprintToComponentFootprint);
      }, UpdateTriggerBindingBehavior.prototype.collectOverlapEventFootprints = function(r, obj) {
        var i;
        /** @type {!Array} */
        var finalRecords = [];
        /** @type {number} */
        i = 0;
        for (; i < r.length; i++) {
          if (this.footprintsIntersect(obj, r[i].componentFootprint)) {
            finalRecords.push(r[i]);
          }
        }
        return finalRecords;
      }, UpdateTriggerBindingBehavior.prototype.parseEventDefToInstances = function(t) {
        var self = this.eventManager;
        var textWas = m.default.parse(t, new o.default(this._calendar));
        return !!textWas && textWas.buildInstances(self.currentPeriod.unzonedRange);
      }, UpdateTriggerBindingBehavior.prototype.eventRangesToEventFootprints = function(array) {
        var i;
        /** @type {!Array} */
        var myHooks = [];
        /** @type {number} */
        i = 0;
        for (; i < array.length; i++) {
          myHooks.push.apply(myHooks, this.eventRangeToEventFootprints(array[i]));
        }
        return myHooks;
      }, UpdateTriggerBindingBehavior.prototype.eventRangeToEventFootprints = function(link) {
        return [u.eventRangeToEventFootprint(link)];
      }, UpdateTriggerBindingBehavior.prototype.parseFootprints = function(event) {
        var options;
        var field;
        return event.start && (options = this._calendar.moment(event.start), options.isValid() || (options = null)), event.end && (field = this._calendar.moment(event.end), field.isValid() || (field = null)), [new a.default(new h.default(options, field), options && !options.hasTime() || field && !field.hasTime())];
      }, UpdateTriggerBindingBehavior.prototype.footprintContainsFootprint = function(approver, comment) {
        return approver.unzonedRange.containsRange(comment.unzonedRange);
      }, UpdateTriggerBindingBehavior.prototype.footprintsIntersect = function(t, xgh2) {
        return t.unzonedRange.intersectsWith(xgh2.unzonedRange);
      }, UpdateTriggerBindingBehavior;
    }();
    e.default = newOrg;
  }, function(canCreateDiscussions, exports, keyGen) {
    Object.defineProperty(exports, "__esModule", {
      value : true
    });
    var tslib_1 = keyGen(2);
    var key = keyGen(4);
    var o = keyGen(14);
    var CepPromiseError = function(_super) {
      /**
       * @return {?}
       */
      function ParseError() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      return tslib_1.__extends(ParseError, _super), ParseError.defineStandardProps = function(data) {
        var prototype = this.prototype;
        if (!prototype.hasOwnProperty("standardPropMap")) {
          /** @type {!Object} */
          prototype.standardPropMap = Object.create(prototype.standardPropMap);
        }
        key.copyOwnProps(data, prototype.standardPropMap);
      }, ParseError.copyVerbatimStandardProps = function(options, e) {
        var i;
        var props = this.prototype.standardPropMap;
        for (i in props) {
          if (null != options[i] && true === props[i]) {
            e[i] = options[i];
          }
        }
      }, ParseError.prototype.applyProps = function(obj) {
        var k;
        var layoutCheck = this.standardPropMap;
        var i = {};
        var options = {};
        for (k in obj) {
          if (true === layoutCheck[k]) {
            this[k] = obj[k];
          } else {
            if (false === layoutCheck[k]) {
              i[k] = obj[k];
            } else {
              options[k] = obj[k];
            }
          }
        }
        return this.applyMiscProps(options), this.applyManualStandardProps(i);
      }, ParseError.prototype.applyManualStandardProps = function(aRoundNumber) {
        return true;
      }, ParseError.prototype.applyMiscProps = function(opt_setup) {
      }, ParseError.prototype.isStandardProp = function(paramName) {
        return paramName in this.standardPropMap;
      }, ParseError;
    }(o.default);
    exports.default = CepPromiseError;
    CepPromiseError.prototype.standardPropMap = {};
  }, function(canCreateDiscussions, e) {
    Object.defineProperty(e, "__esModule", {
      value : true
    });
    var newOrg = function() {
      /**
       * @param {!Object} funcDef
       * @param {!Object} params
       * @return {undefined}
       */
      function FuncInstance(funcDef, params) {
        /** @type {!Object} */
        this.def = funcDef;
        /** @type {!Object} */
        this.dateProfile = params;
      }
      return FuncInstance.prototype.toLegacy = function() {
        var t = this.dateProfile;
        var ourSelection = this.def.toLegacy();
        return ourSelection.start = t.start.clone(), ourSelection.end = t.end ? t.end.clone() : null, ourSelection;
      }, FuncInstance;
    }();
    e.default = newOrg;
  }, function(canCreateDiscussions, exports, require) {
    Object.defineProperty(exports, "__esModule", {
      value : true
    });
    var Util = require(2);
    var ViewModule = require(3);
    var helpers = require(0);
    var m = require(34);
    var mongo = require(209);
    var models = require(17);
    var behavior = function(_super) {
      /**
       * @return {?}
       */
      function Editor() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      return Util.__extends(Editor, _super), Editor.prototype.isAllDay = function() {
        return !this.startTime && !this.endTime;
      }, Editor.prototype.buildInstances = function(other) {
        var firstDay;
        var host;
        var port;
        var calendar = this.source.calendar;
        var date = other.getStart();
        var endValue = other.getEnd();
        /** @type {!Array} */
        var newNodeLists = [];
        for (; date.isBefore(endValue);) {
          if (!(this.dowHash && !this.dowHash[date.day()])) {
            firstDay = calendar.applyTimezone(date);
            host = firstDay.clone();
            /** @type {null} */
            port = null;
            if (this.startTime) {
              host.time(this.startTime);
            } else {
              host.stripTime();
            }
            if (this.endTime) {
              port = firstDay.clone().time(this.endTime);
            }
            newNodeLists.push(new mongo.default(this, new models.default(host, port, calendar)));
          }
          date.add(1, "days");
        }
        return newNodeLists;
      }, Editor.prototype.setDow = function(day) {
        if (!this.dowHash) {
          this.dowHash = {};
        }
        /** @type {number} */
        var i = 0;
        for (; i < day.length; i++) {
          /** @type {boolean} */
          this.dowHash[day[i]] = true;
        }
      }, Editor.prototype.clone = function() {
        var metrics = _super.prototype.clone.call(this);
        return metrics.startTime && (metrics.startTime = helpers.duration(this.startTime)), metrics.endTime && (metrics.endTime = helpers.duration(this.endTime)), this.dowHash && (metrics.dowHash = ViewModule.extend({}, this.dowHash)), metrics;
      }, Editor;
    }(m.default);
    exports.default = behavior;
    /**
     * @param {!Object} obj
     * @return {?}
     */
    behavior.prototype.applyProps = function(obj) {
      var categoryWikitext = m.default.prototype.applyProps.call(this, obj);
      return obj.start && (this.startTime = helpers.duration(obj.start)), obj.end && (this.endTime = helpers.duration(obj.end)), obj.dow && this.setDow(obj.dow), categoryWikitext;
    };
    behavior.defineStandardProps({
      start : false,
      end : false,
      dow : false
    });
  }, function(canCreateDiscussions, e) {
    Object.defineProperty(e, "__esModule", {
      value : true
    });
    var newOrg = function() {
      /**
       * @param {string} clipping
       * @param {!Object} sbbox
       * @param {!Object} cbbox
       * @return {undefined}
       */
      function fillQueue(clipping, sbbox, cbbox) {
        /** @type {string} */
        this.unzonedRange = clipping;
        /** @type {!Object} */
        this.eventDef = sbbox;
        if (cbbox) {
          /** @type {!Object} */
          this.eventInstance = cbbox;
        }
      }
      return fillQueue;
    }();
    e.default = newOrg;
  }, function(canCreateDiscussions, e, require) {
    Object.defineProperty(e, "__esModule", {
      value : true
    });
    var utils = require(3);
    var r = require(35);
    var Request = require(18);
    var s = require(210);
    var a = require(6);
    var opts = {
      start : "09:00",
      end : "17:00",
      dow : [1, 2, 3, 4, 5],
      rendering : "inverse-background"
    };
    var newOrg = function() {
      /**
       * @param {!Object} alterType
       * @param {!Object} event
       * @return {undefined}
       */
      function event_alter(alterType, event) {
        /** @type {!Object} */
        this.rawComplexDef = alterType;
        /** @type {!Object} */
        this.calendar = event;
      }
      return event_alter.prototype.buildEventInstanceGroup = function(t, data) {
        var obj;
        var url = this.buildEventDefs(t);
        if (url.length) {
          return obj = new Request.default(r.eventDefsToEventInstances(url, data)), obj.explicitEventDef = url[0], obj;
        }
      }, event_alter.prototype.buildEventDefs = function(t) {
        var i;
        var k = this.rawComplexDef;
        /** @type {!Array} */
        var found = [];
        /** @type {boolean} */
        var o = false;
        /** @type {!Array} */
        var tesselationPoints = [];
        if (true === k) {
          /** @type {!Array} */
          found = [{}];
        } else {
          if (utils.isPlainObject(k)) {
            /** @type {!Array} */
            found = [k];
          } else {
            if (utils.isArray(k)) {
              found = k;
              /** @type {boolean} */
              o = true;
            }
          }
        }
        /** @type {number} */
        i = 0;
        for (; i < found.length; i++) {
          if (!(o && !found[i].dow)) {
            tesselationPoints.push(this.buildEventDef(t, found[i]));
          }
        }
        return tesselationPoints;
      }, event_alter.prototype.buildEventDef = function(pieces, params) {
        var data = utils.extend({}, opts, params);
        return pieces && (data.start = null, data.end = null), s.default.parse(data, new a.default(this.calendar));
      }, event_alter;
    }();
    e.default = newOrg;
  }, function(canCreateDiscussions, child, comparer) {
    Object.defineProperty(child, "__esModule", {
      value : true
    });
    var Util = comparer(2);
    var selected = comparer(19);
    var current = function(_super) {
      /**
       * @return {?}
       */
      function Editor() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      return Util.__extends(Editor, _super), Editor;
    }(selected.default);
    child.default = current;
    current.prototype.classes = {
      widget : "fc-unthemed",
      widgetHeader : "fc-widget-header",
      widgetContent : "fc-widget-content",
      buttonGroup : "fc-button-group",
      button : "fc-button",
      cornerLeft : "fc-corner-left",
      cornerRight : "fc-corner-right",
      stateDefault : "fc-state-default",
      stateActive : "fc-state-active",
      stateDisabled : "fc-state-disabled",
      stateHover : "fc-state-hover",
      stateDown : "fc-state-down",
      popoverHeader : "fc-widget-header",
      popoverContent : "fc-widget-content",
      headerRow : "fc-widget-header",
      dayRow : "fc-widget-content",
      listView : "fc-widget-content"
    };
    /** @type {string} */
    current.prototype.baseIconClass = "fc-icon";
    current.prototype.iconClasses = {
      close : "fc-icon-x",
      prev : "fc-icon-left-single-arrow",
      next : "fc-icon-right-single-arrow",
      prevYear : "fc-icon-left-double-arrow",
      nextYear : "fc-icon-right-double-arrow"
    };
    /** @type {string} */
    current.prototype.iconOverrideOption = "buttonIcons";
    /** @type {string} */
    current.prototype.iconOverrideCustomButtonOption = "icon";
    /** @type {string} */
    current.prototype.iconOverridePrefix = "fc-icon-";
  }, function(canCreateDiscussions, child, comparer) {
    Object.defineProperty(child, "__esModule", {
      value : true
    });
    var Util = comparer(2);
    var selected = comparer(19);
    var current = function(_super) {
      /**
       * @return {?}
       */
      function Editor() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      return Util.__extends(Editor, _super), Editor;
    }(selected.default);
    child.default = current;
    current.prototype.classes = {
      widget : "ui-widget",
      widgetHeader : "ui-widget-header",
      widgetContent : "ui-widget-content",
      buttonGroup : "fc-button-group",
      button : "ui-button",
      cornerLeft : "ui-corner-left",
      cornerRight : "ui-corner-right",
      stateDefault : "ui-state-default",
      stateActive : "ui-state-active",
      stateDisabled : "ui-state-disabled",
      stateHover : "ui-state-hover",
      stateDown : "ui-state-down",
      today : "ui-state-highlight",
      popoverHeader : "ui-widget-header",
      popoverContent : "ui-widget-content",
      headerRow : "ui-widget-header",
      dayRow : "ui-widget-content",
      listView : "ui-widget-content"
    };
    /** @type {string} */
    current.prototype.baseIconClass = "ui-icon";
    current.prototype.iconClasses = {
      close : "ui-icon-closethick",
      prev : "ui-icon-circle-triangle-w",
      next : "ui-icon-circle-triangle-e",
      prevYear : "ui-icon-seek-prev",
      nextYear : "ui-icon-seek-next"
    };
    /** @type {string} */
    current.prototype.iconOverrideOption = "themeButtonIcons";
    /** @type {string} */
    current.prototype.iconOverrideCustomButtonOption = "themeIcon";
    /** @type {string} */
    current.prototype.iconOverridePrefix = "ui-icon-";
  }, function(canCreateDiscussions, res, g) {
    Object.defineProperty(res, "__esModule", {
      value : true
    });
    var tslib_1 = g(2);
    var item = g(3);
    var m = g(20);
    var o = g(6);
    var event = function(_super) {
      /**
       * @return {?}
       */
      function ParseError() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      return tslib_1.__extends(ParseError, _super), ParseError.parse = function(value, source) {
        var result;
        return item.isFunction(value.events) ? result = value : item.isFunction(value) && (result = {
          events : value
        }), !!result && o.default.parse.call(this, result, source);
      }, ParseError.prototype.fetch = function(p2, res, searchQuery) {
        var scope = this;
        return this.calendar.pushLoading(), m.default.construct(function(r) {
          scope.func.call(scope.calendar, p2.clone(), res.clone(), searchQuery, function(i) {
            scope.calendar.popLoading();
            r(scope.parseEventDefs(i));
          });
        });
      }, ParseError.prototype.getPrimitive = function() {
        return this.func;
      }, ParseError.prototype.applyManualStandardProps = function(args) {
        var poffset = _super.prototype.applyManualStandardProps.call(this, args);
        return this.func = args.events, poffset;
      }, ParseError;
    }(o.default);
    res.default = event;
    event.defineStandardProps({
      events : false
    });
  }, function(canCreateDiscussions, exports, require) {
    Object.defineProperty(exports, "__esModule", {
      value : true
    });
    var Util = require(2);
    var $ = require(3);
    var Ext = require(4);
    var m = require(20);
    var ModuleParser = require(6);
    var SuggestList = function(_super) {
      /**
       * @return {?}
       */
      function data() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      return Util.__extends(data, _super), data.parse = function(type, source) {
        var settings;
        return "string" == typeof type.url ? settings = type : "string" == typeof type && (settings = {
          url : type
        }), !!settings && ModuleParser.default.parse.call(this, settings, source);
      }, data.prototype.fetch = function(time, err, n) {
        var me = this;
        var options = this.ajaxSettings;
        var obj = options.success;
        var data = options.error;
        var e = this.buildRequestParams(time, err, n);
        return this.calendar.pushLoading(), m.default.construct(function(callback, renderTerminator) {
          $.ajax($.extend({}, data.AJAX_DEFAULTS, options, {
            url : me.url,
            data : e,
            success : function(success, response, id) {
              var data;
              me.calendar.popLoading();
              if (success) {
                data = Ext.applyAll(obj, me, [success, response, id]);
                if ($.isArray(data)) {
                  success = data;
                }
                callback(me.parseEventDefs(success));
              } else {
                renderTerminator();
              }
            },
            error : function(html, error, xhr) {
              me.calendar.popLoading();
              Ext.applyAll(data, me, [html, error, xhr]);
              renderTerminator();
            }
          }));
        });
      }, data.prototype.buildRequestParams = function(method, data, local) {
        var i;
        var subModelKey;
        var cache;
        var navCommonStyle;
        var t = this.calendar;
        var injectionValue = this.ajaxSettings;
        var ret = {};
        return i = this.startParam, null == i && (i = t.opt("startParam")), subModelKey = this.endParam, null == subModelKey && (subModelKey = t.opt("endParam")), cache = this.timezoneParam, null == cache && (cache = t.opt("timezoneParam")), navCommonStyle = $.isFunction(injectionValue.data) ? injectionValue.data() : injectionValue.data || {}, $.extend(ret, navCommonStyle), ret[i] = method.format(), ret[subModelKey] = data.format(), local && "local" !== local && (ret[cache] = local), ret;
      }, data.prototype.getPrimitive = function() {
        return this.url;
      }, data.prototype.applyMiscProps = function(settings) {
        /** @type {!Object} */
        this.ajaxSettings = settings;
      }, data.AJAX_DEFAULTS = {
        dataType : "json",
        cache : false
      }, data;
    }(ModuleParser.default);
    exports.default = SuggestList;
    SuggestList.defineStandardProps({
      url : true,
      startParam : true,
      endParam : true,
      timezoneParam : true
    });
  }, function(canCreateDiscussions, exports, keyGen) {
    Object.defineProperty(exports, "__esModule", {
      value : true
    });
    var o = keyGen(11);
    var Log = function() {
      /**
       * @return {undefined}
       */
      function Game() {
        /** @type {!Array} */
        this.q = [];
        /** @type {boolean} */
        this.isPaused = false;
        /** @type {boolean} */
        this.isRunning = false;
      }
      return Game.prototype.queue = function() {
        /** @type {!Array} */
        var argumentsArray = [];
        /** @type {number} */
        var i = 0;
        for (; i < arguments.length; i++) {
          argumentsArray[i] = arguments[i];
        }
        this.q.push.apply(this.q, argumentsArray);
        this.tryStart();
      }, Game.prototype.pause = function() {
        /** @type {boolean} */
        this.isPaused = true;
      }, Game.prototype.resume = function() {
        /** @type {boolean} */
        this.isPaused = false;
        this.tryStart();
      }, Game.prototype.getIsIdle = function() {
        return !this.isRunning && !this.isPaused;
      }, Game.prototype.tryStart = function() {
        if (!this.isRunning && this.canRunNext()) {
          /** @type {boolean} */
          this.isRunning = true;
          this.trigger("start");
          this.runRemaining();
        }
      }, Game.prototype.canRunNext = function() {
        return !this.isPaused && this.q.length;
      }, Game.prototype.runRemaining = function() {
        var task;
        var result;
        var _this = this;
        do {
          if (task = this.q.shift(), (result = this.runTask(task)) && result.then) {
            return void result.then(function() {
              if (_this.canRunNext()) {
                _this.runRemaining();
              }
            });
          }
        } while (this.canRunNext());
        this.trigger("stop");
        /** @type {boolean} */
        this.isRunning = false;
        this.tryStart();
      }, Game.prototype.runTask = function(callback) {
        return callback();
      }, Game;
    }();
    exports.default = Log;
    o.default.mixInto(Log);
  }, function(canCreateDiscussions, e, comparer) {
    Object.defineProperty(e, "__esModule", {
      value : true
    });
    var tslib_1 = comparer(2);
    var selected = comparer(217);
    var newOrg = function(_super) {
      /**
       * @param {number} message
       * @return {?}
       */
      function ParseError(message) {
        var detailsRowMessage = _super.call(this) || this;
        return detailsRowMessage.waitsByNamespace = message || {}, detailsRowMessage;
      }
      return tslib_1.__extends(ParseError, _super), ParseError.prototype.queue = function(type, namespace, record) {
        var waitMs;
        var task = {
          func : type,
          namespace : namespace,
          type : record
        };
        if (namespace) {
          waitMs = this.waitsByNamespace[namespace];
        }
        if (this.waitNamespace) {
          if (namespace === this.waitNamespace && null != waitMs) {
            this.delayWait(waitMs);
          } else {
            this.clearWait();
            this.tryStart();
          }
        }
        if (this.compoundTask(task)) {
          if (this.waitNamespace || null == waitMs) {
            this.tryStart();
          } else {
            this.startWait(namespace, waitMs);
          }
        }
      }, ParseError.prototype.startWait = function(namespace, waitMs) {
        /** @type {string} */
        this.waitNamespace = namespace;
        this.spawnWait(waitMs);
      }, ParseError.prototype.delayWait = function(waitMs) {
        clearTimeout(this.waitId);
        this.spawnWait(waitMs);
      }, ParseError.prototype.spawnWait = function(waitMs) {
        var _this = this;
        /** @type {number} */
        this.waitId = setTimeout(function() {
          /** @type {null} */
          _this.waitNamespace = null;
          _this.tryStart();
        }, waitMs);
      }, ParseError.prototype.clearWait = function() {
        if (this.waitNamespace) {
          clearTimeout(this.waitId);
          /** @type {null} */
          this.waitId = null;
          /** @type {null} */
          this.waitNamespace = null;
        }
      }, ParseError.prototype.canRunNext = function() {
        if (!_super.prototype.canRunNext.call(this)) {
          return false;
        }
        if (this.waitNamespace) {
          var q = this.q;
          /** @type {number} */
          var i = 0;
          for (; i < q.length; i++) {
            if (q[i].namespace !== this.waitNamespace) {
              return true;
            }
          }
          return false;
        }
        return true;
      }, ParseError.prototype.runTask = function(task) {
        task.func();
      }, ParseError.prototype.compoundTask = function(newTask) {
        var i;
        var f;
        var m = this.q;
        /** @type {boolean} */
        var checkUpdateImmediately = true;
        if (newTask.namespace && "destroy" === newTask.type) {
          /** @type {number} */
          i = m.length - 1;
          for (; i >= 0; i--) {
            switch(f = m[i], f.type) {
              case "init":
                /** @type {boolean} */
                checkUpdateImmediately = false;
              case "add":
              case "remove":
                m.splice(i, 1);
            }
          }
        }
        return checkUpdateImmediately && m.push(newTask), checkUpdateImmediately;
      }, ParseError;
    }(selected.default);
    e.default = newOrg;
  }, function(canCreateDiscussions, e, require) {
    /**
     * @param {!Array} t
     * @return {?}
     */
    function i(t) {
      var tb;
      var keywordResults;
      var i;
      /** @type {!Array} */
      var b = [];
      for (tb in t) {
        keywordResults = t[tb].eventInstances;
        /** @type {number} */
        i = 0;
        for (; i < keywordResults.length; i++) {
          b.push(keywordResults[i].toLegacy());
        }
      }
      return b;
    }
    Object.defineProperty(e, "__esModule", {
      value : true
    });
    var Util = require(2);
    var utils = require(3);
    var s = require(0);
    var util = require(4);
    var XSS = require(10);
    var self = require(47);
    var d = require(237);
    var typeUtil = require(35);
    var newOrg = function(_super) {
      /**
       * @param {!Object} n
       * @param {!Object} val
       * @return {?}
       */
      function render(n, val) {
        var options = _super.call(this) || this;
        return options.isRTL = false, options.hitsNeededDepth = 0, options.hasAllDayBusinessHours = false, options.isDatesRendered = false, n && (options.view = n), val && (options.options = val), options.uid = String(render.guid++), options.childrenByUid = {}, options.nextDayThreshold = s.duration(options.opt("nextDayThreshold")), options.isRTL = options.opt("isRTL"), options.fillRendererClass && (options.fillRenderer = new options.fillRendererClass(options)), options.eventRendererClass && (options.eventRenderer = 
        new options.eventRendererClass(options, options.fillRenderer)), options.helperRendererClass && options.eventRenderer && (options.helperRenderer = new options.helperRendererClass(options, options.eventRenderer)), options.businessHourRendererClass && options.fillRenderer && (options.businessHourRenderer = new options.businessHourRendererClass(options, options.fillRenderer)), options;
      }
      return Util.__extends(render, _super), render.prototype.addChild = function(tag) {
        return !this.childrenByUid[tag.uid] && (this.childrenByUid[tag.uid] = tag, true);
      }, render.prototype.removeChild = function(options) {
        return !!this.childrenByUid[options.uid] && (delete this.childrenByUid[options.uid], true);
      }, render.prototype.updateSize = function($svgParent, $svgRoot, force) {
        this.callChildren("updateSize", arguments);
      }, render.prototype.opt = function(name) {
        return this._getView().opt(name);
      }, render.prototype.publiclyTrigger = function() {
        /** @type {!Array} */
        var argumentsArray = [];
        /** @type {number} */
        var i = 0;
        for (; i < arguments.length; i++) {
          argumentsArray[i] = arguments[i];
        }
        var view = this._getCalendar();
        return view.publiclyTrigger.apply(view, argumentsArray);
      }, render.prototype.hasPublicHandlers = function() {
        /** @type {!Array} */
        var argumentsArray = [];
        /** @type {number} */
        var i = 0;
        for (; i < arguments.length; i++) {
          argumentsArray[i] = arguments[i];
        }
        var myHooks = this._getCalendar();
        return myHooks.hasPublicHandlers.apply(myHooks, argumentsArray);
      }, render.prototype.executeDateRender = function(isRigid) {
        /** @type {!Object} */
        this.dateProfile = isRigid;
        this.renderDates(isRigid);
        /** @type {boolean} */
        this.isDatesRendered = true;
        this.callChildren("executeDateRender", arguments);
      }, render.prototype.executeDateUnrender = function() {
        this.callChildren("executeDateUnrender", arguments);
        /** @type {null} */
        this.dateProfile = null;
        this.unrenderDates();
        /** @type {boolean} */
        this.isDatesRendered = false;
      }, render.prototype.renderDates = function(isRigid) {
      }, render.prototype.unrenderDates = function() {
      }, render.prototype.getNowIndicatorUnit = function() {
      }, render.prototype.renderNowIndicator = function(date) {
        this.callChildren("renderNowIndicator", arguments);
      }, render.prototype.unrenderNowIndicator = function() {
        this.callChildren("unrenderNowIndicator", arguments);
      }, render.prototype.renderBusinessHours = function(transform) {
        if (this.businessHourRenderer) {
          this.businessHourRenderer.render(transform);
        }
        this.callChildren("renderBusinessHours", arguments);
      }, render.prototype.unrenderBusinessHours = function() {
        this.callChildren("unrenderBusinessHours", arguments);
        if (this.businessHourRenderer) {
          this.businessHourRenderer.unrender();
        }
      }, render.prototype.executeEventRender = function(value) {
        if (this.eventRenderer) {
          this.eventRenderer.rangeUpdated();
          this.eventRenderer.render(value);
        } else {
          if (this.renderEvents) {
            this.renderEvents(i(value));
          }
        }
        this.callChildren("executeEventRender", arguments);
      }, render.prototype.executeEventUnrender = function() {
        this.callChildren("executeEventUnrender", arguments);
        if (this.eventRenderer) {
          this.eventRenderer.unrender();
        } else {
          if (this.destroyEvents) {
            this.destroyEvents();
          }
        }
      }, render.prototype.getBusinessHourSegs = function() {
        var myHooks = this.getOwnBusinessHourSegs();
        return this.iterChildren(function(canCreateDiscussions) {
          myHooks.push.apply(myHooks, canCreateDiscussions.getBusinessHourSegs());
        }), myHooks;
      }, render.prototype.getOwnBusinessHourSegs = function() {
        return this.businessHourRenderer ? this.businessHourRenderer.getSegs() : [];
      }, render.prototype.getEventSegs = function() {
        var myHooks = this.getOwnEventSegs();
        return this.iterChildren(function(canCreateDiscussions) {
          myHooks.push.apply(myHooks, canCreateDiscussions.getEventSegs());
        }), myHooks;
      }, render.prototype.getOwnEventSegs = function() {
        return this.eventRenderer ? this.eventRenderer.getSegs() : [];
      }, render.prototype.triggerAfterEventsRendered = function() {
        this.triggerAfterEventSegsRendered(this.getEventSegs());
        this.publiclyTrigger("eventAfterAllRender", {
          context : this,
          args : [this]
        });
      }, render.prototype.triggerAfterEventSegsRendered = function(val) {
        var scope = this;
        if (this.hasPublicHandlers("eventAfterRender")) {
          val.forEach(function(item) {
            var context;
            if (item.el) {
              context = item.footprint.getEventLegacy();
              scope.publiclyTrigger("eventAfterRender", {
                context : context,
                args : [context, item.el, scope]
              });
            }
          });
        }
      }, render.prototype.triggerBeforeEventsDestroyed = function() {
        this.triggerBeforeEventSegsDestroyed(this.getEventSegs());
      }, render.prototype.triggerBeforeEventSegsDestroyed = function(wrappersTemplates) {
        var scope = this;
        if (this.hasPublicHandlers("eventDestroy")) {
          wrappersTemplates.forEach(function(item) {
            var context;
            if (item.el) {
              context = item.footprint.getEventLegacy();
              scope.publiclyTrigger("eventDestroy", {
                context : context,
                args : [context, item.el, scope]
              });
            }
          });
        }
      }, render.prototype.showEventsWithId = function(end) {
        this.getEventSegs().forEach(function(res) {
          if (res.footprint.eventDef.id === end && res.el) {
            res.el.css("visibility", "");
          }
        });
        this.callChildren("showEventsWithId", arguments);
      }, render.prototype.hideEventsWithId = function(end) {
        this.getEventSegs().forEach(function(res) {
          if (res.footprint.eventDef.id === end && res.el) {
            res.el.css("visibility", "hidden");
          }
        });
        this.callChildren("hideEventsWithId", arguments);
      }, render.prototype.renderDrag = function(prev, seg, dropLocation) {
        /** @type {boolean} */
        var i = false;
        return this.iterChildren(function(view) {
          if (view.renderDrag(prev, seg, dropLocation)) {
            /** @type {boolean} */
            i = true;
          }
        }), i;
      }, render.prototype.unrenderDrag = function() {
        this.callChildren("unrenderDrag", arguments);
      }, render.prototype.renderEventResize = function(eventLocation, seg, range) {
        this.callChildren("renderEventResize", arguments);
      }, render.prototype.unrenderEventResize = function() {
        this.callChildren("unrenderEventResize", arguments);
      }, render.prototype.renderSelectionFootprint = function(range) {
        this.renderHighlight(range);
        this.callChildren("renderSelectionFootprint", arguments);
      }, render.prototype.unrenderSelection = function() {
        this.unrenderHighlight();
        this.callChildren("unrenderSelection", arguments);
      }, render.prototype.renderHighlight = function(range) {
        if (this.fillRenderer) {
          this.fillRenderer.renderFootprint("highlight", range, {
            getClasses : function() {
              return ["fc-highlight"];
            }
          });
        }
        this.callChildren("renderHighlight", arguments);
      }, render.prototype.unrenderHighlight = function() {
        if (this.fillRenderer) {
          this.fillRenderer.unrender("highlight");
        }
        this.callChildren("unrenderHighlight", arguments);
      }, render.prototype.hitsNeeded = function() {
        if (!this.hitsNeededDepth++) {
          this.prepareHits();
        }
        this.callChildren("hitsNeeded", arguments);
      }, render.prototype.hitsNotNeeded = function() {
        if (this.hitsNeededDepth && !--this.hitsNeededDepth) {
          this.releaseHits();
        }
        this.callChildren("hitsNotNeeded", arguments);
      }, render.prototype.prepareHits = function() {
      }, render.prototype.releaseHits = function() {
      }, render.prototype.queryHit = function(left, top) {
        var bookIdIndex;
        var hit;
        var bookIDs = this.childrenByUid;
        for (bookIdIndex in bookIDs) {
          if (hit = bookIDs[bookIdIndex].queryHit(left, top)) {
            break;
          }
        }
        return hit;
      }, render.prototype.getSafeHitFootprint = function(hit) {
        var title = this.getHitFootprint(hit);
        return this.dateProfile.activeUnzonedRange.containsRange(title.unzonedRange) ? title : null;
      }, render.prototype.getHitFootprint = function(hit) {
      }, render.prototype.getHitEl = function(hit) {
      }, render.prototype.eventRangesToEventFootprints = function(array) {
        var i;
        /** @type {!Array} */
        var myHooks = [];
        /** @type {number} */
        i = 0;
        for (; i < array.length; i++) {
          myHooks.push.apply(myHooks, this.eventRangeToEventFootprints(array[i]));
        }
        return myHooks;
      }, render.prototype.eventRangeToEventFootprints = function(set) {
        return [typeUtil.eventRangeToEventFootprint(set)];
      }, render.prototype.eventFootprintsToSegs = function(Uint16s) {
        var i;
        /** @type {!Array} */
        var myHooks = [];
        /** @type {number} */
        i = 0;
        for (; i < Uint16s.length; i++) {
          myHooks.push.apply(myHooks, this.eventFootprintToSegs(Uint16s[i]));
        }
        return myHooks;
      }, render.prototype.eventFootprintToSegs = function(verticalPos) {
        var freeRectangles;
        var i;
        var rect;
        var seg = verticalPos.componentFootprint.unzonedRange;
        freeRectangles = this.componentFootprintToSegs(verticalPos.componentFootprint);
        /** @type {number} */
        i = 0;
        for (; i < freeRectangles.length; i++) {
          rect = freeRectangles[i];
          if (!seg.isStart) {
            /** @type {boolean} */
            rect.isStart = false;
          }
          if (!seg.isEnd) {
            /** @type {boolean} */
            rect.isEnd = false;
          }
          rect.footprint = verticalPos;
        }
        return freeRectangles;
      }, render.prototype.componentFootprintToSegs = function(a22) {
        return [];
      }, render.prototype.callChildren = function(fn, args) {
        this.iterChildren(function(inst) {
          inst[fn].apply(inst, args);
        });
      }, render.prototype.iterChildren = function(conflictFunc) {
        var j;
        var result = this.childrenByUid;
        for (j in result) {
          conflictFunc(result[j]);
        }
      }, render.prototype._getCalendar = function() {
        var context = this;
        return context.calendar || context.view.calendar;
      }, render.prototype._getView = function() {
        return this.view;
      }, render.prototype._getDateProfile = function() {
        return this._getView().get("dateProfile");
      }, render.prototype.buildGotoAnchorHtml = function(input, e, d) {
        var result;
        var type;
        var forceOff;
        var value;
        return utils.isPlainObject(input) ? (result = input.date, type = input.type, forceOff = input.forceOff) : result = input, result = XSS.default(result), value = {
          date : result.format("YYYY-MM-DD"),
          type : type || "day"
        }, "string" == typeof e && (d = e, e = null), e = e ? " " + util.attrsToStr(e) : "", d = d || "", !forceOff && this.opt("navLinks") ? "<a" + e + ' data-goto="' + util.htmlEscape(JSON.stringify(value)) + '">' + d + "</a>" : "<span" + e + ">" + d + "</span>";
      }, render.prototype.getAllDayHtml = function() {
        return this.opt("allDayHtml") || util.htmlEscape(this.opt("allDayText"));
      }, render.prototype.getDayClasses = function(date, day) {
        var minDate;
        var view = this._getView();
        /** @type {!Array} */
        var classes = [];
        return this.dateProfile.activeUnzonedRange.containsDate(date) ? (classes.push("fc-" + util.dayIDs[date.day()]), view.isDateInOtherMonth(date, this.dateProfile) && classes.push("fc-other-month"), minDate = view.calendar.getNow(), date.isSame(minDate, "day") ? (classes.push("fc-today"), true !== day && classes.push(view.calendar.theme.getClass("today"))) : date < minDate ? classes.push("fc-past") : classes.push("fc-future")) : classes.push("fc-disabled-day"), classes;
      }, render.prototype.formatRange = function(range, start, end, k) {
        var endDate = range.end;
        return start && (endDate = endDate.clone().subtract(1)), self.formatRange(range.start, endDate, end, k, this.isRTL);
      }, render.prototype.currentRangeAs = function(unit) {
        return this._getDateProfile().currentUnzonedRange.as(unit);
      }, render.prototype.computeDayRange = function(range) {
        var CSSAutoCompleter = this._getCalendar();
        var pos = CSSAutoCompleter.msToUtcMoment(range.startMs, true);
        var zonedDate = CSSAutoCompleter.msToUtcMoment(range.endMs);
        /** @type {number} */
        var endTimeMS = +zonedDate.time();
        var start = zonedDate.clone().stripTime();
        return endTimeMS && endTimeMS >= this.nextDayThreshold && start.add(1, "days"), start <= pos && (start = pos.clone().add(1, "days")), {
          start : pos,
          end : start
        };
      }, render.prototype.isMultiDayRange = function(event) {
        var range = this.computeDayRange(event);
        return range.end.diff(range.start, "days") > 1;
      }, render.guid = 0, render;
    }(d.default);
    e.default = newOrg;
  }, function(canCreateDiscussions, exports, require) {
    /**
     * @param {!Object} str
     * @param {string} value
     * @return {?}
     */
    function forEach(str, value) {
      return null == value ? str : $.isFunction(value) ? str.filter(value) : (value = value + "", str.filter(function(data) {
        return data.id == value || data._id === value;
      }));
    }
    Object.defineProperty(exports, "__esModule", {
      value : true
    });
    var $ = require(3);
    var moment = require(0);
    var self = require(4);
    var defaults = require(32);
    var p = require(238);
    var $scope = require(21);
    var d = require(11);
    var c = require(7);
    var _deepAssign2 = require(239);
    var kity = require(240);
    var f = require(241);
    var _aureliaBinding = require(207);
    var path = require(31);
    var page = require(10);
    var errors = require(5);
    var templates = require(12);
    var params = require(17);
    var ShapeMaker_1 = require(242);
    var Handlebars = require(212);
    var ModuleParser = require(38);
    var uri_1 = require(49);
    var App = require(13);
    var History_1 = require(37);
    var it = require(6);
    var TagHourlyStat = require(51);
    var Log = function() {
      /**
       * @param {!Object} target
       * @param {?} position
       * @return {undefined}
       */
      function options(target, position) {
        /** @type {number} */
        this.loadingLevel = 0;
        /** @type {number} */
        this.ignoreUpdateViewSize = 0;
        /** @type {number} */
        this.freezeContentHeightDepth = 0;
        $scope.default.needed();
        /** @type {!Object} */
        this.el = target;
        this.viewsByType = {};
        this.optionsManager = new kity.default(this, position);
        this.viewSpecManager = new f.default(this.optionsManager, this);
        this.initMomentInternals();
        this.initCurrentDate();
        this.initEventManager();
        this.constraints = new _aureliaBinding.default(this.eventManager, this);
        this.constructed();
      }
      return options.prototype.constructed = function() {
      }, options.prototype.getView = function() {
        return this.view;
      }, options.prototype.publiclyTrigger = function(name, value) {
        var data;
        var args;
        var option = this.opt(name);
        if ($.isPlainObject(value) ? (data = value.context, args = value.args) : $.isArray(value) && (args = value), null == data && (data = this.el[0]), args || (args = []), this.triggerWith(name, data, args), option) {
          return option.apply(data, args);
        }
      }, options.prototype.hasPublicHandlers = function(name) {
        return this.hasHandlers(name) || this.opt(name);
      }, options.prototype.option = function(key, val) {
        var t;
        if ("string" == typeof key) {
          if (void 0 === val) {
            return this.optionsManager.get(key);
          }
          t = {};
          /** @type {!Array} */
          t[key] = val;
          this.optionsManager.add(t);
        } else {
          if ("object" == typeof key) {
            this.optionsManager.add(key);
          }
        }
      }, options.prototype.opt = function(name) {
        return this.optionsManager.get(name);
      }, options.prototype.instantiateView = function(viewType) {
        var e = this.viewSpecManager.getViewSpec(viewType);
        if (!e) {
          throw new Error('View type "' + viewType + '" is not valid');
        }
        return new e.class(this, e);
      }, options.prototype.isValidViewType = function(viewType) {
        return Boolean(this.viewSpecManager.getViewSpec(viewType));
      }, options.prototype.changeView = function(viewType, dateOrRange) {
        if (dateOrRange) {
          if (dateOrRange.start && dateOrRange.end) {
            this.optionsManager.recordOverrides({
              visibleRange : dateOrRange
            });
          } else {
            this.currentDate = this.moment(dateOrRange).stripZone();
          }
        }
        this.renderView(viewType);
      }, options.prototype.zoomTo = function(newDate, viewType) {
        var spec;
        viewType = viewType || "day";
        spec = this.viewSpecManager.getViewSpec(viewType) || this.viewSpecManager.getUnitViewSpec(viewType);
        this.currentDate = newDate.clone();
        this.renderView(spec ? spec.type : null);
      }, options.prototype.initCurrentDate = function() {
        var defaultDateInput = this.opt("defaultDate");
        this.currentDate = null != defaultDateInput ? this.moment(defaultDateInput).stripZone() : this.getNow();
      }, options.prototype.prev = function() {
        var view = this.view;
        var nextInfo = view.dateProfileGenerator.buildPrev(view.get("dateProfile"));
        if (nextInfo.isValid) {
          this.currentDate = nextInfo.date;
          this.renderView();
        }
      }, options.prototype.next = function() {
        var view = this.view;
        var nextInfo = view.dateProfileGenerator.buildNext(view.get("dateProfile"));
        if (nextInfo.isValid) {
          this.currentDate = nextInfo.date;
          this.renderView();
        }
      }, options.prototype.prevYear = function() {
        this.currentDate.add(-1, "years");
        this.renderView();
      }, options.prototype.nextYear = function() {
        this.currentDate.add(1, "years");
        this.renderView();
      }, options.prototype.today = function() {
        this.currentDate = this.getNow();
        this.renderView();
      }, options.prototype.gotoDate = function(zonedDateInput) {
        this.currentDate = this.moment(zonedDateInput).stripZone();
        this.renderView();
      }, options.prototype.incrementDate = function(delta) {
        this.currentDate.add(moment.duration(delta));
        this.renderView();
      }, options.prototype.getDate = function() {
        return this.applyTimezone(this.currentDate);
      }, options.prototype.pushLoading = function() {
        if (!this.loadingLevel++) {
          this.publiclyTrigger("loading", [true, this.view]);
        }
      }, options.prototype.popLoading = function() {
        if (!--this.loadingLevel) {
          this.publiclyTrigger("loading", [false, this.view]);
        }
      }, options.prototype.render = function() {
        if (this.contentEl) {
          if (this.elementVisible()) {
            this.calcSize();
            this.updateViewSize();
          }
        } else {
          this.initialRender();
        }
      }, options.prototype.initialRender = function() {
        var _this = this;
        var el = this.el;
        el.addClass("fc");
        el.on("click.fc", "a[data-goto]", function(ev) {
          var anchorEl = $(ev.currentTarget);
          var gotoOptions = anchorEl.data("goto");
          var date = _this.moment(gotoOptions.date);
          var viewType = gotoOptions.type;
          var customAction = _this.view.opt("navLink" + self.capitaliseFirstLetter(viewType) + "Click");
          if ("function" == typeof customAction) {
            customAction(date, ev);
          } else {
            if ("string" == typeof customAction) {
              /** @type {string} */
              viewType = customAction;
            }
            _this.zoomTo(date, viewType);
          }
        });
        this.optionsManager.watch("settingTheme", ["?theme", "?themeSystem"], function(tAttrs) {
          var Throttle = TagHourlyStat.getThemeSystemClass(tAttrs.themeSystem || tAttrs.theme);
          var t = new Throttle(_this.optionsManager);
          var form = t.getClass("widget");
          _this.theme = t;
          if (form) {
            el.addClass(form);
          }
        }, function() {
          var css = _this.theme.getClass("widget");
          /** @type {null} */
          _this.theme = null;
          if (css) {
            el.removeClass(css);
          }
        });
        this.optionsManager.watch("settingBusinessHourGenerator", ["?businessHours"], function(options) {
          _this.businessHourGenerator = new Handlebars.default(options.businessHours, _this);
          if (_this.view) {
            _this.view.set("businessHourGenerator", _this.businessHourGenerator);
          }
        }, function() {
          /** @type {null} */
          _this.businessHourGenerator = null;
        });
        this.optionsManager.watch("applyingDirClasses", ["?isRTL", "?locale"], function(o) {
          el.toggleClass("fc-ltr", !o.isRTL);
          el.toggleClass("fc-rtl", o.isRTL);
        });
        this.contentEl = $("<div class='fc-view-container'/>").prependTo(el);
        this.initToolbars();
        this.renderHeader();
        this.renderFooter();
        this.renderView(this.opt("defaultView"));
        if (this.opt("handleWindowResize")) {
          $(window).resize(this.windowResizeProxy = self.debounce(this.windowResize.bind(this), this.opt("windowResizeDelay")));
        }
      }, options.prototype.destroy = function() {
        if (this.view) {
          this.clearView();
        }
        this.toolbarsManager.proxyCall("removeElement");
        this.contentEl.remove();
        this.el.removeClass("fc fc-ltr fc-rtl");
        this.optionsManager.unwatch("settingTheme");
        this.optionsManager.unwatch("settingBusinessHourGenerator");
        this.el.off(".fc");
        if (this.windowResizeProxy) {
          $(window).unbind("resize", this.windowResizeProxy);
          /** @type {null} */
          this.windowResizeProxy = null;
        }
        $scope.default.unneeded();
      }, options.prototype.elementVisible = function() {
        return this.el.is(":visible");
      }, options.prototype.bindViewHandlers = function(view) {
        var me = this;
        view.watch("titleForCalendar", ["title"], function(scopedValue) {
          if (view === me.view) {
            me.setToolbarsTitle(scopedValue.title);
          }
        });
        view.watch("dateProfileForCalendar", ["dateProfile"], function(data) {
          if (view === me.view) {
            me.currentDate = data.dateProfile.date;
            me.updateToolbarButtons(data.dateProfile);
          }
        });
      }, options.prototype.unbindViewHandlers = function(topic) {
        topic.unwatch("titleForCalendar");
        topic.unwatch("dateProfileForCalendar");
      }, options.prototype.renderView = function(viewType) {
        var _this;
        var currentView = this.view;
        this.freezeContentHeight();
        if (currentView && viewType && currentView.type !== viewType) {
          this.clearView();
        }
        if (!this.view && viewType) {
          _this = this.view = this.viewsByType[viewType] || (this.viewsByType[viewType] = this.instantiateView(viewType));
          this.bindViewHandlers(_this);
          _this.startBatchRender();
          _this.setElement($("<div class='fc-view fc-" + viewType + "-view' />").appendTo(this.contentEl));
          this.toolbarsManager.proxyCall("activateButton", viewType);
        }
        if (this.view) {
          if (this.view.get("businessHourGenerator") !== this.businessHourGenerator) {
            this.view.set("businessHourGenerator", this.businessHourGenerator);
          }
          this.view.setDate(this.currentDate);
          if (_this) {
            _this.stopBatchRender();
          }
        }
        this.thawContentHeight();
      }, options.prototype.clearView = function() {
        var t = this.view;
        this.toolbarsManager.proxyCall("deactivateButton", t.type);
        this.unbindViewHandlers(t);
        t.removeElement();
        t.unsetDate();
        /** @type {null} */
        this.view = null;
      }, options.prototype.reinitView = function() {
        var v = this.view;
        var app = v.queryScroll();
        this.freezeContentHeight();
        this.clearView();
        this.calcSize();
        this.renderView(v.type);
        this.view.applyScroll(app);
        this.thawContentHeight();
      }, options.prototype.getSuggestedViewHeight = function() {
        return null == this.suggestedViewHeight && this.calcSize(), this.suggestedViewHeight;
      }, options.prototype.isHeightAuto = function() {
        return "auto" === this.opt("contentHeight") || "auto" === this.opt("height");
      }, options.prototype.updateViewSize = function(b) {
        if (void 0 === b) {
          /** @type {boolean} */
          b = false;
        }
        var x;
        var layout = this.view;
        if (!this.ignoreUpdateViewSize && layout) {
          return b && (this.calcSize(), x = layout.queryScroll()), this.ignoreUpdateViewSize++, layout.updateSize(this.getSuggestedViewHeight(), this.isHeightAuto(), b), this.ignoreUpdateViewSize--, b && layout.applyScroll(x), true;
        }
      }, options.prototype.calcSize = function() {
        if (this.elementVisible()) {
          this._calcSize();
        }
      }, options.prototype._calcSize = function() {
        var contentHeightInput = this.opt("contentHeight");
        var heightInput = this.opt("height");
        this.suggestedViewHeight = "number" == typeof contentHeightInput ? contentHeightInput : "function" == typeof contentHeightInput ? contentHeightInput() : "number" == typeof heightInput ? heightInput - this.queryToolbarsHeight() : "function" == typeof heightInput ? heightInput() - this.queryToolbarsHeight() : "parent" === heightInput ? this.el.parent().height() - this.queryToolbarsHeight() : Math.round(this.contentEl.width() / Math.max(this.opt("aspectRatio"), .5));
      }, options.prototype.windowResize = function(event) {
        if (event.target === window && this.view && this.view.isDatesRendered && this.updateViewSize(true)) {
          this.publiclyTrigger("windowResize", [this.view]);
        }
      }, options.prototype.freezeContentHeight = function() {
        if (!this.freezeContentHeightDepth++) {
          this.forceFreezeContentHeight();
        }
      }, options.prototype.forceFreezeContentHeight = function() {
        this.contentEl.css({
          width : "100%",
          height : this.contentEl.height(),
          overflow : "hidden"
        });
      }, options.prototype.thawContentHeight = function() {
        this.freezeContentHeightDepth--;
        this.contentEl.css({
          width : "",
          height : "",
          overflow : ""
        });
        if (this.freezeContentHeightDepth) {
          this.forceFreezeContentHeight();
        }
      }, options.prototype.initToolbars = function() {
        this.header = new _deepAssign2.default(this, this.computeHeaderOptions());
        this.footer = new _deepAssign2.default(this, this.computeFooterOptions());
        this.toolbarsManager = new p.default([this.header, this.footer]);
      }, options.prototype.computeHeaderOptions = function() {
        return {
          extraClasses : "fc-header-toolbar",
          layout : this.opt("header")
        };
      }, options.prototype.computeFooterOptions = function() {
        return {
          extraClasses : "fc-footer-toolbar",
          layout : this.opt("footer")
        };
      }, options.prototype.renderHeader = function() {
        var header = this.header;
        header.setToolbarOptions(this.computeHeaderOptions());
        header.render();
        if (header.el) {
          this.el.prepend(header.el);
        }
      }, options.prototype.renderFooter = function() {
        var footer = this.footer;
        footer.setToolbarOptions(this.computeFooterOptions());
        footer.render();
        if (footer.el) {
          this.el.append(footer.el);
        }
      }, options.prototype.setToolbarsTitle = function(title) {
        this.toolbarsManager.proxyCall("updateTitle", title);
      }, options.prototype.updateToolbarButtons = function(Column) {
        var now = this.getNow();
        var view = this.view;
        var todayInfo = view.dateProfileGenerator.build(now);
        var nextInfo = view.dateProfileGenerator.buildPrev(view.get("dateProfile"));
        var prevInfo = view.dateProfileGenerator.buildNext(view.get("dateProfile"));
        this.toolbarsManager.proxyCall(todayInfo.isValid && !Column.currentUnzonedRange.containsDate(now) ? "enableButton" : "disableButton", "today");
        this.toolbarsManager.proxyCall(nextInfo.isValid ? "enableButton" : "disableButton", "prev");
        this.toolbarsManager.proxyCall(prevInfo.isValid ? "enableButton" : "disableButton", "next");
      }, options.prototype.queryToolbarsHeight = function() {
        return this.toolbarsManager.items.reduce(function(canCreateDiscussions, dragging) {
          return canCreateDiscussions + (dragging.el ? dragging.el.outerHeight(true) : 0);
        }, 0);
      }, options.prototype.select = function(forceOpen, noScrollIntoView) {
        this.view.select(this.buildSelectFootprint.apply(this, arguments));
      }, options.prototype.unselect = function() {
        if (this.view) {
          this.view.unselect();
        }
      }, options.prototype.buildSelectFootprint = function(zonedStartInput, zonedEndInput) {
        var max;
        var value = this.moment(zonedStartInput).stripZone();
        return max = zonedEndInput ? this.moment(zonedEndInput).stripZone() : value.hasTime() ? value.clone().add(this.defaultTimedEventDuration) : value.clone().add(this.defaultAllDayEventDuration), new templates.default(new errors.default(value, max), !value.hasTime());
      }, options.prototype.initMomentInternals = function() {
        var _this = this;
        this.defaultAllDayEventDuration = moment.duration(this.opt("defaultAllDayEventDuration"));
        this.defaultTimedEventDuration = moment.duration(this.opt("defaultTimedEventDuration"));
        this.optionsManager.watch("buildingMomentLocale", ["?locale", "?monthNames", "?monthNamesShort", "?dayNames", "?dayNamesShort", "?firstDay", "?weekNumberCalculation"], function(opts) {
          var _week;
          var weekNumberCalculation = opts.weekNumberCalculation;
          var firstDay = opts.firstDay;
          if ("iso" === weekNumberCalculation) {
            /** @type {string} */
            weekNumberCalculation = "ISO";
          }
          /** @type {!Object} */
          var localeData = Object.create(path.getMomentLocaleData(opts.locale));
          if (opts.monthNames) {
            localeData._months = opts.monthNames;
          }
          if (opts.monthNamesShort) {
            localeData._monthsShort = opts.monthNamesShort;
          }
          if (opts.dayNames) {
            localeData._weekdays = opts.dayNames;
          }
          if (opts.dayNamesShort) {
            localeData._weekdaysShort = opts.dayNamesShort;
          }
          if (null == firstDay && "ISO" === weekNumberCalculation) {
            /** @type {number} */
            firstDay = 1;
          }
          if (null != firstDay) {
            /** @type {!Object} */
            _week = Object.create(localeData._week);
            _week.dow = firstDay;
            /** @type {!Object} */
            localeData._week = _week;
          }
          if (!("ISO" !== weekNumberCalculation && "local" !== weekNumberCalculation && "function" != typeof weekNumberCalculation)) {
            localeData._fullCalendar_weekCalc = weekNumberCalculation;
          }
          /** @type {!Object} */
          _this.localeData = localeData;
          if (_this.currentDate) {
            _this.localizeMoment(_this.currentDate);
          }
        });
      }, options.prototype.moment = function() {
        /** @type {!Array} */
        var args = [];
        /** @type {number} */
        var i = 0;
        for (; i < arguments.length; i++) {
          args[i] = arguments[i];
        }
        var mom;
        return "local" === this.opt("timezone") ? (mom = page.default.apply(null, args), mom.hasTime() && mom.local()) : mom = "UTC" === this.opt("timezone") ? page.default.utc.apply(null, args) : page.default.parseZone.apply(null, args), this.localizeMoment(mom), mom;
      }, options.prototype.msToMoment = function(timestamp, text) {
        var dt = page.default.utc(timestamp);
        return text ? dt.stripTime() : dt = this.applyTimezone(dt), this.localizeMoment(dt), dt;
      }, options.prototype.msToUtcMoment = function(date, value) {
        var mom = page.default.utc(date);
        return value && mom.stripTime(), this.localizeMoment(mom), mom;
      }, options.prototype.localizeMoment = function(mom) {
        mom._locale = this.localeData;
      }, options.prototype.getIsAmbigTimezone = function() {
        return "local" !== this.opt("timezone") && "UTC" !== this.opt("timezone");
      }, options.prototype.applyTimezone = function(date) {
        if (!date.hasTime()) {
          return date.clone();
        }
        var adjustedZonedDate;
        var zonedDate = this.moment(date.toArray());
        /** @type {number} */
        var timeAdjust = date.time().asMilliseconds() - zonedDate.time().asMilliseconds();
        return timeAdjust && (adjustedZonedDate = zonedDate.clone().add(timeAdjust), date.time().asMilliseconds() - adjustedZonedDate.time().asMilliseconds() == 0 && (zonedDate = adjustedZonedDate)), zonedDate;
      }, options.prototype.footprintToDateProfile = function(b, excludeFalseConflicts) {
        if (void 0 === excludeFalseConflicts) {
          /** @type {boolean} */
          excludeFalseConflicts = false;
        }
        var dt;
        var end = page.default.utc(b.unzonedRange.startMs);
        return excludeFalseConflicts || (dt = page.default.utc(b.unzonedRange.endMs)), b.isAllDay ? (end.stripTime(), dt && dt.stripTime()) : (end = this.applyTimezone(end), dt && (dt = this.applyTimezone(dt))), new params.default(end, dt, this);
      }, options.prototype.getNow = function() {
        var now = this.opt("now");
        return "function" == typeof now && (now = now()), this.moment(now).stripZone();
      }, options.prototype.humanizeDuration = function(duration) {
        return duration.locale(this.opt("locale")).humanize();
      }, options.prototype.parseUnzonedRange = function(rangeInput) {
        /** @type {null} */
        var value = null;
        /** @type {null} */
        var key = null;
        return rangeInput.start && (value = this.moment(rangeInput.start).stripZone()), rangeInput.end && (key = this.moment(rangeInput.end).stripZone()), value || key ? value && key && key.isBefore(value) ? null : new errors.default(value, key) : null;
      }, options.prototype.initEventManager = function() {
        var t = this;
        var that = new ShapeMaker_1.default(this);
        var template = this.opt("eventSources") || [];
        var statement = this.opt("events");
        this.eventManager = that;
        if (statement) {
          template.unshift(statement);
        }
        that.on("release", function(e) {
          t.trigger("eventsReset", e);
        });
        that.freeze();
        template.forEach(function(media) {
          var n = ModuleParser.default.parse(media, t);
          if (n) {
            that.addSource(n);
          }
        });
        that.thaw();
      }, options.prototype.requestEvents = function(start, end) {
        return this.eventManager.requestEvents(start, end, this.opt("timezone"), !this.opt("lazyFetching"));
      }, options.prototype.getEventEnd = function(event) {
        return event.end ? event.end.clone() : this.getDefaultEventEnd(event.allDay, event.start);
      }, options.prototype.getDefaultEventEnd = function(allDay, start) {
        var end = start.clone();
        return allDay ? end.stripTime().add(this.defaultAllDayEventDuration) : end.add(this.defaultTimedEventDuration), this.getIsAmbigTimezone() && end.stripZone(), end;
      }, options.prototype.rerenderEvents = function() {
        this.view.flash("displayingEvents");
      }, options.prototype.refetchEvents = function() {
        this.eventManager.refetchAllSources();
      }, options.prototype.renderEvents = function(day, num) {
        this.eventManager.freeze();
        /** @type {number} */
        var i = 0;
        for (; i < day.length; i++) {
          this.renderEvent(day[i], num);
        }
        this.eventManager.thaw();
      }, options.prototype.renderEvent = function(result, x) {
        if (void 0 === x) {
          /** @type {boolean} */
          x = false;
        }
        var options = this.eventManager;
        var t = uri_1.default.parse(result, result.source || options.stickySource);
        if (t) {
          options.addEventDef(t, x);
        }
      }, options.prototype.removeEvents = function(fn) {
        var optionConf;
        var k;
        var proto = this.eventManager;
        /** @type {!Array} */
        var data = [];
        var options = {};
        if (null == fn) {
          proto.removeAllEventDefs();
        } else {
          proto.getEventInstances().forEach(function(canCreateDiscussions) {
            data.push(canCreateDiscussions.toLegacy());
          });
          data = forEach(data, fn);
          /** @type {number} */
          k = 0;
          for (; k < data.length; k++) {
            optionConf = this.eventManager.getEventDefByUid(data[k]._id);
            /** @type {boolean} */
            options[optionConf.id] = true;
          }
          proto.freeze();
          for (k in options) {
            proto.removeEventDefsById(k);
          }
          proto.thaw();
        }
      }, options.prototype.clientEvents = function(filter) {
        /** @type {!Array} */
        var temporaryStyles = [];
        return this.eventManager.getEventInstances().forEach(function(canCreateDiscussions) {
          temporaryStyles.push(canCreateDiscussions.toLegacy());
        }), forEach(temporaryStyles, filter);
      }, options.prototype.updateEvents = function(options) {
        this.eventManager.freeze();
        /** @type {number} */
        var i = 0;
        for (; i < options.length; i++) {
          this.updateEvent(options[i]);
        }
        this.eventManager.thaw();
      }, options.prototype.updateEvent = function(timer) {
        var x;
        var timeout;
        var instance = this.eventManager.getEventDefByUid(timer._id);
        if (instance instanceof App.default) {
          x = instance.buildInstance();
          timeout = History_1.default.createFromRawProps(x, timer, null);
          this.eventManager.mutateEventsWithId(instance.id, timeout);
        }
      }, options.prototype.getEventSources = function() {
        return this.eventManager.otherSources.slice();
      }, options.prototype.getEventSourceById = function(id) {
        return this.eventManager.getSourceById(it.default.normalizeId(id));
      }, options.prototype.addEventSource = function(source) {
        var src = ModuleParser.default.parse(source, this);
        if (src) {
          this.eventManager.addSource(src);
        }
      }, options.prototype.removeEventSources = function(f) {
        var s;
        var i;
        var that = this.eventManager;
        if (null == f) {
          this.eventManager.removeAllSources();
        } else {
          s = that.multiQuerySources(f);
          that.freeze();
          /** @type {number} */
          i = 0;
          for (; i < s.length; i++) {
            that.removeSource(s[i]);
          }
          that.thaw();
        }
      }, options.prototype.removeEventSource = function(source) {
        var i;
        var that = this.eventManager;
        var item = that.querySources(source);
        that.freeze();
        /** @type {number} */
        i = 0;
        for (; i < item.length; i++) {
          that.removeSource(item[i]);
        }
        that.thaw();
      }, options.prototype.refetchEventSources = function(tr) {
        var i;
        var view = this.eventManager;
        var rows = view.multiQuerySources(tr);
        view.freeze();
        /** @type {number} */
        i = 0;
        for (; i < rows.length; i++) {
          view.refetchSource(rows[i]);
        }
        view.thaw();
      }, options.defaults = defaults.globalDefaults, options.englishDefaults = defaults.englishDefaults, options.rtlDefaults = defaults.rtlDefaults, options;
    }();
    exports.default = Log;
    d.default.mixInto(Log);
    c.default.mixInto(Log);
  }, function(canCreateDiscussions, e, $) {
    Object.defineProperty(e, "__esModule", {
      value : true
    });
    var node = $(0);
    var instance = $(4);
    var errors = $(5);
    var newOrg = function() {
      /**
       * @param {!Element} _view
       * @return {undefined}
       */
      function ViewRef_(_view) {
        /** @type {!Element} */
        this._view = _view;
      }
      return ViewRef_.prototype.opt = function(name) {
        return this._view.opt(name);
      }, ViewRef_.prototype.trimHiddenDays = function(value) {
        return this._view.trimHiddenDays(value);
      }, ViewRef_.prototype.msToUtcMoment = function(date, value) {
        return this._view.calendar.msToUtcMoment(date, value);
      }, ViewRef_.prototype.buildPrev = function(options) {
        var column = options.date.clone().startOf(options.currentRangeUnit).subtract(options.dateIncrement);
        return this.build(column, -1);
      }, ViewRef_.prototype.buildNext = function(options) {
        var column = options.date.clone().startOf(options.currentRangeUnit).add(options.dateIncrement);
        return this.build(column, 1);
      }, ViewRef_.prototype.build = function(date, direction, showOptionsAlert) {
        if (void 0 === showOptionsAlert) {
          /** @type {boolean} */
          showOptionsAlert = false;
        }
        var r;
        var currentInfo;
        var NINETY_EIGHT_HOURS;
        var renderRange;
        var store;
        var err;
        /** @type {boolean} */
        var end = !date.hasTime();
        /** @type {null} */
        var minTime = null;
        /** @type {null} */
        var maxTime = null;
        return r = this.buildValidRange(), r = this.trimHiddenDays(r), showOptionsAlert && (date = this.msToUtcMoment(r.constrainDate(date), end)), currentInfo = this.buildCurrentRangeInfo(date, direction), NINETY_EIGHT_HOURS = /^(year|month|week|day)$/.test(currentInfo.unit), renderRange = this.buildRenderRange(this.trimHiddenDays(currentInfo.unzonedRange), currentInfo.unit, NINETY_EIGHT_HOURS), renderRange = this.trimHiddenDays(renderRange), store = renderRange.clone(), this.opt("showNonCurrentDates") || 
        (store = store.intersect(currentInfo.unzonedRange)), minTime = node.duration(this.opt("minTime")), maxTime = node.duration(this.opt("maxTime")), store = this.adjustActiveRange(store, minTime, maxTime), store = store.intersect(r), store && (date = this.msToUtcMoment(store.constrainDate(date), end)), err = currentInfo.unzonedRange.intersectsWith(r), {
          validUnzonedRange : r,
          currentUnzonedRange : currentInfo.unzonedRange,
          currentRangeUnit : currentInfo.unit,
          isRangeAllDay : NINETY_EIGHT_HOURS,
          activeUnzonedRange : store,
          renderUnzonedRange : renderRange,
          minTime : minTime,
          maxTime : maxTime,
          isValid : err,
          date : date,
          dateIncrement : this.buildDateIncrement(currentInfo.duration)
        };
      }, ViewRef_.prototype.buildValidRange = function() {
        return this._view.getUnzonedRangeOption("validRange", this._view.calendar.getNow()) || new errors.default;
      }, ViewRef_.prototype.buildCurrentRangeInfo = function(date, direction) {
        var dayCount;
        var spec = this._view.viewSpec;
        /** @type {null} */
        var duration = null;
        /** @type {null} */
        var unit = null;
        /** @type {null} */
        var range = null;
        return spec.duration ? (duration = spec.duration, unit = spec.durationUnit, range = this.buildRangeFromDuration(date, direction, duration, unit)) : (dayCount = this.opt("dayCount")) ? (unit = "day", range = this.buildRangeFromDayCount(date, direction, dayCount)) : (range = this.buildCustomVisibleRange(date)) ? unit = instance.computeGreatestUnit(range.getStart(), range.getEnd()) : (duration = this.getFallbackDuration(), unit = instance.computeGreatestUnit(duration), range = this.buildRangeFromDuration(date, 
        direction, duration, unit)), {
          duration : duration,
          unit : unit,
          unzonedRange : range
        };
      }, ViewRef_.prototype.getFallbackDuration = function() {
        return node.duration({
          days : 1
        });
      }, ViewRef_.prototype.adjustActiveRange = function(range, minTime, maxTime) {
        var opts = range.getStart();
        var max = range.getEnd();
        return this._view.usesMinMaxTime && (minTime < 0 && opts.time(0).add(minTime), maxTime > 864E5 && max.time(maxTime - 864E5)), new errors.default(opts, max);
      }, ViewRef_.prototype.buildRangeFromDuration = function(value, property, duration, unit) {
        /**
         * @return {undefined}
         */
        function update() {
          date = value.clone().startOf(alignment);
          data = date.clone().add(duration);
          m = new errors.default(date, data);
        }
        var offset;
        var start;
        var date;
        var data;
        var m;
        var alignment = this.opt("dateAlignment");
        return alignment || (offset = this.opt("dateIncrement"), offset ? (start = node.duration(offset), alignment = start < duration ? instance.computeDurationGreatestUnit(start, offset) : unit) : alignment = unit), duration.as("days") <= 1 && this._view.isHiddenDay(date) && (date = this._view.skipHiddenDays(date, property), date.startOf("day")), update(), this.trimHiddenDays(m) || (value = this._view.skipHiddenDays(value, property), update()), m;
      }, ViewRef_.prototype.buildRangeFromDayCount = function(prefix, direction, dayCount) {
        var cache;
        var alignment = this.opt("dateAlignment");
        /** @type {number} */
        var runningCount = 0;
        var date = prefix.clone();
        if (alignment) {
          date.startOf(alignment);
        }
        date.startOf("day");
        date = this._view.skipHiddenDays(date, direction);
        cache = date.clone();
        do {
          cache.add(1, "day");
          if (!this._view.isHiddenDay(cache)) {
            runningCount++;
          }
        } while (runningCount < dayCount);
        return new errors.default(date, cache);
      }, ViewRef_.prototype.buildCustomVisibleRange = function(date) {
        var def = this._view.getUnzonedRangeOption("visibleRange", this._view.calendar.applyTimezone(date));
        return !def || null != def.startMs && null != def.endMs ? def : null;
      }, ViewRef_.prototype.buildRenderRange = function(currentRange, currentRangeUnit, i) {
        return currentRange.clone();
      }, ViewRef_.prototype.buildDateIncrement = function(fallback) {
        var customAlignment;
        var val = this.opt("dateIncrement");
        return val ? node.duration(val) : (customAlignment = this.opt("dateAlignment")) ? node.duration(1, customAlignment) : fallback || node.duration({
          days : 1
        });
      }, ViewRef_;
    }();
    e.default = newOrg;
  }, function(canCreateDiscussions, exports, require) {
    /**
     * @param {!Object} el
     * @return {?}
     */
    function parse(el) {
      var o;
      var n;
      var d;
      var stick;
      var prefix = parser.dataAttrPrefix;
      return prefix && (prefix = prefix + "-"), o = el.data(prefix + "event") || null, o && (o = "object" == typeof o ? $.extend({}, o) : {}, n = o.start, null == n && (n = o.time), d = o.duration, stick = o.stick, delete o.start, delete o.time, delete o.duration, delete o.stick), null == n && (n = el.data(prefix + "start")), null == n && (n = el.data(prefix + "time")), null == d && (d = el.data(prefix + "duration")), null == stick && (stick = el.data(prefix + "stick")), n = null != n ? s.duration(n) : 
      null, d = null != d ? s.duration(d) : null, stick = Boolean(stick), {
        eventProps : o,
        startTime : n,
        duration : d,
        stick : stick
      };
    }
    Object.defineProperty(exports, "__esModule", {
      value : true
    });
    var Util = require(2);
    var $ = require(3);
    var s = require(0);
    var parser = require(16);
    var TagHourlyStat = require(4);
    var page = require(10);
    var d = require(7);
    var debug_element_1 = require(23);
    var config = require(13);
    var h = require(18);
    var p = require(6);
    var _deepAssign2 = require(15);
    var Log = function(_super) {
      /**
       * @return {?}
       */
      function Draggable() {
        var canvas = null !== _super && _super.apply(this, arguments) || this;
        return canvas.isDragging = false, canvas;
      }
      return Util.__extends(Draggable, _super), Draggable.prototype.end = function() {
        if (this.dragListener) {
          this.dragListener.endInteraction();
        }
      }, Draggable.prototype.bindToDocument = function() {
        this.listenTo($(document), {
          dragstart : this.handleDragStart,
          sortstart : this.handleDragStart
        });
      }, Draggable.prototype.unbindFromDocument = function() {
        this.stopListeningTo($(document));
      }, Draggable.prototype.handleDragStart = function(ev, ui) {
        var el;
        var accept;
        if (this.opt("droppable")) {
          el = $((ui ? ui.item : null) || ev.target);
          accept = this.opt("dropAccept");
          if ($.isFunction(accept) ? accept.call(el[0], el) : el.is(accept)) {
            if (!this.isDragging) {
              this.listenToExternalDrag(el, ev, ui);
            }
          }
        }
      }, Draggable.prototype.listenToExternalDrag = function(ev, el, name) {
        var dropLocation;
        var me = this;
        var view = this.component;
        var _this = this.view;
        var meta = parse(ev);
        (this.dragListener = new debug_element_1.default(view, {
          interactionStart : function() {
            /** @type {boolean} */
            me.isDragging = true;
          },
          hitOver : function(hit) {
            var $;
            /** @type {boolean} */
            var n = true;
            var cell = hit.component.getSafeHitFootprint(hit);
            if (cell) {
              dropLocation = me.computeExternalDrop(cell, meta);
              if (dropLocation) {
                $ = new h.default(dropLocation.buildInstances());
                n = meta.eventProps ? view.isEventInstanceGroupAllowed($) : view.isExternalInstanceGroupAllowed($);
              } else {
                /** @type {boolean} */
                n = false;
              }
            } else {
              /** @type {boolean} */
              n = false;
            }
            if (!n) {
              /** @type {null} */
              dropLocation = null;
              TagHourlyStat.disableCursor();
            }
            if (dropLocation) {
              view.renderDrag(view.eventRangesToEventFootprints($.sliceRenderRanges(view.dateProfile.renderUnzonedRange, _this.calendar)));
            }
          },
          hitOut : function() {
            /** @type {null} */
            dropLocation = null;
          },
          hitDone : function() {
            TagHourlyStat.enableCursor();
            view.unrenderDrag();
          },
          interactionEnd : function(ui) {
            if (dropLocation) {
              _this.reportExternalDrop(dropLocation, Boolean(meta.eventProps), Boolean(meta.stick), ev, ui, name);
            }
            /** @type {boolean} */
            me.isDragging = false;
            /** @type {null} */
            me.dragListener = null;
          }
        })).startDrag(el);
      }, Draggable.prototype.computeExternalDrop = function(data, options) {
        var d;
        var calendar = this.view.calendar;
        var date = page.default.utc(data.unzonedRange.startMs).stripZone();
        return data.isAllDay && (options.startTime ? date.time(options.startTime) : date.stripTime()), options.duration && (d = date.clone().add(options.duration)), date = calendar.applyTimezone(date), d && (d = calendar.applyTimezone(d)), config.default.parse($.extend({}, options.eventProps, {
          start : date,
          end : d
        }), new p.default(calendar));
      }, Draggable;
    }(_deepAssign2.default);
    exports.default = Log;
    d.default.mixInto(Log);
    /** @type {string} */
    parser.dataAttrPrefix = "";
  }, function(canCreateDiscussions, e, require) {
    Object.defineProperty(e, "__esModule", {
      value : true
    });
    var Util = require(2);
    var $ = require(3);
    var TagHourlyStat = require(4);
    var s = require(37);
    var a = require(50);
    var Backbone = require(23);
    var _deepAssign2 = require(15);
    var newOrg = function(_super) {
      /**
       * @param {?} mode
       * @param {!Object} expression
       * @return {?}
       */
      function start(mode, expression) {
        var self = _super.call(this, mode) || this;
        return self.isResizing = false, self.eventPointing = expression, self;
      }
      return Util.__extends(start, _super), start.prototype.end = function() {
        if (this.dragListener) {
          this.dragListener.endInteraction();
        }
      }, start.prototype.bindToEl = function(moduleObjects) {
        var MM = this.component;
        MM.bindSegHandlerToEl(moduleObjects, "mousedown", this.handleMouseDown.bind(this));
        MM.bindSegHandlerToEl(moduleObjects, "touchstart", this.handleTouchStart.bind(this));
      }, start.prototype.handleMouseDown = function(value, e) {
        if (this.component.canStartResize(value, e)) {
          this.buildDragListener(value, $(e.target).is(".fc-start-resizer")).startInteraction(e, {
            distance : 5
          });
        }
      }, start.prototype.handleTouchStart = function(value, e) {
        if (this.component.canStartResize(value, e)) {
          this.buildDragListener(value, $(e.target).is(".fc-start-resizer")).startInteraction(e);
        }
      }, start.prototype.buildDragListener = function(seg, err) {
        var n;
        var res;
        var _this = this;
        var component = this.component;
        var view = this.view;
        var options = view.calendar;
        var d = options.eventManager;
        var el = seg.el;
        var tqp = seg.footprint.eventDef;
        var event = seg.footprint.eventInstance;
        return this.dragListener = new Backbone.default(component, {
          scroll : this.opt("dragScroll"),
          subjectEl : el,
          interactionStart : function() {
            /** @type {boolean} */
            n = false;
          },
          dragStart : function(ev) {
            /** @type {boolean} */
            n = true;
            _this.eventPointing.handleMouseout(seg, ev);
            _this.segResizeStart(seg, ev);
          },
          hitOver : function(hit, isOrig, origHit) {
            var source;
            /** @type {boolean} */
            var isArr = true;
            var path = component.getSafeHitFootprint(origHit);
            var data = component.getSafeHitFootprint(hit);
            if (path && data) {
              res = err ? _this.computeEventStartResizeMutation(path, data, seg.footprint) : _this.computeEventEndResizeMutation(path, data, seg.footprint);
              if (res) {
                source = d.buildMutatedEventInstanceGroup(tqp.id, res);
                isArr = component.isEventInstanceGroupAllowed(source);
              } else {
                /** @type {boolean} */
                isArr = false;
              }
            } else {
              /** @type {boolean} */
              isArr = false;
            }
            if (isArr) {
              if (res.isEmpty()) {
                /** @type {null} */
                res = null;
              }
            } else {
              /** @type {null} */
              res = null;
              TagHourlyStat.disableCursor();
            }
            if (res) {
              view.hideEventsWithId(seg.footprint.eventDef.id);
              view.renderEventResize(component.eventRangesToEventFootprints(source.sliceRenderRanges(component.dateProfile.renderUnzonedRange, options)), seg);
            }
          },
          hitOut : function() {
            /** @type {null} */
            res = null;
          },
          hitDone : function() {
            view.unrenderEventResize(seg);
            view.showEventsWithId(seg.footprint.eventDef.id);
            TagHourlyStat.enableCursor();
          },
          interactionEnd : function(ev) {
            if (n) {
              _this.segResizeStop(seg, ev);
            }
            if (res) {
              view.reportEventResize(event, res, el, ev);
            }
            /** @type {null} */
            _this.dragListener = null;
          }
        });
      }, start.prototype.segResizeStart = function(item, to) {
        /** @type {boolean} */
        this.isResizing = true;
        this.component.publiclyTrigger("eventResizeStart", {
          context : item.el[0],
          args : [item.footprint.getEventLegacy(), to, {}, this.view]
        });
      }, start.prototype.segResizeStop = function(item, to) {
        /** @type {boolean} */
        this.isResizing = false;
        this.component.publiclyTrigger("eventResizeStop", {
          context : item.el[0],
          args : [item.footprint.getEventLegacy(), to, {}, this.view]
        });
      }, start.prototype.computeEventStartResizeMutation = function(node, ed, startingRange) {
        var i;
        var active_pools;
        var evt = startingRange.componentFootprint.unzonedRange;
        var t = this.component.diffDates(ed.unzonedRange.getStart(), node.unzonedRange.getStart());
        return evt.getStart().add(t) < evt.getEnd() && (i = new a.default, i.setStartDelta(t), active_pools = new s.default, active_pools.setDateMutation(i), active_pools);
      }, start.prototype.computeEventEndResizeMutation = function(editor, item, changeMeta) {
        var i;
        var active_pools;
        var evt = changeMeta.componentFootprint.unzonedRange;
        var t = this.component.diffDates(item.unzonedRange.getEnd(), editor.unzonedRange.getEnd());
        return evt.getEnd().add(t) > evt.getStart() && (i = new a.default, i.setEndDelta(t), active_pools = new s.default, active_pools.setDateMutation(i), active_pools);
      }, start;
    }(_deepAssign2.default);
    e.default = newOrg;
  }, function(canCreateDiscussions, e, f) {
    Object.defineProperty(e, "__esModule", {
      value : true
    });
    var tslib_1 = f(2);
    var heading = f(4);
    var message = f(37);
    var value = f(50);
    var del = f(54);
    var ns = f(23);
    var status = f(244);
    var r = f(15);
    var newOrg = function(_super) {
      /**
       * @param {?} e
       * @param {!Object} type
       * @return {?}
       */
      function ParseError(e, type) {
        var canvas = _super.call(this, e) || this;
        return canvas.isDragging = false, canvas.eventPointing = type, canvas;
      }
      return tslib_1.__extends(ParseError, _super), ParseError.prototype.end = function() {
        if (this.dragListener) {
          this.dragListener.endInteraction();
        }
      }, ParseError.prototype.getSelectionDelay = function() {
        var consumedNewLine = this.opt("eventLongPressDelay");
        return null == consumedNewLine && (consumedNewLine = this.opt("longPressDelay")), consumedNewLine;
      }, ParseError.prototype.bindToEl = function(moduleObjects) {
        var MM = this.component;
        MM.bindSegHandlerToEl(moduleObjects, "mousedown", this.handleMousedown.bind(this));
        MM.bindSegHandlerToEl(moduleObjects, "touchstart", this.handleTouchStart.bind(this));
      }, ParseError.prototype.handleMousedown = function(value, e) {
        if (!this.component.shouldIgnoreMouse() && this.component.canStartDrag(value, e)) {
          this.buildDragListener(value).startInteraction(e, {
            distance : 5
          });
        }
      }, ParseError.prototype.handleTouchStart = function(seg, ev) {
        var view = this.component;
        var settings = {
          delay : this.view.isEventDefSelected(seg.footprint.eventDef) ? 0 : this.getSelectionDelay()
        };
        if (view.canStartDrag(seg, ev)) {
          this.buildDragListener(seg).startInteraction(ev, settings);
        } else {
          if (view.canStartSelection(seg, ev)) {
            this.buildSelectListener(seg).startInteraction(ev, settings);
          }
        }
      }, ParseError.prototype.buildSelectListener = function(item) {
        var e = this;
        var path = this.view;
        var oembed = item.footprint.eventDef;
        var r = item.footprint.eventInstance;
        if (this.dragListener) {
          return this.dragListener;
        }
        var options = this.dragListener = new del.default({
          dragStart : function(dragItem) {
            if (options.isTouch && !path.isEventDefSelected(oembed) && r) {
              path.selectEventInstance(r);
            }
          },
          interactionEnd : function(isCancelled) {
            /** @type {null} */
            e.dragListener = null;
          }
        });
        return options;
      }, ParseError.prototype.buildDragListener = function(seg) {
        var e;
        var mouseFollower;
        var dropLocation;
        var _this = this;
        var c = this.component;
        var view = this.view;
        var calendar = view.calendar;
        var options = calendar.eventManager;
        var el = seg.el;
        var data = seg.footprint.eventDef;
        var event = seg.footprint.eventInstance;
        if (this.dragListener) {
          return this.dragListener;
        }
        var dragListener = this.dragListener = new ns.default(view, {
          scroll : this.opt("dragScroll"),
          subjectEl : el,
          subjectCenter : true,
          interactionStart : function(ev) {
            seg.component = c;
            /** @type {boolean} */
            e = false;
            mouseFollower = new status.default(seg.el, {
              additionalClass : "fc-dragging",
              parentEl : view.el,
              opacity : dragListener.isTouch ? null : _this.opt("dragOpacity"),
              revertDuration : _this.opt("dragRevertDuration"),
              zIndex : 2
            });
            mouseFollower.hide();
            mouseFollower.start(ev);
          },
          dragStart : function(ev) {
            if (dragListener.isTouch && !view.isEventDefSelected(data) && event) {
              view.selectEventInstance(event);
            }
            /** @type {boolean} */
            e = true;
            _this.eventPointing.handleMouseout(seg, ev);
            _this.segDragStart(seg, ev);
            view.hideEventsWithId(seg.footprint.eventDef.id);
          },
          hitOver : function(hit, isOrig, origHit) {
            var origHitSpan;
            var hitSpan;
            var div;
            /** @type {boolean} */
            var inspectorControlsElement = true;
            if (seg.hit) {
              origHit = seg.hit;
            }
            origHitSpan = origHit.component.getSafeHitFootprint(origHit);
            hitSpan = hit.component.getSafeHitFootprint(hit);
            if (origHitSpan && hitSpan) {
              dropLocation = _this.computeEventDropMutation(origHitSpan, hitSpan, data);
              if (dropLocation) {
                div = options.buildMutatedEventInstanceGroup(data.id, dropLocation);
                inspectorControlsElement = c.isEventInstanceGroupAllowed(div);
              } else {
                /** @type {boolean} */
                inspectorControlsElement = false;
              }
            } else {
              /** @type {boolean} */
              inspectorControlsElement = false;
            }
            if (!inspectorControlsElement) {
              /** @type {null} */
              dropLocation = null;
              heading.disableCursor();
            }
            if (dropLocation && view.renderDrag(c.eventRangesToEventFootprints(div.sliceRenderRanges(c.dateProfile.renderUnzonedRange, calendar)), seg, dragListener.isTouch)) {
              mouseFollower.hide();
            } else {
              mouseFollower.show();
            }
            if (isOrig) {
              /** @type {null} */
              dropLocation = null;
            }
          },
          hitOut : function() {
            view.unrenderDrag(seg);
            mouseFollower.show();
            /** @type {null} */
            dropLocation = null;
          },
          hitDone : function() {
            heading.enableCursor();
          },
          interactionEnd : function(ev) {
            delete seg.component;
            mouseFollower.stop(!dropLocation, function() {
              if (e) {
                view.unrenderDrag(seg);
                _this.segDragStop(seg, ev);
              }
              view.showEventsWithId(seg.footprint.eventDef.id);
              if (dropLocation) {
                view.reportEventDrop(event, dropLocation, el, ev);
              }
            });
            /** @type {null} */
            _this.dragListener = null;
          }
        });
        return dragListener;
      }, ParseError.prototype.segDragStart = function(item, to) {
        /** @type {boolean} */
        this.isDragging = true;
        this.component.publiclyTrigger("eventDragStart", {
          context : item.el[0],
          args : [item.footprint.getEventLegacy(), to, {}, this.view]
        });
      }, ParseError.prototype.segDragStop = function(item, to) {
        /** @type {boolean} */
        this.isDragging = false;
        this.component.publiclyTrigger("eventDragStop", {
          context : item.el[0],
          args : [item.footprint.getEventLegacy(), to, {}, this.view]
        });
      }, ParseError.prototype.computeEventDropMutation = function(data, preflightData, pages) {
        var promises = new message.default;
        return promises.setDateMutation(this.computeEventDateMutation(data, preflightData)), promises;
      }, ParseError.prototype.computeEventDateMutation = function(item, data) {
        var n;
        var edge;
        var m = item.unzonedRange.getStart();
        var e = data.unzonedRange.getStart();
        /** @type {boolean} */
        var folding_angle = false;
        /** @type {boolean} */
        var site0 = false;
        /** @type {boolean} */
        var topogramId = false;
        return item.isAllDay !== data.isAllDay && (folding_angle = true, data.isAllDay ? (topogramId = true, m.stripTime()) : site0 = true), n = this.component.diffDates(e, m), edge = new value.default, edge.clearEnd = folding_angle, edge.forceTimed = site0, edge.forceAllDay = topogramId, edge.setDateDelta(n), edge;
      }, ParseError;
    }(r.default);
    e.default = newOrg;
  }, function(canCreateDiscussions, e, require) {
    Object.defineProperty(e, "__esModule", {
      value : true
    });
    var Util = require(2);
    var utils = require(4);
    var Backbone = require(23);
    var _Complex2 = require(12);
    var api_2 = require(5);
    var _deepAssign2 = require(15);
    var newOrg = function(_super) {
      /**
       * @param {?} props
       * @return {?}
       */
      function Editor(props) {
        var n = _super.call(this, props) || this;
        return n.dragListener = n.buildDragListener(), n;
      }
      return Util.__extends(Editor, _super), Editor.prototype.end = function() {
        this.dragListener.endInteraction();
      }, Editor.prototype.getDelay = function() {
        var consumedNewLine = this.opt("selectLongPressDelay");
        return null == consumedNewLine && (consumedNewLine = this.opt("longPressDelay")), consumedNewLine;
      }, Editor.prototype.bindToEl = function(moduleObjects) {
        var that = this;
        var MM = this.component;
        var self = this.dragListener;
        MM.bindDateHandlerToEl(moduleObjects, "mousedown", function(ev) {
          if (that.opt("selectable") && !MM.shouldIgnoreMouse()) {
            self.startInteraction(ev, {
              distance : that.opt("selectMinDistance")
            });
          }
        });
        MM.bindDateHandlerToEl(moduleObjects, "touchstart", function(ev) {
          if (that.opt("selectable") && !MM.shouldIgnoreTouch()) {
            self.startInteraction(ev, {
              delay : that.getDelay()
            });
          }
        });
        utils.preventSelection(moduleObjects);
      }, Editor.prototype.buildDragListener = function() {
        var element;
        var _this = this;
        var component = this.component;
        return new Backbone.default(component, {
          scroll : this.opt("dragScroll"),
          interactionStart : function() {
            /** @type {null} */
            element = null;
          },
          dragStart : function(feature) {
            _this.view.unselect(feature);
          },
          hitOver : function(hit, isOrig, origHit) {
            var origHitSpan;
            var hitSpan;
            if (origHit) {
              origHitSpan = component.getSafeHitFootprint(origHit);
              hitSpan = component.getSafeHitFootprint(hit);
              element = origHitSpan && hitSpan ? _this.computeSelection(origHitSpan, hitSpan) : null;
              if (element) {
                component.renderSelectionFootprint(element);
              } else {
                if (false === element) {
                  utils.disableCursor();
                }
              }
            }
          },
          hitOut : function() {
            /** @type {null} */
            element = null;
            component.unrenderSelection();
          },
          hitDone : function() {
            utils.enableCursor();
          },
          interactionEnd : function(ev, range) {
            if (!range && element) {
              _this.view.reportSelection(element, ev);
            }
          }
        });
      }, Editor.prototype.computeSelection = function(span0, span1) {
        var isBground = this.computeSelectionFootprint(span0, span1);
        return !(isBground && !this.isSelectionFootprintAllowed(isBground)) && isBground;
      }, Editor.prototype.computeSelectionFootprint = function(theta, index) {
        /** @type {!Array} */
        var data = [theta.unzonedRange.startMs, theta.unzonedRange.endMs, index.unzonedRange.startMs, index.unzonedRange.endMs];
        return data.sort(utils.compareNumbers), new _Complex2.default(new api_2.default(data[0], data[3]), theta.isAllDay);
      }, Editor.prototype.isSelectionFootprintAllowed = function(isBgroundImg) {
        return this.component.dateProfile.validUnzonedRange.containsRange(isBgroundImg.unzonedRange) && this.view.calendar.constraints.isSelectionFootprintAllowed(isBgroundImg);
      }, Editor;
    }(_deepAssign2.default);
    e.default = newOrg;
  }, function(canCreateDiscussions, exports, require) {
    /**
     * @param {!Array} range
     * @return {?}
     */
    function getEvaluateFnObj(range) {
      var i;
      /** @type {!Array} */
      var options = [];
      /** @type {!Array} */
      var finalRange = [];
      /** @type {number} */
      i = 0;
      for (; i < range.length; i++) {
        if (range[i].componentFootprint.isAllDay) {
          options.push(range[i]);
        } else {
          finalRange.push(range[i]);
        }
      }
      return {
        allDay : options,
        timed : finalRange
      };
    }
    Object.defineProperty(exports, "__esModule", {
      value : true
    });
    var data;
    var key;
    var util = require(2);
    var duration = require(0);
    var b = require(3);
    var $ = require(4);
    var _deepAssign2 = require(39);
    var ShapeViewer_1 = require(41);
    var History_1 = require(227);
    var ShapeMaker_1 = require(61);
    var CepPromiseError = function(_super) {
      /**
       * @param {?} gl
       * @param {?} url
       * @return {?}
       */
      function create(gl, url) {
        var that = _super.call(this, gl, url) || this;
        return that.usesMinMaxTime = true, that.timeGrid = that.instantiateTimeGrid(), that.addChild(that.timeGrid), that.opt("allDaySlot") && (that.dayGrid = that.instantiateDayGrid(), that.addChild(that.dayGrid)), that.scroller = new _deepAssign2.default({
          overflowX : "hidden",
          overflowY : "auto"
        }), that;
      }
      return util.__extends(create, _super), create.prototype.instantiateTimeGrid = function() {
        var sources = new this.timeGridClass(this);
        return $.copyOwnProps(data, sources), sources;
      }, create.prototype.instantiateDayGrid = function() {
        var value = new this.dayGridClass(this);
        return $.copyOwnProps(key, value), value;
      }, create.prototype.renderSkeleton = function() {
        var layersLi;
        var timeGridEl;
        this.el.addClass("fc-agenda-view").html(this.renderSkeletonHtml());
        this.scroller.render();
        layersLi = this.scroller.el.addClass("fc-time-grid-container");
        timeGridEl = b('<div class="fc-time-grid" />').appendTo(layersLi);
        this.el.find(".fc-body > tr > td").append(layersLi);
        this.timeGrid.headContainerEl = this.el.find(".fc-head-container");
        this.timeGrid.setElement(timeGridEl);
        if (this.dayGrid) {
          this.dayGrid.setElement(this.el.find(".fc-day-grid"));
          this.dayGrid.bottomCoordPadding = this.dayGrid.el.next("hr").outerHeight();
        }
      }, create.prototype.unrenderSkeleton = function() {
        this.timeGrid.removeElement();
        if (this.dayGrid) {
          this.dayGrid.removeElement();
        }
        this.scroller.destroy();
      }, create.prototype.renderSkeletonHtml = function() {
        var widgetContainer = this.calendar.theme;
        return '<table class="' + widgetContainer.getClass("tableGrid") + '">' + (this.opt("columnHeader") ? '<thead class="fc-head"><tr><td class="fc-head-container ' + widgetContainer.getClass("widgetHeader") + '">&nbsp;</td></tr></thead>' : "") + '<tbody class="fc-body"><tr><td class="' + widgetContainer.getClass("widgetContent") + '">' + (this.dayGrid ? '<div class="fc-day-grid"/><hr class="fc-divider ' + widgetContainer.getClass("widgetHeader") + '"/>' : "") + "</td></tr></tbody></table>";
      }, create.prototype.axisStyleAttr = function() {
        return null != this.axisWidth ? 'style="width:' + this.axisWidth + 'px"' : "";
      }, create.prototype.getNowIndicatorUnit = function() {
        return this.timeGrid.getNowIndicatorUnit();
      }, create.prototype.updateSize = function(totalHeight, event, force) {
        var eventLimit;
        var scrollerHeight;
        var o;
        if (_super.prototype.updateSize.call(this, totalHeight, event, force), this.axisWidth = $.matchCellWidths(this.el.find(".fc-axis")), !this.timeGrid.colEls) {
          return void(event || (scrollerHeight = this.computeScrollerHeight(totalHeight), this.scroller.setHeight(scrollerHeight)));
        }
        var temptitle = this.el.find(".fc-row:not(.fc-scroller *)");
        this.timeGrid.bottomRuleEl.hide();
        this.scroller.clear();
        $.uncompensateScroll(temptitle);
        if (this.dayGrid) {
          this.dayGrid.removeSegPopover();
          eventLimit = this.opt("eventLimit");
          if (eventLimit && "number" != typeof eventLimit) {
            /** @type {number} */
            eventLimit = 5;
          }
          if (eventLimit) {
            this.dayGrid.limitRows(eventLimit);
          }
        }
        if (!event) {
          scrollerHeight = this.computeScrollerHeight(totalHeight);
          this.scroller.setHeight(scrollerHeight);
          o = this.scroller.getScrollbarWidths();
          if (o.left || o.right) {
            $.compensateScroll(temptitle, o);
            scrollerHeight = this.computeScrollerHeight(totalHeight);
            this.scroller.setHeight(scrollerHeight);
          }
          this.scroller.lockOverflow(o);
          if (this.timeGrid.getTotalSlatHeight() < scrollerHeight) {
            this.timeGrid.bottomRuleEl.show();
          }
        }
      }, create.prototype.computeScrollerHeight = function(totalHeight) {
        return totalHeight - $.subtractInnerElHeight(this.el, this.scroller.el);
      }, create.prototype.computeInitialDateScroll = function() {
        var scrollTime = duration.duration(this.opt("scrollTime"));
        var top = this.timeGrid.computeTimeTop(scrollTime);
        return top = Math.ceil(top), top && top++, {
          top : top
        };
      }, create.prototype.queryDateScroll = function() {
        return {
          top : this.scroller.getScrollTop()
        };
      }, create.prototype.applyDateScroll = function(scroll) {
        if (void 0 !== scroll.top) {
          this.scroller.setScrollTop(scroll.top);
        }
      }, create.prototype.getHitFootprint = function(hit) {
        return hit.component.getHitFootprint(hit);
      }, create.prototype.getHitEl = function(hit) {
        return hit.component.getHitEl(hit);
      }, create.prototype.executeEventRender = function(value) {
        var k;
        var x;
        var left = {};
        var bound = {};
        for (k in value) {
          x = value[k];
          if (x.getEventDef().isAllDay()) {
            left[k] = x;
          } else {
            bound[k] = x;
          }
        }
        this.timeGrid.executeEventRender(bound);
        if (this.dayGrid) {
          this.dayGrid.executeEventRender(left);
        }
      }, create.prototype.renderDrag = function(start, seg, dropLocation) {
        var obj = getEvaluateFnObj(start);
        /** @type {boolean} */
        var loc = false;
        return loc = this.timeGrid.renderDrag(obj.timed, seg, dropLocation), this.dayGrid && (loc = this.dayGrid.renderDrag(obj.allDay, seg, dropLocation) || loc), loc;
      }, create.prototype.renderEventResize = function(range, seg, className) {
        var obj = getEvaluateFnObj(range);
        this.timeGrid.renderEventResize(obj.timed, seg, className);
        if (this.dayGrid) {
          this.dayGrid.renderEventResize(obj.allDay, seg, className);
        }
      }, create.prototype.renderSelectionFootprint = function(range) {
        if (range.isAllDay) {
          if (this.dayGrid) {
            this.dayGrid.renderSelectionFootprint(range);
          }
        } else {
          this.timeGrid.renderSelectionFootprint(range);
        }
      }, create;
    }(ShapeViewer_1.default);
    exports.default = CepPromiseError;
    CepPromiseError.prototype.timeGridClass = History_1.default;
    CepPromiseError.prototype.dayGridClass = ShapeMaker_1.default;
    data = {
      renderHeadIntroHtml : function() {
        var data;
        var view = this.view;
        var calendar = view.calendar;
        var date = calendar.msToUtcMoment(this.dateProfile.renderUnzonedRange.startMs, true);
        return this.opt("weekNumbers") ? (data = date.format(this.opt("smallWeekFormat")), '<th class="fc-axis fc-week-number ' + calendar.theme.getClass("widgetHeader") + '" ' + view.axisStyleAttr() + ">" + view.buildGotoAnchorHtml({
          date : date,
          type : "week",
          forceOff : this.colCnt > 1
        }, $.htmlEscape(data)) + "</th>") : '<th class="fc-axis ' + calendar.theme.getClass("widgetHeader") + '" ' + view.axisStyleAttr() + "></th>";
      },
      renderBgIntroHtml : function() {
        var view = this.view;
        return '<td class="fc-axis ' + view.calendar.theme.getClass("widgetContent") + '" ' + view.axisStyleAttr() + "></td>";
      },
      renderIntroHtml : function() {
        return '<td class="fc-axis" ' + this.view.axisStyleAttr() + "></td>";
      }
    };
    key = {
      renderBgIntroHtml : function() {
        var view = this.view;
        return '<td class="fc-axis ' + view.calendar.theme.getClass("widgetContent") + '" ' + view.axisStyleAttr() + "><span>" + view.getAllDayHtml() + "</span></td>";
      },
      renderIntroHtml : function() {
        return '<td class="fc-axis" ' + this.view.axisStyleAttr() + "></td>";
      }
    };
  }, function(canCreateDiscussions, exports, require) {
    Object.defineProperty(exports, "__esModule", {
      value : true
    });
    var Util = require(2);
    var $ = require(3);
    var moment = require(0);
    var util = require(4);
    var a = require(40);
    var History_1 = require(56);
    var ShapeMaker_1 = require(60);
    var d = require(55);
    var _deepAssign2 = require(53);
    var errors = require(5);
    var Channel = require(12);
    var f = require(246);
    var ShapeViewer_1 = require(247);
    var v = require(248);
    /** @type {!Array} */
    var args = [{
      hours : 1
    }, {
      minutes : 30
    }, {
      minutes : 15
    }, {
      seconds : 30
    }, {
      seconds : 15
    }];
    var Content = function(_super) {
      /**
       * @param {?} game
       * @return {?}
       */
      function input(game) {
        var hooks = _super.call(this, game) || this;
        return hooks.processOptions(), hooks;
      }
      return Util.__extends(input, _super), input.prototype.componentFootprintToSegs = function(a22) {
        var i;
        var segs = this.sliceRangeByTimes(a22.unzonedRange);
        /** @type {number} */
        i = 0;
        for (; i < segs.length; i++) {
          if (this.isRTL) {
            /** @type {number} */
            segs[i].col = this.daysPerRow - 1 - segs[i].dayIndex;
          } else {
            segs[i].col = segs[i].dayIndex;
          }
        }
        return segs;
      }, input.prototype.sliceRangeByTimes = function(range) {
        var rect;
        var i;
        /** @type {!Array} */
        var segs = [];
        /** @type {number} */
        i = 0;
        for (; i < this.daysPerRow; i++) {
          if (rect = range.intersect(this.dayRanges[i])) {
            segs.push({
              startMs : rect.startMs,
              endMs : rect.endMs,
              isStart : rect.isStart,
              isEnd : rect.isEnd,
              dayIndex : i
            });
          }
        }
        return segs;
      }, input.prototype.processOptions = function() {
        var input;
        var slotDuration = this.opt("slotDuration");
        var snapDuration = this.opt("snapDuration");
        slotDuration = moment.duration(slotDuration);
        snapDuration = snapDuration ? moment.duration(snapDuration) : slotDuration;
        this.slotDuration = slotDuration;
        this.snapDuration = snapDuration;
        /** @type {number} */
        this.snapsPerSlot = slotDuration / snapDuration;
        input = this.opt("slotLabelFormat");
        if ($.isArray(input)) {
          input = input[input.length - 1];
        }
        this.labelFormat = input || this.opt("smallTimeFormat");
        input = this.opt("slotLabelInterval");
        this.labelInterval = input ? moment.duration(input) : this.computeLabelInterval(slotDuration);
      }, input.prototype.computeLabelInterval = function(date) {
        var i;
        var key;
        var val;
        /** @type {number} */
        i = args.length - 1;
        for (; i >= 0; i--) {
          if (key = moment.duration(args[i]), val = util.divideDurationByDuration(key, date), util.isInt(val) && val > 1) {
            return key;
          }
        }
        return moment.duration(date);
      }, input.prototype.renderDates = function(isRigid) {
        /** @type {!Object} */
        this.dateProfile = isRigid;
        this.updateDayTable();
        this.renderSlats();
        this.renderColumns();
      }, input.prototype.unrenderDates = function() {
        this.unrenderColumns();
      }, input.prototype.renderSkeleton = function() {
        var me = this.view.calendar.theme;
        this.el.html('<div class="fc-bg"></div><div class="fc-slats"></div><hr class="fc-divider ' + me.getClass("widgetHeader") + '" style="display:none" />');
        this.bottomRuleEl = this.el.find("hr");
      }, input.prototype.renderSlats = function() {
        var me = this.view.calendar.theme;
        this.slatContainerEl = this.el.find("> .fc-slats").html('<table class="' + me.getClass("tableGrid") + '">' + this.renderSlatRowHtml() + "</table>");
        this.slatEls = this.slatContainerEl.find("tr");
        this.slatCoordCache = new _deepAssign2.default({
          els : this.slatEls,
          isVertical : true
        });
      }, input.prototype.renderSlatRowHtml = function() {
        var slotDate;
        var usePound;
        var clear;
        var view = this.view;
        var c = view.calendar;
        var w = c.theme;
        var isRTL = this.isRTL;
        var options = this.dateProfile;
        /** @type {string} */
        var html = "";
        var slotTime = moment.duration(+options.minTime);
        var value = moment.duration(0);
        for (; slotTime < options.maxTime;) {
          slotDate = c.msToUtcMoment(options.renderUnzonedRange.startMs).time(slotTime);
          usePound = util.isInt(util.divideDurationByDuration(value, this.labelInterval));
          /** @type {string} */
          clear = '<td class="fc-axis fc-time ' + w.getClass("widgetContent") + '" ' + view.axisStyleAttr() + ">" + (usePound ? "<span>" + util.htmlEscape(slotDate.format(this.labelFormat)) + "</span>" : "") + "</td>";
          /** @type {string} */
          html = html + ('<tr data-time="' + slotDate.format("HH:mm:ss") + '"' + (usePound ? "" : ' class="fc-minor"') + ">" + (isRTL ? "" : clear) + '<td class="' + w.getClass("widgetContent") + '"/>' + (isRTL ? clear : "") + "</tr>");
          slotTime.add(this.slotDuration);
          value.add(this.slotDuration);
        }
        return html;
      }, input.prototype.renderColumns = function() {
        var anim = this.dateProfile;
        var me = this.view.calendar.theme;
        this.dayRanges = this.dayDates.map(function(prefixTransliterations) {
          return new errors.default(prefixTransliterations.clone().add(anim.minTime), prefixTransliterations.clone().add(anim.maxTime));
        });
        if (this.headContainerEl) {
          this.headContainerEl.html(this.renderHeadHtml());
        }
        this.el.find("> .fc-bg").html('<table class="' + me.getClass("tableGrid") + '">' + this.renderBgTrHtml(0) + "</table>");
        this.colEls = this.el.find(".fc-day, .fc-disabled-day");
        this.colCoordCache = new _deepAssign2.default({
          els : this.colEls,
          isHorizontal : true
        });
        this.renderContentSkeleton();
      }, input.prototype.unrenderColumns = function() {
        this.unrenderContentSkeleton();
      }, input.prototype.renderContentSkeleton = function() {
        var col;
        var headerEl;
        /** @type {string} */
        var pix_color = "";
        /** @type {number} */
        col = 0;
        for (; col < this.colCnt; col++) {
          /** @type {string} */
          pix_color = pix_color + '<td><div class="fc-content-col"><div class="fc-event-container fc-helper-container"></div><div class="fc-event-container"></div><div class="fc-highlight-container"></div><div class="fc-bgevent-container"></div><div class="fc-business-container"></div></div></td>';
        }
        headerEl = this.contentSkeletonEl = $('<div class="fc-content-skeleton"><table><tr>' + pix_color + "</tr></table></div>");
        this.colContainerEls = headerEl.find(".fc-content-col");
        this.helperContainerEls = headerEl.find(".fc-helper-container");
        this.fgContainerEls = headerEl.find(".fc-event-container:not(.fc-helper-container)");
        this.bgContainerEls = headerEl.find(".fc-bgevent-container");
        this.highlightContainerEls = headerEl.find(".fc-highlight-container");
        this.businessContainerEls = headerEl.find(".fc-business-container");
        this.bookendCells(headerEl.find("tr"));
        this.el.append(headerEl);
      }, input.prototype.unrenderContentSkeleton = function() {
        if (this.contentSkeletonEl) {
          this.contentSkeletonEl.remove();
          /** @type {null} */
          this.contentSkeletonEl = null;
          /** @type {null} */
          this.colContainerEls = null;
          /** @type {null} */
          this.helperContainerEls = null;
          /** @type {null} */
          this.fgContainerEls = null;
          /** @type {null} */
          this.bgContainerEls = null;
          /** @type {null} */
          this.highlightContainerEls = null;
          /** @type {null} */
          this.businessContainerEls = null;
        }
      }, input.prototype.groupSegsByCol = function(segs) {
        var i;
        /** @type {!Array} */
        var segsByCol = [];
        /** @type {number} */
        i = 0;
        for (; i < this.colCnt; i++) {
          segsByCol.push([]);
        }
        /** @type {number} */
        i = 0;
        for (; i < segs.length; i++) {
          segsByCol[segs[i].col].push(segs[i]);
        }
        return segsByCol;
      }, input.prototype.attachSegsByCol = function(segsByCol, containerEls) {
        var col;
        var segs;
        var i;
        /** @type {number} */
        col = 0;
        for (; col < this.colCnt; col++) {
          segs = segsByCol[col];
          /** @type {number} */
          i = 0;
          for (; i < segs.length; i++) {
            containerEls.eq(col).append(segs[i].el);
          }
        }
      }, input.prototype.getNowIndicatorUnit = function() {
        return "minute";
      }, input.prototype.renderNowIndicator = function(date) {
        if (this.colContainerEls) {
          var i;
          var sV = this.componentFootprintToSegs(new Channel.default(new errors.default(date, date.valueOf() + 1), false));
          var top = this.computeDateTop(date, date);
          /** @type {!Array} */
          var nodes = [];
          /** @type {number} */
          i = 0;
          for (; i < sV.length; i++) {
            nodes.push($('<div class="fc-now-indicator fc-now-indicator-line"></div>').css("top", top).appendTo(this.colContainerEls.eq(sV[i].col))[0]);
          }
          if (sV.length > 0) {
            nodes.push($('<div class="fc-now-indicator fc-now-indicator-arrow"></div>').css("top", top).appendTo(this.el.find(".fc-content-skeleton"))[0]);
          }
          this.nowIndicatorEls = $(nodes);
        }
      }, input.prototype.unrenderNowIndicator = function() {
        if (this.nowIndicatorEls) {
          this.nowIndicatorEls.remove();
          /** @type {null} */
          this.nowIndicatorEls = null;
        }
      }, input.prototype.updateSize = function(newHeight, newWidth, force) {
        _super.prototype.updateSize.call(this, newHeight, newWidth, force);
        this.slatCoordCache.build();
        if (force) {
          this.updateSegVerticals([].concat(this.eventRenderer.getSegs(), this.businessSegs || []));
        }
      }, input.prototype.getTotalSlatHeight = function() {
        return this.slatContainerEl.outerHeight();
      }, input.prototype.computeDateTop = function(date, startOfDayDate) {
        return this.computeTimeTop(moment.duration(date - startOfDayDate.clone().stripTime()));
      }, input.prototype.computeTimeTop = function(time) {
        var slatIndex;
        var slatRemainder;
        var len = this.slatEls.length;
        var anim = this.dateProfile;
        /** @type {number} */
        var slatCoverage = (time - anim.minTime) / this.slotDuration;
        return slatCoverage = Math.max(0, slatCoverage), slatCoverage = Math.min(len, slatCoverage), slatIndex = Math.floor(slatCoverage), slatIndex = Math.min(slatIndex, len - 1), slatRemainder = slatCoverage - slatIndex, this.slatCoordCache.getTopPosition(slatIndex) + this.slatCoordCache.getHeight(slatIndex) * slatRemainder;
      }, input.prototype.updateSegVerticals = function(segs) {
        this.computeSegVerticals(segs);
        this.assignSegVerticals(segs);
      }, input.prototype.computeSegVerticals = function(segs) {
        var i;
        var seg;
        var dayDate;
        var y = this.opt("agendaEventMinHeight");
        /** @type {number} */
        i = 0;
        for (; i < segs.length; i++) {
          seg = segs[i];
          dayDate = this.dayDates[seg.dayIndex];
          seg.top = this.computeDateTop(seg.startMs, dayDate);
          /** @type {number} */
          seg.bottom = Math.max(seg.top + y, this.computeDateTop(seg.endMs, dayDate));
        }
      }, input.prototype.assignSegVerticals = function(segs) {
        var i;
        var seg;
        /** @type {number} */
        i = 0;
        for (; i < segs.length; i++) {
          seg = segs[i];
          seg.el.css(this.generateSegVerticalCss(seg));
        }
      }, input.prototype.generateSegVerticalCss = function(seg) {
        return {
          top : seg.top,
          bottom : -seg.bottom
        };
      }, input.prototype.prepareHits = function() {
        this.colCoordCache.build();
        this.slatCoordCache.build();
      }, input.prototype.releaseHits = function() {
        this.colCoordCache.clear();
      }, input.prototype.queryHit = function(leftOffset, topOffset) {
        var snapsPerSlot = this.snapsPerSlot;
        var colCoordCache = this.colCoordCache;
        var slatCoordCache = this.slatCoordCache;
        if (colCoordCache.isLeftInBounds(leftOffset) && slatCoordCache.isTopInBounds(topOffset)) {
          var col = colCoordCache.getHorizontalIndex(leftOffset);
          var slatIndex = slatCoordCache.getVerticalIndex(topOffset);
          if (null != col && null != slatIndex) {
            var slatTop = slatCoordCache.getTopOffset(slatIndex);
            var slatHeight = slatCoordCache.getHeight(slatIndex);
            /** @type {number} */
            var partial = (topOffset - slatTop) / slatHeight;
            /** @type {number} */
            var localSnapIndex = Math.floor(partial * snapsPerSlot);
            /** @type {number} */
            var snapIndex = slatIndex * snapsPerSlot + localSnapIndex;
            var snapTop = slatTop + localSnapIndex / snapsPerSlot * slatHeight;
            var snapBottom = slatTop + (localSnapIndex + 1) / snapsPerSlot * slatHeight;
            return {
              col : col,
              snap : snapIndex,
              component : this,
              left : colCoordCache.getLeftOffset(col),
              right : colCoordCache.getRightOffset(col),
              top : snapTop,
              bottom : snapBottom
            };
          }
        }
      }, input.prototype.getHitFootprint = function(hit) {
        var self;
        var message = this.getCellDate(0, hit.col);
        var time = this.computeSnapTime(hit.snap);
        return message.time(time), self = message.clone().add(this.snapDuration), new Channel.default(new errors.default(message, self), false);
      }, input.prototype.computeSnapTime = function(snapIndex) {
        return moment.duration(this.dateProfile.minTime + this.snapDuration * snapIndex);
      }, input.prototype.getHitEl = function(hit) {
        return this.colEls.eq(hit.col);
      }, input.prototype.renderDrag = function(seg, n, eventLocation) {
        var i;
        if (n) {
          if (seg.length) {
            return this.helperRenderer.renderEventDraggingFootprints(seg, n, eventLocation), true;
          }
        } else {
          /** @type {number} */
          i = 0;
          for (; i < seg.length; i++) {
            this.renderHighlight(seg[i].componentFootprint);
          }
        }
      }, input.prototype.unrenderDrag = function() {
        this.unrenderHighlight();
        this.helperRenderer.unrender();
      }, input.prototype.renderEventResize = function(eventLocation, seg, className) {
        this.helperRenderer.renderEventResizingFootprints(eventLocation, seg, className);
      }, input.prototype.unrenderEventResize = function() {
        this.helperRenderer.unrender();
      }, input.prototype.renderSelectionFootprint = function(range) {
        if (this.opt("selectHelper")) {
          this.helperRenderer.renderComponentFootprint(range);
        } else {
          this.renderHighlight(range);
        }
      }, input.prototype.unrenderSelection = function() {
        this.helperRenderer.unrender();
        this.unrenderHighlight();
      }, input;
    }(a.default);
    exports.default = Content;
    Content.prototype.eventRendererClass = f.default;
    Content.prototype.businessHourRendererClass = History_1.default;
    Content.prototype.helperRendererClass = ShapeViewer_1.default;
    Content.prototype.fillRendererClass = v.default;
    ShapeMaker_1.default.mixInto(Content);
    d.default.mixInto(Content);
  }, function(canCreateDiscussions, e, fn) {
    Object.defineProperty(e, "__esModule", {
      value : true
    });
    var tslib_1 = fn(2);
    var n = fn(5);
    var o = fn(221);
    var newOrg = function(_super) {
      /**
       * @return {?}
       */
      function ParseError() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      return tslib_1.__extends(ParseError, _super), ParseError.prototype.buildRenderRange = function(line, steps, i) {
        var row = _super.prototype.buildRenderRange.call(this, line, steps, i);
        var m = this.msToUtcMoment(row.startMs, i);
        var d = this.msToUtcMoment(row.endMs, i);
        return /^(year|month)$/.test(steps) && (m.startOf("week"), d.weekday() && d.add(1, "week").startOf("week")), new n.default(m, d);
      }, ParseError;
    }(o.default);
    e.default = newOrg;
  }, function(canCreateDiscussions, exports, floor) {
    Object.defineProperty(exports, "__esModule", {
      value : true
    });
    var tslib_1 = floor(2);
    var time = floor(0);
    var base = floor(4);
    var selected = floor(62);
    var v = floor(253);
    var CepPromiseError = function(_super) {
      /**
       * @return {?}
       */
      function ParseError() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      return tslib_1.__extends(ParseError, _super), ParseError.prototype.setGridHeight = function(height, isAuto) {
        if (isAuto) {
          /** @type {number} */
          height = height * (this.dayGrid.rowCnt / 6);
        }
        base.distributeHeight(this.dayGrid.rowEls, height, !isAuto);
      }, ParseError.prototype.isDateInOtherMonth = function(t, xgh2) {
        return t.month() !== time.utc(xgh2.currentUnzonedRange.startMs).month();
      }, ParseError;
    }(selected.default);
    exports.default = CepPromiseError;
    CepPromiseError.prototype.dateProfileGeneratorClass = v.default;
  }, function(canCreateDiscussions, exports, require) {
    Object.defineProperty(exports, "__esModule", {
      value : true
    });
    var util = require(2);
    var whenDOMReady = require(3);
    var $ = require(4);
    var s = require(5);
    var a = require(41);
    var o = require(39);
    var h = require(254);
    var _deepAssign2 = require(255);
    var CepPromiseError = function(_super) {
      /**
       * @param {?} gl
       * @param {?} url
       * @return {?}
       */
      function create(gl, url) {
        var _this = _super.call(this, gl, url) || this;
        return _this.segSelector = ".fc-list-item", _this.scroller = new o.default({
          overflowX : "hidden",
          overflowY : "auto"
        }), _this;
      }
      return util.__extends(create, _super), create.prototype.renderSkeleton = function() {
        this.el.addClass("fc-list-view " + this.calendar.theme.getClass("listView"));
        this.scroller.render();
        this.scroller.el.appendTo(this.el);
        this.contentEl = this.scroller.scrollEl;
      }, create.prototype.unrenderSkeleton = function() {
        this.scroller.destroy();
      }, create.prototype.updateSize = function(totalHeight, event, force) {
        _super.prototype.updateSize.call(this, totalHeight, event, force);
        this.scroller.clear();
        if (!event) {
          this.scroller.setHeight(this.computeScrollerHeight(totalHeight));
        }
      }, create.prototype.computeScrollerHeight = function(totalHeight) {
        return totalHeight - $.subtractInnerElHeight(this.el, this.scroller.el);
      }, create.prototype.renderDates = function(isRigid) {
        var cal = this.calendar;
        var obj = cal.msToUtcMoment(isRigid.renderUnzonedRange.startMs, true);
        var lowerValue = cal.msToUtcMoment(isRigid.renderUnzonedRange.endMs, true);
        /** @type {!Array} */
        var dayDates = [];
        /** @type {!Array} */
        var results = [];
        for (; obj < lowerValue;) {
          dayDates.push(obj.clone());
          results.push(new s.default(obj, obj.clone().add(1, "day")));
          obj.add(1, "day");
        }
        /** @type {!Array} */
        this.dayDates = dayDates;
        /** @type {!Array} */
        this.dayRanges = results;
      }, create.prototype.componentFootprintToSegs = function(event) {
        var i;
        var rect;
        var sc;
        var b = this.dayRanges;
        /** @type {!Array} */
        var sca = [];
        /** @type {number} */
        i = 0;
        for (; i < b.length; i++) {
          if ((rect = event.unzonedRange.intersect(b[i])) && (sc = {
            startMs : rect.startMs,
            endMs : rect.endMs,
            isStart : rect.isStart,
            isEnd : rect.isEnd,
            dayIndex : i
          }, sca.push(sc), !sc.isEnd && !event.isAllDay && i + 1 < b.length && event.unzonedRange.endMs < b[i + 1].startMs + this.nextDayThreshold)) {
            sc.endMs = event.unzonedRange.endMs;
            /** @type {boolean} */
            sc.isEnd = true;
            break;
          }
        }
        return sca;
      }, create.prototype.renderEmptyMessage = function() {
        this.contentEl.html('<div class="fc-list-empty-wrap2"><div class="fc-list-empty-wrap1"><div class="fc-list-empty">' + $.htmlEscape(this.opt("noEventsMessage")) + "</div></div></div>");
      }, create.prototype.renderSegList = function(allSegs) {
        var dayIndex;
        var daySegs;
        var i;
        var segsByDay = this.groupSegsByDay(allSegs);
        var $frozenThead = whenDOMReady('<table class="fc-list-table ' + this.calendar.theme.getClass("tableList") + '"><tbody/></table>');
        var tbodyEl = $frozenThead.find("tbody");
        /** @type {number} */
        dayIndex = 0;
        for (; dayIndex < segsByDay.length; dayIndex++) {
          if (daySegs = segsByDay[dayIndex]) {
            tbodyEl.append(this.dayHeaderHtml(this.dayDates[dayIndex]));
            this.eventRenderer.sortEventSegs(daySegs);
            /** @type {number} */
            i = 0;
            for (; i < daySegs.length; i++) {
              tbodyEl.append(daySegs[i].el);
            }
          }
        }
        this.contentEl.empty().append($frozenThead);
      }, create.prototype.groupSegsByDay = function(segs) {
        var i;
        var seg;
        /** @type {!Array} */
        var segsByDay = [];
        /** @type {number} */
        i = 0;
        for (; i < segs.length; i++) {
          seg = segs[i];
          (segsByDay[seg.dayIndex] || (segsByDay[seg.dayIndex] = [])).push(seg);
        }
        return segsByDay;
      }, create.prototype.dayHeaderHtml = function(format) {
        var val = this.opt("listDayFormat");
        var value = this.opt("listDayAltFormat");
        return '<tr class="fc-list-heading" data-date="' + format.format("YYYY-MM-DD") + '"><td class="' + (this.calendar.theme.getClass("tableListHeading") || this.calendar.theme.getClass("widgetHeader")) + '" colspan="3">' + (val ? this.buildGotoAnchorHtml(format, {
          class : "fc-list-heading-main"
        }, $.htmlEscape(format.format(val))) : "") + (value ? this.buildGotoAnchorHtml(format, {
          class : "fc-list-heading-alt"
        }, $.htmlEscape(format.format(value))) : "") + "</td></tr>";
      }, create;
    }(a.default);
    exports.default = CepPromiseError;
    CepPromiseError.prototype.eventRendererClass = h.default;
    CepPromiseError.prototype.eventPointingClass = _deepAssign2.default;
  }, , , , , , function(module, canCreateDiscussions, require) {
    var $ = require(3);
    var LightShader = require(16);
    var Alert = require(4);
    var v = require(220);
    require(10);
    require(47);
    require(256);
    require(257);
    require(260);
    require(261);
    require(262);
    require(263);
    $.fullCalendar = LightShader;
    /**
     * @param {string} options
     * @return {?}
     */
    $.fn.fullCalendar = function(options) {
      /** @type {!Array<?>} */
      var args = Array.prototype.slice.call(arguments, 1);
      var lastCalendar = this;
      return this.each(function(canCreateDiscussions, a) {
        var singleRes;
        var element = $(a);
        var calendar = element.data("fullCalendar");
        if ("string" == typeof options) {
          if ("getCalendar" === options) {
            if (!canCreateDiscussions) {
              lastCalendar = calendar;
            }
          } else {
            if ("destroy" === options) {
              if (calendar) {
                calendar.destroy();
                element.removeData("fullCalendar");
              }
            } else {
              if (calendar) {
                if ($.isFunction(calendar[options])) {
                  singleRes = calendar[options].apply(calendar, args);
                  if (!canCreateDiscussions) {
                    lastCalendar = singleRes;
                  }
                  if ("destroy" === options) {
                    element.removeData("fullCalendar");
                  }
                } else {
                  Alert.warn("'" + options + "' is an unknown FullCalendar method.");
                }
              } else {
                Alert.warn("Attempting to call a FullCalendar method on an element with no calendar.");
              }
            }
          }
        } else {
          if (!calendar) {
            calendar = new v.default(element, options);
            element.data("fullCalendar", calendar);
            calendar.render();
          }
        }
      }), lastCalendar;
    };
    module.exports = LightShader;
  }, function(canCreateDiscussions, e, Class) {
    Object.defineProperty(e, "__esModule", {
      value : true
    });
    var Util = Class(2);
    var foo = Class(48);
    var newOrg = function(_super) {
      /**
       * @return {?}
       */
      function View() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      return Util.__extends(View, _super), View.prototype.setElement = function(element) {
        /** @type {!Object} */
        this.el = element;
        this.bindGlobalHandlers();
        this.renderSkeleton();
        this.set("isInDom", true);
      }, View.prototype.removeElement = function() {
        this.unset("isInDom");
        this.unrenderSkeleton();
        this.unbindGlobalHandlers();
        this.el.remove();
      }, View.prototype.bindGlobalHandlers = function() {
      }, View.prototype.unbindGlobalHandlers = function() {
      }, View.prototype.renderSkeleton = function() {
      }, View.prototype.unrenderSkeleton = function() {
      }, View;
    }(foo.default);
    e.default = newOrg;
  }, function(canCreateDiscussions, e) {
    Object.defineProperty(e, "__esModule", {
      value : true
    });
    var newOrg = function() {
      /**
       * @param {!Array} gotoEnd
       * @return {undefined}
       */
      function t(gotoEnd) {
        this.items = gotoEnd || [];
      }
      return t.prototype.proxyCall = function(name) {
        /** @type {!Array} */
        var args = [];
        /** @type {number} */
        var i = 1;
        for (; i < arguments.length; i++) {
          args[i - 1] = arguments[i];
        }
        /** @type {!Array} */
        var _results = [];
        return this.items.forEach(function(async) {
          _results.push(async[name].apply(async, args));
        }), _results;
      }, t;
    }();
    e.default = newOrg;
  }, function(canCreateDiscussions, e, require) {
    Object.defineProperty(e, "__esModule", {
      value : true
    });
    var $ = require(3);
    var self = require(4);
    var newOrg = function() {
      /**
       * @param {!Object} component
       * @param {boolean} template
       * @return {undefined}
       */
      function component(component, template) {
        /** @type {null} */
        this.el = null;
        /** @type {!Array} */
        this.viewsWithButtons = [];
        /** @type {!Object} */
        this.calendar = component;
        /** @type {boolean} */
        this.toolbarOptions = template;
      }
      return component.prototype.setToolbarOptions = function(newToolbarOptions) {
        /** @type {boolean} */
        this.toolbarOptions = newToolbarOptions;
      }, component.prototype.render = function() {
        var mnu = this.toolbarOptions.layout;
        var el = this.el;
        if (mnu) {
          if (el) {
            el.empty();
          } else {
            el = this.el = $("<div class='fc-toolbar " + this.toolbarOptions.extraClasses + "'/>");
          }
          el.append(this.renderSection("left")).append(this.renderSection("right")).append(this.renderSection("center")).append('<div class="fc-clear"/>');
        } else {
          this.removeElement();
        }
      }, component.prototype.removeElement = function() {
        if (this.el) {
          this.el.remove();
          /** @type {null} */
          this.el = null;
        }
      }, component.prototype.renderSection = function(name) {
        var modVSelf = this;
        var options = this.calendar;
        var me = options.theme;
        var calendar = options.optionsManager;
        var view = options.viewSpecManager;
        var t = $('<div class="fc-' + name + '"/>');
        var e = this.toolbarOptions.layout[name];
        var result = calendar.get("customButtons") || {};
        var iterateesByType = calendar.overrides.buttonText || {};
        var rawValue = calendar.get("buttonText") || {};
        return e && $.each(e.split(" "), function(canCreateDiscussions, s) {
          var body;
          var box = $();
          /** @type {boolean} */
          var f = true;
          $.each(s.split(","), function(canCreateDiscussions, type) {
            var body;
            var viewSpec;
            var init;
            var el;
            var defaultText;
            var line;
            var b;
            var x;
            var resizewidth;
            if ("title" === type) {
              box = box.add($("<h2>&nbsp;</h2>"));
              /** @type {boolean} */
              f = false;
            } else {
              if (body = result[type]) {
                /**
                 * @param {?} value
                 * @return {undefined}
                 */
                init = function(value) {
                  if (body.click) {
                    body.click.call(x[0], value);
                  }
                };
                if (!((el = me.getCustomButtonIconClass(body)) || (el = me.getIconClass(type)))) {
                  defaultText = body.text;
                }
              } else {
                if (viewSpec = view.getViewSpec(type)) {
                  modVSelf.viewsWithButtons.push(type);
                  /**
                   * @return {undefined}
                   */
                  init = function() {
                    options.changeView(type);
                  };
                  if (!((defaultText = viewSpec.buttonTextOverride) || (el = me.getIconClass(type)))) {
                    defaultText = viewSpec.buttonTextDefault;
                  }
                } else {
                  if (options[type]) {
                    /**
                     * @return {undefined}
                     */
                    init = function() {
                      options[type]();
                    };
                    if (!((defaultText = iterateesByType[type]) || (el = me.getIconClass(type)))) {
                      defaultText = rawValue[type];
                    }
                  }
                }
              }
              if (init) {
                /** @type {!Array} */
                b = ["fc-" + type + "-button", me.getClass("button"), me.getClass("stateDefault")];
                if (defaultText) {
                  line = self.htmlEscape(defaultText);
                  /** @type {string} */
                  resizewidth = "";
                } else {
                  if (el) {
                    /** @type {string} */
                    line = "<span class='" + el + "'></span>";
                    /** @type {string} */
                    resizewidth = ' aria-label="' + type + '"';
                  }
                }
                x = $('<button type="button" class="' + b.join(" ") + '"' + resizewidth + ">" + line + "</button>").click(function(initValues) {
                  if (!x.hasClass(me.getClass("stateDisabled"))) {
                    init(initValues);
                    if (x.hasClass(me.getClass("stateActive")) || x.hasClass(me.getClass("stateDisabled"))) {
                      x.removeClass(me.getClass("stateHover"));
                    }
                  }
                }).mousedown(function() {
                  x.not("." + me.getClass("stateActive")).not("." + me.getClass("stateDisabled")).addClass(me.getClass("stateDown"));
                }).mouseup(function() {
                  x.removeClass(me.getClass("stateDown"));
                }).hover(function() {
                  x.not("." + me.getClass("stateActive")).not("." + me.getClass("stateDisabled")).addClass(me.getClass("stateHover"));
                }, function() {
                  x.removeClass(me.getClass("stateHover")).removeClass(me.getClass("stateDown"));
                });
                box = box.add(x);
              }
            }
          });
          if (f) {
            box.first().addClass(me.getClass("cornerLeft")).end().last().addClass(me.getClass("cornerRight")).end();
          }
          if (box.length > 1) {
            body = $("<div/>");
            if (f) {
              body.addClass(me.getClass("buttonGroup"));
            }
            body.append(box);
            t.append(body);
          } else {
            t.append(box);
          }
        }), t;
      }, component.prototype.updateTitle = function(value) {
        if (this.el) {
          this.el.find("h2").text(value);
        }
      }, component.prototype.activateButton = function(index) {
        if (this.el) {
          this.el.find(".fc-" + index + "-button").addClass(this.calendar.theme.getClass("stateActive"));
        }
      }, component.prototype.deactivateButton = function(buttonName) {
        if (this.el) {
          this.el.find(".fc-" + buttonName + "-button").removeClass(this.calendar.theme.getClass("stateActive"));
        }
      }, component.prototype.disableButton = function(type) {
        if (this.el) {
          this.el.find(".fc-" + type + "-button").prop("disabled", true).addClass(this.calendar.theme.getClass("stateDisabled"));
        }
      }, component.prototype.enableButton = function(buttonName) {
        if (this.el) {
          this.el.find(".fc-" + buttonName + "-button").prop("disabled", false).removeClass(this.calendar.theme.getClass("stateDisabled"));
        }
      }, component.prototype.getViewsWithButtons = function() {
        return this.viewsWithButtons;
      }, component;
    }();
    e.default = newOrg;
  }, function(canCreateDiscussions, e, require) {
    Object.defineProperty(e, "__esModule", {
      value : true
    });
    var Util = require(2);
    var r = require(3);
    var i18n = require(4);
    var options = require(32);
    var constants = require(31);
    var _deepAssign2 = require(48);
    var newOrg = function(_super) {
      /**
       * @param {!Object} data
       * @param {?} options
       * @return {?}
       */
      function list(data, options) {
        var that = _super.call(this) || this;
        return that._calendar = data, that.overrides = r.extend({}, options), that.dynamicOverrides = {}, that.compute(), that;
      }
      return Util.__extends(list, _super), list.prototype.add = function(x) {
        var name;
        /** @type {number} */
        var n = 0;
        this.recordOverrides(x);
        for (name in x) {
          n++;
        }
        if (1 === n) {
          if ("height" === name || "contentHeight" === name || "aspectRatio" === name) {
            return void this._calendar.updateViewSize(true);
          }
          if ("defaultDate" === name) {
            return;
          }
          if ("businessHours" === name) {
            return;
          }
          if (/^(event|select)(Overlap|Constraint|Allow)$/.test(name)) {
            return;
          }
          if ("timezone" === name) {
            return void this._calendar.view.flash("initialEvents");
          }
        }
        this._calendar.renderHeader();
        this._calendar.renderFooter();
        this._calendar.viewsByType = {};
        this._calendar.reinitView();
      }, list.prototype.compute = function() {
        var locale;
        var localeDefaults;
        var isRTL;
        var dirDefaults;
        var value;
        locale = i18n.firstDefined(this.dynamicOverrides.locale, this.overrides.locale);
        localeDefaults = constants.localeOptionHash[locale];
        if (!localeDefaults) {
          locale = options.globalDefaults.locale;
          localeDefaults = constants.localeOptionHash[locale] || {};
        }
        isRTL = i18n.firstDefined(this.dynamicOverrides.isRTL, this.overrides.isRTL, localeDefaults.isRTL, options.globalDefaults.isRTL);
        dirDefaults = isRTL ? options.rtlDefaults : {};
        this.dirDefaults = dirDefaults;
        this.localeDefaults = localeDefaults;
        value = options.mergeOptions([options.globalDefaults, dirDefaults, localeDefaults, this.overrides, this.dynamicOverrides]);
        constants.populateInstanceComputableOptions(value);
        this.reset(value);
      }, list.prototype.recordOverrides = function(t) {
        var j;
        for (j in t) {
          this.dynamicOverrides[j] = t[j];
        }
        this._calendar.viewSpecManager.clearCache();
        this.compute();
      }, list;
    }(_deepAssign2.default);
    e.default = newOrg;
  }, function(canCreateDiscussions, e, require) {
    Object.defineProperty(e, "__esModule", {
      value : true
    });
    var moment = require(0);
    var _ = require(3);
    var gruntHelp = require(22);
    var config = require(4);
    var E = require(32);
    var utils = require(31);
    var newOrg = function() {
      /**
       * @param {string} length
       * @param {!Object} littleEndian
       * @return {undefined}
       */
      function Writer(length, littleEndian) {
        /** @type {string} */
        this.optionsManager = length;
        /** @type {!Object} */
        this._calendar = littleEndian;
        this.clearCache();
      }
      return Writer.prototype.clearCache = function() {
        this.viewSpecCache = {};
      }, Writer.prototype.getViewSpec = function(viewType) {
        var cache = this.viewSpecCache;
        return cache[viewType] || (cache[viewType] = this.buildViewSpec(viewType));
      }, Writer.prototype.getUnitViewSpec = function(unit) {
        var viewTypes;
        var i;
        var spec;
        if (-1 !== _.inArray(unit, config.unitsDesc)) {
          viewTypes = this._calendar.header.getViewsWithButtons();
          _.each(gruntHelp.viewHash, function(viewType) {
            viewTypes.push(viewType);
          });
          /** @type {number} */
          i = 0;
          for (; i < viewTypes.length; i++) {
            if ((spec = this.getViewSpec(viewTypes[i])) && spec.singleUnit === unit) {
              return spec;
            }
          }
        }
      }, Writer.prototype.buildViewSpec = function(requestedViewType) {
        var spec;
        var overrides;
        var durationInput;
        var duration;
        var unit;
        var viewOverrides = this.optionsManager.overrides.views || {};
        /** @type {!Array} */
        var args = [];
        /** @type {!Array} */
        var defaults = [];
        /** @type {!Array} */
        var overridesChain = [];
        /** @type {string} */
        var viewType = requestedViewType;
        for (; viewType;) {
          spec = gruntHelp.viewHash[viewType];
          overrides = viewOverrides[viewType];
          /** @type {null} */
          viewType = null;
          if ("function" == typeof spec) {
            spec = {
              class : spec
            };
          }
          if (spec) {
            args.unshift(spec);
            defaults.unshift(spec.defaults || {});
            durationInput = durationInput || spec.duration;
            viewType = viewType || spec.type;
          }
          if (overrides) {
            overridesChain.unshift(overrides);
            durationInput = durationInput || overrides.duration;
            viewType = viewType || overrides.type;
          }
        }
        return spec = config.mergeProps(args), spec.type = requestedViewType, !!spec.class && (durationInput = durationInput || this.optionsManager.dynamicOverrides.duration || this.optionsManager.overrides.duration, durationInput && (duration = moment.duration(durationInput), duration.valueOf() && (unit = config.computeDurationGreatestUnit(duration, durationInput), spec.duration = duration, spec.durationUnit = unit, 1 === duration.as(unit) && (spec.singleUnit = unit, overridesChain.unshift(viewOverrides[unit] || 
        {})))), spec.defaults = E.mergeOptions(defaults), spec.overrides = E.mergeOptions(overridesChain), this.buildViewSpecOptions(spec), this.buildViewSpecButtonText(spec, requestedViewType), spec);
      }, Writer.prototype.buildViewSpecOptions = function(spec) {
        var RedirectManager = this.optionsManager;
        spec.options = E.mergeOptions([E.globalDefaults, spec.defaults, RedirectManager.dirDefaults, RedirectManager.localeDefaults, RedirectManager.overrides, spec.overrides, RedirectManager.dynamicOverrides]);
        utils.populateInstanceComputableOptions(spec.options);
      }, Writer.prototype.buildViewSpecButtonText = function(spec, requestedViewType) {
        /**
         * @param {(Object|string)} options
         * @return {?}
         */
        function queryButtonText(options) {
          var buttonText = options.buttonText || {};
          return buttonText[requestedViewType] || (spec.buttonTextKey ? buttonText[spec.buttonTextKey] : null) || (spec.singleUnit ? buttonText[spec.singleUnit] : null);
        }
        var Calendar = this.optionsManager;
        spec.buttonTextOverride = queryButtonText(Calendar.dynamicOverrides) || queryButtonText(Calendar.overrides) || spec.overrides.buttonText;
        spec.buttonTextDefault = queryButtonText(Calendar.localeDefaults) || queryButtonText(Calendar.dirDefaults) || spec.defaults.buttonText || queryButtonText(E.globalDefaults) || (spec.duration ? this._calendar.humanizeDuration(spec.duration) : null) || requestedViewType;
      }, Writer;
    }();
    e.default = newOrg;
  }, function(canCreateDiscussions, exports, require) {
    /**
     * @param {string} id
     * @param {?} order
     * @return {?}
     */
    function openReview(id, order) {
      return id.getPrimitive() === order.getPrimitive();
    }
    Object.defineProperty(exports, "__esModule", {
      value : true
    });
    var $ = require(3);
    var Box = require(4);
    var WebInspector = require(243);
    var Backbone = require(52);
    var it = require(6);
    var ModuleParser = require(38);
    var process = require(13);
    var message = require(18);
    var p = require(11);
    var h = require(7);
    var Log = function() {
      /**
       * @param {!Object} component
       * @return {undefined}
       */
      function View(component) {
        /** @type {!Object} */
        this.calendar = component;
        this.stickySource = new Backbone.default(component);
        /** @type {!Array} */
        this.otherSources = [];
      }
      return View.prototype.requestEvents = function(start, callback, delegate, selectorOrKey) {
        return !selectorOrKey && this.currentPeriod && this.currentPeriod.isWithinRange(start, callback) && delegate === this.currentPeriod.timezone || this.setPeriod(new WebInspector.default(start, callback, delegate)), this.currentPeriod.whenReleased();
      }, View.prototype.addSource = function(s) {
        this.otherSources.push(s);
        if (this.currentPeriod) {
          this.currentPeriod.requestSource(s);
        }
      }, View.prototype.removeSource = function(base) {
        Box.removeExact(this.otherSources, base);
        if (this.currentPeriod) {
          this.currentPeriod.purgeSource(base);
        }
      }, View.prototype.removeAllSources = function() {
        /** @type {!Array} */
        this.otherSources = [];
        if (this.currentPeriod) {
          this.currentPeriod.purgeAllSources();
        }
      }, View.prototype.refetchSource = function(row) {
        var self = this.currentPeriod;
        if (self) {
          self.freeze();
          self.purgeSource(row);
          self.requestSource(row);
          self.thaw();
        }
      }, View.prototype.refetchAllSources = function() {
        var view = this.currentPeriod;
        if (view) {
          view.freeze();
          view.purgeAllSources();
          view.requestSources(this.getSources());
          view.thaw();
        }
      }, View.prototype.getSources = function() {
        return [this.stickySource].concat(this.otherSources);
      }, View.prototype.multiQuerySources = function(statements) {
        if (statements) {
          if (!$.isArray(statements)) {
            /** @type {!Array} */
            statements = [statements];
          }
        } else {
          /** @type {!Array} */
          statements = [];
        }
        var i;
        /** @type {!Array} */
        var myHooks = [];
        /** @type {number} */
        i = 0;
        for (; i < statements.length; i++) {
          myHooks.push.apply(myHooks, this.querySources(statements[i]));
        }
        return myHooks;
      }, View.prototype.querySources = function(id) {
        var i;
        var el;
        var elements = this.otherSources;
        /** @type {number} */
        i = 0;
        for (; i < elements.length; i++) {
          if ((el = elements[i]) === id) {
            return [el];
          }
        }
        return (el = this.getSourceById(it.default.normalizeId(id))) ? [el] : (id = ModuleParser.default.parse(id, this.calendar), id ? $.grep(elements, function(iterId) {
          return openReview(id, iterId);
        }) : void 0);
      }, View.prototype.getSourceById = function(uri) {
        return $.grep(this.otherSources, function(op1) {
          return op1.id && op1.id === uri;
        })[0];
      }, View.prototype.setPeriod = function(period) {
        if (this.currentPeriod) {
          this.unbindPeriod(this.currentPeriod);
          /** @type {null} */
          this.currentPeriod = null;
        }
        /** @type {string} */
        this.currentPeriod = period;
        this.bindPeriod(period);
        period.requestSources(this.getSources());
      }, View.prototype.bindPeriod = function(item) {
        this.listenTo(item, "release", function(quickChange) {
          this.trigger("release", quickChange);
        });
      }, View.prototype.unbindPeriod = function(protostate) {
        this.stopListeningTo(protostate);
      }, View.prototype.getEventDefByUid = function(name) {
        if (this.currentPeriod) {
          return this.currentPeriod.getEventDefByUid(name);
        }
      }, View.prototype.addEventDef = function(obj, paramName) {
        if (paramName) {
          this.stickySource.addEventDef(obj);
        }
        if (this.currentPeriod) {
          this.currentPeriod.addEventDef(obj);
        }
      }, View.prototype.removeEventDefsById = function(t) {
        this.getSources().forEach(function(MapTrailLayer) {
          MapTrailLayer.removeEventDefsById(t);
        });
        if (this.currentPeriod) {
          this.currentPeriod.removeEventDefsById(t);
        }
      }, View.prototype.removeAllEventDefs = function() {
        this.getSources().forEach(function(canCreateDiscussions) {
          canCreateDiscussions.removeAllEventDefs();
        });
        if (this.currentPeriod) {
          this.currentPeriod.removeAllEventDefs();
        }
      }, View.prototype.mutateEventsWithId = function(t, event) {
        var a;
        var p = this.currentPeriod;
        /** @type {!Array} */
        var teardownFunctions = [];
        return p ? (p.freeze(), a = p.getEventDefsById(t), a.forEach(function(el) {
          p.removeEventDef(el);
          teardownFunctions.push(event.mutateSingle(el));
          p.addEventDef(el);
        }), p.thaw(), function() {
          p.freeze();
          /** @type {number} */
          var i = 0;
          for (; i < a.length; i++) {
            p.removeEventDef(a[i]);
            teardownFunctions[i]();
            p.addEventDef(a[i]);
          }
          p.thaw();
        }) : function() {
        };
      }, View.prototype.buildMutatedEventInstanceGroup = function(t, event) {
        var iter_sph;
        var emitter;
        var spheres = this.getEventDefsById(t);
        /** @type {!Array} */
        var body = [];
        /** @type {number} */
        iter_sph = 0;
        for (; iter_sph < spheres.length; iter_sph++) {
          if ((emitter = spheres[iter_sph].clone()) instanceof process.default) {
            event.mutateSingle(emitter);
            body.push.apply(body, emitter.buildInstances());
          }
        }
        return new message.default(body);
      }, View.prototype.freeze = function() {
        if (this.currentPeriod) {
          this.currentPeriod.freeze();
        }
      }, View.prototype.thaw = function() {
        if (this.currentPeriod) {
          this.currentPeriod.thaw();
        }
      }, View.prototype.getEventDefsById = function(time1) {
        return this.currentPeriod.getEventDefsById(time1);
      }, View.prototype.getEventInstances = function() {
        return this.currentPeriod.getEventInstances();
      }, View.prototype.getEventInstancesWithId = function(time1) {
        return this.currentPeriod.getEventInstancesWithId(time1);
      }, View.prototype.getEventInstancesWithoutId = function(name) {
        return this.currentPeriod.getEventInstancesWithoutId(name);
      }, View;
    }();
    exports.default = Log;
    p.default.mixInto(Log);
    h.default.mixInto(Log);
  }, function(canCreateDiscussions, exports, $) {
    Object.defineProperty(exports, "__esModule", {
      value : true
    });
    var $this = $(3);
    var node = $(4);
    var self = $(20);
    var s = $(11);
    var a = $(5);
    var _deepAssign2 = $(18);
    var Log = function() {
      /**
       * @param {?} value
       * @param {!Object} offset
       * @param {string} zone
       * @return {undefined}
       */
      function init(value, offset, zone) {
        /** @type {number} */
        this.pendingCnt = 0;
        /** @type {number} */
        this.freezeDepth = 0;
        /** @type {number} */
        this.stuntedReleaseCnt = 0;
        /** @type {number} */
        this.releaseCnt = 0;
        this.start = value;
        /** @type {!Object} */
        this.end = offset;
        /** @type {string} */
        this.timezone = zone;
        this.unzonedRange = new a.default(value.clone().stripZone(), offset.clone().stripZone());
        this.requestsByUid = {};
        this.eventDefsByUid = {};
        this.eventDefsById = {};
        this.eventInstanceGroupsById = {};
      }
      return init.prototype.isWithinRange = function(date, position) {
        return !date.isBefore(this.start) && !position.isAfter(this.end);
      }, init.prototype.requestSources = function(nodeEvents) {
        this.freeze();
        /** @type {number} */
        var e = 0;
        for (; e < nodeEvents.length; e++) {
          this.requestSource(nodeEvents[e]);
        }
        this.thaw();
      }, init.prototype.requestSource = function(value) {
        var contentTypeRef = this;
        var task = {
          source : value,
          status : "pending",
          eventDefs : null
        };
        this.requestsByUid[value.uid] = task;
        this.pendingCnt += 1;
        value.fetch(this.start, this.end, this.timezone).then(function(newId) {
          if ("cancelled" !== task.status) {
            /** @type {string} */
            task.status = "completed";
            /** @type {!Object} */
            task.eventDefs = newId;
            contentTypeRef.addEventDefs(newId);
            contentTypeRef.pendingCnt--;
            contentTypeRef.tryRelease();
          }
        }, function() {
          if ("cancelled" !== task.status) {
            /** @type {string} */
            task.status = "failed";
            contentTypeRef.pendingCnt--;
            contentTypeRef.tryRelease();
          }
        });
      }, init.prototype.purgeSource = function(link) {
        var post = this.requestsByUid[link.uid];
        if (post) {
          delete this.requestsByUid[link.uid];
          if ("pending" === post.status) {
            /** @type {string} */
            post.status = "cancelled";
            this.pendingCnt--;
            this.tryRelease();
          } else {
            if ("completed" === post.status) {
              post.eventDefs.forEach(this.removeEventDef.bind(this));
            }
          }
        }
      }, init.prototype.purgeAllSources = function() {
        var k;
        var post;
        var _ref1 = this.requestsByUid;
        /** @type {number} */
        var i = 0;
        for (k in _ref1) {
          post = _ref1[k];
          if ("pending" === post.status) {
            /** @type {string} */
            post.status = "cancelled";
          } else {
            if ("completed" === post.status) {
              i++;
            }
          }
        }
        this.requestsByUid = {};
        /** @type {number} */
        this.pendingCnt = 0;
        if (i) {
          this.removeAllEventDefs();
        }
      }, init.prototype.getEventDefByUid = function(onStr) {
        return this.eventDefsByUid[onStr];
      }, init.prototype.getEventDefsById = function(x) {
        var subwiki = this.eventDefsById[x];
        return subwiki ? subwiki.slice() : [];
      }, init.prototype.addEventDefs = function(identifierList) {
        /** @type {number} */
        var i = 0;
        for (; i < identifierList.length; i++) {
          this.addEventDef(identifierList[i]);
        }
      }, init.prototype.addEventDef = function(t) {
        var layer_i;
        var conf_shortcuts_icon = this.eventDefsById;
        var i = t.id;
        var _watchableTools = conf_shortcuts_icon[i] || (conf_shortcuts_icon[i] = []);
        var crossfilterable_layers = t.buildInstances(this.unzonedRange);
        _watchableTools.push(t);
        /** @type {!Object} */
        this.eventDefsByUid[t.uid] = t;
        /** @type {number} */
        layer_i = 0;
        for (; layer_i < crossfilterable_layers.length; layer_i++) {
          this.addEventInstance(crossfilterable_layers[layer_i], i);
        }
      }, init.prototype.removeEventDefsById = function(t) {
        var EditRoute = this;
        this.getEventDefsById(t).forEach(function(itemModel) {
          EditRoute.removeEventDef(itemModel);
        });
      }, init.prototype.removeAllEventDefs = function() {
        var t = $this.isEmptyObject(this.eventDefsByUid);
        this.eventDefsByUid = {};
        this.eventDefsById = {};
        this.eventInstanceGroupsById = {};
        if (!t) {
          this.tryRelease();
        }
      }, init.prototype.removeEventDef = function(value) {
        var result = this.eventDefsById;
        var n = result[value.id];
        delete this.eventDefsByUid[value.uid];
        if (n) {
          node.removeExact(n, value);
          if (!n.length) {
            delete result[value.id];
          }
          this.removeEventInstancesForDef(value);
        }
      }, init.prototype.getEventInstances = function() {
        var bookIdIndex;
        var bookIDs = this.eventInstanceGroupsById;
        /** @type {!Array} */
        var myHooks = [];
        for (bookIdIndex in bookIDs) {
          myHooks.push.apply(myHooks, bookIDs[bookIdIndex].eventInstances);
        }
        return myHooks;
      }, init.prototype.getEventInstancesWithId = function(x) {
        var subwiki = this.eventInstanceGroupsById[x];
        return subwiki ? subwiki.eventInstances.slice() : [];
      }, init.prototype.getEventInstancesWithoutId = function(type) {
        var i;
        var svrComps = this.eventInstanceGroupsById;
        /** @type {!Array} */
        var myHooks = [];
        for (i in svrComps) {
          if (i !== type) {
            myHooks.push.apply(myHooks, svrComps[i].eventInstances);
          }
        }
        return myHooks;
      }, init.prototype.addEventInstance = function(inName, inPropName) {
        var r = this.eventInstanceGroupsById;
        (r[inPropName] || (r[inPropName] = new _deepAssign2.default)).eventInstances.push(inName);
        this.tryRelease();
      }, init.prototype.removeEventInstancesForDef = function(def) {
        var e;
        var hash = this.eventInstanceGroupsById;
        var prop = hash[def.id];
        if (prop) {
          e = node.removeMatching(prop.eventInstances, function(item) {
            return item.def === def;
          });
          if (!prop.eventInstances.length) {
            delete hash[def.id];
          }
          if (e) {
            this.tryRelease();
          }
        }
      }, init.prototype.tryRelease = function() {
        if (!this.pendingCnt) {
          if (this.freezeDepth) {
            this.stuntedReleaseCnt++;
          } else {
            this.release();
          }
        }
      }, init.prototype.release = function() {
        this.releaseCnt++;
        this.trigger("release", this.eventInstanceGroupsById);
      }, init.prototype.whenReleased = function() {
        var target = this;
        return this.releaseCnt ? self.default.resolve(this.eventInstanceGroupsById) : self.default.construct(function(e) {
          target.one("release", e);
        });
      }, init.prototype.freeze = function() {
        if (!this.freezeDepth++) {
          /** @type {number} */
          this.stuntedReleaseCnt = 0;
        }
      }, init.prototype.thaw = function() {
        if (!(--this.freezeDepth || !this.stuntedReleaseCnt || this.pendingCnt)) {
          this.release();
        }
      }, init;
    }();
    exports.default = Log;
    s.default.mixInto(Log);
  }, function(canCreateDiscussions, exports, require) {
    Object.defineProperty(exports, "__esModule", {
      value : true
    });
    var $ = require(3);
    var nconf = require(4);
    var o = require(7);
    var Log = function() {
      /**
       * @param {!Object} options
       * @param {!Object} config
       * @return {undefined}
       */
      function Plugin(options, config) {
        /** @type {boolean} */
        this.isFollowing = false;
        /** @type {boolean} */
        this.isHidden = false;
        /** @type {boolean} */
        this.isAnimating = false;
        this.options = config = config || {};
        /** @type {!Object} */
        this.sourceEl = options;
        this.parentEl = config.parentEl ? $(config.parentEl) : options.parent();
      }
      return Plugin.prototype.start = function(ev) {
        if (!this.isFollowing) {
          /** @type {boolean} */
          this.isFollowing = true;
          this.y0 = nconf.getEvY(ev);
          this.x0 = nconf.getEvX(ev);
          /** @type {number} */
          this.topDelta = 0;
          /** @type {number} */
          this.leftDelta = 0;
          if (!this.isHidden) {
            this.updatePosition();
          }
          if (nconf.getEvIsTouch(ev)) {
            this.listenTo($(document), "touchmove", this.handleMove);
          } else {
            this.listenTo($(document), "mousemove", this.handleMove);
          }
        }
      }, Plugin.prototype.stop = function(shouldRevert, callback) {
        var _this = this;
        var revertDuration = this.options.revertDuration;
        /**
         * @return {undefined}
         */
        var complete = function() {
          /** @type {boolean} */
          _this.isAnimating = false;
          _this.removeElement();
          /** @type {null} */
          _this.top0 = _this.left0 = null;
          if (callback) {
            callback();
          }
        };
        if (this.isFollowing && !this.isAnimating) {
          /** @type {boolean} */
          this.isFollowing = false;
          this.stopListeningTo($(document));
          if (shouldRevert && revertDuration && !this.isHidden) {
            /** @type {boolean} */
            this.isAnimating = true;
            this.el.animate({
              top : this.top0,
              left : this.left0
            }, {
              duration : revertDuration,
              complete : complete
            });
          } else {
            complete();
          }
        }
      }, Plugin.prototype.getEl = function() {
        var el = this.el;
        return el || (el = this.el = this.sourceEl.clone().addClass(this.options.additionalClass || "").css({
          position : "absolute",
          visibility : "",
          display : this.isHidden ? "none" : "",
          margin : 0,
          right : "auto",
          bottom : "auto",
          width : this.sourceEl.width(),
          height : this.sourceEl.height(),
          opacity : this.options.opacity || "",
          zIndex : this.options.zIndex
        }), el.addClass("fc-unselectable"), el.appendTo(this.parentEl)), el;
      }, Plugin.prototype.removeElement = function() {
        if (this.el) {
          this.el.remove();
          /** @type {null} */
          this.el = null;
        }
      }, Plugin.prototype.updatePosition = function() {
        var rect;
        var offsetObject;
        this.getEl();
        if (null == this.top0) {
          rect = this.sourceEl.offset();
          offsetObject = this.el.offsetParent().offset();
          /** @type {number} */
          this.top0 = rect.top - offsetObject.top;
          /** @type {number} */
          this.left0 = rect.left - offsetObject.left;
        }
        this.el.css({
          top : this.top0 + this.topDelta,
          left : this.left0 + this.leftDelta
        });
      }, Plugin.prototype.handleMove = function(ev) {
        /** @type {number} */
        this.topDelta = nconf.getEvY(ev) - this.y0;
        /** @type {number} */
        this.leftDelta = nconf.getEvX(ev) - this.x0;
        if (!this.isHidden) {
          this.updatePosition();
        }
      }, Plugin.prototype.hide = function() {
        if (!this.isHidden) {
          /** @type {boolean} */
          this.isHidden = true;
          if (this.el) {
            this.el.hide();
          }
        }
      }, Plugin.prototype.show = function() {
        if (this.isHidden) {
          /** @type {boolean} */
          this.isHidden = false;
          this.updatePosition();
          this.getEl().show();
        }
      }, Plugin;
    }();
    exports.default = Log;
    o.default.mixInto(Log);
  }, function(canCreateDiscussions, e, keyGen) {
    Object.defineProperty(e, "__esModule", {
      value : true
    });
    var tslib_1 = keyGen(2);
    var _queries2 = keyGen(23);
    var o = keyGen(15);
    var newOrg = function(_super) {
      /**
       * @param {?} name
       * @return {?}
       */
      function ParseError(name) {
        var n = _super.call(this, name) || this;
        return n.dragListener = n.buildDragListener(), n;
      }
      return tslib_1.__extends(ParseError, _super), ParseError.prototype.end = function() {
        this.dragListener.endInteraction();
      }, ParseError.prototype.bindToEl = function(moduleObjects) {
        var MM = this.component;
        var that = this.dragListener;
        MM.bindDateHandlerToEl(moduleObjects, "mousedown", function(ev) {
          if (!MM.shouldIgnoreMouse()) {
            that.startInteraction(ev);
          }
        });
        MM.bindDateHandlerToEl(moduleObjects, "touchstart", function(ev) {
          if (!MM.shouldIgnoreTouch()) {
            that.startInteraction(ev);
          }
        });
      }, ParseError.prototype.buildDragListener = function() {
        var dayClickHit;
        var aacFrame = this;
        var _this = this.component;
        var dragListener = new _queries2.default(_this, {
          scroll : this.opt("dragScroll"),
          interactionStart : function() {
            dayClickHit = dragListener.origHit;
          },
          hitOver : function(isOrig, origHit, hit) {
            if (!origHit) {
              /** @type {null} */
              dayClickHit = null;
            }
          },
          hitOut : function() {
            /** @type {null} */
            dayClickHit = null;
          },
          interactionEnd : function(ev, isCancelled) {
            var hitSpan;
            if (!isCancelled && dayClickHit && (hitSpan = _this.getSafeHitFootprint(dayClickHit))) {
              aacFrame.view.triggerDayClick(hitSpan, _this.getHitEl(dayClickHit), ev);
            }
          }
        });
        return dragListener.shouldCancelTouchScroll = false, dragListener.scrollAlwaysKills = true, dragListener;
      }, ParseError;
    }(o.default);
    e.default = newOrg;
  }, function(canCreateDiscussions, e, $) {
    /**
     * @param {!Array} arr
     * @return {?}
     */
    function callback(arr) {
      var j;
      var data;
      var i;
      /** @type {!Array} */
      var result = [];
      /** @type {number} */
      j = 0;
      for (; j < arr.length; j++) {
        data = arr[j];
        /** @type {number} */
        i = 0;
        for (; i < result.length && cb(data, result[i]).length; i++) {
        }
        /** @type {number} */
        data.level = i;
        (result[i] || (result[i] = [])).push(data);
      }
      return result;
    }
    /**
     * @param {!Array} files
     * @return {undefined}
     */
    function update(files) {
      var i;
      var h;
      var f;
      var c;
      var j;
      /** @type {number} */
      i = 0;
      for (; i < files.length; i++) {
        h = files[i];
        /** @type {number} */
        f = 0;
        for (; f < h.length; f++) {
          c = h[f];
          /** @type {!Array} */
          c.forwardSegs = [];
          /** @type {number} */
          j = i + 1;
          for (; j < files.length; j++) {
            cb(c, files[j], c.forwardSegs);
          }
        }
      }
    }
    /**
     * @param {!Object} seg
     * @return {undefined}
     */
    function transform(seg) {
      var i;
      var forwardSeg;
      var forwardSegs = seg.forwardSegs;
      /** @type {number} */
      var forwardPressure = 0;
      if (void 0 === seg.forwardPressure) {
        /** @type {number} */
        i = 0;
        for (; i < forwardSegs.length; i++) {
          forwardSeg = forwardSegs[i];
          transform(forwardSeg);
          /** @type {number} */
          forwardPressure = Math.max(forwardPressure, 1 + forwardSeg.forwardPressure);
        }
        /** @type {number} */
        seg.forwardPressure = forwardPressure;
      }
    }
    /**
     * @param {!ClientRect} list
     * @param {!NodeList} m
     * @param {!Array} a
     * @return {?}
     */
    function cb(list, m, a) {
      if (void 0 === a) {
        /** @type {!Array} */
        a = [];
      }
      /** @type {number} */
      var i = 0;
      for (; i < m.length; i++) {
        if (append(list, m[i])) {
          a.push(m[i]);
        }
      }
      return a;
    }
    /**
     * @param {!ClientRect} l
     * @param {!ClientRect} b
     * @return {?}
     */
    function append(l, b) {
      return l.bottom > b.top && l.top < b.bottom;
    }
    Object.defineProperty(e, "__esModule", {
      value : true
    });
    var tslib_1 = $(2);
    var self = $(4);
    var d = $(42);
    var newOrg = function(_super) {
      /**
       * @param {!Object} name
       * @param {?} text
       * @return {?}
       */
      function ParseError(name, text) {
        var obj = _super.call(this, name, text) || this;
        return obj.timeGrid = name, obj;
      }
      return tslib_1.__extends(ParseError, _super), ParseError.prototype.renderFgSegs = function(segs) {
        this.renderFgSegsIntoContainers(segs, this.timeGrid.fgContainerEls);
      }, ParseError.prototype.renderFgSegsIntoContainers = function(segs, containerEls) {
        var segsByCol;
        var col;
        segsByCol = this.timeGrid.groupSegsByCol(segs);
        /** @type {number} */
        col = 0;
        for (; col < this.timeGrid.colCnt; col++) {
          this.updateFgSegCoords(segsByCol[col]);
        }
        this.timeGrid.attachSegsByCol(segsByCol, containerEls);
      }, ParseError.prototype.unrenderFgSegs = function() {
        if (this.fgSegs) {
          this.fgSegs.forEach(function(t) {
            t.el.remove();
          });
        }
      }, ParseError.prototype.computeEventTimeFormat = function() {
        return this.opt("noMeridiemTimeFormat");
      }, ParseError.prototype.computeDisplayEventEnd = function() {
        return true;
      }, ParseError.prototype.fgSegHtml = function(seg, disableResizing) {
        var val;
        var value;
        var str;
        var view = this.view;
        var calendar = view.calendar;
        var data = seg.footprint.componentFootprint;
        var length = data.isAllDay;
        var event = seg.footprint.eventDef;
        var isDraggable = view.isEventDefDraggable(event);
        var isResizableFromStart = !disableResizing && seg.isStart && view.isEventDefResizableFromStart(event);
        var isResizableFromEnd = !disableResizing && seg.isEnd && view.isEventDefResizableFromEnd(event);
        var classes = this.getSegClasses(seg, isDraggable, isResizableFromStart || isResizableFromEnd);
        var enable_keys = self.cssToStr(this.getSkinCss(event));
        if (classes.unshift("fc-time-grid-event", "fc-v-event"), view.isMultiDayRange(data.unzonedRange)) {
          if (seg.isStart || seg.isEnd) {
            var date = calendar.msToMoment(seg.startMs);
            var def = calendar.msToMoment(seg.endMs);
            val = this._getTimeText(date, def, length);
            value = this._getTimeText(date, def, length, "LT");
            str = this._getTimeText(date, def, length, null, false);
          }
        } else {
          val = this.getTimeText(seg.footprint);
          value = this.getTimeText(seg.footprint, "LT");
          str = this.getTimeText(seg.footprint, null, false);
        }
        return '<a class="' + classes.join(" ") + '"' + (event.url ? ' href="' + self.htmlEscape(event.url) + '"' : "") + (enable_keys ? ' style="' + enable_keys + '"' : "") + '><div class="fc-content">' + (val ? '<div class="fc-time" data-start="' + self.htmlEscape(str) + '" data-full="' + self.htmlEscape(value) + '"><span>' + self.htmlEscape(val) + "</span></div>" : "") + (event.title ? '<div class="fc-title">' + self.htmlEscape(event.title) + "</div>" : "") + '</div><div class="fc-bg"/>' + (isResizableFromEnd ? 
        '<div class="fc-resizer fc-end-resizer" />' : "") + "</a>";
      }, ParseError.prototype.updateFgSegCoords = function(segs) {
        this.timeGrid.computeSegVerticals(segs);
        this.computeFgSegHorizontals(segs);
        this.timeGrid.assignSegVerticals(segs);
        this.assignFgSegHorizontals(segs);
      }, ParseError.prototype.computeFgSegHorizontals = function(segs) {
        var result;
        var args;
        var i;
        if (this.sortEventSegs(segs), result = callback(segs), update(result), args = result[0]) {
          /** @type {number} */
          i = 0;
          for (; i < args.length; i++) {
            transform(args[i]);
          }
          /** @type {number} */
          i = 0;
          for (; i < args.length; i++) {
            this.computeFgSegForwardBack(args[i], 0, 0);
          }
        }
      }, ParseError.prototype.computeFgSegForwardBack = function(seg, seriesBackwardPressure, seriesBackwardCoord) {
        var i;
        var forwardSegs = seg.forwardSegs;
        if (void 0 === seg.forwardCoord) {
          if (forwardSegs.length) {
            this.sortForwardSegs(forwardSegs);
            this.computeFgSegForwardBack(forwardSegs[0], seriesBackwardPressure + 1, seriesBackwardCoord);
            seg.forwardCoord = forwardSegs[0].backwardCoord;
          } else {
            /** @type {number} */
            seg.forwardCoord = 1;
          }
          /** @type {number} */
          seg.backwardCoord = seg.forwardCoord - (seg.forwardCoord - seriesBackwardCoord) / (seriesBackwardPressure + 1);
          /** @type {number} */
          i = 0;
          for (; i < forwardSegs.length; i++) {
            this.computeFgSegForwardBack(forwardSegs[i], 0, seg.forwardCoord);
          }
        }
      }, ParseError.prototype.sortForwardSegs = function(forwardSegs) {
        forwardSegs.sort(self.proxy(this, "compareForwardSegs"));
      }, ParseError.prototype.compareForwardSegs = function(seg1, seg2) {
        return seg2.forwardPressure - seg1.forwardPressure || (seg1.backwardCoord || 0) - (seg2.backwardCoord || 0) || this.compareEventSegs(seg1, seg2);
      }, ParseError.prototype.assignFgSegHorizontals = function(segs) {
        var i;
        var seg;
        /** @type {number} */
        i = 0;
        for (; i < segs.length; i++) {
          seg = segs[i];
          seg.el.css(this.generateFgSegHorizontalCss(seg));
          if (seg.bottom - seg.top < 30) {
            seg.el.addClass("fc-short");
          }
        }
      }, ParseError.prototype.generateFgSegHorizontalCss = function(seg) {
        var right;
        var left;
        var shouldOverlap = this.opt("slotEventOverlap");
        var backwardCoord = seg.backwardCoord;
        var forwardCoord = seg.forwardCoord;
        var props = this.timeGrid.generateSegVerticalCss(seg);
        var isRightToLeft = this.timeGrid.isRTL;
        return shouldOverlap && (forwardCoord = Math.min(1, backwardCoord + 2 * (forwardCoord - backwardCoord))), isRightToLeft ? (right = 1 - forwardCoord, left = backwardCoord) : (right = backwardCoord, left = 1 - forwardCoord), props.zIndex = seg.level + 1, props.left = 100 * right + "%", props.right = 100 * left + "%", shouldOverlap && seg.forwardPressure && (props[isRightToLeft ? "marginLeft" : "marginRight"] = 20), props;
      }, ParseError;
    }(d.default);
    e.default = newOrg;
  }, function(canCreateDiscussions, e, unescape) {
    Object.defineProperty(e, "__esModule", {
      value : true
    });
    var tslib_1 = unescape(2);
    var path = unescape(3);
    var v = unescape(58);
    var newOrg = function(_super) {
      /**
       * @return {?}
       */
      function ParseError() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      return tslib_1.__extends(ParseError, _super), ParseError.prototype.renderSegs = function(type, a) {
        var j;
        var b;
        var row;
        /** @type {!Array} */
        var pathData = [];
        this.eventRenderer.renderFgSegsIntoContainers(type, this.component.helperContainerEls);
        /** @type {number} */
        j = 0;
        for (; j < type.length; j++) {
          b = type[j];
          if (a && a.col === b.col) {
            row = a.el;
            b.el.css({
              left : row.css("left"),
              right : row.css("right"),
              "margin-left" : row.css("margin-left"),
              "margin-right" : row.css("margin-right")
            });
          }
          pathData.push(b.el[0]);
        }
        return path(pathData);
      }, ParseError;
    }(v.default);
    e.default = newOrg;
  }, function(canCreateDiscussions, e, comparer) {
    Object.defineProperty(e, "__esModule", {
      value : true
    });
    var tslib_1 = comparer(2);
    var selected = comparer(57);
    var newOrg = function(_super) {
      /**
       * @return {?}
       */
      function ParseError() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      return tslib_1.__extends(ParseError, _super), ParseError.prototype.attachSegEls = function(r, link) {
        var n;
        var window = this.component;
        return "bgEvent" === r ? n = window.bgContainerEls : "businessHours" === r ? n = window.businessContainerEls : "highlight" === r && (n = window.highlightContainerEls), window.updateSegVerticals(link), window.attachSegsByCol(window.groupSegsByCol(link), n), link.map(function(fmover) {
          return fmover.el[0];
        });
      }, ParseError;
    }(selected.default);
    e.default = newOrg;
  }, function(canCreateDiscussions, exports, require) {
    Object.defineProperty(exports, "__esModule", {
      value : true
    });
    var $ = require(3);
    var Utility = require(4);
    var o = require(7);
    var Log = function() {
      /**
       * @param {!Object} options
       * @return {undefined}
       */
      function module(options) {
        /** @type {boolean} */
        this.isHidden = true;
        /** @type {number} */
        this.margin = 10;
        this.options = options || {};
      }
      return module.prototype.show = function() {
        if (this.isHidden) {
          if (!this.el) {
            this.render();
          }
          this.el.show();
          this.position();
          /** @type {boolean} */
          this.isHidden = false;
          this.trigger("show");
        }
      }, module.prototype.hide = function() {
        if (!this.isHidden) {
          this.el.hide();
          /** @type {boolean} */
          this.isHidden = true;
          this.trigger("hide");
        }
      }, module.prototype.render = function() {
        var $trashTreeContextMenu = this;
        var options = this.options;
        this.el = $('<div class="fc-popover"/>').addClass(options.className || "").css({
          top : 0,
          left : 0
        }).append(options.content).appendTo(options.parentEl);
        this.el.on("click", ".fc-close", function() {
          $trashTreeContextMenu.hide();
        });
        if (options.autoHide) {
          this.listenTo($(document), "mousedown", this.documentMousedown);
        }
      }, module.prototype.documentMousedown = function(ev) {
        if (this.el && !$(ev.target).closest(this.el).length) {
          this.hide();
        }
      }, module.prototype.removeElement = function() {
        this.hide();
        if (this.el) {
          this.el.remove();
          /** @type {null} */
          this.el = null;
        }
        this.stopListeningTo($(document), "mousedown");
      }, module.prototype.position = function() {
        var viewportTop;
        var left;
        var objectOffset;
        var y1;
        var x1;
        var options = this.options;
        var imgOfs = this.el.offsetParent().offset();
        var width = this.el.outerWidth();
        var height = this.el.outerHeight();
        var result = $(window);
        var dom = Utility.getScrollParent(this.el);
        y1 = options.top || 0;
        x1 = void 0 !== options.left ? options.left : void 0 !== options.right ? options.right - width : 0;
        if (dom.is(window) || dom.is(document)) {
          dom = result;
          /** @type {number} */
          viewportTop = 0;
          /** @type {number} */
          left = 0;
        } else {
          objectOffset = dom.offset();
          viewportTop = objectOffset.top;
          left = objectOffset.left;
        }
        viewportTop = viewportTop + result.scrollTop();
        left = left + result.scrollLeft();
        if (false !== options.viewportConstrain) {
          /** @type {number} */
          y1 = Math.min(y1, viewportTop + dom.outerHeight() - height - this.margin);
          /** @type {number} */
          y1 = Math.max(y1, viewportTop + this.margin);
          /** @type {number} */
          x1 = Math.min(x1, left + dom.outerWidth() - width - this.margin);
          /** @type {number} */
          x1 = Math.max(x1, left + this.margin);
        }
        this.el.css({
          top : y1 - imgOfs.top,
          left : x1 - imgOfs.left
        });
      }, module.prototype.trigger = function(type) {
        if (this.options[type]) {
          this.options[type].apply(this, Array.prototype.slice.call(arguments, 1));
        }
      }, module;
    }();
    exports.default = Log;
    o.default.mixInto(Log);
  }, function(canCreateDiscussions, e, require) {
    /**
     * @param {!Object} seg
     * @param {!Array} otherSegs
     * @return {?}
     */
    function segsOverlap(seg, otherSegs) {
      var i;
      var otherSeg;
      /** @type {number} */
      i = 0;
      for (; i < otherSegs.length; i++) {
        if (otherSeg = otherSegs[i], otherSeg.leftCol <= seg.rightCol && otherSeg.rightCol >= seg.leftCol) {
          return true;
        }
      }
      return false;
    }
    /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    function rolesComparator(a, b) {
      return a.leftCol - b.leftCol;
    }
    Object.defineProperty(e, "__esModule", {
      value : true
    });
    var Util = require(2);
    var $ = require(3);
    var self = require(4);
    var _noframeworkWaypoints2 = require(42);
    var newOrg = function(_super) {
      /**
       * @param {!Object} name
       * @param {?} data
       * @return {?}
       */
      function Editor(name, data) {
        var obj = _super.call(this, name, data) || this;
        return obj.dayGrid = name, obj;
      }
      return Util.__extends(Editor, _super), Editor.prototype.renderBgRanges = function(elems) {
        elems = $.grep(elems, function(evt) {
          return evt.eventDef.isAllDay();
        });
        _super.prototype.renderBgRanges.call(this, elems);
      }, Editor.prototype.renderFgSegs = function(segs) {
        var rowStructs = this.rowStructs = this.renderSegRows(segs);
        this.dayGrid.rowEls.each(function(row, mei) {
          $(mei).find(".fc-content-skeleton > table").append(rowStructs[row].tbodyEl);
        });
      }, Editor.prototype.unrenderFgSegs = function() {
        var rowStruct;
        var rowStructs = this.rowStructs || [];
        for (; rowStruct = rowStructs.pop();) {
          rowStruct.tbodyEl.remove();
        }
        /** @type {null} */
        this.rowStructs = null;
      }, Editor.prototype.renderSegRows = function(segs) {
        var segRows;
        var row;
        /** @type {!Array} */
        var rowStructs = [];
        segRows = this.groupSegRows(segs);
        /** @type {number} */
        row = 0;
        for (; row < segRows.length; row++) {
          rowStructs.push(this.renderSegRow(row, segRows[row]));
        }
        return rowStructs;
      }, Editor.prototype.renderSegRow = function(row, rowSegs) {
        /**
         * @param {?} endCol
         * @return {undefined}
         */
        function emptyCellsUntil(endCol) {
          for (; col < endCol;) {
            td = (loneCellMatrix[i - 1] || [])[col];
            if (td) {
              td.attr("rowspan", parseInt(td.attr("rowspan") || 1, 10) + 1);
            } else {
              td = $("<td/>");
              emptyRow.append(td);
            }
            cellMatrix[i][col] = td;
            loneCellMatrix[i][col] = td;
            col++;
          }
        }
        var i;
        var levelSegs;
        var col;
        var emptyRow;
        var j;
        var seg;
        var td;
        var colCnt = this.dayGrid.colCnt;
        var segLevels = this.buildSegLevels(rowSegs);
        /** @type {number} */
        var cell_amount = Math.max(1, segLevels.length);
        var tbody = $("<tbody/>");
        /** @type {!Array} */
        var segMatrix = [];
        /** @type {!Array} */
        var cellMatrix = [];
        /** @type {!Array} */
        var loneCellMatrix = [];
        /** @type {number} */
        i = 0;
        for (; i < cell_amount; i++) {
          if (levelSegs = segLevels[i], col = 0, emptyRow = $("<tr/>"), segMatrix.push([]), cellMatrix.push([]), loneCellMatrix.push([]), levelSegs) {
            /** @type {number} */
            j = 0;
            for (; j < levelSegs.length; j++) {
              seg = levelSegs[j];
              emptyCellsUntil(seg.leftCol);
              td = $('<td class="fc-event-container"/>').append(seg.el);
              if (seg.leftCol !== seg.rightCol) {
                td.attr("colspan", seg.rightCol - seg.leftCol + 1);
              } else {
                loneCellMatrix[i][col] = td;
              }
              for (; col <= seg.rightCol;) {
                cellMatrix[i][col] = td;
                segMatrix[i][col] = seg;
                col++;
              }
              emptyRow.append(td);
            }
          }
          emptyCellsUntil(colCnt);
          this.dayGrid.bookendCells(emptyRow);
          tbody.append(emptyRow);
        }
        return {
          row : row,
          tbodyEl : tbody,
          cellMatrix : cellMatrix,
          segMatrix : segMatrix,
          segLevels : segLevels,
          segs : rowSegs
        };
      }, Editor.prototype.buildSegLevels = function(segs) {
        var i;
        var seg;
        var j;
        /** @type {!Array} */
        var levels = [];
        this.sortEventSegs(segs);
        /** @type {number} */
        i = 0;
        for (; i < segs.length; i++) {
          seg = segs[i];
          /** @type {number} */
          j = 0;
          for (; j < levels.length && segsOverlap(seg, levels[j]); j++) {
          }
          /** @type {number} */
          seg.level = j;
          (levels[j] || (levels[j] = [])).push(seg);
        }
        /** @type {number} */
        j = 0;
        for (; j < levels.length; j++) {
          levels[j].sort(rolesComparator);
        }
        return levels;
      }, Editor.prototype.groupSegRows = function(segs) {
        var i;
        /** @type {!Array} */
        var segRows = [];
        /** @type {number} */
        i = 0;
        for (; i < this.dayGrid.rowCnt; i++) {
          segRows.push([]);
        }
        /** @type {number} */
        i = 0;
        for (; i < segs.length; i++) {
          segRows[segs[i].row].push(segs[i]);
        }
        return segRows;
      }, Editor.prototype.computeEventTimeFormat = function() {
        return this.opt("extraSmallTimeFormat");
      }, Editor.prototype.computeDisplayEventEnd = function() {
        return 1 === this.dayGrid.colCnt;
      }, Editor.prototype.fgSegHtml = function(seg, disableResizing) {
        var raw;
        var omins;
        var target = this.view;
        var event = seg.footprint.eventDef;
        var isAllDay = seg.footprint.componentFootprint.isAllDay;
        var isDraggable = target.isEventDefDraggable(event);
        var isResizableFromStart = !disableResizing && isAllDay && seg.isStart && target.isEventDefResizableFromStart(event);
        var isResizableFromEnd = !disableResizing && isAllDay && seg.isEnd && target.isEventDefResizableFromEnd(event);
        var classes = this.getSegClasses(seg, isDraggable, isResizableFromStart || isResizableFromEnd);
        var enable_keys = self.cssToStr(this.getSkinCss(event));
        /** @type {string} */
        var osecs = "";
        return classes.unshift("fc-day-grid-event", "fc-h-event"), seg.isStart && (raw = this.getTimeText(seg.footprint)) && (osecs = '<span class="fc-time">' + self.htmlEscape(raw) + "</span>"), omins = '<span class="fc-title">' + (self.htmlEscape(event.title || "") || "&nbsp;") + "</span>", '<a class="' + classes.join(" ") + '"' + (event.url ? ' href="' + self.htmlEscape(event.url) + '"' : "") + (enable_keys ? ' style="' + enable_keys + '"' : "") + '><div class="fc-content">' + (this.dayGrid.isRTL ? 
        omins + " " + osecs : osecs + " " + omins) + "</div>" + (isResizableFromStart ? '<div class="fc-resizer fc-start-resizer" />' : "") + (isResizableFromEnd ? '<div class="fc-resizer fc-end-resizer" />' : "") + "</a>";
      }, Editor;
    }(_noframeworkWaypoints2.default);
    e.default = newOrg;
  }, function(canCreateDiscussions, e, require) {
    Object.defineProperty(e, "__esModule", {
      value : true
    });
    var Util = require(2);
    var compare = require(3);
    var o = require(58);
    var newOrg = function(_super) {
      /**
       * @return {?}
       */
      function Editor() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      return Util.__extends(Editor, _super), Editor.prototype.renderSegs = function(type, annotation) {
        var rowStructs;
        /** @type {!Array} */
        var content = [];
        return rowStructs = this.eventRenderer.renderSegRows(type), this.component.rowEls.each(function(row, password) {
          var s;
          var skeletonTop;
          var result = compare(password);
          var ret = compare('<div class="fc-helper-skeleton"><table/></div>');
          if (annotation && annotation.row === row) {
            skeletonTop = annotation.el.position().top;
          } else {
            s = result.find(".fc-content-skeleton tbody");
            if (!s.length) {
              s = result.find(".fc-content-skeleton table");
            }
            skeletonTop = s.position().top;
          }
          ret.css("top", skeletonTop).find("table").append(rowStructs[row].tbodyEl);
          result.append(ret);
          content.push(ret[0]);
        }), compare(content);
      }, Editor;
    }(o.default);
    e.default = newOrg;
  }, function(canCreateDiscussions, e, FbmNoise2) {
    Object.defineProperty(e, "__esModule", {
      value : true
    });
    var tslib_1 = FbmNoise2(2);
    var ruggedNoise = FbmNoise2(3);
    var erodeNoise = FbmNoise2(57);
    var newOrg = function(_super) {
      /**
       * @return {?}
       */
      function ParseError() {
        var node = null !== _super && _super.apply(this, arguments) || this;
        return node.fillSegTag = "td", node;
      }
      return tslib_1.__extends(ParseError, _super), ParseError.prototype.attachSegEls = function(type, data) {
        var i;
        var seg;
        var skeletonEl;
        /** @type {!Array} */
        var helperNodes = [];
        /** @type {number} */
        i = 0;
        for (; i < data.length; i++) {
          seg = data[i];
          skeletonEl = this.renderFillRow(type, seg);
          this.component.rowEls.eq(seg.row).append(skeletonEl);
          helperNodes.push(skeletonEl[0]);
        }
        return helperNodes;
      }, ParseError.prototype.renderFillRow = function(type, seg) {
        var previousTarget;
        var currentTarget;
        var trEl;
        var colCnt = this.component.colCnt;
        var startCol = seg.leftCol;
        var endCol = seg.rightCol + 1;
        return previousTarget = "businessHours" === type ? "bgevent" : type.toLowerCase(), currentTarget = ruggedNoise('<div class="fc-' + previousTarget + '-skeleton"><table><tr/></table></div>'), trEl = currentTarget.find("tr"), startCol > 0 && trEl.append('<td colspan="' + startCol + '"/>'), trEl.append(seg.el.attr("colspan", endCol - startCol)), endCol < colCnt && trEl.append('<td colspan="' + (colCnt - endCol) + '"/>'), this.component.bookendCells(trEl), currentTarget;
      }, ParseError;
    }(erodeNoise.default);
    e.default = newOrg;
  }, function(canCreateDiscussions, e, require) {
    Object.defineProperty(e, "__esModule", {
      value : true
    });
    var Util = require(2);
    var r = require(228);
    var _Complex2 = require(5);
    var newOrg = function(_super) {
      /**
       * @return {?}
       */
      function Editor() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      return Util.__extends(Editor, _super), Editor.prototype.buildRenderRange = function(e, type, i) {
        var l;
        var p = _super.prototype.buildRenderRange.call(this, e, type, i);
        var m = this.msToUtcMoment(p.startMs, i);
        var d = this.msToUtcMoment(p.endMs, i);
        return this.opt("fixedWeekCount") && (l = Math.ceil(d.diff(m, "weeks", true)), d.add(6 - l, "weeks")), new _Complex2.default(m, d);
      }, Editor;
    }(r.default);
    e.default = newOrg;
  }, function(canCreateDiscussions, e, observable) {
    Object.defineProperty(e, "__esModule", {
      value : true
    });
    var tslib_1 = observable(2);
    var self = observable(4);
    var o = observable(42);
    var newOrg = function(_super) {
      /**
       * @return {?}
       */
      function ParseError() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      return tslib_1.__extends(ParseError, _super), ParseError.prototype.renderFgSegs = function(segs) {
        if (segs.length) {
          this.component.renderSegList(segs);
        } else {
          this.component.renderEmptyMessage();
        }
      }, ParseError.prototype.fgSegHtml = function(seg) {
        var customClose;
        var view = this.view;
        var c = view.calendar;
        var w = c.theme;
        var event = seg.footprint;
        var parent = event.eventDef;
        var model = event.componentFootprint;
        var before = parent.url;
        /** @type {!Array<?>} */
        var classes = ["fc-list-item"].concat(this.getClasses(parent));
        var isFatal = this.getBgColor(parent);
        return customClose = model.isAllDay ? view.getAllDayHtml() : view.isMultiDayRange(model.unzonedRange) ? seg.isStart || seg.isEnd ? self.htmlEscape(this._getTimeText(c.msToMoment(seg.startMs), c.msToMoment(seg.endMs), model.isAllDay)) : view.getAllDayHtml() : self.htmlEscape(this.getTimeText(event)), before && classes.push("fc-has-url"), '<tr class="' + classes.join(" ") + '">' + (this.displayEventTime ? '<td class="fc-list-item-time ' + w.getClass("widgetContent") + '">' + (customClose || 
        "") + "</td>" : "") + '<td class="fc-list-item-marker ' + w.getClass("widgetContent") + '"><span class="fc-event-dot"' + (isFatal ? ' style="background-color:' + isFatal + '"' : "") + '></span></td><td class="fc-list-item-title ' + w.getClass("widgetContent") + '"><a' + (before ? ' href="' + self.htmlEscape(before) + '"' : "") + ">" + self.htmlEscape(parent.title || "") + "</a></td></tr>";
      }, ParseError.prototype.computeEventTimeFormat = function() {
        return this.opt("mediumTimeFormat");
      }, ParseError;
    }(o.default);
    e.default = newOrg;
  }, function(canCreateDiscussions, e, require) {
    Object.defineProperty(e, "__esModule", {
      value : true
    });
    var Util = require(2);
    var $ = require(3);
    var o = require(59);
    var newOrg = function(_super) {
      /**
       * @return {?}
       */
      function type() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      return Util.__extends(type, _super), type.prototype.handleClick = function(item, event) {
        var _backUrl;
        _super.prototype.handleClick.call(this, item, event);
        if (!$(event.target).closest("a[href]").length) {
          if ((_backUrl = item.footprint.eventDef.url) && !event.isDefaultPrevented()) {
            window.location.href = _backUrl;
          }
        }
      }, type;
    }(o.default);
    e.default = newOrg;
  }, function(canCreateDiscussions, BeautifulProperties, _interopRequireDefault) {
    Object.defineProperty(BeautifulProperties, "__esModule", {
      value : true
    });
    var _noframeworkWaypoints2 = _interopRequireDefault(38);
    var _deepAssign2 = _interopRequireDefault(52);
    var _custom2 = _interopRequireDefault(215);
    var _UiIcon2 = _interopRequireDefault(216);
    _noframeworkWaypoints2.default.registerClass(_deepAssign2.default);
    _noframeworkWaypoints2.default.registerClass(_custom2.default);
    _noframeworkWaypoints2.default.registerClass(_UiIcon2.default);
  }, function(canCreateDiscussions, BeautifulProperties, $) {
    Object.defineProperty(BeautifulProperties, "__esModule", {
      value : true
    });
    var self = $(51);
    var r = $(213);
    var o = $(214);
    var s = $(258);
    var a = $(259);
    self.defineThemeSystem("standard", r.default);
    self.defineThemeSystem("jquery-ui", o.default);
    self.defineThemeSystem("bootstrap3", s.default);
    self.defineThemeSystem("bootstrap4", a.default);
  }, function(canCreateDiscussions, child, comparer) {
    Object.defineProperty(child, "__esModule", {
      value : true
    });
    var Util = comparer(2);
    var selected = comparer(19);
    var current = function(_super) {
      /**
       * @return {?}
       */
      function Editor() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      return Util.__extends(Editor, _super), Editor;
    }(selected.default);
    child.default = current;
    current.prototype.classes = {
      widget : "fc-bootstrap3",
      tableGrid : "table-bordered",
      tableList : "table",
      tableListHeading : "active",
      buttonGroup : "btn-group",
      button : "btn btn-default",
      stateActive : "active",
      stateDisabled : "disabled",
      today : "alert alert-info",
      popover : "panel panel-default",
      popoverHeader : "panel-heading",
      popoverContent : "panel-body",
      headerRow : "panel-default",
      dayRow : "panel-default",
      listView : "panel panel-default"
    };
    /** @type {string} */
    current.prototype.baseIconClass = "glyphicon";
    current.prototype.iconClasses = {
      close : "glyphicon-remove",
      prev : "glyphicon-chevron-left",
      next : "glyphicon-chevron-right",
      prevYear : "glyphicon-backward",
      nextYear : "glyphicon-forward"
    };
    /** @type {string} */
    current.prototype.iconOverrideOption = "bootstrapGlyphicons";
    /** @type {string} */
    current.prototype.iconOverrideCustomButtonOption = "bootstrapGlyphicon";
    /** @type {string} */
    current.prototype.iconOverridePrefix = "glyphicon-";
  }, function(canCreateDiscussions, child, comparer) {
    Object.defineProperty(child, "__esModule", {
      value : true
    });
    var Util = comparer(2);
    var selected = comparer(19);
    var current = function(_super) {
      /**
       * @return {?}
       */
      function Editor() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      return Util.__extends(Editor, _super), Editor;
    }(selected.default);
    child.default = current;
    current.prototype.classes = {
      widget : "fc-bootstrap4",
      tableGrid : "table-bordered",
      tableList : "table",
      tableListHeading : "table-active",
      buttonGroup : "btn-group",
      button : "btn btn-primary",
      stateActive : "active",
      stateDisabled : "disabled",
      today : "alert alert-info",
      popover : "card card-primary",
      popoverHeader : "card-header",
      popoverContent : "card-body",
      headerRow : "table-bordered",
      dayRow : "table-bordered",
      listView : "card card-primary"
    };
    /** @type {string} */
    current.prototype.baseIconClass = "fa";
    current.prototype.iconClasses = {
      close : "fa-times",
      prev : "fa-chevron-left",
      next : "fa-chevron-right",
      prevYear : "fa-angle-double-left",
      nextYear : "fa-angle-double-right"
    };
    /** @type {string} */
    current.prototype.iconOverrideOption = "bootstrapFontAwesome";
    /** @type {string} */
    current.prototype.iconOverrideCustomButtonOption = "bootstrapFontAwesome";
    /** @type {string} */
    current.prototype.iconOverridePrefix = "fa-";
  }, function(canCreateDiscussions, BeautifulProperties, require) {
    Object.defineProperty(BeautifulProperties, "__esModule", {
      value : true
    });
    var util = require(22);
    var schema = require(62);
    var conf = require(229);
    util.defineView("basic", {
      class : schema.default
    });
    util.defineView("basicDay", {
      type : "basic",
      duration : {
        days : 1
      }
    });
    util.defineView("basicWeek", {
      type : "basic",
      duration : {
        weeks : 1
      }
    });
    util.defineView("month", {
      class : conf.default,
      duration : {
        months : 1
      },
      defaults : {
        fixedWeekCount : true
      }
    });
  }, function(canCreateDiscussions, BeautifulProperties, require) {
    Object.defineProperty(BeautifulProperties, "__esModule", {
      value : true
    });
    var _ = require(22);
    var schema = require(226);
    _.defineView("agenda", {
      class : schema.default,
      defaults : {
        allDaySlot : true,
        slotDuration : "00:30:00",
        slotEventOverlap : true
      }
    });
    _.defineView("agendaDay", {
      type : "agenda",
      duration : {
        days : 1
      }
    });
    _.defineView("agendaWeek", {
      type : "agenda",
      duration : {
        weeks : 1
      }
    });
  }, function(canCreateDiscussions, BeautifulProperties, f) {
    Object.defineProperty(BeautifulProperties, "__esModule", {
      value : true
    });
    var test = f(22);
    var value = f(230);
    test.defineView("list", {
      class : value.default,
      buttonTextKey : "list",
      defaults : {
        buttonText : "list",
        listDayFormat : "LL",
        noEventsMessage : "No events to display"
      }
    });
    test.defineView("listDay", {
      type : "list",
      duration : {
        days : 1
      },
      defaults : {
        listDayFormat : "dddd"
      }
    });
    test.defineView("listWeek", {
      type : "list",
      duration : {
        weeks : 1
      },
      defaults : {
        listDayFormat : "dddd",
        listDayAltFormat : "LL"
      }
    });
    test.defineView("listMonth", {
      type : "list",
      duration : {
        month : 1
      },
      defaults : {
        listDayAltFormat : "dddd"
      }
    });
    test.defineView("listYear", {
      type : "list",
      duration : {
        year : 1
      },
      defaults : {
        listDayAltFormat : "dddd"
      }
    });
  }, function(canCreateDiscussions, BeautifulProperties) {
    Object.defineProperty(BeautifulProperties, "__esModule", {
      value : true
    });
  }]);
});
