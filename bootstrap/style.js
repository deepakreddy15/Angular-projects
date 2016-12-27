/**
 * Created by dpk on 12/1/2016.
 */
var app=angular.module("myapp",[]);
app.controller("mycntrl",function ($scope) {
    var employee=[{
        name:"dpk",
        salary:2309,
        email:"deepak@gmail.com",
        phone:"987-768-9876"
    },
        {
            name:"dpker",
            salary:2303,
            email:"shnek@gmail.com",
            phone:"987-765-2346"
        }]
    $scope.employee=employee
$scope.clr="danger";
  /*  if(employee.name.length==10){
        $scope.clr=active;
    }else {
        $scope.clr=danger
    }*/
})