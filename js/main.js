/* ========================================
   MAIN.JS – Advanced Portfolio Interactions
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {
  const page = document.body.dataset.page;

  // ====== LOADER ======
  const loader = document.getElementById('loader');
  window.addEventListener('load', () => {
    setTimeout(() => loader.classList.add('hidden'), 1300);
  });
  // Fallback
  setTimeout(() => loader.classList.add('hidden'), 3000);

  // ====== CUSTOM CURSOR ======
  const cursor = document.getElementById('cursor');
  const follower = document.getElementById('cursor-follower');
  let mouseX = 0, mouseY = 0, followerX = 0, followerY = 0;

  if (window.matchMedia('(pointer: fine)').matches) {
    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.left = mouseX - 4 + 'px';
      cursor.style.top = mouseY - 4 + 'px';
    });

    function animateFollower() {
      followerX += (mouseX - followerX) * 0.12;
      followerY += (mouseY - followerY) * 0.12;
      follower.style.left = followerX - 18 + 'px';
      follower.style.top = followerY - 18 + 'px';
      requestAnimationFrame(animateFollower);
    }
    animateFollower();

    // Cursor hover states
    const hoverTargets = 'a, button, .btn, .nav-link, .magnetic, .tilt-card, .proj-filter, .contact-channel, input, textarea';
    document.querySelectorAll(hoverTargets).forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.classList.add('hover');
        follower.classList.add('hover');
      });
      el.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover');
        follower.classList.remove('hover');
      });
    });

    document.addEventListener('mousedown', () => {
      cursor.classList.add('clicking');
      follower.classList.add('clicking');
    });
    document.addEventListener('mouseup', () => {
      cursor.classList.remove('clicking');
      follower.classList.remove('clicking');
    });
  } else {
    cursor.style.display = 'none';
    follower.style.display = 'none';
  }

  // ====== NAVBAR ======
  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  });

  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    navToggle.classList.toggle('active');
  });

  navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.classList.remove('active');
    });
  });

  // ====== SCROLL PROGRESS ======
  const scrollProgress = document.getElementById('scroll-progress');
  window.addEventListener('scroll', () => {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollHeight > 0 ? (window.scrollY / scrollHeight) * 100 : 0;
    scrollProgress.style.width = progress + '%';
  });

  // ====== PAGE TRANSITIONS ======
  const transition = document.getElementById('page-transition');
  document.querySelectorAll('a[href$=".html"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href && !href.startsWith('http') && !href.startsWith('mailto:') && !link.target) {
        e.preventDefault();
        transition.classList.add('active');
        setTimeout(() => {
          window.location.href = href;
        }, 600);
      }
    });
  });

  // ====== MAGNETIC EFFECT ======
  document.querySelectorAll('.magnetic').forEach(el => {
    const strength = parseInt(el.dataset.strength) || 15;
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      el.style.transform = `translate(${x / strength}px, ${y / strength}px)`;
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform = '';
    });
  });

  // ====== 3D TILT CARDS ======
  document.querySelectorAll('.tilt-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `perspective(800px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) scale3d(1.02, 1.02, 1.02)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.transition = 'transform 0.5s ease';
      setTimeout(() => card.style.transition = '', 500);
    });
  });

  // ====== REVEAL ON SCROLL ======
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = parseInt(entry.target.dataset.delay) || 0;
        setTimeout(() => entry.target.classList.add('visible'), delay);
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

  document.querySelectorAll('.reveal-up').forEach(el => revealObserver.observe(el));

  // ====== COUNTER ANIMATION ======
  function animateCounters() {
    document.querySelectorAll('.stat-number').forEach(counter => {
      const target = parseInt(counter.dataset.target);
      if (!target || counter.dataset.animated) return;
      counter.dataset.animated = 'true';
      const duration = 2000;
      const start = performance.now();

      function update(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
        counter.textContent = Math.floor(eased * target);
        if (progress < 1) requestAnimationFrame(update);
        else counter.textContent = target;
      }
      requestAnimationFrame(update);
    });
  }

  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounters();
        statsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  const statsEl = document.querySelector('.hero-stats');
  if (statsEl) statsObserver.observe(statsEl);

  // ====== PARTICLE CANVAS (Home) ======
  if (page === 'home') {
    const canvas = document.getElementById('particle-canvas');
    if (canvas) {
      const ctx = canvas.getContext('2d');
      let particles = [];
      let w, h;

      function resize() {
        w = canvas.width = canvas.offsetWidth;
        h = canvas.height = canvas.offsetHeight;
      }
      resize();
      window.addEventListener('resize', resize);

      class Particle {
        constructor() {
          this.reset();
        }
        reset() {
          this.x = Math.random() * w;
          this.y = Math.random() * h;
          this.size = Math.random() * 2 + 0.5;
          this.speedX = (Math.random() - 0.5) * 0.4;
          this.speedY = (Math.random() - 0.5) * 0.4;
          this.opacity = Math.random() * 0.4 + 0.1;
        }
        update() {
          this.x += this.speedX;
          this.y += this.speedY;
          if (this.x < 0 || this.x > w) this.speedX *= -1;
          if (this.y < 0 || this.y > h) this.speedY *= -1;
        }
        draw() {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(129, 140, 248, ${this.opacity})`;
          ctx.fill();
        }
      }

      const count = Math.min(80, Math.floor(w * h / 15000));
      for (let i = 0; i < count; i++) particles.push(new Particle());

      function drawLines() {
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 140) {
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.strokeStyle = `rgba(99, 102, 241, ${0.06 * (1 - dist / 140)})`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        }
      }

      function animate() {
        ctx.clearRect(0, 0, w, h);
        particles.forEach(p => { p.update(); p.draw(); });
        drawLines();
        requestAnimationFrame(animate);
      }
      animate();
    }

    // Typing effect
    const roles = [
      'Agentic AI Systems',
      'Multi-Agent Platforms',
      'RAG Pipelines',
      'Intelligent Document AI',
      'LLM-Powered Automation',
      'Cloud-Native AI Solutions'
    ];
    const roleEl = document.getElementById('hero-role');
    if (roleEl) {
      let roleIdx = 0, charIdx = 0, deleting = false, speed = 80;

      function typeRole() {
        const current = roles[roleIdx];
        if (!deleting) {
          roleEl.textContent = current.substring(0, charIdx + 1);
          charIdx++;
          if (charIdx === current.length) { deleting = true; speed = 2200; }
          else speed = 55 + Math.random() * 35;
        } else {
          roleEl.textContent = current.substring(0, charIdx - 1);
          charIdx--;
          if (charIdx === 0) { deleting = false; roleIdx = (roleIdx + 1) % roles.length; speed = 350; }
          else speed = 25;
        }
        setTimeout(typeRole, speed);
      }
      setTimeout(typeRole, 1800);
    }

    // Mouse glow on featured cards
    document.querySelectorAll('.featured-card').forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--gx', `${e.clientX - rect.left}px`);
        card.style.setProperty('--gy', `${e.clientY - rect.top}px`);
      });
    });
  }

  // ====== ABOUT PAGE ======
  if (page === 'about') {
    // Terminal animation
    const output = document.getElementById('terminal-output');
    if (output) {
      const jsonContent = `{
  <span class="t-key">"name"</span>: <span class="t-string">"Ajeethkumar M."</span>,
  <span class="t-key">"role"</span>: <span class="t-string">"Agentic AI Engineer"</span>,
  <span class="t-key">"location"</span>: <span class="t-string">"Chennai, India"</span>,
  <span class="t-key">"experience"</span>: <span class="t-number">5</span>,
  <span class="t-key">"focus"</span>: [
    <span class="t-string">"Multi-Agent Systems"</span>,
    <span class="t-string">"LLM Orchestration"</span>,
    <span class="t-string">"RAG Pipelines"</span>,
    <span class="t-string">"Document AI"</span>
  ],
  <span class="t-key">"cloud"</span>: [<span class="t-string">"AWS"</span>, <span class="t-string">"Azure"</span>],
  <span class="t-key">"tools"</span>: [<span class="t-string">"LangGraph"</span>, <span class="t-string">"Bedrock"</span>, <span class="t-string">"OpenClaw"</span>],
  <span class="t-key">"education"</span>: <span class="t-string">"M.Sc AI (2026)"</span>,
  <span class="t-key">"passion"</span>: <span class="t-string">"Building autonomous AI"</span>
}`;
      // Type character by character
      const plain = jsonContent.replace(/<[^>]*>/g, '');
      let idx = 0;

      function typeTerminal() {
        if (idx <= plain.length) {
          // Build HTML up to current plain-text position
          let htmlIdx = 0, plainIdx = 0, result = '';
          while (plainIdx < idx && htmlIdx < jsonContent.length) {
            if (jsonContent[htmlIdx] === '<') {
              const closeIdx = jsonContent.indexOf('>', htmlIdx);
              result += jsonContent.substring(htmlIdx, closeIdx + 1);
              htmlIdx = closeIdx + 1;
            } else {
              result += jsonContent[htmlIdx];
              htmlIdx++;
              plainIdx++;
            }
          }
          // Close any open tags
          const openTags = (result.match(/<span[^>]*>/g) || []);
          const closeTags = (result.match(/<\/span>/g) || []);
          for (let t = 0; t < openTags.length - closeTags.length; t++) {
            result += '</span>';
          }
          output.innerHTML = result;
          idx++;
          setTimeout(typeTerminal, 12 + Math.random() * 18);
        }
      }

      // Start after a delay
      const terminalObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setTimeout(typeTerminal, 800);
            terminalObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.3 });
      terminalObserver.observe(output.closest('.terminal'));
    }

    // Skill bars animation
    const skillObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.skill-bar-item').forEach((item, i) => {
            setTimeout(() => {
              const level = item.dataset.level;
              item.querySelector('.skill-bar-fill').style.width = level + '%';
              item.classList.add('animated');
            }, i * 100);
          });
          skillObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    document.querySelectorAll('.skill-bars').forEach(bars => skillObserver.observe(bars));

    // Radar chart
    const radarCanvas = document.getElementById('skill-radar');
    if (radarCanvas) {
      const rctx = radarCanvas.getContext('2d');
      const size = 400;
      const center = size / 2;
      const maxR = 150;

      const skills = [
        { label: 'Agentic AI', value: 95 },
        { label: 'Cloud', value: 85 },
        { label: 'Python', value: 95 },
        { label: 'RAG/LLM', value: 90 },
        { label: 'DevOps', value: 80 },
        { label: 'Doc AI', value: 88 }
      ];

      function drawRadar(progress) {
        rctx.clearRect(0, 0, size, size);
        const n = skills.length;
        const angleStep = (Math.PI * 2) / n;

        // Grid circles
        for (let ring = 1; ring <= 4; ring++) {
          const r = (maxR / 4) * ring;
          rctx.beginPath();
          for (let i = 0; i <= n; i++) {
            const angle = i * angleStep - Math.PI / 2;
            const x = center + Math.cos(angle) * r;
            const y = center + Math.sin(angle) * r;
            if (i === 0) rctx.moveTo(x, y);
            else rctx.lineTo(x, y);
          }
          rctx.closePath();
          rctx.strokeStyle = 'rgba(255,255,255,0.06)';
          rctx.lineWidth = 1;
          rctx.stroke();
        }

        // Axis lines
        for (let i = 0; i < n; i++) {
          const angle = i * angleStep - Math.PI / 2;
          rctx.beginPath();
          rctx.moveTo(center, center);
          rctx.lineTo(center + Math.cos(angle) * maxR, center + Math.sin(angle) * maxR);
          rctx.strokeStyle = 'rgba(255,255,255,0.04)';
          rctx.stroke();
        }

        // Data polygon
        rctx.beginPath();
        for (let i = 0; i < n; i++) {
          const angle = i * angleStep - Math.PI / 2;
          const r = (skills[i].value / 100) * maxR * progress;
          const x = center + Math.cos(angle) * r;
          const y = center + Math.sin(angle) * r;
          if (i === 0) rctx.moveTo(x, y);
          else rctx.lineTo(x, y);
        }
        rctx.closePath();

        const gradient = rctx.createLinearGradient(center - maxR, center, center + maxR, center);
        gradient.addColorStop(0, 'rgba(99, 102, 241, 0.25)');
        gradient.addColorStop(1, 'rgba(139, 92, 246, 0.15)');
        rctx.fillStyle = gradient;
        rctx.fill();
        rctx.strokeStyle = 'rgba(99, 102, 241, 0.7)';
        rctx.lineWidth = 2;
        rctx.stroke();

        // Data points
        for (let i = 0; i < n; i++) {
          const angle = i * angleStep - Math.PI / 2;
          const r = (skills[i].value / 100) * maxR * progress;
          const x = center + Math.cos(angle) * r;
          const y = center + Math.sin(angle) * r;
          rctx.beginPath();
          rctx.arc(x, y, 4, 0, Math.PI * 2);
          rctx.fillStyle = '#818cf8';
          rctx.fill();
          rctx.beginPath();
          rctx.arc(x, y, 6, 0, Math.PI * 2);
          rctx.strokeStyle = 'rgba(129, 140, 248, 0.3)';
          rctx.lineWidth = 2;
          rctx.stroke();
        }

        // Labels
        rctx.font = '500 12px Inter, sans-serif';
        rctx.fillStyle = '#9d9db8';
        rctx.textAlign = 'center';
        for (let i = 0; i < n; i++) {
          const angle = i * angleStep - Math.PI / 2;
          const labelR = maxR + 28;
          const x = center + Math.cos(angle) * labelR;
          const y = center + Math.sin(angle) * labelR + 4;
          rctx.fillText(skills[i].label, x, y);
        }
      }

      // Animate radar
      const radarObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            let progress = 0;
            function animateRadar() {
              progress += 0.02;
              if (progress > 1) progress = 1;
              drawRadar(progress);
              if (progress < 1) requestAnimationFrame(animateRadar);
            }
            animateRadar();
            radarObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.3 });
      radarObserver.observe(radarCanvas);
    }
  }

  // ====== PROJECTS PAGE ======
  if (page === 'projects') {
    const filters = document.querySelectorAll('.proj-filter');
    const cards = document.querySelectorAll('.proj-card');

    filters.forEach(btn => {
      btn.addEventListener('click', () => {
        filters.forEach(f => f.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.filter;

        cards.forEach(card => {
          if (filter === 'all' || card.dataset.category.includes(filter)) {
            card.classList.remove('hidden');
            card.style.animation = 'fadeInUp 0.4s ease forwards';
          } else {
            card.classList.add('hidden');
          }
        });
      });
    });

    // Mouse glow on project cards
    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const glow = card.querySelector('.proj-card-glow');
        if (glow) {
          const rect = card.getBoundingClientRect();
          glow.style.left = (e.clientX - rect.left) + 'px';
          glow.style.top = (e.clientY - rect.top) + 'px';
        }
      });
    });
  }

  // ====== CONTACT PAGE ======
  if (page === 'contact') {
    const form = document.getElementById('contact-form');
    const success = document.getElementById('form-success');

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        form.style.display = 'none';
        success.classList.add('show');
      });
    }
  }
});
