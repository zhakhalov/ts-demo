/// <reference path="../../typings/tsd.d.ts" />

interface Vector2 {
  x:number;
  y:number;
}

interface Vector3 extends Vector2 {
  z:number;
}

class AppService {
  
  $http:ng.IHttpService;
  
  public static $inject:string[] = ['$http']  
  constructor($http:ng.IHttpService) {
    this.$http = $http;
  }
  
  fetchVectors():ng.IHttpPromise<Vector3[]> {
    return this.$http.get(`/api/vectors/`)
    .success(function (vectors:Vector2[]) {
      return _(vectors)
      .filter((vector:Vector2) => vector.x > 10)
      .map((vector:Vector2) => vector as Vector3)
      .value()
    })
  }
}

app.service('app.AppService', AppService);