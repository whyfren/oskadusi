// ============================================================================
// Site Configuration
// ============================================================================

export interface SiteConfig {
  title: string;
  description: string;
  language: string;
}

export const siteConfig: SiteConfig = {
  title: "OSKADUSI - Leading Tomorrow",
  description: "Official website of the OSKADUSI - Empowering students through leadership, innovation, and community engagement.",
  language: "id",
};

// ============================================================================
// Navigation Configuration
// ============================================================================

export interface NavItem {
  label: string;
  href: string;
}

export interface NavigationConfig {
  logo: string;
  items: NavItem[];
}

export const navigationConfig: NavigationConfig = {
  logo: "OSKADUSI",
  items: [
    { label: "About", href: "#about" },
    { label: "Programs", href: "#programs" },
    { label: "Structure", href: "#structure" },
    { label: "Events", href: "#events" },
    { label: "Contact", href: "#contact" },
  ],
};

// ============================================================================
// Hero Section Configuration
// ============================================================================

export interface HeroConfig {
  title: string;
  subtitle: string;
  backgroundImage: string;
  osisImage: string;
  copyright: string;
}

export const heroConfig: HeroConfig = {
  title: "/LOGO_OSIS.webp",
  subtitle: "Inspire. Empower. Transform.",
  backgroundImage: "/OSKADUSI.webp",
  osisImage: "/hero-osis.webp",
  copyright: "© 2026 OSKADUSI",
};

// ============================================================================
// About Section Configuration
// ============================================================================

export interface AboutConfig {
  titleLine1: string;
  titleLine2: string;
  description: string;
  image1: string;
  image1Alt: string;
  image2: string;
  image2Alt: string;
  authorImage: string;
  authorName: string;
  authorBio: string;
}

export const aboutConfig: AboutConfig = {
  titleLine1: "Kami berdedikasi untuk menciptakan komunitas sekolah yang dinamis",
  titleLine2: "di mana setiap suara siswa didengar dan dihargai.",
  description: "OSKADUSI berfungsi sebagai jembatan antara siswa dan sekolah, menyelenggarakan acara, mengadvokasi kepentingan mahasiswa, dan menumbuhkan budaya kepemimpinan dan pelayanan. Sejak didirikan, kami telah memulai puluhan program yang sukses dan menjangkau ribuan siswa.",
  image1: "/about-1.webp",
  image1Alt: "Rapat Dewan Siswa",
  image2: "/about-2.webp",
  image2Alt: "Siswa berkolaborasi",
  authorImage: "/president.webp",
  authorName: "Aulia N.",
  authorBio: "Sebagai Ketua OSIS, saya percaya pada kekuatan aksi kolektif. Bersama-sama, kita dapat membangun sekolah di mana setiap siswa berkembang dan berkontribusi pada sesuatu yang lebih besar dari diri mereka sendiri.",
};

// ============================================================================
// Works Section Configuration (Used for Programs)
// ============================================================================

export interface WorkItem {
  id: number;
  title: string;
  category: string;
  image: string;
}

export interface WorksConfig {
  title: string;
  subtitle: string;
  projects: WorkItem[];
}

export const worksConfig: WorksConfig = {
  title: "Our Programs",
  subtitle: "Initiatives designed to enrich student life and develop future leaders.",
  projects: [
    { id: 1, title: "Leadership Academy", category: "Development", image: "/program-1.jpg" },
    { id: 2, title: "Community Outreach", category: "Service", image: "/program-2.jpg" },
    { id: 3, title: "Mentorship Program", category: "Support", image: "/program-3.jpg" },
    { id: 4, title: "Innovation Challenge", category: "Competition", image: "/program-4.jpg" },
  ],
};

// ============================================================================
// Services Section Configuration (Used for Organization Structure)
// ============================================================================

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface ServicesConfig {
  title: string;
  subtitle: string;
  services: ServiceItem[];
}

export const servicesConfig: ServicesConfig = {
  title: "Organization Structure",
  subtitle: "Meet the dedicated teams that make our vision a reality.",
  services: [
    {
      id: "01",
      title: "Executive Board",
      description: "The President, Vice President, Secretary, and Treasurer oversee all council operations and strategic planning.",
      image: "/structure-1.jpg"
    },
    {
      id: "02",
      title: "Events Committee",
      description: "Plans and executes campus-wide events, from orientation week to graduation celebrations.",
      image: "/structure-2.jpg"
    },
    {
      id: "03",
      title: "Communications Team",
      description: "Manages social media, newsletters, and all internal and external communications.",
      image: "/structure-3.jpg"
    },
    {
      id: "04",
      title: "Student Welfare",
      description: "Advocates for student needs and works with administration on policy improvements.",
      image: "/structure-4.jpg"
    },
  ],
};

// ============================================================================
// Testimonials Section Configuration
// ============================================================================

export interface TestimonialItem {
  id: number;
  name: string;
  title: string;
  quote: string;
  image: string;
}

export interface TestimonialsConfig {
  title: string;
  testimonials: TestimonialItem[];
}

export const testimonialsConfig: TestimonialsConfig = {
  title: "Student Voices",
  testimonials: [
    {
      id: 1,
      name: "Rizky Pratama",
      title: "Kelas X RPL",
      quote: "Awalnya saya nggak pede buat ikut organisasi, tapi di sini saya jadi berani ngomong di depan orang dan ngerasa punya circle yang support banget.",
      image: "/testimonial-1.jpg"
    },
    {
      id: 2,
      name: "Putri",
      title: "Kelas XI TEI",
      quote: "Kegiatan event yang diadain bener-bener ngebantu kita belajar kerja tim. Capek sih, tapi puas banget pas acaranya sukses.",
      image: "/testimonial-2.jpg"
    },
    {
      id: 3,
      name: "Shandika",
      title: "Kelas XI TSM",
      quote: "Saya dapet banyak pengalaman baru, dari yang awalnya cuma ikut-ikutan jadi malah keterusan aktif. Seru sih, banyak kenalan juga.",
      image: "/testimonial-3.jpg"
    },
  ],
};

// ============================================================================
// Pricing Section Configuration (Used for Event Tiers)
// ============================================================================

export interface PricingPlan {
  id: number;
  name: string;
  price: number;
  unit: string;
  featured: boolean;
  features: string[];
}

export interface PricingConfig {
  title: string;
  subtitle: string;
  ctaButtonText: string;
  plans: PricingPlan[];
}

export const pricingConfig: PricingConfig = {
  title: "Upcoming Events",
  subtitle: "Join us at these exciting upcoming activities and make the most of your campus experience.",
  ctaButtonText: "Register Now",
  plans: [
    {
      id: 1,
      name: "Classmeet Competition",
      price: 5,
      unit: "per class",
      featured: true,
      features: [
        "Lomba Kompetitif antar kelas",
        "Lomba e-sport",
        "Lomba olahraga",
        "Hadiah untuk juara"
      ]
    },
    {
      id: 2,
      name: "Pentas Seni (PENSI)",
      price: 10,
      unit: "ticket",
      featured: false,
      features: [
        "Penampilan band & dance",
        "Bazar makanan",
        "Guest star lokal",
        "Support karya siswa"
      ]
    },
    {
      id: 4,
      name: "MPLS 2027",
      price: 0,
      unit: "mandatory",
      featured: false,
      features: [
        "Pengenalan lingkungan sekolah",
        "Games & ice breaking",
        "Materi dari OSIS",
        "Tur fasilitas sekolah"
      ]
    }
  ],
};

// ============================================================================
// FAQ Section Configuration
// ============================================================================

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQConfig {
  title: string;
  faqs: FAQItem[];
}

export const faqConfig: FAQConfig = {
  title: "Frequently Asked Questions",
  faqs: [
    {
      question: "Gimana cara bergabung dengan OSKADUSI?",
      answer: "Kami mengadakan pemilihan di setiap awal tahun ajaran baru. jika kamu kelas 10, kamu bisa mendaftar untuk menjadi anggota OSKADUSI dengan mengisi formulir online yang akan diumumkan melalui media sosial kami. Proses seleksi melibatkan wawancara dan penilaian minat serta komitmen terhadap kegiatan OSKADUSI."
    },
    {
      question: "Bagaimana cara saya mengusulkan acara atau inisiatif?",
      answer: "Kami menyambut semua ide! Anda dapat mengajukan proposal atau ide melalui formulir online kami, berbicara dengan anggota dewan mana pun, atau menghadiri pertemuan umum untuk menyampaikan ide Anda secara langsung."
    },
    {
      question: "Sumber daya apa yang disediakan oleh OSKADUSI?",
      answer: "Kami menawarkan pelatihan kepemimpinan, peluang pendanaan acara, pengembangan soft skills, ruang belajar, dan dukungan advokasi untuk masalah mahasiswa."
    },
  ],
};

// ============================================================================
// Blog Section Configuration (Used for News/Events)
// ============================================================================

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  image: string;
  category: string;
}

export interface BlogConfig {
  title: string;
  subtitle: string;
  allPostsLabel: string;
  readMoreLabel: string;
  readTimePrefix: string;
  posts: BlogPost[];
}

export const blogConfig: BlogConfig = {
  title: "Latest News & Events",
  subtitle: "Stay updated with the latest happenings and announcements from the Student Council.",
  allPostsLabel: "View All News",
  readMoreLabel: "Read More",
  readTimePrefix: "Read ",
  posts: [
    {
      id: 1,
      title: "Annual Leadership Summit Announced",
      excerpt: "Join us for our flagship event featuring industry leaders, workshops, and networking opportunities designed to develop the next generation of leaders.",
      readTime: "3 min",
      date: "Mar 15, 2024",
      image: "/blog-1.jpg",
      category: "Events"
    },
    {
      id: 2,
      title: "New Mentorship Program Launch",
      excerpt: "We're excited to announce our expanded mentorship program connecting upperclassmen with first-year students for academic and personal growth.",
      readTime: "4 min",
      date: "Mar 10, 2024",
      image: "/blog-2.jpg",
      category: "Programs"
    },
  ],
};

// ============================================================================
// Contact Section Configuration
// ============================================================================

export interface ContactFormOption {
  value: string;
  label: string;
}

export interface ContactConfig {
  title: string;
  subtitle: string;
  nameLabel: string;
  emailLabel: string;
  projectTypeLabel: string;
  projectTypePlaceholder: string;
  projectTypeOptions: ContactFormOption[];
  messageLabel: string;
  submitButtonText: string;
  image: string;
}

export const contactConfig: ContactConfig = {
  title: "Get In Touch",
  subtitle: "Have questions or ideas? We'd love to hear from you. Reach out to us anytime.",
  nameLabel: "Name *",
  emailLabel: "Email *",
  projectTypeLabel: "Inquiry Type",
  projectTypePlaceholder: "",
  projectTypeOptions: [
    { value: "general", label: "General Inquiry" },
    { value: "event", label: "Event Proposal" },
    { value: "join", label: "Join Council" },
    { value: "partnership", label: "Partnership" },
    { value: "feedback", label: "Feedback" },
  ],
  messageLabel: "Message",
  submitButtonText: "Send Message",
  image: "/contact.jpg",
};

// ============================================================================
// Footer Configuration
// ============================================================================

export interface FooterLink {
  label: string;
  href: string;
  icon?: string;
}

export interface FooterConfig {
  marqueeText: string;
  marqueeHighlightChars: string[];
  navLinks1: FooterLink[];
  navLinks2: FooterLink[];
  ctaText: string;
  ctaHref: string;
  copyright: string;
  tagline: string;
}

export const footerConfig: FooterConfig = {
  marqueeText: "Empowering Students Building Community Creating Leaders",
  marqueeHighlightChars: ["E", "B", "C"],
  navLinks1: [
    { label: "Home", href: "#hero" },
    { label: "About Us", href: "#about" },
    { label: "Programs", href: "#programs" },
    { label: "Structure", href: "#structure" },
  ],
  navLinks2: [
    { label: "Instagram", href: "https://www.instagram.com/osissmkn2bekasi/", icon: "Instagram" },
    { label: "TikTok", href: "https://www.tiktok.com/@oskadusi02", icon: "Music" },
    { label: "YouTube", href: "https://www.youtube.com/@osissmkn2kotabekasi930", icon: "Youtube" },
    { label: "E-mail", href: "https://linkedin.com", icon: "Mail" },
  ],
  ctaText: "Join Us",
  ctaHref: "#contact",
  copyright: "© 2026 OSKADUSI. All rights reserved.",
  tagline: "Leading with purpose, serving with passion",
};
