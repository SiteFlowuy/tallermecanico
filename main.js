lucide.createIcons();

document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });

    gsap.registerPlugin(ScrollTrigger);

    gsap.from('#hero-content', {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.2
    });

    gsap.utils.toArray('.service-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top bottom-=100',
                toggleActions: 'play none none none'
            },
            y: 50,
            opacity: 0,
            duration: 0.6,
            ease: 'power2.out',
            delay: i * 0.1
        });
    });

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

            window.location.href = `mailto:contacto@autoservicemvd.com.uy?subject=${subject}&body=${body}`;
            
            form.reset();
        });
    }
});
