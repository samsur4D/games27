



function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden') ;
}


function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}


function addBackGroundColorById(elementId){
     const element = document.getElementById(elementId);
     element.classList.add('bg-orange-500');
}

function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-500');
}

 function getTextElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value ;
 }

 function getElementTextById(elementId){
    const element = document.getElementById(elementId);
    const text = element.innerText ;
    return text ;
 }

function setTextElementValueById(elementId , value){
          const element = document.getElementById(elementId);
          element.innerText = value ;
}


function getARandomAlphabet(){
    // get create alphabet array
    const alphabetSrting = 'abcdefghijklmnopqrstuvwxyz/' ;
    const alphabets = alphabetSrting.split('');
    // console.log(alphabets);

    // get a random index between 1- 25
    const randomNumber = Math.random()*26 ;
    const index = Math.round(randomNumber);
    // console.log(index);

    const alphabet = alphabets[index];
    // console.log(index , alphabet) ;
    return alphabet ;
}