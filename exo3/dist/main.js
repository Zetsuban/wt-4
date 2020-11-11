"use strict";
exports.__esModule = true;
var PersonList = /** @class */ (function () {
    function PersonList(personList) {
        this.personList = personList;
    }
    PersonList.prototype.addPerson = function (person) {
        this.personList.push(person);
    };
    PersonList.prototype.findByName = function (name) {
        for (var _i = 0, _a = this.personList; _i < _a.length; _i++) {
            var p = _a[_i];
            if (p.name === name) {
                return p;
            }
        }
        return null;
    };
    PersonList.prototype.findByPostalCode = function (cp) {
        for (var _i = 0, _a = this.personList; _i < _a.length; _i++) {
            var p = _a[_i];
            if (p.address.postalCode === cp) {
                return p;
            }
        }
        return null;
    };
    PersonList.prototype.countPersonCity = function (street) {
        var count = 0;
        for (var _i = 0, _a = this.personList; _i < _a.length; _i++) {
            var p = _a[_i];
            if (p.address.street === street) {
                count++;
            }
        }
        return count;
    };
    PersonList.prototype.editPersonName = function (oldName, newName) {
        for (var _i = 0, _a = this.personList; _i < _a.length; _i++) {
            var p = _a[_i];
            if (p.name === oldName) {
                p.name = newName;
            }
        }
    };
    PersonList.prototype.editPersonCity = function (oldCity, newCity) {
        for (var _i = 0, _a = this.personList; _i < _a.length; _i++) {
            var p = _a[_i];
            if (p.address.city === oldCity) {
                p.address.city = newCity;
            }
        }
    };
    return PersonList;
}());
