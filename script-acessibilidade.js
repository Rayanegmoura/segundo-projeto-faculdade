// lOGIN DO TOPO 

document.addEventListener('DOMContentLoaded', function () {
   
    let isUserLoggedIn = false;
    let userName = "João";

    // Elementos
    const usernameSpan = document.getElementById('username');
    const logoutBtn = document.getElementById('logout-btn');

    if (isUserLoggedIn) {
        usernameSpan.textContent = userName;
        logoutBtn.style.display = 'inline';
    } else {
        usernameSpan.textContent = 'Visitante';
        logoutBtn.style.display = 'none';
    }

    logoutBtn.addEventListener('click', function() {
        alert('Você foi desconectado.');
        usernameSpan.textContent = 'Visitante';
        logoutBtn.style.display = 'none';
    });
});

// BOTÃO DE ACESSIBILIDADE

const toggleBtn = document.getElementById('toggleAcessibilidade');
const acessibilidadeDiv = document.getElementById('acessibilidade');


toggleBtn.addEventListener('click', function() {
    acessibilidadeDiv.classList.toggle('ativo');
});

// ACESSIBILIDADE MODO CLARO

let trilho = document.getElementById('trilho')
let body = document.querySelector('body')
let imagem = document.getElementById('imagemAcessibilidade'); 

trilho.addEventListener('click', ()=>{
    trilho.classList.toggle('dark')
    body.classList.toggle('dark')

    if (body.classList.contains('dark')) {
        imagem.src = "img-logo-2.png";
    } else {
        imagem.src = "img-logo.png";
    }
});

// ACESSIBILIDADE AUMENTAR E DIMINUIR FONTE

var $btnAumentar = $("#btnAumentar");
var $btnDiminuir = $("#btnDiminuir");
var $elemento = $("body #content").find("*"); 
var fonts = [];

function obterTamanhoFonte() {
  for (var i = 0; i < $elemento.length; i++) {
    fonts.push(parseFloat($elemento.eq(i).css('font-size')));
  }
}
obterTamanhoFonte();
$btnAumentar.on('click', function() {
  for (var i = 0; i < $elemento.length; i++) {
    ++fonts[i];
    $elemento.eq(i).css('font-size', fonts[i]);
  }
});

$btnDiminuir.on('click', function() {
  for (var i = 0; i < $elemento.length; i++) {
    --fonts[i];
    $elemento.eq(i).css('font-size', fonts[i]);
  }
});

// MENU MOBILE

let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})
