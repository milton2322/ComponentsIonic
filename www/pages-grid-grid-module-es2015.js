(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-grid-grid-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/grid/grid.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/grid/grid.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header titulo=\"Grids\"></app-header>\n\n<ion-content>\n    <ion-grid>\n      <!-- <ion-row>\n        <ion-col *ngFor=\"let c of [1,1,1,1,1,1]; let i= index\">\n         hello {{ i + 1 }}\n        </ion-col>\n      </ion-row> -->\n      <ion-row>\n        <ion-col\n          size=\"12\" size-lg=\"3\" size-md=\"4\" size-sm=\"6\"\n          *ngFor=\"let c of [1,1,1,1,1,1]\">\n          <ion-card>\n            <ion-card>\n              <ion-img src=\"/assets/shapes.svg\"></ion-img>\n              <ion-card-header>\n                <ion-card-subtitle>Card Subtitle</ion-card-subtitle>\n                <ion-card-title>Car Title</ion-card-title>\n              </ion-card-header>\n              <ion-card-content>\n                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quos accusantium ratione! Numquam dolore, repellat facere voluptatum at commodi cum voluptatibus tenetur ipsa, a exercitationem laborum aspernatur amet. Incidunt, quis.\n              </ion-card-content>\n            </ion-card>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/grid/grid-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/grid/grid-routing.module.ts ***!
  \***************************************************/
/*! exports provided: GridPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridPageRoutingModule", function() { return GridPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _grid_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./grid.page */ "./src/app/pages/grid/grid.page.ts");




const routes = [
    {
        path: '',
        component: _grid_page__WEBPACK_IMPORTED_MODULE_3__["GridPage"]
    }
];
let GridPageRoutingModule = class GridPageRoutingModule {
};
GridPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], GridPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/grid/grid.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/grid/grid.module.ts ***!
  \*******************************************/
/*! exports provided: GridPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridPageModule", function() { return GridPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _grid_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./grid-routing.module */ "./src/app/pages/grid/grid-routing.module.ts");
/* harmony import */ var _grid_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./grid.page */ "./src/app/pages/grid/grid.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








let GridPageModule = class GridPageModule {
};
GridPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _grid_routing_module__WEBPACK_IMPORTED_MODULE_5__["GridPageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_grid_page__WEBPACK_IMPORTED_MODULE_6__["GridPage"]]
    })
], GridPageModule);



/***/ }),

/***/ "./src/app/pages/grid/grid.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/grid/grid.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dyaWQvZ3JpZC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/grid/grid.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/grid/grid.page.ts ***!
  \*****************************************/
/*! exports provided: GridPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridPage", function() { return GridPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let GridPage = class GridPage {
    constructor() { }
    ngOnInit() {
    }
};
GridPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-grid',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./grid.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/grid/grid.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./grid.page.scss */ "./src/app/pages/grid/grid.page.scss")).default]
    })
], GridPage);



/***/ })

}]);
//# sourceMappingURL=pages-grid-grid-module-es2015.js.map