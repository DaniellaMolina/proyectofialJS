function Datospersonales1 (nombrecompleto, edad, genero, estadocivil, mail){

    this.nombrecompleto = nombrecompleto;
    this.genero =  genero;
    this.edad = edad;
    this.estadocivil = estadocivil;
    this.mail = mail;

}


const Datospersonales2 =  new Datospersonales1("Daniella Molina", 28, "femenino", "soltera","lic.daniellamolina@gmail.com");

let nombrecompleto = prompt("Ingrese su nombre completo");
let genero = prompt("Ingrese su edad");
let edad= parseInt(prompt("Ingrese el genero con el cual se identifica"));
let estadocivil = prompt("Ingrese su estado civil");
let mail = prompt ("Ingrese su mail")


const Datospersonales3 =  new Datospersonales1(nombrecompleto, edad, genero, estadocivil, mail);

console.log (Datospersonales1);
console.log (Datospersonales2);
console.log (Datospersonales3);