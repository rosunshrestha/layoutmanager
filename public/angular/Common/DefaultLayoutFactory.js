;
(function () {
    "use strict";
    angular.module("LayoutManagement").factory("DefaultLayoutFactory", DefaultLayoutFactory);
    DefaultLayoutFactory.$inject = ["$http"];
    /**
     * Contains Services related to default layouts
     * @returns {{}}
     * @constructor
     */
    function DefaultLayoutFactory($http) {
        var DefaultLayoutServices = {};


        /**
         * Retrieve default layouts
         */
        DefaultLayoutServices.retrieveDefaultLayouts=function(){
            $http.get("angular/data/DefaultLayouts.json").success(function(response){
                defaultLayouts=response.layouts;
            })
        };
        DefaultLayoutServices.retrieveDefaultLayouts();


        /**
         * Retrieve default css
         */
        DefaultLayoutServices.retrieveDefaultCss=function(){
            $http.get("angular/data/DefaultCss.json").success(function(response){
                defaultCss=response;
                console.log(defaultCss);
            })
        };
        DefaultLayoutServices.retrieveDefaultCss();
        /**
         * Get all default Layouts
         * @returns {*[]}
         */
        DefaultLayoutServices.getAllDefaultLayouts = function () {
            console.log(defaultCss);
            return defaultLayouts;
        };
        /**
         * Get specific default layout
         * @param key
         * @returns {*}
         */
        DefaultLayoutServices.getSpecificDefaultLayout = function (key) {
            return defaultLayouts[key];
        };
        DefaultLayoutServices.getSpecificDivDefaultCss=function(divName){
            return defaultCss[divName];
        }

        return DefaultLayoutServices;
    }

    /**
     * Default Layouts
     * @type {*[]}
     */
    var defaultLayouts;
    var defaultCss;
    /**
     * Common Css Properties
     * @type object
     */
    var cssProperties = {
        "width": 0,
        "padding-top": 0,
        "padding-right": 0,
        "padding-bottom": 0,
        "padding-left": 0,
        "background": "none"
    }
})();