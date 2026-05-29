'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/918140840069';

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href={WHATSAPP_URL}
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
