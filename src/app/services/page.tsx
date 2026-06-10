import React from 'react';
import { Phone, MessageSquare, Unlock, Key, ShieldAlert, CheckCircle, Shield, Award } from 'lucide-react';

export const metadata = {
  title: "Our Services — 24 Hour Emergency Locksmith | Locksmiths24hour",
  description: "Emergency lockout, lock change, UPVC repair, key extraction, safes, commercial security. All work by DBS‑checked staff, BS3621 locks. Cars ONLY opened — call 24/7.",
};

export default function Services() {
  const services = [
    {
      icon: Unlock,
      title: "Emergency Lockout Service",
      description: "Locked out of your house, flat, office or vehicle? We offer rapid 24-hour response to get you back inside. Our technicians use professional locksmith picks and bypass shims for non-destructive entry, ensuring 99% of doors are opened without any damage to your door or frame.",
      warning: "⚠️ Auto lockout assistance is strictly limited to opening locked vehicles. We do not cut, program or repair electronic transponder keys."
    },
    {
      icon: Key,
      title: "Lock Change & Upgrades",
      description: "Moving into a new home or need to upgrade your business security? We supply and fit insurance-approved locks that meet British Standard BS3621. From complete cylinder replacements, night latches, and mortice locks to high-security euro cylinders, we ensure your security standards are fully compliant with home insurance policies.",
      warning: null
    },
    {
      icon: ShieldAlert,
      title: "UPVC Door & Window Lock Repairs",
      description: "UPVC door won't lock, or handle spinning? We carry a massive range of replacement multipoint lock gearboxes, full locking mechanisms, and handles. We repair failed mechanisms on composite and plastic doors, align sagging hinges, and fit anti-snap euro cylinders on-site.",
      warning: null
    },
    {
      icon: CheckCircle,
      title: "Broken Key Extraction & Key Cutting",
      description: "If your key has snapped off inside the lock plug, our team uses professional extraction keys to clear the cylinder safely. We carry key cutting equipment in our mobile workshops and can cut duplicates on-site to ensure you have functional keys immediately.",
      warning: "⚠️ Key cutting and duplicate services are strictly for domestic and commercial doors. No car key cutting or transponder programming is available."
    },
    {
      icon: Shield,
      title: "Safe Opening & Repairs",
      description: "Safe digital pad failing or lost the mechanical key? We open commercial grade digital, key, and combination dial safes. Our specialists use digital diagnostic bypass equipment and precision opening tools to access your locked safes, restoring lock functionality where possible.",
      warning: null
    },
    {
      icon: Award,
      title: "Commercial & Landlord Security",
      description: "We work with landlords, estate agents, and commercial facility managers to provide scheduled and emergency locksmith support. We fit fire-exit panic hardware, overhead door closers, master key suites, shutter locks, and high-security deadlocks for retail and office units.",
      warning: null
    }
  ];

  return (
    <div className="py-16 bg-background text-foreground px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl space-y-16">
        
        {/* Title */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h1 className="text-4xl font-black tracking-tight uppercase text-foreground">
            Locksmith Services 24/7
          </h1>
          <p className="text-lg text-muted-foreground">
            Professional security solutions for homes, businesses, and vehicles. Fast, local assistance across England, Scotland, and Wales.
          </p>
        </div>

        {/* Detailed Services Grid */}
        <div className="space-y-12">
          {services.map((srv, idx) => (
            <div key={idx} className="bg-card border border-border p-8 rounded-3xl grid grid-cols-1 md:grid-cols-4 gap-6 items-start shadow-sm transition-premium hover:shadow-md">
              <div className="md:col-span-1 flex items-center gap-4 md:flex-col md:items-start">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <srv.icon className="h-6 w-6" />
                </div>
                <h2 className="text-xl font-black uppercase text-foreground leading-tight md:mt-2">
                  {srv.title}
                </h2>
              </div>
              <div className="md:col-span-3 space-y-4">
                <p className="text-[#515a70] dark:text-[#8c97ad] text-sm leading-relaxed">
                  {srv.description}
                </p>
                {srv.warning && (
                  <div className="bg-[#0a1029] text-white p-4 rounded-2xl text-xs font-bold border border-[#2e364d]">
                    {srv.warning}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Call-to-Action Box */}
        <div className="bg-[#0a1029] text-white p-10 rounded-3xl border border-[#2e364d] text-center space-y-6 max-w-3xl mx-auto relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
          <h3 className="text-2xl font-black uppercase text-foreground">Need a Locksmith Immediately?</h3>
          <p className="text-sm text-[#8c97ad] max-w-xl mx-auto leading-relaxed">
            Our nearest local lock engineer leaves immediately upon calling. We arrive within 30 minutes, 24 hours a day, with no call-out fees.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto pt-2">
            <a
              href="tel:07742831011"
              className="flex items-center justify-center gap-3 w-full py-3 px-6 rounded-xl bg-primary text-primary-foreground font-black text-sm uppercase tracking-wider transition-premium shadow-[0_4px_16px_rgba(255,217,0,0.25)] hover:scale-[1.02]"
            >
              <Phone className="h-4 w-4 fill-current" />
              Tap to Call Now
            </a>
            <a
              href="https://wa.me/447742831011?text=Hello%2C%20I%20need%20a%20locksmith"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-3 px-6 rounded-xl bg-[#25d366] text-white font-black text-sm uppercase tracking-wider transition-premium shadow-[0_4px_16px_rgba(37,211,102,0.2)] hover:scale-[1.02]"
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
