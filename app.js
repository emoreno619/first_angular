var app = angular.module("firstApp", []);

app.controller("MyFirstController", function($scope){
    $scope.name = "Severus Snape";
})

app.controller("ExercisesController", function($scope){
    $scope.favColor = "Green";
    $scope.secondsInACentury = String(60 * 60 * 24 * 365);
    var date = new Date();
    if (date.getMinutes() < 10)
    	var minutes = "0" + date.getMinutes()
    else
    	var minutes = date.getMinutes()

    if(date.getHours() > 12)
    	var hours = date.getHours() - 12
    else
    	var hours = date.getHours()
    var time = String(hours + ":" + minutes);
    $scope.rightNow = time;

})