angular.module('practiceApp', ['ngRoute']);


angular.module('practiceApp').config(function($routeProvider, $locationProvider){
  $routeProvider
    .when('/students', {
      templateUrl: 'views/students.html',
      controller: 'StudentsController'
    })

  $locationProvider.html5Mode(true);

})



angular.module('practiceApp').controller('StudentsController',function($scope, $http){
  $http.get('main/students').then(function(response){
    console.log(response);
    $scope.students = response.data.students;
    return $scope.students;
  })
});
