/// <reference path="app.ts" />

 namespace services {
  export interface ITodo {
    id: number;
    title: string;
    isResolved?: boolean;
    createdAt: Date;
    resolvedAt?: Date;
  }
  
  export class TodoService {
  
    $q: ng.IQService;
    $localStorage: any;
  
    public static $inject: string[] = ['$q', '$localStorage']
    constructor($q:ng.IQService, $localStorage:any) {
      this.$q = $q;
      this.$localStorage = $localStorage;
    }
    
    private get todos():Array<ITodo> {
      this.$localStorage.todos = this.$localStorage.todos || [];
      return this.$localStorage.todos;
    }
    
    findTodos(criteria:any):ng.IPromise<Array<ITodo>> {
      return this.$q((resolve:Function) => {
        return _(this.todos).filter(criteria).value();
      })
    }
    
    addTodo(title:string):ng.IPromise<ITodo> {
      return this.$q((resolve:Function) => {
        var last:ITodo = _(this.todos).max('id');
        var todo:ITodo = {
          id: last ? last.id : 1,
          title: title,
          createdAt: new Date(),
        };
        this.todos.push(todo);
        resolve(todo);
      });
    }
    
    resolveTodo(todo:ITodo):ng.IPromise<ITodo> {
      return this.$q((resolve:Function, reject:Function) => {
        var found:ITodo = _(this.todos).find((t:ITodo) => t.id === todo.id);
        if (found) {
          found.isResolved = true;
          todo.isResolved = true;
          found.resolvedAt = new Date();
          todo.resolvedAt = new Date();
          resolve(todo);
        } else {
          reject();
        }
      });
    }
  }
}
Application.context.service('app.TodoService', services.TodoService);