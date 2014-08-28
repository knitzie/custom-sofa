'use strict';

angular.module('customSofaApp')
    .controller('SnapCtrl', function ($scope, sharedProperties)
    {
        /*handle the rootScope variable*/
        $scope.$on('SummaryChanged', function(event, summary) {
            $scope.summary = summary;
        });
    })
;
