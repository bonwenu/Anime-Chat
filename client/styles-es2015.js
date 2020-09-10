(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');\r\n\r\n:root {\r\n\t--dark-color-a: #667aff;\r\n\t--dark-color-b: #7386ff;\r\n\t--light-color: #e6e9ff;\r\n\t--success-color: #5cb85c;\r\n\t--error-color: #d9534f;\r\n}\r\n\r\n* {\r\n\tbox-sizing: border-box;\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n}\r\n\r\nbody {\r\n\tfont-family: 'Roboto', sans-serif;\r\n\tfont-size: 16px;\r\n\tbackground: var(--light-color);\r\n\tmargin: 20px;\r\n}\r\n\r\nul {\r\n\tlist-style: none;\r\n}\r\n\r\na {\r\n\ttext-decoration: none;\r\n}\r\n\r\n.btn {\r\n\tcursor: pointer;\r\n\tpadding: 5px 15px;\r\n\tbackground: var(--light-color);\r\n\tcolor: var(--dark-color-a);\r\n\tborder: 0;\r\n\tfont-size: 17px;\r\n}\r\n\r\n/* Chat Page */\r\n\r\n.chat-container {\r\n\tmax-width: 1100px;\r\n\tbackground: #fff;\r\n\tmargin: 30px auto;\r\n\toverflow: hidden;\r\n}\r\n\r\n.chat-header {\r\n\tbackground: var(--dark-color-a);\r\n\tcolor: #fff;\r\n\tborder-top-left-radius: 5px;\r\n\tborder-top-right-radius: 5px;\r\n\tpadding: 15px;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: space-between;\r\n}\r\n\r\n.chat-main {\r\n\tdisplay: grid;\r\n\tgrid-template-columns: 1fr 3fr;\r\n}\r\n\r\n.chat-sidebar {\r\n\tbackground: var(--dark-color-b);\r\n\tcolor: #fff;\r\n\tpadding: 20px 20px 60px;\r\n\toverflow-y: scroll;\r\n}\r\n\r\n.chat-sidebar h2 {\r\n\tfont-size: 20px;\r\n\tbackground: rgba(0, 0, 0, 0.1);\r\n\tpadding: 10px;\r\n\tmargin-bottom: 20px;\r\n}\r\n\r\n.chat-sidebar h3 {\r\n\tmargin-bottom: 15px;\r\n}\r\n\r\n.chat-sidebar ul li {\r\n\tpadding: 10px 0;\r\n}\r\n\r\n.chat-messages {\r\n\tpadding: 30px;\r\n\tmax-height: 500px;\r\n\toverflow-y: scroll;\r\n}\r\n\r\n.chat-messages .message {\r\n\tpadding: 10px;\r\n\tmargin-bottom: 15px;\r\n\tbackground-color: var(--light-color);\r\n\tborder-radius: 5px;\r\n\toverflow-wrap: break-word;\r\n}\r\n\r\n.chat-messages .message .meta {\r\n\tfont-size: 15px;\r\n\tfont-weight: bold;\r\n\tcolor: var(--dark-color-b);\r\n\topacity: 0.7;\r\n\tmargin-bottom: 7px;\r\n}\r\n\r\n.chat-messages .message .meta span {\r\n\tcolor: #777;\r\n}\r\n\r\n.chat-form-container {\r\n\tpadding: 20px 30px;\r\n\tbackground-color: var(--dark-color-a);\r\n}\r\n\r\n.chat-form-container form {\r\n\tdisplay: flex;\r\n}\r\n\r\n.chat-form-container input[type='text'] {\r\n\tfont-size: 16px;\r\n\tpadding: 5px;\r\n\theight: 40px;\r\n\tflex: 1;\r\n}\r\n\r\n/* Join Page */\r\n\r\n.join-container {\r\n\tmax-width: 500px;\r\n\tmargin: 80px auto;\r\n\tcolor: #fff;\r\n}\r\n\r\n.join-header {\r\n\ttext-align: center;\r\n\tpadding: 20px;\r\n\tbackground: var(--dark-color-a);\r\n\tborder-top-left-radius: 5px;\r\n\tborder-top-right-radius: 5px;\r\n}\r\n\r\n.join-main {\r\n\tpadding: 30px 40px;\r\n\tbackground: var(--dark-color-b);\r\n}\r\n\r\n.join-main p {\r\n\tmargin-bottom: 20px;\r\n}\r\n\r\n.join-main .form-control {\r\n\tmargin-bottom: 20px;\r\n}\r\n\r\n.join-main label {\r\n\tdisplay: block;\r\n\tmargin-bottom: 5px;\r\n}\r\n\r\n.join-main input[type='text'] {\r\n\tfont-size: 16px;\r\n\tpadding: 5px;\r\n\theight: 40px;\r\n\twidth: 100%;\r\n}\r\n\r\n.join-main select {\r\n\tfont-size: 16px;\r\n\tpadding: 5px;\r\n\theight: 40px;\r\n\twidth: 100%;\r\n}\r\n\r\n.join-main .btn {\r\n\tmargin-top: 20px;\r\n\twidth: 100%;\r\n}\r\n\r\n@media (max-width: 700px) {\r\n\t.chat-main {\r\n\t\tdisplay: block;\r\n\t}\r\n\r\n\t.chat-sidebar {\r\n\t\tdisplay: none;\r\n\t}\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3N0eWxlcy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMEVBQTBFOztBQUUxRTtDQUNDLHVCQUF1QjtDQUN2Qix1QkFBdUI7Q0FDdkIsc0JBQXNCO0NBQ3RCLHdCQUF3QjtDQUN4QixzQkFBc0I7QUFDdkI7O0FBRUE7Q0FDQyxzQkFBc0I7Q0FDdEIsU0FBUztDQUNULFVBQVU7QUFDWDs7QUFFQTtDQUNDLGlDQUFpQztDQUNqQyxlQUFlO0NBQ2YsOEJBQThCO0NBQzlCLFlBQVk7QUFDYjs7QUFFQTtDQUNDLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLHFCQUFxQjtBQUN0Qjs7QUFFQTtDQUNDLGVBQWU7Q0FDZixpQkFBaUI7Q0FDakIsOEJBQThCO0NBQzlCLDBCQUEwQjtDQUMxQixTQUFTO0NBQ1QsZUFBZTtBQUNoQjs7QUFFQSxjQUFjOztBQUVkO0NBQ0MsaUJBQWlCO0NBQ2pCLGdCQUFnQjtDQUNoQixpQkFBaUI7Q0FDakIsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsK0JBQStCO0NBQy9CLFdBQVc7Q0FDWCwyQkFBMkI7Q0FDM0IsNEJBQTRCO0NBQzVCLGFBQWE7Q0FDYixhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLDhCQUE4QjtBQUMvQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYiw4QkFBOEI7QUFDL0I7O0FBRUE7Q0FDQywrQkFBK0I7Q0FDL0IsV0FBVztDQUNYLHVCQUF1QjtDQUN2QixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsOEJBQThCO0NBQzlCLGFBQWE7Q0FDYixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLGlCQUFpQjtDQUNqQixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLG9DQUFvQztDQUNwQyxrQkFBa0I7Q0FDbEIseUJBQXlCO0FBQzFCOztBQUVBO0NBQ0MsZUFBZTtDQUNmLGlCQUFpQjtDQUNqQiwwQkFBMEI7Q0FDMUIsWUFBWTtDQUNaLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLFdBQVc7QUFDWjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixxQ0FBcUM7QUFDdEM7O0FBRUE7Q0FDQyxhQUFhO0FBQ2Q7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsWUFBWTtDQUNaLFlBQVk7Q0FDWixPQUFPO0FBQ1I7O0FBRUEsY0FBYzs7QUFDZDtDQUNDLGdCQUFnQjtDQUNoQixpQkFBaUI7Q0FDakIsV0FBVztBQUNaOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLGFBQWE7Q0FDYiwrQkFBK0I7Q0FDL0IsMkJBQTJCO0NBQzNCLDRCQUE0QjtBQUM3Qjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQiwrQkFBK0I7QUFDaEM7O0FBRUE7Q0FDQyxtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxjQUFjO0NBQ2Qsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsZUFBZTtDQUNmLFlBQVk7Q0FDWixZQUFZO0NBQ1osV0FBVztBQUNaOztBQUVBO0NBQ0MsZUFBZTtDQUNmLFlBQVk7Q0FDWixZQUFZO0NBQ1osV0FBVztBQUNaOztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLFdBQVc7QUFDWjs7QUFFQTtDQUNDO0VBQ0MsY0FBYztDQUNmOztDQUVBO0VBQ0MsYUFBYTtDQUNkO0FBQ0QiLCJmaWxlIjoiLi4vc3R5bGVzLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuOnJvb3Qge1xyXG5cdC0tZGFyay1jb2xvci1hOiAjNjY3YWZmO1xyXG5cdC0tZGFyay1jb2xvci1iOiAjNzM4NmZmO1xyXG5cdC0tbGlnaHQtY29sb3I6ICNlNmU5ZmY7XHJcblx0LS1zdWNjZXNzLWNvbG9yOiAjNWNiODVjO1xyXG5cdC0tZXJyb3ItY29sb3I6ICNkOTUzNGY7XHJcbn1cclxuXHJcbioge1xyXG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0bWFyZ2luOiAwO1xyXG5cdHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbmJvZHkge1xyXG5cdGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuXHRmb250LXNpemU6IDE2cHg7XHJcblx0YmFja2dyb3VuZDogdmFyKC0tbGlnaHQtY29sb3IpO1xyXG5cdG1hcmdpbjogMjBweDtcclxufVxyXG5cclxudWwge1xyXG5cdGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbmEge1xyXG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmJ0biB7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdHBhZGRpbmc6IDVweCAxNXB4O1xyXG5cdGJhY2tncm91bmQ6IHZhcigtLWxpZ2h0LWNvbG9yKTtcclxuXHRjb2xvcjogdmFyKC0tZGFyay1jb2xvci1hKTtcclxuXHRib3JkZXI6IDA7XHJcblx0Zm9udC1zaXplOiAxN3B4O1xyXG59XHJcblxyXG4vKiBDaGF0IFBhZ2UgKi9cclxuXHJcbi5jaGF0LWNvbnRhaW5lciB7XHJcblx0bWF4LXdpZHRoOiAxMTAwcHg7XHJcblx0YmFja2dyb3VuZDogI2ZmZjtcclxuXHRtYXJnaW46IDMwcHggYXV0bztcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uY2hhdC1oZWFkZXIge1xyXG5cdGJhY2tncm91bmQ6IHZhcigtLWRhcmstY29sb3ItYSk7XHJcblx0Y29sb3I6ICNmZmY7XHJcblx0Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xyXG5cdGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XHJcblx0cGFkZGluZzogMTVweDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uY2hhdC1tYWluIHtcclxuXHRkaXNwbGF5OiBncmlkO1xyXG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcclxufVxyXG5cclxuLmNoYXQtc2lkZWJhciB7XHJcblx0YmFja2dyb3VuZDogdmFyKC0tZGFyay1jb2xvci1iKTtcclxuXHRjb2xvcjogI2ZmZjtcclxuXHRwYWRkaW5nOiAyMHB4IDIwcHggNjBweDtcclxuXHRvdmVyZmxvdy15OiBzY3JvbGw7XHJcbn1cclxuXHJcbi5jaGF0LXNpZGViYXIgaDIge1xyXG5cdGZvbnQtc2l6ZTogMjBweDtcclxuXHRiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcblx0cGFkZGluZzogMTBweDtcclxuXHRtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uY2hhdC1zaWRlYmFyIGgzIHtcclxuXHRtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4uY2hhdC1zaWRlYmFyIHVsIGxpIHtcclxuXHRwYWRkaW5nOiAxMHB4IDA7XHJcbn1cclxuXHJcbi5jaGF0LW1lc3NhZ2VzIHtcclxuXHRwYWRkaW5nOiAzMHB4O1xyXG5cdG1heC1oZWlnaHQ6IDUwMHB4O1xyXG5cdG92ZXJmbG93LXk6IHNjcm9sbDtcclxufVxyXG5cclxuLmNoYXQtbWVzc2FnZXMgLm1lc3NhZ2Uge1xyXG5cdHBhZGRpbmc6IDEwcHg7XHJcblx0bWFyZ2luLWJvdHRvbTogMTVweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1jb2xvcik7XHJcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xyXG5cdG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XHJcbn1cclxuXHJcbi5jaGF0LW1lc3NhZ2VzIC5tZXNzYWdlIC5tZXRhIHtcclxuXHRmb250LXNpemU6IDE1cHg7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0Y29sb3I6IHZhcigtLWRhcmstY29sb3ItYik7XHJcblx0b3BhY2l0eTogMC43O1xyXG5cdG1hcmdpbi1ib3R0b206IDdweDtcclxufVxyXG5cclxuLmNoYXQtbWVzc2FnZXMgLm1lc3NhZ2UgLm1ldGEgc3BhbiB7XHJcblx0Y29sb3I6ICM3Nzc7XHJcbn1cclxuXHJcbi5jaGF0LWZvcm0tY29udGFpbmVyIHtcclxuXHRwYWRkaW5nOiAyMHB4IDMwcHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1jb2xvci1hKTtcclxufVxyXG5cclxuLmNoYXQtZm9ybS1jb250YWluZXIgZm9ybSB7XHJcblx0ZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmNoYXQtZm9ybS1jb250YWluZXIgaW5wdXRbdHlwZT0ndGV4dCddIHtcclxuXHRmb250LXNpemU6IDE2cHg7XHJcblx0cGFkZGluZzogNXB4O1xyXG5cdGhlaWdodDogNDBweDtcclxuXHRmbGV4OiAxO1xyXG59XHJcblxyXG4vKiBKb2luIFBhZ2UgKi9cclxuLmpvaW4tY29udGFpbmVyIHtcclxuXHRtYXgtd2lkdGg6IDUwMHB4O1xyXG5cdG1hcmdpbjogODBweCBhdXRvO1xyXG5cdGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uam9pbi1oZWFkZXIge1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRwYWRkaW5nOiAyMHB4O1xyXG5cdGJhY2tncm91bmQ6IHZhcigtLWRhcmstY29sb3ItYSk7XHJcblx0Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xyXG5cdGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5qb2luLW1haW4ge1xyXG5cdHBhZGRpbmc6IDMwcHggNDBweDtcclxuXHRiYWNrZ3JvdW5kOiB2YXIoLS1kYXJrLWNvbG9yLWIpO1xyXG59XHJcblxyXG4uam9pbi1tYWluIHAge1xyXG5cdG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5qb2luLW1haW4gLmZvcm0tY29udHJvbCB7XHJcblx0bWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmpvaW4tbWFpbiBsYWJlbCB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0bWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4uam9pbi1tYWluIGlucHV0W3R5cGU9J3RleHQnXSB7XHJcblx0Zm9udC1zaXplOiAxNnB4O1xyXG5cdHBhZGRpbmc6IDVweDtcclxuXHRoZWlnaHQ6IDQwcHg7XHJcblx0d2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5qb2luLW1haW4gc2VsZWN0IHtcclxuXHRmb250LXNpemU6IDE2cHg7XHJcblx0cGFkZGluZzogNXB4O1xyXG5cdGhlaWdodDogNDBweDtcclxuXHR3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmpvaW4tbWFpbiAuYnRuIHtcclxuXHRtYXJnaW4tdG9wOiAyMHB4O1xyXG5cdHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcclxuXHQuY2hhdC1tYWluIHtcclxuXHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdH1cclxuXHJcblx0LmNoYXQtc2lkZWJhciB7XHJcblx0XHRkaXNwbGF5OiBub25lO1xyXG5cdH1cclxufSJdfQ== */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Projects\AnimeCord\angular-frontend\src\styles.css */"./src/styles.css");


/***/ })

},[[4,"runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map