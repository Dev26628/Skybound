const canvas = document.getElementById("sim");
const ctx = canvas.getContext("2d");

let w, h;
function resize(){
  w = canvas.width = canvas.offsetWidth;
  h = canvas.height = canvas.offsetHeight;
}
window.addEventListener("resize", resize);
resize();

let plane = { x: w/2, y: h/2, vx:0, vy:0 };
let score = 0;
let paused = false;

document.addEventListener("keydown", e => {
  if(e.key==="ArrowLeft") plane.vx=-4;
  if(e.key==="ArrowRight") plane.vx=4;
  if(e.key==="ArrowUp") plane.vy=-3;
  if(e.key==="ArrowDown") plane.vy=3;
});

document.addEventListener("keyup",()=>{plane.vx=0;plane.vy=0});

function drawPlane(){
  ctx.save();
  ctx.translate(plane.x,plane.y);
  ctx.fillStyle="#6effc3";
  ctx.beginPath();
  ctx.moveTo(0,-12);
  ctx.lineTo(14,12);
  ctx.lineTo(-14,12);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

function loop(){
  if(!paused){
    ctx.clearRect(0,0,w,h);
    plane.x+=plane.vx;
    plane.y+=plane.vy;

    plane.x=Math.max(20,Math.min(w-20,plane.x));
    plane.y=Math.max(20,Math.min(h-20,plane.y));

    drawPlane();
    score++;
    document.getElementById("score").textContent="Score: "+score;
  }
  requestAnimationFrame(loop);
}
loop();

/* Buttons */
document.getElementById("pauseBtn").onclick=()=>{
  paused=!paused;
};

document.getElementById("resetBtn").onclick=()=>{
  plane.x=w/2;
  plane.y=h/2;
  score=0;
};

/* CTA scroll */
document.getElementById("startSim").onclick=()=>{
  document.getElementById("simulator").scrollIntoView({behavior:"smooth"});
};

/* Fun cards */
const facts=[
  "Commercial planes fly around 35,000 feet.",
  "The Boeing 747 has over 6 million parts.",
  "Jet engines can weigh more than a car.",
  "Planes are struck by lightning often and are built for it."
];

document.querySelectorAll(".fun-btn").forEach(card=>{
  card.onclick=()=>{
    const type=card.dataset.fun;
    if(type==="fact"){
      alert(facts[Math.floor(Math.random()*facts.length)]);
    }
    if(type==="mode"){
      document.body.classList.toggle("night");
    }
    if(type==="sound"){
      const audio=new Audio("https://www.soundjay.com/transportation/jet-plane-fly-by-01.mp3");
      audio.volume=0.4;
      audio.play();
    }
  };
});
