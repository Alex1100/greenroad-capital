webpackHotUpdate(0,{

/***/ 369:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(139);

var _reactRouterDom = __webpack_require__(150);

var _FrontPageGuest = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \".././components/Home/FrontPageGuest\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _FrontPageGuest2 = _interopRequireDefault(_FrontPageGuest);

var _FrontPageUser = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \".././components/Home/FrontPageUser\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _FrontPageUser2 = _interopRequireDefault(_FrontPageUser);

var _About = __webpack_require__(370);

var _About2 = _interopRequireDefault(_About);

var _Contact = __webpack_require__(371);

var _Contact2 = _interopRequireDefault(_Contact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Router = function (_Component) {
  _inherits(Router, _Component);

  function Router(props) {
    _classCallCheck(this, Router);

    var _this = _possibleConstructorReturn(this, (Router.__proto__ || Object.getPrototypeOf(Router)).call(this));

    _this.state = {};
    return _this;
  }

  _createClass(Router, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          dispatch = _props.dispatch,
          errorMessage = _props.errorMessage,
          isAuthenticated = _props.isAuthenticated,
          history = _props.history;

      return isAuthenticated === false ? _react2.default.createElement(
        _reactRouterDom.Switch,
        null,
        _react2.default.createElement(
          _reactRouterDom.Route,
          { exact: true, path: '/' },
          _react2.default.createElement(_FrontPageGuest2.default, {
            history: history,
            isAuthenticated: isAuthenticated,
            errorMessage: errorMessage,
            dispatch: dispatch
          })
        ),
        _react2.default.createElement(
          _reactRouterDom.Route,
          { exact: true, path: '/about' },
          _react2.default.createElement(_About2.default, {
            history: history,
            isAuthenticated: isAuthenticated,
            dispatch: dispatch
          })
        ),
        _react2.default.createElement(
          _reactRouterDom.Route,
          { path: '/contact' },
          _react2.default.createElement(_Contact2.default, {
            isAuthenticated: isAuthenticated,
            history: history,
            dispatch: dispatch
          })
        )
      ) : _react2.default.createElement(
        _reactRouterDom.Switch,
        null,
        _react2.default.createElement(
          _reactRouterDom.Route,
          { exact: true, path: '/' },
          _react2.default.createElement(_FrontPageUser2.default, {
            history: history,
            isAuthenticated: isAuthenticated,
            errorMessage: errorMessage,
            dispatch: dispatch
          })
        )
      );
    }
  }]);

  return Router;
}(_react.Component);

;

var mapStateToProps = function mapStateToProps(state) {
  var auth = state.auth;
  var isAuthenticated = auth.isAuthenticated,
      errorMessage = auth.errorMessage;

  return {
    isAuthenticated: isAuthenticated,
    errorMessage: errorMessage
  };
};

exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps)(Router));

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvc3JjL2NvbnRhaW5lcnMvUm91dGVyLmpzeCJdLCJuYW1lcyI6WyJSb3V0ZXIiLCJwcm9wcyIsInN0YXRlIiwiZGlzcGF0Y2giLCJlcnJvck1lc3NhZ2UiLCJpc0F1dGhlbnRpY2F0ZWQiLCJoaXN0b3J5IiwibWFwU3RhdGVUb1Byb3BzIiwiYXV0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTUEsTTs7O0FBQ0osa0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFFakIsVUFBS0MsS0FBTCxHQUFhLEVBQWI7QUFGaUI7QUFHbEI7Ozs7NkJBR1E7QUFBQSxtQkFDc0QsS0FBS0QsS0FEM0Q7QUFBQSxVQUNDRSxRQURELFVBQ0NBLFFBREQ7QUFBQSxVQUNXQyxZQURYLFVBQ1dBLFlBRFg7QUFBQSxVQUN5QkMsZUFEekIsVUFDeUJBLGVBRHpCO0FBQUEsVUFDMENDLE9BRDFDLFVBQzBDQSxPQUQxQzs7QUFFUCxhQUFPRCxvQkFBb0IsS0FBcEIsR0FDTDtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBTyxXQUFQLEVBQWEsTUFBSyxHQUFsQjtBQUNFO0FBQ0UscUJBQVNDLE9BRFg7QUFFRSw2QkFBaUJELGVBRm5CO0FBR0UsMEJBQWNELFlBSGhCO0FBSUUsc0JBQVVEO0FBSlo7QUFERixTQURGO0FBU0U7QUFBQTtBQUFBLFlBQU8sV0FBUCxFQUFhLE1BQUssUUFBbEI7QUFDRTtBQUNFLHFCQUFTRyxPQURYO0FBRUUsNkJBQWlCRCxlQUZuQjtBQUdFLHNCQUFVRjtBQUhaO0FBREYsU0FURjtBQWdCRTtBQUFBO0FBQUEsWUFBTyxNQUFLLFVBQVo7QUFDRTtBQUNFLDZCQUFpQkUsZUFEbkI7QUFFRSxxQkFBU0MsT0FGWDtBQUdFLHNCQUFVSDtBQUhaO0FBREY7QUFoQkYsT0FESyxHQTBCTDtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBTyxXQUFQLEVBQWEsTUFBSyxHQUFsQjtBQUNFO0FBQ0UscUJBQVNHLE9BRFg7QUFFRSw2QkFBaUJELGVBRm5CO0FBR0UsMEJBQWNELFlBSGhCO0FBSUUsc0JBQVVEO0FBSlo7QUFERjtBQURGLE9BMUJGO0FBcUNEOzs7Ozs7QUFDRjs7QUFHRCxJQUFNSSxrQkFBa0IsU0FBbEJBLGVBQWtCLENBQUNMLEtBQUQsRUFBVztBQUFBLE1BQ3pCTSxJQUR5QixHQUNoQk4sS0FEZ0IsQ0FDekJNLElBRHlCO0FBQUEsTUFFekJILGVBRnlCLEdBRVNHLElBRlQsQ0FFekJILGVBRnlCO0FBQUEsTUFFUkQsWUFGUSxHQUVTSSxJQUZULENBRVJKLFlBRlE7O0FBR2pDLFNBQU87QUFDTEMsb0NBREs7QUFFTEQ7QUFGSyxHQUFQO0FBSUQsQ0FQRDs7a0JBU2UsZ0NBQVcseUJBQVFHLGVBQVIsRUFBeUJQLE1BQXpCLENBQVgsQyIsImZpbGUiOiIwLjY1ZDA1M2M0YTRkY2Q2M2Q1NzMzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IFJvdXRlLCBTd2l0Y2gsIHdpdGhSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBIb21lR3Vlc3QgZnJvbSAnLi4vLi9jb21wb25lbnRzL0hvbWUvRnJvbnRQYWdlR3Vlc3QnO1xuaW1wb3J0IEhvbWVVc2VyIGZyb20gJy4uLy4vY29tcG9uZW50cy9Ib21lL0Zyb250UGFnZVVzZXInO1xuaW1wb3J0IEFib3V0IGZyb20gJy4uLy4vY29tcG9uZW50cy9BYm91dC9BYm91dCc7XG5pbXBvcnQgQ29udGFjdCBmcm9tICcuLi8uL2NvbXBvbmVudHMvQ29udGFjdC9Db250YWN0JztcblxuY2xhc3MgUm91dGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3RhdGUgPSB7fTtcbiAgfVxuXG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZGlzcGF0Y2gsIGVycm9yTWVzc2FnZSwgaXNBdXRoZW50aWNhdGVkLCBoaXN0b3J5IH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiBpc0F1dGhlbnRpY2F0ZWQgPT09IGZhbHNlID8gKFxuICAgICAgPFN3aXRjaD5cbiAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvXCI+XG4gICAgICAgICAgPEhvbWVHdWVzdFxuICAgICAgICAgICAgaGlzdG9yeT17aGlzdG9yeX1cbiAgICAgICAgICAgIGlzQXV0aGVudGljYXRlZD17aXNBdXRoZW50aWNhdGVkfVxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlPXtlcnJvck1lc3NhZ2V9XG4gICAgICAgICAgICBkaXNwYXRjaD17ZGlzcGF0Y2h9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvYWJvdXRcIj5cbiAgICAgICAgICA8QWJvdXRcbiAgICAgICAgICAgIGhpc3Rvcnk9e2hpc3Rvcnl9XG4gICAgICAgICAgICBpc0F1dGhlbnRpY2F0ZWQ9e2lzQXV0aGVudGljYXRlZH1cbiAgICAgICAgICAgIGRpc3BhdGNoPXtkaXNwYXRjaH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L1JvdXRlPlxuICAgICAgICA8Um91dGUgcGF0aD1cIi9jb250YWN0XCI+XG4gICAgICAgICAgPENvbnRhY3RcbiAgICAgICAgICAgIGlzQXV0aGVudGljYXRlZD17aXNBdXRoZW50aWNhdGVkfVxuICAgICAgICAgICAgaGlzdG9yeT17aGlzdG9yeX1cbiAgICAgICAgICAgIGRpc3BhdGNoPXtkaXNwYXRjaH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L1JvdXRlPlxuICAgICAgPC9Td2l0Y2g+XG4gICAgKSA6IChcbiAgICAgIDxTd2l0Y2g+XG4gICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL1wiPlxuICAgICAgICAgIDxIb21lVXNlclxuICAgICAgICAgICAgaGlzdG9yeT17aGlzdG9yeX1cbiAgICAgICAgICAgIGlzQXV0aGVudGljYXRlZD17aXNBdXRoZW50aWNhdGVkfVxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlPXtlcnJvck1lc3NhZ2V9XG4gICAgICAgICAgICBkaXNwYXRjaD17ZGlzcGF0Y2h9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Sb3V0ZT5cbiAgICAgIDwvU3dpdGNoPlxuICAgIClcbiAgfVxufTtcblxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgY29uc3QgeyBhdXRoIH0gPSBzdGF0ZTtcbiAgY29uc3QgeyBpc0F1dGhlbnRpY2F0ZWQsIGVycm9yTWVzc2FnZSB9ID0gYXV0aDtcbiAgcmV0dXJuIHtcbiAgICBpc0F1dGhlbnRpY2F0ZWQsXG4gICAgZXJyb3JNZXNzYWdlXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShSb3V0ZXIpKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9zcmMvY29udGFpbmVycy9Sb3V0ZXIuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==