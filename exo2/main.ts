const companies = [
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
const users = [
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
const franckMonod = {
    id: 5,
    name: 'Franck',
    age: 27,
    company: 'PRISMO',
    status: 'cofondateur'
};

interface ICompany {
    id: number;
    name: string;
    location?: string;
}
interface IUser {
    id: number;
    name: string;
    age?: number;
    company?: ICompany;
    status: EStatus;
}

enum EStatus {
    alternant,
    cofondateur,
    associe
}

class Company implements ICompany {
    id: number;
    name: string;
    location: string;

    constructor(id: number, name: string, location: string) {
        this.id = id;
        this.name = name;
        this.location = location ? location : null;
    }
}

class User implements IUser {
    id: number;
    name: string;
    age: number;
    company: ICompany;
    status: EStatus;

    constructor(id: number, name: string, status: EStatus, age?: number, company?: ICompany) {
        this.id = id;
        this.name = name;
        this.age = age ? age : null;
        this.company = company ? company : null;
        this.status = status;
    }
}

let userList: User[] = [];
let companyList: Company[] = [];

function addCompany(company: object) {
    let companyId: number = company["id"];
    let companyName: string = company["name"];
    let companyLocation: string = company["location"];

    const newCompany = new Company(companyId, companyName, companyLocation);
    companyList.push(newCompany);
}

function fillCompanyList(companies: object[]) {
    for (const c of companies) {
        addCompany(c);
    }
}

function fillUserList(users: object[]) {
    for (const u of users) {
        addUser(u);
    }
}

function addUser(user: object) {
    let userId: number = user["id"];
    let userName: string = user["name"];
    let newStatus: string = user["status"];
    let userStatus: EStatus = EStatus[newStatus];
    let userAge: number = user["age"];
    let userCompany: Company;

    if (typeof (user["company"]) === "object" && user["company"] !== null) {
        let userCompanyName: string = user["company"]["name"];
        userCompany = getCompanyByName(userCompanyName);

    } else {
        let userCompanyName: string = user["company"]
        userCompany = getCompanyByName(userCompanyName);
    }

    const newUser = new User(userId, userName, userStatus, userAge, userCompany);
    userList.push(newUser);
}

function getUsersByStatus(status: EStatus): User[] {
    let result: User[] = [];
    for (const u of userList) {
        if (u.status == status) {
            result.push(u);
        }
    }
    return result;
}

function getUsersByID(id: number): User {
    for (const u of userList) {
        if (u.id === id) {
            return u;
        }
    }
    return null;
}

function getUsersByName(name: string): User {
    for (const u of userList) {
        if (u.name === name) {
            return u;
        }
    }
    return null;
}

function getCompanyByName(name: string): Company {
    for (const c of companyList) {
        if (c.name === name) {
            return c;
        }
    }
    return null;
}

function companyMoveByName(name: string, newLocation: string) {
    for (const c of companyList) {
        if (c.name === name) {
            c.location = newLocation;
        }
    }
}

fillCompanyList(companies);
fillUserList(users)

console.log(companyList);
console.log(userList);

let sumAge: number = 0;
let userNames: string[] = [];

for (const u of userList) {
    sumAge += u.age;
    userNames.push(u.name);
}

addUser(franckMonod);

let userAlternants: IUser[] = getUsersByStatus(EStatus.alternant);
let userCofondateur: IUser[] = getUsersByStatus(EStatus.cofondateur);

console.log(sumAge);
console.log(userAlternants);
console.log(JSON.stringify(userCofondateur));

let user2company: ICompany = getUsersByID(2).company;
console.log(user2company);
console.log(user2company.location);

companyMoveByName("PRISMO", "Crang-Gevrier");
getUsersByName("Leïla").company = getCompanyByName("PRISMO");

console.log(getUsersByName("Leïla"));

const appDiv: HTMLElement = document.getElementById('app');
let htmlCode: string = "";
htmlCode += `<p>La somme des ages de tous les users est ${sumAge}</p>`;
htmlCode += `<p>Les utilisateurs qui sont alternants sont ${JSON.stringify(userAlternants)}</p>`;
htmlCode += `<p>Les utilisateurs qui sont cofondateurs sont ${JSON.stringify(userCofondateur)}</p>`;
htmlCode += `<p>Les utilisateurs qui sont cofondateurs sont ${getUsersByName("Leïla")}</p>`;

appDiv.innerHTML = htmlCode;
