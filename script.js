function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    window.scrollTo({
        top: section.offsetTop - 70, // 70px to offset the fixed header height
        behavior: 'smooth' // Smooth scrolling effect
    });
}
