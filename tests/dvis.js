const {APP,OFF,ANTES,FONT}=require('./_entorno');
const {chromium}=require('playwright');(async()=>{const b=await chromium.launch({executablePath:process.argv[2]});const out=[];
for(const scheme of ['dark','light']){const p=await b.newPage({viewport:{width:360,height:780},deviceScaleFactor:2,colorScheme:scheme});const errs=[];p.on('pageerror',e=>errs.push(e.message));
await p.clock.install({time:new Date('2026-11-02T10:00:00')});
await p.goto(APP);await p.waitForTimeout(400);
const E=(f,a)=>p.evaluate(f,a);
await E(()=>{localStorage.clear();TA.forEach((a,i)=>[0,1,2].forEach(j=>S.answers[i*3+j]=["ATE","EDU","HAB"].includes(a.k)?1:4));S.tests=[{date:today(),scores:scores()}];S.route=buildRoute(scores());S.tourDone=true;store.set("tourDone",true);S.name="Laia";store.set("name","Laia");Object.assign(S.g,{carta:today(),guiaIntro:today(),guiaH:today(),celebrated:1,lore:{ATE:today(),EDU:today(),HAB:today()},ok:{"EDU-01":today(),"EDU-03":today(),"EDU-02":today(),"EDU-08":today(),"EDU-04":today(),"HAB-04":today(),"HAB-03":today(),"HAB-05":today(),"HAB-01":today()}});
 S.g.cst={"EDU-A":{st:"c"},"EDU-B":{st:"a",tA:addDays(today(),-3),nx:addDays(today(),-1)},"EDU-C":{st:"c"}};S.g.trD={EDU:{b:addDays(today(),-3)}};S.g.mis={EDU:{id:"folio",start:addDays(today(),-3),apps:[{d:addDays(today(),-2),t:1,v:{t:"Tema 3",r:"Menos de la mitad"}}]}};S.g.tools={plan:{d:today(),src:"D"}};S.g.last={l:1,st:1,m:[]};store.set("game",S.g);save();go("hoy",true)});
await p.waitForTimeout(800);await E(()=>{document.querySelectorAll('.celeb .cgo').forEach(x=>x.click());const d=document.getElementById('dlg');if(d&&d.open)d.close()});
const views=[["hoy",()=>go("hoy",true)],["region",()=>{S.reg="EDU";go("region")}],["dmis",()=>{S.dm={k:"EDU"};go("dmis")}],["dmisHAB",()=>{S.g.trD.HAB={b:today()};S.g.mis.HAB={id:"multi",start:today(),apps:[]};S.dm={k:"HAB"};go("dmis")}],["dguard",()=>dGuardStart("HAB")],["drep",()=>dRepStart("EDU")],["dtools",()=>{S.dtt=null;go("dtools")}],["toolplan",()=>{S.dtt="plan";go("dtools")}],["dpages",()=>go("dpages")],["yo",()=>go("mas",true)],["dudas",()=>go("dudas")]];
for(const [n,f] of views){await E(f);await p.waitForTimeout(300);await E(()=>{document.querySelectorAll('.celeb .cgo').forEach(x=>x.click());const d=document.getElementById('dlg');if(d&&d.open)d.close()});
 const r=await E(()=>{const sw=document.documentElement.scrollWidth,W=innerWidth,bad=[...document.querySelectorAll('.view *')].filter(e=>{const R=e.getBoundingClientRect();return R.right>W+1&&R.width>0}).slice(0,3).map(e=>e.className+":"+Math.round(e.getBoundingClientRect().right));return {sw,W,bad}});
 out.push(scheme+" "+n+" "+JSON.stringify(r));await p.screenshot({path:`dshots/v_${scheme}_${n}.png`})}
out.push(scheme+" errores "+JSON.stringify(errs));await p.close()}
console.log(out.join("\n"));await b.close()})();
