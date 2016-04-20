'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _compat = require('./compat');

var _TabBar = require('./TabBar');

var _TabBar2 = _interopRequireDefault(_TabBar);

var _TabPanel = require('./TabPanel');

var _TabPanel2 = _interopRequireDefault(_TabPanel);

var TabContainer = _react2['default'].createClass({
  displayName: 'TabContainer',
  propTypes: {
    active: _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.string),
    className: _react2['default'].PropTypes.string,
    style: _react2['default'].PropTypes.object,
    children: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.element, _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.element)])
  },
  isActive: function isActive(name) {
    return _compat.indexOf(this.props.active || [], name) > -1;
  },
  getValidChildren: function getValidChildren() {
    var children = {
      bar: undefined,
      panels: []
    };
    _react2['default'].Children.forEach(this.props.children, function (child) {
      if (child.type === _TabBar2['default']) {
        children.bar = child;
      }
      if (child.type === _TabPanel2['default']) {
        children.panels.push(child);
      }
    });
    return children;
  },
  getVisiblePanels: function getVisiblePanels(active, panels) {
    var _this = this;

    return _compat.filter(panels, function (i) {
      return _this.isActive(i.props.name);
    });
  },
  render: function render() {
    var children = this.getValidChildren();
    return _react2['default'].createElement(
      'div',
      { className: this.props.className, style: this.props.style },
      children.bar && _react2['default'].cloneElement(children.bar, { active: this.props.active }),
      this.getVisiblePanels(this.props.active, children.panels)
    );
  }
});

exports['default'] = TabContainer;
module.exports = exports['default'];