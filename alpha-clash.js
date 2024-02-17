// function play(){
//     // console.log('play start now');

//     //  step-1 : hide the home screen. to hide the screen add the class hidden to the home section.
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
//     // console.log(homeSection.classList);

//         // show the play ground
//     const gameSection = document.getElementById('play-ground');
//     gameSection.classList.remove('hidden');
//     console.log(gameSection.classList);
// }


function continueGame(){
    // step 1 : genaret a rendom alphabet.
    const alphabet = getARandomAlphabet();
    console.log('Your random Alphabet is :', alphabet);

    // set rendomly genareted alphabet to the screen ( show it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set background color
   setBackgroundColorById(alphabet);
}


function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}
