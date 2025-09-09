import React, { useState } from 'react';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (num) => {
    setOpenFAQ(openFAQ === num ? null : num);
  };

  const faqs = [
    {
      id: 1,
      question: 'How do I find a safe online casino?',
      answer: 'Look for proper licensing, SSL encryption, positive reviews, and responsible gambling features. Always check our verified casino list for the safest options.'
    },
    {
      id: 2,
      question: 'What bonuses are best for beginners?',
      answer: 'No deposit bonuses and free spins are perfect for beginners. They let you try games without risking your own money while learning the ropes.'
    },
    {
      id: 3,
      question: 'Is gambling legal in India?',
      answer: 'Online gambling laws vary by state in India. Some states allow it while others restrict it. Always check your local laws before playing.'
    }
  ];

  return (
    <section id="faq" className="py-16 bg-gray-900 bg-opacity-40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-yellow-400">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="card rounded-xl">
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full text-left p-6 font-semibold text-lg flex justify-between items-center"
              >
                {faq.question}
                <span>{openFAQ === faq.id ? '−' : '+'}</span>
              </button>
              <div className={`${openFAQ === faq.id ? '' : 'hidden'} px-6 pb-6 text-gray-200`}>
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;