var companies = [
    {
        id: 1,
        name: 'Maison du net',
        location: 'Crang-Gevrier'
    },
    {
        id: 2,
        name: 'PRISMO',
        location: 'Annecy'
    }
];
var users = [
    {
        id: 1,
        name: 'Leïla',
        age: 22,
        company: null,
        status: 'alternant'
    },
    {
        id: 2,
        name: 'Thomas',
        age: null,
        company: {
            id: 1,
            name: 'PRISMO',
            location: 'Annecy'
        },
        status: 'cofondateur'
    },
    {
        id: 3,
        name: 'Rémi',
        age: 26,
        company: {
            id: 1,
            name: 'PRISMO',
            location: 'Cran-Gevrier'
        },
        status: 'Associé'
    },
    {
        id: 4,
        name: 'Yannick',
        age: 21,
        company: {
            id: 1,
            name: 'PRISMO',
            location: null
        },
        status: 'alternant'
    }
];
var franckMonod = {
    id: 5,
    name: 'Franck',
    age: 27,
    company: 'PRISMO',
    status: 'cofondateur'
};
var EStatus;
(function (EStatus) {
    EStatus[EStatus["alternant"] = 0] = "alternant";
    EStatus[EStatus["cofondateur"] = 1] = "cofondateur";
    EStatus[EStatus["associe"] = 2] = "associe";
})(EStatus || (EStatus = {}));
var Company = /** @class */ (function () {
    function Company(id, name, location) {
        this.id = id;
        this.name = name;
        this.location = location ? location : null;
    }
    return Company;
}());
var User = /** @class */ (function () {
    function User(id, name, status, age, company) {
        this.id = id;
        this.name = name;
        this.age = age ? age : null;
        this.company = company ? company : null;
        this.status = status;
    }
    return User;
}());
var userList = [];
var companyList = [];
function addCompany(company) {
    var companyId = company["id"];
    var companyName = company["name"];
    var companyLocation = company["location"];
    var newCompany = new Company(companyId, companyName, companyLocation);
    companyList.push(newCompany);
}
function fillCompanyList(companies) {
    for (var _i = 0, companies_1 = companies; _i < companies_1.length; _i++) {
        var c = companies_1[_i];
        addCompany(c);
    }
}
function fillUserList(users) {
    for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
        var u = users_1[_i];
        addUser(u);
    }
}
function addUser(user) {
    var userId = user["id"];
    var userName = user["name"];
    var newStatus = user["status"];
    var userStatus = EStatus[newStatus];
    var userAge = user["age"];
    var userCompany;
    if (typeof (user["company"]) === "object" && user["company"] !== null) {
        var userCompanyName = user["company"]["name"];
        userCompany = getCompanyByName(userCompanyName);
    }
    else {
        var userCompanyName = user["company"];
        userCompany = getCompanyByName(userCompanyName);
    }
    var newUser = new User(userId, userName, userStatus, userAge, userCompany);
    userList.push(newUser);
}
function getUsersByStatus(status) {
    var result = [];
    for (var _i = 0, userList_2 = userList; _i < userList_2.length; _i++) {
        var u = userList_2[_i];
        if (u.status == status) {
            result.push(u);
        }
    }
    return result;
}
function getUsersByID(id) {
    for (var _i = 0, userList_3 = userList; _i < userList_3.length; _i++) {
        var u = userList_3[_i];
        if (u.id === id) {
            return u;
        }
    }
    return null;
}
function getUsersByName(name) {
    for (var _i = 0, userList_4 = userList; _i < userList_4.length; _i++) {
        var u = userList_4[_i];
        if (u.name === name) {
            return u;
        }
    }
    return null;
}
function getCompanyByName(name) {
    for (var _i = 0, companyList_1 = companyList; _i < companyList_1.length; _i++) {
        var c = companyList_1[_i];
        if (c.name === name) {
            return c;
        }
    }
    return null;
}
function companyMoveByName(name, newLocation) {
    for (var _i = 0, companyList_2 = companyList; _i < companyList_2.length; _i++) {
        var c = companyList_2[_i];
        if (c.name === name) {
            c.location = newLocation;
        }
    }
}
fillCompanyList(companies);
fillUserList(users);
console.log(companyList);
console.log(userList);
var sumAge = 0;
var userNames = [];
for (var _i = 0, userList_1 = userList; _i < userList_1.length; _i++) {
    var u = userList_1[_i];
    sumAge += u.age;
    userNames.push(u.name);
}
addUser(franckMonod);
var userAlternants = getUsersByStatus(EStatus.alternant);
var userCofondateur = getUsersByStatus(EStatus.cofondateur);
console.log(sumAge);
console.log(userAlternants);
console.log(JSON.stringify(userCofondateur));
var user2company = getUsersByID(2).company;
console.log(user2company);
console.log(user2company.location);
companyMoveByName("PRISMO", "Crang-Gevrier");
getUsersByName("Leïla").company = getCompanyByName("PRISMO");
console.log(getUsersByName("Leïla"));
var appDiv = document.getElementById('app');
var htmlCode = "";
htmlCode += "<p>La somme des ages de tous les users est " + sumAge + "</p>";
htmlCode += "<p>Les utilisateurs qui sont alternants sont " + JSON.stringify(userAlternants) + "</p>";
htmlCode += "<p>Les utilisateurs qui sont cofondateurs sont " + JSON.stringify(userCofondateur) + "</p>";
htmlCode += "<p>Les utilisateurs qui sont cofondateurs sont " + getUsersByName("Leïla") + "</p>";
appDiv.innerHTML = htmlCode;
