import React from 'react';
import Link from 'next/link';
import { Key, Phone, ShieldCheck, MapPin, Piano } from 'lucide-react';
import { PHONE_NUMBER_RAW, WHATSAPP_NUMBER } from '@/utils/phone';
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
              <a href={`tel:${PHONE_NUMBER_RAW}`} className="hover:underline">Tap to Call</a>
            </div>
            <div className="flex items-center gap-2 text-primary font-bold text-lg pt-2">
              <svg
                className="h-5 w-5 fill-current"
                viewBox="0 0 24 24"
                role="img"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662a11.87 11.87 0 005.711 1.458h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="hover:underline">
                Message on WhatsApp
              </a>
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
