import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Zap, Monitor, Wifi, Cpu } from 'lucide-react';

const services = [
  {
    title: 'WEB DEVELOPMENT',
    desc: 'Websites and web apps that look sharp on any phone.',
    icon: Code2,
    items: ['Business and portfolio websites', 'Online stores and full-stack apps', 'Redesign, upkeep and deployment'],
  },
  {
    title: 'AI SOLUTIONS',
    desc: 'Put AI to work inside your site or daily workflow.',
    icon: Zap,
    items: ['Chatbots and virtual assistants', 'AI integration into your apps', 'Workflow automation'],
  },
  {
    title: 'IT SUPPORT & PC BUILDING',
    desc: 'Reliable machines, set up properly.',
    icon: Monitor,
    items: ['Custom PC assembly', 'Hardware and software troubleshooting', 'Windows setup and maintenance'],
  },
  {
    title: 'NETWORKING',
    desc: 'Stable networks for offices and computer labs.',
    icon: Wifi,
    items: ['LAN setup and structured cabling', 'Router and switch configuration', 'Network troubleshooting'],
  },
  {
    title: 'IOT & EMBEDDED',
    desc: 'Custom hardware that senses, tracks and reports.',
    icon: Cpu,
    items: ['ESP32-based projects', 'Sensor integration and prototyping', 'Smart monitoring and automation'],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(60%_55%_at_78%_45%,rgba(30,91,255,0.22),transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,199,255,0.07)_1px,transparent_1px)_0_0/48px_48px,linear-gradient(90deg,rgba(34,199,255,0.07)_1px,transparent_1px)_0_0/48px] [-webkit-mask:radial-gradient(70%_50%_at_70%_50%,#000,transparent)] [mask:radial-gradient(70%_50%_at_70%_50%,#000,transparent)] animate-[grid_12s_linear_infinite] pointer-events-none" />

      <div className="wrap">
        <div className="text-center mb-16">
          <h2>What we <span className="grad">build</span></h2>
          <p className="lead">Software and hardware from one team, so you do not need to manage several vendors.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 perspective-1000">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              whileInView={{ y: 0 }}
              initial={{ y: 28 }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
              viewport={{ once: true, amount: 0.05 }}
              className="glass-card p-8 relative group"
            >
              <div className="w-12 h-12 rounded-xl bg-blue/10 flex items-center justify-center mb-6 text-blue group-hover:bg-blue group-hover:text-white transition-colors">
                <svc.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 tracking-tight">{svc.title}</h3>
              <p className="text-sm text-muted mb-6 leading-relaxed">{svc.desc}</p>
              <ul className="space-y-2">
                {svc.items.map((item, j) => (
                  <li key={j} className="text-sm text-slate-300 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}