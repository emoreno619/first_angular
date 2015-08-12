var app = angular.module('reddit', ['ngSanitize']);

app.controller("redditController", function($scope){
    $scope.pickRandomNumber = function(){
        $scope.number = Math.floor(Math.random() * 10) + 1
    }

    $scope.reverseIt = function(){
    	var word = String($scope.reverse);
    	$scope.output = word.split('').reverse().join('')
    }
})