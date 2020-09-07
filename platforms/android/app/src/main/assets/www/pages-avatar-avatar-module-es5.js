function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-avatar-avatar-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/avatar/avatar.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/avatar/avatar.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAvatarAvatarPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n\n    <ion-title>avatar</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"onClick()\">\n        <ion-avatar>\n          <img src=\"/assets/icon/leonard.jpg\">\n        </ion-avatar>\n      </ion-button>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  \n  <ion-list>\n    <ion-item *ngFor=\"let a of [1,1] \">\n      <ion-avatar slot=\"start\">\n        <img src=\"/assets/icon/leonard.jpg\">\n      </ion-avatar>\n\n      <ion-label>Leonard</ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/avatar/avatar-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/avatar/avatar-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: AvatarPageRoutingModule */

  /***/
  function srcAppPagesAvatarAvatarRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AvatarPageRoutingModule", function () {
      return AvatarPageRoutingModule;
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


    var _avatar_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./avatar.page */
    "./src/app/pages/avatar/avatar.page.ts");

    var routes = [{
      path: '',
      component: _avatar_page__WEBPACK_IMPORTED_MODULE_3__["AvatarPage"]
    }];

    var AvatarPageRoutingModule = function AvatarPageRoutingModule() {
      _classCallCheck(this, AvatarPageRoutingModule);
    };

    AvatarPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AvatarPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/avatar/avatar.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/avatar/avatar.module.ts ***!
    \***********************************************/

  /*! exports provided: AvatarPageModule */

  /***/
  function srcAppPagesAvatarAvatarModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AvatarPageModule", function () {
      return AvatarPageModule;
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


    var _avatar_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./avatar-routing.module */
    "./src/app/pages/avatar/avatar-routing.module.ts");
    /* harmony import */


    var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/components/components.module */
    "./src/app/components/components.module.ts");
    /* harmony import */


    var _avatar_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./avatar.page */
    "./src/app/pages/avatar/avatar.page.ts");

    var AvatarPageModule = function AvatarPageModule() {
      _classCallCheck(this, AvatarPageModule);
    };

    AvatarPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _avatar_routing_module__WEBPACK_IMPORTED_MODULE_5__["AvatarPageRoutingModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"]],
      declarations: [_avatar_page__WEBPACK_IMPORTED_MODULE_7__["AvatarPage"]]
    })], AvatarPageModule);
    /***/
  },

  /***/
  "./src/app/pages/avatar/avatar.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/pages/avatar/avatar.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAvatarAvatarPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F2YXRhci9hdmF0YXIucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/avatar/avatar.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/avatar/avatar.page.ts ***!
    \*********************************************/

  /*! exports provided: AvatarPage */

  /***/
  function srcAppPagesAvatarAvatarPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AvatarPage", function () {
      return AvatarPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AvatarPage = /*#__PURE__*/function () {
      function AvatarPage() {
        _classCallCheck(this, AvatarPage);
      }

      _createClass(AvatarPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AvatarPage;
    }();

    AvatarPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-avatar',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./avatar.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/avatar/avatar.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./avatar.page.scss */
      "./src/app/pages/avatar/avatar.page.scss"))["default"]]
    })], AvatarPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-avatar-avatar-module-es5.js.map