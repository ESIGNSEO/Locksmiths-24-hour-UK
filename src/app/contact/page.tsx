import React from 'react';
import { Phone, MessageSquare, HelpCircle } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import { PHONE_NUMBER, PHONE_NUMBER_RAW, WHATSAPP_NUMBER } from '@/utils/phone';

export const metadata = {
  title: "Contact Us — 24 Hour Locksmith | Locksmith24hour",
  description: "Call or WhatsApp 24/7 — tell us your town/village/postcode. Local locksmith arrives ≤30 mins, no call‑out fee.",
};

export default function Contact() {
  const faqs = [
    {
      q: "How fast do you arrive in emergency situations?",
      a: "Our local locksmiths are permanently based within your local area. We guarantee a maximum response and arrival time of 30 minutes anywhere in our covered zones."
    },
    {
      q: "What is your pricing model, and are there call-out fees?",
      a: "We charge absolutely zero call-out fees. The price of the service is agreed upon before our lock engineer starts any work, ensuring transparency and no hidden costs."
    },
    {
      q: "Do your locks comply with home insurance specifications?",
      a: "Yes. All locks fitted are British Standard BS3621 and Kitemark approved, which is the standard level of security required by UK home insurance companies."
    },
    {
      q: "Are all locksmith technicians background-checked?",
      a: "Yes. Every single locksmith engineer in our network is fully vetted and DBS checked (Disclosure and Barring Service) for your absolute peace of mind."
    },
    {
      q: "What auto locksmith services do you provide?",
      a: "We only provide vehicle entry services if you are locked out of your car or van. We do not cut, replace, or program transponder keys or key fobs."
    }
  ];

  return (
    <div className="py-16 bg-background text-foreground px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl space-y-12">
        
        {/* Title */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h1 className="text-4xl font-black tracking-tight uppercase text-foreground">
            Contact Us
          </h1>
          <p className="text-lg text-muted-foreground">
            Get in touch for immediate local assistance. We are open 24 hours a day, 365 days a year.
          </p>
        </div>

        {/* Contact info grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Action Callouts */}
          <div className="space-y-8">
            <h2 className="text-2xl font-black uppercase text-foreground">Emergency Dispatch</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              If you require a locksmith immediately, please call or WhatsApp us. Do not wait for a form response. When you call, please have the following information ready:
            </p>
            
            <ul className="space-y-3 text-sm font-semibold text-foreground">
              <li className="flex gap-2 items-center">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 text-primary text-xs font-bold">1</span>
                <span>Your full address, town, and postcode.</span>
              </li>
              <li className="flex gap-2 items-center">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 text-primary text-xs font-bold">2</span>
                <span>The type of door or lock (UPVC, wood, metal, vehicle).</span>
              </li>
              <li className="flex gap-2 items-center">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 text-primary text-xs font-bold">3</span>
                <span>Details of the issue (locked out, lost keys, lock broken).</span>
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href={`tel:${PHONE_NUMBER_RAW}`}
                className="flex items-center justify-center gap-3 w-full py-4 px-6 rounded-2xl bg-primary text-primary-foreground font-black text-lg uppercase tracking-wider transition-premium shadow-[0_8px_32px_rgba(255,217,0,0.25)] hover:scale-[1.02] active:scale-[0.98]"
              >
                <Phone className="h-5 w-5 fill-current" />
                {PHONE_NUMBER}
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello%2C%20I%20need%20a%20locksmith`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-4 px-6 rounded-2xl bg-[#25d366] text-white font-black text-lg uppercase tracking-wider transition-premium shadow-[0_8px_32px_rgba(37,211,102,0.2)] hover:scale-[1.02] active:scale-[0.98]"
              >
                <MessageSquare className="h-5 w-5 fill-current" />
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Simple Contact Form */}
          <ContactForm />
        </div>

        {/* FAQs */}
        <div className="space-y-6 pt-12 border-t border-border max-w-4xl mx-auto">
          <h2 className="text-2xl font-black uppercase text-foreground text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-card border border-border p-6 rounded-2xl flex gap-4 items-start">
                <HelpCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h3 className="font-bold text-sm text-foreground">{faq.q}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
