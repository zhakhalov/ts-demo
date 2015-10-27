/// <reference path="../../typings/tsd.d.ts" />
var Startup = (function () {
    function Startup() {
    }
    Startup.$inject = [];
    return Startup;
})();
var Application = (function () {
    function Application() {
    }
    Application.start = function () {
        Application.context = angular.module('app', Application.$inject)
            .run(Startup);
    };
    Application.$inject = [
        'ngStorage'
    ];
    return Application;
})();
Application.start();
var TodoService = (function () {
    function TodoService($q, $localStorage) {
        this.$q = $q;
        this.$localStorage = $localStorage;
    }
    Object.defineProperty(TodoService.prototype, "todos", {
        get: function () {
            this.$localStorage.todos = this.$localStorage.todos || [];
            return this.$localStorage.todos;
        },
        enumerable: true,
        configurable: true
    });
    TodoService.prototype.findTodos = function (criteria) {
        var _this = this;
        return this.$q(function (resolve) {
            return _(_this.todos).filter(criteria).value();
        });
    };
    TodoService.prototype.addTodo = function (title) {
        var _this = this;
        return this.$q(function (resolve) {
            var last = _(_this.todos).max('id');
            var todo = {
                id: last ? last.id : 1,
                title: title,
                createdAt: new Date(),
            };
            _this.todos.push(todo);
            resolve(todo);
        });
    };
    TodoService.prototype.resolveTodo = function (todo) {
        var _this = this;
        return this.$q(function (resolve, reject) {
            var found = _(_this.todos).find(function (t) { return t.id === todo.id; });
            if (found) {
                found.isResolved = true;
                todo.isResolved = true;
                found.resolvedAt = new Date();
                todo.resolvedAt = new Date();
                resolve(todo);
            }
            else {
                reject();
            }
        });
    };
    TodoService.$inject = ['$q', '$localStorage'];
    return TodoService;
})();
Application.context.service('app.TodoService', TodoService);
var TodoListCtrl = (function () {
    function TodoListCtrl($scope, toDoService) {
        var _this = this;
        this.$scope = $scope;
        this.toDoService = toDoService;
        this.toDoService.findTodos({})
            .then(function (todos) { return _this.$scope.todos = todos; });
    }
    TodoListCtrl.prototype.addTask = function (title) {
        var _this = this;
        this.toDoService.addTodo(title)
            .then(function (todo) { return _this.$scope.todos.push(todo); });
    };
    TodoListCtrl.$inject = ['$scope', 'app.TodoService'];
    return TodoListCtrl;
})();
var TodoCtrl = (function () {
    function TodoCtrl($scope, toDoService) {
        this.$scope = $scope;
        this.toDoService = toDoService;
    }
    TodoCtrl.prototype.resolve = function () {
        this.toDoService.resolveTodo(this.$scope.todo);
    };
    TodoCtrl.$inject = ['$scope', 'app.TodoService'];
    return TodoCtrl;
})();
Application.context.controller('app.TodoListCtrl', TodoListCtrl);
Application.context.controller('app.TodoCtrl', TodoCtrl);
//# sourceMappingURL=app.js.map