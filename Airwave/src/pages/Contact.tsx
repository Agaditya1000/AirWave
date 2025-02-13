import React, { useState } from 'react';
import { Mail, MessageSquare, Phone } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-4xl font-bold text-text-dark mb-8">Contact Us</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-bora focus:ring-bora"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-bora focus:ring-bora"
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-bora focus:ring-bora"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-bora focus:ring-bora"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-bora text-white py-3 px-6 rounded-md hover:bg-bora-light transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="space-y-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-bora" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-600">support@airwatch.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-bora" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MessageSquare className="h-6 w-6 text-bora" />
                <div>
                  <h3 className="font-semibold">Live Chat</h3>
                  <p className="text-gray-600">Available Monday to Friday, 9am - 5pm EST</p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQs */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  question: 'How often is the AQI data updated?',
                  answer: 'Our AQI data is updated in real-time, with measurements taken every hour from monitoring stations worldwide.'
                },
                {
                  question: 'Can I access historical AQI data?',
                  answer: 'Yes, premium users can access historical AQI data for any city dating back up to 5 years.'
                },
                {
                  question: 'How accurate is the AQI information?',
                  answer: 'Our data comes directly from government-operated monitoring stations and follows EPA standards for accuracy.'
                }
              ].map((faq, index) => (
                <div key={index}>
                  <h3 className="font-semibold mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;