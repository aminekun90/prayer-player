"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["main"],{

/***/ 3966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);



const routes = [];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
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

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _Users_aminebouzahar_Projects_bluetooth_pi_player_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 9985);
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./env */ 8532);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _piPlayer_service_soCo_so_co_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @piPlayer/service/soCo/so-co.service */ 5573);
/* harmony import */ var _piPlayer_service_prayer_prayer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @piPlayer/service/prayer/prayer.service */ 5656);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 683);
/* harmony import */ var _clock_clock_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./clock/clock.component */ 8275);
/* harmony import */ var _settings_modal_settings_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings-modal/settings-modal.component */ 7737);











const _c0 = ["audioPlayer"];
function AppComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Loading Sonos Devices...");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AppComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Loading bluetooth Devices...");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AppComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Loading Prayers...");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
const _c1 = a0 => ({
  "next": a0
});
function AppComponent_li_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 14)(1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const prayer_r6 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](6, _c1, ctx_r3.getCurrentPrayer() === prayer_r6));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", prayer_r6.getName(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](5, 3, prayer_r6.getTime(), "H:mm"));
  }
}
function AppComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const object_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", object_r7.device.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", object_r7.device.address, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", object_r7.device.peripheral.state, " ");
  }
}
function AppComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 19)(5, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "fa-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "fa-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AppComponent_div_18_Template_div_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r9.modalToggle());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "fa-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const device_r8 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate5"](" ", device_r8.getName(), "", "@", "", device_r8.getIp(), " ", ctx_r5.settings.api.city, " | ", ctx_r5.settings.api.country, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", ctx_r5.faPause);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", ctx_r5.faStop);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", ctx_r5.faCog);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" Selected track: ", device_r8.getPlayingTitle().title, " ");
  }
}
class AppComponent {
  constructor(soCoService, prayerService) {
    this.soCoService = soCoService;
    this.prayerService = prayerService;
    this.faCog = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faCog;
    this.faPlay = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faPlay;
    this.faPause = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faPause;
    this.faStop = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faStop;
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
  }
  areArraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      return false;
    }
    return arr1.every((value, index) => value === arr2[index]);
  }
  handleKeyboardEvent(event) {
    var _this = this;
    return (0,_Users_aminebouzahar_Projects_bluetooth_pi_player_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
    return (0,_Users_aminebouzahar_Projects_bluetooth_pi_player_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
  modalToggle() {
    this.isChildVisible = true;
    console.log("show settings...", this.isChildVisible);
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
    return (0,_Users_aminebouzahar_Projects_bluetooth_pi_player_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("Setting saving...", settings);
      _this3.settings = settings;
      _this3.settings.api.selectedMethod = parseInt(_this3.settings.api.selectedMethod);
      yield _this3.prayerService.saveSetting(_this3.settings);
    })();
  }
  getSettings() {
    var _this4 = this;
    return (0,_Users_aminebouzahar_Projects_bluetooth_pi_player_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("Setting loading...");
      _this4.settings = yield _this4.prayerService.getSettings();
      console.log("Loaded settings", _this4.settings);
    })();
  }
  scanForBle() {
    var _this5 = this;
    return (0,_Users_aminebouzahar_Projects_bluetooth_pi_player_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this5.bleLoading = true;
      yield _this5.soCoService.getBleDevices().then(devices => {
        _this5.bluetoothDevices = devices;
      });
      _this5.bleLoading = false;
    })();
  }
  scanForSonos() {
    var _this6 = this;
    return (0,_Users_aminebouzahar_Projects_bluetooth_pi_player_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this6.deviceLoading = true;
      yield _this6.soCoService.getSoCoDevices().then(devices => {
        _this6.devices = devices;
      });
      _this6.deviceLoading = false;
    })();
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_piPlayer_service_soCo_so_co_service__WEBPACK_IMPORTED_MODULE_2__.SoCoService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_piPlayer_service_prayer_prayer_service__WEBPACK_IMPORTED_MODULE_3__.PrayerService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    viewQuery: function AppComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.audioPlayer = _t.first);
      }
    },
    hostBindings: function AppComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keypress", function AppComponent_keypress_HostBindingHandler($event) {
          return ctx.handleKeyboardEvent($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresolveDocument"])("keydown", function AppComponent_keydown_HostBindingHandler($event) {
          return ctx.handleKeyboardEvent($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresolveWindow"]);
      }
    },
    decls: 24,
    vars: 13,
    consts: [[1, "back"], [1, "container"], [1, "app-welcome"], ["id", "sonos-devices"], ["type", "button", 1, "btn", 3, "disabled", "click"], [1, "fab", "fa-bluetooth"], [4, "ngIf"], [1, "prayers"], ["class", "prayer", 3, "ngClass", 4, "ngFor", "ngForOf"], [3, "settings", "azanList", "isVisible", "devices", "onSave", "isVisibleChange"], [4, "ngFor", "ngForOf"], ["class", "device", 4, "ngFor", "ngForOf"], [1, "copyright"], ["href", "https://github.com/aminekun90"], [1, "prayer", 3, "ngClass"], [1, "name"], [1, "time"], [1, "device"], ["src", "assets/img/symfonisk.jpg", "alt", "SONOS-DEVICE", 1, "picture"], [1, "controls"], [1, "action"], [3, "icon"], [1, "action", 3, "click"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Welcome to Sonos prayer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "app-clock");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 3)(6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AppComponent_Template_button_click_6_listener() {
          return ctx.scanForBle();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, " scan for BLE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AppComponent_Template_button_click_9_listener() {
          return ctx.scanForSonos();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, " Scan for Sonos");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, AppComponent_div_11_Template, 2, 0, "div", 6)(12, AppComponent_div_12_Template, 2, 0, "div", 6)(13, AppComponent_div_13_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, AppComponent_li_15_Template, 6, 8, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "app-settings-modal", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onSave", function AppComponent_Template_app_settings_modal_onSave_16_listener($event) {
          return ctx.saveSettings($event);
        })("isVisibleChange", function AppComponent_Template_app_settings_modal_isVisibleChange_16_listener($event) {
          return ctx.isChildVisible = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, AppComponent_div_17_Template, 7, 3, "div", 10)(18, AppComponent_div_18_Template, 13, 9, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "@aminekun90");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](23, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx.bleLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx.deviceLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.deviceLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.bleLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.prayerLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.prayers);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("settings", ctx.settings)("azanList", ctx.azanList)("isVisible", ctx.isChildVisible)("devices", ctx.devices);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.bluetoothDevices);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.devices);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Sonos player ", ctx.version, " By ");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterOutlet, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__.FaIconComponent, _clock_clock_component__WEBPACK_IMPORTED_MODULE_4__.ClockComponent, _settings_modal_settings_modal_component__WEBPACK_IMPORTED_MODULE_5__.SettingsModalComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe],
    styles: ["@charset \"UTF-8\";\n.btn[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-radius: 980px;\n  text-align: center;\n  display: inline-block;\n  white-space: nowrap;\n  border-color: rgba(0, 0, 0, 0);\n  border-style: solid;\n  border-width: 1px;\n  min-width: 28px;\n  padding-left: 21px;\n  padding-right: 21px;\n  padding-top: 11px;\n  padding-bottom: 11px;\n  --sk-button-margin-horizontal: 18px;\n  --sk-button-margin-vertical: 18px;\n  font-size: 14px;\n  line-height: 1.42859;\n  letter-spacing: -0.016em;\n  font-family: \"SF Pro Text\", \"SF Pro Icons\", \"Helvetica Neue\", \"Helvetica\", \"Arial\", sans-serif;\n  font-weight: 500;\n  background-color: #fff;\n  color: #1d1d1f;\n  cursor: pointer;\n  flex-shrink: 0;\n  margin: 5px;\n}\n.btn[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n  background-color: #fff;\n  color: #1d1d1f;\n  opacity: 0.9;\n  cursor: pointer;\n}\n\n.back[_ngcontent-%COMP%] {\n  width: 100vw;\n  min-height: 100vh;\n  height: 100%;\n  display: block;\n  background-color: #111;\n  color: #ecf0f1;\n}\n\n.checkbox[_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 0;\n}\n.checkbox[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: relative;\n  cursor: pointer;\n  line-height: 20px;\n  padding-left: 30px;\n  font-size: 18px;\n  font-family: sans-serif;\n  color: #666;\n}\n.checkbox[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:before {\n  position: absolute;\n  display: block;\n  left: 0;\n  top: 0;\n  content: \"\";\n  background: transparent;\n  width: 20px;\n  height: 20px;\n  box-shadow: inset 0 0 0 1px #cecece;\n  border-radius: 4px;\n  transition: 200ms ease-in-out all;\n}\n.checkbox[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:after {\n  position: absolute;\n  display: block;\n  top: 5px;\n  left: 8px;\n  content: \"\";\n  width: 3px;\n  height: 7px;\n  border-right: 1px solid transparent;\n  border-bottom: 1px solid transparent;\n  transform: rotate(45deg);\n  transition: 200ms ease-in-out all;\n}\n.checkbox[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:hover {\n  color: #333;\n}\n.checkbox[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.checkbox[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]:before {\n  background: #3498db;\n  box-shadow: none;\n}\n.checkbox[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]:after {\n  border-color: white;\n}\n.checkbox[_ngcontent-%COMP%]:disabled    + label[_ngcontent-%COMP%]:before {\n  background: #f2f2f2;\n  box-shadow: none;\n}\n.checkbox[_ngcontent-%COMP%]:disabled    + label[_ngcontent-%COMP%]:after {\n  border-color: transparent;\n}\n.checkbox[_ngcontent-%COMP%]:checked:disabled    + label[_ngcontent-%COMP%]:before {\n  background: #f2f2f2;\n  box-shadow: none;\n}\n.checkbox[_ngcontent-%COMP%]:checked:disabled    + label[_ngcontent-%COMP%]:after {\n  border-color: #cecece;\n}\n\n.container[_ngcontent-%COMP%] {\n  padding: 20px;\n  width: 600px;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex-grow: 1;\n  flex-shrink: 0;\n  flex-basis: auto;\n}\n@media (max-width: 768px) {\n  .container[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n}\n@media (max-width: 480px) {\n  .container[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.container[_ngcontent-%COMP%]   .app-welcome[_ngcontent-%COMP%] {\n  font-size: 32px;\n  text-align: center;\n  margin-bottom: 20px;\n  color: #ecf0f1;\n}\n.container[_ngcontent-%COMP%]   .app-welcome[_ngcontent-%COMP%]   app-clock[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #e67e22;\n}\n@media (max-width: 768px) {\n  .container[_ngcontent-%COMP%]   .app-welcome[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n}\n@media (max-width: 480px) {\n  .container[_ngcontent-%COMP%]   .app-welcome[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n.container[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin-top: 20px;\n  color: #ecf0f1;\n  flex-grow: 0;\n  flex-shrink: 0;\n  flex-basis: auto;\n}\n.container[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #ecf0f1;\n}\n.container[_ngcontent-%COMP%]   #sonos-devices[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n.container[_ngcontent-%COMP%]   #sonos-devices[_ngcontent-%COMP%]   .prayers[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  margin-bottom: 15px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.container[_ngcontent-%COMP%]   #sonos-devices[_ngcontent-%COMP%]   .prayers[_ngcontent-%COMP%]   .prayer[_ngcontent-%COMP%] {\n  background-color: #3498db;\n  border-radius: 980px;\n  height: 80px;\n  width: 120px;\n  margin: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n  flex-direction: column;\n  color: #ecf0f1;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);\n  transition: background-color 0.3s ease, transform 0.3s ease;\n}\n.container[_ngcontent-%COMP%]   #sonos-devices[_ngcontent-%COMP%]   .prayers[_ngcontent-%COMP%]   .prayer[_ngcontent-%COMP%]:hover {\n  background-color: #217dbb;\n  transform: translateY(-2px);\n  cursor: pointer;\n}\n.container[_ngcontent-%COMP%]   #sonos-devices[_ngcontent-%COMP%]   .prayers[_ngcontent-%COMP%]   .prayer.next[_ngcontent-%COMP%] {\n  background-color: #e67e22;\n}\n.container[_ngcontent-%COMP%]   #sonos-devices[_ngcontent-%COMP%]   .prayers[_ngcontent-%COMP%]   .prayer.next[_ngcontent-%COMP%]:hover {\n  background-color: #bf6516;\n}\n.container[_ngcontent-%COMP%]   #sonos-devices[_ngcontent-%COMP%]   .prayers[_ngcontent-%COMP%]   .prayer[_ngcontent-%COMP%]:nth-child(2n) {\n  margin-right: 0;\n}\n.container[_ngcontent-%COMP%]   #sonos-devices[_ngcontent-%COMP%]   .prayers[_ngcontent-%COMP%]   .prayer[_ngcontent-%COMP%]:nth-child(3) {\n  flex-basis: 100%;\n}\n.container[_ngcontent-%COMP%]   #sonos-devices[_ngcontent-%COMP%]   .prayers[_ngcontent-%COMP%]   .prayer[_ngcontent-%COMP%]:nth-last-child(2) {\n  margin-right: 10px;\n}\n.container[_ngcontent-%COMP%]   #sonos-devices[_ngcontent-%COMP%]   .prayers[_ngcontent-%COMP%]   .prayer[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   #sonos-devices[_ngcontent-%COMP%]   .prayers[_ngcontent-%COMP%]   .prayer[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 5px;\n  font-size: 14px;\n}\n.container[_ngcontent-%COMP%]   #sonos-devices[_ngcontent-%COMP%]   .prayers[_ngcontent-%COMP%]   .prayer[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 16px;\n}\n@media (max-width: 768px) {\n  .container[_ngcontent-%COMP%]   #sonos-devices[_ngcontent-%COMP%]   .prayers[_ngcontent-%COMP%]   .prayer[_ngcontent-%COMP%] {\n    width: 160px;\n  }\n}\n@media (max-width: 480px) {\n  .container[_ngcontent-%COMP%]   #sonos-devices[_ngcontent-%COMP%]   .prayers[_ngcontent-%COMP%]   .prayer[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 10px 0;\n  }\n}\n.container[_ngcontent-%COMP%]   #sonos-devices[_ngcontent-%COMP%]   .device[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  margin-top: 20px;\n  cursor: pointer;\n  text-align: center;\n  padding: 20px;\n  background-color: #3498db;\n  color: #ecf0f1;\n  margin-bottom: 20px;\n  width: 210px;\n  transition: background-color 0.3s ease, transform 0.3s ease;\n}\n.container[_ngcontent-%COMP%]   #sonos-devices[_ngcontent-%COMP%]   .device[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin-bottom: 10px;\n}\n.container[_ngcontent-%COMP%]   #sonos-devices[_ngcontent-%COMP%]   .device[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  text-align: left;\n  margin-top: 10px;\n  color: #2c3e50;\n}\n.container[_ngcontent-%COMP%]   #sonos-devices[_ngcontent-%COMP%]   .device[_ngcontent-%COMP%]   .picture[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  width: 120px;\n  height: 120px;\n  object-fit: cover;\n  margin: 0 auto;\n}\n.container[_ngcontent-%COMP%]   #sonos-devices[_ngcontent-%COMP%]   .device[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 15px;\n}\n.container[_ngcontent-%COMP%]   #sonos-devices[_ngcontent-%COMP%]   .device[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%] {\n  background: black;\n  border-radius: 50%;\n  height: 50px;\n  padding: 10px;\n  width: 50px;\n  margin-right: 5px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 16px;\n  color: white;\n  cursor: pointer;\n  line-height: 16px;\n  transition: color 0.3s ease, transform 0.3s ease;\n}\n.container[_ngcontent-%COMP%]   #sonos-devices[_ngcontent-%COMP%]   .device[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]:hover {\n  color: orange;\n}\n.container[_ngcontent-%COMP%]   #sonos-devices[_ngcontent-%COMP%]   .device[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   .action.play[_ngcontent-%COMP%]::before {\n  content: \"\u23F5\";\n}\n.container[_ngcontent-%COMP%]   #sonos-devices[_ngcontent-%COMP%]   .device[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   .action.pause[_ngcontent-%COMP%]::before {\n  content: \"\u23F8\";\n}\n.container[_ngcontent-%COMP%]   #sonos-devices[_ngcontent-%COMP%]   .device[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   .action.stop[_ngcontent-%COMP%]::before {\n  content: \"\u23F9\";\n}\n.container[_ngcontent-%COMP%]   #sonos-devices[_ngcontent-%COMP%]   .device[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   .action.play-pause[_ngcontent-%COMP%]::before {\n  content: \"\u23EF\";\n}\n.container[_ngcontent-%COMP%]   #sonos-devices[_ngcontent-%COMP%]   .device[_ngcontent-%COMP%]:hover {\n  background-color: #217dbb;\n  transform: translateY(-2px);\n}\n@media (max-width: 600px) {\n  .container[_ngcontent-%COMP%]   #sonos-devices[_ngcontent-%COMP%]   .device[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC9zaGFyZWQvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUVoQjtFQUNFLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0Esd0JBQUE7RUFDQSw4RkFBQTtFQUVBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUVBLGNBQUE7RUFDQSxXQUFBO0FBREY7QUFFRTtFQUNFLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFBSjs7QUFHQTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQ3RDaUI7QURzQ25COztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0FBQ0Y7QUFFRTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJDOUNZO0VEK0NaLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtBQUFKO0FBR0k7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLFdDNURVO0VENkRWLFlDN0RVO0VEK0RWLG1DQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtBQUZOO0FBTUk7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLG1DQUFBO0VBQ0Esb0NBQUE7RUFDQSx3QkFBQTtFQUVBLGlDQUFBO0FBTE47QUFVRTtFQUNFLFdBQUE7QUFSSjtBQVlFO0VBQ0UsYUFBQTtBQVZKO0FBZ0JNO0VBQ0UsbUJDNUdRO0VENkdSLGdCQUFBO0FBZFI7QUFnQk07RUFDRSxtQkFBQTtBQWRSO0FBc0JNO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtBQXBCUjtBQXNCTTtFQUNFLHlCQUFBO0FBcEJSO0FBNEJNO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtBQTFCUjtBQTRCTTtFQUNFLHFCQUFBO0FBMUJSOztBQWdDQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQTdCRjtBQThCRTtFQVZGO0lBV0ksVUFBQTtFQTNCRjtBQUNGO0FBNkJFO0VBZEY7SUFlSSxXQUFBO0VBMUJGO0FBQ0Y7QUEyQkU7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNDL0plO0FEc0luQjtBQTJCSTtFQUNFLGVBQUE7RUFDQSxjQ3JLUztBRDRJZjtBQTRCSTtFQVhGO0lBWUksZUFBQTtFQXpCSjtBQUNGO0FBMkJJO0VBZkY7SUFnQkksZUFBQTtFQXhCSjtBQUNGO0FBMkJFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0NsTGU7RURtTGYsWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQXpCSjtBQTBCSTtFQUNFLHFCQUFBO0VBQ0EsY0N4TGE7QURnS25CO0FBNEJFO0VBQ0UsYUFBQTtBQTFCSjtBQTRCSTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QUExQk47QUE0Qk07RUFDRSx5QkMvTVE7RURnTlIsb0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQ25OVztFRG9OWCx3Q0FBQTtFQUNBLDJEQUFBO0FBMUJSO0FBNEJRO0VBQ0UseUJBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7QUExQlY7QUE2QlE7RUFDRSx5QkNoT0s7QURxTWY7QUE2QlU7RUFDRSx5QkFBQTtBQTNCWjtBQStCUTtFQUNFLGVBQUE7QUE3QlY7QUFnQ1E7RUFDRSxnQkFBQTtBQTlCVjtBQWlDUTtFQUNFLGtCQUFBO0FBL0JWO0FBa0NROztFQUVFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBaENWO0FBbUNRO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0FBakNWO0FBb0NRO0VBckRGO0lBc0RJLFlBQUE7RUFqQ1I7QUFDRjtBQW1DUTtFQXpERjtJQTBESSxXQUFBO0lBQ0EsY0FBQTtFQWhDUjtBQUNGO0FBb0NJO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkNwUlU7RURxUlYsY0MvUWE7RURnUmIsbUJBQUE7RUFDQSxZQUFBO0VBRUEsMkRBQUE7QUFuQ047QUFxQ007RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FBbkNSO0FBc0NNO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNDOVJVO0FEMFBsQjtBQXVDTTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFyQ1I7QUF3Q007RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBdENSO0FBd0NRO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdEQUFBO0FBdENWO0FBd0NVO0VBQ0UsYUFBQTtBQXRDWjtBQXdDVTtFQUNFLFlBQUE7QUF0Q1o7QUF5Q1U7RUFDRSxZQUFBO0FBdkNaO0FBMENVO0VBQ0UsWUFBQTtBQXhDWjtBQTJDVTtFQUNFLFlBQUE7QUF6Q1o7QUE4Q007RUFDRSx5QkFBQTtFQUNBLDJCQUFBO0FBNUNSO0FBOENNO0VBL0VGO0lBZ0ZJLFVBQUE7RUEzQ047QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIkB1c2UgXCJzYXNzOm1hdGhcIjtcbkBpbXBvcnQgXCJzaGFyZWQvc3R5bGVzL3ZhcmlhYmxlc1wiO1xuLmJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDk4MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgbWluLXdpZHRoOiAyOHB4O1xuICBwYWRkaW5nLWxlZnQ6IDIxcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIxcHg7XG4gIHBhZGRpbmctdG9wOiAxMXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTFweDtcbiAgLS1zay1idXR0b24tbWFyZ2luLWhvcml6b250YWw6IDE4cHg7XG4gIC0tc2stYnV0dG9uLW1hcmdpbi12ZXJ0aWNhbDogMThweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS40Mjg1OTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAxNmVtO1xuICBmb250LWZhbWlseTogXCJTRiBQcm8gVGV4dFwiLCBcIlNGIFBybyBJY29uc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIFwiSGVsdmV0aWNhXCIsXG4gICAgXCJBcmlhbFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBjb2xvcjogIzFkMWQxZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAtbXMtZmxleC1uZWdhdGl2ZTogMDtcbiAgZmxleC1zaHJpbms6IDA7XG4gIG1hcmdpbjogNXB4O1xuICAmOmhvdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBjb2xvcjogIzFkMWQxZjtcbiAgICBvcGFjaXR5OiAwLjk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG59XG4uYmFjayB7XG4gIHdpZHRoOiAxMDB2dztcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMTE7XG4gIGNvbG9yOiAkbGlnaHQtdGV4dC1jb2xvcjtcbn1cbi5jaGVja2JveCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3BhY2l0eTogMDtcblxuICAvLyBUZXh0XG4gICYgKyBsYWJlbCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6ICRjaGVja2JveC1zaXplO1xuICAgIHBhZGRpbmctbGVmdDogJGNoZWNrYm94LXNpemUgKyAxMDtcbiAgICBmb250LXNpemU6ICRjaGVja2JveC1zaXplIC0gMjtcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogIzY2NjsgLy8gTGFiZWwgY29sb3VyXG5cbiAgICAvLyBDaGVja2JveFxuICAgICY6YmVmb3JlIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHRvcDogMDtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIHdpZHRoOiAkY2hlY2tib3gtc2l6ZTtcbiAgICAgIGhlaWdodDogJGNoZWNrYm94LXNpemU7XG5cbiAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCAkY2hlY2tib3gtYm9yZGVyO1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgdHJhbnNpdGlvbjogMjAwbXMgZWFzZS1pbi1vdXQgYWxsO1xuICAgIH1cblxuICAgIC8vIFRpY2tcbiAgICAmOmFmdGVyIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgdG9wOiA1cHg7XG4gICAgICBsZWZ0OiA4cHg7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgd2lkdGg6IDNweDtcbiAgICAgIGhlaWdodDogN3B4O1xuICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG5cbiAgICAgIHRyYW5zaXRpb246IDIwMG1zIGVhc2UtaW4tb3V0IGFsbDtcbiAgICB9XG4gIH1cblxuICAvLyBIb3ZlclxuICAmICsgbGFiZWw6aG92ZXIge1xuICAgIGNvbG9yOiAjMzMzO1xuICB9XG5cbiAgLy8gRm9jdXNcbiAgJiArIGxhYmVsOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG5cbiAgLy8gQ2hlY2tlZFxuICAmOmNoZWNrZWQge1xuICAgICYgKyBsYWJlbCB7XG4gICAgICAmOmJlZm9yZSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICRwcmltYXJ5LWNvbG9yO1xuICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgfVxuICAgICAgJjphZnRlciB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gRGlzYWJsZWRcbiAgJjpkaXNhYmxlZCB7XG4gICAgJiArIGxhYmVsIHtcbiAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2YyZjJmMjsgLy8gRGlzYWJsZWQgY29sb3VyXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICB9XG4gICAgICAmOmFmdGVyIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBEaXNhYmxlZCBDaGVja2VkXG4gICY6Y2hlY2tlZDpkaXNhYmxlZCB7XG4gICAgJiArIGxhYmVsIHtcbiAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2YyZjJmMjtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgIH1cbiAgICAgICY6YWZ0ZXIge1xuICAgICAgICBib3JkZXItY29sb3I6ICNjZWNlY2U7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5jb250YWluZXIge1xuICBwYWRkaW5nOiAyMHB4O1xuICB3aWR0aDogNjAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWdyb3c6IDE7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBmbGV4LWJhc2lzOiBhdXRvO1xuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICB3aWR0aDogOTAlOyAvLyBBZGp1c3Qgd2lkdGggZm9yIHNtYWxsZXIgc2NyZWVuc1xuICB9XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgd2lkdGg6IDEwMCU7IC8vIE1ha2UgaXQgZnVsbCB3aWR0aCBmb3IgZXZlbiBzbWFsbGVyIHNjcmVlbnNcbiAgfVxuICAuYXBwLXdlbGNvbWUge1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBjb2xvcjogJGxpZ2h0LXRleHQtY29sb3I7XG5cbiAgICBhcHAtY2xvY2sge1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgY29sb3I6ICRhY2NlbnQtY29sb3I7XG4gICAgfVxuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICBmb250LXNpemU6IDI0cHg7IC8vIEFkanVzdCBmb250IHNpemUgZm9yIHNtYWxsZXIgc2NyZWVuc1xuICAgIH1cblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgICAgZm9udC1zaXplOiAyMHB4OyAvLyBGdXJ0aGVyIGFkanVzdCBmb250IHNpemUgZm9yIGV2ZW4gc21hbGxlciBzY3JlZW5zXG4gICAgfVxuICB9XG5cbiAgLmNvcHlyaWdodCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgY29sb3I6ICRsaWdodC10ZXh0LWNvbG9yO1xuICAgIGZsZXgtZ3JvdzogMDtcbiAgICBmbGV4LXNocmluazogMDtcbiAgICBmbGV4LWJhc2lzOiBhdXRvO1xuICAgIGEge1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgY29sb3I6ICRsaWdodC10ZXh0LWNvbG9yO1xuICAgIH1cbiAgfVxuXG4gICNzb25vcy1kZXZpY2VzIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuXG4gICAgLnByYXllcnMge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgICAucHJheWVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDk4MHB4O1xuICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICAgIHdpZHRoOiAxMjBweDtcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGNvbG9yOiAkbGlnaHQtdGV4dC1jb2xvcjtcbiAgICAgICAgYm94LXNoYWRvdzogMCAycHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2UsIHRyYW5zZm9ybSAwLjNzIGVhc2U7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRwcmltYXJ5LWNvbG9yLCAxMCUpO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAmLm5leHQge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRhY2NlbnQtY29sb3I7XG5cbiAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkYWNjZW50LWNvbG9yLCAxMCUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICY6bnRoLWNoaWxkKDJuKSB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwOyAvLyBSZW1vdmUgcmlnaHQgbWFyZ2luIGZvciBldmVyeSBzZWNvbmQgaXRlbVxuICAgICAgICB9XG5cbiAgICAgICAgJjpudGgtY2hpbGQoMykge1xuICAgICAgICAgIGZsZXgtYmFzaXM6IDEwMCU7IC8vIE9uZSBpdGVtIGluIHRoZSBzZWNvbmQgcm93XG4gICAgICAgIH1cblxuICAgICAgICAmOm50aC1sYXN0LWNoaWxkKDIpIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7IC8vIFJlc3RvcmUgcmlnaHQgbWFyZ2luIGZvciB0aGUgZm91cnRoIGl0ZW0gZnJvbSB0aGUgZW5kXG4gICAgICAgIH1cblxuICAgICAgICAudGltZSxcbiAgICAgICAgLm5hbWUge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7IC8vIEFkZCBtYXJnaW4gYmV0d2VlbiAudGltZSBhbmQgLm5hbWVcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIH1cblxuICAgICAgICAubmFtZSB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgd2lkdGg6IDE2MHB4OyAvLyBBZGp1c3Qgd2lkdGggZm9yIHNtYWxsZXIgc2NyZWVuc1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7IC8vIE1ha2UgaXQgZnVsbCB3aWR0aCBmb3IgZXZlbiBzbWFsbGVyIHNjcmVlbnNcbiAgICAgICAgICBtYXJnaW46IDEwcHggMDsgLy8gQWRkIG1hcmdpbiBiZXR3ZWVuIGl0ZW1zXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuZGV2aWNlIHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7XG4gICAgICBjb2xvcjogJGxpZ2h0LXRleHQtY29sb3I7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgd2lkdGg6IDIxMHB4O1xuXG4gICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZSwgdHJhbnNmb3JtIDAuM3MgZWFzZTtcblxuICAgICAgLm5hbWUge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgIH1cblxuICAgICAgcHJlIHtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgY29sb3I6ICRkYXJrLXRleHQtY29sb3I7XG4gICAgICB9XG5cbiAgICAgIC5waWN0dXJlIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICB3aWR0aDogMTIwcHg7XG4gICAgICAgIGhlaWdodDogMTIwcHg7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgIH1cblxuICAgICAgLmNvbnRyb2xzIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG5cbiAgICAgICAgLmFjdGlvbiB7XG4gICAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2UsIHRyYW5zZm9ybSAwLjNzIGVhc2U7XG5cbiAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGNvbG9yOiBvcmFuZ2U7XG4gICAgICAgICAgfVxuICAgICAgICAgICYucGxheTo6YmVmb3JlIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiw6LCj8K1XCI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJi5wYXVzZTo6YmVmb3JlIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiw6LCj8K4XCI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJi5zdG9wOjpiZWZvcmUge1xuICAgICAgICAgICAgY29udGVudDogXCLDosKPwrlcIjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmLnBsYXktcGF1c2U6OmJlZm9yZSB7XG4gICAgICAgICAgICBjb250ZW50OiBcIsOiwo/Cr1wiO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRwcmltYXJ5LWNvbG9yLCAxMCUpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgICB9XG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgICAgd2lkdGg6IDkwJTsgLy8gQWRqdXN0IHdpZHRoIGZvciBzbWFsbGVyIHNjcmVlbnNcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIiRwcmltYXJ5LWNvbG9yOiAjMzQ5OGRiO1xuJHNlY29uZGFyeS1jb2xvcjogIzJlY2M3MTtcbiRiYWNrZ3JvdW5kLWNvbG9yOiAjZWNmMGYxO1xuJGJvcmRlci1jb2xvcjogI2JkYzNjNztcbiRhY2NlbnQtY29sb3I6ICNlNjdlMjI7XG4kZGFyay10ZXh0LWNvbG9yOiAjMmMzZTUwO1xuJGxpZ2h0LXRleHQtY29sb3I6ICNlY2YwZjE7XG5cbi8vIFZhcmlhYmxlc1xuJGNoZWNrYm94LXNpemU6IDIwcHg7XG4kY2hlY2tib3gtYm9yZGVyOiAjY2VjZWNlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _clock_clock_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clock/clock.component */ 8275);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 683);
/* harmony import */ var _settings_modal_settings_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings-modal/settings-modal.component */ 7737);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);








class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FontAwesomeModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _clock_clock_component__WEBPACK_IMPORTED_MODULE_2__.ClockComponent, _settings_modal_settings_modal_component__WEBPACK_IMPORTED_MODULE_3__.SettingsModalComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FontAwesomeModule]
  });
})();

/***/ }),

/***/ 8275:
/*!******************************************!*\
  !*** ./src/app/clock/clock.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClockComponent: () => (/* binding */ ClockComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class ClockComponent {
  constructor() {
    this.currentTime = '';
  }
  ngOnInit() {
    setInterval(() => {
      this.currentTime = new Date().toLocaleTimeString();
    }, 1000);
  }
  static #_ = this.ɵfac = function ClockComponent_Factory(t) {
    return new (t || ClockComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ClockComponent,
    selectors: [["app-clock"]],
    decls: 1,
    vars: 1,
    template: function ClockComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentTime);
      }
    },
    encapsulation: 2
  });
}

/***/ }),

/***/ 8532:
/*!************************!*\
  !*** ./src/app/env.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   API_URL: () => (/* binding */ API_URL),
/* harmony export */   VERSION: () => (/* binding */ VERSION)
/* harmony export */ });
const API_URL = 'http://localhost:8000';
const VERSION = 'Beta Build.1.0.5';

/***/ }),

/***/ 6444:
/*!**********************************************!*\
  !*** ./src/app/service/http/http.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HttpService: () => (/* binding */ HttpService)
/* harmony export */ });
/* harmony import */ var _Users_aminebouzahar_Projects_bluetooth_pi_player_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ 5486);
/* harmony import */ var _types_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/types */ 5797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);




class HttpService {
  get(url, axiosOption) {
    return (0,_Users_aminebouzahar_Projects_bluetooth_pi_player_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
    return (0,_Users_aminebouzahar_Projects_bluetooth_pi_player_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
  static #_ = this.ɵfac = function HttpService_Factory(t) {
    return new (t || HttpService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: HttpService,
    factory: HttpService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 2786:
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

/***/ 5656:
/*!**************************************************!*\
  !*** ./src/app/service/prayer/prayer.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrayerService: () => (/* binding */ PrayerService)
/* harmony export */ });
/* harmony import */ var _Users_aminebouzahar_Projects_bluetooth_pi_player_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _piPlayer_service_types_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @piPlayer/service/types/types */ 5797);
/* harmony import */ var _piPlayer_service_prayer_models_prayer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @piPlayer/service/prayer/models/prayer */ 2786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _piPlayer_service_http_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @piPlayer/service/http/http.service */ 6444);





class PrayerService {
  constructor(httpService) {
    this.httpService = httpService;
    console.log("Prayer service initialized");
  }
  getAzanList() {
    var _this = this;
    return (0,_Users_aminebouzahar_Projects_bluetooth_pi_player_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
    return (0,_Users_aminebouzahar_Projects_bluetooth_pi_player_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
    return (0,_Users_aminebouzahar_Projects_bluetooth_pi_player_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
    return (0,_Users_aminebouzahar_Projects_bluetooth_pi_player_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
  static #_ = this.ɵfac = function PrayerService_Factory(t) {
    return new (t || PrayerService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_piPlayer_service_http_http_service__WEBPACK_IMPORTED_MODULE_3__.HttpService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: PrayerService,
    factory: PrayerService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 3480:
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

/***/ 5573:
/*!***********************************************!*\
  !*** ./src/app/service/soCo/so-co.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SoCoService: () => (/* binding */ SoCoService)
/* harmony export */ });
/* harmony import */ var _Users_aminebouzahar_Projects_bluetooth_pi_player_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _piPlayer_service_soCo_models_device__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @piPlayer/service/soCo/models/device */ 3480);
/* harmony import */ var _piPlayer_service_types_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @piPlayer/service/types/types */ 5797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _piPlayer_service_http_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @piPlayer/service/http/http.service */ 6444);





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
    return (0,_Users_aminebouzahar_Projects_bluetooth_pi_player_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
    return (0,_Users_aminebouzahar_Projects_bluetooth_pi_player_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const result = yield _this2.httpService.get(`${_piPlayer_service_types_types__WEBPACK_IMPORTED_MODULE_2__.CONFIG.getSoCoDevice}`, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (result.success && result.devices) {
        const devices = result.devices;
        return JSON.parse(devices).map(device => _piPlayer_service_soCo_models_device__WEBPACK_IMPORTED_MODULE_1__.Device.fromJson(device));
      } else {
        return [];
      }
    })();
  }
  playEsterEgg() {
    var _this3 = this;
    return (0,_Users_aminebouzahar_Projects_bluetooth_pi_player_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
  static #_ = this.ɵfac = function SoCoService_Factory(t) {
    return new (t || SoCoService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_piPlayer_service_http_http_service__WEBPACK_IMPORTED_MODULE_3__.HttpService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: SoCoService,
    factory: SoCoService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 5797:
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
  playEsterEgg: "playEsterEgg"
};

/***/ }),

/***/ 7737:
/*!************************************************************!*\
  !*** ./src/app/settings-modal/settings-modal.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsModalComponent: () => (/* binding */ SettingsModalComponent)
/* harmony export */ });
/* harmony import */ var _Users_aminebouzahar_Projects_bluetooth_pi_player_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8849);





const _c0 = ["audioPlayer"];
function SettingsModalComponent_div_0_option_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const method_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", method_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](method_r4.description);
  }
}
function SettingsModalComponent_div_0_option_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const mp3File_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", mp3File_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](mp3File_r5);
  }
}
function SettingsModalComponent_div_0_audio_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "audio", 25, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "source", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Your browser does not support the audio element. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "/" + ctx_r3.settings.playlist.fileName, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function SettingsModalComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1)(1, "h2", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SettingsModalComponent_div_0_Template_div_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r7.modalToggle());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "form", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function SettingsModalComponent_div_0_Template_form_submit_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r9.saveSettings());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5)(7, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "City");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SettingsModalComponent_div_0_Template_input_ngModelChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r10.settings.api.city = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 5)(11, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Country");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SettingsModalComponent_div_0_Template_input_ngModelChange_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r11.settings.api.country = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 5)(15, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Adhan Calculation Method");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "select", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SettingsModalComponent_div_0_Template_select_ngModelChange_17_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r12.settings.api.selectedMethod = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Select adhan calculation method:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, SettingsModalComponent_div_0_option_20_Template, 2, 2, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 5)(22, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Force date:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SettingsModalComponent_div_0_Template_input_ngModelChange_24_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r13.settings.api.forceDate = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 5)(26, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Volume");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SettingsModalComponent_div_0_Template_input_ngModelChange_28_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r14.settings.device.volume = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 5)(30, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SettingsModalComponent_div_0_Template_input_ngModelChange_30_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r15.settings.enableScheduler = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Enable scheduler");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 5)(34, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Adhan:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "select", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SettingsModalComponent_div_0_Template_select_ngModelChange_36_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r16.settings.playlist.fileName = $event);
    })("change", function SettingsModalComponent_div_0_Template_select_change_36_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r17.onMp3FileChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Select an Adhan");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, SettingsModalComponent_div_0_option_39_Template, 2, 2, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, SettingsModalComponent_div_0_audio_40_Template, 4, 1, "audio", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 5)(42, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.settings.api.city)("value", ctx_r0.settings.api.city);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.settings.api.country)("value", ctx_r0.settings.api.country);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.settings.api.selectedMethod);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.settings.calculationMethods);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.settings.api.forceDate)("value", ctx_r0.settings.api.forceDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.settings.device.volume)("value", ctx_r0.settings.device.volume);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.settings.enableScheduler)("value", ctx_r0.settings.enableScheduler);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.settings.playlist.fileName)("value", ctx_r0.settings.playlist.fileName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.azanList);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.settings.playlist.fileName);
  }
}
class SettingsModalComponent {
  constructor() {
    this.onSave = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.isVisibleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.devices = [];
  }
  ngOnInit() {
    return (0,_Users_aminebouzahar_Projects_bluetooth_pi_player_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("setting loaded");
    })();
  }
  modalToggle() {
    this.isVisibleChange.emit();
  }
  saveSettings() {
    var _this = this;
    return (0,_Users_aminebouzahar_Projects_bluetooth_pi_player_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
  static #_ = this.ɵfac = function SettingsModalComponent_Factory(t) {
    return new (t || SettingsModalComponent)();
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
    consts: [["class", "settings", 4, "ngIf"], [1, "settings"], [1, "settings-title"], [1, "close", 3, "click"], [1, "settings-form", 3, "submit"], [1, "form-group"], ["for", "city"], ["name", "city", "type", "text", "id", "city", "placeholder", "Enter your city", 1, "form-control", 3, "ngModel", "value", "ngModelChange"], ["for", "country"], ["name", "country", "type", "text", "id", "country", "placeholder", "Enter your country", 1, "form-control", 3, "ngModel", "value", "ngModelChange"], ["for", "calcMethod"], ["name", "calcMethod", "id", "calcMethod", 1, "form-control", 3, "ngModel", "ngModelChange"], ["value", "", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "selectDate"], ["name", "forceDate", "type", "date", "id", "selectDate", "name", "selectDate", 1, "form-control", 3, "ngModel", "value", "ngModelChange"], ["for", "volume"], ["type", "range", "id", "volume", "name", "volume", "min", "0", "max", "100", 1, "form-control", 3, "ngModel", "value", "ngModelChange"], ["type", "checkbox", "id", "enableScheduler", "name", "enableScheduler", 1, "checkbox", 3, "ngModel", "value", "ngModelChange"], ["for", "enableScheduler"], ["for", "adhan"], ["name", "adhan", "id", "adhan", 1, "form-control", 3, "ngModel", "value", "ngModelChange", "change"], ["controls", "", 4, "ngIf"], ["type", "submit", "name", "save", 1, "btn", "btn-primary"], [3, "value"], ["controls", ""], ["audioPlayer", ""], ["type", "audio/mpeg", 3, "src"]],
    template: function SettingsModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, SettingsModalComponent_div_0_Template, 44, 16, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.devices.length && ctx.isVisible);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RangeValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm],
    styles: [".settings[_ngcontent-%COMP%] {\n  margin-top: 0px;\n  top: 60px;\n  padding: 20px;\n  background-color: #ecf0f1;\n  border: 1px solid transparent;\n  border-radius: 10px;\n  width: 500px;\n  position: absolute;\n  z-index: 10000;\n}\n.settings[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  color: #777;\n  cursor: pointer;\n  float: right;\n}\n.settings[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]:hover {\n  color: black;\n}\n.settings[_ngcontent-%COMP%]   .settings-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #3498db;\n  margin-bottom: 15px;\n}\n.settings[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.settings[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: bold;\n  margin-bottom: 5px;\n  color: #2c3e50;\n}\n.settings[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n  border: 1px solid #bdc3c7;\n  border-radius: 5px;\n  font-size: 16px;\n  color: #2c3e50;\n}\n.settings[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #3498db;\n}\n.settings[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   select.form-control[_ngcontent-%COMP%] {\n  height: 40px;\n}\n.settings[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[type=range].form-control[_ngcontent-%COMP%] {\n  width: calc(100% - 20px);\n}\n.settings[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 12px 24px;\n  font-size: 14px;\n  background-color: #3498db;\n  color: #ecf0f1;\n  border: none;\n  border-radius: 980px;\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n}\n.settings[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\n  background-color: #217dbb;\n}\n@media (max-width: 600px) {\n  .settings[_ngcontent-%COMP%] {\n    width: 90%;\n    left: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2V0dGluZ3MtbW9kYWwvc2V0dGluZ3MtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3NoYXJlZC9zdHlsZXMvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxlQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSx5QkNKaUI7RURLakIsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFERjtBQUVFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUFKO0FBQ0k7RUFDRSxZQUFBO0FBQ047QUFFRTtFQUNFLGVBQUE7RUFDQSxjQ3pCWTtFRDBCWixtQkFBQTtBQUFKO0FBR0U7RUFDRSxtQkFBQTtBQURKO0FBR0k7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNDL0JZO0FEOEJsQjtBQUlJO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNDeENZO0FEc0NsQjtBQUlNO0VBQ0UsYUFBQTtFQUNBLHFCQ2pEUTtBRCtDaEI7QUFNSTtFQUNFLFlBQUE7QUFKTjtBQU9JO0VBQ0Usd0JBQUE7QUFMTjtBQVNFO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJDakVZO0VEa0VaLGNDNURlO0VENkRmLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxzQ0FBQTtBQVBKO0FBU0k7RUFDRSx5QkFBQTtBQVBOO0FBVUU7RUExRUY7SUEyRUksVUFBQTtJQUNBLFVBQUE7RUFQRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uL3NoYXJlZC9zdHlsZXMvdmFyaWFibGVzXCI7XG5cbi5zZXR0aW5ncyB7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgdG9wOiA2MHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvcjtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHdpZHRoOiA1MDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxMDAwMDtcbiAgLmNsb3NlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMHB4O1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgIGNvbG9yOiAjNzc3O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgJjpob3ZlcntcbiAgICAgIGNvbG9yOiBibGFjaztcbiAgICB9XG4gIH1cbiAgLnNldHRpbmdzLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIH1cblxuICAuZm9ybS1ncm91cCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcblxuICAgIGxhYmVsIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICBjb2xvcjogJGRhcmstdGV4dC1jb2xvcjtcbiAgICB9XG5cbiAgICAuZm9ybS1jb250cm9sIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRib3JkZXItY29sb3I7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBjb2xvcjogJGRhcmstdGV4dC1jb2xvcjtcblxuICAgICAgJjpmb2N1cyB7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJHByaW1hcnktY29sb3I7XG4gICAgICB9XG4gICAgfVxuXG4gICAgc2VsZWN0LmZvcm0tY29udHJvbCB7XG4gICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgfVxuXG4gICAgaW5wdXRbdHlwZT1cInJhbmdlXCJdLmZvcm0tY29udHJvbCB7XG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XG4gICAgfVxuICB9XG5cbiAgLmJ0biB7XG4gICAgcGFkZGluZzogMTJweCAyNHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbiAgICBjb2xvcjogJGxpZ2h0LXRleHQtY29sb3I7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDk4MHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcblxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRwcmltYXJ5LWNvbG9yLCAxMCUpO1xuICAgIH1cbiAgfVxuICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICB3aWR0aDogOTAlOyAvLyBBZGp1c3Qgd2lkdGggZm9yIHNtYWxsZXIgc2NyZWVuc1xuICAgIGxlZnQ6MTBweDtcbiAgfVxufVxuIiwiJHByaW1hcnktY29sb3I6ICMzNDk4ZGI7XG4kc2Vjb25kYXJ5LWNvbG9yOiAjMmVjYzcxO1xuJGJhY2tncm91bmQtY29sb3I6ICNlY2YwZjE7XG4kYm9yZGVyLWNvbG9yOiAjYmRjM2M3O1xuJGFjY2VudC1jb2xvcjogI2U2N2UyMjtcbiRkYXJrLXRleHQtY29sb3I6ICMyYzNlNTA7XG4kbGlnaHQtdGV4dC1jb2xvcjogI2VjZjBmMTtcblxuLy8gVmFyaWFibGVzXG4kY2hlY2tib3gtc2l6ZTogMjBweDtcbiRjaGVja2JveC1ib3JkZXI6ICNjZWNlY2U7XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map