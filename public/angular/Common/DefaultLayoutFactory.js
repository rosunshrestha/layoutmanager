;(function(){
 "use strict";
    angular.module("LayoutManagement").factory("DefaultLayoutFactory",DefaultLayoutFactory);
    DefaultLayoutFactory.$inject=[];
    /**
     * Contains Services related to default layouts
     * @returns {{}}
     * @constructor
     */
    function DefaultLayoutFactory(){
        var DefaultLayoutServices={};
        /**
         * Get all default Layouts
         * @returns {*[]}
         */
        DefaultLayoutServices.getAllDefaultLayouts=function(){
            return defaultLayouts;
        }
        DefaultLayoutServices.getSpecificDefaultLayout=function(key){
            return defaultLayouts[key];
        }
        /**
         * Parse child
         * @param info
         * @param children
         * @param iteration
         * @returns {*}
         */
        DefaultLayoutServices.test = function (info, children,iteration) {
            var startSeparator,endSeparator;
            switch(parseInt(iteration,10)){
                case 0:
                    startSeparator="{";
                    endSeparator="}";
                    break;
                case 1:
                    startSeparator="(";
                    endSeparator=")";
                    break;
                default :
                    startSeparator="[";
                    endSeparator="]";
            }
            info.hasChild = false;
            var noOfChildren = LayoutServices.getObjectCount(children);
            angular.forEach(children, function (v, k) {
                this.divHierarchy = this.divHierarchy + startSeparator + v.className;
                if (v.hasOwnProperty("child")) {
                    this.hasChild = true;
                    iteration++;
                    LayoutServices.test(this, v.child,iteration);
                } else {
                    this.divHierarchy = this.divHierarchy + endSeparator;
                }
            }, info);
            if (!info.hasChild) {
                info.divHierarchy = info.divHierarchy + "]";
                return info;
            }


        };
        return DefaultLayoutServices;
    }

    /**
     * Default Layouts
     * @type {*[]}
     */
    var defaultLayouts = [{
        "className": "col-1-layout",
        "colLeft": false,
        "colLLeft": false,
        "colRRight": false,
        "colRight": false,
        "child": {
            0: {
                "className": "col-main",
                "child": {
                    0: {
                        "className": "main",
                        "css": cssProperties
                    }

                }
            }

        }
    }, {
        "className": "col-2-right-layout",
        "colLeft": false,
        "colLLeft": false,
        "colRRight": false,
        "colRight": true,
        "child": {
            0: {
                "className": "col-main",
                "child": {
                    0: {
                        className: "main",
                        css: cssProperties
                    }
                }
            },
            1: {
                "className": "col-right",
                css: cssProperties
            }
        }
    }, {
        "className": "col-2-left-layout",
        "colLeft": true,
        "colLLeft": false,
        "colRRight": false,
        "colRight": false,
        "child": {
            0: {
                "className": "col-left",
                "css": cssProperties
            },
            1: {
                "className": "col-main",
                "child": {
                    0: {
                        className: "main",
                        css: cssProperties
                    }
                }
            }
        }
    }, {
        "className": "col-3-right-layout",
        "colLeft": false,
        "colLLeft": true,
        "colRRight": false,
        "colRight": true,
        "child": {
            0: {
                "className": "col-main",
                "child": {
                    0: {
                        className: "col-l-left",
                        css: cssProperties
                    },
                    1: {
                        className: "main",
                        css: cssProperties
                    }
                }
            },
            1: {
                "className": "col-right",
                "css": cssProperties
            }
        }
    }, {
        "className": "col-3-left-layout",
        "colLeft": true,
        "colLLeft": false,
        "colRRight": true,
        "colRight": false,
        "child": {
            0: {
                "className": "col-left",
                "css": cssProperties
            },
            1: {
                "className": "col-main",
                "child": {
                    0: {
                        className: "main",
                        css: cssProperties
                    },
                    1: {
                        className: "col-r-right",
                        css: cssProperties
                    }
                }
            }

        }
    }, {
        "className": "col-3-r-right-layout",
        "colLeft": false,
        "colLLeft": false,
        "colRRight": true,
        "colRight": true,
        "child": {
            0: {
                "className": "col-main",
                "child": {
                    0: {
                        className: "main",
                        css: cssProperties
                    },
                    1: {
                        className: "col-r-right",
                        css: cssProperties
                    }
                }
            },
            1: {
                "className": "col-right",
                "css": cssProperties
            }

        }
    }, {
        "className": "col-3-l-left-layout",
        "colLeft": true,
        "colLLeft": true,
        "colRRight": false,
        "colRight": false,
        "child": {
            0: {
                "className": "col-left",
                "css": cssProperties
            },
            1: {
                "className": "col-main",
                "child": {
                    0: {
                        className: "col-l-left",
                        css: cssProperties
                    },
                    1: {
                        className: "main",
                        css: cssProperties
                    }

                }
            }
        }
    }
    ];
    var cssProperties = {
        "width": 0,
        "padding-top": 0,
        "padding-right": 0,
        "padding-bottom": 0,
        "padding-left": 0,
        "background": "none"
    }
})();