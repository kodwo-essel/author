import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 pb-32 px-6 lg:px-20"
    >
      <div className="max-w-[1400px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <div className="space-y-8 lg:pr-12">
            <div className="space-y-6">
              <h1 className="font-dancing text-5xl md:text-6xl lg:text-7xl leading-tight text-charcoal">
                John Snow
              </h1>
              <p className="font-sans text-lg md:text-xl text-charcoal-light max-w-md leading-relaxed">
                Award-winning author exploring the depths of human connection,
                identity, and belonging through contemporary fiction
              </p>
            </div>

            <div className="prose prose-lg max-w-xl">
              <p className="font-sans text-base md:text-lg text-charcoal-light leading-loose">
                With three critically acclaimed novels and numerous literary
                awards, John Snow crafts stories that resonate with readers
                worldwide, delving into the complexities of modern life and the
                universal search for meaning and connection in an ever-changing
                world.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                to="/books"
                className="inline-flex items-center justify-center bg-charcoal text-white font-sans text-sm tracking-wider px-10 py-4 rounded-lg hover:bg-charcoal-light transition-all duration-300 hover:shadow-lg whitespace-nowrap"
              >
                Explore My Books
              </Link>
              <a
                href="#about"
                className="inline-flex items-center justify-center border-2 border-charcoal text-charcoal font-sans text-sm tracking-wider px-10 py-4 rounded-lg hover:bg-charcoal hover:text-white transition-all duration-300 whitespace-nowrap"
              >
                About My Writing
              </a>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="absolute -top-4 -right-4 z-10 bg-accent text-white text-xs uppercase tracking-widest px-4 py-2 rounded-full shadow-lg">
                New Release
              </div>
              <div className="relative transform -rotate-2 transition-transform duration-500 group-hover:rotate-0">
                <div className="w-full max-w-md aspect-[2/3] rounded-lg overflow-hidden shadow-2xl">
                  <img
                    alt="The Spaces Between Us - New Novel"
                    className="w-full h-full object-cover object-top"
                    src="https://readdy.ai/api/search-image?query=elegant%20minimalist%20book%20cover%20design%20for%20contemporary%20literary%20fiction%20novel%20titled%20The%20Spaces%20Between%20Us%20featuring%20abstract%20watercolor%20brushstrokes%20in%20soft%20sage%20green%20and%20warm%20terracotta%20tones%20with%20sophisticated%20serif%20typography%20on%20clean%20cream%20background%20modern%20editorial%20aesthetic%20premium%20publishing%20design&width=400&height=600&seq=hero-book-001&orientation=portrait"
                  />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-charcoal/5 rounded-lg transform rotate-1 -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
