import { Person } from "./person";

export class Contacts {
    public people: Person[];

    constructor(people: Person[]) {
        this.people = people;
    }
    public printCalendar() {
        for (let per in this.people) {
            console.log(this.people[per]);
        }
    }
}
