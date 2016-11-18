var todoApp = angular.module('todo', ['ionic', 'ngCordova'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

  .state('task', {
    url: '/task',
    templateUrl: 'templates/add-task.html',
    controller: 'AddTaskCtrl'
  })

  .state('tasks', {
    url: '/tasks',
    templateUrl: 'templates/tasks.html',
    controller: 'TasksCtrl'
  });

  $urlRouterProvider.otherwise('/tasks');

});
