var app = angular.module('secondApp', ['ngSanitize']);

app.controller("MySecondController", function($scope){
    $scope.pickRandomNumber = function(){
        $scope.number = Math.floor(Math.random() * 10) + 1
    }

    $scope.reverseIt = function(){
    	var word = String($scope.reverse);
    	$scope.output = word.split('').reverse().join('')
    }
})

app.controller("contactController", function($scope){
	$scope.contacts = []

	$scope.addContact = function(){
		var newContact = $scope.contact
		$scope.contacts.push(newContact)
		$scope.contact = {}
		// console.log(contacts)
	}
})

app.controller("pongController", function($scope){
	$scope.p1Score = 0
	$scope.p2Score = 0
	var turnCounter = 0
	var p1ServeFirst;
	var p1Wins = 0;
	var p2Wins = 0;
	$scope.p1IsWinner = 0;

	$scope.score1 = function(){
		$scope.p1Score += 1
		turnCounter += 1
		if(!checkWin())
			checkServe()
		else{
			$scope.p1Serve = "WINNER!"
			$scope.p2Serve = ""
			$scope.p1IsWinner = 1;
		}
	}

	$scope.score2 = function(){
		$scope.p2Score += 1
		turnCounter += 1
		if(!checkWin())
			checkServe()
		else{
			$scope.p2Serve = "WINNER!"
			$scope.p1Serve = ""
			$scope.p1IsWinner = 2;
		}
	}

	$scope.reset = function(){
		$scope.p1Score = 0
		$scope.p2Score = 0
		$scope.p1Serve = ""
		$scope.p2Serve = ""
		turnCounter = 0
		$scope.p1IsWinner = 0
	}

	function checkServe(){
		if($scope.p1Score == 0 && $scope.p2Score == 1){
			$scope.p2Serve = "Serving"
			p1ServeFirst = false;
		} else if($scope.p2Score == 0 && $scope.p1Score == 1){
			$scope.p1Serve = "Serving"
			p1ServeFirst = true;
		} else if (p1ServeFirst){
			if(turnCounter < 3 || (turnCounter > 4 && turnCounter < 7) || (turnCounter > 8 && turnCounter < 11) || (turnCounter > 12 && turnCounter < 15) || (turnCounter > 16 && turnCounter < 19)){
				$scope.p1Serve = "Serving"
				$scope.p2Serve = ""
			} else {
				$scope.p2Serve = "Serving"
				$scope.p1Serve = ""
			}
		} else {
			if(turnCounter < 3 || (turnCounter > 4 && turnCounter < 7) || (turnCounter > 8 && turnCounter < 11) || (turnCounter > 12 && turnCounter < 15) || (turnCounter > 16 && turnCounter < 19)){
				$scope.p2Serve = "Serving"
				$scope.p1Serve = ""
			} else {
				$scope.p1Serve = "Serving"
				$scope.p2Serve = ""
			}
		}
	}

	function checkWin(){
		var flag = false;
		if($scope.p1Score == 11){
			p1Wins += 1;
			flag = true
		} else if ($scope.p2Score == 11){
			p2Wins += 1;
			flag = true
		}

		return flag;

	}
})