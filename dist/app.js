import {Companion, POSES} from './behavior.js';
const $=id=>document.getElementById(id);
const companion=new Companion();
const STORAGE='siempre-cerquita:momentos:v1';
const message=$('message'),dog=$('dog'),form=$('chatForm');
let current=null, saved=[], sequence=0, pending=false, voice=false, recognition=null, listening=false, voiceHadError=false;
fetch('personal.json').then(r=>r.ok?r.json():{}).then(p=>{const text=v=>typeof v==='string'?v.trim().slice(0,40):'',list=v=>Array.isArray(v)?v.map(text).filter(Boolean).slice(0,20):[];companion.profile={duena:text(p.duena),apodos:list(p.apodos),recuerdos:list(p.recuerdos)};}).catch(()=>{});
const WELCOMED='siempre-cerquita:bienvenida:v1';
const isMoment=x=>x&&typeof x.id==='string'&&typeof x.message==='string'&&typeof x.line==='string'&&typeof x.gesture==='string'&&!Number.isNaN(Date.parse(x.date));
function persist(list){try{localStorage.setItem(STORAGE,JSON.stringify(list));return true;}catch{return false;}}
try{const data=JSON.parse(localStorage.getItem(STORAGE)||'[]');if(Array.isArray(data))saved=data.filter(isMoment).slice(0,100);}catch{$('feedback').textContent='El guardado no está disponible. Puedes seguir usando el rincón.';}
function syncComposer(){ $('charCount').textContent=`${message.value.length} / 500`;$('sendButton').disabled=pending||listening||!message.value.trim(); }
const FRAMES={idle:'30 0 490 724',cuddle:'550 0 480 724',play:'1030 0 545 724',sleep:'1575 0 597 724'};
function pose(result){dog.dataset.pose=result.pose;const frame=FRAMES[result.pose];$('dogArt').setAttribute('viewBox',frame);const [x,y,width,height]=frame.split(' ');for(const [key,value]of Object.entries({x,y,width,height}))$('frameRect').setAttribute(key,value);$('mood').textContent=POSES[result.pose];$('gesture').textContent=result.gesture;$('playActivity').hidden=result.pose!=='play';$('throwZone').hidden=result.pose!=='play';$('sleepActivity').hidden=result.pose!=='sleep';}
function feedback(text){$('feedback').textContent=text;}
function showHearts(){const wrap=$('hearts');wrap.replaceChildren();for(let i=0;i<3;i++){const svg=document.createElementNS('http://www.w3.org/2000/svg','svg'),use=document.createElementNS('http://www.w3.org/2000/svg','use');use.setAttribute('href','#heart');svg.append(use);wrap.append(svg);}setTimeout(()=>wrap.replaceChildren(),1800);}
function read(text){if(!voice||!text||!('speechSynthesis' in window))return;speechSynthesis.cancel();const speech=new SpeechSynthesisUtterance(text);speech.lang='es-ES';speech.rate=.88;speech.pitch=1.08;const voices=speechSynthesis.getVoices();const spanish=voices.find(v=>v.lang.startsWith('es'));if(spanish)speech.voice=spanish;speechSynthesis.speak(speech);}
async function react(text,{action,forceText=false}={}){
  if(listening){feedback('Termina el dictado antes de iniciar otro gesto.');return;}
  const result=companion.respond(text,{action,forceText});if(!result)return;
  const ticket=++sequence;pending=true;syncComposer();current=null;$('saveMoment').disabled=true;
  $('throwBall').disabled=false;$('throwZone').disabled=false;document.querySelectorAll('[data-aim]').forEach(b=>b.disabled=false);$('movingBall').hidden=true;document.querySelector('.scene').classList.remove('fetching');
  if('speechSynthesis'in window)speechSynthesis.cancel();
  dog.classList.add('listening');$('reply').classList.remove('silent');$('reply').classList.add('typing');$('replyText').textContent='Te escucha…';$('gesture').textContent='Inclina sus orejitas hacia ti.';feedback('');
  document.querySelectorAll('[data-action]').forEach(button=>{const chosen=button.dataset.action===action;button.classList.toggle('selected',chosen);button.setAttribute('aria-pressed',String(chosen));});
  if(!action){$('lastMessageText').textContent=text;$('lastMessage').hidden=false;}
  await new Promise(resolve=>setTimeout(resolve,550));if(ticket!==sequence)return;
  dog.classList.remove('listening');$('reply').classList.remove('typing');pose(result);$('replyText').textContent=result.line;$('reply').classList.toggle('silent',result.silent);
  if(action==='pet'||result.pose==='cuddle')showHearts();
  const labels={pet:'Una caricia',play:'Un ratito de juego',rest:'Una siestita',quiet:'Solo acompañarnos',fetch:'Un lanzamiento de pelota',wake:'Despertarlo suavecito'};
  current={id:crypto.randomUUID?crypto.randomUUID():`${Date.now()}-${Math.random()}`,message:action?labels[action]:text,line:result.line,gesture:result.gesture,date:new Date().toISOString(),intent:result.intent};
  $('saveMoment').disabled=false;pending=false;syncComposer();read(result.line);
}
message.addEventListener('input',()=>{companion.lastInteraction=Date.now();syncComposer();});
message.addEventListener('keydown',event=>{if(event.key==='Enter'&&!event.shiftKey&&!event.isComposing){event.preventDefault();if(!$('sendButton').disabled)form.requestSubmit();}});
form.addEventListener('submit',event=>{event.preventDefault();const text=message.value.trim();if(!text||pending||listening)return;message.value='';syncComposer();react(text);});
dog.addEventListener('click',()=>react('',{action:'pet'}));
$('wakeButton').addEventListener('click',()=>react('',{action:'wake',forceText:true}));
async function throwBall(direction='random',point){
 if(pending||listening)return;
 const scene=document.querySelector('.scene'),rect=scene.getBoundingClientRect(),dogRect=document.querySelector('.dog-position').getBoundingClientRect();
 const startX=dogRect.left-rect.left+dogRect.width*.5,startY=dogRect.bottom-rect.top-28;
 const positions={left:.15,center:.5,right:.85};
 const targetX=Math.max(24,Math.min(rect.width-24,point?point.x:rect.width*(positions[direction]??(.12+Math.random()*.76))));
 const targetY=Math.max(90,Math.min(rect.height-65,point?point.y:startY-(direction==='center'?70:10)));
 const dx=targetX-startX,dy=targetY-startY;
 scene.style.setProperty('--ball-x',`${startX}px`);scene.style.setProperty('--ball-y',`${startY}px`);scene.style.setProperty('--throw-x',`${dx}px`);scene.style.setProperty('--throw-y',`${dy}px`);scene.style.setProperty('--arc-y',`${Math.min(-45,dy-90)}px`);scene.style.setProperty('--arc-x',`${dx*.55}px`);scene.style.setProperty('--dog-chase-x',`${dx*.8}px`);scene.style.setProperty('--dog-chase-y',`${Math.min(0,dy*.25)}px`);
 const ticket=++sequence;pending=true;syncComposer();current=null;$('saveMoment').disabled=true;$('throwBall').disabled=true;dog.classList.remove('listening');$('reply').classList.remove('silent','typing');$('replyText').textContent='¡Voy por ella!';$('gesture').textContent='Va por la pelota… y vuelve contigo.';
 $('throwZone').disabled=true;document.querySelectorAll('[data-aim]').forEach(b=>b.disabled=true);
 $('movingBall').hidden=false;document.querySelector('.scene').classList.add('fetching');
 await new Promise(resolve=>setTimeout(resolve,1900));if(ticket!==sequence)return;
 document.querySelector('.scene').classList.remove('fetching');$('movingBall').hidden=true;pending=false;$('throwBall').disabled=false;$('throwZone').disabled=false;document.querySelectorAll('[data-aim]').forEach(b=>b.disabled=false);syncComposer();await react('',{action:'fetch',forceText:true});
}
$('throwBall').addEventListener('click',()=>throwBall());
document.querySelectorAll('[data-aim]').forEach(button=>button.addEventListener('click',()=>throwBall(button.dataset.aim)));
$('throwZone').addEventListener('click',event=>{if(event.detail===0){throwBall('center');return;}const rect=event.currentTarget.getBoundingClientRect();throwBall('point',{x:event.clientX-rect.left,y:event.clientY-rect.top});});
document.querySelectorAll('[data-action]').forEach(button=>{button.setAttribute('aria-pressed','false');button.addEventListener('click',()=>react('',{action:button.dataset.action}));});
$('quietButton').addEventListener('click',()=>{showHome();react('',{action:'quiet'});});
function updateCount(){$('savedCount').textContent=String(saved.length);$('savedCount').hidden=!saved.length;}
$('saveMoment').addEventListener('click',()=>{
 if(!current||saved.some(x=>x.id===current.id))return;
 if(saved.length>=100){feedback('Ya tienes 100 momentos guardados. Descárgalos para conservar una copia.');return;}
 const next=[...saved,{...current}];
 if(persist(next)){saved=next;updateCount();$('saveMoment').disabled=true;feedback('Momento guardado con cariño en este navegador.');navigator.storage?.persist?.().catch(()=>{});}
 else feedback('No se pudo guardar. Revisa el espacio o los permisos del navegador.');
});
function showHome(){$('rincon').hidden=false;$('moments').hidden=true;$('homeTab').classList.add('active');$('homeTab').setAttribute('aria-current','page');$('momentsTab').classList.remove('active');$('momentsTab').removeAttribute('aria-current');}
function showMoments(){
 $('rincon').hidden=true;$('moments').hidden=false;$('homeTab').classList.remove('active');$('homeTab').removeAttribute('aria-current');$('momentsTab').classList.add('active');$('momentsTab').setAttribute('aria-current','page');
 const list=$('momentsList');list.replaceChildren();$('momentsNote').textContent='';$('exportMoments').hidden=!saved.length;
 if(!saved.length){const empty=document.createElement('div');empty.className='empty';empty.innerHTML='<svg class="paw" aria-hidden="true"><use href="#paw"/></svg><h2>Los pequeños momentos se quedan.</h2><p>Después de escribirle o acariciarlo, toca «Guardar este momento» y aparecerá aquí.</p>';list.append(empty);return;}
 for(const item of [...saved].reverse()){
  const article=document.createElement('article');article.className='moment';const time=document.createElement('time');time.dateTime=item.date;time.textContent=new Intl.DateTimeFormat('es-CO',{dateStyle:'long',timeStyle:'short'}).format(new Date(item.date));
  const text=document.createElement('p');text.textContent=item.message;const response=document.createElement('blockquote');response.textContent=item.line||'Un gesto sin palabras.';const gesture=document.createElement('p');gesture.className='gesture';gesture.textContent=item.gesture;
  const remove=document.createElement('button');remove.type='button';remove.className='text-button';remove.textContent='Quitar este momento';remove.addEventListener('click',()=>{if(!confirm('¿Quitar este momento? Si no tienes una copia descargada, no se podrá recuperar.'))return;const next=saved.filter(x=>x.id!==item.id);if(persist(next)){saved=next;updateCount();showMoments();}else feedback('No se pudo quitar. Revisa los permisos del navegador.');});
  article.append(time,text,response,gesture,remove);list.append(article);
 }
}
$('homeTab').addEventListener('click',showHome);$('momentsTab').addEventListener('click',showMoments);$('backHome').addEventListener('click',()=>{showHome();$('homeTab').focus();});
document.querySelector('.brand').addEventListener('click',showHome);
$('exportMoments').addEventListener('click',()=>{const blob=new Blob([JSON.stringify({version:1,exportedAt:new Date().toISOString(),moments:saved},null,2)],{type:'application/json'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='nuestros-momentitos.json';a.hidden=true;document.body.append(a);a.click();setTimeout(()=>{a.remove();URL.revokeObjectURL(url);},4000);$('momentsNote').textContent='Se creó la copia «nuestros-momentitos.json». Si no la ves, revisa la carpeta de descargas de tu navegador.';});
$('importMoments').addEventListener('click',()=>$('importFile').click());
$('importFile').addEventListener('change',async event=>{
 const file=event.target.files[0];event.target.value='';if(!file)return;
 const note=$('momentsNote');
 try{
  if(file.size>2e6)throw new Error('size');
  const data=JSON.parse(await file.text());const incoming=(Array.isArray(data)?data:data?.moments);
  if(!Array.isArray(incoming))throw new Error('format');
  const known=new Set(saved.map(x=>x.id));const fresh=incoming.filter(isMoment).filter(x=>!known.has(x.id)).map(x=>({id:x.id,message:x.message.slice(0,500),line:x.line.slice(0,500),gesture:x.gesture.slice(0,300),date:x.date,intent:typeof x.intent==='string'?x.intent:''}));
  const room=100-saved.length,added=fresh.slice(0,Math.max(0,room));
  if(!added.length){note.textContent=fresh.length?'Ya tienes 100 momentos guardados; no hay espacio para más.':'Esa copia no trae momentos nuevos.';return;}
  const next=[...saved,...added].sort((a,b)=>Date.parse(a.date)-Date.parse(b.date));
  if(!persist(next)){note.textContent='No se pudo guardar. Revisa el espacio o los permisos del navegador.';return;}
  saved=next;updateCount();showMoments();
  note.textContent=`Se recuperaron ${added.length} momento${added.length===1?'':'s'}${fresh.length>added.length?'; el resto no cabía en el límite de 100':''}.`;
 }catch{note.textContent='No se pudo leer ese archivo. Elige una copia descargada desde «Descargar mis momentos».';}
});
const about=$('about');$('aboutButton').addEventListener('click',()=>about.showModal());for(const id of ['closeAbout','startButton'])$(id).addEventListener('click',()=>about.close());about.addEventListener('click',event=>{if(event.target===about){const rect=about.getBoundingClientRect();if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)about.close();}});
$('voiceButton').addEventListener('click',()=>{if(!('speechSynthesis'in window)){feedback('Este navegador no puede leer las respuestas en voz alta.');return;}voice=!voice;$('voiceButton').setAttribute('aria-pressed',String(voice));$('voiceButton').querySelector('span').textContent=`Leer respuestas: ${voice?'sí':'no'}`;if(voice&&current)read(current.line);else speechSynthesis.cancel();});
function resetMic(){listening=false;dog.classList.remove('listening');$('micButton').setAttribute('aria-pressed','false');$('micLabel').textContent='Hablarle';syncComposer();}
$('micButton').addEventListener('click',()=>{
 if(pending){feedback('Espera un momentito a que termine su reacción.');return;}
 if(listening){recognition?.stop();return;}
 const Recognition=window.SpeechRecognition||window.webkitSpeechRecognition;
 if(!Recognition){feedback('El dictado no está disponible en este navegador. Puedes escribirle o abrir la página en Chrome.');return;}
 recognition=new Recognition();recognition.lang='es-CO';recognition.continuous=false;recognition.interimResults=false;
 const previous=message.value.trim();voiceHadError=false;
 recognition.onstart=()=>{listening=true;dog.classList.add('listening');$('micButton').setAttribute('aria-pressed','true');$('micLabel').textContent='Detener';feedback('Escuchando… Al terminar, revisa el texto y toca Enviar.');syncComposer();};
 recognition.onresult=event=>{const spoken=Array.from(event.results).map(r=>r[0].transcript).join(' ');const combined=[previous,spoken].filter(Boolean).join(' ');message.value=combined.slice(0,500);feedback(combined.length>500?'Se alcanzó el límite de 500 caracteres. Revisa el texto antes de enviarlo.':'Revisa lo que escuchó y toca Enviar cuando quieras.');syncComposer();};
 recognition.onerror=event=>{voiceHadError=true;const errors={'not-allowed':'No se autorizó el micrófono. Puedes permitirlo en el navegador o escribirle.','audio-capture':'No se encontró un micrófono disponible. Puedes escribirle.','no-speech':'No se escucharon palabras. Puedes intentarlo otra vez.','network':'El servicio de dictado no está disponible. Puedes escribirle.'};feedback(errors[event.error]||'No se pudo completar el dictado. Puedes escribirle.');resetMic();};
 recognition.onend=()=>{resetMic();if(!voiceHadError&&!message.value.trim())feedback('No quedó texto para enviar. Puedes intentarlo de nuevo o escribirle.');};
 try{recognition.start();}catch{feedback('No se pudo iniciar el micrófono. Puedes escribirle.');resetMic();}
});
document.addEventListener('visibilitychange',()=>{if(document.hidden){recognition?.abort();if('speechSynthesis'in window)speechSynthesis.cancel();}});
setInterval(()=>{if(document.hidden||pending||listening||message.value.trim()||$('rincon').hidden)return;const rest=companion.idle();if(rest){pose(rest);$('reply').classList.add('silent');}},15000);
updateCount();syncComposer();
try{if(!localStorage.getItem(WELCOMED)){localStorage.setItem(WELCOMED,'1');about.showModal();}}catch{}
if('serviceWorker'in navigator&&location.protocol!=='file:')addEventListener('load',()=>navigator.serviceWorker.register('sw.js').catch(()=>{}));
