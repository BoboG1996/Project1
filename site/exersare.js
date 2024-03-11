const modal= document.querySelector('.hideTxt');
const overlay= document.querySelector('.overlay');
const btnOpened= document.querySelector('.btnOpen');
const btnClosed= document.querySelector('.btnClose');


///// Buton dechidere + inchidere  pop-up       + decor(overlay)

const openMode= function(e){
    e.preventDefault();
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeMode= function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

btnOpened.addEventListener('click',openMode);

btnClosed.addEventListener('click',closeMode);
overlay.addEventListener('click',closeMode);


//// buton Escape pt pop-up

document.addEventListener('keydown',function(e){
    if(e.key='Escape' && !modal.classList.contains('hidden')){
        closeMode()
    }
});