const monster = document.getElementById('monster');
const inputUsuario = document.getElementById('input-usuario');
const body = document.querySelector('body');

const anchoMitad = window.innerWidth/2;
const altoMitad = window.innerHeight/2;

let seguirPonteroMouse = true;

body.addEventListener('mousemove', (m)=>{
    if (seguirPonteroMouse) {
        if(m.clientX < anchoMitad && m.clientY < altoMitad){
            monster.src = "image/idle/2.png";
        }else if(m.clientX > anchoMitad && m.clientY > altoMitad){
            monster.src = "image/idle/3.png"
        }else if(m.clientX > anchoMitad && m.clientY < altoMitad){
            monster.src = "image/idle/5.png";
        }else{
            monster.src = "image/idle/4.png"
        }
    }
    
 })

 inputUsuario.addEventListener('focus' , ()=>{
    seguirPonteroMouse = false;
 })

 inputUsuario.addEventListener('blur' , ()=>{ 
    seguirPonteroMouse = true;
 })

 inputUsuario.addEventListener('keyup' , ()=>{
    let usuario = inputUsuario.value.length;
    if(usuario >= 0 && usuario <= 5){
        monster.src = 'image/read/1.png';
    }else if (usuario >= 6 && usuario <= 14){
        monster.src = 'image/read/2.png';
    }else if (usuario >= 15 && usuario <= 20){
        monster.src = 'image/read/3.png';
    }else{
        monster.src = 'image/read/4.png'
    }
 })