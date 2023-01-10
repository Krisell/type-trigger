"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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
  _createClass(TypeTrigger, null, [{
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
  return TypeTrigger;
}();
var _default = TypeTrigger;
exports["default"] = _default;