const toggle = document.querySelector<HTMLButtonElement>('.menu-toggle');
const navigation = document.querySelector<HTMLElement>('.main-nav');

if (toggle && navigation) {
  const closeMenu = () => {
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Abrir menu');
    navigation.classList.remove('is-open');
  };

  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'Abrir menu' : 'Fechar menu');
    navigation.classList.toggle('is-open', !isOpen);
  });

  navigation.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });
  document.addEventListener('click', (event) => {
    if (!navigation.contains(event.target as Node) && !toggle.contains(event.target as Node)) closeMenu();
  });
}

const progress = document.querySelector<HTMLElement>('.scroll-progress');
if (progress) {
  let pending = false;
  const updateProgress = () => {
    const available = document.documentElement.scrollHeight - window.innerHeight;
    const fraction = available > 0 ? window.scrollY / available : 0;
    progress.style.transform = 'scaleX(' + Math.min(1, Math.max(0, fraction)) + ')';
    pending = false;
  };
  window.addEventListener('scroll', () => {
    if (!pending) {
      pending = true;
      requestAnimationFrame(updateProgress);
    }
  }, { passive: true });
  updateProgress();
}

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if (!reduceMotion.matches && 'IntersectionObserver' in window) {
  const revealItems = document.querySelectorAll<HTMLElement>('[data-reveal]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -40px 0px', threshold: .08 });
  revealItems.forEach((item) => observer.observe(item));
  document.documentElement.classList.add('effects-ready');
}

if (!reduceMotion.matches && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
  const ring = document.querySelector<HTMLElement>('.cursor-ring');
  if (ring) {
    let targetX = -100;
    let targetY = -100;
    let currentX = -100;
    let currentY = -100;
    let running = false;
    let initialized = false;

    const animate = () => {
      currentX += (targetX - currentX) * .18;
      currentY += (targetY - currentY) * .18;
      ring.style.transform = 'translate3d(' + currentX + 'px,' + currentY + 'px,0)';
      if (Math.abs(targetX - currentX) + Math.abs(targetY - currentY) > .25) {
        requestAnimationFrame(animate);
      } else {
        running = false;
      }
    };

    window.addEventListener('pointermove', (event) => {
      targetX = event.clientX;
      targetY = event.clientY;
      if (!initialized) {
        currentX = targetX;
        currentY = targetY;
        initialized = true;
      }
      ring.classList.add('is-visible');
      if (!running) {
        running = true;
        requestAnimationFrame(animate);
      }
      ring.classList.toggle('is-hover', Boolean((event.target as Element).closest('a, button')));
    }, { passive: true });
    document.addEventListener('pointerleave', () => {
      ring.classList.remove('is-visible');
    });
  }
}
