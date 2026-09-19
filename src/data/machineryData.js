export const BUSINESS_INFO = {
  name: "SE ENTERPRISES",
  subBrand: "Printech machineries",
  badge: "AP, TELANGANA Distributor",
  proprietor: "P. Jayakumar",
  phone: "9246770309",
  phoneDisplay: "+91 92467 70309",
  email: "pauljayakumar778@gmail.com",
  address: "74-15-8/10, Plot No. 10, Vinayaka Apartments, JD Towers Road, Autonagar, Vijayawada Pin code: 520007",
  addressShort: "Autonagar, Vijayawada - 520 007",
  tagline: "Premier Offset Printing & Post-Press Machineries Sales, Service & Spare Parts",
  whatsappLink: "https://wa.me/919246770309",
  established: "1998",
  installationsCount: "1,200+",
  experienceYears: "26+",
  distributorTerritory: "Andhra Pradesh & Telangana"
};

export const MACHINERY_CATEGORIES = [
  { id: 'all', label: 'All Machineries' },
  { id: 'offset', label: 'Offset Printing Presses' },
  { id: 'cutting', label: 'Programme Paper Cutters' },
  { id: 'folding', label: 'Paper Folding Machines' },
  { id: 'creasing', label: 'Sticker Creasing & Scoring' },
  { id: 'numbering', label: 'Auto Numbering & Barcode' },
  { id: 'refurbished', label: 'Pre-Owned & Certified' },
];

export const FEATURED_STOCK_MACHINE = {
  id: 'oliver-sakurai-66ez',
  name: 'Oliver Sakurai 66EZ Offset Press',
  category: 'offset',
  badge: 'Ready in Stock • Japan Import',
  year: '2012',
  status: 'Ready for Immediate Inspection in Vijayawada',
  tagline: 'Year 2012, 19x26 inch sheetfed offset press with Sakuraimatic alcohol dampening, all chromed cylinders, and pneumatic air system.',
  image: '/machines/sakurai-66ez/sakurai-4.jpg',
  gallery: [
    '/machines/sakurai-66ez/sakurai-4.jpg',
    '/machines/sakurai-66ez/sakurai-1.jpg',
    '/machines/sakurai-66ez/sakurai-2.jpg',
    '/machines/sakurai-66ez/sakurai-3.jpg',
    '/machines/sakurai-66ez/sakurai-5.jpg'
  ],
  isLiveStock: true,
  origin: 'Imported from Japan',
  highlights: [
    'Direct Import from Japan — Mint Running Condition',
    'Sakuraimatic Continuous Alcohol Dampening System',
    'All Chromed Cylinders with Zero Scratches or Wear',
    'Pneumatic Air System & Low Pile Delivery Unit',
    'Powder Sprayer System & All Standard Accessories Included',
    'Zero Damage in Gears and Cylinders — Bench-Tested & Verified'
  ],
  specs: {
    'Model': 'Oliver Sakurai 66EZ',
    'Manufacturing Year': '2012',
    'Sheet Size': '19 x 26 inch (470 x 660 mm)',
    'Dampening System': 'Alcohol Dampening / Sakuraimatic Continuous System',
    'Cylinders': 'All Chromed Cylinders (Immaculate Condition)',
    'Air System': 'Pneumatic Air System',
    'Delivery System': 'Low Pile Delivery',
    'Sprayer': 'High-Efficiency Powder Sprayer Unit',
    'Mechanical Health': 'No Damages in Gears and Cylinders (100% Guaranteed)',
    'Accessories': 'Complete Set of All Standard Factory Accessories',
    'Origin': 'Imported directly from Japan',
    'Location': 'Autonagar, Vijayawada (Ready for Live Trial Inspection)'
  },
  applications: [
    'Commercial Color Job Work & Book Printing',
    'High-Definition Posters, Brochures & Catalogs',
    'Monocartons, Packaging & Pharma Inserts',
    'Fast Make-Ready Job Turnaround with Sakuraimatic System'
  ],
  warranty: 'Complete Inspection & Handover Guarantee with Free Installation Support',
  serviceCoverage: 'Full AP & Telangana On-Site Technician Handover & AMC Available'
};

export const MACHINERY_CATALOG = [
  FEATURED_STOCK_MACHINE,
  {
    id: 'multi-colour-offset',
    name: 'Multi-Colour Sheetfed Offset Printing Press',
    category: 'offset',
    badge: 'Flagship Heavy-Duty',
    tagline: 'High-speed commercial, magazine, carton packaging & multi-color printing unit',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
    cardImageKey: 'offset_press',
    highlights: [
      'High Precision Color Registration & Inking System',
      'Alcohol Dampening / Continuous Water Supply',
      'Speed up to 12,000 - 15,000 Sheets per Hour',
      'Automated Plate Clamping & Stream Feeder'
    ],
    specs: {
      'Max Sheet Size': '19 x 26 inch / 20 x 28 inch / 28 x 40 inch',
      'Min Sheet Size': '200 x 270 mm',
      'Printing Speed': 'Up to 13,000 sph',
      'Paper Weight Range': '45 to 450 gsm (Paper to Board)',
      'Plate Size': '510 x 400 mm / Customized',
      'Color Units': '4-Colour / 5-Colour with Coater Options',
      'Power Supply': '3-Phase 415V, 50Hz'
    },
    applications: [
      'Commercial Book & Magazine Printing',
      'Pharmaceutical & Cosmetics Packaging Cartons',
      'Brochures, Catalogues & High-End Calendars',
      'Label & Mono Carton Printing'
    ],
    warranty: '1 Year Distributor Warranty & Free Initial Commissioning',
    serviceCoverage: 'Full AP & Telangana On-Site Technician Support'
  },
  {
    id: 'programme-cutting-machine',
    name: 'Digital Programme Hydraulic Paper Cutting Machine',
    category: 'cutting',
    badge: 'Best Seller',
    tagline: 'Microcomputer-controlled precision hydraulic guillotine paper cutter with IR safety sensors',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    cardImageKey: 'paper_cutter',
    highlights: [
      '7-inch to 10.4-inch Color LCD Touchscreen PLC',
      'High-Speed German Hydraulic System with Dual Guiding Rails',
      'Infrared Light Curtain Safety Protection Guard',
      '999 Program Storage with 0.01 mm Positioning Accuracy'
    ],
    specs: {
      'Cutting Width Options': '920 mm / 1150 mm / 1370 mm / 1680 mm',
      'Max Cutting Height': '120 mm - 165 mm',
      'Cutting Accuracy': '± 0.01 mm',
      'Clamp Pressure': 'Hydraulic Adjustable (300 - 4500 daN)',
      'Cutting Speed': 'Up to 45 cuts/min',
      'Safety Mechanism': 'Infrared Photoelectric Interlock & Dual Hand Pushbuttons',
      'Power': '3-Phase 415V, 4.0 kW to 7.5 kW'
    },
    applications: [
      'Precision Ream Trimming of Coated & Uncoated Paper',
      'Book Binding & Final Edge Trimming',
      'Cardboard, Offset Press Sheets & Plastic Sheets',
      'Heavy Commercial Press Trimming Workflow'
    ],
    warranty: '1 Year Warranty + Rapid Spares Availability in Vijayawada',
    serviceCoverage: 'Emergency Service within 24 Hours in AP & Telangana'
  },
  {
    id: 'baby-offset-machine',
    name: 'Baby Offset Single & Two-Colour Press',
    category: 'offset',
    badge: 'Popular for Small Presses',
    tagline: 'Reliable, compact high-yield mini offset press for stationery, letterheads & wedding cards',
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80',
    cardImageKey: 'baby_offset',
    highlights: [
      'Compact Footprint with Ultra-Low Power Consumption',
      'Easy to Operate & Low Maintenance Overhead',
      'Quick Plate Loading & Rapid Make-Ready Time',
      'Compatible with Poly Plates and Aluminum CTP/PS Plates'
    ],
    specs: {
      'Max Paper Size': '10 x 15 inch / 12 x 18 inch / 15 x 20 inch',
      'Min Paper Size': '75 x 125 mm',
      'Max Printing Area': '245 x 370 mm / 280 x 440 mm',
      'Speed': '2,500 to 7,000 impressions/hour',
      'Paper Weight': '30 to 300 gsm',
      'Dampening System': 'Molleton / Crestline Continuous',
      'Power Requirement': 'Single Phase 220V or 3-Phase 415V, 1.5 HP'
    },
    applications: [
      'Bill Books, Invoices, Challans & Cash Memos',
      'Wedding Cards, Envelopes & Invitation Printing',
      'Letterheads, Pamphlets & Daily Office Stationery',
      'School Examination Papers & Forms'
    ],
    warranty: '1 Year Full Sales Warranty & Free Operator Training',
    serviceCoverage: 'Doorstep Servicing across AP & Telangana'
  },
  {
    id: 'paper-folding-machine',
    name: 'Automatic High-Speed Paper Folding Machine',
    category: 'folding',
    badge: 'Post-Press Efficiency',
    tagline: 'High-volume buckle and knife folding machine for brochures, pamphlets & pharmaceutical leaflets',
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80',
    cardImageKey: 'folding_machine',
    highlights: [
      'Multiple Folding Plates (2 Plate / 4 Plate / 6 Plate Configuration)',
      'Suction Air Feeder with Continuous Feeding',
      'Perforating, Scoring & Slitting Attachment on Output',
      'Noise Reduction Hood & Anti-Static Suction Rollers'
    ],
    specs: {
      'Max Sheet Size': '470 x 750 mm / 520 x 850 mm',
      'Min Sheet Size': '70 x 120 mm',
      'Folding Speed': 'Up to 25,000 sheets/hour',
      'Paper Range': '40 to 250 gsm (Single / Cross Folds)',
      'Fold Types': 'Parallel fold, Zig-zag (Accordion), Letter fold, Gate fold, Cross fold',
      'Power': '3-Phase 415V / 2.2 kW'
    },
    applications: [
      'Pharmaceutical Inserts & Outserts (Miniature Folding)',
      'Product User Manuals, Guides & Leaflets',
      'Book Signatures for Section Sewing & Perfect Binding',
      'Direct Mailers, Promotional Brochures & Maps'
    ],
    warranty: '12 Months Technical Support & Spares Warranty',
    serviceCoverage: 'Specialist Technicians Available from Vijayawada Hub'
  },
  {
    id: 'sticker-creasing-scoring',
    name: 'Sticker Creasing, Micro Perforation & Scoring Machine',
    category: 'creasing',
    badge: 'Packaging & Labels Must-Have',
    tagline: 'Multi-function rotary machine for half-cut stickers, tear-off perforation & spine creasing',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
    cardImageKey: 'creasing_scoring',
    highlights: [
      '3-in-1 Versatility: Kiss-Cutting (Sticker Half-Cut), Creasing & Micro-Perforation',
      'Accurate Rotary Blades with Quick Distance Adjustment',
      'High-Speed Friction Rubber Roller Auto Feeding',
      'Prevents Cracking on Coated Digital & Offset Laminated Sheets'
    ],
    specs: {
      'Max Feeding Width': '500 mm / 650 mm (20 inch / 25 inch)',
      'Paper Thickness': '70 to 450 gsm',
      'Tool Set Included': 'Half-Cut Rotary Knives, Scoring Dies, Micro-Perforating Wheels',
      'Feeding Speed': 'Variable Speed up to 6,000 sheets/hour',
      'Drive System': 'DC Stepless Variable Speed Motor',
      'Power': 'Single Phase 220V, 50Hz, 250W'
    },
    applications: [
      'Die-Cut & Half-Cut Adhesive Stickers and Product Labels',
      'Coupons, Raffle Tickets & Cheque Book Micro-Perforations',
      'Laminated Brochure & Greeting Card Spine Creasing',
      'Folder Flaps, Tags & Packaging Cardboard Scoring'
    ],
    warranty: '1 Year Warranty on Motor & Assembly',
    serviceCoverage: 'Doorstep Spares & Blade Sharpening Services in AP/TS'
  },
  {
    id: 'auto-numbering-barcode',
    name: 'Automatic Numbering & Barcode Coding Machine',
    category: 'numbering',
    badge: 'Security & Stationery Printing',
    tagline: 'Automatic high-precision paper feeder with numbering heads & industrial barcode stamping',
    image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=1200&q=80',
    cardImageKey: 'numbering_machine',
    highlights: [
      'Multiple Rotary / Forward / Backward Numbering Heads',
      'Clear, Crisp Stamping on Multi-Part Carbonless Forms',
      'High Capacity Auto Vacuum/Friction Paper Feeder',
      'Inkjet Barcode & QR Code Integration Ready'
    ],
    specs: {
      'Max Sheet Size': '380 x 500 mm (15 x 20 inch)',
      'Min Sheet Size': '100 x 140 mm',
      'Stamping Speed': '3,000 to 8,000 impressions/hour',
      'Number of Heads': 'Up to 4 to 8 Numbering Heads Mountable',
      'Numbering Format': '6-digit / 7-digit / 8-digit Horizontal & Vertical',
      'Paper Thickness': '40 to 350 gsm (Supports NCR paper up to 7-ply)',
      'Power': 'Single Phase 220V, 500W'
    },
    applications: [
      'Tax Invoices, Delivery Challans & Receipt Books',
      'Lottery, Admission & Event Tickets with Sequential Serial Numbers',
      'Transport Waybills & Logistics Barcoded Documentation',
      'Bank Documents, Share Certificates & Security Forms'
    ],
    warranty: '1 Year Comprehensive Warranty',
    serviceCoverage: 'Technician Support across Vijayawada, Hyderabad & Regional Centers'
  },
  {
    id: 'refurbished-offset-machines',
    name: 'Certified Reconditioned & Refurbished Offset Machines',
    category: 'refurbished',
    badge: 'Cost-Effective Heavyweight',
    tagline: 'Fully serviced, calibrated and bench-tested imported offset machines with quality assurance',
    image: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=1200&q=80',
    cardImageKey: 'refurbished',
    highlights: [
      'Thorough 50-Point Technical Diagnostic & Reconditioning',
      'Replaced Rollers, Bearings, Grippers & Electrical Systems',
      'Live Test Printing Demonstration at Vijayawada Facility',
      'Significant Cost Savings Compared to New Equipment'
    ],
    specs: {
      'Available Brands': 'Komori, Heidelberg, Ryobi, Sakurai, Mitsubishi, Printech',
      'Configuration': 'Single-Color, 2-Color, 4-Color & 5-Color Options',
      'Inspection Protocol': 'Gear Lash Inspection, Cylinder Gap Calibration, Inking Test',
      'Accessories': 'Complete Set of New Rollers, Powder Spray, Chiller Unit',
      'Delivery & Installation': 'Turnkey Handover by Experienced Service Engineers'
    },
    applications: [
      'Starting a New Printing Press on a Sensible Budget',
      'Expanding Capacity for Packaging & Publishing Jobs',
      'High-Margin Commercial Job Printing with Fast ROI'
    ],
    warranty: '6 Months Mechanical Warranty + AMC Packages Available',
    serviceCoverage: 'Priority Service & Genuine Spares Guarantee'
  }
];

export const SERVICES_LIST = [
  {
    title: 'Machinery Sales & Turnkey Delivery',
    desc: 'Official distributor for Printech Machineries in Andhra Pradesh & Telangana. Brand-new state-of-the-art printing and post-press equipment tailored to your press capacity.',
    icon: 'Printer'
  },
  {
    title: 'All Types of Offset Machine Servicing',
    desc: 'Expert mechanical, electrical, and pneumatic servicing for multi-color presses, single color machines, and post-press units. Rapid breakdown troubleshooting.',
    icon: 'Wrench'
  },
  {
    title: 'Annual Maintenance Contracts (AMC)',
    desc: 'Preventive maintenance plans for commercial printers to avoid costly machine downtime. Scheduled periodic calibrations, roller checks, and lubrication.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Machine Installation & Foundation',
    desc: 'Professional leveling, heavy-duty electrical wiring, vibration dampening, and precise cylinder alignment to ensure zero dot-gain and perfect registration.',
    icon: 'Cpu'
  },
  {
    title: 'Genuine Spares & Consumables',
    desc: 'Fast stock dispatch from Vijayawada: rubber rollers, cutting knives, shear bolts, carbon vanes, suckers, numbering heads, creasing matrices, and sensors.',
    icon: 'PackageCheck'
  },
  {
    title: 'Operator Training & Technical Consultation',
    desc: 'Hands-on operator training for microcomputer digital cutters, automatic feeders, and multi-color offset dampening controls to maximize daily throughput.',
    icon: 'GraduationCap'
  }
];

export const REGIONS_SERVED = [
  { state: 'Andhra Pradesh', cities: ['Vijayawada (HQ)', 'Guntur', 'Visakhapatnam', 'Rajahmundry', 'Tirupati', 'Nellore', 'Kakinada', 'Kurnool', 'Anantapur', 'Eluru', 'Tenali', 'Ongole'] },
  { state: 'Telangana', cities: ['Hyderabad', 'Secunderabad', 'Warangal', 'Karimnagar', 'Nizamabad', 'Khammam', 'Nalgonda', 'Mahabubnagar', 'Ramagundam', 'Siddipet'] }
];

export const TESTIMONIALS = [
  {
    name: 'B. Venkata Rao',
    company: 'Sri Rama Packaging & Prints',
    city: 'Vijayawada, AP',
    text: 'We purchased our Programme Cutting Machine and a 4-Colour Offset press through P. Jayakumar sir at SE Enterprises. His technical guidance and post-installation service in Autonagar, Vijayawada are unmatched. Whenever we need spares or a quick tune-up, his team is there immediately.',
    rating: 5,
    machine: 'Programme Cutter & Offset Press'
  },
  {
    name: 'K. Sridhar Reddy',
    company: 'Deccan Commercial Printers',
    city: 'Hyderabad, Telangana',
    text: 'As an offset press owner for 18 years, finding a dependable machine dealer with genuine servicing was always a headache until we connected with SE Enterprises. Jayakumar sir supplied our automatic folding machine and sticker creasing unit. Outstanding performance and honest business dealings!',
    rating: 5,
    machine: 'Folding & Creasing Machine'
  },
  {
    name: 'M. Anand Kumar',
    company: 'Balaji Graphics & Forms',
    city: 'Guntur, AP',
    text: 'Jayakumar sir is the most respected machine specialist in AP & Telangana. The Auto Numbering & Barcode machine we bought has run non-stop for 3 years with zero downtime. Highly recommended for any printing press owner looking for genuine Printech machineries.',
    rating: 5,
    machine: 'Auto Numbering Machine'
  }
];
