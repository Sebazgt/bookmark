const boton = document.getElementById('boton');
const boton2 = document.getElementById('boton2');
const boton3 = document.getElementById('boton3');
const menu = document.getElementById('menu');
const menu2 = document.getElementById('menu2');
const menu3 = document.getElementById('menu3');
const nav = document.getElementById('nav');
const nav_res = document.getElementById('nav_res');

boton.addEventListener('click', ()=>{
    menu.classList.toggle('hidden');
    if(!menu3.classList.contains('hidden')){
        menu3.classList.toggle('hidden');
    }else{
        if(!menu2.classList.contains('hidden')){
            menu2.classList.toggle('hidden');
        }
    }
})

boton2.addEventListener('click', ()=>{
    menu2.classList.toggle('hidden');
    if(!menu3.classList.contains('hidden')){
        menu3.classList.toggle('hidden');
    }else{
        if(!menu.classList.contains('hidden')){
            menu.classList.toggle('hidden');
        }
    }
})

boton3.addEventListener('click', ()=>{
    menu3.classList.toggle('hidden');
    if(!menu2.classList.contains('hidden')){
        menu2.classList.toggle('hidden');
    }else{
        if(!menu.classList.contains('hidden')){
            menu.classList.toggle('hidden');
        }
    }
})

nav.addEventListener('click', ()=>{
    nav_res.classList.toggle('hidden');
})