;
(function () {
    "use strict";
    angular.module("LayoutManagement").controller("DashboardController", DashboardController);
    DashboardController.$inject = ["$scope", "$location", "LayoutFactory", "DefaultLayoutFactory"];
    function DashboardController($scope, $location, LayoutFactory, DefaultLayoutFactory) {
        $scope.layouts = DefaultLayoutFactory.getAllDefaultLayouts();
        $scope.user = {
            layouts: LayoutFactory.getSelectedKeys()
        };

        $scope.checkAll = function () {
            $scope.user.layouts = $scope.layouts.map(function (item) {
                return item.id;
            });
        };
        $scope.uncheckAll = function () {
            $scope.user.layouts = [];
        };
        $scope.checkFirst = function () {
            $scope.user.layouts.splice(0, $scope.user.layouts.length);
            $scope.user.layouts.push(1);
        };

        $scope.oneAtATime = true;

        $scope.items = ['Item 1', 'Item 2', 'Item 3'];

        $scope.addItem = function () {
            var newItemNo = $scope.items.length + 1;
            $scope.items.push('Item ' + newItemNo);
        };

        $scope.status = {
            isFirstOpen: true,
            isFirstDisabled: false
        };

        /**
         * next step of layout html/css generation
         */
        $scope.nextStep = function () {

            LayoutFactory.setSelectedLayouts($scope.user.layouts);
            $location.path('/settings');
        }
    }

})();
