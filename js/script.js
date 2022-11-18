//Simon Says
//Creo l'evento click
let container = document.getElementById("container");
let btn = document.querySelector("#btn");

let casualNumArr =  genArrNumUnicRandomMinMax (5, 1, 100);
let seconds = 0;
// let inputField = document.getElementById("input-field");
let inputBtn = document.querySelector("#numb-btn");

let punteggio = casualNumArr.length;
let risultato = [];
 let nuovoElemento = createBox("div","box");
 let numeroUtente ;



 console.log(casualNumArr);

btn.addEventListener("click",
function(event){
    event.preventDefault;
    container.innerHTML= "";
   for (let i = 0; i < casualNumArr.length; i++) {
   
    let nuovoElemento = createBox("div","box");
        
        container.append(nuovoElemento);
        nuovoElemento.innerHTML = casualNumArr[i];
        
        

    
    console.log(nuovoElemento);
    setTimeout(function(){
        
        numeroUtente = risultato;
        numeroUtente = parseInt(prompt("Inserisci 5 numeri"));
        container.remove("box");
       },5000)
       if(casualNumArr[i] == risultato){
        alert("ciao");
       }
      
       

    }
   }
  
)
// Creiamo un Array di 5 numeri casuali


























function randomNumberMinMax (min, max) {
    return ( Math.floor(Math.random() * ((max + 1) - min) + min));
}

// creo la funzione per creare un arrey di numeri random unici 
function genArrNumUnicRandomMinMax (maxElement, minNum, maxNum) {
    
    // creo l'array
    const arrNumUnicRandom = [];

    // genero i numeri da inserire nell'array
    while (arrNumUnicRandom.length < maxElement) {
        let newNumber = randomNumberMinMax (minNum, maxNum);
        if (!arrNumUnicRandom.includes(newNumber)){
            arrNumUnicRandom.push(newNumber);
        }
    }

    // ritorno l'array generato
    return arrNumUnicRandom;
}
function createBox(typeElement, idClassElement){
    const divElement = document.createElement("div");
    divElement.classList.add("box");
   


    return divElement;
}