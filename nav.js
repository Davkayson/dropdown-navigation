// Select all navigation items that have dropdowns
const navItems = document.querySelectorAll('.nav-item');

navItems.forEach(item => {
  const trigger = item.querySelector('.nav-trigger');

  trigger.addEventListener('click', (e) => {
    // 1. Prevent click from bubbling up
    e.stopPropagation();

    // 2. Close other open menus
    navItems.forEach(otherItem => {
      if (otherItem !== item) {
        otherItem.classList.remove('active');
      }
    });

    // 3. Toggle the clicked menu
    item.classList.toggle('active');
  });
});

// Close menus if user clicks anywhere else on the screen
document.addEventListener('click', () => {
  navItems.forEach(item => item.classList.remove('active'));
});