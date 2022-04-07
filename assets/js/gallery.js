const enlace = document.querySelectorAll( '.columna .a')
const lightbox = document.querySelector('.gallery__overlay')
const grande = document.querySelector('.grande')
const cerrar = document.querySelector('.close__lightbox')

enlace.forEach(( cadaEnlace , i )=>{
    enlace[i].addEventListener('click', ( e )=>{
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
