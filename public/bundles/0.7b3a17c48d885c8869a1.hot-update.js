webpackHotUpdate(0,{

/***/ 508:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactMaterialize = __webpack_require__(240);

var _reactRouterDom = __webpack_require__(95);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavBar = function NavBar(props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _reactMaterialize.Navbar,
      { className: 'navbar-logged-out', right: true },
      _react2.default.createElement(
        _reactMaterialize.NavItem,
        null,
        _react2.default.createElement(
          _reactRouterDom.Link,
          {
            to: '/about',
            onClick: function onClick() {
              props.history.push('/about');
            }
          },
          _react2.default.createElement(
            'span',
            { className: 'about-link' },
            'About'
          )
        )
      ),
      _react2.default.createElement(
        _reactMaterialize.NavItem,
        null,
        _react2.default.createElement(
          _reactRouterDom.Link,
          {
            to: '/contact',
            onClick: function onClick() {
              props.history.push('/contact');
            }
          },
          _react2.default.createElement(
            'span',
            { className: 'contact-link' },
            'Contact'
          )
        )
      )
    )
  );
};

exports.default = NavBar;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvc3JjL2NvbXBvbmVudHMvTmF2QmFyL05hdkJhci5qc3giXSwibmFtZXMiOlsiTmF2QmFyIiwicHJvcHMiLCJoaXN0b3J5IiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUVBLElBQU1BLFNBQVMsU0FBVEEsTUFBUyxDQUFDQyxLQUFEO0FBQUEsU0FDYjtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsUUFBUSxXQUFVLG1CQUFsQixFQUFzQyxXQUF0QztBQUVFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFLGdCQUFHLFFBREw7QUFFRSxxQkFBUyxtQkFBTTtBQUNiQSxvQkFBTUMsT0FBTixDQUFjQyxJQUFkLENBQW1CLFFBQW5CO0FBQ0Q7QUFKSDtBQU1FO0FBQUE7QUFBQSxjQUFNLFdBQVUsWUFBaEI7QUFBQTtBQUFBO0FBTkY7QUFERixPQUZGO0FBYUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0UsZ0JBQUcsVUFETDtBQUVFLHFCQUFTLG1CQUFNO0FBQ2JGLG9CQUFNQyxPQUFOLENBQWNDLElBQWQsQ0FBbUIsVUFBbkI7QUFDRDtBQUpIO0FBTUU7QUFBQTtBQUFBLGNBQU0sV0FBVSxjQUFoQjtBQUFBO0FBQUE7QUFORjtBQURGO0FBYkY7QUFERixHQURhO0FBQUEsQ0FBZjs7a0JBNkJlSCxNIiwiZmlsZSI6IjAuN2IzYTE3YzQ4ZDg4NWM4ODY5YTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTaWRlTmF2LCBOYXZiYXIsIE5hdkl0ZW0gfSBmcm9tICdyZWFjdC1tYXRlcmlhbGl6ZSc7XG5pbXBvcnQgeyBMaW5rLCBSb3V0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5jb25zdCBOYXZCYXIgPSAocHJvcHMpID0+IChcbiAgPGRpdj5cbiAgICA8TmF2YmFyIGNsYXNzTmFtZT1cIm5hdmJhci1sb2dnZWQtb3V0XCIgcmlnaHQ+XG5cbiAgICAgIDxOYXZJdGVtPlxuICAgICAgICA8TGlua1xuICAgICAgICAgIHRvPVwiL2Fib3V0XCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBwcm9wcy5oaXN0b3J5LnB1c2goJy9hYm91dCcpO1xuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhYm91dC1saW5rXCI+QWJvdXQ8L3NwYW4+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvTmF2SXRlbT5cblxuICAgICAgPE5hdkl0ZW0+XG4gICAgICAgIDxMaW5rXG4gICAgICAgICAgdG89XCIvY29udGFjdFwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgcHJvcHMuaGlzdG9yeS5wdXNoKCcvY29udGFjdCcpO1xuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250YWN0LWxpbmtcIj5Db250YWN0PC9zcGFuPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L05hdkl0ZW0+XG4gICAgPC9OYXZiYXI+XG4gIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBOYXZCYXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvc3JjL2NvbXBvbmVudHMvTmF2QmFyL05hdkJhci5qc3giXSwic291cmNlUm9vdCI6IiJ9