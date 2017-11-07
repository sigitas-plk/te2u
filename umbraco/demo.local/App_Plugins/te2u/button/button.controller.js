(function () {
    angular.module("umbraco")
        .controller("te2uButtonController", ["$scope", "dialogService", function ($scope, dialogService) {
            //link selector
            $scope.chooseLink = function () {
                dialogService.open({
                    template: '../App_Plugins/te2u/button/linkpicker.view.html',
                    show: true,
                    callback: function (data) {
                        $scope.control.value = {
                            id: data.id || 0,
                            name: data.name || "",
                            url: data.url,
                            css:data.css||$scope.buttons[0].css
                        };
                    }

                });
            };
            //styles
            $scope.buttons = [
                {
                    "name": "Default",
                    "css": "mdl-button"
                },
                {
                    "name": "Primary",
                    "css": "mdl-button mdl-button--primary"
                },
                {
                    "name": "Accent",
                    "css": "mdl-button mdl-button--accent"
                },
                {
                    "name": "Default - Raised",
                    "css": "mdl-button mdl-button--raised"
                },
                {
                    "name": "Primary - Raised",
                    "css": "mdl-button mdl-button--raised mdl-button--colored"
                },
                {
                    "name": "Accent - Raised",
                    "css": "mdl-button mdl-button--raised mdl-button--accent"
                }
            ];
        }]);
}());
