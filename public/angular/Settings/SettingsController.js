(function () {
    "use strict";
    angular.module("LayoutManagement").controller("SettingsController", SettingsController);
    SettingsController.$inject = ["$scope","$location", "LayoutFactory"];
    function SettingsController($scope,$location, LayoutFactory) {
        $scope.user = {
            selectedLayouts: LayoutFactory.getSelectedLayouts()
        };
        angular.extend($scope.user.selectedLayouts[0],{isOpen:true});
        $scope.previousStep=function(){
            $location.path('/');
        }
    }
})();