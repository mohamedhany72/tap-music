window.addEventListener("load", function(){
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");
    const colors = [
        "#F22248",
        "#05AFF2",
        "#84BF04",
        "#F2CB05",
        "#F28705",
        "#591D28"
    ];
    // making the sound playing
    pads.forEach((pad, index) => {
        pad.addEventListener("click", function(){
            sounds[index].currentTime = 0;
            sounds[index].play();
            createBalls(index)
        })
    });

    //make balls
    function createBalls(index){
        const ball = document.createElement("div");
        visual.appendChild(ball);
        ball.style.backgroundColor = colors[index];
        ball.style.animation = 'jump 1s ease';
        ball.addEventListener("animationend", function(){
            visual.removeChild(this);
        })
    };
});