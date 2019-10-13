(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "../../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../node_modules/postcss-loader/src/index.js?!../../node_modules/sass-loader/lib/loader.js?!./src/styles.scss":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/palsiddh/Documents/personal/blog/angular-elements/node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!/Users/palsiddh/Documents/personal/blog/angular-elements/node_modules/postcss-loader/src??embedded!/Users/palsiddh/Documents/personal/blog/angular-elements/node_modules/sass-loader/lib/loader.js??ref--13-3!./src/styles.scss ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "html,\nbody {\n\tmargin: 0;\n\tpadding: 0;\n}\n\nbutton {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tbackground: none;\n\tfont-size: 100%;\n\tvertical-align: baseline;\n\tfont-family: inherit;\n\tfont-weight: inherit;\n\tcolor: inherit;\n\t-webkit-appearance: none;\n\t-moz-appearance: none;\n\t     appearance: none;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n}\n\nbody {\n\tfont: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;\n\tline-height: 1.4em;\n\tbackground: #f5f5f5;\n\tcolor: #4d4d4d;\n\tmin-width: 230px;\n\tmax-width: 550px;\n\tmargin: 0 auto;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n\tfont-weight: 300;\n}\n\n:focus {\n\toutline: 0;\n}\n\n.hidden {\n\tdisplay: none;\n}\n\n.todoapp {\n\tbackground: #fff;\n\tmargin: 130px 0 40px 0;\n\tposition: relative;\n\tbox-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),\n\t            0 25px 50px 0 rgba(0, 0, 0, 0.1);\n}\n\n.todoapp input::-webkit-input-placeholder {\n\tfont-style: italic;\n\tfont-weight: 300;\n\tcolor: #e6e6e6;\n}\n\n.todoapp input::-moz-placeholder {\n\tfont-style: italic;\n\tfont-weight: 300;\n\tcolor: #e6e6e6;\n}\n\n.todoapp input::input-placeholder {\n\tfont-style: italic;\n\tfont-weight: 300;\n\tcolor: #e6e6e6;\n}\n\n.todoapp h1 {\n\tposition: absolute;\n\ttop: -155px;\n\twidth: 100%;\n\tfont-size: 100px;\n\tfont-weight: 100;\n\ttext-align: center;\n\tcolor: rgba(175, 47, 47, 0.15);\n\t-webkit-text-rendering: optimizeLegibility;\n\t-moz-text-rendering: optimizeLegibility;\n\ttext-rendering: optimizeLegibility;\n}\n\n.new-todo,\n.edit {\n\tposition: relative;\n\tmargin: 0;\n\twidth: 100%;\n\tfont-size: 24px;\n\tfont-family: inherit;\n\tfont-weight: inherit;\n\tline-height: 1.4em;\n\tborder: 0;\n\tcolor: inherit;\n\tpadding: 6px;\n\tborder: 1px solid #999;\n\tbox-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);\n\tbox-sizing: border-box;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n}\n\n.new-todo {\n\tpadding: 16px 16px 16px 60px;\n\tborder: none;\n\tbackground: rgba(0, 0, 0, 0.003);\n\tbox-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);\n}\n\n.main {\n\tposition: relative;\n\tz-index: 2;\n\tborder-top: 1px solid #e6e6e6;\n}\n\n.toggle-all {\n\twidth: 1px;\n\theight: 1px;\n\tborder: none; /* Mobile Safari */\n\topacity: 0;\n\tposition: absolute;\n\tright: 100%;\n\tbottom: 100%;\n}\n\n.toggle-all + label {\n\twidth: 60px;\n\theight: 34px;\n\tfont-size: 0;\n\tposition: absolute;\n\ttop: -52px;\n\tleft: -13px;\n\t-webkit-transform: rotate(90deg);\n\ttransform: rotate(90deg);\n}\n\n.toggle-all + label:before {\n\tcontent: '❯';\n\tfont-size: 22px;\n\tcolor: #e6e6e6;\n\tpadding: 10px 27px 10px 27px;\n}\n\n.toggle-all:checked + label:before {\n\tcolor: #737373;\n}\n\n.todo-list {\n\tmargin: 0;\n\tpadding: 0;\n\tlist-style: none;\n}\n\n.todo-list li {\n\tposition: relative;\n\tfont-size: 24px;\n\tborder-bottom: 1px solid #ededed;\n}\n\n.todo-list li:last-child {\n\tborder-bottom: none;\n}\n\n.todo-list li.editing {\n\tborder-bottom: none;\n\tpadding: 0;\n}\n\n.todo-list li.editing .edit {\n\tdisplay: block;\n\twidth: calc(100% - 43px);\n\tpadding: 12px 16px;\n\tmargin: 0 0 0 43px;\n}\n\n.todo-list li.editing .view {\n\tdisplay: none;\n}\n\n.todo-list li .toggle {\n\ttext-align: center;\n\twidth: 40px;\n\t/* auto, since non-WebKit browsers doesn't support input styling */\n\theight: auto;\n\tposition: absolute;\n\ttop: 0;\n\tbottom: 0;\n\tmargin: auto 0;\n\tborder: none; /* Mobile Safari */\n\t-webkit-appearance: none;\n\t-moz-appearance: none;\n\t     appearance: none;\n}\n\n.todo-list li .toggle {\n\topacity: 0;\n}\n\n.todo-list li .toggle + label {\n\t/*\n\t\tFirefox requires `#` to be escaped - https://bugzilla.mozilla.org/show_bug.cgi?id=922433\n\t\tIE and Edge requires *everything* to be escaped to render, so we do that instead of just the `#` - https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/7157459/\n\t*/\n\tbackground-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23ededed%22%20stroke-width%3D%223%22/%3E%3C/svg%3E');\n\tbackground-repeat: no-repeat;\n\tbackground-position: center left;\n}\n\n.todo-list li .toggle:checked + label {\n\tbackground-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E');\n}\n\n.todo-list li label {\n\tword-break: break-all;\n\tpadding: 15px 15px 15px 60px;\n\tdisplay: block;\n\tline-height: 1.2;\n\ttransition: color 0.4s;\n}\n\n.todo-list li.completed label {\n\tcolor: #d9d9d9;\n\ttext-decoration: line-through;\n}\n\n.todo-list li .destroy {\n\tdisplay: none;\n\tposition: absolute;\n\ttop: 0;\n\tright: 10px;\n\tbottom: 0;\n\twidth: 40px;\n\theight: 40px;\n\tmargin: auto 0;\n\tfont-size: 30px;\n\tcolor: #cc9a9a;\n\tmargin-bottom: 11px;\n\ttransition: color 0.2s ease-out;\n}\n\n.todo-list li .destroy:hover {\n\tcolor: #af5b5e;\n}\n\n.todo-list li .destroy:after {\n\tcontent: '×';\n}\n\n.todo-list li:hover .destroy {\n\tdisplay: block;\n}\n\n.todo-list li .edit {\n\tdisplay: none;\n}\n\n.todo-list li.editing:last-child {\n\tmargin-bottom: -1px;\n}\n\n.footer {\n\tcolor: #777;\n\tpadding: 10px 15px;\n\theight: 20px;\n\ttext-align: center;\n\tborder-top: 1px solid #e6e6e6;\n}\n\n.footer:before {\n\tcontent: '';\n\tposition: absolute;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\theight: 50px;\n\toverflow: hidden;\n\tbox-shadow: 0 1px 1px rgba(0, 0, 0, 0.2),\n\t            0 8px 0 -3px #f6f6f6,\n\t            0 9px 1px -3px rgba(0, 0, 0, 0.2),\n\t            0 16px 0 -6px #f6f6f6,\n\t            0 17px 2px -6px rgba(0, 0, 0, 0.2);\n}\n\n.todo-count {\n\tfloat: left;\n\ttext-align: left;\n}\n\n.todo-count strong {\n\tfont-weight: 300;\n}\n\n.filters {\n\tmargin: 0;\n\tpadding: 0;\n\tlist-style: none;\n\tposition: absolute;\n\tright: 0;\n\tleft: 0;\n}\n\n.filters li {\n\tdisplay: inline;\n}\n\n.filters li a {\n\tcolor: inherit;\n\tmargin: 3px;\n\tpadding: 3px 7px;\n\ttext-decoration: none;\n\tborder: 1px solid transparent;\n\tborder-radius: 3px;\n}\n\n.filters li a:hover {\n\tborder-color: rgba(175, 47, 47, 0.1);\n}\n\n.filters li a.selected {\n\tborder-color: rgba(175, 47, 47, 0.2);\n}\n\n.clear-completed,\nhtml .clear-completed:active {\n\tfloat: right;\n\tposition: relative;\n\tline-height: 20px;\n\ttext-decoration: none;\n\tcursor: pointer;\n}\n\n.clear-completed:hover {\n\ttext-decoration: underline;\n}\n\n.info {\n\tmargin: 65px auto 0;\n\tcolor: #bfbfbf;\n\tfont-size: 10px;\n\ttext-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);\n\ttext-align: center;\n}\n\n.info p {\n\tline-height: 1;\n}\n\n.info a {\n\tcolor: inherit;\n\ttext-decoration: none;\n\tfont-weight: 400;\n}\n\n.info a:hover {\n\ttext-decoration: underline;\n}\n\n/*\n\tHack to remove background from Mobile Safari.\n\tCan't use it globally since it destroys checkboxes in Firefox\n*/\n\n@media screen and (-webkit-min-device-pixel-ratio:0) {\n\t.toggle-all,\n\t.todo-list li .toggle {\n\t\tbackground: none;\n\t}\n\n\t.todo-list li .toggle {\n\t\theight: 40px;\n\t}\n}\n\n@media (max-width: 430px) {\n\t.footer {\n\t\theight: 50px;\n\t}\n\n\t.filters {\n\t\tbottom: 10px;\n\t}\n}\n\nhr {\n\tmargin: 20px 0;\n\tborder: 0;\n\tborder-top: 1px dashed #c5c5c5;\n\tborder-bottom: 1px dashed #f7f7f7;\n}\n\n.learn a {\n\tfont-weight: normal;\n\ttext-decoration: none;\n\tcolor: #b83f45;\n}\n\n.learn a:hover {\n\ttext-decoration: underline;\n\tcolor: #787e7e;\n}\n\n.learn h3,\n.learn h4,\n.learn h5 {\n\tmargin: 10px 0;\n\tfont-weight: 500;\n\tline-height: 1.2;\n\tcolor: #000;\n}\n\n.learn h3 {\n\tfont-size: 24px;\n}\n\n.learn h4 {\n\tfont-size: 18px;\n}\n\n.learn h5 {\n\tmargin-bottom: 0;\n\tfont-size: 14px;\n}\n\n.learn ul {\n\tpadding: 0;\n\tmargin: 0 0 30px 25px;\n}\n\n.learn li {\n\tline-height: 20px;\n}\n\n.learn p {\n\tfont-size: 15px;\n\tfont-weight: 300;\n\tline-height: 1.3;\n\tmargin-top: 0;\n\tmargin-bottom: 0;\n}\n\n#issue-count {\n\tdisplay: none;\n}\n\n.quote {\n\tborder: none;\n\tmargin: 20px 0 60px 0;\n}\n\n.quote p {\n\tfont-style: italic;\n}\n\n.quote p:before {\n\tcontent: '“';\n\tfont-size: 50px;\n\topacity: .15;\n\tposition: absolute;\n\ttop: -20px;\n\tleft: 3px;\n}\n\n.quote p:after {\n\tcontent: '”';\n\tfont-size: 50px;\n\topacity: .15;\n\tposition: absolute;\n\tbottom: -42px;\n\tright: 3px;\n}\n\n.quote footer {\n\tposition: absolute;\n\tbottom: -40px;\n\tright: 0;\n}\n\n.quote footer img {\n\tborder-radius: 3px;\n}\n\n.quote footer a {\n\tmargin-left: 5px;\n\tvertical-align: middle;\n}\n\n.speech-bubble {\n\tposition: relative;\n\tpadding: 10px;\n\tbackground: rgba(0, 0, 0, .04);\n\tborder-radius: 5px;\n}\n\n.speech-bubble:after {\n\tcontent: '';\n\tposition: absolute;\n\ttop: 100%;\n\tright: 30px;\n\tborder: 13px solid transparent;\n\tborder-top-color: rgba(0, 0, 0, .04);\n}\n\n.learn-bar > .learn {\n\tposition: absolute;\n\twidth: 272px;\n\ttop: 8px;\n\tleft: -300px;\n\tpadding: 10px;\n\tborder-radius: 5px;\n\tbackground-color: rgba(255, 255, 255, .6);\n\ttransition-property: left;\n\ttransition-duration: 500ms;\n}\n\n@media (min-width: 899px) {\n\t.learn-bar {\n\t\twidth: auto;\n\t\tpadding-left: 300px;\n\t}\n\n\t.learn-bar > .learn {\n\t\tleft: 8px;\n\t}\n}\n\nbody {\n  min-width: 0 !important;\n  max-width: none !important;\n  padding: 10px !important;\n}\n\n.container {\n  display: grid;\n  grid-gap: 1rem;\n  grid-template-columns: repeat(2, 50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy90b2RvbXZjLWFwcC1jc3MvaW5kZXguY3NzIiwibm9kZV9tb2R1bGVzL3RvZG9tdmMtY29tbW9uL2Jhc2UuY3NzIiwiL1VzZXJzL3BhbHNpZGRoL0RvY3VtZW50cy9wZXJzb25hbC9ibG9nL2FuZ3VsYXItZWxlbWVudHMvYXBwcy9hbmd1bGFyLWVsZW1lbnRzL3NyYy9zdHlsZXMuc2NzcyIsImFwcHMvYW5ndWxhci1lbGVtZW50cy9zcmMvc3R5bGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0NBRUMsU0FBUztDQUNULFVBQVU7QUFDWDs7QUFFQTtDQUNDLFNBQVM7Q0FDVCxVQUFVO0NBQ1YsU0FBUztDQUNULGdCQUFnQjtDQUNoQixlQUFlO0NBQ2Ysd0JBQXdCO0NBQ3hCLG9CQUFvQjtDQUNwQixvQkFBb0I7Q0FDcEIsY0FBYztDQUNkLHdCQUF3QjtDQUN4QixxQkFBZ0I7TUFBaEIsZ0JBQWdCO0NBQ2hCLG1DQUFtQztDQUNuQyxrQ0FBa0M7QUFDbkM7O0FBRUE7Q0FDQyx5REFBeUQ7Q0FDekQsa0JBQWtCO0NBQ2xCLG1CQUFtQjtDQUNuQixjQUFjO0NBQ2QsZ0JBQWdCO0NBQ2hCLGdCQUFnQjtDQUNoQixjQUFjO0NBQ2QsbUNBQW1DO0NBQ25DLGtDQUFrQztDQUNsQyxnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxVQUFVO0FBQ1g7O0FBRUE7Q0FDQyxhQUFhO0FBQ2Q7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsc0JBQXNCO0NBQ3RCLGtCQUFrQjtDQUNsQjs2Q0FDNEM7QUFDN0M7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsZ0JBQWdCO0NBQ2hCLGNBQWM7QUFDZjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixnQkFBZ0I7Q0FDaEIsY0FBYztBQUNmOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLGdCQUFnQjtDQUNoQixjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsV0FBVztDQUNYLFdBQVc7Q0FDWCxn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QWU7Q0FDZixnQkFBZ0I7Q0FDaEIsZ0JBQWdCO0NBQ2hCLGFBQWE7Q0FDYixnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxhQUFhO0FBQ2Q7O0FBRUE7Q0FDQyxZQUFZO0NBQ1oscUJBQXFCO0FBQ3RCOztBQUVBO0NBQ0Msa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsWUFBWTtDQUNaLGVBQWU7Q0FDZixZQUFZO0NBQ1osa0JBQWtCO0NBQ2xCLFVBQVU7Q0FDVixTQUFTO0FBQ1Y7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osZUFBZTtDQUNmLFlBQVk7Q0FDWixrQkFBa0I7Q0FDbEIsYUFBYTtDQUNiLFVBQVU7QUFDWDs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixhQUFhO0NBQ2IsUUFBUTtBQUNUOztBQUVBO0NBQ0Msa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLHNCQUFzQjtBQUN2Qjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixhQUFhO0NBQ2IsOEJBQThCO0NBQzlCLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxrQkFBa0I7Q0FDbEIsU0FBUztDQUNULFdBQVc7Q0FDWCw4QkFBOEI7Q0FDOUIsb0NBQW9DO0FBQ3JDOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLFlBQVk7Q0FDWixRQUFRO0NBQ1IsWUFBWTtDQUNaLGFBQWE7Q0FDYixrQkFBa0I7Q0FDbEIseUNBQXlDO0NBQ3pDLHlCQUF5QjtDQUN6QiwwQkFBMEI7QUFDM0I7O0FBRUE7Q0FDQztFQUNDLFdBQVc7RUFDWCxtQkFBbUI7Q0FDcEI7O0NBRUE7RUFDQyxTQUFTO0NBQ1Y7QUFDRDs7QUN6SUE7RUFDRSx1QkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7QUNBRjs7QURHQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0EscUNBQUE7QUNBRiIsImZpbGUiOiJhcHBzL2FuZ3VsYXItZWxlbWVudHMvc3JjL3N0eWxlcy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCxcbmJvZHkge1xuXHRtYXJnaW46IDA7XG5cdHBhZGRpbmc6IDA7XG59XG5cbmJ1dHRvbiB7XG5cdG1hcmdpbjogMDtcblx0cGFkZGluZzogMDtcblx0Ym9yZGVyOiAwO1xuXHRiYWNrZ3JvdW5kOiBub25lO1xuXHRmb250LXNpemU6IDEwMCU7XG5cdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcblx0Zm9udC1mYW1pbHk6IGluaGVyaXQ7XG5cdGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xuXHRjb2xvcjogaW5oZXJpdDtcblx0LXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuXHRhcHBlYXJhbmNlOiBub25lO1xuXHQtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcblx0LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cblxuYm9keSB7XG5cdGZvbnQ6IDE0cHggJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcblx0bGluZS1oZWlnaHQ6IDEuNGVtO1xuXHRiYWNrZ3JvdW5kOiAjZjVmNWY1O1xuXHRjb2xvcjogIzRkNGQ0ZDtcblx0bWluLXdpZHRoOiAyMzBweDtcblx0bWF4LXdpZHRoOiA1NTBweDtcblx0bWFyZ2luOiAwIGF1dG87XG5cdC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuXHQtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuXHRmb250LXdlaWdodDogMzAwO1xufVxuXG46Zm9jdXMge1xuXHRvdXRsaW5lOiAwO1xufVxuXG4uaGlkZGVuIHtcblx0ZGlzcGxheTogbm9uZTtcbn1cblxuLnRvZG9hcHAge1xuXHRiYWNrZ3JvdW5kOiAjZmZmO1xuXHRtYXJnaW46IDEzMHB4IDAgNDBweCAwO1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdGJveC1zaGFkb3c6IDAgMnB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSxcblx0ICAgICAgICAgICAgMCAyNXB4IDUwcHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi50b2RvYXBwIGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcblx0Zm9udC1zdHlsZTogaXRhbGljO1xuXHRmb250LXdlaWdodDogMzAwO1xuXHRjb2xvcjogI2U2ZTZlNjtcbn1cblxuLnRvZG9hcHAgaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIge1xuXHRmb250LXN0eWxlOiBpdGFsaWM7XG5cdGZvbnQtd2VpZ2h0OiAzMDA7XG5cdGNvbG9yOiAjZTZlNmU2O1xufVxuXG4udG9kb2FwcCBpbnB1dDo6aW5wdXQtcGxhY2Vob2xkZXIge1xuXHRmb250LXN0eWxlOiBpdGFsaWM7XG5cdGZvbnQtd2VpZ2h0OiAzMDA7XG5cdGNvbG9yOiAjZTZlNmU2O1xufVxuXG4udG9kb2FwcCBoMSB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0dG9wOiAtMTU1cHg7XG5cdHdpZHRoOiAxMDAlO1xuXHRmb250LXNpemU6IDEwMHB4O1xuXHRmb250LXdlaWdodDogMTAwO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGNvbG9yOiByZ2JhKDE3NSwgNDcsIDQ3LCAwLjE1KTtcblx0LXdlYmtpdC10ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xuXHQtbW96LXRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG5cdHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG59XG5cbi5uZXctdG9kbyxcbi5lZGl0IHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRtYXJnaW46IDA7XG5cdHdpZHRoOiAxMDAlO1xuXHRmb250LXNpemU6IDI0cHg7XG5cdGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuXHRmb250LXdlaWdodDogaW5oZXJpdDtcblx0bGluZS1oZWlnaHQ6IDEuNGVtO1xuXHRib3JkZXI6IDA7XG5cdGNvbG9yOiBpbmhlcml0O1xuXHRwYWRkaW5nOiA2cHg7XG5cdGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XG5cdGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuXHQtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuXG4ubmV3LXRvZG8ge1xuXHRwYWRkaW5nOiAxNnB4IDE2cHggMTZweCA2MHB4O1xuXHRib3JkZXI6IG5vbmU7XG5cdGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wMDMpO1xuXHRib3gtc2hhZG93OiBpbnNldCAwIC0ycHggMXB4IHJnYmEoMCwwLDAsMC4wMyk7XG59XG5cbi5tYWluIHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHR6LWluZGV4OiAyO1xuXHRib3JkZXItdG9wOiAxcHggc29saWQgI2U2ZTZlNjtcbn1cblxuLnRvZ2dsZS1hbGwge1xuXHR3aWR0aDogMXB4O1xuXHRoZWlnaHQ6IDFweDtcblx0Ym9yZGVyOiBub25lOyAvKiBNb2JpbGUgU2FmYXJpICovXG5cdG9wYWNpdHk6IDA7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0cmlnaHQ6IDEwMCU7XG5cdGJvdHRvbTogMTAwJTtcbn1cblxuLnRvZ2dsZS1hbGwgKyBsYWJlbCB7XG5cdHdpZHRoOiA2MHB4O1xuXHRoZWlnaHQ6IDM0cHg7XG5cdGZvbnQtc2l6ZTogMDtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IC01MnB4O1xuXHRsZWZ0OiAtMTNweDtcblx0LXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG5cdHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbn1cblxuLnRvZ2dsZS1hbGwgKyBsYWJlbDpiZWZvcmUge1xuXHRjb250ZW50OiAn4p2vJztcblx0Zm9udC1zaXplOiAyMnB4O1xuXHRjb2xvcjogI2U2ZTZlNjtcblx0cGFkZGluZzogMTBweCAyN3B4IDEwcHggMjdweDtcbn1cblxuLnRvZ2dsZS1hbGw6Y2hlY2tlZCArIGxhYmVsOmJlZm9yZSB7XG5cdGNvbG9yOiAjNzM3MzczO1xufVxuXG4udG9kby1saXN0IHtcblx0bWFyZ2luOiAwO1xuXHRwYWRkaW5nOiAwO1xuXHRsaXN0LXN0eWxlOiBub25lO1xufVxuXG4udG9kby1saXN0IGxpIHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRmb250LXNpemU6IDI0cHg7XG5cdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWRlZGVkO1xufVxuXG4udG9kby1saXN0IGxpOmxhc3QtY2hpbGQge1xuXHRib3JkZXItYm90dG9tOiBub25lO1xufVxuXG4udG9kby1saXN0IGxpLmVkaXRpbmcge1xuXHRib3JkZXItYm90dG9tOiBub25lO1xuXHRwYWRkaW5nOiAwO1xufVxuXG4udG9kby1saXN0IGxpLmVkaXRpbmcgLmVkaXQge1xuXHRkaXNwbGF5OiBibG9jaztcblx0d2lkdGg6IGNhbGMoMTAwJSAtIDQzcHgpO1xuXHRwYWRkaW5nOiAxMnB4IDE2cHg7XG5cdG1hcmdpbjogMCAwIDAgNDNweDtcbn1cblxuLnRvZG8tbGlzdCBsaS5lZGl0aW5nIC52aWV3IHtcblx0ZGlzcGxheTogbm9uZTtcbn1cblxuLnRvZG8tbGlzdCBsaSAudG9nZ2xlIHtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHR3aWR0aDogNDBweDtcblx0LyogYXV0bywgc2luY2Ugbm9uLVdlYktpdCBicm93c2VycyBkb2Vzbid0IHN1cHBvcnQgaW5wdXQgc3R5bGluZyAqL1xuXHRoZWlnaHQ6IGF1dG87XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0dG9wOiAwO1xuXHRib3R0b206IDA7XG5cdG1hcmdpbjogYXV0byAwO1xuXHRib3JkZXI6IG5vbmU7IC8qIE1vYmlsZSBTYWZhcmkgKi9cblx0LXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuXHRhcHBlYXJhbmNlOiBub25lO1xufVxuXG4udG9kby1saXN0IGxpIC50b2dnbGUge1xuXHRvcGFjaXR5OiAwO1xufVxuXG4udG9kby1saXN0IGxpIC50b2dnbGUgKyBsYWJlbCB7XG5cdC8qXG5cdFx0RmlyZWZveCByZXF1aXJlcyBgI2AgdG8gYmUgZXNjYXBlZCAtIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTkyMjQzM1xuXHRcdElFIGFuZCBFZGdlIHJlcXVpcmVzICpldmVyeXRoaW5nKiB0byBiZSBlc2NhcGVkIHRvIHJlbmRlciwgc28gd2UgZG8gdGhhdCBpbnN0ZWFkIG9mIGp1c3QgdGhlIGAjYCAtIGh0dHBzOi8vZGV2ZWxvcGVyLm1pY3Jvc29mdC5jb20vZW4tdXMvbWljcm9zb2Z0LWVkZ2UvcGxhdGZvcm0vaXNzdWVzLzcxNTc0NTkvXG5cdCovXG5cdGJhY2tncm91bmQtaW1hZ2U6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsJTNDc3ZnJTIweG1sbnMlM0QlMjJodHRwJTNBLy93d3cudzMub3JnLzIwMDAvc3ZnJTIyJTIwd2lkdGglM0QlMjI0MCUyMiUyMGhlaWdodCUzRCUyMjQwJTIyJTIwdmlld0JveCUzRCUyMi0xMCUyMC0xOCUyMDEwMCUyMDEzNSUyMiUzRSUzQ2NpcmNsZSUyMGN4JTNEJTIyNTAlMjIlMjBjeSUzRCUyMjUwJTIyJTIwciUzRCUyMjUwJTIyJTIwZmlsbCUzRCUyMm5vbmUlMjIlMjBzdHJva2UlM0QlMjIlMjNlZGVkZWQlMjIlMjBzdHJva2Utd2lkdGglM0QlMjIzJTIyLyUzRSUzQy9zdmclM0UnKTtcblx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGxlZnQ7XG59XG5cbi50b2RvLWxpc3QgbGkgLnRvZ2dsZTpjaGVja2VkICsgbGFiZWwge1xuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LCUzQ3N2ZyUyMHhtbG5zJTNEJTIyaHR0cCUzQS8vd3d3LnczLm9yZy8yMDAwL3N2ZyUyMiUyMHdpZHRoJTNEJTIyNDAlMjIlMjBoZWlnaHQlM0QlMjI0MCUyMiUyMHZpZXdCb3glM0QlMjItMTAlMjAtMTglMjAxMDAlMjAxMzUlMjIlM0UlM0NjaXJjbGUlMjBjeCUzRCUyMjUwJTIyJTIwY3klM0QlMjI1MCUyMiUyMHIlM0QlMjI1MCUyMiUyMGZpbGwlM0QlMjJub25lJTIyJTIwc3Ryb2tlJTNEJTIyJTIzYmRkYWQ1JTIyJTIwc3Ryb2tlLXdpZHRoJTNEJTIyMyUyMi8lM0UlM0NwYXRoJTIwZmlsbCUzRCUyMiUyMzVkYzJhZiUyMiUyMGQlM0QlMjJNNzIlMjAyNUw0MiUyMDcxJTIwMjclMjA1NmwtNCUyMDQlMjAyMCUyMDIwJTIwMzQtNTJ6JTIyLyUzRSUzQy9zdmclM0UnKTtcbn1cblxuLnRvZG8tbGlzdCBsaSBsYWJlbCB7XG5cdHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcblx0cGFkZGluZzogMTVweCAxNXB4IDE1cHggNjBweDtcblx0ZGlzcGxheTogYmxvY2s7XG5cdGxpbmUtaGVpZ2h0OiAxLjI7XG5cdHRyYW5zaXRpb246IGNvbG9yIDAuNHM7XG59XG5cbi50b2RvLWxpc3QgbGkuY29tcGxldGVkIGxhYmVsIHtcblx0Y29sb3I6ICNkOWQ5ZDk7XG5cdHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xufVxuXG4udG9kby1saXN0IGxpIC5kZXN0cm95IHtcblx0ZGlzcGxheTogbm9uZTtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IDA7XG5cdHJpZ2h0OiAxMHB4O1xuXHRib3R0b206IDA7XG5cdHdpZHRoOiA0MHB4O1xuXHRoZWlnaHQ6IDQwcHg7XG5cdG1hcmdpbjogYXV0byAwO1xuXHRmb250LXNpemU6IDMwcHg7XG5cdGNvbG9yOiAjY2M5YTlhO1xuXHRtYXJnaW4tYm90dG9tOiAxMXB4O1xuXHR0cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2Utb3V0O1xufVxuXG4udG9kby1saXN0IGxpIC5kZXN0cm95OmhvdmVyIHtcblx0Y29sb3I6ICNhZjViNWU7XG59XG5cbi50b2RvLWxpc3QgbGkgLmRlc3Ryb3k6YWZ0ZXIge1xuXHRjb250ZW50OiAnw5cnO1xufVxuXG4udG9kby1saXN0IGxpOmhvdmVyIC5kZXN0cm95IHtcblx0ZGlzcGxheTogYmxvY2s7XG59XG5cbi50b2RvLWxpc3QgbGkgLmVkaXQge1xuXHRkaXNwbGF5OiBub25lO1xufVxuXG4udG9kby1saXN0IGxpLmVkaXRpbmc6bGFzdC1jaGlsZCB7XG5cdG1hcmdpbi1ib3R0b206IC0xcHg7XG59XG5cbi5mb290ZXIge1xuXHRjb2xvcjogIzc3Nztcblx0cGFkZGluZzogMTBweCAxNXB4O1xuXHRoZWlnaHQ6IDIwcHg7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkICNlNmU2ZTY7XG59XG5cbi5mb290ZXI6YmVmb3JlIHtcblx0Y29udGVudDogJyc7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0cmlnaHQ6IDA7XG5cdGJvdHRvbTogMDtcblx0bGVmdDogMDtcblx0aGVpZ2h0OiA1MHB4O1xuXHRvdmVyZmxvdzogaGlkZGVuO1xuXHRib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxuXHQgICAgICAgICAgICAwIDhweCAwIC0zcHggI2Y2ZjZmNixcblx0ICAgICAgICAgICAgMCA5cHggMXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxuXHQgICAgICAgICAgICAwIDE2cHggMCAtNnB4ICNmNmY2ZjYsXG5cdCAgICAgICAgICAgIDAgMTdweCAycHggLTZweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbi50b2RvLWNvdW50IHtcblx0ZmxvYXQ6IGxlZnQ7XG5cdHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi50b2RvLWNvdW50IHN0cm9uZyB7XG5cdGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi5maWx0ZXJzIHtcblx0bWFyZ2luOiAwO1xuXHRwYWRkaW5nOiAwO1xuXHRsaXN0LXN0eWxlOiBub25lO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHJpZ2h0OiAwO1xuXHRsZWZ0OiAwO1xufVxuXG4uZmlsdGVycyBsaSB7XG5cdGRpc3BsYXk6IGlubGluZTtcbn1cblxuLmZpbHRlcnMgbGkgYSB7XG5cdGNvbG9yOiBpbmhlcml0O1xuXHRtYXJnaW46IDNweDtcblx0cGFkZGluZzogM3B4IDdweDtcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcblx0Ym9yZGVyLXJhZGl1czogM3B4O1xufVxuXG4uZmlsdGVycyBsaSBhOmhvdmVyIHtcblx0Ym9yZGVyLWNvbG9yOiByZ2JhKDE3NSwgNDcsIDQ3LCAwLjEpO1xufVxuXG4uZmlsdGVycyBsaSBhLnNlbGVjdGVkIHtcblx0Ym9yZGVyLWNvbG9yOiByZ2JhKDE3NSwgNDcsIDQ3LCAwLjIpO1xufVxuXG4uY2xlYXItY29tcGxldGVkLFxuaHRtbCAuY2xlYXItY29tcGxldGVkOmFjdGl2ZSB7XG5cdGZsb2F0OiByaWdodDtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRsaW5lLWhlaWdodDogMjBweDtcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jbGVhci1jb21wbGV0ZWQ6aG92ZXIge1xuXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLmluZm8ge1xuXHRtYXJnaW46IDY1cHggYXV0byAwO1xuXHRjb2xvcjogI2JmYmZiZjtcblx0Zm9udC1zaXplOiAxMHB4O1xuXHR0ZXh0LXNoYWRvdzogMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmluZm8gcCB7XG5cdGxpbmUtaGVpZ2h0OiAxO1xufVxuXG4uaW5mbyBhIHtcblx0Y29sb3I6IGluaGVyaXQ7XG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0Zm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmluZm8gYTpob3ZlciB7XG5cdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4vKlxuXHRIYWNrIHRvIHJlbW92ZSBiYWNrZ3JvdW5kIGZyb20gTW9iaWxlIFNhZmFyaS5cblx0Q2FuJ3QgdXNlIGl0IGdsb2JhbGx5IHNpbmNlIGl0IGRlc3Ryb3lzIGNoZWNrYm94ZXMgaW4gRmlyZWZveFxuKi9cbkBtZWRpYSBzY3JlZW4gYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86MCkge1xuXHQudG9nZ2xlLWFsbCxcblx0LnRvZG8tbGlzdCBsaSAudG9nZ2xlIHtcblx0XHRiYWNrZ3JvdW5kOiBub25lO1xuXHR9XG5cblx0LnRvZG8tbGlzdCBsaSAudG9nZ2xlIHtcblx0XHRoZWlnaHQ6IDQwcHg7XG5cdH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQzMHB4KSB7XG5cdC5mb290ZXIge1xuXHRcdGhlaWdodDogNTBweDtcblx0fVxuXG5cdC5maWx0ZXJzIHtcblx0XHRib3R0b206IDEwcHg7XG5cdH1cbn1cbiIsImhyIHtcblx0bWFyZ2luOiAyMHB4IDA7XG5cdGJvcmRlcjogMDtcblx0Ym9yZGVyLXRvcDogMXB4IGRhc2hlZCAjYzVjNWM1O1xuXHRib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICNmN2Y3Zjc7XG59XG5cbi5sZWFybiBhIHtcblx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRjb2xvcjogI2I4M2Y0NTtcbn1cblxuLmxlYXJuIGE6aG92ZXIge1xuXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcblx0Y29sb3I6ICM3ODdlN2U7XG59XG5cbi5sZWFybiBoMyxcbi5sZWFybiBoNCxcbi5sZWFybiBoNSB7XG5cdG1hcmdpbjogMTBweCAwO1xuXHRmb250LXdlaWdodDogNTAwO1xuXHRsaW5lLWhlaWdodDogMS4yO1xuXHRjb2xvcjogIzAwMDtcbn1cblxuLmxlYXJuIGgzIHtcblx0Zm9udC1zaXplOiAyNHB4O1xufVxuXG4ubGVhcm4gaDQge1xuXHRmb250LXNpemU6IDE4cHg7XG59XG5cbi5sZWFybiBoNSB7XG5cdG1hcmdpbi1ib3R0b206IDA7XG5cdGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmxlYXJuIHVsIHtcblx0cGFkZGluZzogMDtcblx0bWFyZ2luOiAwIDAgMzBweCAyNXB4O1xufVxuXG4ubGVhcm4gbGkge1xuXHRsaW5lLWhlaWdodDogMjBweDtcbn1cblxuLmxlYXJuIHAge1xuXHRmb250LXNpemU6IDE1cHg7XG5cdGZvbnQtd2VpZ2h0OiAzMDA7XG5cdGxpbmUtaGVpZ2h0OiAxLjM7XG5cdG1hcmdpbi10b3A6IDA7XG5cdG1hcmdpbi1ib3R0b206IDA7XG59XG5cbiNpc3N1ZS1jb3VudCB7XG5cdGRpc3BsYXk6IG5vbmU7XG59XG5cbi5xdW90ZSB7XG5cdGJvcmRlcjogbm9uZTtcblx0bWFyZ2luOiAyMHB4IDAgNjBweCAwO1xufVxuXG4ucXVvdGUgcCB7XG5cdGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLnF1b3RlIHA6YmVmb3JlIHtcblx0Y29udGVudDogJ+KAnCc7XG5cdGZvbnQtc2l6ZTogNTBweDtcblx0b3BhY2l0eTogLjE1O1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogLTIwcHg7XG5cdGxlZnQ6IDNweDtcbn1cblxuLnF1b3RlIHA6YWZ0ZXIge1xuXHRjb250ZW50OiAn4oCdJztcblx0Zm9udC1zaXplOiA1MHB4O1xuXHRvcGFjaXR5OiAuMTU7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0Ym90dG9tOiAtNDJweDtcblx0cmlnaHQ6IDNweDtcbn1cblxuLnF1b3RlIGZvb3RlciB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0Ym90dG9tOiAtNDBweDtcblx0cmlnaHQ6IDA7XG59XG5cbi5xdW90ZSBmb290ZXIgaW1nIHtcblx0Ym9yZGVyLXJhZGl1czogM3B4O1xufVxuXG4ucXVvdGUgZm9vdGVyIGEge1xuXHRtYXJnaW4tbGVmdDogNXB4O1xuXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uc3BlZWNoLWJ1YmJsZSB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0cGFkZGluZzogMTBweDtcblx0YmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAuMDQpO1xuXHRib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5zcGVlY2gtYnViYmxlOmFmdGVyIHtcblx0Y29udGVudDogJyc7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0dG9wOiAxMDAlO1xuXHRyaWdodDogMzBweDtcblx0Ym9yZGVyOiAxM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuXHRib3JkZXItdG9wLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC4wNCk7XG59XG5cbi5sZWFybi1iYXIgPiAubGVhcm4ge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHdpZHRoOiAyNzJweDtcblx0dG9wOiA4cHg7XG5cdGxlZnQ6IC0zMDBweDtcblx0cGFkZGluZzogMTBweDtcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC42KTtcblx0dHJhbnNpdGlvbi1wcm9wZXJ0eTogbGVmdDtcblx0dHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA4OTlweCkge1xuXHQubGVhcm4tYmFyIHtcblx0XHR3aWR0aDogYXV0bztcblx0XHRwYWRkaW5nLWxlZnQ6IDMwMHB4O1xuXHR9XG5cblx0LmxlYXJuLWJhciA+IC5sZWFybiB7XG5cdFx0bGVmdDogOHB4O1xuXHR9XG59XG4iLCJAaW1wb3J0ICd0b2RvbXZjLWFwcC1jc3MvaW5kZXguY3NzJztcbkBpbXBvcnQgJ3RvZG9tdmMtY29tbW9uL2Jhc2UuY3NzJztcblxuYm9keSB7XG4gIG1pbi13aWR0aDogMCAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IG5vbmUgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xufVxuXG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1nYXA6IDFyZW07XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDUwJSk7XG59XG4iLCJAaW1wb3J0ICd0b2RvbXZjLWFwcC1jc3MvaW5kZXguY3NzJztcbkBpbXBvcnQgJ3RvZG9tdmMtY29tbW9uL2Jhc2UuY3NzJztcbmJvZHkge1xuICBtaW4td2lkdGg6IDAgIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiBub25lICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtZ2FwOiAxcmVtO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCA1MCUpO1xufSJdfQ== */", '', '']]

/***/ }),

/***/ "../../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../node_modules/postcss-loader/src/index.js?!../../node_modules/todomvc-app-css/index.css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/palsiddh/Documents/personal/blog/angular-elements/node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!/Users/palsiddh/Documents/personal/blog/angular-elements/node_modules/postcss-loader/src??embedded!/Users/palsiddh/Documents/personal/blog/angular-elements/node_modules/todomvc-app-css/index.css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "html,\nbody {\n\tmargin: 0;\n\tpadding: 0;\n}\n\nbutton {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tbackground: none;\n\tfont-size: 100%;\n\tvertical-align: baseline;\n\tfont-family: inherit;\n\tfont-weight: inherit;\n\tcolor: inherit;\n\t-webkit-appearance: none;\n\t-moz-appearance: none;\n\t     appearance: none;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n}\n\nbody {\n\tfont: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;\n\tline-height: 1.4em;\n\tbackground: #f5f5f5;\n\tcolor: #4d4d4d;\n\tmin-width: 230px;\n\tmax-width: 550px;\n\tmargin: 0 auto;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n\tfont-weight: 300;\n}\n\n:focus {\n\toutline: 0;\n}\n\n.hidden {\n\tdisplay: none;\n}\n\n.todoapp {\n\tbackground: #fff;\n\tmargin: 130px 0 40px 0;\n\tposition: relative;\n\tbox-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),\n\t            0 25px 50px 0 rgba(0, 0, 0, 0.1);\n}\n\n.todoapp input::-webkit-input-placeholder {\n\tfont-style: italic;\n\tfont-weight: 300;\n\tcolor: #e6e6e6;\n}\n\n.todoapp input::-moz-placeholder {\n\tfont-style: italic;\n\tfont-weight: 300;\n\tcolor: #e6e6e6;\n}\n\n.todoapp input::input-placeholder {\n\tfont-style: italic;\n\tfont-weight: 300;\n\tcolor: #e6e6e6;\n}\n\n.todoapp h1 {\n\tposition: absolute;\n\ttop: -155px;\n\twidth: 100%;\n\tfont-size: 100px;\n\tfont-weight: 100;\n\ttext-align: center;\n\tcolor: rgba(175, 47, 47, 0.15);\n\t-webkit-text-rendering: optimizeLegibility;\n\t-moz-text-rendering: optimizeLegibility;\n\ttext-rendering: optimizeLegibility;\n}\n\n.new-todo,\n.edit {\n\tposition: relative;\n\tmargin: 0;\n\twidth: 100%;\n\tfont-size: 24px;\n\tfont-family: inherit;\n\tfont-weight: inherit;\n\tline-height: 1.4em;\n\tborder: 0;\n\tcolor: inherit;\n\tpadding: 6px;\n\tborder: 1px solid #999;\n\tbox-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);\n\tbox-sizing: border-box;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n}\n\n.new-todo {\n\tpadding: 16px 16px 16px 60px;\n\tborder: none;\n\tbackground: rgba(0, 0, 0, 0.003);\n\tbox-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);\n}\n\n.main {\n\tposition: relative;\n\tz-index: 2;\n\tborder-top: 1px solid #e6e6e6;\n}\n\n.toggle-all {\n\twidth: 1px;\n\theight: 1px;\n\tborder: none; /* Mobile Safari */\n\topacity: 0;\n\tposition: absolute;\n\tright: 100%;\n\tbottom: 100%;\n}\n\n.toggle-all + label {\n\twidth: 60px;\n\theight: 34px;\n\tfont-size: 0;\n\tposition: absolute;\n\ttop: -52px;\n\tleft: -13px;\n\t-webkit-transform: rotate(90deg);\n\ttransform: rotate(90deg);\n}\n\n.toggle-all + label:before {\n\tcontent: '❯';\n\tfont-size: 22px;\n\tcolor: #e6e6e6;\n\tpadding: 10px 27px 10px 27px;\n}\n\n.toggle-all:checked + label:before {\n\tcolor: #737373;\n}\n\n.todo-list {\n\tmargin: 0;\n\tpadding: 0;\n\tlist-style: none;\n}\n\n.todo-list li {\n\tposition: relative;\n\tfont-size: 24px;\n\tborder-bottom: 1px solid #ededed;\n}\n\n.todo-list li:last-child {\n\tborder-bottom: none;\n}\n\n.todo-list li.editing {\n\tborder-bottom: none;\n\tpadding: 0;\n}\n\n.todo-list li.editing .edit {\n\tdisplay: block;\n\twidth: calc(100% - 43px);\n\tpadding: 12px 16px;\n\tmargin: 0 0 0 43px;\n}\n\n.todo-list li.editing .view {\n\tdisplay: none;\n}\n\n.todo-list li .toggle {\n\ttext-align: center;\n\twidth: 40px;\n\t/* auto, since non-WebKit browsers doesn't support input styling */\n\theight: auto;\n\tposition: absolute;\n\ttop: 0;\n\tbottom: 0;\n\tmargin: auto 0;\n\tborder: none; /* Mobile Safari */\n\t-webkit-appearance: none;\n\t-moz-appearance: none;\n\t     appearance: none;\n}\n\n.todo-list li .toggle {\n\topacity: 0;\n}\n\n.todo-list li .toggle + label {\n\t/*\n\t\tFirefox requires `#` to be escaped - https://bugzilla.mozilla.org/show_bug.cgi?id=922433\n\t\tIE and Edge requires *everything* to be escaped to render, so we do that instead of just the `#` - https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/7157459/\n\t*/\n\tbackground-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23ededed%22%20stroke-width%3D%223%22/%3E%3C/svg%3E');\n\tbackground-repeat: no-repeat;\n\tbackground-position: center left;\n}\n\n.todo-list li .toggle:checked + label {\n\tbackground-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E');\n}\n\n.todo-list li label {\n\tword-break: break-all;\n\tpadding: 15px 15px 15px 60px;\n\tdisplay: block;\n\tline-height: 1.2;\n\ttransition: color 0.4s;\n}\n\n.todo-list li.completed label {\n\tcolor: #d9d9d9;\n\ttext-decoration: line-through;\n}\n\n.todo-list li .destroy {\n\tdisplay: none;\n\tposition: absolute;\n\ttop: 0;\n\tright: 10px;\n\tbottom: 0;\n\twidth: 40px;\n\theight: 40px;\n\tmargin: auto 0;\n\tfont-size: 30px;\n\tcolor: #cc9a9a;\n\tmargin-bottom: 11px;\n\ttransition: color 0.2s ease-out;\n}\n\n.todo-list li .destroy:hover {\n\tcolor: #af5b5e;\n}\n\n.todo-list li .destroy:after {\n\tcontent: '×';\n}\n\n.todo-list li:hover .destroy {\n\tdisplay: block;\n}\n\n.todo-list li .edit {\n\tdisplay: none;\n}\n\n.todo-list li.editing:last-child {\n\tmargin-bottom: -1px;\n}\n\n.footer {\n\tcolor: #777;\n\tpadding: 10px 15px;\n\theight: 20px;\n\ttext-align: center;\n\tborder-top: 1px solid #e6e6e6;\n}\n\n.footer:before {\n\tcontent: '';\n\tposition: absolute;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\theight: 50px;\n\toverflow: hidden;\n\tbox-shadow: 0 1px 1px rgba(0, 0, 0, 0.2),\n\t            0 8px 0 -3px #f6f6f6,\n\t            0 9px 1px -3px rgba(0, 0, 0, 0.2),\n\t            0 16px 0 -6px #f6f6f6,\n\t            0 17px 2px -6px rgba(0, 0, 0, 0.2);\n}\n\n.todo-count {\n\tfloat: left;\n\ttext-align: left;\n}\n\n.todo-count strong {\n\tfont-weight: 300;\n}\n\n.filters {\n\tmargin: 0;\n\tpadding: 0;\n\tlist-style: none;\n\tposition: absolute;\n\tright: 0;\n\tleft: 0;\n}\n\n.filters li {\n\tdisplay: inline;\n}\n\n.filters li a {\n\tcolor: inherit;\n\tmargin: 3px;\n\tpadding: 3px 7px;\n\ttext-decoration: none;\n\tborder: 1px solid transparent;\n\tborder-radius: 3px;\n}\n\n.filters li a:hover {\n\tborder-color: rgba(175, 47, 47, 0.1);\n}\n\n.filters li a.selected {\n\tborder-color: rgba(175, 47, 47, 0.2);\n}\n\n.clear-completed,\nhtml .clear-completed:active {\n\tfloat: right;\n\tposition: relative;\n\tline-height: 20px;\n\ttext-decoration: none;\n\tcursor: pointer;\n}\n\n.clear-completed:hover {\n\ttext-decoration: underline;\n}\n\n.info {\n\tmargin: 65px auto 0;\n\tcolor: #bfbfbf;\n\tfont-size: 10px;\n\ttext-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);\n\ttext-align: center;\n}\n\n.info p {\n\tline-height: 1;\n}\n\n.info a {\n\tcolor: inherit;\n\ttext-decoration: none;\n\tfont-weight: 400;\n}\n\n.info a:hover {\n\ttext-decoration: underline;\n}\n\n/*\n\tHack to remove background from Mobile Safari.\n\tCan't use it globally since it destroys checkboxes in Firefox\n*/\n\n@media screen and (-webkit-min-device-pixel-ratio:0) {\n\t.toggle-all,\n\t.todo-list li .toggle {\n\t\tbackground: none;\n\t}\n\n\t.todo-list li .toggle {\n\t\theight: 40px;\n\t}\n}\n\n@media (max-width: 430px) {\n\t.footer {\n\t\theight: 50px;\n\t}\n\n\t.filters {\n\t\tbottom: 10px;\n\t}\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy90b2RvbXZjLWFwcC1jc3MvaW5kZXguY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztDQUVDLFNBQVM7Q0FDVCxVQUFVO0FBQ1g7O0FBRUE7Q0FDQyxTQUFTO0NBQ1QsVUFBVTtDQUNWLFNBQVM7Q0FDVCxnQkFBZ0I7Q0FDaEIsZUFBZTtDQUNmLHdCQUF3QjtDQUN4QixvQkFBb0I7Q0FDcEIsb0JBQW9CO0NBQ3BCLGNBQWM7Q0FDZCx3QkFBd0I7Q0FDeEIscUJBQWdCO01BQWhCLGdCQUFnQjtDQUNoQixtQ0FBbUM7Q0FDbkMsa0NBQWtDO0FBQ25DOztBQUVBO0NBQ0MseURBQXlEO0NBQ3pELGtCQUFrQjtDQUNsQixtQkFBbUI7Q0FDbkIsY0FBYztDQUNkLGdCQUFnQjtDQUNoQixnQkFBZ0I7Q0FDaEIsY0FBYztDQUNkLG1DQUFtQztDQUNuQyxrQ0FBa0M7Q0FDbEMsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsVUFBVTtBQUNYOztBQUVBO0NBQ0MsYUFBYTtBQUNkOztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLHNCQUFzQjtDQUN0QixrQkFBa0I7Q0FDbEI7NkNBQzRDO0FBQzdDOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLGdCQUFnQjtDQUNoQixjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsZ0JBQWdCO0NBQ2hCLGNBQWM7QUFDZjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixnQkFBZ0I7Q0FDaEIsY0FBYztBQUNmOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLFdBQVc7Q0FDWCxXQUFXO0NBQ1gsZ0JBQWdCO0NBQ2hCLGdCQUFnQjtDQUNoQixrQkFBa0I7Q0FDbEIsOEJBQThCO0NBQzlCLDBDQUEwQztDQUMxQyx1Q0FBdUM7Q0FDdkMsa0NBQWtDO0FBQ25DOztBQUVBOztDQUVDLGtCQUFrQjtDQUNsQixTQUFTO0NBQ1QsV0FBVztDQUNYLGVBQWU7Q0FDZixvQkFBb0I7Q0FDcEIsb0JBQW9CO0NBQ3BCLGtCQUFr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RUE7O0NBRUMsWUFBWTtDQUNaLGtCQUFrQjtDQUNsQixpQkFBaUI7Q0FDakIscUJBQXFCO0NBQ3JCLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQywwQkFBMEI7QUFDM0I7O0FBRUE7Q0FDQyxtQkFBbUI7Q0FDbkIsY0FBYztDQUNkLGVBQWU7Q0FDZiw2Q0FBNkM7Q0FDN0Msa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsY0FBYztBQUNmOztBQUVBO0NBQ0MsY0FBYztDQUNkLHFCQUFxQjtDQUNyQixnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQywwQkFBMEI7QUFDM0I7O0FBRUE7OztDQUdDOztBQUNEO0NBQ0M7O0VBRUMsZ0JBQWdCO0NBQ2pCOztDQUVBO0VBQ0MsWUFBWTtDQUNiO0FBQ0Q7O0FBRUE7Q0FDQztFQUNDLFlBQVk7Q0FDYjs7Q0FFQTtFQUNDLFlBQVk7Q0FDYjtBQUNEIiwiZmlsZSI6Im5vZGVfbW9kdWxlcy90b2RvbXZjLWFwcC1jc3MvaW5kZXguY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCxcbmJvZHkge1xuXHRtYXJnaW46IDA7XG5cdHBhZGRpbmc6IDA7XG59XG5cbmJ1dHRvbiB7XG5cdG1hcmdpbjogMDtcblx0cGFkZGluZzogMDtcblx0Ym9yZGVyOiAwO1xuXHRiYWNrZ3JvdW5kOiBub25lO1xuXHRmb250LXNpemU6IDEwMCU7XG5cdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcblx0Zm9udC1mYW1pbHk6IGluaGVyaXQ7XG5cdGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xuXHRjb2xvcjogaW5oZXJpdDtcblx0LXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuXHRhcHBlYXJhbmNlOiBub25lO1xuXHQtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcblx0LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cblxuYm9keSB7XG5cdGZvbnQ6IDE0cHggJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcblx0bGluZS1oZWlnaHQ6IDEuNGVtO1xuXHRiYWNrZ3JvdW5kOiAjZjVmNWY1O1xuXHRjb2xvcjogIzRkNGQ0ZDtcblx0bWluLXdpZHRoOiAyMzBweDtcblx0bWF4LXdpZHRoOiA1NTBweDtcblx0bWFyZ2luOiAwIGF1dG87XG5cdC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuXHQtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuXHRmb250LXdlaWdodDogMzAwO1xufVxuXG46Zm9jdXMge1xuXHRvdXRsaW5lOiAwO1xufVxuXG4uaGlkZGVuIHtcblx0ZGlzcGxheTogbm9uZTtcbn1cblxuLnRvZG9hcHAge1xuXHRiYWNrZ3JvdW5kOiAjZmZmO1xuXHRtYXJnaW46IDEzMHB4IDAgNDBweCAwO1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdGJveC1zaGFkb3c6IDAgMnB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSxcblx0ICAgICAgICAgICAgMCAyNXB4IDUwcHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi50b2RvYXBwIGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcblx0Zm9udC1zdHlsZTogaXRhbGljO1xuXHRmb250LXdlaWdodDogMzAwO1xuXHRjb2xvcjogI2U2ZTZlNjtcbn1cblxuLnRvZG9hcHAgaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIge1xuXHRmb250LXN0eWxlOiBpdGFsaWM7XG5cdGZvbnQtd2VpZ2h0OiAzMDA7XG5cdGNvbG9yOiAjZTZlNmU2O1xufVxuXG4udG9kb2FwcCBpbnB1dDo6aW5wdXQtcGxhY2Vob2xkZXIge1xuXHRmb250LXN0eWxlOiBpdGFsaWM7XG5cdGZvbnQtd2VpZ2h0OiAzMDA7XG5cdGNvbG9yOiAjZTZlNmU2O1xufVxuXG4udG9kb2FwcCBoMSB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0dG9wOiAtMTU1cHg7XG5cdHdpZHRoOiAxMDAlO1xuXHRmb250LXNpemU6IDEwMHB4O1xuXHRmb250LXdlaWdodDogMTAwO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGNvbG9yOiByZ2JhKDE3NSwgNDcsIDQ3LCAwLjE1KTtcblx0LXdlYmtpdC10ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xuXHQtbW96LXRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG5cdHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG59XG5cbi5uZXctdG9kbyxcbi5lZGl0IHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRtYXJnaW46IDA7XG5cdHdpZHRoOiAxMDAlO1xuXHRmb250LXNpemU6IDI0cHg7XG5cdGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuXHRmb250LXdlaWdodDogaW5oZXJpdDtcblx0bGluZS1oZWlnaHQ6IDEuNGVtO1xuXHRib3JkZXI6IDA7XG5cdGNvbG9yOiBpbmhlcml0O1xuXHRwYWRkaW5nOiA2cHg7XG5cdGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XG5cdGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuXHQtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuXG4ubmV3LXRvZG8ge1xuXHRwYWRkaW5nOiAxNnB4IDE2cHggMTZweCA2MHB4O1xuXHRib3JkZXI6IG5vbmU7XG5cdGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wMDMpO1xuXHRib3gtc2hhZG93OiBpbnNldCAwIC0ycHggMXB4IHJnYmEoMCwwLDAsMC4wMyk7XG59XG5cbi5tYWluIHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHR6LWluZGV4OiAyO1xuXHRib3JkZXItdG9wOiAxcHggc29saWQgI2U2ZTZlNjtcbn1cblxuLnRvZ2dsZS1hbGwge1xuXHR3aWR0aDogMXB4O1xuXHRoZWlnaHQ6IDFweDtcblx0Ym9yZGVyOiBub25lOyAvKiBNb2JpbGUgU2FmYXJpICovXG5cdG9wYWNpdHk6IDA7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0cmlnaHQ6IDEwMCU7XG5cdGJvdHRvbTogMTAwJTtcbn1cblxuLnRvZ2dsZS1hbGwgKyBsYWJlbCB7XG5cdHdpZHRoOiA2MHB4O1xuXHRoZWlnaHQ6IDM0cHg7XG5cdGZvbnQtc2l6ZTogMDtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IC01MnB4O1xuXHRsZWZ0OiAtMTNweDtcblx0LXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG5cdHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbn1cblxuLnRvZ2dsZS1hbGwgKyBsYWJlbDpiZWZvcmUge1xuXHRjb250ZW50OiAn4p2vJztcblx0Zm9udC1zaXplOiAyMnB4O1xuXHRjb2xvcjogI2U2ZTZlNjtcblx0cGFkZGluZzogMTBweCAyN3B4IDEwcHggMjdweDtcbn1cblxuLnRvZ2dsZS1hbGw6Y2hlY2tlZCArIGxhYmVsOmJlZm9yZSB7XG5cdGNvbG9yOiAjNzM3MzczO1xufVxuXG4udG9kby1saXN0IHtcblx0bWFyZ2luOiAwO1xuXHRwYWRkaW5nOiAwO1xuXHRsaXN0LXN0eWxlOiBub25lO1xufVxuXG4udG9kby1saXN0IGxpIHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRmb250LXNpemU6IDI0cHg7XG5cdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWRlZGVkO1xufVxuXG4udG9kby1saXN0IGxpOmxhc3QtY2hpbGQge1xuXHRib3JkZXItYm90dG9tOiBub25lO1xufVxuXG4udG9kby1saXN0IGxpLmVkaXRpbmcge1xuXHRib3JkZXItYm90dG9tOiBub25lO1xuXHRwYWRkaW5nOiAwO1xufVxuXG4udG9kby1saXN0IGxpLmVkaXRpbmcgLmVkaXQge1xuXHRkaXNwbGF5OiBibG9jaztcblx0d2lkdGg6IGNhbGMoMTAwJSAtIDQzcHgpO1xuXHRwYWRkaW5nOiAxMnB4IDE2cHg7XG5cdG1hcmdpbjogMCAwIDAgNDNweDtcbn1cblxuLnRvZG8tbGlzdCBsaS5lZGl0aW5nIC52aWV3IHtcblx0ZGlzcGxheTogbm9uZTtcbn1cblxuLnRvZG8tbGlzdCBsaSAudG9nZ2xlIHtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHR3aWR0aDogNDBweDtcblx0LyogYXV0bywgc2luY2Ugbm9uLVdlYktpdCBicm93c2VycyBkb2Vzbid0IHN1cHBvcnQgaW5wdXQgc3R5bGluZyAqL1xuXHRoZWlnaHQ6IGF1dG87XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0dG9wOiAwO1xuXHRib3R0b206IDA7XG5cdG1hcmdpbjogYXV0byAwO1xuXHRib3JkZXI6IG5vbmU7IC8qIE1vYmlsZSBTYWZhcmkgKi9cblx0LXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuXHRhcHBlYXJhbmNlOiBub25lO1xufVxuXG4udG9kby1saXN0IGxpIC50b2dnbGUge1xuXHRvcGFjaXR5OiAwO1xufVxuXG4udG9kby1saXN0IGxpIC50b2dnbGUgKyBsYWJlbCB7XG5cdC8qXG5cdFx0RmlyZWZveCByZXF1aXJlcyBgI2AgdG8gYmUgZXNjYXBlZCAtIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTkyMjQzM1xuXHRcdElFIGFuZCBFZGdlIHJlcXVpcmVzICpldmVyeXRoaW5nKiB0byBiZSBlc2NhcGVkIHRvIHJlbmRlciwgc28gd2UgZG8gdGhhdCBpbnN0ZWFkIG9mIGp1c3QgdGhlIGAjYCAtIGh0dHBzOi8vZGV2ZWxvcGVyLm1pY3Jvc29mdC5jb20vZW4tdXMvbWljcm9zb2Z0LWVkZ2UvcGxhdGZvcm0vaXNzdWVzLzcxNTc0NTkvXG5cdCovXG5cdGJhY2tncm91bmQtaW1hZ2U6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsJTNDc3ZnJTIweG1sbnMlM0QlMjJodHRwJTNBLy93d3cudzMub3JnLzIwMDAvc3ZnJTIyJTIwd2lkdGglM0QlMjI0MCUyMiUyMGhlaWdodCUzRCUyMjQwJTIyJTIwdmlld0JveCUzRCUyMi0xMCUyMC0xOCUyMDEwMCUyMDEzNSUyMiUzRSUzQ2NpcmNsZSUyMGN4JTNEJTIyNTAlMjIlMjBjeSUzRCUyMjUwJTIyJTIwciUzRCUyMjUwJTIyJTIwZmlsbCUzRCUyMm5vbmUlMjIlMjBzdHJva2UlM0QlMjIlMjNlZGVkZWQlMjIlMjBzdHJva2Utd2lkdGglM0QlMjIzJTIyLyUzRSUzQy9zdmclM0UnKTtcblx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGxlZnQ7XG59XG5cbi50b2RvLWxpc3QgbGkgLnRvZ2dsZTpjaGVja2VkICsgbGFiZWwge1xuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LCUzQ3N2ZyUyMHhtbG5zJTNEJTIyaHR0cCUzQS8vd3d3LnczLm9yZy8yMDAwL3N2ZyUyMiUyMHdpZHRoJTNEJTIyNDAlMjIlMjBoZWlnaHQlM0QlMjI0MCUyMiUyMHZpZXdCb3glM0QlMjItMTAlMjAtMTglMjAxMDAlMjAxMzUlMjIlM0UlM0NjaXJjbGUlMjBjeCUzRCUyMjUwJTIyJTIwY3klM0QlMjI1MCUyMiUyMHIlM0QlMjI1MCUyMiUyMGZpbGwlM0QlMjJub25lJTIyJTIwc3Ryb2tlJTNEJTIyJTIzYmRkYWQ1JTIyJTIwc3Ryb2tlLXdpZHRoJTNEJTIyMyUyMi8lM0UlM0NwYXRoJTIwZmlsbCUzRCUyMiUyMzVkYzJhZiUyMiUyMGQlM0QlMjJNNzIlMjAyNUw0MiUyMDcxJTIwMjclMjA1NmwtNCUyMDQlMjAyMCUyMDIwJTIwMzQtNTJ6JTIyLyUzRSUzQy9zdmclM0UnKTtcbn1cblxuLnRvZG8tbGlzdCBsaSBsYWJlbCB7XG5cdHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcblx0cGFkZGluZzogMTVweCAxNXB4IDE1cHggNjBweDtcblx0ZGlzcGxheTogYmxvY2s7XG5cdGxpbmUtaGVpZ2h0OiAxLjI7XG5cdHRyYW5zaXRpb246IGNvbG9yIDAuNHM7XG59XG5cbi50b2RvLWxpc3QgbGkuY29tcGxldGVkIGxhYmVsIHtcblx0Y29sb3I6ICNkOWQ5ZDk7XG5cdHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xufVxuXG4udG9kby1saXN0IGxpIC5kZXN0cm95IHtcblx0ZGlzcGxheTogbm9uZTtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IDA7XG5cdHJpZ2h0OiAxMHB4O1xuXHRib3R0b206IDA7XG5cdHdpZHRoOiA0MHB4O1xuXHRoZWlnaHQ6IDQwcHg7XG5cdG1hcmdpbjogYXV0byAwO1xuXHRmb250LXNpemU6IDMwcHg7XG5cdGNvbG9yOiAjY2M5YTlhO1xuXHRtYXJnaW4tYm90dG9tOiAxMXB4O1xuXHR0cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2Utb3V0O1xufVxuXG4udG9kby1saXN0IGxpIC5kZXN0cm95OmhvdmVyIHtcblx0Y29sb3I6ICNhZjViNWU7XG59XG5cbi50b2RvLWxpc3QgbGkgLmRlc3Ryb3k6YWZ0ZXIge1xuXHRjb250ZW50OiAnw5cnO1xufVxuXG4udG9kby1saXN0IGxpOmhvdmVyIC5kZXN0cm95IHtcblx0ZGlzcGxheTogYmxvY2s7XG59XG5cbi50b2RvLWxpc3QgbGkgLmVkaXQge1xuXHRkaXNwbGF5OiBub25lO1xufVxuXG4udG9kby1saXN0IGxpLmVkaXRpbmc6bGFzdC1jaGlsZCB7XG5cdG1hcmdpbi1ib3R0b206IC0xcHg7XG59XG5cbi5mb290ZXIge1xuXHRjb2xvcjogIzc3Nztcblx0cGFkZGluZzogMTBweCAxNXB4O1xuXHRoZWlnaHQ6IDIwcHg7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkICNlNmU2ZTY7XG59XG5cbi5mb290ZXI6YmVmb3JlIHtcblx0Y29udGVudDogJyc7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0cmlnaHQ6IDA7XG5cdGJvdHRvbTogMDtcblx0bGVmdDogMDtcblx0aGVpZ2h0OiA1MHB4O1xuXHRvdmVyZmxvdzogaGlkZGVuO1xuXHRib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxuXHQgICAgICAgICAgICAwIDhweCAwIC0zcHggI2Y2ZjZmNixcblx0ICAgICAgICAgICAgMCA5cHggMXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxuXHQgICAgICAgICAgICAwIDE2cHggMCAtNnB4ICNmNmY2ZjYsXG5cdCAgICAgICAgICAgIDAgMTdweCAycHggLTZweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbi50b2RvLWNvdW50IHtcblx0ZmxvYXQ6IGxlZnQ7XG5cdHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi50b2RvLWNvdW50IHN0cm9uZyB7XG5cdGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi5maWx0ZXJzIHtcblx0bWFyZ2luOiAwO1xuXHRwYWRkaW5nOiAwO1xuXHRsaXN0LXN0eWxlOiBub25lO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHJpZ2h0OiAwO1xuXHRsZWZ0OiAwO1xufVxuXG4uZmlsdGVycyBsaSB7XG5cdGRpc3BsYXk6IGlubGluZTtcbn1cblxuLmZpbHRlcnMgbGkgYSB7XG5cdGNvbG9yOiBpbmhlcml0O1xuXHRtYXJnaW46IDNweDtcblx0cGFkZGluZzogM3B4IDdweDtcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcblx0Ym9yZGVyLXJhZGl1czogM3B4O1xufVxuXG4uZmlsdGVycyBsaSBhOmhvdmVyIHtcblx0Ym9yZGVyLWNvbG9yOiByZ2JhKDE3NSwgNDcsIDQ3LCAwLjEpO1xufVxuXG4uZmlsdGVycyBsaSBhLnNlbGVjdGVkIHtcblx0Ym9yZGVyLWNvbG9yOiByZ2JhKDE3NSwgNDcsIDQ3LCAwLjIpO1xufVxuXG4uY2xlYXItY29tcGxldGVkLFxuaHRtbCAuY2xlYXItY29tcGxldGVkOmFjdGl2ZSB7XG5cdGZsb2F0OiByaWdodDtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRsaW5lLWhlaWdodDogMjBweDtcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jbGVhci1jb21wbGV0ZWQ6aG92ZXIge1xuXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLmluZm8ge1xuXHRtYXJnaW46IDY1cHggYXV0byAwO1xuXHRjb2xvcjogI2JmYmZiZjtcblx0Zm9udC1zaXplOiAxMHB4O1xuXHR0ZXh0LXNoYWRvdzogMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmluZm8gcCB7XG5cdGxpbmUtaGVpZ2h0OiAxO1xufVxuXG4uaW5mbyBhIHtcblx0Y29sb3I6IGluaGVyaXQ7XG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0Zm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmluZm8gYTpob3ZlciB7XG5cdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4vKlxuXHRIYWNrIHRvIHJlbW92ZSBiYWNrZ3JvdW5kIGZyb20gTW9iaWxlIFNhZmFyaS5cblx0Q2FuJ3QgdXNlIGl0IGdsb2JhbGx5IHNpbmNlIGl0IGRlc3Ryb3lzIGNoZWNrYm94ZXMgaW4gRmlyZWZveFxuKi9cbkBtZWRpYSBzY3JlZW4gYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86MCkge1xuXHQudG9nZ2xlLWFsbCxcblx0LnRvZG8tbGlzdCBsaSAudG9nZ2xlIHtcblx0XHRiYWNrZ3JvdW5kOiBub25lO1xuXHR9XG5cblx0LnRvZG8tbGlzdCBsaSAudG9nZ2xlIHtcblx0XHRoZWlnaHQ6IDQwcHg7XG5cdH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQzMHB4KSB7XG5cdC5mb290ZXIge1xuXHRcdGhlaWdodDogNTBweDtcblx0fVxuXG5cdC5maWx0ZXJzIHtcblx0XHRib3R0b206IDEwcHg7XG5cdH1cbn1cbiJdfQ== */", '', '']]

/***/ }),

/***/ "../../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../node_modules/postcss-loader/src/index.js?!../../node_modules/todomvc-common/base.css":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/palsiddh/Documents/personal/blog/angular-elements/node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!/Users/palsiddh/Documents/personal/blog/angular-elements/node_modules/postcss-loader/src??embedded!/Users/palsiddh/Documents/personal/blog/angular-elements/node_modules/todomvc-common/base.css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "hr {\n\tmargin: 20px 0;\n\tborder: 0;\n\tborder-top: 1px dashed #c5c5c5;\n\tborder-bottom: 1px dashed #f7f7f7;\n}\n\n.learn a {\n\tfont-weight: normal;\n\ttext-decoration: none;\n\tcolor: #b83f45;\n}\n\n.learn a:hover {\n\ttext-decoration: underline;\n\tcolor: #787e7e;\n}\n\n.learn h3,\n.learn h4,\n.learn h5 {\n\tmargin: 10px 0;\n\tfont-weight: 500;\n\tline-height: 1.2;\n\tcolor: #000;\n}\n\n.learn h3 {\n\tfont-size: 24px;\n}\n\n.learn h4 {\n\tfont-size: 18px;\n}\n\n.learn h5 {\n\tmargin-bottom: 0;\n\tfont-size: 14px;\n}\n\n.learn ul {\n\tpadding: 0;\n\tmargin: 0 0 30px 25px;\n}\n\n.learn li {\n\tline-height: 20px;\n}\n\n.learn p {\n\tfont-size: 15px;\n\tfont-weight: 300;\n\tline-height: 1.3;\n\tmargin-top: 0;\n\tmargin-bottom: 0;\n}\n\n#issue-count {\n\tdisplay: none;\n}\n\n.quote {\n\tborder: none;\n\tmargin: 20px 0 60px 0;\n}\n\n.quote p {\n\tfont-style: italic;\n}\n\n.quote p:before {\n\tcontent: '“';\n\tfont-size: 50px;\n\topacity: .15;\n\tposition: absolute;\n\ttop: -20px;\n\tleft: 3px;\n}\n\n.quote p:after {\n\tcontent: '”';\n\tfont-size: 50px;\n\topacity: .15;\n\tposition: absolute;\n\tbottom: -42px;\n\tright: 3px;\n}\n\n.quote footer {\n\tposition: absolute;\n\tbottom: -40px;\n\tright: 0;\n}\n\n.quote footer img {\n\tborder-radius: 3px;\n}\n\n.quote footer a {\n\tmargin-left: 5px;\n\tvertical-align: middle;\n}\n\n.speech-bubble {\n\tposition: relative;\n\tpadding: 10px;\n\tbackground: rgba(0, 0, 0, .04);\n\tborder-radius: 5px;\n}\n\n.speech-bubble:after {\n\tcontent: '';\n\tposition: absolute;\n\ttop: 100%;\n\tright: 30px;\n\tborder: 13px solid transparent;\n\tborder-top-color: rgba(0, 0, 0, .04);\n}\n\n.learn-bar > .learn {\n\tposition: absolute;\n\twidth: 272px;\n\ttop: 8px;\n\tleft: -300px;\n\tpadding: 10px;\n\tborder-radius: 5px;\n\tbackground-color: rgba(255, 255, 255, .6);\n\ttransition-property: left;\n\ttransition-duration: 500ms;\n}\n\n@media (min-width: 899px) {\n\t.learn-bar {\n\t\twidth: auto;\n\t\tpadding-left: 300px;\n\t}\n\n\t.learn-bar > .learn {\n\t\tleft: 8px;\n\t}\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy90b2RvbXZjLWNvbW1vbi9iYXNlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGNBQWM7Q0FDZCxTQUFTO0NBQ1QsOEJBQThCO0NBQzlCLGlDQUFpQztBQUNsQzs7QUFFQTtDQUNDLG1CQUFtQjtDQUNuQixxQkFBcUI7Q0FDckIsY0FBYztBQUNmOztBQUVBO0NBQ0MsMEJBQTBCO0NBQzFCLGNBQWM7QUFDZjs7QUFFQTs7O0NBR0MsY0FBYztDQUNkLGdCQUFnQjtDQUNoQixnQkFBZ0I7Q0FDaEIsV0FBVztBQUNaOztBQUVBO0NBQ0MsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLFVBQVU7Q0FDVixxQkFBcUI7QUFDdEI7O0FBRUE7Q0FDQyxpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLGdCQUFnQjtDQUNoQixhQUFhO0NBQ2IsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsYUFBYTtBQUNkOztBQUVBO0NBQ0MsWUFBWTtDQUNaLHFCQUFxQjtBQUN0Qjs7QUFFQTtDQUNDLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixlQUFlO0NBQ2YsWUFBWTtDQUNaLGtCQUFrQjtDQUNsQixVQUFVO0NBQ1YsU0FBUztBQUNWOztBQUVBO0NBQ0MsWUFBWTtDQUNaLGVBQWU7Q0FDZixZQUFZO0NBQ1osa0JBQWtCO0NBQ2xCLGFBQWE7Q0FDYixVQUFVO0FBQ1g7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsYUFBYTtDQUNiLFFBQVE7QUFDVDs7QUFFQTtDQUNDLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLGdCQUFnQjtDQUNoQixzQkFBc0I7QUFDdkI7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsYUFBYTtDQUNiLDhCQUE4QjtDQUM5QixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsa0JBQWtCO0NBQ2xCLFNBQVM7Q0FDVCxXQUFXO0NBQ1gsOEJBQThCO0NBQzlCLG9DQUFvQztBQUNyQzs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixZQUFZO0NBQ1osUUFBUTtDQUNSLFlBQVk7Q0FDWixhQUFhO0NBQ2Isa0JBQWtCO0NBQ2xCLHlDQUF5QztDQUN6Qyx5QkFBeUI7Q0FDekIsMEJBQTBCO0FBQzNCOztBQUVBO0NBQ0M7RUFDQyxXQUFXO0VBQ1gsbUJBQW1CO0NBQ3BCOztDQUVBO0VBQ0MsU0FBUztDQUNWO0FBQ0QiLCJmaWxlIjoibm9kZV9tb2R1bGVzL3RvZG9tdmMtY29tbW9uL2Jhc2UuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHIge1xuXHRtYXJnaW46IDIwcHggMDtcblx0Ym9yZGVyOiAwO1xuXHRib3JkZXItdG9wOiAxcHggZGFzaGVkICNjNWM1YzU7XG5cdGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgI2Y3ZjdmNztcbn1cblxuLmxlYXJuIGEge1xuXHRmb250LXdlaWdodDogbm9ybWFsO1xuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdGNvbG9yOiAjYjgzZjQ1O1xufVxuXG4ubGVhcm4gYTpob3ZlciB7XG5cdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuXHRjb2xvcjogIzc4N2U3ZTtcbn1cblxuLmxlYXJuIGgzLFxuLmxlYXJuIGg0LFxuLmxlYXJuIGg1IHtcblx0bWFyZ2luOiAxMHB4IDA7XG5cdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdGxpbmUtaGVpZ2h0OiAxLjI7XG5cdGNvbG9yOiAjMDAwO1xufVxuXG4ubGVhcm4gaDMge1xuXHRmb250LXNpemU6IDI0cHg7XG59XG5cbi5sZWFybiBoNCB7XG5cdGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmxlYXJuIGg1IHtcblx0bWFyZ2luLWJvdHRvbTogMDtcblx0Zm9udC1zaXplOiAxNHB4O1xufVxuXG4ubGVhcm4gdWwge1xuXHRwYWRkaW5nOiAwO1xuXHRtYXJnaW46IDAgMCAzMHB4IDI1cHg7XG59XG5cbi5sZWFybiBsaSB7XG5cdGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuXG4ubGVhcm4gcCB7XG5cdGZvbnQtc2l6ZTogMTVweDtcblx0Zm9udC13ZWlnaHQ6IDMwMDtcblx0bGluZS1oZWlnaHQ6IDEuMztcblx0bWFyZ2luLXRvcDogMDtcblx0bWFyZ2luLWJvdHRvbTogMDtcbn1cblxuI2lzc3VlLWNvdW50IHtcblx0ZGlzcGxheTogbm9uZTtcbn1cblxuLnF1b3RlIHtcblx0Ym9yZGVyOiBub25lO1xuXHRtYXJnaW46IDIwcHggMCA2MHB4IDA7XG59XG5cbi5xdW90ZSBwIHtcblx0Zm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4ucXVvdGUgcDpiZWZvcmUge1xuXHRjb250ZW50OiAn4oCcJztcblx0Zm9udC1zaXplOiA1MHB4O1xuXHRvcGFjaXR5OiAuMTU7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0dG9wOiAtMjBweDtcblx0bGVmdDogM3B4O1xufVxuXG4ucXVvdGUgcDphZnRlciB7XG5cdGNvbnRlbnQ6ICfigJ0nO1xuXHRmb250LXNpemU6IDUwcHg7XG5cdG9wYWNpdHk6IC4xNTtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRib3R0b206IC00MnB4O1xuXHRyaWdodDogM3B4O1xufVxuXG4ucXVvdGUgZm9vdGVyIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRib3R0b206IC00MHB4O1xuXHRyaWdodDogMDtcbn1cblxuLnF1b3RlIGZvb3RlciBpbWcge1xuXHRib3JkZXItcmFkaXVzOiAzcHg7XG59XG5cbi5xdW90ZSBmb290ZXIgYSB7XG5cdG1hcmdpbi1sZWZ0OiA1cHg7XG5cdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5zcGVlY2gtYnViYmxlIHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRwYWRkaW5nOiAxMHB4O1xuXHRiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIC4wNCk7XG5cdGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnNwZWVjaC1idWJibGU6YWZ0ZXIge1xuXHRjb250ZW50OiAnJztcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IDEwMCU7XG5cdHJpZ2h0OiAzMHB4O1xuXHRib3JkZXI6IDEzcHggc29saWQgdHJhbnNwYXJlbnQ7XG5cdGJvcmRlci10b3AtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjA0KTtcbn1cblxuLmxlYXJuLWJhciA+IC5sZWFybiB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0d2lkdGg6IDI3MnB4O1xuXHR0b3A6IDhweDtcblx0bGVmdDogLTMwMHB4O1xuXHRwYWRkaW5nOiAxMHB4O1xuXHRib3JkZXItcmFkaXVzOiA1cHg7XG5cdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjYpO1xuXHR0cmFuc2l0aW9uLXByb3BlcnR5OiBsZWZ0O1xuXHR0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDg5OXB4KSB7XG5cdC5sZWFybi1iYXIge1xuXHRcdHdpZHRoOiBhdXRvO1xuXHRcdHBhZGRpbmctbGVmdDogMzAwcHg7XG5cdH1cblxuXHQubGVhcm4tYmFyID4gLmxlYXJuIHtcblx0XHRsZWZ0OiA4cHg7XG5cdH1cbn1cbiJdfQ== */", '', '']]

/***/ }),

/***/ "../../node_modules/style-loader/lib/addStyles.js":
/*!***********************************************************************************************************!*\
  !*** /Users/palsiddh/Documents/personal/blog/angular-elements/node_modules/style-loader/lib/addStyles.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "../../node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "../../node_modules/style-loader/lib/urls.js":
/*!******************************************************************************************************!*\
  !*** /Users/palsiddh/Documents/personal/blog/angular-elements/node_modules/style-loader/lib/urls.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "../../node_modules/todomvc-app-css/index.css":
/*!*******************************************************************************************************!*\
  !*** /Users/palsiddh/Documents/personal/blog/angular-elements/node_modules/todomvc-app-css/index.css ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../postcss-loader/src??embedded!./index.css */ "../../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../node_modules/postcss-loader/src/index.js?!../../node_modules/todomvc-app-css/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../style-loader/lib/addStyles.js */ "../../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "../../node_modules/todomvc-common/base.css":
/*!*****************************************************************************************************!*\
  !*** /Users/palsiddh/Documents/personal/blog/angular-elements/node_modules/todomvc-common/base.css ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../postcss-loader/src??embedded!./base.css */ "../../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../node_modules/postcss-loader/src/index.js?!../../node_modules/todomvc-common/base.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../style-loader/lib/addStyles.js */ "../../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../../node_modules/postcss-loader/src??embedded!../../../node_modules/sass-loader/lib/loader.js??ref--13-3!./styles.scss */ "../../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../node_modules/postcss-loader/src/index.js?!../../node_modules/sass-loader/lib/loader.js?!./src/styles.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "../../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./src/styles.scss /Users/palsiddh/Documents/personal/blog/angular-elements/node_modules/todomvc-common/base.css /Users/palsiddh/Documents/personal/blog/angular-elements/node_modules/todomvc-app-css/index.css ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/palsiddh/Documents/personal/blog/angular-elements/apps/angular-elements/src/styles.scss */"./src/styles.scss");
__webpack_require__(/*! /Users/palsiddh/Documents/personal/blog/angular-elements/node_modules/todomvc-common/base.css */"../../node_modules/todomvc-common/base.css");
module.exports = __webpack_require__(/*! /Users/palsiddh/Documents/personal/blog/angular-elements/node_modules/todomvc-app-css/index.css */"../../node_modules/todomvc-app-css/index.css");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles-es5.js.map