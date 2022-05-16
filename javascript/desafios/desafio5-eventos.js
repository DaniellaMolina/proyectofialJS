/*let botoncomprar = document.getElementById ("botoncomprar");

botoncomprar.addEventListener ("click", () => { 
    alert ("Has agregado el producto al carrito!");
})*/

let form = document.getElementsByClassName ("form-control");

for (let i = 0; i < form.length; i++) {

    form[i].addEventListener ("mouseover", () => {
        form [i].style.backgroundColor = "#3e3e3e";
    })

    form[i].addEventListener ("mouseout", () => {
        form [i].style.backgroundColor = "red";
    })
}