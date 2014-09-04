'use strict';

/**
 * @ngdoc function
 * @name customSofaApp.directive
 */

angular.module('customSofaApp')
    .directive('hoverImage', function(){
        return {
        link: function(scope, elm, attrs){

            var images = JSON.parse(attrs.hoverImage);

            elm.bind('mouseenter',function(){
                console.log(this);
                this.src = images[1].url;
            });
            elm.bind('mouseleave',function(){
                this.src = images[0].url;
            });
        }
    };
    });