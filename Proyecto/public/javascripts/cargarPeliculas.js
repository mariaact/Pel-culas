let botonCargarMas = document.querySelector('#load-more-1');

var imagenes = [
    'https://image.tmdb.org/t/p/original/https://image.tmdb.org/t/p/original/aM1TuUiPtV8OAZyu61CTdy9Ymtk.jpg',
    'https://image.tmdb.org/t/p/original/6OiNSLcRKJsBLXwb6DEi6IQ0JFk.jpg',
    'https://image.tmdb.org/t/p/original//k3g58cX7u0m6z10w8LmQecTf6qc.jpg',
    'https://image.tmdb.org/t/p/original/mdszPVnIY7cWgbgJ8zbwu1PiU5V.jpg'
]

botonCargarMas.onclick = () => {

   var imagenElementos = document.querySelectorAll('.box-container-1 .content img')
   for (var i = 0; i < imagenElementos.length; i++){
    imagenElementos[i].src = imagenes[i]
   }
}