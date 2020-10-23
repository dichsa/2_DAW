function cambiarImagenJS(){
    if(document.getElementById("logo").src=="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSWhikotYVmDgwqJFXMLTfc9PE6JF5mXMjBGQ&usqp=CAU"){
        document.getElementById("logo").src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT3mhxgIRaZ9NhGxPdNIv24l6bQ-kjyAKbT9Q&usqp=CAU"
    }else{
        document.getElementById("logo").src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSWhikotYVmDgwqJFXMLTfc9PE6JF5mXMjBGQ&usqp=CAU";
    }
   }
//EJERCICIO 1

document.title="Ahora trabajando con DOM dinámico";

//EJERCICIO 2

const sections= document.getElementsByTagName('section');

[...sections].forEach((section,index)=> section.id='section-'+ index);
console.debug(sections);

// EJERCICIO 3

const paragraphs = document.getElementsByTagName('p');
[...paragraphs].forEach(paragraph => paragraph.style.fontSize = '0.5rem');

// EJERCICIO 4 

const hipervin= document.getElementsByTagName('a');
[...hipervin].forEach(hipervin => hipervin.style.color = 'White');

// EJERCICIO 5

function añañin() { 
    const myDiv = document.getElementById("myDiv");  
    const checkbox = document.createElement('input'); 

    checkbox.type = "checkbox"; 
    checkbox.name = "name"; 
    checkbox.value = "value"; 
    checkbox.id = "id"; 

    checkbox.onchange = function(){
        if(document.getElementById('boton').disabled == !this.checked){
            document.getElementById('boton').disabled = this.checked
        } else {
            document.getElementById('boton').disabled = !this.checked
        }
    }

    const label = document.createElement('label'); 

    label.htmlFor = "id"; 

    label.appendChild(document.createTextNode('This is the label for checkbox.')); 

    myDiv.appendChild(checkbox); 
    myDiv.appendChild(label); 
} 

// EJERCICIO 6

