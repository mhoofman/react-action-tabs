'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _compat = require('./compat');

var _TabBar = require('./TabBar');

var _TabBar2 = _interopRequireDefault(_TabBar);

var _TabContainer = require('./TabContainer');

var _TabContainer2 = _interopRequireDefault(_TabContainer);

var _TabOption = require('./TabOption');

var _TabOption2 = _interopRequireDefault(_TabOption);

var TabWidget = _react2['default'].createClass({
  displayName: 'TabWidget',
  propTypes: {
    allowMultiplePanels: _react2['default'].PropTypes.bool,
    className: _react2['default'].PropTypes.string,
    style: _react2['default'].PropTypes.object,
    children: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.element, _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.element)])
  },
  getInitialState: function getInitialState() {
    return {
      active: []
    };
  },
  onAction: function onAction(option) {
    if (option.props.action) {
      option.props.action.apply(null, Array.prototype.slice.call(arguments, 1));
    }
    var active = this.state.active;
    var optionIndex = _compat.indexOf(active, option.props.name);
    var alreadySelected = optionIndex > -1;
    if (this.props.allowMultiplePanels && !option.props.hideOtherPanels) {
      if (alreadySelected) {
        if (option.props.toggle) {
          active.splice(optionIndex, 1);
          this.setState({
            active: active
          });
        }
      } else {
        this.setState({
          active: active.concat(option.props.name)
        });
      }
    } else {
      this.setState({
        active: alreadySelected && option.props.toggle ? [] : [option.props.name]
      });
    }
  },
  getOptionsFromTabBar: function getOptionsFromTabBar(bar) {
    var _this = this;

    var options = [];
    _react2['default'].Children.forEach(bar.props.children, function (child) {
      if (child.type === _TabOption2['default']) {
        options.push(_react2['default'].cloneElement(child, { key: child.key || child.props.name, action: _this.onAction.bind(null, child) }));
      }
    });
    return options;
  },
  getTabBarElement: function getTabBarElement(originalBarElement) {
    return _react2['default'].cloneElement(originalBarElement, { key: originalBarElement.key || 'tabbar' }, this.getOptionsFromTabBar(originalBarElement));
  },
  getContainerElements: function getContainerElements() {
    var _this2 = this;

    var containerElements = [];
    _react2['default'].Children.forEach(this.props.children, function (child) {
      containerElements.push(child.type === _TabBar2['default'] ? _this2.getTabBarElement(child) : _react2['default'].cloneElement(child, { key: child.key || child.props.name }));
    }, this);
    return containerElements;
  },
  render: function render() {
    return _react2['default'].createElement(
      _TabContainer2['default'],
      {
        className: this.props.className,
        active: this.state.active,
        style: this.props.style
      },
      this.getContainerElements()
    );
  }
});

exports['default'] = TabWidget;
module.exports = exports['default'];