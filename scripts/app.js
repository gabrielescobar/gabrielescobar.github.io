'use strict';

angular
  .module('portafolioApp', [
                            'portafolioApp.controllers-footer',
                            'portafolioApp.controllers-contact',
                            'portafolioApp.controllers-about',
                            'portafolioApp.controllers-nav',
                                                                'portafolioApp.service-templates',
                                                                                                 'ngRoute',
                                                                                                           'pascalprecht.translate'])
  //.config(function ($routeProvider) {
  //  $routeProvider
  //    .when('/', {
  //          templateUrl: 'views/landing/landing.html'
  //    })
  //      .when('/landing', {
  //          templateUrl: 'views/landing/landing.html'
  //      })
  //    .otherwise({
  //      redirectTo: '/'
  //    });
  //})
    .config(function ($translateProvider) {
 var lang;
        for(lang in translations){
            $translateProvider.translations(lang, translations[lang]);
        }

        $translateProvider.preferredLanguage('es');

    })
    .run(function($rootScope) {
        $rootScope.actualLanguage = "es";
        $rootScope.$on('$viewContentLoaded', function() {

        });
    })
;
