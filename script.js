window.addEventListener('DOMContentLoaded', () => {
    
    // 1. SMART SCROLL FADE SYSTEM FOR FLOATING NAV
    const nav = document.querySelector('.floating-nav');
    let isScrolling;

    window.addEventListener('scroll', () => {
        if (nav) {
            nav.classList.add('nav-hidden');
        }
        window.clearTimeout(isScrolling);
        isScrolling = setTimeout(() => {
            if (nav) {
                nav.classList.remove('nav-hidden');
            }
        }, 250);
    });

    // 2. LIVE PHILIPPINES TIME (PHT) SYSTEM
    const clockElement = document.getElementById('pht-time');
    
    function updatePHTClock() {
        if (!clockElement) return;
        const now = new Date();
        const phtString = now.toLocaleTimeString('en-US', {
            timeZone: 'Asia/Manila',
            hour12: true,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
        clockElement.textContent = phtString;
    }
    updatePHTClock();
    setInterval(updatePHTClock, 1000);

    // 3. MOBILE MENU HAMBURGER TOGGLE
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');

    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        });

        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                mobileMenu.classList.remove('active');
            });
        });
    }

    // 4. POPUP MODAL SYSTEM FOR VIDEOS
    const serviceCards = document.querySelectorAll('.service-card');
    const videoModal = document.getElementById('videoModal');
    const modalVideo = document.getElementById('modalVideo');
    const closeModal = document.getElementById('closeModal');

    if (serviceCards && videoModal && modalVideo && closeModal) {
        serviceCards.forEach(card => {
            card.addEventListener('click', () => {
                const videoId = card.getAttribute('data-video');
                if (videoId && videoId !== "MODELING_ID_HERE") {
                    modalVideo.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
                    videoModal.classList.add('active');
                }
            });
        });

        closeModal.addEventListener('click', () => {
            videoModal.classList.remove('active');
            modalVideo.src = '';
        });

        videoModal.addEventListener('click', (e) => {
            if (e.target === videoModal) {
                videoModal.classList.remove('active');
                modalVideo.src = '';
            }
        });
    }

    // 5. ACTIVE NAVIGATION LINK TRACKING ON SCROLL
    const sections = document.querySelectorAll('section, header');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

});