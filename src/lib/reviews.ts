/**
 * Genuine patient reviews, copied verbatim from the clinic's Google Business
 * Profile (4.9 ★, 320+ reviews) and the previous website on 2026-10-17.
 * Do not edit the wording. Tags link a review to the pages it is shown on.
 */
export type Review = {
  name: string;
  text: string;
  tags: string[];
  featured?: boolean;
  source?: "google" | "website";
};

export const googleRating = { value: 4.9, count: 320 };

export const reviews: Review[] = [
  {
    name: "Shivam Verma",
    text: "Best Dr. in Prayagraj for ayurvedic treatment. He listens all your problem patiently and then treats you accordingly. Staff is also very kind. My overall experience is very good. If someone looking for Ayurvedic treatment he can visit there without having any second thought.",
    tags: ["general"],
    featured: true,
    source: "google",
  },
  {
    name: "Amaresh Kumar",
    text: "I had a very good experience at Advance Ayurved with Dr. Sanjay. He listened to my concerns patiently, explained the treatment clearly, and suggested a natural approach that suited my condition. The staff was polite, the clinic was clean and well-managed, and I felt comfortable throughout my visit. I noticed improvement after following the prescribed treatment and lifestyle advice.",
    tags: ["general"],
    featured: true,
    source: "google",
  },
  {
    name: "Sandeep Prayag",
    text: "I had a truly wonderful experience at this Advanced Ayurvedic Center. The atmosphere is peaceful and healing, and the staff is extremely knowledgeable and compassionate. The treatments are deeply rooted in traditional Ayurvedic practices yet tailored to suit modern needs. I was impressed by the personalized attention given to my health concerns, and the results have been remarkable.",
    tags: ["general"],
    featured: true,
    source: "google",
  },
  {
    name: "Sahil Kumar",
    text: "One of the best Ayurvedic and Panchakarma centres in Prayagraj. The environment is peaceful and hygienic, and the staff is cooperative and caring. Dr. Sanjay Verma gives proper guidance and pays attention to every detail. I had a very positive experience and would definitely recommend Advance Ayurved Centre.",
    tags: ["panchakarma", "general"],
    featured: true,
    source: "google",
  },
  {
    name: "Pranshi Patel",
    text: "I've had a very positive experience with this centre. I've been dealing with Muscular Dystrophy, a condition that weakens the muscles, but after receiving Panchakarma therapy here for 2 months, I'm feeling quite optimistic about the results. Along with the Ayurvedic medicines prescribed by Dr. Sanjay, my muscles seem to be regaining strength, and I'm finding it easier to manage my daily activities.",
    tags: ["panchakarma", "weakness-general-debility", "paralysis"],
    featured: true,
    source: "google",
  },
  {
    name: "Akash Kumar Veeru",
    text: "Dr. Sanjay Sir is a highly knowledgeable and experienced doctor. He understands the patient's problems very well and explains the treatment clearly. The Panchakarma therapy here is very effective and properly managed. The environment of the centre is clean and peaceful, and the staff members are very polite and supportive. His treatment focuses on curing the disease from the root cause instead of just controlling the symptoms.",
    tags: ["panchakarma", "general"],
    featured: true,
    source: "google",
  },
  {
    name: "Umashankar Patel",
    text: "Dr Sanjay is very good knowledge of ayurved. I am suffering from bleeding piles and take treatment of 5 days, bleeding stop and associated with constipation relieved. Thanks Dr Sanjay Verma.",
    tags: ["piles-fistula-fissure"],
    source: "google",
  },
  {
    name: "Ashok Patel",
    text: "I am suffering from PCOS and treatment taken from Dr Sanjay Verma, and well recovered from symptoms. Good centre for ayurved. Again visited the centre, my symptoms relieved.",
    tags: ["infertility"],
    source: "google",
  },
  {
    name: "Renu Srivastav",
    text: "Dr. is very good person and very well experienced in PCOD/PCOS.",
    tags: ["infertility"],
    source: "google",
  },
  {
    name: "Israwati Kumari",
    text: "I was suffering from PCOD. After Panchkarma I became free from PCOD.",
    tags: ["infertility", "panchakarma"],
    source: "google",
  },
  {
    name: "Sushil",
    text: "Very good ayurvedic treatment for blockage of fallopian tube.",
    tags: ["infertility"],
    source: "google",
  },
  {
    name: "Jayprakash Patel",
    text: "I am suffering from diabetes. After 15 days, good control of my sugar.",
    tags: ["diabetes"],
    source: "google",
  },
  {
    name: "Ravikant Yadav",
    text: "Very effective health centre. After visiting Dr Sanjay Verma sir my neck pain is completely gone. Thanks a lot.",
    tags: ["back-pain-spondylitis", "arthritis"],
    source: "google",
  },
  {
    name: "Shashank Yadav",
    text: "I was very impressed with Doctor Sanjay Verma sir's expertise. They explained my condition in simple, understandable terms and laid out a clear treatment plan that worked perfectly. I feel confident in their clinical skills and I am grateful for their professional approach.",
    tags: ["general"],
    source: "google",
  },
  {
    name: "Ila Singh",
    text: "Had a very good experience at Advance Ayurved Centre. Dr. Sanjay is knowledgeable and takes time to explain everything clearly. The Ayurvedic treatment was effective and the staff was supportive throughout. I felt real improvement and would definitely recommend this place.",
    tags: ["general"],
    source: "google",
  },
  {
    name: "Aman Srivastava",
    text: "I had a very positive experience at Advance Ayurved Center. The staff is polite, knowledgeable and genuinely cares about patient's well-being. The doctor takes time to understand the root cause of the problem instead of just treating symptoms, which is something I really appreciated.",
    tags: ["general"],
    source: "google",
  },
  {
    name: "Ravindra Singh",
    text: "Highly satisfied with the treatment. The clinic provides authentic Ayurvedic medicines and therapies. The staff is supportive and the atmosphere is very positive. I recommend this centre to anyone suffering from chronic problems.",
    tags: ["general", "fatty-liver", "liver-cirrhosis", "jaundice", "kidney-stone", "migraine"],
    source: "google",
  },
  {
    name: "Dr. Dharmendra Kumar",
    text: "Dr. Sanjay Verma Sir at Advance Ayurved Centre is extremely supportive and cooperative. He is truly one of the best Ayurvedic doctors I've ever come across. The facilities are top-notch and well-maintained. The staff is also very helpful and courteous. With advanced treatments and a patient-centric approach, this centre is a must-visit for anyone seeking Ayurvedic care.",
    tags: ["general"],
    source: "google",
  },
  {
    name: "Daya Shankar Patel",
    text: "Well equipped Ayurvedic hospital & Panchkarma Centre in Prayagraj. Highly qualified doctor, with vast experience. Boon for the health of people. Thanks doctor for treating the people naturally.",
    tags: ["panchakarma", "general"],
    source: "website",
  },
  {
    name: "Naveen Kartikey",
    text: "The clinic is ideal for our health. Nature therapy and Panchkarma with perfect guidance is very helpful.",
    tags: ["panchakarma"],
    source: "google",
  },
  {
    name: "Sachin Kumar Sah",
    text: "Very good Panchkarma therapy facility and authentic ayurvedic medicine and consultation.",
    tags: ["panchakarma"],
    source: "google",
  },
  {
    name: "Shivank Mishra",
    text: "Good ayurved centre and very economical Panchkarma centre.",
    tags: ["panchakarma"],
    source: "google",
  },
  {
    name: "Akash Yadav",
    text: "Well equipped Panchkarma centre and good therapist.",
    tags: ["panchakarma"],
    source: "google",
  },
  {
    name: "Aneeta Yadav",
    text: "Panchkarma treatment is very effective and good control of symptoms.",
    tags: ["panchakarma", "knee-pain", "sciatica"],
    source: "google",
  },
  {
    name: "Santosh Saroj",
    text: "He is full of positive energy and has a very simple nature. He treats very well.",
    tags: ["general"],
    source: "google",
  },
  {
    name: "Manish Gaur",
    text: "Sabse achha ayurvedic centre hai. Dr. Sahab bahut achhe swabhaw ke hai aur unki dawa bahut phayada kar rahi hai hume.",
    tags: ["general"],
    source: "website",
  },
  {
    name: "Neeraj Jaiswal",
    text: "Nice, and comfortable beds.",
    tags: ["panchakarma"],
    source: "google",
  },
  {
    name: "Sulabh Kumar",
    text: "Staff behaviour is good. Environment is good.",
    tags: ["general"],
    source: "google",
  },
];

/** One-line quotes for the scrolling ribbon. */
export const shortQuotes: { q: string; by: string }[] = [
  { q: "Best ayurvedic center in Allahabad", by: "Vinay Tiwari" },
  { q: "Excellent treatment and very supportive doctor", by: "Rishika Yadav" },
  { q: "Very good panchkarma centre", by: "Shubham Yadav" },
  { q: "Good ayurveda and authentic herbal products", by: "Er Ranvijay Singh" },
  { q: "Very good diagnosis and treatment", by: "Javed Khan" },
  { q: "Excellent service and cooperative staff", by: "Braj Kishor" },
  { q: "Best Consultant Doctor & team", by: "Vikas Kumar Yadav" },
  { q: "Very good panchkarma therapy and facility", by: "Om Prakash" },
  { q: "Best ayurvedic centre and economical treatment", by: "Pushpendra Yadav" },
  { q: "Best treatment ayurvedic doctor in Prayagraj", by: "Shashank Kumar" },
  { q: "Everything is good — diagnosis, panchakarma", by: "Rahul Kumar Yadav" },
  { q: "Good hospital and good care of patients", by: "Rishika Sonkar" },
];

export const featuredReviews = reviews.filter((r) => r.featured);

export function reviewsFor(tags: string[], limit = 3): Review[] {
  const hit = reviews.filter((r) => r.tags.some((t) => tags.includes(t)));
  const fill = reviews.filter((r) => !hit.includes(r) && r.tags.includes("general"));
  return [...hit, ...fill].slice(0, limit);
}
