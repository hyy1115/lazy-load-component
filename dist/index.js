"use strict";
var _createClass = (function() {
        function a(b, c) {
            for (var e, d = 0; d < c.length; d++)
                (e = c[d]),
                    (e.enumerable = e.enumerable || !1),
                    (e.configurable = !0),
                "value" in e && (e.writable = !0),
                    Object.defineProperty(b, e.key, e);
        }
        return function(b, c, d) {
            return c && a(b.prototype, c), d && a(b, d), b;
        };
    })(),
    _react = require("react"),
    _react2 = _interopRequireDefault(_react);
Object.defineProperty(exports, "__esModule", { value: !0 });
function _interopRequireDefault(a) {
    return a && a.__esModule ? a : { default: a };
}
function _classCallCheck(a, b) {
    if (!(a instanceof b))
        throw new TypeError("Cannot call a class as a function");
}
function _possibleConstructorReturn(a, b) {
    if (!a)
        throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
        );
    return b && ("object" == typeof b || "function" == typeof b) ? b : a;
}
function _inherits(a, b) {
    if ("function" != typeof b && null !== b)
        throw new TypeError(
            "Super expression must either be null or a function, not " + typeof b
        );
    (a.prototype = Object.create(b && b.prototype, {
        constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 }
    })),
    b &&
    (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : (a.__proto__ = b));
}
var lazyLoadComponent = function(a) {
    return (function(b) {
        function c(d) {
            _classCallCheck(this, c);
            var e = _possibleConstructorReturn(
                this,
                (c.__proto__ || Object.getPrototypeOf(c)).call(this, d)
            );
            return (e.state = { Component: null }), e;
        }
        return (
            _inherits(c, b),
                _createClass(c, [
                    {
                        key: "componentWillMount",
                        value: function componentWillMount() {
                            var d = this;
                            a()
                            .then(function(e) {
                                return e.default;
                            })
                            .then(function(e) {
                                if (!e)
                                    throw Error(
                                        "React \u7EC4\u4EF6\u5FC5\u987B\u6709\u4E00\u4E2Adefault\u7684\u5BFC\u51FA\u3002"
                                    );
                                d.setState(function() {
                                    return { Component: e };
                                });
                            });
                        }
                    },
                    {
                        key: "render",
                        value: function render() {
                            var d = this.state.Component;
                            return d ? _react2.default.createElement(d, this.props) : null;
                        }
                    }
                ]),
                c
        );
    })(_react2.default.Component);
};
exports.default = lazyLoadComponent;
