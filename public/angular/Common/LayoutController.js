;(function(){
    angular.module("LayoutManagement").controller("LayoutController",LayoutController);
    LayoutController.$inject=["$scope","LayoutFactory","DefaultLayoutFactory","CONSTANT"];
    function LayoutController($scope,LayoutFactory,DefaultLayoutFactory,CONSTANT){
        $scope.selectedLayout = LayoutFactory.getSpecificSelectedLayout($scope.selectedKey);
        $scope.selectedLayoutCss = "\n." + $scope.selectedLayout.className;
        $scope.selectedLayoutCss += "{\n";
        angular.forEach($scope.selectedLayout.css, function (v, k) {
            $scope.selectedLayoutCss += "\t" + k + ":" + v + ";\n";
        });
        $scope.selectedLayoutCss += "}\n";


        $scope.setDivCss = function (children) {
            angular.forEach(children, function (v, k) {
                $scope.selectedLayoutCss = LayoutFactory.addChildCss($scope.selectedLayoutCss, v);
                if (v.hasOwnProperty("child")) {
                    $scope.setDivCss(v.child);
                }
            });

        };
        $scope.setDivCss($scope.selectedLayout.child);
        $scope.selectedDiv=CONSTANT.MAIN_CONTAINER;
        $scope.selectedDivCss=DefaultLayoutFactory.getSpecificDivDefaultCss($scope.selectedDiv);
        $scope.getCss=function(divName){
            $scope.selectedDiv=divName;
            $scope.selectedDivCss=DefaultLayoutFactory.getSpecificDivDefaultCss($scope.selectedDiv);
            $scope.$apply();
        }
        $scope.setLayoutCss = function (selectedLayoutKey, divName) {
            var selectedLayout = $scope.user.selectedLayouts[selectedLayoutKey];
            if (divName === CONSTANT.MAIN_CONTAINER) {
                angular.extend
            }
        }

    }
})();