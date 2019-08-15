const tml = new TimelineMax({});
const tlBug1 = new TimelineMax({onComplete:function () {this.restart()}});
const tlBug2 = new TimelineMax({onComplete:function () {this.restart()}});
const tlBee = new TimelineMax({onComplete:function () {this.restart()}});

tml.fromTo(".gsap",2,{width:"0",},{width:"100%",ease:SteppedEase.config(14)});


document.querySelector(".helloDiv").addEventListener("click",function () {
    tml.fromTo(".bug1",0.5,{width:"0"},{width:"5%",visibility: "visible",ease: Elastic.easeOut.config(1.5, 0.2)});
    tlBug1.to(".bug1",4, {css: {bezier: [{left:'10%', top:'30%'}, {left:'30%', top:'5%'}, {left:'50%', top:'30%'}] }});
    tlBug1.set(".bug1",{attr:{src:"images/bugTwo.svg"}});
    tlBug1.to(".bug1",4, {css: {bezier: [{left:'50%', top:'30%'}, {left:'30%', top:'50%'}, {left:'10%', top:'30%'}] }});
    tlBug1.set(".bug1",{attr:{src:"images/bugOne.svg"}});

    tml.fromTo(".bug2",0.5,{width:"0"},{width:"5%",visibility: "visible",ease: Elastic.easeOut.config(1.5, 0.2)},2);
    tlBug2.to(".bug2",4, {css: {bezier: [{left:'90%', top:'60%'}, {left:'60%', top:'80%'}, {left:'45%', top:'40%'}] }},2);
    tlBug2.set(".bug2",{attr:{src:"images/bugOne.svg"}});
    tlBug2.to(".bug2",4, {css: {bezier: [{left:'45%', top:'40%'}, {left:'50%', top:'20%'}, {left:'90%', top:'60%'}] }});
    tlBug2.set(".bug2",{attr:{src:"images/bugTwo.svg"}});

    tml.fromTo(".bee",0.5,{width:"0"},{width:"5%",visibility: "visible",ease: Elastic.easeOut.config(1.5, 0.2)},1);
    tlBee.to(".bee",4, {css: {bezier: [{left:'15%', top:'90%'}, {left:'15%', top:'60%'}, {left:'15%', top:'30%'}] }},1);
    tlBee.set(".bee",{rotation:180});
    tlBee.to(".bee",4, {css: {bezier: [{left:'15%', top:'30%'}, {left:'15%', top:'60%'}, {left:'15%', top:'90%'}] }});
    tlBee.set(".bee",{rotation:180});
});
