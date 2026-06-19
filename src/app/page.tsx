import React from 'react';
import Link from 'next/link';
import { Phone, MessageSquare, Shield, Clock, Award, CheckCircle, ChevronRight, Unlock, Key, ShieldAlert, Sparkles } from 'lucide-react';
import StructuredData from '@/components/StructuredData';
import { locations } from '@/data/locations';
import { PHONE_NUMBER_RAW, WHATSAPP_NUMBER } from '@/utils/phone';

export const metadata = {
  title: "Locksmith24hour | 24/7 Emergency Locksmith | DBS Checked | BS3621 Approved",
  description: "Local locksmiths across England, Scotland & Wales — arrive ≤30 mins, no call‑out fee, all locks insurance‑approved, DBS‑checked technicians. Open 24/7 — call now!",
};

export default function Home() {
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
    <>
      <StructuredData />
      
      {/* Hero Section */}
      <section className="relative bg-[#0a1029] text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-primary/10 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-primary/5 blur-[80px] pointer-events-none" />

        <div className="relative mx-auto max-w-5xl text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold tracking-wide uppercase animate-pulse">
            <Sparkles className="h-4 w-4" />
            Guaranteed 30-Minute Response Time
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-none uppercase max-w-4xl mx-auto">
            Local 24 Hour <span className="text-primary">Locksmith</span>
          </h1>

          <p className="text-lg sm:text-xl text-[#8c97ad] max-w-2xl mx-auto leading-relaxed">
            Emergency lock opening, lock repairs, and lock replacement services across England, Scotland, and Wales. Vetted, DBS-checked professionals operating 24/7.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto pt-4">
            <a
              href={`tel:${PHONE_NUMBER_RAW}`}
              className="flex items-center justify-center gap-3 w-full py-4 px-8 rounded-2xl bg-primary text-primary-foreground font-black text-lg uppercase tracking-wider transition-premium shadow-[0_8px_32px_rgba(255,217,0,0.25)] hover:shadow-[0_12px_40px_rgba(255,217,0,0.45)] hover:-translate-y-0.5 active:scale-[0.98] animate-[pulse_2.8s_ease-in-out_infinite]"
            >
              <Phone className="h-5 w-5 fill-current" />
              Tap to Call Now
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello%2C%20I%20need%20a%20locksmith`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 px-8 rounded-2xl bg-[#25d366] text-white font-black text-lg uppercase tracking-wider transition-premium shadow-[0_8px_32px_rgba(37,211,102,0.2)] hover:shadow-[0_12px_40px_rgba(37,211,102,0.35)] hover:-translate-y-0.5 active:scale-[0.98]"
            >
              <MessageSquare className="h-5 w-5 fill-current" />
              WhatsApp Us
            </a>
          </div>

          {/* Trust badges */}
          <div className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center max-w-4xl mx-auto border-t border-[#2e364d] text-xs uppercase tracking-wider text-[#8c97ad] font-bold">
            <div className="flex flex-col items-center gap-2">
              <Shield className="h-6 w-6 text-primary" />
              DBS Checked Staff
            </div>
            <div className="flex flex-col items-center gap-2">
              <Clock className="h-6 w-6 text-primary" />
              30-min Arrival
            </div>
            <div className="flex flex-col items-center gap-2">
              <Award className="h-6 w-6 text-primary" />
              No Call-Out Fee
            </div>
            <div className="flex flex-col items-center gap-2">
              <CheckCircle className="h-6 w-6 text-primary" />
              BS3621 Approved
            </div>
          </div>
        </div>
      </section>

      {/* Main Guarantees Info */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Visual Feature List */}
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight uppercase">
                Locksmith<span className="text-primary">24hour</span> Service Standards
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                When security matters, you need local locksmiths who live and work right in your area. Our network covers every major county across England, Scotland, and Wales, providing professional, certified locksmith engineers directly to your door.
              </p>
              
              <div className="space-y-4">
                {[
                  "Truly local team based in every covered town - arrive within 30 minutes guaranteed.",
                  "Zero call-out fees. The price we agree on before we start is the final price.",
                  "22 years of industry experience working with Yale, ERA, Chubb, and Banham hardware.",
                  "All locks fitted are BS3621 British Standard and Kitemark approved for home insurance.",
                  "12 months manufacturer warranty on all parts and 90 days guarantee on labour."
                ].map((text, idx) => (
                  <div key={idx} className="flex gap-3 items-start">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-foreground">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Auto Locksmith Warning Callout */}
            <div className="bg-secondary/40 border border-border p-8 rounded-3xl space-y-4 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
              <div className="flex items-center gap-3 text-amber-600 dark:text-amber-500 font-bold uppercase tracking-wider text-sm">
                <ShieldAlert className="h-5 w-5 shrink-0 animate-bounce" />
                Auto Locksmith Service Limit
              </div>
              <h3 className="text-xl font-bold uppercase text-foreground">
                Locked Out of Your Car? We Can Help!
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We provide emergency vehicle entry if you have locked your keys inside your car or van. However, to keep our service fast and focused:
              </p>
              <div className="bg-[#0a1029] text-white p-4 rounded-2xl text-xs font-bold space-y-2 border border-[#2e364d]">
                <p className="text-primary uppercase tracking-wider">⚠️ Strictly Car Entry Only:</p>
                <p>We ONLY open locked cars. We do NOT provide car key cutting, transponder programming, lock repairs, key replacements, or remote key pairing services.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20 border-y border-border">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-black uppercase">Our Professional Locksmith Services</h2>
            <p className="text-muted-foreground">Operating 24 hours a day, 7 days a week, 365 days a year for homes and businesses.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Unlock,
                title: "Emergency Lockouts",
                desc: "Fast, non-destructive entry for homes, offices, garages, and locked cars. We aim to open all locks with zero damage to your door or frame."
              },
              {
                icon: Key,
                title: "Lock Changing & Fitting",
                desc: "Full lock replacement and lock upgrades to BS3621 British Standard and Kitemark approved locks, keeping your home insurance valid."
              },
              {
                icon: ShieldAlert,
                title: "UPVC Door & Window Lock Repair",
                desc: "We diagnose and repair faulty multipoint locking mechanisms, replacing broken gearboxes, handles, and aligning doors."
              },
              {
                icon: CheckCircle,
                title: "Broken Key Extraction",
                desc: "Snapped key stuck inside the lock cylinder? We extract broken keys quickly and cut replacement duplicates on-site."
              },
              {
                icon: Shield,
                title: "Safe Opening & Repairs",
                desc: "Safe locked shut or digital keypad failing? We open high-security dial, key, and digital safes without damaging your valuables."
              },
              {
                icon: Award,
                title: "Commercial & Landlord Security",
                desc: "Master key suites, shutter locks, digital code locks, and landlord tenant-change lock swaps to protect commercial assets."
              }
            ].map((srv, idx) => (
              <div key={idx} className="bg-card border border-border p-8 rounded-3xl transition-premium hover:-translate-y-1 hover:shadow-md flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <srv.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-black uppercase text-foreground">{srv.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{srv.desc}</p>
                </div>
                <div className="pt-6">
                  <Link href="/services" className="inline-flex items-center gap-1 text-sm font-bold text-primary hover:underline">
                    Find Out More <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas Covered Directory Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-black uppercase">Areas We Cover</h2>
            <p className="text-muted-foreground">
              We serve every town, city, village, and hamlet across England, Scotland, and Wales. All surrounding villages and hamlets are serviced under their nearest main town.
            </p>
          </div>

          <div className="space-y-12">
            {Object.keys(directory).map(country => (
              <div key={country} className="space-y-6">
                <h3 className="text-2xl font-black uppercase border-b border-border pb-2 text-foreground">
                  Locksmith Services In {country}
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {Object.keys(directory[country]).slice(0, 15).map(county => (
                    <div key={county} className="bg-card border border-border p-6 rounded-2xl space-y-3 shadow-sm">
                      <h4 className="text-md font-bold uppercase text-primary">{county}</h4>
                      <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                        {directory[country][county].slice(0, 10).map(loc => (
                          <Link
                            key={loc.name}
                            href={`/${loc.slug}`}
                            className="px-2.5 py-1.5 rounded-lg bg-secondary/50 hover:bg-primary hover:text-primary-foreground font-semibold transition-premium"
                          >
                            {loc.name}
                          </Link>
                        ))}
                        {directory[country][county].length > 10 && (
                          <Link href="/areas-covered" className="px-2.5 py-1.5 rounded-lg bg-secondary/35 text-foreground hover:underline font-bold">
                            + {directory[country][county].length - 10} more towns
                          </Link>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/areas-covered"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-secondary text-secondary-foreground font-bold hover:bg-secondary/80 transition-premium shadow-sm w-full sm:w-auto justify-center"
            >
              View Full Location Directory
              <ChevronRight className="h-5 w-5" />
            </Link>
            <Link
              href="/prices"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl border-2 border-border hover:bg-secondary hover:border-muted-foreground/30 text-foreground font-bold transition-premium shadow-sm w-full sm:w-auto justify-center"
            >
              View Locksmith Prices
              <ChevronRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
