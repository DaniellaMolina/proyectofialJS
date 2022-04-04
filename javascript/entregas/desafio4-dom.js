let parrafo = document.createElement('div');
parrafo.innerHTML = "<h1>¡Bienvenidos!</h1>";
document.getElementsByTagName('main')[0].appendChild(parrafo);

let image = document.createElement('img');
image.setAttribute('src','/images/76.png');
image.setAttribute('alt','Placeholder image moficada');
parrafo.appendChild(image);