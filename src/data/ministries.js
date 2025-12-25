export const ministries = [
  // --- BATCH 1: THE BIG 6 (SOVEREIGNTY & STRATEGY) ---
  {
    id: 1,
    slug: "communications",
    acronym: "moct",
    ministerImage: "/images/ministers/moct.jpg",
    name: "Ministry of Communications & Technology",
    ministerName: "H.E. Mohamed Adan Moalim",
    ministerSocials: { twitter: "https://twitter.com/MinisterMoCT", facebook: "" },
    description:
      "The Ministry of Communications and Technology (MOCT) is the federal body responsible for developing Somalia's digital infrastructure, regulating the telecommunications sector, and implementing the National Digital Transformation Strategy 2025. MOCT's mandate includes expanding internet connectivity, overseeing the .so domain, and rolling out e-government services to modernize public administration.",
    mission:
      "To build a digital Somalia with affordable, secure, and reliable connectivity for all citizens, fostering innovation and economic growth.",
    responsibilities: [
      "Implementing the National Digital Transformation Strategy",
      "Oversight of the National Communications Authority (NCA)",
      "Cybersecurity Policy & Data Protection",
      "E-Government Services Implementation",
      "Revival of National Postal Services",
    ],
    departments: [
      "Department of E-Government",
      "Department of ICT Infrastructure",
      "National Telecom & Technology Institute (NTTI)",
      "Department of Cyber Security",
      "Department of Postal Services",
    ],
    contact: {
      address: "Jamhuuriya Road, Boondheere District, Mogadishu",
      email: "info@moct.gov.so",
      phone: "+252 61 100 3239",
      website: "https://moct.gov.so",
    },
    socials: {
      twitter: "https://twitter.com/MoCTSomalia",
      facebook: "https://facebook.com/MoCTSomalia",
    },
  },
  {
    id: 2,
    slug: "foreign-affairs",
    acronym: "mofa",
    ministerImage: "/images/ministers/mfa.jpg",
    name: "Ministry of Foreign Affairs & Int. Cooperation",
    ministerName: "H.E. Abdisalam Abdi Ali",
    ministerSocials: { twitter: "", facebook: "" },
    description:
      "The Ministry of Foreign Affairs is the lead institution for managing Somalia's diplomatic relations and foreign policy. It represents the Federal Republic internationally, negotiates treaties, and protects the interests of Somali citizens abroad. The Ministry coordinates with international organizations (UN, AU, Arab League) and manages Somalia's network of embassies and diplomatic missions worldwide.",
    mission:
      "To advance Somalia's national interests globally, promote peace and stability in the region, and foster international cooperation.",
    responsibilities: [
      "Formulating Foreign Policy Strategy",
      "Managing Embassies & Diplomatic Missions",
      "International Treaties & Conventions",
      "State Protocol & Foreign Visits",
      "Diaspora Engagement & Consular Services",
    ],
    departments: [
      "Department of Diplomatic Affairs",
      "Department of International Organizations",
      "Department of Protocol",
      "Department of Diaspora Affairs",
      "Department of Legal Affairs & Treaties",
      "Institute of Diplomatic Studies",
    ],
    contact: {
      address: "Wadajir Street, Bondhere District, Mogadishu",
      email: "info@mfa.gov.so",
      phone: "+252 61 900 0000",
      website: "https://mfa.gov.so",
    },
    socials: {
      twitter: "https://twitter.com/MofaSomalia",
      facebook: "https://facebook.com/MofaSomalia",
    },
  },
  {
    id: 3,
    slug: "finance",
    acronym: "mof",
    ministerImage: "/images/ministers/mof.jpg",
    name: "Ministry of Finance",
    ministerName: "H.E. Bihi Iman Egeh",
    ministerSocials: { twitter: "https://twitter.com/BihiEgeh", facebook: "" },
    description:
      "The Ministry of Finance is the custodian of Somalia's public finances. It is responsible for fiscal policy, budget preparation, revenue mobilization, and expenditure management. The Ministry oversees critical economic reforms, including the Debt Relief process (HIPC), and manages relations with international financial institutions like the IMF and World Bank to ensure macroeconomic stability.",
    mission:
      "To manage public resources transparently, efficiently, and effectively to foster sustainable economic growth and national development.",
    responsibilities: [
      "National Budget Formulation & Execution",
      "Revenue Mobilization (Customs & Inland Revenue)",
      "Fiscal Policy & Economic Reform",
      "Debt Management & External Finance",
      "Public Financial Management (PFM) Oversight",
    ],
    departments: [
      "Department of Budget",
      "Department of Revenue",
      "Accountant General Office",
      "Department of Economic Policy",
      "Aid Coordination Unit",
      "Department of Procurement",
    ],
    contact: {
      address: "Corso Somalia Street, Shangani District, Mogadishu",
      email: "info@mof.gov.so",
      phone: "+252 61 774 7363",
      website: "https://mof.gov.so",
    },
    socials: {
      twitter: "https://twitter.com/MoF_Somalia",
      facebook: "https://facebook.com/MinistryofFinanceSomalia",
    },
  },
  {
    id: 4,
    slug: "defense",
    acronym: "mod",
    ministerImage: "/images/ministers/mod.jpg",
    name: "Ministry of Defense",
    ministerName: "H.E. Ahmed Moallim Fiqi",
    ministerSocials: { twitter: "https://twitter.com/Fiqi", facebook: "" },
    description:
      "The Ministry of Defense is charged with defending the territorial integrity and sovereignty of the Federal Republic of Somalia. It provides civilian oversight to the Somali National Armed Forces (SNAF), including the Army, Air Force, and Navy. The Ministry formulates national defense strategy, manages military procurement, and coordinates international security partnerships to combat terrorism and external threats.",
    mission:
      "To build a professional, inclusive, and capable National Army that protects the nation and its people from all threats.",
    responsibilities: [
      "Oversight of the Somali National Army (SNA)",
      "National Defense Strategy Formulation",
      "Military Procurement & Logistics",
      "Veterans Affairs & Reintegration",
      "International Military Cooperation",
    ],
    departments: [
      "Department of Defense Policy & Planning",
      "Department of Operations & Training",
      "Department of Logistics & Procurement",
      "Department of Human Resources (Army Welfare)",
      "Military Justice Unit",
    ],
    contact: {
      address: "Villa Gashandiga, Industrial Road, Mogadishu",
      email: "info@mod.gov.so",
      phone: "+252 61 555 5555",
      website: "https://mod.gov.so",
    },
    socials: {
      twitter: "https://twitter.com/MoDSomalia",
      facebook: "https://facebook.com/MoDSomalia",
    },
  },
  {
    id: 5,
    slug: "internal-security",
    acronym: "mois",
    ministerImage: "/images/ministers/mois.jpg",
    name: "Ministry of Internal Security",
    ministerName: "H.E. Abdullahi Sheikh Ismail (Fartaag)",
    ministerSocials: { twitter: "", facebook: "" },
    description:
      "The Ministry of Internal Security is tasked with maintaining public order, safety, and the rule of law within Somalia. It oversees the Somali Police Force, the National Intelligence & Security Agency (NISA), and the Immigration & Citizenship Agency. The Ministry leads the government's counter-terrorism strategy and coordinates emergency responses to security incidents.",
    mission:
      "To create a safe and secure environment for all citizens by enforcing the law and neutralizing threats to internal stability.",
    responsibilities: [
      "Oversight of Somali Police Force & NISA",
      "Counter-Terrorism & Intelligence Coordination",
      "Border Security & Immigration Policy",
      "Arms Control & Disarmament",
      "Community Policing Initiatives",
    ],
    departments: [
      "Directorate of Police Oversight",
      "Directorate of Intelligence & Security Policy",
      "Department of Immigration & Border Control",
      "Department of Legal Affairs",
      "Department of Fire & Emergency Services",
    ],
    contact: {
      address: "Abdulle Hassan Road, KM4, Mogadishu",
      email: "info@mois.gov.so",
      phone: "+252 61 155 5855",
      website: "https://mois.gov.so",
    },
    socials: {
      twitter: "https://twitter.com/MoIS_Somalia",
      facebook: "https://facebook.com/MoIS_Somalia",
    },
  },
  {
    id: 6,
    slug: "interior",
    acronym: "moifar",
    ministerImage: "/images/ministers/moifar.jpg",
    name: "Ministry of Interior, Federal Affairs & Reconciliation",
    ministerName: "H.E. Ali Yusuf Ali (Hosh)",
    ministerSocials: { twitter: "", facebook: "" },
    description:
      "The Ministry of Interior acts as the custodian of Somalia's federal system. It manages relations between the Federal Government and Federal Member States, oversees local governance and district council formation, and leads national reconciliation efforts to heal social divisions. It also coordinates civil registration and disaster management policies at the local level.",
    mission:
      "To strengthen the federal system, empower local governance, and promote sustainable peace through reconciliation.",
    responsibilities: [
      "Federal-State Relations Management",
      "Local Governance & Decentralization",
      "National Reconciliation Framework",
      "Civil Registration & Vital Statistics",
      "Support to Federal Member States",
    ],
    departments: [
      "Department of Federal Affairs",
      "Department of Local Government",
      "Department of Reconciliation",
      "Department of Civil Registration (CRVS)",
      "Department of Internal Security Coordination",
    ],
    contact: {
      address: "Waberi District, Maka Al Mukarama Road, Mogadishu",
      email: "info@moifar.gov.so",
      phone: "+252 1 865 929",
      website: "https://moifar.gov.so",
    },
    socials: {
      twitter: "https://twitter.com/MoIFARSomalia",
      facebook: "https://facebook.com/MoIFARSomalia",
    },
  },

  // --- BATCH 2: SOCIAL SERVICES ---
  {
    id: 7,
    slug: "education",
    acronym: "moe",
    ministerImage: "/images/ministers/moe.jpg",
    name: "Ministry of Education, Culture & Higher Education",
    ministerName: "H.E. Farah Sheikh Abdulkadir",
    ministerSocials: { twitter: "https://twitter.com/MinisterMOE", facebook: "" },
    description:
      "The Ministry oversees Somalia's entire education system, from primary schools to universities. It is responsible for the national curriculum, administering national examinations (Grade 8 & 12), and regulating higher education institutions. The Ministry also preserves Somali cultural heritage and manages the National Academy of Arts.",
    mission:
      "To provide equitable, inclusive, and quality education for all Somali citizens and preserve the nation's rich cultural heritage.",
    responsibilities: [
      "National Curriculum Development",
      "Administration of National Examinations",
      "Teacher Training & Certification",
      "Higher Education Regulation",
      "Cultural Preservation & Arts Promotion",
    ],
    departments: [
      "Department of Curriculum Development",
      "Department of Examinations & Certification",
      "Department of Higher Education",
      "Department of Teacher Training",
      "Department of Culture & Heritage",
    ],
    contact: {
      address: "Zoobe, KM5, Afgoye Road, Mogadishu",
      email: "info@moe.gov.so",
      phone: "+252 61 944 4419",
      website: "https://moe.gov.so",
    },
    socials: {
      twitter: "https://twitter.com/MoE_Somalia",
      facebook: "https://facebook.com/MoeSomalia",
    },
  },
  {
    id: 8,
    slug: "health",
    acronym: "moh",
    ministerImage: "/images/ministers/moh.jpg",
    name: "Ministry of Health",
    ministerName: "H.E. Dr. Ali Haji Adam",
    ministerSocials: { twitter: "", facebook: "" },
    description:
      "The Ministry of Health is entrusted with protecting public health and delivering healthcare services. It oversees hospitals, manages national immunization programs, regulates pharmaceutical products, and sets health policy. A key focus is rebuilding the national health infrastructure and improving maternal and child health outcomes.",
    mission:
      "To improve the health status of the population through access to quality, affordable, and equitable health services.",
    responsibilities: [
      "Public Health & Disease Control",
      "Management of National Hospitals",
      "Regulation of Medicines & Pharmacies",
      "Health Workforce Training",
      "Emergency Health Response",
    ],
    departments: [
      "Department of Public Health",
      "Department of Medical Services",
      "Department of Policy & Planning",
      "Department of Human Resources for Health",
      "National Medicines Regulatory Authority",
    ],
    contact: {
      address: "Corso Somalia Street, Shangaani District, Mogadishu",
      email: "info@moh.gov.so",
      phone: "+252 61 187 5939",
      website: "https://moh.gov.so",
    },
    socials: {
      twitter: "https://twitter.com/MoH_Somalia",
      facebook: "https://facebook.com/MoHSomalia",
    },
  },
  {
    id: 9,
    slug: "labor",
    acronym: "molsa",
    ministerImage: "/images/ministers/molsa.jpg",
    name: "Ministry of Labor & Social Affairs",
    ministerName: "H.E. Dr. Mohamed Elmi Ibrahim",
    ministerSocials: { twitter: "", facebook: "" },
    description:
      "The Ministry oversees labor laws, employment policies, and social protection programs. It works to improve working conditions, manage the civil service workforce, and implement social safety nets (like the Baxnaano program) for vulnerable populations.",
    mission: "To promote decent work, social justice, and social protection for all Somalis.",
    responsibilities: [
      "Enforcement of Labor Laws",
      "Social Safety Net Implementation",
      "Civil Service Management",
      "Vocational Training Policy",
      "Child Protection Services",
    ],
    departments: [
      "Department of Labor Relations",
      "Department of Social Affairs",
      "Department of Civil Service",
      "Department of Vocational Training",
    ],
    contact: {
      address: "Jubba Junction, Mogadishu",
      email: "info@molsa.gov.so",
      phone: "+252 61 000 0000",
      website: "https://molsa.gov.so",
    },
    socials: {
      twitter: "https://twitter.com/MolsaSomalia",
      facebook: "https://facebook.com/MolsaSomalia",
    },
  },
  {
    id: 10,
    slug: "youth",
    acronym: "moys",
    ministerImage: "/images/ministers/moys.jpg",
    name: "Ministry of Youth & Sports",
    ministerName: "H.E. Mohamed Barre Mohamud",
    ministerSocials: { twitter: "", facebook: "" },
    description:
      "The Ministry is dedicated to empowering Somali youth and promoting sports as a tool for peace and cohesion. It manages national sports teams, oversees stadium infrastructure (like Mogadishu Stadium), and runs youth employment and civic engagement programs.",
    mission:
      "To develop the potential of Somali youth and promote excellence in sports for national unity.",
    responsibilities: [
      "National Youth Policy",
      "Sports Infrastructure Management",
      "Support to National Federations",
      "Youth Employment Initiatives",
    ],
    departments: [
      "Department of Youth Affairs",
      "Department of Sports",
      "Department of Sports Facilities",
      "National Youth Council Secretariat",
    ],
    contact: {
      address: "Daljirka Dahson, Mogadishu",
      email: "info@moys.gov.so",
      phone: "+252 61 000 0000",
      website: "https://moys.gov.so",
    },
    socials: {
      twitter: "https://twitter.com/MoYS_Somalia",
      facebook: "https://facebook.com/MoYSSomalia",
    },
  },

  // --- BATCH 3: ECONOMIC DEVELOPMENT ---
  {
    id: 11,
    slug: "planning",
    acronym: "mopied",
    ministerImage: "/images/ministers/mopied.jpg",
    name: "Ministry of Planning & Economic Development",
    ministerName: "H.E. Mohamud Abdirahman Beenebeene",
    ministerSocials: { twitter: "https://twitter.com/MinisterBeenebeene", facebook: "" },
    description:
      "MoPIED is the central planning arm of the government. It formulates National Development Plans (NDP-9), coordinates international development aid, and manages national statistics. The Ministry also houses the Investment Promotion Office (SOMINVEST) to attract foreign direct investment.",
    mission:
      "To guide national development through effective planning, data management, and aid coordination.",
    responsibilities: [
      "National Development Planning",
      "International Aid Coordination",
      "Investment Promotion (SOMINVEST)",
      "Monitoring & Evaluation of Projects",
      "National Statistics Oversight",
    ],
    departments: [
      "Department of Planning",
      "Department of International Cooperation",
      "Investment Promotion Office (SOMINVEST)",
      "Department of Monitoring & Evaluation",
      "Department of Statistics",
    ],
    contact: {
      address: "Hussein Maalim Building, KM5, Afgoi Road, Mogadishu",
      email: "info@mop.gov.so",
      phone: "+252 61 504 0610",
      website: "https://mop.gov.so",
    },
    socials: {
      twitter: "https://twitter.com/MoPIED_Somalia",
      facebook: "https://facebook.com/MoPIEDSomalia",
    },
  },
  {
    id: 12,
    slug: "commerce",
    acronym: "moci",
    ministerImage: "/images/ministers/moci.jpg",
    name: "Ministry of Commerce & Industry",
    ministerName: "H.E. Jamal Mohamed Hassan",
    ministerSocials: { twitter: "", facebook: "" },
    description:
      "The Ministry promotes trade, supports the private sector, and regulates business activities. It manages the Business Registration System, oversees import/export standards, and works to revive the nation's industrial base. It plays a key role in Somalia's accession to the WTO and regional trade blocs.",
    mission:
      "To create an enabling environment for business growth, industrialization, and fair trade.",
    responsibilities: [
      "Business Registration & Licensing",
      "Trade Policy & Export Promotion",
      "Industrial Development",
      "Consumer Protection",
      "Intellectual Property Rights",
    ],
    departments: [
      "Department of Domestic Commerce",
      "Department of Foreign Trade",
      "Department of Industry",
      "Business Registration Office",
      "Department of Standards",
    ],
    contact: {
      address: "Mohamud Harbi Road, Warta Nabadda, Mogadishu",
      email: "info@moci.gov.so",
      phone: "+252 61 211 1122",
      website: "https://moci.gov.so",
    },
    socials: {
      twitter: "https://twitter.com/MoCI_Somalia",
      facebook: "https://facebook.com/MoCISomalia",
    },
  },
  {
    id: 13,
    slug: "public-works",
    acronym: "mopw",
    ministerImage: "/images/ministers/mopw.jpg",
    name: "Ministry of Public Works, Reconstruction & Housing",
    ministerName: "H.E. Abdisalan Ali Dajiye",
    ministerSocials: { twitter: "", facebook: "" },
    description:
      "Responsible for the planning and construction of public infrastructure, government buildings, and national housing projects. The Ministry leads the reconstruction efforts of post-conflict Somalia, focusing on roads, bridges, and urban planning standards.",
    mission:
      "To rebuild Somalia's infrastructure and provide sustainable, affordable housing solutions.",
    responsibilities: [
      "National Infrastructure Planning",
      "Construction of Government Buildings",
      "Urban Planning & Zoning",
      "Housing Policy & Development",
      "Road Network Maintenance",
    ],
    departments: [
      "Department of Planning & Design",
      "Department of Housing",
      "Department of Public Construction",
      "Department of Federal Roads",
    ],
    contact: {
      address: "Maka Al Mukarama Road, Mogadishu",
      email: "info@mpwrh.gov.so",
      phone: "+252 61 700 7000",
      website: "https://mpwrh.gov.so",
    },
    socials: {
      twitter: "https://twitter.com/MoPW_Somalia",
      facebook: "",
    },
  },
  {
    id: 14,
    slug: "transport",
    acronym: "mot",
    ministerImage: "/images/ministers/mot.jpeg",
    name: "Ministry of Transport & Aviation",
    ministerName: "H.E. Mohamed Farah Nuh",
    ministerSocials: { twitter: "", facebook: "" },
    description:
      "The Ministry oversees the regulation of Somalia's land and air transport sectors. It manages civil aviation policy (in coordination with SCAA), vehicle registration, and road safety regulations, ensuring Somalia is connected internally and with the world.",
    mission:
      "To establish safe, efficient, and reliable transport systems that drive economic connectivity.",
    responsibilities: [
      "Civil Aviation Policy",
      "Land Transport Regulation",
      "Vehicle Registration & Licensing",
      "Road Safety Standards",
      "Meteorological Services",
    ],
    departments: [
      "Department of Aviation Policy",
      "Department of Land Transport",
      "Department of Transport Safety",
      "Meteorological Department",
    ],
    contact: {
      address: "Airport Road, Mogadishu",
      email: "info@mot.gov.so",
      phone: "+252 61 000 0000",
      website: "https://mot.gov.so",
    },
    socials: {
      twitter: "https://twitter.com/MoT_Somalia",
      facebook: "",
    },
  },
  {
    id: 15,
    slug: "ports",
    acronym: "mpmt",
    ministerImage: "/images/ministers/mpmt.jpg",
    name: "Ministry of Ports & Marine Transport",
    ministerName: "H.E. Abdulkadir Mohamed Nur",
    ministerSocials: { twitter: "", facebook: "" },
    description:
      "This Ministry manages Somalia's strategic ports and maritime sector. It regulates shipping, port operations, and maritime safety, aiming to maximize the economic potential of Somalia's coastline as a regional trade hub.",
    mission:
      "To modernize Somalia's ports and maritime transport to serve as the gateway to the Horn of Africa.",
    responsibilities: [
      "Port Management & Regulation",
      "Maritime Safety & Security",
      "Shipping Line Regulation",
      "Development of New Ports",
    ],
    departments: [
      "Department of Port Operations",
      "Department of Maritime Safety",
      "Department of Marine Transport",
    ],
    contact: {
      address: "Mogadishu Port Complex, Mogadishu",
      email: "info@mpmt.gov.so",
      phone: "+252 61 000 0000",
      website: "https://mpmt.gov.so",
    },
    socials: {
      twitter: "https://twitter.com/MPMTSomalia",
      facebook: "",
    },
  },

  // --- BATCH 4: RESOURCES & ENVIRONMENT ---
  {
    id: 16,
    slug: "petroleum",
    acronym: "mopmr",
    ministerImage: "/images/ministers/mopmr.jpg",
    name: "Ministry of Petroleum & Mineral Resources",
    ministerName: "H.E. Abdirizak Omar Mohamed",
    ministerSocials: { twitter: "", facebook: "" },
    description:
      "The Ministry manages the exploration, development, and regulation of Somalia's hydrocarbon and mineral resources. It oversees licensing rounds, production sharing agreements, and ensures that resource extraction benefits the nation while minimizing environmental impact.",
    mission:
      "To responsibly manage and develop Somalia's natural resources for the prosperity of current and future generations.",
    responsibilities: [
      "Petroleum Exploration Licensing",
      "Mining Regulation & Oversight",
      "Revenue Sharing Frameworks",
      "Geological Surveying",
    ],
    departments: [
      "Department of Petroleum",
      "Department of Minerals",
      "Department of Policy & Legal",
      "Department of HSE (Health, Safety, Environment)",
    ],
    contact: {
      address: "Maka Al Mukarama Road, Mogadishu",
      email: "info@mopmr.gov.so",
      phone: "+252 61 000 0000",
      website: "https://mopmr.gov.so",
    },
    socials: {
      twitter: "https://twitter.com/MoPMRSomalia",
      facebook: "",
    },
  },
  {
    id: 17,
    slug: "energy",
    acronym: "moew",
    ministerImage: "/images/ministers/moew.jpg",
    name: "Ministry of Energy & Water Resources",
    ministerName: "H.E. Abdullahi Bidhaan Warsame",
    ministerSocials: { twitter: "", facebook: "" },
    description:
      "The Ministry oversees the energy and water sectors. It formulates policy for electricity generation, renewable energy adoption, and water resource management. A key goal is to increase access to affordable electricity and clean water for all citizens.",
    mission:
      "To ensure sustainable, affordable, and reliable access to energy and water resources.",
    responsibilities: [
      "Electricity Sector Regulation",
      "Water Resource Management",
      "Renewable Energy Projects",
      "Hydrology & Meteorology",
    ],
    departments: [
      "Department of Energy",
      "Department of Water Resources",
      "Department of Hydrology",
      "Department of Planning",
    ],
    contact: {
      address: "Mogadishu, Somalia",
      email: "info@moew.gov.so",
      phone: "+252 61 000 0000",
      website: "https://moew.gov.so",
    },
    socials: {
      twitter: "https://twitter.com/MoEWSomalia",
      facebook: "",
    },
  },
  {
    id: 18,
    slug: "agriculture",
    acronym: "moa",
    ministerImage: "/images/ministers/moa.jpg",
    name: "Ministry of Agriculture & Irrigation",
    ministerName: "H.E. Mohamed Abdi Hayir (Maareeye)",
    ministerSocials: { twitter: "", facebook: "" },
    description:
      "Leading the revitalization of Somalia's agricultural sector. The Ministry focuses on crop production, irrigation infrastructure rehabilitation, and pest control to ensure food security and boost agricultural exports like bananas and sesame.",
    mission:
      "To transform agriculture into a modern, productive, and sustainable sector that ensures food security.",
    responsibilities: [
      "Crop Production Support",
      "Irrigation Infrastructure",
      "Pest & Disease Control",
      "Agricultural Research & Extension",
    ],
    departments: [
      "Department of Plant Protection",
      "Department of Irrigation",
      "Department of Crop Production",
      "Department of Planning",
    ],
    contact: {
      address: "Mogadishu, Somalia",
      email: "info@moa.gov.so",
      phone: "+252 61 000 0000",
      website: "https://moa.gov.so",
    },
    socials: {
      twitter: "https://twitter.com/MoASomalia",
      facebook: "",
    },
  },
  {
    id: 19,
    slug: "livestock",
    acronym: "molf",
    ministerImage: "/images/ministers/molf.jpg",
    name: "Ministry of Livestock, Forestry & Range",
    ministerName: "H.E. Hassan Hussein Mohamed",
    ministerSocials: { twitter: "", facebook: "" },
    description:
      "Supporting the backbone of the Somali economy. The Ministry oversees animal health, export certification, and rangeland management. It works to modernize the livestock sector and open new international markets for Somali camels, cattle, and goats.",
    mission:
      "To improve the health, productivity, and marketability of Somali livestock while preserving the environment.",
    responsibilities: [
      "Animal Health & Veterinary Services",
      "Livestock Export Certification",
      "Rangeland & Forestry Management",
      "Fodder Production",
    ],
    departments: [
      "Department of Animal Health",
      "Department of Forestry",
      "Department of Range Management",
      "Department of Planning",
    ],
    contact: {
      address: "Mogadishu, Somalia",
      email: "info@molf.gov.so",
      phone: "+252 61 000 0000",
      website: "https://molf.gov.so",
    },
    socials: {
      twitter: "https://twitter.com/MoLFRSomalia",
      facebook: "",
    },
  },
  {
    id: 20,
    slug: "fisheries",
    acronym: "mfbe",
    ministerImage: "/images/ministers/mfbe.jpeg",
    name: "Ministry of Fisheries & Blue Economy",
    ministerName: "H.E. Ahmed Hassan Aden",
    ministerSocials: { twitter: "", facebook: "" },
    description:
      "Responsible for managing Somalia's vast marine resources-the longest coastline in mainland Africa. The Ministry regulates fishing licenses, combats illegal fishing, and promotes the Blue Economy to generate sustainable wealth from the ocean.",
    mission:
      "To sustainably manage and develop marine resources for the economic prosperity of the nation.",
    responsibilities: [
      "Fishing Licensing & Regulation",
      "Combating Illegal Fishing (IUU)",
      "Blue Economy Strategy",
      "Marine Conservation",
    ],
    departments: [
      "Department of Marine Resources",
      "Department of Blue Economy",
      "Department of Licensing & Enforcement",
      "Department of Planning",
    ],
    contact: {
      address: "Mogadishu, Somalia",
      email: "info@mfbe.gov.so",
      phone: "+252 61 000 0000",
      website: "https://mfbe.gov.so",
    },
    socials: {
      twitter: "https://twitter.com/MoFBE_Somalia",
      facebook: "",
    },
  },
  {
    id: 21,
    slug: "environment",
    acronym: "moecc",
    ministerImage: "/images/ministers/moecc.jpg",
    name: "Ministry of Environment & Climate Change",
    ministerName: "H.E. Bashir Mohamed Jama",
    ministerSocials: { twitter: "", facebook: "" },
    description:
      "The lead agency for environmental protection and climate action. The Ministry addresses critical issues like deforestation, land degradation, and climate adaptation. It coordinates the Great Green Wall initiative and national responses to climate shocks.",
    mission:
      "To preserve Somalia's natural environment and build national resilience against climate change.",
    responsibilities: [
      "Climate Change Policy & Adaptation",
      "Environmental Protection Regulation",
      "Biodiversity Conservation",
      "Combatting Desertification",
    ],
    departments: [
      "Department of Climate Change",
      "Department of Environmental Protection",
      "Department of Biodiversity",
      "Department of Planning",
    ],
    contact: {
      address: "Mogadishu, Somalia",
      email: "info@moecc.gov.so",
      phone: "+252 61 000 0000",
      website: "https://moecc.gov.so",
    },
    socials: {
      twitter: "https://twitter.com/MoECCSomalia",
      facebook: "",
    },
  },
  {
    id: 22,
    slug: "religion",
    acronym: "mora",
    ministerImage: "/images/ministers/mora.jpg",
    name: "Ministry of Endowments & Religious Affairs",
    ministerName: "H.E. Mukhtar Robow Ali",
    ministerSocials: { twitter: "", facebook: "" },
    description:
      "The Ministry manages religious affairs, including the administration of mosques, religious education, and Hajj services. It plays a vital role in promoting moderate Islamic teachings, social cohesion, and countering extremist ideologies.",
    mission:
      "To preserve Islamic values, manage endowments, and promote peace and moderation.",
    responsibilities: [
      "Hajj & Umrah Management",
      "Mosque Administration",
      "Religious Education Oversight",
      "Countering Violent Extremism (CVE)",
    ],
    departments: [
      "Department of Hajj & Umrah",
      "Department of Mosques",
      "Department of Religious Guidance",
      "Department of Endowments (Awqaf)",
    ],
    contact: {
      address: "Mogadishu, Somalia",
      email: "info@mora.gov.so",
      phone: "+252 61 000 0000",
      website: "https://mora.gov.so",
    },
    socials: {
      twitter: "https://twitter.com/MoRA_Somalia",
      facebook: "",
    },
  },
  {
    id: 23,
    slug: "information",
    acronym: "moi",
    ministerImage: "/images/ministers/moi.jpg",
    name: "Ministry of Information, Culture & Tourism",
    ministerName: "H.E. Daud Aweys",
    ministerSocials: { twitter: "https://twitter.com/DaudAweys", facebook: "" },
    description:
      "The Ministry serves as the official voice of the government and the guardian of Somali culture. It oversees state media (SNTV, Radio Mogadishu), regulates the press, and promotes tourism. It played a key role in reopening the National Museum and National Theatre.",
    mission:
      "To provide accurate information to the public and promote Somali culture and tourism globally.",
    responsibilities: [
      "Management of State Media (SNTV/Radio)",
      "Press Regulation & Licensing",
      "Tourism Promotion",
      "Cultural Heritage Preservation",
    ],
    departments: [
      "Department of Somali National TV",
      "Department of Radio Mogadishu",
      "Department of Culture",
      "Department of Tourism",
    ],
    contact: {
      address: "Ministry of Information HQ, Mogadishu",
      email: "info@moi.gov.so",
      phone: "+252 61 000 0000",
      website: "https://moi.gov.so",
    },
    socials: {
      twitter: "https://twitter.com/MoISomalia",
      facebook: "",
    },
  }
];
