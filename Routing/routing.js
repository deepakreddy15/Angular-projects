/**
 * Created by dpk on 11/24/2016.
 */
var app=angular.module("myapp",["ngRoute"]).config(function($routeProvider){
    $routeProvider.when("/",{templateUrl:"list.html"})
        .when("/add",{templateUrl:"partial/add.html", controller:"addcntrl"})
        .when("/edit/:id", {templateUrl:"partial/add.html", controller:"editcntrl"})
        .when("/login", {templateUrl: "partial/login.html", controller:"mycntrl"})

});
/*app.controller("logincntrl", function ($rootScope,$scope,$location) {
    $scope.user={}
    console.log("hit" +$scope.user);
    var uname=$scope.username;
    var pword=$scope.password;
    $scope.submit=function () {
        alert(uname);
        if( uname=="admin" && pword=="admin"){
            $location.path("/login")
        }
        else{
            return "wrong uname and pword";
        }
    }

});*/
app.controller("editcntrl",function ($scope,$location,$rootScope,$routeParams) {
    //alert("hi");
    console.log($rootScope.employee[$routeParams.id]);
    // $scope.person[$routeParams.id];
    $scope.person=$rootScope.employee[$routeParams.id];

    $scope.save=function () {
    //$scope.person=$rootScope.employee[$routeParams.id];
    $location.path("/");
}

});

app.controller("addcntrl", function ($scope, $location, $rootScope) {
    console.log($rootScope.employee[1]);
    $scope.save=function () {
       $rootScope.employee.push($scope.person);
    $location.path("/");
    }


});

app.controller("mycntrl", function($scope,$rootScope,$location) {


    var employees=[{name:"depk",
    age:24,
    location: "hyderabad"},
        {name:"rahul",
            age:24,
            location: "hyderabad"},
        {name:"aroon",
            age:24,
            location: "hyderabad"},]

    $scope.employee = employees;
    $rootScope.employee=$scope.employee;


     $scope.submit=function (list) {

        if(list.username =="admin" && list.password=="admin"){
            $location.path("/login")
        }
        else{
            return "wrong uname and pword";
        }
    }

});