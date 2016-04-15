/**
 * Created by GABRIEL ESCOBAR on 06/07/2015.
 */
'use strict';
angular.module('portafolioApp.controllers-footer',[])
    .controller('footerController', function (url,$scope,$rootScope,$translate) {

        var section = url.getUrl();
        section.then(function(data) {
            $scope.gitHub=data[0].github;
            $scope.linkedin=data[0].linkedin;
            $scope.facebook=data[0].facebook;
        });


    })

;