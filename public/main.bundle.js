webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h1 class=\"text-center\">Shopping List</h1>\n    <app-item></app-item>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__item_item_component__ = __webpack_require__("../../../../../src/app/item/item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__item_item_component__["a" /* ItemComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__data_service__["a" /* DataService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = (function () {
    function DataService(_http) {
        this._http = _http;
    }
    DataService.prototype.getItems = function () {
        return this._http.get('http://localhost:3000/api/items');
    };
    DataService.prototype.addItem = function (item) {
        console.log('The item in the post observable stream:', item);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers.set('Content-Type', 'application/json');
        return this._http.post('http://localhost:3000/api/item', item, { headers: headers });
    };
    DataService.prototype.updateItem = function (updatedItem) {
        console.log('The item in the update observable stream:', updatedItem);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers.set('Content-Type', 'application/json');
        return this._http.put('http://localhost:3000/api/item/' + updatedItem._id, updatedItem, { headers: headers });
    };
    DataService.prototype.deleteItem = function (id) {
        return this._http.delete('http://localhost:3000/api/item/' + id);
    };
    return DataService;
}());
DataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], DataService);

var _a;
//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ "../../../../../src/app/item.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Item; });
var Item = (function () {
    function Item(_id, itemName, itemQty, itemBought) {
        if (_id === void 0) { _id = ''; }
        if (itemName === void 0) { itemName = ''; }
        if (itemQty === void 0) { itemQty = 1; }
        if (itemBought === void 0) { itemBought = false; }
        this._id = _id;
        this.itemName = itemName;
        this.itemQty = itemQty;
        this.itemBought = itemBought;
    }
    return Item;
}());

//# sourceMappingURL=item.js.map

/***/ }),

/***/ "../../../../../src/app/item/item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/item/item.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"col-md-8 offset-2\">\n  <form (ngSubmit)=\"addItem(itemForm)\" #itemForm=\"ngForm\" *ngIf=\"!toggleForm\">\n    <h2 class=\"text-center\">Add Item</h2>\n    <div class=\"form-group\">\n      <label for=\"\">Item Name: </label>\n      <input \n        type=\"text\" \n        class=\"form-control\" \n        name=\"itemName\" \n        [(ngModel)]=\"item.itemName\" \n        required\n      >\n    </div>\n    <div class=\"form-group\">\n      <label for=\"\">Quantity</label>\n      <input \n        type=\"number\" \n        class=\"form-control\" \n        name=\"itemQty\" \n        [(ngModel)]=\"item.itemQty\" \n        required\n      >\n    </div>\n    <button \n      class=\"btn btn-primary\" \n      type=\"submit\" \n      name=\"button\" \n      [disabled]=itemForm.invalid\n      >\n      Add Item\n    </button>\n  </form>\n\n  <form (ngSubmit)=\"updateItem(editedItem)\" #editedItem=\"ngForm\" *ngIf=\"toggleForm\">\n    <h2 class=\"text-center\">Edit Item</h2>\n    <div class=\"form-group\">\n      <label for=\"\">Item Name: </label>\n      <input \n        type=\"text\" \n        class=\"form-control\" \n        name=\"itemName\" \n        [ngModel]=\"editItem.itemName\"\n        required\n      >\n    </div>\n    <div class=\"form-group\">\n      <label for=\"\">Quantity</label>\n      <input \n        type=\"number\" \n        class=\"form-control\" \n        name=\"itemQty\" \n        [ngModel]=\"editItem.itemQty\" \n        required\n      >\n    </div>\n    <button class=\"btn btn-primary\" type=\"submit\" name=\"button\" [disabled]=editItem.invalid>Update</button>\n  </form>\n  </div>\n\n  <div class=\"list-wrapper\">\n    <h2 class=\"text-center\">Current Items in the List</h2>\n  </div>\n    <ul class=\"list-group col-md-8 offset-2\" *ngFor=\"let item of itemList\">\n      <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n        <div class=\"col col-md-1\">\n          <input \n            type=\"checkbox\" \n            [checked]=\"item.itemBought\" \n            (click)=\"updateItemCheckbox(item)\"\n          > \n        </div>\n        <div class=\"col col-md-2\">\n        <p class=\"h6\">{{item.itemName}}</p>\n        </div>\n        <div class=\"col col-md-1\">\n          <span class=\"badge badge-primary badge-pill\">{{item.itemQty}}</span>\n        </div>\n        <div class=\"col col-md-2\">\n          <button \n            type=\"button\" \n            name=\"button\" \n            class=\"btn btn-primary\" \n            (click)=\"showEditForm(item)\" \n            [disabled]=\"toggleForm\"\n            >\n            Edit\n          </button>\n        </div>\n        <div class=\"col col-md-2\">\n         <button \n          type=\"button\" \n          name=\"button\" \n          class=\"btn btn-danger\" \n          (click)=\"deleteItem(item._id)\"\n          >\n          Delete\n        </button>\n        </div>\n      </li>\n    </ul>\n</div>"

/***/ }),

/***/ "../../../../../src/app/item/item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__item__ = __webpack_require__("../../../../../src/app/item.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ItemComponent = (function () {
    function ItemComponent(_dataService) {
        this._dataService = _dataService;
        this.itemList = [];
        this.item = new __WEBPACK_IMPORTED_MODULE_1__item__["a" /* Item */]();
        // flag created for the form
        this.toggleForm = false;
    }
    ItemComponent.prototype.ngOnInit = function () {
        this.getItems();
    };
    ItemComponent.prototype.getItems = function () {
        var _this = this;
        this._dataService.getItems().subscribe(function (items) {
            _this.itemList = items;
        });
    };
    ItemComponent.prototype.addItem = function () {
        var _this = this;
        this._dataService.addItem(this.item).subscribe(function (item) {
            // call the get items to the backend to see updated list.
            _this.getItems();
        });
    };
    ItemComponent.prototype.deleteItem = function (id) {
        var _this = this;
        this._dataService.deleteItem(id).subscribe(function (data) {
            console.log(data);
            // updating itemList array on delete
            if (data.n === 1) {
                for (var i = 0; i < _this.itemList.length; i++) {
                    if (id === _this.itemList[i]._id) {
                        _this.itemList.splice(i, 1);
                    }
                }
            }
        });
    };
    // from the click event on edit button
    ItemComponent.prototype.showEditForm = function (item) {
        this.editItem = item;
        this.toggleForm = !this.toggleForm;
    };
    ItemComponent.prototype.updateItem = function (editItem) {
        var _this = this;
        var editedItem = {
            // Use the prior instance of the item (editItem) to get _id.
            _id: this.editItem._id,
            itemName: editItem.value.itemName,
            itemQty: editItem.value.itemQty,
            // Use the prior instance of the item (editItem) for itemBought.
            itemBought: this.editItem.itemBought
        };
        this._dataService.updateItem(editedItem).subscribe(function (result) {
            // Update original array to reflect changes.
            _this.getItems();
        });
        // hide edit form
        this.toggleForm = !this.toggleForm;
    };
    // reverse the original value of itembought when checked
    ItemComponent.prototype.updateItemCheckbox = function (item) {
        var _this = this;
        item.itemBought = !item.itemBought;
        // send the item back to the database to be updated
        this._dataService.updateItem(item).subscribe(function (result) {
            // Update original array to reflect changes.
            _this.getItems();
        });
    };
    return ItemComponent;
}());
ItemComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
        selector: 'app-item',
        template: __webpack_require__("../../../../../src/app/item/item.component.html"),
        styles: [__webpack_require__("../../../../../src/app/item/item.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__data_service__["a" /* DataService */]) === "function" && _a || Object])
], ItemComponent);

var _a;
//# sourceMappingURL=item.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map