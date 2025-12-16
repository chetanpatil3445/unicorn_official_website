import React from 'react'
import Header from './HomePage/Header'
import Footer from './HomePage/Footer'

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#fff8ef] to-[#f5f0e8]">
      <Header />
      <section className="relative overflow-hidden py-12 sm:py-16 lg:py-20">
        {/* Soft background accents */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-[#1c918a]/10 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-[#0f2d55]/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="mb-6 sm:mb-8 md:mb-10 text-center">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#0f2d55] tracking-tight">
              Privacy Policy
            </h1>
            <p className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base text-gray-600">
              Unicorn Jewellery Software – Powered by Softwaregen Technologies
            </p>
          </div>

          {/* Card */}
          <div className="rounded-xl sm:rounded-2xl bg-white/95 backdrop-blur border border-gray-200/70 shadow-xl shadow-black/5">
            {/* Top meta */}
            <div className="px-4 sm:px-6 lg:px-8 py-4 sm:py-5 md:py-6 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <p className="text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-teal-600 font-semibold">
                  Privacy &amp; Data Protection
                </p>
                <p className="mt-1 text-xs sm:text-sm text-gray-600">
                  How we collect, use, and protect your information when you use Unicorn Jewellery Software.
                </p>
              </div>
              <span className="inline-flex items-center rounded-full bg-teal-50 px-2.5 sm:px-3 py-1 text-[10px] sm:text-xs font-semibold text-teal-700 border border-teal-100">
                Updated © 2025
              </span>
            </div>

            {/* Content */}
            <div className="px-4 sm:px-6 lg:px-8 py-4 sm:py-5 md:py-6 text-xs sm:text-sm leading-relaxed text-gray-800 space-y-4 sm:space-y-5 md:space-y-6">
              {/* 1. Introduction */}
              <div className="space-y-2 sm:space-y-3">
                <h2 className="font-semibold text-[#0f2d55] text-sm sm:text-base md:text-lg">
                  1. Introduction
                </h2>
                <p>
                  Unicorn Jewellery Software respects your privacy. This Privacy Policy explains how Softwaregen Technologies
                  (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) collects, uses, and protects personal information when
                  you interact with Unicorn Jewellery Software. This includes activities such as purchasing products, contacting sales or
                  technical support, subscribing to newsletters, or downloading demo software.
                </p>
              </div>

              {/* 2. Information We Collect & Purpose */}
              <div className="space-y-2 sm:space-y-3">
                <h2 className="font-semibold text-[#0f2d55] text-sm sm:text-base md:text-lg">
                  2. Information We Collect &amp; Why
                </h2>
                <p>
                  We collect personal information to provide better customer service and a smoother product experience. For
                  example, your details help us share important product updates, announcements, and special offers that may be
                  relevant to your business.
                </p>
                <p>When you provide information such as your name, email address, postal address, or phone number, we may:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Set up and manage your product or service account.</li>
                  <li>Share important product updates, feature releases, and announcements.</li>
                  <li>Inform you about new products, services, or special promotions.</li>
                  <li>Provide sales, onboarding, and technical support.</li>
                </ul>
                <p>
                  If you do not choose to opt out, Unicorn Jewellery Software, its representatives, and authorized partners may use this
                  information to communicate with you about updates, new products, promotions, and other relevant information.
                </p>
              </div>

              {/* 3. No Selling of Personal Information */}
              <div className="space-y-2 sm:space-y-3">
                <h2 className="font-semibold text-[#0f2d55] text-sm sm:text-base md:text-lg">
                  3. Sharing of Personal Information
                </h2>
                <p>
                  Unicorn Jewellery Software does not sell, rent, or share your personal information with third parties, except for trusted
                  representatives or authorized affiliates such as value-added resellers who work with us to deliver or support
                  our products and services.
                </p>
                <p>
                  Any such partners or service providers are required to protect your information and use it only for the
                  specific purposes for which it was shared, such as implementation, support, or communication on our behalf.
                </p>
              </div>

              {/* 4. Communications & Opt-Out */}
              <div className="space-y-2 sm:space-y-3">
                <h2 className="font-semibold text-[#0f2d55] text-sm sm:text-base md:text-lg">
                  4. Communications &amp; Opt-Out Options
                </h2>
                <p>
                  We may send essential notifications related to product updates and technical support. These communications are
                  necessary for proper product functionality, security, and performance, and therefore cannot be opted out of.
                </p>
                <p>
                  However, you can choose to stop receiving promotional or marketing communications (such as offers, newsletters,
                  or event invitations) at any time by:
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Contacting the Softwaregen Technologies Customer Service Department, or</li>
                  <li>Following the unsubscribe or opt-out instructions included in our emails.</li>
                </ul>
              </div>

              {/* 5. Website Usage & Cookies */}
              <div className="space-y-2 sm:space-y-3">
                <h2 className="font-semibold text-[#0f2d55] text-sm sm:text-base md:text-lg">
                  5. Website Usage &amp; Cookies
                </h2>
                <p>
                  The Unicorn Jewellery Software website uses cookies, visitor logs, and tracking tools to understand how users interact with our
                  site. This information helps us:
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Identify popular sections and pages of the website.</li>
                  <li>Improve website navigation and overall user experience.</li>
                  <li>Monitor performance and fix issues.</li>
                </ul>
                <p>
                  The information collected through cookies and tracking tools does not include personally identifiable details
                  such as your name or email address. All data is analyzed in aggregated form only.
                </p>
                <p>
                  Most browsers allow you to control cookies through settings. If you disable cookies, some parts of the website
                  may not work as expected or may offer limited functionality.
                </p>
              </div>

              {/* 6. Protection of Personal Information */}
              <div className="space-y-2 sm:space-y-3">
                <h2 className="font-semibold text-[#0f2d55] text-sm sm:text-base md:text-lg">
                  6. Protection of Personal Information
                </h2>
                <p>
                  When personal information is submitted through the Unicorn Jewellery Software website, Secure Sockets Layer (SSL)
                  encryption is used to protect the data during transmission. This helps reduce the risk of unauthorized access,
                  misuse, or alteration of the information you send to us online.
                </p>
                <p>
                  We also use reasonable administrative and technical safeguards to protect personal information once it is
                  received in our systems, including restricted access, monitoring, and secure storage practices.
                </p>
                <p>
                  However, no internet transmission or electronic storage method is completely secure. Therefore, Unicorn Jewellery Software
                  cannot guarantee absolute security of information sent online. Once your data is received, we take all
                  reasonable steps to protect it within our systems.
                </p>
              </div>

              {/* 7. Data Retention */}
              <div className="space-y-2 sm:space-y-3">
                <h2 className="font-semibold text-[#0f2d55] text-sm sm:text-base md:text-lg">
                  7. Data Retention
                </h2>
                <p>
                  We keep your personal information only for as long as it is necessary for the purposes described in this
                  Privacy Policy, such as providing services, maintaining communication, or meeting legal and regulatory
                  requirements. When information is no longer required, we will delete, anonymize, or securely archive it in
                  accordance with our data retention practices.
                </p>
              </div>

              {/* 8. Your Choices & Contact */}
              <div className="space-y-2 sm:space-y-3 pb-2">
                <h2 className="font-semibold text-[#0f2d55] text-sm sm:text-base md:text-lg">
                  8. Your Choices &amp; Contact
                </h2>
                <p>
                  If you have questions about this Privacy Policy, want to update your contact details, or wish to change your
                  communication preferences, you can contact the Softwaregen Technologies Customer Service Department.
                </p>
                <p>
                  By using the Unicorn Jewellery Software website or our products and services, you acknowledge that you have read and
                  understood this Privacy Policy and agree to the way we handle personal information as described here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default PrivacyPolicy


