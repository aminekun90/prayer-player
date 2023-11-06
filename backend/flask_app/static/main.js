"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["main"],{

/***/ 2899:
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

/***/ 8641:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _Users_aminebouzahar_Projects_bluetooth_pi_player_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./env */ 1128);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _piPlayer_service_soCo_so_co_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @piPlayer/service/soCo/so-co.service */ 8983);
/* harmony import */ var _piPlayer_service_prayer_prayer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @piPlayer/service/prayer/prayer.service */ 1353);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _clock_clock_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./clock/clock.component */ 6884);









const _c0 = ["audioPlayer"];
function AppComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Loading Sonos Players...");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function AppComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Loading Prayers...");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
const _c1 = function (a0) {
  return {
    "next": a0
  };
};
function AppComponent_li_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 10)(1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const prayer_r5 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](6, _c1, ctx_r2.getCurrentPrayer() === prayer_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", prayer_r5.getName(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](5, 3, prayer_r5.getTime(), "H:mm"));
  }
}
function AppComponent_div_9_option_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const method_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", method_r9.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](method_r9.description);
  }
}
function AppComponent_div_9_option_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const mp3File_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", mp3File_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](mp3File_r10);
  }
}
function AppComponent_div_9_audio_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "audio", 32, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "source", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Your browser does not support the audio element. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", "/" + ctx_r8.selectedMp3File, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
  }
}
function AppComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 13)(1, "h2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "form", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("submit", function AppComponent_div_9_Template_form_submit_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r12.saveSettings());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 16)(5, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "City");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function AppComponent_div_9_Template_input_ngModelChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r14.city = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 16)(9, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Country");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function AppComponent_div_9_Template_input_ngModelChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r15.country = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 16)(13, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Adhan Calculation Method");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "select", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function AppComponent_div_9_Template_select_ngModelChange_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r16.calcMethod = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Select adhan calculation method:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, AppComponent_div_9_option_18_Template, 2, 2, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 16)(20, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "Volume");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function AppComponent_div_9_Template_input_ngModelChange_22_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r17.volume = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 16)(24, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "Adhan:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "select", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function AppComponent_div_9_Template_select_ngModelChange_26_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r18.selectedMp3File = $event);
    })("change", function AppComponent_div_9_Template_select_change_26_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r19.onMp3FileChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "Select an Adhan");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](29, AppComponent_div_9_option_29_Template, 2, 2, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](30, AppComponent_div_9_audio_30_Template, 4, 1, "audio", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div", 16)(32, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r3.city);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r3.country);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r3.calcMethod);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r3.settings.calculationMethods);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r3.volume);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r3.selectedMp3File);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r3.azanList);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.selectedMp3File);
  }
}
function AppComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const device_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", device_r20.getName(), "@", device_r20.getIp(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" Selected track: ", device_r20.getPlayingTitle().title, " ");
  }
}
class AppComponent {
  constructor(soCoService, prayerService) {
    this.soCoService = soCoService;
    this.prayerService = prayerService;
    this.title = 'frontend';
    this.devices = [];
    this.prayers = [];
    this.azanList = [];
    this.currentTime = new Date();
    this.settings = {};
    this.country = "";
    this.city = "";
    this.volume = 25;
    this.selectedMp3File = '';
    this.calcMethod = '';
    this.version = _env__WEBPACK_IMPORTED_MODULE_1__.VERSION;
    this.setTimeEverySecond();
    this.soCoService.getSoCoDevices().then(devices => {
      this.devices = devices;
    });
    this.prayerService.getPrayers().then(prayers => {
      this.prayers = prayers;
    });
    this.prayerService.getAzanList().then(list => {
      this.azanList = list;
      console.log(this.azanList);
    });
    this.getSettings();
  }
  onMp3FileChange() {
    const audio = this.audioPlayer?.nativeElement;
    if (audio) {
      audio.pause();
      audio.load();
      audio.play();
    }
  }
  getCurrentPrayer() {
    return this.prayers.find(p => p.getTime() >= new Date());
  }
  setTimeEverySecond() {
    setInterval(() => {
      this.currentTime = new Date();
    }, 1000);
  }
  saveSettings() {
    var _this = this;
    return (0,_Users_aminebouzahar_Projects_bluetooth_pi_player_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("Setting saving...");
      yield _this.prayerService.saveSetting({
        azan: _this.selectedMp3File
      });
    })();
  }
  getSettings() {
    var _this2 = this;
    return (0,_Users_aminebouzahar_Projects_bluetooth_pi_player_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("Setting loading...");
      _this2.settings = yield _this2.prayerService.getSettings();
      _this2.selectedMp3File = _this2.settings?.playlist?.fileName;
      console.log(_this2.settings);
    })();
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_piPlayer_service_soCo_so_co_service__WEBPACK_IMPORTED_MODULE_2__.SoCoService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_piPlayer_service_prayer_prayer_service__WEBPACK_IMPORTED_MODULE_3__.PrayerService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    viewQuery: function AppComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.audioPlayer = _t.first);
      }
    },
    decls: 16,
    vars: 6,
    consts: [[1, "container"], [1, "app-welcome"], ["id", "sonos-devices"], [4, "ngIf"], [1, "prayers"], ["class", "prayer", 3, "ngClass", 4, "ngFor", "ngForOf"], ["class", "settings", 4, "ngIf"], ["class", "device", 4, "ngFor", "ngForOf"], [1, "copyright"], ["href", "https://github.com/aminekun90"], [1, "prayer", 3, "ngClass"], [1, "name"], [1, "time"], [1, "settings"], [1, "settings-title"], [1, "settings-form", 3, "submit"], [1, "form-group"], ["for", "city"], ["type", "text", "id", "city", "placeholder", "Enter your city", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "country"], ["type", "text", "id", "country", "placeholder", "Enter your country", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "calcMethod"], ["name", "calcMethod", "id", "calcMethod", 1, "form-control", 3, "ngModel", "ngModelChange"], ["value", "", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "volume"], ["type", "range", "id", "volume", "min", "0", "max", "100", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "adhan"], ["name", "adhan", "id", "adhan", 1, "form-control", 3, "ngModel", "ngModelChange", "change"], ["controls", "", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-primary"], [3, "value"], ["controls", ""], ["audioPlayer", ""], ["type", "audio/mpeg", 3, "src"], [1, "device"], ["src", "assets/img/symfonisk.jpg", "alt", "SONOS-DEVICE", 1, "picture"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Welcome to Sonos prayer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "app-clock");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, AppComponent_div_5_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, AppComponent_div_6_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, AppComponent_li_8_Template, 6, 8, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, AppComponent_div_9_Template, 34, 8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, AppComponent_div_10_Template, 6, 3, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "@aminekun90");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "router-outlet");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.devices.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.prayers.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.prayers);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.devices.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.devices);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Sonos player ", ctx.version, " By ");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterOutlet, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.RangeValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgForm, _clock_clock_component__WEBPACK_IMPORTED_MODULE_4__.ClockComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe],
    styles: [".container[_ngcontent-%COMP%] {\n  padding: 20px;\n  width: 600px;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.container[_ngcontent-%COMP%]   .app-welcome[_ngcontent-%COMP%] {\n  font-size: 32px;\n  text-align: center;\n  margin-bottom: 20px;\n  color: #3498db;\n}\n.container[_ngcontent-%COMP%]   .app-welcome[_ngcontent-%COMP%]   app-clock[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #e67e22;\n}\n.container[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #2c3e50;\n  margin-top: 20px;\n}\n.container[_ngcontent-%COMP%]   #sonos-devices[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n.container[_ngcontent-%COMP%]   #sonos-devices[_ngcontent-%COMP%]   .prayers[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  margin-bottom: 15px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.container[_ngcontent-%COMP%]   #sonos-devices[_ngcontent-%COMP%]   .prayers[_ngcontent-%COMP%]   .prayer[_ngcontent-%COMP%] {\n  background-color: #3498db;\n  border-radius: 8px;\n  height: 80px;\n  width: 120px;\n  margin: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n  color: #ecf0f1;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);\n  transition: background-color 0.3s ease, transform 0.3s ease;\n}\n.container[_ngcontent-%COMP%]   #sonos-devices[_ngcontent-%COMP%]   .prayers[_ngcontent-%COMP%]   .prayer[_ngcontent-%COMP%]:hover {\n  background-color: #217dbb;\n  transform: translateY(-2px);\n}\n.container[_ngcontent-%COMP%]   #sonos-devices[_ngcontent-%COMP%]   .prayers[_ngcontent-%COMP%]   .prayer.next[_ngcontent-%COMP%] {\n  background-color: #e67e22;\n}\n.container[_ngcontent-%COMP%]   #sonos-devices[_ngcontent-%COMP%]   .prayers[_ngcontent-%COMP%]   .prayer.next[_ngcontent-%COMP%]:hover {\n  background-color: #bf6516;\n}\n.container[_ngcontent-%COMP%]   #sonos-devices[_ngcontent-%COMP%]   .prayers[_ngcontent-%COMP%]   .prayer[_ngcontent-%COMP%]:nth-child(2n) {\n  margin-right: 0;\n}\n.container[_ngcontent-%COMP%]   #sonos-devices[_ngcontent-%COMP%]   .prayers[_ngcontent-%COMP%]   .prayer[_ngcontent-%COMP%]:nth-child(3) {\n  flex-basis: 100%;\n}\n.container[_ngcontent-%COMP%]   #sonos-devices[_ngcontent-%COMP%]   .prayers[_ngcontent-%COMP%]   .prayer[_ngcontent-%COMP%]:nth-last-child(2) {\n  margin-right: 10px;\n}\n.container[_ngcontent-%COMP%]   #sonos-devices[_ngcontent-%COMP%]   .settings[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  padding: 20px;\n  background-color: #ecf0f1;\n  border: 1px solid #bdc3c7;\n  border-radius: 8px;\n  width: 100%;\n}\n.container[_ngcontent-%COMP%]   #sonos-devices[_ngcontent-%COMP%]   .settings[_ngcontent-%COMP%]   .settings-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #3498db;\n  margin-bottom: 15px;\n}\n.container[_ngcontent-%COMP%]   #sonos-devices[_ngcontent-%COMP%]   .settings[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.container[_ngcontent-%COMP%]   #sonos-devices[_ngcontent-%COMP%]   .settings[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: bold;\n  margin-bottom: 5px;\n  color: #2c3e50;\n}\n.container[_ngcontent-%COMP%]   #sonos-devices[_ngcontent-%COMP%]   .settings[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n  border: 1px solid #bdc3c7;\n  border-radius: 5px;\n  font-size: 16px;\n  color: #2c3e50;\n}\n.container[_ngcontent-%COMP%]   #sonos-devices[_ngcontent-%COMP%]   .settings[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #3498db;\n}\n.container[_ngcontent-%COMP%]   #sonos-devices[_ngcontent-%COMP%]   .settings[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   select.form-control[_ngcontent-%COMP%] {\n  height: 40px;\n}\n.container[_ngcontent-%COMP%]   #sonos-devices[_ngcontent-%COMP%]   .settings[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[type=range].form-control[_ngcontent-%COMP%] {\n  width: calc(100% - 20px);\n}\n.container[_ngcontent-%COMP%]   #sonos-devices[_ngcontent-%COMP%]   .settings[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 12px 24px;\n  background-color: #3498db;\n  color: #ecf0f1;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n}\n.container[_ngcontent-%COMP%]   #sonos-devices[_ngcontent-%COMP%]   .settings[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\n  background-color: #217dbb;\n}\n.container[_ngcontent-%COMP%]   #sonos-devices[_ngcontent-%COMP%]   .device[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  cursor: pointer;\n  text-align: center;\n  padding: 20px;\n  background-color: #3498db;\n  color: #ecf0f1;\n  margin-bottom: 20px;\n}\n.container[_ngcontent-%COMP%]   #sonos-devices[_ngcontent-%COMP%]   .device[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin-bottom: 10px;\n}\n.container[_ngcontent-%COMP%]   #sonos-devices[_ngcontent-%COMP%]   .device[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  text-align: left;\n  margin-top: 10px;\n  color: #2c3e50;\n}\n.container[_ngcontent-%COMP%]   #sonos-devices[_ngcontent-%COMP%]   .device[_ngcontent-%COMP%]   .picture[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  width: 120px;\n  height: 120px;\n  object-fit: cover;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFQRjtBQVNFO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQXBCWTtBQWFoQjtBQVNJO0VBQ0UsZUFBQTtFQUNBLGNBcEJTO0FBYWY7QUFXRTtFQUNFLGVBQUE7RUFDQSxjQXpCYztFQTBCZCxnQkFBQTtBQVRKO0FBWUU7RUFDRSxhQUFBO0FBVko7QUFZSTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QUFWTjtBQVlNO0VBQ0UseUJBL0NRO0VBZ0RSLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBbERXO0VBbURYLHdDQUFBO0VBQ0EsMkRBQUE7QUFWUjtBQVlRO0VBQ0UseUJBQUE7RUFDQSwyQkFBQTtBQVZWO0FBYVE7RUFDRSx5QkE5REs7QUFtRGY7QUFhVTtFQUNFLHlCQUFBO0FBWFo7QUFlUTtFQUNFLGVBQUE7QUFiVjtBQWdCUTtFQUNFLGdCQUFBO0FBZFY7QUFpQlE7RUFDRSxrQkFBQTtBQWZWO0FBb0JJO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EseUJBeEZhO0VBeUZiLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBbEJOO0FBb0JNO0VBQ0UsZUFBQTtFQUNBLGNBakdRO0VBa0dSLG1CQUFBO0FBbEJSO0FBcUJNO0VBQ0UsbUJBQUE7QUFuQlI7QUFxQlE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBdkdRO0FBb0ZsQjtBQXNCUTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQWhIUTtBQTRGbEI7QUFzQlU7RUFDRSxhQUFBO0VBQ0EscUJBekhJO0FBcUdoQjtBQXdCUTtFQUNFLFlBQUE7QUF0QlY7QUF5QlE7RUFDRSx3QkFBQTtBQXZCVjtBQTJCTTtFQUNFLGtCQUFBO0VBQ0EseUJBeElRO0VBeUlSLGNBbklXO0VBb0lYLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxzQ0FBQTtBQXpCUjtBQTJCUTtFQUNFLHlCQUFBO0FBekJWO0FBOEJJO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EseUJBMUpVO0VBMkpWLGNBckphO0VBc0piLG1CQUFBO0FBNUJOO0FBOEJNO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQTVCUjtBQStCTTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQWpLVTtBQW9JbEI7QUFnQ007RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBOUJSIiwic291cmNlc0NvbnRlbnQiOlsiJHByaW1hcnktY29sb3I6ICMzNDk4ZGI7XG4kc2Vjb25kYXJ5LWNvbG9yOiAjMmVjYzcxO1xuJGJhY2tncm91bmQtY29sb3I6ICNlY2YwZjE7XG4kYm9yZGVyLWNvbG9yOiAjYmRjM2M3O1xuJGFjY2VudC1jb2xvcjogI2U2N2UyMjtcbiRkYXJrLXRleHQtY29sb3I6ICMyYzNlNTA7XG4kbGlnaHQtdGV4dC1jb2xvcjogI2VjZjBmMTtcblxuLmNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHdpZHRoOiA2MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgLmFwcC13ZWxjb21lIHtcbiAgICBmb250LXNpemU6IDMycHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuXG4gICAgYXBwLWNsb2NrIHtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xuICAgIH1cbiAgfVxuXG4gIC5jb3B5cmlnaHQge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogJGRhcmstdGV4dC1jb2xvcjtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICB9XG5cbiAgI3Nvbm9zLWRldmljZXMge1xuICAgIHBhZGRpbmc6IDEwcHg7XG5cbiAgICAucHJheWVycyB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgIC5wcmF5ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICAgIHdpZHRoOiAxMjBweDtcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGNvbG9yOiAkbGlnaHQtdGV4dC1jb2xvcjtcbiAgICAgICAgYm94LXNoYWRvdzogMCAycHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2UsIHRyYW5zZm9ybSAwLjNzIGVhc2U7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRwcmltYXJ5LWNvbG9yLCAxMCUpO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICAgICAgfVxuXG4gICAgICAgICYubmV4dCB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGFjY2VudC1jb2xvcjtcblxuICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRhY2NlbnQtY29sb3IsIDEwJSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJjpudGgtY2hpbGQoMm4pIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7IC8vIFJlbW92ZSByaWdodCBtYXJnaW4gZm9yIGV2ZXJ5IHNlY29uZCBpdGVtXG4gICAgICAgIH1cblxuICAgICAgICAmOm50aC1jaGlsZCgzKSB7XG4gICAgICAgICAgZmxleC1iYXNpczogMTAwJTsgLy8gT25lIGl0ZW0gaW4gdGhlIHNlY29uZCByb3dcbiAgICAgICAgfVxuXG4gICAgICAgICY6bnRoLWxhc3QtY2hpbGQoMikge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDsgLy8gUmVzdG9yZSByaWdodCBtYXJnaW4gZm9yIHRoZSBmb3VydGggaXRlbSBmcm9tIHRoZSBlbmRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5zZXR0aW5ncyB7XG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgJGJvcmRlci1jb2xvcjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAuc2V0dGluZ3MtdGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgIH1cblxuICAgICAgLmZvcm0tZ3JvdXAge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuXG4gICAgICAgIGxhYmVsIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgICAgY29sb3I6ICRkYXJrLXRleHQtY29sb3I7XG4gICAgICAgIH1cblxuICAgICAgICAuZm9ybS1jb250cm9sIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRib3JkZXItY29sb3I7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICBjb2xvcjogJGRhcmstdGV4dC1jb2xvcjtcblxuICAgICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJHByaW1hcnktY29sb3I7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgc2VsZWN0LmZvcm0tY29udHJvbCB7XG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgaW5wdXRbdHlwZT1cInJhbmdlXCJdLmZvcm0tY29udHJvbCB7XG4gICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5idG4ge1xuICAgICAgICBwYWRkaW5nOiAxMnB4IDI0cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuICAgICAgICBjb2xvcjogJGxpZ2h0LXRleHQtY29sb3I7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkcHJpbWFyeS1jb2xvciwgMTAlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5kZXZpY2Uge1xuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuICAgICAgY29sb3I6ICRsaWdodC10ZXh0LWNvbG9yO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcblxuICAgICAgLm5hbWUge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgIH1cblxuICAgICAgcHJlIHtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgY29sb3I6ICRkYXJrLXRleHQtY29sb3I7XG4gICAgICB9XG5cbiAgICAgIC5waWN0dXJlIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICB3aWR0aDogMTIwcHg7XG4gICAgICAgIGhlaWdodDogMTIwcHg7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 3574:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 2899);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 8641);
/* harmony import */ var _clock_clock_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clock/clock.component */ 6884);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);






class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _clock_clock_component__WEBPACK_IMPORTED_MODULE_2__.ClockComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule]
  });
})();

/***/ }),

/***/ 6884:
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

/***/ 1128:
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
const VERSION = 'Beta Build.1.0.0';

/***/ }),

/***/ 676:
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
/* harmony import */ var _types_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/types */ 5196);
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

/***/ 1252:
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

/***/ 1353:
/*!**************************************************!*\
  !*** ./src/app/service/prayer/prayer.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrayerService: () => (/* binding */ PrayerService)
/* harmony export */ });
/* harmony import */ var _Users_aminebouzahar_Projects_bluetooth_pi_player_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _piPlayer_service_types_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @piPlayer/service/types/types */ 5196);
/* harmony import */ var _piPlayer_service_prayer_models_prayer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @piPlayer/service/prayer/models/prayer */ 1252);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _http_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../http/http.service */ 676);





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
    return new (t || PrayerService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_http_http_service__WEBPACK_IMPORTED_MODULE_3__.HttpService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: PrayerService,
    factory: PrayerService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 5386:
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

/***/ 8983:
/*!***********************************************!*\
  !*** ./src/app/service/soCo/so-co.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SoCoService: () => (/* binding */ SoCoService)
/* harmony export */ });
/* harmony import */ var _Users_aminebouzahar_Projects_bluetooth_pi_player_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _piPlayer_service_soCo_models_device__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @piPlayer/service/soCo/models/device */ 5386);
/* harmony import */ var _piPlayer_service_types_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @piPlayer/service/types/types */ 5196);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _piPlayer_service_http_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @piPlayer/service/http/http.service */ 676);





class SoCoService {
  constructor(httpService) {
    this.httpService = httpService;
    console.log("Soco service initialized");
  }
  getSoCoDevices() {
    var _this = this;
    return (0,_Users_aminebouzahar_Projects_bluetooth_pi_player_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const devices = yield _this.httpService.get(`${_piPlayer_service_types_types__WEBPACK_IMPORTED_MODULE_2__.CONFIG.getSoCoDevice}`, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (devices) {
        return JSON.parse(devices).map(device => _piPlayer_service_soCo_models_device__WEBPACK_IMPORTED_MODULE_1__.Device.fromJson(device));
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

/***/ 5196:
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
  getPrayers: "timings",
  getAzanList: "azanList",
  saveSettings: "saveSettings",
  getSettings: "getSettings"
};

/***/ }),

/***/ 6792:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 3574);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(6792)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map