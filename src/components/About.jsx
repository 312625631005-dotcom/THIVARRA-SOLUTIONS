import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Zap, ShieldCheck, Users } from 'lucide-react';
import ValueCube from '../three/ValueCube';

const values = [
  {
    icon: Code2,
    title: 'Clean Architecture',
    desc: 'We build maintainable, scalable codebases that grow with your business.',
  },
  {
    icon: Zap,
    title: 'High Performance',
    desc: 'Optimized for speed, reliability, and seamless user experiences.',
  },
  {
    icon: ShieldCheck,
    title: 'Security First',
    desc: 'Enterprise-grade security built into every layer of our solutions.',
  },
  {
    icon: Users,
    title: 'Client Partnership',
    desc: 'We work alongside you, not just for you — from concept to launch.',
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Why Thivara?</h2>
          <p className="section-subtitle">
            We combine technical excellence with creative vision to deliver software that matters.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            viewport={{ once: true }}
            className="flex justify-center min-h-[400px]"
          >
            <ValueCube />
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -40 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Built on principles, not shortcuts.</h3>
            <div className="space-y-6">
              {values.map((value, i) => (
                <motion.div
                  key={value.title}
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: -20 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 shrink-0">
                    <value.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-1">{value.title}</h4>
                    <p className="text-slate-400 leading-relaxed">{value.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}