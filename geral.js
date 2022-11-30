window.addEventListener("scroll", onScroll);

onScroll();



function onScroll() {
  showMenu()
  activateMenuAtCurrentSection(Início);
  activateMenuAtCurrentSection(SobreMim);
  activateMenuAtCurrentSection(Habilidades);
  activateMenuAtCurrentSection(Projetos);
}


function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2;

  const sectionTop = section.offsetTop;
  const sectionHeight = section.offsetHeight;
  const sectionTopReachOrPassedTargetline = targetLine >= sectionTop;


  const sectionEndsAt = sectionTop + sectionHeight;
  const sectionEndPassedTargetline = sectionEndsAt <= targetLine;


  const sectionBoundaries =
    sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline;

  const sectionId = section.getAttribute("id");

  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`);



  menuElement.classList.remove("active");



  if (sectionBoundaries) {
    menuElement.classList.add("active")
    menuElement.classList.remove("opaco")
  } else {
    menuElement.classList.add("opaco")
  }

}


function showMenu() {
  menu = document.getElementById("header")

  if (scrollY < 660) {
    menu.classList.add("headerHide")
    menu.classList.remove("headerTransition")

  } else {
    menu.classList.remove("headerHide")
    menu.classList.add("headerTransition")

  }
}



ScrollReveal({ reset: true });
ScrollReveal().reveal('.area2H1', { duration: 500, distance: '100%' });
ScrollReveal().reveal('.area3H1', { duration: 500, distance: '100%' });
ScrollReveal().reveal('.area4H1', { duration: 500, distance: '100%' });


