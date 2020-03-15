var randomNumber1,randomNumber2;
randomNumber1 = Math.round(Math.random()*5 +1);
randomNumber2 = Math.round(Math.random()*5 +1);
console.log(randomNumber1);






document.querySelector('.img1').setAttribute('src',`images/dice${randomNumber1}.png`);

document.querySelector('.img2').setAttribute('src',`images/dice${randomNumber2}.png`);



if(randomNumber1 > randomNumber2){
    document.querySelector('.container h1').textContent = 'Player 1 Won!';
}
else if(randomNumber2 > randomNumber1){
    document.querySelector('.container h1').textContent = 'Player 2 Won!';
}
else {
    document.querySelector('.container h1').textContent = 'Draw';
}