todoApp.controller('TasksCtrl', function($scope) {
  $scope.tasks = [
    { title: 'Collect coins' },
    { title: 'Eat mushrooms' },
    { title: 'Get high enough to grab the flag' },
    { title: 'Find the Princess' }
  ];
});

todoApp.controller('AddTaskCtrl', function($scope, $ionicHistory) {
  $scope.goBack = function() {
    $ionicHistory.goBack();
  };
});

todoApp.controller('ListsCtrl', function($scope) {
  $scope.lists = [
    { title: 'Super Mario' },
    { title: 'Duck Hunt' },
  ];
});
