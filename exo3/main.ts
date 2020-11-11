import { Person } from "./Person";

class PersonList {
    personList: Person[]

    constructor(personList: Person[]) {
        this.personList = personList;
    }

    addPerson(person: Person) {
        this.personList.push(person);
    }

    public findByName(name:string): Person {
        for (const p of this.personList) {
            if (p.name === name){
                return p;
            }
        }
        return null
    }

    public findByPostalCode(cp:number): Person {
        for (const p of this.personList) {
            if (p.address.postalCode === cp){
                return p;
            }
        }
        return null;
    }

    public countPersonCity(street:string) : number{
        let count: number = 0;
        for (const p of this.personList) {
            if (p.address.street === street){
                count++
            }
        }
        return count;
    }

    public editPersonName(oldName:string, newName:string): void {
        for (const p of this.personList) {
            if (p.name === oldName) {
                p.name = newName;
            }
        }
    }

    public editPersonCity(oldCity:string, newCity:string): void {
        for (const p of this.personList) {
            if (p.address.city === oldCity) {
                p.address.city = newCity;
            }
        }
    }
}