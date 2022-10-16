export class Person {
  nom: string;
  prenom: string;
  job: string;
  image: string;
  citation: string;
  description: string;
  keys: string;
  constructor(
    nom = '',
    prenom = '',
    job = '',
    image = '',
    citation = '',
    description = '',
    keys = ''
  ) {
    this.nom = nom;
    this.citation = citation;
    this.prenom = prenom;
    this.job = job;
    this.image = image;
    this.description = description;
    this.keys = keys;
  }
}
