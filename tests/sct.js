const {APP,OFF,ANTES,FONT}=require('./_entorno');
const {chromium}=require('playwright');(async()=>{const b=await chromium.launch({executablePath:process.argv[2]});const p=await b.newPage({viewport:{width:390,height:844}});
const errs=[];p.on('pageerror',e=>errs.push(e.message));
await p.goto(APP);
await p.addStyleTag({content:"@font-face{font-family:Silkscreen;src:url('"+FONT('silkscreen-latin-400-normal.woff2')+"')}@font-face{font-family:Silkscreen;font-weight:700;src:url('"+FONT('silkscreen-latin-700-normal.woff2')+"')}"});
await p.evaluate(()=>{QS.forEach((q,i)=>S.answers[i]=2);S.tests=[{date:addDays(today(),-20),scores:scores()}];S.name="Laura";S.g={tr:{},fin:{},ref:{},carta:today(),lore:{SUE:today()},ok:{}};S.tourDone=true;save();S.reg="SUE";go("region")});
await p.click('[data-scene="SUE-01"]');await p.waitForTimeout(300);
console.log('focus',await p.evaluate(()=>document.body.classList.contains('focus')&&getComputedStyle(document.getElementById('nav')).display));
const Q=await p.evaluate(()=>SCN["SUE-01"]);let n=0;
async function shot(name){await p.screenshot({path:'scs/'+name+'.png',fullPage:true})}
const next=async()=>{await p.waitForSelector('#scnext:not([disabled])',{timeout:12000});await p.click('#scnext');await p.waitForTimeout(150)};
// pred
await shot('0pred');await p.click('[data-sca="pred:1"]');await shot('0pred_b');await next();
await shot('1card');await next();
await p.click('[data-sca="mt:'+(Q.m[0][1]?1:0)+'"]');await shot('2mt');await next();
await next();await p.click('[data-sca="mt:'+(Q.m[1][1]?0:1)+'"]');await shot('4mt_bad');console.log('back exists',!!(await p.$('[data-sca="back"]')),'next exists',!!(await p.$('#scnext[data-sca="next"]')));await p.click('[data-sca="back"]');await p.waitForTimeout(150);console.log('step after back',await p.evaluate(()=>S.sc.i),await p.evaluate(()=>!!document.querySelector('#scnext[disabled]')));await next();await p.click('[data-sca="mt:'+(Q.m[1][1]?1:0)+'"]');await next();
await next();
const good=Q.c[1].findIndex(x=>x[2]);const bad=Q.c[1].findIndex(x=>!x[2]);await p.click('[data-sca="case:'+bad+'"]');await shot('6case_bad');await p.click('[data-sca="case:'+good+'"]');await shot('6case_good');await next();
await next();
for(const w of Q.x[2])await p.click('[data-sca="cl:'+w+'"]');await p.click('[data-sca="clchk"]');await shot('8cloze_bad');
await p.click('[data-sca="clr:0"]');await p.click('[data-sca="clr:1"]');for(const w of Q.x[1])await p.click('[data-sca="cl:'+w+'"]');await p.click('[data-sca="clchk"]');await shot('8cloze_ok');await next();
await next();
await p.click('[data-sca="conn:0"]');await next();
await shot('11check');for(let j=0;j<3;j++)await p.click('[data-sca="chk:'+j+':0"]');await p.click('[data-sca="chkok"]');await p.waitForTimeout(300);await shot('12end');
console.log('ok',await p.evaluate(()=>[!!S.g.ok["SUE-01"],S.view]));
// resume + exit
await p.evaluate(()=>{S.sc={id:"SUE-02",i:0,a:{}};go("escena")});await p.click('[data-sca="pred:0"]');await next();await p.click('[data-sca="exit"]');
console.log('saved',await p.evaluate(()=>[S.g.scp["SUE-02"],S.view,document.body.classList.contains('focus')]));
await p.evaluate(()=>{S.reg='SUE';go('region');S.regOpen=true;render()});await p.waitForTimeout(300);const el=await p.$('#reglect');await el.screenshot({path:'scs/list.png'});console.log(errs);await b.close()})();
