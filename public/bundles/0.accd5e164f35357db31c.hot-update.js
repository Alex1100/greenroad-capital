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
          'About'
        ),
        'About'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvc3JjL2NvbXBvbmVudHMvTmF2QmFyL05hdkJhci5qc3giXSwibmFtZXMiOlsiTmF2QmFyIiwicHJvcHMiLCJoaXN0b3J5IiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUVBLElBQU1BLFNBQVMsU0FBVEEsTUFBUyxDQUFDQyxLQUFEO0FBQUEsU0FDYjtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsUUFBUSxXQUFVLG1CQUFsQixFQUFzQyxPQUFPLHVDQUFLLEtBQUkseURBQVQsRUFBbUUsV0FBVSxVQUE3RSxHQUE3QyxFQUF3SSxXQUF4STtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQ0UsY0FBRyxHQURMO0FBRUUsbUJBQVMsbUJBQU07QUFDYkEsa0JBQU1DLE9BQU4sQ0FBY0MsSUFBZCxDQUFtQixHQUFuQjtBQUNEO0FBSkg7QUFERixPQURGO0FBV0U7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0UsZ0JBQUcsUUFETDtBQUVFLHFCQUFTLG1CQUFNO0FBQ2JGLG9CQUFNQyxPQUFOLENBQWNDLElBQWQsQ0FBbUIsUUFBbkI7QUFDRDtBQUpIO0FBQUE7QUFBQSxTQURBO0FBQUE7QUFBQSxPQVhGO0FBdUJFO0FBQUE7QUFBQTtBQUNFLGNBQUcsVUFETDtBQUVFLG1CQUFTLG1CQUFNO0FBQ2JGLGtCQUFNQyxPQUFOLENBQWNDLElBQWQsQ0FBbUIsVUFBbkI7QUFDRDtBQUpIO0FBTUU7QUFBQTtBQUFBLFlBQVMsV0FBVSxjQUFuQjtBQUFBO0FBQUE7QUFORjtBQXZCRjtBQURGLEdBRGE7QUFBQSxDQUFmOztrQkF1Q2VILE0iLCJmaWxlIjoiMC5hY2NkNWUxNjRmMzUzNTdkYjMxYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFNpZGVOYXYsIE5hdmJhciwgTmF2SXRlbSB9IGZyb20gJ3JlYWN0LW1hdGVyaWFsaXplJztcbmltcG9ydCB7IExpbmssIFJvdXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmNvbnN0IE5hdkJhciA9IChwcm9wcykgPT4gKFxuICA8ZGl2PlxuICAgIDxOYXZiYXIgY2xhc3NOYW1lPVwibmF2YmFyLWxvZ2dlZC1vdXRcIiBicmFuZD17PGltZyBzcmM9XCIuLi8uLi8uLi8uL2Fzc2V0cy9pbWFnZXMvR3JlZW5Sb2FkQ2FwaXRhbExvZ29OYXZiYXIucG5nXCIgY2xhc3NOYW1lPVwidG9wLWxvZ29cIi8+fSByaWdodD5cbiAgICAgIDxOYXZJdGVtPlxuICAgICAgICA8TGlua1xuICAgICAgICAgIHRvPVwiL1wiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgcHJvcHMuaGlzdG9yeS5wdXNoKCcvJyk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L05hdkl0ZW0+XG5cbiAgICAgIDxOYXZJdGVtPlxuICAgICAgPExpbmtcbiAgICAgICAgdG89XCIvYWJvdXRcIlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgcHJvcHMuaGlzdG9yeS5wdXNoKCcvYWJvdXQnKTtcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgIEFib3V0XG4gICAgICA8L0xpbms+XG4gICAgICBBYm91dFxuICAgICAgPC9OYXZJdGVtPlxuXG4gICAgICA8TGlua1xuICAgICAgICB0bz1cIi9jb250YWN0XCJcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgIHByb3BzLmhpc3RvcnkucHVzaCgnL2NvbnRhY3QnKTtcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPE5hdkl0ZW0gY2xhc3NOYW1lPVwiY29udGFjdC1saW5rXCI+XG4gICAgICAgICAgQ29udGFjdFxuICAgICAgICA8L05hdkl0ZW0+XG4gICAgICA8L0xpbms+XG4gICAgPC9OYXZiYXI+XG4gIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBOYXZCYXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvc3JjL2NvbXBvbmVudHMvTmF2QmFyL05hdkJhci5qc3giXSwic291cmNlUm9vdCI6IiJ9