score = 0;
over = false;
cross = false;
gameov = new Audio("Resources/Audio/gameover.wav");
jmp = new Audio("Resources/Audio/jump.wav");
document.onkeydown = function(e) {
    if((e.keyCode==38 || e.keyCode==32) && over==false) {
        finn = document.querySelector('.finn');
        finn.classList.add('animateFinn');
        fnn.src = "Resources/Character/still.png";
        jmp.play();
        setTimeout(() => {
            finn.classList.remove('animateFinn');
            fnn.src = "Resources/Character/running.gif";
        },900);
    }
}

obs = document.getElementById('obs');
let obs_image = ['Resources/Obstacles/corona.png','Resources/Obstacles/meet.png','Resources/Obstacles/psd.png']
setInterval(() => {
    if(over==true) {
        return;
    }
    let random = Math.floor(Math.random() * 3);
    obs.src = obs_image[random];
}, 5000);

setInterval(() => {
    finn = document.querySelector('.finn');
    obstacle = document.querySelector('.obstacles');

    fx = parseInt(window.getComputedStyle(finn, null).getPropertyValue('left'));
    fy = parseInt(window.getComputedStyle(finn, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(fx-ox);
    offsetY = Math.abs(fy-oy);
    
    if(offsetX<70 && offsetY<130) {
        obstacle.classList.remove('animate-obs')
        obstacle.classList.add('obs-stop')
        fnn.src = "Resources/Character/still.png";
        gameov.play();
        final_score.innerHTML = "Game Over <br><br> Your Score: "+score+"<br><br>";
        score_cont.style.visibility = 'hidden';
        gameOver.style.visibility = 'visible';
        over = true;
    }
    else {
        cross = true;
        score+=1;
        Updatescore(score);
    }
}, 100);

function Updatescore(score) {
    if(over==true) {
        return;
    }
    score_cont.innerHTML = "Your Score: "+score;
}