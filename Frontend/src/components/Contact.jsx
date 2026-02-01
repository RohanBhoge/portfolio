import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { PROFILE } from '../constants/data';

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required";
    if (!formData.email) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
    }
    if (!formData.message) tempErrors.message = "Message is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);

      // EmailJS Service
      emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      )
        .then(() => {
          setIsSubmitting(false);
          setIsSent(true);
          setFormData({ name: '', email: '', message: '' });
          setTimeout(() => setIsSent(false), 3000);
        }, (error) => {
          console.error('FAILED...', error.text);
          setIsSubmitting(false);
          // Optionally handle error state here
        });
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error when user types
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: null });
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-950 snap-start">
      <div className="container mx-auto px-6">
        <SectionTitle title="Get In Touch" subtitle="Contact" />

        <div className="flex flex-col md:flex-row gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:w-1/3 space-y-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Let's talk about everything!</h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Don't like forms? Send me an email. 👋
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-blue-400">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Email</h4>
                  <p className="text-sm text-gray-400">{PROFILE.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-blue-400">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Location</h4>
                  <p className="text-sm text-gray-400">{PROFILE.location}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:w-2/3"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-400 text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full bg-gray-950 border ${errors.name ? 'border-red-500' : 'border-gray-800 focus:border-blue-500'} rounded-lg px-4 py-3 text-white outline-none transition-colors`}
                    placeholder="Enter Name"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-400 text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full bg-gray-950 border ${errors.email ? 'border-red-500' : 'border-gray-800 focus:border-blue-500'} rounded-lg px-4 py-3 text-white outline-none transition-colors`}
                    placeholder="Enter Email"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-400 text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className={`w-full bg-gray-950 border ${errors.message ? 'border-red-500' : 'border-gray-800 focus:border-blue-500'} rounded-lg px-4 py-3 text-white outline-none transition-colors resize-none`}
                  placeholder="Write your thoughts . . ."
                ></textarea>
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : isSent ? 'Sent!' : 'Send Message'}
                {!isSubmitting && !isSent && <Send size={18} />}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
