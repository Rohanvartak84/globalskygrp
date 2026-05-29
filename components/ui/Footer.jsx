/* ------------------------------------------------------------------ */
/* FOOTER                                                              */
/* ------------------------------------------------------------------ */

'use client';
import { ChevronRight, Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
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
                  <a href="/about" className="text-slate-400 hover:text-brand-orange transition-colors flex items-center gap-1.5 group">
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
