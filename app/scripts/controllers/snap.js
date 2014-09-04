'use strict';

/**
 * @ngdoc function
 * @name customSofaApp.controller:SnapCtrl
 */

angular.module('customSofaApp')
        .controller('SnapCtrl', ['$scope', 'navigationService', '$state', function($scope, navigationService, $state)
            {
                /*handle the rootScope variable*/
                $scope.$on('SummaryChanged', function(event, summary) {
                    $scope.summary = summary;
                });

                $scope.goToCheckout = function() {
//                    navigationService.navigateToCheckout();
                    $state.go('checkout');
                };
            }])
        ;
