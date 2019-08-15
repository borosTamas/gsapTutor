const cape = document.querySelector("#Cape");
const hand = document.querySelector("#hand");
const girl = document.querySelector("#girl");
const background = new TimelineMax({});
const arm = new TimelineMax({paused:true, reversed: true});
background.from(cape,1,{scaleY:0.75, repeat:-1, yoyo:true});



girl.addEventListener("mouseenter",function () {
    if(hand.classList.contains("js-dropped")){
        return;
    }
    TweenMax.to(hand, 0.5, {rotation: -30, transformOrigin: "50% bottom", repeat:1, yoyo:true});
});
arm.to(hand, 0.5,{y:"+=50"});

hand.addEventListener("click", function () {
    hand.classList.toggle("js-dropped");
    arm.reversed() ? arm.play() : arm.reverse()
});