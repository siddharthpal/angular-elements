(function () {
  var app = angular.module('todo-mvc-app-ng1', []);

  app.directive('ngEnter', function () {
    return function (scope, element, attrs) {
      element.bind("keydown keypress", function (event) {
        if (event.which === 13) {
          scope.$apply(function () {
            scope.$eval(attrs.ngEnter);
          });

          event.preventDefault();
        }
      });
    };
  });

  app.component('todoRootNg1', {
    controller: function ($scope, $filter) {
      var todos = $scope.todos = [];
      $scope.newTodo = '';
      $scope.editedTodo = null;

      $scope.$watch('todos', function () {
        $scope.remainingCount = $filter('filter')(todos, {
          completed: false
        }).length;
        $scope.completedCount = todos.length - $scope.remainingCount;
      }, true);

      $scope.addTodo = function () {
        var newTodo = {
          title: $scope.newTodo.trim(),
          completed: false
        };

        if (!newTodo.title) {
          return;
        }

        todos.push(newTodo);
        $scope.newTodo = '';
      };

      $scope.toggleCompleted = function (todo) {
      
      };
    },
    templateUrl: 'app.html'
  });

})();
