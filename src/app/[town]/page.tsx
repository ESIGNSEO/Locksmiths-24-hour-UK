import React from 'react';
import { notFound } from 'next/navigation';
import { Phone, MessageSquare, CheckCircle, Clock, ShieldCheck, ShieldAlert, Award } from 'lucide-react';
import StructuredData from '@/components/StructuredData';
import { locations } from '@/data/locations';
import { generateSEOContent } from '@/utils/seo-engine';
import { PHONE_NUMBER, PHONE_NUMBER_RAW, WHATSAPP_NUMBER } from '@/utils/phone';

interface PageProps {
  params: Promise<{
    town: string;
  }>;
}

export async function generateStaticParams() {
  return locations.map((loc) => ({
    town: loc.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { town } = await params;
  
  // Only handle locksmith- prefixes, delegate other routes
  if (!town.startsWith("locksmith-")) {
    return {};
  }

  const location = locations.find((loc) => loc.slug === town);

  if (!location) {
    return {
      title: "Locksmith Service - Page Not Found",
      description: "Local emergency locksmith services."
    };
  }

  const seo = generateSEOContent(location.name, location.county, location.postcodes);

  return {
    title: seo.metaTitle,
    description: seo.metaDescription,
  };
}

export default async function TownLandingPage({ params }: PageProps) {
  const { town } = await params;

  // Enforce locksmith- prefix check to avoid conflict with static pages
  if (!town.startsWith("locksmith-")) {
    notFound();
  }

  const location = locations.find((loc) => loc.slug === town);

  if (!location) {
    notFound();
  }

  const seo = generateSEOContent(location.name, location.county, location.postcodes);

  return (
    <>
      <StructuredData
        townName={location.name}
        slug={location.slug}
        county={location.county}
        country={location.country}
        villages={location.villages}
        postcodes={location.postcodes}
      />

      {/* Hero Section */}
      <section className="bg-[#0a1029] text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-primary/5 blur-[100px] pointer-events-none" />

        <div className="mx-auto max-w-5xl text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider">
            📍 Local Dispatch in {location.name}
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight uppercase max-w-4xl mx-auto leading-none">
            {seo.h1}
          </h1>

          <p className="text-base sm:text-lg text-[#8c97ad] max-w-2xl mx-auto leading-relaxed">
            {seo.heroText}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto pt-2">
            <a
              href={`tel:${PHONE_NUMBER_RAW}`}
              className="flex items-center justify-center gap-3 w-full py-4 px-6 rounded-2xl bg-primary text-primary-foreground font-black text-sm uppercase tracking-wider transition-premium shadow-[0_4px_20px_rgba(255,217,0,0.25)] hover:scale-[1.02] active:scale-[0.98] animate-[pulse_2.8s_ease-in-out_infinite]"
            >
              <Phone className="h-4 w-4 fill-current" />
              Tap to Call Now
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello%2C%20I%20need%20a%20locksmith%20in%20`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 px-6 rounded-2xl bg-[#25d366] text-white font-black text-sm uppercase tracking-wider transition-premium shadow-[0_4px_20px_rgba(37,211,102,0.2)] hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageSquare className="h-4 w-4 fill-current" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Top Highlight Box */}
      <section className="px-4 sm:px-6 lg:px-8 -mt-6 relative z-10">
        <div className="mx-auto max-w-4xl bg-[#ffd900] text-[#121212] p-8 rounded-3xl border-2 border-[#121212] shadow-lg text-center space-y-4">
          <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight">
            ✅ We Have A Locksmith Permanently Based In {location.name} ✅
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-black uppercase tracking-wider pt-2 text-[#0a1029]">
            <div className="flex items-center justify-center gap-2">
              <Clock className="h-5 w-5 fill-current animate-pulse shrink-0" />
              Arrive Max 30 Minutes
            </div>
            <div className="flex items-center justify-center gap-2">
              <ShieldCheck className="h-5 w-5 fill-current shrink-0" />
              DBS Checked Staff
            </div>
            <div className="flex items-center justify-center gap-2">
              <Award className="h-5 w-5 fill-current shrink-0" />
              No Call-Out Fee
            </div>
          </div>
        </div>
      </section>

      {/* Local Service Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-black uppercase text-foreground">
              Local Locksmiths in {location.name}
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {seo.introParagraph1}
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {seo.introParagraph2}
            </p>
          </div>

          {/* Villages List Box */}
          <div className="bg-secondary/40 border border-border p-8 rounded-3xl space-y-4 shadow-sm">
            <h3 className="text-lg font-black uppercase text-foreground">
              📍 Villages, Hamlets & Estates Covered Around {location.name}
            </h3>
            <p className="text-xs text-muted-foreground">
              We cover every address — if you live in or near any of these areas, our engineer can reach you in maximum 30 minutes:
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {location.villages.map((village, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-lg bg-card border border-border text-xs font-semibold text-foreground shadow-sm"
                >
                  {village}
                </span>
              ))}
            </div>
            <p className="text-xs text-primary font-bold italic pt-2">
              We cover EVERY postcode in this region including {location.postcodes.join(', ')} — if you are local, we are already minutes away!
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/20 border-y border-border">
        <div className="mx-auto max-w-4xl space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black uppercase text-foreground">
              Services Available In {location.name}
            </h2>
            <p className="text-xs text-muted-foreground">
              Emergency local lock and key solutions, operating 24 hours a day, 365 days a year.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: seo.emergencyLockoutTitle, desc: seo.emergencyLockoutDesc },
              { title: seo.lockChangeTitle, desc: seo.lockChangeDesc },
              { title: seo.upvcTitle, desc: seo.upvcDesc },
              { title: seo.keyExtractionTitle, desc: seo.keyExtractionDesc },
              { title: seo.safeOpeningTitle, desc: seo.safeOpeningDesc },
              { title: seo.commercialSecurityTitle, desc: seo.commercialSecurityDesc },
            ].map((srv, idx) => (
              <div key={idx} className="bg-card border border-border p-6 rounded-2xl space-y-3 shadow-sm flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="font-bold text-md text-foreground uppercase tracking-tight">{srv.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{srv.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Auto Warning Callout */}
          <div className="bg-[#0a1029] text-white p-6 rounded-2xl border border-[#2e364d] text-center space-y-2 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 text-primary font-bold text-xs uppercase tracking-wider">
              <ShieldAlert className="h-4 w-4 shrink-0 animate-bounce" />
              Auto Locksmith Service Restriction
            </div>
            <p className="text-xs text-[#8c97ad] leading-relaxed">
              Our auto locksmith service in {location.name} is strictly limited to <strong>opening locked vehicles</strong>. We do not provide car key cutting, remote programming, or transponder key replacement.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="mx-auto max-w-4xl space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-2xl font-black uppercase text-foreground">
                Why Choose Us In {location.name}?
              </h2>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {seo.whyChooseUsText}
              </p>
              <div className="grid grid-cols-2 gap-3 text-xs font-bold text-foreground pt-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                  Max 30-min Arrival
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                  DBS Checked Staff
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                  BS3621 Approved Locks
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                  No Hidden Fees
                </div>
              </div>
            </div>

            <div className="bg-secondary/40 border border-border p-6 rounded-2xl space-y-4 shadow-sm">
              <h3 className="font-bold text-md text-foreground uppercase tracking-tight">Our Quality Guarantee</h3>
              <ul className="space-y-3 text-xs text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary font-bold">&bull;</span>
                  <span><strong>12 Months parts warranty</strong> on all Yale, Chubb, ERA, and Banham hardware upgrades.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">&bull;</span>
                  <span><strong>90 Days labour guarantee</strong> on all installation and lockout bypass work.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">&bull;</span>
                  <span>Full public liability insurance up to £5 million, ensuring secure operation.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Local Service Snapshot & Verification */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-secondary/10 border-t border-border">
        <div className="mx-auto max-w-4xl space-y-6">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[11px] font-bold uppercase tracking-wider">
              <Clock className="h-3.5 w-3.5" />
              Service Overview at a Glance
            </div>
            <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-foreground">
              {location.name} Locksmith Snapshot
            </h3>
            <p className="text-xs text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Essential verification details and emergency service parameters for residents and businesses in {location.name} ({location.county}).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-card border border-border p-5 rounded-2xl space-y-3 shadow-sm">
              <h4 className="text-xs font-black uppercase tracking-wider text-primary flex items-center gap-2">
                <ShieldCheck className="h-4 w-4" />
                Emergency Response & Coverage
              </h4>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Response Time:</strong> Average 15–30 minute emergency dispatch across {location.name}.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Call-Out Charges:</strong> £0 (No call-out fee 24/7/365, pay only for labour & parts).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Local Coverage:</strong> {location.name}, plus surrounding areas including {location.villages.slice(0, 4).join(', ')}.</span>
                </li>
              </ul>
            </div>

            <div className="bg-card border border-border p-5 rounded-2xl space-y-3 shadow-sm">
              <h4 className="text-xs font-black uppercase tracking-wider text-primary flex items-center gap-2">
                <Award className="h-4 w-4" />
                Vetting, Standards & Guarantees
              </h4>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Technician Vetting:</strong> Fully DBS checked, certified local engineers.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Hardware Standards:</strong> British Standard BS3621 insurance-approved lock replacements.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Guarantees:</strong> 90-day workmanship guarantee & 12-month parts warranty backed by £5M liability cover.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-card/60 border border-border/80 rounded-xl p-4 text-center">
            <p className="text-xs text-muted-foreground leading-relaxed">
              Need immediate emergency assistance in <strong className="text-foreground">{location.name}</strong>? Call our 24-hour dispatch team directly on{' '}
              <a href={`tel:${PHONE_NUMBER_RAW}`} className="text-primary font-bold hover:underline">
                {PHONE_NUMBER}
              </a>{' '}
              for 15–30 minute arrival.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
