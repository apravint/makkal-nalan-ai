/**
 * Makkal Nalan AI - Citizen Welfare & Schemes Navigator
 * Built for Web & Android Native Bridge Integration
 */

// Comprehensive Database of Verified Welfare Schemes
const SCHEMES_DB = [
    {
        id: "pudhumai-penn",
        category: "students",
        target: "women_student",
        title_en: "Pudhumai Penn Scheme (Higher Education Assurance)",
        title_ta: "புதுமைப் பெண் திட்டம் (மூவலூர் ராமாமிர்தம் அம்மையார் திட்டம்)",
        benefit_en: "₹1,000 per month (Direct Bank Transfer)",
        benefit_ta: "மாதந்தோறும் ₹1,000 வங்கி கணக்கில் நேரடியாக",
        desc_en: "Financial assistance of ₹1,000/month provided to girl students who studied in Government Schools (Classes 6 to 12) until completion of their Degree/Diploma.",
        desc_ta: "அரசுப் பள்ளிகளில் 6 முதல் 12-ஆம் வகுப்பு வரை படித்து உயர்கல்வி பயிலும் மாணவிகளுக்கு பட்டப்படிப்பு முடியும் வரை மாதம் ₹1,000 வழங்கப்படுகிறது.",
        eligibility_en: "Girl students studying in UG / Diploma / ITI courses who completed schooling in TN Govt schools.",
        eligibility_ta: "தமிழக அரசுப் பள்ளிகளில் 6-12 வரை பயின்று கல்லூரி அல்லது பட்டயப்படிப்பில் சேர்ந்த மாணவிகள்.",
        docs: ["Aadhaar Card", "School Transfer Certificate (6-12 Govt School)", "College ID & Bonafide Certificate", "Bank Passbook"],
        apply_url: "https://penkalvi.tn.gov.in",
        min_age: 17, max_age: 25, income_limit: "all"
    },
    {
        id: "tamil-pudhalvan",
        category: "students",
        target: "student",
        title_en: "Tamil Pudhalvan Scheme (Boys Higher Education)",
        title_ta: "தமிழ்ப் புதல்வன் திட்டம்",
        benefit_en: "₹1,000 per month for textbooks & education",
        benefit_ta: "பாடப்புத்தகங்கள் & கல்வி செலவுகளுக்காக மாதம் ₹1,000",
        desc_en: "₹1,000/month provided to male students from Govt schools pursuing higher education (Degree, Engineering, Polytech, ITI).",
        desc_ta: "அரசுப் பள்ளிகளில் படித்து கல்லூரி, பொறியியல், பாலிடெக்னிக் பயிலும் மாணவர்களுக்கு மாதம் ₹1,000 நிதி உதவி.",
        eligibility_en: "Male students studying in college who completed Classes 6 to 12 in TN Govt schools.",
        eligibility_ta: "தமிழக அரசுப் பள்ளிகளில் 6-12 பயின்று கல்லூரி பயிலும் மாணவர்கள்.",
        docs: ["Aadhaar Card", "School TC (Govt School verification)", "College Bonafide", "Bank Passbook"],
        apply_url: "https://tamilpudhalvan.tn.gov.in",
        min_age: 17, max_age: 25, income_limit: "all"
    },
    {
        id: "magalir-urimai",
        category: "women",
        target: "woman_homemaker",
        title_en: "Kalaignar Magalir Urimai Thogai",
        title_ta: "கலைஞர் மகளிர் உரிமைத் திட்டம்",
        benefit_en: "₹1,000 per month for women heads of family",
        benefit_ta: "குடும்பத் தலைவிகளுக்கு மாதம் ₹1,000 உரிமைத் தொகை",
        desc_en: "Recognizing women's unpaid household labor by providing ₹1,000 monthly financial rights entitlement directly to their bank account.",
        desc_ta: "பெண்களின் உழைப்பை அங்கீகரிக்கும் வகையில் தகுதியுள்ள குடும்பத் தலைவிகளுக்கு மாதம் ₹1,000 நேரடியாக வழங்கப்படுகிறது.",
        eligibility_en: "Women head of family aged 21+, annual family income below ₹2.5 Lakhs, electricity usage below 3,600 units/year.",
        eligibility_ta: "21 வயது நிரம்பிய குடும்பத் தலைவிகள், குடும்ப ஆண்டு வருமானம் ₹2.5 லட்சத்திற்குள் இருக்க வேண்டும்.",
        docs: ["Smart Ration Card", "Aadhaar Card", "Aadhaar-linked Bank Passbook", "Electricity Consumer Card"],
        apply_url: "https://kmut.tn.gov.in",
        min_age: 21, max_age: 85, income_limit: "low"
    },
    {
        id: "pm-kisan",
        category: "farmers",
        target: "farmer",
        title_en: "PM Kisan Samman Nidhi Scheme",
        title_ta: "பிரதமர் கிசான் சம்மான் நிதித் திட்டம்",
        benefit_en: "₹6,000 per year (3 installments of ₹2,000)",
        benefit_ta: "ஆண்டுக்கு ₹6,000 (மூன்று தவணைகளில் ₹2,000 வீதம்)",
        desc_en: "Income support scheme to small and marginal farmer families with cultivable landholding to meet farm inputs and domestic needs.",
        desc_ta: "விவசாயிகளுக்கு இடுபொருட்கள் வாங்கவும் முதலீட்டுக்கும் உதவும் வகையில் ஆண்டுக்கு ₹6,000 வங்கி கணக்கில் செலுத்தப்படுகிறது.",
        eligibility_en: "All landholding farmer families with cultivable land registered in their name (subject to exclusion criteria).",
        eligibility_ta: "சொந்த நிலம் உள்ள அனைத்து சிறு மற்றும் குறு விவசாய குடும்பங்கள்.",
        docs: ["Aadhaar Card", "Land Patta / Chitta Records", "Bank Passbook (NPCI linked)"],
        apply_url: "https://pmkisan.gov.in",
        min_age: 18, max_age: 99, income_limit: "all"
    },
    {
        id: "cmchis-health",
        category: "health",
        target: "all",
        title_en: "Chief Minister Comprehensive Health Insurance (CMCHIS)",
        title_ta: "முதல்வரின் விரிவான மருத்துவக் காப்பீட்டுத் திட்டம்",
        benefit_en: "Cashless medical treatment up to ₹5,00,000 / year",
        benefit_ta: "ஆண்டுக்கு ₹5,00,000 வரை கட்டணமில்லா இலவச சிகிச்சை",
        desc_en: "Covers 1,513 medical & surgical procedures in empanelled government and private hospitals across Tamil Nadu.",
        desc_ta: "அரசு மற்றும் தனியார் மருத்துவமனைகளில் 1,513 க்கும் மேற்பட்ட சிகிச்சைகளை முழு இலவசமாக பெறலாம்.",
        eligibility_en: "Families with annual income less than ₹1,20,000 listed in the Smart Ration Card.",
        eligibility_ta: "ஆண்டு வருமானம் ₹1,20,000-க்குள் உள்ள குடும்ப அட்டைதாரர்கள்.",
        docs: ["Smart Family Ration Card", "Aadhaar Cards of all members", "Income Certificate from Village Administrative Officer (VAO)"],
        apply_url: "https://cmchistn.com",
        min_age: 0, max_age: 99, income_limit: "low"
    },
    {
        id: "oap-pension",
        category: "seniors",
        target: "retired",
        title_en: "Indira Gandhi Old Age Pension Scheme (OAP)",
        title_ta: "முதியோர் ஓய்வூதியத் திட்டம் (OAP)",
        benefit_en: "₹1,200 per month pension + free rice & clothes",
        benefit_ta: "மாதம் ₹1,200 ஓய்வூதியம் + இலவச அரிசி & வேட்டி/சேலை",
        desc_en: "Social security pension for destitute senior citizens who do not have financial support or property.",
        desc_ta: "ஆதரவற்ற மற்றும் வறுமைக் கோட்டிற்கு கீழ் உள்ள மூத்த குடிமக்களுக்கு மாதாந்திர ஓய்வூதியம் வழங்கப்படுகிறது.",
        eligibility_en: "Senior citizens aged 60 and above living below poverty line without sufficient family support.",
        eligibility_ta: "60 வயது அல்லது அதற்கு மேற்பட்ட வறுமைக் கோட்டிற்கு கீழ் உள்ள முதியவர்கள்.",
        docs: ["Aadhaar Card", "Age Proof (Voter ID or Birth Cert)", "Ration Card", "Bank Account Passbook"],
        apply_url: "https://tnesevai.tn.gov.in",
        min_age: 60, max_age: 99, income_limit: "bpl"
    },
    {
        id: "mudra-loan",
        category: "business",
        target: "business",
        title_en: "Pradhan Mantri MUDRA Yojana (Business Loan)",
        title_ta: "பிரதமர் முத்ரா சிறுவணிகக் கடன் திட்டம்",
        benefit_en: "Collateral-free loans from ₹50,000 to ₹10,00,000",
        benefit_ta: "பிணையில்லா கடன் ₹50,000 முதல் ₹10,00,000 வரை",
        desc_en: "Provides easy, collateral-free micro-credit to small shopkeepers, artisans, fruit/vegetable vendors, and service enterprises.",
        desc_ta: "சிறு வணிகர்கள், பெட்டிக்கடை, காய்கறி வியாபாரிகள் தங்கள் தொழிலை தொடங்க பிணையில்லா முத்ரா கடன்.",
        eligibility_en: "Any Indian citizen with a viable business plan for a non-farm income generating activity.",
        eligibility_ta: "சிறு தொழில் அல்லது வியாபாரம் செய்யும் அனைத்து இந்திய குடிமக்கள்.",
        docs: ["Aadhaar Card & PAN Card", "Business Address Proof", "6 Months Bank Statement", "Quotation / Machinery details"],
        apply_url: "https://udyamimitra.in",
        min_age: 18, max_age: 65, income_limit: "all"
    },
    {
        id: "scst-scholarship",
        category: "students",
        target: "student",
        title_en: "Post-Matric Scholarship for SC/ST/SCC Students",
        title_ta: "ஆதிதிராவிடர் & பழங்குடியினர் போஸ்ட்-மெட்ரிக் கல்வி உதவித்தொகை",
        benefit_en: "100% Tuition Fee Waiver + Maintenance Allowance",
        benefit_ta: "முழு கல்விக் கட்டண விலக்கு + மாதாந்திர பராமரிப்பு உதவி",
        desc_en: "Covers full non-refundable tuition fees for professional courses (Engg, Medical, Arts) for SC, ST, and converted Christian students.",
        desc_ta: "பொறியியல், மருத்துவம் மற்றும் கலைக் கல்லூரிகளில் பயிலும் மாணவர்களுக்கு கல்விக் கட்டணம் முழுமையாக அரசு ஏற்கும்.",
        eligibility_en: "SC/ST/SCC students studying in recognized colleges with parental income below ₹2.5 Lakhs/year.",
        eligibility_ta: "ஆண்டு வருமானம் ₹2.5 லட்சத்திற்குள் உள்ள கல்லூரி பயிலும் SC/ST/SCC மாணவர்கள்.",
        docs: ["Community Certificate", "Income Certificate", "Aadhaar Card", "10th & 12th Marksheets", "Bank Passbook"],
        apply_url: "https://scholarships.gov.in",
        min_age: 15, max_age: 30, income_limit: "low"
    }
];

// Language Dictionary
const I18N = {
    en: {
        brandSubtitle: "Citizen Welfare & Schemes Navigator",
        langLabel: "தமிழ்",
        tab_schemes: "All Schemes",
        tab_quiz: "Eligibility Check",
        tab_docs: "Documents Prep",
        tab_centers: "e-Sevai Centers",
        search_placeholder: "Search schemes by name, keyword or benefit...",
        cat_all: "All Categories",
        cat_students: "🎓 Students & Education",
        cat_farmers: "🌾 Farmers & Agriculture",
        cat_women: "👩 Women & Mothers",
        cat_seniors: "👴 Senior Citizens & Pension",
        cat_health: "🏥 Healthcare & Insurance",
        cat_business: "💼 Small Business & Mudra",
        quiz_title: "Instant Scheme Eligibility Checker",
        quiz_sub: "Answer 4 quick questions to find every government scheme you are entitled to",
        quiz_q_age: "1. What is your age group?",
        quiz_q_occupation: "2. What is your occupation / status?",
        quiz_q_income: "3. Annual Family Income:",
        quiz_q_location: "4. Residence State:",
        quiz_btn: "Find My Eligible Schemes",
        docs_title: "Citizen Document Readiness Checklist",
        docs_sub: "Check off the documents you have ready. These are required for 95% of all schemes.",
        centers_title: "Where & How to Apply",
        centers_sub: "Locate your nearest service touchpoints & official government helplines",
        modal_benefit: "Direct Benefit / Assistance:",
        modal_details: "Overview:",
        modal_eligibility: "Eligibility Criteria:",
        modal_docs: "Required Documents:",
        btn_listen: "Listen",
        btn_apply: "Apply Online ➔",
        view_details: "View Details & Apply ➔"
    },
    ta: {
        brandSubtitle: "மக்கள் நலன் & அரசுத் திட்டங்கள் வழிகாட்டி",
        langLabel: "English",
        tab_schemes: "அனைத்து திட்டங்கள்",
        tab_quiz: "தகுதி கண்டறிதல்",
        tab_docs: "ஆவணங்கள் சரிபார்ப்பு",
        tab_centers: "இ-சேவை மையங்கள்",
        search_placeholder: "திட்டத்தின் பெயர் அல்லது பயன்களைத் தேடுங்கள்...",
        cat_all: "அனைத்தும்",
        cat_students: "🎓 மாணவர்கள் & கல்வி",
        cat_farmers: "🌾 விவசாயிகள் & வேளாண்மை",
        cat_women: "👩 மகளிர் நலன்",
        cat_seniors: "👴 முதியோர் ஓய்வூதியம்",
        cat_health: "🏥 மருத்துவக் காப்பீடு",
        cat_business: "💼 சிறுதொழில் முத்ரா கடன்",
        quiz_title: "உங்களுக்கான அரசுத் திட்டங்களை கண்டறியுங்கள்",
        quiz_sub: "4 எளிய கேள்விகளுக்கு பதிலளித்து நீங்கள் பெறக்கூடிய அனைத்து சலுகைகளையும் தெரிந்து கொள்ளுங்கள்",
        quiz_q_age: "1. உங்கள் வயது வரம்பு:",
        quiz_q_occupation: "2. உங்கள் தொழில் / நிலை:",
        quiz_q_income: "3. குடும்ப ஆண்டு வருமானம்:",
        quiz_q_location: "4. வசிப்பிடம்:",
        quiz_btn: "என் திட்டங்களை காட்டு",
        docs_title: "முக்கிய ஆவணங்கள் சரிபார்ப்பு",
        docs_sub: "உங்களிடம் உள்ள சான்றிதழ்களை டிக் செய்யுங்கள். 95% திட்டங்களுக்கு இவையே தேவை.",
        centers_title: "எங்கே & எப்படி விண்ணப்பிப்பது?",
        centers_sub: "உங்கள் அருகிலுள்ள அரசு உதவி மையங்கள் மற்றும் உதவி எண்கள்",
        modal_benefit: "நேரடி உதவித் தொகை / சலுகை:",
        modal_details: "திட்ட விவரம்:",
        modal_eligibility: "தகுதி வரம்பு:",
        modal_docs: "தேவையான ஆவணங்கள்:",
        btn_listen: "வாசித்துக் காட்டு",
        btn_apply: "விண்ணப்பிக்கவும் ➔",
        view_details: "முழு விவரம் & விண்ணப்பம் ➔"
    }
};

let currentLang = localStorage.getItem("makkal_lang") || "en";
let currentCategory = "all";
let activeModalScheme = null;

document.addEventListener("DOMContentLoaded", () => {
    initLanguage();
    initTheme();
    initTabs();
    initSchemesList();
    initFiltersAndSearch();
    initQuiz();
    initDocsChecklist();
    initModal();
});

/* Language Handling */
function initLanguage() {
    const langBtn = document.getElementById("langToggleBtn");
    updateLanguage(currentLang);

    langBtn.addEventListener("click", () => {
        currentLang = currentLang === "en" ? "ta" : "en";
        localStorage.setItem("makkal_lang", currentLang);
        updateLanguage(currentLang);
        renderSchemes(getFilteredSchemes());
        triggerHaptic();
    });
}

function updateLanguage(lang) {
    const texts = I18N[lang];
    document.getElementById("langLabel").textContent = texts.langLabel;
    document.getElementById("brandSubtitle").textContent = texts.brandSubtitle;

    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (texts[key]) el.textContent = texts[key];
    });

    document.querySelectorAll("[data-i18n-ph]").forEach(el => {
        const key = el.getAttribute("data-i18n-ph");
        if (texts[key]) el.placeholder = texts[key];
    });
}

/* Theme Handler */
function initTheme() {
    const btn = document.getElementById("themeToggleBtn");
    const theme = localStorage.getItem("makkal_theme") || "dark";
    document.body.setAttribute("data-theme", theme);

    btn.addEventListener("click", () => {
        const isDark = document.body.getAttribute("data-theme") === "dark";
        const next = isDark ? "light" : "dark";
        document.body.setAttribute("data-theme", next);
        localStorage.setItem("makkal_theme", next);
        triggerHaptic();
    });
}

/* Tab Navigation */
function initTabs() {
    const navBtns = document.querySelectorAll(".nav-btn");
    const panes = document.querySelectorAll(".tab-pane");

    navBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const target = btn.getAttribute("data-tab");
            navBtns.forEach(b => b.classList.remove("active"));
            panes.forEach(p => p.classList.remove("active"));

            btn.classList.add("active");
            document.getElementById(`${target}Tab`).classList.add("active");
            triggerHaptic();
        });
    });
}

/* Schemes List & Rendering */
function initSchemesList() {
    renderSchemes(SCHEMES_DB);
}

function renderSchemes(schemes, containerId = "schemesGrid") {
    const container = document.getElementById(containerId);
    container.innerHTML = "";

    if (schemes.length === 0) {
        container.innerHTML = `<div class="card" style="grid-column: span 2; text-align: center; color: var(--text-secondary);"><p>No matching schemes found. Try a different search keyword or category.</p></div>`;
        return;
    }

    schemes.forEach(s => {
        const title = currentLang === "ta" ? s.title_ta : s.title_en;
        const benefit = currentLang === "ta" ? s.benefit_ta : s.benefit_en;
        const desc = currentLang === "ta" ? s.desc_ta : s.desc_en;
        const viewTxt = I18N[currentLang].view_details;

        const card = document.createElement("div");
        card.className = "scheme-card";
        card.innerHTML = `
            <div>
                <div class="scheme-header">
                    <h3 class="scheme-title">${title}</h3>
                    <span class="tag">${s.category.toUpperCase()}</span>
                </div>
                <div class="benefit-badge">✨ ${benefit}</div>
                <p class="scheme-desc">${desc}</p>
            </div>
            <div class="scheme-footer">
                <span class="view-details-link">${viewTxt}</span>
            </div>
        `;

        card.addEventListener("click", () => {
            openSchemeModal(s);
            triggerHaptic();
        });

        container.appendChild(card);
    });
}

function getFilteredSchemes() {
    const query = document.getElementById("schemeSearchInput").value.toLowerCase().trim();
    return SCHEMES_DB.filter(s => {
        const matchesCat = currentCategory === "all" || s.category === currentCategory;
        const matchesQuery = !query || 
            s.title_en.toLowerCase().includes(query) || 
            s.title_ta.toLowerCase().includes(query) ||
            s.benefit_en.toLowerCase().includes(query) ||
            s.desc_en.toLowerCase().includes(query);
        return matchesCat && matchesQuery;
    });
}

/* Filters and Search */
function initFiltersAndSearch() {
    const searchInput = document.getElementById("schemeSearchInput");
    const pills = document.querySelectorAll(".pill");

    searchInput.addEventListener("input", () => {
        renderSchemes(getFilteredSchemes());
    });

    pills.forEach(pill => {
        pill.addEventListener("click", () => {
            pills.forEach(p => p.classList.remove("active"));
            pill.classList.add("active");
            currentCategory = pill.getAttribute("data-category");
            renderSchemes(getFilteredSchemes());
            triggerHaptic();
        });
    });
}

/* Eligibility Checker Quiz */
function initQuiz() {
    const checkBtn = document.getElementById("checkEligibilityBtn");
    const resultsContainer = document.getElementById("eligibilityResults");
    const resultsCountText = document.getElementById("resultsCountText");

    checkBtn.addEventListener("click", () => {
        const age = document.getElementById("quizAge").value;
        const occupation = document.getElementById("quizOccupation").value;
        const income = document.getElementById("quizIncome").value;

        const matched = SCHEMES_DB.filter(s => {
            // Occupation Match
            if (s.target === "student" && occupation !== "student") return false;
            if (s.target === "farmer" && occupation !== "farmer") return false;
            if (s.target === "business" && occupation !== "business") return false;
            if (s.target === "retired" && occupation !== "retired" && age !== "senior") return false;

            // Income Match
            if (s.income_limit === "bpl" && income !== "bpl") return false;
            if (s.income_limit === "low" && income === "high") return false;

            return true;
        });

        resultsContainer.classList.remove("hidden");
        resultsCountText.textContent = currentLang === "ta" 
            ? `நீங்கள் பெறக்கூடிய ${matched.length} அரசுத் திட்டங்கள் கண்டறியப்பட்டன`
            : `Found ${matched.length} Government Schemes Matching Your Profile`;

        renderSchemes(matched, "eligibleSchemesGrid");
        resultsContainer.scrollIntoView({ behavior: "smooth" });
        triggerHaptic();
    });
}

/* Document Prep Checklist */
function initDocsChecklist() {
    const checkboxes = document.querySelectorAll(".doc-check");
    const summaryText = document.getElementById("docsReadyText");
    const progressBar = document.getElementById("docsProgressBar");

    // Load saved checklist
    checkboxes.forEach(cb => {
        cb.checked = localStorage.getItem(`makkal_doc_${cb.id}`) === "true";
        cb.addEventListener("change", () => {
            localStorage.setItem(`makkal_doc_${cb.id}`, cb.checked);
            updateDocsProgress();
            triggerHaptic();
        });
    });

    function updateDocsProgress() {
        const total = checkboxes.length;
        const ready = Array.from(checkboxes).filter(c => c.checked).length;
        const pct = Math.round((ready / total) * 100);

        progressBar.style.width = `${pct}%`;
        summaryText.textContent = currentLang === "ta" 
            ? `${total} ஆவணங்களில் ${ready} ஆவணங்கள் தயாராக உள்ளன (${pct}%)`
            : `${ready} of ${total} Documents Ready (${pct}%)`;
    }

    updateDocsProgress();
}

/* Modal and Speech Synthesis */
function initModal() {
    const modal = document.getElementById("schemeModal");
    const closeBtn = document.getElementById("closeModalBtn");
    const speakBtn = document.getElementById("speakModalBtn");
    const whatsappBtn = document.getElementById("shareModalWhatsappBtn");

    closeBtn.addEventListener("click", () => modal.classList.add("hidden"));
    modal.addEventListener("click", (e) => {
        if (e.target === modal) modal.classList.add("hidden");
    });

    speakBtn.addEventListener("click", () => {
        if (!activeModalScheme) return;
        const textToRead = currentLang === "ta"
            ? `${activeModalScheme.title_ta}. சலுகை: ${activeModalScheme.benefit_ta}. ${activeModalScheme.desc_ta}`
            : `${activeModalScheme.title_en}. Benefit: ${activeModalScheme.benefit_en}. ${activeModalScheme.desc_en}`;

        speakText(textToRead, currentLang === "ta" ? "ta-IN" : "en-IN");
        triggerHaptic();
    });

    whatsappBtn.addEventListener("click", () => {
        if (!activeModalScheme) return;
        const title = currentLang === "ta" ? activeModalScheme.title_ta : activeModalScheme.title_en;
        const benefit = currentLang === "ta" ? activeModalScheme.benefit_ta : activeModalScheme.benefit_en;
        const link = activeModalScheme.apply_url;
        const shareText = `*${title}*\n💰 ${benefit}\n🔗 Apply here: ${link}\n\nShared via Makkal Nalan AI - Citizen Schemes Navigator`;

        window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`, "_blank");
    });
}

function openSchemeModal(s) {
    activeModalScheme = s;
    const modal = document.getElementById("schemeModal");
    const title = currentLang === "ta" ? s.title_ta : s.title_en;
    const benefit = currentLang === "ta" ? s.benefit_ta : s.benefit_en;
    const desc = currentLang === "ta" ? s.desc_ta : s.desc_en;
    const elig = currentLang === "ta" ? s.eligibility_ta : s.eligibility_en;

    document.getElementById("modalCategoryTag").textContent = s.category.toUpperCase();
    document.getElementById("modalTitle").textContent = title;
    document.getElementById("modalBenefit").textContent = benefit;
    document.getElementById("modalDesc").textContent = desc;
    document.getElementById("modalEligibility").textContent = elig;
    document.getElementById("modalApplyLink").href = s.apply_url;

    const docsList = document.getElementById("modalDocsList");
    docsList.innerHTML = "";
    s.docs.forEach(d => {
        const li = document.createElement("li");
        li.textContent = d;
        docsList.appendChild(li);
    });

    modal.classList.remove("hidden");
}

/* Text-to-Speech Web API */
function speakText(text, langCode) {
    if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = langCode;
        utterance.rate = 0.95;
        window.speechSynthesis.speak(utterance);
    } else {
        alert("Text-to-speech not supported on this browser.");
    }
}

/* Haptics & Android Bridge */
function triggerHaptic() {
    if (window.AndroidBridge && window.AndroidBridge.vibrate) {
        window.AndroidBridge.vibrate(30);
    }
}
