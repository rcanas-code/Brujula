const {APP,OFF,ANTES,FONT}=require('./_entorno');
const {chromium}=require('playwright');(async()=>{const b=await chromium.launch({executablePath:process.argv[2]});const p=await b.newPage({viewport:{width:360,height:760}});
const errs=[];p.on('pageerror',e=>errs.push(e.message));
await p.goto(APP);
await p.evaluate(()=>{QS.forEach((q,i)=>S.answers[i]=2);S.answers[0]=1;S.tests=[{date:addDays(today(),-10),scores:scores()}];S.route=buildRoute(scores());S.tourDone=true;save();render()});
const r=await p.evaluate(()=>{const out=[];["hoy","mundo","proposito","explorar","mas","ruta","mapa","yo","coleccion","dudas","ayuda","dinero","crono","cuerpo","curiosidad","grupo","personaje"].forEach(v=>{try{go(v,true);out.push(v+':'+document.querySelector('#app').innerText.length)}catch(e){out.push(v+' ERR '+e.message)}});
 Object.keys(MWPOS).forEach(k=>{try{S.reg=k;go('region')}catch(e){out.push(k+' ERR '+e.message)}});
 try{S.tour=0;render();for(let i=0;i<TOUR.length;i++){S.tour=i;go(TOUR[i][0])}S.tour=null}catch(e){out.push('tour ERR '+e.message)}
 return out.join(' ')});
console.log(r,errs);await b.close()})();
