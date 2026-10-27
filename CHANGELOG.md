# Registro de cambios

## 2026-10-27 · Primera versión

- Dirección visual elegida por el usuario: Nuestro rinconcito.
- Web estática sin dependencias; cuatro poses ilustradas del pug.
- Manual ejecutable con 21 categorías y 173 frases de catálogo.
- Juego con lanzamiento de pelota, recorrido y regreso; descanso con despertar explícito.
- Prioridades para mensajes mezclados, negaciones y continuación breve.
- Dictado y lectura opcionales; guardado local voluntario y exportación.
- Corrección solicitada durante la vista previa: encuadres independientes para evitar partes de poses vecinas.
- Datos personales y conexión con IA quedan para después de la aceptación del regalo.
- No se eliminan módulos ni carpetas; no se realiza Depuración Final.

## 2026-10-27 · Mejoras de respaldo y experiencia

- Recuperar momentos desde una copia JSON (valida formato, evita duplicados, respeta el límite de 100).
- Quitar momentos individuales con confirmación.
- Descarga más compatible con Safari y mensaje de confirmación.
- Solicita almacenamiento persistente al guardar el primer momento.
- Bienvenida en la primera visita con instrucciones breves.
- Pie de página aclara que es un homenaje y que las palabras son imaginadas.
- Instalable como app (manifest) y funciona sin conexión (service worker).
- `dist/personal.json`: nombre, apodos y recuerdos aportados por la destinataria (vacío por ahora). Solo se usan si existen; los recuerdos se devuelven tal como ella los escribió.
- Saludo según la hora (mañana, tarde, noche) con frases propias fuera del catálogo base.
- Íconos PNG (180, 192, 512) para instalar en iPhone y Android.
- Pruebas nuevas: bancos sin duplicados internos, ejemplo por categoría, saludo por hora y datos personales (14 pruebas en total).
