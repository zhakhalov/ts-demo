/// <reference path="../../typings/tsd.d.ts" />

class Startup {
  public static $inject:string[] = []
  constructor () {
    console.log('Startup------->');
  }
}

var app:ng.IModule = angular.module('app', [])
.run(Startup);