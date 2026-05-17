// ========================
// CAROUSEL MODULE
// Crée un carrousel avec 3 images, défilement auto toutes les 3 secondes
// Pause au survol, reprise automatique
// ========================

function buildCarousel(imagesArray, productId) {
    const carouselDiv = document.createElement('div');
    carouselDiv.className = 'carousel';
    
    const slidesContainer = document.createElement('div');
    slidesContainer.className = 'slides-container';
    
    const slides = [];
    
    // Création des 3 slides images
    for (let i = 0; i < imagesArray.length; i++) {
        const img = document.createElement('img');
        img.src = imagesArray[i] || "";
        img.alt = `Vue produit ${i+1}`;
        img.classList.add('slide');
        if (i === 0) img.classList.add('active');
        slidesContainer.appendChild(img);
        slides.push(img);
    }
    
    // Création des indicateurs (dots)
    const indicatorsDiv = document.createElement('div');
    indicatorsDiv.className = 'carousel-indicators';
    const indicators = [];
    for (let i = 0; i < imagesArray.length; i++) {
        const dot = document.createElement('div');
        dot.classList.add('indicator-dot');
        if (i === 0) dot.classList.add('active-dot');
        indicatorsDiv.appendChild(dot);
        indicators.push(dot);
    }
    
    carouselDiv.appendChild(slidesContainer);
    carouselDiv.appendChild(indicatorsDiv);
    
    let currentIndex = 0;
    let intervalId = null;
    
    function showSlide(index) {
        const total = slides.length;
        let safeIndex = (index + total) % total;
        slides.forEach((slide, idx) => {
            if (idx === safeIndex) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });
        indicators.forEach((dot, idx) => {
            if (idx === safeIndex) {
                dot.classList.add('active-dot');
            } else {
                dot.classList.remove('active-dot');
            }
        });
        currentIndex = safeIndex;
    }
    
    function nextSlide() {
        showSlide(currentIndex + 1);
    }
    
    function startAutoRotate() {
        if (intervalId) clearInterval(intervalId);
        intervalId = setInterval(() => {
            nextSlide();
        }, 3000); // 3 secondes exactement
    }
    
    function stopAutoRotate() {
        if (intervalId) {
            clearInterval(intervalId);
            intervalId = null;
        }
    }
    
    // Pause au survol du carrousel
    carouselDiv.addEventListener('mouseenter', () => {
        stopAutoRotate();
    });
    carouselDiv.addEventListener('mouseleave', () => {
        startAutoRotate();
    });
    
    startAutoRotate();
    
    // Nettoyage pour éviter les fuites mémoire
    carouselDiv.cleanup = () => {
        if (intervalId) clearInterval(intervalId);
    };
    
    return { carouselDiv, cleanup: carouselDiv.cleanup };
}