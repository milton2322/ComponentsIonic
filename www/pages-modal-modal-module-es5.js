function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-modal-modal-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modal-info/modal-info.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modal-info/modal-info.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesModalInfoModalInfoPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <app-header titulo=\"Modal Info\"></app-header> -->\n\n<ion-header>\n  <ion-toolbar>\n    <ion-title>Modal Info</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-item>\n    <ion-avatar slot=\"start\">\n      <img src=\"/assets/icon/leonard.jpg\" >\n    </ion-avatar>\n    <ion-label>Leonard watch</ion-label>\n  </ion-item>\n  \n\n  <ion-button expand=\"full\" color=\"primary\" (click)=\"salirSinArgs()\">\n    Salir sin\n  </ion-button>\n  <ion-button expand=\"full\" color=\"secondary\" (click)=\"salirConArgs()\">\n    Salir con\n  </ion-button>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modal/modal.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modal/modal.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesModalModalPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header titulo=\"modal\"></app-header>\n\n<ion-content>\n\n  <ion-button extend=\"full\" (click)=\"abrirModal()\">\n    Abril modal\n  </ion-button>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/modal-info/modal-info.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/modal-info/modal-info.module.ts ***!
    \*******************************************************/

  /*! exports provided: ModalInfoPageModule */

  /***/
  function srcAppPagesModalInfoModalInfoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalInfoPageModule", function () {
      return ModalInfoPageModule;
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


    var _modal_info_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./modal-info.page */
    "./src/app/pages/modal-info/modal-info.page.ts");
    /* harmony import */


    var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/components/components.module */
    "./src/app/components/components.module.ts"); //import { ModalInfoPageRoutingModule } from './modal-info-routing.module';


    var ModalInfoPageModule = function ModalInfoPageModule() {
      _classCallCheck(this, ModalInfoPageModule);
    };

    ModalInfoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], //ModalInfoPageRoutingModule,
      src_app_components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"]],
      declarations: [_modal_info_page__WEBPACK_IMPORTED_MODULE_5__["ModalInfoPage"]]
    })], ModalInfoPageModule);
    /***/
  },

  /***/
  "./src/app/pages/modal-info/modal-info.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/pages/modal-info/modal-info.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesModalInfoModalInfoPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21vZGFsLWluZm8vbW9kYWwtaW5mby5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/modal-info/modal-info.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/modal-info/modal-info.page.ts ***!
    \*****************************************************/

  /*! exports provided: ModalInfoPage */

  /***/
  function srcAppPagesModalInfoModalInfoPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalInfoPage", function () {
      return ModalInfoPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var ModalInfoPage = /*#__PURE__*/function () {
      function ModalInfoPage(modalCtrl) {
        _classCallCheck(this, ModalInfoPage);

        this.modalCtrl = modalCtrl;
      }

      _createClass(ModalInfoPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "salirSinArgs",
        value: function salirSinArgs() {
          this.modalCtrl.dismiss({
            'dismissed': true
          });
        }
      }, {
        key: "salirConArgs",
        value: function salirConArgs() {
          this.modalCtrl.dismiss({
            firstName: 'Entro',
            lastName: 'Final'
          });
        }
      }]);

      return ModalInfoPage;
    }();

    ModalInfoPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ModalInfoPage.prototype, "firstName", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ModalInfoPage.prototype, "lastName", void 0);
    ModalInfoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-modal-info',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./modal-info.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modal-info/modal-info.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./modal-info.page.scss */
      "./src/app/pages/modal-info/modal-info.page.scss"))["default"]]
    })], ModalInfoPage);
    /***/
  },

  /***/
  "./src/app/pages/modal/modal-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/modal/modal-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: ModalPageRoutingModule */

  /***/
  function srcAppPagesModalModalRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalPageRoutingModule", function () {
      return ModalPageRoutingModule;
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


    var _modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./modal.page */
    "./src/app/pages/modal/modal.page.ts");

    var routes = [{
      path: '',
      component: _modal_page__WEBPACK_IMPORTED_MODULE_3__["ModalPage"]
    }];

    var ModalPageRoutingModule = function ModalPageRoutingModule() {
      _classCallCheck(this, ModalPageRoutingModule);
    };

    ModalPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ModalPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/modal/modal.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/modal/modal.module.ts ***!
    \*********************************************/

  /*! exports provided: ModalPageModule */

  /***/
  function srcAppPagesModalModalModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalPageModule", function () {
      return ModalPageModule;
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


    var _modal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./modal-routing.module */
    "./src/app/pages/modal/modal-routing.module.ts");
    /* harmony import */


    var _modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./modal.page */
    "./src/app/pages/modal/modal.page.ts");
    /* harmony import */


    var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/components/components.module */
    "./src/app/components/components.module.ts");
    /* harmony import */


    var _modal_info_modal_info_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../modal-info/modal-info.page */
    "./src/app/pages/modal-info/modal-info.page.ts");
    /* harmony import */


    var _modal_info_modal_info_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../modal-info/modal-info.module */
    "./src/app/pages/modal-info/modal-info.module.ts");

    var ModalPageModule = function ModalPageModule() {
      _classCallCheck(this, ModalPageModule);
    };

    ModalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      /*esto se realiza ya que al page no se encuentra en el routing y al requerirse por medio de una
      ejecucion es necesario que este dentro del entryComponents */
      entryComponents: [_modal_info_modal_info_page__WEBPACK_IMPORTED_MODULE_8__["ModalInfoPage"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _modal_routing_module__WEBPACK_IMPORTED_MODULE_5__["ModalPageRoutingModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _modal_info_modal_info_module__WEBPACK_IMPORTED_MODULE_9__["ModalInfoPageModule"]],
      declarations: [_modal_page__WEBPACK_IMPORTED_MODULE_6__["ModalPage"]]
    })], ModalPageModule);
    /***/
  },

  /***/
  "./src/app/pages/modal/modal.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/pages/modal/modal.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesModalModalPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21vZGFsL21vZGFsLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/modal/modal.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/modal/modal.page.ts ***!
    \*******************************************/

  /*! exports provided: ModalPage */

  /***/
  function srcAppPagesModalModalPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalPage", function () {
      return ModalPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _modal_info_modal_info_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../modal-info/modal-info.page */
    "./src/app/pages/modal-info/modal-info.page.ts");

    var ModalPage = /*#__PURE__*/function () {
      function ModalPage(modalCtrl) {
        _classCallCheck(this, ModalPage);

        this.modalCtrl = modalCtrl;
      }

      _createClass(ModalPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "abrirModal",
        value: function abrirModal() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var modal, _yield$modal$onDidDis, data;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.modalCtrl.create({
                      component: _modal_info_modal_info_page__WEBPACK_IMPORTED_MODULE_3__["ModalInfoPage"],
                      componentProps: {
                        'firstName': 'Douglas',
                        'lastName': 'Adams',
                        'middleInitial': 'N'
                      }
                    });

                  case 2:
                    modal = _context.sent;
                    _context.next = 5;
                    return modal.present();

                  case 5:
                    _context.next = 7;
                    return modal.onDidDismiss();

                  case 7:
                    _yield$modal$onDidDis = _context.sent;
                    data = _yield$modal$onDidDis.data;
                    console.log('Retorno del modal', data);

                  case 10:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return ModalPage;
    }();

    ModalPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    ModalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-modal',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./modal.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modal/modal.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./modal.page.scss */
      "./src/app/pages/modal/modal.page.scss"))["default"]]
    })], ModalPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-modal-modal-module-es5.js.map