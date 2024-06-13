const inputCheck = document.querySelector('#dark-mode')
const elemento = document.querySelector('body')

inputCheck.addEventListener('click', ()=>{
    const modo = inputCheck.checked ? 'dark' : 'light'
    elemento.setAttribute('data-bs-theme', modo)
})