'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import {
  Menu, X, ChevronDown, Phone, MessageCircle, MapPin, Mail, Globe,
  GraduationCap, Plane, FileCheck, Star, Users, Award, ShieldCheck,
  Heart, Sparkles, Target, Headphones, ArrowRight, Send, Facebook,
  Instagram, Linkedin, ChevronRight, Quote, Clock,
  CheckCircle2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from '@/components/ui/select';

/* ------------------------------------------------------------------ */
/* DATA                                                                */
/* ------------------------------------------------------------------ */

const HERO_IMG = '/hero-skyline.png';
//const HERO_IMG = '/hero-skyline.jpg';
const CTA_BG = 'https://images.unsplash.com/photo-1564689510742-4e9c7584181d?auto=format&fit=crop&w=2000&q=80';

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  {
    label: 'Study Abroad',
    children: [
      { label: 'Study Abroad Landing', href: '#study' },
      { label: 'Country Comparison', href: '#compare' },
    ],
  },
  {
    label: 'Visa Services',
    children: [
      { label: 'Visa Services Landing', href: '#visa' },
      { label: 'Visa Assessment', href: '#assessment' },
    ],
  },
  {
    label: 'Tours & Travel',
    children: [{ label: 'Tours & Travel Landing', href: '#tours' }],
  },
  { label: 'Contact Us', href: '#contact' },
  {
    label: 'More',
    children: [
      { label: 'Blog', href: '#blog' },
      { label: 'Testimonials', href: '#testimonials' },
      { label: 'Career', href: '#career' },
    ],
  },
];

const SERVICES = [
  {
    icon: GraduationCap,
    title: 'Education & Immigration',
    image: 'https://images.unsplash.com/photo-1576495199011-eb94736d05d6?auto=format&fit=crop&w=900&q=80',
    accent: 'green',
    points: [
      'Study Aboard Counselling',
      'University Admissions',
      'Visa Guidance & Support',
      'Career & PR Pathways',
    ],
  },
  {
    icon: Plane,
    title: 'Tours & Travels',
    image: 'https://images.pexels.com/photos/7079773/pexels-photo-7079773.jpeg?auto=compress&cs=tinysrgb&w=900',
    accent: 'orange',
    points: [
      'International Holiday Packages',
      'Luxury & Customized Tours',
      'Cruises & Group Tours',
      'MICE & Corporate Travel',
    ],
  },
  {
    icon: FileCheck,
    title: 'Visa Consultants',
    image: 'https://images.unsplash.com/photo-1655722725332-9925c96dd627?auto=format&fit=crop&w=900&q=80',
    accent: 'blue',
    points: [
      'Tourist & Visitor Visas',
      'Business & Family Visas',
      'Document Assistance',
      'High Success Rate',
    ],
  },
];

const STATS = [
  { value: 31, suffix: '+', label: 'Countries' },
  { value: 18, suffix: '+', label: 'Years Experience' },
  { value: 50000, suffix: '+', label: 'Happy Clients' },
  { value: 99, suffix: '%', label: 'Visa Success Rate' },
];

const DESTINATIONS = [
  { name: 'United Kingdom', tag: 'Study In', flag: 'https://hatscripts.github.io/circle-flags/flags/gb.svg', image: 'https://images.unsplash.com/photo-1662154989572-716c415ea9d7?auto=format&fit=crop&w=1200&q=80' },
  { name: 'Australia', tag: 'Study In', flag: 'https://hatscripts.github.io/circle-flags/flags/au.svg', image: 'https://images.unsplash.com/photo-1523059623039-a9ed027e7fad?auto=format&fit=crop&w=1200&q=80' },
  { name: 'Canada', tag: 'Study In', flag: 'https://hatscripts.github.io/circle-flags/flags/ca.svg', image: 'https://images.unsplash.com/photo-1511831030-bec461ccd88e?auto=format&fit=crop&w=1200&q=80' },
  { name: 'United States', tag: 'Study In', flag: 'https://hatscripts.github.io/circle-flags/flags/us.svg', image: 'https://images.unsplash.com/photo-1496588152823-86ff7695e68f?auto=format&fit=crop&w=1200&q=80' },
  { name: 'Europe', tag: 'Study In', flag: 'https://hatscripts.github.io/circle-flags/flags/eu.svg', image: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=1200&q=80' },
];

const WHY_US = [
  { icon: Heart, title: 'Customers Come First', desc: 'Personalised plans designed around your goals, not ours.' },
  { icon: ShieldCheck, title: 'Ethical & Transparent', desc: 'Honest counselling, fair pricing, no hidden surprises.' },
  { icon: Target, title: 'Expert Guidance', desc: 'Certified counsellors with decades of global expertise.' },
  { icon: Award, title: 'High Visa Success Rate', desc: '99% approval rate across 50,000+ applications.' },
  { icon: Headphones, title: 'End-to-End Assistance', desc: 'From counselling to landing — we travel with you.' },
];

const TESTIMONIALS = [
  {
    name: 'Aarav Mehta',
    role: 'MSc Student, University of Toronto',
    rating: 5,
    //avatar: 'https://i.pravatar.cc/120?img=12',
    quote:
      'Global Sky Group made my Canadian student visa journey effortless. Their counsellors guided me through SOPs, scholarships and visa filing with unmatched professionalism.',
  },
  {
    name: 'Priya Kapoor',
    role: 'Luxury Europe Tour, 2024',
    rating: 5,
    //avatar: 'https://i.pravatar.cc/120?img=47',
    quote:
      'Our 14-day Italy and Switzerland honeymoon was magical. Every hotel, every transfer, every reservation was flawless. Truly a premium experience.',
  },
  {
    name: 'Rohan Shah',
    role: 'PR Visa, Australia',
    rating: 5,
    //avatar: 'https://i.pravatar.cc/120?img=33',
    quote:
      'After two prior rejections, the GSG immigration team got me my Australian PR within 9 months. Their documentation expertise is simply world-class.',
  },
  {
    name: 'Ananya Iyer',
    role: 'Undergraduate, UK',
    rating: 5,
    //avatar: 'https://i.pravatar.cc/120?img=49',
    quote:
      'I had no idea where to apply. GSG matched me with 5 top UK universities, secured a 40% scholarship and prepared me for everything from IELTS to arrival.',
  },
  {
    name: 'Vikram Singh',
    role: 'Family Holiday, Dubai & Maldives',
    rating: 5,
    //avatar: 'https://i.pravatar.cc/120?img=68',
    quote:
      'The attention to detail was unbelievable. Personalised concierge, surprise dinner, business class upgrades — Global Sky Group truly redefines travel.',
  },
];

const PARTNERS = [
  { name: 'IELTS', text: 'IELTS' },
  { name: 'British Council', text: 'British Council' },
  { name: 'IDP', text: 'IDP' },
  { name: 'ICEF', text: 'ICEF' },
  { name: 'PTE', text: 'PTE' },
];

/* ------------------------------------------------------------------ */
/* NAVBAR                                                              */
/* ------------------------------------------------------------------ */

function Logo({ scrolled }) {
  return (
    <a href="#home" className="flex items-center group shrink-0" aria-label="Global Sky Group">
      {/* Light variant (full logo with white text) — for dark/transparent navbar */}
      <img
        src="/logo-dark-bg.png"
        alt="Global Sky Group — Indian at heart. Global in mind."
        className={`h-11 sm:h-12 lg:h-14 w-auto object-contain select-none transition-opacity duration-300 ${
          scrolled ? 'opacity-0 absolute pointer-events-none' : 'opacity-100 relative'
        }`}
        draggable="false"
      />
      {/* Dark variant (full logo with dark blue text) — for scrolled white navbar */}
      <img
        src="/logo-light-bg.png"
        alt="Global Sky Group — Indian at heart. Global in mind."
        className={`h-11 sm:h-12 lg:h-14 w-auto object-contain select-none transition-opacity duration-300 ${
          scrolled ? 'opacity-100 relative' : 'opacity-0 absolute pointer-events-none'
        }`}
        draggable="false"
      />
    </a>
  );
}

function DesktopNav({ scrolled }) {
  const [open, setOpen] = useState(null);
  return (
    //<nav className="hidden lg:flex items-center gap-0.5 xl:gap-1">
    <nav className="hidden max-xl:!hidden xl:!flex items-center gap-0 xl:gap-0.5 2xl:gap-1 min-w-0">
	  {NAV_ITEMS.map((item, idx) => (
        <div
          key={item.label}
          className="relative"
          onMouseEnter={() => item.children && setOpen(idx)}
          onMouseLeave={() => setOpen(null)}
        >
          <a
            href={item.href || '#'}
            //className={`flex items-center gap-1 px-2.5 xl:px-3.5 py-2 rounded-lg text-[13px] xl:text-[14px] font-medium tracking-[0.01em] whitespace-nowrap transition-all duration-200
            className={`flex items-center gap-1 px-1.5 xl:px-2 2xl:px-3.5 py-2 rounded-lg text-[11px] xl:text-[12px] 2xl:text-[14px] font-medium tracking-[0.01em] whitespace-nowrap transition-all duration-200
				${scrolled
                ? 'text-slate-700 hover:text-brand-blue hover:bg-blue-50'
                : 'text-white/95 hover:text-white hover:bg-white/10'}`}
          >
            {item.label}
            {item.children && <ChevronDown className="w-3.5 h-3.5 opacity-70" />}
          </a>
          <AnimatePresence>
            {item.children && open === idx && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.18 }}
                className="absolute left-0 top-full pt-2 min-w-[230px] z-50"
              >
                <div className="bg-white rounded-xl shadow-premium border border-slate-100 overflow-hidden p-2">
                  {item.children.map((c) => (
                    <a
                      key={c.label}
                      href={c.href}
                      className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm text-slate-700 hover:bg-brand-blue hover:text-white transition-all duration-150 group"
                    >
                      <span>{c.label}</span>
                      <ChevronRight className="w-4 h-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </nav>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSub, setMobileSub] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
          ${scrolled
            ? 'bg-white/95 backdrop-blur-lg shadow-soft py-2'
            : 'bg-transparent py-4'}`}
      >
        <div className="container flex items-center justify-between gap-4">
          <Logo scrolled={scrolled} />
          <DesktopNav scrolled={scrolled} />
          <div className="hidden lg:flex items-center gap-3 xl:gap-5">
            <a
              href="tel:+918238061444"
              className={`flex items-center gap-2.5 text-sm font-medium transition ${scrolled ? 'text-slate-700' : 'text-white'}`}
            >
              <div className={`w-9 h-9 rounded-full flex items-center justify-center transition ${scrolled ? 'bg-blue-50 text-brand-blue' : 'bg-white/15 text-white ring-1 ring-white/15'}`}>
                <Phone className="w-4 h-4" />
              </div>
              <span className="hidden xl:inline whitespace-nowrap font-semibold tracking-tight">+91 8238 061 444</span>
            </a>
            <Button className="bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold rounded-full h-11 px-5 xl:px-6 text-[13px] xl:text-sm shadow-soft hover:shadow-premium transition-all whitespace-nowrap">
              <a href='#contact'>Book Consultation</a>
            </Button>
          </div>
          <button
            onClick={() => setMobileOpen(true)}
            className={`lg:hidden w-11 h-11 rounded-lg flex items-center justify-center transition ${scrolled ? 'bg-blue-50 text-brand-blue' : 'bg-white/15 text-white'}`}
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[60] lg:hidden"
            />
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 w-[88vw] max-w-md bg-white z-[70] lg:hidden overflow-y-auto"
            >
              <div className="flex items-center justify-between p-5 border-b">
                <Logo scrolled={true} />
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <nav className="p-4 space-y-1">
                {NAV_ITEMS.map((item, idx) => (
                  <div key={item.label}>
                    {item.children ? (
                      <>
                        <button
                          onClick={() => setMobileSub(mobileSub === idx ? null : idx)}
                          className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-slate-800 font-medium hover:bg-slate-50"
                        >
                          {item.label}
                          <ChevronDown className={`w-4 h-4 transition-transform ${mobileSub === idx ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence>
                          {mobileSub === idx && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden ml-3 border-l-2 border-brand-blue/20 pl-3"
                            >
                              {item.children.map((c) => (
                                <a
                                  key={c.label}
                                  href={c.href}
                                  onClick={() => setMobileOpen(false)}
                                  className="block px-4 py-2.5 text-sm text-slate-600 hover:text-brand-blue"
                                >
                                  {c.label}
                                </a>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <a
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="block px-4 py-3 rounded-lg text-slate-800 font-medium hover:bg-slate-50"
                      >
                        {item.label}
                      </a>
                    )}
                  </div>
                ))}
              </nav>
              <div className="p-5 border-t mt-2 space-y-3">
                <a href="tel:+918238061444" className="flex items-center gap-3 p-3 rounded-lg bg-blue-50 text-brand-blue font-medium">
                  <Phone className="w-4 h-4" /> +91 8238 061 444
                </a>
                <Button className="w-full bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold rounded-full py-6">
                  <a href="#contact" onClick={() => setMobileOpen(false)}>Book Free Consultation</a>
                </Button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

/* ------------------------------------------------------------------ */
/* HERO                                                                */
/* ------------------------------------------------------------------ */

function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] flex items-center overflow-hidden bg-[#061d44]">
      {/* Background composition: dark navy left + cinematic skyline right */}
      <div className="absolute inset-0">
        {/* Cinematic skyline - positioned right, covers right 60% */}
        <div
         className="absolute inset-y-0 right-0 w-full lg:w-[60%] bg-cover bg-center lg:bg-left"
         style={{ backgroundImage: `url(${HERO_IMG})`}}
        />
        {/* Dark navy left panel + smooth blend to skyline */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#061d44] from-[25%] via-[#061d44]/95 via-[38%] to-transparent to-[58%]"
        />
        {/* Subtle top/bottom vignette for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#061d44]/40 via-transparent to-[#061d44]/70" />
      </div>

	  <div className="container relative z-10 pt-32 pb-20 lg:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-[58rem] xl:max-w-[60rem]"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center text-brand-orange text-[11px] sm:text-xs font-bold tracking-[0.22em] uppercase mb-7"
          >
            Welcome to Global Sky Group
            <span className="ml-3 w-12 h-px bg-brand-orange" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="font-brand text-white text-[2.25rem] sm:text-5xl md:text-[3.75rem] lg:text-[4rem] xl:text-[4.5rem] font-extrabold leading-[1.04] tracking-[-0.02em] mb-5"
          >
            GLOBAL <span className="text-white">MOBILITY</span>
            <br />
            <span className="whitespace-normal md:whitespace-nowrap">
              EDUCATION <span className="text-brand-orange">•</span> VISA <span className="text-brand-orange">•</span> TRAVEL
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.7 }}
            className="font-sans text-[#5da3ff] text-lg sm:text-xl md:text-2xl font-medium mb-6"
          >
            Indian at heart. Global in mind.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="text-white/85 text-base sm:text-lg max-w-xl leading-relaxed mb-9"
          >
            We are a professionally managed global mobility and travel services organization
            offering ethical, transparent and customer-centric solutions across 31+ countries
            worldwide.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.7 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <Button
              size="lg"
              className="bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold rounded-full px-8 py-6 text-base shadow-premium hover:scale-[1.02] transition-all group"
            >
              <a href="#contact">Book Free Consultation</a>
              <ArrowRight className="ml-1.5 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              asChild
			  variant="outline"
              className="bg-white/10 border-white/30 backdrop-blur-md text-white hover:bg-white hover:text-brand-green font-semibold rounded-full px-8 py-6 text-base transition-all"
            >
            <a
                href="https://wa.me/918140840069"
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center mr-1.5"
              >
                <MessageCircle className="w-4 h-4" />
                Chat on WhatsApp
              </a>
	       </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/40 flex items-start justify-center p-1.5">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
            className="w-1 h-2 bg-white rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* SECTION HEADER                                                      */
/* ------------------------------------------------------------------ */

function SectionEyebrow({ children, color = 'blue' }) {
  const colorMap = {
    blue: 'text-brand-blue bg-blue-50',
    orange: 'text-brand-orange bg-orange-50',
    green: 'text-brand-green bg-green-50',
  };
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-[0.18em] uppercase ${colorMap[color]}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-current" />
      {children}
    </span>
  );
}

function SectionTitle({ eyebrow, eyebrowColor, title, subtitle, center = true, light = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className={`max-w-3xl ${center ? 'mx-auto text-center' : ''} mb-12 lg:mb-16`}
    >
      <SectionEyebrow color={eyebrowColor}>{eyebrow}</SectionEyebrow>
      <h2 className={`font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-4 ${light ? 'text-white' : 'text-slate-900'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base sm:text-lg leading-relaxed ${light ? 'text-white/75' : 'text-slate-600'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* SERVICES                                                            */
/* ------------------------------------------------------------------ */

function ServiceCard({ s, idx }) {
  const palette = {
    green: { bar: 'bg-brand-green', btn: 'bg-brand-green hover:bg-brand-green-dark', text: 'text-brand-green', tint: 'from-brand-green/0 via-brand-green/0 to-brand-green/90' },
    orange: { bar: 'bg-brand-orange', btn: 'bg-brand-orange hover:bg-brand-orange-dark', text: 'text-brand-orange', tint: 'from-brand-orange/0 via-brand-orange/0 to-brand-orange/90' },
    blue: { bar: 'bg-brand-blue', btn: 'bg-brand-blue hover:bg-brand-blue-dark', text: 'text-brand-blue', tint: 'from-brand-blue/0 via-brand-blue/0 to-brand-blue/90' },
  }[s.accent];

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: idx * 0.12 }}
      whileHover={{ y: -8 }}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-premium transition-all duration-300 border border-slate-100"
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={s.image}
          alt={s.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${palette.tint} opacity-70`} />
        <div className="absolute top-4 left-4 w-14 h-14 rounded-2xl bg-white/95 backdrop-blur flex items-center justify-center shadow-soft">
          <s.icon className={`w-7 h-7 ${palette.text}`} strokeWidth={2.2} />
        </div>
      </div>
      <div className={`h-1 w-full ${palette.bar}`} />
      <div className="p-7">
        <h3 className="font-sans text-2xl font-bold text-slate-900 mb-4">{s.title}</h3>
        <ul className="space-y-2.5 mb-6">
          {s.points.map((p) => (
            <li key={p} className="flex items-start gap-2.5 text-slate-600 text-[15px]">
              <CheckCircle2 className={`w-5 h-5 ${palette.text} flex-shrink-0 mt-0.5`} />
              <span>{p}</span>
            </li>
          ))}
        </ul>
        <Button className={`${palette.btn} text-white font-semibold rounded-full px-6 group/btn`}>
          Explore Service
          <ArrowRight className="ml-1.5 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </Button>
      </div>
    </motion.article>
  );
}

function Services() {
  return (
    <section className="py-20 lg:py-28 bg-brand-bg">
      <div className="container">
        <SectionTitle
          eyebrow="Our Companies"
          eyebrowColor="blue"
          title="Three Pillars of Global Mobility"
          subtitle="From the first counselling session to the day you land — our integrated services give you a single, trusted partner for everything beyond borders."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {SERVICES.map((s, i) => <ServiceCard key={s.title} s={s} idx={i} />)}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* STATS COUNTER                                                       */
/* ------------------------------------------------------------------ */

function Counter({ to, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.floor(v).toLocaleString());
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, to, {
      duration: 2.2,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.floor(v).toLocaleString()),
    });
    return () => controls.stop();
  }, [inView, to, mv]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

function Stats() {
  return (
    <section className="relative py-20 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue-dark via-brand-blue to-[#0a3c80]" />
      <div className="absolute inset-0 opacity-20 mix-blend-overlay"
        style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(245,166,35,0.4) 0%, transparent 40%), radial-gradient(circle at 80% 50%, rgba(88,185,71,0.3) 0%, transparent 40%)' }}
      />
      <div className="container relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-center text-white"
            >
              <div className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold mb-2 bg-gradient-to-br from-white via-white to-brand-orange/80 bg-clip-text text-transparent">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="text-white/75 text-sm sm:text-base font-medium tracking-wide uppercase">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* DESTINATIONS                                                        */
/* ------------------------------------------------------------------ */

function Destinations() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container">
        <SectionTitle
          eyebrow="Popular Destinations for Study"
          eyebrowColor="orange"
          title="Where Will You Go Next?"
          subtitle="Hand-picked countries, curated programs and elite university partnerships across the world's most aspirational destinations."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5 auto-rows-[260px] sm:auto-rows-[300px] lg:auto-rows-[360px]">
          {DESTINATIONS.map((d, i) => {
            // First card spans 2 cols on lg
            const span = i === 0 ? 'lg:col-span-3' : i === 1 ? 'lg:col-span-3' : 'lg:col-span-2';
            return (
              <motion.a
                key={d.name}
                href="#"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`group relative rounded-2xl overflow-hidden shadow-soft hover:shadow-premium transition-all duration-500 ${span}`}
              >
                <img
                  src={d.image}
                  alt={d.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/30 to-slate-900/0" />
                <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/0 to-brand-blue/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

				 <div className="absolute top-4 left-4 w-9 h-9 rounded-full bg-white/90 text-lg flex items-center justify-center shadow-soft">
                  <img src={d.flag} alt={`${d.name} flag`} className="w-9 h-9 rounded-full object-cover" />
				</div>
				<div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center gap-2 text-white/70 text-xs mb-2">
                    <MapPin className="w-3.5 h-3.5" />
                    <span className="uppercase tracking-wider">{d.tag}</span>
                  </div>
                  <h3 className="font-sans text-2xl sm:text-3xl font-bold mb-3">{d.name}</h3>
                  <div className="flex items-center gap-2 text-brand-orange font-semibold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    Explore <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
		<div className="flex justify-center mt-10">
          <Button className="font-sans bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold rounded-full px-10 h-10">
            View All Destinations
            <ArrowRight className="ml-1.5 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* WHY CHOOSE US                                                       */
/* ------------------------------------------------------------------ */

function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-brand-bg">
      <div className="container">
        <SectionTitle
          eyebrow="Why Choose Us"
          eyebrowColor="green"
          title="Why To Choose Global Sky Group?"
          subtitle="Eighteen years of obsessing over the details that make global journeys truly seamless."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {WHY_US.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative bg-white rounded-2xl p-6 shadow-soft hover:shadow-premium transition-all duration-300 border border-slate-100"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-blue to-brand-blue-light flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-soft">
                <f.icon className="w-7 h-7 text-white" strokeWidth={2.2} />
              </div>
              <h3 className="font-sans text-lg font-bold text-slate-900 mb-2">{f.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{f.desc}</p>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-blue via-brand-orange to-brand-green opacity-0 group-hover:opacity-100 transition-opacity rounded-b-2xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* TESTIMONIALS                                                        */
/* ------------------------------------------------------------------ */

function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-brand-orange/5 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-brand-blue/5 blur-3xl" />

      <div className="font-sans container relative z-10">
        <SectionTitle
          eyebrow="Success Stories"
          eyebrowColor="orange"
          title="Stories From Across The Globe"
          subtitle="From Toronto classrooms to Maldivian sunsets — hear from people whose journeys we've had the privilege to design."
        />

        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          spaceBetween={28}
          loop
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
          className="!pb-14"
        >
          {TESTIMONIALS.map((t) => (
            <SwiperSlide key={t.name} className="h-auto">
              <div className="bg-gradient-to-br from-white to-slate-50 rounded-2xl p-7 lg:p-8 shadow-soft border border-slate-100 h-full flex flex-col relative overflow-hidden">
                <Quote className="absolute -top-2 -right-2 w-24 h-24 text-brand-blue/5" />
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-orange text-brand-orange" />
                  ))}
                </div>
                <p className="text-slate-700 leading-relaxed text-[15px] mb-6 flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
				<div className="pt-5 border-t border-slate-100 text-center">
                  <div className="font-semibold text-slate-900">{t.name}</div>
                  <div className="text-xs text-slate-500">{t.role}</div>
				</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* PARTNER LOGOS                                                       */
/* ------------------------------------------------------------------ */

function Partners() {
  const logos = [...PARTNERS, ...PARTNERS];
  return (
    <section className="py-14 bg-brand-bg border-y border-slate-100">
      <div className="container">
        <p className="text-center text-xs font-bold tracking-[0.25em] uppercase text-slate-500 mb-8">
          Authorised Partner & Test Centre
        </p>
        <div className="relative overflow-hidden">
          <div className="flex gap-12 lg:gap-20 animate-marquee w-max">
            {logos.map((l, i) => (
              <div
                key={i}
                className="flex items-center justify-center min-w-[140px] h-16 px-6 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all"
              >
                <span className="font-display text-3xl lg:text-4xl font-bold text-slate-700 tracking-tight">
                  {l.text}
                </span>
              </div>
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-brand-bg to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-brand-bg to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* CONSULTATION CTA                                                    */
/* ------------------------------------------------------------------ */

function ConsultationCTA() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', interest: '' });
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', phone: '', email: '', interest: '' });
    }, 3500);
  };

  return (
    <section id="contact" className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0">
        <img src={CTA_BG} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-cta-overlay" />
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-white"
          >
            <SectionEyebrow color="orange">Free Consultation</SectionEyebrow>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] mt-5 mb-6">
              Your global journey
              <br />
              starts with <span className="text-brand-orange italic">one conversation.</span>
            </h2>
            <p className="text-white/85 text-lg leading-relaxed mb-8 max-w-lg">
              Speak to a senior counsellor today. Get a personalised roadmap for your dream
              university, visa or once-in-a-lifetime journey — absolutely complimentary.
            </p>
            <div className="space-y-3.5">
              {[
                { icon: Clock, text: '30-min one-on-one premium consultation' },
                { icon: ShieldCheck, text: '100% confidential — no obligation' },
                { icon: Users, text: 'Trusted by 50,000+ Indian families' },
              ].map((b) => (
                <div key={b.text} className="flex items-center gap-3 text-white/90">
                  <div className="w-9 h-9 rounded-full bg-white/15 backdrop-blur flex items-center justify-center">
                    <b.icon className="w-4 h-4 text-brand-orange" />
                  </div>
                  <span>{b.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-br from-brand-orange/30 via-transparent to-brand-blue/30 rounded-3xl blur-2xl" />
            <form
              onSubmit={onSubmit}
              className="relative bg-white rounded-3xl p-7 sm:p-9 shadow-premium"
            >
              <div className="mb-6">
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 mb-1.5">
                  Book Your Free Consultation
                </h3>
                <p className="text-slate-500 text-sm">We&apos;ll get back to you within 24 hours.</p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wider">Full Name</label>
                  <Input
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    className="h-12 rounded-xl border-slate-200 focus-visible:ring-brand-blue"
                    required
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wider">Phone</label>
                    <Input
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="h-12 rounded-xl border-slate-200 focus-visible:ring-brand-blue"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wider">Email</label>
                    <Input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@email.com"
                      className="h-12 rounded-xl border-slate-200 focus-visible:ring-brand-blue"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wider">Interested In</label>
                  <Select value={form.interest} onValueChange={(v) => setForm({ ...form, interest: v })}>
                    <SelectTrigger className="h-12 rounded-xl border-slate-200">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="education">Study Abroad</SelectItem>
                      <SelectItem value="visa">Visa Services</SelectItem>
                      <SelectItem value="travel">Tours & Travel</SelectItem>
                      <SelectItem value="immigration">Immigration / PR</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full h-14 bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold rounded-xl text-base shadow-soft hover:shadow-premium transition-all"
                >
                  {submitted ? (
                    <>
                      <CheckCircle2 className="mr-2 w-5 h-5" />
                      Request Received — We&apos;ll Be In Touch!
                    </>
                  ) : (
                    <>
                      Book My Free Consultation
                      <Send className="ml-2 w-4 h-4" />
                    </>
                  )}
                </Button>

                <p className="text-center text-xs text-slate-500 pt-1">
                  By submitting, you agree to our <a className="text-brand-blue underline">privacy policy</a>.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* FAQ SECTION                                                         */
/* ------------------------------------------------------------------ */

function FAQSection() {
  const faqs = [
    {
      q: 'How do I book a free consultation?',
      a: 'Click any "Book Consultation" button on the page and fill the short form. Our team will contact you within 24 hours.',
    },
    {
      q: 'Do you provide support for both study and visa services?',
      a: 'Yes. We support study abroad admissions, visa documentation, interview preparation, and end-to-end guidance.',
    },
    {
      q: 'Can I get assistance for tours and travel as well?',
      a: 'Absolutely. We provide curated tours, family holiday planning, honeymoon packages, and visa-assisted travel options.',
    },
    {
      q: 'Is the consultation really free?',
      a: 'Yes. The first consultation is complimentary and includes a personalized roadmap based on your profile.',
    },
    {
      q: 'Do you work with clients outside Ahmedabad?',
      a: 'Yes, we work with clients across India through online and phone consultations.',
    },
  ];

  return (
    <section id="faq" className="py-20 lg:py-24 bg-brand-bg">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-10 lg:mb-12">
          <SectionEyebrow color="blue">Frequently Asked Questions</SectionEyebrow>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold text-slate-900 mt-4">
            Everything you want to know
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-3">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl border border-slate-200 bg-white shadow-soft open:shadow-premium transition-all"
            >
              <summary className="list-none cursor-pointer select-none px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4">
                <span className="text-slate-900 font-semibold text-[15px] sm:text-base">{item.q}</span>
                <ChevronDown className="w-4 h-4 text-brand-blue shrink-0 transition-transform duration-200 group-open:rotate-180" />
              </summary>
              <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-slate-600 leading-relaxed">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* FOOTER                                                              */
/* ------------------------------------------------------------------ */

function Footer() {
  return (
    <footer className="relative bg-[#061d44] text-slate-300 pt-20 pb-8 overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-brand-blue via-brand-orange to-brand-green" />
      <div className="absolute -top-32 right-0 w-96 h-96 rounded-full bg-brand-blue/20 blur-3xl" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 mb-14">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-5">
              <img
				src="/logo-dark-bg.png"
                alt=""
                className="h-11 sm:h-12 lg:h-14 w-auto object-contain"
                draggable="false"
              />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm">
              Global Sky Group is a professionally managed global mobility and traveel services organisation offering comprehensive solutions in Education, Visa Consulting and Tours & Travel across 31+ countries Worldwide.
            </p>
            <div className="flex items-center gap-2.5">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-brand-orange flex items-center justify-center transition-colors group"
                  aria-label="social"
                >
                  <Icon className="w-4 h-4 text-slate-300 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold mb-5 text-sm tracking-wider uppercase">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              {['About Us', 'Study Aboard', 'Visa Services', 'Tours & Travel', 'Blog', 'Career', 'Contact'].map((l) => (
                <li key={l}>
                  <a href="#" className="text-slate-400 hover:text-brand-orange transition-colors flex items-center gap-1.5 group">
                    <ChevronRight className="w-3 h-3 text-brand-orange opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold mb-5 text-sm tracking-wider uppercase">Study Destinations</h4>
            <ul className="space-y-2.5 text-sm">
              {['United Kingdom', 'United States', 'Canada', 'Australia', 'New Zealand', 'Europe'].map((l) => (
                <li key={l}>
                  <a href="#" className="text-slate-400 hover:text-brand-orange transition-colors flex items-center gap-1.5 group">
                    <ChevronRight className="w-3 h-3 text-brand-orange opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

		   {/* Visa Services */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold mb-5 text-sm tracking-wider uppercase">Visa Services</h4>
            <ul className="space-y-2.5 text-sm">
              {['Tourist Visa', 'Business Visa', 'Visitor Visa', 'Family Visa', 'Student Visa', 'Visa Assessment'].map((l) => (
                <li key={l}>
                  <a href="#" className="text-slate-400 hover:text-brand-orange transition-colors flex items-center gap-1.5 group">
                    <ChevronRight className="w-3 h-3 text-brand-orange opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Tours & Travel */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold mb-5 text-sm tracking-wider uppercase">Tours & Travel</h4>
            <ul className="space-y-2.5 text-sm">
              {['Europe Tours', 'Dubai Packages', 'Honeymoon Trips', 'Family Holidays', 'Group Tours', 'Corporate Travel'].map((l) => (
                <li key={l}>
                  <a href="#" className="text-slate-400 hover:text-brand-orange transition-colors flex items-center gap-1.5 group">
                    <ChevronRight className="w-3 h-3 text-brand-orange opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-semibold mb-5 text-sm tracking-wider uppercase">Get In Touch</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-orange mt-1 flex-shrink-0" />
                <span className="text-slate-400">
                  523, Silver Radiance 2, Science City Road, Gota,<br />Ahmedabad, Gujarat 380009
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-orange flex-shrink-0" />
                <a href="tel:+918238061444" className="text-slate-300 hover:text-brand-orange">+91 8238 061 444</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-orange flex-shrink-0" />
                <a href="mailto:hello@globalskygroup.com" className="text-slate-300 hover:text-brand-orange">hello@globalskygroup.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-7 border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Global Sky Group. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <a href="#" className="hover:text-brand-orange transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-orange transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/* FLOATING WHATSAPP                                                   */
/* ------------------------------------------------------------------ */

function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/918238061444"
      target="_blank"
      rel="noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: 'spring' }}
      whileHover={{ scale: 1.08 }}
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-brand-green shadow-premium flex items-center justify-center group"
      aria-label="WhatsApp"
    >
      <span className="absolute inset-0 rounded-full bg-brand-green animate-ping opacity-25" />
      <MessageCircle className="w-6 h-6 text-white relative" />
    </motion.a>
  );
}

/* ------------------------------------------------------------------ */
/* APP                                                                 */
/* ------------------------------------------------------------------ */

function App() {
  return (
    <main className="bg-white text-slate-900 overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Stats />
      <Destinations />
      <WhyChooseUs />
      <Testimonials />
      <Partners />
      <ConsultationCTA />
	  <FAQSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}

export default App;
