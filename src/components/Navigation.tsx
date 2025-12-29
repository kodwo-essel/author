import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Books', href: '/books' },
    { name: 'Resources', href: '/resources' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contacts' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-20">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center gap-3 group">
              <img
                alt="John Snow"
                className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-105"
                src="https://public.readdy.ai/ai/img_res/31415cbf-746d-42a4-ab11-1071d3458e2d.png"
              />
              <span className="font-serif text-xl tracking-wide text-charcoal">
                John Snow
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-12">
              {navLinks.map((link) => {
                const isInternalLink = link.href.startsWith('/');
                const LinkComponent = isInternalLink ? Link : 'a';
                return (
                  <LinkComponent
                    key={link.name}
                    to={isInternalLink ? link.href : undefined}
                    href={!isInternalLink ? link.href : undefined}
                    className="relative font-sans text-sm tracking-wider text-charcoal-light hover:text-charcoal transition-colors duration-300 group whitespace-nowrap"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-charcoal transition-all duration-300 group-hover:w-full"></span>
                  </LinkComponent>
                );
              })}
            </div>

            <button
              className="md:hidden w-10 h-10 flex items-center justify-center text-charcoal"
              aria-label="Toggle menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 bg-white z-40 md:hidden transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => {
            const isInternalLink = link.href.startsWith('/');
            const LinkComponent = isInternalLink ? Link : 'a';
            return (
              <LinkComponent
                key={link.name}
                to={isInternalLink ? link.href : undefined}
                href={!isInternalLink ? link.href : undefined}
                className="font-serif text-3xl text-charcoal hover:text-accent transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </LinkComponent>
            );
          })}
        </div>
      </div>
    </>
  );
}
