var regNacimiento =document.getElementById('reg-nacimiento');
var regResidencia =document.getElementById('reg-residencia');
var regiones =document.getElementById('regiones');
var sector =document.getElementById('sector');
var fuente =document.getElementById('fuente');
var montos =document.getElementById('montos');
var medio =document.getElementById('medio');

regionesData.forEach(function(e){
  regNacimiento.appendChild(options(e));
  regResidencia.appendChild(options(e));
  regiones.appendChild(checkboxs(e));
});

sectores.forEach(function(e){
  sector.appendChild(checkboxs(e));
});

fuentes.forEach(function(e){
  fuente.appendChild(checkboxs(e));
});

fondos.forEach(function(e){
  montos.appendChild(checkboxs(e));
});

medios.forEach(function(e){
  medio.appendChild(checkboxs(e));
});

function options(region){
  var option=document.createElement('option');
  option.appendChild(document.createTextNode(region));
  return option;
}

function checkboxs(texto){
  var p=document.createElement('p');
  var input=document.createElement('input');
  p.setAttribute("class","bold");
  input.type="button";
  input.classList.add("checkbox","checked");
  p.appendChild(input);
  p.appendChild(document.createTextNode(" "+texto));
  return p;
}

document.getElementsByClassName('checkbox').onclick=function(e){
  // e.preventDefault();
  console.log("asd");
  document.getElementsByClassName('checkbox')[0].style.background="black";
}
//funcion para validar cantidad palabras textArea
var maxPalabras=80;
var length=document.getElementsByClassName('max-length');
function palabra() {
  var txt = length[0].value.split(' ');
  if (txt.length > maxPalabras)
    console.log("error");
    return false;
}
length[0].addEventListener('blur',palabra);
