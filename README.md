# IR Marketing Digital — Sitio Web

**Agencia de marketing digital en Maldonado, Uruguay**

---

## 📁 Estructura del Proyecto

```
ir-marketing/
├── index.html                    # Home
├── pages/
│   └── servicios/
│       ├── seo.html
│       ├── redes-sociales.html
│       ├── email-marketing.html
│       ├── pauta-paga.html
│       ├── branding.html
│       └── diseno-web.html
├── css/
│   └── styles.css               # Estilos globales (todo lo que necesitas)
├── js/
│   └── main.js                  # JavaScript (header dinámico, formulario, analytics)
├── assets/
│   ├── images/                  # Imágenes del sitio
│   ├── icons/                   # Iconos y favicons
│   └── logos/                   # Logos
├── sitemap.xml                  # Para SEO
├── robots.txt                   # Para SEO
└── README.md                    # Este archivo
```

---

## 🎨 Sistema de Diseño

### Paleta de Colores
```
Primario:    #0A0E27 (Azul marino oscuro)
Secundario:  #FF6B35 (Naranja energético)
Acento:      #00D4FF (Cian neon)
Fondo:       #FAFAFA (Blanco casi puro)
Texto:       #1A1A1A (Gris oscuro)
```

### Tipografía
- **Display (Títulos):** Poppins Bold (Google Fonts)
- **Body (Texto):** Inter Regular (Google Fonts)

---

## 🚀 Cómo usar

### 1. Subir a hosting
1. Descargá todos los archivos
2. Subí a tu hosting (via FTP, cPanel, etc.)
3. Apunta tu dominio `agenciair.com` al hosting
4. Verifica que todo cargue correctamente

### 2. Configurar el formulario

**Opción A: FORMSPREE (sin backend, recomendado)**
1. Ve a https://formspree.io/
2. Crea una cuenta
3. Crea un nuevo formulario con email: agenciair@gmail.com
4. Te dará una URL como: `https://formspree.io/f/xyzabc`
5. En `js/main.js`, busca la línea `contactForm.addEventListener` y descomenta la sección de Formspree
6. Reemplaza la URL con la tuya

**Opción B: EMAILJS (sin backend, alternativa)**
1. Ve a https://www.emailjs.com/
2. Crea una cuenta y configura tu email
3. Obtén tu PUBLIC_KEY
4. En `js/main.js`, descomenta la sección de EmailJS
5. Reemplaza PUBLIC_KEY, SERVICE_ID y TEMPLATE_ID con los tuyos

**Opción C: Backend propio (si tienes servidor Node/PHP)**
1. Crea un endpoint `/api/contact` en tu servidor
2. En `js/main.js`, descomenta la sección de API local
3. El endpoint debe recibir POST con: nombre, email, telefono, servicio, mensaje

### 3. Configurar Google Analytics

1. Ve a https://analytics.google.com/
2. Crea una propiedad para agenciair.com
3. Obtén tu ID de medición (algo como: G-XXXXXXXXXX)
4. En `index.html`, reemplaza `G-XXXXXXXXXX` en dos lugares

### 4. Optimizar imágenes

Antes de subir, comprime tus imágenes:
- JPG/PNG: https://tinypng.com/
- Convierte a WebP: https://cloudconvert.com/

En `css/styles.css`, usamos lazy loading automático para imágenes.

---

## 📋 Completar páginas de servicios

Tienes `pages/servicios/seo.html` como plantilla. Para crear las otras:

1. Copia `seo.html` y renómbrala (ej: `redes-sociales.html`)
2. Reemplaza:
   - Título (h1)
   - Descripción en el hero
   - URLs del header y footer (cambia rutas a `../../`)
   - Contenido de cada sección
   - Meta tags (description, keywords, og:)

**URLs esperadas:**
```
/pages/servicios/seo.html
/pages/servicios/redes-sociales.html
/pages/servicios/email-marketing.html
/pages/servicios/pauta-paga.html
/pages/servicios/branding.html
/pages/servicios/diseno-web.html
```

---

## ⚙️ Cambios frecuentes

### Agregar/cambiar colores

En `css/styles.css`, modifica las variables CSS en `:root`:
```css
:root {
  --color-primary: #0A0E27;        /* Cambiar aquí */
  --color-secondary: #FF6B35;      /* Y aquí */
  --color-accent: #00D4FF;         /* Y aquí */
}
```

Esos cambios se aplicarán en todo el sitio automáticamente.

### Cambiar WhatsApp

En `index.html`, busca `wa.me/59898640820` y reemplaza con tu número:
```html
<!-- Ejemplo: +56912345678 (Chile) -->
<a href="https://wa.me/56912345678?text=Hola...">
```

### Cambiar email de contacto

1. `index.html` → busca `agenciair@gmail.com`
2. `css/styles.css` → no hay emails hard-coded
3. `js/main.js` → configura en la sección de formulario

### Agregar nuevas secciones

1. En `index.html`, agrega un nuevo `<section id="nueva-seccion">`
2. Usa las clases CSS existentes: `.section-header`, `.services-grid`, `.service-card`, etc.
3. En `js/main.js`, los scroll events se aplican automáticamente

---

## 🔍 SEO

### Verificaciones básicas

- [ ] Todos los `<title>` tienen keywords principales
- [ ] Todas las páginas tienen `<meta name="description">`
- [ ] Open Graph tags (og:title, og:description, og:image)
- [ ] Schema.org JSON-LD en cada página
- [ ] H1 único por página (solo uno)
- [ ] Jerarquía correcta de headings (H1 > H2 > H3)
- [ ] `sitemap.xml` actualizado
- [ ] `robots.txt` configurado
- [ ] Google Analytics configurado

### Submits

1. **Google Search Console:** https://search.google.com/search-console/
   - Agrega el sitio
   - Sube `sitemap.xml`
   - Verifica dominio

2. **Bing Webmaster Tools:** https://www.bing.com/webmasters/
   - Agrega el sitio
   - Sube `sitemap.xml`

---

## ⚡ Performance

El sitio está optimizado para:
- Carga rápida (HTML/CSS puro)
- Mobile-first responsive
- Lazy loading de imágenes
- CSS crítico inline
- Tipografías optimizadas

### Checkeos

1. **Google PageSpeed Insights:** https://pagespeed.web.dev/
2. **GTmetrix:** https://gtmetrix.com/
3. **WebPageTest:** https://www.webpagetest.org/

Si la velocidad baja:
- Comprime imágenes más
- Usa WebP en lugar de PNG
- Minimiza CSS/JS (opcional, muy bajo impacto aquí)

---

## 🔒 Seguridad

- [ ] HTTPS habilitado (tu hosting debe soportar SSL/TLS)
- [ ] No guardes passwords/APIs en el código
- [ ] Valida formularios en cliente Y servidor
- [ ] Usa CORS si haces fetch desde otra URL

---

## 📞 Contacto

- **Email:** agenciair@gmail.com
- **WhatsApp:** +598 98 640 820
- **Ubicación:** Maldonado, Uruguay

---

## 📝 Notas finales

- Este sitio está diseñado para ser **mantenido por ustedes**
- Toda la lógica es JavaScript vanilla, sin frameworks
- Los comentarios en el código guían qué cambiar
- Para agregar funcionalidades complejas, consideren un framework (Next.js, React, etc.)

---

**Versión:** 1.0  
**Última actualización:** Enero 2025  
**Creado con:** HTML5 + CSS3 + JavaScript Vanilla
