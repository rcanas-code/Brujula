const {APP,OFF,ANTES,FONT}=require('./_entorno');
const {chromium}=require('playwright');(async()=>{const b=await chromium.launch({executablePath:process.argv[2]});const c=await b.newContext({viewport:{width:390,height:844},hasTouch:true,isMobile:true});const p=await c.newPage();const E=[];p.on('pageerror',e=>E.push(e.message));
await p.addInitScript(()=>{window.__noGuia=1});await p.goto(APP);await p.waitForTimeout(500);
await p.evaluate(()=>{QS.forEach((q,i)=>S.answers[i]=2);S.tests=[{date:addDays(today(),-20),scores:scores()}];S.route=buildRoute(scores());S.g.carta=today();S.g.celebrated=1;store.set('game',S.g);S.tourDone=true;save();go("mundo")});await p.waitForTimeout(700);
const sc=()=>p.evaluate(()=>{const m=document.querySelector('.mwwrap .mw');return +(+m.dataset.s).toFixed(2)});
console.log('inicial',await sc());
const cdp=await c.newCDPSession(p);const box=await (await p.$('.mwwrap')).boundingBox();const cx=box.x+box.width/2,cy=box.y+box.height/2;
const tp=(d)=>[{x:cx-d,y:cy,id:1},{x:cx+d,y:cy,id:2}];
await cdp.send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:tp(40)});
for(let d=40;d<=120;d+=10){await cdp.send('Input.dispatchTouchEvent',{type:'touchMove',touchPoints:tp(d)})}
await cdp.send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]});console.log('tras abrir dedos',await sc());
await p.screenshot({path:'zm_in.png'});
await cdp.send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:tp(150)});
for(let d=150;d>=20;d-=10){await cdp.send('Input.dispatchTouchEvent',{type:'touchMove',touchPoints:tp(d)})}
await cdp.send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]});console.log('tras cerrar dedos',await sc());
await p.screenshot({path:'zm_out.png'});
await p.click('[data-act="mw-zin"]');console.log('boton +',await sc());
await p.evaluate(()=>{const k=[...mwSeen()][0];document.querySelector(`[data-mw="${k}"]`).click()});await p.waitForTimeout(300);console.log('tras tocar región',await sc());
console.log(E);await b.close()})();
