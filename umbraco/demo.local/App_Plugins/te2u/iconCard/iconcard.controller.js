(function () {
    angular.module('umbraco')
        .controller("te2uIconCard", ["$scope", "addClassToCell", function ($scope, addClassToCell) {

            if (!$scope.control.title) {
                $scope.control.title = "";
            }
            if (!$scope.control.description) {
                $scope.control.description = "";
            }
            if (!$scope.control.addedCss) {
                $scope.control.addedCss = false;
            }

            addClassToCell("mdl-cell--4-col-tablet mdl-cell--5-col-phone mdl-card mdl-shadow--2dp card-padding", $scope);

        }]);
}());