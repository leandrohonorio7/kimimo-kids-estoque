(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["kimimo-kimimo-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/kimimo/components/produto-detail/produto-detail.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/kimimo/components/produto-detail/produto-detail.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>kimimo-detail works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/kimimo/components/produto-list/produto-list.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/kimimo/components/produto-list/produto-list.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>kimimo-list works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/kimimo/containers/produto/produto.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/kimimo/containers/produto/produto.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-produto-detail></app-produto-detail>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/kimimo/containers/produtos/produtos.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/kimimo/containers/produtos/produtos.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <app-produto-list></app-produto-list>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/kimimo/components/produto-detail/produto-detail.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/kimimo/components/produto-detail/produto-detail.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2tpbWltby9jb21wb25lbnRzL3Byb2R1dG8tZGV0YWlsL3Byb2R1dG8tZGV0YWlsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/kimimo/components/produto-detail/produto-detail.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/kimimo/components/produto-detail/produto-detail.component.ts ***!
  \******************************************************************************/
/*! exports provided: ProdutoDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutoDetailComponent", function() { return ProdutoDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProdutoDetailComponent = /** @class */ (function () {
    function ProdutoDetailComponent() {
    }
    ProdutoDetailComponent.prototype.ngOnInit = function () {
    };
    ProdutoDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-produto-detail',
            template: __webpack_require__(/*! raw-loader!./produto-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/kimimo/components/produto-detail/produto-detail.component.html"),
            styles: [__webpack_require__(/*! ./produto-detail.component.scss */ "./src/app/kimimo/components/produto-detail/produto-detail.component.scss")]
        })
    ], ProdutoDetailComponent);
    return ProdutoDetailComponent;
}());



/***/ }),

/***/ "./src/app/kimimo/components/produto-list/produto-list.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/kimimo/components/produto-list/produto-list.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2tpbWltby9jb21wb25lbnRzL3Byb2R1dG8tbGlzdC9wcm9kdXRvLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/kimimo/components/produto-list/produto-list.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/kimimo/components/produto-list/produto-list.component.ts ***!
  \**************************************************************************/
/*! exports provided: ProdutoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutoListComponent", function() { return ProdutoListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProdutoListComponent = /** @class */ (function () {
    function ProdutoListComponent() {
    }
    ProdutoListComponent.prototype.ngOnInit = function () {
    };
    ProdutoListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-produto-list',
            template: __webpack_require__(/*! raw-loader!./produto-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/kimimo/components/produto-list/produto-list.component.html"),
            styles: [__webpack_require__(/*! ./produto-list.component.scss */ "./src/app/kimimo/components/produto-list/produto-list.component.scss")]
        })
    ], ProdutoListComponent);
    return ProdutoListComponent;
}());



/***/ }),

/***/ "./src/app/kimimo/containers/produto/produto.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/kimimo/containers/produto/produto.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2tpbWltby9jb250YWluZXJzL3Byb2R1dG8vcHJvZHV0by5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/kimimo/containers/produto/produto.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/kimimo/containers/produto/produto.component.ts ***!
  \****************************************************************/
/*! exports provided: ProdutoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutoComponent", function() { return ProdutoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProdutoComponent = /** @class */ (function () {
    function ProdutoComponent() {
    }
    ProdutoComponent.prototype.ngOnInit = function () {
    };
    ProdutoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-produto',
            template: __webpack_require__(/*! raw-loader!./produto.component.html */ "./node_modules/raw-loader/index.js!./src/app/kimimo/containers/produto/produto.component.html"),
            styles: [__webpack_require__(/*! ./produto.component.scss */ "./src/app/kimimo/containers/produto/produto.component.scss")]
        })
    ], ProdutoComponent);
    return ProdutoComponent;
}());



/***/ }),

/***/ "./src/app/kimimo/containers/produtos/produtos.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/kimimo/containers/produtos/produtos.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2tpbWltby9jb250YWluZXJzL3Byb2R1dG9zL3Byb2R1dG9zLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/kimimo/containers/produtos/produtos.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/kimimo/containers/produtos/produtos.component.ts ***!
  \******************************************************************/
/*! exports provided: ProdutosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutosComponent", function() { return ProdutosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProdutosComponent = /** @class */ (function () {
    function ProdutosComponent() {
    }
    ProdutosComponent.prototype.ngOnInit = function () {
    };
    ProdutosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-produtos',
            template: __webpack_require__(/*! raw-loader!./produtos.component.html */ "./node_modules/raw-loader/index.js!./src/app/kimimo/containers/produtos/produtos.component.html"),
            styles: [__webpack_require__(/*! ./produtos.component.scss */ "./src/app/kimimo/containers/produtos/produtos.component.scss")]
        })
    ], ProdutosComponent);
    return ProdutosComponent;
}());



/***/ }),

/***/ "./src/app/kimimo/kimimo-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/kimimo/kimimo-routing.module.ts ***!
  \*************************************************/
/*! exports provided: KimimoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KimimoRoutingModule", function() { return KimimoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _containers_produtos_produtos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers/produtos/produtos.component */ "./src/app/kimimo/containers/produtos/produtos.component.ts");
/* harmony import */ var _containers_produto_produto_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./containers/produto/produto.component */ "./src/app/kimimo/containers/produto/produto.component.ts");





var routes = [
    { path: '', pathMatch: 'full', redirectTo: 'produtos' },
    { path: 'produtos', component: _containers_produtos_produtos_component__WEBPACK_IMPORTED_MODULE_3__["ProdutosComponent"] },
    { path: 'produto', component: _containers_produto_produto_component__WEBPACK_IMPORTED_MODULE_4__["ProdutoComponent"] },
];
var KimimoRoutingModule = /** @class */ (function () {
    function KimimoRoutingModule() {
    }
    KimimoRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], KimimoRoutingModule);
    return KimimoRoutingModule;
}());



/***/ }),

/***/ "./src/app/kimimo/kimimo.module.ts":
/*!*****************************************!*\
  !*** ./src/app/kimimo/kimimo.module.ts ***!
  \*****************************************/
/*! exports provided: KimimoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KimimoModule", function() { return KimimoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _kimimo_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./kimimo-routing.module */ "./src/app/kimimo/kimimo-routing.module.ts");
/* harmony import */ var _components_produto_list_produto_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/produto-list/produto-list.component */ "./src/app/kimimo/components/produto-list/produto-list.component.ts");
/* harmony import */ var _components_produto_detail_produto_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/produto-detail/produto-detail.component */ "./src/app/kimimo/components/produto-detail/produto-detail.component.ts");
/* harmony import */ var _containers_produto_produto_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./containers/produto/produto.component */ "./src/app/kimimo/containers/produto/produto.component.ts");
/* harmony import */ var _containers_produtos_produtos_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./containers/produtos/produtos.component */ "./src/app/kimimo/containers/produtos/produtos.component.ts");








var KimimoModule = /** @class */ (function () {
    function KimimoModule() {
    }
    KimimoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_components_produto_list_produto_list_component__WEBPACK_IMPORTED_MODULE_4__["ProdutoListComponent"], _components_produto_detail_produto_detail_component__WEBPACK_IMPORTED_MODULE_5__["ProdutoDetailComponent"], _containers_produto_produto_component__WEBPACK_IMPORTED_MODULE_6__["ProdutoComponent"], _containers_produtos_produtos_component__WEBPACK_IMPORTED_MODULE_7__["ProdutosComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _kimimo_routing_module__WEBPACK_IMPORTED_MODULE_3__["KimimoRoutingModule"]
            ]
        })
    ], KimimoModule);
    return KimimoModule;
}());



/***/ })

}]);
//# sourceMappingURL=kimimo-kimimo-module-es5.js.map