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
    },
    {
        id: "kanavu-illam",
        category: "housing",
        target: "all",
        title_en: "Kalaignar Kanavu Illam Scheme (Rural Concrete Housing)",
        title_ta: "கலைஞர் கனவு இல்லம் திட்டம் (கிராமப்புற கான்கிரீட் வீடு)",
        benefit_en: "₹3,50,000 direct grant to build permanent concrete house",
        benefit_ta: "நிரந்தர கான்கிரீட் வீடு கட்ட ₹3,50,000 நேரடி மானிய உதவி",
        desc_en: "State government initiative to transform rural huts and thatched roof houses into permanent, climate-resilient concrete houses.",
        desc_ta: "கிராமப்புறங்களில் உள்ள குடிசைகளை மாற்றி கான்கிரீட் வீடுகளாக கட்டித் தரும் வரலாற்றுச் சிறப்புமிக்க திட்டம்.",
        eligibility_en: "Rural families owning hut/kutcha house with patta; annual family income under ₹1,20,000.",
        eligibility_ta: "சொந்த பட்டா நிலத்தில் குடிசை வீட்டில் வசிக்கும் ஏழை எளிய கிராமப்புற குடும்பங்கள்.",
        docs: ["Aadhaar Card", "Land Patta / Chitta", "Smart Family Ration Card", "VAO Hut Verification Certificate", "Bank Passbook"],
        apply_url: "https://tnrd.tn.gov.in",
        min_age: 18, max_age: 99, income_limit: "bpl"
    },
    {
        id: "makkalai-thedi",
        category: "health",
        target: "all",
        title_en: "Makkalai Thedi Maruthuvam (Doorstep Healthcare Delivery)",
        title_ta: "மக்களைத் தேடி மருத்துவம் திட்டம்",
        benefit_en: "Free doorstep medical screening & monthly chronic medicine kits",
        benefit_ta: "வீட்டுக்கே வந்து மருத்துவப் பரிசோதனை மற்றும் இலவச மருந்து பெட்டகம்",
        desc_en: "Healthcare workers deliver screening for hypertension, diabetes, and palliative care medicines directly to citizens' doorsteps.",
        desc_ta: "ரத்த அழுத்தம், சர்க்கரை நோய் மற்றும் பிசியோதெரபி மருந்துகளுடன் செவிலியர்கள் நேரடியாக வீட்டு வாசலுக்கே வரும் சேவை.",
        eligibility_en: "All citizens aged 45+ or patients requiring non-communicable disease and palliative care.",
        eligibility_ta: "45 வயதுக்கு மேற்பட்டவர்கள் மற்றும் நாள்பட்ட நோய்களுக்கு சிகிச்சை தேவைப்படும் அனைத்து பொதுமக்கள்.",
        docs: ["Aadhaar Card", "Existing Medical Records / Prescription", "Ration Card"],
        apply_url: "https://nhm.tn.gov.in",
        min_age: 0, max_age: 99, income_limit: "all"
    },
    {
        id: "selvamagal",
        category: "students",
        target: "student",
        title_en: "Selvamagal Semippu Thittam (Sukanya Samriddhi Yojana)",
        title_ta: "செல்வமகள் சேமிப்புத் திட்டம் (சுகன்யா சம்ரிதி யோஜனா)",
        benefit_en: "8.2% Compound Interest + Tax-Free Higher Education & Marriage Fund",
        benefit_ta: "8.2% கூடுதல் வட்டி + வரிவிலக்குடன் கூடிய கல்வி & திருமண நிதி",
        desc_en: "Government-backed high-interest savings scheme by India Post for girl children ensuring guaranteed funds for university education.",
        desc_ta: "பெண் குழந்தைகளின் எதிர்கால உயர் படிப்பு மற்றும் திருமணத்திற்காக தபால் நிலையங்களில் அதிக வட்டி தரும் சேமிப்பு திட்டம்.",
        eligibility_en: "Girl children aged 0 to 10 years opened by legal parents or guardians.",
        eligibility_ta: "10 வயதிற்கு உட்பட்ட பெண் குழந்தைகள் பெயரில் பெற்றோர்கள் தபால் நிலையத்தில் தொடங்கலாம்.",
        docs: ["Child Birth Certificate", "Parent Aadhaar Card", "Address Proof", "Passport Size Photos"],
        apply_url: "https://www.ippbonline.com",
        min_age: 0, max_age: 10, income_limit: "all"
    },
    {
        id: "pm-vishwakarma",
        category: "business",
        target: "business",
        title_en: "PM Vishwakarma Scheme (Traditional Artisans & Craftspeople)",
        title_ta: "பிரதமர் விஸ்வகர்மா திட்டம் (கைவினைக் கலைஞர்கள்)",
        benefit_en: "₹15,000 modern toolkit grant + Subsidized loan up to ₹3,00,000 at 5%",
        benefit_ta: "₹15,000 உபகரண மானியம் + 5% குறைந்த வட்டியில் ₹3,00,000 வரை பிணையில்லா கடன்",
        desc_en: "Supporting 18 traditional trades (carpenters, blacksmiths, goldsmiths, potters, tailors) with modern toolkits, certification, and collateral-free credit.",
        desc_ta: "தச்சர், பொற்கொல்லர், குயவர், தையல்காரர் உள்ளிட்ட 18 பாரம்பரிய கைவினைஞர்களுக்கு நவீன உபகரணம் மற்றும் குறைந்த வட்டிக் கடன்.",
        eligibility_en: "Artisans engaged in one of the 18 specified trades on self-employment basis; minimum age 18.",
        eligibility_ta: "பாரம்பரிய தொழில் அல்லது கைவினை வேலை செய்யும் 18 வயது நிரம்பிய சுயதொழில் தொழிலாளர்கள்.",
        docs: ["Aadhaar Card", "Bank Account Details", "Mobile Number linked with Aadhaar", "Trade Skill Proof"],
        apply_url: "https://pmvishwakarma.gov.in",
        min_age: 18, max_age: 70, income_limit: "all"
    },
    {
        id: "thalikku-thangam",
        category: "women",
        target: "woman",
        title_en: "Moovalur Ramamirtham Marriage Assistance (Thalikku Thangam)",
        title_ta: "திருமண நிதி உதவி மற்றும் தாலிக்கு தங்கம் திட்டம்",
        benefit_en: "₹25,000 / ₹50,000 Cash Assistance + 8 Grams (1 Sovereign) 22K Gold Coin",
        benefit_ta: "₹25,000 / ₹50,000 நிதியுதவி + 8 கிராம் (1 பவுன்) தங்க நாணயம்",
        desc_en: "Financial assistance and pure gold coin provided to poor daughters of underprivileged families at the time of marriage.",
        desc_ta: "ஏழைப் பெண்களின் திருமணத்திற்கு உதவும் வகையில் ரொக்கத் தொகை மற்றும் திருமாங்கல்யத்திற்கான தங்க நாணயம் வழங்கும் திட்டம்.",
        eligibility_en: "Brides aged 18+; educational qualification: 10th pass (₹25k) or Degree/Diploma holder (₹50k); parental annual income under ₹72,000.",
        eligibility_ta: "18 வயது நிரம்பிய மணப்பெண்; 10-ஆம் வகுப்பு அல்லது பட்டப்படிப்பு முடித்திருக்க வேண்டும்; குடும்ப வருமானம் ₹72,000-க்குள் இருக்க வேண்டும்.",
        docs: ["Aadhaar Card", "10th / Degree Marksheet", "Income Certificate", "Wedding Invitation & Hall Proof", "Bank Passbook"],
        apply_url: "https://tnesevai.tn.gov.in",
        min_age: 18, max_age: 40, income_limit: "low"
    },
    {
        id: "pmay-housing",
        category: "housing",
        target: "all",
        title_en: "Pradhan Mantri Awas Yojana (PMAY / Housing for All)",
        title_ta: "பிரதமர் ஆவாஸ் யோஜனா (அனைவருக்கும் வீடு திட்டம்)",
        benefit_en: "₹1,20,000 to ₹2,67,000 interest subsidy and construction grant",
        benefit_ta: "வீடு கட்ட ₹1,20,000 முதல் ₹2,67,000 வரை நேரடி மானிய உதவி",
        desc_en: "Provides financial assistance to eligible homeless and kutcha-house families for construction of pucca houses with electricity and sanitation.",
        desc_ta: "சொந்த வீடு இல்லாத குடும்பங்களுக்கு கான்கிரீட் வீடுகள் கட்ட மத்திய-மாநில அரசுகளின் மானியத் திட்டம்.",
        eligibility_en: "Families without a pucca house in any part of India; annual household income below threshold.",
        eligibility_ta: "இந்தியாவில் எங்கும் சொந்த கான்கிரீட் வீடு இல்லாத ஏழை எளிய குடும்பங்கள்.",
        docs: ["Aadhaar Card", "Ration Card", "Land Record / Affidavit", "Bank Passbook (Aadhaar linked)", "MGNREGA Job Card"],
        apply_url: "https://pmayg.nic.in",
        min_age: 18, max_age: 99, income_limit: "low"
    },
    {
        id: "aabcs-entrepreneur",
        category: "business",
        target: "business",
        title_en: "Annal Ambedkar Business Champions Scheme (AABCS)",
        title_ta: "அண்ணல் அம்பேத்கர் தொழில் முன்னோடிகள் திட்டம் (AABCS)",
        benefit_en: "35% Capital Subsidy (up to ₹1.5 Crore) + 6% Interest Rebate",
        benefit_ta: "35% நேரடி மூலதன மானியம் (₹1.5 கோடி வரை) + 6% வட்டி மானியம்",
        desc_en: "Empowers aspiring Scheduled Caste and Scheduled Tribe entrepreneurs to launch manufacturing, service, and trading businesses with major capital grants.",
        desc_ta: "ஆதிதிராவிடர் மற்றும் பழங்குடியின இளைஞர்கள் சொந்தமாக தொழில் தொடங்க 35% மூலதன மானியம் வழங்கும் திட்டம்.",
        eligibility_en: "SC/ST entrepreneurs starting new enterprises or expanding existing units in Tamil Nadu.",
        eligibility_ta: "தமிழ்நாட்டில் புதிய தொழில் தொடங்க விரும்பும் SC/ST பிரிவைச் சேர்ந்த தொழில்முனைவோர்.",
        docs: ["Community Certificate", "Aadhaar Card", "Project Report (Detailed DPR)", "Educational Qualification", "Bank Account"],
        apply_url: "https://msmeonline.tn.gov.in",
        min_age: 18, max_age: 55, income_limit: "all"
    },
    {
        id: "vidiyal-payanam",
        category: "women",
        target: "woman",
        title_en: "Zero-Fare Bus Travel for Women (Vidiyal Payanam)",
        title_ta: "மகளிர் இலவச பேருந்து விடியல் பயணம்",
        benefit_en: "100% Free Travel in Government Town Buses across Tamil Nadu",
        benefit_ta: "தமிழக அரசு நகரப் பேருந்துகளில் 100% கட்டணமில்லா இலவச பயணம்",
        desc_en: "Empowers women workers, students, and mothers with complete travel freedom across ordinary fare town buses throughout the state.",
        desc_ta: "பணிக்குச் செல்லும் பெண்கள் மற்றும் கல்லூரி மாணவிகளின் பொருளாதார சுமையைக் குறைக்க பேருந்துகளில் இலவச பயணம்.",
        eligibility_en: "All women, transwomen, and differently abled persons travelling on state transport town buses.",
        eligibility_ta: "அனைத்து பெண்கள், திருநங்கையர் மற்றும் மாற்றுத்திறனாளிகள்.",
        docs: ["No Document Required (Direct Boarding)", "Aadhaar / ID Card if requested by conductor"],
        apply_url: "https://arasubus.tn.gov.in",
        min_age: 5, max_age: 99, income_limit: "all"
    },
    {
        id: "illam-thedi-kalvi",
        category: "students",
        target: "student",
        title_en: "Illam Thedi Kalvi (Doorstep Community Tutoring)",
        title_ta: "இல்லம் தேடிக் கல்வித் திட்டம்",
        benefit_en: "Free 1.5 Hours Daily Doorstep Academic Coaching & Learning Kits",
        benefit_ta: "தினமும் மாலை 1.5 மணி நேரம் வீட்டுக்கருகே இலவச கற்பித்தல் & கல்விப் பொருட்கள்",
        desc_en: "Community volunteers provide localized supplementary learning for school children (Classes 1 to 8) to strengthen foundational literacy and numeracy.",
        desc_ta: "1 முதல் 8-ஆம் வகுப்பு வரை படிக்கும் அரசுப் பள்ளி மாணவர்களுக்கு வீட்டுக்கு அருகிலேயே மாலை நேர இலவச கல்வி பயிற்சி.",
        eligibility_en: "School students studying in Classes 1 to 8 in Tamil Nadu.",
        eligibility_ta: "1 முதல் 8-ஆம் வகுப்பு வரை பயிலும் பள்ளி மாணவர்கள்.",
        docs: ["School Enrollment Proof", "Parent Contact Details"],
        apply_url: "https://illamthedikalvi.tnschools.gov.in",
        min_age: 5, max_age: 14, income_limit: "all"
    },
    {
        id: "differently-abled-pension",
        category: "special",
        target: "disabled",
        title_en: "Differently Abled Maintenance Allowance Scheme",
        title_ta: "மாற்றுத்திறனாளிகள் மாதாந்திர பராமரிப்பு உதவித் திட்டம்",
        benefit_en: "₹2,000 per month (Direct Bank Transfer) + Free Assistive Devices",
        benefit_ta: "மாதந்தோறும் ₹2,000 வங்கி கணக்கில் + இலவச உதவி உபகரணங்கள்",
        desc_en: "Financial security provided to persons with severe disabilities along with free battery wheelchairs and customized tricycles.",
        desc_ta: "கடுமையான மாற்றுத்திறன் கொண்ட நபர்களுக்கு மாதாந்திர பராமரிப்பு நிதி ₹2,000 மற்றும் பேட்டரி சக்கர நாற்காலிகள் வழங்கும் திட்டம்.",
        eligibility_en: "Persons with disability percentage of 40% or above (UDID card holder); no income restriction.",
        eligibility_ta: "40% அல்லது அதற்கு மேற்பட்ட மாற்றுத்திறன் சான்றிதழ் (UDID) உள்ள அனைத்து நபர்கள்.",
        docs: ["Unique Disability ID (UDID) Card", "Disability Medical Certificate", "Aadhaar Card", "Bank Passbook"],
        apply_url: "https://www.scd.tn.gov.in",
        min_age: 0, max_age: 99, income_limit: "all"
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
        cat_housing: "🏡 Housing & Grants",
        cat_business: "💼 Small Business & Mudra",
        cat_special: "♿ Differently Abled",
        cat_saved: "⭐ Saved Schemes",
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
        view_details: "View Details & Apply ➔",
        saved_empty: "No saved schemes yet. Click the bookmark icon on any scheme to pin it here!"
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
        cat_housing: "🏡 வீட்டு வசதி & மானியம்",
        cat_business: "💼 சிறுதொழில் முத்ரா கடன்",
        cat_special: "♿ மாற்றுத்திறனாளிகள்",
        cat_saved: "⭐ சேமித்த திட்டங்கள்",
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
        view_details: "முழு விவரம் & விண்ணப்பம் ➔",
        saved_empty: "இன்னும் எந்த திட்டமும் சேமிக்கப்படவில்லை. புக்மார்க் குறியீட்டை அழுத்தி இங்கே சேமியுங்கள்!"
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
    initPWA();
});

function initPWA() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('./sw.js').catch(() => {});
        });
    }
}

/* Bookmarking Store */
function getSavedBookmarks() {
    try {
        return JSON.parse(localStorage.getItem("makkal_bookmarks")) || [];
    } catch (e) {
        return [];
    }
}

function isBookmarked(id) {
    return getSavedBookmarks().includes(id);
}

function toggleBookmark(id) {
    let bookmarks = getSavedBookmarks();
    if (bookmarks.includes(id)) {
        bookmarks = bookmarks.filter(b => b !== id);
    } else {
        bookmarks.push(id);
    }
    localStorage.setItem("makkal_bookmarks", JSON.stringify(bookmarks));
    triggerHaptic();
    if (activeModalScheme && activeModalScheme.id === id) {
        updateModalBookmarkBtn(id);
    }
    renderSchemes(getFilteredSchemes());
}

function updateModalBookmarkBtn(id) {
    const btn = document.getElementById("bookmarkModalBtn");
    const txt = document.getElementById("bookmarkBtnText");
    if (!btn || !txt) return;
    const saved = isBookmarked(id);
    if (saved) {
        btn.classList.add("bookmarked");
        txt.textContent = currentLang === "ta" ? "சேமிக்கப்பட்டது" : "Saved";
    } else {
        btn.classList.remove("bookmarked");
        txt.textContent = currentLang === "ta" ? "சேமி" : "Save";
    }
}

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
        const emptyMsg = currentCategory === "saved" 
            ? I18N[currentLang].saved_empty 
            : (currentLang === "ta" 
                ? "பொருந்தக்கூடிய திட்டங்கள் எதுவும் இல்லை. வேறு வார்த்தையைத் தேடுங்கள்." 
                : "No matching schemes found. Try a different search keyword or category.");
        container.innerHTML = `<div class="card" style="grid-column: span 2; text-align: center; color: var(--text-secondary); padding: 32px;"><p>${emptyMsg}</p></div>`;
        return;
    }

    schemes.forEach(s => {
        const title = currentLang === "ta" ? s.title_ta : s.title_en;
        const benefit = currentLang === "ta" ? s.benefit_ta : s.benefit_en;
        const desc = currentLang === "ta" ? s.desc_ta : s.desc_en;
        const viewTxt = I18N[currentLang].view_details;
        const saved = isBookmarked(s.id);

        const card = document.createElement("div");
        card.className = "scheme-card";
        card.innerHTML = `
            <div>
                <div class="scheme-header">
                    <h3 class="scheme-title">${title}</h3>
                    <div class="scheme-header-actions">
                        <button class="card-bookmark-btn ${saved ? 'active' : ''}" title="Save Scheme" data-id="${s.id}">
                            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
                        </button>
                        <span class="tag">${s.category.toUpperCase()}</span>
                    </div>
                </div>
                <div class="benefit-badge">✨ ${benefit}</div>
                <p class="scheme-desc">${desc}</p>
            </div>
            <div class="scheme-footer">
                <span class="view-details-link">${viewTxt}</span>
            </div>
        `;

        const bookmarkBtn = card.querySelector(".card-bookmark-btn");
        bookmarkBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            toggleBookmark(s.id);
        });

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
        const matchesCat = currentCategory === "all" 
            ? true 
            : (currentCategory === "saved" ? isBookmarked(s.id) : s.category === currentCategory);
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
    const bookmarkBtn = document.getElementById("bookmarkModalBtn");
    const printBtn = document.getElementById("printModalBtn");

    closeBtn.addEventListener("click", () => modal.classList.add("hidden"));
    modal.addEventListener("click", (e) => {
        if (e.target === modal) modal.classList.add("hidden");
    });

    if (bookmarkBtn) {
        bookmarkBtn.addEventListener("click", () => {
            if (!activeModalScheme) return;
            toggleBookmark(activeModalScheme.id);
        });
    }

    if (printBtn) {
        printBtn.addEventListener("click", () => {
            window.print();
        });
    }

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

    updateModalBookmarkBtn(s.id);

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
