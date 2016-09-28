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
        controllerAs: "vm"
      })
      .state("wanderPage",
      {
        url: "/",
        templateUrl: "./app/templates/wander.html",
        controller: "MainController",
        controllerAs: "vm"
      })
        .state("instaTweetPage",
        {
        url: "/",
        templateUrl: "./app/templates/instaTweet.html",
        controller: "MainController",
        controllerAs: "vm"
      })
        .state("blackjackPage",
        {
        url: "/",
        templateUrl: "./app/templates/blackjack.html",
        controller: "MainController",
        controllerAs: "vm"
      });

;

    $urlRouterProvider.otherwise("/");
  }
})();
