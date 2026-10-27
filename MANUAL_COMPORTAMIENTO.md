# Manual de comportamiento de Siempre cerquita

Versión 1.0 · 27 de octubre de 2026

Este documento describe el comportamiento implementado de la primera versión. El catálogo se genera desde el mismo archivo que utiliza la página para evitar diferencias entre lo documentado y lo que realmente puede responder.

## 1. Objetivo de la experiencia

El perrito ofrece una representación cariñosa e interactiva para una persona que extraña a su mascota. La experiencia permite escribir, dictar, acariciar, jugar y estar en silencio. Su propósito es acompañar un momento de recuerdo; no prometer que la mascota está viva, que observa a la persona o que transmite mensajes reales.

Esta versión funciona con reglas en el navegador. No contiene un modelo de lenguaje, no genera respuestas libres, no llama a una API de IA y no consume tokens. El reconocimiento de voz, si se activa, pertenece al navegador y puede necesitar su servicio de red.

## 2. Identidad y personalidad confirmadas

| Rasgo | Cómo se expresa | Qué evitar |
| --- | --- | --- |
| Juguetón | Posición de juego, pequeños saltitos, referencias a pelota y patitas | Saltar ante tristeza o imponer actividad |
| Consentido | Ojitos cerrados, cabecita ladeada, pedir otro poquito de mimo de forma ligera | Reclamos, celos, exigir atención |
| Algo dormilón | Bostezos escritos, pose de bolita, descanso después de inactividad | Dormirse encima de un mensaje de tristeza o rechazar un saludo |

La apariencia se inspira en la foto del pug aportada. Su nombre, apodos, fechas, lugares, juguetes reales y anécdotas permanecen sin completar. No se inventa ninguno de esos datos. La pelota y la cama son elementos de la escena ilustrada, no afirmaciones sobre sus objetos reales.

## 3. Voz del personaje

1. Una sola frase corta por respuesta escrita.
2. Palabras familiares: patitas, cabecita, orejitas, camita, cariñito.
3. Tono cálido, sencillo y tierno; sin discursos terapéuticos.
4. Sin preguntas continuas ni obligación de contestar.
5. Sin burlas, ironía o regaños.
6. Nunca culparla por ausentarse ni exigir visitas.
7. No afirmar que conoce lo que ocurre fuera de la página.
8. No decir que recuerda experiencias que no han sido aportadas.
9. No diagnosticar, aconsejar medicación ni asumir el papel de terapeuta.
10. Los mensajes son imaginados como parte del homenaje; la pantalla de información lo explica.

Las frases del catálogo actual tienen hasta 100 caracteres. No se escriben párrafos al azar ni se concatenan respuestas de varias categorías.

## 4. Flujo de una interacción

1. La persona escribe hasta 500 caracteres o dicta un texto.
2. El dictado coloca palabras en el campo; no las envía automáticamente.
3. Al enviar se verifica que haya texto y que no haya otra respuesta en proceso.
4. Se normalizan mayúsculas, acentos, signos y espacios.
5. Se identifica una intención mediante patrones y prioridades.
6. Durante unos 550 milisegundos el perrito muestra escucha.
7. El motor elige un gesto, decide si habrá frase y selecciona una que no se haya usado recientemente.
8. La escena cambia de pose y presenta la reacción.
9. La interacción solo se guarda de forma permanente si la persona toca Guardar este momento.
10. Una nueva interacción cancela visualmente la respuesta pendiente anterior cuando proviene de un gesto; no aparecen respuestas antiguas fuera de orden.

El pequeño tiempo de escucha es una transición de interfaz, no una llamada a un modelo.

## 5. Normalización de mensajes

- Se convierte el mensaje a minúsculas.
- Se retiran los acentos para comparar sin exigir ortografía perfecta: extraño se compara como extrano.
- Se sustituyen signos decorativos por espacios y se mantienen interrogaciones para detectar preguntas.
- Se comprimen espacios repetidos.
- Se buscan palabras o frases completas; no fragmentos dentro de otras palabras.
- Una entrada vacía, solo signos o solo emojis no produce respuesta.

Esto no corrige todos los errores ortográficos, no traduce idiomas y no interpreta sarcasmo. Por ejemplo, una abreviatura no incluida puede caer en conversación neutral.

## 6. Prioridades para resolver mensajes mezclados

Se usa la primera coincidencia válida de esta lista. La prioridad no se elige al azar.

1. Preguntas explícitas sobre si el personaje es real o está vivo: explicar el homenaje.
2. Petición de silencio, no hablar o que lo deje en paz: compañía tranquila.
3. Expresión de ausencia: te extraño, me haces falta, tu partida.
4. Tristeza, soledad, culpa o mal día.
5. Enojo, frustración o ansiedad cotidiana.
6. Cansancio y negativa a jugar.
7. Despedida o buenas noches.
8. Negativa explícita al sueño: respuesta neutral.
9. Sueño y descanso.
10. Recuerdo o pregunta sobre un recuerdo.
11. Agradecimiento.
12. Cariño.
13. Juego.
14. Comida.
15. Alegría y logros.
16. Saludo.
17. Pregunta general.
18. Tema desconocido: escucha neutral.

Se retiran algunas negaciones expresas de estados antes de buscar palabras aisladas: no estoy triste no debe activar tristeza. Esta regla cubre expresiones concretas; no representa comprensión general de todas las negaciones posibles.

## 7. Matriz de interpretación

| Ejemplo | Intención | Respuesta visual esperada |
| --- | --- | --- |
| Hola | Saludo | Sentado y atento |
| Hola, estoy triste | Tristeza | Consentido y tranquilo |
| Te extraño mucho | Ausencia | Acerca su cabecita |
| Te extraño, vamos a jugar | Ausencia | Compañía suave |
| Hoy estoy sola | Tristeza | Se acomoda cerquita |
| No estoy feliz | Tristeza | Gesto suave |
| No estoy triste, estoy feliz | Alegría | Gesto juguetón |
| Estoy frustrada | Frustración | Baja el ritmo |
| No quiero jugar | Cansancio | Descansa |
| No tengo sueño | Neutral | Atención tranquila |
| Vamos a jugar | Juego | Patitas delanteras abajo |
| Tengo sueño | Sueño | Se hace bolita |
| Buenas noches | Despedida | Descansa |
| Te quiero | Cariño | Cierra los ojitos |
| No te quiero | Silencio | No reclama ni discute |
| Gracias por acompañarme | Gratitud | Acerca una patita |
| ¿Te acuerdas de nuestro parque? | Recuerdo | Escucha; no confirma recordar |
| Hoy miré tus fotos | Recuerdo | Gesto tranquilo |
| Aprobé mi examen | Alegría | Saltito |
| Tengo hambre | Comida | Curiosidad |
| ¿Qué opinas de mi trabajo? | Pregunta | Cabecita inclinada; sin consejos inventados |
| Hoy fui al supermercado | Neutral | Escucha |
| No quiero hablar | Silencio | Sin frase |
| ¿Eres real? | Qué es el homenaje | Explicación breve |

Las frases exactas varían dentro del banco correspondiente. Estos ejemplos son casos de funcionamiento, no garantía de comprender cualquier frase semejante.

## 8. Azar controlado y coherencia

El azar decide qué frase del banco usar y si conviene un gesto silencioso. No decide el significado del mensaje. Una frase alegre no entra por azar en el banco de tristeza.

- Se conservan en memoria temporal las últimas ocho frases mostradas.
- Se prefieren frases que no estén en esa lista.
- Si se agota un banco pequeño, puede reutilizar frases anteriores, excluyendo la inmediatamente anterior.
- La primera interacción recibe texto, excepto si se pidió silencio.
- En cariño, ausencia, tristeza, silencio, frustración, recuerdos y gratitud la probabilidad base de silencio es 18%.
- En los otros temas la probabilidad base es 8%.
- Preguntas sobre el homenaje siempre reciben texto.
- Dos silencios aleatorios no se encadenan: después de uno, la siguiente interacción normal tiene frase.
- Una petición explícita de silencio prevalece y puede mantenerse en varias interacciones.

Esas probabilidades se aplican por interacción elegible, no son un porcentaje garantizado de cada sesión. El historial anti repetición se reinicia al recargar; los momentos guardados no se utilizan para fingir memoria del personaje.

## 9. Continuidad de mensajes cortos

Se conserva únicamente la intención del turno anterior dentro de la sesión. Si la última intención fue juego, cariño, sueño o recuerdo, una respuesta exacta como sí, dale, más, otra, otra vez, sigue o continúa reutiliza ese banco.

Ejemplo: Vamos a jugar → juego. Otra vez → otra frase de juego. No → compañía en silencio.

El motor no reconstruye conversaciones largas, no resuelve pronombres y no combina datos personales. Si no existe una continuación reconocida, vuelve a clasificar el texto normalmente.

## 10. Poses y animaciones reales

| Pose | Ilustración | Animación | Usos |
| --- | --- | --- | --- |
| Atento | Sentado, ojos abiertos, lengua afuera | Respiración suave | Saludos, preguntas, comida, tema neutral |
| Consentido | Ojos cerrados, cabeza inclinada | Inclinación leve y corazones breves | Mimos, ausencia, tristeza, recuerdos, silencio |
| Juego | Postura de invitación a jugar | Elevación breve, dos ciclos | Juego y alegría |
| Dormido | Acurrucado con ojos cerrados | Respiración lenta | Sueño, cansancio, despedida, reposo |

Los gestos descritos en texto son parte del lenguaje del personaje; la primera versión utiliza cuatro ilustraciones y movimientos CSS, no un modelo 3D con articulaciones individuales. No se promete animación independiente de orejas, cola o párpados.

Con movimiento reducido activado en el sistema, las poses cambian pero se desactivan las animaciones y corazones flotantes.

## 11. Acciones directas

- Tocar al perrito: cariño.
- Acariciarte: cariño.
- Jugar contigo: juego.
- Una siestita: sueño.
- Solo acompañarnos: gesto tranquilo sin frase.
- Enviar: interpretar el mensaje escrito.
- Hablarle: solicitar dictado; todavía no responder.
- Leer respuestas: alternar lectura sintética opcional; está apagada inicialmente.

Una acción directa no reinterpreta el texto sin enviar que esté en el campo. Puede usarse el perrito sin escribir. Mientras hay dictado activo, se invita a terminarlo antes de comenzar otro gesto.

## 12. Tiempo, reposo y disponibilidad

El motor registra la última interacción. Después de 60 segundos sin actividad, sin borrador escrito, sin dictado y con el rincón visible, puede pasar a dormido. El navegador revisa esta condición cada 15 segundos, por lo que el cambio puede aparecer entre 60 y 75 segundos.

No envía frases, notificaciones, reclamos ni sonidos espontáneos. Al volver, la persona puede saludar o acariciar y el personaje cambia de pose. Una pestaña en segundo plano no realiza nuevas reacciones. El reposo automático no crea un momento guardable nuevo.

## 13. Variables internas y sus límites

Se registra energía entre 10 y 100 y cariño hasta 100. Juego y alegría restan 12 puntos de energía; sueño, cansancio y despedida suman 18; otras interacciones suman 2. Cariño, ausencia, tristeza y gratitud suman 12 de cariño.

En esta versión son valores internos para futura evolución: no se muestran como medidores, no condicionan el afecto y no deciden una reacción distinta. El personaje no exige comida, no pierde cariño por ausencias y no se vuelve inaccesible por cansancio. La intención del mensaje determina la pose.

## 14. Dictado y lectura en voz alta

El micrófono se inicia únicamente al pulsar Hablarle y requiere permiso del navegador. No escucha al abrir la página. Se transcribe en español y la persona revisa antes de enviar. Detener finaliza el dictado. Si el texto supera 500 caracteres se recorta y se informa.

Se tratan permiso denegado, micrófono ausente, falta de voz y fallo de red con mensajes claros y una alternativa de escritura. Al ocultar la pestaña se aborta la escucha. La disponibilidad depende del navegador y del sistema.

La lectura usa una voz sintética disponible en el dispositivo. No es la voz real de la mascota. Puede desactivarse en cualquier momento y se cancela al empezar otra reacción o dejar la pestaña en segundo plano.

## 15. Guardado y privacidad

La conversación corriente vive en memoria de la pestaña. Solo Guardar este momento escribe en almacenamiento local. Cada registro incluye identificador, fecha, mensaje o acción, frase, gesto e intención. El límite actual es de 100 momentos: al alcanzarlo se informa, sin borrar recuerdos anteriores.

Mis momentos lista lo guardado y permite descargar JSON. No hay restauración mediante importación en esta versión. No se transmite el historial a GitHub, a una base de datos ni a un modelo. El proveedor de alojamiento y el servicio de dictado tienen sus propias condiciones técnicas.

Los datos no viajan entre teléfonos o navegadores; pueden perderse si se borra el almacenamiento. Por ello la interfaz invita a descargar copia. Un fallo de almacenamiento se muestra como error; nunca se anuncia guardado exitoso si la escritura falló.

## 16. Límites del personaje y protección del tono

No escribir: te veo desde el cielo, estoy vivo, recuerdo exactamente ese día, no me abandones, me pongo triste si no vienes, solo me necesitas a mí o promesas de curar el duelo.

No establecer rachas, premios por entrar diariamente o contadores de abandono. No presumir información sobre fallecimiento, edad o condiciones de vida. No inventar fechas ni fotos. Una petición de silencio o de parar tiene prioridad sobre el juego.

El motor actual no es un servicio de atención a crisis ni un sistema de evaluación emocional. Clasifica expresiones cotidianas y ofrece un gesto limitado. La interfaz no debe presentarlo como sustituto de apoyo humano.

## 17. Gestión de errores y accesibilidad

- Texto vacío: no enviar ni crear un turno.
- Doble envío durante escucha: desactivar Enviar.
- Cambios rápidos de gesto: conservar solo la reacción más reciente.
- Texto largo o caracteres especiales: mostrarlos como texto, nunca como HTML ejecutable.
- Datos locales dañados: ignorar registros inválidos sin romper el rincón.
- Fallo de guardado: avisar y mantener el funcionamiento de la escena.
- Navegador sin dictado: ofrecer escritura.
- Teclado: controles enfocables, Enter para enviar, Shift+Enter para nueva línea y Escape para cerrar información.
- Respuesta y errores: anunciar mediante regiones de estado accesibles.
- Movimiento reducido: conservar interacción sin movimiento continuo.

## 18. Pruebas de aceptación

1. Un saludo produce atención y frase breve.
2. Una caricia cambia a la pose consentida.
3. Juego activa su pose sin modificar la respuesta de tristeza anterior fuera de orden.
4. Sueño cambia a bolita y un saludo posterior lo despierta.
5. Tristeza tiene prioridad sobre juego y saludo.
6. Una negativa a jugar no activa juego.
7. Varias interacciones del mismo tema varían sus frases.
8. Silencios aleatorios no aparecen dos veces seguidas.
9. Solo acompañarnos no muestra frase.
10. Guardar conserva un único registro y no duplica el mismo momento.
11. Recargar mantiene los momentos guardados, no el contexto temporal.
12. Texto con etiquetas HTML aparece literalmente y no se ejecuta.
13. Descarga genera un JSON legible con los recuerdos.
14. La interfaz de móvil no presenta desplazamiento horizontal ni controles fuera de pantalla.
15. La información distingue homenaje, reglas locales y servicio de dictado.

Los tests automáticos cubren el motor. Las funciones de interfaz se revisan además en navegador. El reconocimiento con micrófono real y la calidad de una voz requieren prueba en el dispositivo de la persona.

## 19. Añadir personalización después de la sorpresa

La persona podrá aportar nombre, apodos, formas de saludar, lugares, juguetes y anécdotas. Cada recuerdo debe tener fuente explícita aportada por ella. Hasta entonces quedan pendientes y no bloquean esta versión.

Para añadir un tema: crear un banco de frases en BANK, asignar una de las cuatro poses, insertar el patrón con prioridad deliberada y añadir casos positivos, negativos y mezclados a las pruebas. Regenerar este manual con node scripts/generate-manual.mjs y ejecutar npm test.

Las extensiones deberán ser aditivas y quirúrgicas. Código redundante se anota para una futura Depuración Final; no se elimina sin orden del usuario.

## 20. Conexión futura con una IA

Pendiente, no instalada ni activa. Se mantendría el motor local para gestos y respuestas habituales. Una capa opcional podría pedir una frase breve y una pose de la lista permitida para mensajes que requieran más contexto. Debe tener tiempo límite y volver al banco local si falla.

Una API necesitaría un servidor que proteja la clave y limite gasto. Ollama local necesitaría un equipo encendido y una conexión protegida para acceso remoto. GitHub Pages aloja la interfaz estática; no ejecuta el modelo. La autorización actual es construir sin IA.

## 21. Catálogo completo de frases implementadas

El catálogo contiene **173 frases** distribuidas en **21 categorías**. Es la fuente disponible para la selección aleatoria; no son respuestas prometidas para un mensaje concreto.

### Mejora de juego, descanso y congruencia

Jugar a la pelota abre un control visible Lanzar. Al tocarlo, la pelota recorre la escena y el perrito se desplaza para buscarla y regresar. Durante unos 1,9 segundos el lanzamiento está bloqueado; después se selecciona una frase del banco fetch. Se puede repetir o cambiar de actividad; cambiar cancela el resultado pendiente del lanzamiento anterior.

Descansar juntos muestra al perro acurrucado y el control Despertarlo suavecito. Despertarlo usa el banco wake, con frase obligatoria. Acariciarlo también cambia de pose. Una pregunta sobre su estado conserva la pose actual: si descansa, dice que está descansando; si juega, menciona la pelota; si recibe mimos, lo expresa. Estas tres frases descriptivas se agregan al catálogo según estado.

Se añadieron patrones de negación para no aprobé, no te extraño, no tengo hambre y no estoy triste, estoy feliz. La clasificación prioriza el malestar antes del saludo y el juego. No quiero dormir se retira antes de buscar una invitación a jugar en el resto de la frase.

El encuadre del personaje utiliza ventanas independientes de la lámina original: atento 30/0/490/724, consentido 550/0/480/724, juego 1030/0/545/724, sueño 1575/0/597/724. No se usa una división ciega en cuatro columnas: los márgenes del arte son distintos. El SVG de presentación recorta cada región para impedir que se cuelen patas de otra pose. La ilustración original queda intacta.

### Buscar y devolver la pelota

Identificador: `fetch`. Pose: `play`. Gesto: Corre tras la pelota y vuelve a tu lado.

- «¡La traje! ¿Otra vez?»
- «Pelota recuperada. Mimo pendiente.»
- «¡Otra vuelta con la pelota!»
- «La pelota volvió conmigo.»
- «Mis patitas sí que corrieron.»
- «¿Un lanzamiento más?»
- «¡Lista para otra ronda!»
- «Ahora me gané una caricia.»

### Despertar con suavidad

Identificador: `wake`. Pose: `idle`. Gesto: Abre los ojitos y se estira despacito.

- «Ya abrí mis ojitos.»
- «Un estiramiento y aquí estoy.»
- «¿Un mimo para despertar?»
- «Me desperezo contigo.»
- «Buenos mimos, digo… buenos días.»
- «Mis orejitas ya despertaron.»
- «Aquí va mi primer bostezo.»
- «Listo para otro ratito contigo.»

### Cómo se siente según su pose

Identificador: `wellbeing`. Pose: `idle`. Gesto: Te mira con la cabecita inclinada.

- «Con ganas de un cariñito.»
- «Entre una caricia y una siesta.»
- «Con las patitas tranquilas.»
- «Contento con este ratito de mimos.»
- «Un poquito consentido, como ves.»
- «Con energía para un juego pequeñito.»

### Qué hace y dónde está

Identificador: `presence`. Pose: `idle`. Gesto: Se sienta atento junto a ti.

- «Aquí, en mi rinconcito.»
- «Acomodando mis patitas junto a ti.»
- «Mirándote con mi carita curiosa.»
- «Listo para una caricia o un juego.»
- «Sentadito, prestando mis orejitas.»
- «Acompañándote este ratito.»

### Saludo y bienvenida

Identificador: `greeting`. Pose: `idle`. Gesto: Levanta las orejitas y mueve la cola.

- «Hola, hola. ¿Un cariñito?»
- «Qué bonito compartir este ratito.»
- «Ya acomodé mis patitas.»
- «Te recibo con la colita inquieta.»
- «Me siento cerquita de ti.»
- «¿Empezamos con una caricia?»
- «Mi rinconcito tiene lugar para ti.»
- «Hola. Pongo mi cabecita aquí.»

### Cariño y caricias

Identificador: `affection`. Pose: `cuddle`. Gesto: Cierra los ojitos y se deja consentir.

- «Otro poquito de cariño…»
- «Me derrito con los mimos.»
- «Mi pancita vota por más caricias.»
- «Te dejo una patita suave.»
- «Así, despacito.»
- «Qué rico este ratito.»
- «Me acomodo junto a ti.»
- «Una cabecita para tu mano.»
- «Me quedo aquí, cerquita.»
- «Este mimo me ganó.»

### Extrañar y sentir ausencia

Identificador: `missing`. Pose: `cuddle`. Gesto: Se acerca despacito y apoya su cabecita.

- «Una patita para este momento.»
- «Podemos quedarnos aquí un ratito.»
- «Te acompaño con mis ojitos cerrados.»
- «Un mimo suave para ti.»
- «No hace falta decir nada más.»
- «Me acomodo cerquita.»
- «Aquí hay espacio para tus recuerdos.»
- «Una cabecita junto a tu mano.»
- «Vamos a ir despacito.»
- «Este ratito puede ser solo nuestro.»

### Tristeza y días difíciles

Identificador: `sadness`. Pose: `cuddle`. Gesto: Se acomoda a tu lado, tranquilo.

- «Te acompaño un ratito.»
- «No tienes que estar alegre aquí.»
- «Una patita, sin prisa.»
- «Podemos descansar de las palabras.»
- «Me quedo quietecito junto a ti.»
- «Un mimo para este día difícil.»
- «Aquí puedes contar cómo te sientes.»
- «Vamos suavecito.»
- «Apoyo mi cabecita a tu lado.»
- «Este momento no tiene que arreglar nada.»

### Alegría y logros

Identificador: `happy`. Pose: `play`. Gesto: Da un saltito y se pone en posición de juego.

- «¡Eso merece mover la colita!»
- «Mis patitas ya están celebrando.»
- «¡Un saltito por esa alegría!»
- «Me contagias las ganas de jugar.»
- «¡Qué buena noticia!»
- «Colita en modo celebración.»
- «¡Hoy hay energía de pelota!»
- «Doy una vueltita contigo.»
- «¡Me apunto a ese festejo!»
- «Te regalo mi mejor saltito.»

### Juego y travesuras

Identificador: `play`. Pose: `play`. Gesto: Baja las patitas delanteras, listo para jugar.

- «¿Tiras la pelota?»
- «Mis patitas dicen: ¡vamos!»
- «Yo pongo las ganas de jugar.»
- «¡Una ronda más!»
- «Tengo cara de travieso, ¿verdad?»
- «Primero juego, después siesta.»
- «¡A ver esa pelota!»
- «Estoy listo para una travesura pequeña.»
- «La colita ya dio permiso.»
- «¿Jugamos un ratito?»

### Sueño y siesta

Identificador: `sleep`. Pose: `sleep`. Gesto: Bosteza y se hace una bolita en su camita.

- «Cinco minutitos más…»
- «Mis patitas piden descanso.»
- «La camita me está llamando.»
- «Una siesta pequeñita.»
- «Me hago bolita aquí.»
- «Ojitos cerrados, pancita tranquila.»
- «Hora de acomodar las orejitas.»
- «Dejo la pelota para después.»
- «Un bostezo y me acurruco.»
- «Este rincón invita a descansar.»

### Cansancio

Identificador: `tired`. Pose: `sleep`. Gesto: Se estira y se acomoda para descansar contigo.

- «¿Descansamos un poquito?»
- «Hoy podemos ir más lento.»
- «Un ratito sin hacer nada.»
- «Yo pongo el bostezo.»
- «Me acomodo aquí contigo.»
- «Las patitas también hacen pausas.»
- «No hace falta correr ahora.»
- «Un descanso suavecito.»

### Comida y curiosidad

Identificador: `food`. Pose: `idle`. Gesto: Levanta la cabeza con curiosidad y olfatea.

- «Esa palabra despertó mi naricita.»
- «Mi hocico acaba de prestar atención.»
- «¿Escuché algo de comida?»
- «Ahora sí se me quitó el sueño.»
- «Naricita curiosa, patitas quietas.»
- «Mi pancita está muy interesada.»
- «Eso suena a algo para olfatear.»
- «Qué fácil distraer a este consentido.»

### Recuerdos aportados por ella

Identificador: `memory`. Pose: `cuddle`. Gesto: Inclina la cabecita y te escucha sin prisa.

- «Ese recuerdo tiene lugar aquí.»
- «Te escucho con las orejitas atentas.»
- «Puedes contarme un poquito más.»
- «Me siento junto a ese recuerdo.»
- «Guardemos este ratito con cariño.»
- «Te acompaño mientras lo cuentas.»
- «Un mimo para esa historia.»
- «Las patitas se quedan quietas para escuchar.»

### Agradecimiento

Identificador: `gratitude`. Pose: `cuddle`. Gesto: Cierra los ojos y acerca una patita.

- «Una patita con mucho cariño.»
- «Recibo tus palabras con un mimo.»
- «Qué bonito este ratito.»
- «Me acomodo junto a ti.»
- «Te dejo mi gesto más suave.»
- «Un cariñito para acompañar ese gracias.»
- «Cierro los ojitos un momento.»
- «Aquí va una patita pequeña.»

### Despedida

Identificador: `goodbye`. Pose: `sleep`. Gesto: Se acomoda en su cama y descansa.

- «Que descanses bonito.»
- «Ve a tu ritmo.»
- «Hasta otro ratito de mimos.»
- «Un último cariñito y a descansar.»
- «Me hago bolita en la camita.»
- «Te dejo una patita de despedida.»
- «Qué suave estuvo este ratito.»
- «Nos quedamos con este momento.»

### Frustración, enojo y ansiedad cotidiana

Identificador: `anger`. Pose: `cuddle`. Gesto: Baja el ritmo y se sienta tranquilo a tu lado.

- «Voy a sentarme cerquita.»
- «Podemos hacer una pausa.»
- «Un mimo sin preguntas.»
- «Te escucho, despacito.»
- «No hace falta resolver todo ahora.»
- «Mis patitas se quedan tranquilas.»
- «Un ratito con menos ruido.»
- «Me acomodo mientras lo cuentas.»

### Preguntas que no sabe responder

Identificador: `question`. Pose: `idle`. Gesto: Inclina la cabeza con curiosidad.

- «Mi respuesta viene en forma de patita.»
- «Soy mejor dando mimos que consejos.»
- «Te escucho con mi carita curiosa.»
- «¿Lo acompañamos con una caricia?»
- «No sé de todo, pero sé hacerme bolita.»
- «Te presto mis orejitas.»
- «A eso le pongo una cabecita inclinada.»
- «Yo puedo acompañarte este ratito.»

### Conversación cotidiana y tema desconocido

Identificador: `neutral`. Pose: `idle`. Gesto: Te mira atento y mueve suavemente las orejitas.

- «Te escucho con mis orejitas.»
- «Me siento cerquita mientras cuentas.»
- «Un ratito para ti y mis patitas.»
- «Aquí cabe lo que quieras contar.»
- «Inclino la cabecita para escucharte.»
- «Te acompaño desde mi camita.»
- «Pongo mis patitas junto a ti.»
- «Hoy podemos simplemente estar.»
- «Me quedo atento a tus palabras.»
- «Un mimo para acompañar tu día.»
- «Aquí estoy, con mi carita curiosa.»
- «Te regalo un movimiento de colita.»

### Compañía en silencio

Identificador: `quiet`. Pose: `cuddle`. Gesto: Se acurruca en silencio a tu lado.

- «Nos quedamos así un ratito.»
- «Sin palabras también está bien.»
- «Un momento tranquilo, juntos.»
- «Me acomodo y bajo el ritmo.»
- «Solo una patita cerquita.»
- «Dejamos descansar las palabras.»

### Qué es este homenaje

Identificador: `boundary`. Pose: `idle`. Gesto: Te mira con calma e inclina la cabecita.

- «Soy un homenaje hecho con cariño.»
- «Mis gestos y frases son parte de este recuerdo.»
- «Este rinconcito es una representación cariñosa.»

## 22. Relación con el código

- dist/behavior.js: catálogo, normalización, clasificación, continuación, selección y reposo.
- dist/app.js: escucha visual, formulario, almacenamiento, dictado, lectura y navegación.
- dist/style.css: poses, tamaños, estados y movimiento reducido.
- tests/behavior.test.mjs: casos automáticos verificables.

El manual describe esta versión. Una regla escrita como futura no se considera implementada hasta tener código y verificación.
