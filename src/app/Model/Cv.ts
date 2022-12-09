export class Cv {
  subscribe(arg0: (result: any) => void) {
    throw new Error('Method not implemented.');
  }
  id: number;
  name: string;
  firstname: string;
  age: number;
  cin: number;
  job: string;
  path: string;
  deleted: boolean;
  constructor(
    id = 0,
    name = '',
    job = '',
    firstname = '',
    age = 0,
    cin = 0,
    path = '',
    deleted = false
  ) {
    this.name = name;
    this.age = age;
    this.firstname = firstname;
    this.job = job;
    this.id = id;
    this.cin = cin;
    this.path = path;
    this.deleted = deleted;
  }
}
