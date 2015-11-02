/// <reference path="../../typings/tsd.d.ts" />


class Application {
  public static $inject: string[] = [
    'ngStorage'
  ];
  public static context: ng.IModule = angular.module('app', Application.$inject);
}