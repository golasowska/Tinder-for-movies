webpackHotUpdate(0,{

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(75);

var _react2 = _interopRequireDefault(_react);

var _DisplayMovie = __webpack_require__(219);

var _DisplayMovie2 = _interopRequireDefault(_DisplayMovie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var url = 'http://localhost:3000/movies';

var FetchMovie = function (_React$Component) {
  _inherits(FetchMovie, _React$Component);

  function FetchMovie(props) {
    _classCallCheck(this, FetchMovie);

    var _this = _possibleConstructorReturn(this, (FetchMovie.__proto__ || Object.getPrototypeOf(FetchMovie)).call(this, props));

    _this.componentDidMount = function () {
      console.log('mounted');
      _this.FetchMovies();
      _this.FetchLength();
    };

    _this.FetchLength = function () {
      return fetch(url).then(function (r) {
        return r.json();
      }).then(function (datas) {
        _this.setState({
          datas: datas,
          length: datas.length
        });
        console.log('length', _this.state.length);
      });
    };

    _this.FetchMovies = function () {
      console.log(url);
      return fetch(url).then(function (r) {
        return r.json();
      }).then(function (data) {
        console.log('movie data', data);
        console.log('state w konstruktorze', _this.state.index);
        _this.setState({
          data: data[_this.state.index]
        });
      });
    };

    _this.handleAccept = function () {
      var index = _this.state.index;
      index = index.toString().slice();
      var counter = parseInt(index);
      counter++;
      _this.setState({
        index: counter
      });
      _this.FetchMovies();
      console.log('updated state', _this.state.index);
    };

    _this.handleReject = function () {
      var index = _this.state.index;
      index = index.toString().slice();
      var counter = parseInt(index);
      counter++;
      _this.setState({
        index: counter
      });
      _this.FetchMovies();
      console.log('updated state', _this.state.index);
    };

    _this.renderMyMovie = function () {
      console.log('thisStateData', _this.state.data);
      if (_this.state.index >= _this.state.length) {
        return _react2.default.createElement(
          'h2',
          null,
          'Baza pusta!!!!'
        );
      } else {
        return _react2.default.createElement(_DisplayMovie2.default, { key: _this.state.data.id, data: _this.state.data, handleAccept: _this.handleAccept, handleReject: _this.handleReject });
      }
    };

    _this.state = {
      data: [],
      index: 0,
      length: 0
    };
    return _this;
  }

  _createClass(FetchMovie, [{
    key: 'render',
    value: function render() {
      console.log('to jest this', this); //this odnosi sie do komponentu
      return _react2.default.createElement(
        'div',
        null,
        this.renderMyMovie()
      );
    }
  }]);

  return FetchMovie;
}(_react2.default.Component);

exports.default = FetchMovie;

/***/ })

})