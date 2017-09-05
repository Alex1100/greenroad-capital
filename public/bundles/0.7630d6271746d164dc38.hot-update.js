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
          'Contact'
        )
      )
    )
  );
};

exports.default = NavBar;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvc3JjL2NvbXBvbmVudHMvTmF2QmFyL05hdkJhci5qc3giXSwibmFtZXMiOlsiTmF2QmFyIiwicHJvcHMiLCJoaXN0b3J5IiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUVBLElBQU1BLFNBQVMsU0FBVEEsTUFBUyxDQUFDQyxLQUFEO0FBQUEsU0FDYjtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsUUFBUSxXQUFVLG1CQUFsQixFQUFzQyxPQUFPLHVDQUFLLEtBQUkseURBQVQsRUFBbUUsV0FBVSxVQUE3RSxHQUE3QyxFQUF3SSxXQUF4STtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQ0UsY0FBRyxHQURMO0FBRUUsbUJBQVMsbUJBQU07QUFDYkEsa0JBQU1DLE9BQU4sQ0FBY0MsSUFBZCxDQUFtQixHQUFuQjtBQUNEO0FBSkg7QUFERixPQURGO0FBV0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0UsZ0JBQUcsUUFETDtBQUVFLHFCQUFTLG1CQUFNO0FBQ2JGLG9CQUFNQyxPQUFOLENBQWNDLElBQWQsQ0FBbUIsUUFBbkI7QUFDRDtBQUpIO0FBQUE7QUFBQTtBQURGLE9BWEY7QUFzQkU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0UsZ0JBQUcsVUFETDtBQUVFLHFCQUFTLG1CQUFNO0FBQ2JGLG9CQUFNQyxPQUFOLENBQWNDLElBQWQsQ0FBbUIsVUFBbkI7QUFDRDtBQUpIO0FBQUE7QUFBQTtBQURGO0FBdEJGO0FBREYsR0FEYTtBQUFBLENBQWY7O2tCQXNDZUgsTSIsImZpbGUiOiIwLjc2MzBkNjI3MTc0NmQxNjRkYzM4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU2lkZU5hdiwgTmF2YmFyLCBOYXZJdGVtIH0gZnJvbSAncmVhY3QtbWF0ZXJpYWxpemUnO1xuaW1wb3J0IHsgTGluaywgUm91dGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuY29uc3QgTmF2QmFyID0gKHByb3BzKSA9PiAoXG4gIDxkaXY+XG4gICAgPE5hdmJhciBjbGFzc05hbWU9XCJuYXZiYXItbG9nZ2VkLW91dFwiIGJyYW5kPXs8aW1nIHNyYz1cIi4uLy4uLy4uLy4vYXNzZXRzL2ltYWdlcy9HcmVlblJvYWRDYXBpdGFsTG9nb05hdmJhci5wbmdcIiBjbGFzc05hbWU9XCJ0b3AtbG9nb1wiLz59IHJpZ2h0PlxuICAgICAgPE5hdkl0ZW0+XG4gICAgICAgIDxMaW5rXG4gICAgICAgICAgdG89XCIvXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBwcm9wcy5oaXN0b3J5LnB1c2goJy8nKTtcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvTmF2SXRlbT5cblxuICAgICAgPE5hdkl0ZW0+XG4gICAgICAgIDxMaW5rXG4gICAgICAgICAgdG89XCIvYWJvdXRcIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIHByb3BzLmhpc3RvcnkucHVzaCgnL2Fib3V0Jyk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIEFib3V0XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvTmF2SXRlbT5cblxuICAgICAgPE5hdkl0ZW0+XG4gICAgICAgIDxMaW5rXG4gICAgICAgICAgdG89XCIvY29udGFjdFwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgcHJvcHMuaGlzdG9yeS5wdXNoKCcvY29udGFjdCcpO1xuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICBDb250YWN0XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvTmF2SXRlbT5cbiAgICA8L05hdmJhcj5cbiAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IE5hdkJhcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9zcmMvY29tcG9uZW50cy9OYXZCYXIvTmF2QmFyLmpzeCJdLCJzb3VyY2VSb290IjoiIn0=