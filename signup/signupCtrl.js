angular.module('networkingApp')
    .controller('signupCtrl', function($scope, userServ){

      $scope.createUser = function(firstName, lastName, email, age, gender, city, state, username, password){
        userServ.createUser(firstName, lastName, age, email, gender, city, state, username, password);
        $scope.firstName = '';
        $scope.lastName = '';
        $scope.email = '';
        $scope.age = '';
        $scope.gender = '';
        $scope.city = '';
        $scope.state = '';
        $scope.username = '';
        $scope.password = '';
      }

      $scope.addFireComment = function(word){
        userServ.addFireComment(word);
      }

    })
