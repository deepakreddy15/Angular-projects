/**
 * Created by dpk on 11/25/2016.
 */
var loginapp=angular.module("mylogin", ["ngRoute"])
    .config( function ($routeProvider) {
        $routeProvider.
            when("/success", {resolve:{
            "check":function ($rootScope,$location) {
                    if(!$rootScope.loggedIn){
                        $location.path("/")
                    }
            }
        },templateUrl:"success.html", controller:"logincntrl"});

    });

/*loginapp.controller("registrationcntrl", function ($scope,$location) {
    console.log("hit it");
    $scope.submit=function () {
        alert("got it");
    }

});*/

loginapp.controller("logincntrl", function($scope,$location,$rootScope){
    $scope.inputtype="password";
    $scope.showhidepassword=function() {
        if ($scope.inputtype == "password") {
            $scope.inputtype = "text";
        } else {
            $scope.inputtype = "password";
        }
    }
    $scope.username="";
    $scope.password="";
   //alert("this is id"+ uname);
   $scope.submit=function () {
     //  alert("this is id"+ $scope.username);
        if($scope.username=="admin" && $scope.password=="admin"){
    $rootScope.loggedIn=true;
            alert("successfully loggedin");
            $location.path("/success");
        }
        else{
           $scope.message= "wrong uname or pword";
        }
    }
    console.log("hit it");
    $scope.done=function () {
        alert("got it");
        document.write("succesfuluu loggedin");
        //$location.path("/registration");

    }

});