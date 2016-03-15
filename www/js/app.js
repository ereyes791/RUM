// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/settings.html',
    controller: 'AppCtrl'
  })


    .state('app.menu', {
      url: '/menu',
      views: {
        'menuContent': {
          templateUrl: 'templates/menu.html'
        }
      }
    })
    .state('app.info', {
      url: '/info',
      views: {
        'menuContent': {
          templateUrl: 'templates/info.html'
          //controler
        }
      }
    })
        .state('app.color', {
      url: '/color',
      views: {
        'menuContent': {
          templateUrl: 'templates/color.html'
          //controler
        }
      }
    })
        .state('app.smell', {
      url: '/smell',
      views: {
        'menuContent': {
          templateUrl: 'templates/smell.html'
          //controler
        }
      }
    })

    .state('app.taste', {
      url: '/taste',
      views: {
        'menuContent': {
          templateUrl: 'templates/taste.html'
          //controler
        }
      }
    })
     .state('app.review', {
      url: '/review',
      views: {
        'menuContent': {
          templateUrl: 'templates/review.html'
          //controler
        }
      }
    })
     .state('app.mynotes', {
      url: '/notes',
      views: {
        'menuContent': {
          templateUrl: 'templates/notes.html'
          //controler
        }
      }
    })


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/menu');
});
