// Manual ejecutable: todas las frases son escritas, nunca generadas por una IA.
export const BANK = {
  fetch: {pose:'play',gesture:'Corre tras la pelota y vuelve a tu lado.',lines:['¡La traje! ¿Otra vez?','Pelota recuperada. Mimo pendiente.','¡Otra vuelta con la pelota!','La pelota volvió conmigo.','Mis patitas sí que corrieron.','¿Un lanzamiento más?','¡Lista para otra ronda!','Ahora me gané una caricia.']},
  wake: {pose:'idle',gesture:'Abre los ojitos y se estira despacito.',lines:['Ya abrí mis ojitos.','Un estiramiento y aquí estoy.','¿Un mimo para despertar?','Me desperezo contigo.','Buenos mimos, digo… buenos días.','Mis orejitas ya despertaron.','Aquí va mi primer bostezo.','Listo para otro ratito contigo.']},
  wellbeing: {pose:'idle',gesture:'Te mira con la cabecita inclinada.',lines:['Con ganas de un cariñito.','Entre una caricia y una siesta.','Con las patitas tranquilas.','Contento con este ratito de mimos.','Un poquito consentido, como ves.','Con energía para un juego pequeñito.']},
  presence: {pose:'idle',gesture:'Se sienta atento junto a ti.',lines:['Aquí, en mi rinconcito.','Acomodando mis patitas junto a ti.','Mirándote con mi carita curiosa.','Listo para una caricia o un juego.','Sentadito, prestando mis orejitas.','Acompañándote este ratito.']},
  greeting: {pose:'idle',gesture:'Levanta las orejitas y mueve la cola.',lines:['Hola, hola. ¿Un cariñito?','Qué bonito compartir este ratito.','Ya acomodé mis patitas.','Te recibo con la colita inquieta.','Me siento cerquita de ti.','¿Empezamos con una caricia?','Mi rinconcito tiene lugar para ti.','Hola. Pongo mi cabecita aquí.']},
  affection: {pose:'cuddle',gesture:'Cierra los ojitos y se deja consentir.',lines:['Otro poquito de cariño…','Me derrito con los mimos.','Mi pancita vota por más caricias.','Te dejo una patita suave.','Así, despacito.','Qué rico este ratito.','Me acomodo junto a ti.','Una cabecita para tu mano.','Me quedo aquí, cerquita.','Este mimo me ganó.']},
  missing: {pose:'cuddle',gesture:'Se acerca despacito y apoya su cabecita.',lines:['Una patita para este momento.','Podemos quedarnos aquí un ratito.','Te acompaño con mis ojitos cerrados.','Un mimo suave para ti.','No hace falta decir nada más.','Me acomodo cerquita.','Aquí hay espacio para tus recuerdos.','Una cabecita junto a tu mano.','Vamos a ir despacito.','Este ratito puede ser solo nuestro.']},
  sadness: {pose:'cuddle',gesture:'Se acomoda a tu lado, tranquilo.',lines:['Te acompaño un ratito.','No tienes que estar alegre aquí.','Una patita, sin prisa.','Podemos descansar de las palabras.','Me quedo quietecito junto a ti.','Un mimo para este día difícil.','Aquí puedes contar cómo te sientes.','Vamos suavecito.','Apoyo mi cabecita a tu lado.','Este momento no tiene que arreglar nada.']},
  happy: {pose:'play',gesture:'Da un saltito y se pone en posición de juego.',lines:['¡Eso merece mover la colita!','Mis patitas ya están celebrando.','¡Un saltito por esa alegría!','Me contagias las ganas de jugar.','¡Qué buena noticia!','Colita en modo celebración.','¡Hoy hay energía de pelota!','Doy una vueltita contigo.','¡Me apunto a ese festejo!','Te regalo mi mejor saltito.']},
  play: {pose:'play',gesture:'Baja las patitas delanteras, listo para jugar.',lines:['¿Tiras la pelota?','Mis patitas dicen: ¡vamos!','Yo pongo las ganas de jugar.','¡Una ronda más!','Tengo cara de travieso, ¿verdad?','Primero juego, después siesta.','¡A ver esa pelota!','Estoy listo para una travesura pequeña.','La colita ya dio permiso.','¿Jugamos un ratito?']},
  sleep: {pose:'sleep',gesture:'Bosteza y se hace una bolita en su camita.',lines:['Cinco minutitos más…','Mis patitas piden descanso.','La camita me está llamando.','Una siesta pequeñita.','Me hago bolita aquí.','Ojitos cerrados, pancita tranquila.','Hora de acomodar las orejitas.','Dejo la pelota para después.','Un bostezo y me acurruco.','Este rincón invita a descansar.']},
  tired: {pose:'sleep',gesture:'Se estira y se acomoda para descansar contigo.',lines:['¿Descansamos un poquito?','Hoy podemos ir más lento.','Un ratito sin hacer nada.','Yo pongo el bostezo.','Me acomodo aquí contigo.','Las patitas también hacen pausas.','No hace falta correr ahora.','Un descanso suavecito.']},
  food: {pose:'idle',gesture:'Levanta la cabeza con curiosidad y olfatea.',lines:['Esa palabra despertó mi naricita.','Mi hocico acaba de prestar atención.','¿Escuché algo de comida?','Ahora sí se me quitó el sueño.','Naricita curiosa, patitas quietas.','Mi pancita está muy interesada.','Eso suena a algo para olfatear.','Qué fácil distraer a este consentido.']},
  memory: {pose:'cuddle',gesture:'Inclina la cabecita y te escucha sin prisa.',lines:['Ese recuerdo tiene lugar aquí.','Te escucho con las orejitas atentas.','Puedes contarme un poquito más.','Me siento junto a ese recuerdo.','Guardemos este ratito con cariño.','Te acompaño mientras lo cuentas.','Un mimo para esa historia.','Las patitas se quedan quietas para escuchar.']},
  gratitude: {pose:'cuddle',gesture:'Cierra los ojos y acerca una patita.',lines:['Una patita con mucho cariño.','Recibo tus palabras con un mimo.','Qué bonito este ratito.','Me acomodo junto a ti.','Te dejo mi gesto más suave.','Un cariñito para acompañar ese gracias.','Cierro los ojitos un momento.','Aquí va una patita pequeña.']},
  goodbye: {pose:'sleep',gesture:'Se acomoda en su cama y descansa.',lines:['Que descanses bonito.','Ve a tu ritmo.','Hasta otro ratito de mimos.','Un último cariñito y a descansar.','Me hago bolita en la camita.','Te dejo una patita de despedida.','Qué suave estuvo este ratito.','Nos quedamos con este momento.']},
  anger: {pose:'cuddle',gesture:'Baja el ritmo y se sienta tranquilo a tu lado.',lines:['Voy a sentarme cerquita.','Podemos hacer una pausa.','Un mimo sin preguntas.','Te escucho, despacito.','No hace falta resolver todo ahora.','Mis patitas se quedan tranquilas.','Un ratito con menos ruido.','Me acomodo mientras lo cuentas.']},
  question: {pose:'idle',gesture:'Inclina la cabeza con curiosidad.',lines:['Mi respuesta viene en forma de patita.','Soy mejor dando mimos que consejos.','Te escucho con mi carita curiosa.','¿Lo acompañamos con una caricia?','No sé de todo, pero sé hacerme bolita.','Te presto mis orejitas.','A eso le pongo una cabecita inclinada.','Yo puedo acompañarte este ratito.']},
  neutral: {pose:'idle',gesture:'Te mira atento y mueve suavemente las orejitas.',lines:['Te escucho con mis orejitas.','Me siento cerquita mientras cuentas.','Un ratito para ti y mis patitas.','Aquí cabe lo que quieras contar.','Inclino la cabecita para escucharte.','Te acompaño desde mi camita.','Pongo mis patitas junto a ti.','Hoy podemos simplemente estar.','Me quedo atento a tus palabras.','Un mimo para acompañar tu día.','Aquí estoy, con mi carita curiosa.','Te regalo un movimiento de colita.']},
  quiet: {pose:'cuddle',gesture:'Se acurruca en silencio a tu lado.',lines:['Nos quedamos así un ratito.','Sin palabras también está bien.','Un momento tranquilo, juntos.','Me acomodo y bajo el ritmo.','Solo una patita cerquita.','Dejamos descansar las palabras.']},
  boundary: {pose:'idle',gesture:'Te mira con calma e inclina la cabecita.',lines:['Soy un homenaje hecho con cariño.','Mis gestos y frases son parte de este recuerdo.','Este rinconcito es una representación cariñosa.']}
};

export const normalize = text => String(text ?? '').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9¿?\s]/g,' ').replace(/\s+/g,' ').trim();
// Orden explícito: consuelo antes de juego; negaciones antes de palabras aisladas.
export function classify(text) {
  let t=normalize(text);
  if (!t || !/[a-z0-9]/.test(t)) return 'empty';
  if (/\b(eres real|estas vivo|sigues vivo|de verdad eres|eres una ia|eres un robot|eres mi perro de verdad)\b/.test(t)) return 'boundary';
  if (/\b(no quiero hablar|no quiero escribir|en silencio|solo acompaname|solo quiero estar|quedate en silencio)\b/.test(t)) return 'quiet';
  if (/\b(no te quiero|dejame en paz)\b/.test(t)) return 'quiet';
  t=t.replace(/\bno (estoy|me siento) (triste|sol[ao]|enojad[ao]|cansad[ao])\b/g,' ');
  t=t.replace(/\b(no te extrano|no tengo hambre|no quiero comer)\b/g,' ');
  if (/\b(te extrano|te echo de menos|me haces falta|te necesito|quisiera abrazarte|ojala estuvieras|no estas conmigo|desde que te fuiste|te perdi|tu partida)\b/.test(t)) return 'missing';
  if (/\b(no estoy (bien|feliz|content[ao])|no soy feliz|no me siento bien|no aprobe|me fue mal|perdi el examen|me siento mal|estoy mal|triste|tristeza|llor(o|ando|e)|me duele|soledad|sol[ao]|mal dia|dia dificil|deprimid[ao]|culpa|perdoname)\b/.test(t)) return 'sadness';
  if (/\b(enojad[ao]|rabia|furios[ao]|frustrad[ao]|molest[ao]|estresad[ao]|ansiedad|ansios[ao])\b/.test(t)) return 'anger';
  if (/\b(no quiero jugar|no tengo ganas de jugar|estoy cansad[ao]|agotad[ao]|mucho trabajo|dia largo|sin energia|no pude dormir)\b/.test(t)) return 'tired';
  if (/\b(buenas noches|hasta manana|me voy|adios|chao|hasta luego|nos vemos)\b/.test(t)) return 'goodbye';
  t=t.replace(/\b(no tengo sueno|no quiero dormir)\b/g,' ');
  if (/\b(tengo sueno|a dormir|duerme|dormir|siesta|dormilon|descansar)\b/.test(t)) return 'sleep';
  if (/\b(te acuerdas|recuerd[oa]|recorde|cuando eras|cuando jugabamos|nuestro parque|aquella vez|aquellos dias|tu foto|tus fotos|mirando fotos)\b/.test(t)) return 'memory';
  if (/\b(gracias|agradezco|agradecida|agradecido)\b/.test(t)) return 'gratitude';
  if (/\b(te amo|te quiero|caricia|caricias|mimo|mimos|abrazo|abrazos|consentido|bonito|hermoso|precioso|besito|besitos|pancita)\b/.test(t)) return 'affection';
  if (/\b(jugar|juguemos|juego|pelota|pelotita|paseo|pasear|corre|travieso)\b/.test(t)) return 'play';
  if (/\b(comida|comer|galleta|galletita|premio|croquetas|hambre|pollito)\b/.test(t)) return 'food';
  if (/\b(feliz|content[ao]|alegria|alegre|lo logre|aprobe|me fue bien|buena noticia|felicidad|celebrar|sonriendo)\b/.test(t)) return 'happy';
  if (/\b(como estas|como te sientes|todo bien)\b/.test(t)) return 'wellbeing';
  if (/\b(que haces|donde estas|estas ahi|que estas haciendo)\b/.test(t)) return 'presence';
  if (/\b(hola|buenos dias|buenas tardes|holi|hey|buen dia)\b/.test(t)) return 'greeting';
  if (/[¿?]/.test(t) || /^(como|que|por que|cuando|puedes|sabes)\b/.test(t)) return 'question';
  return 'neutral';
}

export const POSES={idle:'Atento a ti',cuddle:'En modo consentido',play:'Con ganas de jugar',sleep:'Un poquito dormilón'};
const ACTIONS={pet:'affection',play:'play',rest:'sleep',quiet:'quiet',fetch:'fetch',wake:'wake'};
export class Companion {
  constructor({random=Math.random,clock=()=>Date.now()}={}) {this.random=random;this.clock=clock;this.recent=[];this.energy=65;this.affection=35;this.pose='idle';this.lastInteraction=clock();this.lastIntent='greeting';this.turns=0;this.lastWasSilent=false;}
  choose(intent) {
    const pool=BANK[intent].lines;
    let choices=pool.filter(line=>!this.recent.includes(line));
    if (!choices.length) choices=pool.filter(line=>line!==this.recent.at(-1));
    const line=choices[Math.min(choices.length-1,Math.floor(Math.max(0,this.random())*choices.length))];
    this.recent.push(line);this.recent=this.recent.slice(-8);return line;
  }
  respond(message,{action,forceText=false}={}) {
    let intent=action ? ACTIONS[action] : classify(message);
    const short=normalize(message);
    if(!action && /^(otra|otro|otra vez|mas|si|dale|sigue|continua)$/.test(short) && ['play','affection','sleep','memory'].includes(this.lastIntent))intent=this.lastIntent;
    if(!action && /^(no|basta|para)$/.test(short))intent='quiet';
    if (!intent || intent==='empty') return null;
    const config=BANK[intent];
    const previousPose=this.pose;
    this.turns++;
    this.lastInteraction=this.clock();
    this.lastIntent=intent;
    if (intent==='play' || intent==='happy') this.energy=Math.max(10,this.energy-12);
    else if (['sleep','tired','goodbye'].includes(intent)) this.energy=Math.min(100,this.energy+18);
    else this.energy=Math.min(100,this.energy+2);
    if (['affection','missing','sadness','gratitude'].includes(intent)) this.affection=Math.min(100,this.affection+12);
    // Nunca imponer sueño sobre un mensaje triste o una petición de compañía.
    this.pose=['wellbeing','presence'].includes(intent)?previousPose:config.pose;
    const gentle=['affection','missing','sadness','quiet','anger','memory','gratitude'].includes(intent);
    const silentChance=action==='quiet'?1:forceText||intent==='boundary'||this.turns===1?0:gentle?.18:.08;
    const silent=action==='quiet'||intent==='quiet'||(!this.lastWasSilent && this.random()<silentChance);
    this.lastWasSilent=silent;
    let line=silent?'':this.choose(intent);
    if(['wellbeing','presence'].includes(intent)&&!silent){
      const descriptions={sleep:'Descansando, con mis patitas bien acomodadas.',play:'Con mi pelota, listo para jugar.',cuddle:'Con los ojitos cerrados, disfrutando los mimos.'};
      if(descriptions[previousPose])line=descriptions[previousPose];
    }
    return {intent,pose:this.pose,gesture:['wellbeing','presence'].includes(intent)?({sleep:'Descansa con los ojitos cerrados.',play:'Se queda listo junto a su pelota.',cuddle:'Se acomoda para otro mimo.',idle:config.gesture}[this.pose]):config.gesture,line,silent,energy:this.energy,affection:this.affection};
  }
  idle() {
    if(this.clock()-this.lastInteraction<60000)return null;
    this.pose='sleep';
    return {pose:'sleep',gesture:'Descansa tranquilo en su camita.',line:'',silent:true};
  }
}
