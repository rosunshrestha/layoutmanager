;(function(){
    "use strict";
    /**
     * Set the angular module
     */
    angular.module("LayoutManagement",["ngRoute","ngStorage","ui.bootstrap.tpls","ui.bootstrap.accordion","checklist-model"]);

    /**
     * Configure the angular application
     */
    angular.module("LayoutManagement").config(configuration);
    configuration.$inject=["$routeProvider"];
    function configuration($routeProvider){
        $routeProvider.when('/',{
            "controller":"DashboardController",
            "templateUrl":"angular/Dashboard/views/dashboard.html"
        }).when('/settings',{
            "controller":"SettingsController",
            "templateUrl":"angular/Settings/views/settings.html"
        }).otherwise({
           redirectTo:'/'
        });
    }


    /**
     * Run the angular application
     */
    angular.module("LayoutManagement").run(run);
    run.$inject=["$rootScope","$location","$localStorage","LayoutFactory","CONSTANT"];
    function run($rootScope,$location,$localStorage,LayoutFactory,CONSTANT){
        //delete $localStorage.user;
        if(typeof $localStorage.user !==CONSTANT.UNDEFINED){
            LayoutFactory.resetSelectedLayouts($localStorage.user.selectedLayouts);
            LayoutFactory.setSelectedKeys($localStorage.user.selectedKeys);

        }else{
            $localStorage.user={
                selectedLayouts:[],
                selectedKeys:[]
            };
        }
    }
})();