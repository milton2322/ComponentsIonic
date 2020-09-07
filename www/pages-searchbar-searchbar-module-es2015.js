(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-searchbar-searchbar-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/searchbar/searchbar.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/searchbar/searchbar.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n\n    <ion-title>searchbar</ion-title>\n  </ion-toolbar>\n  \n  <ion-searchbar animated\n                 (ionChange)=\"buscar( $event )\">\n  </ion-searchbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n    <!-- esto me trae la informacion donde se le pasa el filtro, la palabra que me\n       captura y la columna en este caso de 'title' -->\n    <ion-item *ngFor=\"let album of dataAlbum | filtro: textBuscar: 'title'\">\n      {{ album.title}}\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/searchbar/searchbar-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/searchbar/searchbar-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: SearchbarPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchbarPageRoutingModule", function() { return SearchbarPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _searchbar_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./searchbar.page */ "./src/app/pages/searchbar/searchbar.page.ts");




const routes = [
    {
        path: '',
        component: _searchbar_page__WEBPACK_IMPORTED_MODULE_3__["SearchbarPage"]
    }
];
let SearchbarPageRoutingModule = class SearchbarPageRoutingModule {
};
SearchbarPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SearchbarPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/searchbar/searchbar.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/searchbar/searchbar.module.ts ***!
  \*****************************************************/
/*! exports provided: SearchbarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchbarPageModule", function() { return SearchbarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _searchbar_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./searchbar-routing.module */ "./src/app/pages/searchbar/searchbar-routing.module.ts");
/* harmony import */ var _searchbar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./searchbar.page */ "./src/app/pages/searchbar/searchbar.page.ts");
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");








let SearchbarPageModule = class SearchbarPageModule {
};
SearchbarPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _searchbar_routing_module__WEBPACK_IMPORTED_MODULE_5__["SearchbarPageRoutingModule"],
            src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]
        ],
        declarations: [_searchbar_page__WEBPACK_IMPORTED_MODULE_6__["SearchbarPage"]]
    })
], SearchbarPageModule);



/***/ }),

/***/ "./src/app/pages/searchbar/searchbar.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/searchbar/searchbar.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NlYXJjaGJhci9zZWFyY2hiYXIucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/searchbar/searchbar.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/searchbar/searchbar.page.ts ***!
  \***************************************************/
/*! exports provided: SearchbarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchbarPage", function() { return SearchbarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");



let SearchbarPage = class SearchbarPage {
    constructor(dataService) {
        this.dataService = dataService;
        //se declara un arreglo vacio
        this.dataAlbum = [];
        this.textBuscar = '';
    }
    ngOnInit() {
        this.dataService.getAlbums()
            .subscribe(dataAlbum => {
            console.log(dataAlbum);
            this.dataAlbum = dataAlbum;
        });
    }
    buscar(event) {
        //aqui se obtiene el valor del seachbar
        this.textBuscar = event.detail.value;
        console.log(this.textBuscar);
    }
};
SearchbarPage.ctorParameters = () => [
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }
];
SearchbarPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-searchbar',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./searchbar.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/searchbar/searchbar.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./searchbar.page.scss */ "./src/app/pages/searchbar/searchbar.page.scss")).default]
    })
], SearchbarPage);



/***/ })

}]);
//# sourceMappingURL=pages-searchbar-searchbar-module-es2015.js.map