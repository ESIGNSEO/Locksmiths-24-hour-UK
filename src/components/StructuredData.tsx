import React from 'react';
import { PHONE_NUMBER } from '@/utils/phone';
import { BUSINESS_ADDRESS } from '@/utils/address';

interface StructuredDataProps {
  townName?: string;
  slug?: string;
  county?: string;
  country?: string;
  villages?: string[];
  postcodes?: string[];
}

export default function StructuredData({
  townName,
  slug,
  county,
  country,
  villages = [],
  postcodes = []
}: StructuredDataProps) {
  const url = slug 
    ? `https://locksmith24hour.co.uk/${slug}`
    : 'https://locksmith24hour.co.uk';
    
  const name = townName 
    ? `Locksmith 24 Hour - ${townName}` 
    : 'Locksmith 24 Hour';
    
  const description = townName
    ? `24-hour emergency locksmith service in ${townName}${county ? `, ${county}` : ''}. Rapid 15-30 minute arrival, no call-out fee. Fully DBS-checked engineers, BS3621 approved locks, £5M insurance. Serving ${townName} and surrounding areas.`
    : '24-hour emergency locksmith service covering England, Scotland and Wales. Fully insured, BS3621 approved, no hidden charges.';

  const areas: Array<{ "@type": string; name: string }> = [];
  if (townName) {
    areas.push({
      "@type": "City",
      "name": townName
    });
    if (county) {
      areas.push({
        "@type": "AdministrativeArea",
        "name": county
      });
    }
    villages.slice(0, 8).forEach((village) => {
      areas.push({
        "@type": "Place",
        "name": village
      });
    });
  } else {
    areas.push(
      { "@type": "Country", "name": "England" },
      { "@type": "Country", "name": "Scotland" },
      { "@type": "Country", "name": "Wales" }
    );
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "Locksmith",
    "name": name,
    "alternateName": "locksmith24hour.co.uk",
    "url": url,
    "logo": "https://locksmith24hour.co.uk/logo.png",
    "telephone": PHONE_NUMBER,
    "description": description,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": BUSINESS_ADDRESS.street,
      "addressLocality": townName || BUSINESS_ADDRESS.locality,
      "addressRegion": county || BUSINESS_ADDRESS.region,
      "postalCode": postcodes && postcodes.length > 0 ? postcodes[0] : BUSINESS_ADDRESS.postcode,
      "addressCountry": country || BUSINESS_ADDRESS.countryCode
    },
    "areaServed": areas,
    "serviceType": [
      "Emergency Lockout Service",
      "UPVC Lock Repairs",
      "Anti-Snap Lock Installation",
      "Mortice Lock Repairs",
      "Lock Replacement & Upgrades",
      "Commercial Locksmith & Landlord Security",
      "Safe Opening",
      "Burglary Repairs"
    ],
    "hasCertification": [
      "BS3621 British Standard Approved",
      "DBS Background Checked Technicians"
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "priceRange": "££"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
