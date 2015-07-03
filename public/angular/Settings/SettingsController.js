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

/*        $scope.maincontainer=DefaultLayoutFactory.getSpecificDivDefaultCss("main-container");
        $scope.collleft=DefaultLayoutFactory.getSpecificDivDefaultCss("col-l-left");
        $scope.colrright=DefaultLayoutFactory.getSpecificDivDefaultCss("col-r-right");
        $scope.colmain=DefaultLayoutFactory.getSpecificDivDefaultCss("col-main");
        $scope.main=DefaultLayoutFactory.getSpecificDivDefaultCss("main");
        $scope.colleft=DefaultLayoutFactory.getSpecificDivDefaultCss("col-left");
        $scope.colright=DefaultLayoutFactory.getSpecificDivDefaultCss("col-right");*/

        $scope.setLayoutCss = function (selectedLayoutKey, divName) {
            var selectedLayout = $scope.user.selectedLayouts[selectedLayoutKey];
            if (divName === CONSTANT.MAIN_CONTAINER) {
                angular.extend
            }
        }
    }
})();