'use strict';

exports.__esModule = true;

var _compat = require('./compat');

var merge = function merge() {
  var currentStyle,
      mergedStyles = {};
  for (var i = 0, len = arguments.length; i < len; i++) {
    currentStyle = arguments[i];
    if (_compat.isArray(currentStyle)) {
      currentStyle = merge.apply(null, currentStyle);
    }
    if (typeof currentStyle === 'object') {
      for (var style in currentStyle) {
        if (currentStyle.hasOwnProperty(style)) {
          mergedStyles[style] = currentStyle[style];
        }
      }
    }
  }
  return mergedStyles;
};

exports['default'] = {
  merge: merge,
  TabBar: {
    base: {
      listStyleType: 'none',
      textAlign: 'center',
      margin: 0,
      padding: 0
    }
  },
  TabOption: {
    base: {
      margin: '0 5px',
      display: 'inline'
    },
    active: {
      borderRadius: 15,
      borderBottom: '3px solid #ff0000'
    },
    link: {
      textDecoration: 'inherit',
      color: 'inherit'
    }
  }
};
module.exports = exports['default'];