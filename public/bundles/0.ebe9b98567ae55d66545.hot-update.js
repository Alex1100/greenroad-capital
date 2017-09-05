webpackHotUpdate(0,{

/***/ 507:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactMaterialize = __webpack_require__(139);

var _reactRouterDom = __webpack_require__(95);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavBar = function NavBar(props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _reactMaterialize.Navbar,
      { className: 'navbar-logged-out', brand: _react2.default.createElement(
          _reactMaterialize.NavItem,
          null,
          _react2.default.createElement('img', { src: '../../.././assets/images/GreenRoadCapitalLogoNavbar.png', width: '5', height: '5' })
        ) },
      _react2.default.createElement(
        _reactRouterDom.Link,
        {
          to: '/',
          onClick: function onClick() {
            props.history.push('/');
          }
        },
        _react2.default.createElement(
          _reactMaterialize.NavItem,
          { className: 'nav-logo' },
          _react2.default.createElement('img', { src: '' })
        )
      ),
      _react2.default.createElement(
        _reactRouterDom.Link,
        {
          to: '/about',
          onClick: function onClick() {
            props.history.push('/about');
          }
        },
        _react2.default.createElement(
          _reactMaterialize.NavItem,
          { className: 'about-link' },
          'About'
        )
      ),
      _react2.default.createElement(
        _reactRouterDom.Link,
        {
          to: '/contact',
          onClick: function onClick() {
            props.history.push('/contact');
          }
        },
        _react2.default.createElement(
          _reactMaterialize.NavItem,
          { className: 'contact-link' },
          'Contact'
        )
      )
    )
  );
};

exports.default = NavBar;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvc3JjL2NvbXBvbmVudHMvTmF2QmFyL05hdkJhci5qc3giXSwibmFtZXMiOlsiTmF2QmFyIiwicHJvcHMiLCJoaXN0b3J5IiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUVBLElBQU1BLFNBQVMsU0FBVEEsTUFBUyxDQUFDQyxLQUFEO0FBQUEsU0FDYjtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsUUFBUSxXQUFVLG1CQUFsQixFQUFzQyxPQUFPO0FBQUE7QUFBQTtBQUFTLGlEQUFLLEtBQUkseURBQVQsRUFBbUUsT0FBTSxHQUF6RSxFQUE2RSxRQUFPLEdBQXBGO0FBQVQsU0FBN0M7QUFDRTtBQUFBO0FBQUE7QUFDRSxjQUFHLEdBREw7QUFFRSxtQkFBUyxtQkFBTTtBQUNiQSxrQkFBTUMsT0FBTixDQUFjQyxJQUFkLENBQW1CLEdBQW5CO0FBQ0Q7QUFKSDtBQU1FO0FBQUE7QUFBQSxZQUFTLFdBQVUsVUFBbkI7QUFDRSxpREFBSyxLQUFJLEVBQVQ7QUFERjtBQU5GLE9BREY7QUFZRTtBQUFBO0FBQUE7QUFDRSxjQUFHLFFBREw7QUFFRSxtQkFBUyxtQkFBTTtBQUNiRixrQkFBTUMsT0FBTixDQUFjQyxJQUFkLENBQW1CLFFBQW5CO0FBQ0Q7QUFKSDtBQU1FO0FBQUE7QUFBQSxZQUFTLFdBQVUsWUFBbkI7QUFBQTtBQUFBO0FBTkYsT0FaRjtBQXVCRTtBQUFBO0FBQUE7QUFDRSxjQUFHLFVBREw7QUFFRSxtQkFBUyxtQkFBTTtBQUNiRixrQkFBTUMsT0FBTixDQUFjQyxJQUFkLENBQW1CLFVBQW5CO0FBQ0Q7QUFKSDtBQU1FO0FBQUE7QUFBQSxZQUFTLFdBQVUsY0FBbkI7QUFBQTtBQUFBO0FBTkY7QUF2QkY7QUFERixHQURhO0FBQUEsQ0FBZjs7a0JBdUNlSCxNIiwiZmlsZSI6IjAuZWJlOWI5ODU2N2FlNTVkNjY1NDUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTaWRlTmF2LCBOYXZiYXIsIE5hdkl0ZW0gfSBmcm9tICdyZWFjdC1tYXRlcmlhbGl6ZSc7XG5pbXBvcnQgeyBMaW5rLCBSb3V0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5jb25zdCBOYXZCYXIgPSAocHJvcHMpID0+IChcbiAgPGRpdj5cbiAgICA8TmF2YmFyIGNsYXNzTmFtZT1cIm5hdmJhci1sb2dnZWQtb3V0XCIgYnJhbmQ9ezxOYXZJdGVtPjxpbWcgc3JjPVwiLi4vLi4vLi4vLi9hc3NldHMvaW1hZ2VzL0dyZWVuUm9hZENhcGl0YWxMb2dvTmF2YmFyLnBuZ1wiIHdpZHRoPVwiNVwiIGhlaWdodD1cIjVcIi8+PC9OYXZJdGVtPn0+XG4gICAgICA8TGlua1xuICAgICAgICB0bz1cIi9cIlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgcHJvcHMuaGlzdG9yeS5wdXNoKCcvJyk7XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxOYXZJdGVtIGNsYXNzTmFtZT1cIm5hdi1sb2dvXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCJcIiAvPlxuICAgICAgICA8L05hdkl0ZW0+XG4gICAgICA8L0xpbms+XG5cbiAgICAgIDxMaW5rXG4gICAgICAgIHRvPVwiL2Fib3V0XCJcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgIHByb3BzLmhpc3RvcnkucHVzaCgnL2Fib3V0Jyk7XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxOYXZJdGVtIGNsYXNzTmFtZT1cImFib3V0LWxpbmtcIj5cbiAgICAgICAgICBBYm91dFxuICAgICAgICA8L05hdkl0ZW0+XG4gICAgICA8L0xpbms+XG5cbiAgICAgIDxMaW5rXG4gICAgICAgIHRvPVwiL2NvbnRhY3RcIlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgcHJvcHMuaGlzdG9yeS5wdXNoKCcvY29udGFjdCcpO1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8TmF2SXRlbSBjbGFzc05hbWU9XCJjb250YWN0LWxpbmtcIj5cbiAgICAgICAgICBDb250YWN0XG4gICAgICAgIDwvTmF2SXRlbT5cbiAgICAgIDwvTGluaz5cbiAgICA8L05hdmJhcj5cbiAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IE5hdkJhcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9zcmMvY29tcG9uZW50cy9OYXZCYXIvTmF2QmFyLmpzeCJdLCJzb3VyY2VSb290IjoiIn0=