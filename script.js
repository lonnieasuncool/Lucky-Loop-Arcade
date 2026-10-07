const state = { credits: 12, wins: 0, losses: 0, spent: 0, streak: 0, best: 0, busy: false, position: 50 };
const $ = (id) => document.getElementById(id);
const button = $('play-button'); const claw = $('claw-line'); const toast = $('toast');

function render(){ $('credits').textContent=state.credits; $('wins').textContent=state.wins; $('losses').textContent=state.losses; $('spent').textContent=state.spent; $('streak').textContent=state.best; claw.style.left=`${state.position}%`; button.disabled=state.credits===0||state.busy; button.style.opacity=state.credits===0?'.45':'1'; }
function message(text){ toast.textContent=text; toast.classList.add('show'); clearTimeout(message.timer); message.timer=setTimeout(()=>toast.classList.remove('show'),2400); }
function moveClaw(amount){ if(state.busy)return; state.position=Math.max(13,Math.min(87,state.position+amount)); render(); }

const holdTimers = new Map();
function stopHolding(control){ clearInterval(holdTimers.get(control)); holdTimers.delete(control); }
function holdToMove(control, amount){
  stopHolding(control);
  moveClaw(amount);
  holdTimers.set(control, setInterval(()=>moveClaw(amount), 95));
}
[['move-left',-6],['move-right',6]].forEach(([id,amount])=>{
  const control=$(id);
  control.addEventListener('pointerdown',(event)=>{ event.preventDefault(); control.setPointerCapture?.(event.pointerId); holdToMove(control,amount); });
  control.addEventListener('pointerup',()=>stopHolding(control));
  control.addEventListener('pointercancel',()=>stopHolding(control));
  control.addEventListener('lostpointercapture',()=>stopHolding(control));
});
window.addEventListener('pointerup',()=>holdTimers.forEach((_,control)=>stopHolding(control)));
window.addEventListener('keydown',(event)=>{ if(event.key==='ArrowLeft'){event.preventDefault();moveClaw(-5)} if(event.key==='ArrowRight'){event.preventDefault();moveClaw(5)} if(event.key===' '){event.preventDefault();button.click()} });

button.addEventListener('click',()=>{ if(state.busy||state.credits<1)return; state.busy=true; state.credits--; state.spent++; render(); const aimedAtPrize=Math.abs(state.position-50)<10; setTimeout(()=>{ claw.style.height='206px'; setTimeout(()=>{ const won=aimedAtPrize&&Math.random()<.35; if(won){state.wins++;state.streak++;state.best=Math.max(state.best,state.streak);message('Prize secured! Nice steering.');}else{state.losses++;state.streak=0;message(aimedAtPrize?'So close. The claw slipped.':'Missed the pile — steer over a prize first.');} claw.style.height='112px';state.busy=false;render();if(state.credits===0)message('Out of virtual credits — reset the page to play again.'); },700); },650); });
render();
