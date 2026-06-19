import React from 'react';
import { Phone, MessageSquare, ShieldCheck, Clock, Award, ShieldAlert, BadgeInfo } from 'lucide-react';
import StructuredData from '@/components/StructuredData';
import { locksmithPrices } from '@/data/prices';
import { PHONE_NUMBER_RAW, WHATSAPP_NUMBER } from '@/utils/phone';

export const metadata = {
  title: "Locksmith Service Prices & Rates | Locksmith24hour",
  description: "Fair, transparent locksmith pricing across England, Scotland & Wales. Standardized rates, no hidden fees, and final prices confirmed before work starts.",
};

export default function PricesPage() {
  return (
    <>
      <StructuredData />

      {/* Hero Section */}
      <section className="bg-[#0a1029] text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-primary/5 blur-[100px] pointer-events-none" />

        <div className="mx-auto max-w-5xl text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider">
            💳 Fair & Transparent Pricing
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight uppercase max-w-4xl mx-auto leading-none">
            Locksmith Service Prices
          </h1>

          <p className="text-base sm:text-lg text-[#8c97ad] max-w-2xl mx-auto leading-relaxed">
            Standardized start rates for all locksmith services. We agree on the final price with you before starting work, ensuring absolute transparency and zero hidden charges.
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
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello%2C%20I%20need%20a%20locksmith`}
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

      {/* Main Highlights Box */}
      <section className="px-4 sm:px-6 lg:px-8 -mt-6 relative z-10">
        <div className="mx-auto max-w-4xl bg-primary text-[#121212] p-8 rounded-3xl border-2 border-[#121212] shadow-lg text-center space-y-4">
          <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight">
            Our Pricing Guarantees
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-black uppercase tracking-wider pt-2 text-[#0a1029]">
            <div className="flex items-center justify-center gap-2">
              <Award className="h-5 w-5 fill-current shrink-0" />
              Zero Call-Out Fee
            </div>
            <div className="flex items-center justify-center gap-2">
              <Clock className="h-5 w-5 fill-current animate-pulse shrink-0" />
              Confirm Price Before Starting
            </div>
            <div className="flex items-center justify-center gap-2">
              <ShieldCheck className="h-5 w-5 fill-current shrink-0" />
              VAT & Parts Included
            </div>
          </div>
        </div>
      </section>

      {/* Service Cards Price List */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="mx-auto max-w-5xl space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locksmithPrices.map((item) => (
              <div 
                key={item.id} 
                className="bg-card border border-border p-6 rounded-3xl flex flex-col justify-between shadow-sm transition-premium hover:-translate-y-1 hover:shadow-md"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-black text-base text-foreground uppercase tracking-tight leading-tight">
                      {item.name}
                    </h3>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
                
                <div className="pt-6 mt-4 border-t border-border flex items-center justify-between">
                  <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                    {item.isEstimated ? 'Est. starting rate' : 'Standard rate'}
                  </span>
                  <div className="px-3.5 py-1.5 rounded-xl bg-secondary text-foreground font-black text-sm border border-border shadow-sm">
                    {item.priceDisplay}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Auto Locksmith Service Restriction Alert */}
          <div className="bg-[#0a1029] text-white p-8 rounded-3xl border border-[#2e364d] text-center space-y-3 max-w-3xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl animate-pulse" />
            <div className="flex items-center justify-center gap-2 text-primary font-bold text-xs uppercase tracking-wider">
              <ShieldAlert className="h-5 w-5 shrink-0 animate-bounce" />
              Auto Locksmith Service Limitation
            </div>
            <h3 className="text-lg font-bold uppercase text-foreground">
              Locked Out of Your Car or Van?
            </h3>
            <p className="text-xs text-[#8c97ad] leading-relaxed max-w-xl mx-auto">
              Our emergency auto locksmith service is strictly limited to **opening locked vehicles** to retrieve keys locked inside. We do **NOT** provide replacement car keys, remote key cutting, key pairing, transponder coding, or remote key repair services.
            </p>
          </div>

          {/* Objections / Pricing FAQs */}
          <div className="bg-secondary/40 border border-border p-8 rounded-3xl space-y-6 shadow-sm max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-foreground font-black text-lg uppercase tracking-wider">
              <BadgeInfo className="h-5 w-5 text-primary shrink-0" />
              Pricing & Work Policy
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-muted-foreground">
              <div className="space-y-2">
                <h4 className="font-bold text-foreground uppercase">Why are prices listed as starting rates?</h4>
                <p className="leading-relaxed">
                  Every door lock is unique: lock brands, mechanism wear-and-tear, composite versus wooden doors, and the complexity of access affect the actual scope of work. Our lock engineer will inspect your lock first and agree on a final price with you before starting work.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-bold text-foreground uppercase">What is the assessment/cancellation fee?</h4>
                <p className="leading-relaxed">
                  If our local locksmith arrives on-site and you decide to cancel, or if we perform a diagnostic assessment and identify the issue but you choose not to proceed with the repair/upgrade, a standard flat fee of £49 is charged.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-bold text-foreground uppercase">Are parts and VAT included?</h4>
                <p className="leading-relaxed">
                  All price ranges show base start rates. Final quotes include both local labor and the specific hardware/locks supplied (such as standard cylinders versus high-security British Standard BS3621 locks). VAT is applied where applicable.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-bold text-foreground uppercase">What lock brands do you supply?</h4>
                <p className="leading-relaxed">
                  We supply and install a complete range of certified locks from industry-leading manufacturers, including Yale, Chubb, ERA, Union, Banham, and Ultion. High-security locks are backed by a 12-month manufacturer parts warranty.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
