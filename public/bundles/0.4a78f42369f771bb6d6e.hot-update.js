webpackHotUpdate(0,{

/***/ 685:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _NavBarAbout = __webpack_require__(709);

var _NavBarAbout2 = _interopRequireDefault(_NavBarAbout);

var _FooterComponent = __webpack_require__(141);

var _FooterComponent2 = _interopRequireDefault(_FooterComponent);

var _reactBootstrap = __webpack_require__(142);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var About = function About(props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_NavBarAbout2.default, { props: props }),
    _react2.default.createElement(
      _reactBootstrap.Jumbotron,
      null,
      _react2.default.createElement(
        'div',
        { className: 'about-logo' },
        _react2.default.createElement('img', { className: 'about-logo-image', src: '../../.././assets/images/Green_Road_Capital_Logo_New.jpg' })
      ),
      _react2.default.createElement(
        'div',
        { className: 'shadow' },
        _react2.default.createElement(
          'p',
          null,
          'Green Road Capital, LLC was founded in 2017 and is based in Los Angeles, CA. Green Road Capital is led by an institutionally seasoned management team with 13+ years of combined experience managing institutional accounts, 22+ years in trading with the same fluid strategy using a proprietary trading formula, and 40+ years of offering diversification benefits not seen in traditional equity, debt, and alternative investments.'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Green Road Capital is committed to delivering\xA0transparent alternative investment solutions to\xA0sophisticated high-net worth investors and\xA0institutions seeking uncorrelated returns and\xA0above-average profit participation.'
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'disclosure' },
        _react2.default.createElement(
          'p',
          null,
          'Access to this website is provided by Green Road Capital, LLC ("Green Road") for informational purposes only. The publication of this website is limited to the dissemination of general information pertaning to the services offered by Green Road. No portion of the commentary included herin is to be construed as a solicitation to effect transactions in securities or the provision of personalized investment, tax, or legal advice. There is no guarantee that active asset management or any investment strategy will be successful. Investing involves risk, including the potential loss of principal. No investment strategy can guarantee a profit or protect against loss in periods of declining values. Past performance is not necessarily indicative of future results. The forward-looking statements contained on this website are included for illustrative purposes only, are inherently spculative as they relate to future events, and may not be realized as described. These forward-looking statements will not be updated in the future. Opinions expressed herein are made as of the date of publication and are subject to change without notice. Data and other source information presented on this website were obtained from published sources believed to be reliable, but which are not warranted as to accuracy or completeness. No part of this website may be reproduced in any manner without the written permission of Green Road.'
        )
      )
    ),
    _react2.default.createElement(_FooterComponent2.default, { props: props })
  );
};

exports.default = About;

/***/ }),

/***/ 709:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvc3JjL2NvbXBvbmVudHMvQWJvdXQvQWJvdXQuanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9zcmMvY29tcG9uZW50cy9OYXZCYXIvTmF2QmFyQWJvdXQuanN4Il0sIm5hbWVzIjpbIkFib3V0IiwicHJvcHMiLCJOYXZCYXIiLCJoaXN0b3J5IiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFHQSxJQUFNQSxRQUFRLFNBQVJBLEtBQVEsQ0FBQ0MsS0FBRDtBQUFBLFNBQ1o7QUFBQTtBQUFBO0FBQ0UsMkRBQWEsT0FBT0EsS0FBcEIsR0FERjtBQUVFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsWUFBZjtBQUNFLCtDQUFLLFdBQVUsa0JBQWYsRUFBa0MsS0FBSSwwREFBdEM7QUFERixPQURGO0FBSUU7QUFBQTtBQUFBLFVBQUssV0FBVSxRQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURGO0FBY0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWRGLE9BSkY7QUEyQkU7QUFBQTtBQUFBLFVBQUssV0FBVSxZQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBM0JGLEtBRkY7QUFtQ0UsK0RBQWlCLE9BQU9BLEtBQXhCO0FBbkNGLEdBRFk7QUFBQSxDQUFkOztrQkF3Q2VELEs7Ozs7Ozs7Ozs7Ozs7O0FDOUNmOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxJQUFNRSxTQUFTLFNBQVRBLE1BQVMsQ0FBQ0QsS0FBRDtBQUFBLFNBQ2I7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFFBQVEsV0FBVSxtQkFBbEIsRUFBc0MsV0FBdEM7QUFFRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRSxnQkFBRyxHQURMO0FBRUUscUJBQVMsbUJBQU07QUFDYkEsb0JBQU1FLE9BQU4sQ0FBY0MsSUFBZCxDQUFtQixHQUFuQjtBQUNEO0FBSkg7QUFNRTtBQUFBO0FBQUEsY0FBTSxXQUFVLFdBQWhCO0FBQUE7QUFBQTtBQU5GO0FBREYsT0FGRjtBQWFFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFLGdCQUFHLFVBREw7QUFFRSxxQkFBUyxtQkFBTTtBQUNiSCxvQkFBTUUsT0FBTixDQUFjQyxJQUFkLENBQW1CLFVBQW5CO0FBQ0Q7QUFKSDtBQU1FO0FBQUE7QUFBQSxjQUFNLFdBQVUsY0FBaEI7QUFBQTtBQUFBO0FBTkY7QUFERjtBQWJGO0FBREYsR0FEYTtBQUFBLENBQWY7O2tCQTZCZUYsTSIsImZpbGUiOiIwLjRhNzhmNDIzNjlmNzcxYmI2ZDZlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IE5hdkJhckFib3V0IGZyb20gJy4uL05hdkJhci9OYXZCYXJBYm91dCc7XG5pbXBvcnQgRm9vdGVyQ29tcG9uZW50IGZyb20gJy4uL0Zvb3Rlci9Gb290ZXJDb21wb25lbnQnO1xuaW1wb3J0IHsgSnVtYm90cm9uIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcblxuXG5jb25zdCBBYm91dCA9IChwcm9wcykgPT4gKFxuICA8ZGl2PlxuICAgIDxOYXZCYXJBYm91dCBwcm9wcz17cHJvcHN9IC8+XG4gICAgPEp1bWJvdHJvbj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJvdXQtbG9nb1wiPlxuICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImFib3V0LWxvZ28taW1hZ2VcIiBzcmM9XCIuLi8uLi8uLi8uL2Fzc2V0cy9pbWFnZXMvR3JlZW5fUm9hZF9DYXBpdGFsX0xvZ29fTmV3LmpwZ1wiIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93XCI+XG4gICAgICAgIDxwPkdyZWVuIFJvYWQgQ2FwaXRhbCwgTExDIHdhcyBmb3VuZGVkXG4gICAgICAgICAgaW4gMjAxNyBhbmQgaXMgYmFzZWQgaW4gTG9zIEFuZ2VsZXMsIENBLlxuICAgICAgICAgIEdyZWVuIFJvYWQgQ2FwaXRhbCBpcyBsZWQgYnkgYW5cbiAgICAgICAgICBpbnN0aXR1dGlvbmFsbHkgc2Vhc29uZWQgbWFuYWdlbWVudFxuICAgICAgICAgIHRlYW0gd2l0aCAxMysgeWVhcnMgb2YgY29tYmluZWRcbiAgICAgICAgICBleHBlcmllbmNlIG1hbmFnaW5nIGluc3RpdHV0aW9uYWxcbiAgICAgICAgICBhY2NvdW50cywgMjIrIHllYXJzIGluIHRyYWRpbmcgd2l0aCB0aGVcbiAgICAgICAgICBzYW1lIGZsdWlkIHN0cmF0ZWd5IHVzaW5nIGEgcHJvcHJpZXRhcnlcbiAgICAgICAgICB0cmFkaW5nIGZvcm11bGEsIGFuZCA0MCsgeWVhcnMgb2ZcbiAgICAgICAgICBvZmZlcmluZyBkaXZlcnNpZmljYXRpb24gYmVuZWZpdHMgbm90XG4gICAgICAgICAgc2VlbiBpbiB0cmFkaXRpb25hbCBlcXVpdHksIGRlYnQsIGFuZFxuICAgICAgICAgIGFsdGVybmF0aXZlIGludmVzdG1lbnRzLlxuICAgICAgICA8L3A+XG4gICAgICAgIDxwPkdyZWVuIFJvYWQgQ2FwaXRhbCBpcyBjb21taXR0ZWQgdG9cbiAgICAgICAgICBkZWxpdmVyaW5nwqB0cmFuc3BhcmVudCBhbHRlcm5hdGl2ZVxuICAgICAgICAgIGludmVzdG1lbnQgc29sdXRpb25zIHRvwqBzb3BoaXN0aWNhdGVkXG4gICAgICAgICAgaGlnaC1uZXQgd29ydGggaW52ZXN0b3JzXG4gICAgICAgICAgYW5kwqBpbnN0aXR1dGlvbnMgc2Vla2luZyB1bmNvcnJlbGF0ZWRcbiAgICAgICAgICByZXR1cm5zIGFuZMKgYWJvdmUtYXZlcmFnZSBwcm9maXRcbiAgICAgICAgICBwYXJ0aWNpcGF0aW9uLlxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlzY2xvc3VyZVwiPlxuICAgICAgICA8cD5cbiAgICAgICAgICBBY2Nlc3MgdG8gdGhpcyB3ZWJzaXRlIGlzIHByb3ZpZGVkIGJ5IEdyZWVuIFJvYWQgQ2FwaXRhbCwgTExDIChcIkdyZWVuIFJvYWRcIikgZm9yIGluZm9ybWF0aW9uYWwgcHVycG9zZXMgb25seS4gVGhlIHB1YmxpY2F0aW9uIG9mIHRoaXMgd2Vic2l0ZSBpcyBsaW1pdGVkIHRvIHRoZSBkaXNzZW1pbmF0aW9uIG9mIGdlbmVyYWwgaW5mb3JtYXRpb24gcGVydGFuaW5nIHRvIHRoZSBzZXJ2aWNlcyBvZmZlcmVkIGJ5IEdyZWVuIFJvYWQuIE5vIHBvcnRpb24gb2YgdGhlIGNvbW1lbnRhcnkgaW5jbHVkZWQgaGVyaW4gaXMgdG8gYmUgY29uc3RydWVkIGFzIGEgc29saWNpdGF0aW9uIHRvIGVmZmVjdCB0cmFuc2FjdGlvbnMgaW4gc2VjdXJpdGllcyBvciB0aGUgcHJvdmlzaW9uIG9mIHBlcnNvbmFsaXplZCBpbnZlc3RtZW50LCB0YXgsIG9yIGxlZ2FsIGFkdmljZS4gVGhlcmUgaXMgbm8gZ3VhcmFudGVlIHRoYXQgYWN0aXZlIGFzc2V0IG1hbmFnZW1lbnQgb3IgYW55IGludmVzdG1lbnQgc3RyYXRlZ3kgd2lsbCBiZSBzdWNjZXNzZnVsLiBJbnZlc3RpbmcgaW52b2x2ZXMgcmlzaywgaW5jbHVkaW5nIHRoZSBwb3RlbnRpYWwgbG9zcyBvZiBwcmluY2lwYWwuIE5vIGludmVzdG1lbnQgc3RyYXRlZ3kgY2FuIGd1YXJhbnRlZSBhIHByb2ZpdCBvciBwcm90ZWN0IGFnYWluc3QgbG9zcyBpbiBwZXJpb2RzIG9mIGRlY2xpbmluZyB2YWx1ZXMuIFBhc3QgcGVyZm9ybWFuY2UgaXMgbm90IG5lY2Vzc2FyaWx5IGluZGljYXRpdmUgb2YgZnV0dXJlIHJlc3VsdHMuIFRoZSBmb3J3YXJkLWxvb2tpbmcgc3RhdGVtZW50cyBjb250YWluZWQgb24gdGhpcyB3ZWJzaXRlIGFyZSBpbmNsdWRlZCBmb3IgaWxsdXN0cmF0aXZlIHB1cnBvc2VzIG9ubHksIGFyZSBpbmhlcmVudGx5IHNwY3VsYXRpdmUgYXMgdGhleSByZWxhdGUgdG8gZnV0dXJlIGV2ZW50cywgYW5kIG1heSBub3QgYmUgcmVhbGl6ZWQgYXMgZGVzY3JpYmVkLiBUaGVzZSBmb3J3YXJkLWxvb2tpbmcgc3RhdGVtZW50cyB3aWxsIG5vdCBiZSB1cGRhdGVkIGluIHRoZSBmdXR1cmUuIE9waW5pb25zIGV4cHJlc3NlZCBoZXJlaW4gYXJlIG1hZGUgYXMgb2YgdGhlIGRhdGUgb2YgcHVibGljYXRpb24gYW5kIGFyZSBzdWJqZWN0IHRvIGNoYW5nZSB3aXRob3V0IG5vdGljZS4gRGF0YSBhbmQgb3RoZXIgc291cmNlIGluZm9ybWF0aW9uIHByZXNlbnRlZCBvbiB0aGlzIHdlYnNpdGUgd2VyZSBvYnRhaW5lZCBmcm9tIHB1Ymxpc2hlZCBzb3VyY2VzIGJlbGlldmVkIHRvIGJlIHJlbGlhYmxlLCBidXQgd2hpY2ggYXJlIG5vdCB3YXJyYW50ZWQgYXMgdG8gYWNjdXJhY3kgb3IgY29tcGxldGVuZXNzLiBObyBwYXJ0IG9mIHRoaXMgd2Vic2l0ZSBtYXkgYmUgcmVwcm9kdWNlZCBpbiBhbnkgbWFubmVyIHdpdGhvdXQgdGhlIHdyaXR0ZW4gcGVybWlzc2lvbiBvZiBHcmVlbiBSb2FkLlxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L0p1bWJvdHJvbj5cbiAgICA8Rm9vdGVyQ29tcG9uZW50IHByb3BzPXtwcm9wc30gLz5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBBYm91dDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9zcmMvY29tcG9uZW50cy9BYm91dC9BYm91dC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU2lkZU5hdiwgTmF2YmFyLCBOYXZJdGVtIH0gZnJvbSAncmVhY3QtbWF0ZXJpYWxpemUnO1xuaW1wb3J0IHsgTGluaywgUm91dGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuY29uc3QgTmF2QmFyID0gKHByb3BzKSA9PiAoXG4gIDxkaXY+XG4gICAgPE5hdmJhciBjbGFzc05hbWU9XCJuYXZiYXItbG9nZ2VkLW91dFwiIHJpZ2h0PlxuXG4gICAgICA8TmF2SXRlbT5cbiAgICAgICAgPExpbmtcbiAgICAgICAgICB0bz1cIi9cIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIHByb3BzLmhpc3RvcnkucHVzaCgnLycpO1xuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJob21lLWxpbmtcIj5Ib21lPC9zcGFuPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L05hdkl0ZW0+XG5cbiAgICAgIDxOYXZJdGVtPlxuICAgICAgICA8TGlua1xuICAgICAgICAgIHRvPVwiL2NvbnRhY3RcIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIHByb3BzLmhpc3RvcnkucHVzaCgnL2NvbnRhY3QnKTtcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGFjdC1saW5rXCI+Q29udGFjdDwvc3Bhbj5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9OYXZJdGVtPlxuICAgIDwvTmF2YmFyPlxuICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgTmF2QmFyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL3NyYy9jb21wb25lbnRzL05hdkJhci9OYXZCYXJBYm91dC5qc3giXSwic291cmNlUm9vdCI6IiJ9