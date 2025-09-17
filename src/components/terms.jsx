import React, { useEffect } from 'react'

const terms = () => {
    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
      <section id="terms" className="py-16 bg-gray-900 bg-opacity-40">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-12 text-yellow-400">Terms and Conditions</h2>
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
        <p className="mb-4">These Terms of Use (the "Terms") govern the mutual rights and obligations associated with the use of the Website by Users. We reserve the right to amend these Terms without prior notice. Changes will be posted on the Website and, where appropriate, notified to Users by email.</p>
        
        <h3 className="text-xl font-semibold text-yellow-400 mt-6 mb-4">Definitions</h3>
        <p className="mb-4">Capitalized terms used in these Terms have the following meanings:</p>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>Website</strong>: https://casinopapa.com and its localized versions, available at subdomains or separate domains.</li>
          <li><strong>We, Us, Our</strong>: Refers to the operator of the Website.</li>
          <li><strong>User</strong>: A natural or legal person accessing and using the Website, referred to as You or Your.</li>
          <li><strong>Privacy Policy</strong>: The personal data and privacy protection policy, detailed in section 5.</li>
          <li><strong>Data</strong>: All information submitted by a User on the Website.</li>
          <li><strong>Cookie</strong>: A short text file placed on your computer by the Website or third parties.</li>
          <li><strong>Data Protection Laws</strong>: Applicable laws related to personal data processing, including GDPR.</li>
          <li><strong>GDPR</strong>: General Data Protection Regulation (EU) 2016/679.</li>
          <li><strong>EU Cookie Law</strong>: Directive 2002/58/EC, amended in 2006 and 2009.</li>
          <li><strong>User Generated Content</strong>: Content posted by Users, including text, images, videos, etc.</li>
        </ul>

        <h3 className="text-xl font-semibold text-yellow-400 mt-6 mb-4">General Terms</h3>
        <p className="mb-4">The Website provides independent information and guidance for individuals interested in cryptocurrency-based online gambling and is not a provider of gambling services. Information is for informational purposes only and not legal advice.</p>
        <p className="mb-4">We strive to ensure the accuracy of information but cannot guarantee it due to the dynamic nature of online gambling. We are not liable for damages resulting from the use of Website information.</p>
        <p className="mb-4">The Website contains links to third-party websites. We are not responsible for their content and encourage Users to review their terms before engaging in gambling activities.</p>
        <p className="mb-4">By using the Website, Users consent to these Terms and the Privacy Policy and confirm they understand and will comply with them.</p>
        <p className="mb-4">Users consent to the processing of personal data as outlined in the Privacy Policy for proper Website use.</p>
        <p className="mb-4">Users confirm they are at least 18 years old and have full legal capacity. Access is restricted to those under 18 or where online gambling is prohibited in their jurisdiction.</p>
        <p className="mb-4">We may restrict access to the Website or its parts for Users from certain countries to comply with local laws.</p>
        <p className="mb-4">Users should contact us at info@casinopapa.com if they identify inaccuracies or believe the Website violates local laws.</p>
        <p className="mb-4">If any part of these Terms conflicts with a User’s local laws, other parts remain valid.</p>
        <p className="mb-4">Casino Papa logos, trademarks, and content are our intellectual property. Third-party logos are used for nominative fair use. Copying content requires do-follow backlinks or prior approval, except on Wikipedia, where no-follow links are required.</p>
        <p className="mb-4">Translations may be powered by Google, which disclaims warranties for accuracy or reliability.</p>
        <p className="mb-4">Content is for personal, non-commercial use. Extraction, scraping, or mirroring is prohibited.</p>

        <h3 className="text-xl font-semibold text-yellow-400 mt-6 mb-4"> Forum and User Generated Content</h3>
        <p className="mb-4">This section applies to all User Generated Content, including forum posts, images, complaints, and reviews.</p>
        <p className="mb-4">Users grant us a worldwide, perpetual, royalty-free license to use, modify, and display User Generated Content.</p>
        <p className="mb-4"> Users must not post false, defamatory, abusive, or illegal content.</p>
        <p className="mb-4">User Generated Content reflects User opinions, not ours. We are not responsible for forum content.</p>
        <p className="mb-4"> Posting third-party content without consent or allowing others to post under your name is prohibited.</p>
        <p className="mb-4"> Spamming, promotions, or abusive activities are prohibited.</p>
        <p className="mb-4">We may remove promotional content posted by gambling-related entities.</p>
        <p className="mb-4"> We may remove or edit abusive or illegal User Generated Content or close User accounts.</p>
        <p className="mb-4"> We may disclose User information to authorities in case of legal action.</p>
        <p className="mb-4"> User reviews must reflect genuine experiences and comply with rules. Multiple reviews or reviews with conflicts of interest are prohibited.</p>
        <p className="mb-4">We may delete reviews motivated by casino incentives.</p>
        <p className="mb-4">We cannot share User personal information with casinos for review identification.</p>
        <p className="mb-4">Casino representatives must follow specific rules for forum posts and include affiliate tracking codes where applicable.</p>

        <h3 className="text-xl font-semibold text-yellow-400 mt-6 mb-4"> Dispute Mediation Service</h3>
        <p className="mb-4">We offer a free dispute mediation service for complaints against online gambling operators.</p>
        <p className="mb-4">By submitting a complaint, Users authorize us to represent them and participate in mediation.</p>
        <p className="mb-4">Users authorize us to request and receive relevant account information from gambling operators.</p>
        <p className="mb-4">We may refuse complaints that are frivolous, lack evidence, or involve abusive behavior.</p>
        <p className="mb-4">Complaints over one year old, submitted on behalf of others, or outside our expertise may be refused.</p>

        <h3 className="text-xl font-semibold text-yellow-400 mt-6 mb-4">Final Provisions</h3>
        <p className="mb-4">The English version of these Terms prevails in case of discrepancies.</p>
        <p className="mb-4">Terms may change without prior notice.</p>
        <p className="mb-4">Last updated: September 13, 2025</p>
      </div>
    </div>
  </section>
  )
}

export default terms