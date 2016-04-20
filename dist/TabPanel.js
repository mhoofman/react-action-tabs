'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var TabPanel = _react2['default'].createClass({
  displayName: 'TabPanel',
  propTypes: {
    className: _react2['default'].PropTypes.string,
    style: _react2['default'].PropTypes.object,
    children: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.element, _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.element)])
  },
  render: function render() {
    return _react2['default'].createElement(
      'div',
      { className: this.props.className, style: this.props.style },
      this.props.children
    );
  }

});

exports['default'] = TabPanel;
module.exports = exports['default'];