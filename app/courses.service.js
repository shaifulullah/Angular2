"use strict";
var CourseService = (function () {
    function CourseService() {
    }
    CourseService.prototype.getCourses = function () {
        return ["Course no 01", "Course no 02", "Course no 03"];
    };
    return CourseService;
}());
exports.CourseService = CourseService;
//# sourceMappingURL=courses.service.js.map