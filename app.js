var app = angular.module('firstApp', ['ngSanitize']);

app.controller("MyFirstController", function($scope){
    $scope.name = "Severus Snape";
})

app.controller("ExercisesController", function($scope, $sce){
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

    $scope.names = ["Harry", "Ron", "Hermione", "Sirius", "Hedwig", "Tonks"];
    $scope.symbols = ["&spades;", "&clubs;", "&hearts;", "&diams;"];
    $scope.dups = [1,1,2,5,6,9,9,9];
    $scope.obj = {name:"Andrew", age:21, home:"San Diego"}
    $scope.cameras = [
        {
            title: "Nikon D3100 DSLR",
            image: "http://ecx.images-amazon.com/images/I/713u2gDQqML._SX522_.jpg",
            rating: 3.4,
            price: 369.99,
            onSale: true
        },
        {
            title: "Canon EOS 70D",
            image: "http://ecx.images-amazon.com/images/I/81U00AkAUWL._SX522_.jpg",
            rating: 2.0,
            price: 1099.0,
            onSale: false
        },
        {
            title: "Nikon D810A",
            image:"http://ecx.images-amazon.com/images/I/91wtXIfLl2L._SX522_.jpg",
            rating: 4.2,
            price: 3796.95,
            onSale: true
        }
    ]
})