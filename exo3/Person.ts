import { Address } from "./Address";

enum EGender {
    M,
    F
}

export class Person {
    name: string;
    gender: EGender;
    address: Address;

    constructor(name:string, gender:EGender, address:Address) {
        this.name = name;
        this.gender = gender;
        this.address = address
    }

}