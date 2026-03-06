const openMenu = document.querySelector('.mobile-menu')
const closeMenu = document.querySelector('.mobile-close-icon')
const mobileMenuSection = document.querySelector('.mobile-menu-section')
const body = document.body
const arrowBtns = document.querySelectorAll('.arrow-btn');

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
