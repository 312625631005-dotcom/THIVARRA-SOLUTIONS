import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'ANNAMALAI FRESH MART',
    desc: 'A retail grocery website built on the MERN stack.',
    tag: 'WEB DEVELOPMENT',
  },
  {
    title: 'TULASI VIBE',
    desc: 'A responsive business website with branding and a chatbot assistant.',
    tag: 'WEB + AI',
  },
  {
    title: 'STUDENT BARCODE ATTENDANCE',
    desc: 'Barcode scanning for student entry and exit, backed by Google Apps Script.',
    tag: 'AUTOMATION',
  },
  {
    title: 'SMART BUS SYSTEM',
    desc: 'GPS bus-stop announcements and radio streaming on ESP32 hardware.',
    tag: 'IOT + EMBEDDED',
  },
];

export default function Portfolio() {
  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[rgba(2,8,20,0.55)] pointer-events-none" />

      <div className="wrap">
        <div className="text-center mb-16">
          <h2>Work we have <span className="grad">built</span></h2>
          <p className="lead">A few examples from our portfolio.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((proj, i) => (
            <motion.div
              key={proj.title}
              whileInView={{ y: 0 }}
              initial={{ y: 24 }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
              viewport={{ once: true, amount: 0.05 }}
              className="proj relative p-8 rounded-16 border border-white/10 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] group"
            >
              <div className="absolute top-0 bottom-0 left-0 w-[3px] bg-sky shadow-[0_0_16px_3px_rgba(34,199,255,0.6)] group-hover:opacity-100 opacity-0 transition-opacity" />
              <h3 className="text-lg font-semibold text-white mb-2 tracking-tight">{proj.title}</h3>
              <p className="text-sm text-muted mb-4 leading-relaxed">{proj.desc}</p>
              <span className="text-xs font-orbitron font-bold text-sky tracking-wider uppercase">{proj.tag}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}