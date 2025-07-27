// Side Navbar Functionality
class SideNavbar {
  constructor() {
    this.init();
  }

  init() {
    this.setupElements();
    this.bindEvents();
    console.log('Side navbar initialized'); // Debug log
  }

  setupElements() {
    this.toggleBtn = document.querySelector('.navbar-toggle-btn');
    this.sidebar = document.querySelector('.side-navbar');
    this.overlay = document.querySelector('.sidebar-overlay');
    this.navLinks = document.querySelectorAll('.side-navbar-links a');
    
    // Debug logs
    console.log('Toggle button found:', this.toggleBtn);
    console.log('Sidebar found:', this.sidebar);
    console.log('Overlay found:', this.overlay);
  }

  bindEvents() {
    // Toggle button click
    if (this.toggleBtn) {
      this.toggleBtn.addEventListener('click', () => {
        console.log('Toggle button clicked'); // Debug log
        this.toggleSidebar();
      });
    }

    // Overlay click to close
    if (this.overlay) {
      this.overlay.addEventListener('click', () => {
        this.closeSidebar();
      });
    }

    // Navigation links click
    this.navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        this.navigateToSection(targetId);
        this.closeSidebar();
      });
    });

    // Click outside to close
    document.addEventListener('click', (e) => {
      const isClickInsideSidebar = this.sidebar.contains(e.target);
      const isClickOnToggleBtn = this.toggleBtn.contains(e.target);
      
      if (!isClickInsideSidebar && !isClickOnToggleBtn && this.sidebar.classList.contains('active')) {
        this.closeSidebar();
      }
    });

    // ESC key to close
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeSidebar();
      }
    });
  }

  toggleSidebar() {
    const isActive = this.sidebar.classList.contains('active');
    
    if (isActive) {
      this.closeSidebar();
    } else {
      this.openSidebar();
    }
  }

  openSidebar() {
    this.sidebar.classList.add('active');
    this.toggleBtn.classList.add('active');
    if (this.overlay) {
      this.overlay.classList.add('active');
    }
  }

  closeSidebar() {
    this.sidebar.classList.remove('active');
    this.toggleBtn.classList.remove('active');
    if (this.overlay) {
      this.overlay.classList.remove('active');
    }
  }

  navigateToSection(targetId) {
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80; // Account for fixed elements
      
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  }
}

export default SideNavbar;
