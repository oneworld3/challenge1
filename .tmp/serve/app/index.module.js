/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _index = __webpack_require__(1);
	
	var _index2 = __webpack_require__(2);
	
	var _index3 = __webpack_require__(3);
	
	var _main = __webpack_require__(4);
	
	var _githubContributor = __webpack_require__(5);
	
	var _webDevTec = __webpack_require__(6);
	
	var _navbar = __webpack_require__(7);
	
	var _malarkey = __webpack_require__(8);
	
	/* global malarkey:false, moment:false */
	
	angular.module('myMessageFront', ['ui.router', 'ui.bootstrap', 'toastr']) //myMessageFront, and the dependencies which are ui.router, bootstrap and toasr which shows us notification popups
	.constant('malarkey', malarkey).constant('moment', moment).config(_index.config).config(_index2.routerConfig).run(_index3.runBlock).service('githubContributor', _githubContributor.GithubContributorService).service('webDevTec', _webDevTec.WebDevTecService).controller('MainController', _main.MainController).directive('acmeNavbar', _navbar.NavbarDirective).directive('acmeMalarkey', _malarkey.MalarkeyDirective);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	'use strict';
	
	config.$inject = ["$logProvider", "toastrConfig"];
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.config = config;
	function config($logProvider, toastrConfig) {
	  'ngInject';
	  // Enable log
	
	  $logProvider.debugEnabled(true);
	
	  // Set options third-party lib
	  toastrConfig.allowHtml = true;
	  toastrConfig.timeOut = 3000;
	  toastrConfig.positionClass = 'toast-top-right';
	  toastrConfig.preventDuplicates = true;
	  toastrConfig.progressBar = true;
	}

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';
	
	routerConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.routerConfig = routerConfig;
	function routerConfig($stateProvider, $urlRouterProvider) {
	  'ngInject';
	
	  $stateProvider.state('home', {
	    url: '/',
	    templateUrl: 'app/main/main.html',
	    controller: 'MainController',
	    controllerAs: 'main'
	  });
	
	  $urlRouterProvider.otherwise('/');
	}

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	'use strict';
	
	runBlock.$inject = ["$log"];
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.runBlock = runBlock;
	function runBlock($log) {
	  'ngInject';
	
	  $log.debug('runBlock end');
	}

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var MainController = exports.MainController = function () {
	  function MainController() {
	    'ngInject';
	
	    _classCallCheck(this, MainController);
	  }
	
	  _createClass(MainController, [{
	    key: "postMessage",
	    value: function postMessage() {
	      console.log("post");
	    }
	  }]);
	
	  return MainController;
	}();

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var GithubContributorService = exports.GithubContributorService = function () {
	  GithubContributorService.$inject = ["$log", "$http"];
	  function GithubContributorService($log, $http) {
	    'ngInject';
	
	    _classCallCheck(this, GithubContributorService);
	
	    this.$log = $log;
	    this.$http = $http;
	    this.apiHost = 'https://api.github.com/repos/Swiip/generator-gulp-angular';
	  }
	
	  _createClass(GithubContributorService, [{
	    key: 'getContributors',
	    value: function getContributors() {
	      var _this = this;
	
	      var limit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 30;
	
	      return this.$http.get(this.apiHost + '/contributors?per_page=' + limit).then(function (response) {
	        return response.data;
	      }).catch(function (error) {
	        _this.$log.error('XHR Failed for getContributors.\n' + angular.toJson(error.data, true));
	      });
	    }
	  }]);
	
	  return GithubContributorService;
	}();

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var WebDevTecService = exports.WebDevTecService = function () {
	  function WebDevTecService() {
	    'ngInject';
	
	    _classCallCheck(this, WebDevTecService);
	
	    this.data = [{
	      'title': 'AngularJS',
	      'url': 'https://angularjs.org/',
	      'description': 'HTML enhanced for web apps!',
	      'logo': 'angular.png'
	    }, {
	      'title': 'BrowserSync',
	      'url': 'http://browsersync.io/',
	      'description': 'Time-saving synchronised browser testing.',
	      'logo': 'browsersync.png'
	    }, {
	      'title': 'GulpJS',
	      'url': 'http://gulpjs.com/',
	      'description': 'The streaming build system.',
	      'logo': 'gulp.png'
	    }, {
	      'title': 'Jasmine',
	      'url': 'http://jasmine.github.io/',
	      'description': 'Behavior-Driven JavaScript.',
	      'logo': 'jasmine.png'
	    }, {
	      'title': 'Karma',
	      'url': 'http://karma-runner.github.io/',
	      'description': 'Spectacular Test Runner for JavaScript.',
	      'logo': 'karma.png'
	    }, {
	      'title': 'Protractor',
	      'url': 'https://github.com/angular/protractor',
	      'description': 'End to end test framework for AngularJS applications built on top of WebDriverJS.',
	      'logo': 'protractor.png'
	    }, {
	      'title': 'Bootstrap',
	      'url': 'http://getbootstrap.com/',
	      'description': 'Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.',
	      'logo': 'bootstrap.png'
	    }, {
	      'title': 'Angular UI Bootstrap',
	      'url': 'http://angular-ui.github.io/bootstrap/',
	      'description': 'Bootstrap components written in pure AngularJS by the AngularUI Team.',
	      'logo': 'ui-bootstrap.png'
	    }, {
	      'title': 'Sass (Node)',
	      'url': 'https://github.com/sass/node-sass',
	      'description': 'Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.',
	      'logo': 'node-sass.png'
	    }, {
	      'title': 'ES6 (Babel formerly 6to5)',
	      'url': 'https://babeljs.io/',
	      'description': 'Turns ES6+ code into vanilla ES5, so you can use next generation features today.',
	      'logo': 'babel.png'
	    }];
	  }
	
	  _createClass(WebDevTecService, [{
	    key: 'getTec',
	    value: function getTec() {
	      return this.data;
	    }
	  }]);
	
	  return WebDevTecService;
	}();

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.NavbarDirective = NavbarDirective;
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function NavbarDirective() {
	  'ngInject';
	
	  var directive = {
	    restrict: 'E',
	    templateUrl: 'app/components/navbar/navbar.html',
	    scope: {
	      creationDate: '='
	    },
	    controller: NavbarController,
	    controllerAs: 'vm',
	    bindToController: true
	  };
	
	  return directive;
	}
	
	var NavbarController = function NavbarController(moment) {
	  'ngInject';
	
	  // "this.creationDate" is available by directive option "bindToController: true"
	
	  _classCallCheck(this, NavbarController);
	
	  this.relativeDate = moment(this.creationDate).fromNow();
	};
	NavbarController.$inject = ["moment"];

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	'use strict';
	
	MalarkeyDirective.$inject = ["malarkey"];
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	exports.MalarkeyDirective = MalarkeyDirective;
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function MalarkeyDirective(malarkey) {
	  'ngInject';
	
	  var directive = {
	    restrict: 'E',
	    scope: {
	      extraValues: '='
	    },
	    template: '&nbsp;',
	    link: linkFunc,
	    controller: MalarkeyController,
	    controllerAs: 'vm'
	  };
	
	  return directive;
	
	  function linkFunc(scope, el, attr, vm) {
	    var watcher = void 0;
	    var typist = malarkey(el[0], {
	      typeSpeed: 40,
	      deleteSpeed: 40,
	      pauseDelay: 800,
	      loop: true,
	      postfix: ' '
	    });
	
	    el.addClass('acme-malarkey');
	
	    angular.forEach(scope.extraValues, function (value) {
	      typist.type(value).pause().delete();
	    });
	
	    watcher = scope.$watch('vm.contributors', function () {
	      angular.forEach(vm.contributors, function (contributor) {
	        typist.type(contributor.login).pause().delete();
	      });
	    });
	
	    scope.$on('$destroy', function () {
	      watcher();
	    });
	  }
	}
	
	var MalarkeyController = function () {
	  MalarkeyController.$inject = ["$log", "githubContributor"];
	  function MalarkeyController($log, githubContributor) {
	    'ngInject';
	
	    _classCallCheck(this, MalarkeyController);
	
	    this.$log = $log;
	    this.contributors = [];
	
	    this.activate(githubContributor);
	  }
	
	  _createClass(MalarkeyController, [{
	    key: 'activate',
	    value: function activate(githubContributor) {
	      var _this = this;
	
	      return this.getContributors(githubContributor).then(function () {
	        _this.$log.info('Activated Contributors View');
	      });
	    }
	  }, {
	    key: 'getContributors',
	    value: function getContributors(githubContributor) {
	      var _this2 = this;
	
	      return githubContributor.getContributors(10).then(function (data) {
	        _this2.contributors = data;
	
	        return _this2.contributors;
	      });
	    }
	  }]);
	
	  return MalarkeyController;
	}();

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYTQ0ZjA4MzBhN2E2Y2RlMzNjMWIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5yb3V0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2luZGV4LnJ1bi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL21haW4vbWFpbi5jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9naXRodWJDb250cmlidXRvci9naXRodWJDb250cmlidXRvci5zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy93ZWJEZXZUZWMvd2ViRGV2VGVjLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuZGlyZWN0aXZlLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9tYWxhcmtleS9tYWxhcmtleS5kaXJlY3RpdmUuanMiXSwibmFtZXMiOlsiYW5ndWxhciIsIm1vZHVsZSIsImNvbnN0YW50IiwibWFsYXJrZXkiLCJtb21lbnQiLCJjb25maWciLCJyb3V0ZXJDb25maWciLCJydW4iLCJydW5CbG9jayIsInNlcnZpY2UiLCJHaXRodWJDb250cmlidXRvclNlcnZpY2UiLCJXZWJEZXZUZWNTZXJ2aWNlIiwiY29udHJvbGxlciIsIk1haW5Db250cm9sbGVyIiwiZGlyZWN0aXZlIiwiTmF2YmFyRGlyZWN0aXZlIiwiTWFsYXJrZXlEaXJlY3RpdmUiLCIkbG9nUHJvdmlkZXIiLCJ0b2FzdHJDb25maWciLCJkZWJ1Z0VuYWJsZWQiLCJhbGxvd0h0bWwiLCJ0aW1lT3V0IiwicG9zaXRpb25DbGFzcyIsInByZXZlbnREdXBsaWNhdGVzIiwicHJvZ3Jlc3NCYXIiLCIkc3RhdGVQcm92aWRlciIsIiR1cmxSb3V0ZXJQcm92aWRlciIsInN0YXRlIiwidXJsIiwidGVtcGxhdGVVcmwiLCJjb250cm9sbGVyQXMiLCJvdGhlcndpc2UiLCIkbG9nIiwiZGVidWciLCJjb25zb2xlIiwibG9nIiwiJGh0dHAiLCJhcGlIb3N0IiwibGltaXQiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiY2F0Y2giLCJlcnJvciIsInRvSnNvbiIsInJlc3RyaWN0Iiwic2NvcGUiLCJjcmVhdGlvbkRhdGUiLCJOYXZiYXJDb250cm9sbGVyIiwiYmluZFRvQ29udHJvbGxlciIsInJlbGF0aXZlRGF0ZSIsImZyb21Ob3ciLCJleHRyYVZhbHVlcyIsInRlbXBsYXRlIiwibGluayIsImxpbmtGdW5jIiwiTWFsYXJrZXlDb250cm9sbGVyIiwiZWwiLCJhdHRyIiwidm0iLCJ3YXRjaGVyIiwidHlwaXN0IiwidHlwZVNwZWVkIiwiZGVsZXRlU3BlZWQiLCJwYXVzZURlbGF5IiwibG9vcCIsInBvc3RmaXgiLCJhZGRDbGFzcyIsImZvckVhY2giLCJ2YWx1ZSIsInR5cGUiLCJwYXVzZSIsImRlbGV0ZSIsIiR3YXRjaCIsImNvbnRyaWJ1dG9ycyIsImNvbnRyaWJ1dG9yIiwibG9naW4iLCIkb24iLCJnaXRodWJDb250cmlidXRvciIsImFjdGl2YXRlIiwiZ2V0Q29udHJpYnV0b3JzIiwiaW5mbyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUN0Q0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFFQUEsU0FBUUMsT0FBTyxrQkFBa0IsQ0FBQyxhQUFhLGdCQUFnQjtFQUM1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LElBQUksWUFBWSxZQUFNO09BQzFCakI7Ozs7Ozs4REFpQitCO0dBVm5DLDRCQUFhN0IsTUFBTStDLG1CQUFtQjtLQUNwQzs7S0FEb0M7O0tBR3BDLEtBQUsvQyxPQUFPQTtLQUNaLEtBQUsyQyxlQUFlOztLQUVwQixLQUFLSyxTQUFTRDs7O0dBZ0JoQixhQUFhLG9CQUFvQixDQUFDO0tBQ2hDLEtBQUs7S0FDTCxPQUFPLFNBQVMsU0FmVEEsbUJBQW1CO09BQUE7O09BQzFCLE9BQU8sS0FBS0UsZ0JBQWdCRixtQkFBbUJ2QyxLQUFLLFlBQU07U0FDeEQsTUFBS1IsS0FBS2tELEtBQUs7OztNQW9CaEI7S0FDRCxLQUFLO0tBQ0wsT0FBTyxTQUFTLGdCQWxCRkgsbUJBQW1CO09BQUE7O09BQ2pDLE9BQU9BLGtCQUFrQkUsZ0JBQWdCLElBQUl6QyxLQUFLLFVBQUNFLE1BQVM7U0FDMUQsT0FBS2lDLGVBQWVqQzs7U0FFcEIsT0FBTyxPQUFLaUM7Ozs7O0dBeUJoQixPQUFPIiwiZmlsZSI6ImluZGV4Lm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGE0NGYwODMwYTdhNmNkZTMzYzFiIiwiLyogZ2xvYmFsIG1hbGFya2V5OmZhbHNlLCBtb21lbnQ6ZmFsc2UgKi9cblxuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnLi9pbmRleC5jb25maWcnO1xuaW1wb3J0IHsgcm91dGVyQ29uZmlnIH0gZnJvbSAnLi9pbmRleC5yb3V0ZSc7XG5pbXBvcnQgeyBydW5CbG9jayB9IGZyb20gJy4vaW5kZXgucnVuJztcbmltcG9ydCB7IE1haW5Db250cm9sbGVyIH0gZnJvbSAnLi9tYWluL21haW4uY29udHJvbGxlcic7XG5pbXBvcnQgeyBHaXRodWJDb250cmlidXRvclNlcnZpY2UgfSBmcm9tICcuLi9hcHAvY29tcG9uZW50cy9naXRodWJDb250cmlidXRvci9naXRodWJDb250cmlidXRvci5zZXJ2aWNlJztcbmltcG9ydCB7IFdlYkRldlRlY1NlcnZpY2UgfSBmcm9tICcuLi9hcHAvY29tcG9uZW50cy93ZWJEZXZUZWMvd2ViRGV2VGVjLnNlcnZpY2UnO1xuaW1wb3J0IHsgTmF2YmFyRGlyZWN0aXZlIH0gZnJvbSAnLi4vYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTWFsYXJrZXlEaXJlY3RpdmUgfSBmcm9tICcuLi9hcHAvY29tcG9uZW50cy9tYWxhcmtleS9tYWxhcmtleS5kaXJlY3RpdmUnO1xuXG5hbmd1bGFyLm1vZHVsZSgnbXlNZXNzYWdlRnJvbnQnLCBbJ3VpLnJvdXRlcicsICd1aS5ib290c3RyYXAnLCAndG9hc3RyJ10pIC8vbXlNZXNzYWdlRnJvbnQsIGFuZCB0aGUgZGVwZW5kZW5jaWVzIHdoaWNoIGFyZSB1aS5yb3V0ZXIsIGJvb3RzdHJhcCBhbmQgdG9hc3Igd2hpY2ggc2hvd3MgdXMgbm90aWZpY2F0aW9uIHBvcHVwc1xuICAuY29uc3RhbnQoJ21hbGFya2V5JywgbWFsYXJrZXkpXG4gIC5jb25zdGFudCgnbW9tZW50JywgbW9tZW50KVxuICAuY29uZmlnKGNvbmZpZylcbiAgLmNvbmZpZyhyb3V0ZXJDb25maWcpXG4gIC5ydW4ocnVuQmxvY2spXG4gIC5zZXJ2aWNlKCdnaXRodWJDb250cmlidXRvcicsIEdpdGh1YkNvbnRyaWJ1dG9yU2VydmljZSlcbiAgLnNlcnZpY2UoJ3dlYkRldlRlYycsIFdlYkRldlRlY1NlcnZpY2UpXG4gIC5jb250cm9sbGVyKCdNYWluQ29udHJvbGxlcicsIE1haW5Db250cm9sbGVyKVxuICAuZGlyZWN0aXZlKCdhY21lTmF2YmFyJywgTmF2YmFyRGlyZWN0aXZlKVxuICAuZGlyZWN0aXZlKCdhY21lTWFsYXJrZXknLCBNYWxhcmtleURpcmVjdGl2ZSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2luZGV4Lm1vZHVsZS5qcyIsImV4cG9ydCBmdW5jdGlvbiBjb25maWcgKCRsb2dQcm92aWRlciwgdG9hc3RyQ29uZmlnKSB7XG4gICduZ0luamVjdCc7XG4gIC8vIEVuYWJsZSBsb2dcbiAgJGxvZ1Byb3ZpZGVyLmRlYnVnRW5hYmxlZCh0cnVlKTtcblxuICAvLyBTZXQgb3B0aW9ucyB0aGlyZC1wYXJ0eSBsaWJcbiAgdG9hc3RyQ29uZmlnLmFsbG93SHRtbCA9IHRydWU7XG4gIHRvYXN0ckNvbmZpZy50aW1lT3V0ID0gMzAwMDtcbiAgdG9hc3RyQ29uZmlnLnBvc2l0aW9uQ2xhc3MgPSAndG9hc3QtdG9wLXJpZ2h0JztcbiAgdG9hc3RyQ29uZmlnLnByZXZlbnREdXBsaWNhdGVzID0gdHJ1ZTtcbiAgdG9hc3RyQ29uZmlnLnByb2dyZXNzQmFyID0gdHJ1ZTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvaW5kZXguY29uZmlnLmpzIiwiZXhwb3J0IGZ1bmN0aW9uIHJvdXRlckNvbmZpZyAoJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xuICAnbmdJbmplY3QnO1xuICAkc3RhdGVQcm92aWRlclxuICAgIC5zdGF0ZSgnaG9tZScsIHtcbiAgICAgIHVybDogJy8nLFxuICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvbWFpbi9tYWluLmh0bWwnLFxuICAgICAgY29udHJvbGxlcjogJ01haW5Db250cm9sbGVyJyxcbiAgICAgIGNvbnRyb2xsZXJBczogJ21haW4nXG4gICAgfSk7XG5cbiAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9pbmRleC5yb3V0ZS5qcyIsImV4cG9ydCBmdW5jdGlvbiBydW5CbG9jayAoJGxvZykge1xuICAnbmdJbmplY3QnO1xuICAkbG9nLmRlYnVnKCdydW5CbG9jayBlbmQnKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvaW5kZXgucnVuLmpzIiwiZXhwb3J0IGNsYXNzIE1haW5Db250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgICduZ0luamVjdCc7XG5cbiAgfVxuXG4gIHBvc3RNZXNzYWdlKCkge1xuICAgIGNvbnNvbGUubG9nKFwicG9zdFwiKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9tYWluL21haW4uY29udHJvbGxlci5qcyIsImV4cG9ydCBjbGFzcyBHaXRodWJDb250cmlidXRvclNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvciAoJGxvZywgJGh0dHApIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgdGhpcy4kbG9nID0gJGxvZztcbiAgICB0aGlzLiRodHRwID0gJGh0dHA7XG4gICAgdGhpcy5hcGlIb3N0ID0gJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vcmVwb3MvU3dpaXAvZ2VuZXJhdG9yLWd1bHAtYW5ndWxhcic7XG4gIH1cblxuICBnZXRDb250cmlidXRvcnMobGltaXQ9MzApIHtcbiAgICByZXR1cm4gdGhpcy4kaHR0cC5nZXQodGhpcy5hcGlIb3N0ICsgJy9jb250cmlidXRvcnM/cGVyX3BhZ2U9JyArIGxpbWl0KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgdGhpcy4kbG9nLmVycm9yKCdYSFIgRmFpbGVkIGZvciBnZXRDb250cmlidXRvcnMuXFxuJyArIGFuZ3VsYXIudG9Kc29uKGVycm9yLmRhdGEsIHRydWUpKTtcbiAgICAgIH0pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2NvbXBvbmVudHMvZ2l0aHViQ29udHJpYnV0b3IvZ2l0aHViQ29udHJpYnV0b3Iuc2VydmljZS5qcyIsImV4cG9ydCBjbGFzcyBXZWJEZXZUZWNTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgICduZ0luamVjdCc7XG5cbiAgICB0aGlzLmRhdGEgPSBbXG4gICAgICB7XG4gICAgICAgICd0aXRsZSc6ICdBbmd1bGFySlMnLFxuICAgICAgICAndXJsJzogJ2h0dHBzOi8vYW5ndWxhcmpzLm9yZy8nLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnSFRNTCBlbmhhbmNlZCBmb3Igd2ViIGFwcHMhJyxcbiAgICAgICAgJ2xvZ28nOiAnYW5ndWxhci5wbmcnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAndGl0bGUnOiAnQnJvd3NlclN5bmMnLFxuICAgICAgICAndXJsJzogJ2h0dHA6Ly9icm93c2Vyc3luYy5pby8nLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnVGltZS1zYXZpbmcgc3luY2hyb25pc2VkIGJyb3dzZXIgdGVzdGluZy4nLFxuICAgICAgICAnbG9nbyc6ICdicm93c2Vyc3luYy5wbmcnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAndGl0bGUnOiAnR3VscEpTJyxcbiAgICAgICAgJ3VybCc6ICdodHRwOi8vZ3VscGpzLmNvbS8nLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnVGhlIHN0cmVhbWluZyBidWlsZCBzeXN0ZW0uJyxcbiAgICAgICAgJ2xvZ28nOiAnZ3VscC5wbmcnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAndGl0bGUnOiAnSmFzbWluZScsXG4gICAgICAgICd1cmwnOiAnaHR0cDovL2phc21pbmUuZ2l0aHViLmlvLycsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdCZWhhdmlvci1Ecml2ZW4gSmF2YVNjcmlwdC4nLFxuICAgICAgICAnbG9nbyc6ICdqYXNtaW5lLnBuZydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICd0aXRsZSc6ICdLYXJtYScsXG4gICAgICAgICd1cmwnOiAnaHR0cDovL2thcm1hLXJ1bm5lci5naXRodWIuaW8vJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1NwZWN0YWN1bGFyIFRlc3QgUnVubmVyIGZvciBKYXZhU2NyaXB0LicsXG4gICAgICAgICdsb2dvJzogJ2thcm1hLnBuZydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICd0aXRsZSc6ICdQcm90cmFjdG9yJyxcbiAgICAgICAgJ3VybCc6ICdodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9wcm90cmFjdG9yJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0VuZCB0byBlbmQgdGVzdCBmcmFtZXdvcmsgZm9yIEFuZ3VsYXJKUyBhcHBsaWNhdGlvbnMgYnVpbHQgb24gdG9wIG9mIFdlYkRyaXZlckpTLicsXG4gICAgICAgICdsb2dvJzogJ3Byb3RyYWN0b3IucG5nJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ3RpdGxlJzogJ0Jvb3RzdHJhcCcsXG4gICAgICAgICd1cmwnOiAnaHR0cDovL2dldGJvb3RzdHJhcC5jb20vJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0Jvb3RzdHJhcCBpcyB0aGUgbW9zdCBwb3B1bGFyIEhUTUwsIENTUywgYW5kIEpTIGZyYW1ld29yayBmb3IgZGV2ZWxvcGluZyByZXNwb25zaXZlLCBtb2JpbGUgZmlyc3QgcHJvamVjdHMgb24gdGhlIHdlYi4nLFxuICAgICAgICAnbG9nbyc6ICdib290c3RyYXAucG5nJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ3RpdGxlJzogJ0FuZ3VsYXIgVUkgQm9vdHN0cmFwJyxcbiAgICAgICAgJ3VybCc6ICdodHRwOi8vYW5ndWxhci11aS5naXRodWIuaW8vYm9vdHN0cmFwLycsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdCb290c3RyYXAgY29tcG9uZW50cyB3cml0dGVuIGluIHB1cmUgQW5ndWxhckpTIGJ5IHRoZSBBbmd1bGFyVUkgVGVhbS4nLFxuICAgICAgICAnbG9nbyc6ICd1aS1ib290c3RyYXAucG5nJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ3RpdGxlJzogJ1Nhc3MgKE5vZGUpJyxcbiAgICAgICAgJ3VybCc6ICdodHRwczovL2dpdGh1Yi5jb20vc2Fzcy9ub2RlLXNhc3MnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnTm9kZS5qcyBiaW5kaW5nIHRvIGxpYnNhc3MsIHRoZSBDIHZlcnNpb24gb2YgdGhlIHBvcHVsYXIgc3R5bGVzaGVldCBwcmVwcm9jZXNzb3IsIFNhc3MuJyxcbiAgICAgICAgJ2xvZ28nOiAnbm9kZS1zYXNzLnBuZydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICd0aXRsZSc6ICdFUzYgKEJhYmVsIGZvcm1lcmx5IDZ0bzUpJyxcbiAgICAgICAgJ3VybCc6ICdodHRwczovL2JhYmVsanMuaW8vJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1R1cm5zIEVTNisgY29kZSBpbnRvIHZhbmlsbGEgRVM1LCBzbyB5b3UgY2FuIHVzZSBuZXh0IGdlbmVyYXRpb24gZmVhdHVyZXMgdG9kYXkuJyxcbiAgICAgICAgJ2xvZ28nOiAnYmFiZWwucG5nJ1xuICAgICAgfVxuICAgIF07XG4gIH1cblxuICBnZXRUZWMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9jb21wb25lbnRzL3dlYkRldlRlYy93ZWJEZXZUZWMuc2VydmljZS5qcyIsImV4cG9ydCBmdW5jdGlvbiBOYXZiYXJEaXJlY3RpdmUoKSB7XG4gICduZ0luamVjdCc7XG5cbiAgbGV0IGRpcmVjdGl2ZSA9IHtcbiAgICByZXN0cmljdDogJ0UnLFxuICAgIHRlbXBsYXRlVXJsOiAnYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5odG1sJyxcbiAgICBzY29wZToge1xuICAgICAgICBjcmVhdGlvbkRhdGU6ICc9J1xuICAgIH0sXG4gICAgY29udHJvbGxlcjogTmF2YmFyQ29udHJvbGxlcixcbiAgICBjb250cm9sbGVyQXM6ICd2bScsXG4gICAgYmluZFRvQ29udHJvbGxlcjogdHJ1ZVxuICB9O1xuXG4gIHJldHVybiBkaXJlY3RpdmU7XG59XG5cbmNsYXNzIE5hdmJhckNvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvciAobW9tZW50KSB7XG4gICAgJ25nSW5qZWN0JztcblxuICAgIC8vIFwidGhpcy5jcmVhdGlvbkRhdGVcIiBpcyBhdmFpbGFibGUgYnkgZGlyZWN0aXZlIG9wdGlvbiBcImJpbmRUb0NvbnRyb2xsZXI6IHRydWVcIlxuICAgIHRoaXMucmVsYXRpdmVEYXRlID0gbW9tZW50KHRoaXMuY3JlYXRpb25EYXRlKS5mcm9tTm93KCk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmRpcmVjdGl2ZS5qcyIsImV4cG9ydCBmdW5jdGlvbiBNYWxhcmtleURpcmVjdGl2ZShtYWxhcmtleSkge1xuICAnbmdJbmplY3QnO1xuXG4gIGxldCBkaXJlY3RpdmUgPSB7XG4gICAgcmVzdHJpY3Q6ICdFJyxcbiAgICBzY29wZToge1xuICAgICAgICBleHRyYVZhbHVlczogJz0nXG4gICAgfSxcbiAgICB0ZW1wbGF0ZTogJyZuYnNwOycsXG4gICAgbGluazogbGlua0Z1bmMsXG4gICAgY29udHJvbGxlcjogTWFsYXJrZXlDb250cm9sbGVyLFxuICAgIGNvbnRyb2xsZXJBczogJ3ZtJ1xuICB9O1xuXG4gIHJldHVybiBkaXJlY3RpdmU7XG5cbiAgZnVuY3Rpb24gbGlua0Z1bmMoc2NvcGUsIGVsLCBhdHRyLCB2bSkge1xuICAgIGxldCB3YXRjaGVyO1xuICAgIGxldCB0eXBpc3QgPSBtYWxhcmtleShlbFswXSwge1xuICAgICAgdHlwZVNwZWVkOiA0MCxcbiAgICAgIGRlbGV0ZVNwZWVkOiA0MCxcbiAgICAgIHBhdXNlRGVsYXk6IDgwMCxcbiAgICAgIGxvb3A6IHRydWUsXG4gICAgICBwb3N0Zml4OiAnICdcbiAgICB9KTtcblxuICAgIGVsLmFkZENsYXNzKCdhY21lLW1hbGFya2V5Jyk7XG5cbiAgICBhbmd1bGFyLmZvckVhY2goc2NvcGUuZXh0cmFWYWx1ZXMsICh2YWx1ZSkgPT4ge1xuICAgICAgdHlwaXN0LnR5cGUodmFsdWUpLnBhdXNlKCkuZGVsZXRlKCk7XG4gICAgfSk7XG5cbiAgICB3YXRjaGVyID0gc2NvcGUuJHdhdGNoKCd2bS5jb250cmlidXRvcnMnLCAoKSA9PiB7XG4gICAgICBhbmd1bGFyLmZvckVhY2godm0uY29udHJpYnV0b3JzLCAoY29udHJpYnV0b3IpID0+IHtcbiAgICAgICAgdHlwaXN0LnR5cGUoY29udHJpYnV0b3IubG9naW4pLnBhdXNlKCkuZGVsZXRlKCk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHNjb3BlLiRvbignJGRlc3Ryb3knLCAoKSA9PiB7XG4gICAgICB3YXRjaGVyKCk7XG4gICAgfSk7XG4gIH1cblxufVxuXG5jbGFzcyBNYWxhcmtleUNvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvciAoJGxvZywgZ2l0aHViQ29udHJpYnV0b3IpIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgdGhpcy4kbG9nID0gJGxvZztcbiAgICB0aGlzLmNvbnRyaWJ1dG9ycyA9IFtdO1xuXG4gICAgdGhpcy5hY3RpdmF0ZShnaXRodWJDb250cmlidXRvcik7XG4gIH1cblxuICBhY3RpdmF0ZShnaXRodWJDb250cmlidXRvcikge1xuICAgIHJldHVybiB0aGlzLmdldENvbnRyaWJ1dG9ycyhnaXRodWJDb250cmlidXRvcikudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLiRsb2cuaW5mbygnQWN0aXZhdGVkIENvbnRyaWJ1dG9ycyBWaWV3Jyk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRDb250cmlidXRvcnMoZ2l0aHViQ29udHJpYnV0b3IpIHtcbiAgICByZXR1cm4gZ2l0aHViQ29udHJpYnV0b3IuZ2V0Q29udHJpYnV0b3JzKDEwKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLmNvbnRyaWJ1dG9ycyA9IGRhdGE7XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbnRyaWJ1dG9ycztcbiAgICB9KTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9jb21wb25lbnRzL21hbGFya2V5L21hbGFya2V5LmRpcmVjdGl2ZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=