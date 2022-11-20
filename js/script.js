//Simon Says
//Creo l'evento click
let container = document.getElementById("small-container");
let btn = document.querySelector("#btn");

let casualNumArr =  genArrNumUnicRandomMinMax (5, 1, 100);
let seconds = 5;
// let inputField = document.getElementById("input-field");
let timer = document.getElementById("timer");
let inputBtn = document.querySelector("#numb-btn");
let input = document.getElementById("input");
let punteggio = casualNumArr.length;
let risultato = [];
 let nuovoElemento = createBox("div","box");
 let numeroUtente ;
 let result = document.getElementById("title")



 console.log(casualNumArr);

btn.addEventListener("click",
function(event){
    event.preventDefault;
    container.innerHTML= "";

   
        

    setTimeout(() => {
        container.innerHTML = "";
        input.style.display="block";
        inputBtn.style.display="block";
    }, 3000);

   for (let i = 0; i < casualNumArr.length; i++) {
   
    let nuovoElemento = createBox("div","box");
        nuovoElemento.innerHTML = i;
        container.append(nuovoElemento);
        nuovoElemento.innerHTML = casualNumArr[i];
        
        

    
    console.log(nuovoElemento);
  
      
       

    }
   }
  
)
inputBtn.addEventListener('click', function () {
    console.log(input.value);
   risultato.push(input.value);

    if (5 === risultato.length) 
        input.classList.add('hidden');
        inputBtn.classList.add('hidden');
        win = true;

        for (let i = 0; i < casualNumArr.length; i++) {
            if (casualNumArr[i] != risultato[i]) {
                win = false
            }
            else {
                container.append(risultato[i] + '; ');
            }
        };
        if (win) {
            result.innerHTML = 'Hai vinto!'
        } else if (!win) {
            result.innerHTML = 'Hai perso!';
        }
    })
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