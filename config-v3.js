// ============================================================
// Pro Love Hub — Global Config
// ============================================================
// 📌 HOW TO USE:
//   1. Edit the values below
//   2. Commit the change to GitHub
//   3. Render auto-deploys in ~1 minute
//   4. Every page (chat.html, members.html, etc.) picks up the new values
// ============================================================

window.PLH_CONFIG = {

    // ============================================================
    // 📱 WHATSAPP NUMBER
    // International format — no + sign, no spaces, no dashes.
    // Kenya example: '254117044510'  (254 + 9-digit number)
    // ============================================================
    WHATSAPP_NUMBER: '254750647193',

    // ============================================================
    // 💬 DEFAULT WHATSAPP MESSAGE
    // Pre-filled text when user taps the "Prefer WhatsApp?" button
    // ============================================================
    WHATSAPP_MESSAGE: "Hi Pro Love Hub, I'd like to book a private connection. I am ready with the required fee",

    // ============================================================
    // 📧 SUPPORT EMAIL
    // Shown in the chat header (non-admin view)
    // ============================================================
    SUPPORT_EMAIL: 'support@prolovehub.com',

    // ============================================================
    // 💵 BOOKING FEE (USD)
    // Base price shown everywhere
    // For Kenya: charged in KES equivalent
    // For others: charged in USD directly
    // ============================================================
    BOOKING_FEE_USD: 12.99,

    // ============================================================
    // 💱 FX RATES (per 1 USD)
    // Used for local currency previews in the country modal
    // Update these when exchange rates shift noticeably
    // ============================================================
    FX_RATES: {
        KES: 129.5,    // Kenyan Shilling
        NGN: 1550,     // Nigerian Naira
        GHS: 15.2,     // Ghanaian Cedi
        ZAR: 18.6,     // South African Rand
        USD: 1
    }

};
