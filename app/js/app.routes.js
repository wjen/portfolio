(function() {
  'use strict';

  angular.module("Portfolio")
    .config(AppRoutes);

  AppRoutes.$inject = ["$stateProvider", "$urlRouterProvider"];

  function AppRoutes($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state("homePage",
      {
        url: "/",
        templateUrl: "./app/templates/home.html",
        controller: "MainController",

      })
      .state("wanderPage",
      {
        url: "/",
        templateUrl: "./app/templates/wander.html",
        controller: "MainController",

      })
        .state("instaTweetPage",
        {
        url: "/",
        templateUrl: "./app/templates/instaTweet.html",
        controller: "MainController",

      })
        .state("blackjackPage",
        {
        url: "/",
        templateUrl: "./app/templates/blackjack.html",
        controller: "MainController",

      });

;

    $urlRouterProvider.otherwise("/");
  }
})();
