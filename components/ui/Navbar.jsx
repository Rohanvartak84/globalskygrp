/* ------------------------------------------------------------------ */
/* NAVBAR                                                              */
/* ------------------------------------------------------------------ */

'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ChevronRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
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

export default function Navbar() {
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
