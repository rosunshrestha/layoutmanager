;
(function () {
    "use strict";
    angular.module("LayoutManagement").controller("SettingsController", SettingsController);
    SettingsController.$inject = ["$scope", "$location", "LayoutFactory", "DefaultLayoutFactory", "CONSTANT"];
    function SettingsController($scope, $location, LayoutFactory, DefaultLayoutFactory, CONSTANT) {
        $scope.user = {
            selectedLayouts: LayoutFactory.getSelectedLayouts()
        };
        angular.extend($scope.user.selectedLayouts[0], {isOpen: true});
        $scope.previousStep = function () {
            $location.path('/');
        }

        /**
         * Generate Layout package
         */
        $scope.generateLayout = function () {
            LayoutFactory.generateLayout($scope.user.selectedLayouts)
                .success(function (response) {
                    console.log(response);
                }).error(function (error) {
                    console.log(error);
                });
        }




    }
})();