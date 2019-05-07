webpackJsonp([288],{

/***/ 1073:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchDayTimeViewModel; });
var SchDayTimeViewModel = /** @class */ (function () {
    function SchDayTimeViewModel() {
    }
    return SchDayTimeViewModel;
}());

//# sourceMappingURL=SchDayTimeViewModel.js.map

/***/ }),

/***/ 1613:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchDayTimeAddEditModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Model_ViewModel_SchDayTimeViewModel__ = __webpack_require__(1073);
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
 * Generated class for the SchDayTimeModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SchDayTimeAddEditModalPage = /** @class */ (function () {
    function SchDayTimeAddEditModalPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.item = new __WEBPACK_IMPORTED_MODULE_2__Model_ViewModel_SchDayTimeViewModel__["a" /* SchDayTimeViewModel */]();
        this.item.sch_no = navParams.data.item.sch_no;
        this.item.sch_name = navParams.data.item.sch_name;
        this.item.freq_type = navParams.data.item.freq_type;
        this.item.freq_subday_type = navParams.data.item.freq_subday_type;
        this.item.freq_subday_interval = navParams.data.item.freq_subday_interval;
        this.item.active_end_time = navParams.data.item.active_end_time;
        this.item.freq_interval = navParams.data.item.freq_interval;
        this.item.active_start_date = navParams.data.item.active_start_date;
        this.item.active_end_date = navParams.data.item.active_end_date;
        this.item.active_start_time = navParams.data.item.active_start_time;
        this.item.is_active = navParams.data.item.is_active;
        this.item.creator = navParams.data.item.creator;
        this.item.create_time = navParams.data.item.create_time;
        this.item.modifier = navParams.data.item.modifier;
        this.item.last_update_time = navParams.data.item.last_update_time;
        this.mode = navParams.data.mode;
        this.CanEditSch = navParams.data.CanEditSch;
        if (this.mode === "POST")
            this.title = "新增";
        else
            this.title = "更新";
    }
    SchDayTimeAddEditModalPage.prototype.Save = function () {
        this.viewCtrl.dismiss(this.item);
    };
    SchDayTimeAddEditModalPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    SchDayTimeAddEditModalPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad SchDayTimeModalPage");
    };
    SchDayTimeAddEditModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-sch-day-time-add-edit-modal",template:/*ion-inline-start:"F:\ionic4\prod\src\pages\sch-day-time-add-edit-modal\sch-day-time-add-edit-modal.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form #Form="ngForm">\n\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label>排程名稱</ion-label>\n          <ion-input type="text"  name="sch_name" [disabled]="CanEditSch==false" #sch_name="ngModel" [(ngModel)]="item.sch_name" required></ion-input>\n        </ion-item>\n        <div *ngIf="sch_name.errors && sch_name.touched" class="error-message">\n          排程名稱不能為空白\n        </div>\n      </ion-col>\n\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label>週期別</ion-label>\n          <ion-select [disabled]="CanEditSch==false" name="freq_type" [(ngModel)]="item.freq_type">\n            <ion-option value=4>每日</ion-option>\n            <ion-option value=64>工作日</ion-option>\n            <ion-option value=128>例假日</ion-option>\n            <ion-option value=256>工作隔日</ion-option>\n            <ion-option value=512>例假隔日</ion-option>\n          </ion-select>\n\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item>\n          <ion-label>啟用</ion-label>\n          <ion-checkbox name="is_active" [disabled]="CanEditSch==false" [(ngModel)]="item.is_active"></ion-checkbox>\n        </ion-item>\n\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col  col-sx-12   *ngIf="item.freq_type==4">\n        <ion-item>\n          <ion-label item-start>每隔</ion-label>\n          <ion-input item-start [disabled]="CanEditSch==false" type="number" name="freq_interval" #freq_interval="ngModel" [(ngModel)]="item.freq_interval" required></ion-input>\n          <ion-label >天</ion-label>\n        </ion-item>\n        <div *ngIf="freq_interval.errors && freq_interval.touched" class="error-message">\n          每隔天數不能為空白\n        </div>\n      </ion-col>\n\n    </ion-row>\n    <ion-row>\n        <ion-col col-12 col-sm-12 *ngIf="item.freq_subday_type>1">\n          <ion-item>\n            <ion-label item-start>每隔</ion-label>\n            <ion-input  item-start type="number" [disabled]="CanEditSch==false" name="freq_subday_interval" #freq_subday_interval="ngModel" [(ngModel)]="item.freq_subday_interval"\n              required></ion-input>\n              <ion-select item-start name="freq_subday_type" [disabled]="CanEditSch==false" [(ngModel)]="item.freq_subday_type">\n                  <ion-option value=1>指定時間</ion-option>\n                  <ion-option value=2>秒</ion-option>\n                  <ion-option value=4>分</ion-option>\n                  <ion-option value=8>小時</ion-option>\n                </ion-select>\n          </ion-item>\n          <div *ngIf="freq_subday_interval.errors && freq_subday_interval.touched" class="error-message">\n            每隔頻率值不能為空白\n          </div>\n        </ion-col>\n        <ion-col col-12 col-sm-12 *ngIf="item.freq_subday_type==1">\n            <ion-item>\n                <ion-select name="freq_subday_type" [disabled]="CanEditSch==false" [(ngModel)]="item.freq_subday_type">\n                    <ion-option value=1>指定時間</ion-option>\n                    <ion-option value=2>秒</ion-option>\n                    <ion-option value=4>分</ion-option>\n                    <ion-option value=8>小時</ion-option>\n                  </ion-select>\n            </ion-item>\n\n          </ion-col>\n\n      </ion-row>\n    <ion-row>\n      <ion-col col-12 col-sm-6 col-md-6>\n        <ion-item>\n\n          <ion-label>開始日期</ion-label>\n          <ion-datetime [disabled]="CanEditSch==false" name="active_start_date" displayFormat="YYYY-MM-DD" [(ngModel)]="item.active_start_date"></ion-datetime>\n        </ion-item>\n      </ion-col>\n      <ion-col col-12 col-sm-6 col-md-6>\n        <ion-item>\n          <ion-label>截止日期</ion-label>\n          <ion-datetime [disabled]="CanEditSch==false" name="active_end_date" max="2100" displayFormat="YYYY-MM-DD" [(ngModel)]="item.active_end_date"></ion-datetime>\n\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col *ngIf="item.freq_subday_type!=2" >\n        <ion-item>\n          <ion-label>開始時間</ion-label>\n          <ion-datetime [disabled]="CanEditSch==false" name="active_start_time" #active_start_time="ngModel" pickerFormat="HH:mm" displayFormat="HH:mm" [(ngModel)]="item.active_start_time"></ion-datetime>\n\n        </ion-item>\n\n      </ion-col>\n      <ion-col *ngIf="item.freq_subday_type==2" >\n        <ion-item>\n          <ion-label>開始時間</ion-label>\n          <ion-datetime [disabled]="CanEditSch==false" name="active_start_time" #active_start_time="ngModel" pickerFormat="HH:mm" displayFormat="HH:mm:ss" [(ngModel)]="item.active_start_time"></ion-datetime>\n\n        </ion-item>\n\n      </ion-col>\n      <ion-col *ngIf="item.freq_subday_type!=2 && item.freq_subday_type>1">\n        <ion-item>\n          <ion-label>截止時間</ion-label>\n          <ion-datetime [disabled]="CanEditSch==false" name="active_end_time" #active_start_time="ngModel" displayFormat="HH:mm" [(ngModel)]="item.active_end_time"></ion-datetime>\n\n        </ion-item>\n\n      </ion-col>\n       <ion-col *ngIf="item.freq_subday_type==2">\n        <ion-item>\n          <ion-label>截止時間</ion-label>\n          <ion-datetime [disabled]="CanEditSch==false" name="active_end_time" #active_start_time="ngModel" displayFormat="HH:mm:ss" [(ngModel)]="item.active_end_time"></ion-datetime>\n\n        </ion-item>\n\n      </ion-col>\n\n    </ion-row>\n  </form>\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-row>\n      <ion-col>\n        <div [ngClass]="[\'command\']">\n          <button small title="取消" ion-button color="dark" icon-left (click)="close()">\n            <ion-icon name="backspace"></ion-icon>\n          </button>\n          <button [disabled]="CanEditSch==false" small title="確認" ion-button color="dark" [disabled]="!Form.form.valid" icon-left (click)="Save()">\n            <ion-icon name="checkmark-circle"></ion-icon>\n          </button>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"F:\ionic4\prod\src\pages\sch-day-time-add-edit-modal\sch-day-time-add-edit-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
    ], SchDayTimeAddEditModalPage);
    return SchDayTimeAddEditModalPage;
}());

//# sourceMappingURL=sch-day-time-add-edit-modal.js.map

/***/ }),

/***/ 710:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchDayTimeAddEditModalPageModule", function() { return SchDayTimeAddEditModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sch_day_time_add_edit_modal__ = __webpack_require__(1613);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SchDayTimeAddEditModalPageModule = /** @class */ (function () {
    function SchDayTimeAddEditModalPageModule() {
    }
    SchDayTimeAddEditModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sch_day_time_add_edit_modal__["a" /* SchDayTimeAddEditModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sch_day_time_add_edit_modal__["a" /* SchDayTimeAddEditModalPage */]),
            ],
        })
    ], SchDayTimeAddEditModalPageModule);
    return SchDayTimeAddEditModalPageModule;
}());

//# sourceMappingURL=sch-day-time-add-edit-modal.module.js.map

/***/ })

});
//# sourceMappingURL=288.js.map