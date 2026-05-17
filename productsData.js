// ========================
// PRODUCT DATA (5 produits d'automatisme)
// Descriptions commerciales en français
// Chaque produit a 3 images (chemins à remplir)
// ========================

const products = [
    {
        id: 1,
        name: "S7-200",
        description: "Automate compact Siemens, idéal pour les petites applications d'automatisme. Solution économique et fiable pour le contrôle de machines simples, avec une programmation intuitive et une maintenance réduite.",
        images: ["products/S7200-1.webp", "products/S7200-2.jpg"]
    },
    {
        id: 2,
        name: "S7-300",
        description: "Automate modulaire polyvalent, référence de l'industrie pour les applications de complexité moyenne. Offre une extensibilité remarquable et une compatibilité avec de nombreux modules d'entrées/sorties.",
        images: ["products/S7300-1.jpg", "products/S7300-2.webp"]
    },
    {
        id: 3,
        name: "S7-1200",
        description: "Automate nouvelle génération compact et connecté. Intègre Ethernet, une programmation simplifiée via TIA Portal et des fonctionnalités avancées pour l'industrie 4.0. Idéal pour les applications petites à moyennes exigeant réactivité et flexibilité.",
        images: ["products/S71200-1.webp", "products/S71200-3.webp"]
    },
    {
        id: 4,
        name: "S7-1500",
        description: "Automate haut de gamme pour applications critiques et complexes. Rapidité de traitement exceptionnelle, cybersécurité renforcée, traçabilité complète et intégration parfaite dans l'écosystème TIA Portal. La solution premium pour les installations exigeantes.",
        images: ["products/S71500-1.png", "products/S71500-2.jpg"]
    },
    {
        id: 5,
        name: "KTP",
        description: "Interface opérateur tactile hautement intuitive. Parfait pour la supervision et le contrôle de vos automates. Écran clair, configuration simple et robustesse industrielle pour un usage intensif en atelier.",
        images: ["products/KTP1.webp", "products/KTP2.jpg", "products/KTP3.jpg"]
    }
];