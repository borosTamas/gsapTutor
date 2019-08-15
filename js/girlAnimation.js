const cape = document.querySelector("#Cape");
const hand = document.querySelector("#hand");
const girl = document.querySelector("#girl");
const clouds = document.querySelector("#Clouds");
const ground = document.querySelectorAll(".decorator");

const background = new TimelineMax({});
const arm = new TimelineMax({paused:true, reversed: true});

background.from(cape,1,{scaleY:0.75, repeat:-1, yoyo:true});
TweenMax.to(clouds, 10, {x: "400%", repeat:-1, delay:1}, -0.75);
TweenMax.staggerTo(ground, 10, {x: "2500%", repeat:-1, delay:2,  ease: Power0.easeNone}, -1);


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