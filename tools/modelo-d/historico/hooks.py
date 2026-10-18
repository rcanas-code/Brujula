import json,sys
B=sys.argv[1];D=sys.argv[2]
s=open(B).read()
assert "/*D-BEGIN" not in s
def rep(old,new,count=1):
    global s
    n=s.count(old);assert n==count,(old[:90],n);s=s.replace(old,new)
bank=json.load(open(D+"/dbank.json"))
js=open(D+"/dmodel.js").read().replace("__DBANK__",json.dumps(bank,ensure_ascii=False,separators=(",",":")))
extra='''
const DGMET={ninguno:"Sin conseguir",bronce:"Bronce · Comprendo",plata:"Plata · Lo pongo en práctica",oro:"Oro · Consolidado"};
setTimeout(()=>{try{if(!DREG.length||typeof FAQ==="undefined")return;FAQ.forEach(sec=>(sec[1]||[]).forEach(q=>{if(q[0]==="¿Para qué sirve la racha?"){q[0]="¿Qué son las semanas activas?";q[1]="Una semana activa es una semana con al menos 2 días de práctica: lecturas, misiones, repasos o retos. Fallar días no rompe nada y no hay que hacerlo todos los días. Se ven en Yo y en tu cuaderno de viaje. La antigua racha de días seguidos ya no se muestra; tus registros se conservan."}if(q[0]==="Un día no lo he hecho. ¿Pierdo la racha?"){q[0]="Un día no lo he hecho. ¿Pierdo algo?";q[1]="No. No pierdes puntos, ni etapa, ni trofeos. Marcar «Hoy no» con sinceridad suma un poco de XP de constancia, pero no cuenta como práctica hecha."}}));
 FAQ.push(["Piloto: Estudio, Atención y Hábitos",[["¿Cómo se ganan los trofeos en estas tres regiones?","Bronce: comprendes las ideas clave en situaciones nuevas (Prueba del guardián). Plata: pones en práctica una técnica en tu vida con una misión de 1 a 4 aplicaciones, sin días seguidos ni fecha límite. Oro: unos días después, recuerdas y aplicas las ideas con preguntas que nunca has visto, y haces un eco de tu técnica."],["¿Qué significa «comprendida con apoyo»?","Que acertaste esa idea justo después de leer la explicación de un fallo. Ayuda a aprender, pero no demuestra lo mismo que acertar a la primera. Por eso vuelve al Repaso unos días después con un caso nuevo; si la resuelves sin ayuda, pasa a comprendida."],["¿Qué comprueba la app y qué registro yo?","La app comprueba tus respuestas, tus planes (cuándo, dónde y primer paso), si tus decisiones encajan con tus datos, los cálculos y los temporizadores. Que las sesiones ocurrieron lo registras tú, y la app lo dice así: «registrado por ti»."],["¿Qué pasa con mis trofeos anteriores?","Se conservan como trofeos históricos y siguen contando para tu personaje y para la historia. Nada se borra."],["¿Por qué hay que esperar para el encuentro del oro?","Porque lo que se quiere comprobar es que lo recuerdas pasado un tiempo. Mientras esperas, puedes explorar otras regiones, leer y repasar: no se bloquea nada y el encuentro no caduca."]]])}catch(e){}},0);
'''
mark="/* ---------- Mundo ---------- */"
rep(mark,js+extra+mark)
# --- motor
rep("function gPlan(k){","function gPlan(k){if(dOn(k))return dPlan(k);")
rep("function gArea(k){\n  const d=GDIF[k];if(!d)return null;","function gArea(k){\n  const d=GDIF[k];if(!d)return null;if(dOn(k)){dMigrate();return dArea(k)}")
rep("function gWhen(k,A,i,j){","function gWhen(k,A,i,j){if(A&&A.D)return dWhen(k,A,i,j);")
rep('function gBtn(k,a,cls){if(!a)return "";const [x,,l]=a,c=cls||"btn";','function gBtn(k,a,cls){if(!a)return "";const [x,,l]=a,c=cls||"btn";if(/^d(guard|mis|rep|oro|eco)$/.test(x))return dBtn(k,a,c);')
rep("xp+=Object.keys(S.rev||{}).length*20+trDays()*5;\n  return xp}","xp+=Object.keys(S.rev||{}).length*20+trDays()*5;\n  xp+=dXP();return xp}")
rep("return {xp,l,into:xp-acc,need:100+50*l,areas,nb,np,no,st,nextEvo}}",
    'if(DREG.length){const D0=dStage();st=D0.st;nextEvo=D0.nextEvo}const mc=a=>a.mC||a.metal;return {xp,l,into:xp-acc,need:100+50*l,areas,nb:areas.filter(a=>mc(a)!=="ninguno").length,np:areas.filter(a=>mc(a)==="plata"||mc(a)==="oro").length,no:areas.filter(a=>mc(a)==="oro").length,st,nextEvo}}')
rep('function aeOros(){return Object.keys(GDIF).filter(k=>{try{return gArea(k).metal==="oro"}catch(e){return false}})}',
    'function aeOros(){return Object.keys(GDIF).filter(k=>{try{const A=gArea(k);return (A.mC||A.metal)==="oro"}catch(e){return false}})}')
rep('nb=G.areas.filter(a=>a.metal==="bronce").length,np=G.areas.filter(a=>a.metal==="plata").length,no=G.areas.filter(a=>a.metal==="oro").length;',
    'mc=a=>a.mC||a.metal,nb=G.areas.filter(a=>mc(a)==="bronce").length,np=G.areas.filter(a=>mc(a)==="plata").length,no=G.areas.filter(a=>mc(a)==="oro").length;')
rep('const nb=G.areas.filter(x=>x.metal!=="ninguno").length,np=G.areas.filter(x=>x.metal==="plata"||x.metal==="oro").length,no=G.areas.filter(x=>x.metal==="oro").length;',
    'const nb=G.nb,np=G.np,no=G.no;')
# --- Yo
rep('${tile("🔥",streak(),"días de racha")}','${DREG.length?tile("🗓️",dWeeks().n,"semanas activas",\'data-go="dpages"\'):tile("🔥",streak(),"días de racha")}')
rep('<span>${pxIco("racha",1.34)} <b>${streak()}</b> racha</span>','${DREG.length?`<span>${pxIco("racha",1.34)} <b>${dWeeks().n}</b> sem. activas</span>`:`<span>${pxIco("racha",1.34)} <b>${streak()}</b> racha</span>`}')
rep('<div class="yobtns"><button class="yob" data-go="personaje">','${dBelt()}<div class="yobtns"><button class="yob" data-go="personaje">')
rep("""${qt(pxIco("mundo",2.34),"Mi hoja de personaje","Lo que vio el Espejo",'data-go="mapa"',"#14506B")}""",
    """${qt(pxIco("mundo",2.34),"Mi hoja de personaje","Lo que vio el Espejo",'data-go="mapa"',"#14506B")}${DREG.length?qt(dIco("lente",2.34),"Mi mochila",`${DTORD.filter(t=>dG().tools[t]).length} de 7 herramientas`,'data-go="dtools"',"#2E8B57")+qt(pxIco("perg",2.34),"Cuaderno de viaje",`${dWeeks().n} semanas activas`,'data-go="dpages"',"#A0683A"):""}""")
# --- región
rep("${T.b&&!T.o&&ent<3?trBox(k):\"\"}","${!A.D&&T.b&&!T.o&&ent<3?trBox(k):\"\"}")
rep("if(A.T.b&&!A.T.o&&A.ent<3)body+=","if(A.D)body+=dRegPanel(k);else if(A.T.b&&!A.T.o&&A.ent<3)body+=")
rep('const why=!GDIF[k]?"Estas lecturas','const why=dOn(k)?dLectWhy(k):!GDIF[k]?"Estas lecturas')
rep('<span class="muted" style="font-size:.85rem">${GMET[A.metal]} · unas 2 semanas</span>','<span class="muted" style="font-size:.85rem">${A.D?DGMET[A.metal]+(A.hist!=="ninguno"?" · histórico: "+A.hist:""):GMET[A.metal]+" · unas 2 semanas"}</span>')
rep('${A?" · "+GMET[A.metal]:" · región para conocerte"}','${A?" · "+(A.D?DGMET:GMET)[A.metal]:" · región para conocerte"}')
rep('const rt=regRetos(k),rtf=!rt?"":/regsoon/.test(rt)?','const rt=regRetos(k),rtf=!rt?"":dOn(k)&&!/regsoon/.test(rt)?`<details class="card fold rgf" id="regretosf" ${S.regRetOpen?"open":""} ontoggle="S.regRetOpen=this.open"><summary><span class="fi">🔥</span>Retos de práctica <span class="muted" style="font-weight:600">· opcionales: suman constancia, no dan la plata</span></summary>${rt}</details>`:/regsoon/.test(rt)?')
rep('function keyL(k){return','function keyL(k){if(dOn(k))return dKeyLecs(k);return')
rep('function lectCnt(k){if(!k||k==="VAL"||!MWPOS[k])return null;','function lectCnt(k){if(!k||k==="VAL"||!MWPOS[k])return null;if(dOn(k)){const T=dG().trD[k]||{};if(T.b)return null;const K=dKeyLecs(k);return [K.filter(dTried).length,K.length,"ideas clave"]}')
rep('const isK=keyL(aK(id)).includes(id);const sub=o||dm?(isK?"Cuenta para el bronce"',
    'const dk=dOn(aK(id)),isK=keyL(aK(id)).includes(id);const sub=dk&&(o||dm||dTried(id))?(isK?"Idea clave trabajada":"Ampliación"):o||dm?(isK?"Cuenta para el bronce"')
rep('<span class="keychip">⭐ Clave</span>','<span class="keychip">⭐ ${dOn(aK(id))?"Idea clave":"Clave"}</span>')
rep('if(okd)return `<div class="lqbox ok"><b>✓ Lectura superada.</b> Ya cuenta para el bronce de ${esc(GREG[k]||"su región")}. Para el oro la repasarás sin mirar en la sala de entreno.</div>`;',
    'if(okd)return dOn(k)?`<div class="lqbox ok"><b>✓ Lectura superada.</b> ${keyL(k).includes(id)?"Idea clave trabajada: cuenta para abrir la Prueba del guardián, donde la verás en situaciones nuevas.":"Lectura de ampliación: suma XP y te ayuda con los casos."}</div>`:`<div class="lqbox ok"><b>✓ Lectura superada.</b> Ya cuenta para el bronce de ${esc(GREG[k]||"su región")}. Para el oro la repasarás sin mirar en la sala de entreno.</div>`;')
rep('${ok?(GDIF[aK(id)]?"Cuenta para el bronce.":""):`Vuelve a leerla con calma: podrás repetir la comprobación ${lqfWhen(id)}.`}',
    '${ok?(dOn(aK(id))?"Idea trabajada.":GDIF[aK(id)]?"Cuenta para el bronce.":""):dOn(aK(id))?`Ya cuenta como trabajada para la Prueba del guardián. Si quieres, relee y repite la comprobación ${lqfWhen(id)}.`:`Vuelve a leerla con calma: podrás repetir la comprobación ${lqfWhen(id)}.`}')
rep('${esc(!A.T.b?"Hacia el bronce: lecturas y quiz"','${esc(A.D?dStepTxt(k,A):!A.T.b?"Hacia el bronce: lecturas y quiz"')
# --- Hoy
rep("else if(S.active&&aK(S.active.id)===k&&!A.T.p&&S.active.start<A.T.b){","else if(!A.D&&S.active&&aK(S.active.id)===k&&!A.T.p&&S.active.start<A.T.b){",2)
rep("else if(S.active&&aK(S.active.id)===k&&!A.T.p){now=","else if(!A.D&&S.active&&aK(S.active.id)===k&&!A.T.p){now=",2)
rep('<span>🔥 ${st} ${st===1?"día":"días"} · ⭐ Nivel ${gState().l}</span>','<span>${DREG.length?`🗓️ ${dWeeks().n} ${dWeeks().n===1?"semana activa":"semanas activas"}`:`🔥 ${st} ${st===1?"día":"días"}`} · ⭐ Nivel ${gState().l}</span>')
rep("   ${focoBanner()}\n   ${aeCard()}","   ${focoBanner()}\n   ${dHoyCard()}\n   ${aeCard()}")
rep('Si la haces <b>al menos 5 días</b>, ganas la <b>plata</b> de ${esc(GREG[a.k]||"esta región")}.</div>','${dOn(a.k)?"Es práctica opcional: suma constancia. En esta región la plata se gana con una misión de aplicación.":`Si la haces <b>al menos 5 días</b>, ganas la <b>plata</b> de ${esc(GREG[a.k]||"esta región")}.`}</div>')
rep('"Gracias por ser sincero. Un día malo no rompe tu racha: solo cuenta no fallar dos seguidos."','(DREG.length?"Gracias por ser sincero: registrarlo suma un poco de constancia. No cuenta como práctica hecha, y un día malo no rompe nada.":"Gracias por ser sincero. Un día malo no rompe tu racha: solo cuenta no fallar dos seguidos.")')
# --- logros
rep('["fire","Racha de 7","Haz tu reto 7 días sin fallar dos seguidos.",st>=7,[Math.min(st,7),7],"hoy"],\n  ["fire","Racha de 21","Llega a 21 días de racha.",st>=21,[Math.min(st,21),21],"hoy"],',
    '...(DREG.length?(W=>[["fire","3 semanas activas","Practica al menos 2 días en 3 semanas distintas. No hace falta que sean seguidas.",W>=3,[Math.min(W,3),3],"hoy"],["fire","6 semanas activas","Practica al menos 2 días en 6 semanas distintas.",W>=6,[Math.min(W,6),6],"hoy"]])(dWeeks().n):[["fire","Racha de 7","Haz tu reto 7 días sin fallar dos seguidos.",st>=7,[Math.min(st,7),7],"hoy"],["fire","Racha de 21","Llega a 21 días de racha.",st>=21,[Math.min(st,21),21],"hoy"]]),')
# --- celebración
rep('const MT={bronce:["Bronce","Ya lo comprendes","#F2B07A"],plata:["Plata","Ya lo aplicas en tu vida","#E3E9EE"],oro:["Oro","Lo dominas","#FFE27A"]};',
    'const MT=ev.k&&dOn(ev.k)?{bronce:["Bronce","Comprendes las ideas clave en situaciones nuevas","#F2B07A"],plata:["Plata","Has puesto en práctica la técnica (registrado por ti)","#E3E9EE"],oro:["Oro","Lo recuerdas y lo aplicas pasado un tiempo","#FFE27A"]}:{bronce:["Bronce","Ya lo comprendes","#F2B07A"],plata:["Plata","Ya lo aplicas en tu vida","#E3E9EE"],oro:["Oro","Lo dominas","#FFE27A"]};')
rep('if(ev.type==="evo"){','if(ev.type==="tool"){const T=DTOOLS[ev.t];big=`<span class="celtool">${dIco(ev.t,9)}</span>`;title="¡Herramienta nueva!";line=`<b>${esc(T[0])}</b>`;sub=esc(T[2])+" La tienes en tu mochila.";col="#5CC98A";tune="magia"}\n  else if(ev.type==="evo"){')
# --- vistas
rep("ayuda:vAyuda,dudas:vDudas}[S.view]();","ayuda:vAyuda,dudas:vDudas,dguard:vDGuard,drep:vDRep,doro:vDOro,dmis:vDMis,dtools:vDTools,dchal:vDChal,dpages:vDPages}[S.view]();")
rep('const VNAME={hoy:"Hoy",','const VNAME={dmis:"tu misión",dtools:"la mochila",dpages:"el cuaderno",dguard:"la prueba",drep:"el repaso",doro:"el encuentro",dchal:"el desafío",hoy:"Hoy",')
# --- sala de foco
rep('S.diario.push({id:"ATE-05",d:day,t:Date.now(),v:vals});','S.diario.push({id:"ATE-05",d:day,t:Date.now(),v:vals});try{dFocoHook(F)}catch(e){}')
open(B,"w").write(s);print("hooks ok")
