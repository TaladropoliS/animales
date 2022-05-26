import {Aguila, Leon, Lobo, Oso, Serpiente} from "./especies.js";

let listaAnimales = []

// función IIFE para consumir la API
let callAPi = (() => {
    const url_personajes = 'animales.json';
    try {
        const getData = async () => {
            const res = await fetch(url_personajes);
            return await res.json()
        }
        return {getData}
    } catch (error) {
        console.log(error)
    }
})()
// convierte el objeto de objetos { {}{} } en una lista de objetos [ {} {} ]
const {animales} = await callAPi.getData()


// capturo el animal que se ha seleccionado con el index del select
// y se usa para agregar la imagen al preview al hacer click

document.getElementById('animal').addEventListener('click', function (e) {
    var index = e.target.selectedIndex; // obtenemos el index del select
    // console.info('El índice de la opción seleccionada es %s', index)
    index === 0 ? document.getElementById('imgPreview').src = `` : ''
    index === 1 ? document.getElementById('imgPreview').src = `assets/imgs/Leon.png` : ''
    index === 2 ? document.getElementById('imgPreview').src = `assets/imgs/Lobo.jpg` : ''
    index === 3 ? document.getElementById('imgPreview').src = `assets/imgs/Oso.jpg` : ''
    index === 4 ? document.getElementById('imgPreview').src = `assets/imgs/Serpiente.jpg` : ''
    index === 5 ? document.getElementById('imgPreview').src = `assets/imgs/Aguila.png` : ''
});


// atributos de Animal: nombre, edad, img, comentarios, sonido

// acciones a realizar cuando se de click en el botón Agregar
document.getElementById('btnRegistrar').addEventListener('click', () => {

    let imagen, sonido
    let nombre = document.getElementById('animal').value
    let edad = document.getElementById('edad').value
    let comentarios = document.getElementById('comentarios').value
    nombre === '' ? '' : imagen = animales.find(a => a.name === nombre).imagen
    nombre === '' ? '' : sonido = animales.find(a => a.name === nombre).sonido

    if (nombre === '' || edad === '' || !comentarios) {
        document.getElementById('divMsjError').classList.remove("d-none") // mostramos el div del error
        // document.getElementById('mensajeError').innerText = 'Ingresar ANIMAL, EDAD y COMENTARIOS' // msj error
    } else {
        document.getElementById('Animales').innerHTML = '' // limpia el tablero de animales, para que no se repitan
        document.getElementById('divMsjError').classList.add("d-none") // oculta el div del error

        // agregamos el animal a la lista de animales creados
        nombre === 'Leon' ? listaAnimales.push(new Leon(nombre, edad, imagen, comentarios, sonido)) : ''
        nombre === 'Lobo' ? listaAnimales.push(new Lobo(nombre, edad, imagen, comentarios, sonido)) : ''
        nombre === 'Oso' ? listaAnimales.push(new Oso(nombre, edad, imagen, comentarios, sonido)) : ''
        nombre === 'Serpiente' ? listaAnimales.push(new Serpiente(nombre, edad, imagen, comentarios, sonido)) : ''
        nombre === 'Aguila' ? listaAnimales.push(new Aguila(nombre, edad, imagen, comentarios, sonido)) : ''

        // reseteamos los valores de los select a vacío y eliminamos la imagen del preview
        document.getElementById('imgPreview').src = ``
        document.getElementById('animal').value = ''
        document.getElementById('edad').value = ''
        document.getElementById('comentarios').value = ''

        console.log(listaAnimales)

        // recorremos la listaAnimales [] para publicar a cada animal en su card
        let id = 0 // nos servirá para crear id a cada elemento de la listaAnimales [], nos servira para el modal
        for (let i of listaAnimales) {
            // console.log(id + ' | ' + i.nombre + ' | ' + i.edad + ' | ' + i._comentarios + ' | ' + i.img + ' | ' + i.sonido)
            // Agregamos el html de cada modal con class AnimalCard
            document.getElementById('Animales').innerHTML += `<div class="AnimalCard card bg-dark text-light w-25 p-1">
                                                                      <button id="expand"  type="button" class="btn btn-outline-warning m-auto" data-toggle="modal" data-target="#${id}">
                                                                      <img class="img-fluid" src="assets/imgs/${i.img}" alt="${i.nombre}">
                                                                      </button>
                                                                      <p><b>${i.nombre}</b></p>
                                                                      <p>${i.edad}</p>
                                                                      <p><b>Comentarios:</b></p>
                                                                      <p>${i._comentarios}</p>
                                                                  </div>`
            // Agregamos el html de cada modal con id
            document.getElementById('modalDiv').innerHTML += `<div class="modal fade" id="${id}">
                                                                    <div class="modal-dialog modal-dialog-centered" role="document">
                                                                        <div class="modal-content bg-dark col-12 col-md-10 offset-md-1">
                                                                            <div class="modal-body text-light text-center">
                                                                                <img class="img-fluid pb-2" src="assets/imgs/${i.img}" alt="${i.nombre}">
                                                                                <p><b>${i.nombre}</b></p>
                                                                                <p>${i.edad}</p>
                                                                                <p><b>Comentarios:</b></p>
                                                                                <p>${i._comentarios}</p>
                                                                                    <audio controls src="assets/sounds/${i.sonido}">
                                                                                    </audio>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>`
            id++ // aumentamos en 1 el id para el siguiente elemento de la listaAnimales []
        }
    }
})




