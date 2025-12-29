import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white pt-32 pb-20">
      {/* Hero */}
      <header className="text-center px-6 lg:px-20 mb-20">
        <nav className="text-xs text-charcoal-light mb-6">
          <Link to="/" className="hover:text-charcoal transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span>About</span>
        </nav>
        <h1 className="font-dancing text-6xl md:text-7xl text-charcoal mb-6">
          About
        </h1>
        <p className="font-sans text-lg text-charcoal-light max-w-2xl mx-auto leading-relaxed">
          Crafting stories that explore the human condition with empathy, depth, and literary grace
        </p>
      </header>

      {/* About Content */}
      <section className="py-20 px-6 lg:px-20">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left column */}
            <div className="lg:col-span-2 space-y-8">
              <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://readdy.ai/api/search-image?query=professional%20editorial%20portrait%20photograph%20of%20elegant%20female%20author%20in%20her%20forties%20wearing%20sophisticated%20neutral%20clothing%20sitting%20in%20bright%20natural%20light%20near%20window%20with%20books%20warm%20inviting%20atmosphere%20literary%20aesthetic%20soft%20focus%20background%20contemporary%20professional%20headshot&width=500&height=650&seq=author-portrait-001&orientation=portrait"
                  alt="John Snow"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div className="flex justify-center gap-4">
                <a href="#" aria-label="Instagram" className="w-12 h-12 flex items-center justify-center border-2 border-accent text-accent rounded-full hover:bg-accent hover:text-white transition-all duration-300">
                  <i className="ri-instagram-line text-xl" />
                </a>
                <a href="#" aria-label="Twitter" className="w-12 h-12 flex items-center justify-center border-2 border-accent text-accent rounded-full hover:bg-accent hover:text-white transition-all duration-300">
                  <i className="ri-twitter-x-line text-xl" />
                </a>
                <a href="#" aria-label="Goodreads" className="w-12 h-12 flex items-center justify-center border-2 border-accent text-accent rounded-full hover:bg-accent hover:text-white transition-all duration-300">
                  <i className="ri-book-2-line text-xl" />
                </a>
                <a href="#" aria-label="TikTok" className="w-12 h-12 flex items-center justify-center border-2 border-accent text-accent rounded-full hover:bg-accent hover:text-white transition-all duration-300">
                  <i className="ri-tiktok-line text-xl" />
                </a>
              </div>
            </div>

            {/* Right column */}
            <div className="lg:col-span-3 space-y-6">
              <p className="font-sans text-lg md:text-xl text-charcoal-light leading-loose">
                John Snow is an award-winning author whose contemporary fiction has captivated readers around the world. Her novels explore the intricate landscapes of human relationships, identity, and the search for belonging in our modern age.
              </p>

              <p className="font-sans text-base md:text-lg text-charcoal-light leading-relaxed">
                Born and raised in New York City, John developed a deep fascination with the stories hidden within everyday moments. After earning her MFA in Creative Writing from Columbia University, she spent several years working as a literary editor before dedicating herself full-time to writing fiction. Her debut novel, "Where Light Remains," was published to critical acclaim and won the National Book Critics Circle Award for Fiction.
              </p>

              <p className="font-sans text-base md:text-lg text-charcoal-light leading-relaxed">
                John's work has been featured in The New York Times, The Guardian, and NPR's Fresh Air. Her novels have been translated into twenty-three languages and have appeared on bestseller lists internationally. She is known for her lyrical prose, deeply drawn characters, and her ability to illuminate the universal truths within intimate personal stories.
              </p>

              <p className="font-sans text-base md:text-lg text-charcoal-light leading-relaxed">
                When she's not writing, John teaches creative writing workshops and serves as a mentor for emerging writers through various literary organizations. She is passionate about fostering diverse voices in contemporary literature and believes in the transformative power of storytelling to build empathy and understanding across cultures and experiences.
              </p>

              <blockquote className="border-l-4 border-accent pl-6 my-10 italic">
                <p className="font-serif text-2xl text-charcoal leading-relaxed">
                  "I write to understand what it means to be human—to capture the moments of connection, loss, and transformation that define our lives."
                </p>
              </blockquote>

              <p className="font-sans text-base md:text-lg text-charcoal-light leading-relaxed">
                John currently lives in Brooklyn with her partner and their rescue dog, Luna. She is working on her fourth novel, which explores themes of memory, family legacy, and the stories we tell ourselves about who we are.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Writing Themes */}
      <section className="py-24 px-6 lg:px-20 bg-primary-50">
        <div className="max-w-[1000px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl text-charcoal">Writing Themes</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="bg-white rounded-xl p-10 text-center space-y-4 hover:shadow-lg transition-shadow duration-300">
              <div className="text-accent text-4xl">
                <i className="ri-heart-line" />
              </div>
              <h3 className="font-serif text-2xl text-charcoal">Human Connection</h3>
              <p className="font-sans text-sm text-charcoal-light leading-relaxed">
                Exploring the bonds that unite us, the relationships that shape us, and the profound impact of authentic connection in an increasingly disconnected world.
              </p>
            </article>

            <article className="bg-white rounded-xl p-10 text-center space-y-4 hover:shadow-lg transition-shadow duration-300">
              <div className="text-accent text-4xl">
                <i className="ri-compass-line" />
              </div>
              <h3 className="font-serif text-2xl text-charcoal">Identity & Belonging</h3>
              <p className="font-sans text-sm text-charcoal-light leading-relaxed">
                Examining the journey of self-discovery, the search for home, and what it means to find your place in a complex and ever-changing society.
              </p>
            </article>

            <article className="bg-white rounded-xl p-10 text-center space-y-4 hover:shadow-lg transition-shadow duration-300">
              <div className="text-accent text-4xl">
                <i className="ri-leaf-line" />
              </div>
              <h3 className="font-serif text-2xl text-charcoal">Transformation & Growth</h3>
              <p className="font-sans text-sm text-charcoal-light leading-relaxed">
                Capturing moments of change, resilience in the face of adversity, and the courage it takes to evolve into who we are meant to become.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
