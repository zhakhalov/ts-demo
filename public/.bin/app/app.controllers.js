/// <reference path="../../typings/tsd.d.ts" />
define(["require", "exports", './app'], function (require, exports, app) {
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
    app.app.controller('AppCtrl', AppCtrl);
});
//# sourceMappingURL=app.controllers.js.map