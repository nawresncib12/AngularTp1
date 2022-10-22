export class Cv {
    id: number;
    name: string;
    firstname: string;
    age: number;
    cin: number;
    job: string;
    path: string;
    constructor(
        id = 0,
        name = '',
        job = '',
        firstname = '',
        age = 0,
        cin = 0,
        path = ''
    ) {
        this.name = name;
        this.age = age;
        this.firstname = firstname;
        this.job = job;
        this.id = id;
        this.cin = cin;
        this.path = path;
    }
}
