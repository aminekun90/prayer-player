"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["main"],{

/***/ 4114:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);



const routes = [];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes, {
      useHash: true
    }), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ }),

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _Users_aminebouzahar_Projects_prayer_player_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 9634);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ 3997);
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./env */ 3493);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _piPlayer_service_soCo_so_co_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @piPlayer/service/soCo/so-co.service */ 4333);
/* harmony import */ var _piPlayer_service_prayer_prayer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @piPlayer/service/prayer/prayer.service */ 9200);
/* harmony import */ var _service_printState_print_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service/printState/print-state.service */ 2977);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 7518);
/* harmony import */ var _clock_clock_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./clock/clock.component */ 4664);
/* harmony import */ var _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./calendar/calendar.component */ 6158);
/* harmony import */ var _settings_modal_settings_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./settings-modal/settings-modal.component */ 6552);














const _c0 = ["audioPlayer"];
const _c1 = a0 => ({
  "next": a0
});
function AppComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Welcome to Sonos prayer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "app-clock");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", ctx_r0.settings.api.city, " | ", ctx_r0.settings.api.country, "");
  }
}
function AppComponent_div_3_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Loading Sonos Devices...");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function AppComponent_div_3_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Loading bluetooth Devices...");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function AppComponent_div_3_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Loading Prayers...");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function AppComponent_div_3_li_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 17)(1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const prayer_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](6, _c1, ctx_r0.getCurrentPrayer() === prayer_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", prayer_r3.getName(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](5, 3, prayer_r3.getTime(), "H:mm"));
  }
}
function AppComponent_div_3_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const object_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", object_r4.device.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", object_r4.device.address, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", object_r4.device.peripheral.state, " ");
  }
}
function AppComponent_div_3_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 22)(5, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "fa-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](8, "fa-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AppComponent_div_3_div_14_Template_div_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r5);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r0.modalToggle());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](10, "fa-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const device_r6 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate5"](" ", device_r6.getName(), "", "@", "", device_r6.getIp(), " ", ctx_r0.settings.api.city, " | ", ctx_r0.settings.api.country, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("icon", ctx_r0.faPause);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("icon", ctx_r0.faStop);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("icon", ctx_r0.faCog);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" Selected track: ", device_r6.getPlayingTitle().title, " ");
  }
}
function AppComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 7)(1, "div", 8)(2, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AppComponent_div_3_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r0.scanForBle());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, " scan for BLE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "fa-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AppComponent_div_3_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r0.scanForSonos());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, " Scan for Sonos");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, AppComponent_div_3_div_7_Template, 2, 0, "div", 11)(8, AppComponent_div_3_div_8_Template, 2, 0, "div", 11)(9, AppComponent_div_3_div_9_Template, 2, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "ul", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](11, AppComponent_div_3_li_11_Template, 6, 8, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "app-settings-modal", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("onSave", function AppComponent_div_3_Template_app_settings_modal_onSave_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r0.saveSettings($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayListener"]("isVisibleChange", function AppComponent_div_3_Template_app_settings_modal_isVisibleChange_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayBindingSet"](ctx_r0.isChildVisible, $event) || (ctx_r0.isChildVisible = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](13, AppComponent_div_3_div_13_Template, 7, 3, "div", 15)(14, AppComponent_div_3_div_14_Template, 13, 9, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r0.bleLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("icon", ctx_r0.faBluetooth);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r0.deviceLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.deviceLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.bleLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.prayerLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r0.prayers);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("settings", ctx_r0.settings)("azanList", ctx_r0.azanList);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtwoWayProperty"]("isVisible", ctx_r0.isChildVisible);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("devices", ctx_r0.devices);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r0.bluetoothDevices);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r0.devices);
  }
}
function AppComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "@aminekun90");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("Sonos player ", ctx_r0.version, " By ");
  }
}
class AppComponent {
  constructor(soCoService, prayerService, printService) {
    this.soCoService = soCoService;
    this.prayerService = prayerService;
    this.printService = printService;
    this.faCog = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faCog;
    this.faPlay = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faPlay;
    this.faPause = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faPause;
    this.faStop = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faStop;
    this.faBluetooth = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_10__.faBluetooth;
    this.title = 'frontend';
    this.isChildVisible = false;
    this.deviceLoading = false;
    this.bleLoading = false;
    this.prayerLoading = false;
    this.devices = [];
    this.bluetoothDevices = [];
    this.prayers = [];
    this.azanList = [];
    this.currentTime = new Date();
    this.settings = {
      api: {
        city: '',
        country: '',
        selectedMethod: 12,
        forceDate: new Date() // or initialize it with a default date if needed
      },
      device: {
        volume: 50 // or initialize with a default volume
      },
      playlist: {
        fileName: ''
      },
      enableScheduler: false,
      calculationMethods: []
    };
    this.country = "";
    this.city = "";
    this.volume = 25;
    this.calcMethod = '';
    this.version = _env__WEBPACK_IMPORTED_MODULE_1__.VERSION;
    this.keySquence = [];
    this.printMode = false;
  }
  areArraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      return false;
    }
    return arr1.every((value, index) => value === arr2[index]);
  }
  handleKeyboardEvent(event) {
    var _this = this;
    return (0,_Users_aminebouzahar_Projects_prayer_player_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.keySquence.push(event.key);
      // console.log("Key press", this.keySquence);
      // wow is this an ester egg ;)
      if (_this.areArraysEqual(_this.keySquence, ["ArrowUp", "ArrowDown", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight"])) {
        console.log("combo correct");
        _this.keySquence = [];
        yield _this.soCoService.playEsterEgg();
        alert("Discordu!!");
      }
      if (_this.keySquence.length > 8 || event.key == "Escape") {
        console.log("Re-init key recognition");
        _this.keySquence = [];
      }
    })();
  }
  ngOnInit() {
    var _this2 = this;
    return (0,_Users_aminebouzahar_Projects_prayer_player_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.subscription = _this2.printService.printMode$.subscribe(mode => {
        _this2.printMode = mode;
      });
      _this2.setTimeEverySecond();
      _this2.prayerLoading = true;
      yield _this2.prayerService.getPrayers().then(prayers => {
        _this2.prayers = prayers;
      });
      _this2.prayerLoading = false;
      yield _this2.prayerService.getAzanList().then(list => {
        _this2.azanList = list;
      });
      yield _this2.getSettings();
      yield _this2.scanForSonos();
    })();
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  onMp3FileChange() {
    const audio = this.audioPlayer?.nativeElement;
    if (audio) {
      audio.pause();
      audio.load();
      audio.play();
    }
  }
  modalToggle() {
    this.isChildVisible = true;
  }
  getCurrentPrayer() {
    return this.prayers.find(p => p.getTime() >= new Date());
  }
  setTimeEverySecond() {
    setInterval(() => {
      this.currentTime = new Date();
    }, 1000);
  }
  saveSettings(settings) {
    var _this3 = this;
    return (0,_Users_aminebouzahar_Projects_prayer_player_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("Setting saving...", settings);
      _this3.settings = settings;
      _this3.settings.api.selectedMethod = parseInt(_this3.settings.api.selectedMethod);
      yield _this3.prayerService.saveSetting(_this3.settings);
      _this3.isChildVisible = false;
    })();
  }
  getSettings() {
    var _this4 = this;
    return (0,_Users_aminebouzahar_Projects_prayer_player_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("Setting loading...");
      _this4.settings = yield _this4.prayerService.getSettings();
      console.log("Loaded settings", _this4.settings);
    })();
  }
  scanForBle() {
    var _this5 = this;
    return (0,_Users_aminebouzahar_Projects_prayer_player_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this5.bleLoading = true;
      yield _this5.soCoService.getBleDevices().then(devices => {
        _this5.bluetoothDevices = devices;
      });
      _this5.bleLoading = false;
    })();
  }
  scanForSonos() {
    var _this6 = this;
    return (0,_Users_aminebouzahar_Projects_prayer_player_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this6.deviceLoading = true;
      yield _this6.soCoService.getSoCoDevices().then(devices => {
        _this6.devices = devices;
      });
      _this6.deviceLoading = false;
    })();
  }
  static #_ = this.ɵfac = function AppComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_piPlayer_service_soCo_so_co_service__WEBPACK_IMPORTED_MODULE_2__.SoCoService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_piPlayer_service_prayer_prayer_service__WEBPACK_IMPORTED_MODULE_3__.PrayerService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_service_printState_print_state_service__WEBPACK_IMPORTED_MODULE_4__.PrintService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    viewQuery: function AppComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.audioPlayer = _t.first);
      }
    },
    hostBindings: function AppComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("keypress", function AppComponent_keypress_HostBindingHandler($event) {
          return ctx.handleKeyboardEvent($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresolveDocument"])("keydown", function AppComponent_keydown_HostBindingHandler($event) {
          return ctx.handleKeyboardEvent($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresolveWindow"]);
      }
    },
    decls: 7,
    vars: 3,
    consts: [[1, "back"], [1, "container"], ["class", "app-welcome", 4, "ngIf"], ["id", "sonos-devices", 4, "ngIf"], ["class", "copyright", 4, "ngIf"], [1, "app-welcome"], [1, "local"], ["id", "sonos-devices"], [1, "device-search"], ["type", "button", 1, "btn", 3, "click", "disabled"], [3, "icon"], [4, "ngIf"], [1, "prayers"], ["class", "prayer", 3, "ngClass", 4, "ngFor", "ngForOf"], [3, "onSave", "isVisibleChange", "settings", "azanList", "isVisible", "devices"], [4, "ngFor", "ngForOf"], ["class", "device", 4, "ngFor", "ngForOf"], [1, "prayer", 3, "ngClass"], [1, "name"], [1, "time"], [1, "device"], ["src", "assets/img/symfonisk.jpg", "alt", "SONOS-DEVICE", 1, "picture"], [1, "controls"], [1, "action"], ["onkeypress", "", 1, "action", 3, "click"], [1, "copyright"], ["href", "https://github.com/aminekun90"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, AppComponent_div_2_Template, 5, 2, "div", 2)(3, AppComponent_div_3_Template, 15, 13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "app-calendar");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, AppComponent_div_5_Template, 4, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.printMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.printMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.printMode);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterOutlet, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__.FaIconComponent, _clock_clock_component__WEBPACK_IMPORTED_MODULE_5__.ClockComponent, _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_6__.CalendarComponent, _settings_modal_settings_modal_component__WEBPACK_IMPORTED_MODULE_7__.SettingsModalComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe],
    styles: ["@charset \"UTF-8\";\n.back[_ngcontent-%COMP%] {\n  width: 100vw;\n  min-height: 100vh;\n  height: 100%;\n  display: block;\n  background: url(\"/assets/img/bg.jpg\") no-repeat center fixed;\n  color: #ecf0f1;\n}\n\n.checkbox[_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 0;\n}\n.checkbox[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: relative;\n  cursor: pointer;\n  line-height: 20px;\n  padding-left: 30px;\n  font-size: 18px;\n  font-family: sans-serif;\n  color: #666;\n}\n.checkbox[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:before {\n  position: absolute;\n  display: block;\n  left: 0;\n  top: 0;\n  content: \"\";\n  background: transparent;\n  width: 20px;\n  height: 20px;\n  box-shadow: inset 0 0 0 1px #cecece;\n  border-radius: 4px;\n  transition: 200ms ease-in-out all;\n}\n.checkbox[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:after {\n  position: absolute;\n  display: block;\n  top: 5px;\n  left: 8px;\n  content: \"\";\n  width: 3px;\n  height: 7px;\n  border-right: 1px solid transparent;\n  border-bottom: 1px solid transparent;\n  transform: rotate(45deg);\n  transition: 200ms ease-in-out all;\n}\n.checkbox[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:hover {\n  color: #333;\n}\n.checkbox[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.checkbox[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]:before {\n  background: rgba(52, 152, 219, 0.7843137255);\n  box-shadow: none;\n}\n.checkbox[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]:after {\n  border-color: white;\n}\n.checkbox[_ngcontent-%COMP%]:disabled    + label[_ngcontent-%COMP%]:before {\n  background: #f2f2f2;\n  box-shadow: none;\n}\n.checkbox[_ngcontent-%COMP%]:disabled    + label[_ngcontent-%COMP%]:after {\n  border-color: transparent;\n}\n.checkbox[_ngcontent-%COMP%]:checked:disabled    + label[_ngcontent-%COMP%]:before {\n  background: #f2f2f2;\n  box-shadow: none;\n}\n.checkbox[_ngcontent-%COMP%]:checked:disabled    + label[_ngcontent-%COMP%]:after {\n  border-color: #cecece;\n}\n\n.container[_ngcontent-%COMP%] {\n  max-width: 600px;\n  background: url(\"/assets/img/bg-islamic.jpg\") no-repeat top fixed;\n  background-color: rgba(128, 128, 128, 0.523);\n  border-radius: 50px;\n  padding-bottom: 20px;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex-grow: 1;\n  flex-shrink: 0;\n  flex-basis: auto;\n}\n.container[_ngcontent-%COMP%]   app-calendar[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n}\n@media (max-width: 768px) {\n  .container[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n}\n@media (max-width: 480px) {\n  .container[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.container[_ngcontent-%COMP%]   .app-welcome[_ngcontent-%COMP%] {\n  font-size: 32px;\n  padding: 30px;\n  text-align: center;\n  color: #ecf0f1;\n  border-radius: 50px 50px 0 0;\n  min-height: 300px;\n  width: 100%;\n}\n.container[_ngcontent-%COMP%]   .app-welcome[_ngcontent-%COMP%]   .local[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.container[_ngcontent-%COMP%]   .app-welcome[_ngcontent-%COMP%]   app-clock[_ngcontent-%COMP%] {\n  font-size: 2.5em;\n  color: #e67e22;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: bolder;\n  display: block;\n}\n@media (max-width: 768px) {\n  .container[_ngcontent-%COMP%]   .app-welcome[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n}\n@media (max-width: 480px) {\n  .container[_ngcontent-%COMP%]   .app-welcome[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n.container[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin-top: 20px;\n  color: #ecf0f1;\n  flex-grow: 0;\n  flex-shrink: 0;\n  flex-basis: auto;\n}\n.container[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #ecf0f1;\n}\n.container[_ngcontent-%COMP%]   #sonos-devices[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: rgba(255, 255, 255, 0.5);\n  border-radius: 50px 50px 0 0;\n  padding: 20px;\n}\n.container[_ngcontent-%COMP%]   #sonos-devices[_ngcontent-%COMP%]   .device-search[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  width: 100%;\n  text-align: center;\n}\n.container[_ngcontent-%COMP%]   #sonos-devices[_ngcontent-%COMP%]   .prayers[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  margin-bottom: 15px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  width: 100%;\n}\n.container[_ngcontent-%COMP%]   #sonos-devices[_ngcontent-%COMP%]   .prayers[_ngcontent-%COMP%]   .prayer[_ngcontent-%COMP%] {\n  background-color: rgba(52, 152, 219, 0.7843137255);\n  border-radius: 980px;\n  height: 80px;\n  width: 100%;\n  margin: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n  flex-direction: column;\n  color: #ecf0f1;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);\n  transition: background-color 0.3s ease, transform 0.3s ease;\n}\n.container[_ngcontent-%COMP%]   #sonos-devices[_ngcontent-%COMP%]   .prayers[_ngcontent-%COMP%]   .prayer[_ngcontent-%COMP%]:hover {\n  background-color: rgba(33, 125, 187, 0.7843137255);\n  transform: translateY(-2px);\n  cursor: pointer;\n}\n.container[_ngcontent-%COMP%]   #sonos-devices[_ngcontent-%COMP%]   .prayers[_ngcontent-%COMP%]   .prayer.next[_ngcontent-%COMP%] {\n  background-color: #e67e22;\n}\n.container[_ngcontent-%COMP%]   #sonos-devices[_ngcontent-%COMP%]   .prayers[_ngcontent-%COMP%]   .prayer.next[_ngcontent-%COMP%]:hover {\n  background-color: #bf6516;\n}\n.container[_ngcontent-%COMP%]   #sonos-devices[_ngcontent-%COMP%]   .prayers[_ngcontent-%COMP%]   .prayer[_ngcontent-%COMP%]:nth-child(2n) {\n  margin-right: 0;\n}\n.container[_ngcontent-%COMP%]   #sonos-devices[_ngcontent-%COMP%]   .prayers[_ngcontent-%COMP%]   .prayer[_ngcontent-%COMP%]:nth-child(3) {\n  flex-basis: 100%;\n}\n.container[_ngcontent-%COMP%]   #sonos-devices[_ngcontent-%COMP%]   .prayers[_ngcontent-%COMP%]   .prayer[_ngcontent-%COMP%]:nth-last-child(2) {\n  margin-right: 10px;\n}\n.container[_ngcontent-%COMP%]   #sonos-devices[_ngcontent-%COMP%]   .prayers[_ngcontent-%COMP%]   .prayer[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%], \n.container[_ngcontent-%COMP%]   #sonos-devices[_ngcontent-%COMP%]   .prayers[_ngcontent-%COMP%]   .prayer[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 5px;\n  font-size: 14px;\n}\n.container[_ngcontent-%COMP%]   #sonos-devices[_ngcontent-%COMP%]   .prayers[_ngcontent-%COMP%]   .prayer[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 16px;\n}\n@media (max-width: 768px) {\n  .container[_ngcontent-%COMP%]   #sonos-devices[_ngcontent-%COMP%]   .prayers[_ngcontent-%COMP%]   .prayer[_ngcontent-%COMP%] {\n    width: 160px;\n  }\n}\n@media (max-width: 480px) {\n  .container[_ngcontent-%COMP%]   #sonos-devices[_ngcontent-%COMP%]   .prayers[_ngcontent-%COMP%]   .prayer[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 10px 0;\n  }\n}\n.container[_ngcontent-%COMP%]   #sonos-devices[_ngcontent-%COMP%]   .device[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 8px;\n  margin-top: 20px;\n  cursor: pointer;\n  text-align: center;\n  padding: 20px;\n  background-color: rgba(52, 152, 219, 0.7843137255);\n  color: #ecf0f1;\n  margin-bottom: 20px;\n  transition: background-color 0.3s ease, transform 0.3s ease;\n}\n.container[_ngcontent-%COMP%]   #sonos-devices[_ngcontent-%COMP%]   .device[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin-bottom: 10px;\n}\n.container[_ngcontent-%COMP%]   #sonos-devices[_ngcontent-%COMP%]   .device[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  text-align: left;\n  margin-top: 10px;\n  color: #2c3e50;\n}\n.container[_ngcontent-%COMP%]   #sonos-devices[_ngcontent-%COMP%]   .device[_ngcontent-%COMP%]   .picture[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  width: 120px;\n  height: 120px;\n  object-fit: cover;\n  margin: 0 auto;\n}\n.container[_ngcontent-%COMP%]   #sonos-devices[_ngcontent-%COMP%]   .device[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 15px;\n}\n.container[_ngcontent-%COMP%]   #sonos-devices[_ngcontent-%COMP%]   .device[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%] {\n  background: black;\n  border-radius: 50%;\n  height: 50px;\n  padding: 10px;\n  width: 50px;\n  margin-right: 5px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 16px;\n  color: white;\n  cursor: pointer;\n  line-height: 16px;\n  transition: color 0.3s ease, transform 0.3s ease;\n}\n.container[_ngcontent-%COMP%]   #sonos-devices[_ngcontent-%COMP%]   .device[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]:hover {\n  color: orange;\n}\n.container[_ngcontent-%COMP%]   #sonos-devices[_ngcontent-%COMP%]   .device[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   .action.play[_ngcontent-%COMP%]::before {\n  content: \"\u23F5\";\n}\n.container[_ngcontent-%COMP%]   #sonos-devices[_ngcontent-%COMP%]   .device[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   .action.pause[_ngcontent-%COMP%]::before {\n  content: \"\u23F8\";\n}\n.container[_ngcontent-%COMP%]   #sonos-devices[_ngcontent-%COMP%]   .device[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   .action.stop[_ngcontent-%COMP%]::before {\n  content: \"\u23F9\";\n}\n.container[_ngcontent-%COMP%]   #sonos-devices[_ngcontent-%COMP%]   .device[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   .action.play-pause[_ngcontent-%COMP%]::before {\n  content: \"\u23EF\";\n}\n.container[_ngcontent-%COMP%]   #sonos-devices[_ngcontent-%COMP%]   .device[_ngcontent-%COMP%]:hover {\n  background-color: rgba(33, 125, 187, 0.7843137255);\n  transform: translateY(-2px);\n}\n@media (max-width: 600px) {\n  .container[_ngcontent-%COMP%]   #sonos-devices[_ngcontent-%COMP%]   .device[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC9zaGFyZWQvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUloQjtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsNERBQUE7RUFDQSxjQ0ppQjtBREVuQjs7QUFJQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtBQURGO0FBSUU7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQ1pZO0VEYVosa0JBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0FBRko7QUFLSTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsV0MxQlU7RUQyQlYsWUMzQlU7RUQ2QlYsbUNBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0FBSk47QUFRSTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsbUNBQUE7RUFDQSxvQ0FBQTtFQUNBLHdCQUFBO0VBRUEsaUNBQUE7QUFQTjtBQVlFO0VBQ0UsV0FBQTtBQVZKO0FBY0U7RUFDRSxhQUFBO0FBWko7QUFrQk07RUFDRSw0Q0MxRVE7RUQyRVIsZ0JBQUE7QUFoQlI7QUFrQk07RUFDRSxtQkFBQTtBQWhCUjtBQXdCTTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7QUF0QlI7QUF3Qk07RUFDRSx5QkFBQTtBQXRCUjtBQThCTTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7QUE1QlI7QUE4Qk07RUFDRSxxQkFBQTtBQTVCUjs7QUFrQ0E7RUFDRSxnQkFBQTtFQUNBLGlFQUFBO0VBQ0EsNENBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQS9CRjtBQWdDRTtFQUNFLGNBQUE7RUFDQSxXQUFBO0FBOUJKO0FBZ0NFO0VBakJGO0lBa0JJLFVBQUE7RUE3QkY7QUFDRjtBQStCRTtFQXJCRjtJQXNCSSxXQUFBO0VBNUJGO0FBQ0Y7QUE2QkU7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUVBLGtCQUFBO0VBQ0EsY0NySWU7RURzSWYsNEJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUE1Qko7QUE2Qkk7RUFDRSxlQUFBO0FBM0JOO0FBNkJJO0VBQ0UsZ0JBQUE7RUFDQSxjQ2hKUztFRGlKVCxpQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQTNCTjtBQStCSTtFQXJCRjtJQXNCSSxlQUFBO0VBNUJKO0FBQ0Y7QUE4Qkk7RUF6QkY7SUEwQkksZUFBQTtFQTNCSjtBQUNGO0FBOEJFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0NqS2U7RURrS2YsWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQTVCSjtBQTZCSTtFQUNFLHFCQUFBO0VBQ0EsY0N2S2E7QUQ0SW5CO0FBK0JFO0VBRUUsV0FBQTtFQUNBLDBDQUFBO0VBQ0EsNEJBQUE7RUFDQSxhQUFBO0FBOUJKO0FBK0JJO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQTdCTjtBQStCSTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0FBN0JOO0FBOEJNO0VBQ0Usa0RDdE1RO0VEdU1SLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0MxTVc7RUQyTVgsd0NBQUE7RUFDQSwyREFBQTtBQTVCUjtBQThCUTtFQUNFLGtEQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0FBNUJWO0FBK0JRO0VBQ0UseUJDdk5LO0FEMExmO0FBK0JVO0VBQ0UseUJBQUE7QUE3Qlo7QUFpQ1E7RUFDRSxlQUFBO0FBL0JWO0FBa0NRO0VBQ0UsZ0JBQUE7QUFoQ1Y7QUFtQ1E7RUFDRSxrQkFBQTtBQWpDVjtBQW9DUTs7RUFFRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQWxDVjtBQXFDUTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBQW5DVjtBQXNDUTtFQXJERjtJQXNESSxZQUFBO0VBbkNSO0FBQ0Y7QUFxQ1E7RUF6REY7SUEwREksV0FBQTtJQUNBLGNBQUE7RUFsQ1I7QUFDRjtBQXNDSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGtEQzVRVTtFRDZRVixjQ3ZRYTtFRHdRYixtQkFBQTtFQUVBLDJEQUFBO0FBckNOO0FBdUNNO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQXJDUjtBQXdDTTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQ3JSVTtBRCtPbEI7QUF5Q007RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBdkNSO0FBMENNO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQXhDUjtBQTBDUTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnREFBQTtBQXhDVjtBQTBDVTtFQUNFLGFBQUE7QUF4Q1o7QUEwQ1U7RUFDRSxZQUFBO0FBeENaO0FBMkNVO0VBQ0UsWUFBQTtBQXpDWjtBQTRDVTtFQUNFLFlBQUE7QUExQ1o7QUE2Q1U7RUFDRSxZQUFBO0FBM0NaO0FBZ0RNO0VBQ0Usa0RBQUE7RUFDQSwyQkFBQTtBQTlDUjtBQWdETTtFQS9FRjtJQWdGSSxVQUFBO0VBN0NOO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJAdXNlIFwic2FzczptYXRoXCI7XG5AaW1wb3J0IFwic2hhcmVkL3N0eWxlcy92YXJpYWJsZXNcIjtcblxuXG4uYmFjayB7XG4gIHdpZHRoOiAxMDB2dztcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaW1nL2JnLmpwZ1wiKSAgbm8tcmVwZWF0IGNlbnRlciBmaXhlZDtcbiAgY29sb3I6ICRsaWdodC10ZXh0LWNvbG9yO1xufVxuLmNoZWNrYm94IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvcGFjaXR5OiAwO1xuXG4gIC8vIFRleHRcbiAgJiArIGxhYmVsIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBsaW5lLWhlaWdodDogJGNoZWNrYm94LXNpemU7XG4gICAgcGFkZGluZy1sZWZ0OiAkY2hlY2tib3gtc2l6ZSArIDEwO1xuICAgIGZvbnQtc2l6ZTogJGNoZWNrYm94LXNpemUgLSAyO1xuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiAjNjY2OyAvLyBMYWJlbCBjb2xvdXJcblxuICAgIC8vIENoZWNrYm94XG4gICAgJjpiZWZvcmUge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgdG9wOiAwO1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgd2lkdGg6ICRjaGVja2JveC1zaXplO1xuICAgICAgaGVpZ2h0OiAkY2hlY2tib3gtc2l6ZTtcblxuICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4ICRjaGVja2JveC1ib3JkZXI7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlLWluLW91dCBhbGw7XG4gICAgfVxuXG4gICAgLy8gVGlja1xuICAgICY6YWZ0ZXIge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB0b3A6IDVweDtcbiAgICAgIGxlZnQ6IDhweDtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICB3aWR0aDogM3B4O1xuICAgICAgaGVpZ2h0OiA3cHg7XG4gICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcblxuICAgICAgdHJhbnNpdGlvbjogMjAwbXMgZWFzZS1pbi1vdXQgYWxsO1xuICAgIH1cbiAgfVxuXG4gIC8vIEhvdmVyXG4gICYgKyBsYWJlbDpob3ZlciB7XG4gICAgY29sb3I6ICMzMzM7XG4gIH1cblxuICAvLyBGb2N1c1xuICAmICsgbGFiZWw6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cblxuICAvLyBDaGVja2VkXG4gICY6Y2hlY2tlZCB7XG4gICAgJiArIGxhYmVsIHtcbiAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgYmFja2dyb3VuZDogJHByaW1hcnktY29sb3I7XG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICB9XG4gICAgICAmOmFmdGVyIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBEaXNhYmxlZFxuICAmOmRpc2FibGVkIHtcbiAgICAmICsgbGFiZWwge1xuICAgICAgJjpiZWZvcmUge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjJmMmYyOyAvLyBEaXNhYmxlZCBjb2xvdXJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgIH1cbiAgICAgICY6YWZ0ZXIge1xuICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIERpc2FibGVkIENoZWNrZWRcbiAgJjpjaGVja2VkOmRpc2FibGVkIHtcbiAgICAmICsgbGFiZWwge1xuICAgICAgJjpiZWZvcmUge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xuICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgfVxuICAgICAgJjphZnRlciB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogI2NlY2VjZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaW1nL2JnLWlzbGFtaWMuanBnXCIpIG5vLXJlcGVhdCB0b3AgZml4ZWQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC41MjMpO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZ3JvdzogMTtcbiAgZmxleC1zaHJpbms6IDA7XG4gIGZsZXgtYmFzaXM6IGF1dG87XG4gIGFwcC1jYWxlbmRhcntcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICB3aWR0aDogOTAlOyAvLyBBZGp1c3Qgd2lkdGggZm9yIHNtYWxsZXIgc2NyZWVuc1xuICB9XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgd2lkdGg6IDEwMCU7IC8vIE1ha2UgaXQgZnVsbCB3aWR0aCBmb3IgZXZlbiBzbWFsbGVyIHNjcmVlbnNcbiAgfVxuICAuYXBwLXdlbGNvbWUge1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICBwYWRkaW5nOiAzMHB4O1xuXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAkbGlnaHQtdGV4dC1jb2xvcjtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4IDUwcHggMCAwO1xuICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC5sb2NhbHtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB9XG4gICAgYXBwLWNsb2NrIHtcbiAgICAgIGZvbnQtc2l6ZTogMi41ZW07XG4gICAgICBjb2xvcjogJGFjY2VudC1jb2xvcjtcbiAgICAgIGZvbnQtZmFtaWx5OiAgJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gICAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuXG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgIGZvbnQtc2l6ZTogMjRweDsgLy8gQWRqdXN0IGZvbnQgc2l6ZSBmb3Igc21hbGxlciBzY3JlZW5zXG4gICAgfVxuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgICBmb250LXNpemU6IDIwcHg7IC8vIEZ1cnRoZXIgYWRqdXN0IGZvbnQgc2l6ZSBmb3IgZXZlbiBzbWFsbGVyIHNjcmVlbnNcbiAgICB9XG4gIH1cblxuICAuY29weXJpZ2h0IHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBjb2xvcjogJGxpZ2h0LXRleHQtY29sb3I7XG4gICAgZmxleC1ncm93OiAwO1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgIGZsZXgtYmFzaXM6IGF1dG87XG4gICAgYSB7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBjb2xvcjogJGxpZ2h0LXRleHQtY29sb3I7XG4gICAgfVxuICB9XG5cbiAgI3Nvbm9zLWRldmljZXMge1xuXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHggNTBweCAwIDA7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICAuZGV2aWNlLXNlYXJjaHtcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIC5wcmF5ZXJzIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgLnByYXllciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA5ODBweDtcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGNvbG9yOiAkbGlnaHQtdGV4dC1jb2xvcjtcbiAgICAgICAgYm94LXNoYWRvdzogMCAycHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2UsIHRyYW5zZm9ybSAwLjNzIGVhc2U7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRwcmltYXJ5LWNvbG9yLCAxMCUpO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAmLm5leHQge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRhY2NlbnQtY29sb3I7XG5cbiAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkYWNjZW50LWNvbG9yLCAxMCUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICY6bnRoLWNoaWxkKDJuKSB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwOyAvLyBSZW1vdmUgcmlnaHQgbWFyZ2luIGZvciBldmVyeSBzZWNvbmQgaXRlbVxuICAgICAgICB9XG5cbiAgICAgICAgJjpudGgtY2hpbGQoMykge1xuICAgICAgICAgIGZsZXgtYmFzaXM6IDEwMCU7IC8vIE9uZSBpdGVtIGluIHRoZSBzZWNvbmQgcm93XG4gICAgICAgIH1cblxuICAgICAgICAmOm50aC1sYXN0LWNoaWxkKDIpIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7IC8vIFJlc3RvcmUgcmlnaHQgbWFyZ2luIGZvciB0aGUgZm91cnRoIGl0ZW0gZnJvbSB0aGUgZW5kXG4gICAgICAgIH1cblxuICAgICAgICAudGltZSxcbiAgICAgICAgLm5hbWUge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7IC8vIEFkZCBtYXJnaW4gYmV0d2VlbiAudGltZSBhbmQgLm5hbWVcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIH1cblxuICAgICAgICAubmFtZSB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgd2lkdGg6IDE2MHB4OyAvLyBBZGp1c3Qgd2lkdGggZm9yIHNtYWxsZXIgc2NyZWVuc1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7IC8vIE1ha2UgaXQgZnVsbCB3aWR0aCBmb3IgZXZlbiBzbWFsbGVyIHNjcmVlbnNcbiAgICAgICAgICBtYXJnaW46IDEwcHggMDsgLy8gQWRkIG1hcmdpbiBiZXR3ZWVuIGl0ZW1zXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuZGV2aWNlIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbiAgICAgIGNvbG9yOiAkbGlnaHQtdGV4dC1jb2xvcjtcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG5cbiAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlLCB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xuXG4gICAgICAubmFtZSB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgfVxuXG4gICAgICBwcmUge1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICBjb2xvcjogJGRhcmstdGV4dC1jb2xvcjtcbiAgICAgIH1cblxuICAgICAgLnBpY3R1cmUge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIHdpZHRoOiAxMjBweDtcbiAgICAgICAgaGVpZ2h0OiAxMjBweDtcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgfVxuXG4gICAgICAuY29udHJvbHMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcblxuICAgICAgICAuYWN0aW9uIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZSwgdHJhbnNmb3JtIDAuM3MgZWFzZTtcblxuICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgY29sb3I6IG9yYW5nZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgJi5wbGF5OjpiZWZvcmUge1xuICAgICAgICAgICAgY29udGVudDogXCLDosKPwrVcIjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmLnBhdXNlOjpiZWZvcmUge1xuICAgICAgICAgICAgY29udGVudDogXCLDosKPwrhcIjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmLnN0b3A6OmJlZm9yZSB7XG4gICAgICAgICAgICBjb250ZW50OiBcIsOiwo/CuVwiO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICYucGxheS1wYXVzZTo6YmVmb3JlIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiw6LCj8KvXCI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJHByaW1hcnktY29sb3IsIDEwJSk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICAgIH1cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgICB3aWR0aDogOTAlOyAvLyBBZGp1c3Qgd2lkdGggZm9yIHNtYWxsZXIgc2NyZWVuc1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiJHByaW1hcnktY29sb3I6ICMzNDk4ZGJjODtcbiRzZWNvbmRhcnktY29sb3I6ICMzMmIzNjhkNjtcbiRiYWNrZ3JvdW5kLWNvbG9yOiAjZWNmMGYxZDg7XG4kYm9yZGVyLWNvbG9yOiAjYmRjM2M3O1xuJGFjY2VudC1jb2xvcjogI2U2N2UyMjtcbiRkYXJrLXRleHQtY29sb3I6ICMyYzNlNTA7XG4kbGlnaHQtdGV4dC1jb2xvcjogI2VjZjBmMTtcblxuLy8gVmFyaWFibGVzXG4kY2hlY2tib3gtc2l6ZTogMjBweDtcbiRjaGVja2JveC1ib3JkZXI6ICNjZWNlY2U7XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 635:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 4114);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var _clock_clock_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clock/clock.component */ 4664);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 7518);
/* harmony import */ var _settings_modal_settings_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings-modal/settings-modal.component */ 6552);
/* harmony import */ var _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./calendar/calendar.component */ 6158);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);









class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__.FontAwesomeModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _clock_clock_component__WEBPACK_IMPORTED_MODULE_2__.ClockComponent, _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_4__.CalendarComponent, _settings_modal_settings_modal_component__WEBPACK_IMPORTED_MODULE_3__.SettingsModalComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__.FontAwesomeModule]
  });
})();

/***/ }),

/***/ 6158:
/*!************************************************!*\
  !*** ./src/app/calendar/calendar.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalendarComponent: () => (/* binding */ CalendarComponent)
/* harmony export */ });
/* harmony import */ var _Users_aminebouzahar_Projects_prayer_player_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 9634);
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ 6403);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _piPlayer_service_prayer_prayer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @piPlayer/service/prayer/prayer.service */ 9200);
/* harmony import */ var _service_printState_print_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/printState/print-state.service */ 2977);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 7518);








const _c0 = a0 => ({
  "printable-modal": true,
  "hidden": a0
});
const _c1 = a0 => ({
  "day": true,
  "selected": a0
});
const _c2 = a0 => ({
  "event": true,
  "hidden": a0
});
function CalendarComponent_div_0_div_11_div_15_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1)(1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "ul", 28)(4, "li", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "li", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "li", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "li", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "li", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "li", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const event_r5 = ctx.$implicit;
    const day_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](10, _c2, !day_r4.showEvents));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate3"]("", event_r5.date.hijri.month.ar, " ", event_r5.date.hijri.day, " ", event_r5.date.hijri.year, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Imsak : ", event_r5.timings.Imsak, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Fajr : ", event_r5.timings.Fajr, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Dhuhr : ", event_r5.timings.Dhuhr, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Asr : ", event_r5.timings.Asr, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Maghrib : ", event_r5.timings.Maghrib, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Isha : ", event_r5.timings.Isha, "");
  }
}
function CalendarComponent_div_0_div_11_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CalendarComponent_div_0_div_11_div_15_Template_div_click_0_listener() {
      const day_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.toggleEvents(day_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 25)(2, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, CalendarComponent_div_0_div_11_div_15_div_4_Template, 16, 12, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const day_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](3, _c1, ctx_r1.isSimilarDates(day_r4.date)));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](day_r4.date.getDate());
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", day_r4.events);
  }
}
function CalendarComponent_div_0_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 21)(1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, CalendarComponent_div_0_div_11_div_15_Template, 5, 5, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.daysOfweek[ctx_r1.days[0].date.getDay()]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.daysOfweek[ctx_r1.days[1].date.getDay()]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.daysOfweek[ctx_r1.days[2].date.getDay()]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.daysOfweek[ctx_r1.days[3].date.getDay()]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.daysOfweek[ctx_r1.days[4].date.getDay()]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.daysOfweek[ctx_r1.days[5].date.getDay()]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.daysOfweek[ctx_r1.days[7].date.getDay()]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.days);
  }
}
function CalendarComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 17)(1, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CalendarComponent_div_0_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.togglePdf());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Generate ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "fa-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 18)(5, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CalendarComponent_div_0_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.prevMonth());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "<");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CalendarComponent_div_0_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.nextMonth());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, ">");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, CalendarComponent_div_0_div_11_Template, 16, 8, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx_r1.faPdf);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.currentMonth);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.days.length);
  }
}
function CalendarComponent_tr_36_td_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td")(1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const event_r6 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.toReadable(event_r6.date.timestamp));
  }
}
function CalendarComponent_tr_36_td_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td")(1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const event_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate3"]("", event_r7.date.hijri.month.ar, " ", event_r7.date.hijri.day, " ", event_r7.date.hijri.year, "");
  }
}
function CalendarComponent_tr_36_td_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const event_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](event_r8.timings.Imsak);
  }
}
function CalendarComponent_tr_36_td_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const event_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](event_r9.timings.Fajr);
  }
}
function CalendarComponent_tr_36_td_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const event_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](event_r10.timings.Dhuhr);
  }
}
function CalendarComponent_tr_36_td_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const event_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](event_r11.timings.Asr);
  }
}
function CalendarComponent_tr_36_td_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const event_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](event_r12.timings.Maghrib);
  }
}
function CalendarComponent_tr_36_td_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const event_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](event_r13.timings.Isha);
  }
}
function CalendarComponent_tr_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CalendarComponent_tr_36_td_1_Template, 3, 1, "td", 16)(2, CalendarComponent_tr_36_td_2_Template, 3, 3, "td", 16)(3, CalendarComponent_tr_36_td_3_Template, 2, 1, "td", 16)(4, CalendarComponent_tr_36_td_4_Template, 2, 1, "td", 16)(5, CalendarComponent_tr_36_td_5_Template, 2, 1, "td", 16)(6, CalendarComponent_tr_36_td_6_Template, 2, 1, "td", 16)(7, CalendarComponent_tr_36_td_7_Template, 2, 1, "td", 16)(8, CalendarComponent_tr_36_td_8_Template, 2, 1, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const day_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", day_r14.events);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", day_r14.events);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", day_r14.events);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", day_r14.events);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", day_r14.events);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", day_r14.events);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", day_r14.events);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", day_r14.events);
  }
}
class CalendarComponent {
  constructor(prayerService, printService) {
    this.prayerService = prayerService;
    this.printService = printService;
    this.daysOfweek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    this.faXmark = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faXmark;
    this.printMode = false;
    this.faPdf = _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faFilePdf;
    this.showPdf = false;
    this.events = [];
    this.currentMonth = new Date().toLocaleString('fr-FR', {
      month: 'long'
    });
    this.currentDate = new Date();
    this.days = [];
    this.selectedDay = null;
    this.daysInMonth = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 0).getDate();
  }
  ngOnInit() {
    var _this = this;
    return (0,_Users_aminebouzahar_Projects_prayer_player_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.currentMonth = _this.currentMonth.charAt(0).toUpperCase() + _this.currentMonth.slice(1);
      _this.subscription = _this.printService.printMode$.subscribe(mode => {
        _this.printMode = mode;
      });
      console.log(_this.events);
      _this.currentDate = new Date();
      yield _this.renderCalendar();
    })();
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  prevMonth() {
    var _this2 = this;
    return (0,_Users_aminebouzahar_Projects_prayer_player_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.currentDate.setMonth(_this2.currentDate.getMonth() - 1);
      _this2.currentMonth = _this2.currentDate.toLocaleString('fr-FR', {
        month: 'long'
      });
      _this2.currentMonth = _this2.currentMonth.charAt(0).toUpperCase() + _this2.currentMonth.slice(1);
      yield _this2.renderCalendar();
    })();
  }
  nextMonth() {
    var _this3 = this;
    return (0,_Users_aminebouzahar_Projects_prayer_player_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.currentDate.setMonth(_this3.currentDate.getMonth() + 1);
      _this3.currentMonth = _this3.currentDate.toLocaleString('fr-FR', {
        month: 'long'
      });
      _this3.currentMonth = _this3.currentMonth.charAt(0).toUpperCase() + _this3.currentMonth.slice(1);
      yield _this3.renderCalendar();
    })();
  }
  toggleEvents(day) {
    this.days.forEach(d => d.showEvents = d === day ? !day.showEvents : false);
  }
  togglePdf() {
    this.showPdf = !this.showPdf;
    if (this.showPdf) {
      document.body.style.overflow = "hidden";
      this.togglePrintMode();
      this.togglePrintMode();
    } else {
      document.body.style.overflow = "scroll";
      this.printService.setPrintMode(false);
    }
  }
  isSimilarDates(day1) {
    const today = new Date();
    const condition = day1.getMonth() === today.getMonth() && day1.getFullYear() === today.getFullYear() && day1.getDate() === today.getDate();
    return condition;
  }
  toReadable(readable, lang = "fr-FR") {
    // Convert the string to an integer, then multiply by 1000 to get milliseconds
    const timestamp = parseInt(readable, 10) * 1000;
    const formattedDate = new Date(timestamp).toLocaleString(lang, {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
  }
  togglePrintMode() {
    this.printService.setPrintMode(!this.printMode);
  }
  printContent() {
    this.printService.setPrintMode(true);
    setTimeout(() => {
      window.print();
      this.printService.setPrintMode(false);
    }, 100);
  }
  renderCalendar() {
    var _this4 = this;
    return (0,_Users_aminebouzahar_Projects_prayer_player_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Retrieve all event timings for the current month and year
      _this4.events = yield _this4.prayerService.allTimings(_this4.currentDate.getMonth() + 1, _this4.currentDate.getFullYear());
      _this4.days = [];
      // Iterate through all days in the month
      for (let i = 1; i <= _this4.daysInMonth; i++) {
        const date = new Date(_this4.currentDate.getFullYear(), _this4.currentDate.getMonth(), i);
        // Filter events for the current day
        const eventsForDay = _this4.events.filter(event => {
          const eventDateParts = event.date.gregorian.date.split('-');
          const eventDay = parseInt(eventDateParts[0], 10);
          const eventMonth = parseInt(eventDateParts[1], 10) - 1; // Months are zero-based in JavaScript
          const eventYear = parseInt(eventDateParts[2], 10);
          const eventDate = new Date(eventYear, eventMonth, eventDay);
          return eventDate.toDateString() === date.toDateString();
        });
        // Add the day and its events to the calendar
        _this4.days.push({
          date: date,
          events: eventsForDay,
          showEvents: false
        });
      }
      // Log the calendar days and events for debugging
      console.log("Days:", JSON.stringify(_this4.days), "Events:", JSON.stringify(_this4.events));
    })();
  }
  selectDay(day) {
    if (this.selectedDay === day) {
      this.selectedDay = null; // Deselect if already selected
    } else {
      this.selectedDay = day; // Select the clicked day
    }
  }
  getEventsForDay(day) {
    // Implement this method to retrieve events for the selected day
    // You can replace this with your actual logic to fetch events
    return ['Event 1', 'Event 2']; // Example events for demonstration
  }
  static #_ = this.ɵfac = function CalendarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || CalendarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_piPlayer_service_prayer_prayer_service__WEBPACK_IMPORTED_MODULE_1__.PrayerService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_printState_print_state_service__WEBPACK_IMPORTED_MODULE_2__.PrintService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: CalendarComponent,
    selectors: [["app-calendar"]],
    decls: 37,
    vars: 8,
    consts: [["class", "calendar", 4, "ngIf"], [3, "ngClass"], [1, "days-modal"], ["colspan", "8", "scope", "header"], ["type", "button", "title", "Generate pdf", 1, "btn", 3, "click"], [3, "icon"], ["title", "Close modal", 1, "btn", "close", 3, "click"], [1, "month"], ["id", "gdate"], ["id", "hdate"], ["id", "imsak"], ["id", "fajr"], ["id", "dhuhr"], ["id", "asr"], ["id", "maghrib"], ["id", "isha"], [4, "ngFor", "ngForOf"], [1, "calendar"], [1, "header"], [3, "click"], ["class", "days", 4, "ngIf"], [1, "days"], [1, "day-label"], ["onKeyPress", "", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["onKeyPress", "", 3, "click", "ngClass"], [1, "date-wrapper"], [1, "date"], [3, "ngClass", 4, "ngFor", "ngForOf"], [1, "prayers"], [1, "prayer"]],
    template: function CalendarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, CalendarComponent_div_0_Template, 12, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "table")(4, "thead")(5, "tr")(6, "th", 3)(7, "div")(8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CalendarComponent_Template_button_click_8_listener() {
          return ctx.printContent();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " Print ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "fa-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CalendarComponent_Template_button_click_11_listener() {
          return ctx.togglePdf();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, " Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "fa-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 7)(15, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "thead")(18, "tr")(19, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Gregorian Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Hijri Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Imsak");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Fajr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Dhuhr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Asr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Maghrib");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "Isha");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](36, CalendarComponent_tr_36_Template, 9, 8, "tr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.printMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](6, _c0, !ctx.showPdf));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx.faPdf);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx.faXmark);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.currentMonth);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.days);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FaIconComponent],
    styles: [".calendar[_ngcontent-%COMP%] {\n  font-family: Arial, sans-serif;\n  border-radius: 0;\n  width: 100%;\n  padding: 20px;\n}\n.calendar[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n.calendar[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  font-size: 20px;\n  padding: 5px;\n  color: #f6f6f6;\n}\n.calendar[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  gap: 5px;\n}\n.calendar[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%]   .day-label[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.calendar[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%]   .day[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 40px;\n  border-radius: 8px;\n  background-color: #f0f0f0;\n  color: darkgray;\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n}\n.calendar[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%]   .day.selected[_ngcontent-%COMP%] {\n  background-color: #e67e22;\n}\n.calendar[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%]   .day[_ngcontent-%COMP%]:hover {\n  background-color: #ddd;\n}\n.calendar[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%]   .day.selected[_ngcontent-%COMP%] {\n  background-color: #007bff;\n  color: #fff;\n}\n.calendar[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%]   .day[_ngcontent-%COMP%]   .event[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 200px;\n  left: 50px;\n  bottom: 50%;\n  z-index: 9000;\n  border-radius: 10px;\n  margin-top: 5px;\n  padding: 10px;\n  background: white;\n  font-size: 14px;\n}\n.calendar[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%]   .day[_ngcontent-%COMP%]   .event[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  text-align: center;\n  color: black;\n  padding: 10px;\n}\n.calendar[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%]   .day[_ngcontent-%COMP%]   .event.hidden[_ngcontent-%COMP%] {\n  display: none;\n}\n.calendar[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%]   .day[_ngcontent-%COMP%]   .event[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n}\n.calendar[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%]   .day[_ngcontent-%COMP%]   .event[_ngcontent-%COMP%]   ul.prayers[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.calendar[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%]   .day[_ngcontent-%COMP%]   .event[_ngcontent-%COMP%]   ul.prayers[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 10px;\n  margin-bottom: 5px;\n  border-radius: 8px;\n  background-color: rgba(52, 152, 219, 0.7843137255);\n  color: white;\n}\n\n.printable-modal[_ngcontent-%COMP%] {\n  top: 0px;\n  left: 0px;\n  z-index: 1000;\n  position: fixed;\n  background-color: white;\n  height: 100%;\n  width: 100%;\n  padding: 10px;\n  overflow: scroll;\n}\n.printable-modal[_ngcontent-%COMP%]   .month[_ngcontent-%COMP%] {\n  padding: 10px;\n  color: #000;\n  text-align: center;\n}\n.printable-modal[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0 auto;\n  font-family: Arial, sans-serif;\n  font-size: 8pt;\n  color: #333;\n}\n.printable-modal[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  margin: 20px 0;\n  margin-top: 0;\n  color: #333;\n}\n.printable-modal[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background-color: #f4f4f4;\n  text-align: left;\n}\n.printable-modal[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 8px;\n  border-bottom: 2px solid #ddd;\n  font-weight: bold;\n}\n.printable-modal[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #f9f9f9;\n}\n.printable-modal[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 8px;\n  border-bottom: 1px solid #ddd;\n}\n@media print {\n  .printable-modal[_ngcontent-%COMP%]   body[_ngcontent-%COMP%], .printable-modal[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%], .printable-modal[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n    margin: 0;\n    padding: 0;\n    width: 100%;\n  }\n  .printable-modal[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .printable-modal[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 5px;\n    font-size: 7pt;\n  }\n  .printable-modal[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    background-color: #eee !important;\n    print-color-adjust: \"exact\";\n    -webkit-print-color-adjust: exact;\n  }\n  .printable-modal[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    page-break-inside: avoid;\n  }\n  .printable-modal[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n    border-collapse: collapse;\n  }\n  @page {\n    .printable-modal {\n      size: A4;\n      margin: 1cm;\n    }\n  }\n}\n.printable-modal[_ngcontent-%COMP%]   button.close[_ngcontent-%COMP%] {\n  float: right;\n}\n.printable-modal.hidden[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY2FsZW5kYXIvY2FsZW5kYXIuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3NoYXJlZC9zdHlsZXMvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSw4QkFBQTtFQUVBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUFERjtBQUdFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQURKO0FBR0k7RUFDRSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBRE47QUFLRTtFQUNFLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLFFBQUE7QUFISjtBQUlJO0VBQ0Usa0JBQUE7QUFGTjtBQUlJO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxzQ0FBQTtBQUZOO0FBR007RUFDRSx5QkN2Q087QURzQ2Y7QUFHTTtFQUNFLHNCQUFBO0FBRFI7QUFJTTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtBQUZSO0FBS007RUFNRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBUlI7QUFOUTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFRVjtBQUlRO0VBQ0UsYUFBQTtBQUZWO0FBSVE7RUFDRSxjQUFBO0FBRlY7QUFJUTtFQUNFLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFGVjtBQUdVO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrRENwRkk7RURxRkosWUFBQTtBQURaOztBQVFBO0VBQ0UsUUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUFMRjtBQU1FO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUpKO0FBTUU7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUFKSjtBQU9FO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBTEo7QUFPSTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7QUFMTjtBQU9NO0VBQ0UsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7QUFMUjtBQVdRO0VBQ0UseUJBQUE7QUFUVjtBQVlRO0VBQ0UsWUFBQTtFQUNBLDZCQUFBO0FBVlY7QUFnQkU7RUFDRTtJQUNFLFNBQUE7SUFDQSxVQUFBO0lBQ0EsV0FBQTtFQWRKO0VBaUJFO0lBQ0UsWUFBQTtJQUNBLGNBQUE7RUFmSjtFQWtCRTtJQUNFLGlDQUFBO0lBQ0EsMkJBQUE7SUFDQSxpQ0FBQTtFQWhCSjtFQW1CRTtJQUNFLHdCQUFBO0VBakJKO0VBb0JFO0lBQ0UseUJBQUE7RUFsQko7RUFxQkU7SUFqRko7TUFrRk0sUUFBQTtNQUNBLFdBQUE7SUFsQkY7RUFDRjtBQUNGO0FBcUJFO0VBQ0UsWUFBQTtBQW5CSjtBQXFCRTtFQUNFLGFBQUE7QUFuQkoiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vc2hhcmVkL3N0eWxlcy92YXJpYWJsZXNcIjtcbi5jYWxlbmRhciB7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcblxuICBib3JkZXItcmFkaXVzOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMjBweDtcblxuICAuaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG5cbiAgICBidXR0b24ge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICBjb2xvcjogI2Y2ZjZmNjtcbiAgICB9XG4gIH1cblxuICAuZGF5cyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3LCAxZnIpO1xuICAgIGdhcDogNXB4O1xuICAgIC5kYXktbGFiZWx7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIC5kYXkge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGhlaWdodDogNDBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XG4gICAgICBjb2xvcjogZGFya2dyYXk7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcbiAgICAgICYuc2VsZWN0ZWR7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRhY2NlbnQtY29sb3I7XG4gICAgICB9XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbiAgICAgIH1cblxuICAgICAgJi5zZWxlY3RlZCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgfVxuXG4gICAgICAuZXZlbnQge1xuICAgICAgICAuZGF0ZXtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgIGxlZnQ6IDUwcHg7XG4gICAgICAgIGJvdHRvbTo1MCU7XG4gICAgICAgIHotaW5kZXg6IDkwMDA7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgJi5oaWRkZW4ge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cbiAgICAgICAgdWwucHJheWVycyB7XG4gICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBsaSB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4ucHJpbnRhYmxlLW1vZGFsIHtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgei1pbmRleDogMTAwMDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweDtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgLm1vbnRoe1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC50YWJsZS1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDhwdDtcbiAgICBjb2xvcjogIzMzMztcbiAgfVxuXG4gIHRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgIG1hcmdpbjogMjBweCAwO1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgY29sb3I6ICMzMzM7XG5cbiAgICB0aGVhZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcblxuICAgICAgdGgge1xuICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZGRkO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0Ym9keSB7XG4gICAgICB0ciB7XG4gICAgICAgICY6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xuICAgICAgICB9XG5cbiAgICAgICAgdGQge1xuICAgICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIEBtZWRpYSBwcmludCB7XG4gICAgYm9keSwgLnRhYmxlLWNvbnRhaW5lciwgdGFibGUge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIHRoLCB0ZCB7XG4gICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICBmb250LXNpemU6IDdwdDtcbiAgICB9XG5cbiAgICB0aCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlICFpbXBvcnRhbnQ7XG4gICAgICBwcmludC1jb2xvci1hZGp1c3Q6XCJleGFjdFwiO1xuICAgICAgLXdlYmtpdC1wcmludC1jb2xvci1hZGp1c3Q6IGV4YWN0O1xuICAgIH1cblxuICAgIHRyIHtcbiAgICAgIHBhZ2UtYnJlYWstaW5zaWRlOiBhdm9pZDtcbiAgICB9XG5cbiAgICB0YWJsZSB7XG4gICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgIH1cblxuICAgIEBwYWdlIHtcbiAgICAgIHNpemU6IEE0O1xuICAgICAgbWFyZ2luOiAxY207XG4gICAgfVxuICB9XG5cblxuICBidXR0b24uY2xvc2V7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICB9XG4gICYuaGlkZGVue1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxufVxuIiwiJHByaW1hcnktY29sb3I6ICMzNDk4ZGJjODtcbiRzZWNvbmRhcnktY29sb3I6ICMzMmIzNjhkNjtcbiRiYWNrZ3JvdW5kLWNvbG9yOiAjZWNmMGYxZDg7XG4kYm9yZGVyLWNvbG9yOiAjYmRjM2M3O1xuJGFjY2VudC1jb2xvcjogI2U2N2UyMjtcbiRkYXJrLXRleHQtY29sb3I6ICMyYzNlNTA7XG4kbGlnaHQtdGV4dC1jb2xvcjogI2VjZjBmMTtcblxuLy8gVmFyaWFibGVzXG4kY2hlY2tib3gtc2l6ZTogMjBweDtcbiRjaGVja2JveC1ib3JkZXI6ICNjZWNlY2U7XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 4664:
/*!******************************************!*\
  !*** ./src/app/clock/clock.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClockComponent: () => (/* binding */ ClockComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class ClockComponent {
  constructor() {
    this.currentTime = '';
  }
  ngOnInit() {
    setInterval(() => {
      this.currentTime = new Date().toLocaleTimeString();
    }, 1000);
  }
  static #_ = this.ɵfac = function ClockComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ClockComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ClockComponent,
    selectors: [["app-clock"]],
    decls: 2,
    vars: 1,
    template: function ClockComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.currentTime, "\n");
      }
    },
    encapsulation: 2
  });
}

/***/ }),

/***/ 3493:
/*!************************!*\
  !*** ./src/app/env.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   API_URL: () => (/* binding */ API_URL),
/* harmony export */   VERSION: () => (/* binding */ VERSION)
/* harmony export */ });
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../package.json */ 8330);

const API_URL = 'http://localhost:8000';
const VERSION = 'Beta Build ' + _package_json__WEBPACK_IMPORTED_MODULE_0__.version;

/***/ }),

/***/ 7966:
/*!**********************************************!*\
  !*** ./src/app/service/http/http.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HttpService: () => (/* binding */ HttpService)
/* harmony export */ });
/* harmony import */ var _Users_aminebouzahar_Projects_prayer_player_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ 4374);
/* harmony import */ var _types_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/types */ 6793);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);




class HttpService {
  get(url, axiosOption) {
    return (0,_Users_aminebouzahar_Projects_prayer_player_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const {
          protocol,
          hostname
        } = window.location;
        _types_types__WEBPACK_IMPORTED_MODULE_1__.CONFIG.apiURL = `${protocol}//${hostname}` + ':8000/';
        const response = yield axios__WEBPACK_IMPORTED_MODULE_2__["default"].get(_types_types__WEBPACK_IMPORTED_MODULE_1__.CONFIG.apiURL + url, axiosOption);
        if ([200, 201].includes(response.status)) {
          return response.data;
        }
        throw new Error("Api Error " + JSON.stringify(response.data));
      } catch (error) {
        console.error(error);
      }
    })();
  }
  post(url, data, axiosOption) {
    return (0,_Users_aminebouzahar_Projects_prayer_player_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const {
          protocol,
          hostname
        } = window.location;
        _types_types__WEBPACK_IMPORTED_MODULE_1__.CONFIG.apiURL = `${protocol}//${hostname}` + ':8000/';
        const response = yield axios__WEBPACK_IMPORTED_MODULE_2__["default"].post(_types_types__WEBPACK_IMPORTED_MODULE_1__.CONFIG.apiURL + url, data, axiosOption);
        if ([200, 201].includes(response.status)) {
          return response.data;
        }
        throw new Error("Api Error " + JSON.stringify(response.data));
      } catch (error) {
        console.error(error);
      }
    })();
  }
  static #_ = this.ɵfac = function HttpService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || HttpService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: HttpService,
    factory: HttpService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 8388:
/*!*************************************************!*\
  !*** ./src/app/service/prayer/models/prayer.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Prayer: () => (/* binding */ Prayer)
/* harmony export */ });
class Prayer {
  constructor() {
    this.prayerName = "";
    this.time = new Date();
  }
  getTime() {
    return this.time;
  }
  getName() {
    return this.prayerName;
  }
  static fromJson(jsonObj) {
    let prayer = new Prayer();
    prayer.prayerName = jsonObj.prayerName;
    prayer.time = parseTime(jsonObj.time);
    return prayer;
  }
}
function parseTime(timeString) {
  const timeParts = timeString.split(' ')[0].split(':');
  const hours = parseInt(timeParts[0], 10);
  const minutes = parseInt(timeParts[1], 10);
  const currentDate = new Date();
  currentDate.setHours(hours, minutes, 0, 0);
  return currentDate;
}

/***/ }),

/***/ 9200:
/*!**************************************************!*\
  !*** ./src/app/service/prayer/prayer.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrayerService: () => (/* binding */ PrayerService)
/* harmony export */ });
/* harmony import */ var _Users_aminebouzahar_Projects_prayer_player_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _piPlayer_service_types_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @piPlayer/service/types/types */ 6793);
/* harmony import */ var _piPlayer_service_prayer_models_prayer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @piPlayer/service/prayer/models/prayer */ 8388);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _piPlayer_service_http_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @piPlayer/service/http/http.service */ 7966);





class PrayerService {
  constructor(httpService) {
    this.httpService = httpService;
    console.log("Prayer service initialized");
  }
  getAzanList() {
    var _this = this;
    return (0,_Users_aminebouzahar_Projects_prayer_player_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const azanList = yield _this.httpService.get(`${_piPlayer_service_types_types__WEBPACK_IMPORTED_MODULE_1__.CONFIG.getAzanList}`, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (azanList.status) {
        return azanList.result;
      }
    })();
  }
  getPrayers() {
    var _this2 = this;
    return (0,_Users_aminebouzahar_Projects_prayer_player_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const prayers = yield _this2.httpService.get(`${_piPlayer_service_types_types__WEBPACK_IMPORTED_MODULE_1__.CONFIG.getPrayers}`, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (prayers.status) {
        const finalPrayers = [];
        const prayerData = prayers.result.timings;
        for (const prayerName in prayerData) {
          if (Object.prototype.hasOwnProperty.call(prayerData, prayerName)) {
            const time = prayerData[prayerName];
            const prayer = _piPlayer_service_prayer_models_prayer__WEBPACK_IMPORTED_MODULE_2__.Prayer.fromJson({
              prayerName,
              time
            });
            finalPrayers.push(prayer);
          }
        }
        return finalPrayers.sort((a, b) => a.getTime().getTime() - b.getTime().getTime());
        ;
      }
      return [];
    })();
  }
  getSettings() {
    var _this3 = this;
    return (0,_Users_aminebouzahar_Projects_prayer_player_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const settingsResp = yield _this3.httpService.get(`${_piPlayer_service_types_types__WEBPACK_IMPORTED_MODULE_1__.CONFIG.getSettings}`, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (settingsResp.status) {
        return settingsResp.result;
      }
    })();
  }
  saveSetting(settings) {
    var _this4 = this;
    return (0,_Users_aminebouzahar_Projects_prayer_player_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const response = yield _this4.httpService.post(_piPlayer_service_types_types__WEBPACK_IMPORTED_MODULE_1__.CONFIG.saveSettings, settings, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response) {
        console.log("settings saved", response);
      }
    })();
  }
  allTimings(month, year) {
    var _this5 = this;
    return (0,_Users_aminebouzahar_Projects_prayer_player_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const currentDate = new Date();
      const finalMonth = month || (currentDate.getMonth() + 1).toString();
      const finalYear = year || currentDate.getFullYear().toString();
      const finalUrl = `${_piPlayer_service_types_types__WEBPACK_IMPORTED_MODULE_1__.CONFIG.allTimings}/${finalMonth}/${finalYear}`;
      const response = yield _this5.httpService.get(finalUrl, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      // Log the response (for debugging purposes)
      console.log(response);
      // Return the timings from the response
      return response.result.timings;
    })();
  }
  static #_ = this.ɵfac = function PrayerService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || PrayerService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_piPlayer_service_http_http_service__WEBPACK_IMPORTED_MODULE_3__.HttpService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: PrayerService,
    factory: PrayerService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 2977:
/*!***********************************************************!*\
  !*** ./src/app/service/printState/print-state.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrintService: () => (/* binding */ PrintService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);


class PrintService {
  constructor() {
    this.printModeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    this.printMode$ = this.printModeSubject.asObservable();
  }
  setPrintMode(value) {
    this.printModeSubject.next(value);
  }
  getPrintMode() {
    return this.printModeSubject.value;
  }
  static #_ = this.ɵfac = function PrintService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || PrintService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: PrintService,
    factory: PrintService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 2938:
/*!***********************************************!*\
  !*** ./src/app/service/soCo/models/device.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Device: () => (/* binding */ Device)
/* harmony export */ });
class Device {
  constructor(name = "", ip) {
    this.name = name;
    this.ip = ip;
    this.currentlyPlayingTitle = {};
    this.isPlaying = false;
    this.volume = 0;
    this.rawAttributes = {};
  }
  setVolume(volume) {
    this.volume = volume;
  }
  getVolume() {
    return this.volume;
  }
  getName() {
    return this.name;
  }
  getIp() {
    return this.ip;
  }
  getPlayingTitle() {
    return {
      title: this.currentlyPlayingTitle.title ?? ""
    } ?? {
      title: ""
    };
  }
  setPlayingTitle(playingTitle) {
    this.currentlyPlayingTitle = playingTitle;
  }
  isCurrentlyPlaying() {
    return this.isPlaying;
  }
  getRawAttributes() {
    return this.rawAttributes;
  }
  static fromJson(jsonObj) {
    let device = new Device(jsonObj.name, jsonObj.ip_adress);
    device.setPlayingTitle(jsonObj.track_info);
    device.setVolume(jsonObj.volume);
    device.rawAttributes = jsonObj;
    return device;
  }
}

/***/ }),

/***/ 4333:
/*!***********************************************!*\
  !*** ./src/app/service/soCo/so-co.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SoCoService: () => (/* binding */ SoCoService)
/* harmony export */ });
/* harmony import */ var _Users_aminebouzahar_Projects_prayer_player_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _piPlayer_service_soCo_models_device__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @piPlayer/service/soCo/models/device */ 2938);
/* harmony import */ var _piPlayer_service_types_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @piPlayer/service/types/types */ 6793);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _piPlayer_service_http_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @piPlayer/service/http/http.service */ 7966);





class SoCoService {
  constructor(httpService) {
    this.httpService = httpService;
    console.log("Soco service initialized");
  }
  parseJsonStr(value) {
    try {
      return JSON.parse(value);
    } catch (e) {
      return value;
    }
  }
  getBleDevices() {
    var _this = this;
    return (0,_Users_aminebouzahar_Projects_prayer_player_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const result = yield _this.httpService.get(`${_piPlayer_service_types_types__WEBPACK_IMPORTED_MODULE_2__.CONFIG.getBleDevices}`, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log("BLE", result);
      if (result?.success && result?.devices) {
        const devices = result.devices;
        return _this.parseJsonStr(devices);
      } else {
        return [];
      }
    })();
  }
  getSoCoDevices() {
    var _this2 = this;
    return (0,_Users_aminebouzahar_Projects_prayer_player_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const result = yield _this2.httpService.get(`${_piPlayer_service_types_types__WEBPACK_IMPORTED_MODULE_2__.CONFIG.getSoCoDevice}`, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (result.success && result.devices) {
        const devices = result.devices;
        return _this2.parseJsonStr(devices).map(device => _piPlayer_service_soCo_models_device__WEBPACK_IMPORTED_MODULE_1__.Device.fromJson(device));
      } else {
        return [];
      }
    })();
  }
  playEsterEgg() {
    var _this3 = this;
    return (0,_Users_aminebouzahar_Projects_prayer_player_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const result = yield _this3.httpService.get(`${_piPlayer_service_types_types__WEBPACK_IMPORTED_MODULE_2__.CONFIG.playEsterEgg}`, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (result) {
        return result;
      }
      return [];
    })();
  }
  static #_ = this.ɵfac = function SoCoService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || SoCoService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_piPlayer_service_http_http_service__WEBPACK_IMPORTED_MODULE_3__.HttpService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: SoCoService,
    factory: SoCoService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 6793:
/*!****************************************!*\
  !*** ./src/app/service/types/types.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CONFIG: () => (/* binding */ CONFIG)
/* harmony export */ });
const CONFIG = {
  apiURL: "http://localHost:8000/",
  getSoCoDevice: "devices",
  getBleDevices: "bluetoothScan",
  getPrayers: "timings",
  getAzanList: "azanList",
  saveSettings: "saveSettings",
  getSettings: "getSettings",
  playEsterEgg: "playEsterEgg",
  allTimings: "allTimings"
};

/***/ }),

/***/ 6552:
/*!************************************************************!*\
  !*** ./src/app/settings-modal/settings-modal.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsModalComponent: () => (/* binding */ SettingsModalComponent)
/* harmony export */ });
/* harmony import */ var _Users_aminebouzahar_Projects_prayer_player_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);





const _c0 = ["audioPlayer"];
function SettingsModalComponent_div_0_option_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const method_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", method_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](method_r3.description);
  }
}
function SettingsModalComponent_div_0_option_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const mp3File_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", mp3File_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](mp3File_r4);
  }
}
function SettingsModalComponent_div_0_audio_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "audio", 26, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "source", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Your browser does not support the audio element. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "/" + ctx_r1.settings.playlist.fileName, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function SettingsModalComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2)(1, "h2", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SettingsModalComponent_div_0_Template_div_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.modalToggle());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function SettingsModalComponent_div_0_Template_form_submit_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.saveSettings());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6)(7, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "City");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function SettingsModalComponent_div_0_Template_input_ngModelChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r1.settings.api.city, $event) || (ctx_r1.settings.api.city = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6)(11, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Country");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function SettingsModalComponent_div_0_Template_input_ngModelChange_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r1.settings.api.country, $event) || (ctx_r1.settings.api.country = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 6)(15, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Adhan Calculation Method");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "select", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function SettingsModalComponent_div_0_Template_select_ngModelChange_17_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r1.settings.api.selectedMethod, $event) || (ctx_r1.settings.api.selectedMethod = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Select adhan calculation method:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, SettingsModalComponent_div_0_option_20_Template, 2, 2, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 6)(22, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Force date:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function SettingsModalComponent_div_0_Template_input_ngModelChange_24_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r1.settings.api.forceDate, $event) || (ctx_r1.settings.api.forceDate = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 6)(26, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Volume");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function SettingsModalComponent_div_0_Template_input_ngModelChange_28_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r1.settings.device.volume, $event) || (ctx_r1.settings.device.volume = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 6)(30, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function SettingsModalComponent_div_0_Template_input_ngModelChange_30_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r1.settings.enableScheduler, $event) || (ctx_r1.settings.enableScheduler = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Enable scheduler");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 6)(34, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Adhan:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "select", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function SettingsModalComponent_div_0_Template_select_ngModelChange_36_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r1.settings.playlist.fileName, $event) || (ctx_r1.settings.playlist.fileName = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function SettingsModalComponent_div_0_Template_select_change_36_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.onMp3FileChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Select an Adhan");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, SettingsModalComponent_div_0_option_39_Template, 2, 2, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, SettingsModalComponent_div_0_audio_40_Template, 4, 1, "audio", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 6)(42, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.settings.api.city);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r1.settings.api.city);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.settings.api.country);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r1.settings.api.country);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.settings.api.selectedMethod);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.settings.calculationMethods);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.settings.api.forceDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r1.settings.api.forceDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.settings.device.volume);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r1.settings.device.volume);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.settings.enableScheduler);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r1.settings.enableScheduler);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.settings.playlist.fileName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r1.settings.playlist.fileName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.azanList);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.settings.playlist.fileName);
  }
}
class SettingsModalComponent {
  constructor() {
    this.onSave = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.isVisibleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.devices = [];
  }
  ngOnInit() {
    return (0,_Users_aminebouzahar_Projects_prayer_player_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("setting loaded");
    })();
  }
  modalToggle() {
    this.isVisibleChange.emit();
  }
  saveSettings() {
    var _this = this;
    return (0,_Users_aminebouzahar_Projects_prayer_player_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.onSave.emit(_this.settings);
    })();
  }
  onMp3FileChange() {
    const audio = this.audioPlayer?.nativeElement;
    if (audio) {
      audio.pause();
      audio.load();
      audio.play();
    }
  }
  static #_ = this.ɵfac = function SettingsModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || SettingsModalComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: SettingsModalComponent,
    selectors: [["app-settings-modal"]],
    viewQuery: function SettingsModalComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.audioPlayer = _t.first);
      }
    },
    inputs: {
      settings: "settings",
      azanList: "azanList",
      isVisible: "isVisible",
      devices: "devices"
    },
    outputs: {
      onSave: "onSave",
      isVisibleChange: "isVisibleChange"
    },
    decls: 1,
    vars: 1,
    consts: [["audioPlayer", ""], ["class", "settings", 4, "ngIf"], [1, "settings"], [1, "settings-title"], [1, "close", 3, "click"], [1, "settings-form", 3, "submit"], [1, "form-group"], ["for", "city"], ["name", "city", "type", "text", "id", "city", "placeholder", "Enter your city", 1, "form-control", 3, "ngModelChange", "ngModel", "value"], ["for", "country"], ["name", "country", "type", "text", "id", "country", "placeholder", "Enter your country", 1, "form-control", 3, "ngModelChange", "ngModel", "value"], ["for", "calcMethod"], ["name", "calcMethod", "id", "calcMethod", 1, "form-control", 3, "ngModelChange", "ngModel"], ["value", "", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "selectDate"], ["name", "forceDate", "type", "date", "id", "selectDate", "name", "selectDate", 1, "form-control", 3, "ngModelChange", "ngModel", "value"], ["for", "volume"], ["type", "range", "id", "volume", "name", "volume", "min", "0", "max", "100", 1, "form-control", 3, "ngModelChange", "ngModel", "value"], ["type", "checkbox", "id", "enableScheduler", "name", "enableScheduler", 1, "checkbox", 3, "ngModelChange", "ngModel", "value"], ["for", "enableScheduler"], ["for", "adhan"], ["name", "adhan", "id", "adhan", 1, "form-control", 3, "ngModelChange", "change", "ngModel", "value"], ["controls", "", 4, "ngIf"], ["type", "submit", "name", "save", 1, "btn", "btn-primary"], [3, "value"], ["controls", ""], ["type", "audio/mpeg", 3, "src"]],
    template: function SettingsModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, SettingsModalComponent_div_0_Template, 44, 16, "div", 1);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.devices.length && ctx.isVisible);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RangeValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm],
    styles: [".settings[_ngcontent-%COMP%] {\n  margin-top: 0px;\n  top: 60px;\n  padding: 20px;\n  background-color: rgba(236, 240, 241, 0.8470588235);\n  border: 1px solid transparent;\n  border-radius: 10px;\n  width: 500px;\n  position: absolute;\n  z-index: 10000;\n}\n.settings[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  color: #777;\n  cursor: pointer;\n  float: right;\n}\n.settings[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]:hover {\n  color: black;\n}\n.settings[_ngcontent-%COMP%]   .settings-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: rgba(52, 152, 219, 0.7843137255);\n  margin-bottom: 15px;\n}\n.settings[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.settings[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: bold;\n  margin-bottom: 5px;\n  color: #2c3e50;\n}\n.settings[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n  border: 1px solid #bdc3c7;\n  border-radius: 5px;\n  font-size: 16px;\n  color: #2c3e50;\n}\n.settings[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: rgba(52, 152, 219, 0.7843137255);\n}\n.settings[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   select.form-control[_ngcontent-%COMP%] {\n  height: 40px;\n}\n.settings[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[type=range].form-control[_ngcontent-%COMP%] {\n  width: calc(100% - 20px);\n}\n.settings[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 12px 24px;\n  font-size: 14px;\n  background-color: rgba(52, 152, 219, 0.7843137255);\n  color: #ecf0f1;\n  border: none;\n  border-radius: 980px;\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n}\n.settings[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\n  background-color: rgba(33, 125, 187, 0.7843137255);\n}\n@media (max-width: 600px) {\n  .settings[_ngcontent-%COMP%] {\n    width: 90%;\n    left: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2V0dGluZ3MtbW9kYWwvc2V0dGluZ3MtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3NoYXJlZC9zdHlsZXMvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxlQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxtRENKaUI7RURLakIsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFERjtBQUVFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUFKO0FBQ0k7RUFDRSxZQUFBO0FBQ047QUFFRTtFQUNFLGVBQUE7RUFDQSx1Q0N6Qlk7RUQwQlosbUJBQUE7QUFBSjtBQUdFO0VBQ0UsbUJBQUE7QUFESjtBQUdJO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQy9CWTtBRDhCbEI7QUFJSTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQ3hDWTtBRHNDbEI7QUFJTTtFQUNFLGFBQUE7RUFDQSw4Q0NqRFE7QUQrQ2hCO0FBTUk7RUFDRSxZQUFBO0FBSk47QUFPSTtFQUNFLHdCQUFBO0FBTE47QUFTRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtEQ2pFWTtFRGtFWixjQzVEZTtFRDZEZixZQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0NBQUE7QUFQSjtBQVNJO0VBQ0Usa0RBQUE7QUFQTjtBQVVFO0VBMUVGO0lBMkVJLFVBQUE7SUFDQSxVQUFBO0VBUEY7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi9zaGFyZWQvc3R5bGVzL3ZhcmlhYmxlc1wiO1xuXG4uc2V0dGluZ3Mge1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIHRvcDogNjBweDtcbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3I7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB3aWR0aDogNTAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTAwMDA7XG4gIC5jbG9zZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTBweDtcbiAgICByaWdodDogMTBweDtcbiAgICBjb2xvcjogIzc3NztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgICY6aG92ZXJ7XG4gICAgICBjb2xvcjogYmxhY2s7XG4gICAgfVxuICB9XG4gIC5zZXR0aW5ncy10aXRsZSB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICB9XG5cbiAgLmZvcm0tZ3JvdXAge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG5cbiAgICBsYWJlbCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgY29sb3I6ICRkYXJrLXRleHQtY29sb3I7XG4gICAgfVxuXG4gICAgLmZvcm0tY29udHJvbCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAkYm9yZGVyLWNvbG9yO1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgY29sb3I6ICRkYXJrLXRleHQtY29sb3I7XG5cbiAgICAgICY6Zm9jdXMge1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICBib3JkZXItY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuICAgICAgfVxuICAgIH1cblxuICAgIHNlbGVjdC5mb3JtLWNvbnRyb2wge1xuICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgIH1cblxuICAgIGlucHV0W3R5cGU9XCJyYW5nZVwiXS5mb3JtLWNvbnRyb2wge1xuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xuICAgIH1cbiAgfVxuXG4gIC5idG4ge1xuICAgIHBhZGRpbmc6IDEycHggMjRweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7XG4gICAgY29sb3I6ICRsaWdodC10ZXh0LWNvbG9yO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA5ODBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkcHJpbWFyeS1jb2xvciwgMTAlKTtcbiAgICB9XG4gIH1cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgd2lkdGg6IDkwJTsgLy8gQWRqdXN0IHdpZHRoIGZvciBzbWFsbGVyIHNjcmVlbnNcbiAgICBsZWZ0OjEwcHg7XG4gIH1cbn1cbiIsIiRwcmltYXJ5LWNvbG9yOiAjMzQ5OGRiYzg7XG4kc2Vjb25kYXJ5LWNvbG9yOiAjMzJiMzY4ZDY7XG4kYmFja2dyb3VuZC1jb2xvcjogI2VjZjBmMWQ4O1xuJGJvcmRlci1jb2xvcjogI2JkYzNjNztcbiRhY2NlbnQtY29sb3I6ICNlNjdlMjI7XG4kZGFyay10ZXh0LWNvbG9yOiAjMmMzZTUwO1xuJGxpZ2h0LXRleHQtY29sb3I6ICNlY2YwZjE7XG5cbi8vIFZhcmlhYmxlc1xuJGNoZWNrYm94LXNpemU6IDIwcHg7XG4kY2hlY2tib3gtYm9yZGVyOiAjY2VjZWNlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 635);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ }),

/***/ 8330:
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"name":"frontend","version":"1.1.2","scripts":{"ng":"ng","start":"ng serve","build":"ng build","watch":"ng build --watch --configuration development","test":"ng test"},"private":true,"dependencies":{"@angular/animations":"^18.2.2","@angular/common":"^18.2.2","@angular/compiler":"^18.2.2","@angular/core":"^18.2.2","@angular/forms":"^18.2.2","@angular/platform-browser":"^18.2.2","@angular/platform-browser-dynamic":"^18.2.2","@angular/router":"^18.2.2","@fortawesome/angular-fontawesome":"^0.15.0","@fortawesome/fontawesome-svg-core":"^6.5.2","@fortawesome/free-brands-svg-icons":"^6.6.0","@fortawesome/free-regular-svg-icons":"^6.6.0","@fortawesome/free-solid-svg-icons":"^6.5.2","axios":"^1.6.6","rxjs":"~7.8.0","tslib":"^2.6.2","zone.js":"^0.15.0"},"devDependencies":{"@angular-devkit/build-angular":"^18.2.2","@angular/cli":"~18.2.2","@angular/compiler-cli":"^18.2.2","@types/jasmine":"^5.1.4","jasmine-core":"^5.2.0","karma":"~6.4.0","karma-chrome-launcher":"~3.2.0","karma-coverage":"~2.2.0","karma-jasmine":"~5.1.0","karma-jasmine-html-reporter":"^2.1.0","typescript":"~5.5.3"}}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map