'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var extend = require('deep-extend');

var Representation = require('./representation');

var Recording = (function (_Representation) {
  _inherits(Recording, _Representation);

  function Recording(client, item) {
    _classCallCheck(this, Recording);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Recording).call(this, client));

    extend(_this, item);

    _this.type = 'recording';

    _this.unavailableMethods = ['save'];
    _this.unavailableMethods.forEach(function (method) {
      return _this[method] = undefined;
    });

    return _this;
  }

  return Recording;
})(Representation);

module.exports = Recording;