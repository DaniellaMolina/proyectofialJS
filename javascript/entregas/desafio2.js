let compra = 1;
let montototal;
let montoinicial = 900; 
let comprasmayores = 2000;
let x= montototal
let montocondesc


 function iva(x) {

    for(let i=1; i<990; i++) {
        let cantidad = parseInt(prompt("Cantidad de productos que desea comprar:"))
        let montototal = cantidad * montoinicial
        alert("El monto total a pagas es de $" +montototal+ " pesos uruguayos") 
       
        
    
    }

    return (x * 0.21);


}

const iva = x => {
    x * 0.21 ;
}