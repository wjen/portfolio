(function(){
  'use strict';

  angular.module("Portfolio")
    .run(['$anchorScroll', function($anchorScroll) {
      $anchorScroll.yOffset = 70;   // always scroll by 50 extra pixels
    }])
    .controller("MainController", ['$scope', '$location', '$anchorScroll',
      function($scope, $location, $anchorScroll) {
        $scope.gotoPortfolio = function() {
          $location.hash('portfolio');
          $anchorScroll();
        };
        $scope.gotoAbout = function() {
          $location.hash('about');
          $anchorScroll();
        };
        $scope.gotoContact = function() {
          $location.hash('contact');
          $anchorScroll();
        };
      }
    ]);

})();
