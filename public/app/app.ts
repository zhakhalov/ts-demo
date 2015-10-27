/// <reference path="../../typings/tsd.d.ts" />

class Startup {
  public static $inject: string[] = []
  constructor() {
  }
}

class Application {
  public static context: ng.IModule;
  public static $inject: string[] = [
    'ngStorage'
  ];
  public static start(): void {
    Application.context = angular.module('app', Application.$inject)
    .run(Startup); 
  }
}

Application.start();