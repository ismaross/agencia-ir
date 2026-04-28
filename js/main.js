// ============================================
// IR MARKETING DIGITAL — MAIN.JS
// ============================================

// HEADER DINÁMICO (cambia al scrollear)
const header = document.getElementById('header');
const navLinks = document.getElementById('nav-links');
const menuToggle = document.getElementById('menu-toggle');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// MENÚ MOBILE
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// ============================================
// FORMULARIO DE CONTACTO
// FIX: todo el bloque envuelto en guard para evitar crash
// en páginas que no tienen #contact-form (ej: seo.html)
// ============================================

const contactForm = document.getElementById('contact-form');

if (contactForm) {
  const emailInput = document.getElementById('email');
  const telefonoInput = document.getElementById('telefono');

  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = {
      nombre: document.getElementById('nombre').value,
      email: emailInput.value,
      telefono: telefonoInput.value,
      servicio: document.getElementById('servicio').value,
      mensaje: document.getElementById('mensaje').value,
    };

    const submitBtn = contactForm.querySelector('.form-submit');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Enviando...';
    submitBtn.disabled = true;

    try {
      // Opción 1: FORMSPREE (recomendado — sin backend)
      // 1. Crear cuenta en https://formspree.io/
      // 2. Reemplazar TU_FORM_ID con el ID obtenido
      // 3. Descomentar este bloque y eliminar el bloque TEMPORAL de abajo
      /*
      const response = await fetch('https://formspree.io/f/TU_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error('Formspree error');
      showFormSuccess();
      contactForm.reset();
      clearValidationStyles();
      */

      // Opción 2: EMAILJS
      // 1. Crear cuenta en https://www.emailjs.com/
      // 2. Reemplazar TU_PUBLIC_KEY, TU_SERVICE_ID, TU_TEMPLATE_ID
      // 3. Descomentar este bloque y eliminar el bloque TEMPORAL de abajo
      /*
      await emailjs.init('TU_PUBLIC_KEY');
      await emailjs.send('TU_SERVICE_ID', 'TU_TEMPLATE_ID', {
        ...formData,
        to_email: 'agenciair@gmail.com',
      });
      showFormSuccess();
      contactForm.reset();
      clearValidationStyles();
      */

      // TEMPORAL: simulación hasta configurar Formspree o EmailJS
      // IMPORTANTE: reemplazar antes de lanzar a producción
      await new Promise(resolve => setTimeout(resolve, 1000));
      showFormSuccess();
      contactForm.reset();
      clearValidationStyles();

      trackEvent('form_submit', {
        form_name: 'contact_form',
        page_location: window.location.href,
      });

    } catch (error) {
      alert('❌ Error al enviar. Intentá de nuevo o escribinos por WhatsApp.');
    } finally {
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }
  });

  // Validación de email al salir del campo
  emailInput.addEventListener('blur', () => {
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value);
    setFieldError(emailInput, emailInput.value && !isValid);
  });

  // Validación de teléfono al salir del campo
  telefonoInput.addEventListener('blur', () => {
    const isValid = /^[0-9\s\-\+\(\)]{9,}$/.test(telefonoInput.value);
    setFieldError(telefonoInput, telefonoInput.value && !isValid);
  });
}

// Aplica o limpia estilo de error en un campo
function setFieldError(input, hasError) {
  if (hasError) {
    input.style.borderColor = '#E63946';
    input.style.boxShadow = '0 0 0 3px rgba(230, 57, 70, 0.1)';
  } else {
    input.style.borderColor = '';
    input.style.boxShadow = '';
  }
}

// FIX: limpia los estilos inline de validación al resetear el formulario
function clearValidationStyles() {
  if (!contactForm) return;
  contactForm.querySelectorAll('input, textarea, select').forEach(el => {
    el.style.borderColor = '';
    el.style.boxShadow = '';
  });
}

// Muestra mensaje de éxito en el formulario (reemplaza alert())
function showFormSuccess() {
  if (!contactForm) return;
  const existing = contactForm.querySelector('.form-success-message');
  if (existing) existing.remove();

  const msg = document.createElement('p');
  msg.className = 'form-success-message';
  msg.textContent = '✅ ¡Gracias! Te contactaremos en menos de 24hs.';
  contactForm.querySelector('.form-submit').insertAdjacentElement('afterend', msg);

  setTimeout(() => msg.remove(), 6000);
}

// ============================================
// ANIMACIONES AL SCROLL
// ============================================

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px',
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in-up');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.service-card').forEach((card, index) => {
  card.style.opacity = '0';
  card.style.animationDelay = `${index * 50}ms`;
  observer.observe(card);
});

// ============================================
// TRACKING DE CONVERSIONES (Google Analytics 4)
// ============================================

function trackEvent(eventName, eventData = {}) {
  if (typeof gtag !== 'undefined') {
    gtag('event', eventName, eventData);
  }
}

document.querySelectorAll('.btn-primary, .nav-cta').forEach(btn => {
  btn.addEventListener('click', () => {
    trackEvent('cta_click', {
      button_text: btn.textContent.trim(),
      location: btn.closest('section')?.id || 'header',
    });
  });
});

document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
  link.addEventListener('click', () => {
    trackEvent('whatsapp_click', {
      from_location: link.closest('section')?.id || 'floating_button',
    });
  });
});

// ============================================
// SMOOTH SCROLL
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
});

// ============================================
// COPYRIGHT DINÁMICO
// ============================================

document.querySelectorAll('.copyright-year').forEach(el => {
  el.textContent = new Date().getFullYear();
});
