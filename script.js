let number = document.querySelector('.number');
let check = document.querySelector('.check');
let message =document.querySelector('.start');
 let score = 20;
let hscore = 0;
number = Math.trunc(Math.random()*20)+1;
document.querySelector('.number').textContent = '?';
check.addEventListener('click',function(){
let input = Number(document.querySelector('.input-num').value);
console.log(input , typeof input);
  if(!input){
        document.querySelector('.start').textContent = '⛔️ No number!';
    }
    else if(number==input){
        document.querySelector('.start').textContent ='🎉 Correct Number!';
        hscore = score;
        document.querySelector('.hscore').textContent =hscore;
       document.querySelector('body').style.backgroundColor='green';

    }
    else if(input>number){
        document.querySelector('.start').textContent ='📈 Too high!';
        score--;
        document.querySelector('.score').textContent = score;
        if(score <1){
            document.querySelector('.start').textContent = '💥 You lost the game!';
            document.querySelector('.score').textContent = '0';
        }
    }
    else if (input<number){
        document.querySelector('.start').textContent ='📉 Too low!';
        score--;
        document.querySelector('.score').textContent =score;
        if (score <1){
            document.querySelector('.start').textContent = '💥 You lost the game!';
            document.querySelector('.score').textContent = '0';
        }
    }
});
document.querySelector('.btn-head').addEventListener('click',function(){
    number = Math.trunc(Math.random()*20)+1;
  document.querySelector('.start').textContent ='Start Guessing';
    document.querySelector('body').style.backgroundColor ='black';
    document.querySelector('.score').textContent =20;
    document.querySelector('.number').textContent ='?';
    document.querySelector(".input-num").value = '';
    displayMessage('Start guessing...');
});
