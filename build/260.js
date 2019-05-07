webpackJsonp([260],{

/***/ 1030:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileExportTsqlTableServicesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Model_String__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_services__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Model_Response_FileExportTsqlTableListResponse__ = __webpack_require__(1129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Model_Response_FileExportTsqlTableResponse__ = __webpack_require__(1130);
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
  Generated class for the FileExportTsqlTableServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var FileExportTsqlTableServicesProvider = /** @class */ (function () {
    function FileExportTsqlTableServicesProvider(Services) {
        this.Services = Services;
        this.ctl = "FileExportTsqlTable";
        console.log("Hello FileExportTsqlTableServiceProvider Provider");
    }
    FileExportTsqlTableServicesProvider.prototype.GetListsByAsync = function (PageSize, PageNumber, keyword, exec_file_seq, order_type) {
        var _this = this;
        var sub_url;
        sub_url = "FileExportTsqlTable?PageSize={1}&PageNumber={2}&keyword={3}&exec_file_seq={4}&order_type={5}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, PageSize, PageNumber, keyword, exec_file_seq, order_type);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            _this.FileExportTsqlTables = new __WEBPACK_IMPORTED_MODULE_3__Model_Response_FileExportTsqlTableListResponse__["a" /* FileExportTsqlTableListResponse */]({
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
            return _this.FileExportTsqlTables;
        });
    };
    FileExportTsqlTableServicesProvider.prototype.PostPutAsync = function (FileExportTsqlTableViewModel, mode) {
        var _this = this;
        var sub_url;
        if (mode === "POST")
            sub_url = "FileExportTsqlTable";
        else
            sub_url = "FileExportTsqlTable?exec_file_seq={1}&schemaname={2}&tablename={3}&db_conn_id={4}&parameter_column_group={5}&src_export_type_key={6}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, FileExportTsqlTableViewModel.exec_file_seq, FileExportTsqlTableViewModel.schemaname, FileExportTsqlTableViewModel.tablename, FileExportTsqlTableViewModel.db_conn_id, FileExportTsqlTableViewModel.parameter_column_group, "008|TS");
        return this.Services.PostPutAsync(sub_url, this.ctl, true, FileExportTsqlTableViewModel, mode).map(function (item) {
            _this.FileExportTsqlTable = new __WEBPACK_IMPORTED_MODULE_4__Model_Response_FileExportTsqlTableResponse__["a" /* FileExportTsqlTableResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.FileExportTsqlTable;
        });
    };
    FileExportTsqlTableServicesProvider.prototype.DeleteAsync = function (exec_file_seq, schemaname, tablename, db_conn_id, parameter_column_group, src_export_type_key) {
        var sub_url;
        sub_url = "FileExportTsqlTable?exec_file_seq={1}&schemaname={2}&tablename={3}&db_conn_id={4}&parameter_column_group={5}&src_export_type_key={6}";
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
    FileExportTsqlTableServicesProvider.prototype.GetMaxExecSeqAsync = function (exec_file_seq) {
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
    FileExportTsqlTableServicesProvider.prototype.GetSqlAsync = function (exec_file_seq, schemaname, tablename, db_conn_id, parameter_column_group, src_export_type_key, method) {
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
    FileExportTsqlTableServicesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_services__["a" /* ServicesProvider */]])
    ], FileExportTsqlTableServicesProvider);
    return FileExportTsqlTableServicesProvider;
}());

//# sourceMappingURL=file-export-tsql-table-services.js.map

/***/ }),

/***/ 1129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileExportTsqlTableListResponse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ViewModel_FileExportTsqlTableViewModel__ = __webpack_require__(958);
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


var FileExportTsqlTableListResponse = /** @class */ (function (_super) {
    __extends(FileExportTsqlTableListResponse, _super);
    function FileExportTsqlTableListResponse(obj) {
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
                var item = new __WEBPACK_IMPORTED_MODULE_0__ViewModel_FileExportTsqlTableViewModel__["a" /* FileExportTsqlTableViewModel */]();
                item.exec_file_seq = data.exec_file_seq;
                item.schemaname = data.schemaname;
                item.tablename = data.tablename;
                item.db_conn_id = data.db_conn_id;
                item.parameter_column_group = data.parameter_column_group;
                item.filename = data.filename;
                item.export_mode_key = (data && data.export_mode_key) || null;
                item.sql_statement = data.sql_statement;
                item.file_format_key = (data && data.file_format_key) || null;
                item.field_terminator = (data && data.field_terminator) || null;
                item.row_terminator = (data && data.row_terminator) || null;
                item.is_active = data.is_active;
                item.exec_seq = data.exec_seq;
                item.last_data_type_key = (data && data.last_data_type_key) || null;
                item.last_data_column_name =
                    (data && data.last_data_column_name) || null;
                item.where_condition = (data && data.where_condition) || null;
                item.del_empty_file = data.del_empty_file;
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
                item.last_data_type = (data && data.last_data_type) || null;
                item.export_mode = (data && data.export_mode) || null;
                item.file_format = data.file_format;
                item.field_terminator = data.field_terminator;
                item.row_terminator = data.row_terminator;
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
    return FileExportTsqlTableListResponse;
}(__WEBPACK_IMPORTED_MODULE_1__ListModelResponse__["a" /* ListModelResponse */]));

//# sourceMappingURL=FileExportTsqlTableListResponse.js.map

/***/ }),

/***/ 1130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileExportTsqlTableResponse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SingleModelResponse__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ViewModel_FileExportTsqlTableViewModel__ = __webpack_require__(958);
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


var FileExportTsqlTableResponse = /** @class */ (function (_super) {
    __extends(FileExportTsqlTableResponse, _super);
    function FileExportTsqlTableResponse(obj) {
        var _this = _super.call(this, obj) || this;
        _this.Message = obj.Message;
        _this.DidError = obj.DidError;
        _this.ErrorMessage = obj.ErrorMessage;
        if (_this.DidError === false) {
            _this.Model = new __WEBPACK_IMPORTED_MODULE_1__ViewModel_FileExportTsqlTableViewModel__["a" /* FileExportTsqlTableViewModel */]();
            _this.Model.exec_file_seq = obj.Model.exec_file_seq;
            _this.Model.schemaname = obj.Model.schemaname;
            _this.Model.tablename = obj.Model.tablename;
            _this.Model.db_conn_id = obj.Model.db_conn_id;
            _this.Model.parameter_column_group = obj.Model.parameter_column_group;
            _this.Model.filename = obj.Model.filename;
            _this.Model.export_mode_key = obj && obj.Model.export_mode_key || null;
            _this.Model.sql_statement = obj.Model.sql_statement;
            _this.Model.file_format_key = obj && obj.Model.file_format_key || null;
            _this.Model.field_terminator = obj && obj.Model.field_terminator || null;
            _this.Model.row_terminator = obj && obj.Model.row_terminator || null;
            _this.Model.is_active = obj.Model.is_active;
            _this.Model.exec_seq = obj.Model.exec_seq;
            _this.Model.last_data_type_key = obj && obj.Model.last_data_type_key || null;
            _this.Model.last_data_column_name = obj && obj.Model.last_data_column_name || null;
            _this.Model.where_condition = obj && obj.Model.where_condition || null;
            _this.Model.del_empty_file = obj.Model.del_empty_file;
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
            _this.Model.last_data_type = obj && obj.Model.last_data_type || null;
            _this.Model.export_mode = obj && obj.Model.export_mode || null;
            _this.Model.tablefullname = obj.Model.tablefullname;
            _this.Model.db_conn_string = obj.Model.db_conn_string;
            _this.Model.file_format = (obj && obj.Model.file_format) || null;
            _this.Model.field_terminator = (obj && obj.Model.field_terminator) || null;
            _this.Model.row_terminator = (obj && obj.Model.row_terminator) || null;
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
    return FileExportTsqlTableResponse;
}(__WEBPACK_IMPORTED_MODULE_0__SingleModelResponse__["a" /* SingleModelResponse */]));

//# sourceMappingURL=FileExportTsqlTableResponse.js.map

/***/ }),

/***/ 1396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileExportTsqlTableAddEditModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_file_export_tsql_table_services_file_export_tsql_table_services__ = __webpack_require__(1030);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_global_global__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Model_String__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Model_ViewModel_FileExportTsqlTableViewModel__ = __webpack_require__(958);
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
 * Generated class for the FileExportTsqlTableModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FileExportTsqlTableAddEditModalPage = /** @class */ (function () {
    function FileExportTsqlTableAddEditModalPage(navCtrl, navParams, viewCtrl, FileExportTsqlTableServices, loadingCtrl, global, modalCtrl, ConnServices) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.FileExportTsqlTableServices = FileExportTsqlTableServices;
        this.loadingCtrl = loadingCtrl;
        this.global = global;
        this.modalCtrl = modalCtrl;
        this.ConnServices = ConnServices;
        this.func_no = 3;
        this.func_key = "014|" + this.func_no;
        this.min_exec_file_seq = 36000;
        this.max_exec_file_seq = this.min_exec_file_seq + 999;
        this.exec_file_seq = 0;
        this.sql_help = "\n  \u8B8A\u6578\u8AAA\u660E\uFF1A\n  {exec_log_seq}=\u8F49\u6A94\u5E8F\u865F,\n  {filename}=\u6A94\u540D,\n  {schema}=\u7D50\u69CB\u63CF\u8FF0,\n  {tablename}=\u532F\u51FA\u8CC7\u6599\u8868\u540D\u7A31,\n  {JOB01},{JOB02},{JOB03}=\u4F5C\u696D\u8FF4\u5708\u53C3\u6578,\n  {LC01},{LC02},{LC03}=\u5167\u90E8\u6A94\u6848\u8FF4\u5708\u53C3\u6578,\n  ";
        this.range_exec_file_seq = __WEBPACK_IMPORTED_MODULE_4__Model_String__["a" /* String */].Format("{0}-{1}", this.min_exec_file_seq, this.max_exec_file_seq);
        this.mode = navParams.data.mode;
        this.change_mode = navParams.data.change_mode;
        this.exec_file_seq = navParams.data.exec_file_seq;
        this.item = new __WEBPACK_IMPORTED_MODULE_5__Model_ViewModel_FileExportTsqlTableViewModel__["a" /* FileExportTsqlTableViewModel */]();
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
        this.item.filename = navParams.data.item.filename;
        this.item.sql_statement = navParams.data.item.sql_statement;
        this.item.file_format_key = navParams.data.item.file_format_key;
        this.item.file_format = navParams.data.item.file_format;
        this.item.field_terminator = navParams.data.item.field_terminator;
        this.item.row_terminator = navParams.data.item.row_terminator;
        this.item.export_mode_key = navParams.data.item.export_mode_key;
        this.item.export_mode = navParams.data.item.export_mode;
        this.item.last_data_type_key = navParams.data.item.last_data_type_key;
        this.item.last_data_type = navParams.data.item.last_data_type;
        this.item.last_data_column_name = navParams.data.item.last_data_column_name;
        this.item.where_condition = navParams.data.item.where_condition;
        this.item.del_empty_file = navParams.data.item.del_empty_file;
        if (this.change_mode === "n") {
            this.get_conn_string("localdb");
        }
        if (this.change_mode === "c") {
            this.get_max_exec_seq();
        }
        this.CanEditBatch = navParams.data.CanEditBatch;
        this.title = __WEBPACK_IMPORTED_MODULE_4__Model_String__["a" /* String */].Format("{0}", this.exec_file_seq);
    }
    FileExportTsqlTableAddEditModalPage.prototype.Help = function () {
        var _this = this;
        this.global.createLoader();
        this.global.loading.present().then(function () {
            _this.global.showMessage("SQL語法說明", _this.sql_help);
        });
    };
    FileExportTsqlTableAddEditModalPage.prototype.openNavParameterColumnPage = function (item) {
        var _this = this;
        this.global.createLoader("連線中...");
        this.global.loading.present().then(function () {
            _this.navCtrl.push("ParameterColumnPage", { item: item });
        });
        this.global.dismissLoading();
    };
    FileExportTsqlTableAddEditModalPage.prototype.get_conn_string = function (remote_conn_id) {
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
    FileExportTsqlTableAddEditModalPage.prototype.SelectExportMode = function () {
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
    FileExportTsqlTableAddEditModalPage.prototype.SelectLastDataType = function () {
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
    FileExportTsqlTableAddEditModalPage.prototype.SelectFileFormat = function () {
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
    FileExportTsqlTableAddEditModalPage.prototype.SelectConn = function () {
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
    FileExportTsqlTableAddEditModalPage.prototype.SelectParameterGroup = function () {
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
    FileExportTsqlTableAddEditModalPage.prototype.SelectTable = function () {
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
    FileExportTsqlTableAddEditModalPage.prototype.get_max_exec_seq = function () {
        var _this = this;
        this.global.createLoader("取得最大值中...");
        this.global.loading.present().then(function () {
            _this.FileExportTsqlTableServices.GetMaxExecSeqAsync(_this.exec_file_seq).subscribe(function (data) {
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
    FileExportTsqlTableAddEditModalPage.prototype.Save = function () {
        this.viewCtrl.dismiss(this.item);
    };
    FileExportTsqlTableAddEditModalPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    FileExportTsqlTableAddEditModalPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad FileExportTsqlTableModalPage");
    };
    FileExportTsqlTableAddEditModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: "page-file-export-tsql-table-add-edit-modal",template:/*ion-inline-start:"F:\ionic4\prod\src\pages\file-export-tsql-table-add-edit-modal\file-export-tsql-table-add-edit-modal.html"*/'<ion-header>\n\n    <ion-navbar>\n\n      <ion-title>{{title}}</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n  <ion-content padding>\n    <form #Form="ngForm">\n\n\n\n      <ion-row>\n          <ion-col col-12 col-sm-4>\n            <ion-item>\n              <ion-label stacked>結構描述</ion-label>\n              <ion-input type="text"  [disabled]="CanEditBatch==false  || mode==\'PUT\'" name="schemaname" #schemaname="ngModel" [(ngModel)]="item.schemaname"\n                 maxlength="30"></ion-input>\n            </ion-item>\n\n          </ion-col>\n          <ion-col col-12 col-sm-8>\n            <ion-item>\n              <ion-label stacked>資料表名稱</ion-label>\n              <ion-input type="text"  [disabled]="CanEditBatch==false || mode==\'PUT\'" name="tablename" #tablename="ngModel" [(ngModel)]="item.tablename"\n                required maxlength="50"></ion-input>\n              <button ion-button outline item-end icon-right *ngIf="CanEditBatch==true && mode==\'POST\'" (click)="SelectTable()">\n                <ion-icon name="arrow-dropdown"></ion-icon>\n              </button>\n            </ion-item>\n            <div *ngIf="tablename.errors && tablename.touched" class="error-message">\n              資料表名稱不能為空白\n            </div>\n\n          </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col >\n              <ion-item>\n                <ion-label stacked>篩選條件</ion-label>\n                <ion-input type="text" title="不需含where關鍵字" maxlength="255" [disabled]="CanEditBatch==false" name="where_condition" #where_condition="ngModel" [(ngModel)]="item.where_condition"\n                  ></ion-input>\n              </ion-item>\n\n            </ion-col>\n          </ion-row>\n        <ion-row>\n            <ion-col col-6>\n                <ion-item>\n                  <ion-label stacked>執行順序</ion-label>\n                  <ion-input type="number" [disabled]="CanEditBatch==false" name="exec_seq" #exec_seq="ngModel" [(ngModel)]="item.exec_seq"\n                    required></ion-input>\n                  <button ion-button outline item-end *ngIf="CanEditBatch==true" icon-right (click)="get_max_exec_seq()">\n                    <ion-icon name="arrow-dropdown"></ion-icon>\n                  </button>\n                </ion-item>\n                <div *ngIf="exec_seq.errors && exec_seq.touched" class="error-message">\n                  執行順序不能為空白\n                </div>\n              </ion-col>\n              <ion-col col-6>\n                  <ion-item>\n                    <ion-label stacked>連線編號</ion-label>\n                    <ion-input type="text" readonly=true [disabled]="CanEditBatch==false || mode==\'PUT\'" name="db_conn_id" #db_conn_id="ngModel" [(ngModel)]="item.db_conn_id"\n                      required maxlength="20"></ion-input>\n\n                    <button ion-button outline item-end *ngIf="CanEditBatch==true && mode==\'POST\'" icon-right (click)="SelectConn()">\n                      <ion-icon name="arrow-dropdown"></ion-icon>\n                    </button>\n                  </ion-item>\n\n                  <div *ngIf="db_conn_id.errors && db_conn_id.touched " class="error-message">\n                    連線編號不能為空白\n                  </div>\n                </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col col-12>\n              <ion-item>\n                <ion-label stacked>連線字串</ion-label>\n                <ion-textarea rows=4 [disabled]=true name="db_conn_string" #db_conn_string="ngModel" [(ngModel)]="item.db_conn_string" required></ion-textarea>\n\n              </ion-item>\n\n            </ion-col>\n\n          </ion-row>\n      <ion-row>\n          <ion-col col-12 col-sm-4 >\n              <ion-item>\n                <ion-label stacked>參數群組</ion-label>\n                <ion-input type="text" readonly=true [disabled]="CanEditBatch==false || mode==\'PUT\'" name="parameter_column_group" #parameter_column_group="ngModel"\n                  [(ngModel)]="item.parameter_column_group" required maxlength="3"></ion-input>\n\n                <button ion-button outline item-end *ngIf="CanEditBatch==true && mode==\'POST\'" icon-right (click)="SelectParameterGroup()">\n                  <ion-icon name="arrow-dropdown"></ion-icon>\n                </button>\n              </ion-item>\n\n              <div *ngIf="parameter_column_group.errors && parameter_column_group.touched " class="error-message">\n                參數群組不能為空白\n              </div>\n            </ion-col>\n\n        <ion-col col-12 col-sm-8 >\n          <ion-item>\n            <ion-label stacked>檔案名稱</ion-label>\n            <ion-input type="text" [disabled]="CanEditBatch==false" name="filename" #filename="ngModel" [(ngModel)]="item.filename" required\n              maxlength="50"></ion-input>\n          </ion-item>\n          <div *ngIf="filename.errors && filename.touched" class="error-message">\n            檔案名稱不能為空白\n          </div>\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n\n        <ion-col>\n          <ion-item>\n            <ion-label stacked>啟用</ion-label>\n            <ion-checkbox [disabled]="CanEditBatch==false" name="is_active" #is_active="ngModel" [(ngModel)]="item.is_active"></ion-checkbox>\n          </ion-item>\n\n        </ion-col>\n        <ion-col>\n            <ion-item>\n              <ion-label stacked>刪除空檔</ion-label>\n              <ion-checkbox [disabled]="CanEditBatch==false" name="del_empty_file" #del_empty_file="ngModel" [(ngModel)]="item.del_empty_file"></ion-checkbox>\n            </ion-item>\n\n          </ion-col>\n      </ion-row>\n      <ion-row>\n          <ion-col col-12 col-sm-4>\n            <ion-item>\n              <ion-label stacked>內文格式</ion-label>\n              <ion-input type="text" maxlength=10  readonly=true [disabled]="CanEditBatch==false " name="file_format_key" #file_format_key="ngModel" [(ngModel)]="item.file_format_key"\n                required></ion-input>\n\n              <button ion-button outline item-end *ngIf="CanEditBatch==true" icon-right (click)="SelectFileFormat()">\n                <ion-icon name="arrow-dropdown"></ion-icon>\n              </button>\n            </ion-item>\n\n            <div *ngIf="file_format_key.errors && file_format_key.touched " class="error-message">\n                內文格式不能為空白\n            </div>\n          </ion-col>\n          <ion-col col-12 col-sm-8>\n            <ion-item>\n              <ion-label stacked>內文格式</ion-label>\n              <ion-input type="text" [disabled]=true name="file_format" #file_format="ngModel" [(ngModel)]="item.file_format"\n                required></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col col-12 col-sm-4>\n              <ion-item>\n                <ion-label stacked>匯出模式</ion-label>\n                <ion-input type="text" maxlength=10 readonly=true [disabled]="CanEditBatch==false " name="export_mode_key" #export_mode_key="ngModel" [(ngModel)]="item.export_mode_key"\n                  required></ion-input>\n\n                <button ion-button outline item-end *ngIf="CanEditBatch==true" icon-right (click)="SelectExportMode()">\n                  <ion-icon name="arrow-dropdown"></ion-icon>\n                </button>\n              </ion-item>\n\n              <div *ngIf="export_mode_key.errors && export_mode_key.touched " class="error-message">\n                  匯出模式不能為空白\n              </div>\n            </ion-col>\n            <ion-col col-12 col-sm-8>\n              <ion-item>\n                <ion-label stacked>匯出模式</ion-label>\n                <ion-input type="text" [disabled]=true name="export_mode" #export_mode="ngModel" [(ngModel)]="item.export_mode"\n                  required></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        <ion-row>\n            <ion-col col-6>\n              <ion-item>\n                <ion-label stacked>欄位分隔符號</ion-label>\n                <ion-input type="text" title="f:表固定長度,\\t:tab,\\b:char(8),\\0:char(0),f|:固定長度後加上|" maxlength="2" [disabled]="CanEditBatch==false" name="field_terminator" #field_terminator="ngModel" [(ngModel)]="item.field_terminator"\n                  required></ion-input>\n              </ion-item>\n              <div *ngIf="field_terminator.errors && field_terminator.touched " class="error-message">\n                  欄位分隔符號不能為空白\n              </div>\n            </ion-col>\n            <ion-col col-6>\n                <ion-item>\n                  <ion-label stacked>列結尾符號</ion-label>\n                  <ion-input type="text"  maxlength="5" [disabled]="CanEditBatch==false" name="row_terminator" #row_terminator="ngModel" [(ngModel)]="item.row_terminator"\n                    required></ion-input>\n                </ion-item>\n                <div *ngIf="row_terminator.errors && row_terminator.touched " class="error-message">\n                    列結尾符號不能為空白\n                </div>\n              </ion-col>\n          </ion-row>\n          <ion-row>\n              <ion-col col-12 col-sm-4>\n                <ion-item>\n                  <ion-label stacked>最後資料欄位類型</ion-label>\n                  <ion-input type="text" readonly=true maxlength=10 [disabled]="CanEditBatch==false " name="last_data_type_key" #last_data_type_key="ngModel" [(ngModel)]="item.last_data_type_key"\n                    required></ion-input>\n\n                  <button ion-button outline item-end *ngIf="CanEditBatch==true" icon-right (click)="SelectLastDataType()">\n                    <ion-icon name="arrow-dropdown"></ion-icon>\n                  </button>\n                </ion-item>\n\n                <div *ngIf="last_data_type_key.errors && last_data_type_key.touched " class="error-message">\n                    最後資料欄位類型不能為空白\n                </div>\n              </ion-col>\n              <ion-col col-12 col-sm-8>\n                <ion-item>\n                  <ion-label stacked>最後資料欄位類型</ion-label>\n                  <ion-input type="text" [disabled]=true name="last_data_type" #last_data_type="ngModel" [(ngModel)]="item.last_data_type"\n                    required></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row *ngIf="item.last_data_type_key!=\'009|ALL\' && item.last_data_type_key>\'\' " >\n                <ion-col >\n                  <ion-item>\n                    <ion-label stacked>最後資料欄位名稱</ion-label>\n                    <ion-input type="text" maxlength="30" [disabled]="CanEditBatch==false" name="last_data_column_name" #last_data_column_name="ngModel" [(ngModel)]="item.last_data_column_name"\n                    ></ion-input>\n                  </ion-item>\n\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                  <ion-col>\n                    <ion-item>\n                      <ion-label stacked>Sql Statement</ion-label>\n                      <ion-textarea [disabled]="CanEditBatch==false" rows=10 name="sql_statement" #sql_statement="ngModel" [(ngModel)]="item.sql_statement"\n                        required></ion-textarea>\n                    </ion-item>\n                    <div *ngIf="sql_statement.errors && sql_statement.touched " class="error-message">\n                      Sql Statement不能為空白\n                    </div>\n                  </ion-col>\n                </ion-row>\n    </form>\n\n  </ion-content>\n  <ion-footer>\n    <ion-toolbar>\n      <ion-row>\n        <ion-col>\n          <div [ngClass]="[\'command\']">\n            <button small title="取消" ion-button color="dark" icon-left (click)="close()">\n              <ion-icon name="backspace"></ion-icon>\n            </button>\n            <button small title="確認" [disabled]="CanEditBatch==false" ion-button color="dark" [disabled]="!Form.form.valid" icon-left\n              (click)="Save()">\n              <ion-icon name="checkmark-circle"></ion-icon>\n            </button>\n            <button small title="複製SQL語法" ion-button color="dark" icon-left (click)="global.copyTextToClipboard(item.sql_statement)">\n              <ion-icon name="copy"></ion-icon>\n            </button>\n            <button small title="變數說明" [disabled]="CanEditBatch==false" ion-button color="dark"  icon-left\n            (click)="Help()">\n            <ion-icon name="help"></ion-icon>\n          </button>\n          <button small title="參數群組" ion-button color="dark" icon-left (click)="openNavParameterColumnPage(item)">\n            <ion-icon name="outlet"></ion-icon>\n          </button>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-toolbar>\n  </ion-footer>\n'/*ion-inline-end:"F:\ionic4\prod\src\pages\file-export-tsql-table-add-edit-modal\file-export-tsql-table-add-edit-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_0__providers_file_export_tsql_table_services_file_export_tsql_table_services__["a" /* FileExportTsqlTableServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1__components_global_global__["a" /* GlobalComponent */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_conn_services_conn_services__["a" /* ConnServicesProvider */]])
    ], FileExportTsqlTableAddEditModalPage);
    return FileExportTsqlTableAddEditModalPage;
}());

//# sourceMappingURL=file-export-tsql-table-add-edit-modal.js.map

/***/ }),

/***/ 538:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileExportTsqlTableAddEditModalPageModule", function() { return FileExportTsqlTableAddEditModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__file_export_tsql_table_add_edit_modal__ = __webpack_require__(1396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_file_export_tsql_table_services_file_export_tsql_table_services__ = __webpack_require__(1030);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FileExportTsqlTableAddEditModalPageModule = /** @class */ (function () {
    function FileExportTsqlTableAddEditModalPageModule() {
    }
    FileExportTsqlTableAddEditModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__file_export_tsql_table_add_edit_modal__["a" /* FileExportTsqlTableAddEditModalPage */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_file_export_tsql_table_services_file_export_tsql_table_services__["a" /* FileExportTsqlTableServicesProvider */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__file_export_tsql_table_add_edit_modal__["a" /* FileExportTsqlTableAddEditModalPage */]),
            ],
        })
    ], FileExportTsqlTableAddEditModalPageModule);
    return FileExportTsqlTableAddEditModalPageModule;
}());

//# sourceMappingURL=file-export-tsql-table-add-edit-modal.module.js.map

/***/ }),

/***/ 958:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileExportTsqlTableViewModel; });
var FileExportTsqlTableViewModel = /** @class */ (function () {
    function FileExportTsqlTableViewModel() {
    }
    return FileExportTsqlTableViewModel;
}());

//# sourceMappingURL=FileExportTsqlTableViewModel.js.map

/***/ })

});
//# sourceMappingURL=260.js.map