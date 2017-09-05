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
          _react2.default.createElement('img', { src: '' })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvc3JjL2NvbXBvbmVudHMvTmF2QmFyL05hdkJhci5qc3giXSwibmFtZXMiOlsiTmF2QmFyIiwicHJvcHMiLCJoaXN0b3J5IiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUVBLElBQU1BLFNBQVMsU0FBVEEsTUFBUyxDQUFDQyxLQUFEO0FBQUEsU0FDYjtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsUUFBUSxXQUFVLG1CQUFsQixFQUFzQyxPQUFPO0FBQUE7QUFBQTtBQUFTLGlEQUFLLEtBQUksRUFBVDtBQUFULFNBQTdDO0FBQ0U7QUFBQTtBQUFBO0FBQ0UsY0FBRyxHQURMO0FBRUUsbUJBQVMsbUJBQU07QUFDYkEsa0JBQU1DLE9BQU4sQ0FBY0MsSUFBZCxDQUFtQixHQUFuQjtBQUNEO0FBSkg7QUFNRTtBQUFBO0FBQUEsWUFBUyxXQUFVLFVBQW5CO0FBQ0UsaURBQUssS0FBSSxFQUFUO0FBREY7QUFORixPQURGO0FBWUU7QUFBQTtBQUFBO0FBQ0UsY0FBRyxRQURMO0FBRUUsbUJBQVMsbUJBQU07QUFDYkYsa0JBQU1DLE9BQU4sQ0FBY0MsSUFBZCxDQUFtQixRQUFuQjtBQUNEO0FBSkg7QUFNRTtBQUFBO0FBQUEsWUFBUyxXQUFVLFlBQW5CO0FBQUE7QUFBQTtBQU5GLE9BWkY7QUF1QkU7QUFBQTtBQUFBO0FBQ0UsY0FBRyxVQURMO0FBRUUsbUJBQVMsbUJBQU07QUFDYkYsa0JBQU1DLE9BQU4sQ0FBY0MsSUFBZCxDQUFtQixVQUFuQjtBQUNEO0FBSkg7QUFNRTtBQUFBO0FBQUEsWUFBUyxXQUFVLGNBQW5CO0FBQUE7QUFBQTtBQU5GO0FBdkJGO0FBREYsR0FEYTtBQUFBLENBQWY7O2tCQXVDZUgsTSIsImZpbGUiOiIwLjNiMTc0MWJhYjZmZTFhODE1MTVhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU2lkZU5hdiwgTmF2YmFyLCBOYXZJdGVtIH0gZnJvbSAncmVhY3QtbWF0ZXJpYWxpemUnO1xuaW1wb3J0IHsgTGluaywgUm91dGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuY29uc3QgTmF2QmFyID0gKHByb3BzKSA9PiAoXG4gIDxkaXY+XG4gICAgPE5hdmJhciBjbGFzc05hbWU9XCJuYXZiYXItbG9nZ2VkLW91dFwiIGJyYW5kPXs8TmF2SXRlbT48aW1nIHNyYz1cIlwiIC8+PC9OYXZJdGVtPn0+XG4gICAgICA8TGlua1xuICAgICAgICB0bz1cIi9cIlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgcHJvcHMuaGlzdG9yeS5wdXNoKCcvJyk7XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxOYXZJdGVtIGNsYXNzTmFtZT1cIm5hdi1sb2dvXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCJcIiAvPlxuICAgICAgICA8L05hdkl0ZW0+XG4gICAgICA8L0xpbms+XG5cbiAgICAgIDxMaW5rXG4gICAgICAgIHRvPVwiL2Fib3V0XCJcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgIHByb3BzLmhpc3RvcnkucHVzaCgnL2Fib3V0Jyk7XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxOYXZJdGVtIGNsYXNzTmFtZT1cImFib3V0LWxpbmtcIj5cbiAgICAgICAgICBBYm91dFxuICAgICAgICA8L05hdkl0ZW0+XG4gICAgICA8L0xpbms+XG5cbiAgICAgIDxMaW5rXG4gICAgICAgIHRvPVwiL2NvbnRhY3RcIlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgcHJvcHMuaGlzdG9yeS5wdXNoKCcvY29udGFjdCcpO1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8TmF2SXRlbSBjbGFzc05hbWU9XCJjb250YWN0LWxpbmtcIj5cbiAgICAgICAgICBDb250YWN0XG4gICAgICAgIDwvTmF2SXRlbT5cbiAgICAgIDwvTGluaz5cbiAgICA8L05hdmJhcj5cbiAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IE5hdkJhcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9zcmMvY29tcG9uZW50cy9OYXZCYXIvTmF2QmFyLmpzeCJdLCJzb3VyY2VSb290IjoiIn0=