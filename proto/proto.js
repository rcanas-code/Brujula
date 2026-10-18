/* Brújula · PROTOTIPO de armonización (solo para la comparativa; no toca datos ni mecánicas) */
(function(){
PXI.pen=["...KKKKKK...","..KOOOOOOK..",".KOLLLLLLOK.",".KOLWLLLLOK.",".KOLWLLLLOK.",".KOLLLLLLOK.",".KOLLLLLLOK.","..KOOOOOOK..","...KKOOKK...",".....KK.....","....KOOK....","...KKKKKK..."];
PXI.aut=["............","...KKKKKK...","..KPPKPPPK..",".KPPPKPPPPK.","KPPKPPPKPPPK","KPPPKPPPPKPK","KPKPPPKPPPPK","KPPPPKPPPKPK",".KPPKPPPPPK.","..KKPPPKKK..","....KPPK....","....KKKK...."];
const AREAI={SUE:"sue",MOV:"mov",ALI:"ali",EMO:"emo",HAB:"hab",ATE:"ate",EST:"est",EDU:"edu",DIN:"din",VAL:"val",PEN:"pen",AUT:"aut"};
const aIco=(k,px)=>AREAI[k]?pxIco(AREAI[k],px||2):`<span class="bzemo">${AICON[k]}</span>`;
const css=`
:root{--bz-navy:#1E2B38;--bz-deep:#0F1A24;--bz-coral:#FF6B3D;--bz-gold:#FFE27A;--bz-purple:#9B7BFF;--bz-green:#5CC98A;--bz-cream:#F4F1E8;--bz-b:2px solid var(--px-ink);--bz-sh:3px 3px 0 var(--px-sh,#000);--bz-pad:12px}
.pxi{image-rendering:pixelated;display:block;flex:none}
/* Botones: tres estilos */
.bz-btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;min-height:44px;padding:8px 16px;font-family:var(--pxf);font-size:.8rem;font-weight:700;letter-spacing:.02em;background:var(--bz-coral);color:var(--bz-navy);border:3px solid var(--bz-deep);box-shadow:0 4px 0 var(--bz-deep);cursor:pointer}
.bz-btn:active{transform:translateY(3px);box-shadow:0 1px 0 var(--bz-deep)}
.bz-btn2{display:inline-flex;align-items:center;justify-content:center;gap:8px;min-height:44px;padding:8px 14px;font-family:var(--pxf);font-size:.74rem;font-weight:700;background:var(--bz-navy);color:var(--bz-cream);border:2px solid var(--bz-cream);box-shadow:0 3px 0 var(--bz-deep);cursor:pointer}
.bz-btn3{display:inline-flex;align-items:center;justify-content:center;gap:8px;min-height:44px;padding:8px 16px;font-family:var(--pxf);font-size:.8rem;font-weight:700;background:var(--bz-navy);color:var(--bz-gold);border:3px solid var(--bz-gold);box-shadow:0 4px 0 #8A6508,inset 0 0 0 2px #5A3FA8;cursor:pointer}
/* Paneles */
.bz-panel{background:var(--surface);color:var(--ink);border:var(--bz-b);box-shadow:var(--bz-sh);padding:var(--bz-pad)}
.bz-dlg{position:relative;background:var(--bz-deep);color:var(--bz-cream);border:3px solid var(--bz-cream);box-shadow:0 0 0 3px var(--bz-deep),4px 4px 0 3px rgba(0,0,0,.25);padding:16px 12px 10px}
.bz-dlg .advwho{top:-13px}
/* Plegables: una sola familia */
details.fold{border-left:6px solid var(--fc,var(--line));min-height:44px}
details.fold>summary{display:grid;grid-template-columns:26px 1fr;column-gap:10px;row-gap:2px;align-items:center;min-height:44px;padding-right:48px}
details.fold>summary .fi{font-size:1.15rem;margin:0;flex:none;width:26px;text-align:center}
details.fold>summary::after{content:"";right:0;width:32px;height:32px;margin-top:-16px;border-radius:0!important;border:2px solid var(--line)!important;background:var(--bg) url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8' shape-rendering='crispEdges'%3E%3Cpath fill='%23F4F1E8' d='M1 2h6v1H1zM2 3h4v1H2zM3 4h2v1H3z'/%3E%3C/svg%3E") center/14px no-repeat;color:transparent;transition:transform .15s}
:root[data-theme="light"] details.fold>summary::after{background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8' shape-rendering='crispEdges'%3E%3Cpath fill='%231E2B38' d='M1 2h6v1H1zM2 3h4v1H2zM3 4h2v1H3z'/%3E%3C/svg%3E")}
details.fold[open]>summary::after{border-color:var(--bz-gold)!important;transform:rotate(180deg)}
details.fold>summary>span.muted{grid-column:2;margin:0!important}
section:has(.bzlibh)>div>h1{font-size:1rem;line-height:1.3}
/* ---------- BIBLIOTECA ---------- */
.bzlibh{display:flex;gap:12px;align-items:stretch;margin-top:14px}
.bzdesk{flex:none;width:86px;display:flex;align-items:flex-end;justify-content:center;background:linear-gradient(#3B2416,#4A2E1E);border:3px solid #2B1A10;border-bottom:8px solid #8A5A34;padding-top:6px;overflow:hidden;position:relative}
.bzdesk::before{content:"";position:absolute;left:0;right:0;top:0;height:10px;background:repeating-linear-gradient(90deg,#C94A22 0 6px,#2B6FA8 6px 11px,#2E8B57 11px 15px,#C98A14 15px 20px);opacity:.9}
.bzdesk svg{image-rendering:pixelated}
.bzlibh .bz-dlg{flex:1;min-width:0;margin:0;padding:16px 12px 10px}
.bzlibh .bz-dlg p{margin:0;font-size:.95rem;line-height:1.4;font-weight:700}
.bzask{margin-top:8px;background:none;border:0;padding:4px 0;min-height:32px;color:var(--bz-gold);font:inherit;font-size:.85rem;font-weight:800;text-decoration:underline;cursor:pointer;text-align:left}
.bzlibh .dlgopts{margin-top:8px}
.bzsearch{margin-top:12px;width:100%;box-sizing:border-box;min-height:48px;font-size:1rem!important}
.bzgh{display:flex;align-items:center;gap:8px;margin:18px 0 8px;font-family:var(--pxf);font-size:.8rem;letter-spacing:.06em;color:var(--muted);text-transform:uppercase}
.bzgh::after{content:"";flex:1;height:4px;background:#8A5A34;box-shadow:0 2px 0 #5C3A22}
.bztomos{display:grid;grid-template-columns:1fr 1fr;gap:8px}
.bztomo{display:flex;align-items:stretch;gap:0;min-height:62px;padding:0;text-align:left;background:var(--surface);color:var(--ink);border:var(--bz-b);box-shadow:var(--bz-sh);font:inherit;cursor:pointer;overflow:hidden}
.bztomo:active{transform:translate(2px,2px);box-shadow:1px 1px 0 var(--px-sh)}
.bzspine{flex:none;width:38px;display:grid;place-items:center;background:linear-gradient(90deg,hsl(var(--h) 55% 30%),hsl(var(--h) 60% 46%) 40%,hsl(var(--h) 55% 34%));border-right:2px solid var(--px-ink);position:relative}
.bzspine::before,.bzspine::after{content:"";position:absolute;left:0;right:0;height:3px;background:#E8C15A;opacity:.85}
.bzspine::before{top:6px}.bzspine::after{bottom:6px}
.bzspine .bzemo{font-size:1.2rem}
.bztt{flex:1;min-width:0;display:flex;flex-direction:column;justify-content:center;gap:3px;padding:6px 8px}
.bztt b{font-size:.9rem;line-height:1.15;font-weight:800}
.bztt small{font-size:.74rem;color:var(--muted);font-weight:700}
.bzbar{display:block;height:4px;background:var(--line)}.bzbar i{display:block;height:100%;background:var(--bz-green)}
.bztomo.all .bztt small{color:var(--good)}
.bztomo.sp .bzspine{background:linear-gradient(90deg,#3B1F14,#6B3A22 40%,#4A2818)}
/* Tema (área): cabecera compacta */
.libareah{padding:10px 12px!important;gap:12px!important;border-width:2px!important;box-shadow:var(--bz-sh)!important}
.libareah h1{font-size:1.15rem!important}
.libareah .spmed.big{transform:scale(.8)}
.bzsay{display:flex;gap:10px;align-items:center;padding:8px 10px!important;margin-top:6px}
.bzsay svg{flex:none;image-rendering:pixelated}
.bzsay p{margin:0;font-size:.86rem;line-height:1.4;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
.bzsay.open p{display:block}
.view .dogban{padding:8px 12px!important;gap:10px!important}.view .dogban .dbi{font-size:1.3rem}.view .dogban small{display:none}
.view .cards .cc{padding:10px 12px!important;gap:4px!important}
.view .cards .cc .top2 .chip{display:none}
.view .cards .cc .top2{justify-content:flex-end;margin-bottom:-26px}
.view .cards .cc .cch{padding-right:84px}
.view .cards .cc .cic{width:34px;height:34px;font-size:1rem}
.view .cards .cc>p.muted{font-size:.85rem;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;margin:0}
.view .cards .cc h3{font-size:.92rem}
/* ---------- LECTURA ---------- */
.cxhero{min-height:0!important;padding:12px 16px 12px!important;gap:10px!important;flex-direction:row!important;align-items:center!important;border-bottom-width:5px!important}
.cxhero .cxnpc svg{width:34px!important;height:auto!important}
.cxhero h2{font-size:1.02rem!important}
.cxhero .cxsky{display:none}
.cxidea{margin-top:14px!important;padding:16px 12px 10px!important}
.cxidea .advtxt{font-size:.98rem!important;line-height:1.45}
.cxtab .cxti svg{display:block}
.cxcard{border-width:2px!important;box-shadow:var(--bz-sh)!important;padding:12px!important}
.cxcard .cxci{flex:none;width:32px;height:32px;display:grid;place-items:center;background:var(--bz-navy);border:2px solid var(--px-ink)}
.cxcard.quest{background:var(--surface)!important;border-left:6px solid var(--bz-coral)!important;color:var(--ink)}
.cxcard.quest .cxbig{color:var(--ink)}
.cxcard h4{font-family:var(--pxf);font-size:.72rem;letter-spacing:.04em;text-transform:uppercase;color:var(--muted)}
.scinvite{border-width:2px!important;box-shadow:var(--bz-sh);background:var(--surface)!important;border-left:6px solid var(--bz-coral)!important;border-color:var(--px-ink)!important}
.cxnext{min-height:44px}
/* ---------- AGUJA: diálogo RPG ---------- */
#guiafl.bzon{left:12px;right:12px;max-width:none;align-items:stretch}
.guiapop.bzag{overflow:visible;outline:0;max-height:none;margin-top:16px}
.bzag{position:relative;background:var(--bz-deep);color:var(--bz-cream);border:3px solid var(--bz-cream);box-shadow:0 0 0 3px var(--bz-deep),4px 4px 0 3px rgba(0,0,0,.35);padding:16px 12px 10px;display:flex;flex-direction:column;gap:8px;animation:guiain .15s ease-out}
.bzag .advwho{top:-14px;left:12px;background:var(--bz-gold);color:var(--bz-navy)}
.bzag .bzx{position:absolute;top:-16px;right:8px;width:32px;height:32px;display:grid;place-items:center;background:var(--bz-deep);color:var(--bz-cream);border:2px solid var(--bz-cream);font:700 1rem/1 var(--pxf);cursor:pointer}
.bzagr{display:flex;gap:10px;align-items:flex-start}
.bzagr svg{flex:none;image-rendering:pixelated;margin-top:2px}
.bzagr p{margin:0;font-size:.92rem;line-height:1.4}
.bzaga{display:flex;gap:8px;align-items:center;flex-wrap:wrap}
.bzaga .bz-btn,.bzaga .bz-btn2{min-height:40px;font-size:.7rem;padding:6px 12px}
.bzaga .bzhide{margin-left:auto;background:none;border:0;color:#9DB0BF;font:inherit;font-size:.78rem;font-weight:700;text-decoration:underline;min-height:40px;cursor:pointer}
/* ---------- YO ---------- */
.yob{min-height:40px;background:var(--bz-navy)!important;border:2px solid var(--bz-cream)!important;box-shadow:0 3px 0 var(--bz-deep);display:inline-flex;align-items:center;gap:6px}
.yostrip span{display:flex;align-items:center;justify-content:center;gap:5px;border:var(--bz-b)!important;box-shadow:2px 2px 0 var(--px-sh)}
.yostrip svg{width:16px;height:16px}
.yoq{border:var(--bz-b)!important;border-top:6px solid var(--qc)!important;box-shadow:var(--bz-sh);min-height:84px!important}
.yoqi svg{width:28px;height:28px}
.pjevo .pjmini{border:2px solid var(--px-ink);border-bottom-width:4px;position:relative;width:100%;box-sizing:border-box}
.pjevo .bzdone .pjmini{border-bottom-color:var(--bz-green)}
.pjevo .bzdone .pjmini::after{content:"✓";position:absolute;top:-8px;right:-6px;width:16px;height:16px;display:grid;place-items:center;font:700 .6rem/1 var(--body);background:var(--bz-green);color:var(--bz-navy);border:2px solid var(--px-ink)}
.pjevo .bznow .pjmini{outline:0!important;border-color:var(--bz-coral);border-bottom-color:var(--bz-coral);box-shadow:0 0 0 2px var(--bz-coral)}
.pjevo .bznext .pjmini{border-style:dashed;border-bottom-color:var(--line);opacity:.75}
.pjevo .bznext .pjmini svg{filter:brightness(0) invert(.25)}
.pjevo .bznext .pjmini::after{content:"";position:absolute;inset:0;margin:auto;width:14px;height:14px;background:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 7 7' shape-rendering='crispEdges'%3E%3Cpath fill='%239DB0BF' d='M2 0h3v1H2zM1 1h1v2H1zM5 1h1v2H5zM0 3h7v4H0z'/%3E%3Cpath fill='%231E2B38' d='M3 4h1v2H3z'/%3E%3C/svg%3E") center/contain no-repeat}
.pjevo .bztag{font-family:var(--pxf);font-size:.5rem;padding:1px 4px;margin-top:1px}
.pjevo .bznow .bztag{background:var(--bz-coral);color:var(--bz-navy)}
.pjevo .bzdone .bztag{color:var(--bz-green)}
.pjevo .bznext .bztag{color:var(--muted)}
.pjevo .bznext .pxsm{color:var(--muted)}
`;
const st=document.createElement("style");st.id="bzproto";st.textContent=css;document.body.appendChild(st);

/* ---- Biblioteca: portada compacta ---- */
const read=i=>{const cs=C.filter(c=>c.a===i);return [cs.filter(c=>(S.g.ok||{})[c.id]||(S.g.dom||{})[c.id]).length,cs.length]};
const tomo=k=>{const i=AK[k];if(i==null)return "";const a=AREAS[i],[rd,n]=read(i);return `<button class="bztomo${rd===n&&n?" all":""}" style="--h:${a.h}" data-area="${i}" aria-label="${esc(a.n)}: ${rd} de ${n} lecturas"><span class="bzspine">${aIco(k,2)}</span><span class="bztt"><b>${esc(a.n)}</b><small>${rd}/${n} lecturas</small><span class="bzbar"><i style="width:${n?Math.round(rd/n*100):0}%"></i></span></span></button>`};
window.libHome=function(){
  const R=S.libR;
  const bubble=R?libRecBox():`<p>¡Bienvenido, viajero! ¿Qué quieres descubrir hoy?</p><button class="bzask" data-act="lib-rec">✨ Pregúntale a Don Fermín</button>`;
  return `<div class="bzlibh"><div class="bzdesk">${libSVG(2.1)}</div><div class="bz-dlg"><span class="advwho">Don Fermín</span>${bubble}</div></div>
  <input id="exq" class="search bzsearch" type="search" placeholder="🔎 Busca algo que quieras aprender…" value="${esc(S.exQ)}" aria-label="Buscar en la biblioteca">
  ${LIBSH.map(([t,ks])=>`<h2 class="bzgh">${t}</h2><div class="bztomos">${ks.split(" ").map(tomo).join("")}</div>`).join("")}
  <h2 class="bzgh">Tomos especiales</h2><div class="bztomos">${[["nombre","🏷️","Ponle nombre","Lo que te pasa"],["sesgo","🧩","Trucos de la mente","Sesgos"],["mitos","⚠️","Mitos","Lo que es falso"]].map(([k,ic,t,d])=>`<button class="bztomo sp" data-lib="${k}"><span class="bzspine"><span class="bzemo">${ic}</span></span><span class="bztt"><b>${t}</b><small>${d}</small></span></button>`).join("")}</div>`};
/* ---- Fermín compacto en las páginas de tema ---- */
window.libSay=function(t){return `<div class="bz-dlg bzsay" onclick="this.classList.toggle('open')">${libSVG(1.2)}<p>${esc(t)}</p></div>`};
/* ---- Iconos pixel en la lectura ---- */
const TI={u:"entender",p:"practicar",m:"masalla"};
const fixDlg=()=>{const d=document.getElementById("dlg");if(!d||!d.open)return;
  d.querySelectorAll(".cxtab").forEach(b=>{const s=b.querySelector(".cxti");if(s&&!s.dataset.bz){s.dataset.bz=1;s.innerHTML=pxIco(TI[b.dataset.cxt],1.5)}});
  d.querySelectorAll(".cxcard .cxci").forEach(s=>{if(s.dataset.bz)return;s.dataset.bz=1;const t=s.textContent.trim();const k=t==="💬"?"caso":t==="🔁"?"plan":null;if(k)s.innerHTML=pxIco(k,1.75)})};
new MutationObserver(fixDlg).observe(document.getElementById("dlg"),{childList:true,subtree:true,attributes:true,attributeFilter:["open"]});
/* ---- Aguja: diálogo RPG compacto abajo ---- */
const _gf=guiaFloat;
window.guiaFloat=function(){const o=_gf.apply(this,arguments);const gf=document.getElementById("guiafl");
  if(!S.guiaOpen||!S.g.guiaIntro||!o||o.indexOf("guiapop")<0){gf&&gf.classList.remove("bzon");SCR.style.paddingBottom="";return o}
  const L=guiaTips();if(!L.length)return o;const i=(S.guiaI||0)%L.length,[t,at,lb]=L[i];
  setTimeout(()=>{const g=document.getElementById("guiafl");if(!g)return;g.classList.add("bzon");SCR.style.paddingBottom=(g.offsetHeight+170)+"px"},0);
  return `<div class="guiapop bzag" role="dialog" aria-label="Consejo de Aguja"><span class="advwho">Aguja</span><button class="bzx" data-act="guia-close" aria-label="Cerrar">✕</button><div class="bzagr">${agSVG(2.4)}<p>${esc(t)}</p></div><div class="bzaga">${at?`<button class="bz-btn" data-act="guia-close" ${at}>${esc(lb)}</button>`:""}${L.length>1?`<button class="bz-btn2" data-act="guia-next">Otro (${i+1}/${L.length}) ▸</button>`:""}<button class="bzhide" data-act="guia-hide">Hoy no</button></div></div>`};
/* ---- Yo: iconos y estados de evolución ---- */
const fixYo=()=>{const v=document.querySelector(".view");if(!v)return;
  const st=v.querySelector(".yostrip");if(st&&!st.dataset.bz){st.dataset.bz=1;const ks=["racha","trofeo","mundo","libro"];[...st.children].forEach((s,j)=>{s.innerHTML=s.innerHTML.replace(/^[^<]+/,pxIco(ks[j],1.34))})}
  v.querySelectorAll(".yoq").forEach(q=>{const i=q.querySelector(".yoqi");if(!i||i.dataset.bz)return;i.dataset.bz=1;const b=q.querySelector("b");const k={"Mi colección":"trofeo","Mi hoja de personaje":"mundo","Configuración":"ajustes","Ajustes":"copia"}[b.textContent];if(k)i.innerHTML=pxIco(k,2.34);
    if(b.textContent==="Configuración"){b.textContent="Pantalla y sonido";q.lastElementChild.textContent="Letra, tamaño, colores, sonido"}
    if(b.textContent==="Ajustes"){b.textContent="Mi partida";q.lastElementChild.textContent="Clase, copia de seguridad, compartir"}});
  v.querySelectorAll(".yob").forEach(b=>{if(b.dataset.bz)return;b.dataset.bz=1;b.innerHTML=b.innerHTML.replace("🎮",pxIco("yo",1.17)).replace("✏️ ","")});
  const ev=v.querySelector(".pjevo");if(ev&&!ev.dataset.bz){ev.dataset.bz=1;const kids=[...ev.children];const cur=kids.findIndex(d=>d.querySelector(".pjmini.cur"));kids.forEach((d,j)=>{const c=j<cur?"bzdone":j===cur?"bznow":"bznext";d.classList.add(c);d.insertAdjacentHTML("beforeend",`<span class="bztag">${j<cur?"Hecho":j===cur?"Ahora":"Próximo"}</span>`)})}};
const _r=render;window.render=function(){const o=_r.apply(this,arguments);try{fixYo()}catch(e){console.error(e)}return o};
})();
