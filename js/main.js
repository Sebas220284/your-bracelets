const openModal = document.querySelector('.name_main');
const modal= document.querySelector('.modal');
const closeModal= document.querySelector('.modal_close');
openModal.addEventListener('click',(e)=>{
e.preventDefault();
    
modal.classList.add('modal--show');

});


closeModal.addEventListener('click',(e)=>{
    e.preventDefault();
        
    modal.classList.remove('modal--show');
    
    });