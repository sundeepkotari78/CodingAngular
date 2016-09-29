var app = angular.module('myApp', ['ngGrid']);
app.controller('MyCtrl', function($scope, $http) {
    $scope.gridOptions = {
        data: 'myData',
        enablePinning: true,
        columnDefs: [{ field: "name", width: 120, pinned: true },
                    { field: "age", width: 120 },
                    { field: "birthday", width: 120 },
                    { field: "salary", width: 120 }]
    };
	$http({
    method : "GET",
    url : "http://www.mocky.io/v2/57ec0d9e11000044212d36a1"
					}).then(function mySucces(response) {console.log(response);alert("In")
					  $scope.myWelcome = response.data;
					}, function myError(response) {
					  $scope.myWelcome = response.statusText;
					});
    $scope.myData = [{ name: "Moroni", age: 50, birthday: "Oct 28, 1970", salary: "60,000" },
                    { name: "Tiancum", age: 43, birthday: "Feb 12, 1985", salary: "70,000" },
                    { name: "Jacob", age: 27, birthday: "Aug 23, 1983", salary: "50,000" },
                    { name: "Nephi", age: 29, birthday: "May 31, 2010", salary: "40,000" },
                    { name: "Enos", age: 34, birthday: "Aug 3, 2008", salary: "30,000" },
                    { name: "Moroni", age: 50, birthday: "Oct 28, 1970", salary: "60,000" },
                    { name: "Tiancum", age: 43, birthday: "Feb 12, 1985", salary: "70,000" },
                    { name: "Jacob", age: 27, birthday: "Aug 23, 1983", salary: "40,000" },
                    { name: "Nephi", age: 29, birthday: "May 31, 2010", salary: "50,000" },
                    { name: "Enos", age: 34, birthday: "Aug 3, 2008", salary: "30,000" },
                    { name: "Moroni", age: 50, birthday: "Oct 28, 1970", salary: "60,000" },
                    { name: "Tiancum", age: 43, birthday: "Feb 12, 1985", salary: "70,000" },
                    { name: "Jacob", age: 27, birthday: "Aug 23, 1983", salary: "40,000" },
                    { name: "Nephi", age: 29, birthday: "May 31, 2010", salary: "50,000" },
                    { name: "Enos", age: 34, birthday: "Aug 3, 2008", salary: "30,000" }];
});