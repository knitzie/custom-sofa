'use strict';

/**
 * @ngdoc function
 * @name customSofaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the customSofaApp
 */
angular.module('customSofaApp')
    .controller('MainCtrl', function ($http, $scope, basketService)
    {
        $scope.addToBasket = function (product) {
            basketService.addItem(product, 1);
            $scope.basketService = basketService;
            $scope.summary = basketService.getSummary();

            console.log($scope.summary);
        };

        $scope.removeFromBasket = function (product) {
            basketService.removeItem(product, 1);
            $scope.basketService = basketService;
            $scope.summary = basketService.getSummary();
        };

        $http.get('products/some-products.json').
            success(function(data) {
                $scope.products = data;
            }).
            error(function(status) {
                console.log(status);
            });
    });
