import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <section id="newsletter" className="py-32 bg-cream">
      <div className="max-w-3xl mx-auto px-6 lg:px-20 text-center">
        <h2 className="font-dancing text-6xl md:text-7xl text-charcoal mb-6">
          Stay Connected
        </h2>
        <p className="font-sans text-base text-charcoal-light">
          Get updates on new releases and exclusive content
        </p>
      </div>
    </section>
  );
}
