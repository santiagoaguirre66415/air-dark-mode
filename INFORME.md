# Informe – JetBrains Air + modo oscuro (Programación Web 1)

**Rama:** `feature/air-dark-mode` · **Enlace al repo/PR:** _(pegar aquí)_

## 1. Solución del agente vs. convenciones del proyecto
- Modularidad: lógica de persistencia en `src/theme.js`, componente en `src/ThemeToggle.js`, estilos con variables CSS en `src/styles.css`.
- Persistencia en `localStorage` con respaldo a `prefers-color-scheme` y `try/catch` si el storage no está disponible.
- Accesibilidad: `<button type="button">` con `aria-pressed`, `aria-label` y `:focus-visible`.
- Tras la revisión en el diff se pidió usar variables CSS en lugar de hex fijos _(describir el comentario que dejaste en Air y cómo respondió el agente)_.
- Diferencias con la convención: _(completar, p. ej. nombres de archivos, estilo de módulos)_.

## 2. Consumo de recursos/créditos
_(Completar con los créditos/tokens que muestre Air o tu perfil de JetBrains AI al terminar la sesión: antes ___ / después ___.)_

## 3. Reflexión crítica: Air vs. chat desacoplado
- **Ventajas:** el agente lee el repositorio sin pegar código, propone cambios como diff revisable, comentarios en línea y todo se integra con Git.
- **Limitaciones:** consume créditos, requiere revisar siempre el diff y depende del índice de contexto.
- **Chat tradicional:** más simple y flexible, pero obliga a copiar/pegar y pierde contexto del proyecto.
- _(Añadir tu opinión personal.)_
