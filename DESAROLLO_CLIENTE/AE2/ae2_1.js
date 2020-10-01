values=["Ana", 2, "Javi", 5, "Roberto", 10];

function a(){
    let numeros=values.filter(numero=>typeof(numero)===typeof(numero[1]));
    console.log(numeros);
}
a();