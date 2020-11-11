export class Address {
    street: string;
    city: string;
    postalCode: number;
    
    constructor(street:string, city:string, postalCode:number) {
        this.street = street;
        this.city = city;
        this.postalCode = postalCode;
    }

}
