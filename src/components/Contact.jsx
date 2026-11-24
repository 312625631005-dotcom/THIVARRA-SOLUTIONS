import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Instagram, MapPin, ArrowRight, Check } from 'lucide-react';

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

const fieldClass =
  'w-full min-h-[48px] rounded-xl border border-white/10 bg-[#0B1628] px-3.5 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-colors hover:border-white/25 focus:border-sky/70 focus:ring-2 focus:ring-sky/20 sm:px-4 sm:text-[15px]';
const selectClass = `${fieldClass} select-field pr-10 sm:pr-11`;
const labelClass = 'flex flex-col gap-2';
const labelTextClass = 'text-[13px] font-medium text-slate-300';

function WhatsAppIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function Step({ number, title, hint }) {
  return (
    <div className="mb-4">
      <div className="flex items-center gap-3">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-sky/30 bg-sky/10 font-orbitron text-[11px] font-bold text-sky">
          {number}
        </span>
        <span className="font-orbitron text-[11px] font-bold uppercase tracking-[0.18em] text-sky">{title}</span>
      </div>
      {hint ? <p className="mt-1.5 pl-10 text-[11px] leading-relaxed text-muted">{hint}</p> : null}
    </div>
  );
}

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
  const [requestUrl, setRequestUrl] = useState('');

  const isDoorstep = mode.indexOf('Doorstep') === 0;

  useEffect(() => {
    setService(serviceCatalog[category][0]);
  }, [category]);

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

    let url;
    if (f.channel === 'gmail') {
      url =
        'https://mail.google.com/mail/?view=cm&fs=1&to=thivarasolutions@gmail.com&su=' +
        encodeURIComponent('Service Request | ' + f.service) +
        '&body=' + encodeURIComponent(message);
    } else {
      url = 'https://wa.me/919445982865?text=' + encodeURIComponent(message);
    }

    const win = window.open(url, '_blank');
    if (win) win.opener = null;
    setRequestUrl(url);
    setSubmitted(true);
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
    <section id="contact" className="relative bg-[#040B18] py-24">
      {/* layered contact background */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#02050C_0%,#061226_45%,#040B18_100%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(75%_60%_at_12%_0%,rgba(30,91,255,0.20),transparent_62%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_88%_100%,rgba(34,199,255,0.16),transparent_62%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,199,255,0.05)_1px,transparent_1px)_0_0/56px_56px,linear-gradient(90deg,rgba(34,199,255,0.05)_1px,transparent_1px)_0_0/56px] [mask-image:radial-gradient(70%_60%_at_50%_40%,#000,transparent)] pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky/60 to-transparent pointer-events-none" />

      <div className="wrap relative">
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
            className="space-y-4 md:sticky md:top-28 self-start"
          >
            <p className="text-xs font-orbitron font-bold uppercase tracking-[0.18em] text-sky mb-2">Direct contact</p>

            {[
              {
                icon: WhatsAppIcon,
                label: 'WHATSAPP',
                value: '+91 94459 82865',
                href: 'https://wa.me/919445982865',
              },
              {
                icon: Phone,
                label: 'PHONE',
                value: '+91 93843 47879',
                href: 'tel:+919384347879',
              },
              {
                icon: Mail,
                label: 'EMAIL',
                value: 'thivarasolutions@gmail.com',
                href: 'mailto:thivarasolutions@gmail.com',
              },
              {
                icon: Instagram,
                label: 'INSTAGRAM',
                value: '@thivarasolutions',
                href: 'https://www.instagram.com/thivarasolutions',
              },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-xl border border-white/10 bg-[#071021]/85 p-4 transition-all hover:border-sky/50 hover:bg-[#0B1628]"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue/10 text-blue transition-colors group-hover:bg-blue group-hover:text-white">
                  <item.icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <small className="block text-[10px] uppercase tracking-widest text-muted">{item.label}</small>
                  <b className="block truncate text-[15px] font-semibold text-white transition-colors group-hover:text-sky">{item.value}</b>
                </div>
                <ArrowRight className="ml-auto h-4 w-4 shrink-0 text-muted transition-colors group-hover:text-sky" />
              </a>
            ))}

            <div className="rounded-xl border border-sky/15 bg-[#06101F]/80 p-4">
              <p className="text-xs leading-relaxed text-muted">
                <span className="font-semibold text-sky">Service area:</span> doorstep visits are confirmed based on your location and technician availability. Remote support is available anywhere.
              </p>
            </div>
          </motion.div>

          <motion.div
            whileInView={{ y: 0 }}
            initial={{ y: 20 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.2, 0.8, 0.2, 1] }}
            viewport={{ once: true, amount: 0.02 }}
            className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#071021]/95 p-4 shadow-[0_30px_90px_rgba(0,0,0,0.55)] backdrop-blur-xl sm:p-8 md:p-10"
          >
            <div className="pointer-events-none absolute -top-24 -right-16 h-64 w-64 rounded-full bg-sky/10 blur-3xl" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky/50 to-transparent" />

            {!submitted ? (
              <form onSubmit={(e) => { e.preventDefault(); handleGenerate(); }} className="relative z-10 space-y-6">
                <div className="rounded-xl border border-blue/25 bg-[linear-gradient(120deg,rgba(30,91,255,0.16),rgba(34,199,255,0.06))] p-4">
                  <strong className="mb-1 block text-lg font-semibold text-white">Tell us what you need.</strong>
                  <span className="text-sm text-muted">Build a complete service request in under two minutes. No formal message needed.</span>
                </div>

                <div className="rounded-2xl border border-sky/25 bg-[linear-gradient(155deg,rgba(16,32,58,0.95),rgba(7,16,32,0.95))] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] sm:p-5">
                  <Step number={1} title="Choose your service" hint="Pick the closest match — we will confirm the details with you." />

                  <div className="space-y-3">
                    <label className="block">
                      <span className={`${labelTextClass} mb-2 block`}>Service category</span>
                      <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className={selectClass}
                      >
                        {Object.keys(serviceCatalog).map((cat) => (
                          <option key={cat} value={cat}>{cat}</option>
                        ))}
                      </select>
                    </label>
                    <label className="block">
                      <span className={`${labelTextClass} mb-2 block`}>Specific service</span>
                      <select
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className={selectClass}
                      >
                        {serviceCatalog[category].map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </label>
                  </div>

                  <div className="mt-4 grid gap-4">
                    <label className={labelClass}>
                      <span className={labelTextClass}>How should we help?</span>
                      <select value={mode} onChange={(e) => setMode(e.target.value)} className={selectClass}>
                        <option>Doorstep visit (home / office)</option>
                        <option>Remote support</option>
                        <option>Consultation / quotation only</option>
                      </select>
                    </label>
                    <label className={labelClass}>
                      <span className={labelTextClass}>How soon?</span>
                      <select value={urgency} onChange={(e) => setUrgency(e.target.value)} className={selectClass}>
                        <option>As soon as possible</option>
                        <option>Today (subject to availability)</option>
                        <option>Within 2–3 days</option>
                        <option>Flexible schedule</option>
                      </select>
                    </label>
                  </div>
                </div>

                <div>
                  <Step number={2} title="Explain the requirement" hint="More detail means a faster quote" />

                  <div className="space-y-4">
                    <label className={labelClass}>
                      <span className={labelTextClass}>Device type</span>
                      <select value={device} onChange={(e) => setDevice(e.target.value)} className={selectClass}>
                        <option>Laptop</option>
                        <option>Desktop PC</option>
                        <option>All-in-one PC</option>
                        <option>Multiple devices</option>
                        <option>Other / not sure</option>
                      </select>
                    </label>

                    <div className="grid gap-4">
                      <label className={labelClass}>
                        <span className={labelTextClass}>Brand / model (optional)</span>
                        <input
                          value={deviceModel}
                          onChange={(e) => setDeviceModel(e.target.value)}
                          type="text"
                          placeholder="e.g. HP Pavilion, Dell OptiPlex"
                          className={fieldClass}
                        />
                      </label>
                      <label className={labelClass}>
                        <span className={labelTextClass}>Budget / quotation</span>
                        <select value={budget} onChange={(e) => setBudget(e.target.value)} className={selectClass}>
                          <option>Please provide a quotation</option>
                          <option>Under ₹1,000</option>
                          <option>₹1,000–₹3,000</option>
                          <option>₹3,000–₹10,000</option>
                          <option>₹10,000+</option>
                          <option>Not sure yet</option>
                        </select>
                      </label>
                    </div>

                    <label className={labelClass}>
                      <span className={labelTextClass}>Problem or project details</span>
                      <textarea
                        value={details}
                        onChange={(e) => setDetails(e.target.value)}
                        rows={4}
                        placeholder="Describe the issue, what you want built, any error message, number of systems, or other useful details..."
                        className={`${fieldClass} min-h-[110px] resize-vertical`}
                        required
                      />
                    </label>

                    <label className={labelClass}>
                      <span className={labelTextClass}>Attach a public file link (optional)</span>
                      <input
                        value={attachmentLink}
                        onChange={(e) => setAttachmentLink(e.target.value)}
                        type="url"
                        placeholder="Google Drive / photo link (if available)"
                        className={fieldClass}
                      />
                    </label>
                  </div>
                </div>

                <div>
                  <Step number={3} title="Your contact details" hint="So we can reply" />

                  <div className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <label className={labelClass}>
                        <span className={labelTextClass}>Full name</span>
                        <input
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          type="text"
                          placeholder="Your name"
                          className={fieldClass}
                          required
                        />
                      </label>
                      <label className={labelClass}>
                        <span className={labelTextClass}>Mobile / WhatsApp number</span>
                        <input
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          type="tel"
                          placeholder="+91 XXXXX XXXXX"
                          className={fieldClass}
                          required
                        />
                      </label>
                    </div>

                    <label className={labelClass}>
                      <span className={labelTextClass}>Email address (optional)</span>
                      <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="you@example.com"
                        className={fieldClass}
                      />
                    </label>
                  </div>
                </div>

                {isDoorstep && (
                  <div className="rounded-2xl border border-white/10 bg-[#050C18]/70 p-5">
                    <Step number={4} title="Doorstep service location" hint="Optional until confirmed" />
                    <p className="mb-4 text-xs leading-relaxed text-muted">
                      Doorstep visits are subject to service-area coverage and appointment confirmation. Share a location only if you want an on-site visit.
                    </p>
                    <div className="space-y-4">
                      <label className={labelClass}>
                        <span className={labelTextClass}>Full address</span>
                        <input
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          type="text"
                          placeholder="Door / flat, street, area, city, PIN code"
                          className={fieldClass}
                        />
                      </label>
                      <label className={labelClass}>
                        <span className={labelTextClass}>Google Maps link (optional)</span>
                        <input
                          value={mapLink}
                          onChange={(e) => setMapLink(e.target.value)}
                          type="url"
                          placeholder="Paste a Google Maps share link"
                          className={fieldClass}
                        />
                      </label>
                      <div className="flex flex-col gap-3 sm:flex-row">
                        <a
                          href="https://maps.google.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-outline flex flex-1 items-center justify-center gap-2 px-4 py-3 text-xs"
                        >
                          <MapPin className="h-4 w-4" /> OPEN MAPS
                        </a>
                        <button
                          type="button"
                          onClick={handleLocation}
                          className="btn-outline flex-1 px-4 py-3 text-center text-xs"
                        >
                          USE MY LOCATION
                        </button>
                      </div>
                      <label className={labelClass}>
                        <span className={labelTextClass}>Preferred visit date / time (optional)</span>
                        <input
                          value={preferredTime}
                          onChange={(e) => setPreferredTime(e.target.value)}
                          type="text"
                          placeholder="e.g. Tomorrow after 4 PM"
                          className={fieldClass}
                        />
                      </label>
                    </div>
                  </div>
                )}

                <div>
                  <Step number={5} title="Send your request" hint="Review before sending" />

                  <div className="space-y-4">
                    <label className={labelClass}>
                      <span className={labelTextClass}>Contact method</span>
                      <select value={channel} onChange={(e) => setChannel(e.target.value)} className={selectClass}>
                        <option value="whatsapp">WhatsApp message</option>
                        <option value="gmail">Email (Gmail composer)</option>
                      </select>
                    </label>

                    <div className="rounded-xl border border-sky/15 bg-[#050C18] p-4 text-sm text-muted">
                      <strong className="mb-2 block text-xs font-orbitron uppercase tracking-widest text-sky">Your request includes</strong>
                      <span>{previewText}</span>
                    </div>

                    <label className="flex cursor-pointer select-none items-start gap-3">
                      <input
                        type="checkbox"
                        checked={consent}
                        onChange={(e) => setConsent(e.target.checked)}
                        className="mt-0.5 h-5 w-5 shrink-0 rounded border-white/30 bg-black accent-blue"
                        required
                      />
                      <span className="text-xs leading-relaxed text-muted">
                        I agree to share the information entered here with THIVARA Solutions so the team can respond to my service enquiry.
                      </span>
                    </label>

                    <button type="submit" className="btn-primary flex w-full items-center justify-center gap-2">
                      <span className="hidden sm:inline">GENERATE MY SERVICE REQUEST</span>
                      <span className="sm:hidden">GENERATE REQUEST</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                    <p className="text-xs leading-relaxed text-muted">
                      This opens WhatsApp or Gmail with your request already filled in. You review it and press Send. No message is sent automatically.
                    </p>
                  </div>
                </div>
              </form>
            ) : (
              <div className="relative z-10 py-10 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-500/15 text-emerald-400">
                  <Check className="h-8 w-8" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">Request ready</h3>
                <p className="mx-auto mb-6 max-w-sm text-sm text-slate-400">
                  Your request was opened in {channel === 'gmail' ? 'Gmail' : 'WhatsApp'}. Review the message and press send.
                </p>
                <div className="flex flex-col items-center gap-3">
                  {requestUrl && (
                    <a href={requestUrl} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2">
                      OPEN REQUEST AGAIN <ArrowRight className="h-4 w-4" />
                    </a>
                  )}
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-sm text-blue underline underline-offset-4 transition-colors hover:text-sky"
                  >
                    Create another request
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
