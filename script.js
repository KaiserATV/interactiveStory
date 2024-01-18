const u = document.getElementById("uberS");

u.addEventListener("mouseover",move);

function move(){
    const h = (window.innerHeight-u.getBoundingClientRect().height);
    const w = (window.innerWidth-u.getBoundingClientRect().width);

    let neuH = Math.floor(Math.random()*h);
    let neuW = Math.floor(Math.random()*w);

    u.style.top=neuH+"px";
    u.style.left=neuW+"px";
}


