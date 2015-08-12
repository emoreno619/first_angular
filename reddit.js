var app = angular.module('reddit', ['ngSanitize']);

app.controller("redditController", function($scope){
   $scope.posts = []
   $scope.showForm = false;

   $scope.addPost = function(){
   	var newPost = $scope.post
   	$scope.posts.push(newPost)
   	$scope.contact = {}
   	// console.log(contacts)
   }

   $scope.toggleForm = function(){
   	$scope.showForm = true;
   }


})