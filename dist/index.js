"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var isInitialized = false;
var entries = [];
var keypress = function keypress(key) {
  for (var _i = 0, _entries = entries; _i < _entries.length; _i++) {
    var entry = _entries[_i];
    if (entry.word[entry.progress] !== key) {
      entry.progress = 0;
    }
    if (entry.word[entry.progress] === key) {
      entry.progress += 1;
      if (entry.progress >= entry.word.length) {
        entry.progress = 0;
        if (typeof entry.cb === 'function') {
          entry.cb();
        }
      }
    }
  }
};
var TypeTrigger = /*#__PURE__*/function () {
  function TypeTrigger() {
    _classCallCheck(this, TypeTrigger);
  }
  return _createClass(TypeTrigger, null, [{
    key: "type",
    value:
    // This is mainly used for testing, but could be useful in application code as well
    function type(word) {
      word.split('').forEach(function (character) {
        keypress(character);
      });
    }
  }, {
    key: "register",
    value: function register(word, cb) {
      if (!isInitialized) {
        window.document.addEventListener('keypress', function (e) {
          keypress(e.key);
        });
        isInitialized = true;
      }
      entries.push({
        word: word,
        cb: cb,
        progress: 0
      });
    }
  }]);
}();
var _default = exports["default"] = TypeTrigger;