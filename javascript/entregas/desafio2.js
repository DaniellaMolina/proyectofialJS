/*const precio = parseInt(prompt("Ingrese monto total del producto a comprar:"))
const iva = 0.21
const precioTotal = calculadoraiva (precio, iva);

function calculadoraiva (precioProducto, impuestos) {
if (precioProducto >= 2000) {

    return precioProducto - (precioProducto * impuestos)


} else {

    return precioProducto

}
}

alert(precioTotal);*/

const miArray = [1,5,10,30, 40, 50, 60, 70]

const resultado = sumaArrays(miArray); 


function sumaArrays (total) {
    if (total > 100) {
    
        return alert("Estuviste flojo")
    
    
    } else {
    
        return total
    
    }
}

alert(resultado);