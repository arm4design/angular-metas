/**
 * @namespace metas
 * @description The metas module will define the <meta> tags dynamically by using .setMetas() from app controllers
 * @author Armando Soriano <asoriano.dev@gmail.com>
 * @lastmodifiedDate 03-15-2016
 */
(function(){
    'use strict';

    angular.module('metas', [])
        .provider('metas', MetaTagsProvider);

    /**
     * @class metas.MetaTagsProvider
     * @classdesc Provider class that allows to set default values for metas.
     * @memberof metas
     */
    function MetaTagsProvider(){
        var defaults = {};

        /**
         * Method to set defaults in config runtime
         * @memberof metas.MetaTagsProvider
         * @function setDefaults
         * @param {object} data Object containing the meta tags default values
         */
        this.setDefaults = function(data){
            defaults = data;
        };

        // Instantiates the service in the angularjs instance
        this.$get = ['$rootScope', '$timeout', function($rootScope, $timeout){
            return new MetaTagsService($rootScope, defaults, $timeout);
        }];
    };

    /**
     * @class metas.MetaTagsService
     * @classdesc Service class to be instantiated by metaTagsService.
     * @memberOf metas
     * @param   {object}   $rootScope
     * @param   {object}   defaults     Passed from the provider
     */
    function MetaTagsService($rootScope, defaults){
        var self = this;
        var defs = defaults ? angular.copy(defaults) : {};

        // metas object initialization
        $rootScope.metas = {};

        /**
         * Core method for the service.
         * Given the passed data, it sets the proper values to each meta tag.
         * @memberof metas.MetaTagsService
         * @function setMetas
         * @param {object} data Contains the meta tags values to be set.
         */
        self.setMetas = function(data){
            $rootScope.metas = data ? angular.extend(angular.copy(defs), data) : defs;
        };
    };
})();
