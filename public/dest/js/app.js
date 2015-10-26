/// <reference path="../../typings/tsd.d.ts" />
var Startup = (function () {
    function Startup() {
        console.log('Startup------->');
    }
    Startup.$inject = [];
    return Startup;
})();
var app = angular.module('app', [])
    .run(Startup);
/// <reference path="../../typings/tsd.d.ts" />
var AppService = (function () {
    function AppService($http) {
        this.$http = $http;
    }
    AppService.prototype.fetchVectors = function () {
        return this.$http.get("/api/vectors/")
            .success(function (vectors) {
            return _(vectors)
                .filter(function (vector) { return vector.x > 10; })
                .map(function (vector) { return vector; })
                .value();
        });
    };
    AppService.$inject = ['$http'];
    return AppService;
})();
app.service('app.AppService', AppService);
/// <reference path="../../typings/tsd.d.ts" />
var AppCtrl = (function () {
    function AppCtrl($scope) {
        this.$scope = $scope;
        this.$scope.name = 'hello';
    }
    AppCtrl.prototype.click = function () {
        this.$scope.name = 'world';
    };
    AppCtrl.$inject = ['$scope'];
    return AppCtrl;
})();
app.controller('AppCtrl', AppCtrl);
//# sourceMappingURL=app.js.map