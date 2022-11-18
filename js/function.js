function sommapariDispari(num1,num2){

    const somma = num1 + num2;

    if(num1 % 2 === 0){

        let pari = num1;
    
        console.log("il numero",num1,"è pari");
    
    } 
    
    else{
        let dispari = num1;
    
        console.log("il numero",num1,"è dispari");
    }
    if(num2 % 2 === 0){
    
        let pari = num2;
    
        console.log("il numero",num2,"è pari");
    
    } 
    else{
        let dispari = num2;
    
        console.log("il numero",num2,"è dispari");
    }
     return somma;
}
// creo la funzione per generare numeri random
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
function returnElement (elemento) {

    let element =  document.getElementById(elemento)
    return element;
  }
  function createBox (typeElement, idClassElement) {
    // creo l'elemento
    const element = document.createElement(typeElement);
    element.classList.add(idClassElement);

    // ritorno l'elemento
    return element;
} 