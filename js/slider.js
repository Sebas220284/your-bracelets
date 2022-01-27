(function(){

const sliders =[...document.querySelectorAll('.family_body')];
   

const buttonNext = document.querySelector('#next');
const buttonBefore = document.querySelector('#before');
let value;
buttonNext.addEventListener('click',()=>{
changePosition(1);


});

buttonBefore.addEventListener('click',()=>{
    changePosition(-1);


});
const changePosition = (add)=>{

 
   
   
   
    
    const currentFamily= document.querySelector('.family_body--show').dataset.id;

value=  Number(currentFamily);
value+=add;
  
sliders[Number(currentFamily)-1].classList.remove('family_body--show');
if (value === sliders.length+1 || value === 0){
value= value === 0 ? sliders.length :1;

}
sliders[value-1].classList.add('family_body--show');
}

})();