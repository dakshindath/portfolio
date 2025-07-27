// Smooth scrolling for navigation links
export function initSmoothScrolling() {
  // Get all anchor links that start with #
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      console.log('Smooth scroll clicked:', targetId); // Debug log
      
      if (targetSection) {
        // Calculate offset to account for any fixed headers
        const offsetTop = targetSection.offsetTop - 20;
        
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
        
        console.log('Scrolling to:', offsetTop); // Debug log
      } else {
        console.log('Target section not found:', targetId); // Debug log
      }
    });
  });
  
  console.log('Smooth scrolling initialized for', links.length, 'links'); // Debug log
}

export default initSmoothScrolling;
