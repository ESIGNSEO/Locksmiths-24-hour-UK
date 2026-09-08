import React from 'react';
import Link from 'next/link';
import { Key, Phone, ShieldCheck, MapPin } from 'lucide-react';
import { PHONE_NUMBER_RAW } from '@/utils/phone';
import { BUSINESS_ADDRESS } from '@/utils/address';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a1029] text-[#fafafa] border-t border-[#2e364d] transition-premium py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-[0_4px_20px_rgba(255,217,0,0.3)]">
                <Key className="h-5 w-5 stroke-[2.5]" />
              </div>
              <span className="text-lg font-black tracking-tight uppercase">
                Locksmith<span className="text-primary">24hour</span>
              </span>
            </Link>
            <p className="text-sm text-[#8c97ad] max-w-sm">
              Professional, local emergency locksmith services across England, Scotland, and Wales. We arrive within 30 minutes, 24/7/365. No call-out fee.
            </p>
            <div className="flex items-center gap-2 text-primary font-bold text-lg pt-2">
              <Phone className="h-5 w-5 fill-current" />
              <a href={`tel:${PHONE_NUMBER_RAW}`} className="hover:underline">Tap to Call Now</a>
            </div>
            <div className="flex items-start gap-2 text-xs text-[#8c97ad] pt-1">
              <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
              <span>{BUSINESS_ADDRESS.full}</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#8c97ad] bg-[#141c34] border border-[#2e364d] p-3 rounded-xl max-w-md">
              <ShieldCheck className="h-5 w-5 text-primary shrink-0" />
              <span>All locksmiths are fully DBS-checked, vetted, and carry BS3621 insurance-approved locks.</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-primary mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-[#8c97ad]">
              <li>
                <Link href="/" className="hover:text-white transition-premium">Home</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-premium">Services</Link>
              </li>
              <li>
                <Link href="/areas-covered" className="hover:text-white transition-premium">Areas Covered</Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:text-white transition-premium">About Us</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-premium">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Important Notice */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-primary mb-4">Important Notice</h3>
            <p className="text-xs text-[#8c97ad] leading-relaxed">
              ⚠️ <strong>Auto Locksmith Services:</strong> Our auto service is strictly limited to <strong>opening locked vehicles</strong>. We do not offer car key cutting, programming, repairs, replacements, or any electronic key configuration.
            </p>
            <p className="text-xs text-[#8c97ad] mt-4">
              🛡️ Approved locks fitted including Yale, ERA, Chubb, and Banham.
            </p>
          </div>
        </div>

        {/* Bottom copyright and compliance */}
        <div className="mt-12 pt-8 border-t border-[#2e364d] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8c97ad]">
          <div>
            <p>&copy; {currentYear} Locksmith24hour. All rights reserved.</p>
            <p className="text-[11px] text-[#6b768e] mt-1">Physical Address: {BUSINESS_ADDRESS.full}</p>
          </div>
          <div className="flex gap-4">
            <span>Coverage: England, Scotland & Wales Only</span>
            <span>&bull;</span>
            <span>DBS Cleared</span>
            <span>&bull;</span>
            <span>BS3621 Standard</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
