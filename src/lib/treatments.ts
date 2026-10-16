export type FAQ = { q: string; a: string };

export type Treatment = {
  slug: string;
  name: string;
  short: string;
  group: TreatmentGroup;
  sanskrit?: string;
  hindi?: string;
  icon: string;
  image: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  sections: { heading: string; body?: string; bullets?: string[] }[];
  urgent?: string;
  faqs: FAQ[];
  related: string[];
};

export type TreatmentGroup =
  | "Anorectal Care"
  | "Liver Care"
  | "Joint, Spine & Nerve Care"
  | "Metabolic & Kidney Care"
  | "Fertility & Sexual Health"
  | "Strength & Immunity";

export const groupOrder: TreatmentGroup[] = [
  "Anorectal Care",
  "Liver Care",
  "Joint, Spine & Nerve Care",
  "Metabolic & Kidney Care",
  "Fertility & Sexual Health",
  "Strength & Immunity",
];

export const treatments: Treatment[] = [
  {
    slug: "piles-fistula-fissure",
    name: "Piles, Fistula & Fissure",
    short:
      "Private, respectful care for bleeding, pain and swelling, with medicines, diet correction and Ayurvedic para-surgical options where suitable.",
    group: "Anorectal Care",
    sanskrit: "Arsha · Bhagandara · Parikartika",
    hindi: "Bawaseer",
    icon: "leaf",
    image: "/images/treatments/pharmacy.jpg",
    metaTitle: "Piles, Fistula & Fissure Ayurvedic Treatment in Prayagraj",
    metaDescription:
      "Ayurvedic treatment for piles (bawaseer), fistula and fissure in Prayagraj. Private consultation with an MD Ayurved doctor. Call 9532650556.",
    h1: "Ayurvedic Treatment for Piles, Fistula and Fissure in Prayagraj",
    intro:
      "Bleeding, pain or a lump while passing stool is common, and many people suffer in silence for years out of embarrassment. At Advance Ayurved Centre you can discuss these problems privately with an experienced Ayurvedic doctor.",
    sections: [
      {
        heading: "Understanding the three conditions",
        bullets: [
          "Piles (Arsha / bawaseer): swollen veins in the rectum or anus, causing bleeding, itching or a lump.",
          "Fissure (Parikartika): a small tear in the anal lining, causing sharp, burning pain during and after stool.",
          "Fistula (Bhagandara): an abnormal tract near the anus that discharges pus repeatedly.",
        ],
      },
      {
        heading: "How Ayurveda sees it",
        body: "Ayurveda links these conditions to weak digestion, long-standing constipation, and a diet that is dry, spicy or irregular. Treatment therefore corrects digestion as well as the local problem.",
      },
      {
        heading: "Our treatment approach",
        bullets: [
          "Internal medicines to soften stool, reduce swelling and control bleeding",
          "Local applications and warm sitz baths (Avagaha Sweda) for pain relief",
          "Ayurvedic para-surgical procedures such as Kshar Sutra or Kshar Karma where indicated",
          "A fibre-rich diet plan and bowel-habit correction to reduce recurrence",
        ],
      },
      {
        heading: "Diet and lifestyle tips",
        body: "Drink plenty of water, eat seasonal fruit, green vegetables and whole grains, avoid straining and sitting long on the toilet, and limit fried, very spicy food and alcohol.",
      },
    ],
    urgent:
      "Heavy or repeated bleeding, black stools, unexplained weight loss, fever with anal pain, or bleeding after the age of 40 need prompt examination to rule out other causes.",
    faqs: [
      {
        q: "Can piles be treated without surgery?",
        a: "Early-grade piles often respond well to medicines, diet and habit correction. Advanced grades may need a procedure; the doctor will advise after examining you.",
      },
      {
        q: "Is the consultation private?",
        a: "Yes. Examination is done in a private room, and a female attendant is available for women patients.",
      },
      {
        q: "How many visits are needed?",
        a: "This depends on the grade and type of the problem; you will be told at the first visit.",
      },
    ],
    related: ["fatty-liver", "weakness-general-debility"],
  },
  {
    slug: "fatty-liver",
    name: "Fatty Liver",
    short:
      "Herbal medicines, a liver-friendly diet and weight guidance to support healthier liver function.",
    group: "Liver Care",
    sanskrit: "Yakrit Vikara",
    icon: "liver",
    image: "/images/treatments/herbs.jpg",
    metaTitle: "Fatty Liver Ayurvedic Treatment in Prayagraj",
    metaDescription:
      "Ayurvedic management of fatty liver with herbal medicines, diet planning and Panchakarma at Advance Ayurved Centre, Tagore Town, Prayagraj.",
    h1: "Ayurvedic Treatment for Fatty Liver in Prayagraj",
    intro:
      "Fatty liver is often found by chance on an ultrasound. In its early stages it usually causes no symptoms, and it is also the stage where diet, weight and lifestyle changes help the most.",
    sections: [
      {
        heading: "Common causes",
        body: "Excess weight, diabetes, high cholesterol, alcohol, sedentary habits and a diet high in sugar and fried food.",
      },
      {
        heading: "How Ayurveda sees it",
        body: "Ayurveda regards the liver (Yakrit) as a seat of Pitta. Fatty liver is understood as a disturbance of fat metabolism with impaired digestive fire (Agni) and a build-up of Kapha and Meda.",
      },
      {
        heading: "Our treatment approach",
        bullets: [
          "Liver-supporting classical formulations chosen for your reports and constitution",
          "A personalised diet chart and a realistic weight-reduction plan",
          "Panchakarma such as Virechana (therapeutic purgation) where the doctor finds it suitable",
          "Yoga and daily activity guidance",
          "Periodic liver function tests and ultrasound to track progress",
        ],
      },
      {
        heading: "Diet tips",
        body: "Prefer home-cooked, lightly spiced food; reduce sugar, refined flour, fried snacks and soft drinks; avoid alcohol; walk at least 30–40 minutes a day.",
      },
    ],
    faqs: [
      {
        q: "Can fatty liver improve?",
        a: "Early fatty liver often improves with sustained weight loss, diet and exercise. Your progress is checked with repeat tests.",
      },
      {
        q: "Do I need to stop alcohol?",
        a: "Yes. Avoiding alcohol is essential for liver recovery.",
      },
    ],
    related: ["jaundice", "liver-cirrhosis", "diabetes"],
  },
  {
    slug: "jaundice",
    name: "Jaundice",
    short: "Liver-supporting herbs, rest and diet under close monitoring.",
    group: "Liver Care",
    sanskrit: "Kamala",
    hindi: "Piliya",
    icon: "liver",
    image: "/images/treatments/herbs.jpg",
    metaTitle: "Jaundice (Piliya) Ayurvedic Treatment in Prayagraj",
    metaDescription:
      "Supportive Ayurvedic care for jaundice (piliya): liver-supporting herbs, diet and monitoring under an MD Ayurved doctor in Prayagraj.",
    h1: "Ayurvedic Care for Jaundice (Piliya) in Prayagraj",
    intro:
      "Jaundice — yellowing of the eyes, skin and urine — is a sign, not a disease on its own. Its cause (viral hepatitis, gallstones, alcohol, medicines or others) must be identified first.",
    sections: [
      {
        heading: "Our approach",
        bullets: [
          "Review of blood tests and ultrasound to establish the cause",
          "Liver-supporting Ayurvedic medicines (Kamala chikitsa)",
          "A light, easily digested diet, fluids and rest",
          "Regular monitoring of bilirubin and liver enzymes",
        ],
      },
    ],
    urgent:
      "Seek urgent hospital care if there is drowsiness or confusion, persistent vomiting, severe abdominal pain, bleeding, very high fever, or jaundice in a newborn or during pregnancy.",
    faqs: [
      {
        q: "Is home treatment or jhaad-phoonk enough for jaundice?",
        a: "No. Jaundice always needs proper tests to find the cause. Please see a qualified doctor.",
      },
    ],
    related: ["fatty-liver", "liver-cirrhosis"],
  },
  {
    slug: "liver-cirrhosis",
    name: "Liver Cirrhosis",
    short:
      "Supportive Ayurvedic care that works alongside your hepatologist's treatment.",
    group: "Liver Care",
    icon: "liver",
    image: "/images/treatments/herbs.jpg",
    metaTitle: "Liver Cirrhosis Ayurvedic Care in Prayagraj",
    metaDescription:
      "Supportive Ayurvedic care for liver cirrhosis alongside your hepatologist's treatment. Consult Dr Sanjay Verma, MD Ayurved, Prayagraj.",
    h1: "Supportive Ayurvedic Care for Liver Cirrhosis in Prayagraj",
    intro:
      "Cirrhosis is long-term scarring of the liver. It requires regular follow-up with a hepatologist or gastroenterologist. Ayurvedic care at our centre is offered alongside that treatment, with the aim of supporting digestion, appetite, strength and quality of life.",
    sections: [
      {
        heading: "Our approach",
        bullets: [
          "Liver-supporting medicines chosen with your reports and current prescriptions in view",
          "A diet plan that controls salt and protects nutrition",
          "Strict avoidance of alcohol and of self-prescribed or unlabelled herbal products",
          "Coordination with your treating specialist and regular tests",
        ],
      },
    ],
    urgent:
      "Go to hospital immediately for vomiting blood, black stools, confusion, a rapidly swelling abdomen, or fever with abdominal pain.",
    faqs: [
      {
        q: "Will Ayurvedic medicines interfere with my hospital treatment?",
        a: "Our doctor reviews every prescription you are on before adding anything, and coordinates with your specialist. Never take unlabelled herbal products on your own.",
      },
    ],
    related: ["fatty-liver", "jaundice"],
  },
  {
    slug: "diabetes",
    name: "Diabetes",
    short:
      "Ayurvedic medicines, diet, exercise and yoga to support better sugar control.",
    group: "Metabolic & Kidney Care",
    sanskrit: "Madhumeha",
    hindi: "Sugar",
    icon: "drop",
    image: "/images/treatments/pulse.jpg",
    metaTitle: "Ayurvedic Treatment for Diabetes in Prayagraj",
    metaDescription:
      "Ayurvedic support for blood sugar management: medicines, diet, yoga and lifestyle correction at Advance Ayurved Centre, Prayagraj.",
    h1: "Ayurvedic Treatment for Diabetes in Prayagraj",
    intro:
      "Diabetes (Madhumeha) is a long-term condition. With the right medicines, food and routine, most people can keep their sugar in a healthy range and protect their eyes, kidneys, nerves and heart.",
    sections: [
      {
        heading: "Our treatment approach",
        bullets: [
          "Ayurvedic medicines selected for your sugar levels, weight and constitution",
          "A practical diet plan built around local, home-cooked food",
          "Yoga, pranayama and a walking routine with our yoga instructor",
          "Panchakarma in selected patients",
          "Regular monitoring of fasting, post-meal sugar and HbA1c",
        ],
      },
      {
        heading: "Important",
        body: "Ayurvedic treatment is given along with your existing diabetes medicines. Never stop insulin or tablets on your own; doses are changed only by your doctor based on your readings.",
      },
    ],
    faqs: [
      {
        q: "Can Ayurveda cure diabetes permanently?",
        a: "Diabetes is managed, not cured. Our aim is steadier sugar control, more energy and fewer complications.",
      },
      {
        q: "Will I have to follow a strict diet?",
        a: "You will get a diet you can follow for life, not a crash plan.",
      },
    ],
    related: ["fatty-liver", "kidney-stone", "weakness-general-debility"],
  },
  {
    slug: "kidney-stone",
    name: "Kidney Stone",
    short:
      "Herbal medicines and fluid and diet guidance to help small stones pass and lower the chance of recurrence.",
    group: "Metabolic & Kidney Care",
    sanskrit: "Ashmari",
    hindi: "Pathri",
    icon: "kidney",
    image: "/images/treatments/herbs.jpg",
    metaTitle: "Kidney Stone Ayurvedic Treatment in Prayagraj",
    metaDescription:
      "Ayurvedic management of kidney stones (pathri) with herbal medicines and diet guidance to help reduce recurrence. Consult in Prayagraj.",
    h1: "Ayurvedic Treatment for Kidney Stones in Prayagraj",
    intro:
      "Kidney stones (Ashmari / pathri) can cause severe pain in the flank, burning urine and sometimes blood in the urine. Whether a stone can be managed with medicines depends on its size, position and whether it is blocking the kidney.",
    sections: [
      {
        heading: "Our approach",
        bullets: [
          "Review of your ultrasound or CT report",
          "Classical Ayurvedic medicines traditionally used to support the passage of small stones and ease urinary discomfort",
          "Fluid and diet guidance according to the type of stone",
          "Repeat imaging to confirm the result",
          "Prevention advice to lower the chance of stones forming again",
        ],
      },
    ],
    urgent:
      "Go to hospital urgently if you have fever with chills, unbearable pain, repeated vomiting, or you cannot pass urine. Large or obstructing stones need a urologist.",
    faqs: [
      {
        q: "Which stones can be managed with medicines?",
        a: "Generally small stones without blockage or infection. The doctor decides after seeing your reports.",
      },
    ],
    related: ["diabetes", "weakness-general-debility"],
  },
  {
    slug: "arthritis",
    name: "Arthritis",
    short:
      "Relief-focused care for stiff, swollen and painful joints using Panchakarma and internal medicines.",
    group: "Joint, Spine & Nerve Care",
    sanskrit: "Sandhivata · Amavata",
    icon: "bone",
    image: "/images/treatments/knee.jpg",
    metaTitle: "Arthritis Ayurvedic Treatment in Prayagraj",
    metaDescription:
      "Ayurvedic and Panchakarma care for osteoarthritis, rheumatoid arthritis and gout-related joint pain at Advance Ayurved Centre, Prayagraj.",
    h1: "Ayurvedic Treatment for Arthritis in Prayagraj",
    intro:
      "Joint pain, morning stiffness and swelling can make daily life difficult. Ayurveda distinguishes between wear-and-tear arthritis (Sandhivata, osteoarthritis), inflammatory arthritis (Amavata, rheumatoid arthritis) and gout (Vatarakta), and treats each differently.",
    sections: [
      {
        heading: "Our treatment approach",
        bullets: [
          "Internal medicines to ease pain, stiffness and swelling",
          "Panchakarma: Abhyanga (oil massage), Swedana (herbal steam), Basti (medicated enema), and local therapies such as Janu Basti",
          "Diet correction — particularly important in Amavata and gout",
          "Gentle exercise and yoga to keep joints mobile",
        ],
      },
    ],
    faqs: [
      {
        q: "Should I continue my rheumatologist's medicines?",
        a: "Yes. Tell our doctor what you take; do not stop them yourself.",
      },
      {
        q: "How soon will I feel relief?",
        a: "It varies with the type and duration of arthritis. Long-standing problems need patient, regular treatment.",
      },
    ],
    related: ["knee-pain", "back-pain-spondylitis", "sciatica"],
  },
  {
    slug: "knee-pain",
    name: "Knee Pain",
    short:
      "Janu Basti, medicated oils and strengthening advice for worn or painful knees.",
    group: "Joint, Spine & Nerve Care",
    sanskrit: "Janu Sandhigata Vata",
    icon: "bone",
    image: "/images/treatments/knee.jpg",
    metaTitle: "Knee Pain Ayurvedic Treatment in Prayagraj | Janu Basti",
    metaDescription:
      "Ayurvedic knee pain care with Janu Basti, herbal oils and medicines. Consult an MD Ayurved doctor in Tagore Town, Prayagraj.",
    h1: "Ayurvedic Treatment for Knee Pain in Prayagraj",
    intro:
      "Knee pain while climbing stairs, sitting cross-legged or getting up from the floor is most often due to osteoarthritis, old injuries or excess weight.",
    sections: [
      {
        heading: "Our treatment approach",
        bullets: [
          "Janu Basti: warm medicated oil held over the knee inside a dough ring, to ease pain and stiffness",
          "Abhyanga and Swedana for the surrounding muscles",
          "Internal medicines to support joint health",
          "Weight management and thigh-strengthening exercises",
          "Advice on footwear, sitting and stair use",
        ],
      },
    ],
    faqs: [
      {
        q: "Can Ayurveda help me avoid knee replacement?",
        a: "In early and moderate osteoarthritis, many patients get meaningful relief and better movement. In advanced joint damage, surgery may still be the best option, and we will tell you so.",
      },
    ],
    related: ["arthritis", "back-pain-spondylitis"],
  },
  {
    slug: "back-pain-spondylitis",
    name: "Back Pain & Spondylitis",
    short:
      "Kati Basti, Greeva Basti and posture correction for the neck and lower back.",
    group: "Joint, Spine & Nerve Care",
    sanskrit: "Katishoola · Greeva Graha",
    icon: "spine",
    image: "/images/treatments/room.jpg",
    metaTitle: "Back Pain & Spondylitis Ayurvedic Treatment Prayagraj",
    metaDescription:
      "Ayurvedic treatment for back ache, cervical and lumbar spondylitis with Kati Basti, Greeva Basti and Panchakarma in Prayagraj.",
    h1: "Ayurvedic Treatment for Back Pain and Spondylitis in Prayagraj",
    intro:
      "Long hours of sitting, phone and laptop use, two-wheeler travel and weak core muscles have made neck and lower back pain very common.",
    sections: [
      {
        heading: "Our treatment approach",
        bullets: [
          "Kati Basti for the lower back and Greeva Basti for the neck",
          "Abhyanga, Swedana and Basti therapy for Vata disorders",
          "Nasya in selected cervical problems",
          "Internal medicines for pain, stiffness and nerve health",
          "Posture correction and specific yoga asanas",
        ],
      },
    ],
    urgent:
      "See a doctor urgently if back pain comes with leg weakness, numbness around the groin, loss of bladder or bowel control, fever, or follows an injury.",
    faqs: [
      {
        q: "How many Kati Basti sittings are needed?",
        a: "Usually a course of 7–14 sittings, decided by the doctor after examining you.",
      },
    ],
    related: ["sciatica", "arthritis", "knee-pain"],
  },
  {
    slug: "sciatica",
    name: "Sciatica",
    short:
      "Therapies and medicines for pain that travels from the lower back down the leg.",
    group: "Joint, Spine & Nerve Care",
    sanskrit: "Gridhrasi",
    icon: "spine",
    image: "/images/treatments/room.jpg",
    metaTitle: "Sciatica Ayurvedic Treatment in Prayagraj",
    metaDescription:
      "Ayurvedic care for sciatica (Gridhrasi): Panchakarma therapies, medicines and posture guidance at Advance Ayurved Centre, Prayagraj.",
    h1: "Ayurvedic Treatment for Sciatica in Prayagraj",
    intro:
      "Sciatica (Gridhrasi) is pain that starts in the lower back or hip and shoots down the back of the leg, sometimes with tingling or numbness. It is commonly caused by a slipped disc pressing on the nerve.",
    sections: [
      {
        heading: "Our treatment approach",
        bullets: [
          "Kati Basti, Abhyanga and Swedana",
          "Basti therapy, considered central to Vata disorders in Ayurveda",
          "Internal medicines to ease nerve pain and stiffness",
          "Guided stretches, and advice on lifting and sitting",
        ],
      },
    ],
    faqs: [
      {
        q: "Do I need an MRI?",
        a: "Not always. If you already have one, please bring it. The doctor will ask for imaging if your examination suggests it.",
      },
    ],
    related: ["back-pain-spondylitis", "arthritis"],
  },
  {
    slug: "migraine",
    name: "Migraine",
    short: "Shirodhara, Nasya and trigger management for recurring headaches.",
    group: "Joint, Spine & Nerve Care",
    sanskrit: "Ardhavabhedaka",
    icon: "head",
    image: "/images/treatments/shirodhara.jpg",
    metaTitle: "Migraine Ayurvedic Treatment in Prayagraj",
    metaDescription:
      "Ayurvedic migraine management with Shirodhara, Nasya, medicines and trigger-based diet advice. Consult in Tagore Town, Prayagraj.",
    h1: "Ayurvedic Treatment for Migraine in Prayagraj",
    intro:
      "Migraine (Ardhavabhedaka) is a throbbing headache, often on one side, with nausea and sensitivity to light or sound. Attacks are commonly triggered by missed meals, poor sleep, stress, strong sun or particular foods.",
    sections: [
      {
        heading: "Our treatment approach",
        bullets: [
          "Identifying and managing your personal triggers",
          "Shirodhara and Nasya as advised by the doctor",
          "Internal medicines to reduce the frequency and intensity of attacks",
          "Correction of acidity and constipation, which often accompany migraine",
          "Sleep routine, pranayama and relaxation techniques",
        ],
      },
    ],
    urgent:
      "Seek urgent care for a sudden \"worst-ever\" headache, headache with fever and neck stiffness, weakness, fits, or loss of vision.",
    faqs: [
      {
        q: "How many Shirodhara sessions are needed for migraine?",
        a: "Commonly a course of 7–14 sittings alongside medicines; the doctor decides based on how often your attacks occur.",
      },
    ],
    related: ["weakness-general-debility", "back-pain-spondylitis"],
  },
  {
    slug: "paralysis",
    name: "Paralysis",
    short:
      "Panchakarma-based rehabilitation support to help regain function after a stroke.",
    group: "Joint, Spine & Nerve Care",
    sanskrit: "Pakshaghata",
    hindi: "Lakwa",
    icon: "spine",
    image: "/images/treatments/room.jpg",
    metaTitle: "Paralysis Ayurvedic Treatment in Prayagraj | Lakwa Care",
    metaDescription:
      "Ayurvedic rehabilitation support after paralysis (lakwa): Panchakarma, medicated oils and exercise guidance in Prayagraj.",
    h1: "Ayurvedic Rehabilitation Support for Paralysis in Prayagraj",
    intro:
      "A stroke is an emergency. Sudden weakness of the face, arm or leg, or slurred speech, needs immediate hospital care. Ayurvedic treatment begins once the patient is medically stable. In Ayurveda, paralysis (Pakshaghata / lakwa) is a major Vata disorder, and recovery depends on the cause, the area of the brain affected, and how early rehabilitation begins.",
    sections: [
      {
        heading: "Our treatment approach",
        bullets: [
          "Abhyanga with medicated oils and Swedana",
          "Basti, Nasya and Shirodhara as indicated",
          "Internal medicines",
          "Exercises and yoga-based mobility training, in step with physiotherapy",
          "Guidance for family members on home care, diet and prevention of a second stroke",
        ],
      },
      {
        heading: "Please note",
        body: "Continue your blood pressure, diabetes and blood-thinning medicines exactly as prescribed.",
      },
    ],
    faqs: [
      {
        q: "When should Ayurvedic treatment start after a stroke?",
        a: "As early as it is safe — once the treating hospital confirms the patient is stable.",
      },
    ],
    related: ["sciatica", "weakness-general-debility"],
  },
  {
    slug: "infertility",
    name: "Infertility (Male & Female)",
    short:
      "Confidential consultation for couples, including sexual health concerns.",
    group: "Fertility & Sexual Health",
    sanskrit: "Vandhyatva",
    icon: "heart",
    image: "/images/treatments/pulse.jpg",
    metaTitle: "Infertility Ayurvedic Treatment in Prayagraj (Male/Female)",
    metaDescription:
      "Confidential Ayurvedic consultation for male and female infertility and sexual health concerns at Advance Ayurved Centre, Prayagraj.",
    h1: "Ayurvedic Treatment for Infertility in Prayagraj",
    intro:
      "Difficulty conceiving affects many couples, and the cause may lie with either partner or both. We encourage couples to consult together. Everything you share stays confidential.",
    sections: [
      {
        heading: "What we assess",
        bullets: [
          "Women: menstrual history, ovulation, PCOS, thyroid function, weight, previous reports",
          "Men: semen analysis, lifestyle, stress, addictions, sexual health concerns",
        ],
      },
      {
        heading: "Our treatment approach",
        bullets: [
          "Ayurvedic medicines to support hormonal balance and reproductive health (Vajikarana and Rasayana therapy)",
          "Panchakarma, including Uttar Basti where indicated",
          "Diet, weight, sleep and stress management",
          "Counselling for the couple",
          "Consultation with our Ayurvedic physician and sexologist, Dr Shubham Agrahari, for sexual health concerns",
        ],
      },
      {
        heading: "Working with your other doctors",
        body: "We work alongside your gynaecologist or fertility specialist and refer you where advanced procedures are needed.",
      },
    ],
    faqs: [
      { q: "Is the consultation confidential?", a: "Completely." },
      {
        q: "How long before we see results?",
        a: "Fertility treatment takes time and outcomes differ between couples. No genuine doctor can guarantee a pregnancy.",
      },
    ],
    related: ["weakness-general-debility", "diabetes"],
  },
  {
    slug: "weakness-general-debility",
    name: "Weakness & General Debility",
    short:
      "Rasayana (rejuvenation) therapy for fatigue, low stamina and poor immunity.",
    group: "Strength & Immunity",
    sanskrit: "Daurbalya",
    icon: "sun",
    image: "/images/treatments/hero.jpg",
    metaTitle: "Ayurvedic Treatment for Weakness & Fatigue in Prayagraj",
    metaDescription:
      "Rasayana therapy, diet and lifestyle correction for chronic weakness, fatigue and low immunity. Consult in Prayagraj.",
    h1: "Ayurvedic Treatment for Weakness and General Debility in Prayagraj",
    intro:
      "Constant tiredness, low stamina, poor appetite, frequent infections or slow recovery after an illness are signs that the body needs attention.",
    sections: [
      {
        heading: "First, find the cause",
        body: "Weakness can come from anaemia, thyroid problems, diabetes, vitamin deficiencies, poor sleep, stress or a recent illness. We check for these before starting treatment.",
      },
      {
        heading: "Our treatment approach",
        bullets: [
          "Rasayana (rejuvenation) therapy suited to your age and constitution",
          "Medicines to improve appetite and digestion",
          "A nourishing, affordable diet plan",
          "Abhyanga and other strengthening therapies",
          "Sleep, yoga and daily-routine guidance",
        ],
      },
    ],
    faqs: [
      {
        q: "Will I need blood tests?",
        a: "Often yes — a few basic tests help us rule out anaemia, thyroid and sugar problems before we plan Rasayana therapy.",
      },
    ],
    related: ["diabetes", "infertility"],
  },
];

export const getTreatment = (slug: string) =>
  treatments.find((t) => t.slug === slug);

/* ---------------- Panchakarma therapies ---------------- */

export type Therapy = {
  slug: string;
  name: string;
  short: string;
  image: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  advisedFor: string[];
  expect: string;
  sittings: string;
  note?: string;
};

export const therapies: Therapy[] = [
  {
    slug: "shirodhara",
    name: "Shirodhara",
    short:
      "A steady stream of warm medicated oil on the forehead, for stress, poor sleep and headaches.",
    image: "/images/treatments/shirodhara.jpg",
    metaTitle: "Shirodhara Therapy in Prayagraj",
    metaDescription:
      "Shirodhara for stress, poor sleep and headaches: warm medicated oil therapy by trained Panchakarma therapists in Prayagraj.",
    h1: "Shirodhara Therapy in Prayagraj",
    intro:
      "In Shirodhara, warm medicated oil (or buttermilk or a herbal decoction) is poured in a thin, steady stream over the forehead for 30–45 minutes while you lie comfortably.",
    advisedFor: [
      "Stress and anxiety",
      "Disturbed sleep",
      "Tension headaches and migraine",
      "Mental fatigue",
    ],
    expect:
      "A short head massage, the oil stream, then rest. Most people find it deeply relaxing. Avoid cold wind, a head bath in cold water and heavy meals straight afterwards.",
    sittings: "Usually 7–14, as advised by the doctor.",
  },
  {
    slug: "padabhyanga",
    name: "Padabhyanga",
    short: "Warm-oil foot massage for relaxation and tired legs.",
    image: "/images/treatments/room.jpg",
    metaTitle: "Padabhyanga (Ayurvedic Foot Massage) in Prayagraj",
    metaDescription:
      "Padabhyanga: a warm-oil Ayurvedic foot massage for relaxation, tired legs and better sleep at Advance Ayurved Centre, Prayagraj.",
    h1: "Padabhyanga — Ayurvedic Foot Massage in Prayagraj",
    intro:
      "Padabhyanga is a warm-oil massage of the feet and lower legs that works on the marma (vital) points of the soles.",
    advisedFor: [
      "Tired, aching feet and legs",
      "Dryness and cracked heels",
      "Restlessness and poor sleep",
      "General relaxation",
    ],
    expect:
      "Warm herbal oil is worked into the soles, ankles and calves with slow, rhythmic strokes for 20–30 minutes, followed by a short rest.",
    sittings: "Single sessions or a short course, as advised.",
    note: "People with diabetic foot problems, open wounds, infections or swelling of unknown cause should consult the doctor first.",
  },
  {
    slug: "janu-basti",
    name: "Janu Basti",
    short: "Warm medicated oil pooled over the knee inside a dough ring.",
    image: "/images/treatments/knee.jpg",
    metaTitle: "Janu Basti Knee Therapy in Prayagraj",
    metaDescription:
      "Janu Basti: warm medicated oil therapy for knee pain and stiffness at Advance Ayurved Centre, Prayagraj.",
    h1: "Janu Basti — Ayurvedic Knee Therapy in Prayagraj",
    intro:
      "A ring of dough is placed around the knee and filled with warm medicated oil, which is kept at a comfortable temperature for 30–40 minutes.",
    advisedFor: [
      "Osteoarthritis of the knee",
      "Stiffness and reduced movement",
      "Post-injury knee pain",
    ],
    expect:
      "You lie comfortably while the therapist maintains the oil temperature. Gentle massage follows. Most patients feel lighter and more mobile after a course.",
    sittings: "Usually 7–14 consecutive days.",
  },
  {
    slug: "kati-basti",
    name: "Kati Basti",
    short: "Oil-pooling therapy for the lower back.",
    image: "/images/treatments/room.jpg",
    metaTitle: "Kati Basti Lower Back Therapy in Prayagraj",
    metaDescription:
      "Kati Basti warm oil therapy for lower back pain, lumbar spondylitis and sciatica at Advance Ayurved Centre, Prayagraj.",
    h1: "Kati Basti — Ayurvedic Lower Back Therapy in Prayagraj",
    intro:
      "Warm medicated oil is held over the lower back inside a dough ring, relaxing deep muscles and easing stiffness.",
    advisedFor: [
      "Lower back pain",
      "Lumbar spondylitis",
      "Sciatica",
      "Disc-related stiffness",
    ],
    expect:
      "30–40 minutes of warm oil retention followed by gentle massage and herbal steam.",
    sittings: "Usually 7–14 consecutive days.",
  },
];

export const getTherapy = (slug: string) =>
  therapies.find((t) => t.slug === slug);

export const panchakarmaFive = [
  {
    name: "Vamana",
    what: "Therapeutic emesis",
    advised: "Kapha disorders: certain skin and respiratory conditions",
  },
  {
    name: "Virechana",
    what: "Therapeutic purgation",
    advised: "Pitta disorders: liver, skin, acidity",
  },
  {
    name: "Basti",
    what: "Medicated enema",
    advised: "Vata disorders: joint, spine and nerve problems",
  },
  {
    name: "Nasya",
    what: "Medicine through the nose",
    advised: "Head, neck and sinus problems, migraine",
  },
  {
    name: "Raktamokshana",
    what: "Bloodletting",
    advised: "Selected skin and joint conditions",
  },
];
