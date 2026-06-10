// Seeded random number generator to ensure deterministic build output per town
export function createSeededRandom(seed: string) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) {
    h = Math.imul(31, h) + seed.charCodeAt(i) | 0;
  }
  return function() {
    h = Math.imul(h ^ h >>> 16, 2246822507);
    h = Math.imul(h ^ h >>> 13, 3266489909);
    return ((h ^= h >>> 16) >>> 0) / 4294967296;
  };
}

// Select a random element from an array using a seeded random function
function selectOption<T>(arr: T[], random: () => number): T {
  const index = Math.floor(random() * arr.length);
  return arr[index];
}

// Simple spintax parser that handles brackets: {option1|option2|option3}
function parseSpintax(text: string, random: () => number): string {
  let spun = text;
  const regex = /\{([^{}]+)\}/g;
  
  while (regex.test(spun)) {
    spun = spun.replace(regex, (match, optionsText) => {
      const options = optionsText.split('|');
      return selectOption(options, random);
    });
  }
  return spun;
}

export interface GeneratedSEOContent {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  heroText: string;
  introParagraph1: string;
  introParagraph2: string;
  whyChooseUsText: string;
  emergencyLockoutTitle: string;
  emergencyLockoutDesc: string;
  lockChangeTitle: string;
  lockChangeDesc: string;
  upvcTitle: string;
  upvcDesc: string;
  keyExtractionTitle: string;
  keyExtractionDesc: string;
  safeOpeningTitle: string;
  safeOpeningDesc: string;
  commercialSecurityTitle: string;
  commercialSecurityDesc: string;
}

export function generateSEOContent(townName: string, countyName: string, postcodes: string[]): GeneratedSEOContent {
  const random = createSeededRandom(townName);
  const mainPostcode = postcodes[0] || "";

  // H1 Spintax Variations
  const h1Spintax = parseSpintax(
    "{Locksmith In [Town] | [Town] Locksmiths | Local Locksmith In [Town] | 24 Hour Locksmith [Town]} | Locksmiths24hour | {Local Team | Arrive In 30 Minutes Max | DBS Checked}",
    random
  );

  // Meta Title Spintax Variations
  const metaTitleSpintax = parseSpintax(
    "{Locksmith [Town] | Emergency Locksmith [Town] | 24/7 Locksmith [Town]} - {24/7 Emergency | No Call Out Fee | DBS Checked} | BS3621 Approved",
    random
  );

  // Meta Description Spintax Variations
  const metaDescSpintax = parseSpintax(
    "{Local locksmith permanently based in [Town].|Need an emergency locksmith in [Town]?|24-hour locksmith coverage across [Town] and surroundings.} Arrive ≤30 mins, {no call-out fee|zero call-out charge}, all locks {insurance-approved|BS3621 approved}. {Covering [Town] & all surrounding villages — call now!|Local DBS checked engineers ready to help — contact us 24/7.}",
    random
  );

  // Hero subtitle text
  const heroTextSpintax = parseSpintax(
    "{Locked out of your home, office or car in [Town]? Our local engineer arrives in under 30 minutes. No call-out fee, clear prices, and DBS-checked staff.|Need emergency lock repairs or lock changes in [Town] [Postcode]? We are open now, fully stocked with BS3621 insurance-approved locks.|Fast, local locksmith service based in [Town]. We open locked doors, change locks, and repair UPVC mechanisms 24 hours a day.}",
    random
  );

  // Intro Paragraph 1
  const intro1Spintax = parseSpintax(
    "{We are your dedicated local locksmith team serving [Town] and every nearby village, hamlet, estate and rural community around it.|If you need a reliable locksmith in [Town], our local specialists live and work right here. We cover all surrounding neighbourhoods and estates, ensuring we're never more than a few minutes away.|Our professional locksmith service is permanently based in [Town] [Postcode], providing rapid response coverage for the town centre and all surrounding villages.} " +
    "{Unlike national companies travelling from far away, our locksmiths live and work right here in [Town] — we know every street, estate and area perfectly and are always minutes away.|Because our team members are based directly in [Town], we don't make you wait. We know the local estates, bypasses, and streets, meaning we arrive faster than out-of-town services.|Living and working in [Town] means we are true locals. We know the fastest routes to your location, whether you are in the heart of [Town] or in one of the outlying hamlets.} " +
    "{We arrive fast, work professionally, and leave your property secure and undamaged — day, night, weekend or holiday.|Our local technicians respond immediately, using non-destructive entry methods to keep your doors undamaged and secure, 24/7/365.|You can count on us for swift, damage-free entry and high-security lock replacements at any hour of the day or night.}",
    random
  );

  // Intro Paragraph 2
  const intro2Spintax = parseSpintax(
    "{Whether you have snapped your key in the lock, need your home security upgraded to meet insurance standards, or find yourself locked out in the middle of the night, we have a technician standing by.|We handle everything from jammed UPVC doors and windows to broken key extraction and full lock replacements following a move or burglary.|Our service is fully equipped to deal with mortice locks, night latches, anti-snap euro cylinders, and smart lock installations on residential and commercial premises.} " +
    "{Our vans are mobile workshops, carrying a complete stock of Yale, ERA, Chubb, Union and Banham locks, meaning 95% of jobs are completed on the very first visit.|We only supply and fit high-quality hardware that complies with British Standard BS3621 and carrying the Kitemark logo, ensuring your home security is fully validated for insurance policies.|All of our lock hardware upgrades come with a 12-month manufacturer warranty, fitted by fully vetted and DBS-checked professionals.}",
    random
  );

  // Why Choose Us Paragraph
  const whyChooseUsSpintax = parseSpintax(
    "{When you call Locksmiths24hour in [Town], you are supporting a local service that prioritises your security. We guarantee a maximum 30-minute response time, carry no call-out fees, and guarantee all parts and labour.|Our reputation in [County] is built on trust, transparency, and high standards of workmanship. We agree on the price before starting, employ DBS-checked professionals, and work around the clock.|Your security is our primary focus. We provide rapid-response emergency locksmith services 365 days a year across [Town], with fully insured technicians and Yale/Chubb approved security upgrades.}",
    random
  );

  // Detailed Services Titles & Descriptions (Spintax rotated per town)
  const emergencyLockoutTitle = parseSpintax(
    "{24/7 Emergency Lockout Assistance|Locked Out of House or Office?|Emergency Door & Car Opening}",
    random
  );
  
  const emergencyLockoutDesc = parseSpintax(
    "{Locked out in [Town]? We open doors quickly using specialist non-destructive techniques. If you are locked out of your car, we only open the vehicle — we do not cut, program or repair car keys.|Lost keys or locked keys inside? We provide non-destructive entry for houses, flats, offices, and vehicles. Note: our auto locksmith service only opens locked cars. No key cutting or programming.|Rapid response lockout service. We bypass mortice locks, euro cylinders, and deadbolts without damaging your frame. Locked cars are opened only — no key cutting or remote programming.}",
    random
  );

  const lockChangeTitle = parseSpintax(
    "{Lock Change, Upgrades & Replacement|Insurance-Approved Lock Fitting|Anti-Snap Lock Installation}",
    random
  );

  const lockChangeDesc = parseSpintax(
    "{Need your locks changed or upgraded to British Standard BS3621? We supply and fit anti-snap cylinders, mortice deadlocks, and night latches from Yale, Chubb, and ERA.|We replace broken, old, or insecure locks with insurance-approved locks. Upgrading to BS3621 Euro cylinders protects your property against lock snapping and lock bumping.|Keep your property secure with premium lock replacements. We install Yale and Banham locks, offering high-security security configurations with a 12-month parts guarantee.}",
    random
  );

  const upvcTitle = parseSpintax(
    "{UPVC Door & Window Lock Repairs|UPVC Mechanism & Gearbox Fixing|Jammed UPVC Door Repairs}",
    random
  );

  const upvcDesc = parseSpintax(
    "{Jammed UPVC door or window? We specialise in fixing multipoint locking mechanisms, replacing failed gearboxes, and aligning doors for smooth locking in [Town].|We diagnose and repair faulty UPVC lock gearboxes, replacing worn mechanisms and fitting anti-snap euro cylinders to secure your plastic or composite doors.|If your UPVC handle is spinning or won't lift, we replace the multipoint lock gearboxes, realign the hinges, and restore your home security immediately.}",
    random
  );

  const keyExtractionTitle = parseSpintax(
    "{Broken Key Extraction & Key Cutting|Snapped Key Removal & Clean Locks|Broken Key Extraction}",
    random
  );

  const keyExtractionDesc = parseSpintax(
    "{Snapped your key in the lock cylinder? We extract broken keys quickly without damaging the lock and cut replacement keys on-site. (Note: key cutting is NOT available for cars).|We pull out snapped keys from cylinders and deadbolts, verify the lock mechanism works, and supply duplicate keys from our mobile workspace. No car keys cut.|Don't damage your lock attempting to pry a broken key out. Our specialists extract the key in minutes and cut fresh duplicates on the spot (strictly residential/commercial keys only).}",
    random
  );

  const safeOpeningTitle = parseSpintax(
    "{Safe Opening, Repairs & Installation|Digital & Mechanical Safe Opening|Safe Security Services}",
    random
  );

  const safeOpeningDesc = parseSpintax(
    "{Forgotten safe combination or failed electronic lock? We open commercial and domestic safes, replace digital keypads, and reset lock configurations.|We bypass locked safes, repair locking bolts, and install secure wall or floor safes to protect your cash, jewellery, and sensitive paperwork in [Town].|Get professional safe cracking and repairs. We open dial safes, key safes, and digital cabinets without compromising your valuables, restoring the safe to active duty.}",
    random
  );

  const commercialSecurityTitle = parseSpintax(
    "{Commercial & Landlord Security Services|Business Security & Landlord Locksmith|Commercial Lock & Key Solutions}",
    random
  );

  const commercialSecurityDesc = parseSpintax(
    "{We support commercial businesses and landlords in [Town], providing master key suites, shutter locks, digital code locks, and emergency lock changes between tenancies.|Our team manages commercial security systems, installing panic bars, door closers, deadbolts, and heavy-duty digital locks for shops, offices, and industrial units.|Ensure landlord compliance with insurance-approved locks on rental properties. We provide security surveys, lock changes, and tenant lockout services 24/7.}",
    random
  );

  // Replacer function to inject town specific details
  const replaceDetails = (text: string) => {
    return text
      .replaceAll("[Town]", townName)
      .replaceAll("[County]", countyName)
      .replaceAll("[Postcode]", mainPostcode);
  };

  return {
    metaTitle: replaceDetails(metaTitleSpintax),
    metaDescription: replaceDetails(metaDescSpintax),
    h1: replaceDetails(h1Spintax),
    heroText: replaceDetails(heroTextSpintax),
    introParagraph1: replaceDetails(intro1Spintax),
    introParagraph2: replaceDetails(intro2Spintax),
    whyChooseUsText: replaceDetails(whyChooseUsSpintax),
    emergencyLockoutTitle: replaceDetails(emergencyLockoutTitle),
    emergencyLockoutDesc: replaceDetails(emergencyLockoutDesc),
    lockChangeTitle: replaceDetails(lockChangeTitle),
    lockChangeDesc: replaceDetails(lockChangeDesc),
    upvcTitle: replaceDetails(upvcTitle),
    upvcDesc: replaceDetails(upvcDesc),
    keyExtractionTitle: replaceDetails(keyExtractionTitle),
    keyExtractionDesc: replaceDetails(keyExtractionDesc),
    safeOpeningTitle: replaceDetails(safeOpeningTitle),
    safeOpeningDesc: replaceDetails(safeOpeningDesc),
    commercialSecurityTitle: replaceDetails(commercialSecurityTitle),
    commercialSecurityDesc: replaceDetails(commercialSecurityDesc),
  };
}
