//Contabilizador//
/*let numeros= (10, 20, 30, 40)

for (let i=20; i<30; i++) {

    console.log (i)
}*/

//Ingresar la cantidad//
/*let cantidad = parseInt(prompt ("Ingrese el cantidad total de tortas que desea comprar:"));

for (let i = 0; i <= cantidad; i++) {
    console.log (i)
}*/

//Contabilizador de pares//
/*
for(let i=2; i<=20 ; i=i+2) {
    console.log(i);
  }
*/
//Monto total de compra//
let compra = 1;
let montototal;
let montoinicial = 900; 

for(let i=1; i<990; i++) {
    let cantidad = parseInt(prompt("Cantidad de productos que desea comprar:"))
    let montototal = cantidad * montoinicial 

}

alert("El monto total a pagas es de $" +montototal+ " pesos uruguayos")

//Monto total de compra con descuento//
/*let compra = 1;
let montototal;
let montoinicial = 900; 
let descuento = 10;
let comprasmayores = 2000;
let montocondesc

for(let i=1; i<990; i++) {
    let cantidad = parseInt(prompt("Cantidad de productos que desea comprar:"))
    let montototal = cantidad * montoinicial
    alert("El monto total a pagas es de $" +montototal+ " pesos uruguayos")
    
    let totaldecuento =montototal *descuento
   
    if (montototal === comprasmayores){
        totaldecuento = montototal - totaldecuento
    }
   
}
alert ("Por haber realizado una compra mayor a $2000 tienes un 10% de descuento y el monto total a pagar es de $" +montocondesc+ " pesos uruguayos")*/