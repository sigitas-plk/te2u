(function(){

    var app = angular.module('app',[]);

    app.controller('te2uProcessController', ['$scope', function($scope){

        $scope.options = ["Icon","Text"];
        $scope.selectedOption = $scope.options[0];

    }]);

}());