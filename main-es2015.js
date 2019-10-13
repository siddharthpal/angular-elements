(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../libs/todo/src/index.ts":
/*!***************************************************************************************!*\
  !*** /Users/palsiddh/Documents/personal/blog/angular-elements/libs/todo/src/index.ts ***!
  \***************************************************************************************/
/*! exports provided: TodoWrapperModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_todo_wrapper_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/todo-wrapper.module */ "../../libs/todo/src/lib/todo-wrapper.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TodoWrapperModule", function() { return _lib_todo_wrapper_module__WEBPACK_IMPORTED_MODULE_0__["TodoWrapperModule"]; });




/***/ }),

/***/ "../../libs/todo/src/lib/todo-wrapper.module.ts":
/*!*********************************************************************************************************!*\
  !*** /Users/palsiddh/Documents/personal/blog/angular-elements/libs/todo/src/lib/todo-wrapper.module.ts ***!
  \*********************************************************************************************************/
/*! exports provided: TodoWrapperModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoWrapperModule", function() { return TodoWrapperModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_elements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/elements */ "../../node_modules/@angular/elements/fesm2015/elements.js");
/* harmony import */ var _todo_todo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todo/todo.component */ "../../libs/todo/src/lib/todo/todo.component.ts");
/* harmony import */ var _todo_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./todo.module */ "../../libs/todo/src/lib/todo.module.ts");






let TodoWrapperModule = class TodoWrapperModule {
    constructor(injector) {
        this.injector = injector;
        const todoElement = Object(_angular_elements__WEBPACK_IMPORTED_MODULE_3__["createCustomElement"])(_todo_todo_component__WEBPACK_IMPORTED_MODULE_4__["TodoComponent"], {
            injector: this.injector
        });
        customElements.define('todo-root-angular-element', todoElement);
    }
    ngDoBootstrap() { }
};
TodoWrapperModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _todo_module__WEBPACK_IMPORTED_MODULE_5__["TodoModule"]],
        entryComponents: [_todo_todo_component__WEBPACK_IMPORTED_MODULE_4__["TodoComponent"]]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"]])
], TodoWrapperModule);



/***/ }),

/***/ "../../libs/todo/src/lib/todo.module.ts":
/*!*************************************************************************************************!*\
  !*** /Users/palsiddh/Documents/personal/blog/angular-elements/libs/todo/src/lib/todo.module.ts ***!
  \*************************************************************************************************/
/*! exports provided: TodoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoModule", function() { return TodoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _todo_todo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo/todo.component */ "../../libs/todo/src/lib/todo/todo.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");





let TodoModule = class TodoModule {
};
TodoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]],
        declarations: [_todo_todo_component__WEBPACK_IMPORTED_MODULE_3__["TodoComponent"]],
        exports: [_todo_todo_component__WEBPACK_IMPORTED_MODULE_3__["TodoComponent"]]
    })
], TodoModule);



/***/ }),

/***/ "../../libs/todo/src/lib/todo/todo.component.css":
/*!**********************************************************************************************************!*\
  !*** /Users/palsiddh/Documents/personal/blog/angular-elements/libs/todo/src/lib/todo/todo.component.css ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWJzL3RvZG8vc3JjL2xpYi90b2RvL3RvZG8uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "../../libs/todo/src/lib/todo/todo.component.ts":
/*!*********************************************************************************************************!*\
  !*** /Users/palsiddh/Documents/personal/blog/angular-elements/libs/todo/src/lib/todo/todo.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: TodoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoComponent", function() { return TodoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");


let TodoComponent = class TodoComponent {
    constructor(ngZone) {
        this.ngZone = ngZone;
        this.addTodoEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.removeTodoEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.newTodo = '';
        this.todos = [];
        this.pushTodoItem = todo => {
            this.ngZone.run(() => {
                this.todos.push(todo);
            });
        };
        this.deleteTodoItem = todo => {
            this.ngZone.run(() => {
                this.todos = this.todos.filter(t => t.title !== todo.title);
            });
        };
    }
    addTodo() {
        const newTodo = {
            title: this.newTodo.trim(),
            completed: false
        };
        if (!newTodo.title) {
            return;
        }
        this.pushTodoItem(newTodo);
        this.addTodoEmitter.emit(newTodo);
        this.newTodo = '';
    }
    toggle() { }
    delete(todo) {
        this.removeTodoEmitter.emit(todo);
        this.todos = this.todos.filter(t => t.title !== todo.title);
    }
    ngOnInit() { }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], TodoComponent.prototype, "addTodoEmitter", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], TodoComponent.prototype, "removeTodoEmitter", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], TodoComponent.prototype, "pushTodoItem", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], TodoComponent.prototype, "deleteTodoItem", void 0);
TodoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'angular-elements-todo',
        template: __webpack_require__(/*! raw-loader!./todo.component.html */ "../../node_modules/raw-loader/index.js!../../libs/todo/src/lib/todo/todo.component.html"),
        styles: [__webpack_require__(/*! ./todo.component.css */ "../../libs/todo/src/lib/todo/todo.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
], TodoComponent);



/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../../libs/todo/src/lib/todo/todo.component.html":
/*!********************************************************************************************************************************************************************************************!*\
  !*** /Users/palsiddh/Documents/personal/blog/angular-elements/node_modules/raw-loader!/Users/palsiddh/Documents/personal/blog/angular-elements/libs/todo/src/lib/todo/todo.component.html ***!
  \********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Todo MVC App</h1>\n<h2>Angular Custom Element</h2>\n<section class=\"todoapp\">\n  <header class=\"header\">\n    <h1>todos</h1>\n    <input class=\"new-todo\" placeholder=\"What needs to be done?\" [(ngModel)]=\"newTodo\" autofocus=\"\"\n      (keyup.enter)=\"addTodo()\">\n  </header>\n  <section class=\"main\" *ngIf=\"todos.length\">\n    <ul class=\"todo-list\">\n      <li *ngFor=\"let todo of todos\" [class.completed]=\"todo.completed\">\n        <div class=\"view\">\n          <label>{{todo.title}}</label>\n          <button (click)=\"delete(todo)\" class=\"destroy\"></button>\n        </div>\n      </li>\n    </ul>\n  </section>\n</section>"

/***/ }),

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../../node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _angular_elements_todo_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-elements/todo-app */ "../../libs/todo/src/index.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_angular_elements_todo_app__WEBPACK_IMPORTED_MODULE_2__["TodoWrapperModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/palsiddh/Documents/personal/blog/angular-elements/apps/angular-elements/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map