## 1. Paleta de Colores

### Colores principales

| Nombre | Hex | Uso |
|---|---|---|
| **Azul Primario** | `#2563EB` | Botones de acción principal (CTA), logo, gradientes, números de paso, sombras de énfasis |
| **Cian Secundario** | `#06B6D4` | Íconos, etiquetas de sección ("Cómo funciona"), badge del hero, micro-iconos de beneficios, línea conectora entre pasos |
| **Oscuro / Fondo Dark** | `#0F172A` | Fondo del header, fondo del footer, fondo de la sección de estadísticas, color base del texto en secciones claras |

### Colores de apoyo

| Nombre | Hex / Clase Tailwind | Uso |
|---|---|---|
| **Blanco** | `#FFFFFF` | Fondo principal de la página, fondo de tarjetas de características, texto sobre fondos oscuros |
| **Slate 300** | `slate-300` | Subtítulos y párrafos sobre fondos oscuros (hero) |
| **Slate 400** | `slate-400` | Links de navegación en reposo, micro-etiquetas de beneficios, texto secundario en footer |
| **Slate 500** | `slate-500` | Descripciones dentro de tarjetas de características (sobre fondo blanco) |
| **Azul oscuro hover** | `#1d4ed8` | Estado hover del botón primario azul |
| **Azul medio hero** | `#1e3a5f` | Parte del gradiente de fondo del hero |
| **Cian oscuro hero** | `#0e4f6e` | Parte del gradiente de fondo del hero |

### Degradados

| Nombre | Definición | Dónde se usa |
|---|---|---|
| **Gradiente de texto** | `linear-gradient(90deg, #2563EB, #06B6D4)` | Palabras destacadas del titular principal ("sin complicaciones"), cifras en la sección de estadísticas |
| **Gradiente de botón** | `linear-gradient(135deg, #2563EB, #1d4ed8)` | Botones de acción principal (CTA) |
| **Gradiente de paso** | `linear-gradient(135deg, #2563EB, #06B6D4)` | Círculos numerados sobre las tarjetas de características |
| **Gradiente del hero** | `linear-gradient(135deg, #0F172A → #1e3a5f → #0e4f6e → #0F172A)` | Fondo de la sección hero |
| **Gradiente conector** | `from-[#2563EB] via-[#06B6D4] to-[#2563EB]` | Línea horizontal que conecta las 3 tarjetas de pasos |

---

## 2. Tipografía

| Propiedad | Valor |
|---|---|
| **Fuente** | Inter (Google Fonts) |
| **Peso titular principal** | 800 (extrabold) |
| **Peso subtítulos de sección** | 800 |
| **Peso títulos de tarjetas** | 700 |
| **Peso navegación y etiquetas** | 500–600 |
| **Peso cuerpo** | 400–500 |
| **Letter-spacing titulares** | `-0.025em` a `-0.03em` (ligeramente condensado) |
| **Tamaño titular hero** | `clamp(2.2rem, 5vw, 3.5rem)` — responsivo |
| **Tamaño subtítulos de sección** | `clamp(1.6rem, 3vw, 2.25rem)` — responsivo |

> **Regla general:** Cuanto más grande e importante el elemento, más peso tipográfico se le aplica. El texto informativo siempre es más ligero y en colores slate para no competir con los titulares.

---

## 3. Secciones y Cuándo Usarlas

### 3.1 Header (Encabezado)
- **Fondo:** `#0F172A`
- **Posición:** `sticky top-0 z-50` — siempre visible al hacer scroll
- **Contenido:** Logo a la izquierda, navegación central (desktop), botón de registro y login a la derecha
- **Mobile:** Se colapsa en menú hamburguesa con ícono `Menu` / `X` de Lucide
- **Cuándo usarlo:** En todas las páginas. Es el ancla de navegación principal.

### 3.2 Hero Section
- **Fondo:** Degradado oscuro + imagen de fondo con opacidad 10% + blobs de luz (glow)
- **Contenido:** Badge de confianza → Titular → Subtítulo → Tarjeta glassmorphism con CTA
- **Cuándo usarlo:** Solo en la página principal. Debe ser lo primero que el usuario ve.
- **Objetivo:** Captar atención y llevar al usuario a registrarse.

### 3.3 Tarjeta Glassmorphism
- **Estilo:** Fondo `rgba(255,255,255,0.07)`, `backdrop-filter: blur(20px)`, borde `rgba(255,255,255,0.15)`, sombra profunda
- **Contenido:** Texto de social proof ("50,000 fanáticos") + botón CTA primario + 3 micro-beneficios con íconos
- **Cuándo usarlo:** Exclusivamente sobre fondos oscuros o con imagen. El efecto blur solo se aprecia cuando hay contenido detrás.
- **No usar sobre:** Fondos blancos lisos (el efecto sería invisible).

### 3.4 Sección "Cómo Funciona" (Features)
- **Fondo:** Blanco (`bg-white`)
- **Layout:** Grid de 3 columnas en desktop, 1 columna en mobile
- **Contenido por tarjeta:** Número de paso flotante + ícono en contenedor cian + título + descripción
- **Cuándo usarlo:** Para explicar procesos secuenciales de 3 a 5 pasos. Ideal para onboarding o flujos de uso.
- **Efecto hover:** Elevación (`-translate-y-1`) + sombra aumentada.

### 3.5 Sección de Estadísticas (Stats Strip)
- **Fondo:** `#0F172A`
- **Layout:** Grid de 4 columnas (2 en mobile)
- **Contenido:** Cifra con texto degradado azul-cian + etiqueta descriptiva en slate-400
- **Cuándo usarlo:** Para generar confianza con datos reales. Colocar después de explicar cómo funciona el producto.

### 3.6 Sección CTA Final
- **Fondo:** Blanco (`bg-white`)
- **Contenido:** Titular + subtexto + botón primario grande
- **Cuándo usarlo:** Al final de la página, antes del footer, como último empujón para que el usuario se registre.

### 3.7 Footer
- **Fondo:** `#0F172A`
- **Contenido:** Logo + links legales (Privacidad, Términos, Soporte) + copyright
- **Cuándo usarlo:** En todas las páginas, siempre al final.

---

## 4. Componentes de UI

### Botón Primario (CTA)
```
background: linear-gradient(135deg, #2563EB, #1d4ed8)
box-shadow: 0 6px 30px rgba(37,99,235,0.5)
border-radius: 9999px (rounded-full)
padding: px-10 py-4 (grande) / px-5 py-2 (pequeño)
font-weight: 700
```
- **Cuándo usarlo:** Acciones principales: "Registrarse ahora", "Crear cuenta". Máximo 1-2 por sección visible.
- **Efecto hover:** `scale(1.05)` + ícono `ArrowRight` se desplaza a la derecha.

### Botón Secundario (Navegación)
```
text-slate-400 hover:text-white
sin fondo, sin borde
font-weight: 500
```
- **Cuándo usarlo:** Links de navegación en el header, links de menor jerarquía como "Iniciar sesión".

### Badge / Etiqueta
```
bg-white/10 border border-white/20
text-[#06B6D4]
rounded-full px-4 py-1.5
font-weight: 600
```
- **Cuándo usarlo:** Sobre fondos oscuros para destacar una categoría, lema o dato de confianza corto. Solo en el hero.

### Tarjeta de Característica
```
bg-white
border: 1px solid #f1f5f9
border-radius: rounded-2xl
padding: p-8
box-shadow: 0 2px 20px rgba(15,23,42,0.05)
hover: shadow-2xl + -translate-y-1
```
- **Cuándo usarlo:** Para presentar 3 características o pasos de forma visual y ordenada. Siempre en grupos de 3.

### Contenedor de Ícono
```
w-20 h-20
background: rgba(6,182,212,0.08)
border-radius: rounded-2xl
ícono: w-9 h-9 text-[#06B6D4] strokeWidth={1.5}
hover: bg-[#06B6D4]/20
```
- **Cuándo usarlo:** Siempre acompañando a un título y descripción dentro de una tarjeta. No usar íconos sueltos sin este contenedor.

### Número de Paso
```
w-8 h-8 rounded-full
background: linear-gradient(135deg, #2563EB, #06B6D4)
position: absolute -top-4 left-1/2 -translate-x-1/2
font-weight: 800 text-white text-xs
```
- **Cuándo usarlo:** Sobre tarjetas que representan pasos secuenciales. Siempre en conjunto con la línea conectora.

### Línea Conectora entre Pasos
```
hidden md:block absolute top-10
height: 1px
background: gradient from-[#2563EB] via-[#06B6D4] to-[#2563EB]
opacity: 30%
```
- **Cuándo usarlo:** Solo en desktop, dentro del grid de 3 pasos, para reforzar la secuencialidad.

---

## 5. Íconos (Lucide React)

| Ícono | Componente Lucide | Uso en la app |
|---|---|---|
| Rayo / Logo | `Zap` | Logo de la marca en header y footer |
| Menú | `Menu` | Botón de menú hamburguesa en mobile |
| Cerrar | `X` | Botón para cerrar el menú mobile |
| Flecha derecha | `ArrowRight` | Indicador de acción en botones CTA |
| Escudo | `Shield` | Micro-beneficio "Pago seguro" |
| Estrella | `Star` | Badge del hero y micro-beneficio "Sin comisiones" |
| Persona + | `UserPlus` | Paso 1: "Crea tu cuenta" |
| Calendario | `Calendar` | Paso 2: "Selecciona tu evento" |
| Boleto | `Ticket` | Paso 3: "Obtén tu entrada" |

> **Regla general de íconos:**
> - En tarjetas de características: `strokeWidth={1.5}` (aspecto ligero y limpio)
> - En el logo y botones: `strokeWidth={2}` o `2.5` (más visible en tamaño pequeño)
> - Color en contenedores cian: siempre `text-[#06B6D4]`
> - Color sobre fondo oscuro: `text-white`

---

## 6. Espaciado y Layout

| Elemento | Valor |
|---|---|
| **Ancho máximo contenedor** | `max-w-7xl` (header/footer) · `max-w-6xl` (features) · `max-w-5xl` (hero/CTA) |
| **Padding horizontal** | `px-6` mobile · `px-10` desktop (`sm:px-10`) |
| **Padding vertical secciones** | `py-32` (secciones principales) · `py-16` (stats strip) · `py-12` (footer) |
| **Gap entre tarjetas** | `gap-8` |
| **Espacio interno tarjeta** | `p-8` |

---

## 7. Efectos y Animaciones

| Efecto | CSS / Clase | Cuándo usar |
|---|---|---|
| **Glassmorphism** | `backdrop-filter: blur(20px)` + fondo semitransparente + borde blanco translúcido | Solo sobre fondos oscuros o con imagen. Tarjeta del hero. |
| **Hover elevación** | `hover:-translate-y-1 hover:shadow-2xl` | Tarjetas de características |
| **Hover escala** | `hover:scale-105` | Botones CTA principales |
| **Hover deslizamiento ícono** | `group-hover:translate-x-1` en `ArrowRight` | Botones con ícono de flecha |
| **Transición suave** | `transition-all duration-300` | Todos los elementos interactivos |
| **Glow blobs** | `radial-gradient` con opacidad 15-20% | Solo en el fondo del hero para dar profundidad |

---

## 8. Reglas Generales de Diseño

1. **Espacios en blanco generosos:** Las secciones claras usan `py-32` para respirar. No sobrecargar con información.
2. **Jerarquía oscuro/claro alternada:** Hero (oscuro) → Features (claro) → Stats (oscuro) → CTA (claro) → Footer (oscuro). Esta alternancia guía el scroll.
3. **Un solo CTA por sección:** No colocar dos botones de registro en la misma sección visible.
4. **Glassmorphism solo sobre oscuro:** El efecto blur necesita contraste detrás para ser visible.
5. **Degradado de texto solo en palabras clave:** Nunca aplicar el gradiente azul-cian a párrafos enteros, solo a 2-4 palabras de alto impacto.
6. **Mobile-first:** Todos los grids empiezan en 1 columna y escalan (`md:grid-cols-3`). La navegación se colapsa con hamburguesa.
7. **Consistencia de bordes redondeados:** Botones → `rounded-full`. Tarjetas → `rounded-2xl`. Logo → `rounded-lg`.