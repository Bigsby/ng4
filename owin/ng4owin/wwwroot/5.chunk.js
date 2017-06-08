webpackJsonp([5],{

/***/ "./src/app/feature-one/feature-one.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/feature-one/feature-one.component.html":
/***/ (function(module, exports) {

module.exports = "<a routerLink=\"../two\">Go to Two</a>\n<p>\n  feature-one works!\n</p>\n"

/***/ }),

/***/ "./src/app/feature-one/feature-one.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeatureOneComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FeatureOneComponent = (function () {
    function FeatureOneComponent() {
    }
    FeatureOneComponent.prototype.ngOnInit = function () {
    };
    return FeatureOneComponent;
}());
FeatureOneComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Component */])({
        selector: 'app-feature-one',
        template: __webpack_require__("./src/app/feature-one/feature-one.component.html"),
        styles: [__webpack_require__("./src/app/feature-one/feature-one.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FeatureOneComponent);

//# sourceMappingURL=feature-one.component.js.map

/***/ }),

/***/ "./src/app/feature-two/feature-two.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/feature-two/feature-two.component.html":
/***/ (function(module, exports) {

module.exports = "<a routerLink=\"../one\">Go to One</a>\r\n<p>\r\n    feature-two works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/feature-two/feature-two.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeatureTwoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FeatureTwoComponent = (function () {
    function FeatureTwoComponent() {
    }
    FeatureTwoComponent.prototype.ngOnInit = function () {
    };
    return FeatureTwoComponent;
}());
FeatureTwoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Component */])({
        selector: 'app-feature-two',
        template: __webpack_require__("./src/app/feature-two/feature-two.component.html"),
        styles: [__webpack_require__("./src/app/feature-two/feature-two.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FeatureTwoComponent);

//# sourceMappingURL=feature-two.component.js.map

/***/ }),

/***/ "./src/app/feature/feature-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__feature_one_feature_one_component__ = __webpack_require__("./src/app/feature-one/feature-one.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__feature_two_feature_two_component__ = __webpack_require__("./src/app/feature-two/feature-two.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeatureRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', redirectTo: 'one', pathMatch: 'full' },
    { path: 'one', component: __WEBPACK_IMPORTED_MODULE_2__feature_one_feature_one_component__["a" /* FeatureOneComponent */] },
    { path: 'two', component: __WEBPACK_IMPORTED_MODULE_3__feature_two_feature_two_component__["a" /* FeatureTwoComponent */] }
];
var FeatureRoutingModule = (function () {
    function FeatureRoutingModule() {
    }
    return FeatureRoutingModule;
}());
FeatureRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], FeatureRoutingModule);

//# sourceMappingURL=feature-routing.module.js.map

/***/ }),

/***/ "./src/app/feature/feature.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeatureComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FeatureComponent = (function () {
    function FeatureComponent() {
    }
    return FeatureComponent;
}());
FeatureComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Component */])({
        template: "In feature module <router-outlet></router-outlet>"
    })
], FeatureComponent);

//# sourceMappingURL=feature.component.js.map

/***/ }),

/***/ "./src/app/feature/feature.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__feature_routing_module__ = __webpack_require__("./src/app/feature/feature-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__feature_component__ = __webpack_require__("./src/app/feature/feature.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__feature_one_feature_one_component__ = __webpack_require__("./src/app/feature-one/feature-one.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__feature_two_feature_two_component__ = __webpack_require__("./src/app/feature-two/feature-two.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureModule", function() { return FeatureModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var FeatureModule = (function () {
    function FeatureModule() {
    }
    return FeatureModule;
}());
FeatureModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["h" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__feature_routing_module__["a" /* FeatureRoutingModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__feature_component__["a" /* FeatureComponent */],
            __WEBPACK_IMPORTED_MODULE_4__feature_one_feature_one_component__["a" /* FeatureOneComponent */],
            __WEBPACK_IMPORTED_MODULE_5__feature_two_feature_two_component__["a" /* FeatureTwoComponent */]
        ]
    })
], FeatureModule);

//# sourceMappingURL=feature.module.js.map

/***/ })

});
//# sourceMappingURL=5.chunk.js.map