'use client';

import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight, ShieldCheck, Users, Award, Globe, Target, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';

const ABOUT_HERO_IMAGE = 'https://images.unsplash.com/photo-1712479667983-9f2872d33fb9?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

const FOUNDERS = [
  { name: 'Harshwardhan Joshi', role: 'Founder & Managing Director', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=80' },
  { name: 'Rucha Joshi', role: 'Co-Founder & Director - Operations', image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=700&q=80' },
];

const WHY_CHOOSE = [
  { icon: ShieldCheck, title: 'Ethical & Transparent', desc: 'Clear guidance and no hidden surprises at any stage.' },
  { icon: Users, title: 'Personalized Planning', desc: 'Trips designed around your goals, interests, and budget.' },
  { icon: Globe, title: 'Global Expertise', desc: 'Destination, visa, and travel planning support under one roof.' },
  { icon: Award, title: 'Premium Service', desc: 'High-touch assistance from first call to journey completion.' },
];

const STATS = [
  { value: '18+', label: 'Years of Excellence' },
  { value: '31+', label: 'Countries Covered' },
  { value: '50,000+', label: 'Happy Clients' },
  { value: '99%', label: 'Client Satisfaction' },
];

export default function AboutPage() {
  return (
    <main className="bg-white text-slate-900 overflow-x-hidden">
      <Navbar />

      <section className="relative min-h-[72svh] flex items-center overflow-hidden bg-[#061d44] pt-28">
        <div className="absolute inset-0">
          <img src={ABOUT_HERO_IMAGE} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#061d44]/95 via-[#08285f]/82 to-[#061d44]/55" />
        </div>
        <div className="container relative z-10 py-16 lg:py-24">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-sans text-[clamp(2.2rem,6vw,4.2rem)] leading-[1.05] text-white font-bold max-w-4xl">About Global Sky Group</motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mt-5 text-white/85 text-lg max-w-2xl">Indian at heart. Global in mind. Delivering premium travel, visa and global mobility services with transparency and trust.</motion.p>
        </div>
      </section>

      <section className="py-14 lg:py-20 bg-brand-bg">
        <div className="container">
          <div className="rounded-3xl border border-white/25 bg-white/55 backdrop-blur-xl p-5 sm:p-8 lg:p-10 shadow-premium">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <h2 className="font-sans text-3xl sm:text-4xl font-bold text-brand-blue">About Us</h2>
                <p className="mt-4 text-slate-700 leading-relaxed">Welcome to Global Sky Group — your trusted travel partner in creating unforgettable vacation experiences! We understand that planning the perfect getaway can be overwhelming, so we're here to simplify the process and make it as enjoyable as possible. With years of expertise and a passion for personalized service, we are committed to turning your travel dreams into reality.</p>
                <h3 className="mt-8 font-sans text-2xl font-bold text-brand-blue">Vision</h3>
                <p className="mt-3 text-slate-700 leading-relaxed">Our vision at Global Sky Group is to be the most trusted and innovative travel agency, recognized for creating exceptional and personalized travel experiences that inspire exploration and create lasting memories. We strive to be the go-to destination for travelers seeking seamless journeys filled with adventure, relaxation, and discovery, making every holiday a unique and unforgettable experience.</p>
                <h3 className="mt-8 font-sans text-2xl font-bold text-brand-blue">Mission</h3>
                <ul className="mt-3 space-y-2.5">
                  {['Personalized travel experiences', 'Expert travel guidance', 'Carefully curated destinations', 'Hassle-free travel solutions', 'Memorable journeys for every traveler'].map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-slate-700"><CheckCircle2 className="w-4 h-4 text-brand-orange mt-1" />{point}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="font-sans text-3xl sm:text-4xl font-bold text-brand-blue mb-5">Our Founders</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {FOUNDERS.map((f) => (
                    <div key={f.name} className="rounded-2xl border border-slate-200 bg-white p-3 shadow-soft">
                      <img src={f.image} alt={f.name} className="w-full aspect-[4/5] object-cover rounded-xl" />
                      <h3 className="font-sans mt-3 font-semibold text-slate-900">{f.name}</h3>
                      <p className="text-sm text-slate-600">{f.role}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container">
          <h2 className="font-sans text-3xl lg:text-5xl font-bold text-slate-900 text-center">Why Choose Us</h2>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {WHY_CHOOSE.map((w) => (
              <motion.div key={w.title} whileHover={{ y: -4 }} className="rounded-2xl border border-slate-200 bg-white/75 backdrop-blur-lg p-6 shadow-soft">
                <div className="w-11 h-11 rounded-xl bg-blue-50 text-brand-blue flex items-center justify-center"><w.icon className="w-5 h-5" /></div>
                <h3 className="font-sans mt-4 text-lg font-semibold text-slate-900">{w.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{w.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-18 bg-[#061d44]">
        <div className="container grid grid-cols-2 lg:grid-cols-4 gap-4">
          {STATS.map((s) => (
            <div key={s.label} className="rounded-2xl border border-white/15 bg-white/10 backdrop-blur text-center p-5">
              <div className="font-sans text-3xl lg:text-4xl text-brand-orange font-bold">{s.value}</div>
              <div className="mt-1 text-white/85 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-cta-overlay" />
        </div>
		<div className="container relative z-10 text-center text-white">
          <Target className="mx-auto w-10 h-10 text-brand-orange" />
          <h2 className="mt-4 font-sans text-3xl lg:text-5xl font-bold">Ready to Plan Your Next Journey?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-white/85">Let our experts craft your personalized roadmap for study, visa, and travel success.</p>
          <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild className="bg-brand-orange hover:bg-brand-orange-dark text-white rounded-full px-7 py-6"><a href="/#contact">Book Free Consultation <ArrowRight className="ml-1.5 w-4 h-4" /></a></Button>
            <Button asChild variant="outline" className="bg-white/10 border-white/30 text-white rounded-full px-7 py-6"><a href="https://wa.me/918238061444" target="_blank" rel="noreferrer"><MessageCircle className="mr-1.5 w-4 h-4" /> Chat on WhatsApp</a></Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}


