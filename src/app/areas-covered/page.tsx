import React from 'react';
import Link from 'next/link';
import { Phone, MessageSquare, MapPin } from 'lucide-react';
import { locations } from '@/data/locations';
import { PHONE_NUMBER_RAW, WHATSAPP_NUMBER } from '@/utils/phone';

export const metadata = {
  title: "Areas Covered | Locksmith24hour | All Towns England Scotland Wales",
  description: "We operate in every town, city, village & hamlet across England, Scotland & Wales — no Northern Ireland. Local team ≤30 mins — find your location here.",
};

export default function AreasCovered() {
  // Group locations by country and county for the directory
  const directory: Record<string, Record<string, typeof locations>> = {};

  locations.forEach(loc => {
    if (!directory[loc.country]) {
      directory[loc.country] = {};
    }
    if (!directory[loc.country][loc.county]) {
      directory[loc.country][loc.county] = [];
    }
    directory[loc.country][loc.county].push(loc);
  });

  return (
    <div className="py-16 bg-background text-foreground px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl space-y-12">
        
        {/* Title */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h1 className="text-4xl font-black tracking-tight uppercase text-foreground">
            Areas We Cover
          </h1>
          <p className="text-lg text-muted-foreground">
            We have local locksmiths permanently based in every town across England, Scotland, and Wales.
          </p>
        </div>

        {/* Info callout */}
        <div className="bg-secondary/40 border border-border p-6 rounded-2xl flex gap-4 items-start max-w-3xl mx-auto">
          <MapPin className="h-6 w-6 text-primary shrink-0 mt-0.5" />
          <div className="space-y-2">
            <h3 className="text-sm font-bold uppercase text-foreground">Village & Hamlet Coverage</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              To keep our site simple and fast, we list smaller villages and hamlets under their nearest main town landing page. If you live in an outlying community, rest assured we cover you! Find your nearest town directory listing below.
            </p>
          </div>
        </div>

        {/* Directory listing */}
        <div className="space-y-12">
          {Object.keys(directory).map(country => (
            <div key={country} className="space-y-6">
              <h2 className="text-2xl font-black uppercase border-b border-border pb-2 text-foreground">
                {country} Locations
              </h2>
              
              <div className="space-y-8">
                {Object.keys(directory[country]).map(county => (
                  <div key={county} className="space-y-3">
                    <h3 className="text-sm font-bold uppercase text-primary tracking-wider">{county}</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {directory[country][county].map(loc => (
                        <Link
                          key={loc.name}
                          href={`/${loc.slug}`}
                          className="px-3 py-2 text-xs font-semibold rounded-xl bg-card border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-premium shadow-sm text-foreground"
                        >
                          {loc.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="bg-[#0a1029] text-white p-10 rounded-3xl border border-[#2e364d] text-center space-y-6 max-w-3xl mx-auto pt-10">
          <h3 className="text-xl font-bold uppercase text-foreground">Don&apos;t See Your Town Listed?</h3>
          <p className="text-sm text-[#8c97ad] max-w-xl mx-auto leading-relaxed">
            We cover 100% of addresses in England, Scotland, and Wales (excluding Northern Ireland). Call us with your postcode and we will dispatch the nearest locksmith immediately.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto pt-2">
            <a
              href={`tel:${PHONE_NUMBER_RAW}`}
              className="flex items-center justify-center gap-3 w-full py-3 px-6 rounded-xl bg-primary text-primary-foreground font-black text-sm uppercase tracking-wider transition-premium shadow-[0_4px_16px_rgba(255,217,0,0.25)]"
            >
              <Phone className="h-4 w-4 fill-current" />
              Tap to Call Now
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello%2C%20I%20need%20a%20locksmith`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-3 px-6 rounded-xl bg-[#25d366] text-white font-black text-sm uppercase tracking-wider transition-premium shadow-[0_4px_16px_rgba(37,211,102,0.2)]"
            >
              <MessageSquare className="h-4 w-4 fill-current" />
              WhatsApp Us
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
