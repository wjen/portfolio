(function() {
  'use strict';

  angular.module("Portfolio")
    .config(AppRoutes);

  AppRoutes.$inject = ["$stateProvider", "$urlRouterProvider"];

  function AppRoutes($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state("homePage", {
        url: "/",
        templateUrl: "./app/templates/home.html",
        controller: "MainController",
        controllerAs: "vm"
      });

    $urlRouterProvider.otherwise("/");
  }
})();
