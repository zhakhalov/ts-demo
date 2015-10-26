define(["require", "exports", './app'], function (require, exports, app) {
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
    app.app.service('app.AppService', AppService);
});
//# sourceMappingURL=app.services.js.map