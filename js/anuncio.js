const openModal = document.querySelector('.cta');
const modal= document.querySelector('.anuncio');
const closeModal= document.querySelector('.anuncio_close');
openModal.addEventListener('click',(e)=>{
e.preventDefault();
    
modal.classList.add('anuncio--show');

});


closeModal.addEventListener('click',(e)=>{
    e.preventDefault();
        
    modal.classList.remove('anuncio--show');
    
    });