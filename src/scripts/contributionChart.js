export function initContributionChart() {
  const contributionGrid = document.querySelector('.contribution-grid');
  
  if (contributionGrid) {
    // Generate 371 squares (53 weeks * 7 days)
    const totalSquares = 371;
    
    for (let i = 0; i < totalSquares; i++) {
      const square = document.createElement('div');
      square.className = 'square';
      
      // Generate contribution levels to approximate 245 total contributions
      // Adjust probabilities to match your GitHub pattern
      const random = Math.random();
      let level;
      
      // More realistic distribution for 245 contributions over 371 days
      if (random < 0.45) level = 0;      // 45% no contribution
      else if (random < 0.75) level = 1; // 30% light contribution (1-2 per day)
      else if (random < 0.90) level = 2; // 15% medium contribution (3-4 per day)
      else if (random < 0.98) level = 3; // 8% high contribution (5-6 per day)
      else level = 4;                    // 2% very high contribution (7+ per day)
      
      square.classList.add(`level-${level}`);
      
      // Add hover effect with contribution count
      const contributionCount = level === 0 ? 0 : 
                               level === 1 ? Math.floor(Math.random() * 2) + 1 :
                               level === 2 ? Math.floor(Math.random() * 2) + 3 :
                               level === 3 ? Math.floor(Math.random() * 2) + 5 :
                               Math.floor(Math.random() * 3) + 7;
      
      square.addEventListener('mouseenter', (e) => {
        e.target.style.transform = 'scale(1.1)';
        e.target.style.transition = 'transform 0.1s ease';
      });
      
      square.addEventListener('mouseleave', (e) => {
        e.target.style.transform = 'scale(1)';
      });
      
      contributionGrid.appendChild(square);
    }
  }
}
