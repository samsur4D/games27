
//  click play now button and hide  home screen


//  function playnow(){
//         const homeSection =document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
//  }


// //  show the play ground

// const playGroundSection = document.getElementById('play-ground-zone');
// playGroundSection.classList.remove('hidden');
  




function handelkeyboardKeyupEvent(event){
        const playerPressed = event.key;
        console.log('player pressed', playerPressed);

        // stop the gameeeee
         if(playerPressed === 'Escape'){
            gameOver();
         }
       
        

        const  currentAlphabetElement = document.getElementById('current-alphabet');
        const currentAlphabet = currentAlphabetElement.innerText ;
        const expectAlphabet = currentAlphabet.toLowerCase();
    //    check right or wrong key pressed
        if(playerPressed===expectAlphabet){
            console.log('you got one point');
        //  update score
        // get the current score
         
        const currentScore = getTextElementValueById('current-score');
        const updateScore = currentScore + 1 ;
        setTextElementValueById('current-score' , updateScore)

// .................
        // const currentScoreElement =document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // console.log(currentScore);
        // // increase the score by 1
        // const newscore = currentScore + 1 ;
        // // show updated score
        // currentScoreElement.innerText = newscore ;   
// ...................................................
            // start new round
            removeBackgroundColorById(expectAlphabet);
            continueGame();
        }
        else{
                     console.log('lost one point')
                    //  get current life
                    const currentLife = getTextElementValueById('current-life');
                    const updateLife = currentLife - 1 ;
                    setTextElementValueById('current-life' , updateLife);



                    if(updateLife===0){
                        gameOver()
                    }
                    // ............................
                    // const currentLifeElement = document.getElementById('current-life');
                    // const currentLifeText = currentLifeElement.innerText;
                    // const currentLife = parseInt(currentLifeText);
                    // // reduse life count
                    // const newLife = currentLife - 1 ;
                    // // display updated life
                    // currentLifeElement.innerText = newLife ;
                    // ..........................
        }
}
    document.addEventListener('keyup' , handelkeyboardKeyupEvent);
    

















function continueGame(){
    // generate a random alphabets
    const alphabet = getARandomAlphabet();
    console.log('Your Clicked Alphabet is' , alphabet);

    //  set alphabet on screen
    const currentAlphabetElement =document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet ;
    
    // set bg color
    addBackGroundColorById(alphabet);

}



function playnow(){
    // hide everything and only show the playground
    hideElementById('home-screen');
    hideElementById('score-final');
    showElementById('play-ground-zone')

    // reset score and life zone
    setTextElementValueById('current-score' , 0)
    setTextElementValueById('current-life' , 6)
    continueGame('')
}

function gameOver(){
  hideElementById('play-ground-zone');
  showElementById('score-final');
//   update  achive score
// get the score
 const lastScore = getTextElementValueById('current-score');
//  set the score boARD
 setTextElementValueById('achive-score' , lastScore);
//  clear last selected history
  const currentAlphabet = getElementTextById('current-alphabet');
  removeBackgroundColorById(currentAlphabet);
}


