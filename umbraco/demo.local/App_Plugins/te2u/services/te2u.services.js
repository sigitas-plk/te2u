(function () {
    angular.module("umbraco")
        .factory("addClassToCell", function () {
            return function (css, $scope) {
                if (!$scope.area.config) {
                    $scope.area.config = {};
                    $scope.area.config.class = css;
                    $scope.control.addedCss = true;
                } else if (!$scope.control.addedCss) {
                    $scope.area.config.class += " " + css;
                    $scope.control.addedCss = true;
                }
                //console.log(JSON.stringify($scope.area.config));
                //console.log(JSON.stringify($scope.area.hasConfig));
            };
        });

}());