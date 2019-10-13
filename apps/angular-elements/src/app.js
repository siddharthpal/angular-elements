(function() {
  var app = angular.module('todo-mvc-app-ng1', []);

  app.directive('ngEnter', function() {
    return function(scope, element, attrs) {
      element.bind('keydown keypress', function(event) {
        if (event.which === 13) {
          scope.$apply(function() {
            scope.$eval(attrs.ngEnter);
          });

          event.preventDefault();
        }
      });
    };
  });

  app.component('todoRootNg1', {
    controller: function($scope, $filter) {
      var todos = ($scope.todos = []);
      $scope.newTodo = '';
      $scope.editedTodo = null;

      $scope.$watch(
        'todos',
        function() {
          $scope.remainingCount = $filter('filter')(todos, {
            completed: false
          }).length;
          $scope.completedCount = todos.length - $scope.remainingCount;
        },
        true
      );

      $scope.add = function(event) {
        const todo = event.detail;
        todos.push(todo);
      };

      $scope.remove = function(event) {
        const todo = event.detail;
        todos = todos.filter(t => t.title !== todo.title);
        $scope.todos = todos;
        $scope.removeTodo(todo);
      }

      $scope.addTodo = function() {
        var newTodo = {
          title: $scope.newTodo.trim(),
          completed: false
        };

        if (!newTodo.title) {
          return;
        }

        const todoAngularElement = document.getElementsByTagName("todo-root-angular-element")[0];
        if (todoAngularElement) {
          todoAngularElement.pushTodoItem(newTodo);
        }

        todos.push(newTodo);
        $scope.newTodo = '';
      };

      $scope.removeTodo = function (todo) {
        todos = todos.filter(t => t.title !== todo.title);
        $scope.todos = todos;
        const todoAngularElement = document.getElementsByTagName("todo-root-angular-element")[0];
        if (todoAngularElement) {
          todoAngularElement.deleteTodoItem(todo);
        }
      };

      $scope.toggleCompleted = function(todo) {};
    },
    templateUrl: 'app.html'
  });
})();
