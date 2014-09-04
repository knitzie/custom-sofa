
'use strict';

/**
 * @ngdoc function
 * @name customSofaApp.controller:CheckoutCtrl
 */

angular.module('customSofaApp')
        .controller('CheckoutCtrl', ['$scope', '$state', function($scope, $state)
            {
                $scope.goHome = function() {
                    $state.go('main');
                };
            }])
        ;
