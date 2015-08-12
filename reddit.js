var app = angular.module('reddit', ['ngSanitize']);

app.controller("redditController", function($scope){
   $scope.posts = []
   $scope.showForm = false;

   $scope.addPost = function(){
   	
   	if($scope.post.title && $scope.post.author && $scope.post.description && $scope.post.image){
	   	var newPost = $scope.post
	   	$scope.post.votes = 0
	   	$scope.post.comments = []
	   	$scope.posts.push(newPost)
	   	$scope.showForm = !$scope.showForm
   	}
   }

   $scope.addComment = function(){

   	if($scope.comment.author && $scope.comment.text){
   		var newComment = $scope.comment
   		console.log($scope.post.title)
   		$scope.post.comments.push(newComment)
   		$scope.showCommentForm = !$scope.showCommentForm
   	}
   }

   $scope.toggleComments = function(){
   	$scope.showComments = !$scope.showComments
   }

   $scope.toggleCommentForm = function(){
   	$scope.comment = {}
   	$scope.showCommentForm = !$scope.showCommentForm
   }

   $scope.toggleForm = function(){
   	$scope.post = {}
   	$scope.showForm = !$scope.showForm
   }


})