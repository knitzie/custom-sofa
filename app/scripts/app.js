'use strict';

/**
 * @ngdoc function
 * @name customSofaApp
 */

angular
        .module('customSofaApp', [
            'ngAnimate',
            'ngCookies',
            'ngSanitize',
            'ngTouch',
            'ngRoute',
            'ui.router',
            'snap'
        ])
        .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

                $stateProvider
                        .state('main', {
                            url: '/',
                            templateUrl: 'views/main/content-main.html',
                            controller: 'MainCtrl'
                        })
                        .state('checkout', {
                            url: '/checkout',
                            templateUrl: 'views/checkout/content-checkout.html',
                            controller: 'CheckoutCtrl'
                        })
                        .state('product', {
                            url: '/product/:productUrlKey',
                            templateUrl: 'views/product/content-product.html',
                            controller: 'ProductCtrl'
                        })
                        ;

                $urlRouterProvider.otherwise('/');
            }])
//        .config(['$routeProvider',
//            function($routeProvider) {
//                $routeProvider
//                        .when('/main', {
//                            templateUrl: 'views/main/content-main.html',
//                            controller: 'MainCtrl'
//                        })
//                        .when('/checkout', {
//                            templateUrl: 'views/checkout/content-checkout.html',
//                            controller: 'CheckoutCtrl'
//                        })
//                        .otherwise({
//                            redirectTo: '/main'
//                        });
//            }])
        ;