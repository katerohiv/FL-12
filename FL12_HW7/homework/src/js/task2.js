const totalAttempts = 3;
const startWin = 100;
const minRangeEnd = 8;
const rangeStart = 0;
let rangeEnd = minRangeEnd;
let firstAttempt = 0;
let maxWin = startWin;
let currentPrize = maxWin;
let totalWin = 0;
let correction = 1;
let areYouReady = confirm('Do you want to play a game?');
while (areYouReady) {
    while (areYouReady && firstAttempt < totalAttempts) {
        let randomNum = Math.floor(Math.random() * (rangeEnd + correction));
        let userNumber = prompt(`Please enter the number from ${rangeStart} to ${rangeEnd}
Attempts left: ${totalAttempts - firstAttempt}
Total prize: ${totalWin}$
Possible prize on current attempt: ${currentPrize}$`).trim();
        if (Number(userNumber) === randomNum) {
            totalWin += currentPrize;
            maxWin = maxWin * 2;
            currentPrize = maxWin;
            areYouReady = confirm(`Congrats! You're prize is ${totalWin}$. Do you want to to continue?`);
            firstAttempt = 0;
            rangeEnd = rangeEnd + 4;
            randomNum = Math.floor(Math.random() * (rangeEnd + correction));
            console.log(rangeEnd, correction);
        } else if (!userNumber) {
            alert(`Thank you for a game. Your prize is: ${totalWin}`);
            areYouReady = confirm('Do you want to play again?');
            totalWin = 0;
            firstAttempt = 0;
            maxWin = startWin;
            currentPrize = maxWin;
            rangeEnd = minRangeEnd;
        } else {
            firstAttempt++;
            currentPrize = Math.floor(currentPrize / 2);

        }
    }
    if (firstAttempt >= totalAttempts) {
        alert(`Thank you for a game. Your prize is: ${totalWin}`);
        areYouReady = confirm('Do you want to play again?');
        totalWin = 0;
        firstAttempt = 0;
        maxWin = startWin;
        currentPrize = maxWin;
        rangeEnd = minRangeEnd;
    }
}

if (!areYouReady) {
    alert('You did not become a millionaire, but can.');
}
