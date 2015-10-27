interface ITodoListScope extends ng.IScope {
  todos: Array<ITodo>;
}

interface ITodoScope extends ng.IScope {
  todo: ITodo;
}

class TodoListCtrl {

  private $scope: ITodoListScope;
  private toDoService: TodoService;

  public static $inject: string[] = ['$scope', 'app.TodoService'];
  constructor($scope: ITodoListScope, toDoService: TodoService) {
    this.$scope = $scope;
    this.toDoService = toDoService;
    this.toDoService.findTodos({})
      .then((todos) => this.$scope.todos = todos);
  }

  public addTask(title: string): void {
    this.toDoService.addTodo(title)
      .then((todo: ITodo) => this.$scope.todos.push(todo));
  }
}

class TodoCtrl {

  private $scope: ITodoScope;
  private toDoService: TodoService;

  public static $inject: string[] = ['$scope', 'app.TodoService'];
  constructor($scope: ITodoScope, toDoService: TodoService) {
    this.$scope = $scope;
    this.toDoService = toDoService;
  }

  resolve(): void {
     this.toDoService.resolveTodo(this.$scope.todo);
  }
}


Application.context.controller('app.TodoListCtrl', TodoListCtrl);
Application.context.controller('app.TodoCtrl', TodoCtrl);