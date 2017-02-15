// import {Injectable} from '@angular/core';
// @Injectable()
"use strict";
var AuthorsService = (function () {
    function AuthorsService() {
    }
    AuthorsService.prototype.getauthors = function () {
        return ["Author1", "Author2", "Author3"];
    };
    return AuthorsService;
}());
exports.AuthorsService = AuthorsService;
//# sourceMappingURL=authors.service.js.map