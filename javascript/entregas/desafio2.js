/*let compra = 1;
let montototal;
let montoinicial = 900; 
let comprasmayores = 2000;
let x= montototal;
let montocondesc;

const iva = calculadoriva => {
    montototal * 0.21 ;
}



 function iva2() {

    for(let i=1; i<990; i++) {
        let cantidad = parseInt(prompt("Cantidad de productos que desea comprar:"))
        let montototal = cantidad * montoinicial
        console.log ("El monto total a pagas es de $" +montototal+ " pesos uruguayos")
    } 

    for(let i=2000; i<20000; i++) {
        let cantidad = parseInt(prompt("Cantidad de productos que desea comprar:"))
        let montototal = cantidad * montoinicial
        let montocondesc = montototal * calculadoriva
        console.log ("El monto total a pagas es de $" +montocondesc+ " pesos uruguayos") 
    }

}

iva2 (20000); */

let montoinicial = 900; 
let comprasmayores = 2000;
let montocondesc;
let montototal = cantidad * montoinicial ;

let cantidad = parseInt(prompt("Cantidad de productos que desea comprar:"))

function calculadoriva () {
    montototal * 0.21 ;
}

if(montoinicial <= comprasmayores ) {
    
    alert ("El monto total a pagas es de $" +montototal+ " pesos uruguayos")

} else if(montoinicial >= comprasmayores ) {
    alert ("El monto total a pagas es de $" +calculadoriva+ " pesos uruguayos")
}

calculadoriva (5);