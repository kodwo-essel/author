import { Link } from 'react-router-dom';

const books = [
  {
    title: 'The Spaces Between Us',
    description:
      'A profound exploration of connection and isolation in modern urban life, following three strangers whose lives intersect in unexpected ways.',
    image:
      'https://readdy.ai/api/search-image?query=contemporary%20literary%20fiction%20book%20cover%20design%20with%20minimalist%20abstract%20watercolor%20art%20in%20muted%20sage%20green%20and%20cream%20tones%20elegant%20serif%20typography%20clean%20simple%20background%20modern%20editorial%20style%20premium%20aesthetic&width=300&height=450&seq=book-cover-001&orientation=portrait',
  },
  {
    title: 'Echoes of Tomorrow',
    description:
      'An intimate portrait of a family navigating loss, memory, and the delicate threads that bind us across generations and time.',
    image:
      'https://readdy.ai/api/search-image?query=elegant%20book%20cover%20with%20soft%20watercolor%20abstract%20design%20in%20warm%20terracotta%20and%20cream%20colors%20sophisticated%20typography%20minimalist%20contemporary%20fiction%20aesthetic%20clean%20simple%20background%20editorial%20design&width=300&height=450&seq=book-cover-002&orientation=portrait',
  },
  {
    title: 'Where Light Remains',
    description:
      'A lyrical journey through grief and healing, as a woman returns to her coastal hometown to confront her past and rediscover herself.',
    image:
      'https://readdy.ai/api/search-image?query=minimalist%20literary%20book%20cover%20featuring%20abstract%20watercolor%20brushstrokes%20in%20soft%20muted%20colors%20sage%20and%20cream%20elegant%20serif%20font%20clean%20contemporary%20design%20simple%20background%20premium%20publishing%20aesthetic&width=300&height=450&seq=book-cover-003&orientation=portrait',
  },
];

export default function FeaturedBooks() {
  return (
    <section id="books" className="py-32 px-6 lg:px-20 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-dancing text-6xl md:text-7xl text-charcoal mb-6">
            Featured Books
          </h2>
          <p className="font-sans text-lg text-charcoal-light max-w-2xl mx-auto">
            Explore my latest novels and discover stories that resonate with the
            human experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {books.map((book) => (
            <article
              key={book.title}
              className="group bg-white border border-primary-100 rounded-xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-6 flex justify-center">
                <div className="w-60 aspect-[2/3] rounded-lg overflow-hidden shadow-lg">
                  <img
                    alt={book.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    src={book.image}
                  />
                </div>
              </div>

              <div className="text-center space-y-4">
                <h3 className="font-serif text-2xl text-charcoal group-hover:text-accent transition-colors duration-300">
                  {book.title}
                </h3>
                <p className="font-sans text-sm text-charcoal-light leading-relaxed line-clamp-3">
                  {book.description}
                </p>
                <Link
                  to="/books"
                  className="inline-block font-sans text-sm text-charcoal underline hover:text-accent transition-colors duration-300 pt-2"
                >
                  Learn More
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
