'use strict';

/**
 * @ngdoc function
 * @name customSofaApp.controller:MainCtrl
 */

angular.module('customSofaApp')
        .controller('MainCtrl', ['$http', '$scope', '$state', '$stateParams', 'basketService', 'snapRemote', 'sharedProperties', function($http, $scope, $state, $stateParams, basketService, snapRemote, sharedProperties)
            {
                $scope.addToBasket = function(product) {
                    basketService.addItem(product, 1);
                    $scope.basketService = basketService;
                    $scope.summary = basketService.getSummary();
                    sharedProperties.setSummary($scope.summary);
                    snapRemote.open('left');
                };

                $scope.removeFromBasket = function(product) {
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

                $scope.goToProductPage = function(product) {
                    $state.go('product', {productUrlKey: product.urlKey});
                };


            }])
        ;
