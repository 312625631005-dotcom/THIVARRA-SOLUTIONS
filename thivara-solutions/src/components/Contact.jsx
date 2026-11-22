import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Instagram, MessageCircle, ArrowRight } from 'lucide-react';

const serviceCatalog = {
  'Computer & Laptop Support': [
    'Laptop repair', 'Desktop PC repair', 'Windows installation', 'SSD / RAM upgrade',
    'Virus and malware removal', 'Data recovery', 'Custom PC assembly',
    'Computer running slow', 'Other computer issue',
  ],
  'Networking & Wi-Fi': [
    'Wi-Fi troubleshooting', 'Router configuration', 'LAN cabling',
    'Office network setup', 'Network troubleshooting', 'Switch configuration',
    'Other networking requirement',
  ],
  'Printer & Peripheral Support': [
    'Printer installation', 'Printer repair', 'Scanner setup',
    'Peripheral troubleshooting', 'Other printer / peripheral issue',
  ],
  'CCTV & Security': [
    'CCTV installation', 'CCTV troubleshooting', 'DVR / NVR configuration',
    'Remote viewing setup', 'Other CCTV requirement',
  ],
  'Server, Cloud & IT Infrastructure': [
    'Server setup', 'Windows Server support', 'Linux administration',
    'Cloud setup', 'Backup configuration', 'IT infrastructure support',
    'Other server / cloud requirement',
  ],
  'Website, Software & AI': [
    'Business website development', 'Website redesign', 'Website maintenance',
    'E-commerce website', 'AI chatbot integration', 'Business workflow automation',
    'Custom software development', 'Domain / hosting support', 'Other web / AI requirement',
  ],
  'Business & Office IT Support': [
    'Annual IT maintenance', 'Office computer maintenance', 'New office IT setup',
    'IT support consultation', 'Bulk computer deployment', 'Other office IT requirement',
  ],
  'IoT & Embedded Systems': [
    'ESP32 / microcontroller project', 'Sensor integration', 'IoT prototype development',
    'Embedded troubleshooting', 'Smart monitoring / automation', 'Other IoT requirement',
  ],
  'Other IT Services': ['Other IT service'],
};

const contactLinks = [
  { icon: MessageCircle, label: 'WHATSAPP', value: '+91 94459 82865', href: 'https://wa.me/919445982865' },
  { icon: Phone, label: 'PHONE', value: '+91 93843 47879', href: 'tel:+919384347879' },
  { icon: Mail, label: 'EMAIL', value: 'thivarasolutions@gmail.com', href: 'mailto:thivarasolutions@gmail.com' },
  { icon: Instagram, label: 'INSTAGRAM', value: '@thivarasolutions', href: 'https://www.instagram.com/thivarasolutions' },
];

export default function Contact() {
  const [category, setCategory] = useState('Computer & Laptop Support');
  const [service, setService] = useState(serviceCatalog[category][0]);
  const [mode, setMode] = useState('Doorstep visit (home / office)');
  const [urgency, setUrgency] = useState('As soon as possible');
  const [device, setDevice] = useState('Laptop');
  const [deviceModel, setDeviceModel] = useState('');
  const [budget, setBudget] = useState('Please provide a quotation');
  const [details, setDetails] = useState('');
  const [attachmentLink, setAttachmentLink] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [mapLink, setMapLink] = useState('');
  const [preferredTime, setPreferredTime] = useState('');
  const [channel, setChannel] = useState('whatsapp');
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const isDoorstep = mode.indexOf('Doorstep') === 0;

  const previewFields = [category, service, mode, name, phone, details].filter(Boolean);
  const previewText = `${previewFields.slice(0, 3).join(' • ')}. Your contact details, requirements${isDoorstep ? ', address and Google Maps link' : ''} will be included in the final request.`;

  const handleGenerate = () => {
    const f = {
      name, phone, email, category, service, mode, urgency,
      device, deviceModel, budget, details, attachmentLink,
      address, mapLink, preferredTime, channel,
    };
    const message =
      'THIVARA SOLUTIONS — SERVICE REQUEST\n' +
      '================================\n' +
      `Customer name: ${f.name}\n` +
      `Mobile / WhatsApp: ${f.phone}\n` +
      `Email: ${f.email || 'Not provided'}\n\n` +
      'SERVICE DETAILS\n' +
      `Category: ${f.category}\n` +
      `Selected service: ${f.service}\n` +
      `Service mode: ${f.mode}\n` +
      `Urgency: ${f.urgency}\n` +
      `Device type: ${f.device || 'Not applicable'}\n` +
      `Brand / model: ${f.deviceModel || 'Not provided'}\n` +
      `Budget: ${f.budget}\n` +
      `Requirements / issue: ${f.details}\n` +
      `Attachment link: ${f.attachmentLink || 'Not provided'}\n\n` +
      'DOORSTEP LOCATION\n' +
      `Address: ${f.address || 'Not applicable — remote / consultation'}\n` +
      `Google Maps: ${f.mapLink || 'Not provided'}\n` +
      `Preferred visit: ${f.preferredTime || 'Not specified'}\n\n` +
      'Please review my request and confirm service availability, any visit / inspection charges, and the quotation.\n\n' +
      'Submitted via thivarasolutions.in';

    if (f.channel === 'gmail') {
      const url =
        'https://mail.google.com/mail/?view=cm&fs=1&to=thivarasolutions@gmail.com&su=' +
        encodeURIComponent('Service Request | ' + f.service) +
        '&body=' + encodeURIComponent(message);
      window.open(url, '_blank', 'noopener');
    } else {
      const url = 'https://wa.me/919445982865?text=' + encodeURIComponent(message);
      window.open(url, '_blank', 'noopener');
    }
  };

  const handleLocation = () => {
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const lat = pos.coords.latitude.toFixed(6);
        const lng = pos.coords.longitude.toFixed(6);
        setMapLink(`https://www.google.com/maps?q=${lat},${lng}`);
      },
      () => {}
    );
  };

  return (
    <section id="contact" className="contact-bg relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(55%_60%_at_85%_0%,rgba(34,199,255,0.18),transparent_70%)] pointer-events-none" />

      <div className="wrap">
        <div className="text-center mb-16">
          <h2 className="motion-glitch relative inline-block">
            Have a project <span className="grad">in mind?</span>
          </h2>
          <p className="lead mt-4">Tell us what you need. We reply on WhatsApp or email.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            whileInView={{ y: 0 }}
            initial={{ y: 20 }}
            transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
            viewport={{ once: true, amount: 0.02 }}
            className="space-y-6 md:sticky md:top-28 self-start"
          >
            {contactLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="way block text-decoration-none p-4 rounded-xl border border-white/10 bg-white/5 hover:border-blue/50 hover:bg-white/10 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue/10 flex items-center justify-center text-blue group-hover:bg-blue group-hover:text-white transition-colors">
                    <item.icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <small className="block text-xs text-muted tracking-widest uppercase">{item.label}</small>
                    <b className="block text-lg font-semibold text-white group-hover:text-sky transition-colors">{item.value}</b>
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted group-hover:text-sky transition-colors" />
                </div>
              </a>
            ))}
          </motion.div>

          <motion.div
            whileInView={{ y: 0 }}
            initial={{ y: 20 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.2, 0.8, 0.2, 1] }}
            viewport={{ once: true, amount: 0.02 }}
            className="glass-card p-8 md:p-12 rounded-[1.5rem] relative overflow-hidden"
          >
            {!submitted ? (
              <form onSubmit={(e) => { e.preventDefault(); handleGenerate(); }} className="space-y-6 relative z-10">
                <div className="form-intro p-4 rounded-14 border border-blue/20 bg-gradient-to-r from-blue/10 to-sky/5">
                  <strong className="block text-white font-semibold text-lg mb-2">Tell us what you need.</strong>
                  <span className="text-sm text-muted">Build a complete service request in under two minutes. No formal message needed.</span>
                </div>

                <div className="flex items-center gap-2 text-xs font-orbitron font-bold text-sky tracking-wider uppercase mb-2">
                  <span className="w-6 h-6 rounded-full bg-blue/10 flex items-center justify-center text-blue">1</span>
                  CHOOSE YOUR SERVICE
                </div>

                <div className="space-y-3">
                  <label className="block text-sm text-muted font-medium">
                    Service category
                    <select
                      value={category}
                      onChange={(e) => {
                        setCategory(e.target.value);
                        setService(serviceCatalog[e.target.value][0]);
                      }}
                      className="mt-1 w-full min-h-[48px] px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-blue focus:outline-none transition-colors"
                    >
                      {Object.keys(serviceCatalog).map((cat) => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </label>
                  <label className="block text-sm text-muted font-medium">
                    Specific service
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="mt-1 w-full min-h-[48px] px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-blue focus:outline-none transition-colors"
                    >
                      {serviceCatalog[category].map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </label>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <label className="flex flex-col gap-2">
                    <span className="text-sm text-muted font-medium">How should we help?</span>
                    <select
                      value={mode}
                      onChange={(e) => setMode(e.target.value)}
                      className="min-h-[48px] px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-blue focus:outline-none transition-colors"
                    >
                      <option>Doorstep visit (home / office)</option>
                      <option>Remote support</option>
                      <option>Consultation / quotation only</option>
                    </select>
                  </label>
                  <label className="flex flex-col gap-2">
                    <span className="text-sm text-muted font-medium">How soon?</span>
                    <select
                      value={urgency}
                      onChange={(e) => setUrgency(e.target.value)}
                      className="min-h-[48px] px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-blue focus:outline-none transition-colors"
                    >
                      <option>As soon as possible</option>
                      <option>Today (subject to availability)</option>
                      <option>Within 2–3 days</option>
                      <option>Flexible schedule</option>
                    </select>
                  </label>
                </div>

                <div className="flex items-center gap-2 text-xs font-orbitron font-bold text-sky tracking-wider uppercase mb-2">
                  <span className="w-6 h-6 rounded-full bg-blue/10 flex items-center justify-center text-blue">2</span>
                  EXPLAIN THE REQUIREMENT
                </div>

                <label className="flex flex-col gap-2">
                  <span className="text-sm text-muted font-medium">Device type</span>
                  <select
                    value={device}
                    onChange={(e) => setDevice(e.target.value)}
                    className="min-h-[48px] px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-blue focus:outline-none transition-colors"
                  >
                    <option>Laptop</option>
                    <option>Desktop PC</option>
                    <option>All-in-one PC</option>
                    <option>Multiple devices</option>
                    <option>Other / not sure</option>
                  </select>
                </label>

                <div className="grid md:grid-cols-2 gap-4">
                  <label className="flex flex-col gap-2">
                    <span className="text-sm text-muted font-medium">Brand / model (optional)</span>
                    <input
                      value={deviceModel}
                      onChange={(e) => setDeviceModel(e.target.value)}
                      type="text"
                      placeholder="e.g. HP Pavilion, Dell OptiPlex"
                      className="min-h-[48px] px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-blue focus:outline-none transition-colors"
                    />
                  </label>
                  <label className="flex flex-col gap-2">
                    <span className="text-sm text-muted font-medium">Budget / quotation</span>
                    <select
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="min-h-[48px] px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-blue focus:outline-none transition-colors"
                    >
                      <option>Please provide a quotation</option>
                      <option>Under ₹1,000</option>
                      <option>₹1,000–₹3,000</option>
                      <option>₹3,000–₹10,000</option>
                      <option>₹10,000+</option>
                      <option>Not sure yet</option>
                    </select>
                  </label>
                </div>

                <label className="flex flex-col gap-2">
                  <span className="text-sm text-muted font-medium">Problem or project details</span>
                  <textarea
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    rows={4}
                    placeholder="Describe the issue, what you want built, any error message, number of systems, or other useful details..."
                    className="min-h-[110px] px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-blue focus:outline-none transition-colors resize-vertical"
                    required
                  />
                </label>

                <label className="flex flex-col gap-2">
                  <span className="text-sm text-muted font-medium">Attach a public file link (optional)</span>
                  <input
                    value={attachmentLink}
                    onChange={(e) => setAttachmentLink(e.target.value)}
                    type="url"
                    placeholder="Google Drive / photo link (if available)"
                    className="min-h-[48px] px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-blue focus:outline-none transition-colors"
                  />
                </label>

                <div className="flex items-center gap-2 text-xs font-orbitron font-bold text-sky tracking-wider uppercase mb-2">
                  <span className="w-6 h-6 rounded-full bg-blue/10 flex items-center justify-center text-blue">3</span>
                  YOUR CONTACT DETAILS
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <label className="flex flex-col gap-2">
                    <span className="text-sm text-muted font-medium">Full name</span>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      placeholder="Your name"
                      className="min-h-[48px] px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-blue focus:outline-none transition-colors"
                      required
                    />
                  </label>
                  <label className="flex flex-col gap-2">
                    <span className="text-sm text-muted font-medium">Mobile / WhatsApp number</span>
                    <input
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      className="min-h-[48px] px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-blue focus:outline-none transition-colors"
                      required
                    />
                  </label>
                </div>

                <label className="flex flex-col gap-2">
                  <span className="text-sm text-muted font-medium">Email address (optional)</span>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="you@example.com"
                    className="min-h-[48px] px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-blue focus:outline-none transition-colors"
                  />
                </label>

                {isDoorstep && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-xs font-orbitron font-bold text-sky tracking-wider uppercase mb-2">
                      <span className="w-6 h-6 rounded-full bg-blue/10 flex items-center justify-center text-blue">4</span>
                      DOORSTEP SERVICE LOCATION
                    </div>
                    <p className="text-xs text-muted">
                      Doorstep visits are subject to service-area coverage and appointment confirmation. Share a location only if you want an on-site visit.
                    </p>
                    <label className="flex flex-col gap-2">
                      <span className="text-sm text-muted font-medium">Full address</span>
                      <input
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        type="text"
                        placeholder="Door / flat, street, area, city, PIN code"
                        className="min-h-[48px] px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-blue focus:outline-none transition-colors"
                      />
                    </label>
                    <label className="flex flex-col gap-2">
                      <span className="text-sm text-muted font-medium">Google Maps link (optional)</span>
                      <input
                        value={mapLink}
                        onChange={(e) => setMapLink(e.target.value)}
                        type="url"
                        placeholder="Paste a Google Maps share link"
                        className="min-h-[48px] px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-blue focus:outline-none transition-colors"
                      />
                    </label>
                    <div className="flex gap-3">
                      <a href="https://maps.google.com/" target="_blank" rel="noopener noreferrer" className="flex-1 btn-outline text-xs px-4 py-3 text-center">
                        ⌖ OPEN GOOGLE MAPS
                      </a>
                      <button
                        type="button"
                        onClick={handleLocation}
                        className="flex-1 btn-outline text-xs px-4 py-3 text-center"
                      >
                        USE MY LOCATION
                      </button>
                    </div>
                    <label className="flex flex-col gap-2">
                      <span className="text-sm text-muted font-medium">Preferred visit date / time (optional)</span>
                      <input
                        value={preferredTime}
                        onChange={(e) => setPreferredTime(e.target.value)}
                        type="text"
                        placeholder="e.g. Tomorrow after 4 PM"
                        className="min-h-[48px] px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-blue focus:outline-none transition-colors"
                      />
                    </label>
                  </div>
                )}

                <div className="flex items-center gap-2 text-xs font-orbitron font-bold text-sky tracking-wider uppercase mb-2">
                  <span className="w-6 h-6 rounded-full bg-blue/10 flex items-center justify-center text-blue">5</span>
                  SEND YOUR REQUEST
                </div>

                <label className="flex flex-col gap-2">
                  <span className="text-sm text-muted font-medium">Contact method</span>
                  <select
                    value={channel}
                    onChange={(e) => setChannel(e.target.value)}
                    className="min-h-[48px] px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-blue focus:outline-none transition-colors"
                  >
                    <option value="whatsapp">WhatsApp message</option>
                    <option value="gmail">Email (Gmail composer)</option>
                  </select>
                </label>

                <div className="request-preview p-4 rounded-12 border border-white/10 bg-black/40 text-sm text-muted">
                  <strong className="block text-sky mb-2">YOUR REQUEST INCLUDES</strong>
                  <span id="requestPreview">{previewText}</span>
                </div>

                <label className="flex items-start gap-3 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="w-5 h-5 rounded border-white/30 text-blue bg-black focus:ring-blue accent-blue"
                    required
                  />
                  <span className="text-xs text-muted leading-relaxed">
                    I agree to share the information entered here with THIVARA Solutions so the team can respond to my service enquiry.
                  </span>
                </label>

                <button
                  type="submit"
                                  className="btn-primary w-full flex justify-center items-center gap-2"
                >
                  <span className="flex items-center gap-2">
                      GENERATE MY SERVICE REQUEST <ArrowRight className="w-4 h-4" />
                    </span>
                </button>
                <p className="text-xs text-muted">
                  This opens WhatsApp or Gmail with your request already filled in. You review it and press Send. No message is sent automatically.
                </p>
              </form>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-4 text-emerald-400">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Request Ready!</h3>
                <p className="text-slate-400 mb-6">Your service request has been generated. Check WhatsApp or Gmail to review and send.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-sm text-blue hover:text-sky underline underline-offset-4"
                >
                  Create another request
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}