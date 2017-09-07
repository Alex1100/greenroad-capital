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

var _FooterComponentAbout = __webpack_require__(711);

var _FooterComponentAbout2 = _interopRequireDefault(_FooterComponentAbout);

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
    _react2.default.createElement(_FooterComponentAbout2.default, { props: props })
  );
};

exports.default = About;

/***/ }),

/***/ 711:
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

var FooterComponent = function FooterComponent(props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _reactMaterialize.Footer,
      { copyrights: '\xA92017. Green Road Capital, LLC. All rights reserved.',
        links: _react2.default.createElement(
          'ul',
          null,
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/', className: 'footer-content', onClick: props.history.push('/') },
              'Home'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/contact', className: 'footer-content', onClick: props.history.push('/contact') },
              'Contact'
            )
          )
        )
      },
      _react2.default.createElement(
        'h5',
        { className: 'footer-header' },
        'Green Road Capital'
      ),
      _react2.default.createElement(
        'p',
        null,
        _react2.default.createElement(
          'div',
          { className: 'footer-content' },
          _react2.default.createElement('span', { className: 'fa fa-handshake-o', 'aria-hidden': 'true' }),
          ' 9010 Corbin Ave., Suite 5C Northridge, CA 91324'
        ),
        _react2.default.createElement(
          'div',
          { className: 'footer-content' },
          _react2.default.createElement('span', { className: 'fa fa-phone', 'aria-hidden': 'true' }),
          '\xA0(818) 527-5122'
        ),
        _react2.default.createElement(
          'div',
          { className: 'footer-content' },
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
  );
};

exports.default = FooterComponent;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvc3JjL2NvbXBvbmVudHMvQWJvdXQvQWJvdXQuanN4Iiwid2VicGFjazovLy8uL3B1YmxpYy9zcmMvY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyQ29tcG9uZW50QWJvdXQuanN4Il0sIm5hbWVzIjpbIkFib3V0IiwicHJvcHMiLCJGb290ZXJDb21wb25lbnQiLCJoaXN0b3J5IiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFHQSxJQUFNQSxRQUFRLFNBQVJBLEtBQVEsQ0FBQ0MsS0FBRDtBQUFBLFNBQ1o7QUFBQTtBQUFBO0FBQ0UsMkRBQWEsT0FBT0EsS0FBcEIsR0FERjtBQUVFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsWUFBZjtBQUNFLCtDQUFLLFdBQVUsa0JBQWYsRUFBa0MsS0FBSSwwREFBdEM7QUFERixPQURGO0FBSUU7QUFBQTtBQUFBLFVBQUssV0FBVSxRQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURGO0FBY0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWRGLE9BSkY7QUEyQkU7QUFBQTtBQUFBLFVBQUssV0FBVSxZQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBM0JGLEtBRkY7QUFtQ0Usb0VBQWlCLE9BQU9BLEtBQXhCO0FBbkNGLEdBRFk7QUFBQSxDQUFkOztrQkF3Q2VELEs7Ozs7Ozs7Ozs7Ozs7O0FDOUNmOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxJQUFNRSxrQkFBa0IsU0FBbEJBLGVBQWtCO0FBQUEsU0FDdEI7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFFBQVEsWUFBVyx5REFBbkI7QUFDRSxlQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQSxnQkFBTSxJQUFHLEdBQVQsRUFBYSxXQUFVLGdCQUF2QixFQUF3QyxTQUFTRCxNQUFNRSxPQUFOLENBQWNDLElBQWQsQ0FBbUIsR0FBbkIsQ0FBakQ7QUFBQTtBQUFBO0FBQUosV0FERjtBQUVFO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQSxnQkFBTSxJQUFHLFVBQVQsRUFBb0IsV0FBVSxnQkFBOUIsRUFBK0MsU0FBU0gsTUFBTUUsT0FBTixDQUFjQyxJQUFkLENBQW1CLFVBQW5CLENBQXhEO0FBQUE7QUFBQTtBQUFKO0FBRkY7QUFGSjtBQVFJO0FBQUE7QUFBQSxVQUFJLFdBQVUsZUFBZDtBQUFBO0FBQUEsT0FSSjtBQVNJO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxZQUFLLFdBQVUsZ0JBQWY7QUFBZ0Msa0RBQU0sV0FBVSxtQkFBaEIsRUFBb0MsZUFBWSxNQUFoRCxHQUFoQztBQUFBO0FBQUEsU0FERjtBQUdFO0FBQUE7QUFBQSxZQUFLLFdBQVUsZ0JBQWY7QUFBZ0Msa0RBQU0sV0FBVSxhQUFoQixFQUE4QixlQUFZLE1BQTFDLEdBQWhDO0FBQUE7QUFBQSxTQUhGO0FBSUU7QUFBQTtBQUFBLFlBQUssV0FBVSxnQkFBZjtBQUFnQyxrREFBTSxXQUFVLHVCQUFoQixFQUF3QyxlQUFZLE1BQXBELEdBQWhDO0FBQUE7QUFBbUc7QUFBQTtBQUFBLGNBQUcsTUFBSyxrQ0FBUixFQUEyQyxRQUFPLE1BQWxEO0FBQUE7QUFBQTtBQUFuRztBQUpGO0FBVEo7QUFERixHQURzQjtBQUFBLENBQXhCOztrQkFxQmVGLGUiLCJmaWxlIjoiMC42ZmM1NzIxZDMwNjNlMjNjOWZmYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBOYXZCYXJBYm91dCBmcm9tICcuLi9OYXZCYXIvTmF2QmFyQWJvdXQnO1xuaW1wb3J0IEZvb3RlckNvbXBvbmVudCBmcm9tICcuLi9Gb290ZXIvRm9vdGVyQ29tcG9uZW50QWJvdXQnO1xuaW1wb3J0IHsgSnVtYm90cm9uIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcblxuXG5jb25zdCBBYm91dCA9IChwcm9wcykgPT4gKFxuICA8ZGl2PlxuICAgIDxOYXZCYXJBYm91dCBwcm9wcz17cHJvcHN9IC8+XG4gICAgPEp1bWJvdHJvbj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJvdXQtbG9nb1wiPlxuICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImFib3V0LWxvZ28taW1hZ2VcIiBzcmM9XCIuLi8uLi8uLi8uL2Fzc2V0cy9pbWFnZXMvR3JlZW5fUm9hZF9DYXBpdGFsX0xvZ29fTmV3LmpwZ1wiIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93XCI+XG4gICAgICAgIDxwPkdyZWVuIFJvYWQgQ2FwaXRhbCwgTExDIHdhcyBmb3VuZGVkXG4gICAgICAgICAgaW4gMjAxNyBhbmQgaXMgYmFzZWQgaW4gTG9zIEFuZ2VsZXMsIENBLlxuICAgICAgICAgIEdyZWVuIFJvYWQgQ2FwaXRhbCBpcyBsZWQgYnkgYW5cbiAgICAgICAgICBpbnN0aXR1dGlvbmFsbHkgc2Vhc29uZWQgbWFuYWdlbWVudFxuICAgICAgICAgIHRlYW0gd2l0aCAxMysgeWVhcnMgb2YgY29tYmluZWRcbiAgICAgICAgICBleHBlcmllbmNlIG1hbmFnaW5nIGluc3RpdHV0aW9uYWxcbiAgICAgICAgICBhY2NvdW50cywgMjIrIHllYXJzIGluIHRyYWRpbmcgd2l0aCB0aGVcbiAgICAgICAgICBzYW1lIGZsdWlkIHN0cmF0ZWd5IHVzaW5nIGEgcHJvcHJpZXRhcnlcbiAgICAgICAgICB0cmFkaW5nIGZvcm11bGEsIGFuZCA0MCsgeWVhcnMgb2ZcbiAgICAgICAgICBvZmZlcmluZyBkaXZlcnNpZmljYXRpb24gYmVuZWZpdHMgbm90XG4gICAgICAgICAgc2VlbiBpbiB0cmFkaXRpb25hbCBlcXVpdHksIGRlYnQsIGFuZFxuICAgICAgICAgIGFsdGVybmF0aXZlIGludmVzdG1lbnRzLlxuICAgICAgICA8L3A+XG4gICAgICAgIDxwPkdyZWVuIFJvYWQgQ2FwaXRhbCBpcyBjb21taXR0ZWQgdG9cbiAgICAgICAgICBkZWxpdmVyaW5nwqB0cmFuc3BhcmVudCBhbHRlcm5hdGl2ZVxuICAgICAgICAgIGludmVzdG1lbnQgc29sdXRpb25zIHRvwqBzb3BoaXN0aWNhdGVkXG4gICAgICAgICAgaGlnaC1uZXQgd29ydGggaW52ZXN0b3JzXG4gICAgICAgICAgYW5kwqBpbnN0aXR1dGlvbnMgc2Vla2luZyB1bmNvcnJlbGF0ZWRcbiAgICAgICAgICByZXR1cm5zIGFuZMKgYWJvdmUtYXZlcmFnZSBwcm9maXRcbiAgICAgICAgICBwYXJ0aWNpcGF0aW9uLlxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlzY2xvc3VyZVwiPlxuICAgICAgICA8cD5cbiAgICAgICAgICBBY2Nlc3MgdG8gdGhpcyB3ZWJzaXRlIGlzIHByb3ZpZGVkIGJ5IEdyZWVuIFJvYWQgQ2FwaXRhbCwgTExDIChcIkdyZWVuIFJvYWRcIikgZm9yIGluZm9ybWF0aW9uYWwgcHVycG9zZXMgb25seS4gVGhlIHB1YmxpY2F0aW9uIG9mIHRoaXMgd2Vic2l0ZSBpcyBsaW1pdGVkIHRvIHRoZSBkaXNzZW1pbmF0aW9uIG9mIGdlbmVyYWwgaW5mb3JtYXRpb24gcGVydGFuaW5nIHRvIHRoZSBzZXJ2aWNlcyBvZmZlcmVkIGJ5IEdyZWVuIFJvYWQuIE5vIHBvcnRpb24gb2YgdGhlIGNvbW1lbnRhcnkgaW5jbHVkZWQgaGVyaW4gaXMgdG8gYmUgY29uc3RydWVkIGFzIGEgc29saWNpdGF0aW9uIHRvIGVmZmVjdCB0cmFuc2FjdGlvbnMgaW4gc2VjdXJpdGllcyBvciB0aGUgcHJvdmlzaW9uIG9mIHBlcnNvbmFsaXplZCBpbnZlc3RtZW50LCB0YXgsIG9yIGxlZ2FsIGFkdmljZS4gVGhlcmUgaXMgbm8gZ3VhcmFudGVlIHRoYXQgYWN0aXZlIGFzc2V0IG1hbmFnZW1lbnQgb3IgYW55IGludmVzdG1lbnQgc3RyYXRlZ3kgd2lsbCBiZSBzdWNjZXNzZnVsLiBJbnZlc3RpbmcgaW52b2x2ZXMgcmlzaywgaW5jbHVkaW5nIHRoZSBwb3RlbnRpYWwgbG9zcyBvZiBwcmluY2lwYWwuIE5vIGludmVzdG1lbnQgc3RyYXRlZ3kgY2FuIGd1YXJhbnRlZSBhIHByb2ZpdCBvciBwcm90ZWN0IGFnYWluc3QgbG9zcyBpbiBwZXJpb2RzIG9mIGRlY2xpbmluZyB2YWx1ZXMuIFBhc3QgcGVyZm9ybWFuY2UgaXMgbm90IG5lY2Vzc2FyaWx5IGluZGljYXRpdmUgb2YgZnV0dXJlIHJlc3VsdHMuIFRoZSBmb3J3YXJkLWxvb2tpbmcgc3RhdGVtZW50cyBjb250YWluZWQgb24gdGhpcyB3ZWJzaXRlIGFyZSBpbmNsdWRlZCBmb3IgaWxsdXN0cmF0aXZlIHB1cnBvc2VzIG9ubHksIGFyZSBpbmhlcmVudGx5IHNwY3VsYXRpdmUgYXMgdGhleSByZWxhdGUgdG8gZnV0dXJlIGV2ZW50cywgYW5kIG1heSBub3QgYmUgcmVhbGl6ZWQgYXMgZGVzY3JpYmVkLiBUaGVzZSBmb3J3YXJkLWxvb2tpbmcgc3RhdGVtZW50cyB3aWxsIG5vdCBiZSB1cGRhdGVkIGluIHRoZSBmdXR1cmUuIE9waW5pb25zIGV4cHJlc3NlZCBoZXJlaW4gYXJlIG1hZGUgYXMgb2YgdGhlIGRhdGUgb2YgcHVibGljYXRpb24gYW5kIGFyZSBzdWJqZWN0IHRvIGNoYW5nZSB3aXRob3V0IG5vdGljZS4gRGF0YSBhbmQgb3RoZXIgc291cmNlIGluZm9ybWF0aW9uIHByZXNlbnRlZCBvbiB0aGlzIHdlYnNpdGUgd2VyZSBvYnRhaW5lZCBmcm9tIHB1Ymxpc2hlZCBzb3VyY2VzIGJlbGlldmVkIHRvIGJlIHJlbGlhYmxlLCBidXQgd2hpY2ggYXJlIG5vdCB3YXJyYW50ZWQgYXMgdG8gYWNjdXJhY3kgb3IgY29tcGxldGVuZXNzLiBObyBwYXJ0IG9mIHRoaXMgd2Vic2l0ZSBtYXkgYmUgcmVwcm9kdWNlZCBpbiBhbnkgbWFubmVyIHdpdGhvdXQgdGhlIHdyaXR0ZW4gcGVybWlzc2lvbiBvZiBHcmVlbiBSb2FkLlxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L0p1bWJvdHJvbj5cbiAgICA8Rm9vdGVyQ29tcG9uZW50IHByb3BzPXtwcm9wc30gLz5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBBYm91dDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9zcmMvY29tcG9uZW50cy9BYm91dC9BYm91dC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRm9vdGVyIH0gZnJvbSAncmVhY3QtbWF0ZXJpYWxpemUnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5jb25zdCBGb290ZXJDb21wb25lbnQgPSBwcm9wcyA9PiAoXG4gIDxkaXY+XG4gICAgPEZvb3RlciBjb3B5cmlnaHRzPVwiwqkyMDE3LiBHcmVlbiBSb2FkIENhcGl0YWwsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cIlxuICAgICAgbGlua3M9e1xuICAgICAgICA8dWw+XG4gICAgICAgICAgPGxpPjxMaW5rIHRvPVwiL1wiIGNsYXNzTmFtZT1cImZvb3Rlci1jb250ZW50XCIgb25DbGljaz17cHJvcHMuaGlzdG9yeS5wdXNoKCcvJyl9PkhvbWU8L0xpbms+PC9saT5cbiAgICAgICAgICA8bGk+PExpbmsgdG89XCIvY29udGFjdFwiIGNsYXNzTmFtZT1cImZvb3Rlci1jb250ZW50XCIgb25DbGljaz17cHJvcHMuaGlzdG9yeS5wdXNoKCcvY29udGFjdCcpfT5Db250YWN0PC9MaW5rPjwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICB9XG4gICAgPlxuICAgICAgICA8aDUgY2xhc3NOYW1lPVwiZm9vdGVyLWhlYWRlclwiPkdyZWVuIFJvYWQgQ2FwaXRhbDwvaDU+XG4gICAgICAgIDxwPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLWNvbnRlbnRcIj48c3BhbiBjbGFzc05hbWU9XCJmYSBmYS1oYW5kc2hha2Utb1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIC8+IDkwMTAgQ29yYmluIEF2ZS4sIFN1aXRlIDVDXG4gICAgICAgICAgTm9ydGhyaWRnZSwgQ0EgOTEzMjQ8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci1jb250ZW50XCI+PHNwYW4gY2xhc3NOYW1lPVwiZmEgZmEtcGhvbmVcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+wqAoODE4KSA1MjctNTEyMjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLWNvbnRlbnRcIj48c3BhbiBjbGFzc05hbWU9XCJmYSBmYS1lbnZlbG9wZS1vcGVuLW9cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+wqA8YSBocmVmPVwibWFpbHRvOmluZm9AZ3JlZW5yb2FkY2FwaXRhbC5uZXRcIiB0YXJnZXQ9XCJfdG9wXCI+aW5mb0BncmVlbnJvYWRjYXBpdGFsLm5ldDwvYT48L2Rpdj5cbiAgICAgICAgPC9wPlxuICAgIDwvRm9vdGVyPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlckNvbXBvbmVudDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9zcmMvY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyQ29tcG9uZW50QWJvdXQuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==