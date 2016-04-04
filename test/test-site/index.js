(function(){
    'use strict';

    angular.module('angular-metas-test', ['ngRoute', 'metas'])
        .config(['$routeProvider', '$locationProvider', 'metasProvider', function($routeProvider,$locationProvider, metasProvider){
            metasProvider.setDefaults({
                title: 'Default title',
                author: 'Will Smith'
            });

            $routeProvider
                .when('/', {
                    templateUrl: 'partials/default.html',
                    controller: ['metas', function(metas){
                        metas.setMetas();
                    }],
                    controllerAs: 'default'
                })
                .when('/view-a', {
                    templateUrl: 'partials/view-a.html',
                    controller: ['metas', function(metas){
                        metas.setMetas({
                            title: 'View A',
                            description: 'This is view A description'
                        });
                    }],
                    controllerAs: 'viewA'
                })
                .when('/view-b', {
                    templateUrl: 'partials/view-b.html',
                    controller: ['metas', function(metas){
                        metas.setMetas({
                            title: 'View B',
                            description: 'This is view B description'
                        });
                    }],
                    controllerAs: 'viewB'
                })
                .when('/view-c', {
                    templateUrl: 'partials/default.html',
                    controller: ['metas', function(metas){
                        metas.setMetas({
                            title: 'View C',
                            author: 'John Doe'
                        });
                    }],
                    controllerAs: 'viewC'
                })
                .otherwise({
                    redirectTo: '/'
                });

                $locationProvider.html5Mode(true);
        }])
        .controller('MainController', [function(){

        }]);
})();
