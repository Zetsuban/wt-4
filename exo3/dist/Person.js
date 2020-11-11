"use strict";
exports.__esModule = true;
exports.Person = void 0;
var EGender;
(function (EGender) {
    EGender[EGender["M"] = 0] = "M";
    EGender[EGender["F"] = 1] = "F";
})(EGender || (EGender = {}));
var Person = /** @class */ (function () {
    function Person(name, gender, address) {
        this.name = name;
        this.gender = gender;
        this.address = address;
    }
    return Person;
}());
exports.Person = Person;
