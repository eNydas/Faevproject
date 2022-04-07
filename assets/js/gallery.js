
document.addEventListener('DOMContentLoaded', function(){
    let imagenes = [
        {img: '../../assets/img/Galleries surces/conversatorio.jpeg'},
        {img: '../assets/img/Galleries surces/conversatorio2.jpeg'},
        {img: '../assets/img/Galleries surces/conversatorio3.jpeg'},
        {img: '../assets/img/Galleries surces/conversatorio4.jpeg'},
        {img: '../assets/img/Galleries surces/conversatorio5.jpeg'},
        {img: '../assets/img/Galleries surces/inauguracion2.jpg'},
        {img: '../assets/img/Galleries surces/presentacion-obra-el-juicio-colegio-san-benito.jpg'},
        {img: '../assets/img/Galleries surces/conversatoriotiteres.jpeg'},
        {img: '../assets/img/Galleries surces/creacion-cocodrilo-geronimo.jpg'},
        {img: '../assets/img/Galleries surces/Creacion-teatrino.jpg'},
        {img: '../assets/img/Galleries surces/Creacion-titeres-mesa.jpg'},
        {img: '../assets/img/Galleries surces/Creacion-titeres-mesa.jpg'},
        {img: '../assets/img/Galleries surces/inauguracion3.jpg'},
        {img: '../assets/img/Galleries surces/teatroCalle1.jpg'},
        {img: '../assets/img/Galleries surces/creacion-tortuga-teresa-titere.jpg'},
        {img: '../assets/img/Galleries surces/Creación titeres Idpac.jpeg'},
        {img: '../assets/img/Galleries surces/DSCN0023-(2).jpg'},
        {img: '../assets/img/Galleries surces/DSCN0043.jpg'},
        {img: '../assets/img/Galleries surces/DSCN0044.jpg'},
        {img: '../assets/img/Galleries surces/inauguracion4.jpg'},
        {img: '../assets/img/Galleries surces/titeres Bocones3.jpg'},
        {img: '../assets/img/Galleries surces/DSCN0052.jpg'},
        {img: '../assets/img/Galleries surces/DSCN0058.jpg'},
        {img: '../assets/img/Galleries surces/DSCN0063.jpg'},
        {img: '../assets/img/Galleries surces/DSCN0067.jpg'},
        {img: '../assets/img/Galleries surces/DSCN8995.jpg'},
        {img: '../assets/img/Galleries surces/inauguracion5.jpg'},
        {img: '../assets/img/Galleries surces/titeresBocones1.jpg'},
        {img: '../assets/img/Galleries surces/DSCN907g.jpg'},
        {img: '../assets/img/Galleries surces/DSCN9109.jpg'},
        {img: '../assets/img/Galleries surces/DSCN9965.jpg'},
        {img: '../assets/img/Galleries surces/DSCN9950.jpg'},
        {img: '../assets/img/Galleries surces/inauguracion1.jpg'},
        {img: '../assets/img/Galleries surces/presentacion-obra-el-juicio-biblioteca-gabriel-garcia-marquez.jpg'},
        {img: '../assets/img/Galleries surces/titeresBocones2.jpg'},
    ]
    let contador = 0
    const contenedor = document.querySelector('.gallery__lightbox')
    const overlay = document.querySelector('.gallery__overlay')
    const galeria_imagenes = document.querySelectorAll('.gallery__section img')
    const img__lightbox = document.querySelector('.gallery__lightbox img')

    contenedor.addEventListener('click', function (event){
        let atras = contenedor.querySelector('.atras-btn'),
            adelante = contenedor.querySelector('.adelante-btn'),
            img = contenedor.querySelector('img'),
            tgt = event.target
        if (tgt == atras){
            if (contador > 0){
                img.src = imagenes[contador - 1].img,
                contador --
            }else{
                img.src = imagenes[imagenes.length-1].img,
                contador = imagenes.length - 1
            }
        } else if (tgt == adelante) {
            if(contador < imagenes.length - 1){
                img.src = imagenes[contador + 1].img,
                contador++
            }else {
                img.src = imagenes[0].img,
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

