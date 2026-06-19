import React from 'react';
import { Phone, MessageSquare, ShieldCheck, Award, ShieldAlert } from 'lucide-react';
import { PHONE_NUMBER_RAW, WHATSAPP_NUMBER } from '@/utils/phone';

export const metadata = {
  title: "About Us — Locksmith24hour | DBS Checked | BS3621 Approved",
  description: "22 years trusted locksmith service. All staff DBS‑checked, locks insurance‑approved, local teams nationwide, 24/7, no call‑out fee.",
};

export default function AboutUs() {
  return (
    <div className="py-16 bg-background text-foreground px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl space-y-12">
        
        {/* Title */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-black tracking-tight uppercase text-foreground">
            About Locksmith24hour
          </h1>
          <p className="text-lg text-muted-foreground">
            Providing trusted local locksmith services across Great Britain since 2004.
          </p>
        </div>

        {/* Company History */}
        <div className="space-y-4">
          <h2 className="text-2xl font-black uppercase text-foreground">Our History & Model</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Founded in 2004, Locksmith24hour began as a family-run locksmith team based on a simple but effective model: **truly local response**. Instead of dispatching engineers from distant call centres, we work with locksmith technicians permanently based directly within your local community. 
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Over the past 22 years, our network has expanded to cover every main town and city across England, Scotland, and Wales. By keeping our engineers local, we guarantee a maximum 30-minute response time for emergency situations, day or night.
          </p>
        </div>

        {/* Credentials and Standards */}
        <div className="space-y-6">
          <h2 className="text-2xl font-black uppercase text-foreground">Our Qualifications & Standards</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card border border-border p-6 rounded-2xl space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="text-md font-bold uppercase text-foreground">DBS Vetted Technicians</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Your home security is our absolute priority. All locksmith engineers in our network are fully background-checked, vetted, and DBS-checked, ensuring reliable and trustworthy service.
              </p>
            </div>

            <div className="bg-card border border-border p-6 rounded-2xl space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Award className="h-5 w-5" />
              </div>
              <h3 className="text-md font-bold uppercase text-foreground">BS3621 Insurance Locks</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                We stock and fit high-security hardware that complies with British Standard BS3621 and carries the Kitemark logo, ensuring your locks comply with building and home contents insurance.
              </p>
            </div>
          </div>
        </div>

        {/* Auto Locksmith Warning Callout */}
        <div className="bg-secondary/40 border border-border p-6 rounded-2xl space-y-3">
          <div className="flex items-center gap-2 text-amber-600 dark:text-amber-500 font-bold uppercase tracking-wider text-xs">
            <ShieldAlert className="h-4 w-4 shrink-0" />
            Service Scope Limit
          </div>
          <h3 className="text-sm font-bold uppercase text-foreground">Important Note on Vehicle Lockouts</h3>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Our auto locksmith service is strictly restricted to **emergency entry for locked cars or vans** (e.g. key locked inside the boot). We do not provide replacement keys, transponder programming, lock repairs, or remote fob configuration.
          </p>
        </div>

        {/* Guarantees */}
        <div className="space-y-4">
          <h2 className="text-2xl font-black uppercase text-foreground">Our Guarantees</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            We stand by the quality of our locksmith services. All replacement lock mechanisms and security hardware fitted come with a **12-month manufacturer parts warranty**. Additionally, all work completed by our engineers is backed by a **90-day labour guarantee**. 
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            We provide transparent pricing: we quote and agree on the final cost before starting the work. There are no hidden fees or call-out charges.
          </p>
        </div>

        {/* Contact buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 border-t border-border">
          <a
            href={`tel:${PHONE_NUMBER_RAW}`}
            className="flex items-center justify-center gap-3 w-full sm:w-auto py-3 px-6 rounded-xl bg-primary text-primary-foreground font-black text-sm uppercase tracking-wider transition-premium shadow-[0_4px_16px_rgba(255,217,0,0.25)]"
          >
            <Phone className="h-4 w-4 fill-current" />
            Tap to Call Now
          </a>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello%2C%20I%20need%20a%20locksmith`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full sm:w-auto py-3 px-6 rounded-xl bg-[#25d366] text-white font-black text-sm uppercase tracking-wider transition-premium shadow-[0_4px_16px_rgba(37,211,102,0.2)]"
          >
            <MessageSquare className="h-4 w-4 fill-current" />
            WhatsApp Us
          </a>
        </div>

      </div>
    </div>
  );
}
