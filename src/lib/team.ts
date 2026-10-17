export type Doctor = {
  slug: string;
  name: string;
  role: string;
  qualification: string;
  bio: string;
  focus: string[];
  languages?: string[];
  initials: string;
  photo?: string;
};

export const doctors: Doctor[] = [
  {
    slug: "dr-sanjay-verma",
    name: "Dr Sanjay Verma",
    role: "Director",
    qualification: "MD (Ayurved)",
    bio: "Dr Sanjay Verma leads clinical care at Advance Ayurved Centre. With more than 15 years of practice, he consults on chronic and lifestyle conditions including anorectal disorders (piles, fistula, fissure), liver disorders, joint and spine problems, and metabolic conditions. His consultations begin with a detailed history, nadi pariksha and a review of your reports — and end with a plan you can actually follow.",
    focus: [
      "Anorectal disorders",
      "Liver & metabolic care",
      "Joint, spine & nerve disorders",
      "Panchakarma",
    ],
    languages: ["Hindi", "English"],
    initials: "SV",
    photo: "/images/clinic/dr-sanjay-verma-desk.jpg",
  },
  {
    slug: "dr-sweta-singh",
    name: "Dr Sweta Singh",
    role: "Managing Director",
    qualification: "Ayurvedic Physician",
    bio: "Dr Sweta Singh oversees patient care and the day-to-day running of the centre, with a focus on making every visit calm, private and well organised. She consults alongside Dr Verma and leads the centre's women's health and wellness programmes.",
    focus: ["Women's health", "Wellness programmes", "Patient care"],
    languages: ["Hindi", "English"],
    initials: "SS",
  },
  {
    slug: "dr-shubham-agrahari",
    name: "Dr Shubham Agrahari",
    role: "Ayurvedic Physician & Sexologist",
    qualification: "Ayurvedic Physician",
    bio: "Dr Shubham Agrahari consults on men's and women's sexual health and fertility concerns in complete confidentiality, combining classical Vajikarana therapy with practical lifestyle guidance.",
    focus: ["Sexual health", "Male & female infertility", "Vajikarana therapy"],
    languages: ["Hindi", "English"],
    initials: "SA",
  },
];

export const staff = [
  { name: "DS Patel", role: "Manager" },
  { name: "Rohit Kumar", role: "Panchakarma Therapist" },
  { name: "Varsha Rani", role: "Panchakarma Therapist" },
  { name: "Awadesh Maurya", role: "Yoga Instructor" },
  { name: "Hariom Maurya", role: "Counsellor" },
  { name: "Rohit Kumar Gaur", role: "Clinical Staff" },
  { name: "Nilesh Yadav", role: "Pharmacist" },
];

export { googleRating, reviews as testimonials } from "./reviews";

export const blogPosts = [
  {
    slug: "piles-fissure-fistula-difference",
    title: "Piles, fissure or fistula: how to tell the difference",
    excerpt:
      "Three different problems, often confused. Here is how each one feels, what causes it, and when to see a doctor.",
    category: "Anorectal care",
    readTime: "6 min",
    image: "/images/treatments/pharmacy.jpg",
  },
  {
    slug: "fatty-liver-grades-explained",
    title: "Fatty liver grade 1, 2 and 3: what your ultrasound report means",
    excerpt:
      "Found 'grade 1 fatty liver' on your report? Here is what the grades mean and what to do next.",
    category: "Liver care",
    readTime: "5 min",
    image: "/images/treatments/herbs.jpg",
  },
  {
    slug: "what-is-panchakarma",
    title: "What is Panchakarma? Procedure, benefits and who should avoid it",
    excerpt:
      "A plain-language guide to the five classical procedures, what a course involves, and who it is not for.",
    category: "Panchakarma",
    readTime: "8 min",
    image: "/images/treatments/room.jpg",
  },
  {
    slug: "swarnaprashan-guide",
    title: "Swarnaprashan: benefits, right age and Pushya Nakshatra dates",
    excerpt:
      "Everything parents ask us about Swarnaprashan — and why it never replaces routine vaccination.",
    category: "Children",
    readTime: "5 min",
    image: "/images/treatments/swarnaprashan.jpg",
  },
  {
    slug: "sciatica-daily-habits",
    title: "Sciatica: 7 daily habits that make it worse",
    excerpt:
      "From how you sit on a two-wheeler to how you lift a bucket — small changes that take pressure off the nerve.",
    category: "Spine care",
    readTime: "4 min",
    image: "/images/treatments/knee.jpg",
  },
  {
    slug: "ayurvedic-diet-for-diabetes",
    title: "Ayurvedic diet for diabetes: what to eat and what to avoid",
    excerpt:
      "A practical, home-cooked Indian diet plan that supports steadier sugar control.",
    category: "Diabetes",
    readTime: "7 min",
    image: "/images/treatments/pulse.jpg",
  },
];
