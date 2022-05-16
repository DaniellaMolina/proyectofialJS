const precio = parseInt(prompt("Ingrese monto total del producto a comprar:"))
const iva = 0.21
const precioTotal = calculadoraiva (precio, iva);

function calculadoraiva (precioProducto, impuestos) {
if (precioProducto >= 2000) {

    return precioProducto - (precioProducto * impuestos)


} else {

    return precioProducto

}
}

alert(precioTotal);

/*const miArray = [1,5,10,30, 40, 50, 60, 70];
let sumaTotal = 0;
const resultado = sumaArrays(miArray, sumaTotal); 


function sumaArrays (total) {
    if (total >= 100) {

        for (let i = 0; i < miArray.length; i++){
         sumaTotal += miArray[i];
        }
        
        return (resultado);
        
    
    } else {
    
        return ("Estuviste flojo");
    }
}

alert (resultado);*/

