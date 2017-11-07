(function () {
    angular.module("umbraco")
        .controller("te2uIconPicker", ['$scope', 'dialogService', '$http',
            function ($scope, dialogService, $http) {
                $http.get('/App_Plugins/te2u/materialIcons/icons/icons.json').success(function (data) {
                    $scope.icons = data;
                });
                $scope.choose = function () {
                    dialogService.open({
                        template: '../App_Plugins/te2u/materialIcons/iconpicker.view.html',
                        show: true,
                        callback: function (data) {
                           $scope.control.icon = data;
                        }
                    });
                };
                $scope.submitClass = function (icon) {
                    $scope.submit(icon);
                };
            }]);
}());
