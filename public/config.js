// config.js

const SITE_KEY = 'sunrise-bakery-yard-style-jezc';
const SUPABASE_URL = 'https://xhvimodqpzegibojxlfi.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhodmltb2RxcHplZ2lib2p4bGZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg5MjQ0NjcsImV4cCI6MjA3NDUwMDQ2N30.veBZSV_lSVOZMQayQza1lhzjmUvfMhN716uRJjPjxgY';

const SCHEMA = [
  // NAV
  {
    key: 'nav.logo',
    type: 'text',
    label: 'Navigation Logo Text',
    placeholder: 'Sunrise Bakery'
  },

  // HERO
  {
    key: 'hero.image',
    type: 'image',
    label: 'Hero Background Image',
    placeholder: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800'
  },
  {
    key: 'hero.eyebrow',
    type: 'text',
    label: 'Hero Eyebrow Line',
    placeholder: 'Est. 2020 · Granny\'s Recipe'
  },
  {
    key: 'hero.headline',
    type: 'text',
    label: 'Hero Main Headline',
    placeholder: 'Yard Style Baked Fresh Daily'
  },
  {
    key: 'hero.subheadline',
    type: 'textarea',
    label: 'Hero Subheadline / Description',
    placeholder: 'Authentic Jamaican flavours — patties, coco bread, bun & cheese and hardoe bread made the old way.'
  },
  {
    key: 'hero.cta',
    type: 'text',
    label: 'Hero CTA Button Text',
    placeholder: 'Order Now'
  },

  // STATS
  {
    key: 'stats.years',
    type: 'text',
    label: 'Stats: Years Baking Number',
    placeholder: '5+'
  },
  {
    key: 'stats.years_label',
    type: 'text',
    label: 'Stats: Years Label',
    placeholder: 'Years Baking'
  },
  {
    key: 'stats.recipes',
    type: 'text',
    label: 'Stats: Recipes Number',
    placeholder: '1'
  },
  {
    key: 'stats.recipes_label',
    type: 'text',
    label: 'Stats: Recipes Label',
    placeholder: 'Original Recipe'
  },
  {
    key: 'stats.items',
    type: 'text',
    label: 'Stats: Signature Items Number',
    placeholder: '4'
  },
  {
    key: 'stats.items_label',
    type: 'text',
    label: 'Stats: Items Label',
    placeholder: 'Signature Items'
  },
  {
    key: 'stats.fresh',
    type: 'text',
    label: 'Stats: Fresh Baked Value',
    placeholder: 'Daily'
  },
  {
    key: 'stats.fresh_label',
    type: 'text',
    label: 'Stats: Fresh Label',
    placeholder: 'Baked Fresh'
  },

  // ABOUT
  {
    key: 'about.image',
    type: 'image',
    label: 'About Section Image',
    placeholder: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=400'
  },
  {
    key: 'about.heading',
    type: 'text',
    label: 'About Section Heading',
    placeholder: 'Born from Granny\'s Kitchen'
  },
  {
    key: 'about.body',
    type: 'textarea',
    label: 'About Section Body Text',
    placeholder: 'Sunrise Bakery Yard Style started in 2020 with a simple mission — keep the taste of Jamaica alive. Every patty, every loaf, every bun is made from Granny\'s original recipe brought straight from the island. No shortcuts. No compromises. Just real yard-style baking the way it\'s been done for generations.'
  },

  // MENU
  {
    key: 'menu.heading',
    type: 'text',
    label: 'Menu Section Heading',
    placeholder: 'What We Bake'
  },
  {
    key: 'menu.patties_image',
    type: 'image',
    label: 'Patties Product Image',
    placeholder: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400'
  },
  {
    key: 'menu.patties_title',
    type: 'text',
    label: 'Patties Item Title',
    placeholder: 'Jamaican Patties'
  },
  {
    key: 'menu.patties_desc',
    type: 'textarea',
    label: 'Patties Item Description',
    placeholder: 'Flaky golden pastry filled with richly spiced beef, baked fresh every morning the way Granny intended — bold flavour, never bland.'
  },
  {
    key: 'menu.coco_image',
    type: 'image',
    label: 'Coco Bread Product Image',
    placeholder: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=400'
  },
  {
    key: 'menu.coco_title',
    type: 'text',
    label: 'Coco Bread Item Title',
    placeholder: 'Coco Bread'
  },
  {
    key: 'menu.coco_desc',
    type: 'textarea',
    label: 'Coco Bread Item Description',
    placeholder: 'Soft, pillowy and slightly sweet — our coco bread is the perfect companion to a patty or a standout on its own. Classic Jamaican comfort.'
  },
  {
    key: 'menu.bun_image',
    type: 'image',
    label: 'Bun and Cheese Product Image',
    placeholder: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400'
  },
  {
    key: 'menu.bun_title',
    type: 'text',
    label: 'Bun & Cheese Item Title',
    placeholder: 'Bun & Cheese'
  },
  {
    key: 'menu.bun_desc',
    type: 'textarea',
    label: 'Bun & Cheese Item Description',
    placeholder: 'Dark, richly spiced Jamaican bun paired with sharp cheddar cheese. A national tradition — baked with the same care every single time.'
  },
  {
    key: 'menu.hardoe_image',
    type: 'image',
    label: 'Hardoe Bread Product Image',
    placeholder: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc7c?w=400'
  },
  {
    key: 'menu.hardoe_title',
    type: 'text',
    label: 'Hardoe Bread Item Title',
    placeholder: 'Hardoe Bread'
  },
  {
    key: 'menu.hardoe_desc',
    type: 'textarea',
    label: 'Hardoe Bread Item Description',
    placeholder: 'Dense, flavourful and deeply satisfying — our hardoe bread has a crust that sings and a crumb that holds. A yard-style staple done right.'
  },

  // CTA BAND
  {
    key: 'cta.heading',
    type: 'text',
    label: 'CTA Band Heading',
    placeholder: 'Ready for Real Jamaican Taste?'
  },
  {
    key: 'cta.body',
    type: 'textarea',
    label: 'CTA Band Body Text',
    placeholder: 'Drop us a message and we\'ll sort you out. Fresh baked goods, straight from the yard.'
  },

  // CONTACT
  {
    key: 'contact.heading',
    type: 'text',
    label: 'Contact Section Heading',
    placeholder: 'Come Get Your Bake On'
  },
  {
    key: 'contact.intro',
    type: 'textarea',
    label: 'Contact Intro Text',
    placeholder: 'We\'re ready to fill your order. Reach out by email and we\'ll be in touch faster than bread rises.'
  },
  {
    key: 'contact.email',
    type: 'text',
    label: 'Contact Email Address',
    placeholder: 'solvikings23@gmail.com'
  },
  {
    key: 'contact.address',
    type: 'text',
    label: 'Contact Address',
    placeholder: '123 MN'
  },

  // FOOTER
  {
    key: 'footer.logo',
    type: 'text',
    label: 'Footer Business Name',
    placeholder: 'Sunrise Bakery Yard Style'
  },
  {
    key: 'footer.tagline',
    type: 'text',
    label: 'Footer Tagline',
    placeholder: 'Fresh Jamaican Baked Goods · Est. 2020'
  },
  {
    key: 'footer.copyright',
    type: 'text',
    label: 'Footer Copyright Text',
    placeholder: '© 2025 Sunrise Bakery Yard Style. All rights reserved.'
  }
];

// Nav scroll effect
(function () {
  const nav = document.querySelector('nav');
  if (!nav) return;
  const handler = () => {
    if (window.scrollY > 40) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handler, { passive: true });
  handler();
})();

// Scroll-reveal — sets opacity:0 via JS only, never CSS
(function () {
  const targets = document.querySelectorAll(
    '.about-image-col, .about-text-col, .menu-item, .stat-item, .contact-text, .contact-details, .cta-band-inner'
  );
  targets.forEach((el, i) => {
    el.classList.add('reveal-ready');
    el.style.opacity = '0';
    el.style.transform = 'translateY(32px)';
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const delay = Number(el.dataset.delay || 0);
        setTimeout(() => {
          el.classList.add('revealed');
          el.style.opacity = '';
          el.style.transform = '';
        }, delay);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.12 });

  targets.forEach((el, i) => {
    el.dataset.delay = String((i % 4) * 100);
    observer.observe(el);
  });
})();