'use strict';

/**
 * @ngdoc function
 * @name customSofaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the customSofaApp
 */
angular.module('customSofaApp')
    .controller('MainCtrl', function ($http, $scope, basketService, snapRemote, sharedProperties)
    {
        $scope.addToBasket = function (product) {
            basketService.addItem(product, 1);
            $scope.basketService = basketService;
            $scope.summary = basketService.getSummary();
            sharedProperties.setSummary($scope.summary); 
            snapRemote.open('left');
        };

        $scope.removeFromBasket = function (product) {
            basketService.removeItem(product, 1);
            $scope.basketService = basketService;
            $scope.summary = basketService.getSummary();
            sharedProperties.setSummary($scope.summary);
        };

        $http.get('products/some-products.json').
            success(function(data) {
                $scope.products = data;
            }).
            error(function(status) {
                console.log(status);
            });


    })
;
