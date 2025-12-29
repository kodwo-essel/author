const testimonials = [
  {
    name: 'Margaret Atwood',
    title: 'Booker Prize-winning Author and Poet',
    quote:
      "John Snow writes with a rare combination of emotional depth and literary precision. Her characters stay with you long after you've turned the final page.",
    image:
      'https://readdy.ai/api/search-image?query=professional%20portrait%20of%20distinguished%20female%20author%20in%20her%20sixties%20with%20gray%20hair%2C%20warm%20smile%2C%20elegant%20clothing%2C%20soft%20studio%20lighting%2C%20literary%20magazine%20style%20photography&width=400&height=500&seq=test1&orientation=portrait',
  },
  {
    name: 'Celeste Ng',
    title: 'New York Times Bestselling Author',
    quote:
      "John's prose is luminous and haunting. She captures the complexity of human relationships with extraordinary sensitivity and insight.",
    image:
      'https://readdy.ai/api/search-image?query=professional%20portrait%20of%20Asian%20American%20female%20author%20in%20her%20forties%2C%20thoughtful%20expression%2C%20contemporary%20style%2C%20natural%20lighting%2C%20literary%20aesthetic&width=400&height=500&seq=test2&orientation=portrait',
  },
  {
    name: 'Colson Whitehead',
    title: 'Pulitzer Prize-winning Author',
    quote:
      "A masterful storyteller who understands the human heart. John Snow's work is essential reading for anyone who believes in the transformative power of literature.",
    image:
      'https://readdy.ai/api/search-image?query=professional%20portrait%20of%20distinguished%20male%20author%20in%20his%20fifties%2C%20confident%20expression%2C%20casual%20elegant%20attire%2C%20soft%20natural%20lighting%2C%20contemporary%20literary%20style&width=400&height=500&seq=test3&orientation=portrait',
  },
  {
    name: 'Ann Patchett',
    title: 'Award-winning Novelist and Essayist',
    quote:
      "John writes with such grace and authenticity. Her novels are a gift to readers seeking stories that challenge and inspire in equal measure.",
    image:
      'https://readdy.ai/api/search-image?query=professional%20portrait%20of%20female%20author%20in%20her%20fifties%20with%20blonde%20hair%2C%20warm%20friendly%20expression%2C%20elegant%20casual%20style%2C%20soft%20lighting%2C%20bookstore%20aesthetic&width=400&height=500&seq=test4&orientation=portrait',
  },
  {
    name: 'Ocean Vuong',
    title: 'Poet and Author',
    quote:
      "John Snow is one of the most important voices in contemporary fiction. Her ability to illuminate the quiet moments that define our lives is unparalleled.",
    image:
      'https://readdy.ai/api/search-image?query=professional%20portrait%20of%20young%20Asian%20male%20author%20in%20his%20thirties%2C%20contemplative%20expression%2C%20modern%20artistic%20style%2C%20natural%20lighting%2C%20contemporary%20literary%20aesthetic&width=400&height=500&seq=test5&orientation=portrait',
  },
];

export default function Testimonials() {
  return (
    <section id="about" className="py-32 bg-cream">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-20 mb-20">
        <h2 className="font-dancing text-6xl md:text-7xl text-charcoal text-center mb-6">
          What Authors Are Saying
        </h2>
        <p className="font-sans text-lg text-charcoal-light text-center max-w-2xl mx-auto">
          Praise from fellow writers and literary voices
        </p>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 lg:px-20 space-y-16">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.name}
            className="flex flex-col md:flex-row items-center gap-12 bg-white rounded-2xl p-12 shadow-lg"
          >
            <div className="flex-shrink-0">
              <div className="w-48 h-60 rounded-lg overflow-hidden shadow-xl">
                <img
                  alt={testimonial.name}
                  className="w-full h-full object-cover object-top"
                  src={testimonial.image}
                />
              </div>
            </div>

            <div className="flex-1">
              <p className="font-serif text-xl md:text-2xl text-charcoal leading-relaxed mb-8 italic">
                "{testimonial.quote}"
              </p>
              <h3 className="font-dancing text-4xl text-charcoal mb-2">
                {testimonial.name}
              </h3>
              <h5 className="font-sans text-sm text-charcoal-light tracking-wider">
                {testimonial.title}
              </h5>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
