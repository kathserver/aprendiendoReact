// vanilla Javascript 

// recuperamos el boton
const buton = document.querySelector('button')

// ejecutar funcion

buton.addEventListener('click', function(){
    // recuperar el id del atributo 
    const id= buton.getAttribute('data-id')


    //LLAMAR SERVISOI

    if(buton.classList.contains('liked')){
        buton.classList.remove('liked')
        buton.innerText ='Me gusta'
    }else{
        buton.classList.remove('liked')
        buton.innerText ='quitar Me gusta'
    }
})