webpackJsonp([0,4],{

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        // public api_url ="http://138.197.75.58:8888";
        this.api_url = "https://localhost:8080";
        this.username = "Tushar";
        this.loginEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        var currentUser = localStorage.getItem('currentUser');
        this.token = currentUser;
    }
    AuthService.prototype.login = function (username, password) {
        //let headers = new Headers({'Content-Type':'application/json'});
        //let options = new RequestOptions({headers:headers});
        //localStorage.setItem("currentUser","3e3e3e");
        //this.token = "3e3e3e3e";
        //return true;
        var _this = this;
        return this.http.post(this.api_url + "/api/test", { username: username, password: password })
            .map(function (response) {
            if (response.json()) {
                var resp = response.json();
                console.log(resp);
                if (resp.token == "") {
                    _this.loginEvent.emit(false);
                    return false;
                }
                console.log(resp.token);
                _this.token = resp.token;
                localStorage.setItem("currentUser", resp.token);
                _this.loginEvent.emit(true);
                return true;
            }
            // return false;
        });
    };
    AuthService.prototype.register = function (user) {
        return this.http.post(this.api_url + "/api/register", user)
            .map(function (response) {
            console.log(response);
            return response;
        });
    };
    AuthService.prototype.ping = function () {
        return this.http.get("http://localhost:8000/api/authenticate")
            .map(function (response) {
            return response;
        });
    };
    AuthService.prototype.logout = function () {
        this.token = null;
        localStorage.removeItem('currentUser');
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());
//# sourceMappingURL=/Users/tushargarg/Desktop/Web/RadioWebFrontEnd/src/auth.service.js.map

/***/ }),

/***/ 443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(834),
            styles: [__webpack_require__(822)]
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardComponent);
    return DashboardComponent;
}());
//# sourceMappingURL=/Users/tushargarg/Desktop/Web/RadioWebFrontEnd/src/dashboard.component.js.map

/***/ }),

/***/ 444:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashviewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashviewComponent = (function () {
    function DashviewComponent() {
        this.datasets = [{
                "id": 1,
                "title": "data 1"
            },
            {
                "id": 2,
                "title": "data 2"
            }
        ];
        this.clickedChild = false;
    }
    DashviewComponent.prototype.ngOnInit = function () {
    };
    DashviewComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashview',
            template: __webpack_require__(835),
            styles: [__webpack_require__(823)]
        }), 
        __metadata('design:paramtypes', [])
    ], DashviewComponent);
    return DashviewComponent;
}());
//# sourceMappingURL=/Users/tushargarg/Desktop/Web/RadioWebFrontEnd/src/dashview.component.js.map

/***/ }),

/***/ 445:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingComponentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LandingComponentComponent = (function () {
    function LandingComponentComponent() {
    }
    LandingComponentComponent.prototype.ngOnInit = function () {
    };
    LandingComponentComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-landing-component',
            template: __webpack_require__(836),
            styles: [__webpack_require__(824)]
        }), 
        __metadata('design:paramtypes', [])
    ], LandingComponentComponent);
    return LandingComponentComponent;
}());
//# sourceMappingURL=/Users/tushargarg/Desktop/Web/RadioWebFrontEnd/src/landing-component.component.js.map

/***/ }),

/***/ 446:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_auth_service__ = __webpack_require__(178);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponentComponent = (function () {
    function LoginComponentComponent(router, authservice, _fb) {
        this.router = router;
        this.authservice = authservice;
        this._fb = _fb;
    }
    LoginComponentComponent.prototype.ngOnInit = function () {
        this.authservice.logout();
        this.error = false;
        this.loginForm = this._fb.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]]
        });
    };
    LoginComponentComponent.prototype.login = function (event) {
        var _this = this;
        console.log(this.loginForm.get('email').value);
        this.error = false;
        this.authservice.login(this.loginForm.get('email').value, this.loginForm.get('password').value).subscribe(function (result) {
            if (result == true) {
                //this.router.navigate(['dashboard']);
                console.log(result);
            }
            else {
                console.log("error");
                _this.errormessage = "Wrong username/password";
                _this.error = true;
            }
        });
        // this.authservice.ping().subscribe(result=>{
        // console.log(result);
        // });
        //event.preventDefault();
        //return false;
    };
    LoginComponentComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login-component',
            template: __webpack_require__(837),
            styles: [__webpack_require__(825)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__service_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__service_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]) === 'function' && _c) || Object])
    ], LoginComponentComponent);
    return LoginComponentComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/tushargarg/Desktop/Web/RadioWebFrontEnd/src/login-component.component.js.map

/***/ }),

/***/ 447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(116);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarkerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MarkerComponent = (function () {
    function MarkerComponent(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    MarkerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (param) { _this.id = param["id"]; console.log(_this.id); });
    };
    MarkerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-marker',
            template: __webpack_require__(838),
            styles: [__webpack_require__(826)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _b) || Object])
    ], MarkerComponent);
    return MarkerComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/tushargarg/Desktop/Web/RadioWebFrontEnd/src/marker.component.js.map

/***/ }),

/***/ 448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectComponent = (function () {
    function ProjectComponent() {
    }
    ProjectComponent.prototype.ngOnInit = function () {
    };
    ProjectComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-project',
            template: __webpack_require__(839),
            styles: [__webpack_require__(827)]
        }), 
        __metadata('design:paramtypes', [])
    ], ProjectComponent);
    return ProjectComponent;
}());
//# sourceMappingURL=/Users/tushargarg/Desktop/Web/RadioWebFrontEnd/src/project.component.js.map

/***/ }),

/***/ 449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user__ = __webpack_require__(665);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_auth_service__ = __webpack_require__(178);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(router, authservice, _fb) {
        this.router = router;
        this.authservice = authservice;
        this._fb = _fb;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.error = false;
        this.errorMessage = '';
        this.authservice.logout();
        this.registerForm = this._fb.group({
            first: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]],
            last: [''],
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            again: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            prof: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]
        });
    };
    RegisterComponent.prototype.register = function (event) {
        var _this = this;
        this.error = false;
        if (this.registerForm.get('password').value != this.registerForm.get('again').value) {
            this.error = true;
            this.errorMessage = "Your passwords does not match, please try again!";
            return false;
        }
        this.user = new __WEBPACK_IMPORTED_MODULE_3__models_user__["a" /* User */]();
        this.user.email = this.registerForm.get('email').value;
        this.user.first = this.registerForm.get('first').value;
        this.user.last = this.registerForm.get('last').value;
        this.user.password = this.registerForm.get('password').value;
        this.user.prof = this.registerForm.get('prof').value;
        this.authservice.register(this.user)
            .subscribe(function (result) {
            _this.error = true;
            _this.errorMessage = "Contacted Server";
        });
    };
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(840),
            styles: [__webpack_require__(828)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__service_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__service_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]) === 'function' && _c) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/tushargarg/Desktop/Web/RadioWebFrontEnd/src/register.component.js.map

/***/ }),

/***/ 450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TeamComponent = (function () {
    function TeamComponent() {
    }
    TeamComponent.prototype.ngOnInit = function () {
    };
    TeamComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-team',
            template: __webpack_require__(841),
            styles: [__webpack_require__(829)]
        }), 
        __metadata('design:paramtypes', [])
    ], TeamComponent);
    return TeamComponent;
}());
//# sourceMappingURL=/Users/tushargarg/Desktop/Web/RadioWebFrontEnd/src/team.component.js.map

/***/ }),

/***/ 502:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 502;


/***/ }),

/***/ 503:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(666);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(632);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(664);



// if (environment.production) {
//   enableProdMode();
// }
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/tushargarg/Desktop/Web/RadioWebFrontEnd/src/main.js.map

/***/ }),

/***/ 662:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_landing_component_landing_component_component__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_login_component_login_component_component__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_register_register_component__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_dashboard_dashboard_component__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_team_team_component__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_project_project_component__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_marker_marker_component__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_dashview_dashview_component__ = __webpack_require__(444);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var routes = [
    {
        path: '',
        children: [],
        component: __WEBPACK_IMPORTED_MODULE_2__components_landing_component_landing_component_component__["a" /* LandingComponentComponent */]
    },
    {
        path: 'login',
        children: [],
        component: __WEBPACK_IMPORTED_MODULE_3__components_login_component_login_component_component__["a" /* LoginComponentComponent */]
    },
    {
        path: 'register',
        component: __WEBPACK_IMPORTED_MODULE_4__components_register_register_component__["a" /* RegisterComponent */]
    },
    {
        path: 'dashboard',
        component: __WEBPACK_IMPORTED_MODULE_5__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
        children: [
            {
                path: 'data/:id',
                component: __WEBPACK_IMPORTED_MODULE_8__components_marker_marker_component__["a" /* MarkerComponent */]
            },
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_9__components_dashview_dashview_component__["a" /* DashviewComponent */]
            }
        ]
    },
    {
        path: 'team',
        component: __WEBPACK_IMPORTED_MODULE_6__components_team_team_component__["a" /* TeamComponent */]
    },
    {
        path: 'projects',
        component: __WEBPACK_IMPORTED_MODULE_7__components_project_project_component__["a" /* ProjectComponent */]
    },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
//# sourceMappingURL=/Users/tushargarg/Desktop/Web/RadioWebFrontEnd/src/app-routing.module.js.map

/***/ }),

/***/ 663:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_auth_service__ = __webpack_require__(178);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(router, authService) {
        this.router = router;
        this.authService = authService;
        this.title = 'RadioWeb!';
        this.isScrolled = false;
        this.isover = false;
        this.currPos = 0;
        this.startPos = 0;
        this.changePos = 10;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        if (localStorage.getItem("currentUser")) {
            this.loggedin = true;
            this.router.navigate(['/dashboard']);
        }
        else {
            this.loggedin = false;
        }
        this.user = this.authService.username;
        this.authService.loginEvent.subscribe(function (data) {
            _this.loggedin = data;
            if (data) {
                console.log("going to places");
                _this.router.navigate(['/dashboard']);
            }
        });
    };
    AppComponent.prototype.logout = function () {
        this.loggedin = false;
        //this.authService.logout();
        localStorage.removeItem("currentUser");
        this.router.navigate(['/']);
    };
    AppComponent.prototype.updateHeader = function (evt) {
        this.currPos = (window.pageYOffset || evt.target.scrollTop) - (evt.target.clientTop || 0);
        if (this.currPos >= this.changePos) {
            this.isScrolled = true;
        }
        else {
            this.isScrolled = false;
        }
        if (this.currPos >= 500) {
            this.isover = true;
        }
        else {
            this.isover = false;
        }
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(833),
            styles: [__webpack_require__(821)],
            host: {
                '(window:scroll)': 'updateHeader($event)'
            }
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__service_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/tushargarg/Desktop/Web/RadioWebFrontEnd/src/app.component.js.map

/***/ }),

/***/ 664:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(616);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_clarity_angular__ = __webpack_require__(667);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_clarity_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_clarity_angular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(663);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_landing_component_landing_component_component__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_login_component_login_component_component__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing_module__ = __webpack_require__(662);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_register_register_component__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__service_auth_service__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_dashboard_dashboard_component__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_team_team_component__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_project_project_component__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_marker_marker_component__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_dashview_dashview_component__ = __webpack_require__(444);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_landing_component_landing_component_component__["a" /* LandingComponentComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_login_component_login_component_component__["a" /* LoginComponentComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_team_team_component__["a" /* TeamComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_project_project_component__["a" /* ProjectComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_marker_marker_component__["a" /* MarkerComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_dashview_dashview_component__["a" /* DashviewComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_9__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_5_clarity_angular__["ClarityModule"].forRoot()
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_11__service_auth_service__["a" /* AuthService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/tushargarg/Desktop/Web/RadioWebFrontEnd/src/app.module.js.map

/***/ }),

/***/ 665:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
    }
    return User;
}());
//# sourceMappingURL=/Users/tushargarg/Desktop/Web/RadioWebFrontEnd/src/user.js.map

/***/ }),

/***/ 666:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(681);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(674);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(670);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(676);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(675);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(673);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(672);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(680);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(669);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(668);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(678);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(671);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(679);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(677);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(682);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(884);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/Users/tushargarg/Desktop/Web/RadioWebFrontEnd/src/polyfills.js.map

/***/ }),

/***/ 821:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(28)();
// imports


// module
exports.push([module.i, "header{\n    -webkit-transition: background-color 0.5s ease-in;\n    transition: background-color 0.5s ease-in;\n}\n.branding a{\n    color: white;\n}\n.navbar-light .navbar-nav .nav-link\n{\n    color: white;\n}\n.navbar-light  .navbar-brand\n{\n    color: white;\n}\n.active{\n    text-decoration: underline;\n}\n.scrolled{\n    background-color: #006A91;\n    opacity: 1;\n    \n\n}\n.over{\n    box-shadow:         0px 3px 5px rgba(100, 100, 100, 0.49);\n}\n.btn-primary{\n    border-radius: 0px;\n}\n.dropdown-menu{\n    padding: 5px;\n}\n#main-content{\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 822:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(28)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 823:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(28)();
// imports


// module
exports.push([module.i, ".display-3{\n    margin-top: 20px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 824:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(28)();
// imports


// module
exports.push([module.i, ".jumbotron{\n    border-radius: 0px;\n    min-height: 500px;\n    background-color: #007CBB;\n    color: white;\n}\n.col-sm-6{\n    margin: 10px;\n}\n#main-content{\n    margin-top: 0px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 825:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(28)();
// imports


// module
exports.push([module.i, "body{\n    background-color: #F9F9F9;\n}\n#headings{\n    padding: 30px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n}\n#register{\n    margin-left: auto;\n    margin-right: auto;\n    text-align: center;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 826:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(28)();
// imports


// module
exports.push([module.i, ".container{\n    margin-top: 20px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 827:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(28)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 828:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(28)();
// imports


// module
exports.push([module.i, ".container{\n    margin-top: 80px;\n}\n.input-group>input{\n    width: 196px;\n    margin : 10px;\n    margin-left: 0px;\n}\nform{\n    padding: 10px;\n}\n.form-group>input{\n    width: 100%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 829:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(28)();
// imports


// module
exports.push([module.i, "\nimg{\n    height: 100px;\n    width : 100px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 833:
/***/ (function(module, exports) {

module.exports = "<div>\n  <header class=\"header-6\" [ngClass] = \"{'scrolled' : isScrolled, 'fixed-top' : isScrolled, 'over' : isover}\">\n    <div class=\"branding\"><a class=\"navbar-brand\" routerLink=\"/\">RadioWeb</a></div>\n    <div class=\"header-nav\">\n            <a routerLink=\"/team\" routerLinkActive=\"active\" class=\"nav-link nav-text\">Team</a>\n            <a routerLink=\"/projects\" routerLinkActive=\"active\" class=\"nav-link nav-text\" >Projects</a>\n        </div>\n    <div class=\"header-actions\">\n        <a  class=\"nav-link nav-text\" routerLink=\"/login\" routerLinkActive=\"active\" *ngIf=\"!loggedin\">Login</a>\n        <a class=\"nav-link nav-text\" routerLink=\"/register\" routerLinkActive=\"active\" *ngIf=\"!loggedin\">Sign Up</a>\n          <clr-dropdown *ngIf=\"loggedin\">\n      <button class=\"btn btn-info\" clrDropdownToggle>\n          {{user}}\n      </button>\n      <div class=\"dropdown-menu\">\n          <label class=\"dropdown-header\">Options</label>\n          <a href=\"...\" clrDropdownItem>Settings</a>\n          <a href=\"...\" clrDropdownItem>Help</a>\n          <div class=\"dropdown-divider\"></div>\n          <a href=\"\" clrDropdownItem (click) = \"logout()\">logout</a>\n      </div>\n      </clr-dropdown>\n        </div>\n  </header>\n  <nav class=\"subnav\" *ngIf=\"loggedin\">\n    <ul class=\"nav\">\n        <li class=\"nav-item\">\n            <a class=\"nav-link active\" href=\"\" routerLink=\"/dashboard\" routerLinkActive=\"active\">Dashboard</a>\n        </li>\n    </ul>\n  </nav>\n<div id=\"main-content\" class=\"content-container\">\n<router-outlet></router-outlet>\n</div>\n</div>"

/***/ }),

/***/ 834:
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"container\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ 835:
/***/ (function(module, exports) {

module.exports = "<div class=\"card col-sm-8\">\n<h1 class=\"display-3\">Available Datasets</h1>\n      <ul>\n      <a *ngFor = \"let item of datasets\" [routerLink] = \"['data', item.id]\">\n      <div class=\"card-block\">{{item.title}}</div>\n      </a>\n      </ul>\n      </div>"

/***/ }),

/***/ 836:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n  <h1 class=\"display-1\">Radiology Datasets</h1>\n  <h2 class=\"display-4\">Better annotated datasets for research and machine learning</h2>\n</div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n          <h2>Who we are?</h2><br>\n          <h6>INNOVATIVE</h6>\n          <p>Founded in 2016, ours is a India-based company exploring the use of deep learning in medical field.</p>\n          <h6>STRONG TEAMWORK</h6>\n          <p>Our team is a group of academicians and researchers met while working at Panjab University working on different projects. They eventually shifted on deep machine learning realizing that it is the future and could be applied to different real-life problems especially in the medical field. Our solutions aims to help doctors and patients by providing quality healthcare to every person.</p>\n          <h6>ENTERPRISING</h6>\n          <p>We are currently working with India's top hospitals like PGIMS, Medanta, Fortis Hospital to collect medical data and develop healthcare solution based on deep machine learning. We are also prviding a portal where new radiologists can enhance their interpretation skills using experience of others incorporated in our vast annotated dataset. These solutions will assits them in diagnosing diseases in patients.</p>\n      </div>\n      <div class=\"col-sm-6\"></div>\n    </div>\n  </div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-6\"></div>\n      <div class=\"col-sm-6\">\n        <h2>Mission</h2>\n        <p>Lot of medical data is being processed by the medical institutes every year which remains unused since it is not shared. Our mission is to use this unshared data which will fasten the treatment process and will also increase the ability of doctors to interpret medical data. Our product on one hand will allow the hospitals and individual doctors to provide the medical data and annotate it to describe the abnormality. On the other hand, new radiologists will be able to learn using the dataset annotated by the experts and various companies can also buy the annotated medical data to use in their products. The quality and quantity of the dataset will rapidly increase as each image will have annotations from group of radiologists. The shared data will be used to train a deep learning solution and it will create a solution which can be used to assist radiologists and also help in training of the new trainees.</p>\n      </div>\n    </div>\n  </div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <h2>Solutions we provide</h2>\n        <p>We work with wide range of partners and data providers to develop decision support systems using deep learning. Our technology incorporates different type of unstructured medical data such as radiology images, medical reports, laboratory results and patient histories. The more amount of data allows higher accuracy and deeper knowledge about each patient. We provide solutions which integrates effortlessly with your existing healthcare infrastructure. Ours solutions are explained below:</p>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-6\"></div>\n      <div class=\"col-sm-4\">\n        <h5>Real-time Clinical Support</h5>\n        <p>Millions of Indian population is effected every year due to cognitive and perpetual diagnostic errors. These errors can be greatly reduced if an efficient and accurate support system is available for doctors. Our real-time clinical support solutions provide automatic analysis to help doctors diagnose intriguing cases.</p>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-4\">\n        <h5>Screening programs</h5>\n        <p>Many persons develop a specific disease since it is not diagnosed at an early stage. In India, medical facilities in rural areas are very poor and also presence of expert doctor opinion is also rare. Hence we are working on providing screening solutions which can analyze quickly to highlight suspicious areas and recommend the patient to visit hospital if there is feasible chance of presence of any abnormality.</p>\n      </div>\n      <div class=\"col-sm-6\"></div>\n    </div>\n    <div class=\"row\">\n       <div class=\"col-sm-6\"></div>\n      <div class=\"col-sm-4\">\n        <h5>Learn and Earn</h5>\n        <p>Radiology suffers from high error rates as studies show that false positive rates can be up to 2% while false negative rates can exceed 25%. Using our solution, you can train your new radiologists and trainees to practise on vast dataset of varied type which provide different challenges in interpreting. Hospitals and doctors can also support us by providing annotated data which will help in expanded our data source and they can also earn some money in the process.</p>\n      </div>\n    </div>\n  </div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <h2>Areas of Research</h2>\n        <p>Our team's main research interest is applying deep machine learning to provide state-of-art solutions in different fields. Currently we are working in the field of medical image analysis using different modalities. Other general area of interest includes image processing and computer vision.</p>\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ 837:
/***/ (function(module, exports) {

module.exports = "<md-card class =\"form-container container card col-sm-4\" > \n  <div id=\"headings\" class=\"text-center\">\n  <h2 >Sign in to RadioWeb</h2>\n  <h6>Enter your <b>email address</b> and <b>password</b></h6>\n  </div>\n  <h6 *ngIf=\"error\" class=\"alert alert-danger\">{{errormessage}}</h6>\n  <form name=\"form\" [formGroup] = \"loginForm\" (ngSubmit) = \"login($event)\">\n  <section class=\"form-block \">\n  <div class=\"form-group\">\n    <label for=\"exampleInputEmail1\" class=\"\">Email</label>\n    <input name=\"email\" type=\"email\" formControlName=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" placeholder=\"you@domain.com\" size=\"45\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"exampleInputPassword1\">Password</label>\n    <input type=\"password\" name=\"password\" formControlName=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"password\">\n  </div>\n  <button type=\"submit\" class=\"btn btn-success\">Sign In</button>\n  </section>\n</form>\n<div id = \"register\">\n  <p><a routerLink=\"/register\" routerLinkActive=\"active\" >Register</a> for RadioWeb</p>\n</div>\n</md-card>"

/***/ }),

/***/ 838:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<button class = \"btn btn-primary\" [routerLink] = \"['/dashboard']\"> &lt; Back </button>\n<p>\n  The id is {{id}}\n</p>\n</div>\n"

/***/ }),

/***/ 839:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2>Projects</h2>\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <p>Our team has completed various projects sponsored by government as well as coorporate sectors  in the field of image processing, computer vission, vehicular communication and machine learning.</p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 840:
/***/ (function(module, exports) {

module.exports = "<md-card class=\"container col-sm-4 \">\n  <div id=\"headings\" class=\"text-center\">\n    <h2>Register to RadioWeb</h2>\n    <p *ngIf=\"error\">{{errorMessage}}</p>\n  </div>\n    <form [formGroup]=\"registerForm\" (ngSubmit)=\"register($event)\">\n      <div class=\"input-group \"><input type=\"text\" class=\"form-control\" placeholder=\"first name\" formControlName=\"first\"><input type=\"text\" class=\"form-control\"placeholder=\"last name\" formControlName=\"last\"></div>\n      <div class=\"form-group\">\n        <label for=\"email\">Email</label>\n        <input type=\"email\"class=\"form-control\" placeholder=\"you@domain.com\" formControlName=\"email\" id=\"email\"></div>\n      <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\" class=\"form-control\"placeholder=\"******\" formControlName=\"password\" id=\"password\"></div>\n      <div class=\"form-group\">\n        <label for=\"passwordA\">Enter the password again</label>\n        <input type=\"password\"class=\"form-control\" placeholder=\"******\" formControlName=\"again\" id=\"passwordA\"></div>\n      <div class=\"form-group\">\n        <label for=\"prof\">Enter your Profession</label>\n        <select name=\"profession\" id=\"\" class=\"form-control\"placeholder=\"profession\" formControlName=\"prof\" id=\"prof\">\n        <option value=\"Doctor\">Doctor</option>\n        <option value=\"Student\">Student</option>\n        <option value=\"Professor\">Professor</option>\n        <option value=\"Company\">Company</option>\n        </select></div>\n      <button type=\"submit\" class=\"btn btn-success form-control\" >Register</button>\n    </form>\n</md-card>"

/***/ }),

/***/ 841:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<h1>Team</h1>\n<p>Our team is an award-winning team of academicians and researchers working to practice machine learning in the field of image processing and medical image analysis.</p>\n<div id=\"images\" class=\"container text-center\">\n  <div class=\"row\">\n    <md-card div class=\"col-sm-4\">\n      <img src=\"http://www.motormasters.info/wp-content/uploads/2015/02/dummy-profile-pic-male1.jpg\" alt=\"\">\n      <p>Dr. Ajay Mittal</p>\n    </md-card>\n    <md-card class=\"col-sm-4\">\n      <img src=\"http://www.motormasters.info/wp-content/uploads/2015/02/dummy-profile-pic-male1.jpg\" alt=\"\">\n      <p>Dr. Naveen Aggarwal</p>\n    </md-card>\n    <md-card class=\"col-sm-4\">\n      <img src=\"http://www.motormasters.info/wp-content/uploads/2015/02/dummy-profile-pic-male1.jpg\" alt=\"\">\n      <p>Dr. Akashdeep</p>\n    </md-card>\n  </div>\n</div>\n</div>"

/***/ }),

/***/ 885:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(503);


/***/ })

},[885]);
//# sourceMappingURL=main.bundle.js.map