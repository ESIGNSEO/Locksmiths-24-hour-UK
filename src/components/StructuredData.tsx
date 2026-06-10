import React from 'react';

interface StructuredDataProps {
  townName?: string;
  slug?: string;
}

export default function StructuredData({ townName, slug }: StructuredDataProps) {
  const url = slug 
    ? `https://locksmiths24hour.co.uk/${slug}`
    : 'https://locksmiths24hour.co.uk';
    
  const name = townName 
    ? `Locksmith 24 Hour - ${townName}` 
    : 'Locksmith 24 Hour';
    
  const description = townName
    ? `24-hour emergency locksmith service based in ${townName} and surrounding areas. Fully insured, BS3621 approved, no hidden charges.`
    : '24-hour emergency locksmith service covering England, Scotland and Wales. Fully insured, BS3621 approved, no hidden charges.';

  const schema = {
    "@context": "https://schema.org",
    "@type": "Locksmith",
    "name": name,
    "alternateName": "locksmith24hour.co.uk",
    "url": url,
    "logo": "https://locksmiths24hour.co.uk/logo.png",
    "telephone": "07742 831011",
    "description": description,
    "areaServed": townName ? [
      {
        "@type": "AdministrativeArea",
        "name": townName
      }
    ] : [
      { "@type": "Country", "name": "England" },
      { "@type": "Country", "name": "Scotland" },
      { "@type": "Country", "name": "Wales" }
    ],
    "serviceType": [
      "Emergency Lockout Service",
      "UPVC Lock Repairs",
      "Anti-Snap Lock Installation",
      "Car Key Replacement",
      "Mortice Lock Repairs",
      "Landlord Security",
      "Safe Opening",
      "Key Cutting"
    ],
    "hasCertification": "BS3621 British Standard",
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
