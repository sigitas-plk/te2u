var module = angular.module('myapp', []);

module.controller('mycontroller', function($scope){

    $scope.selectedStyle = function(button){
        console.log(JSON.stringify(button));
    };



    $scope.buttons = [
        {
            "name":"default",
            "css":"mdl-button"
        },
        {
            "name":"primary",
            "css":"mdl-button mdl-button--primary"
        },
        {
            "name":"Accent",
            "css":"mdl-button mdl-button--accent"
        },
        {
            "name":"Raised",
            "css":"mdl-button mdl-button--raised"
        },
        {
            "name":"Raised-Primary",
            "css":"mdl-button mdl-button--raised mdl-button--colored"
        },
        {
            "name":"Raised-Accent",
            "css":"mdl-button mdl-button--raised mdl-button--accent"
        }
    ];
});