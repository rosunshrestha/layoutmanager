;(function(){
    "use strict";
    /**
     * Sets different layouts
     */
    angular.module("LayoutManagement").directive("setLayout",SetLayoutDirective);
    SetLayoutDirective.$inject=["LayoutFactory"];
    function SetLayoutDirective(LayoutFactory){
        var directive={};
        directive.restrict="A";
        directive.templateUrl="angular/Dashboard/views/layout-template.html";
        directive.link=function(scope,element,attrs,ngModel){
            var layoutKeyValue=attrs.setLayout;
            scope.selectedLayout=LayoutFactory.getSpecificSelectedLayout(layoutKeyValue);
        };
        return directive;
    }
})();
