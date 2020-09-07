function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-fab-fab-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fab/fab.page.html":
  /*!*******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fab/fab.page.html ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesFabFabPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header titulo=\"Fabs\"></app-header>\n\n<ion-content>\n\n  <ion-fab slot=\"fixed\" vertical=\"bottom\" horizontal=\"end\">\n    <ion-fab-button>\n      <ion-icon  name=\"add\"></ion-icon>\n    </ion-fab-button>\n\n    <ion-fab-list side=\"top\">\n      <ion-fab-button><ion-icon name=\"logo-ionic\"></ion-icon></ion-fab-button>\n      <ion-fab-button><ion-icon name=\"logo-angular\"></ion-icon></ion-fab-button>\n    </ion-fab-list>\n  </ion-fab>\n  <ion-list>\n    <ion-item *ngFor=\"let i of data; let index = index\"> \n      Item {{ index + 1 }}<!--Item es el label {{ lo que necesito que se muestre de la iteraccion}}  -->\n    </ion-item>\n  </ion-list>\n</ion-content>\n\n<ion-footer class=\"ion-no-border\">\n  <ion-toolbar>\n    \n  </ion-toolbar>\n</ion-footer>\n";
    /***/
  },

  /***/
  "./src/app/pages/fab/fab-routing.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/fab/fab-routing.module.ts ***!
    \*************************************************/

  /*! exports provided: FabPageRoutingModule */

  /***/
  function srcAppPagesFabFabRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FabPageRoutingModule", function () {
      return FabPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _fab_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./fab.page */
    "./src/app/pages/fab/fab.page.ts");

    var routes = [{
      path: '',
      component: _fab_page__WEBPACK_IMPORTED_MODULE_3__["FabPage"]
    }];

    var FabPageRoutingModule = function FabPageRoutingModule() {
      _classCallCheck(this, FabPageRoutingModule);
    };

    FabPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], FabPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/fab/fab.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/pages/fab/fab.module.ts ***!
    \*****************************************/

  /*! exports provided: FabPageModule */

  /***/
  function srcAppPagesFabFabModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FabPageModule", function () {
      return FabPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _fab_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./fab-routing.module */
    "./src/app/pages/fab/fab-routing.module.ts");
    /* harmony import */


    var _fab_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./fab.page */
    "./src/app/pages/fab/fab.page.ts");
    /* harmony import */


    var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/components/components.module */
    "./src/app/components/components.module.ts");

    var FabPageModule = function FabPageModule() {
      _classCallCheck(this, FabPageModule);
    };

    FabPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _fab_routing_module__WEBPACK_IMPORTED_MODULE_5__["FabPageRoutingModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
      declarations: [_fab_page__WEBPACK_IMPORTED_MODULE_6__["FabPage"]]
    })], FabPageModule);
    /***/
  },

  /***/
  "./src/app/pages/fab/fab.page.scss":
  /*!*****************************************!*\
    !*** ./src/app/pages/fab/fab.page.scss ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesFabFabPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZhYi9mYWIucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/fab/fab.page.ts":
  /*!***************************************!*\
    !*** ./src/app/pages/fab/fab.page.ts ***!
    \***************************************/

  /*! exports provided: FabPage */

  /***/
  function srcAppPagesFabFabPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FabPage", function () {
      return FabPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FabPage = /*#__PURE__*/function () {
      function FabPage() {
        _classCallCheck(this, FabPage);

        this.data = Array(100);
      }

      _createClass(FabPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FabPage;
    }();

    FabPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-fab',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./fab.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fab/fab.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./fab.page.scss */
      "./src/app/pages/fab/fab.page.scss"))["default"]]
    })], FabPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-fab-fab-module-es5.js.map