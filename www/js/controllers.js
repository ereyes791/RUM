'use strict';
var  ctrl=angular.module('starter.controllers', ['ionic'])
ctrl.controller('MyController', function($scope, $ionicModal) {
  $ionicModal.fromTemplateUrl('my-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.openModal = function() {
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };
  //Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
  // Execute action on hide modal
  $scope.$on('modal.hidden', function() {
    // Execute action
  });
  // Execute action on remove modal
  $scope.$on('modal.removed', function() {
    // Execute action
  });
});

ctrl.service('dataService', function($http) {
this.getData = function(callbackFunc) {
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
 this.getData2 = function(callbackFunc) {
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
  this.getData3 = function(callbackFunc) {
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
   this.getData4 = function(callbackFunc) {
       $http({
           method: 'GET',
           url: 'https://rum-backend-db.herokuapp.com/rum'
        }).success(function(data){
           // With the data succesfully returned, call our callback
           callbackFunc(data);
       }).error(function(){
           alert("error");
       });
    }
});

ctrl.controller('tasteNotecontroller', function($scope, dataService) {

    $scope.color = dataService.getData(function(dataResponse) {
        $scope.color = dataResponse;

    });
    $scope.smell = dataService.getData2(function(dataResponse) {
        $scope.smell = dataResponse;

    });
    $scope.taste = dataService.getData3(function(dataResponse) {
        $scope.taste = dataResponse;

    });
    $scope.rum = dataService.getData4(function(dataResponse) {
        $scope.rum = dataResponse;

    });
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
