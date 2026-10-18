const {APP,OFF,ANTES,FONT}=require('./_entorno');
const {chromium}=require('playwright');(async()=>{const b=await chromium.launch({executablePath:process.argv[2]});const p=await b.newPage({viewport:{width:390,height:844}});
const errs=[];p.on('pageerror',e=>errs.push(e.message));
await p.goto(APP);
await p.addStyleTag({content:"@font-face{font-family:Silkscreen;src:url('"+FONT('silkscreen-latin-400-normal.woff2')+"')}@font-face{font-family:Silkscreen;font-weight:700;src:url('"+FONT('silkscreen-latin-700-normal.woff2')+"')}"});
await p.evaluate(()=>{localStorage.clear()});await p.reload();await p.waitForTimeout(500);
const shot=async n=>{await p.waitForTimeout(250);await p.screenshot({path:'scs/i32_'+n+'.png'})};
console.log('skip on title',await p.evaluate(()=>!!document.querySelector('.advskip')));await shot('00');
await p.click('[data-adv="1"]',{force:true});
for(let k=1;k<20;k++){
  await p.waitForSelector('.advbox .btn.sm:not(.ghost):not([disabled]), .dlgo:not([disabled]), #advname',{timeout:40000});await p.waitForTimeout(100);
  const st=await p.evaluate(()=>[S.advN,INTRO[S.advN][0],!!document.querySelector('.advskip'),!!document.querySelector('[data-advq]'),!!document.querySelector('#advname')]);console.log(st);
  await shot(String(k).padStart(2,'0'));
  if(st[4]){await p.fill('#advname','Laura');await p.click('[data-act="advname"]');continue}
  if(st[3]){const nq=await p.locator('[data-advq]').count();for(let q=0;q<nq;q++){await p.evaluate(q=>{const b=document.querySelectorAll('[data-advq]')[q];if(b)b.click()},q);await p.waitForTimeout(9000)}await p.waitForSelector('.dlgo.go:not([disabled])',{timeout:45000});await shot(String(k).padStart(2,'0')+'b');await p.click('.dlgo.go');continue}
  if(st[0]===await p.evaluate(()=>INTRO.length-1)){await p.waitForSelector('.advbox [data-act="advdown"]:not([disabled])',{timeout:40000});await p.click('.advbox [data-act="advdown"]');break}
  await p.click('.advbox .btn.sm:not(.ghost)');
}
await p.waitForTimeout(400);await p.screenshot({path:'scs/i32_end.png',fullPage:true});
console.log(await p.evaluate(()=>[S.name,store.get('advN'),!!document.querySelector('[data-act="start"]'),document.querySelector('.advtxt').textContent.slice(0,40)]));
await p.reload();await p.waitForTimeout(400);console.log('resume',await p.evaluate(()=>S.advN));
console.log(errs);await b.close()})();
