/* =========================================
   Praecellens – Shared JS
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Load header ── */
  const headerPlaceholder = document.getElementById('header-placeholder');
  if (headerPlaceholder) {
    fetch('header.html')
      .then(res => res.text())
      .then(html => {
        headerPlaceholder.innerHTML = html;
        // Highlight active nav link
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        document.querySelectorAll('.nav-link').forEach(link => {
          if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
          }
        });
      })
      .catch(console.error);
  }

  /* ── Mobile menu ── */
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileNav     = document.getElementById('mobileNav');

  if (mobileMenuBtn && mobileNav) {
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = !mobileNav.classList.contains('hidden');
      mobileNav.classList.toggle('hidden');
      mobileMenuBtn.innerHTML = isOpen
        ? '<i class="fas fa-bars"></i>'
        : '<i class="fas fa-times"></i>';
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!mobileMenuBtn.contains(e.target) && !mobileNav.contains(e.target)) {
        mobileNav.classList.add('hidden');
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
      }
    });
  }

  /* ── Scroll-triggered reveal ── */
  const revealEls = document.querySelectorAll('[data-reveal]');

  if (revealEls.length) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealEls.forEach(el => revealObserver.observe(el));
  }

  /* ── Header shrink on scroll ── */
  const header = document.querySelector('header');
  if (header) {
    const onScroll = () => {
      header.classList.toggle('scrolled', window.scrollY > 60);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ── Smooth scroll for anchor links ── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
      if (mobileNav && !mobileNav.classList.contains('hidden')) {
        mobileNav.classList.add('hidden');
        if (mobileMenuBtn) mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
      }
    });
  });

  /* ── Projects filter ── */
  const filterBtns  = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card[data-category]');

  if (filterBtns.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const val = btn.dataset.filter;
        projectCards.forEach(card => {
          card.style.display = (val === 'all' || card.dataset.category === val) ? '' : 'none';
        });
      });
    });
    // Default: activate "All"
    const allBtn = document.querySelector('.filter-btn[data-filter="all"]');
    if (allBtn) allBtn.classList.add('active');
  }

  /* ── Contact form ── */
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const submitBtn = this.querySelector('button[type="submit"]');
      const original  = submitBtn.innerHTML;
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Sending…';
      submitBtn.disabled = true;
      setTimeout(() => {
        submitBtn.innerHTML = '<i class="fas fa-check mr-2"></i> Message Sent!';
        submitBtn.classList.add('sent');
        setTimeout(() => {
          this.reset();
          submitBtn.innerHTML = original;
          submitBtn.disabled  = false;
          submitBtn.classList.remove('sent');
        }, 2500);
      }, 1600);
    });
  }

});