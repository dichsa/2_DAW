/* 1 a */ 
function ejercicio1(){
let alerta_usuario=("Soy el primer script");
alert(alerta_usuario);
}
ejercicio1();

/* 1 b */ 

let alertmessage=("Soy el primer script");
alert(alertmessage);

/* 1 c */ 

const ALERT_MESSAGE = alertmessage + " y estoy funcionando sobre " + navigator.appVersion;
alert(ALERT_MESSAGE);


/* 2 a */ 
function ejercicio2(){
let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto","Septiembre", "Octubre", "Noviembre", "Diciembre"];
meses.forEach(element => {console.log(element)});
}


/* 2 b */
function ejercicio2(){
console.table(meses);
}


/* 3 */
function ejercicio3(){
const values = [true, false, 5, "hola", [1,2,3], {age: 2, gender: 'male'}];
values.forEach(element => {console.log(element)});
}
ejercicio3();

/* 4 */ 
function ejercicio4(){
var numero1 = 5;
var numero2 = 8;

if(numero1 < numero2) {
    console.log("numero1 no es mayor que numero2");
}
if(numero2 >= 0){
    console.log("numero2 es positivo");
}
if(numero1 !=0){
    console.log("numero1 es negativo o distinto de cero");
}
if((numero1 +1) < numero2){
    console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
}
}
ejercicio4();

/* 5 */

function ejercicio5(){
function factorial (n) {
	var total = 1; 
	for (i=1; i<=n; i++) {
		total = total * i; 
	}
	return total; 
}
alert(factorial(15));
}
ejercicio5();

/* 6 */

function ejercicio6(){
var numero = parseInt(prompt("Introduce un número entero"));

var resultado = parimpar(numero);
alert("El número "+numero+" es "+resultado);

function parimpar(numero) {
  if(numero % 2 == 0) {
    return "par";
  }
  else {
    return "impar";
  }
}
}
ejercicio6();
/* 7 */

function ejercicio7(){
function absolut(){
    let ab=parseInt(prompt("escribe un número"));
    console.log(Math.abs(ab));
}
absolut();
}
ejercicio7();


/* 8 */
