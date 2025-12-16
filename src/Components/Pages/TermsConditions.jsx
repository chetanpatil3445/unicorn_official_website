import React from 'react'
import Header from './HomePage/Header'
import Footer from './HomePage/Footer'

const TermsConditions = () => {
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
              Terms &amp; Conditions
            </h1>
            <p className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base text-gray-600">
              Unicorn Jewellery Software – India
            </p>
          </div>

          {/* Card */}
          <div className="rounded-xl sm:rounded-2xl bg-white/95 backdrop-blur border border-gray-200/70 shadow-xl shadow-black/5">
            <div className="px-4 sm:px-6 lg:px-8 py-4 sm:py-5 md:py-6 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <p className="text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-teal-600 font-semibold">
                  Legal Agreement
                </p>
                <p className="mt-1 text-xs sm:text-sm text-gray-600">
                  Please read these Terms &amp; Conditions carefully before using the software.
                </p>
              </div>
              <span className="inline-flex items-center rounded-full bg-teal-50 px-2.5 sm:px-3 py-1 text-[10px] sm:text-xs font-semibold text-teal-700 border border-teal-100">
                Updated © 2025
              </span>
            </div>

            {/* Content */}
            <div className="px-4 sm:px-6 lg:px-8 py-4 sm:py-5 md:py-6 text-xs sm:text-sm leading-relaxed text-gray-800 space-y-3 sm:space-y-4 md:space-y-6">
              {/* Top Section */}
              <div className="space-y-2 sm:space-y-3">
              <p className="font-semibold text-sm sm:text-base text-gray-900">
                Terms &amp; Conditions – Unicorn Jewellery Software (India)
              </p>

              <div className="space-y-1.5 sm:space-y-2">
                <h2 className="font-semibold text-xs sm:text-sm md:text-base text-[#0f2d55]">1. License &amp; Usage</h2>
                <p>Unicorn Jewellery Software (“Software”) is licensed, not sold, to the user.</p>
                <p>The license is granted exclusively to the registered purchaser or business entity.</p>
                <p>Unauthorized sharing, selling, leasing, or transferring of the software license is strictly prohibited.</p>
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                <h2 className="font-semibold text-xs sm:text-sm md:text-base text-[#0f2d55]">2. Intellectual Property</h2>
                <p>
                  All rights, ownership, and intellectual property of the software, database structure, design, UI, features,
                  and documentation belong solely to Unicorn Jewellery Software, India.
                </p>
                <p>
                  Users may not copy, modify, decompile, reverse-engineer, or attempt to extract the source code or design
                  architecture.
                </p>
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                <h2 className="font-semibold text-xs sm:text-sm md:text-base text-[#0f2d55]">3. Data Responsibility</h2>
                <p>Users are responsible for maintaining backup copies of their data.</p>
                <p>
                  The company is not liable for data loss due to improper use, hardware failure, viruses, user errors, or
                  third-party interference.
                </p>
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                <h2 className="font-semibold text-xs sm:text-sm md:text-base text-[#0f2d55]">4. Software Updates &amp; Support</h2>
                <p>The company may release updates, patches, or improvements to enhance performance or fix issues.</p>
                <p>Support services are available only to licensed users with a valid service agreement.</p>
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                <h2 className="font-semibold text-xs sm:text-sm md:text-base text-[#0f2d55]">5. Limitations of Liability</h2>
                <p>The company is not responsible for:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Loss of revenue, profit, or business due to software failure or downtime</li>
                  <li>Third-party damages</li>
                  <li>Incorrect data entry by users</li>
                </ul>
                <p>The software is provided “as is” without warranty of uninterrupted operation.</p>
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                <h2 className="font-semibold text-xs sm:text-sm md:text-base text-[#0f2d55]">6. Termination of License</h2>
                <p>The company reserves the right to terminate the license if the user violates these terms.</p>
                <p>Upon termination, the user must stop using the software and uninstall all copies.</p>
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                <h2 className="font-semibold text-xs sm:text-sm md:text-base text-[#0f2d55]">7. Compliance With Law</h2>
                <p>
                  Users agree to operate the software in compliance with all applicable Indian laws, including GST,
                  accounting, and invoicing regulations.
                </p>
                <p>The software is a tool to assist business operations; accuracy of entries remains the user's responsibility.</p>
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                <h2 className="font-semibold text-xs sm:text-sm md:text-base text-[#0f2d55]">8. No Unlawful Use</h2>
                <p>
                  The software may not be used for any illegal activities, fraudulent billing, or manipulation of financial
                  records.
                </p>
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                <h2 className="font-semibold text-xs sm:text-sm md:text-base text-[#0f2d55]">9. Amendments</h2>
                <p>The company reserves the right to modify or update these Terms &amp; Conditions at any time.</p>
                <p>Continued use of the software after updates implies acceptance of revised terms.</p>
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                <h2 className="font-semibold text-xs sm:text-sm md:text-base text-[#0f2d55]">10. Acceptance</h2>
                <p>
                  By installing or using Unicorn Jewellery Software, the user agrees to all the above Terms &amp; Conditions.
                </p>
                <p>
                  By installing, copying, or using the Software, you agree to be bound by the terms of this Agreement. If you
                  do not agree to these terms, do not install or use the Software.
                </p>
              </div>
            </div>

              {/* Detailed EULA-style Sections */}
              <div className="space-y-2 sm:space-y-3 pt-3 sm:pt-4 border-t border-gray-100">
              <div className="space-y-1.5 sm:space-y-2">
                <h2 className="font-semibold text-xs sm:text-sm md:text-base text-[#0f2d55]">1. Grant of License</h2>
                <p>
                  1.1 The Company grants the User a non-exclusive, non-transferable, revocable license to install and use the
                  Software for legitimate business operations.
                </p>
                <p>
                  1.2 This license is limited to one business entity and the number of systems agreed upon during purchase.
                </p>
                <p>1.3 The Software is licensed, not sold. Ownership remains entirely with the Company.</p>
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                <h2 className="font-semibold text-xs sm:text-sm md:text-base text-[#0f2d55]">2. Restrictions</h2>
                <p>The User shall not:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Copy, reproduce, or distribute the Software or any part of it.</li>
                  <li>Rent, lease, sell, sublicense, or transfer the Software to any third party.</li>
                  <li>Modify, translate, alter, or create derivative works.</li>
                  <li>Reverse engineer, decompile, disassemble, or attempt to access the source code.</li>
                  <li>Remove or alter copyright notices, branding, or digital signatures.</li>
                </ul>
                <p>
                  Violation of this section may result in immediate termination of the license and may constitute a criminal
                  offense under applicable law.
                </p>
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                <h2 className="font-semibold text-xs sm:text-sm md:text-base text-[#0f2d55]">3. Intellectual Property Rights</h2>
                <p>
                  3.1 All rights, titles, and interests in the Software, including its design, database structure, algorithms,
                  modules, interface, branding, and documentation, are owned exclusively by Unicorn Jewellery Software, India.
                </p>
                <p>3.2 Nothing in this Agreement transfers any intellectual property rights to the User.</p>
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                <h2 className="font-semibold text-xs sm:text-sm md:text-base text-[#0f2d55]">4. Data &amp; Backup Responsibility</h2>
                <p>4.1 The User is solely responsible for regularly backing up all business data.</p>
                <p>4.2 The Company is not responsible for any loss, corruption, or damage to data due to:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>User error</li>
                  <li>Hardware malfunction</li>
                  <li>Viruses, malware, or external attacks</li>
                  <li>Improper shutdowns or power failures</li>
                  <li>Third-party actions</li>
                </ul>
                <p>4.3 The User agrees that maintaining secure data practices is their own responsibility.</p>
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                <h2 className="font-semibold text-xs sm:text-sm md:text-base text-[#0f2d55]">5. Software Updates &amp; Maintenance</h2>
                <p>
                  5.1 The Company may provide updates, patches, or improvements to enhance performance or resolve issues.
                </p>
                <p>5.2 Updates may be automatic or require user action.</p>
                <p>5.3 Receiving updates or support may require an active service plan or subscription.</p>
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                <h2 className="font-semibold text-xs sm:text-sm md:text-base text-[#0f2d55]">6. Technical Support</h2>
                <p>6.1 Technical support is offered only to licensed users with valid support agreements.</p>
                <p>6.2 Support does not include:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Data recovery</li>
                  <li>Hardware issues</li>
                  <li>Third-party software issues</li>
                  <li>Training beyond the agreed scope</li>
                </ul>
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                <h2 className="font-semibold text-xs sm:text-sm md:text-base text-[#0f2d55]">7. Warranty Disclaimer</h2>
                <p>7.1 The Software is provided “AS IS” without warranties of any kind, including:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Performance guarantees</li>
                  <li>Compatibility guarantees</li>
                  <li>Error-free or uninterrupted operation</li>
                </ul>
                <p>
                  7.2 The Company disclaims all implied warranties, including merchantability, fitness for a particular
                  purpose, and non-infringement.
                </p>
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                <h2 className="font-semibold text-xs sm:text-sm md:text-base text-[#0f2d55]">8. Limitation of Liability</h2>
                <p>To the maximum extent permitted by law, the Company shall not be liable for:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Loss of revenue, profit, or business</li>
                  <li>Financial discrepancies or incorrect entries made by the User</li>
                  <li>Downtime, business interruption, or delays</li>
                  <li>Loss of data or corruption of files</li>
                  <li>Incidental, indirect, or consequential damages</li>
                </ul>
                <p>The User acknowledges that software performance may vary based on hardware, environment, and usage.</p>
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                <h2 className="font-semibold text-xs sm:text-sm md:text-base text-[#0f2d55]">9. Compliance With Law</h2>
                <p>
                  9.1 The User is responsible for complying with all applicable Indian laws, including GST, accounting
                  standards, inventory regulations, and business rules.
                </p>
                <p>
                  9.2 The Software is a tool that assists in operations; the accuracy of entries and generated reports
                  remains the User's responsibility.
                </p>
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                <h2 className="font-semibold text-xs sm:text-sm md:text-base text-[#0f2d55]">10. Prohibited Use</h2>
                <p>The Software may not be used for:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Fraudulent billing</li>
                  <li>Tampering with financial or accounting records</li>
                  <li>Illegal transactions</li>
                  <li>Activities violating Indian cyber laws or any regulatory requirements</li>
                </ul>
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                <h2 className="font-semibold text-xs sm:text-sm md:text-base text-[#0f2d55]">11. Termination</h2>
                <p>11.1 The Company may terminate the license immediately if the User breaches any terms of this Agreement.</p>
                <p>11.2 Upon termination, the User must:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Cease all use of the Software</li>
                  <li>Uninstall/delete all copies</li>
                  <li>Return or destroy related documentation</li>
                </ul>
                <p>No refunds or credits will be provided for terminated licenses.</p>
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                <h2 className="font-semibold text-xs sm:text-sm md:text-base text-[#0f2d55]">12. Governing Law &amp; Jurisdiction</h2>
                <p>This Agreement shall be governed by and interpreted according to the laws of India.</p>
                <p>
                  Any disputes arising under this Agreement shall be subject to the exclusive jurisdiction of courts located
                  in Pune/ Surat.
                </p>
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                <h2 className="font-semibold text-xs sm:text-sm md:text-base text-[#0f2d55]">13. Amendments</h2>
                <p>The Company reserves the right to modify, update, or revise these terms at any time.</p>
                <p>Continued use of the Software after such changes constitutes acceptance of the revised Agreement.</p>
              </div>

              <div className="space-y-1.5 sm:space-y-2 pb-3 sm:pb-4">
                <h2 className="font-semibold text-xs sm:text-sm md:text-base text-[#0f2d55]">14. Acceptance</h2>
                <p>
                  By installing, accessing, or using Unicorn Jewellery Software, the User acknowledges that they have read,
                  understood, and agreed to be bound by this EULA.
                </p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default TermsConditions
