'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ActionTabs = require('./ActionTabs');

var Xyz = _react2['default'].createClass({
  displayName: 'Xyz',
  propTypes: {
    active: _react2['default'].PropTypes.bool,
    children: _react2['default'].PropTypes.any
  },
  render: function render() {
    var style = {};
    if (this.props.active) {
      style.borderRight = '1px solid green';
      style.borderBottom = '1px solid red';
    }
    return _react2['default'].createElement(
      'span',
      { style: style },
      this.props.children
    );
  }
});

var App = (function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    _Component.apply(this, arguments);
  }

  App.prototype.render = function render() {
    return _react2['default'].createElement(
      _ActionTabs.TabWidget,
      null,
      _react2['default'].createElement(
        _ActionTabs.TabBar,
        null,
        _react2['default'].createElement(_ActionTabs.TabOption, { className: 'custom-option', name: 'abc', action: function () {
            console.debug('action');
          } }),
        _react2['default'].createElement(
          _ActionTabs.TabOption,
          { name: 'xyz', action: function () {
              console.debug('action on child click');
            } },
          _react2['default'].createElement(
            'span',
            null,
            _react2['default'].createElement(
              'span',
              { className: 'fi-plus' },
              ' '
            ),
            'Plus'
          )
        ),
        _react2['default'].createElement(_ActionTabs.TabOption, { name: 'click-no-panel' }),
        _react2['default'].createElement(
          _ActionTabs.TabOption,
          { name: 'xyzzy', action: function () {
              console.debug('xyzzy');
            } },
          _react2['default'].createElement(
            Xyz,
            null,
            '[XyzzY]'
          )
        )
      ),
      _react2['default'].createElement(
        _ActionTabs.TabPanel,
        { name: 'abc' },
        _react2['default'].createElement(
          'div',
          { style: {
              minWidth: 400,
              minHeight: 120,
              border: '1px solid black',
              borderRadius: '10px'
            } },
          'Hello I\'m Here'
        )
      ),
      _react2['default'].createElement(
        _ActionTabs.TabPanel,
        { name: 'xyz' },
        _react2['default'].createElement(
          'div',
          null,
          'XYZ Content'
        )
      ),
      _react2['default'].createElement(
        _ActionTabs.TabPanel,
        { name: 'xyzzy' },
        _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'div',
            { style: { float: 'left', border: '5px solid #ddcccc', borderRadius: 20, padding: 10, width: 50 } },
            'FLOAT BLOCK'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'Lorem ipsum dolor sit amet, vix at atqui eligendi legendos, in eam brute tollit. Nihil vocibus inciderint ea pri, ei ignota accusamus salutatus eum. Has no quot iudico, ei elit deserunt qui. Vel ut nulla quando molestie. Vocent laboramus et sea, et pro graeco eirmod ceteros.'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'Cum ea ullum quando antiopam, cu qui stet magna necessitatibus, duo in epicuri recteque petentium. Volutpat intellegat ea nam, mentitum disputationi per ea, purto dicant ut mea. Sea insolens perpetua periculis an, id est omittam pertinacia voluptatum, duo ei rebum putant. Mea te ipsum malorum partiendo, ut velit intellegebat ius, eos ea saepe vituperatoribus. Vel iriure postulant te. Ocurreret appellantur at eum, paulo eruditi iudicabit sed cu, ut qui minim simul appareat.'
          )
        )
      )
    );
  };

  return App;
})(_react.Component);

exports['default'] = App;

App.displayName = 'App';
module.exports = exports['default'];