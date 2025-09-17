import React, { useEffect } from 'react'

const contactus = () => {
    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section id="contact" className="py-16 bg-gray-900 bg-opacity-40">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-12 text-yellow-400">Contact Us</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-yellow-400 mb-6">Get in Touch</h3>
          <div>
            <div className="mb-4">
              <label for="name" className="block text-gray-200 mb-2">Name</label>
              <input type="text" id="name" name="name" className="w-full p-3 bg-gray-700 rounded text-gray-200 border border-gray-600 focus:outline-none focus:border-yellow-400" placeholder="Your Name" required />
            </div>
            <div className="mb-4">
              <label for="email" className="block text-gray-200 mb-2">Email</label>
              <input type="email" id="email" name="email" className="w-full p-3 bg-gray-700 rounded text-gray-200 border border-gray-600 focus:outline-none focus:border-yellow-400" placeholder="Your Email" required />
            </div>
            <div className="mb-4">
              <label for="subject" className="block text-gray-200 mb-2">Phone no.</label>
              <input type="text" id="phone no." name="Phone no." className="w-full p-3 bg-gray-700 rounded text-gray-200 border border-gray-600 focus:outline-none focus:border-yellow-400" placeholder="your Contact" required />
            </div>
            <div className="mb-4"> 
              <label for="message" className="block text-gray-200 mb-2">Message</label>
              <textarea id="message" name="message" rows="5" className="w-full p-3 bg-gray-700 rounded text-gray-200 border border-gray-600 focus:outline-none focus:border-yellow-400" placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" className="w-full bg-yellow-500 text-gray-900 font-semibold py-3 rounded hover:bg-yellow-600 transition">Send Message</button>
          </div>
        </div>

        <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-yellow-400 mb-6">Contact Information</h3>
          <p className="mb-4">Have questions or need assistance? Reach out to us, and our team will respond promptly.</p>
          <ul className="space-y-4">
            <li className="flex items-center">
              <svg className="w-6 h-6 text-yellow-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"></path></svg>
              <span>Email: <a href="mailto:info@crypto.casino" className="text-yellow-400 hover:underline">info@crypto.casino</a></span>
            </li>
            <li className="flex items-center">
              <svg className="w-6 h-6 text-yellow-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              <span>Address: Casino papa Headquarters, 123 Blockchain Avenue, Digital City</span>
            </li>
            <li className="flex items-center">
              <svg className="w-6 h-6 text-yellow-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              <span>Phone: <a href="tel:+1234567890" className="text-yellow-400 hover:underline">+1 (234) 567-890</a></span>
            </li>
          </ul>
          <p className="mt-6">Follow us on social media:</p>
          <div className="flex space-x-4 mt-4">
            <a href="https://x.com/Casinopapa" className="text-yellow-400 hover:text-yellow-600">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
            </a>
            <a href="https://facebook.com/Casinopapa" className="text-yellow-400 hover:text-yellow-600">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5.06 3.66 9.26 8.44 10v-7.08h-2.54v-2.92h2.54v-2.22c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.9h2.78l-.45 2.92h-2.33v7.08c4.78-.74 8.44-4.94 8.44-10 0-5.53-4.5-10.02-10-10.02z"></path></svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default contactus