(function () {
    angular.module("umbraco")
        .controller("te2u.featureListController", ['$scope', 'addClassToCell',
            function ($scope, addClassToCell) {

                if (!$scope.control.number) {
                    $scope.control.number = 0;
                }

                if (!$scope.control.title) {
                    $scope.control.title = ""
                }

                if (!$scope.control.description) {
                    $scope.control.description = "";
                }
                addClassToCell("mdl-cell--4-col-tablet", $scope);
            }]);
}());

