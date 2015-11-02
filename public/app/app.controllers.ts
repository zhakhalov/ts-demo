/// <reference path="app.services.ts" />

namespace controllers {

  interface ITodoListScope extends ng.IScope {
    todos: Array<services.ITodo>;
  }

  interface ITodoScope extends ng.IScope {
    todo: services.ITodo;
  }

  export class TodoListCtrl {

    private $scope: ITodoListScope;
    private toDoService: services.TodoService;

    public static $inject: string[] = ['$scope', 'app.TodoService'];
    constructor($scope: ITodoListScope, toDoService: services.TodoService) {
      this.$scope = $scope;
      this.toDoService = toDoService;
      this.toDoService.findTodos({})
        .then((todos) => this.$scope.todos = todos);
    }

    public addTask(title: string): void {
      this.toDoService.addTodo(title)
        .then((todo: services.ITodo) => this.$scope.todos.push(todo));
    }
  }

  export class TodoCtrl {

    private $scope: ITodoScope;
    private toDoService: services.TodoService;

    public static $inject: string[] = ['$scope', 'app.TodoService'];
    constructor($scope: ITodoScope, toDoService: services.TodoService) {
      this.$scope = $scope;
      this.toDoService = toDoService;
    }

    resolve(): void {
      this.toDoService.resolveTodo(this.$scope.todo);
    }
  }
}



Application.context.controller('app.TodoListCtrl', controllers.TodoListCtrl);
Application.context.controller('app.TodoCtrl', controllers.TodoCtrl);