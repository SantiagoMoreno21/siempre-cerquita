# Siempre cerquita

Un rincón interactivo de recuerdo: un perrito juguetón, consentido y un poquito dormilón que reacciona a palabras y caricias. Homenaje ilustrado con un manual local de comportamientos; no usa una IA ni consume tokens.

## Usarlo

- Escribe y toca **Enviar**; Enter envía y Shift+Enter añade una línea.
- Toca al perrito o **Acariciarte** para darle un mimo.
- **Jugar contigo** y **Una siestita** cambian su gesto.
- **Hablarle** inicia dictado si el navegador lo admite. Revisa el texto antes de enviarlo.
- **Solo acompañarnos** activa un gesto tranquilo sin frase.
- **Guardar este momento** conserva la interacción en este navegador. En **Mis momentos** puedes descargar un respaldo JSON.
- La lectura en voz alta es opcional y comienza desactivada.

## Ejecutar y comprobar

Requiere Node.js 22 o posterior. No hay paquetes que instalar.

```sh
npm start
npm test
```

Vista previa en `http://127.0.0.1:4173`. Para GitHub Pages se publica la carpeta `dist/` mediante el workflow incluido. En Settings → Pages selecciona GitHub Actions.

## Archivos

- `dist/index.html`: estructura y controles accesibles.
- `dist/style.css`: diseño adaptable y animaciones con movimiento reducido.
- `dist/app.js`: conversación, dictado, lectura y guardado local.
- `dist/behavior.js`: clasificación, banco de frases y variación sin repetición inmediata.
- `MANUAL_COMPORTAMIENTO.md`: manual extenso y catálogo exacto de frases.
- `tests/behavior.test.mjs`: pruebas del motor.
- `scripts/generate-manual.mjs`: regenera el manual a partir del catálogo real.

## Privacidad y límites

El texto se interpreta en el navegador. Solo se persisten interacciones guardadas voluntariamente. No hay cuentas, analítica, base de datos ni sincronización. El dictado puede usar el servicio de reconocimiento del navegador; no se promete funcionamiento sin conexión para esa función. El alojamiento puede registrar solicitudes según su propia política.

No se incluyen la foto original ni el rostro de la dueña. Las ilustraciones se generaron como interpretación del perrito. No se afirma comunicación real con una mascota fallecida, ni se inventan recuerdos compartidos.

Las frases son prediseñadas: no comprende conversaciones libres, ironía ni todos los matices. Nombre, apodos, recuerdos y posible conexión con IA quedan pendientes de la aceptación del regalo. El guardado depende de que el navegador conserve sus datos; descargar un respaldo no lo restaura automáticamente en la página.
