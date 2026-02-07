/* ---------- PORTAL ---------- */

function enterWorld(){

    document.querySelector(".portal").classList.add("travel");
    document.getElementById("portalScreen").classList.add("fadeOut");
  
    setTimeout(()=>{
      document.getElementById("portalScreen").style.display="none";
      document.getElementById("dateScreen").style.display="flex";
    },5000);
  }
  
  /* ---------- DATE SYSTEM ---------- */
  
  function selectDate(date){
  
    let today = new Date().getDate();
  
    if(date !== today){
      alert("Ruko ruko 😝 Aaj ka din pehle aane do ❤️");
      return;
    }
  
    document.getElementById("dateScreen").style.display="none";
    document.getElementById("surpriseScreen").style.display="flex";
  
    if(date==7) RoseGame();
    else if(date==8) ProposeGame();
    else ValentineFinal();
  }
  
  /* ---------- ROSE DAY GAME ---------- */
  let roseClicks = 0;
  
  function RoseGame(){
  
    roseClicks = 0; // reset every time game starts
  
    document.getElementById("surpriseScreen").innerHTML = `
      <h1>🌹 Happy Rose Day</h1>
      <p id="dayMessage">Catch the rose from Teddy 😜</p>
  
      <div id="teddy">🧸</div>
      <button id="roseBtn" onclick="tryRose()">🌹 Take Rose</button>
    `;
  }
  
  function tryRose(){
  
    roseClicks++;
  
    let btn = document.getElementById("roseBtn");
  
    if(roseClicks <= 6){
  
      let x = Math.random() * (window.innerWidth - 160);
      let y = Math.random() * (window.innerHeight - 160);
  
      btn.style.position = "absolute";
      btn.style.left = x + "px";
      btn.style.top = y + "px";
  
    }else{
  
      btn.remove();
  
      document.getElementById("teddy").innerHTML = "🧸🌹";
  
      document.getElementById("dayMessage").innerText =
        "Teddy gives you this rose with lots of love ❤️";
  
      heartBurst();
    }
  }
  
  
  
  /* ---------- PROPOSE DAY ---------- */
  
  function ProposeGame(){
  
    document.getElementById("surpriseScreen").innerHTML=`
      <h1>💍 Happy Propose Day</h1>
      <p>Will you be mine forever? 💖</p>
  
      <button class="choiceBtn" onclick="acceptLove()">❤️ YES</button>
      <button class="choiceBtn" onclick="acceptLove()">😘 OF COURSE</button>
    `;
  }
  
  function acceptLove(){
    heartBurst();
    document.getElementById("surpriseScreen").innerHTML=`
      <h1>💍 I knew it...</h1>
      <p>I choose you forever ❤️</p>
    `;
  }
  
  /* ---------- FINAL DAY ---------- */
  
  function ValentineFinal(){
    document.getElementById("surpriseScreen").innerHTML=`
      <h1>❤️ Happy Valentine's Day</h1>
      <p>You are my today, tomorrow and forever 💖</p>
    `;
  }
  
  /* ---------- FLOATING HEARTS ---------- */
  
  setInterval(()=>{
    let h=document.createElement("div");
    h.className="heart";
    h.innerHTML="❤";
    h.style.left=Math.random()*100+"vw";
    h.style.fontSize=Math.random()*20+15+"px";
    document.body.appendChild(h);
    setTimeout(()=>h.remove(),8000);
  },400);
  
  /* ---------- HEART EXPLOSION ---------- */
  
  function heartBurst(){
    for(let i=0;i<60;i++){
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
  