const kToggle = document.getElementById("k-toggle");
const sBtn = document.getElementById("submit");
const wElement = document.getElementById("wins");
const pElement = document.getElementById("percentage");
const rElement = document.getElementById("results");
let kActive = false;
const win = 0;
const loss = 1;
let fInput;
let fNum = 0;
let wins = 0;

function flip() {
   return Math.floor(Math.random() * 2);
}

sBtn.addEventListener('click', () => {
    wins = 0;
    fNum = 0;
    event.preventDefault();
    fInput = parseInt(document.getElementById('flip-input').value);
    cFlip();
    wPercent();
    rElement.classList.remove('visually-hidden');
})

kToggle.addEventListener('click', (event) => {

    if (kToggle.classList.contains('active')) {
        kActive = false;
        kToggle.classList.remove('active');

    } else {
        kActive = true;
        kToggle.classList.add('active');

    }
    console.log('thumb active:', kActive)
})



function cFlip() {

    if (kActive) {
        for (var i = 0; i < fInput; i++) {
            let kFlip1 = flip();
            console.log('flip 1:', kFlip1 === win);
            let kFlip2 = flip();
            console.log('flip 2:', kFlip2 === win);

            if (kFlip1 == win || kFlip2 == win) {
                wins++;
            }
            fNum++;
        }
        
    } else {
        for (var i = 0; i < fInput; i++){
            let rFlip = flip();
            console.log('flip:', rFlip === win);

            if (rFlip == win) {
                wins++;
            }
            fNum++;
        }
        
    }
    
}

function wPercent() {
    const winPercentage = (wins / fNum) * 100;
    pElement.innerText = winPercentage.toFixed(2) + '%';
    console.log('wins:', wins);
    wElement.innerText = wins;
    console.log('num of flips:', fNum);
    console.log('win percent:', winPercentage.toFixed(2) + '%');
  }