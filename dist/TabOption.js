'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Styles = require('./Styles');

var _Styles2 = _interopRequireDefault(_Styles);

var defaultStyle = _Styles2['default'].TabOption;

var TabOption = _react2['default'].createClass({
  displayName: 'TabOption',
  propTypes: {
    name: _react2['default'].PropTypes.string.isRequired,
    action: _react2['default'].PropTypes.func,
    className: _react2['default'].PropTypes.string,
    active: _react2['default'].PropTypes.bool,
    style: _react2['default'].PropTypes.object,
    noActivePassthrough: _react2['default'].PropTypes.bool,
    children: _react2['default'].PropTypes.element
  },
  getBaseStyles: function getBaseStyles() {
    return this.props.style || _Styles2['default'].merge([defaultStyle.base, this.props.active && defaultStyle.active]);
  },
  onClick: function onClick(e) {
    e.preventDefault();
    if (this.props.action) {
      this.props.action.apply(null, arguments);
    }
  },
  renderChild: function renderChild() {
    var child = _react2['default'].Children.only(this.props.children);
    var childProps = {};
    if (this.props.active && !this.props.noActivePassthrough) {
      childProps.active = true;
    }
    return _react2['default'].cloneElement(child, childProps);
  },
  render: function render() {
    return _react2['default'].createElement(
      'li',
      { className: this.props.className, style: this.getBaseStyles() },
      _react2['default'].createElement(
        'a',
        { href: '#', style: defaultStyle.link, onClick: this.onClick },
        _react2['default'].Children.count(this.props.children) > 0 && this.renderChild() || this.props.name
      )
    );
  }
});

exports['default'] = TabOption;
module.exports = exports['default'];