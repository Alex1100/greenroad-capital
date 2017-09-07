webpackHotUpdate(0,{

/***/ 686:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _NavBarContact = __webpack_require__(710);

var _NavBarContact2 = _interopRequireDefault(_NavBarContact);

var _FooterComponent = __webpack_require__(141);

var _FooterComponent2 = _interopRequireDefault(_FooterComponent);

var _reactBootstrap = __webpack_require__(142);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Contact = function Contact(props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_NavBarContact2.default, { props: props }),
    _react2.default.createElement(
      'div',
      { className: 'contact-body' },
      _react2.default.createElement(
        _reactBootstrap.Jumbotron,
        null,
        _react2.default.createElement(
          'h5',
          { className: 'contact-header' },
          'Green Road Capital'
        ),
        _react2.default.createElement(
          'p',
          null,
          _react2.default.createElement(
            'div',
            { className: 'contact-content' },
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement('span', { className: 'fa fa-handshake-o', 'aria-hidden': 'true' }),
              ' 9010 Corbin Ave., Suite 5C'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Northridge, CA 91324'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'contact-content' },
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement('span', { className: 'fa fa-phone', 'aria-hidden': 'true' }),
              '\xA0(818) 527-5122'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'contact-content' },
            _react2.default.createElement('span', { className: 'fa fa-envelope-open-o', 'aria-hidden': 'true' }),
            '\xA0',
            _react2.default.createElement(
              'a',
              { href: 'mailto:info@greenroadcapital.net', target: '_top' },
              'info@greenroadcapital.net'
            )
          )
        )
      )
    ),
    _react2.default.createElement(_FooterComponent2.default, { props: props })
  );
};

exports.default = Contact;

/***/ }),

/***/ 710:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactMaterialize = __webpack_require__(242);

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
            to: '/',
            onClick: function onClick() {
              props.history.push('/');
            }
          },
          _react2.default.createElement(
            'span',
            { className: 'home-link' },
            'Home'
          )
        )
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
          _react2.default.createElement(
            'span',
            { className: 'about-link' },
            'About'
          )
        )
      )
    )
  );
};

exports.default = NavBar;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvc3JjL2NvbXBvbmVudHMvQ29udGFjdC9Db250YWN0LmpzeCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvc3JjL2NvbXBvbmVudHMvTmF2QmFyL05hdkJhckNvbnRhY3QuanN4Il0sIm5hbWVzIjpbIkNvbnRhY3QiLCJwcm9wcyIsIk5hdkJhciIsImhpc3RvcnkiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUdBLElBQU1BLFVBQVUsU0FBVkEsT0FBVSxDQUFDQyxLQUFEO0FBQUEsU0FDZDtBQUFBO0FBQUE7QUFDRSw2REFBUSxPQUFPQSxLQUFmLEdBREY7QUFFRTtBQUFBO0FBQUEsUUFBSyxXQUFVLGNBQWY7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBSSxXQUFVLGdCQUFkO0FBQUE7QUFBQSxTQURGO0FBRUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLGNBQUssV0FBVSxpQkFBZjtBQUNFO0FBQUE7QUFBQTtBQUNFLHNEQUFNLFdBQVUsbUJBQWhCLEVBQW9DLGVBQVksTUFBaEQsR0FERjtBQUFBO0FBQUEsYUFERjtBQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKRixXQURGO0FBT0U7QUFBQTtBQUFBLGNBQUssV0FBVSxpQkFBZjtBQUNFO0FBQUE7QUFBQTtBQUNFLHNEQUFNLFdBQVUsYUFBaEIsRUFBOEIsZUFBWSxNQUExQyxHQURGO0FBQUE7QUFBQTtBQURGLFdBUEY7QUFZRTtBQUFBO0FBQUEsY0FBSyxXQUFVLGlCQUFmO0FBQWlDLG9EQUFNLFdBQVUsdUJBQWhCLEVBQXdDLGVBQVksTUFBcEQsR0FBakM7QUFBQTtBQUFvRztBQUFBO0FBQUEsZ0JBQUcsTUFBSyxrQ0FBUixFQUEyQyxRQUFPLE1BQWxEO0FBQUE7QUFBQTtBQUFwRztBQVpGO0FBRkY7QUFERixLQUZGO0FBcUJFLCtEQUFpQixPQUFPQSxLQUF4QjtBQXJCRixHQURjO0FBQUEsQ0FBaEI7O2tCQTBCZUQsTzs7Ozs7Ozs7Ozs7Ozs7QUNoQ2Y7Ozs7QUFDQTs7QUFDQTs7OztBQUVBLElBQU1FLFNBQVMsU0FBVEEsTUFBUyxDQUFDRCxLQUFEO0FBQUEsU0FDYjtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsUUFBUSxXQUFVLG1CQUFsQixFQUFzQyxXQUF0QztBQUVFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFLGdCQUFHLEdBREw7QUFFRSxxQkFBUyxtQkFBTTtBQUNiQSxvQkFBTUUsT0FBTixDQUFjQyxJQUFkLENBQW1CLEdBQW5CO0FBQ0Q7QUFKSDtBQU1FO0FBQUE7QUFBQSxjQUFNLFdBQVUsV0FBaEI7QUFBQTtBQUFBO0FBTkY7QUFERixPQUZGO0FBYUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0UsZ0JBQUcsUUFETDtBQUVFLHFCQUFTLG1CQUFNO0FBQ2JILG9CQUFNRSxPQUFOLENBQWNDLElBQWQsQ0FBbUIsUUFBbkI7QUFDRDtBQUpIO0FBTUU7QUFBQTtBQUFBLGNBQU0sV0FBVSxZQUFoQjtBQUFBO0FBQUE7QUFORjtBQURGO0FBYkY7QUFERixHQURhO0FBQUEsQ0FBZjs7a0JBNkJlRixNIiwiZmlsZSI6IjAuZDc4Mzk1MjRiOWM5MjcwNTE1MGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTmF2QmFyIGZyb20gJy4uL05hdkJhci9OYXZCYXJDb250YWN0JztcbmltcG9ydCBGb290ZXJDb21wb25lbnQgZnJvbSAnLi4vRm9vdGVyL0Zvb3RlckNvbXBvbmVudCc7XG5pbXBvcnQgeyBKdW1ib3Ryb24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuXG5cbmNvbnN0IENvbnRhY3QgPSAocHJvcHMpID0+IChcbiAgPGRpdj5cbiAgICA8TmF2QmFyIHByb3BzPXtwcm9wc30vPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdC1ib2R5XCI+XG4gICAgICA8SnVtYm90cm9uPlxuICAgICAgICA8aDUgY2xhc3NOYW1lPVwiY29udGFjdC1oZWFkZXJcIj5HcmVlbiBSb2FkIENhcGl0YWw8L2g1PlxuICAgICAgICA8cD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3QtY29udGVudFwiPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZhIGZhLWhhbmRzaGFrZS1vXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz4gOTAxMCBDb3JiaW4gQXZlLiwgU3VpdGUgNUNcbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwPk5vcnRocmlkZ2UsIENBIDkxMzI0PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdC1jb250ZW50XCI+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmEgZmEtcGhvbmVcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+wqAoODE4KSA1MjctNTEyMlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdC1jb250ZW50XCI+PHNwYW4gY2xhc3NOYW1lPVwiZmEgZmEtZW52ZWxvcGUtb3Blbi1vXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPsKgPGEgaHJlZj1cIm1haWx0bzppbmZvQGdyZWVucm9hZGNhcGl0YWwubmV0XCIgdGFyZ2V0PVwiX3RvcFwiPmluZm9AZ3JlZW5yb2FkY2FwaXRhbC5uZXQ8L2E+PC9kaXY+XG4gICAgICAgIDwvcD5cbiAgICAgIDwvSnVtYm90cm9uPlxuICAgIDwvZGl2PlxuICAgIDxGb290ZXJDb21wb25lbnQgcHJvcHM9e3Byb3BzfS8+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9zcmMvY29tcG9uZW50cy9Db250YWN0L0NvbnRhY3QuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFNpZGVOYXYsIE5hdmJhciwgTmF2SXRlbSB9IGZyb20gJ3JlYWN0LW1hdGVyaWFsaXplJztcbmltcG9ydCB7IExpbmssIFJvdXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmNvbnN0IE5hdkJhciA9IChwcm9wcykgPT4gKFxuICA8ZGl2PlxuICAgIDxOYXZiYXIgY2xhc3NOYW1lPVwibmF2YmFyLWxvZ2dlZC1vdXRcIiByaWdodD5cblxuICAgICAgPE5hdkl0ZW0+XG4gICAgICAgIDxMaW5rXG4gICAgICAgICAgdG89XCIvXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBwcm9wcy5oaXN0b3J5LnB1c2goJy8nKTtcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaG9tZS1saW5rXCI+SG9tZTwvc3Bhbj5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9OYXZJdGVtPlxuXG4gICAgICA8TmF2SXRlbT5cbiAgICAgICAgPExpbmtcbiAgICAgICAgICB0bz1cIi9hYm91dFwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgcHJvcHMuaGlzdG9yeS5wdXNoKCcvYWJvdXQnKTtcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWJvdXQtbGlua1wiPkFib3V0PC9zcGFuPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L05hdkl0ZW0+XG4gICAgPC9OYXZiYXI+XG4gIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBOYXZCYXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvc3JjL2NvbXBvbmVudHMvTmF2QmFyL05hdkJhckNvbnRhY3QuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==