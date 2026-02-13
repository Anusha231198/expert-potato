/* ---------- ENTER WORLD ---------- */

function enterWorld(){
  document.getElementById("portalScreen").style.display="none";
  document.getElementById("dateScreen").style.display="flex";
}

/* ---------- DATE SYSTEM ---------- */

function selectDate(date){

  let today = new Date().getDate();

  if(date > today){
    alert("Ruko ruko 😝 Aaj ka din pehle aane do ❤️");
    return;
  }

  document.getElementById("dateScreen").style.display="none";
  document.getElementById("surpriseScreen").style.display="flex";

  if(date==7) RoseGame();
  else if(date==8) ProposeGame();
  else if(date==9) ChocolateGame();
  else if(date==10) TeddyGame();
  else if(date==11) PromiseGame();
  else if(date==12) HugDay();
  else if(date==13) KissDay();
  else if(date==14) ValentineFinal();
}

/* ---------- ROSE DAY ---------- */

let roseClicks=0;

function RoseGame(){
  roseClicks=0;

  document.getElementById("surpriseScreen").innerHTML=`
    <h1>🌹 Happy Rose Day</h1>
    <p id="msg">Catch the rose 😜</p>
    <div id="teddy">🧸</div>
    <button id="roseBtn" onclick="tryRose()">🌹 Take Rose</button>
  `;
}

function tryRose(){
  roseClicks++;
  let btn=document.getElementById("roseBtn");

  if(roseClicks<6){
    btn.style.position="absolute";
    btn.style.left=Math.random()*80+"vw";
    btn.style.top=Math.random()*80+"vh";
  }
  else{
    btn.remove();
    document.getElementById("teddy").innerHTML="🧸🌹";
    document.getElementById("msg").innerText="Teddy gives you this rose ❤️";
  }
}

/* ---------- OTHER DAYS ---------- */

function ProposeGame(){
  document.getElementById("surpriseScreen").innerHTML=`
    <h1>💍 Happy Propose Day</h1>
    <p>Will you be mine forever? ❤️</p>
    <button onclick="ValentineFinal()">YES</button>
  `;
}

function ChocolateGame(){
  document.getElementById("surpriseScreen").innerHTML=`
    <h1>🍫 Happy Chocolate Day</h1>
    <div style="font-size:100px">🍫</div>
  `;
}

function TeddyGame(){
  document.getElementById("surpriseScreen").innerHTML=`
    <h1>🧸 Happy Teddy Day</h1>
    <div style="font-size:100px">🧸</div>
  `;
}

function PromiseGame(){
  document.getElementById("surpriseScreen").innerHTML=`
    <h1>🤞 Happy Promise Day</h1>
    <p>I promise to love you forever ❤️</p>
  `;
}

function HugDay(){
  document.getElementById("surpriseScreen").innerHTML=`
    <h1>🤗 Happy Hug Day</h1>
    <p>Big hug for you 🤗</p>
  `;
}

function KissDay(){
  document.getElementById("surpriseScreen").innerHTML=`
    <h1>💋 Happy Kiss Day</h1>
    <p>Sending you a kiss 😘</p>
  `;
}

function ValentineFinal(){
  document.getElementById("surpriseScreen").innerHTML=`
    <h1>❤️ Happy Valentine's Day</h1>
    <p>You are my forever 💖</p>
  `;
}
