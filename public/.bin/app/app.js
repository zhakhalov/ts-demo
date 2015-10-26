/// <reference path="../../typings/tsd.d.ts" />
define(["require", "exports"], function (require, exports) {
    var Startup = (function () {
        function Startup() {
            console.log('Startup------->');
        }
        Startup.$inject = [];
        return Startup;
    })();
    exports.app = angular.module('app', [])
        .run(Startup);
});
//# sourceMappingURL=app.js.map