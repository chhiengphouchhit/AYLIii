document.addEventListener('DOMContentLoaded', () => {
  // --- Header Scroll and Menu Logic ---
  const header = document.getElementById('header');
  const logo = document.getElementById('logo');
  const navLinks = document.querySelectorAll('.nav-link');
  const menuButton = document.getElementById('menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  const hamburgerLines = [
    document.getElementById('hamburger-line-1'),
    document.getElementById('hamburger-line-2'),
    document.getElementById('hamburger-line-3'),
  ];
  
  let isMenuOpen = false;

  const setHeaderStyles = (isScrolled, menuOpen) => {
    const active = isScrolled || menuOpen;
    if (active) {
      header.classList.add('bg-white', 'text-[#002B49]', 'shadow-lg');
      header.classList.remove('bg-transparent', 'text-white');
      logo.classList.add('text-[#002B49]');
      logo.classList.remove('text-white');
      navLinks.forEach(link => {
        link.classList.add('text-[#002B49]');
        link.classList.remove('text-white');
      });
      hamburgerLines.forEach(line => {
        line.classList.add('bg-[#002B49]');
        line.classList.remove('bg-white');
      });
    } else {
      header.classList.remove('bg-white', 'text-[#002B49]', 'shadow-lg');
      header.classList.add('bg-transparent', 'text-white');
      logo.classList.remove('text-[#002B49]');
      logo.classList.add('text-white');
      navLinks.forEach(link => {
        link.classList.remove('text-[#002B49]');
        link.classList.add('text-white');
      });
      hamburgerLines.forEach(line => {
        line.classList.remove('bg-[#002B49]');
        line.classList.add('bg-white');
      });
    }
  };

  const toggleMenu = () => {
    isMenuOpen = !isMenuOpen;
    menuButton.setAttribute('aria-expanded', isMenuOpen);
    
    // Animate hamburger icon
    hamburgerLines[0].classList.toggle('rotate-45', isMenuOpen);
    hamburgerLines[0].classList.toggle('translate-y-[10px]', isMenuOpen);
    hamburgerLines[1].classList.toggle('opacity-0', isMenuOpen);
    hamburgerLines[2].classList.toggle('-rotate-45', isMenuOpen);
    hamburgerLines[2].classList.toggle('-translate-y-[10px]', isMenuOpen);

    // Show/hide mobile menu
    if (isMenuOpen) {
        mobileMenu.classList.remove('max-h-0', 'opacity-0');
        mobileMenu.classList.add('max-h-96', 'opacity-100');
    } else {
        mobileMenu.classList.add('max-h-0', 'opacity-0');
        mobileMenu.classList.remove('max-h-96', 'opacity-100');
    }

    // Update header style
    setHeaderStyles(window.scrollY > 50, isMenuOpen);
  };

  menuButton.addEventListener('click', toggleMenu);
  
  // Close menu when a link is clicked
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        if(isMenuOpen) {
            toggleMenu();
        }
    });
  });

  // --- Scroll-to-Top Button Logic ---
  const scrollToTopButton = document.getElementById('scroll-to-top');

  const handleScroll = () => {
    const isScrolled = window.scrollY > 50;
    // Header style update on scroll
    setHeaderStyles(isScrolled, isMenuOpen);

    // Scroll-to-top button visibility
    if (window.scrollY > 300) {
      scrollToTopButton.classList.remove('hidden');
    } else {
      scrollToTopButton.classList.add('hidden');
    }
  };
  
  window.addEventListener('scroll', handleScroll);

  scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });

  // Update copyright year
  const yearElement = document.querySelector('footer p.text-xs');
  if (yearElement) {
    yearElement.textContent = `© ${new Date().getFullYear()} AYLA. All Rights Reserved.`;
  }
});
