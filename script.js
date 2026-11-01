(()=>{const d=document,R=d.documentElement;R.classList.add('js');
const rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
const pg=d.getElementById('pg');
addEventListener('scroll',()=>{pg.style.transform='scaleX('+scrollY/Math.max(1,R.scrollHeight-innerHeight)+')'},{passive:true});
const io=new IntersectionObserver(e=>e.forEach(t=>{if(t.isIntersecting){t.target.classList.add('in');io.unobserve(t.target)}}),{threshold:.12});
d.querySelectorAll('.rv').forEach(e=>io.observe(e));
const L=[...d.querySelectorAll('nav a')],so=new IntersectionObserver(e=>e.forEach(t=>{if(t.isIntersecting)L.forEach(a=>a.classList.toggle('on',a.getAttribute('href')==='#'+t.target.id))}),{rootMargin:'-25% 0px -60% 0px'});
L.forEach(a=>{const s=d.querySelector(a.getAttribute('href'));s&&so.observe(s)});
const c=d.getElementById('bg'),x=c.getContext('2d');let W,H,P=[],col,m={x:-999,y:-999};
const rs=()=>{W=c.width=innerWidth;H=c.height=innerHeight;col=getComputedStyle(R).getPropertyValue('--a').trim();P=Array.from({length:Math.min(70,W*H/15000|0)},()=>({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.35,vy:(Math.random()-.5)*.35}))};
addEventListener('resize',rs);addEventListener('pointermove',e=>{m.x=e.clientX;m.y=e.clientY});rs();
const ln=(a,b,al)=>{x.globalAlpha=al;x.beginPath();x.moveTo(a.x,a.y);x.lineTo(b.x,b.y);x.stroke()};
const f=()=>{x.clearRect(0,0,W,H);x.fillStyle=x.strokeStyle=col;
P.forEach((p,i)=>{if(!rm){p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>W)p.vx*=-1;if(p.y<0||p.y>H)p.vy*=-1}
x.globalAlpha=.55;x.beginPath();x.arc(p.x,p.y,1.7,0,7);x.fill();
for(let j=i+1;j<P.length;j++){const q=P[j],k=Math.hypot(p.x-q.x,p.y-q.y);if(k<130)ln(p,q,(1-k/130)*.25)}
const k=Math.hypot(p.x-m.x,p.y-m.y);if(k<170)ln(p,m,(1-k/170)*.55)});
if(!rm)requestAnimationFrame(f)};f()})();
