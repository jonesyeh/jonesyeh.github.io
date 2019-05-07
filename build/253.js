webpackJsonp([253],{

/***/ 1086:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileHttpJson2CsvServicesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Model_String__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_services__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Model_Response_FileHttpJson2CsvListResponse__ = __webpack_require__(1148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Model_Response_FileHttpJson2CsvResponse__ = __webpack_require__(1149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Model_Response_StringResponse__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the FileHttpJson2CsvServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var FileHttpJson2CsvServicesProvider = /** @class */ (function () {
    function FileHttpJson2CsvServicesProvider(Services) {
        this.Services = Services;
        this.ctl = "FileHttpJson2Csv";
        console.log("Hello FileHttpJson2CsvServiceProvider Provider");
    }
    FileHttpJson2CsvServicesProvider.prototype.GetListsByAsync = function (PageSize, PageNumber, keyword, exec_file_seq, order_type) {
        var _this = this;
        var sub_url;
        sub_url = "FileHttpJson2Csv?PageSize={1}&PageNumber={2}&keyword={3}&exec_file_seq={4}&order_type={5}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, PageSize, PageNumber, keyword, exec_file_seq, order_type);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            _this.FileHttpJson2Csvs = new __WEBPACK_IMPORTED_MODULE_3__Model_Response_FileHttpJson2CsvListResponse__["a" /* FileHttpJson2CsvListResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                PageSize: item.PageSize,
                PageNumber: item.PageNumber,
                TotalRows: item.TotalRows,
                PageRows: item.PageRows,
                TotalPages: item.TotalPages,
                Model: item.Model
            });
            return _this.FileHttpJson2Csvs;
        });
    };
    FileHttpJson2CsvServicesProvider.prototype.PostPutAsync = function (FileHttpJson2CsvViewModel, mode) {
        var _this = this;
        var sub_url;
        if (mode === "POST")
            sub_url = "FileHttpJson2Csv";
        else
            sub_url = "FileHttpJson2Csv/{1}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, FileHttpJson2CsvViewModel.export_seq);
        return this.Services.PostPutAsync(sub_url, this.ctl, true, FileHttpJson2CsvViewModel, mode).map(function (item) {
            _this.FileHttpJson2Csv = new __WEBPACK_IMPORTED_MODULE_4__Model_Response_FileHttpJson2CsvResponse__["a" /* FileHttpJson2CsvResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.FileHttpJson2Csv;
        });
    };
    FileHttpJson2CsvServicesProvider.prototype.DeleteAsync = function (export_seq) {
        var sub_url;
        sub_url = "FileHttpJson2Csv/{1}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, export_seq);
        return this.Services.DeleteAsync(sub_url, this.ctl, true).map(function (item) {
            return new __WEBPACK_IMPORTED_MODULE_5__Model_Response_StringResponse__["a" /* StringResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: ""
            });
        });
    };
    FileHttpJson2CsvServicesProvider.prototype.GetSqlAsync = function (export_seq, method) {
        var sub_url;
        sub_url = "FileHttpJson2Csv/get_{2}_sql/{1}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, export_seq, method);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            return new __WEBPACK_IMPORTED_MODULE_5__Model_Response_StringResponse__["a" /* StringResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
        });
    };
    FileHttpJson2CsvServicesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_services__["a" /* ServicesProvider */]])
    ], FileHttpJson2CsvServicesProvider);
    return FileHttpJson2CsvServicesProvider;
}());

//# sourceMappingURL=file-http-json2-csv-services.js.map

/***/ }),

/***/ 1148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileHttpJson2CsvListResponse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ViewModel_FileHttpJson2CsvViewModel__ = __webpack_require__(967);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ListModelResponse__ = __webpack_require__(5);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var FileHttpJson2CsvListResponse = /** @class */ (function (_super) {
    __extends(FileHttpJson2CsvListResponse, _super);
    function FileHttpJson2CsvListResponse(obj) {
        var _this = _super.call(this, obj) || this;
        _this.Model = [];
        _this.Message = obj.Messag;
        _this.DidError = obj.DidError;
        _this.ErrorMessage = (obj && obj.ErrorMessage) || null;
        _this.PageNumber = obj.PageNumber;
        _this.PageSize = obj.PageSize;
        _this.PageRows = obj.PageRows;
        _this.TotalPages = obj.TotalPages;
        _this.TotalRows = obj.TotalRows;
        if (_this.DidError === false) {
            obj.Model.forEach(function (data) {
                var item = new __WEBPACK_IMPORTED_MODULE_0__ViewModel_FileHttpJson2CsvViewModel__["a" /* FileHttpJson2CsvViewModel */]();
                item.export_seq = data.export_seq;
                item.exec_file_seq = data.exec_file_seq;
                item.function_name = data.function_name;
                item.function_parameter = data.function_parameter;
                item.remote_conn_id = data.remote_conn_id;
                item.parameter_column_group = data.parameter_column_group;
                item.filename = data.filename;
                item.export_mode_key = data.export_mode_key;
                item.header_flag = data.header_flag;
                item.is_active = data.is_active;
                item.exec_seq = data.exec_seq;
                item.creator = data.creator;
                item.create_time = data.create_time;
                item.modifier = data.modifier;
                item.last_update_time = data.last_update_time;
                item.is_active_desc = data.is_active_desc;
                switch (data.is_active) {
                    case false: {
                        item.is_active_color = "danger";
                        item.is_active_color_right = "danger-right";
                        break;
                    }
                    default: {
                        item.is_active_color = "active";
                        item.is_active_color_right = "active-right";
                    }
                }
                item.conn_string = data.conn_string;
                item.export_mode = data.export_mode;
                item.url = data.url;
                item.file_format_key = data.file_format_key;
                item.file_format = data.file_format;
                item.field_terminator = data.field_terminator;
                item.row_terminator = data.row_terminator;
                item.del_empty_flag = data.del_empty_flag;
                item.last_data_type_key = (data && data.last_data_type_key) || null;
                item.last_data_column_name =
                    (data && data.last_data_column_name) || null;
                item.last_data_type = (data && data.last_data_type) || null;
                _this.Model.push(item);
            }) || null;
        }
        return _this;
    }
    return FileHttpJson2CsvListResponse;
}(__WEBPACK_IMPORTED_MODULE_1__ListModelResponse__["a" /* ListModelResponse */]));

//# sourceMappingURL=FileHttpJson2CsvListResponse.js.map

/***/ }),

/***/ 1149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileHttpJson2CsvResponse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SingleModelResponse__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ViewModel_FileHttpJson2CsvViewModel__ = __webpack_require__(967);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var FileHttpJson2CsvResponse = /** @class */ (function (_super) {
    __extends(FileHttpJson2CsvResponse, _super);
    function FileHttpJson2CsvResponse(obj) {
        var _this = _super.call(this, obj) || this;
        _this.Message = obj.Message;
        _this.DidError = obj.DidError;
        _this.ErrorMessage = obj.ErrorMessage;
        if (_this.DidError === false) {
            _this.Model = new __WEBPACK_IMPORTED_MODULE_1__ViewModel_FileHttpJson2CsvViewModel__["a" /* FileHttpJson2CsvViewModel */]();
            _this.Model.export_seq = obj.Model.export_seq;
            _this.Model.exec_file_seq = obj.Model.exec_file_seq;
            _this.Model.function_name = obj.Model.function_name;
            _this.Model.function_parameter = obj.Model.function_parameter;
            _this.Model.remote_conn_id = obj.Model.remote_conn_id;
            _this.Model.parameter_column_group = obj.Model.parameter_column_group;
            _this.Model.filename = obj.Model.filename;
            _this.Model.export_mode_key = obj.Model.export_mode_key;
            _this.Model.header_flag = obj.Model.header_flag;
            _this.Model.is_active = obj.Model.is_active;
            _this.Model.exec_seq = obj.Model.exec_seq;
            _this.Model.creator = obj.Model.creator;
            _this.Model.create_time = obj.Model.create_time;
            _this.Model.modifier = obj.Model.modifier;
            _this.Model.last_update_time = obj.Model.last_update_time;
            switch (obj.Model.is_active) {
                case false: {
                    _this.Model.is_active_color = "danger";
                    break;
                }
                default:
                    _this.Model.is_active_color = "active";
            }
            _this.Model.conn_string = obj.Model.conn_string;
            _this.Model.export_mode = obj.Model.export_mode;
            _this.Model.url = obj.Model.url;
            _this.Model.del_empty_flag = obj.Model.del_empty_flag;
            _this.Model.file_format_key = (obj && obj.Model.file_format_key) || null;
            _this.Model.file_format = (obj && obj.Model.file_format) || null;
            _this.Model.field_terminator = (obj && obj.Model.field_terminator) || null;
            _this.Model.row_terminator = (obj && obj.Model.row_terminator) || null;
            _this.Model.last_data_type_key = obj && obj.Model.last_data_type_key || null;
            _this.Model.last_data_column_name = obj && obj.Model.last_data_column_name || null;
            _this.Model.last_data_type = obj && obj.Model.last_data_type || null;
        }
        return _this;
    }
    return FileHttpJson2CsvResponse;
}(__WEBPACK_IMPORTED_MODULE_0__SingleModelResponse__["a" /* SingleModelResponse */]));

//# sourceMappingURL=FileHttpJson2CsvResponse.js.map

/***/ }),

/***/ 1424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileHttpJson2CsvAddEditModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_global_global__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Model_String__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Model_ViewModel_FileHttpJson2CsvViewModel__ = __webpack_require__(967);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_conn_services_conn_services__ = __webpack_require__(266);
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
 * Generated class for the FileHttpJson2CsvModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FileHttpJson2CsvAddEditModalPage = /** @class */ (function () {
    function FileHttpJson2CsvAddEditModalPage(navCtrl, navParams, viewCtrl, loadingCtrl, global, modalCtrl, ConnServices) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.global = global;
        this.modalCtrl = modalCtrl;
        this.ConnServices = ConnServices;
        this.exec_file_seq = 0;
        this.help = "";
        this.mode = navParams.data.mode;
        this.change_mode = navParams.data.change_mode;
        this.item = new __WEBPACK_IMPORTED_MODULE_4__Model_ViewModel_FileHttpJson2CsvViewModel__["a" /* FileHttpJson2CsvViewModel */]();
        this.exec_file_seq = navParams.data.item.exec_file_seq;
        this.item.exec_file_seq = navParams.data.item.exec_file_seq;
        this.item.export_seq = navParams.data.item.export_seq;
        this.item.is_active = navParams.data.item.is_active;
        this.item.exec_seq = navParams.data.item.exec_seq;
        this.item.parameter_column_group =
            navParams.data.item.parameter_column_group;
        this.item.creator = navParams.data.item.creator;
        this.item.create_time = navParams.data.item.create_time;
        this.item.modifier = navParams.data.item.modifier;
        this.item.last_update_time = navParams.data.item.last_update_time;
        this.item.function_name = navParams.data.item.function_name;
        this.item.function_parameter = navParams.data.item.function_parameter;
        this.item.remote_conn_id = navParams.data.item.remote_conn_id;
        this.item.conn_string = navParams.data.item.conn_string;
        this.item.parameter_column_group =
            navParams.data.item.parameter_column_group;
        this.item.filename = navParams.data.item.filename;
        this.item.export_mode_key = navParams.data.item.export_mode_key;
        this.item.export_mode = navParams.data.item.export_mode;
        this.item.url = navParams.data.item.url;
        this.item.header_flag = navParams.data.item.header_flag;
        this.item.file_format_key = navParams.data.item.file_format_key;
        this.item.file_format = navParams.data.item.file_format;
        this.item.field_terminator = navParams.data.item.field_terminator;
        this.item.row_terminator = navParams.data.item.row_terminator;
        this.item.last_data_type_key = navParams.data.item.last_data_type_key;
        this.item.last_data_type = navParams.data.item.last_data_type;
        this.item.last_data_column_name = navParams.data.item.last_data_column_name;
        this.item.del_empty_flag = navParams.data.item.del_empty_flag;
        this.CanEditBatch = navParams.data.CanEditBatch;
        this.title = __WEBPACK_IMPORTED_MODULE_3__Model_String__["a" /* String */].Format("{0}", this.exec_file_seq);
    }
    FileHttpJson2CsvAddEditModalPage.prototype.get_conn_string = function (remote_conn_id) {
        var _this = this;
        this.global.createLoader("取得連線字串中...");
        this.global.loading.present().then(function () {
            _this.ConnServices.GetConnAsync(remote_conn_id).subscribe(function (data) {
                if (data.DidError === true) {
                    _this.global.dismissLoading();
                    _this.global.showError(data.ErrorMessage);
                }
                else {
                    _this.item.conn_string =
                        data.Model.conn_string;
                    _this.global.dismissLoading();
                }
            }, function (err) {
                _this.global.dismissLoading();
                _this.global.showError("無法連上WebAPI伺服器-" + err.message);
            });
        });
    };
    FileHttpJson2CsvAddEditModalPage.prototype.SelectExportMode = function () {
        var _this = this;
        var modal = this.modalCtrl.create("CodeSelectModalPage", {
            select_key: this.item.export_mode_key,
            code_type: "007"
        });
        modal.onDidDismiss(function (select_data) {
            if (select_data == null)
                return;
            _this.item.export_mode_key = select_data.code_key;
            _this.item.export_mode = select_data.code_desc;
        });
        modal.present();
    };
    FileHttpJson2CsvAddEditModalPage.prototype.SelectLastDataType = function () {
        var _this = this;
        var modal = this.modalCtrl.create("CodeSelectModalPage", {
            select_key: this.item.last_data_type_key,
            code_type: "009"
        });
        modal.onDidDismiss(function (select_data) {
            if (select_data == null)
                return;
            _this.item.last_data_type_key = select_data.code_key;
            _this.item.last_data_type = select_data.code_desc;
        });
        modal.present();
    };
    FileHttpJson2CsvAddEditModalPage.prototype.SelectConn = function () {
        var _this = this;
        var modal = this.modalCtrl.create("ConnSelectModalPage", {
            select_remote_conn_id: this.item.remote_conn_id,
            conn_type_key: "065|004"
        });
        modal.onDidDismiss(function (select_data) {
            if (select_data == null)
                return;
            _this.item.remote_conn_id = select_data.remote_conn_id;
            _this.item.conn_string = select_data.conn_string;
            _this.change_url();
        });
        modal.present();
    };
    FileHttpJson2CsvAddEditModalPage.prototype.change_url = function () {
        this.item.url = this.item.conn_string + this.item.function_name + this.item.function_parameter;
    };
    FileHttpJson2CsvAddEditModalPage.prototype.SelectFileFormat = function () {
        var _this = this;
        var modal = this.modalCtrl.create("CodeSelectModalPage", {
            select_key: this.item.file_format_key,
            code_key: "011|C,011|CB,011|UTF16,011|UTF32,011|UTF7,011|UTF8,011|UTF8B,011|W,011|B,011|W,011|WB"
        });
        modal.onDidDismiss(function (select_data) {
            if (select_data == null)
                return;
            _this.item.file_format_key = select_data.code_key;
            _this.item.file_format = select_data.code_desc;
        });
        modal.present();
    };
    FileHttpJson2CsvAddEditModalPage.prototype.Save = function () {
        this.viewCtrl.dismiss(this.item);
    };
    FileHttpJson2CsvAddEditModalPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    FileHttpJson2CsvAddEditModalPage.prototype.openNavParameterColumnPage = function (item) {
        var _this = this;
        this.global.createLoader("連線中...");
        this.global.loading.present().then(function () {
            _this.navCtrl.push("ParameterColumnPage", { item: item });
        });
        this.global.dismissLoading();
    };
    FileHttpJson2CsvAddEditModalPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad FileHttpJson2CsvModalPage");
    };
    FileHttpJson2CsvAddEditModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: "page-file-http-json2-csv-add-edit-modal",template:/*ion-inline-start:"F:\ionic4\prod\src\pages\file-http-json2-csv-add-edit-modal\file-http-json2-csv-add-edit-modal.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form #Form="ngForm">\n\n\n    <ion-row>\n\n      <ion-col>\n        <ion-item>\n          <ion-label stacked>匯出序號</ion-label>\n          <ion-input type="number" [disabled]=true name="export_seq" #export_seq="ngModel" [(ngModel)]="item.export_seq" required></ion-input>\n        </ion-item>\n\n      </ion-col>\n      <ion-col>\n        <ion-item>\n          <ion-label stacked>啟用</ion-label>\n          <ion-checkbox [disabled]="CanEditBatch==false" name="is_active" #is_active="ngModel" [(ngModel)]="item.is_active"></ion-checkbox>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-12 col-sm-4>\n        <ion-item>\n          <ion-label stacked>匯出類型</ion-label>\n          <ion-input type="text" readonly=true [disabled]="CanEditBatch==false" name="export_mode_key" #export_mode_key="ngModel" [(ngModel)]="item.export_mode_key"\n            required></ion-input>\n\n          <button ion-button outline item-end *ngIf="CanEditBatch==true" icon-right (click)="SelectExportMode()">\n            <ion-icon name="arrow-dropdown"></ion-icon>\n          </button>\n        </ion-item>\n\n        <div *ngIf="export_mode_key.errors && export_mode_key.touched " class="error-message">\n          匯出類型不能為空白\n        </div>\n      </ion-col>\n      <ion-col col-12 col-sm-8>\n        <ion-item>\n          <ion-label stacked>匯出類型</ion-label>\n          <ion-input type="text" [disabled]=true name="export_mode" #export_mode="ngModel" [(ngModel)]="item.export_mode" required></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-12 col-sm-4>\n        <ion-item>\n          <ion-label stacked>參數群組</ion-label>\n          <ion-input type="text" readonly=true [disabled]=true name="parameter_column_group" #parameter_column_group="ngModel" [(ngModel)]="item.parameter_column_group"\n            required maxlength="3">\n          </ion-input>\n        </ion-item>\n      </ion-col>\n\n      <ion-col col-12 col-sm-8>\n        <ion-item>\n          <ion-label stacked>檔案名稱</ion-label>\n          <ion-input type="text" [disabled]="CanEditBatch==false" name="filename" #filename="ngModel" [(ngModel)]="item.filename" required\n            maxlength="50"></ion-input>\n        </ion-item>\n        <div *ngIf="filename.errors && filename.touched" class="error-message">\n          檔案名稱不能為空白\n        </div>\n      </ion-col>\n\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label stacked>產生header</ion-label>\n          <ion-checkbox [disabled]="CanEditBatch==false" name="header_flag" #header_flag="ngModel" [(ngModel)]="item.header_flag"></ion-checkbox>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item>\n          <ion-label stacked>刪除空檔</ion-label>\n          <ion-checkbox [disabled]="CanEditBatch==false" name="del_empty_flag" #del_empty_flag="ngModel" [(ngModel)]="item.del_empty_flag"></ion-checkbox>\n        </ion-item>\n\n      </ion-col>\n    </ion-row>\n\n\n    <ion-row>\n      <ion-col col-6>\n        <ion-item>\n          <ion-label stacked>欄位分隔符號</ion-label>\n          <ion-input type="text" title="f:表固定長度,\t:tab,\b:char(8),\0:char(0),f|:固定長度後加上|" maxlength="2" [disabled]="CanEditBatch==false"\n            name="field_terminator" #field_terminator="ngModel" [(ngModel)]="item.field_terminator" required></ion-input>\n        </ion-item>\n        <div *ngIf="field_terminator.errors && field_terminator.touched " class="error-message">\n          欄位分隔符號不能為空白\n        </div>\n      </ion-col>\n      <ion-col col-6>\n        <ion-item>\n          <ion-label stacked>列結尾符號</ion-label>\n          <ion-input type="text" maxlength="5" [disabled]="CanEditBatch==false" name="row_terminator" #row_terminator="ngModel" [(ngModel)]="item.row_terminator"\n            required></ion-input>\n        </ion-item>\n        <div *ngIf="row_terminator.errors && row_terminator.touched " class="error-message">\n          列結尾符號不能為空白\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-12 col-sm-4>\n        <ion-item>\n          <ion-label stacked>內文格式</ion-label>\n          <ion-input type="text" readonly=true maxlength=10 [disabled]="CanEditBatch==false " name="file_format_key" #file_format_key="ngModel" [(ngModel)]="item.file_format_key"\n            required></ion-input>\n\n          <button ion-button outline item-end *ngIf="CanEditBatch==true" icon-right (click)="SelectFileFormat()">\n            <ion-icon name="arrow-dropdown"></ion-icon>\n          </button>\n        </ion-item>\n\n        <div *ngIf="file_format_key.errors && file_format_key.touched " class="error-message">\n          內文格式不能為空白\n        </div>\n      </ion-col>\n      <ion-col col-12 col-sm-8>\n        <ion-item>\n          <ion-label stacked>內文格式</ion-label>\n          <ion-input type="text" [disabled]=true name="file_format" #file_format="ngModel" [(ngModel)]="item.file_format" required></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col>\n            <ion-item>\n              <ion-label stacked>執行順序</ion-label>\n              <ion-input type="number" [disabled]=true name="exec_seq" #exec_seq="ngModel" [(ngModel)]="item.exec_seq" required></ion-input>\n            </ion-item>\n          </ion-col>\n      <ion-col>\n        <ion-item>\n          <ion-label stacked>連線編號</ion-label>\n          <ion-input type="text" readonly=true [disabled]="CanEditBatch==false" name="remote_conn_id" #remote_conn_id="ngModel" [(ngModel)]="item.remote_conn_id"\n            required maxlength="20"></ion-input>\n\n          <button ion-button outline item-end *ngIf="CanEditBatch==true " icon-right (click)="SelectConn()">\n            <ion-icon name="arrow-dropdown"></ion-icon>\n          </button>\n        </ion-item>\n\n        <div *ngIf="remote_conn_id.errors && remote_conn_id.touched " class="error-message">\n          連線編號不能為空白\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-12>\n        <ion-item>\n          <ion-label stacked>功能別</ion-label>\n          <ion-input type="text" [disabled]="CanEditBatch==false " name="function_name" #function_name="ngModel" (change)="change_url()"\n            [(ngModel)]="item.function_name" maxlength="255"></ion-input>\n        </ion-item>\n      </ion-col>\n\n    </ion-row>\n    <ion-row>\n      <ion-col col-12>\n        <ion-item>\n          <ion-label stacked>功能參數</ion-label>\n          <ion-input type="text" [disabled]="CanEditBatch==false " name="function_parameter" (change)="change_url()" #function_parameter="ngModel" [(ngModel)]="item.function_parameter"\n            maxlength="255"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-12>\n        <ion-item>\n          <ion-label stacked>Url</ion-label>\n          <ion-textarea rows=4 [disabled]=true name="Url" #Url="ngModel" [(ngModel)]="item.url" required></ion-textarea>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-12 col-sm-4>\n        <ion-item>\n          <ion-label stacked>最後資料欄位類型</ion-label>\n          <ion-input type="text" readonly=true maxlength=10 [disabled]="CanEditBatch==false " name="last_data_type_key" #last_data_type_key="ngModel"\n            [(ngModel)]="item.last_data_type_key" required></ion-input>\n\n          <button ion-button outline item-end *ngIf="CanEditBatch==true" icon-right (click)="SelectLastDataType()">\n            <ion-icon name="arrow-dropdown"></ion-icon>\n          </button>\n        </ion-item>\n\n        <div *ngIf="last_data_type_key.errors && last_data_type_key.touched " class="error-message">\n          最後資料欄位類型不能為空白\n        </div>\n      </ion-col>\n      <ion-col col-12 col-sm-8>\n        <ion-item>\n          <ion-label stacked>最後資料欄位類型</ion-label>\n          <ion-input type="text" [disabled]=true name="last_data_type" #last_data_type="ngModel" [(ngModel)]="item.last_data_type"\n            required></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf="item.last_data_type_key!=\'009|ALL\' && item.last_data_type_key>\'\' ">\n      <ion-col>\n        <ion-item>\n          <ion-label stacked>最後資料欄位名稱</ion-label>\n          <ion-input type="text" maxlength="30" [disabled]="CanEditBatch==false" name="last_data_column_name" #last_data_column_name="ngModel"\n            [(ngModel)]="item.last_data_column_name"></ion-input>\n        </ion-item>\n\n      </ion-col>\n    </ion-row>\n  </form>\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-row>\n      <ion-col>\n        <div [ngClass]="[\'command\']">\n          <button small title="取消" ion-button color="dark" icon-left (click)="close()">\n            <ion-icon name="backspace"></ion-icon>\n          </button>\n          <button small title="確認" [disabled]="CanEditBatch==false" ion-button color="dark" [disabled]="!Form.form.valid" icon-left\n            (click)="Save()">\n            <ion-icon name="checkmark-circle"></ion-icon>\n          </button>\n\n          <button small title="參數群組" ion-button color="dark" icon-left (click)="openNavParameterColumnPage(item)">\n            <ion-icon name="outlet"></ion-icon>\n          </button>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"F:\ionic4\prod\src\pages\file-http-json2-csv-add-edit-modal\file-http-json2-csv-add-edit-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_0__components_global_global__["a" /* GlobalComponent */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_conn_services_conn_services__["a" /* ConnServicesProvider */]])
    ], FileHttpJson2CsvAddEditModalPage);
    return FileHttpJson2CsvAddEditModalPage;
}());

//# sourceMappingURL=file-http-json2-csv-add-edit-modal.js.map

/***/ }),

/***/ 560:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileHttpJson2CsvAddEditModalPageModule", function() { return FileHttpJson2CsvAddEditModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__file_http_json2_csv_add_edit_modal__ = __webpack_require__(1424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_file_http_json2_csv_services_file_http_json2_csv_services__ = __webpack_require__(1086);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FileHttpJson2CsvAddEditModalPageModule = /** @class */ (function () {
    function FileHttpJson2CsvAddEditModalPageModule() {
    }
    FileHttpJson2CsvAddEditModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__file_http_json2_csv_add_edit_modal__["a" /* FileHttpJson2CsvAddEditModalPage */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_file_http_json2_csv_services_file_http_json2_csv_services__["a" /* FileHttpJson2CsvServicesProvider */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__file_http_json2_csv_add_edit_modal__["a" /* FileHttpJson2CsvAddEditModalPage */]),
            ],
        })
    ], FileHttpJson2CsvAddEditModalPageModule);
    return FileHttpJson2CsvAddEditModalPageModule;
}());

//# sourceMappingURL=file-http-json2-csv-add-edit-modal.module.js.map

/***/ }),

/***/ 967:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileHttpJson2CsvViewModel; });
var FileHttpJson2CsvViewModel = /** @class */ (function () {
    function FileHttpJson2CsvViewModel() {
    }
    return FileHttpJson2CsvViewModel;
}());

//# sourceMappingURL=FileHttpJson2CsvViewModel.js.map

/***/ })

});
//# sourceMappingURL=253.js.map