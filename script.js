const openMenu = document.querySelector('.mobile-menu')
const closeMenu = document.querySelector('.mobile-close-icon')
const mobileMenuSection = document.querySelector('.mobile-menu-section')
const body = document.body
const arrowBtns = document.querySelectorAll('.arrow-btn');
const navItems = document.querySelectorAll('.desktop-nav-item');

navItems.forEach(item => {
  const trigger = item.querySelector('.desktop-label-row');

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


const query = window.matchMedia('(min-width: 576px)');

function handleMobileChange(e) {
  // Check if the media query is true
  if (e.matches) {
    // Logic for small screens
    openMenu.style.display = 'none';
    mobileMenuSection.style = 'none'
  } else {
    openMenu.style.display = 'flex'
    mobileMenuSection.style = 'flex'
  }
}


// 1. Register the listener
query.addEventListener('change', handleMobileChange);

// 2. Initial check (run the function once on page load)
handleMobileChange(query);


openMenu.addEventListener('click', () => {
  openMenu.style.display = 'none';
  closeMenu.style.display = 'flex';
  mobileMenuSection.style.display = "flex";
  body.style.overflow = "hidden";
})

closeMenu.addEventListener('click', () => {
  closeMenu.style.display = 'none';
  openMenu.style.display = "block";
  mobileMenuSection.style.display = "none";
  body.style.height = "auto";
  body.style.removeProperty('overflow');
})

arrowBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('active');

    const targetId = btn.getAttribute('data-target');
    const menu = document.getElementById(targetId);

    menu.classList.toggle('show');
  })
});
