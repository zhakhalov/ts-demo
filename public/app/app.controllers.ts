/// <reference path="../../typings/tsd.d.ts" />

interface IAppScope extends ng.IScope {
  name: string;
}

class AppCtrl {

  private $scope: IAppScope;

  public static $inject: string[] = ['$scope'];
  constructor($scope: ng.IScope) {
    this.$scope = $scope as IAppScope;
    this.$scope.name = 'hello';
  }

  public click(): void {
    this.$scope.name = 'world';
  }
}


app.controller('AppCtrl', AppCtrl);