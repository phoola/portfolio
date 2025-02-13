function showSection(sectionId) {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-links a');

  sections.forEach(section => {
    section.classList.remove('active');
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
  });

  document.getElementById(sectionId).classList.add('active');
  document.querySelector(`a[href="#${sectionId}"]`).classList.add('active');
}
