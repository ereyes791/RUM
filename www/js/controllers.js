'use strict';
var  ctrl=angular.module('starter.controllers', ['ionic'])

ctrl.service('dataService', function($http) {
this.getColor = function(callbackFunc) {
  var color = 'color';

    $http({

        method: 'GET',
        url: 'https://rum-backend-db.herokuapp.com/'+color
     }).success(function(data){
        // With the data succesfully returned, call our callback
        console.log(data);
        callbackFunc(data);
    }).error(function(){
        alert("error");
    });
 }
 this.getSmell = function(callbackFunc) {
     $http({
         method: 'GET',
         url: 'https://rum-backend-db.herokuapp.com/smell'
      }).success(function(data){
         // With the data succesfully returned, call our callback
         callbackFunc(data);
     }).error(function(){
         alert("error");
     });
  }
  this.getTaste = function(callbackFunc) {
      $http({
          method: 'GET',
          url: 'https://rum-backend-db.herokuapp.com/taste'
       }).success(function(data){
          // With the data succesfully returned, call our callback
          callbackFunc(data);
      }).error(function(){
          alert("error");
      });
   }
   this.getRum = function(callbackFunc) {
       $http({
           method: 'GET',
           url: 'https://rum-backend-db.herokuapp.com/rum'
        }).success(function(data){
           // With the data succesfully returned, call our callback
           callbackFunc(data);
           console.log(data);

       }).error(function(){
           alert("error");
       });
    }
});

ctrl.controller('tasteNotecontroller', function($scope, dataService ) {

    $scope.color = dataService.getColor(function(dataResponse) {
       $scope.color = dataResponse;

    });
    $scope.smell = dataService.getSmell(function(dataResponse) {
      $scope.checked = {word: ''}
      $scope.itensitySmel= 3;
      $scope.smell = dataResponse;
      $scope.smells=$scope.pudge($scope.smell,$scope.checked.word);
      $scope.refresh=function(){
        $scope.smells=$scope.pudge($scope.smell,$scope.checked.word);
      }


    });
    $scope.taste = dataService.getTaste(function(dataResponse) {
      $scope.checked2 = {word: 'sweet'}
      $scope.itensityTaste= 3;
      $scope.taste = dataResponse;
      $scope.tastes=$scope.pudge($scope.taste,$scope.checked2.word);
      $scope.refresh2=function(){
        $scope.tastes=$scope.pudge($scope.taste,$scope.checked2.word);
      }


    });
    $scope.rum = dataService.getRum(function(dataResponse) {
      $scope.rum = dataResponse;


    });
    $scope.pudge=function(smell,word){
      console.log(smell);
      console.log(word);
    var array =[];
      for (var i = 0; i <smell.length; i++) {
        if(smell[i].name==word || smell[i].category==word){
          array.push(smell[i]);
        }

      }
      return array;
    };


});



ctrl.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})


.controller('PlaylistCtrl', function($scope, $stateParams) {
});
