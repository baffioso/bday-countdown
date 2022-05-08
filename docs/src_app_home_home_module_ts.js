"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_home_module_ts"],{

/***/ 2003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 2003);







let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 2267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page.html?ngResource */ 3853);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 1020);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_models_time_unit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/models/time-unit */ 4096);
/* harmony import */ var src_services_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/store.service */ 9904);






let HomePage = class HomePage {
    constructor(store) {
        this.store = store;
        this.timeUnit = src_models_time_unit__WEBPACK_IMPORTED_MODULE_2__.TimeUnit;
    }
    ngOnInit() {
        this.dateOfBirth$ = this.store.dateOfBirth$;
        this.nextBday$ = this.store.nextBday$;
        this.timeToBday$ = this.store.timeToBday$;
        this.timeUnit$ = this.store.timeUnit$;
    }
    onTimeUnitChanged(event) {
        this.store.setTimeUnit(event.detail.value);
    }
    onDateChanged(event) {
        this.store.setBday(new Date(event.detail.value));
    }
};
HomePage.ctorParameters = () => [
    { type: src_services_store_service__WEBPACK_IMPORTED_MODULE_3__.StoreService }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-home',
        template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectionStrategy.OnPush,
        styles: [_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePage);



/***/ }),

/***/ 1020:
/*!************************************************!*\
  !*** ./src/app/home/home.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = ".count-down-container {\n  height: 100%;\n  width: 100%;\n  background: url(\"/assets/images/pokemon.jpg\") no-repeat center center fixed;\n  background-size: cover;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n.count-down-container .counter {\n  width: 100%;\n  max-width: 600px;\n  min-height: 235px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  background-color: rgba(0, 0, 0, 0.8);\n  padding: 10px;\n  border-radius: 5px;\n}\n.count-down-container .counter h1 {\n  text-align: center;\n  color: var(--ion-color-danger);\n  font-size: 20vw;\n}\n.count-down-container .counter ion-segment ion-segment-button {\n  color: var(--ion-color-danger);\n}\n.count-down-container .counter p {\n  color: var(--ion-color-danger);\n  text-align: center;\n}\n.date-picker-container {\n  padding-top: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSwyRUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtBQUNGO0FBRUU7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0NBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFBSjtBQUVJO0VBQ0Usa0JBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7QUFBTjtBQU1NO0VBQ0UsOEJBQUE7QUFKUjtBQWNJO0VBQ0UsOEJBQUE7RUFDQSxrQkFBQTtBQVpOO0FBdUNBO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLHNCQUFBO0FBcENGIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvdW50LWRvd24tY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvcG9rZW1vbi5qcGdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG5cbiAgLmNvdW50ZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogNjAwcHg7XG4gICAgbWluLWhlaWdodDogMjM1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcblxuICAgIGgxIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbiAgICAgIGZvbnQtc2l6ZTogMjB2dztcbiAgICB9XG5cbiAgICBpb24tc2VnbWVudCB7XG4gICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2YWI2O1xuXG4gICAgICBpb24tc2VnbWVudC1idXR0b24ge1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG4gICAgICAgIC8vIC0tYmFja2dyb3VuZC1jaGVja2VkOiB5ZWxsb3c7XG4gICAgICAgIC8vIC0tY29sb3ItY2hlY2tlZDogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3QpO1xuICAgICAgICAvLyAtLWluZGljYXRvci1jb2xvcjogcmVkO1xuICAgICAgICAvLyAtLWluZGljYXRvci1oZWlnaHQ6XHQxMDBweDtcbiAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzE2OTdkYjtcbiAgICAgIH1cblxuICAgIH1cblxuICAgIHAge1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgfVxuXG59XG5cbi8vIC50aW1lLXVuaXQtc2VsZWN0b3Ige1xuLy8gICB3aWR0aDogMTAwJTtcbi8vICAgcG9zaXRpb246IGZpeGVkO1xuLy8gICBib3R0b206IDA7XG4vLyAgIG92ZXJmbG93LXg6IGF1dG87XG4vLyAgIHotaW5kZXg6IDEwMDtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjU1IDIwNSAwKTtcbi8vICAgaGVpZ2h0OiA1MHB4O1xuLy8gICBkaXNwbGF5OiBmbGV4O1xuLy8gICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4vLyAgIC8vIGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4vLyAgIC8vIC0tYmFja2dvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbi8vICAgLy8gLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xuLy8gICAvLyAtLWNvbG9yLWNoZWNrZWQ6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0KTtcbi8vICAgLy8gLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xuLy8gICAvLyB9XG4vLyB9XG5cblxuXG4uZGF0ZS1waWNrZXItY29udGFpbmVyIHtcbiAgcGFkZGluZy10b3A6IDEycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbiJdfQ== */";

/***/ }),

/***/ 3853:
/*!************************************************!*\
  !*** ./src/app/home/home.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-content color=\"primary\"\n             [fullscreen]=\"true\">\n\n  <!-- <canvas></canvas> -->\n\n  <ion-fab vertical=\"top\"\n           horizontal=\"end\"\n           slot=\"fixed\">\n    <ion-fab-button id=\"openModal\"\n                    color=\"tertiary\">\n      <ion-icon name=\"calendar-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <!-- <div class=\"time-unit-selector\">\n    <ion-segment (ionChange)=\"onTimeUnitChanged($event)\" [value]=\"timeUnit$ | async\" mode=\"ios\" color=\"primary\">\n      <ion-segment-button [value]=\"timeUnit.seconds\">\n        <ion-label>Sekunder</ion-label>\n      </ion-segment-button>\n      <ion-segment-button [value]=\"timeUnit.minutes\">\n        <ion-label>Minutter</ion-label>\n      </ion-segment-button>\n      <ion-segment-button [value]=\"timeUnit.hours\">\n        <ion-label>Timer</ion-label>\n      </ion-segment-button>\n      <ion-segment-button [value]=\"timeUnit.days\">\n        <ion-label>Dage</ion-label>\n      </ion-segment-button>\n      <ion-segment-button [value]=\"timeUnit.months\">\n        <ion-label>Måneder</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n  </div> -->\n\n  <div class=\"count-down-container\">\n\n    <div class=\"counter\"\n         *ngIf=\"(dateOfBirth$ | async) !== null\">\n      <h1>{{ timeToBday$ | async }}</h1>\n\n      <ion-segment (ionChange)=\"onTimeUnitChanged($event)\"\n                   [value]=\"timeUnit$ | async\"\n                   mode=\"ios\"\n                   color=\"primary\">\n        <ion-segment-button [value]=\"timeUnit.seconds\">\n          <ion-label>Sekunder</ion-label>\n        </ion-segment-button>\n        <ion-segment-button [value]=\"timeUnit.minutes\">\n          <ion-label>Minutter</ion-label>\n        </ion-segment-button>\n        <ion-segment-button [value]=\"timeUnit.hours\">\n          <ion-label>Timer</ion-label>\n        </ion-segment-button>\n        <ion-segment-button [value]=\"timeUnit.days\">\n          <ion-label>Dage</ion-label>\n        </ion-segment-button>\n        <ion-segment-button [value]=\"timeUnit.months\">\n          <ion-label>Måneder</ion-label>\n        </ion-segment-button>\n      </ion-segment>\n\n      <p>\n        <ion-text color=\"primary\">\n          indtil {{ nextBday$ | async | date }}\n        </ion-text>\n      </p>\n    </div>\n\n\n  </div>\n\n  <ion-modal trigger=\"openModal\"\n             [initialBreakpoint]=\".6\"\n             [breakpoints]=\"[0, .6]\">\n    <ng-template>\n      <ion-header>\n        <ion-toolbar color=\"danger\"\n                     class=\"ion-text-center\">\n          <ion-title>\n            DIN FØDSELSDAG\n          </ion-title>\n        </ion-toolbar>\n      </ion-header>\n      <ion-content>\n        <div class=\"date-picker-container\">\n          <ion-datetime color=\"tertiary\"\n                        presentation=\"date\"\n                        (ionChange)=\"onDateChanged($event)\"\n                        [value]=\"(dateOfBirth$ | async) ? (dateOfBirth$ | async).toISOString() : null\"\n                        showDefaultButtons></ion-datetime>\n        </div>\n      </ion-content>\n    </ng-template>\n  </ion-modal>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map