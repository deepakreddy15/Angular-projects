/**
 * Created by dpk on 12/14/2016.
 */
var app=angular.module("myapp",[]);
app.controller("mycntrl",['$scope','$http',function ($scope,$http) {
    console.log("this is get controller");
   $http.get("/contact").then(function(response) {
       console.log("This is the data from server: "+response.data);
       $scope.contactlist = response.data;
       console.log("got response from server");
   },function(error) {
        alert('Error: ');
        console.log("error: ");
        console.log(error);});

    $scope.addcontact = function () {
        // use $.param jQuery function to serialize data from JSON
        var data = {
            fName: $scope.name,
            lName: $scope.email,
            phone: $scope.phone
        };

        var config = {
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
            }
        }

        $http.post('/contact', data, config)
            .then(function (data, status, headers, config) {
                $scope.PostDataResponse = data;
                console.log("this is the posting data: " + data);
            }
            ,function (data, status, header, config){
                $scope.ResponseDetails = "Data: " + data +
                    "<hr />status: " + status +
                    "<hr />headers: " + header +
                    "<hr />config: " + config;
            });
    };

}])

