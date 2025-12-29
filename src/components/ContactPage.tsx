import { useState } from 'react';
import { Instagram, Twitter, BookOpen, Music } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 2000);
  };

  const characterCount = formData.message.length;
  const maxCharacters = 500;

  return (
    <main className="min-h-screen bg-white pt-32 pb-20">
      {/* Contact Form Section */}
      <header className="text-center px-6 lg:px-20 mb-20">
        <nav className="text-xs text-charcoal-light mb-6">
          <Link to="/" className="hover:text-charcoal transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span>Contacts</span>
        </nav>
        <h1 className="font-dancing text-6xl md:text-7xl text-charcoal mb-6">
          Get in Touch
        </h1>
        <p className="font-sans text-lg text-charcoal-light max-w-2xl mx-auto leading-relaxed">
          For interviews, collaborations, and speaking engagements
        </p>
      </header>
      <section className="px-6 lg:px-20">
        
        <div className="max-w-[700px] mx-auto">
          
          

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-gray-50 text-gray-900 text-base px-5 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300"
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-gray-50 text-gray-900 text-base px-5 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300"
              />
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                required
                maxLength={maxCharacters}
                rows="6"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-gray-50 text-gray-900 text-base px-5 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300 resize-none"
              />
              <p className="text-xs text-gray-600 mt-2 text-right">
                {characterCount}/{maxCharacters} characters
              </p>
            </div>

            <button
              type="submit"
              disabled={submitted}
              className="w-full bg-gray-900 text-white font-sans text-base font-medium py-4 rounded-lg hover:bg-gray-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitted ? 'Message Sent!' : 'Send Message'}
            </button>
          </form>

          <div className="mt-12 text-center">
            <p className="font-sans text-sm text-gray-600 mb-2">
              Or email me directly at
            </p>
            <a
              href="mailto:hello@elenamorrison.com"
              className="font-sans text-base text-gray-900 hover:text-accent transition-colors duration-300"
            >
              hello@elenamorrison.com
            </a>
          </div>
        </div>
      </section>

      {/* Social Links Section */}
      <section className="px-6 lg:px-20 mt-24">
        <div className="max-w-[600px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-gray-900">
              Connect Elsewhere
            </h2>
          </div>

          <div className="flex items-center justify-center gap-8">
            <a
              href="https://instagram.com/elenamorrison"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 flex items-center justify-center bg-accent text-white rounded-full hover:scale-110 hover:shadow-lg transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>

            <a
              href="https://twitter.com/elenamorrison"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 flex items-center justify-center bg-accent text-white rounded-full hover:scale-110 hover:shadow-lg transition-all duration-300"
              aria-label="Twitter"
            >
              <Twitter size={24} />
            </a>

            <a
              href="https://goodreads.com/elenamorrison"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 flex items-center justify-center bg-accent text-white rounded-full hover:scale-110 hover:shadow-lg transition-all duration-300"
              aria-label="Goodreads"
            >
              <BookOpen size={24} />
            </a>

            <a
              href="https://tiktok.com/@elenamorrison"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 flex items-center justify-center bg-accent text-white rounded-full hover:scale-110 hover:shadow-lg transition-all duration-300"
              aria-label="TikTok"
            >
              <Music size={24} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}