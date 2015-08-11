var app = angular.module('secondApp', ['ngSanitize']);

app.controller("MySecondController", function($scope){
    $scope.number = 5;
})