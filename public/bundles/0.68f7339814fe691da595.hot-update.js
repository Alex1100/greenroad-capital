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
      { className: 'navbar-logged-out', brand: _react2.default.createElement('img', { src: '../../.././assets/images/GreenRoadCapitalLogoNavbar.png', className: 'top-logo' }), right: true },
      _react2.default.createElement(
        _reactMaterialize.NavItem,
        null,
        _react2.default.createElement(_reactRouterDom.Link, {
          to: '/',
          onClick: function onClick() {
            props.history.push('/');
          }
        })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvc3JjL2NvbXBvbmVudHMvTmF2QmFyL05hdkJhci5qc3giXSwibmFtZXMiOlsiTmF2QmFyIiwicHJvcHMiLCJoaXN0b3J5IiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUVBLElBQU1BLFNBQVMsU0FBVEEsTUFBUyxDQUFDQyxLQUFEO0FBQUEsU0FDYjtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsUUFBUSxXQUFVLG1CQUFsQixFQUFzQyxPQUFPLHVDQUFLLEtBQUkseURBQVQsRUFBbUUsV0FBVSxVQUE3RSxHQUE3QyxFQUF3SSxXQUF4STtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQ0UsY0FBRyxHQURMO0FBRUUsbUJBQVMsbUJBQU07QUFDYkEsa0JBQU1DLE9BQU4sQ0FBY0MsSUFBZCxDQUFtQixHQUFuQjtBQUNEO0FBSkg7QUFERixPQURGO0FBV0U7QUFBQTtBQUFBO0FBQ0UsY0FBRyxRQURMO0FBRUUsbUJBQVMsbUJBQU07QUFDYkYsa0JBQU1DLE9BQU4sQ0FBY0MsSUFBZCxDQUFtQixRQUFuQjtBQUNEO0FBSkg7QUFNRTtBQUFBO0FBQUEsWUFBUyxXQUFVLFlBQW5CO0FBQUE7QUFBQTtBQU5GLE9BWEY7QUFzQkU7QUFBQTtBQUFBO0FBQ0UsY0FBRyxVQURMO0FBRUUsbUJBQVMsbUJBQU07QUFDYkYsa0JBQU1DLE9BQU4sQ0FBY0MsSUFBZCxDQUFtQixVQUFuQjtBQUNEO0FBSkg7QUFNRTtBQUFBO0FBQUEsWUFBUyxXQUFVLGNBQW5CO0FBQUE7QUFBQTtBQU5GO0FBdEJGO0FBREYsR0FEYTtBQUFBLENBQWY7O2tCQXNDZUgsTSIsImZpbGUiOiIwLjY4ZjczMzk4MTRmZTY5MWRhNTk1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU2lkZU5hdiwgTmF2YmFyLCBOYXZJdGVtIH0gZnJvbSAncmVhY3QtbWF0ZXJpYWxpemUnO1xuaW1wb3J0IHsgTGluaywgUm91dGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuY29uc3QgTmF2QmFyID0gKHByb3BzKSA9PiAoXG4gIDxkaXY+XG4gICAgPE5hdmJhciBjbGFzc05hbWU9XCJuYXZiYXItbG9nZ2VkLW91dFwiIGJyYW5kPXs8aW1nIHNyYz1cIi4uLy4uLy4uLy4vYXNzZXRzL2ltYWdlcy9HcmVlblJvYWRDYXBpdGFsTG9nb05hdmJhci5wbmdcIiBjbGFzc05hbWU9XCJ0b3AtbG9nb1wiLz59IHJpZ2h0PlxuICAgICAgPE5hdkl0ZW0+XG4gICAgICAgIDxMaW5rXG4gICAgICAgICAgdG89XCIvXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBwcm9wcy5oaXN0b3J5LnB1c2goJy8nKTtcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICA8L0xpbms+XG4gICAgPC9OYXZJdGVtPlxuXG4gICAgICA8TGlua1xuICAgICAgICB0bz1cIi9hYm91dFwiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICBwcm9wcy5oaXN0b3J5LnB1c2goJy9hYm91dCcpO1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8TmF2SXRlbSBjbGFzc05hbWU9XCJhYm91dC1saW5rXCI+XG4gICAgICAgICAgQWJvdXRcbiAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgPC9MaW5rPlxuXG4gICAgICA8TGlua1xuICAgICAgICB0bz1cIi9jb250YWN0XCJcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgIHByb3BzLmhpc3RvcnkucHVzaCgnL2NvbnRhY3QnKTtcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPE5hdkl0ZW0gY2xhc3NOYW1lPVwiY29udGFjdC1saW5rXCI+XG4gICAgICAgICAgQ29udGFjdFxuICAgICAgICA8L05hdkl0ZW0+XG4gICAgICA8L0xpbms+XG4gICAgPC9OYXZiYXI+XG4gIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBOYXZCYXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvc3JjL2NvbXBvbmVudHMvTmF2QmFyL05hdkJhci5qc3giXSwic291cmNlUm9vdCI6IiJ9