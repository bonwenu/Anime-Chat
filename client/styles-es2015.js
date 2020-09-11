(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');\r\n\r\n:root {\r\n\t--dark-color-a: #080808;\r\n\t--dark-color-b: #7e7e7e60;\r\n\t--light-color: #dbd9d9;\r\n\t--success-color: #5cb85c;\r\n\t--error-color: #d9534f;\r\n}\r\n\r\n* {\r\n\tbox-sizing: border-box;\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n}\r\n\r\nbody {\r\n\tfont-family: 'Roboto', sans-serif;\r\n\tfont-size: 16px;\r\n\tbackground-image: linear-gradient(50deg, rgb(136, 136, 136), white);\r\n\tmargin: 20px;\r\n}\r\n\r\nul {\r\n\tlist-style: none;\r\n}\r\n\r\na {\r\n\ttext-decoration: none;\r\n}\r\n\r\n.btn {\r\n\tcursor: pointer;\r\n\tpadding: 5px 15px;\r\n\tbackground: var(--light-color);\r\n\tcolor: var(--dark-color-a);\r\n\tborder: 0;\r\n\tfont-size: 17px;\r\n}\r\n\r\n.c-btn-1 {\r\n\tcursor: pointer;\r\n\tpadding: 5px 15px;\r\n\tbackground: rgba(255, 255, 255, 0.164);\r\n\tcolor: var(--dark-color-a);\r\n\tborder: 0;\r\n\tfont-size: 17px;\r\n\twidth: 3in;\r\n\tmargin-left: 0.7in;\r\n\tmargin-bottom: 20px;\r\n}\r\n\r\n.c-btn-2 {\r\n\tcursor: pointer;\r\n\tpadding: 5px 15px;\r\n\tbackground: rgba(252, 252, 252, 0.514);\r\n\tcolor: var(--dark-color-a);\r\n\tborder: 0;\r\n\tfont-size: 17px;\r\n\twidth: 3in;\r\n\tmargin-left: 0.7in;\r\n\tmargin-bottom: 20px;\r\n}\r\n\r\n.c-btn-3 {\r\n\tcursor: pointer;\r\n\tpadding: 5px 15px;\r\n\tbackground: rgba(255, 255, 255, 0.726);\r\n\tcolor: var(--dark-color-a);\r\n\tborder: 0;\r\n\tfont-size: 17px;\r\n\twidth: 3in;\r\n\tmargin-left: 0.7in;\r\n\tmargin-bottom: 20px;\r\n}\r\n\r\n.c-btn-4 {\r\n\tcursor: pointer;\r\n\tpadding: 5px 15px;\r\n\tbackground: rgb(255, 255, 255);\r\n\tcolor: var(--dark-color-a);\r\n\tborder: 0;\r\n\tfont-size: 17px;\r\n\twidth: 3in;\r\n\tmargin-left: 0.7in;\r\n}\r\n\r\n/* Chat Page */\r\n\r\n.chat-container {\r\n\tmax-width: 1100px;\r\n\tbackground: #fff;\r\n\tmargin: 30px auto;\r\n\toverflow: hidden;\r\n}\r\n\r\n.chat-header {\r\n\tbackground: var(--dark-color-a);\r\n\tcolor: #fff;\r\n\tborder-top-left-radius: 5px;\r\n\tborder-top-right-radius: 5px;\r\n\tpadding: 15px;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: space-between;\r\n}\r\n\r\n.chat-main {\r\n\tdisplay: grid;\r\n\tgrid-template-columns: 1fr 3fr;\r\n}\r\n\r\n.chat-sidebar {\r\n\tbackground: var(--dark-color-b);\r\n\tcolor: black;\r\n\tpadding: 20px 20px 60px;\r\n\toverflow-y: scroll;\r\n}\r\n\r\n.chat-sidebar h2 {\r\n\tfont-size: 20px;\r\n\tbackground: rgba(0, 0, 0, 0.1);\r\n\tpadding: 10px;\r\n\tmargin-bottom: 20px;\r\n}\r\n\r\n.chat-sidebar h3 {\r\n\tmargin-bottom: 15px;\r\n}\r\n\r\n.chat-sidebar ul li {\r\n\tpadding: 10px 0;\r\n}\r\n\r\n.chat-messages {\r\n\tpadding: 30px;\r\n\tmax-height: 500px;\r\n\toverflow-y: scroll;\r\n}\r\n\r\n.chat-messages .message {\r\n\tpadding: 10px;\r\n\tmargin-bottom: 15px;\r\n\tbackground-color: var(--light-color);\r\n\tborder-radius: 5px;\r\n\toverflow-wrap: break-word;\r\n}\r\n\r\n/* username in chat */\r\n\r\n.chat-messages .message .meta {\r\n\tfont-size: 15px;\r\n\tfont-weight: bold;\r\n\tcolor: black;\r\n\topacity: 0.7;\r\n\tmargin-bottom: 7px;\r\n}\r\n\r\n/* time */\r\n\r\n.chat-messages .message .meta span {\r\n\tcolor: blue;\r\n}\r\n\r\n.chat-form-container {\r\n\tpadding: 20px 30px;\r\n\tbackground-color: var(--dark-color-a);\r\n}\r\n\r\n.chat-form-container form {\r\n\tdisplay: flex;\r\n}\r\n\r\n.chat-form-container input[type='text'] {\r\n\tfont-size: 16px;\r\n\tpadding: 5px;\r\n\theight: 40px;\r\n\tflex: 1;\r\n}\r\n\r\n/* Join Page */\r\n\r\n.join-container {\r\n\tmax-width: 500px;\r\n\tmargin: 80px auto;\r\n\tcolor: #fff;\r\n\tmargin-top: 20px;\r\n}\r\n\r\n.join-header {\r\n\ttext-align: center;\r\n\tpadding: 20px;\r\n\tbackground: var(--dark-color-a);\r\n\tborder-top-left-radius: 5px;\r\n\tborder-top-right-radius: 5px;\r\n}\r\n\r\n.join-main {\r\n\tpadding: 30px 40px;\r\n\tbackground: var(--dark-color-b);\r\n}\r\n\r\n.join-main p {\r\n\tmargin-bottom: 20px;\r\n}\r\n\r\n.join-main .form-control {\r\n\tmargin-bottom: 20px;\r\n}\r\n\r\n.join-main label {\r\n\tdisplay: block;\r\n\tmargin-bottom: 5px;\r\n}\r\n\r\n.join-main input[type='text'] {\r\n\tfont-size: 16px;\r\n\tpadding: 5px;\r\n\theight: 40px;\r\n\twidth: 100%;\r\n}\r\n\r\n.join-main select {\r\n\tfont-size: 16px;\r\n\tpadding: 5px;\r\n\theight: 40px;\r\n\twidth: 100%;\r\n}\r\n\r\n.join-main .btn {\r\n\tmargin-top: 20px;\r\n\twidth: 100%;\r\n}\r\n\r\n@media (max-width: 700px) {\r\n\t.chat-main {\r\n\t\tdisplay: block;\r\n\t}\r\n\r\n\t.chat-sidebar {\r\n\t\tdisplay: none;\r\n\t}\r\n}\r\n\r\ninput.format {\r\n\theight: 40px;\r\n\twidth: 4.35in;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,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QUNkLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLGVBQWU7Q0FDZixZQUFZO0NBQ1osWUFBWTtDQUNaLFdBQVc7QUFDWjs7QUFFQTtDQUNDLGVBQWU7Q0FDZixZQUFZO0NBQ1osWUFBWTtDQUNaLFdBQVc7QUFDWjs7QUFFQTtDQUNDLGdCQUFnQjtDQUNoQixXQUFXO0FBQ1o7O0FBRUE7Q0FDQztFQUNDLGNBQWM7Q0FDZjs7Q0FFQTtFQUNDLGFBQWE7Q0FDZDtBQUNEOztBQUVBO0NBQ0MsWUFBWTtDQUNaLGFBQWE7QUFDZCIsImZpbGUiOiJzcmMvc3R5bGVzLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuOnJvb3Qge1xyXG5cdC0tZGFyay1jb2xvci1hOiAjMDgwODA4O1xyXG5cdC0tZGFyay1jb2xvci1iOiAjN2U3ZTdlNjA7XHJcblx0LS1saWdodC1jb2xvcjogI2RiZDlkOTtcclxuXHQtLXN1Y2Nlc3MtY29sb3I6ICM1Y2I4NWM7XHJcblx0LS1lcnJvci1jb2xvcjogI2Q5NTM0ZjtcclxufVxyXG5cclxuKiB7XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRtYXJnaW46IDA7XHJcblx0cGFkZGluZzogMDtcclxufVxyXG5cclxuYm9keSB7XHJcblx0Zm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG5cdGZvbnQtc2l6ZTogMTZweDtcclxuXHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNTBkZWcsIHJnYigxMzYsIDEzNiwgMTM2KSwgd2hpdGUpO1xyXG5cdG1hcmdpbjogMjBweDtcclxufVxyXG5cclxudWwge1xyXG5cdGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbmEge1xyXG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmJ0biB7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdHBhZGRpbmc6IDVweCAxNXB4O1xyXG5cdGJhY2tncm91bmQ6IHZhcigtLWxpZ2h0LWNvbG9yKTtcclxuXHRjb2xvcjogdmFyKC0tZGFyay1jb2xvci1hKTtcclxuXHRib3JkZXI6IDA7XHJcblx0Zm9udC1zaXplOiAxN3B4O1xyXG59XHJcblxyXG4uYy1idG4tMSB7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdHBhZGRpbmc6IDVweCAxNXB4O1xyXG5cdGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNjQpO1xyXG5cdGNvbG9yOiB2YXIoLS1kYXJrLWNvbG9yLWEpO1xyXG5cdGJvcmRlcjogMDtcclxuXHRmb250LXNpemU6IDE3cHg7XHJcblx0d2lkdGg6IDNpbjtcclxuXHRtYXJnaW4tbGVmdDogMC43aW47XHJcblx0bWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4uYy1idG4tMiB7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdHBhZGRpbmc6IDVweCAxNXB4O1xyXG5cdGJhY2tncm91bmQ6IHJnYmEoMjUyLCAyNTIsIDI1MiwgMC41MTQpO1xyXG5cdGNvbG9yOiB2YXIoLS1kYXJrLWNvbG9yLWEpO1xyXG5cdGJvcmRlcjogMDtcclxuXHRmb250LXNpemU6IDE3cHg7XHJcblx0d2lkdGg6IDNpbjtcclxuXHRtYXJnaW4tbGVmdDogMC43aW47XHJcblx0bWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmMtYnRuLTMge1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHRwYWRkaW5nOiA1cHggMTVweDtcclxuXHRiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzI2KTtcclxuXHRjb2xvcjogdmFyKC0tZGFyay1jb2xvci1hKTtcclxuXHRib3JkZXI6IDA7XHJcblx0Zm9udC1zaXplOiAxN3B4O1xyXG5cdHdpZHRoOiAzaW47XHJcblx0bWFyZ2luLWxlZnQ6IDAuN2luO1xyXG5cdG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuLmMtYnRuLTQge1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHRwYWRkaW5nOiA1cHggMTVweDtcclxuXHRiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcblx0Y29sb3I6IHZhcigtLWRhcmstY29sb3ItYSk7XHJcblx0Ym9yZGVyOiAwO1xyXG5cdGZvbnQtc2l6ZTogMTdweDtcclxuXHR3aWR0aDogM2luO1xyXG5cdG1hcmdpbi1sZWZ0OiAwLjdpbjtcclxufVxyXG5cclxuLyogQ2hhdCBQYWdlICovXHJcblxyXG4uY2hhdC1jb250YWluZXIge1xyXG5cdG1heC13aWR0aDogMTEwMHB4O1xyXG5cdGJhY2tncm91bmQ6ICNmZmY7XHJcblx0bWFyZ2luOiAzMHB4IGF1dG87XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmNoYXQtaGVhZGVyIHtcclxuXHRiYWNrZ3JvdW5kOiB2YXIoLS1kYXJrLWNvbG9yLWEpO1xyXG5cdGNvbG9yOiAjZmZmO1xyXG5cdGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcclxuXHRib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xyXG5cdHBhZGRpbmc6IDE1cHg7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmNoYXQtbWFpbiB7XHJcblx0ZGlzcGxheTogZ3JpZDtcclxuXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XHJcbn1cclxuXHJcbi5jaGF0LXNpZGViYXIge1xyXG5cdGJhY2tncm91bmQ6IHZhcigtLWRhcmstY29sb3ItYik7XHJcblx0Y29sb3I6IGJsYWNrO1xyXG5cdHBhZGRpbmc6IDIwcHggMjBweCA2MHB4O1xyXG5cdG92ZXJmbG93LXk6IHNjcm9sbDtcclxufVxyXG5cclxuLmNoYXQtc2lkZWJhciBoMiB7XHJcblx0Zm9udC1zaXplOiAyMHB4O1xyXG5cdGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuXHRwYWRkaW5nOiAxMHB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5jaGF0LXNpZGViYXIgaDMge1xyXG5cdG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5jaGF0LXNpZGViYXIgdWwgbGkge1xyXG5cdHBhZGRpbmc6IDEwcHggMDtcclxufVxyXG5cclxuLmNoYXQtbWVzc2FnZXMge1xyXG5cdHBhZGRpbmc6IDMwcHg7XHJcblx0bWF4LWhlaWdodDogNTAwcHg7XHJcblx0b3ZlcmZsb3cteTogc2Nyb2xsO1xyXG59XHJcblxyXG4uY2hhdC1tZXNzYWdlcyAubWVzc2FnZSB7XHJcblx0cGFkZGluZzogMTBweDtcclxuXHRtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWNvbG9yKTtcclxuXHRib3JkZXItcmFkaXVzOiA1cHg7XHJcblx0b3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcclxufVxyXG5cclxuLyogdXNlcm5hbWUgaW4gY2hhdCAqL1xyXG4uY2hhdC1tZXNzYWdlcyAubWVzc2FnZSAubWV0YSB7XHJcblx0Zm9udC1zaXplOiAxNXB4O1xyXG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdGNvbG9yOiBibGFjaztcclxuXHRvcGFjaXR5OiAwLjc7XHJcblx0bWFyZ2luLWJvdHRvbTogN3B4O1xyXG59XHJcblxyXG4vKiB0aW1lICovXHJcbi5jaGF0LW1lc3NhZ2VzIC5tZXNzYWdlIC5tZXRhIHNwYW4ge1xyXG5cdGNvbG9yOiBibHVlO1xyXG59XHJcblxyXG4uY2hhdC1mb3JtLWNvbnRhaW5lciB7XHJcblx0cGFkZGluZzogMjBweCAzMHB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstY29sb3ItYSk7XHJcbn1cclxuXHJcbi5jaGF0LWZvcm0tY29udGFpbmVyIGZvcm0ge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5jaGF0LWZvcm0tY29udGFpbmVyIGlucHV0W3R5cGU9J3RleHQnXSB7XHJcblx0Zm9udC1zaXplOiAxNnB4O1xyXG5cdHBhZGRpbmc6IDVweDtcclxuXHRoZWlnaHQ6IDQwcHg7XHJcblx0ZmxleDogMTtcclxufVxyXG5cclxuLyogSm9pbiBQYWdlICovXHJcbi5qb2luLWNvbnRhaW5lciB7XHJcblx0bWF4LXdpZHRoOiA1MDBweDtcclxuXHRtYXJnaW46IDgwcHggYXV0bztcclxuXHRjb2xvcjogI2ZmZjtcclxuXHRtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uam9pbi1oZWFkZXIge1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRwYWRkaW5nOiAyMHB4O1xyXG5cdGJhY2tncm91bmQ6IHZhcigtLWRhcmstY29sb3ItYSk7XHJcblx0Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xyXG5cdGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5qb2luLW1haW4ge1xyXG5cdHBhZGRpbmc6IDMwcHggNDBweDtcclxuXHRiYWNrZ3JvdW5kOiB2YXIoLS1kYXJrLWNvbG9yLWIpO1xyXG59XHJcblxyXG4uam9pbi1tYWluIHAge1xyXG5cdG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5qb2luLW1haW4gLmZvcm0tY29udHJvbCB7XHJcblx0bWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmpvaW4tbWFpbiBsYWJlbCB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0bWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4uam9pbi1tYWluIGlucHV0W3R5cGU9J3RleHQnXSB7XHJcblx0Zm9udC1zaXplOiAxNnB4O1xyXG5cdHBhZGRpbmc6IDVweDtcclxuXHRoZWlnaHQ6IDQwcHg7XHJcblx0d2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5qb2luLW1haW4gc2VsZWN0IHtcclxuXHRmb250LXNpemU6IDE2cHg7XHJcblx0cGFkZGluZzogNXB4O1xyXG5cdGhlaWdodDogNDBweDtcclxuXHR3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmpvaW4tbWFpbiAuYnRuIHtcclxuXHRtYXJnaW4tdG9wOiAyMHB4O1xyXG5cdHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcclxuXHQuY2hhdC1tYWluIHtcclxuXHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdH1cclxuXHJcblx0LmNoYXQtc2lkZWJhciB7XHJcblx0XHRkaXNwbGF5OiBub25lO1xyXG5cdH1cclxufVxyXG5cclxuaW5wdXQuZm9ybWF0IHtcclxuXHRoZWlnaHQ6IDQwcHg7XHJcblx0d2lkdGg6IDQuMzVpbjtcclxufSJdfQ== */", '', '']]

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