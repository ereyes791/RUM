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
  this.getNotes = function(callbackFunc) {
      $http({
          method: 'GET',
          url: 'https://rum-backend-db.herokuapp.com/note'
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

ctrl.controller('tasteNotecontroller', function($scope, dataService, $http) {
  $scope.search={};
$scope.note={brand: ''};
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
      $scope.checked2 = {word: ''}
      $scope.itensityTaste= 3;
      $scope.taste = dataResponse;
      $scope.tastes=$scope.pudge($scope.taste,$scope.checked2.word);
      $scope.refresh2=function(){
        $scope.tastes=$scope.pudge($scope.taste,$scope.checked2.word);
      }


    });
    $scope.rum = dataService.getRum(function(dataResponse) {
      $scope.rum = dataResponse;
      $scope.brand=$scope.nonrepeatbrand($scope.rum);
      $scope.name=$scope.relatedto($scope.rum);

    });
    $scope.notes = dataService.getNotes(function(dataResponse) {
      $scope.notes = dataResponse;
    });

    $scope.relatedto=function(word,rum){
      var array=[];
      for (var i = 0; i < rum.length; i++) {
        if(rum[i].brand==word){
          array.push(rum[i]);

        }
      }
      return array;
    }
    $scope.nonrepeatbrand=function(rum) {
      var array2=[];
      for (var i = 0; i < rum.length; i++) {
        if(!$scope.repeatword(rum[i].brand,array2)){
            array2.push(rum[i]);
      }

    }
      return array2;
    }
    $scope.repeatword=function(word,array) {
      for (var j = 0; j < array.length; j++) {
        if(array[j].brand==word){
          return true;
        }
      }
      return false;
    }
    $scope.pudge=function(smell,word){
    var array =[];
      for (var i = 0; i <smell.length; i++) {
        if(smell[i].name==word || smell[i].category==word){
          if(smell[i].name==word){
            for (var j = 0; j < smell.length; j++) {
              if(smell[j].category==smell[i].category){
                array.push(smell[j]);
              }
            }
          }else{
          array.push(smell[i]);
          }
        }

      }
      return array;
    };

    $scope.getID=function (word,rum) {
      var id = 0;
      for (var i = 0; i < rum.length; i++) {
        if(rum[i].name==word){
          id = rum[i].id;
        }
      }
      return id;
    }
    $scope.getit=function () {
    $scope.discover=discover(search,smell,taste,color)
    }
    $scope.discover=function(word,smell,taste,notes,color) {
      var discover=[];
        var id ;
      for (var i = 0; i < smell.length; i++) {
        if(word==smell[i].name){
        id=smell[i].id;
        }
      }
      for (var j = 0; j < taste.length; j++) {
        if(word==taste[j].name){
        id=taste[j].id;
        }
      }
        for (var t = 0; t < color.length; t++) {
          if(word==color[t].name){
          id=color[t].id;
          }
      }
    for (var k = 0; k < notes.length; k++) {
      if(notes[k].smell_id==id || notes[k].taste_id==id|| notes[k].color_id==id ){
    $scope.discover.push(notes[k]);
      }
    }
  return discover;
    }




    $scope.postNote=function (rum,taste,smell,color){
     var data ={
        user_id: '1'
        , rum_id: rum,
         taste_id: taste ,
        tastedIntensity: '3',
         smell_id: smell,
          smellIntensity: '3',
           color_id: color

     };



            $http.post('https://rum-backend-db.herokuapp.com/note', data)
            .success(function (data, status, headers, config) {
                $scope.PostDataResponse = data;
            })
            .error(function (data, status, header, config) {
                $scope.ResponseDetails = "Data: " + data +
                    "<hr />status: " + status +
                    "<hr />headers: " + header +
                    "<hr />config: " + config;
            });


    };

});
