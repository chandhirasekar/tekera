"use client";

import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Award,
  Users,
  User,
  FileText,
  Briefcase,
  HardHat,
  Phone,
  Mail,
  Globe,
  MapPin,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  MessageSquare,
  Plus,
  Minus,
  Clock,
  BookOpen,
  ArrowRight,
  HelpCircle,
  Star,
  ExternalLink
} from "lucide-react";

// Custom inline SVG Social Icons to avoid library import issues
function Instagram({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
}

function Linkedin({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

function Youtube({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.498 6.163c-.272-1.015-1.074-1.819-2.089-2.09C19.569 3.545 12 3.545 12 3.545s-7.57 0-9.409.528c-1.015.27-1.817 1.075-2.089 2.09C0 8.002 0 12 0 12s0 3.998.502 5.837c.272 1.016 1.074 1.819 2.089 2.09C4.43 20.455 12 20.455 12 20.455s7.57 0 9.41-.528c1.015-.27 1.817-1.074 2.089-2.09C24 15.998 24 12 24 12s0-3.998-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

// Testimonials data from database with photos
const testimonials = [
  {
    id: 701,
    title: "From Beginner to Professional in Just a Few Months!",
    company: "3DE Global",
    role: "Tekla Modeler",
    content: "Before joining Tekera, I had no experience in Tekla Structures. The hands-on training and real-world projects gave me the confidence to master the software. Thanks to the placement support, I secured a job at 3DE Global as a Tekla Modeler. I highly recommend Tekera for anyone serious about a career in BIM and structural detailing!",
    student: "Ashwin",
    image: "/images/testimonials/arun.jpg"
  },
  {
    id: 702,
    title: "The Best Career Decision I Ever Made!",
    company: "Esskay Structures",
    role: "Steel Detailer",
    content: "Coming from a CAD background, I wanted to upskill in Tekla Structures to improve my job prospects. The expert instructors at Tekera made learning easy, and the placement team ensured I landed a role at Esskay Structures. I am now working on large-scale structural projects, all thanks to Tekera's training and mentorship!",
    student: "Azhar",
    image: "/images/testimonials/priya.jpg"
  },
  {
    id: 703,
    title: "International Placement Achieved!",
    company: "E2G Engineering Services",
    role: "BIM Engineer",
    content: "Tekera not only gave me the technical skills but also prepared me for interviews and workplace challenges. I started my career at E2G Engineering Services, and within a year, I was offered an opportunity in UAE. The training here truly opens global doors!",
    student: "Santhosh",
    image: "/images/testimonials/riaz.jpg"
  },
  {
    id: 704,
    title: "Hands-on Training That Made a Difference!",
    company: "Hi-Q Engineering",
    role: "Kelly steel (Dubai)",
    content: "What sets Tekera apart is their real-world approach to learning. We didn’t just study tools—we worked on live projects, making it easy to adapt to industry workflows. Thanks to their placement assistance, I secured a position at Hi-Q Engineering, where I now work on high-rise structures and industrial projects.",
    student: "Chittrarasu",
    image: "/images/testimonials/sanjay.jpg"
  }
];

// FAQS with placement & interview support details
const faqs = [
  {
    question: "Who can enroll in this course?",
    answer: "Our courses are designed for aspiring structural engineers, CAD technicians, BIM professionals, and anyone eager to master Tekla Structures. Whether you're a student, fresher, or working professional looking to upskill, this training is for you!"
  },
  {
    question: "Do I need prior knowledge of Tekla?",
    answer: "No prior experience with Tekla is required! Our Tekla Structures Fundamentals course starts from the basics and gradually moves to advanced concepts. However, a basic understanding of engineering drawings and structural elements would be beneficial."
  },
  {
    question: "Is placement and mock interview support included?",
    answer: "Yes! We provide guaranteed placement support and FREE mock interview preparation (including resume building, portfolio creation, mock technical/HR reviews, and direct employer connection) for all our students. This is a core focus to ensure you land a valuable job!"
  },
  {
    question: "What career paths can I pursue after completing the course?",
    answer: "With Tekla expertise, you can explore roles like: Tekla Modeler (creating detailed 3D models for construction), Tekla Detailer (generating precise structural drawings for fabrication), BIM Engineer (working on Building Information Modeling projects), Structural Designer, and Tekla Checker. Many of our students have been placed in top engineering and construction firms!"
  },
  {
    question: "Do you offer online classes?",
    answer: "Yes! We provide both online and in-person training to suit your learning needs. Our online sessions include live instructor-led classes, hands-on exercises, and personalized mentoring to ensure an interactive and engaging learning experience."
  }
];

// Student video testimonials
const studentVideos = [
  {
    id: 1,
    student: "Ashwin",
    role: "Tekla Modeler at 3DE Global",
    src: "/videos/VID_20260718_051250_346.mp4",
    duration: "Testimonial"
  },
  {
    id: 2,
    student: "Azhar",
    role: "Steel Detailer at Esskay Structures",
    src: "/videos/VID_20260718_051255_884.mp4",
    duration: "Testimonial"
  },
  {
    id: 3,
    student: "Santhosh",
    role: "BIM Engineer",
    src: "/videos/VID_20260718_051301_758.mp4",
    duration: "Testimonial"
  },
  {
    id: 4,
    student: "Chittrarasu",
    role: "Kelly steel (Dubai)",
    src: "/videos/VID_20260718_051316_435.mp4",
    duration: "Testimonial"
  },
  {
    id: 5,
    student: "Siva Vignesh R",
    role: "3DE Global",
    src: "/videos/sivatekera.mp4",
    duration: "Testimonial"
  }
];

const partners = [
  { name: "3DE Global", image: "/partner/3De-Logo-HD-01.jpg" },
  { name: "Esskay Structures", image: "/partner/Esskay_Structures.png" },
  { name: "E2G Engineering", image: "/partner/E2G.png" },
  { name: "Hi-Q", image: "" },
  { name: "Gen Engineering", image: "/partner/Gen_Eng.jpg" },
  { name: "Edanbrook", image: "/partner/Edanbrook.png" },
  { name: "Fidelis", image: "/partner/Fidelis.png" },
  { name: "AISD Engineering", image: "" },
  { name: "Cistron Infotek", image: "" },
  { name: "Unicrest Engineering", image: "" },
  { name: "4D Detailing", image: "" },
  { name: "Duinz Engineering", image: "/partner/Duinz_Eng.svg" },
  { name: "Strutech", image: "/partner/Strutech.png" },
  { name: "ASD Engineering", image: "/partner/ASD_Engi.webp" },
  { name: "Caldim Engineering", image: "/partner/Caldim_Eng.png" },
  { name: "Eversendai", image: "" },
  { name: "DGS", image: "" },
  { name: "Pangulf", image: "" }
];

export default function Home() {
  const [activeTab, setActiveTab] = useState<"learn" | "for" | "highlights">("learn");
  const [selectedVideo, setSelectedVideo] = useState(studentVideos[0]);
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    timing: "Part-Time Morning",
    message: ""
  });

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  const nextTestimonial = () => {
    setTestimonialIdx((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setTestimonialIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.phone) {
      setFormSubmitted(true);

      try {
        // Submit details directly to Web3Forms API to deliver leads to email
        // Note: Replace "YOUR_ACCESS_KEY_HERE" with a free access key from https://web3forms.com/
        await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify({
            access_key: "c82cc07d-1ef4-44b1-9657-2cbed9d859ac",
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            timing: formData.timing,
            message: formData.message || "N/A",
            subject: "New Student Enrollment Lead - Tekera Training Center"
          })
        });

        // Also open WhatsApp in parallel for instant client chat action
        const whatsappText = `Hi Tekera, I am interested in enrolling for the course. Here are my details:
- Name: ${formData.name}
- Email: ${formData.email}
- Phone: ${formData.phone}
- Preferred Timing: ${formData.timing}
- Message: ${formData.message || "N/A"}`;

        const whatsappUrl = `https://wa.me/918608719878?text=${encodeURIComponent(whatsappText)}`;
        window.open(whatsappUrl, "_blank");
      } catch (error) {
        console.error("Error submitting form", error);
      }

      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          timing: "Part-Time Morning",
          message: ""
        });
      }, 5000);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 overflow-x-hidden font-sans">

      {/* Sticky Blurred Navigation Bar */}
      <header className="sticky top-0 z-50 w-full bg-white/85 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <img
              src="/Tek_Logo.png"
              alt="TeKeRa Training Center Logo"
              className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </a>

          {/* Desktop Navigation Links with premium hover underlines */}
          <nav className="hidden md:flex items-center gap-8 font-semibold text-sm text-gray-600">
            <a href="#why-choose-us" className="relative py-2 transition-colors hover:text-brand-blue after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-brand-yellow hover:after:w-full after:transition-all after:duration-300">Why Us</a>
            <a href="#course" className="relative py-2 transition-colors hover:text-brand-blue after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-brand-yellow hover:after:w-full after:transition-all after:duration-300">Courses</a>
            <a href="#corporate" className="relative py-2 transition-colors hover:text-brand-blue after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-brand-yellow hover:after:w-full after:transition-all after:duration-300">Corporate</a>
            <a href="#testimonials" className="relative py-2 transition-colors hover:text-brand-blue after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-brand-yellow hover:after:w-full after:transition-all after:duration-300">Reviews</a>
            <a href="#faqs" className="relative py-2 transition-colors hover:text-brand-blue after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-brand-yellow hover:after:w-full after:transition-all after:duration-300">FAQs</a>
          </nav>

          <div className="hidden md:flex items-center gap-6">
            {/* <div className="flex flex-col items-center gap-4">
              <a
                href="tel:+918667299312"
                className="flex items-center gap-2 text-sm font-bold text-brand-blue hover:text-brand-blue-dark transition-colors font-sans"
              >
                <Phone className="w-4 h-4 text-brand-yellow-dark" />
                <span>+91 86672 99312</span>
              </a>
              <span className="text-gray-300">|</span>
              <a
                href="tel:+918608719878"
                className="flex items-center gap-2 text-sm font-bold text-brand-blue hover:text-brand-blue-dark transition-colors font-sans"
              >
                <Phone className="w-4 h-4 text-brand-yellow-dark" />
                <span>+91 86087 19878</span>
              </a>
            </div> */}
            <a
              href="#enroll"
              className="px-6 py-2.5 rounded-full bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold text-sm shadow-lg shadow-brand-blue/15 hover:shadow-brand-blue/30 transition-all duration-200 transform hover:-translate-y-0.5"
            >
              Enrol Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden w-full bg-white border-b border-gray-100 py-4 px-6 flex flex-col gap-4 shadow-xl">
            <a
              href="#why-choose-us"
              onClick={() => setMobileMenuOpen(false)}
              className="font-semibold text-gray-700 py-2 border-b border-gray-50 hover:text-brand-blue transition-colors"
            >
              Why Choose Us
            </a>
            <a
              href="#course"
              onClick={() => setMobileMenuOpen(false)}
              className="font-semibold text-gray-700 py-2 border-b border-gray-50 hover:text-brand-blue transition-colors"
            >
              Our Courses
            </a>
            <a
              href="#corporate"
              onClick={() => setMobileMenuOpen(false)}
              className="font-semibold text-gray-700 py-2 border-b border-gray-50 hover:text-brand-blue transition-colors"
            >
              Corporate Partnerships
            </a>
            <a
              href="#testimonials"
              onClick={() => setMobileMenuOpen(false)}
              className="font-semibold text-gray-700 py-2 border-b border-gray-50 hover:text-brand-blue transition-colors"
            >
              Success Stories
            </a>
            <a
              href="#faqs"
              onClick={() => setMobileMenuOpen(false)}
              className="font-semibold text-gray-700 py-2 border-b border-gray-50 hover:text-brand-blue transition-colors"
            >
              FAQs
            </a>
            <a
              href="tel:+918667299312"
              onClick={() => setMobileMenuOpen(false)}
              className="font-bold text-brand-blue py-2 border-b border-gray-50 flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-brand-yellow-dark" />
              Call: +91 86672 99312
            </a>
            <a
              href="tel:+918608719878"
              onClick={() => setMobileMenuOpen(false)}
              className="font-bold text-brand-blue py-2 border-b border-gray-50 flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-brand-yellow-dark" />
              Call: +91 86087 19878
            </a>
            <a
              href="#enroll"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 rounded-xl bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold shadow-md block"
            >
              Enrol Now
            </a>
          </div>
        )}
      </header>

      {/* Hero Section with subtle overlay grid pattern and background depth */}
      <section className="relative bg-gradient-to-br from-brand-blue to-brand-blue-dark text-white py-20 lg:py-28 overflow-hidden font-sans">
        {/* Geometric technical blueprint grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff07_1px,transparent_1px),linear-gradient(to_bottom,#ffffff07_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none" />
        {/* Glow rings */}
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-brand-yellow/5 blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] rounded-full bg-blue-300/10 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">

            {/* Hero Left Content */}
            <div className="lg:col-span-7 flex flex-col items-start gap-6" data-aos="fade-right">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold tracking-wider text-brand-yellow uppercase" data-aos="fade-down" data-aos-delay="100">
                <Award className="w-4 h-4 text-brand-yellow" /> Authorized Tekla Training Center in Tamil Nadu
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-heading tracking-tight leading-tight" data-aos="fade-up" data-aos-delay="200">
                Empowering Your Career in <span className="text-brand-yellow">Structural Detailing</span>
              </h1>
              <p className="text-base md:text-lg text-blue-100/90 max-w-2xl leading-relaxed font-sans" data-aos="fade-up" data-aos-delay="300">
                Bridge the gap between engineering theory and real structural steel detailing. Learn from active industry experts, build a professional portfolio, and secure high-value placements.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4" data-aos="fade-up" data-aos-delay="400">
                <a
                  href="#enroll"
                  className="px-8 py-4 rounded-xl bg-brand-yellow text-brand-slate font-bold text-base shadow-lg shadow-brand-yellow/20 hover:shadow-brand-yellow/40 transition-all duration-200 text-center hover:bg-brand-yellow-dark transform hover:-translate-y-0.5"
                >
                  Enrol Today
                </a>
                <a
                  href="#course"
                  className="px-8 py-4 rounded-xl bg-transparent hover:bg-white/10 text-white font-semibold text-base border-2 border-white transition-all duration-200 text-center backdrop-blur-md transform hover:-translate-y-0.5"
                >
                  Explore Course
                </a>
              </div>

              {/* Placements Info */}
              <div className="flex items-center gap-4 mt-6 text-sm text-blue-100/80 font-sans" data-aos="fade-up" data-aos-delay="500">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-brand-yellow flex items-center justify-center text-xs font-black text-brand-slate border-2 border-brand-blue">1</div>
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-xs font-black text-brand-blue border-2 border-brand-blue">2</div>
                  <div className="w-8 h-8 rounded-full bg-blue-300 flex items-center justify-center text-xs font-black text-brand-blue border-2 border-brand-blue">3</div>
                </div>
                <span>More than <strong>180+ successful placements</strong> across top design houses.</span>
              </div>
            </div>

            {/* Hero Right Metrics Grid with Poppins text for numbers */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4 font-sans">
              <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 flex flex-col gap-2 hover:bg-white/10 transition-all duration-300" data-aos="zoom-in" data-aos-delay="100">
                <span className="text-4xl lg:text-5xl font-black font-heading text-brand-yellow">180+</span>
                <span className="text-sm font-semibold tracking-wide text-blue-100">Students Placed</span>
                <p className="text-xs text-blue-200/70 leading-normal">Across major steel design houses and BIM detailers.</p>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 flex flex-col gap-2 hover:bg-white/10 transition-all duration-300" data-aos="zoom-in" data-aos-delay="200">
                <span className="text-4xl lg:text-5xl font-black font-heading text-brand-yellow">100+</span>
                <span className="text-sm font-semibold tracking-wide text-blue-100">Partner Companies</span>
                <p className="text-xs text-blue-200/70 leading-normal">Global design firms recruit directly from our center.</p>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 flex flex-col gap-2 hover:bg-white/10 transition-all duration-300" data-aos="zoom-in" data-aos-delay="300">
                <span className="text-4xl lg:text-5xl font-black font-heading text-brand-yellow">#1</span>
                <span className="text-sm font-semibold tracking-wide text-blue-100">Accredited Center</span>
                <p className="text-xs text-blue-200/70 leading-normal">Official Tekla structures training software and curriculum.</p>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 flex flex-col gap-2 hover:bg-white/10 transition-all duration-300" data-aos="zoom-in" data-aos-delay="400">
                <span className="text-4xl lg:text-5xl font-black font-heading text-brand-yellow">8+ Yrs</span>
                <span className="text-sm font-semibold tracking-wide text-blue-100">Proven Experience</span>
                <p className="text-xs text-blue-200/70 leading-normal">Delivering quality education and expert career mentorship.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Partners Moving Ribbon with standardized font and grayscale colors */}
      <section className="bg-white border-y border-gray-100 py-8 overflow-hidden font-sans">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">
            Where Our Students are Placed
          </p>
          <div className="relative w-full flex overflow-x-hidden">
            {/* Carousel loop */}
            <div className="animate-marquee flex items-center whitespace-nowrap gap-16 select-none">
              {partners.map((partner, index) => (
                <div key={index} className="flex items-center justify-center h-12 grayscale contrast-75 hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300">
                  {partner.image ? (
                    <img
                      src={partner.image}
                      alt={partner.name}
                      className="h-8 md:h-10 w-auto max-w-[140px] object-contain"
                    />
                  ) : (
                    <span className="text-base font-extrabold tracking-wider text-gray-500 hover:text-brand-blue uppercase transition-colors">
                      {partner.name}
                    </span>
                  )}
                </div>
              ))}
              {/* Duplicate loop for seamless marquee effect */}
              {partners.map((partner, index) => (
                <div key={`dup-${index}`} className="flex items-center justify-center h-12 grayscale contrast-75 hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300">
                  {partner.image ? (
                    <img
                      src={partner.image}
                      alt={partner.name}
                      className="h-8 md:h-10 w-auto max-w-[140px] object-contain"
                    />
                  ) : (
                    <span className="text-base font-extrabold tracking-wider text-gray-500 hover:text-brand-blue uppercase transition-colors">
                      {partner.name}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section with Poppins/Inter font standardisation */}
      <section id="why-choose-us" className="py-20 lg:py-28 bg-gray-50 scroll-mt-20 font-sans">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-4" data-aos="fade-up">
            <span className="text-brand-blue font-bold text-sm uppercase tracking-widest">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-black font-heading text-brand-slate tracking-tight">
              Leading the Industry in Steel Structural Detailing Education
            </h2>
            <p className="text-gray-600">
              We empower aspiring Tekla professionals with both technical mastery and industry confidence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="p-8 rounded-2xl bg-white border border-gray-100 hover:border-brand-blue/30 shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex flex-col gap-4 justify-between group" data-aos="fade-up" data-aos-delay="100">
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue transition-colors duration-300 group-hover:bg-brand-blue group-hover:text-white">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-heading text-brand-slate">Authorized Tekla Center</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Learn from the best. Our official accreditation ensures you receive top-quality training aligned with industry standards for more than 8+ Years.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="p-8 rounded-2xl bg-white border border-gray-100 hover:border-brand-blue/30 shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex flex-col gap-4 justify-between group" data-aos="fade-up" data-aos-delay="200">
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue transition-colors duration-300 group-hover:bg-brand-blue group-hover:text-white">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-heading text-brand-slate">Expert Instructors</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Benefit from the knowledge and experience of seasoned Tekla professionals who are passionate about teaching and are from real working state experts.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="p-8 rounded-2xl bg-white border border-gray-100 hover:border-brand-blue/30 shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex flex-col gap-4 justify-between group" data-aos="fade-up" data-aos-delay="300">
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue transition-colors duration-300 group-hover:bg-brand-blue group-hover:text-white">
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-heading text-brand-slate">Free Mock Interview Preparation</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We equip you with the skills and confidence to ace your interviews. Our preparation includes resume building, mock interviews, and personalized feedback — <strong>completely free for all enrolled students</strong>.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="p-8 rounded-2xl bg-white border border-gray-100 hover:border-brand-blue/30 shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex flex-col gap-4 justify-between group" data-aos="fade-up" data-aos-delay="100">
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue transition-colors duration-300 group-hover:bg-brand-blue group-hover:text-white">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-heading text-brand-slate">Guaranteed Placement Support</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We're committed to your success. Our dedicated placement team provides comprehensive support to help you land your dream job and we have placed more than 180+ students.
                </p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="p-8 rounded-2xl bg-white border border-gray-100 hover:border-brand-blue/30 shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex flex-col gap-4 justify-between group" data-aos="fade-up" data-aos-delay="200">
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue transition-colors duration-300 group-hover:bg-brand-blue group-hover:text-white">
                  <HardHat className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-heading text-brand-slate">Hands-on Real Detailing</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Gain practical skills through hands-on projects and real-world simulations, preparing you fully for the real challenges of the steel construction industry.
                </p>
              </div>
            </div>

            {/* Card 6 */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-brand-blue to-brand-blue-dark text-white shadow-lg flex flex-col justify-between hover:scale-[1.02] transition-all duration-300" data-aos="fade-up" data-aos-delay="300">
              <div className="flex flex-col gap-3">
                <span className="text-brand-yellow font-extrabold text-sm uppercase tracking-wider">Ready to Begin?</span>
                <h3 className="text-2xl font-black font-heading">Secure Your Career in BIM Detailing</h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                  Join Tamil Nadu's top training cohort and get certified by the leading authorized detailing academy.
                </p>
              </div>
              <a
                href="#enroll"
                className="mt-6 w-full py-3 bg-brand-yellow hover:bg-brand-yellow-dark text-brand-slate font-bold rounded-xl text-center shadow-md transition-colors"
              >
                Apply Online Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Video Section (Hear From Our Students) */}
      <section className="py-20 bg-white border-y border-gray-100 font-sans scroll-mt-20" id="student-videos">
        <div className="max-w-6xl mx-auto px-6" data-aos="zoom-in">
          <div className="text-center max-w-2xl mx-auto mb-12 flex flex-col gap-3">
            <span className="text-brand-blue font-bold text-sm uppercase tracking-widest">Hear From Our Students</span>
            <h2 className="text-3xl md:text-4xl font-black font-heading text-brand-slate tracking-tight">
              Real Testimonials & Success Stories
            </h2>
            <p className="text-gray-600 font-sans">
              Real stories from students who trained at Tekera and are now working as professional Tekla modelers and detailers.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            {/* Main Video Player */}
            <div className="lg:col-span-8 bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800 flex flex-col relative">
              <video
                key={selectedVideo.id}
                src={`${selectedVideo.src}?v=1.1`}
                className="w-full object-contain aspect-video"
                controls
                autoPlay={true}
              >
                Your browser does not support the video tag.
              </video>
              {/* High-contrast name and course placement details caption bar below the video screen */}
              <div className="bg-slate-950 p-6 border-t border-slate-800">
                <h4 className="text-white font-bold text-lg font-heading">{selectedVideo.student}</h4>
                <p className="text-brand-yellow text-sm font-semibold mt-1">{selectedVideo.role}</p>
              </div>
            </div>

            {/* Video Playlist Side Panel */}
            <div className="lg:col-span-4 flex flex-col justify-start">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-3">Select Testimonial:</span>
              <div className="flex flex-col gap-3 overflow-y-auto max-h-[380px] pr-1">
                {studentVideos.map((video) => (
                  <button
                    key={video.id}
                    onClick={() => setSelectedVideo(video)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 flex items-start gap-4 ${selectedVideo.id === video.id
                      ? "bg-brand-blue/5 border-brand-blue/30 shadow-md"
                      : "bg-gray-50 border-gray-100 hover:bg-gray-100/70"
                      }`}
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${selectedVideo.id === video.id ? "bg-brand-blue text-white" : "bg-brand-blue/10 text-brand-blue"
                      }`}>
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-800 text-sm font-heading">{video.student}</h5>
                      <p className="text-xs text-gray-500 mt-0.5">{video.role}</p>
                      <span className="inline-block mt-1.5 px-2 py-0.5 rounded-full bg-brand-yellow/15 text-brand-yellow-dark text-[9px] font-bold uppercase">{video.duration}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Overview & Timing Tabs Section */}
      <section id="course" className="py-20 lg:py-28 bg-gray-50 scroll-mt-20 font-sans">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-12 gap-12 items-start">

            {/* Left Course Copy */}
            <div className="lg:col-span-5 flex flex-col gap-6" data-aos="fade-right">
              <span className="text-brand-blue font-bold text-sm uppercase tracking-widest">Our Courses & Timelines</span>
              <h2 className="text-3xl md:text-4xl font-black font-heading text-brand-slate tracking-tight">
                Tekla Structures Fundamentals
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Ready to dive into the world of Building Information Modeling (BIM) and structural design? Our Tekla Structures Fundamentals course is your launchpad. This comprehensive program will take you from a Tekla novice to a confident user, equipping you with the essential skills to model, detail, and document structural projects with precision.
              </p>

              {/* Timings Display Cards */}
              <div className="flex flex-col gap-4 mt-4 bg-white p-6 rounded-2xl border border-gray-100">
                <h4 className="font-extrabold font-heading text-brand-slate text-lg border-b border-gray-100 pb-3">Available Timings</h4>

                {/* <div className="flex items-start gap-4">
                  <div className="px-3 py-1 rounded bg-brand-blue/10 text-brand-blue text-xs font-black uppercase mt-1 flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> Full-Time</div>
                  <div>
                    <h5 className="font-bold text-gray-800 text-sm">Monday to Friday</h5>
                    <p className="text-xs text-gray-500">6-8 hours daily intensive classroom & practical projects.</p>
                  </div>
                </div> */}

                <div className="flex items-start gap-4">
                  <div className="px-3 py-1 rounded bg-brand-yellow/20 text-brand-yellow-dark text-xs font-black uppercase mt-1 flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> Part-Time</div>
                  <div>
                    <h5 className="font-bold text-gray-800 text-sm">Morning & Evening Batches</h5>
                    <p className="text-xs text-gray-500">Flexibility for working professionals or college students.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="px-3 py-1 rounded bg-purple-50 text-purple-600 text-xs font-black uppercase mt-1 flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> Saturdays</div>
                  <div>
                    <h5 className="font-bold text-gray-800 text-sm">Clarifications & Mock Interviews (FREE for students)</h5>
                    <p className="text-xs text-gray-500">Free dedicated mentorship sessions, resume building, and feedback for all enrolled students.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Interactive Tab Grid */}
            <div className="lg:col-span-7 flex flex-col gap-6" data-aos="fade-left">

              {/* Tab Header buttons */}
              <div className="flex border-b border-gray-200">
                <button
                  onClick={() => setActiveTab("learn")}
                  className={`flex-1 py-4 text-center font-bold text-sm tracking-wide border-b-2 transition-all flex items-center justify-center gap-2 ${activeTab === "learn" ? "border-brand-blue text-brand-blue" : "border-transparent text-gray-400 hover:text-gray-600"}`}
                >
                  <BookOpen className="w-4 h-4" /> What You'll Learn
                </button>
                <button
                  onClick={() => setActiveTab("for")}
                  className={`flex-1 py-4 text-center font-bold text-sm tracking-wide border-b-2 transition-all flex items-center justify-center gap-2 ${activeTab === "for" ? "border-brand-blue text-brand-blue" : "border-transparent text-gray-400 hover:text-gray-600"}`}
                >
                  <Users className="w-4 h-4" /> Who is it For
                </button>
                <button
                  onClick={() => setActiveTab("highlights")}
                  className={`flex-1 py-4 text-center font-bold text-sm tracking-wide border-b-2 transition-all flex items-center justify-center gap-2 ${activeTab === "highlights" ? "border-brand-blue text-brand-blue" : "border-transparent text-gray-400 hover:text-gray-600"}`}
                >
                  <Award className="w-4 h-4" /> Course Highlights
                </button>
              </div>

              {/* Tab Content Display */}
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm min-h-[350px] flex flex-col justify-between">

                {activeTab === "learn" && (
                  <div className="flex flex-col gap-6">
                    <h4 className="text-lg font-black font-heading text-brand-slate">Comprehensive Detailing Syllabus</h4>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl bg-slate-50 flex items-start gap-3">
                        <BookOpen className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                        <div>
                          <h5 className="font-bold text-gray-800 text-sm">BIM Basics</h5>
                          <p className="text-xs text-gray-500 mt-1">Fundamentals of Building Information Modeling and collaborative workflow.</p>
                        </div>
                      </div>
                      <div className="p-4 rounded-xl bg-slate-50 flex items-start gap-3">
                        <HelpCircle className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                        <div>
                          <h5 className="font-bold text-gray-800 text-sm">Interface Mastery</h5>
                          <p className="text-xs text-gray-500 mt-1">Mastering the workspace grid, menus, shortcuts, and configurations.</p>
                        </div>
                      </div>
                      <div className="p-4 rounded-xl bg-slate-50 flex items-start gap-3">
                        <HardHat className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                        <div>
                          <h5 className="font-bold text-gray-800 text-sm">3D Model Creation</h5>
                          <p className="text-xs text-gray-500 mt-1">Creating parametric columns, beams, plates, and connections.</p>
                        </div>
                      </div>
                      <div className="p-4 rounded-xl bg-slate-50 flex items-start gap-3">
                        <FileText className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                        <div>
                          <h5 className="font-bold text-gray-800 text-sm">Steel Detailing Techniques</h5>
                          <p className="text-xs text-gray-500 mt-1">Generating precise assembly, single-part, and erection drawings.</p>
                        </div>
                      </div>
                      <div className="p-4 rounded-xl bg-slate-50 flex items-start gap-3 col-span-2">
                        <Briefcase className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                        <div>
                          <h5 className="font-bold text-gray-800 text-sm">Reporting &amp; Documentation</h5>
                          <p className="text-xs text-gray-500 mt-1">Creating bills of materials (BOM), NC files, fabrication reports, and exporting designs.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "for" && (
                  <div className="flex flex-col gap-6">
                    <h4 className="text-lg font-black font-heading text-brand-slate">Target Participants</h4>
                    <ul className="flex flex-col gap-4">
                      <li className="flex gap-3 items-start">
                        <CheckCircle2 className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-gray-800 text-sm block">Aspiring Structural Engineers &amp; Detailers</strong>
                          <span className="text-xs text-gray-500">Kickstart a highly profitable career path in international steel detailing.</span>
                        </div>
                      </li>
                      <li className="flex gap-3 items-start">
                        <CheckCircle2 className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-gray-800 text-sm block">CAD Technicians &amp; Draftsmen</strong>
                          <span className="text-xs text-gray-500">Upgrade your skillset from standard 2D drafting to premium 3D BIM modeling.</span>
                        </div>
                      </li>
                      <li className="flex gap-3 items-start">
                        <CheckCircle2 className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-gray-800 text-sm block">Civil Engineering Students &amp; Graduates</strong>
                          <span className="text-xs text-gray-500">Bridge the gap between theoretical college syllabi and real construction environments.</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                )}

                {activeTab === "highlights" && (
                  <div className="flex flex-col gap-6">
                    <h4 className="text-lg font-black font-heading text-brand-slate">Core Features of Tekera Training</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> Hands-on project-based portfolio
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> Expert mentors from live industry structures
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> Official Tekla Structures licenses used
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> Internationally recognized certificate
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> Resume tuning &amp; placement connections
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> Lifetime technical forum access
                      </div>
                    </div>
                  </div>
                )}

                <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between flex-wrap gap-4">
                  <span className="text-xs text-gray-500">Weekday and Weekend batches are customizable upon request.</span>
                  <a href="#enroll" className="text-brand-blue font-extrabold text-sm hover:underline flex items-center gap-1 group">
                    Book a Free Demo Slot <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Corporate Partnerships Section */}
      <section id="corporate" className="py-20 lg:py-28 bg-white scroll-mt-20 font-sans">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-4" data-aos="fade-up">
            <span className="text-brand-blue font-bold text-sm uppercase tracking-widest">Corporate</span>
            <h2 className="text-3xl md:text-4xl font-black font-heading text-brand-slate tracking-tight">
              Training &amp; Industry Partnerships
            </h2>
            <p className="text-gray-600">
              Boost team detailing speed, decrease modeling errors, and upskill structural staff.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Corp Item 1 */}
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 flex items-start gap-4" data-aos="fade-right" data-aos-delay="100">
              <div className="font-extrabold text-2xl font-heading text-brand-blue bg-white w-12 h-12 rounded-xl flex items-center justify-center shadow-sm shrink-0">
                01
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-bold font-heading text-gray-800 text-lg">Tailored Training Programs</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We design custom syllabi based exactly on your current project requirements, ensuring immediate ROI for steel modeling and connections.
                </p>
              </div>
            </div>

            {/* Corp Item 2 */}
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 flex items-start gap-4" data-aos="fade-left" data-aos-delay="100">
              <div className="font-extrabold text-2xl font-heading text-brand-blue bg-white w-12 h-12 rounded-xl flex items-center justify-center shadow-sm shrink-0">
                02
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-bold font-heading text-gray-800 text-lg">Hands-on Learning Approach</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Practical, project-based training on live structures ensures your engineers can handle complex joints, columns, and NC files smoothly.
                </p>
              </div>
            </div>

            {/* Corp Item 3 */}
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 flex items-start gap-4" data-aos="fade-right" data-aos-delay="200">
              <div className="font-extrabold text-2xl font-heading text-brand-blue bg-white w-12 h-12 rounded-xl flex items-center justify-center shadow-sm shrink-0">
                03
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-bold font-heading text-gray-800 text-lg">Flexible Delivery Options</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Choose between certified on-site instruction at your office, fully virtual mentoring, or a convenient hybrid structure.
                </p>
              </div>
            </div>

            {/* Corp Item 4 */}
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 flex items-start gap-4" data-aos="fade-left" data-aos-delay="200">
              <div className="font-extrabold text-2xl font-heading text-brand-blue bg-white w-12 h-12 rounded-xl flex items-center justify-center shadow-sm shrink-0">
                04
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-bold font-heading text-gray-800 text-lg">Certification &amp; Skills</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Upskilled employees receive industry-recognized credentials, increasing your company's bid strength for international structural projects.
                </p>
              </div>
            </div>
          </div>

          {/* Corporate CTA Button */}
          <div className="text-center mt-12" data-aos="fade-up">
            <a
              href="#enroll"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-brand-blue hover:bg-brand-blue-dark text-white font-bold text-base shadow-lg shadow-brand-blue/15 hover:shadow-brand-blue/35 transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <span>Enquire for Corporate Training</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 lg:py-28 bg-brand-slate text-white scroll-mt-20 font-sans">
        <div className="max-w-5xl mx-auto px-6" data-aos="fade-up">
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-4">
            <span className="text-brand-yellow font-bold text-sm uppercase tracking-widest">Student Reviews</span>
            <h2 className="text-3xl md:text-4xl font-black font-heading tracking-tight text-white">
              Student Success Stories
            </h2>
            <p className="text-gray-400 font-sans">
              Read how hands-on training at Tekera transformed these students into professional modelers.
            </p>
          </div>

          {/* Carousel Widget */}
          <div className="relative bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-12 shadow-2xl backdrop-blur-sm">

            {/* Quote Icon */}
            <div className="absolute top-6 left-6 text-6xl text-brand-yellow/10 font-serif leading-none select-none">
              “
            </div>

            <div className="flex flex-col gap-6 relative z-10">
              <span className="text-brand-yellow font-bold text-xs uppercase tracking-widest">
                Placed at {testimonials[testimonialIdx].company}
              </span>
              <h3 className="text-xl lg:text-2xl font-extrabold font-heading text-white leading-snug">
                "{testimonials[testimonialIdx].title}"
              </h3>
              <p className="text-gray-300 text-base leading-relaxed italic">
                {testimonials[testimonialIdx].content}
              </p>

              <div className="border-t border-white/10 pt-6 flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center border-2 border-brand-yellow shrink-0 text-brand-yellow">
                    <User className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-white text-base font-heading">{testimonials[testimonialIdx].student}</h4>
                    <p className="text-xs text-brand-yellow font-semibold">{testimonials[testimonialIdx].role}</p>
                  </div>
                </div>

                {/* Left/Right Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={prevTestimonial}
                    className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
                    aria-label="Previous review"
                  >
                    <ChevronLeft className="w-5 h-5 text-white" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
                    aria-label="Next review"
                  >
                    <ChevronRight className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
            </div>

            {/* Indicator Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setTestimonialIdx(index)}
                  className={`w-2 h-2 rounded-full transition-all ${testimonialIdx === index ? "w-6 bg-brand-yellow" : "bg-white/30"}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <section className="py-20 bg-gray-50 border-b border-gray-100 font-sans">
        <div className="max-w-7xl mx-auto px-6" data-aos="fade-up">
          <div className="flex flex-col sm:flex-row items-end justify-between gap-6 mb-12">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <svg className="w-8 h-8" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                <h2 className="text-3xl font-black font-heading text-brand-slate tracking-tight">Google Reviews</h2>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold font-heading">5.0</span>
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-brand-yellow text-brand-yellow" />
                  ))}
                </div>
                <span className="text-sm text-gray-500 font-semibold">(180+ Reviews)</span>
              </div>
            </div>

            <a
              href="https://search.google.com/local/writereview?placeid=ChIJ3clfEK31uk4RnEgrb_IB0Eo"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-white border border-gray-200 hover:border-brand-blue text-brand-blue font-bold text-sm shadow-sm hover:shadow-md transition-all duration-200 flex items-center gap-2 whitespace-nowrap"
            >
              <ExternalLink className="w-4 h-4" />
              Write a Review
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "MUKESH VARMA .K",
                date: "a year ago",
                text: "Good infrastructure to learn Tekla steel structures. Mam and Sir are very kindhearted person. They were supporting placements in the best companies. I had a great experience when I learned and gained more knowledge."
              },
              {
                name: "Hayath Bilal",
                date: "3 years ago",
                text: "One the best authorised Institute for Tekla steel structures in trichy, they will boost up your knowledge in technically as well as tools also. It was a great experience for me to learn TekEra. Friendly atmosphere."
              },
              {
                name: "AJITH KUMAR K",
                date: "10 months ago",
                text: "Good Training centre For tekla course thank you sir and mam for giving me good knowledge of this field."
              },
              {
                name: "praveen kumar a",
                date: "3 years ago",
                text: "The world Best training center for Tekla and the trainers always help the students and explain very well about the course. Whenever I had doubts they cleared instantly. 100% placements."
              }
            ].map((review, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between h-full hover:shadow-md transition-shadow">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center font-bold font-heading text-lg shrink-0">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 text-sm line-clamp-1">{review.name}</h4>
                      <p className="text-xs text-gray-500">{review.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-0.5 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-brand-yellow text-brand-yellow" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-6">"{review.text}"</p>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-50 flex items-center gap-1.5">
                  <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                  </svg>
                  <span className="text-xs text-gray-500 font-medium">Posted on Google</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section id="faqs" className="py-20 lg:py-28 bg-white scroll-mt-20 font-sans">
        <div className="max-w-4xl mx-auto px-6" data-aos="fade-up">
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-4">
            <span className="text-brand-blue font-bold text-sm uppercase tracking-widest">Support</span>
            <h2 className="text-3xl md:text-4xl font-black font-heading text-brand-slate tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Find answers to the most common queries about our courses, timings, and placement services.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-100 rounded-2xl bg-gray-50 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setFaqOpen(faqOpen === index ? null : index)}
                  className="w-full text-left p-6 flex justify-between items-center font-bold text-gray-800 hover:text-brand-blue transition-colors gap-4"
                >
                  <span className="font-heading">{faq.question}</span>
                  <span className="text-brand-blue shrink-0">
                    {faqOpen === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </span>
                </button>

                {faqOpen === index && (
                  <div className="px-6 pb-6 text-sm text-gray-600 leading-relaxed border-t border-gray-100/50 pt-4 bg-white font-sans">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Generation & Contact Form Section */}
      <section id="enroll" className="py-20 lg:py-28 bg-gradient-to-tr from-brand-blue to-brand-blue-dark text-white relative overflow-hidden scroll-mt-20 font-sans">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">

            {/* Form Details Copy */}
            <div className="lg:col-span-6 flex flex-col gap-6" data-aos="fade-right">
              <span className="text-brand-yellow font-extrabold text-sm uppercase tracking-widest">Enrol Now</span>
              <h2 className="text-4xl md:text-5xl font-black font-heading tracking-tight leading-tight">
                You Could Be Next!
              </h2>
              <p className="text-lg text-blue-100 leading-relaxed font-sans">
                With over 180+ successful placements, Tekera continues to empower civil engineers, draftsmen, and graduates to build highly rewarding international careers in Tekla Modeling and Structural Detailing.
              </p>

              <div className="flex flex-col gap-4 mt-2">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-yellow shrink-0 mt-0.5" />
                  <span className="text-sm font-semibold">Free Career Mentorship Consultation</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-yellow shrink-0 mt-0.5" />
                  <span className="text-sm font-semibold">Customized Placement Roadmaps</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-yellow shrink-0 mt-0.5" />
                  <span className="text-sm font-semibold">1-on-1 Guidance with Industry Experts</span>
                </div>
              </div>

              {/* Google Maps Embed for Physical Location */}
              <div className="w-full h-56 rounded-2xl overflow-hidden shadow-inner border border-blue-400/20 mt-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.7601275990263!2d78.68532457597148!3d10.829699689322302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf5ad101fc9dd%3A0x4ad001f2f72b489c!2sTekEra%20Training%20Center!5e0!3m2!1sen!2sin!4v1716300000000!5m2!1sen!2sin"
                  className="w-full h-full border-0"
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Actual Submission Card */}
            <div className="lg:col-span-6" data-aos="fade-left">
              <div className="bg-white text-gray-900 rounded-3xl p-8 shadow-2xl border border-gray-100 relative">

                {formSubmitted ? (
                  <div className="py-16 text-center flex flex-col items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-3xl font-black animate-bounce">
                      ✓
                    </div>
                    <h3 className="text-2xl font-black font-heading text-brand-slate">Enrollment Request Received!</h3>
                    <p className="text-gray-500 text-sm max-w-sm">
                      Thank you for submitting your details. Our admissions advisor will contact you on your phone number within the next 24 hours to schedule your career consultation slot.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div>
                      <h3 className="text-2xl font-black font-heading text-brand-slate">Book a Free Session</h3>
                      <p className="text-xs text-gray-400 mt-1">Fill out the form below to secure your counseling slot.</p>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="text-xs font-bold text-gray-500 uppercase tracking-wider">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="e.g. Arun Kumar"
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-brand-blue focus:bg-white text-sm text-gray-800 transition-colors"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="email" className="text-xs font-bold text-gray-500 uppercase tracking-wider">Email Address</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="john@example.com"
                          className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-brand-blue focus:bg-white text-sm text-gray-800 transition-colors"
                        />
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="phone" className="text-xs font-bold text-gray-500 uppercase tracking-wider">Phone Number</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          placeholder="+91 86087 19878"
                          className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-brand-blue focus:bg-white text-sm text-gray-800 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="timing" className="text-xs font-bold text-gray-500 uppercase tracking-wider">Preferred Timing</label>
                      <select
                        id="timing"
                        name="timing"
                        value={formData.timing}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-brand-blue focus:bg-white text-sm text-gray-800 transition-colors"
                      >
                        {/* <option value="Full-Time">Full-Time (Mon-Fri)</option> */}
                        <option value="Part-Time Morning">Part-Time Morning Batch</option>
                        <option value="Part-Time Evening">Part-Time Evening Batch</option>
                        <option value="Weekend batch">Weekend Batch</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="message" className="text-xs font-bold text-gray-500 uppercase tracking-wider">Message (Optional)</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={3}
                        placeholder="Tell us about your background or career goals..."
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-brand-blue focus:bg-white text-sm text-gray-800 transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="mt-2 w-full py-4 bg-brand-blue hover:bg-brand-blue-dark text-white font-bold rounded-xl text-center shadow-lg shadow-brand-blue/15 hover:shadow-brand-blue/35 transition-all duration-200 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 font-heading"
                    >
                      <span>Enrol / Book Call Now</span>
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </form>
                )}

                {/* Direct quick contact links below form */}
                <div className="mt-6 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider text-center sm:text-left">
                    Prefer direct contact?
                  </div>
                  <div className="flex items-center gap-3">
                    <a
                      href="tel:+918608719878"
                      className="px-4 py-2 rounded-lg bg-gray-50 hover:bg-gray-100 text-gray-700 font-bold text-xs flex items-center gap-2 border border-gray-200 transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-brand-blue" />
                      <span>Call Us</span>
                    </a>
                    <a
                      href="https://wa.me/918608719878"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg bg-green-50 hover:bg-green-100 text-green-700 font-bold text-xs flex items-center gap-2 border border-green-200 transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-green-600" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-brand-slate text-white pt-16 pb-8 border-t border-white/5 font-sans">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">

            {/* Brand details and logo */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <img
                  src="/Tek_Logo.png"
                  alt="TeKeRa Training Center Logo"
                  className="h-20 w-auto object-contain bg-white rounded-2xl px-4 py-2 shadow-md"
                />
              </div>
              <p className="text-sm text-gray-400 max-w-sm leading-relaxed font-sans">
                Authorized Tekla Structures Training Center in Tamil Nadu. Started in 2018, we have trained and successfully placed more than 180+ expert modelers across top global construction design firms.
              </p>
              {/* Social links */}
              <div className="flex items-center gap-4 mt-4">
                <a href="https://www.instagram.com/tekera_training" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-yellow hover:text-brand-slate transition-all" aria-label="Instagram">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="https://linkedin.com/company/tekera-training" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-yellow hover:text-brand-slate transition-all" aria-label="LinkedIn">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="https://youtube.com/@tekera_training" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-yellow hover:text-brand-slate transition-all" aria-label="YouTube">
                  <Youtube className="w-4 h-4" />
                </a>
                <a href="https://wa.me/918608719878" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-yellow hover:text-brand-slate transition-all" aria-label="WhatsApp">
                  <MessageSquare className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Navigation links */}
            <div className="lg:col-span-3 flex flex-col gap-4">
              <h4 className="font-extrabold font-heading text-sm uppercase tracking-widest text-brand-yellow">Quick Links</h4>
              <nav className="flex flex-col gap-2.5 text-sm text-gray-400 font-sans">
                <a href="#why-choose-us" className="hover:text-white transition-colors duration-200">Why Us</a>
                <a href="#course" className="hover:text-white transition-colors duration-200">Our Courses</a>
                <a href="#corporate" className="hover:text-white transition-colors duration-200">Corporate Program</a>
                <a href="#testimonials" className="hover:text-white transition-colors duration-200">Success Stories</a>
                <a href="#faqs" className="hover:text-white transition-colors duration-200">Frequently Asked Questions</a>
              </nav>
            </div>

            {/* Contact details */}
            <div className="lg:col-span-4 flex flex-col gap-4">
              <h4 className="font-extrabold font-heading text-sm uppercase tracking-widest text-brand-yellow">Contact Information</h4>
              <ul className="flex flex-col gap-3.5 text-sm text-gray-400 font-sans">
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-5 h-5 text-brand-yellow shrink-0 mt-0.5" />
                  <a
                    href="https://maps.app.goo.gl/obQoWYRdwY2wzQkV9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors leading-relaxed"
                  >
                    Gowri Krishna Residency, No.302, D-1, 7th Cross Road East, Thillai Nagar, Tiruchirappalli, Tamil Nadu 620018
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="w-5 h-5 text-brand-yellow shrink-0" />
                  <div className="flex flex-col gap-1">
                    <a href="tel:+918667299312" className="hover:text-white transition-colors">+91 86672 99312</a>
                    <a href="tel:+918608719878" className="hover:text-white transition-colors">+91 86087 19878</a>
                  </div>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="w-5 h-5 text-brand-yellow shrink-0" />
                  <a href="mailto:enquiry@tekera.in" className="hover:text-white transition-colors">enquiry@tekera.in</a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Globe className="w-5 h-5 text-brand-yellow shrink-0" />
                  <a href="https://www.tekera.in" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">www.tekera.in</a>
                </li>
              </ul>
            </div>

          </div>

          <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-sans">
            <p>© {new Date().getFullYear()} Tekera Training Center. All rights reserved. · Let's Create History.</p>
            <p>Accredited Tekla Structures Vocational Partner</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
