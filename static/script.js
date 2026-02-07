let today = new Date().getDate();

function enterWorld(){

    // start portal travel
    document.querySelector(".portal").classList.add("travel");
    document.getElementById("portalScreen").classList.add("fadeOut");
  
    // after 2 seconds go to date screen
    setTimeout(()=>{
      document.getElementById("portalScreen").style.display="none";
      document.getElementById("dateScreen").style.display="flex";
    },5000);
  }
  

function selectDate(date){

  if(date !== today){
    alert("Ruko ruko 😝 Aaj ka din pehle aane do ❤️");
    return;
  }

  document.getElementById("dateScreen").style.display="none";
  document.getElementById("surpriseScreen").style.display="flex";

  if(date==7){
    show("🌹 Happy Rose Day","This rose is for you my love ❤️");
  }
  else if(date==10){
    show("🧸 Happy Teddy Day","Sending you a big teddy hug 🤗");
  }
  else if(date==14){
    show("❤️ Happy Valentine's Day","You are my forever Valentine 💖");
  }
  else{
    show("💖 Special Day","I love you so much ❤️");
  }
}

function show(title,msg){
  document.getElementById("dayTitle").innerText=title;
  document.getElementById("dayMessage").innerText=msg;
}

/* HEART GENERATOR */
setInterval(createHeart, 400);

function createHeart(){
  let heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "❤";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (Math.random()*20 + 15) + "px";

  document.body.appendChild(heart);

  setTimeout(()=>{
    heart.remove();
  },8000);
}
let roseClicks = 0;

function tryRose(){

  roseClicks++;

  let btn = document.getElementById("roseBtn");

  if(roseClicks < 4){

    // Move button randomly
    btn.style.left = Math.random()*80 + "vw";
    btn.style.top = Math.random()*80 + "vh";

  }else{

    btn.remove();
  
    document.getElementById("teddy").innerHTML="🧸🌹";
  
    let rose = document.createElement("div");
    rose.id="finalRose";
    rose.innerHTML="🌹";
  
    document.getElementById("surpriseScreen").appendChild(rose);
  
    document.getElementById("dayMessage").innerText=
      "Teddy gives you this rose with lots of love ❤️";
  
    heartBurst();   // ❤️ EXPLOSION
  }
  
}

function heartBurst(){

    for(let i=0;i<90;i++){
  
      let h=document.createElement("div");
      h.className="burstHeart";
      h.innerHTML="❤";
  
      h.style.left="50%";
      h.style.top="50%";
  
      h.style.setProperty("--x",Math.random());
      h.style.setProperty("--y",Math.random());
  
      document.body.appendChild(h);
  
      setTimeout(()=>h.remove(),3000);
    }
  }
  