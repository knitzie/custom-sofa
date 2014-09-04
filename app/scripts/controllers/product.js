
'use strict';

/**
 * @ngdoc function
 * @name customSofaApp.controller:ProductCtrl
 */

angular.module('customSofaApp')
        .controller('ProductCtrl', ['$scope', '$http', '$state', '$stateParams', function($scope, $http, $state, $stateParams) {

            $http.get('products/some-products.json')
                .success(function(data) {
                    angular.forEach(data, function(product, key){

                        if (product.urlKey === $stateParams.productUrlKey)
                        {
                            $scope.selectedProduct = product;
                        }
                    });

                    $scope.selectedImage = $scope.selectedProduct.images[0];
                    $scope.products = data;
                })
                .error(function(status) {
                    console.log(status);
                });


            $scope.goHome = function() {
                $state.go('main');
            };
        }])
        ;
