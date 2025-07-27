// Particle Animation for Hero Section
class ParticleSystem {
  constructor() {
    this.canvas = null;
    this.ctx = null;
    this.particles = [];
    this.mousePos = { x: 0, y: 0 };
    this.animationId = null;
    this.init();
  }

  init() {
    this.createCanvas();
    this.setupEventListeners();
    this.createParticles();
    this.animate();
  }

  createCanvas() {
    this.canvas = document.createElement('canvas');
    this.canvas.id = 'particle-canvas';
    this.canvas.style.position = 'absolute';
    this.canvas.style.top = '0';
    this.canvas.style.left = '0';
    this.canvas.style.width = '100%';
    this.canvas.style.height = '100%';
    this.canvas.style.zIndex = '1';
    this.canvas.style.pointerEvents = 'none';
    this.canvas.style.userSelect = 'none';
    
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      heroSection.style.position = 'relative';
      heroSection.appendChild(this.canvas);
      console.log('Particle canvas added to hero section'); // Debug log
    } else {
      console.log('Hero section not found!'); // Debug log
    }

    this.ctx = this.canvas.getContext('2d');
    this.resizeCanvas();
  }

  resizeCanvas() {
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      this.canvas.width = heroSection.offsetWidth;
      this.canvas.height = heroSection.offsetHeight;
    }
  }

  setupEventListeners() {
    window.addEventListener('resize', () => this.resizeCanvas());
    
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      heroSection.addEventListener('mousemove', (e) => {
        const rect = heroSection.getBoundingClientRect();
        this.mousePos.x = e.clientX - rect.left;
        this.mousePos.y = e.clientY - rect.top;
      });
    }
  }

  createParticles() {
    const particleCount = window.innerWidth < 768 ? 50 : 100;
    
    for (let i = 0; i < particleCount; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        z: Math.random() * 1000,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        vz: (Math.random() - 0.5) * 2,
        size: Math.random() * 3 + 1,
        color: this.getRandomColor(),
        alpha: Math.random() * 0.8 + 0.2,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.02 + 0.01
      });
    }
  }

  getRandomColor() {
    const colors = [
      '#00d4aa', // Primary teal
      '#4ac1f7', // Light blue
      '#667eea', // Purple blue
      '#764ba2', // Purple
      '#6c63ff', // Blue purple
      '#17a2b8', // Info blue
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  updateParticles() {
    this.particles.forEach(particle => {
      // Update position
      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.z += particle.vz;

      // Update pulse
      particle.pulse += particle.pulseSpeed;

      // Mouse interaction
      const dx = this.mousePos.x - particle.x;
      const dy = this.mousePos.y - particle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < 100) {
        const force = (100 - distance) / 100;
        particle.vx += dx * force * 0.0001;
        particle.vy += dy * force * 0.0001;
      }

      // Apply some friction
      particle.vx *= 0.99;
      particle.vy *= 0.99;
      particle.vz *= 0.99;

      // Wrap around edges
      if (particle.x < 0) particle.x = this.canvas.width;
      if (particle.x > this.canvas.width) particle.x = 0;
      if (particle.y < 0) particle.y = this.canvas.height;
      if (particle.y > this.canvas.height) particle.y = 0;
      if (particle.z < 0) particle.z = 1000;
      if (particle.z > 1000) particle.z = 0;

      // Random movement
      particle.vx += (Math.random() - 0.5) * 0.01;
      particle.vy += (Math.random() - 0.5) * 0.01;
      particle.vz += (Math.random() - 0.5) * 0.02;
    });
  }

  drawParticles() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.particles.forEach(particle => {
      // 3D effect based on z position
      const scale = (1000 - particle.z) / 1000;
      const size = particle.size * scale;
      const alpha = particle.alpha * scale * (0.5 + 0.5 * Math.sin(particle.pulse));

      this.ctx.save();
      this.ctx.globalAlpha = alpha;
      
      // Create gradient for each particle
      const gradient = this.ctx.createRadialGradient(
        particle.x, particle.y, 0,
        particle.x, particle.y, size * 2
      );
      gradient.addColorStop(0, particle.color);
      gradient.addColorStop(1, 'transparent');
      
      this.ctx.fillStyle = gradient;
      this.ctx.beginPath();
      this.ctx.arc(particle.x, particle.y, size, 0, Math.PI * 2);
      this.ctx.fill();
      
      this.ctx.restore();
    });

    // Draw connections between nearby particles
    this.drawConnections();
  }

  drawConnections() {
    this.particles.forEach((particle, i) => {
      this.particles.slice(i + 1).forEach(otherParticle => {
        const dx = particle.x - otherParticle.x;
        const dy = particle.y - otherParticle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 120) {
          const alpha = (120 - distance) / 120 * 0.2;
          
          this.ctx.save();
          this.ctx.globalAlpha = alpha;
          this.ctx.strokeStyle = '#00d4aa';
          this.ctx.lineWidth = 1;
          this.ctx.beginPath();
          this.ctx.moveTo(particle.x, particle.y);
          this.ctx.lineTo(otherParticle.x, otherParticle.y);
          this.ctx.stroke();
          this.ctx.restore();
        }
      });
    });
  }

  animate() {
    this.updateParticles();
    this.drawParticles();
    this.animationId = requestAnimationFrame(() => this.animate());
  }

  destroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    if (this.canvas && this.canvas.parentNode) {
      this.canvas.parentNode.removeChild(this.canvas);
    }
  }
}

// Initialize particle system when DOM is loaded
export function initParticleSystem() {
  return new ParticleSystem();
}

export default ParticleSystem;
