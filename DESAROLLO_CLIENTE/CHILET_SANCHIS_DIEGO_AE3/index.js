document.addEventListener("DOMContentLoaded"), () => {
  const anteriorpagina = document.getElementById("anteriorpagina");
  const siguientepagina = document.getElementById("siguientepagina");
  const formulario = document.getElementById("formulario");
  const datosform = document.getElementById("datosform");
  const index = document.getElementById("index"); 
  let url="";
}



function botonvalidarpagina1(){
  if(document.getElementById("url").value == ""){
    document.getElementById("empty_url").classList.remove("esconderelemento");
  }else{
      document.getElementById("empty_url").classList.add("esconderelemento");
      document.getElementById("anterior").classList.add("esconderelementos");
      anterior.style.display = "block";
      url=document.getElementById("url").value;
      pagina2();
  }
}
function botonanteriorpagina(){
  pagina1.style.display = "block";
  formulario.style.display = "none";
  siguiente.style.display = "block";
  anterior.style.display = "block";
  validar.style.display = "block";
}

function pagina2(){
  document.getElementById("pagina1").classList.add("esconderelemento");
  document.getElementById("pagina2").classList.remove("esconderelemento");
  document.getElementById("pagina3").classList.add("esconderelemento");
  document.getElementById("pagina4").classList.add("esconderelemento");
  pagina1.style.display = "none";
  pagina1.style.display = "none";
  validar.style.display = "block";
  siguiente.setAttribute("onclick", "pagina3()");
}

function pagina3(){
  document.getElementById("pagina3").classList.remove("esconderelemento");
  document.getElementById("pagina1").classList.add("esconderelemento");
  document.getElementById("pagina2").classList.add("esconderelemento");
  document.getElementById("pagina4").classList.add("esconderelemento");
const datos_formulario = new datosvalidados("nombre", "apellido", "fecha","codigopostal", "provincia", "municipio");
document.getElementById("nombrevalidado").textContent=datos_formulario.nombre;
document.getElementById("apellidovalidado").textContent=datos_formulario.apellido;
document.getElementById("fechavalidada").textContent=datos_formulario.fecha;
document.getElementById("codigopostalvalidado").textContent=datos_formulario.codigopostal;
document.getElementById("provinciavalidada").textContent=datos_formulario.provincia;
document.getElementById("municipiovalidado").textContent=datos_formulario.municipio;
anterior.setAttribute("onclick", "pagina2()");
siguiente.setAttribute("onclick", "pagina4()");
}

function pagina4(){
  document.getElementById("pagina3").classList.add("esconderelemento");
  document.getElementById("pagina1").classList.add("esconderelemento");
  document.getElementById("pagina2").classList.add("esconderelemento");
  document.getElementById("pagina4").classList.remove("esconderelemento");
  const terminar=document.getElementById("terminar");
  terminar.setAttribute("onclick","location.href='" + url + "'");
}


function paginadatosvalidados(){
anterior.style.display = "none";
form.style.display="none";
paginavalidada.style.display="block";
 

}

function validacionformulario(){

  if(document.getElementById("nombre").value == ""){
    document.getElementById("dato1").classList.remove("esconderelemento");
    document.getElementById("datos1").classList.remove("esconderelemento"); 
}else{
    document.getElementById("dato1").classList.add("esconderelemento");
    document.getElementById("datos1").classList.add("esconderelemento");
}
  
if(document.getElementById("apellido").value == ""){
    document.getElementById("dato2").classList.remove("esconderelemento");
    document.getElementById("datos2").classList.remove("esconderelemento");
}else{
    document.getElementById("dato2").classList.add("esconderelemento");
    document.getElementById("datos2").classList.add("esconderelemento");
}

if(document.getElementById("fecha").value == ""){
    document.getElementById("dato3").classList.remove("esconderelemento");
    document.getElementById("datos3").classList.remove("esconderelemento");
}else{
    document.getElementById("dato3").classList.add("esconderelemento");
    document.getElementById("datos3").classList.add("esconderelemento");
}
if(document.getElementById("codigopostal").value == ""){
    document.getElementById("dato4").classList.remove("esconderelemento");
    document.getElementById("datos4").classList.remove("esconderelemento");
}else{
    document.getElementById("dato4").classList.add("esconderelemento");
    document.getElementById("datos4").classList.add("esconderelemento");
}
if(document.getElementById("provincia").value == ""){
    document.getElementById("dato5").classList.remove("esconderelemento");
    document.getElementById("datos5").classList.remove("esconderelemento");
}else{
    document.getElementById("dato5").classList.add("esconderelemento");
    document.getElementById("datos5").classList.add("esconderelemento");
}
if(document.getElementById("municipio").value == ""){
    document.getElementById("dato6").classList.remove("esconderelemento");
    document.getElementById("datos6").classList.remove("esconderelemento");
}else{
    document.getElementById("dato6").classList.add("esconderelemento");
    document.getElementById("datos6").classList.add("esconderelemento");
}
}

function datosvalidados(nombre, apellido, fecha, codigopostal, provincia, municipio){
  this.nombre=document.getElementById(nombre).value;
  this.apellido=document.getElementById(apellido).value;
  this.fecha=document.getElementById(fecha).value;
  this.codigopostal=document.getElementById(codigopostal).value;
  this.provincia=document.getElementById(provincia).value;
  this.municipio=document.getElementById(municipio).value;
}
