// ========================
// MAIN APPLICATION
// Initialise le catalogue et gère l'affichage des cartes
// Version responsive avec Bootstrap
// ========================

// Attendre que le DOM soit complètement chargé
document.addEventListener('DOMContentLoaded', () => {
    const gridContainer = document.getElementById('productGrid');
    const carouselCleanups = [];
    
    // Vérifier que les données produits sont disponibles
    if (typeof products === 'undefined') {
        console.error("Les données produits ne sont pas chargées (productsData.js)");
        gridContainer.innerHTML = '<div class="alert alert-danger m-3">Erreur: Données produits manquantes</div>';
        return;
    }
    
    // Générer chaque carte produit
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'sweep-card';
        
        // Construire le carrousel avec les images du produit
        const { carouselDiv, cleanup } = buildCarousel(product.images, product.id);
        carouselCleanups.push(cleanup);
        
        // Panneau d'information (titre + description)
        const infoDiv = document.createElement('div');
        infoDiv.className = 'product-info';
        
        const titleElem = document.createElement('h3');
        titleElem.className = 'product-title';
        titleElem.textContent = product.name;
        
        const descElem = document.createElement('p');
        descElem.className = 'product-description';
        descElem.textContent = product.description;
        
        const divider = document.createElement('hr');
        divider.className = 'info-divider';
        
        infoDiv.appendChild(titleElem);
        infoDiv.appendChild(descElem);
        infoDiv.appendChild(divider);
        
        card.appendChild(carouselDiv);
        card.appendChild(infoDiv);
        
        // Clic sur la carte → afficher SweetAlert avec coordonnées
        card.addEventListener('click', (e) => {
            e.stopPropagation();
            handleCardClick(product.name);
        });
        
        gridContainer.appendChild(card);
    });
    
    // Gestion du logo : fallback si l'image ne charge pas
    const logoImg = document.getElementById('brandLogo');
    if (logoImg) {
        logoImg.onerror = function() {
            this.style.display = 'none';
            const parent = this.parentElement;
            if (parent && !parent.querySelector('.fallback-logo-text')) {
                const fallbackSpan = document.createElement('span');
                fallbackSpan.className = 'fallback-logo-text';
                fallbackSpan.style.fontSize = '1.8rem';
                fallbackSpan.style.fontWeight = '600';
                fallbackSpan.style.letterSpacing = '-0.5px';
                fallbackSpan.style.background = 'linear-gradient(135deg, #1E3C4C, #2B5C6F)';
                fallbackSpan.style.webkitBackgroundClip = 'text';
                fallbackSpan.style.backgroundClip = 'text';
                fallbackSpan.style.color = 'transparent';
                fallbackSpan.innerText = '⚙️ AUTOMATISME INDUSTRIEL';
                parent.appendChild(fallbackSpan);
            }
        };
        
        // Si l'image n'existe pas ou est vide, afficher le fallback
        if (!logoImg.src || logoImg.src === window.location.href || logoImg.src === "") {
            logoImg.style.display = 'none';
            const parent = logoImg.parentElement;
            if (parent && !parent.querySelector('.fallback-logo-text')) {
                const fallbackSpan = document.createElement('span');
                fallbackSpan.className = 'fallback-logo-text';
                fallbackSpan.style.fontSize = '1.6rem';
                fallbackSpan.style.fontWeight = '600';
                fallbackSpan.style.letterSpacing = '-0.5px';
                fallbackSpan.style.background = 'linear-gradient(135deg, #1E3C4C, #2B5C6F)';
                fallbackSpan.style.webkitBackgroundClip = 'text';
                fallbackSpan.style.backgroundClip = 'text';
                fallbackSpan.style.color = 'transparent';
                fallbackSpan.innerHTML = '⚙️ AUTOMATE PRO';
                parent.appendChild(fallbackSpan);
            }
        }
    }
    
    // Nettoyage des intervalles avant de quitter la page
    window.addEventListener('beforeunload', () => {
        carouselCleanups.forEach(cleanup => {
            if (typeof cleanup === 'function') cleanup();
        });
    });
    
    // Message d'information dans la console
    console.log("✅ Catalogue chargé avec succès (version responsive)");
    console.log("📦 5 produits - 3 images par produit (15 images au total)");
    console.log("🎠 Défilement automatique toutes les 3 secondes - Pause au survol");
    console.log("📞 Clic sur une carte → affiche les coordonnées de contact");
    
    // Ajout d'une tooltip flottante responsive
    const tooltipMessage = document.createElement('div');
    tooltipMessage.className = 'floating-tooltip';
    tooltipMessage.innerHTML = '🎯 Cliquez sur une carte → devis gratuit • Défilement auto 3s';
    document.body.appendChild(tooltipMessage);
    
    setTimeout(() => {
        tooltipMessage.style.opacity = '0.9';
        tooltipMessage.style.transition = 'opacity 0.8s';
    }, 2000);
});