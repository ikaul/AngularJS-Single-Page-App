(function() {
  'use strict';
  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController ($scope) {
    $scope.foodItems = ""
    $scope.message = "";
    $scope.checkLunchItems = function() {
      $scope.foodItems = $scope.foodItems.trim();

      if ($scope.foodItems === "") {
        $scope.message = "Please enter data first.";
        $scope.noticeType = "danger";
      }
      else {
        var $foodItemsArray = $scope.foodItems.split(",");
        var $length = $foodItemsArray.length;
        if ( ($length <= 3) || ($length == 4 && $foodItemsArray[3].trim() === "") ) {
          $scope.message = "Enjoy!";
          $scope.noticeType = "success";
        }
        else {
          $scope.message = "Too much!";
          $scope.noticeType = "warning";
        }
      }
    };
  }
})();
