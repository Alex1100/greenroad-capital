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
      { className: 'navbar-logged-out' },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvc3JjL2NvbXBvbmVudHMvTmF2QmFyL05hdkJhci5qc3giXSwibmFtZXMiOlsiTmF2QmFyIiwicHJvcHMiLCJoaXN0b3J5IiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUVBLElBQU1BLFNBQVMsU0FBVEEsTUFBUyxDQUFDQyxLQUFEO0FBQUEsU0FDYjtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsUUFBUSxXQUFVLG1CQUFsQjtBQUNFO0FBQUE7QUFBQTtBQUNFLGNBQUcsR0FETDtBQUVFLG1CQUFTLG1CQUFNO0FBQ2JBLGtCQUFNQyxPQUFOLENBQWNDLElBQWQsQ0FBbUIsR0FBbkI7QUFDRDtBQUpIO0FBTUU7QUFBQTtBQUFBLFlBQVMsV0FBVSxVQUFuQjtBQUNFLGlEQUFLLEtBQUksRUFBVDtBQURGO0FBTkYsT0FERjtBQVlFO0FBQUE7QUFBQTtBQUNFLGNBQUcsUUFETDtBQUVFLG1CQUFTLG1CQUFNO0FBQ2JGLGtCQUFNQyxPQUFOLENBQWNDLElBQWQsQ0FBbUIsUUFBbkI7QUFDRDtBQUpIO0FBTUU7QUFBQTtBQUFBLFlBQVMsV0FBVSxZQUFuQjtBQUFBO0FBQUE7QUFORixPQVpGO0FBdUJFO0FBQUE7QUFBQTtBQUNFLGNBQUcsVUFETDtBQUVFLG1CQUFTLG1CQUFNO0FBQ2JGLGtCQUFNQyxPQUFOLENBQWNDLElBQWQsQ0FBbUIsVUFBbkI7QUFDRDtBQUpIO0FBTUU7QUFBQTtBQUFBLFlBQVMsV0FBVSxjQUFuQjtBQUFBO0FBQUE7QUFORjtBQXZCRjtBQURGLEdBRGE7QUFBQSxDQUFmOztrQkF1Q2VILE0iLCJmaWxlIjoiMC42OGJkYmU0ODNhZDJmNjhjZjk2ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFNpZGVOYXYsIE5hdmJhciwgTmF2SXRlbSB9IGZyb20gJ3JlYWN0LW1hdGVyaWFsaXplJztcbmltcG9ydCB7IExpbmssIFJvdXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmNvbnN0IE5hdkJhciA9IChwcm9wcykgPT4gKFxuICA8ZGl2PlxuICAgIDxOYXZiYXIgY2xhc3NOYW1lPVwibmF2YmFyLWxvZ2dlZC1vdXRcIj5cbiAgICAgIDxMaW5rXG4gICAgICAgIHRvPVwiL1wiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICBwcm9wcy5oaXN0b3J5LnB1c2goJy8nKTtcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPE5hdkl0ZW0gY2xhc3NOYW1lPVwibmF2LWxvZ29cIj5cbiAgICAgICAgICA8aW1nIHNyYz1cIlwiIC8+XG4gICAgICAgIDwvTmF2SXRlbT5cbiAgICAgIDwvTGluaz5cblxuICAgICAgPExpbmtcbiAgICAgICAgdG89XCIvYWJvdXRcIlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgcHJvcHMuaGlzdG9yeS5wdXNoKCcvYWJvdXQnKTtcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPE5hdkl0ZW0gY2xhc3NOYW1lPVwiYWJvdXQtbGlua1wiPlxuICAgICAgICAgIEFib3V0XG4gICAgICAgIDwvTmF2SXRlbT5cbiAgICAgIDwvTGluaz5cblxuICAgICAgPExpbmtcbiAgICAgICAgdG89XCIvY29udGFjdFwiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICBwcm9wcy5oaXN0b3J5LnB1c2goJy9jb250YWN0Jyk7XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxOYXZJdGVtIGNsYXNzTmFtZT1cImNvbnRhY3QtbGlua1wiPlxuICAgICAgICAgIENvbnRhY3RcbiAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgPC9MaW5rPlxuICAgIDwvTmF2YmFyPlxuICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgTmF2QmFyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL3NyYy9jb21wb25lbnRzL05hdkJhci9OYXZCYXIuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==