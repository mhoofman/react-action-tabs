'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Styles = require('./Styles');

var _Styles2 = _interopRequireDefault(_Styles);

var _TabOption = require('./TabOption');

var _TabOption2 = _interopRequireDefault(_TabOption);

var TabBar = _react2['default'].createClass({
  displayName: 'TabBar',
  propTypes: {
    children: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.element), _react2['default'].PropTypes.element]),
    className: _react2['default'].PropTypes.string,
    style: _react2['default'].PropTypes.object,
    active: _react2['default'].PropTypes.array.isRequired
  },
  getDefaultProps: function getDefaultProps() {
    return {
      active: []
    };
  },
  isOption: function isOption(component) {
    return component.type === _TabOption2['default'];
  },
  isOptionSelected: function isOptionSelected(optionName) {
    var active = this.props.active;
    for (var i = 0, len = active.length; i < len; i++) {
      if (active[i] === optionName) {
        return true;
      }
    }
    return false;
  },
  render: function render() {
    var _this = this;

    return _react2['default'].createElement(
      'ul',
      { style: this.props.style || _Styles2['default'].TabBar.base, className: this.props.className },
      _react2['default'].Children.map(this.props.children, function (child) {
        if (_this.isOption(child)) {
          return _react2['default'].cloneElement(child, _this.isOptionSelected(child.props.name) ? { active: true } : {});
        } else {
          return false;
        }
      }, this)
    );
  }
});

exports['default'] = TabBar;
module.exports = exports['default'];