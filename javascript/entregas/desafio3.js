//Array filtrar//
/*let arreglo =[1,2,3,4,5,6,7,8,9,10]; 
let pares= arreglo.filter(function(numero){  
  return numero % 2 ==0; 
});

console.log (pares)*/

//Array de productos//
const productos = [
    {nombre: 'Lemon pie',    precio: 990},
    {nombre: 'Chesee cake',       precio: 1100},
    {nombre: 'Chocomouse',    precio: 1500},
    {nombre: 'Choco en rama',     precio: 1300},
    {nombre: 'Frutos rojos y chocolate',   precio: 1200},
    {nombre: 'Torta de caramelo',     precio: 1000},
    {nombre: 'Macarron cake',     precio: 1850},
    {nombre: 'Strawberry and cream',  precio: 890}
]

//Recorrer el array y obtener cada producto//
productos.forEach((producto) => {
    console.log(producto.nombre)
});


//Ordena el array por menor a mayor precio//
console.log(productos.sort((a, b) => a.precio - b.precio));


// Filtrar un array con precio menor a $1200//
const productosFiltrados = productos.filter((producto) => {
    return producto.precio <= 1200
});

console.log (productosFiltrados);


//Map: Obtener un nuevo array con los nombres de los productos//
const nombresProductos = productos.map((producto) => {
    return producto.nombre
});
console.log (nombresProductos);


//Find: buscar un producto, ejemplo lemon pie//
const busquedaProducto = productos.find((producto) => {
    return producto.nombre === "Lemon pie"
})

console.log (busquedaProducto);

//Buscar si existe un chesee cake//
const incluyeChesee = productos.includes('Chesee cake')

console.log (incluyeChesee);

//Length//
console.log (productos.length);

//Push//
productos.push ('Chocotorta')
console.log (productos);

