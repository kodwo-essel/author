import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <footer id="contact" className="bg-charcoal text-white">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-20 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          <div className="space-y-4">
            <h3 className="font-serif text-2xl">John Snow</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Contemporary fiction exploring identity, belonging, and the human
              experience
            </p>
            <p className="text-xs text-gray-500 pt-4">
              © 2025 John Snow. All rights reserved.
            </p>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-widest text-gray-400 mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="/books"
                  className="text-sm text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Books
                </a>
              </li>
              <li>
                <a
                  href="/resources"
                  className="text-sm text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Resources
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-sm text-gray-300 hover:text-white transition-colors duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/contacts"
                  className="text-sm text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-widest text-gray-400 mb-5">
              Newsletter
            </h4>
            <p className="text-sm text-gray-400 mb-4">
              Get updates on new releases and exclusive content
            </p>
            <form onSubmit={handleSubmit} className="flex">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-charcoal-light text-white text-sm px-4 py-3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button
                type="submit"
                className="bg-accent text-white text-sm font-medium px-6 py-3 rounded-r-lg hover:bg-accent-dark transition-colors duration-300 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}
