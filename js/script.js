let input = document.getElementById('input');
const button = document.getElementById('arrow');
const validation = document.getElementById('validation');


button.addEventListener('click',(e)=>{
e.preventDefault();
if (input.value != 'mostafaMagdy8800@gmail.com') {
    input.style.border = '2px solid red';
    validation.classList.replace('d-none','d-block');
    setTimeout(() => {
        input.style.border = ''; 
        validation.classList.replace('d-block','d-none')
    }, 2000);
}
}) 
