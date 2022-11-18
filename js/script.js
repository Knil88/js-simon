//Simon Says
//Creo l'evento click

let btn = document.querySelector("#btn");
let title = document.getElementById("title");
let casualNumArr =  genArrNumUnicRandomMinMax (5, 1, 100);
let seconds = 0;
let inputField = document.getElementById("input-field");



 console.log(casualNumArr);

btn.addEventListener("click",
function (){
    
    seconds = setTimeout(function(){
       
        for(let i = 0; i < casualNumArr.length; i++){
          title.style.display ="none";
          inputField.append = (inputField);
        } 
    },1000)
  
    title.innerHTML="";
    title.append(casualNumArr);
     
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