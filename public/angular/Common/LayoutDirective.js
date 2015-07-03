;
(function () {
    "use strict";
    /**
     * Sets different layouts
     */
    angular.module("LayoutManagement").directive("setLayout", SetLayoutDirective);
    SetLayoutDirective.$inject = ["LayoutFactory", "CONSTANT", "DefaultLayoutFactory"];
    function SetLayoutDirective(LayoutFactory, CONSTANT, DefaultLayoutFactory) {
        var directive = {};
        directive.restrict = "A";
        directive.templateUrl = "angular/Dashboard/views/layout-template.html";
        directive.controller = function () {

        }
        directive.link = function (scope, element, attrs, ngModel) {
            var layoutKeyValue = attrs.setLayout;
            scope.selectedKey = layoutKeyValue;
            scope.selectedLayout = LayoutFactory.getSpecificSelectedLayout(layoutKeyValue);
            scope.selectedLayoutCss = "\n." + scope.selectedLayout.className;
            scope.selectedLayoutCss += "{\n"
            angular.forEach(scope.selectedLayout.css, function (v, k) {
                scope.selectedLayoutCss += "\t" + k + ":" + v + ";\n";
            });
            scope.selectedLayoutCss += "}\n";


            scope.setDivCss = function (children) {
                angular.forEach(children, function (v, k) {
                    scope.selectedLayoutCss = LayoutFactory.addChildCss(scope.selectedLayoutCss, v);
                    if (v.hasOwnProperty("child")) {
                        scope.setDivCss(v.child);
                    }
                });

            };
            scope.setDivCss(scope.selectedLayout.child);
        };
        return directive;
    }
})();

(function () {
    "use strict";
    angular.module("LayoutManagement").directive("containerCss", ContainerCssDirective);
    function ContainerCssDirective() {
        var directive = {};
        console.log(element);
        directive.link = function (scope, element, attrs, ngModel) {

            var selectedDiv = attrs.containerCss;
            scope.getSelectedDivInfo(selectedDiv);
        }
    }
});
