(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/webpack/hot sync ^\\.\\/log$":
/*!*************************************************!*\
  !*** (webpack)/hot sync nonrecursive ^\.\/log$ ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./log": "./node_modules/webpack/hot/log.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/webpack/hot sync ^\\.\\/log$";

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Components/game-form/game-form.component.css":
/*!**************************************************************!*\
  !*** ./src/app/Components/game-form/game-form.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvZ2FtZS1mb3JtL2dhbWUtZm9ybS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/Components/game-form/game-form.component.html":
/*!***************************************************************!*\
  !*** ./src/app/Components/game-form/game-form.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\" col-md-4 offset-md-2\">\n  <div class=\"card \">\n    <div class=\"card-body\">\n      <form>\n        <div class=\"form-group\">\n          <input class=\"form-control\" [(ngModel)]=\"game.title\" type=\"text\" name=\"Title\" placeholder=\"Title\" autofocus>\n        </div>\n        <div class=\"form-group\">\n          <textarea class=\"form-control\" [(ngModel)]=\"game.description\" type=\"\" name=\"Title\" placeholder=\"Description\"\n            rows=\"2\"></textarea>\n        </div>\n        <div class=\"form-group\">\n          <input class=\"form-control\" [(ngModel)]=\"game.image\" type=\"url\" name=\"img\" placeholder=\"Imag\">\n        </div>\n        <button class=\"btn btn-success btn-block\" (click)=\"saveNweGame()\">Save</button>\n      </form>\n    </div>\n  </div>\n</div>\n\n\n<div class=\" col-md-4 \">\n  <div class=\"card \">\n    <div class=\"card-body text-center\">\n      <img [src]=\"game.image == '' ? './assets/no-image-icon-4.png' : game.image\" alt=\"\" class=\"card-img-top\">\n      <h3>{{game.id}} . {{game.title == '' ? 'Game Title' : game.title}}</h3>\n      <p>{{game.description == '' ? 'Game Description' : game.description}}</p>\n      <p>{{game.created_at | date: 'yyyy-MM-dd'}}</p>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/Components/game-form/game-form.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/Components/game-form/game-form.component.ts ***!
  \*************************************************************/
/*! exports provided: GameFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameFormComponent", function() { return GameFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Services_games_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/games.service */ "./src/app/Services/games.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var GameFormComponent = /** @class */ (function () {
    function GameFormComponent(gameService, route, activeRouter) {
        this.gameService = gameService;
        this.route = route;
        this.activeRouter = activeRouter;
        this.clases = 'row';
        this.game = {
            id: 0,
            title: '',
            description: '',
            image: '',
            created_at: new Date()
        };
    }
    GameFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        var params = this.activeRouter.snapshot.params;
        if (params.id) {
            debugger;
            this.gameService.getGame(params.id).subscribe(function (res) {
                console.log(res);
                _this.game = res;
            }, function (err) {
                console.log(err);
            });
        }
    };
    GameFormComponent.prototype.saveNweGame = function () {
        var _this = this;
        delete this.game.created_at;
        delete this.game.id;
        this.gameService.saveGame(this.game).subscribe(function (res) {
            console.log(res);
            _this.route.navigate(['/games']);
        }, function (err) {
            console.log(err);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GameFormComponent.prototype, "clases", void 0);
    GameFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-game-form',
            template: __webpack_require__(/*! ./game-form.component.html */ "./src/app/Components/game-form/game-form.component.html"),
            styles: [__webpack_require__(/*! ./game-form.component.css */ "./src/app/Components/game-form/game-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_Services_games_service__WEBPACK_IMPORTED_MODULE_2__["GamesService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], GameFormComponent);
    return GameFormComponent;
}());



/***/ }),

/***/ "./src/app/Components/game-list/game-list.component.css":
/*!**************************************************************!*\
  !*** ./src/app/Components/game-list/game-list.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvZ2FtZS1saXN0L2dhbWUtbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/Components/game-list/game-list.component.html":
/*!***************************************************************!*\
  !*** ./src/app/Components/game-list/game-list.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-4\" *ngFor=\"let game of games\">\n  <div class=\"card text-center\" >\n    <div class=\"card-header bg-dark text-white d-flex justify-content-between align-items-center\">\n      {{game.TITLE}}\n      <button class=\"btn btn-danger\" (click)=\"deleteGame(game.ID)\">\n        <i class=\"far fa-trash-alt\"></i>\n      </button>\n    </div>\n    <img class=\"card-img-top\" [src]=\"game.IMAGE\" style=\"width: auto; height: 400px;\">\n    <div class=\"card-body\">\n      <p>{{game.DESCRIPTION}}</p>\n      <p>Created At {{game.CREATED_AT | date: 'yyyy-MM-dd'}}</p>\n      <a [routerLink]=\"['/games/edit',game.ID]\" class=\"btn btn-info btn-block\">\n        EDIT GAME\n      </a>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/Components/game-list/game-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/Components/game-list/game-list.component.ts ***!
  \*************************************************************/
/*! exports provided: GameListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameListComponent", function() { return GameListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_games_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/games.service */ "./src/app/Services/games.service.ts");



var GameListComponent = /** @class */ (function () {
    function GameListComponent(gameServide) {
        this.gameServide = gameServide;
        this.clases = 'row';
        this.games = [];
    }
    GameListComponent.prototype.ngOnInit = function () {
        this.getGame();
    };
    GameListComponent.prototype.getGame = function () {
        var _this = this;
        this.gameServide.getGames().subscribe(function (res) {
            _this.games = res;
            // console.log(res);
        }, function (err) { return console.log(err); });
    };
    GameListComponent.prototype.deleteGame = function (id) {
        var _this = this;
        console.log(id);
        this.gameServide.deleteGame(id).subscribe(function (res) {
            console.log(res);
            _this.getGame();
        }, function (err) {
            console.warn(err);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GameListComponent.prototype, "clases", void 0);
    GameListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-game-list',
            template: __webpack_require__(/*! ./game-list.component.html */ "./src/app/Components/game-list/game-list.component.html"),
            styles: [__webpack_require__(/*! ./game-list.component.css */ "./src/app/Components/game-list/game-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Services_games_service__WEBPACK_IMPORTED_MODULE_2__["GamesService"]])
    ], GameListComponent);
    return GameListComponent;
}());



/***/ }),

/***/ "./src/app/Components/navigation/navigation.component.css":
/*!****************************************************************!*\
  !*** ./src/app/Components/navigation/navigation.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/Components/navigation/navigation.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/Components/navigation/navigation.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark\" style=\"background-color: #563d7c;\">\n  <div class=\"container\">\n    <a class=\"navbar-brand\" [routerLink]=\"['/']\">Mysql Crud</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\"\n      aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['/games']\" > <i class=\"fas fa-gamepad fa-2x\"></i> Games</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['/games/add']\" ><i class=\"fas fa-plus-circle fa-2x\"></i>Add Game</a>\n        </li>\n        <!-- <li class=\"nav-item\">\n          <a class=\"nav-link disabled\" href=\"#\" tabindex=\"-1\" aria-disabled=\"true\">Disabled</a>\n        </li> -->\n      </ul>\n    </div>\n  </div>\n\n</nav>"

/***/ }),

/***/ "./src/app/Components/navigation/navigation.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/Components/navigation/navigation.component.ts ***!
  \***************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavigationComponent = /** @class */ (function () {
    function NavigationComponent() {
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/Components/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.css */ "./src/app/Components/navigation/navigation.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/Services/games.service.ts":
/*!*******************************************!*\
  !*** ./src/app/Services/games.service.ts ***!
  \*******************************************/
/*! exports provided: GamesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamesService", function() { return GamesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var GamesService = /** @class */ (function () {
    function GamesService(http) {
        this.http = http;
        this.API_URL = 'http://localhost:3000/api';
    }
    GamesService.prototype.getGames = function () {
        return this.http.get(this.API_URL + "/games");
    };
    GamesService.prototype.getGame = function (id) {
        return this.http.get(this.API_URL + "/games/" + id);
    };
    GamesService.prototype.deleteGame = function (id) {
        return this.http.delete(this.API_URL + "/games/" + id);
    };
    GamesService.prototype.saveGame = function (game) {
        return this.http.post(this.API_URL + "/games/", game);
    };
    GamesService.prototype.updateGame = function (id, updategame) {
        return this.http.put(this.API_URL + "/games/" + id, updategame);
    };
    GamesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], GamesService);
    return GamesService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Components_game_list_game_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/game-list/game-list.component */ "./src/app/Components/game-list/game-list.component.ts");
/* harmony import */ var _Components_game_form_game_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Components/game-form/game-form.component */ "./src/app/Components/game-form/game-form.component.ts");





var routes = [
    { path: '', redirectTo: '/games', pathMatch: 'full' },
    { path: 'games', component: _Components_game_list_game_list_component__WEBPACK_IMPORTED_MODULE_3__["GameListComponent"] },
    { path: 'games/add', component: _Components_game_form_game_form_component__WEBPACK_IMPORTED_MODULE_4__["GameFormComponent"] },
    { path: 'games/edit/:id', component: _Components_game_form_game_form_component__WEBPACK_IMPORTED_MODULE_4__["GameFormComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\n\n<div class=\"container p-4\">\n    <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'client';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _Components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Components/navigation/navigation.component */ "./src/app/Components/navigation/navigation.component.ts");
/* harmony import */ var _Components_game_form_game_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Components/game-form/game-form.component */ "./src/app/Components/game-form/game-form.component.ts");
/* harmony import */ var _Components_game_list_game_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Components/game-list/game-list.component */ "./src/app/Components/game-list/game-list.component.ts");
/* harmony import */ var _Services_games_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Services/games.service */ "./src/app/Services/games.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _Components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__["NavigationComponent"],
                _Components_game_form_game_form_component__WEBPACK_IMPORTED_MODULE_6__["GameFormComponent"],
                _Components_game_list_game_list_component__WEBPACK_IMPORTED_MODULE_7__["GameListComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"]
            ],
            providers: [_Services_games_service__WEBPACK_IMPORTED_MODULE_8__["GamesService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!************************************************************************!*\
  !*** multi (webpack)-dev-server/client?http://0.0.0.0:0 ./src/main.ts ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/bterraza/Documentos/Angular/Angular_crud/client/node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0 */"./node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0");
module.exports = __webpack_require__(/*! /home/bterraza/Documentos/Angular/Angular_crud/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map