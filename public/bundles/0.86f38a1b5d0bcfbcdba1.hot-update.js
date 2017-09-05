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
          _react2.default.createElement('img', { src: '', width: '50', height: '50' })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvc3JjL2NvbXBvbmVudHMvTmF2QmFyL05hdkJhci5qc3giXSwibmFtZXMiOlsiTmF2QmFyIiwicHJvcHMiLCJoaXN0b3J5IiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUVBLElBQU1BLFNBQVMsU0FBVEEsTUFBUyxDQUFDQyxLQUFEO0FBQUEsU0FDYjtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsUUFBUSxXQUFVLG1CQUFsQixFQUFzQyxPQUFPO0FBQUE7QUFBQTtBQUFTLGlEQUFLLEtBQUksRUFBVCxFQUFZLE9BQU0sSUFBbEIsRUFBdUIsUUFBTyxJQUE5QjtBQUFULFNBQTdDO0FBQ0U7QUFBQTtBQUFBO0FBQ0UsY0FBRyxHQURMO0FBRUUsbUJBQVMsbUJBQU07QUFDYkEsa0JBQU1DLE9BQU4sQ0FBY0MsSUFBZCxDQUFtQixHQUFuQjtBQUNEO0FBSkg7QUFNRTtBQUFBO0FBQUEsWUFBUyxXQUFVLFVBQW5CO0FBQ0UsaURBQUssS0FBSSxFQUFUO0FBREY7QUFORixPQURGO0FBWUU7QUFBQTtBQUFBO0FBQ0UsY0FBRyxRQURMO0FBRUUsbUJBQVMsbUJBQU07QUFDYkYsa0JBQU1DLE9BQU4sQ0FBY0MsSUFBZCxDQUFtQixRQUFuQjtBQUNEO0FBSkg7QUFNRTtBQUFBO0FBQUEsWUFBUyxXQUFVLFlBQW5CO0FBQUE7QUFBQTtBQU5GLE9BWkY7QUF1QkU7QUFBQTtBQUFBO0FBQ0UsY0FBRyxVQURMO0FBRUUsbUJBQVMsbUJBQU07QUFDYkYsa0JBQU1DLE9BQU4sQ0FBY0MsSUFBZCxDQUFtQixVQUFuQjtBQUNEO0FBSkg7QUFNRTtBQUFBO0FBQUEsWUFBUyxXQUFVLGNBQW5CO0FBQUE7QUFBQTtBQU5GO0FBdkJGO0FBREYsR0FEYTtBQUFBLENBQWY7O2tCQXVDZUgsTSIsImZpbGUiOiIwLjg2ZjM4YTFiNWQwYmNmYmNkYmExLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU2lkZU5hdiwgTmF2YmFyLCBOYXZJdGVtIH0gZnJvbSAncmVhY3QtbWF0ZXJpYWxpemUnO1xuaW1wb3J0IHsgTGluaywgUm91dGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuY29uc3QgTmF2QmFyID0gKHByb3BzKSA9PiAoXG4gIDxkaXY+XG4gICAgPE5hdmJhciBjbGFzc05hbWU9XCJuYXZiYXItbG9nZ2VkLW91dFwiIGJyYW5kPXs8TmF2SXRlbT48aW1nIHNyYz1cIlwiIHdpZHRoPVwiNTBcIiBoZWlnaHQ9XCI1MFwiLz48L05hdkl0ZW0+fT5cbiAgICAgIDxMaW5rXG4gICAgICAgIHRvPVwiL1wiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICBwcm9wcy5oaXN0b3J5LnB1c2goJy8nKTtcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPE5hdkl0ZW0gY2xhc3NOYW1lPVwibmF2LWxvZ29cIj5cbiAgICAgICAgICA8aW1nIHNyYz1cIlwiIC8+XG4gICAgICAgIDwvTmF2SXRlbT5cbiAgICAgIDwvTGluaz5cblxuICAgICAgPExpbmtcbiAgICAgICAgdG89XCIvYWJvdXRcIlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgcHJvcHMuaGlzdG9yeS5wdXNoKCcvYWJvdXQnKTtcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPE5hdkl0ZW0gY2xhc3NOYW1lPVwiYWJvdXQtbGlua1wiPlxuICAgICAgICAgIEFib3V0XG4gICAgICAgIDwvTmF2SXRlbT5cbiAgICAgIDwvTGluaz5cblxuICAgICAgPExpbmtcbiAgICAgICAgdG89XCIvY29udGFjdFwiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICBwcm9wcy5oaXN0b3J5LnB1c2goJy9jb250YWN0Jyk7XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxOYXZJdGVtIGNsYXNzTmFtZT1cImNvbnRhY3QtbGlua1wiPlxuICAgICAgICAgIENvbnRhY3RcbiAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgPC9MaW5rPlxuICAgIDwvTmF2YmFyPlxuICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgTmF2QmFyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL3NyYy9jb21wb25lbnRzL05hdkJhci9OYXZCYXIuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==