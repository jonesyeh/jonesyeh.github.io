webpackJsonp([339],{

/***/ 1320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectoryBrowserAddEditModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Model_ViewModel_DirectoryBrowserViewModel__ = __webpack_require__(130);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the DirectoryBrowserModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DirectoryBrowserAddEditModalPage = /** @class */ (function () {
    function DirectoryBrowserAddEditModalPage(navCtrl, navParams, viewCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.item = new __WEBPACK_IMPORTED_MODULE_2__Model_ViewModel_DirectoryBrowserViewModel__["a" /* DirectoryBrowserViewModel */]();
        this.item.filepath = navParams.data.item.filepath;
        this.item.directory_name = navParams.data.item.directory_name;
        this.item.create_time = navParams.data.item.create_time;
        this.CanEditFileBrowser = navParams.data.CanEditFileBrowser;
        this.mode = navParams.data.mode;
        if (this.mode === "POST")
            this.title = "新增資料夾";
        else
            this.title = "變更資料夾";
    }
    DirectoryBrowserAddEditModalPage.prototype.Save = function () {
        this.viewCtrl.dismiss(this.item);
    };
    DirectoryBrowserAddEditModalPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    DirectoryBrowserAddEditModalPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad DirectoryBrowserModalPage");
    };
    DirectoryBrowserAddEditModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: "page-directory-browser-add-edit-modal",template:/*ion-inline-start:"F:\ionic4\prod\src\pages\directory-browser-add-edit-modal\directory-browser-add-edit-modal.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content  padding>\n    <form #Form="ngForm">\n\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label stacked >目前路徑</ion-label>\n              <ion-input type="text" disabled=true name="filepath" #filepath="ngModel" [(ngModel)]="item.filepath"\n                required></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label stacked >資料夾名稱</ion-label>\n              <ion-input type="text" [disabled]="CanEditFileBrowser==false" name="directory_name" #directory_name="ngModel" [(ngModel)]="item.directory_name"\n                required ></ion-input>\n            </ion-item>\n            <div *ngIf="directory_name.errors && directory_name.touched" class="error-message">\n              資料夾名稱不能為空白\n            </div>\n\n          </ion-col>\n        </ion-row>\n      </form>\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-row>\n      <ion-col>\n        <div [ngClass]="[\'command\']">\n          <button small title="取消" ion-button color="dark" icon-left (click)="close()">\n            <ion-icon name="backspace"></ion-icon>\n          </button>\n          <button small title="確認" [disabled]="CanEditFileBrowser==false"  ion-button color="dark" [disabled]="!Form.form.valid" icon-left (click)="Save()">\n            <ion-icon name="checkmark-circle"></ion-icon>\n          </button>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"F:\ionic4\prod\src\pages\directory-browser-add-edit-modal\directory-browser-add-edit-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* LoadingController */]])
    ], DirectoryBrowserAddEditModalPage);
    return DirectoryBrowserAddEditModalPage;
}());

//# sourceMappingURL=directory-browser-add-edit-modal.js.map

/***/ }),

/***/ 481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectoryBrowserAddEditModalPageModule", function() { return DirectoryBrowserAddEditModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__directory_browser_add_edit_modal__ = __webpack_require__(1320);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DirectoryBrowserAddEditModalPageModule = /** @class */ (function () {
    function DirectoryBrowserAddEditModalPageModule() {
    }
    DirectoryBrowserAddEditModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__directory_browser_add_edit_modal__["a" /* DirectoryBrowserAddEditModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__directory_browser_add_edit_modal__["a" /* DirectoryBrowserAddEditModalPage */]),
            ],
        })
    ], DirectoryBrowserAddEditModalPageModule);
    return DirectoryBrowserAddEditModalPageModule;
}());

//# sourceMappingURL=directory-browser-add-edit-modal.module.js.map

/***/ })

});
//# sourceMappingURL=339.js.map