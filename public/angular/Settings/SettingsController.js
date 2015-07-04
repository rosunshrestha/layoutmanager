;
(function () {
    "use strict";
    angular.module("LayoutManagement").controller("SettingsController", SettingsController);
    SettingsController.$inject = ["$scope", "$location", "LayoutFactory", "DefaultLayoutFactory", "CONSTANT","$localStorage"];
    function SettingsController($scope, $location, LayoutFactory, DefaultLayoutFactory, CONSTANT,$localStorage) {
        LayoutFactory.extendUserDefinedCss($localStorage.user.css);
        $scope.user = {
            selectedLayouts: LayoutFactory.getSelectedLayouts(),
            definedCss:LayoutFactory.getUserDefinedCss()
        };
        angular.extend($scope.user.selectedLayouts[0], {isOpen: true});
        $scope.previousStep = function () {
            $location.path('/');
        }

        /**
         * Generate Layout package
         */
        $scope.generateLayout = function () {
            var data={
                "layout_info":$scope.user.selectedLayouts,
                "css_info":$scope.user.definedCss
            }
            LayoutFactory.generateLayout(data)
                .success(function (response) {
                    window.location.href = 'http://localhost:3000/'+response.url;
                }).error(function (error) {
                    console.log(error);
                });
        }




    }
})();
