import React from 'react';
import { motion } from 'framer-motion';

const values = [
  {
    title: 'Built around your needs',
    desc: 'We start with your problem, then choose the simplest tools that solve it.',
  },
  {
    title: 'Software and hardware together',
    desc: 'From the website to the router to the sensor, one team handles it.',
  },
  {
    title: 'Ready to grow',
    desc: 'Solutions that start small and scale as your business does.',
  },
  {
    title: 'Clear communication',
    desc: 'Straight answers, honest timelines and support after delivery.',
  },
];

export default function Why() {
  return (
    <section id="why" className="relative py-24 overflow-hidden">
      <div className="wrap">
        <div className="text-center mb-16">
          <h2>Why <span className="grad">THIVARA</span></h2>
          <p className="lead">Practical technology, explained in plain language.</p>
        </div>

        <div className="relative max-w-3xl mx-auto pl-14">
          <div className="absolute left-3 top-2 bottom-2 w-[2px] bg-gradient-to-b from-blue to-sky transform-origin-top" />
          {values.map((val, i) => (
            <motion.div
              key={val.title}
              whileInView={{ x: 0 }}
              initial={{ x: -16 }}
              transition={{ delay: 0.1 + i * 0.12, duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
              viewport={{ once: true, amount: 0.05 }}
              className="relative mb-10 pl-10 group"
            >
              <div className="absolute -left-3 top-1 w-6 h-6 rounded-full border-2 border-sky bg-black shadow-[0_0_0_0_rgba(34,199,255,0.6)] group-hover:shadow-[0_0_14px_2px_rgba(34,199,255,0.8)] transition-all duration-300" />
              <h3 className="text-lg font-semibold text-white mb-1">{val.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}