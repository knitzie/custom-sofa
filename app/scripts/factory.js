'use strict';

/* global sofa */

/**
 * @ngdoc function
 * @name customSofaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the customSofaApp
 */
angular.module('customSofaApp')
    .factory('basketService', ['storageService', 'configService', function(storageService, configService){
        return new sofa.BasketService(storageService, configService);
    }])
    .factory('storageService', [function(){
        return new sofa.MemoryStorageService();
    }])
    .factory('configService', [function(){
        return new sofa.ConfigService();
    }]);