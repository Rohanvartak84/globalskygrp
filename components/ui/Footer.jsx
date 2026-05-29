'use client';

import { ChevronRight, Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const SOCIAL_LINKS = [
  { label: 'Facebook', href: 'https://www.facebook.com/globalskygroup', icon: Facebook },
  { label: 'Instagram', href: 'https://www.instagram.com/globalskygroup', icon: Instagram },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/global-sky-group', icon: Linkedin },
];

const FOOTER_COLUMNS = [
  {
    title: 'Quick Links',
    links: [
      { label: 'Home', href: '/' },
      { label: 'About Us', href: '/about' },
      { label: 'Services', href: '/#services' },
      { label: 'Blog', href: '/#blog' },
      { label: 'Career', href: '/#career' },
      { label: 'Contact', href: '/#contact' },
    ],
  },
  {
    title: 'Study Destinations',
    links: [
      { label: 'United Kingdom', href: '/study-abroad/united-kingdom' },
      { label: 'United States', href: '/study-abroad/united-states' },
      { label: 'Canada', href: '/study-abroad/canada' },
      { label: 'Australia', href: '/study-abroad/australia' },
      { label: 'New Zealand', href: '/study-abroad/new-zealand' },
      { label: 'Europe', href: '/study-abroad/europe' },
    ],
  },
  {
    title: 'Visa Services',
    links: [
      { label: 'Tourist Visa', href: '/visa-services/tourist-visa' },
      { label: 'Business Visa', href: '/visa-services/business-visa' },
      { label: 'Visitor Visa', href: '/visa-services/visitor-visa' },
      { label: 'Family Visa', href: '/visa-services/family-visa' },
      { label: 'Student Visa', href: '/visa-services/student-visa' },
      { label: 'Visa Assessment', href: '/visa-services/assessment' },
    ],
  },
  {
    title: 'Tours & Travel',
    links: [
      { label: 'Europe Tours', href: '/tours-travel/europe-tours' },
      { label: 'Dubai Packages', href: '/tours-travel/dubai-packages' },
      { label: 'Honeymoon Trips', href: '/tours-travel/honeymoon-trips' },
      { label: 'Family Holidays', href: '/tours-travel/family-holidays' },
      { label: 'Group Tours', href: '/tours-travel/group-tours' },
      { label: 'Corporate Travel', href: '/tours-travel/corporate-travel' },
    ],
  },
];

const LEGAL_LINKS = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms-and-conditions' },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#061d44] text-slate-300 pt-20 pb-8 overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-brand-blue via-brand-orange to-brand-green" />
      <div className="absolute -top-32 right-0 w-96 h-96 rounded-full bg-brand-blue/20 blur-3xl" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6 xl:gap-10 mb-14">
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
              Premium global mobility partner empowering Indian dreams across 31+ countries
              through education, visa, and luxury travel solutions for over 18 years.
            </p>
            <div className="flex items-center gap-2.5">
              {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-brand-orange flex items-center justify-center transition-colors group"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4 text-slate-300 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title} className="lg:col-span-2">
              <h4 className="font-sans text-white font-semibold mb-5 text-sm tracking-wider uppercase">{column.title}</h4>
              <ul className="space-y-2.5 text-sm">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-slate-400 hover:text-brand-orange transition-colors flex items-center gap-1.5 group">
                      <ChevronRight className="w-3 h-3 text-brand-orange opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold mb-5 text-sm tracking-wider uppercase">Get In Touch</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-orange mt-1 flex-shrink-0" />
                <span className="text-slate-400">
                  523, Silver Radiance 2, Science City Road, Gota,<br />Ahmedabad, Gujarat 380060
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
            {LEGAL_LINKS.map((link) => (
              <a key={link.label} href={link.href} className="hover:text-brand-orange transition-colors">{link.label}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

