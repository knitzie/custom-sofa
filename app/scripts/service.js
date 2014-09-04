'use strict';

/**
 * @ngdoc function
 * @name customSofaApp.service
 */

angular.module('customSofaApp')
        .service('sharedProperties', function($rootScope) {

            return {
                setSummary: function(summary) {
                    /* Sets the rootScope variable, which all controllers can handle
                     * Inside the controller, call $scope.$on('SummaryChanged', function(){}) */
                    $rootScope.$broadcast('SummaryChanged', summary);
                }
            };
        })
        ;