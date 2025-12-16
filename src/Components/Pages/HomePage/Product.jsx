import { useState, useEffect, useRef } from 'react'
import productImg1 from '../../../assets/image/Product_img1.png'
import productImg2 from '../../../assets/image/Product_img2.jpg'
import productImg3 from '../../../assets/image/Product_img3.jpg'
import productImg4 from '../../../assets/image/Product_img4.png'
import productImg5 from '../../../assets/image/Product_img5.png'
import productImg6 from '../../../assets/image/Product_img6.jpg'
import productImg7 from '../../../assets/image/Product_img7.jpg'
import productImg8 from '../../../assets/image/Product_img8.jpg'
import productImg9 from '../../../assets/image/Product_img9.jpg'



const products = [
  {
    title: 'Unicorn Jewellery Inventory Management',
    description: 'Unicorn Jewellery Inventory Management Software: The Ultimate Guide',
    image: productImg1,
    icon: '💎',
    color: 'from-[#0f2d55] to-[#1c918a]',
    points: [
      'Prevent Theft & Loss with RFID',
      'Real-time Stock Accuracy',
      'Live Market Rate Tracking',
      'Digital Audits & Reports',
      'Smart Sales Analytics',
      'Multi-Channel Inventory Sync',
    ],
    detailedContent: {
      intro: 'Managing jewellery inventory is one of the biggest challenges for jewellers. From preventing theft to tracking raw materials and ensuring accurate stock levels, manual methods like spreadsheets can cost your business time, money, and opportunities. That\'s why more jewellers are turning to Unicorn Jewellery Inventory Management Software—a powerful solution designed specifically for the jewellery industry.',
      sections: [
        {
          title: '🔒 Why Jewellery Businesses Need Inventory Management Software',
          items: [
            'Prevent Theft and Loss - Jewellery pieces are small, high-value assets prone to theft. Unicorn integrates RFID tags and barcode systems to minimize theft and maintain real-time visibility.',
            'Eliminate Stock Errors - Human errors in stock counts lead to overstocking, understocking, and lost sales. Unicorn ensures real-time stock accuracy with automated updates across all channels.',
            'Track Raw Materials - Gold, diamonds, and gemstones fluctuate in value daily. Unicorn simplifies tracking raw materials, market rates, and consumption in manufacturing.',
            'Save Time with Efficient Audits - Manual stock audits can take hours or even days. Unicorn offers digital audits and instant reconciliation, saving valuable time.',
            'Unlock Data-Driven Insights - Without analytics, demand forecasting is just guesswork. Unicorn delivers smart insights into sales performance, customer preferences, and future demand.',
          ]
        },
        {
          title: '📦 Real-Time, Multi-Channel Inventory Tracking',
          items: [
            'Sync inventory across physical stores, websites, and social media',
            'RFID and barcode-enabled for instant updates',
            'Manage multiple warehouses from one central dashboard',
          ]
        },
        {
          title: '💎 Product & Raw Material Management',
          items: [
            'Create detailed product profiles with metal purity, gemstone details, and certifications',
            'Track raw materials and adjust for real-time market values',
            'Bill of Materials (BOM) for custom and made-to-order jewellery',
          ]
        },
        {
          title: '⚙️ Automation & Financial Integration',
          items: [
            'Automated reordering with low-stock alerts',
            'Easy purchase order and vendor management',
            'Direct integration with QuickBooks and accounting software',
          ]
        },
        {
          title: '🔐 Advanced Security & Reporting',
          items: [
            'Audit trails track every stock movement',
            'Generate customizable reports: stock valuation, sales trends, turnover rate',
            'RFID-based loss prevention systems with alarms',
          ]
        },
        {
          title: '🛠️ Other Jewellery Business Tools',
          items: [
            'CRM features for customer relationship management',
            'Repair and consignment tracking',
            'Dynamic pricing based on live gold and silver rates',
          ]
        },
        {
          title: '✅ Benefits of Jewellery Inventory Software',
          items: [
            'Reduced theft and loss with RFID security',
            'Time savings through automated audits and stock updates',
            'Higher profits by preventing overstocking/understocking',
            'Data-driven decisions with advanced analytics',
            'Customer loyalty with CRM personalization',
          ]
        }
      ],
      conclusion: 'In today\'s competitive market, manual inventory management is a risk you can\'t afford. Unicorn Jewellery Inventory Management Software gives you: ✅ Real-time accuracy ✅ Enhanced security ✅ Smarter insights ✅ Growth-ready automation. Turn your jewellery store into a future-ready, profitable business with Unicorn!'
    },
    readMore: 'Unicorn Jewellery Inventory Management Software is designed specifically for the jewellery industry—a powerful solution for modern jewellers.',
  },
  {
    title: 'Unicorn Jewellery Billing Software',
    description: 'Unicorn Jewellery Billing Software – Best GST Billing & POS Solution for Jewelers in India',
    image: productImg2,
    icon: '🏷️',
    color: 'from-blue-500 to-indigo-500',
    points: [
      'Fast & Accurate GST Billing',
      'Barcode-based Inventory',
      'WhatsApp/SMS Digital Invoices',
      'Cloud-Based Access',
      'Tally Integration',
      'Mobile App for On-the-Go',
    ],
    detailedContent: {
      intro: 'Running a Jewellery business today is more than just craftsmanship—it’s about offering customers a smooth buying experience with fast billing, GST compliance, digital invoicing, and inventory management. That’s where Unicorn Jewellery Billing Software comes in.',
      sections: [
        {
          title: '💎 What is Unicorn Jewellery Billing Software?',
          items: [
            'Specialized POS and billing solution for Jewellery shops and showrooms in India',
            'Helps jewelers simplify billing, manage inventory, track sales, and stay GST-compliant',
            'All-in-one easy-to-use platform designed specifically for the Jewellery industry',
            'The best billing software for jewelers in India, handling everything from billing to compliance',
          ]
        },
        {
          title: '☁️ Cloud-Based Jewellery Billing Features',
          items: [
            'Generate quick and accurate GST invoices',
            'Manage stock with barcode scanning & inventory tracking',
            'Send digital bills via WhatsApp/SMS',
            'Use a custom mobile app for Jewellery business management on the go',
          ]
        },
        {
          title: '⚡ Key Features of Unicorn Jewellery Billing Software',
          items: [
            'Fast & Accurate Billing Software for Jewellery Shops',
            'Automatic GST & Tax Calculation with Tally integration',
            'Barcode-based Jewellery Inventory Management',
            'POS Billing System for Jewelers – Easy to use & reliable',
            'Digital Invoices via WhatsApp/SMS for quick customer service',
            'Cloud-Based Jewellery Billing App – Access anytime, anywhere',
          ]
        },
        {
          title: '✅ Why Jewelers Need Unicorn Jewellery POS & Billing Software',
          items: [
            'Saves time by eliminating manual billing & calculations',
            'Increases accuracy and transparency in transactions',
            'Enhances customer trust with professional GST invoices',
            'Helps in GST filing & compliance effortlessly',
            'Improves profitability with smarter, faster operations',
          ]
        }
      ],
      conclusion: '✨ With Unicorn Jewellery Billing Software, jewelers can focus on designing and selling Jewellery while the software takes care of billing, stock management, GST compliance, and customer satisfaction. 👉 If you are looking for the best Jewellery billing software in India, Unicorn is the trusted solution for modern jewelers!'
    },
    readMore: 'Unicorn Jewellery Billing Software is a specialized POS and billing solution for Jewellery shops and showrooms in India.',
  },
  {
    title: 'Unicorn Software Barcode & Labels',
    description: 'Unicorn Jewellery Software Barcode & Labels – A Smart Way to Manage Your Jewellery Business',
    image: productImg3,
    icon: '🏷️',
    color: 'from-purple-500 to-pink-500',
    points: [
      'Unique Identification with Barcode Labels',
      'Faster Billing with Jewellery POS Software',
      'Professional Jewellery Labels & Tag Printing',
      'Security & Tracking in Jewellery Business',
      'Scalable Jewellery Inventory Management',
      'QR Code Support',
    ],
    detailedContent: {
      intro: 'In the competitive jewellery industry, accuracy, billing speed, and inventory control are everything. Managing thousands of unique items – from gold and silver ornaments to diamonds and gemstones – can be complex. This is where Unicorn Jewellery ERP Software with Barcode & Label Printing makes a big difference for modern jewellers.',
      sections: [
        {
          title: '🏷️ Unique Identification with Barcode Labels',
          items: [
            'Every piece of jewellery can be tagged with a barcode label',
            'Contains details like weight, purity, design, price, and certification',
            'Ensures foolproof identification in large jewellery inventories',
            'Eliminates confusion in stock management',
          ]
        },
        {
          title: '⚡ Faster Billing with Jewellery POS Software',
          items: [
            'Items can be scanned and added to invoices instantly',
            'Reduces manual errors significantly',
            'Speeds up jewellery billing software processes',
            'Inventory is updated automatically—making stock audits effortless',
          ]
        },
        {
          title: '🎨 Professional Jewellery Labels & Tag Printing',
          items: [
            'Custom jewellery labels give your showroom a professional edge',
            'Add brand logos, product codes, and QR codes',
            'Enhances stock management and customer experience',
            'Barcode & jewellery label printing for modern showrooms',
          ]
        },
        {
          title: '🔒 Security & Tracking in Jewellery Business',
          items: [
            'Track every ornament during sales, repairs, or transfers',
            'Minimizes the risk of misplacement, theft, or fraud',
            'Keeps your jewellery business secure',
            'Complete tracking from entry to exit',
          ]
        },
        {
          title: '📈 Scalable Jewellery Inventory Management',
          items: [
            'Perfect for small jewellery stores to multi-branch showrooms',
            'Cost-effective and scalable solution',
            'Designed to grow with your business needs',
            'Easy integration with existing systems',
          ]
        }
      ],
      conclusion: 'Barcode and label integration in Unicorn Jewellery Software is not just a trend—it\'s a necessity for modern jewellery businesses. With powerful features like jewellery ERP, billing POS, inventory management, and barcode label printing, Unicorn helps jewellers achieve accuracy, security, and efficiency while delivering a seamless shopping experience!'
    },
    readMore: 'Unicorn Jewellery Software with Barcode Integration is cost-effective, scalable, and designed to grow with your business needs.',
  },
  {
    title: 'Live Gold & Silver Rate Integration in #Unicorn Jewellery Software',
    description: 'Live Gold & Silver Rate Integration in #Unicorn Jewellery Software – Smart Pricing for Jewellers',
    image: productImg4,
    icon: '💹',
    color: 'from-green-500 to-teal-500',
    points: [
      'Automatic Gold & Silver Rate Updates',
      'Accurate Jewellery Billing Software',
      'Customer Transparency with Live Rates',
      'Time-Saving Jewellery ERP System',
      'Flexible Pricing Options',
      
    ],
    detailedContent: {
      intro: 'In the jewellery business, gold, silver, and precious metal prices fluctuate every minute. Manually updating rates in billing systems is time-consuming and prone to mistakes. That\'s why Unicorn Jewellery ERP Software with Live Gold & Silver Rate Integration is a game-changer for jewellers.',
      sections: [
        {
          title: '📈 Automatic Gold & Silver Rate Updates',
          items: [
            'Precious metal prices (gold, silver, platinum) are updated in real time',
            'Data from trusted market sources',
            'Your showroom always works with the latest market rates',
            'No manual intervention required',
          ]
        },
        {
          title: '💰 Accurate Jewellery Billing Software',
          items: [
            'Item prices are auto-calculated based on live gold and silver rates',
            'Removes errors and ensures correct invoicing',
            'Instant recalculation when rates change',
            'Complete billing accuracy guaranteed',
          ]
        },
        {
          title: '🤝 Customer Transparency with Live Rates',
          items: [
            'Real-time rate integration builds trust with customers',
            'Avoids disputes over fluctuating prices',
            'Ensures transparent jewellery sales',
            'Show live rates to customers on demand',
          ]
        },
        {
          title: '⏱️ Time-Saving Jewellery ERP System',
          items: [
            'No more manual rate entries',
            'Rates are updated automatically in your jewellery ERP system',
            'Saves staff time and improving efficiency',
            'Focus on sales, not data entry',
          ]
        },
        {
          title: '🎯 Flexible Pricing Options',
          items: [
            'Add making charges on top of live rates',
            'Wastage calculation support',
            'Discounts and GST/VAT integration',
            'Complete pricing flexibility for jewellers',
          ]
        }
      ],
      conclusion: 'With live gold & silver rate integration, Unicorn Jewellery Software helps jewellers maintain fair pricing, customer confidence, and operational efficiency. It\'s a must-have feature in modern jewellery billing software and ERP systems for any jeweller looking to grow in today\'s competitive market!'
    },
    readMore: 'Live Gold & Silver Rate Integration is a must-have feature in modern jewellery billing software and ERP systems.',
  },
  {
    title: 'Staff & Customer Mobile Application in #Unicorn Jewellery Software',
    description: 'Staff & Customer Mobile Application in #Unicorn Jewellery Software – Smarter Jewellery Business Management',
    image: productImg5,
    icon: '📱',
    color: 'from-rose-500 to-red-500',
    points: [
      'Real-Time Jewellery Inventory Access',
      'Task & Order Management',
      'Boosted Staff Productivity',
     
    ],
    detailedContent: {
      intro: 'In today\'s digital-first world, jewellery mobile apps have become essential for improving efficiency and customer engagement. With Unicorn Jewellery ERP Mobile Application, jewellers can empower staff, delight customers, and streamline jewellery business operations.',
      sections: [
        {
          title: '👨‍💼 Benefits of Customer Jewellery Mobile App',
          items: [
            'Real-Time Jewellery Inventory Access - Staff can check live stock, sales history, and customer details anytime from their mobile devices',
            'Faster Jewellery Billing App Features - Sales executives can generate invoices, create orders, and update stock instantly',
            'Task & Order Management - Track jewellery repairs, delivery status, and assigned customer follow-ups with ease',
            'Boosted Staff Productivity - Mobile ERP reduces dependency on desktops, allowing sales teams to serve customers faster',
          ]
        },
        {
          title: '📱 Real-Time Jewellery Inventory Access',
          items: [
            'Staff can check live stock anytime',
            'View sales history on mobile devices',
            'Access customer details instantly',
            'No desktop dependency required',
          ]
        },
        {
          title: '⚡ Faster Jewellery Billing App Features',
          items: [
            'Sales executives can generate invoices instantly',
            'Create orders and update stock in real-time',
            'Unicorn staff mobile application for quick billing',
            'Serve customers faster with mobile POS',
          ]
        },
        {
          title: '👥 Benefits of Customer Jewellery Mobile App',
          items: [
            'Digital Jewellery Catalogue - Browse collections, view new arrivals, and check offers anytime',
            'Live Gold & Silver Rate Updates - Integrated live precious metal pricing with real-time rates',
            'Order & Repair Tracking - View purchase history, scheme details, repair status, and delivery updates',
            'Personalized Shopping Experience - Notifications for discounts, loyalty points, and festive schemes',
          ]
        },
        {
          title: '💎 Digital Jewellery Catalogue',
          items: [
            'Customers can browse collections anytime',
            'View new arrivals and latest designs',
            'Check offers and discounts on mobile',
            'Complete jewellery catalogue at fingertips',
          ]
        },
        {
          title: '📈 Live Gold & Silver Rate Updates',
          items: [
            'Integrated live precious metal pricing',
            'Customers always see real-time gold rates',
            'Real-time silver rates display',
            'Transparent pricing builds trust',
          ]
        },
        {
          title: '📦 Order & Repair Tracking',
          items: [
            'View purchase history on mobile',
            'Check scheme details and balances',
            'Track repair status in real-time',
            'Get delivery updates directly on app',
          ]
        },
        {
          title: '🎁 Personalized Jewellery Shopping Experience',
          items: [
            'Notifications for discounts and offers',
            'Loyalty points tracking and rewards',
            'Festive schemes and special promotions',
            'Build stronger customer relationships',
          ]
        }
      ],
      conclusion: 'With staff and customer mobile applications integrated into Unicorn Jewellery Software, jewellers can deliver faster billing, smarter inventory management, and superior customer engagement. It\'s a must-have feature for modern jewellery ERP and billing solutions!'
    },
    readMore: 'Unicorn Jewellery ERP Mobile Application empowers staff and delights customers with seamless mobile experience.',
  },
  {
    title: 'Unicorn ERP Suite - A Complete Enterprise Solution for Large Firms',
    description: 'Unicorn Jewellery Software: ERP Suite - A Complete Enterprise Solution for Large Firms',
    image: productImg6,
    icon: '🏢',
    color: 'from-slate-600 to-slate-800',
    points: [
      'Centralized Inventory & Stock Management',
      'Multi-Store & Multi-Location Control',
      'Comprehensive Accounting & Financials',
      'Manufacturing & Job Work Management',
      'Customer Relationship Management (CRM)',
      'Advanced Reporting & Analytics',
    ],
    detailedContent: {
      intro: 'In today\'s competitive jewellery industry, large enterprises face complex challenges—managing multi-location operations, tracking high-value inventory, ensuring accurate billing, and delivering a seamless customer experience. Traditional systems or fragmented software often fail to keep pace with the growing demands of big jewellery businesses. This is where Unicorn Jewellery Software stands out as a complete enterprise solution designed to empower large firms with cutting-edge technology, scalability, and end-to-end automation.',
      sections: [
        {
          title: '🏢 Why Large Jewellery Firms Need a Specialized Enterprise Solution',
          items: [
            'Multi-branch operations with centralized control',
            'Real-time inventory tracking across locations',
            'Advanced financial management for complex transactions',
            'Custom workflows for manufacturing, retail, and wholesale',
            'Regulatory compliance for taxation, hallmarking, and certifications',
          ]
        },
        {
          title: '📦 Centralized Inventory & Stock Management',
          items: [
            'Track raw materials, finished products, and gemstones across multiple stores',
            'Real-time updates across warehouses',
            'Instant updates on stock transfers and reorders',
            'Stock ageing tracking to avoid losses and improve efficiency',
          ]
        },
        {
          title: '🏪 Multi-Store & Multi-Location Control',
          items: [
            'Operate seamlessly across multiple outlets and franchisees',
            'Manufacturing units with single integrated dashboard',
            'Visibility into each branch\'s performance',
            'Centralized control over pricing, promotions, and policies',
          ]
        },
        {
          title: '💰 Comprehensive Accounting & Financials',
          items: [
            'Robust financial tools for accounting',
            'GST/VAT compliance and automated reconciliation',
            'Reduces manual errors significantly',
            'Books remain audit-ready at all times',
          ]
        },
        {
          title: '🏭 Manufacturing & Job Work Management',
          items: [
            'Manage in-house production and custom orders',
            'Job work tracking with precision',
            'Detailed tracking of materials and labor costs',
            'Wastage and design specifications management',
          ]
        },
        {
          title: '👥 Customer Relationship Management (CRM)',
          items: [
            'Build long-lasting relationships with customers',
            'Personalized offers and loyalty programs',
            'Purchase histories for better service',
            'Targeted marketing campaigns and better shopping experience',
          ]
        },
        {
          title: '📊 Advanced Reporting & Analytics',
          items: [
            'Powerful insights into sales trends and profitability',
            'Inventory turnover and staff performance tracking',
            'Customizable dashboards for real-time visibility',
            'Data-driven decisions with key business metrics',
          ]
        }
      ],
      conclusion: 'Unicorn is not just a software—it\'s a strategic partner for growth. With its enterprise-grade capabilities, it empowers large jewellery firms to focus on what matters most: designing exceptional jewellery and delivering unmatched customer satisfaction. Whether you\'re running a national retail chain, a multi-city wholesaler, or a large-scale manufacturer, Unicorn Jewellery Software is the all-in-one solution you can rely on for smooth operations and sustained growth!'
    },
    readMore: 'Unicorn Jewellery Software is purpose-built to meet the unique needs of large-scale jewellery enterprises.',
  },
  {
    title: 'Online Catalogue',
    description: 'Unicorn Jewellery Software – Online Catalogue',
    image: productImg7,
    icon: '📖',
    color: 'from-lime-500 to-yellow-500',
    points: [
      'High-quality Product Imaging',
      'Detailed Product Attributes',
      'Categorization & Filters',
      'Real-time Stock Info',
      'Quotation & Custom Orders',
      'Analytics & Insights',
    ],
    detailedContent: {
      intro: 'In the digital age, having a compelling online presence is essential for jewellery firms. An online catalogue is a cornerstone feature in Unicorn Jewellery Software that enables businesses to showcase their products beautifully, reach customers globally, and streamline sales/marketing operations.',
      sections: [
        {
          title: '📖 What is an Online Catalogue?',
          items: [
            'A digital interface (web platform, app, or both) where all jewellery products are listed',
            'Images, specifications, pricing or quotations, and other relevant details',
            'Allows customers and retailers to search, filter, and select designs',
            'Integrates with inventory, orders, pricing, and marketing modules',
          ]
        },
        {
          title: '📸 High-quality Product Imaging',
          items: [
            'Multiple angles and macro shots of gemstones',
            'Close-ups of craftsmanship details',
            'Enhances buyer confidence',
            'Professional product presentation',
          ]
        },
        {
          title: '📋 Detailed Product Attributes',
          items: [
            'Metal type, weight, purity, size/measurements',
            'Gemstone details (type, cut, carat)',
            'Design ID/code and availability status',
            'Complete product specifications',
          ]
        },
        {
          title: '🔍 Categorization, Filters & Search',
          items: [
            'Filter by jewellery type (rings, necklaces), style (traditional, modern)',
            'Filter by material (gold, silver, platinum), gemstone, price range',
            'Search by name/design code, price, popularity, new-arrivals',
            'Auto-completion and suggestions for quick navigation',
          ]
        },
        {
          title: '📦 Real-time Stock & Availability',
          items: [
            'Live inventory sync shows what\'s in stock',
            'Lead time display for made-to-order items',
            'Avoids customer frustration with accurate availability',
            'Changes in stock reflect instantly in catalogue',
          ]
        },
        {
          title: '✏️ Quotation & Custom Orders',
          items: [
            'Customers can request customized designs or changes',
            'Request quotations directly from catalogue',
            'Design previews and mock-ups available',
            'Seamless order flow from browse to purchase',
          ]
        },
        {
          title: '🔒 Security & Access Control',
          items: [
            'Restrict access for wholesale/premium clients',
            'Hide pricing or designs for specific users',
            'Watermark images for protection',
            'Role-based catalogue visibility',
          ]
        },
        {
          title: '📊 Analytics & Insights',
          items: [
            'Track which designs are viewed most',
            'Monitor filters used and bounce rates',
            'Conversion tracking from browsing to enquiries/orders',
            'Data-driven design and marketing strategy',
          ]
        },
        {
          title: '✅ Benefits of Online Catalogue',
          items: [
            'Expanded Reach - Showcase to customers beyond local stores, even internationally',
            '24/7 Access - Clients can view anytime, not restricted to store hours',
            'Reduced Overheads - Less need for print catalogues, easier to update digitally',
            'Faster Decision Making - Detailed info and images help clients decide quicker',
            'Better Customer Experience - Clean navigation, filters, good visuals improve trust',
            'Improved Sales & Lead Gen - Catalogue feeds into quotation/order modules',
          ]
        }
      ],
      conclusion: 'The online catalogue becomes the "face" of your business to customers while remaining tied to backend processes. With Unicorn\'s seamless integration, data flows smoothly between inventory, pricing, CRM and catalogue—reducing errors and improving customer experience!'
    },
    readMore: 'Unicorn Online Catalogue enables businesses to showcase products beautifully and reach customers globally.',
  },
  {
    title: 'Seamless GST & Tally Integration',
    description: 'Unicorn Jewellery Software: Seamless GST & Tally Integration for Effortless Compliance',
    image: productImg8,
    icon: '📊',
    color: 'from-sky-500 to-cyan-500',
    points: [
      'GST-Ready Invoicing',
      'Direct Tally Integration',
      'Real-Time Tax Reports',
      'Multi-Branch Accounting',
      'HSN/SAC Code Support',
      'E-way Bill Generation',
    ],
    detailedContent: {
      intro: 'Managing GST compliance and accurate accounting is one of the biggest challenges for jewellery businesses. With frequent rate changes, complex invoicing, and multi-branch operations, manual calculations or disconnected systems can lead to costly errors. Unicorn Jewellery Software solves this problem with built-in GST features and direct Tally integration, making taxation and accounting effortless for jewellery enterprises.',
      sections: [
        {
          title: '🧾 GST-Ready Invoicing',
          items: [
            'Automatically applies correct GST rates for gold, silver, diamonds, or mixed products',
            'Supports HSN/SAC codes, input tax credit, and reverse charge mechanisms',
            'Generates GST-compliant invoices and credit notes',
            'E-way bill generation for seamless transportation',
          ]
        },
        {
          title: '🔗 Tally Integration',
          items: [
            'Direct sync with Tally ERP/Prime ensures accurate financial recording',
            'Automatic posting of sales, purchase, stock, and tax entries to Tally',
            'Reduces manual data entry significantly',
            'Saves time and minimizes accounting errors',
          ]
        },
        {
          title: '📈 Real-Time Tax Reports',
          items: [
            'Instant generation of GSTR-1, GSTR-2, GSTR-3B, and GSTR-9 reports',
            'View branch-wise tax liability',
            'Reconcile returns quickly and accurately',
            'Stay audit-ready at all times',
          ]
        },
        {
          title: '🏪 Multi-Branch Accounting',
          items: [
            'Centralized GST management across multiple stores or locations',
            'Consolidated or branch-wise tax reports',
            'Better financial planning with unified data',
            'Seamless inter-branch transaction handling',
          ]
        },
        {
          title: '✅ Benefits for Jewellery Business',
          items: [
            'Accuracy & Compliance - Avoid penalties with 100% GST-compliant invoices and filings',
            'Time Savings - Automatic Tally posting eliminates double work',
            'Financial Clarity - Real-time data helps with faster decision-making',
            'Stress-free Audits - All records maintained and accessible',
          ]
        }
      ],
      conclusion: 'With Unicorn Jewellery Software, jewellery businesses can focus on growth while staying fully compliant with GST regulations. The seamless Tally integration ensures accurate accounting and stress-free tax filing—making Unicorn a complete enterprise solution for modern jewellery firms!'
    },
    readMore: 'Unicorn Jewellery Software with built-in GST features and direct Tally integration for effortless taxation.',
  },
  {
    title: 'RFID - Revolutionizing Jewellery Management',
    description: 'Unicorn Jewellery Software with RFID: Real-time Tracking, Security & Smart Operations',
    image: productImg9,
    icon: '📡',
    color: 'from-fuchsia-500 to-violet-500',
    points: [
      'Instant Stock Verification',
      'Enhanced Security',
      'Smart Billing & Reports',
      'Real-time Dashboard',
      'Theft Prevention',
      'Accurate Inventory Control',
    ],
    detailedContent: {
      intro: 'The jewellery industry demands precision, security, and efficiency. Unicorn Jewellery Software with RFID technology is transforming how jewellery businesses manage their inventory and operations. By integrating Radio Frequency Identification (RFID) with advanced management tools, this solution ensures real-time tracking, accurate stock control, and faster billing.',
      sections: [
        {
          title: '📡 What is RFID Technology?',
          items: [
            'Radio Frequency Identification for automatic item tracking',
            'Each jewellery piece gets a unique RFID tag',
            'Wireless scanning without line-of-sight requirement',
            'Integration with Unicorn Jewellery Software for seamless operations',
          ]
        },
        {
          title: '💎 Instant Stock Verification',
          items: [
            'Quick scanning of hundreds of items in seconds',
            'Reduces manual counting errors significantly',
            'Real-time stock updates across all locations',
            'Effortless inventory audits and reconciliation',
          ]
        },
        {
          title: '🔒 Enhanced Security',
          items: [
            'Each jewellery piece is uniquely tagged',
            'Helps prevent theft and misplacement',
            'Track item movement throughout the store',
            'Alarm alerts for unauthorized removal',
          ]
        },
        {
          title: '🧾 Smart Billing & Reports',
          items: [
            'Seamless integration with POS for quick billing',
            'Detailed analytics for sales and inventory',
            'Automatic item details fetched during billing',
            'Reduce billing time and customer wait',
          ]
        },
        {
          title: '📊 User-Friendly Dashboard',
          items: [
            'Real-time insights into stock levels',
            'Track product movement and location',
            'Sales trends and performance analytics',
            'Visual reports for quick decision-making',
          ]
        },
        {
          title: '✅ Benefits for Jewellery Business',
          items: [
            'Save time with automated stock counting',
            'Improve accuracy in inventory management',
            'Enhance customer satisfaction with faster service',
            'Increase profitability by reducing losses',
          ]
        }
      ],
      conclusion: 'For jewellery showrooms, wholesalers, and manufacturers, Unicorn\'s RFID-enabled software is a game-changer. It not only saves time but also improves accuracy, customer satisfaction, and profitability—making it the ultimate solution for modern jewellery management!'
    },
    readMore: 'Unicorn RFID technology transforms jewellery inventory management with real-time tracking and enhanced security.',
  },
]

const Product = () => {
  const [expandedCard, setExpandedCard] = useState(null)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    const currentRef = sectionRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  return (
    <>
    <section id="jewellery-software" ref={sectionRef} className="bg-gradient-to-b from-[#fff8ef] to-white py-20">
      {/* Header */}
      <div className="mx-auto max-w-6xl px-6 text-center">
        <div
          className={`transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'
          }`}
        >
          <span className="relative inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#0f2d55] to-[#1c918a] px-9 py-3.5 text-xl sm:text-2xl font-bold uppercase tracking-[0.22em] text-white shadow-lg shadow-[#0f2d55]/40 hover:scale-110 transition-transform duration-300 cursor-pointer overflow-hidden">
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shine_2s_linear_infinite]" />
            <span className="relative h-3 w-3 rounded-full bg-white animate-ping" />
            <span className="relative flex items-center gap-2.5">
              <svg className="h-6 w-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L4 8L12 14L20 8L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" fillOpacity="0.2"/>
                <path d="M4 8L12 14L20 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 14L4 20L12 22L20 20L12 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" fillOpacity="0.1"/>
                <circle cx="12" cy="11" r="1.5" fill="currentColor"/>
              </svg>
              Jewellery OS
            </span>
          </span>
        </div>
        <h2
          className={`mt-6 text-3xl font-bold text-[#0f2d55] sm:text-4xl transition-all duration-700 delay-100 ${
            isVisible ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'
          }`}
        >
          Products for Every Jewellery Workflow
        </h2>
        <p
          className={`mt-4 text-lg text-slate-600 max-w-2xl mx-auto transition-all duration-700 delay-200 ${
            isVisible ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'
          }`}
        >
          Pick the modules you need. Start with billing, add gold loans, ecommerce or workshops whenever you're ready.
        </p>
      </div>

      {/* Product Cards Grid */}
      <div className="mx-auto mt-16 grid max-w-7xl gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product, idx) => {
          const isExpanded = expandedCard === idx
          return (
            <div
              key={product.title}
              className={`group relative rounded-2xl bg-white border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {/* Image Section */}
              <div className="relative h-40 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Icon Badge */}
                <div className="absolute top-4 left-4 h-12 w-12 rounded-xl bg-white/90 backdrop-blur flex items-center justify-center text-2xl shadow-lg">
                  {product.icon}
                </div>
              </div>
              
              {/* Title & Description Section */}
              <div className={`px-5 py-4 border-b border-slate-100 bg-gradient-to-r ${product.color}`}>
                <h3 className="text-lg font-bold text-white leading-tight">
                  {product.title}
                </h3>
                <p className="text-sm text-white/80 mt-2 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Content Section */}
              <div className="p-5">
                {/* Points */}
                <div className="space-y-2">
                  {product.points.slice(0, 3).map((point, pointIdx) => (
                    <div key={pointIdx} className="flex items-center gap-3">
                      <span className={`h-6 w-6 rounded-full bg-gradient-to-r ${product.color} flex items-center justify-center flex-shrink-0`}>
                        <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-sm text-slate-700">{point}</span>
                    </div>
                  ))}
                </div>

                {/* Read More Button */}
                <button
                  onClick={() => setExpandedCard(isExpanded ? null : idx)}
                  className={`mt-5 w-full flex items-center justify-center gap-2 rounded-xl py-3 px-4 text-sm font-semibold transition-all duration-300 ${
                    isExpanded 
                      ? 'bg-gradient-to-r from-[#0f2d55] to-[#1c918a] text-white' 
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {isExpanded ? 'Hide Details' : 'Read More'}
                  <svg 
                    className={`h-4 w-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Expanded Content */}
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  isExpanded ? 'max-h-[800px] opacity-100 mt-5' : 'max-h-0 opacity-0'
                }`}>
                  {/* More Points */}
                  {product.points.length > 3 && (
                    <div className="space-y-2 mb-4">
                      {product.points.slice(3).map((point, pointIdx) => (
                        <div key={pointIdx} className="flex items-center gap-3">
                          <span className={`h-6 w-6 rounded-full bg-gradient-to-r ${product.color} flex items-center justify-center flex-shrink-0`}>
                            <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </span>
                          <span className="text-sm text-slate-700">{point}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {/* Detailed Content - Proper Design */}
                  <div className="rounded-2xl border border-teal-200 bg-white shadow-lg max-h-[500px] overflow-y-auto">
                    {product.detailedContent ? (
                      <div className="divide-y divide-teal-100">
                        {/* Intro */}
                        <div className="p-4 bg-gradient-to-r from-[#fff8ef] to-[#ffe8d6]">
                          <p className="text-sm text-slate-700 leading-relaxed">
                            {product.detailedContent.intro}
                          </p>
                        </div>
                        
                        {/* Sections */}
                        {product.detailedContent.sections.map((section, sectionIdx) => (
                          <div key={sectionIdx} className="p-4">
                            <h4 className="text-base font-bold text-[#0f2d55] mb-3">
                              {section.title}
                            </h4>
                            <div className="space-y-2">
                              {section.items.map((item, itemIdx) => (
                                <div key={itemIdx} className="flex items-start gap-2">
                                  <span className={`mt-1 h-5 w-5 rounded-full bg-gradient-to-r ${product.color} flex items-center justify-center flex-shrink-0`}>
                                    <svg className="h-2.5 w-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                  </span>
                                  <span className="text-sm text-slate-600">{item}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                        
                        {/* Conclusion */}
                        <div className={`p-4 bg-gradient-to-r ${product.color} text-white`}>
                          <p className="text-sm font-semibold text-center">
                            {product.detailedContent.conclusion}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="p-4">
                        <p className="text-sm text-slate-700 leading-relaxed">
                          {product.readMore}
                        </p>
                      </div>
                    )}
                  </div>
                  
                  {/* CTA Button */}
                  <button className={`mt-4 w-full rounded-xl py-3 px-4 text-sm font-bold text-white bg-gradient-to-r ${product.color} hover:shadow-lg transition-all duration-300 hover:scale-[1.02]`}>
                    Explore {product.title} →
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
    
    <style>{`
      @keyframes shine {
        0% { left: -100%; }
        100% { left: 100%; }
      }
    `}</style>
    </>
  )
}

export default Product
