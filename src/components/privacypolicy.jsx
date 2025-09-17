import React, { useEffect } from 'react'

const privacypolicy = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
  <section id="privacy" className="py-16 bg-gray-900 bg-opacity-40">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-12 text-yellow-400">Privacy Policy</h2>
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
        <p className="mb-4">This Privacy Policy applies to Users and the Website’s operator. We prioritize User privacy and handle Data in accordance with this policy.</p>

        <h3 className="text-xl font-semibold text-yellow-400 mt-6 mb-4"> Privacy Policy Scope</h3>
        <p className="mb-4">This policy applies to our actions and User actions on the Website. It does not cover third-party websites linked from the Website.</p>
        <p className="mb-4">We are the "data controller" under Data Protection Laws, determining how Data is processed.</p>

        <h3 className="text-xl font-semibold text-yellow-400 mt-6 mb-4">Data Collected</h3>
        <p className="mb-4">We collect:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Contact information (e.g., email address).</li>
          <li>Automatically collected information (e.g., IP address, browser type, operating system).</li>
        </ul>

        <h3 className="text-xl font-semibold text-yellow-400 mt-6 mb-4">How Data is Collected</h3>
        <p className="mb-4"> <strong>Data Provided by Users</strong>: Collected when Users contact us or submit complaints.</p>
        <p className="mb-4"> <strong>Data Collected Automatically</strong>: Includes IP address, visit frequency, and interactions, collected via cookies based on browser settings.</p>

        <h3 className="text-xl font-semibold text-yellow-400 mt-6 mb-4">Our Use of Data</h3>
        <p className="mb-4">Data is used to improve services or for purposes for which it was provided. We do not share, rent, or sell personal information.</p>

        <h3 className="text-xl font-semibold text-yellow-400 mt-6 mb-4"> Keeping Data Secure</h3>
        <p className="mb-4">We store Data on secure servers, accessible only by Website admins. Contact security@crypto.casino for suspected breaches.</p>

        <h3 className="text-xl font-semibold text-yellow-400 mt-6 mb-4"> Data Retention</h3>
        <p className="mb-4">Data is retained only as long as necessary or until Users request deletion, unless required by law.</p>

        <h3 className="text-xl font-semibold text-yellow-400 mt-6 mb-4">Your Rights</h3>
        <p className="mb-4">Users have the right to:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Access, correct, or erase Data.</li>
          <li>Restrict or object to Data use.</li>
          <li>Request Data portability.</li>
        </ul>
        <p className="mb-4">Contact privacy@crypto.casino to exercise these rights or file complaints.</p>

        <h3 className="text-xl font-semibold text-yellow-400 mt-6 mb-4">Links to Other Websites</h3>
        <p className="mb-4">We are not responsible for linked third-party websites. Users should review their privacy policies.</p>

        <h3 className="text-xl font-semibold text-yellow-400 mt-6 mb-4"> Changes of Business Ownership</h3>
        <p className="mb-4">If our business changes ownership, User Data may be transferred, but privacy protections will remain.</p>

        <h3 className="text-xl font-semibold text-yellow-400 mt-6 mb-4"> Cookies</h3>
        <p className="mb-4">Cookies improve Website experience and comply with EU Cookie Law. Users can manage cookie settings in their browsers.</p>

        <h3 className="text-xl font-semibold text-yellow-400 mt-6 mb-4"> General</h3>
        <p className="mb-4">User rights under this policy are non-transferable. Invalid provisions do not affect the validity of others.</p>
        <p className="mb-4">Last updated: September 13, 2025</p>
      </div>
    </div>
  </section>
  )
}

export default privacypolicy