webpackJsonp([314],{

/***/ 1301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColumnMappingAddEditModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Model_ViewModel_ColumnMappingViewModel__ = __webpack_require__(929);
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
 * Generated class for the ColumnMappingModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ColumnMappingAddEditModalPage = /** @class */ (function () {
    function ColumnMappingAddEditModalPage(navCtrl, navParams, viewCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.item = new __WEBPACK_IMPORTED_MODULE_2__Model_ViewModel_ColumnMappingViewModel__["a" /* ColumnMappingViewModel */]();
        this.item.schemaname = navParams.data.item.schemaname;
        this.item.tablename = navParams.data.item.tablename;
        this.item.columnname = navParams.data.item.columnname;
        this.item.column_group_key = navParams.data.item.column_group_key;
        this.item.mapping_column = navParams.data.item.mapping_column;
        this.item.mapping_column_desc = navParams.data.item.mapping_column_desc;
        this.item.creator = navParams.data.item.creator;
        this.item.create_time = navParams.data.item.create_time;
        this.item.modifier = navParams.data.item.modifier;
        this.item.last_update_time = navParams.data.item.last_update_time;
        this.mode = navParams.data.mode;
        this.CanEditTable = navParams.data.CanEditTable;
        if (this.mode === "POST")
            this.title = "新增";
        else
            this.title = "更新";
    }
    ColumnMappingAddEditModalPage.prototype.SelectColumn = function () {
        var _this = this;
        var modal = this.modalCtrl.create("TableDetailSelectModalPage", {
            table_item: this.item,
        });
        modal.onDidDismiss(function (select_data) {
            if (select_data == null)
                return;
            _this.item.columnname = select_data.columnname;
        });
        modal.present();
    };
    ColumnMappingAddEditModalPage.prototype.Save = function () {
        this.viewCtrl.dismiss(this.item);
    };
    ColumnMappingAddEditModalPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    ColumnMappingAddEditModalPage.prototype.SelectColumnGroup = function () {
        var _this = this;
        var modal = this.modalCtrl.create("CodeSelectModalPage", {
            select_key: this.item.column_group_key,
            code_type: "077",
            code_key: "",
            title: "欄位群組",
        });
        modal.onDidDismiss(function (select_data) {
            if (select_data == null)
                return;
            _this.item.column_group_key = select_data.code_key;
        });
        modal.present();
    };
    ColumnMappingAddEditModalPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad ColumnMappingAddEditModalPage");
    };
    ColumnMappingAddEditModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page column-mapping-add-edit-modal",template:/*ion-inline-start:"F:\ionic4\prod\src\pages\column-mapping-add-edit-modal\column-mapping-add-edit-modal.html"*/'<ion-header>\n\n    <ion-navbar>\n\n      <ion-title>{{title}}</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n  <ion-content padding>\n    <form #Form="ngForm" >\n\n      <ion-row>\n\n          <ion-col>\n              <ion-item>\n                <ion-label stacked>欄位群組</ion-label>\n                <ion-input type="text" readonly=true [disabled]="mode==\'PUT\'"  name="column_group_key" #column_group_key="ngModel" [(ngModel)]="item.column_group_key" required></ion-input>\n\n                <button ion-button outline item-end *ngIf="CanEditTable==true && mode==\'POST\'"  icon-right (click)="SelectColumnGroup()">\n                  <ion-icon name="arrow-dropdown"></ion-icon>\n                </button>\n              </ion-item>\n\n              <div *ngIf="column_group_key.errors && column_group_key.touched " class="error-message">\n                  欄位群組不能為空白\n              </div>\n            </ion-col>\n            <ion-col >\n              <ion-item>\n                <ion-label stacked>欄位名稱</ion-label>\n                <ion-input type="text" [readonly]="mode==\'PUT\'"  name="columnname" #columnname="ngModel" required [(ngModel)]="item.columnname"></ion-input>\n\n                <button ion-button [disabled]="mode==\'PUT\'" outline item-end icon-right (click)="SelectColumn()">\n                  <ion-icon name="arrow-dropdown"></ion-icon>\n                </button>\n              </ion-item>\n\n              <div *ngIf="columnname.errors && columnname.touched" class="error-message">\n                  欄位名稱不能為空白\n              </div>\n            </ion-col>\n        <!-- <ion-col>\n            <ion-item>\n              <ion-label stacked>欄位名稱</ion-label>\n              <ion-input type="text" [readonly]="mode==\'PUT\'" name="columnname" #columnname="ngModel" [(ngModel)]="item.columnname" required></ion-input>\n            </ion-item>\n          </ion-col> -->\n\n      </ion-row>\n      <ion-row>\n\n          <ion-col>\n            <ion-item>\n              <ion-label stacked>對應欄位</ion-label>\n              <ion-input type="text"  name="mapping_column" #mapping_column="ngModel" [(ngModel)]="item.mapping_column" required></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col>\n              <ion-item>\n                <ion-label stacked>對應欄位說明</ion-label>\n                <ion-input type="text"  name="mapping_column_desc" #mapping_column_desc="ngModel" [(ngModel)]="item.mapping_column_desc" required></ion-input>\n              </ion-item>\n            </ion-col>\n\n        </ion-row>\n\n\n\n    </form>\n\n  </ion-content>\n  <ion-footer>\n    <ion-toolbar>\n      <ion-row>\n        <ion-col>\n          <div [ngClass]="[\'command\']">\n            <button small title="取消" ion-button color="dark" icon-left (click)="close()">\n              <ion-icon name="backspace"></ion-icon>\n            </button>\n            <button small [disabled]="CanEditTable==false" title="確認" ion-button color="dark" [disabled]="!Form.form.valid" icon-left (click)="Save()">\n              <ion-icon name="checkmark-circle"></ion-icon>\n            </button>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-toolbar>\n  </ion-footer>\n'/*ion-inline-end:"F:\ionic4\prod\src\pages\column-mapping-add-edit-modal\column-mapping-add-edit-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
    ], ColumnMappingAddEditModalPage);
    return ColumnMappingAddEditModalPage;
}());

//# sourceMappingURL=column-mapping-add-edit-modal.js.map

/***/ }),

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColumnMappingAddEditModalPageModule", function() { return ColumnMappingAddEditModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__column_mapping_add_edit_modal__ = __webpack_require__(1301);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ColumnMappingAddEditModalPageModule = /** @class */ (function () {
    function ColumnMappingAddEditModalPageModule() {
    }
    ColumnMappingAddEditModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__column_mapping_add_edit_modal__["a" /* ColumnMappingAddEditModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__column_mapping_add_edit_modal__["a" /* ColumnMappingAddEditModalPage */]),
            ],
        })
    ], ColumnMappingAddEditModalPageModule);
    return ColumnMappingAddEditModalPageModule;
}());

//# sourceMappingURL=column-mapping-add-edit-modal.module.js.map

/***/ }),

/***/ 929:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColumnMappingViewModel; });
var ColumnMappingViewModel = /** @class */ (function () {
    function ColumnMappingViewModel() {
    }
    return ColumnMappingViewModel;
}());

//# sourceMappingURL=ColumnMappingViewModel.js.map

/***/ })

});
//# sourceMappingURL=314.js.map