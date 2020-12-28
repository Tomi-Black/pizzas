//General xddd
let c = 0;
let HAW = 199,HAWM = 199;let h = 0;let a = 0;
let MEX = 230;let m = 0;let e = 0;
let HOW = 200;let ho = 0;let o = 0;
let QQQQ = 250;let q = 0;let qu = 0;
let VEG = 210;let v = 0;let eg = 0;
let PEPE = 190;let p = 0;let pep = 0;
const $boton = document.querySelector("#guardar"),
    $objetivo = document.querySelector("#g-t"),// A qué le tomamos la foto
    $contenedor = document.querySelector("#prueba");// En dónde ponemos el elemento canvas
//Operaciones
function haw(){
    ++h;
    document.getElementById("h").innerHTML = h;
    if(h <= 1){
        a = HAW;
    }else{
        HAW = HAW + HAW;
    }
    a = HAW;
    document.getElementById("h-t").innerHTML = a;
    local1();
}
function mex(){
    ++m;
    document.getElementById("m").innerHTML = m;
    if(m <= 1){
        e = MEX;
    }else{
        MEX = MEX + MEX;
    }
    e = MEX;
    document.getElementById("m-t").innerHTML = e;
    local1();
}
function how(){
    ++ho;
    document.getElementById("ho").innerHTML = ho;
    if(ho <= 1){
        o = HOW;
    }else{
        HOW = HOW + HOW;
    }
    o = HOW;
    document.getElementById("ho-t").innerHTML = o;
    local1();
}
function qqqq(){
    ++q;
    document.getElementById("qqqq").innerHTML = q;
    if(q <= 1){
        qu = QQQQ;
    }else{
        QQQQ = QQQQ + QQQQ;
    }
    qu = QQQQ;
    document.getElementById("q-t").innerHTML = qu;
    local1();
}
function veg(){
    ++v;
    document.getElementById("v").innerHTML = v;
    if(v <= 1){
        eg = VEG;
    }else{
        VEG = VEG + VEG;
    }
    eg = VEG;
    document.getElementById("v-t").innerHTML = eg;
    local1();
}
function pepe(){
    ++p;
    document.getElementById("pep").innerHTML = p;
    if(p <= 1){
        pep = PEPE;
    }else{
        PEPE = PEPE + PEPE;
    }
    pep = PEPE;
    document.getElementById("p-t").innerHTML = pep;
    local1();
}
//Storage
document.getElementById("total").innerHTML = localStorage.getItem("Final");
function local1(){
    t = a+e+o+qu+eg+pep;
    document.getElementById("tic").innerHTML = t;
    localStorage.setItem("Final",t);
    document.getElementById("total").innerHTML = localStorage.getItem("Final");
}
document.getElementById("contador").innerHTML = localStorage.getItem("Contador");
function local(){localStorage.setItem("Contador",c);document.getElementById("contador").innerHTML = localStorage.getItem("Contador");}
function eliminar(){localStorage.clear();}
//Funciones
function ola(){
    ++c;
    if(c>=18){
        c = 18;
    }
    local();
}
//Animaciones
const alerta_caja_err = document.querySelector(".caja-alerta"),
alerta_caja_corr = document.querySelector(".caja-alertas");
let tiempo;
$boton.addEventListener("click", () => {//Obviamente ya tendras todo listo para relaccionarlo con la base de datos
    document.getElementById("x").style.display = "block";
    mostrar_corr();
    html2canvas($objetivo) // Llamar a html2canvas y pasarle el elemento
    .then(canvas => {
    // Cuando se resuelva la promesa traerá el canvas
    $contenedor.appendChild(canvas); // Lo agregamos como hijo del div
    });
});
function brusco(){
    ocultar();
    clearInterval(tiempo);
}
function brusco_dos(){
    ocultar();
    clearInterval(tiempo);
}
function mostrar_corr(){
    alerta_caja_corr.classList.add("show");
    alerta_caja_corr.classList.remove("oculto");
    alerta_caja_corr.classList.remove("close");
    tiempo=setTimeout(function(){
        ocultar();
    },5000);
}function mostrar_err(){
    alerta_caja_err.classList.add("show");
    alerta_caja_err.classList.remove("oculto");
    alerta_caja_err.classList.remove("close");
    tiempo=setTimeout(function(){
        ocultar_dos();
    },5000);
}
function ocultar(){
    alerta_caja_corr.classList.remove("show");
    alerta_caja_corr.classList.add("close");
    alerta_caja_corr.classList.add("oculto");
}
function oculta_dos(){
    alerta_caja_err.classList.remove("show");
    alerta_caja_err.classList.add("close");
    alerta_caja_err.classList.add("oculto");
}
setInterval(function(){
    document.querySelector(".body-comentario").classList.toggle("ac");
}, 1000 * 50);
const cokiess = document.getElementById("cokies"),
        cok = document.querySelector(".cokies");
cokiess.addEventListener('click',function(){
    cok.classList.add("ab");
});
function cerrar_comentario(){document.querySelector(".body-comentario").classList.remove("ac")}
function quitar(){document.querySelector(".mega_menu").classList.remove('actii');}
function mega_menu(){document.querySelector(".mega_menu").classList.toggle('actii');}
function popup(){document.getElementById("popup-1").classList.toggle('ac');}
function popup1(){document.getElementById("popup-2").classList.toggle('ac');}
/*let detalles = document.querySelector(".Det"),
caja = document.querySelector(".carta");
detalles.addEventListener('click', ()=>{
animacion();
function animacion(){
caja.classList.toggle("all");
}
});*/