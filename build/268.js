webpackJsonp([268],{

/***/ 1023:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileExportBlobTableServicesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Model_String__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_services__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Model_Response_FileExportBlobTableListResponse__ = __webpack_require__(1115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Model_Response_FileExportBlobTableResponse__ = __webpack_require__(1116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Model_Response_StringResponse__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Model_Response_NumberResponse__ = __webpack_require__(128);
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
  Generated class for the FileExportBlobTableServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var FileExportBlobTableServicesProvider = /** @class */ (function () {
    function FileExportBlobTableServicesProvider(Services) {
        this.Services = Services;
        this.ctl = "FileExportBlobTable";
        console.log("Hello FileExportBlobTableServiceProvider Provider");
    }
    FileExportBlobTableServicesProvider.prototype.GetListsByAsync = function (PageSize, PageNumber, keyword, exec_file_seq, order_type) {
        var _this = this;
        var sub_url;
        sub_url = "FileExportBlobTable?PageSize={1}&PageNumber={2}&keyword={3}&exec_file_seq={4}&order_type={5}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, PageSize, PageNumber, keyword, exec_file_seq, order_type);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            _this.FileExportBlobTables = new __WEBPACK_IMPORTED_MODULE_3__Model_Response_FileExportBlobTableListResponse__["a" /* FileExportBlobTableListResponse */]({
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
            return _this.FileExportBlobTables;
        });
    };
    FileExportBlobTableServicesProvider.prototype.PostPutAsync = function (FileExportBlobTableViewModel, mode) {
        var _this = this;
        var sub_url;
        if (mode === "POST")
            sub_url = "FileExportBlobTable";
        else
            sub_url = "FileExportBlobTable?exec_file_seq={1}&schemaname={2}&tablename={3}&db_conn_id={4}&parameter_column_group={5}&src_export_type_key={6}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, FileExportBlobTableViewModel.exec_file_seq, FileExportBlobTableViewModel.schemaname, FileExportBlobTableViewModel.tablename, FileExportBlobTableViewModel.db_conn_id, FileExportBlobTableViewModel.parameter_column_group, "008|BLOB");
        return this.Services.PostPutAsync(sub_url, this.ctl, true, FileExportBlobTableViewModel, mode).map(function (item) {
            _this.FileExportBlobTable = new __WEBPACK_IMPORTED_MODULE_4__Model_Response_FileExportBlobTableResponse__["a" /* FileExportBlobTableResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.FileExportBlobTable;
        });
    };
    FileExportBlobTableServicesProvider.prototype.DeleteAsync = function (exec_file_seq, schemaname, tablename, db_conn_id, parameter_column_group, src_export_type_key) {
        var sub_url;
        sub_url = "FileExportBlobTable?exec_file_seq={1}&schemaname={2}&tablename={3}&db_conn_id={4}&parameter_column_group={5}&src_export_type_key={6}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, exec_file_seq, schemaname, tablename, db_conn_id, parameter_column_group, src_export_type_key);
        return this.Services.DeleteAsync(sub_url, this.ctl, true).map(function (item) {
            return new __WEBPACK_IMPORTED_MODULE_5__Model_Response_StringResponse__["a" /* StringResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: ""
            });
        });
    };
    FileExportBlobTableServicesProvider.prototype.GetMaxExecSeqAsync = function (exec_file_seq) {
        var sub_url;
        sub_url = "FileExportTable/get_max_exec_seq?exec_file_seq={1}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, exec_file_seq);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            return new __WEBPACK_IMPORTED_MODULE_6__Model_Response_NumberResponse__["a" /* NumberResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
        });
    };
    FileExportBlobTableServicesProvider.prototype.GetSqlAsync = function (exec_file_seq, schemaname, tablename, db_conn_id, parameter_column_group, src_export_type_key, method) {
        var sub_url;
        sub_url = "FileExportTable/get_{7}_sql?exec_file_seq={1}&schemaname={2}&tablename={3}&db_conn_id={4}&parameter_column_group={5}&src_export_type_key={6}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, exec_file_seq, schemaname, tablename, db_conn_id, parameter_column_group, src_export_type_key, method);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            return new __WEBPACK_IMPORTED_MODULE_5__Model_Response_StringResponse__["a" /* StringResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
        });
    };
    FileExportBlobTableServicesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_services__["a" /* ServicesProvider */]])
    ], FileExportBlobTableServicesProvider);
    return FileExportBlobTableServicesProvider;
}());

//# sourceMappingURL=file-export-blob-table-services.js.map

/***/ }),

/***/ 1115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileExportBlobTableListResponse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ViewModel_FileExportBlobTableViewModel__ = __webpack_require__(951);
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


var FileExportBlobTableListResponse = /** @class */ (function (_super) {
    __extends(FileExportBlobTableListResponse, _super);
    function FileExportBlobTableListResponse(obj) {
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
                var item = new __WEBPACK_IMPORTED_MODULE_0__ViewModel_FileExportBlobTableViewModel__["a" /* FileExportBlobTableViewModel */]();
                item.exec_file_seq = data.exec_file_seq;
                item.schemaname = data.schemaname;
                item.tablename = data.tablename;
                item.db_conn_id = data.db_conn_id;
                item.parameter_column_group = data.parameter_column_group;
                item.sql_statement = data.sql_statement;
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
                item.tablefullname = data.tablefullname;
                item.db_conn_string = data.db_conn_string;
                item.is_exported_sql = data.is_exported_sql;
                if (item.is_exported_sql === true) {
                    item.exported_sql_color = "danger";
                }
                else
                    item.exported_sql_color = "light";
                item.is_exported_header = data.is_exported_header;
                if (item.is_exported_header === true) {
                    item.exported_header_color = "danger";
                }
                else
                    item.exported_header_color = "light";
                item.src_export_type_key = data.src_export_type_key;
                item.src_export_type = data.src_export_type;
                _this.Model.push(item);
            }) || null;
        }
        return _this;
    }
    return FileExportBlobTableListResponse;
}(__WEBPACK_IMPORTED_MODULE_1__ListModelResponse__["a" /* ListModelResponse */]));

//# sourceMappingURL=FileExportBlobTableListResponse.js.map

/***/ }),

/***/ 1116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileExportBlobTableResponse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SingleModelResponse__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ViewModel_FileExportBlobTableViewModel__ = __webpack_require__(951);
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


var FileExportBlobTableResponse = /** @class */ (function (_super) {
    __extends(FileExportBlobTableResponse, _super);
    function FileExportBlobTableResponse(obj) {
        var _this = _super.call(this, obj) || this;
        _this.Message = obj.Message;
        _this.DidError = obj.DidError;
        _this.ErrorMessage = obj.ErrorMessage;
        if (_this.DidError === false) {
            _this.Model = new __WEBPACK_IMPORTED_MODULE_1__ViewModel_FileExportBlobTableViewModel__["a" /* FileExportBlobTableViewModel */]();
            _this.Model.exec_file_seq = obj.Model.exec_file_seq;
            _this.Model.schemaname = obj.Model.schemaname;
            _this.Model.tablename = obj.Model.tablename;
            _this.Model.db_conn_id = obj.Model.db_conn_id;
            _this.Model.parameter_column_group = obj.Model.parameter_column_group;
            _this.Model.sql_statement = obj.Model.sql_statement;
            _this.Model.is_active = obj.Model.is_active;
            _this.Model.exec_seq = obj.Model.exec_seq;
            _this.Model.creator = obj.Model.creator;
            _this.Model.create_time = obj.Model.create_time;
            _this.Model.modifier = obj.Model.modifier;
            _this.Model.last_update_time = obj.Model.last_update_time;
            _this.Model.is_active_desc = obj.Model.is_active_desc;
            switch (obj.Model.is_active) {
                case false: {
                    _this.Model.is_active_color = "danger";
                    break;
                }
                default:
                    _this.Model.is_active_color = "active";
            }
            _this.Model.tablefullname = obj.Model.tablefullname;
            _this.Model.db_conn_string = obj.Model.db_conn_string;
            _this.Model.tablefullname = obj.Model.tablefullname;
            _this.Model.db_conn_string = obj.Model.db_conn_string;
            _this.Model.src_export_type_key = obj.Model.src_export_type_key;
            _this.Model.src_export_type = obj.Model.src_export_type;
            _this.Model.is_exported_sql = obj.Model.is_expoted_sql;
            if (_this.Model.is_exported_sql === true) {
                _this.Model.exported_sql_color = "danger";
            }
            else
                _this.Model.exported_sql_color = "light";
            _this.Model.is_exported_header = obj.Model.is_exported_header;
            if (_this.Model.is_exported_header === true) {
                _this.Model.exported_header_color = "danger";
            }
            else
                _this.Model.exported_header_color = "light";
        }
        return _this;
    }
    return FileExportBlobTableResponse;
}(__WEBPACK_IMPORTED_MODULE_0__SingleModelResponse__["a" /* SingleModelResponse */]));

//# sourceMappingURL=FileExportBlobTableResponse.js.map

/***/ }),

/***/ 1377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileExportBlobTableAddEditModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_file_export_blob_table_services_file_export_blob_table_services__ = __webpack_require__(1023);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_global_global__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Model_String__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Model_ViewModel_FileExportBlobTableViewModel__ = __webpack_require__(951);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_conn_services_conn_services__ = __webpack_require__(266);
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
 * Generated class for the FileExportBlobTableModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FileExportBlobTableAddEditModalPage = /** @class */ (function () {
    function FileExportBlobTableAddEditModalPage(navCtrl, navParams, viewCtrl, FileExportBlobTableServices, loadingCtrl, global, modalCtrl, ConnServices) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.FileExportBlobTableServices = FileExportBlobTableServices;
        this.loadingCtrl = loadingCtrl;
        this.global = global;
        this.modalCtrl = modalCtrl;
        this.ConnServices = ConnServices;
        this.func_no = 3;
        this.func_key = "014|" + this.func_no;
        this.min_exec_file_seq = 37000;
        this.max_exec_file_seq = this.min_exec_file_seq + 999;
        this.exec_file_seq = 0;
        this.sql_help = "\n  --sql\u81EA\u8A02\u8A9E\u6CD5\u4E2D\uFF0C\u7CFB\u7D71\u6703\u53D6\u524D\u5169\u500B\u6B04\u4F4D\u9032\u884C\u532F\u5165\uFF0C\u7B2C\u4E00\u6B04\u4F4D\u70BA\u6A94\u6848\u540D\u7A31\uFF0C\u7B2C\u4E8C\u6B04\u4F4D\u70BA\u4E8C\u9032\u4F4D\u8CC7\u6599(\u4F8B\u5982\uFF1Avarbinary(max)\u578B\u614B)\n  --\u4EE5\u4E0B\u70BA\u7BC4\u4F8Bsql \u8A9E\u6CD5\n  SELECT[filename] --\u6A94\u6848\u540D\u7A31\n      ,[binarydata] --\u4E8C\u9032\u4F4D\u8CC7\u6599\n  FROM [comm].[tb_file_content_log]\n  ";
        this.range_exec_file_seq = __WEBPACK_IMPORTED_MODULE_4__Model_String__["a" /* String */].Format("{0}-{1}", this.min_exec_file_seq, this.max_exec_file_seq);
        this.mode = navParams.data.mode;
        this.change_mode = navParams.data.change_mode;
        this.exec_file_seq = navParams.data.exec_file_seq;
        this.item = new __WEBPACK_IMPORTED_MODULE_5__Model_ViewModel_FileExportBlobTableViewModel__["a" /* FileExportBlobTableViewModel */]();
        this.item.exec_file_seq = navParams.data.item.exec_file_seq;
        this.item.is_active = navParams.data.item.is_active;
        this.item.exec_seq = navParams.data.item.exec_seq;
        this.item.parameter_column_group =
            navParams.data.item.parameter_column_group;
        this.item.creator = navParams.data.item.creator;
        this.item.create_time = navParams.data.item.create_time;
        this.item.modifier = navParams.data.item.modifier;
        this.item.last_update_time = navParams.data.item.last_update_time;
        this.item.schemaname = navParams.data.item.schemaname;
        this.item.tablename = navParams.data.item.tablename;
        this.item.tablefullname = navParams.data.item.tablefullname;
        this.item.db_conn_id = navParams.data.item.db_conn_id;
        this.item.db_conn_string = navParams.data.item.db_conn_string;
        this.item.parameter_column_group =
            navParams.data.item.parameter_column_group;
        this.item.sql_statement = navParams.data.item.sql_statement;
        if (this.change_mode === "n") {
            this.get_conn_string("localdb");
        }
        if (this.change_mode === "c") {
            this.get_max_exec_seq();
        }
        this.CanEditBatch = navParams.data.CanEditBatch;
        this.title = __WEBPACK_IMPORTED_MODULE_4__Model_String__["a" /* String */].Format("{0}", this.exec_file_seq);
    }
    FileExportBlobTableAddEditModalPage.prototype.Help = function () {
        var _this = this;
        this.global.createLoader();
        this.global.loading.present().then(function () {
            _this.global.showMessage("SQL語法說明", _this.sql_help);
        });
    };
    FileExportBlobTableAddEditModalPage.prototype.openNavParameterColumnPage = function (item) {
        var _this = this;
        this.global.createLoader("連線中...");
        this.global.loading.present().then(function () {
            _this.navCtrl.push("ParameterColumnPage", { item: item });
        });
        this.global.dismissLoading();
    };
    FileExportBlobTableAddEditModalPage.prototype.get_conn_string = function (remote_conn_id) {
        var _this = this;
        this.global.createLoader("取得連線字串中...");
        this.global.loading.present().then(function () {
            _this.ConnServices.GetConnAsync(remote_conn_id).subscribe(function (data) {
                if (data.DidError === true) {
                    _this.global.dismissLoading();
                    _this.global.showError(data.ErrorMessage);
                }
                else {
                    _this.item.db_conn_string =
                        data.Model.conn_string;
                    _this.global.dismissLoading();
                }
            }, function (err) {
                _this.global.dismissLoading();
                _this.global.showError("無法連上WebAPI伺服器-" + err.message);
            });
        });
    };
    FileExportBlobTableAddEditModalPage.prototype.SelectConn = function () {
        var _this = this;
        var modal = this.modalCtrl.create("ConnSelectModalPage", {
            select_remote_conn_id: this.item.db_conn_id,
            conn_type_key: "065|001"
        });
        modal.onDidDismiss(function (select_data) {
            if (select_data == null)
                return;
            _this.item.db_conn_id = select_data.remote_conn_id;
            _this.item.db_conn_string = select_data.conn_string;
        });
        modal.present();
    };
    FileExportBlobTableAddEditModalPage.prototype.SelectParameterGroup = function () {
        var _this = this;
        var modal = this.modalCtrl.create("ParameterGroupSelectModelPage", {
            select_parameter_column_group: this.item.parameter_column_group
        });
        modal.onDidDismiss(function (select_data) {
            if (select_data == null)
                return;
            _this.item.parameter_column_group = select_data.parameter_column_group;
        });
        modal.present();
    };
    FileExportBlobTableAddEditModalPage.prototype.SelectTable = function () {
        var _this = this;
        var modal = this.modalCtrl.create("TableExtSelectModalPage", {
            select_item: this.item.tablefullname
        });
        modal.onDidDismiss(function (select_data) {
            if (select_data == null)
                return;
            _this.item.schemaname = select_data.schemaname;
            _this.item.tablename = select_data.tablename;
            _this.item.tablefullname = select_data.tablefullname;
        });
        modal.present();
    };
    FileExportBlobTableAddEditModalPage.prototype.get_max_exec_seq = function () {
        var _this = this;
        this.global.createLoader("取得最大值中...");
        this.global.loading.present().then(function () {
            _this.FileExportBlobTableServices.GetMaxExecSeqAsync(_this.exec_file_seq).subscribe(function (data) {
                if (data.DidError === true) {
                    _this.global.dismissLoading();
                    _this.global.showError(data.ErrorMessage);
                }
                else {
                    _this.item.exec_seq = data.Model;
                    _this.global.dismissLoading();
                }
            }, function (err) {
                _this.global.dismissLoading();
                _this.global.showError("無法連上WebAPI伺服器-" + err.message);
            });
        });
    };
    FileExportBlobTableAddEditModalPage.prototype.Save = function () {
        this.viewCtrl.dismiss(this.item);
    };
    FileExportBlobTableAddEditModalPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    FileExportBlobTableAddEditModalPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad FileExportBlobTableModalPage");
    };
    FileExportBlobTableAddEditModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: "page-file-export-blob-table-add-edit-modal",template:/*ion-inline-start:"F:\ionic4\prod\src\pages\file-export-blob-table-add-edit-modal\file-export-blob-table-add-edit-modal.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form #Form="ngForm">\n\n\n\n    <ion-row>\n      <ion-col col-12 col-sm-4>\n        <ion-item>\n          <ion-label stacked>結構描述</ion-label>\n          <ion-input type="text"  [disabled]="CanEditBatch==false  || mode==\'PUT\'" name="schemaname" #schemaname="ngModel" [(ngModel)]="item.schemaname"\n             maxlength="30"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col col-12 col-sm-8>\n        <ion-item>\n          <ion-label stacked>資料表名稱</ion-label>\n          <ion-input type="text"  [disabled]="CanEditBatch==false || mode==\'PUT\'" name="tablename" #tablename="ngModel" [(ngModel)]="item.tablename"\n            required maxlength="50"></ion-input>\n          <button ion-button outline item-end icon-right *ngIf="CanEditBatch==true && mode==\'POST\'" (click)="SelectTable()">\n            <ion-icon name="arrow-dropdown"></ion-icon>\n          </button>\n        </ion-item>\n        <div *ngIf="tablename.errors && tablename.touched" class="error-message">\n          資料表名稱不能為空白\n        </div>\n\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-6>\n        <ion-item>\n          <ion-label stacked>執行順序</ion-label>\n          <ion-input type="number" [disabled]="CanEditBatch==false" name="exec_seq" #exec_seq="ngModel" [(ngModel)]="item.exec_seq"\n            required></ion-input>\n          <button ion-button outline item-end *ngIf="CanEditBatch==true" icon-right (click)="get_max_exec_seq()">\n            <ion-icon name="arrow-dropdown"></ion-icon>\n          </button>\n        </ion-item>\n        <div *ngIf="exec_seq.errors && exec_seq.touched" class="error-message">\n          執行順序不能為空白\n        </div>\n      </ion-col>\n      <ion-col col-6>\n        <ion-item>\n          <ion-label stacked>連線編號</ion-label>\n          <ion-input type="text" readonly=true [disabled]="CanEditBatch==false || mode==\'PUT\'" name="db_conn_id" #db_conn_id="ngModel" [(ngModel)]="item.db_conn_id"\n            required maxlength="20"></ion-input>\n\n          <button ion-button outline item-end *ngIf="CanEditBatch==true && mode==\'POST\'" icon-right (click)="SelectConn()">\n            <ion-icon name="arrow-dropdown"></ion-icon>\n          </button>\n        </ion-item>\n\n        <div *ngIf="db_conn_id.errors && db_conn_id.touched " class="error-message">\n          連線編號不能為空白\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-12>\n        <ion-item>\n          <ion-label stacked>連線字串</ion-label>\n          <ion-textarea rows=4 [disabled]=true name="db_conn_string" #db_conn_string="ngModel" [(ngModel)]="item.db_conn_string" required></ion-textarea>\n\n        </ion-item>\n\n      </ion-col>\n\n    </ion-row>\n    <ion-row>\n      <ion-col col-12 col-sm-4>\n        <ion-item>\n          <ion-label stacked>參數群組</ion-label>\n          <ion-input type="text" readonly=true [disabled]="CanEditBatch==false || mode==\'PUT\'" name="parameter_column_group" #parameter_column_group="ngModel"\n            [(ngModel)]="item.parameter_column_group" required maxlength="3"></ion-input>\n\n          <button ion-button outline item-end *ngIf="CanEditBatch==true && mode==\'POST\'" icon-right (click)="SelectParameterGroup()">\n            <ion-icon name="arrow-dropdown"></ion-icon>\n          </button>\n        </ion-item>\n\n        <div *ngIf="parameter_column_group.errors && parameter_column_group.touched " class="error-message">\n          參數群組不能為空白\n        </div>\n      </ion-col>\n\n      <ion-col>\n        <ion-item>\n          <ion-label stacked>啟用</ion-label>\n          <ion-checkbox [disabled]="CanEditBatch==false" name="is_active" #is_active="ngModel" [(ngModel)]="item.is_active"></ion-checkbox>\n        </ion-item>\n      </ion-col>\n\n\n    </ion-row>\n\n\n\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label stacked>Sql Statement</ion-label>\n          <ion-textarea [disabled]="CanEditBatch==false" rows=10 name="sql_statement" #sql_statement="ngModel" [(ngModel)]="item.sql_statement"\n            required></ion-textarea>\n        </ion-item>\n        <div *ngIf="sql_statement.errors && sql_statement.touched " class="error-message">\n          Sql Statement不能為空白\n        </div>\n      </ion-col>\n    </ion-row>\n  </form>\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-row>\n      <ion-col>\n        <div [ngClass]="[\'command\']">\n          <button small title="取消" ion-button color="dark" icon-left (click)="close()">\n            <ion-icon name="backspace"></ion-icon>\n          </button>\n          <button small title="確認" [disabled]="CanEditBatch==false" ion-button color="dark" [disabled]="!Form.form.valid" icon-left\n            (click)="Save()">\n            <ion-icon name="checkmark-circle"></ion-icon>\n          </button>\n          <button small title="SQL語法說明" [disabled]="CanEditBatch==false" ion-button color="dark" icon-left (click)="Help()">\n            <ion-icon name="help"></ion-icon>\n          </button>\n          <button small title="參數群組" ion-button color="dark" icon-left (click)="openNavParameterColumnPage(item)">\n            <ion-icon name="outlet"></ion-icon>\n          </button>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"F:\ionic4\prod\src\pages\file-export-blob-table-add-edit-modal\file-export-blob-table-add-edit-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_0__providers_file_export_blob_table_services_file_export_blob_table_services__["a" /* FileExportBlobTableServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1__components_global_global__["a" /* GlobalComponent */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_conn_services_conn_services__["a" /* ConnServicesProvider */]])
    ], FileExportBlobTableAddEditModalPage);
    return FileExportBlobTableAddEditModalPage;
}());

//# sourceMappingURL=file-export-blob-table-add-edit-modal.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileExportBlobTableAddEditModalPageModule", function() { return FileExportBlobTableAddEditModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__file_export_blob_table_add_edit_modal__ = __webpack_require__(1377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_file_export_blob_table_services_file_export_blob_table_services__ = __webpack_require__(1023);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FileExportBlobTableAddEditModalPageModule = /** @class */ (function () {
    function FileExportBlobTableAddEditModalPageModule() {
    }
    FileExportBlobTableAddEditModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__file_export_blob_table_add_edit_modal__["a" /* FileExportBlobTableAddEditModalPage */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_file_export_blob_table_services_file_export_blob_table_services__["a" /* FileExportBlobTableServicesProvider */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__file_export_blob_table_add_edit_modal__["a" /* FileExportBlobTableAddEditModalPage */]),
            ],
        })
    ], FileExportBlobTableAddEditModalPageModule);
    return FileExportBlobTableAddEditModalPageModule;
}());

//# sourceMappingURL=file-export-blob-table-add-edit-modal.module.js.map

/***/ }),

/***/ 951:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileExportBlobTableViewModel; });
var FileExportBlobTableViewModel = /** @class */ (function () {
    function FileExportBlobTableViewModel() {
    }
    return FileExportBlobTableViewModel;
}());

//# sourceMappingURL=FileExportBlobTableViewModel.js.map

/***/ })

});
//# sourceMappingURL=268.js.map