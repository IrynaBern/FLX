let game = confirm('Do you want to play a game?');
if (game) {
    const initMin = 0;
    const initMax = 5;
    const attempts = 3;		
    const initPrize = 0;
    const initMaxPrize = 10;
    let min = initMin;
    let max = initMax;
    let maxPrize = initMaxPrize;
    let secretNumber;
    let gamePrize = initPrize;
    while(game) {
        secretNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        let currentPrize = maxPrize;
        let continueGame = false;
         for (let i = 1; i <= attempts; i++) {
            let numberGame = prompt(
                `Enter a number from  ${min} to ${max}  
                Attempts left: ${(attempts - i + 1)} 
                Total prize: ${gamePrize}
                Possible prize on current attempt: ${currentPrize}`, '');
            if(numberGame !== '' && numberGame !== null && !isNaN(numberGame = Number(numberGame))) {
                numberGame = parseFloat(numberGame);
                if(Number.isInteger(numberGame) && numberGame === secretNumber) {
                    gamePrize += currentPrize;
                    game = confirm(`Congratulation! Your prize is: ${gamePrize}\nDo you want continue?`);
                        if(game) { 
                            maxPrize *= 3;
                            max *= 2;
                            continueGame = true;
                        }
                    break;
                }
            } 
            currentPrize = Math.floor(currentPrize / 2);
        }
        if(!continueGame) {
            alert(`Thank you for a game. Your prize is: ${gamePrize}`);
            game = confirm(`Do you want to play again?`); 
            if(game){
                min = initMin;
                max = initMax;
                maxPrize = initMaxPrize;
                gamePrize = initPrize;
            } else {
                break;
            }
        }
    }
} else {
    alert('You did not become a millionaire, but can.' );
}