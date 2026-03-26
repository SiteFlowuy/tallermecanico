lucide.createIcons();

document.addEventListener('DOMContentLoaded', () => {

  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('navbar-scrolled', window.scrollY > 50);
  });

  gsap.registerPlugin(ScrollTrigger);

  gsap.from('#hero-content', {
    y: 60, opacity: 0, duration: 1.2, ease: 'power3.out', delay: 0.2
  });

  gsap.utils.toArray('.service-card').forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top bottom-=80',
        toggleActions: 'play none none none'
      },
      y: 40, opacity: 0, duration: 0.6, ease: 'power2.out', delay: i * 0.08
    });
  });

  gsap.utils.toArray('.section-header').forEach(el => {
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: 'top bottom-=60',
        toggleActions: 'play none none none'
      },
      y: 30, opacity: 0, duration: 0.7, ease: 'power2.out'
    });
  });

  const waFloat = document.getElementById('whatsapp-float');
  if (waFloat) {
    window.addEventListener('scroll', function show() {
      if (window.scrollY >= 400) {
        waFloat.style.opacity = '1';
        waFloat.style.transition = 'opacity 0.5s ease';
        window.removeEventListener('scroll', show);
      }
    }, { passive: true });
  }

  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      menuToggle.classList.toggle('open');
    });
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        menuToggle.classList.remove('open');
      });
    });
  }

  const form = document.getElementById('booking-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value;
      const phone = document.getElementById('phone').value;
      const vehicle = document.getElementById('vehicle').value;
      const service = document.getElementById('service').value;
      const message = document.getElementById('message').value;
      const subject = encodeURIComponent(`Nuevo Turno: ${service} - ${name}`);
      const body = encodeURIComponent(
        `Nombre: ${name}\nTeléfono: ${phone}\nVehículo: ${vehicle}\nServicio: ${service}\nMensaje: ${message}`
      );
      window.location.href =
        `mailto:contacto@tallerrodrigomolina.com.uy?subject=${subject}&body=${body}`;
      form.reset();
    });
  }

});
