
/*
document.addEventListener('DOMContentLoaded', function(){
    let imagenes = [
        {img: '../../assets/img/galleriesSurces/conversatorio.jpeg'},
        {img: '../../assets/img/galleriesSurces/conversatorio2.jpeg'},
        {img: '../../assets/img/galleriesSurces/conversatorio3.jpeg'},
        {img: '../../assets/img/galleriesSurces/conversatorio4.jpeg'},
        {img: '../../assets/img/galleriesSurces/conversatorio5.jpeg'},
        {img: '../../assets/img/galleriesSurces/inauguracion2.jpg'},
        {img: '../../assets/img/galleriesSurces/presentacion-obra-el-juicio-colegio-san-benito.jpg'},
        {img: '../../assets/img/galleriesSurces/conversatoriotiteres.jpeg'},
        {img: '../../assets/img/galleriesSurces/creacion-cocodrilo-geronimo.jpg'},
        {img: '../../assets/img/galleriesSurces/Creacion-teatrino.jpg'},
        {img: '../../assets/img/galleriesSurces/Creacion-titeres-mesa.jpg'},
        {img: '../../assets/img/galleriesSurces/Creacion-titeres-mesa.jpg'},
        {img: '../../assets/img/galleriesSurces/inauguracion3.jpg'},
        {img: '../../assets/img/galleriesSurces/teatroCalle1.jpg'},
        {img: '../../assets/img/galleriesSurces/creacion-tortuga-teresa-titere.jpg'},
        {img: '../../assets/img/galleriesSurces/Creación titeres Idpac.jpeg'},
        {img: '../../assets/img/galleriesSurces/DSCN0023-(2).jpg'},
        {img: '../../assets/img/galleriesSurces/DSCN0043.jpg'},
        {img: '../../assets/img/galleriesSurces/DSCN0044.jpg'},
        {img: '../../assets/img/galleriesSurces/inauguracion4.jpg'},
        {img: '../../assets/img/galleriesSurces/titeres Bocones3.jpg'},
        {img: '../../assets/img/galleriesSurces/DSCN0052.jpg'},
        {img: '../../assets/img/galleriesSurces/DSCN0058.jpg'},
        {img: '../../assets/img/galleriesSurces/DSCN0063.jpg'},
        {img: '../../assets/img/galleriesSurces/DSCN0067.jpg'},
        {img: '../../assets/img/galleriesSurces/DSCN8995.jpg'},
        {img: '../../assets/img/galleriesSurces/inauguracion5.jpg'},
        {img: '../../assets/img/galleriesSurces/titeresBocones1.jpg'},
        {img: '../../assets/img/galleriesSurces/DSCN907g.jpg'},
        {img: '../../assets/img/galleriesSurces/DSCN9109.jpg'},
        {img: '../../assets/img/galleriesSurces/DSCN9965.jpg'},
        {img: '../../assets/img/galleriesSurces/DSCN9950.jpg'},
        {img: '../../assets/img/galleriesSurces/inauguracion1.jpg'},
        {img: '../../assets/img/galleriesSurces/presentacion-obra-el-juicio-biblioteca-gabriel-garcia-marquez.jpg'},
        {img: '../../assets/img/galleriesSurces/titeresBocones2.jpg'},
    ]
    let contador = 0
    const contenedor = document.querySelector('.gallery__lightbox')
    const overlay = document.querySelector('.gallery__overlay')
    const galeria_imagenes = document.querySelectorAll('.gallery__section img')
    const img__lightbox = document.querySelector('.gallery__lightbox img')

    contenedor.addEventListener('click', function (event){
        let atras = contenedor.querySelector('.atras-btn')
            adelante = contenedor.querySelector('.adelante-btn')
            img = contenedor.querySelector('img')
            tgt = event.target
        if (tgt == atras){
            if (contador > 0){
                img.src = imagenes[contador - 1].img,
                contador --
            }else{
                img.src = imagenes[imagenes.length-1].img
                contador = imagenes.length - 1
            }
        } else if (tgt == adelante) {
            if(contador < imagenes.length - 1){
                img.src = imagenes[contador + 1].img
                contador++
            }else {
                img.src = imagenes[0].img
                contador = 0
            }
        }

    })
    
    Array.from(galeria_imagenes).forEach(img => {
        img.addEventListener('click', event =>{
                const imagen_seleccionada = +event.target.dataset.imgMostrar
                img__lightbox.src = imagenes[imagen_seleccionada].img
                contador = imagen_seleccionada
                overlay.style.opacity = 1
                overlay.style.visibility = 'visible'
            })
    })

    document.querySelector('.close__lightbox').addEventListener('click', ()=>{
        overlay.style.opacity = 0
        overlay.style.visibility = 'hidden'
    })

})
*/

const enlace = document.querySelectorAll( '.columna .a')
const lightbox = document.querySelector('.gallery__lightbox')
const grande = document.querySelector('.lightbox__img')
const cerrar = document.querySelector('.close__lightbox')

enlaces.forEach(( cadaEnlace , i )=>{
    enlaces[i].addEventListener('click', ( e )=>{
        e.preventDefault()
        let img = cadaEnlace.querySelector('.img').src
        console.log( img ) 
        lightbox.classList.add('activo')
        grande.setAttribute('src', img)

    })
})

cerrar.addEventListener('click', ()=>{
    lightbox.classList.remove('activo')
})
