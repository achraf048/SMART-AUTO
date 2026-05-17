// ========================
// CONTACT & ALERT MODULE
// SweetAlert avec les coordonnées commerciales
// Message orienté VENTE DE PIÈCES (pas installation/réparation)
// ========================

const CONTACT_NAME = "SAS Automate Industrie";
const CONTACT_PHONE = "+33 (0)1 23 45 67 89";
const CONTACT_EMAIL = "contact@automate-industrie.fr";
const CONTACT_WHATSAPP = "+33 6 12 34 56 78";

function handleCardClick(productName) {
    Swal.fire({
        title: `🤖 ${productName} - Disponible`,
        html: `
            <div style="text-align: left; font-size: 1rem; margin-top: 0.5rem;">
                <p style="margin-bottom: 12px; font-weight: 500; color: #1f6e56;">📦 Pièce disponible à la vente</p>
                <p style="margin: 6px 0;"><span style="font-weight:600;">🏢 Société:</span> ${CONTACT_NAME}</p>
                <p style="margin: 6px 0;"><span style="font-weight:600;">📱 Téléphone:</span> <strong style="color:#1f6e56;">${CONTACT_PHONE}</strong></p>
                <p style="margin: 6px 0;"><span style="font-weight:600;">💬 WhatsApp:</span> ${CONTACT_WHATSAPP}</p>
                <p style="margin: 6px 0;"><span style="font-weight:600;">✉️ Email:</span> ${CONTACT_EMAIL}</p>
                <hr style="margin: 16px 0 8px; border-color: #e2e8f0;">
                <p style="font-size: 0.85rem; color:#4b6b7a;">
                    ✅ Pièces neuves et occasions certifiées<br>
                    ✅ Livraison rapide France & Europe<br>
                    ✅ Devis gratuit sous 2h ouvrées
                </p>
            </div>
        `,
        icon: 'info',
        confirmButtonText: 'Demander un devis',
        confirmButtonColor: '#2b6c4e',
        background: '#ffffff',
        backdrop: true,
        customClass: {
            popup: 'rounded-2xl shadow-xl',
            title: 'font-inter',
        }
    });
}