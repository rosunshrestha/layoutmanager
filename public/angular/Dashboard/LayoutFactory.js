;(function () {
    "use strict";

    var selectedLayouts=[];
    var selectedKeys=[];

    LayoutFactory.$inject=["$localStorage","DefaultLayoutFactory"];
    angular.module("LayoutManagement").factory("LayoutFactory", LayoutFactory);
    function LayoutFactory($localStorage,DefaultLayoutFactory) {

        var LayoutServices = {};

        /**
         * Get count of object property
         * @param objectToBeCounted
         * @returns {Number}
         */
        LayoutServices.getObjectCount = function (objectToBeCounted) {
            return Object.keys(objectToBeCounted).length;
        };
        /**
         * Add selected layout by user
         * @param object layout
         */
        LayoutServices.addSelectedLayout=function(layout){
            console.log(selectedLayouts);
            selectedLayouts.push(layout);
            $localStorage.user.selectedLayouts.push(layout);
        };
        /**
         * Get selected layouts by the user
         * @returns {Array}
         */
        LayoutServices.getSelectedLayouts=function(){
            return selectedLayouts;
        };
        /**
         * Set user selected layouts
         * @param array layoutKeys keys of default layouts selected by user
         */
        LayoutServices.setSelectedLayouts=function(layoutKeys){
            var userSelectedLayouts=[];

            angular.forEach(layoutKeys, function (v, k) {
                userSelectedLayouts.push(DefaultLayoutFactory.getSpecificDefaultLayout(v));
            });

            LayoutServices.resetSelectedLayouts(userSelectedLayouts);
            $localStorage.user.selectedLayouts=userSelectedLayouts;

            LayoutServices.setSelectedKeys(layoutKeys);
        };
        /**
         * Reset selected Layouts
         * @param selectedLayoutsList
         */
        LayoutServices.resetSelectedLayouts=function(selectedLayoutsList){
            selectedLayouts=selectedLayoutsList;
        };
        LayoutServices.getSpecificSelectedLayout=function(key){
            return selectedLayouts[key];
        }
        /**
         * Set selected keys of the layouts selected by user
         * @param keys
         */
        LayoutServices.setSelectedKeys=function(keys){
            selectedKeys=keys;
            $localStorage.user.selectedKeys=keys;
        };
        /**
         * Get keys of the default layout selected by the user
         * @returns {Array}
         */
        LayoutServices.getSelectedKeys=function(){
            return selectedKeys;
        };
        return LayoutServices
    }

})();