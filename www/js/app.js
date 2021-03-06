// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js

//var ngModule = angular.module('ngApp',['angularMoment']);
//ngModule.constant('moment');
angular.module('starter', ['ionic', 'starter.controllers', 'angularMoment', 'ionic-material'])

.run(function($rootScope, $ionicPlatform, $state, AuthService) {
  $ionicPlatform.ready(function() {
    if (!AuthService.isAuthenticated()) {
      AuthService.doLogin();
      console.log('Logging in');
    }
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
    $rootScope.$on('$stateChangeStart', function (event, next, nextParams, fromState) {
      if (!AuthService.isAuthenticated()) {
          AuthService.doLogin();
          //$state.go('login');
          console.log('Logging in');
        }
      }
    );
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })
  .state('app.register', {
      url: '/register',
      views: {
        'menuContent': {
          templateUrl: 'templates/register.html',
          controller: 'RegisterCtrl'
        }
      }
    })
  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })
    .state('app.players', {
      url: '/players',
      views: {
        'menuContent': {
          templateUrl: 'templates/players.html',
          controller: 'MasterCtrl'
        }
      }
    })
  .state('app.matches', {
      cache: false,
      url: '/matches',
      views: {
        'menuContent': {
          templateUrl: 'templates/matches.html',
          controller: 'MatchCtrl'
        }
      }
    })
  .state('app.match', {
      url: '/match',
      views: {
        'menuContent': {
          templateUrl: 'templates/match.html',
          controller: 'PlayerCtrl'
        }
      }
    })
	.state('app.decks', {
      url: '/decks',
      views: {
        'menuContent': {
          templateUrl: 'templates/decks.html',
          controller: 'DecksCtrl'
        }
      }
    })
	.state('app.adddeck', {
      url: '/adddeck',
      views: {
        'menuContent': {
          templateUrl: 'templates/adddeck.html',
          controller: 'DecksCtrl'
        }
      }
    })
	.state('app.cards', {
      url: '/cards',
      views: {
        'menuContent': {
          templateUrl: 'templates/cards.html',
          controller: 'CardsCtrl'
        }
      }
    })
	.state('app.newmatch', {
      url: '/newmatch',
      views: {
        'menuContent': {
          templateUrl: 'templates/newmatch.html',
          controller: 'NewMatchCtrl'
        }
      }
    })
  .state('app.playlist', {
    url: '/playlist/:id',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlayerDetailCtrl'
      }
    }
  })
  .state('app.playeredit', {
    url: '/playeredit',
    views: {
      'menuContent': {
        templateUrl: 'templates/playeredit.html',
        controller: 'PlayerEditCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/players');
});
