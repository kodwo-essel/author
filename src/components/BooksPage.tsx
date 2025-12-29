import { Link } from 'react-router-dom';

interface Book {
  id: string;
  title: string;
  category: string;
  description: string;
  fullDescription?: string;
  image: string;
  badge?: string;
  layout: 'featured' | 'compact';
  purchaseLinks?: {
    name: string;
    icon: string;
    url: string;
  }[];
}

const books: Book[] = [
  {
    id: 1,
    title: 'The Spaces Between Us',
    category: 'Contemporary Fiction',
    description:
      'A profound exploration of connection and isolation in modern urban life, following three strangers whose lives intersect in unexpected ways.',
    fullDescription:
      'A profound exploration of connection and isolation in modern urban life, following three strangers whose lives intersect in unexpected ways. Through their intertwined stories, John examines how we navigate loneliness, build relationships, and find meaning in a fragmented world.',
    image:
      'https://readdy.ai/api/search-image?query=contemporary%20literary%20fiction%20book%20cover%20design%20with%20minimalist%20abstract%20watercolor%20art%20in%20muted%20sage%20green%20and%20cream%20tones%20elegant%20serif%20typography%20clean%20simple%20background%20modern%20editorial%20style%20premium%20aesthetic&width=400&height=600&seq=book-detail-001&orientation=portrait',
    badge: 'New Release',
    layout: 'featured',
    purchaseLinks: [
      { name: 'Amazon', icon: 'ri-amazon-line', url: '#' },
      { name: 'Bookshop', icon: 'ri-book-line', url: '#' },
      { name: 'Barnes & Noble', icon: 'ri-store-line', url: '#' },
    ],
  },
  {
    id: 2,
    title: 'Echoes of Tomorrow',
    category: 'Contemporary Fiction',
    description:
      'An intimate portrait of a family navigating loss, memory, and the delicate threads that bind us across generations and time.',
    image:
      'https://readdy.ai/api/search-image?query=elegant%20book%20cover%20with%20soft%20watercolor%20abstract%20design%20in%20warm%20terracotta%20and%20cream%20colors%20sophisticated%20typography%20minimalist%20contemporary%20fiction%20aesthetic%20clean%20simple%20background%20editorial%20design&width=350&height=525&seq=book-detail-002&orientation=portrait',
    layout: 'compact',
  },
  {
    id: 3,
    title: 'Where Light Remains',
    category: 'Contemporary Fiction',
    description:
      'A lyrical journey through grief and healing, as a woman returns to her coastal hometown to confront her past and rediscover herself.',
    image:
      'https://readdy.ai/api/search-image?query=minimalist%20literary%20book%20cover%20featuring%20abstract%20watercolor%20brushstrokes%20in%20soft%20muted%20colors%20sage%20and%20cream%20elegant%20serif%20font%20clean%20contemporary%20design%20simple%20background%20premium%20publishing%20aesthetic&width=350&height=525&seq=book-detail-003&orientation=portrait',
    layout: 'compact',
  },
  {
    id: 4,
    title: 'Beneath the Surface',
    category: 'Contemporary Fiction',
    description:
      'A compelling narrative about identity, secrets, and the courage it takes to live authentically in a world of expectations.',
    fullDescription:
      'A compelling narrative about identity, secrets, and the courage it takes to live authentically in a world of expectations. John weaves a story of self-discovery that resonates with anyone who has ever felt the weight of hiding their true self.',
    image:
      'https://readdy.ai/api/search-image?query=sophisticated%20book%20cover%20design%20with%20abstract%20watercolor%20elements%20in%20muted%20earth%20tones%20cream%20and%20sage%20minimalist%20contemporary%20aesthetic%20elegant%20typography%20clean%20simple%20background%20literary%20fiction%20style&width=400&height=600&seq=book-detail-004&orientation=portrait',
    badge: 'Award Winner',
    layout: 'featured',
    purchaseLinks: [
      { name: 'Amazon', icon: 'ri-amazon-line', url: '#' },
      { name: 'Bookshop', icon: 'ri-book-line', url: '#' },
      { name: 'Indie Bound', icon: 'ri-store-2-line', url: '#' },
    ],
  },
  {
    id: 5,
    title: 'The Weight of Words',
    category: 'Contemporary Fiction',
    description:
      'A powerful exploration of communication, misunderstanding, and the profound impact our words have on those we love most.',
    image:
      'https://readdy.ai/api/search-image?query=minimalist%20book%20cover%20with%20soft%20abstract%20watercolor%20design%20in%20warm%20neutral%20tones%20cream%20terracotta%20elegant%20serif%20typography%20contemporary%20literary%20fiction%20clean%20simple%20background%20editorial%20aesthetic&width=350&height=525&seq=book-detail-005&orientation=portrait',
    layout: 'compact',
  },
  {
    id: 6,
    title: 'Fragments of Home',
    category: 'Contemporary Fiction',
    description:
      'A moving story about belonging, displacement, and what it means to find home in an increasingly mobile and disconnected world.',
    image:
      'https://readdy.ai/api/search-image?query=elegant%20literary%20book%20cover%20featuring%20abstract%20minimalist%20watercolor%20art%20in%20soft%20muted%20sage%20and%20cream%20colors%20sophisticated%20typography%20clean%20contemporary%20design%20simple%20background%20premium%20aesthetic&width=350&height=525&seq=book-detail-006&orientation=portrait',
    layout: 'compact',
  },
];

export default function BooksPage() {
  return (
    <main className="pt-32 pb-20">
      <header className="text-center px-6 lg:px-20 mb-20">
        <nav className="text-xs text-charcoal-light mb-6">
          <Link to="/" className="hover:text-charcoal transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span>Books</span>
        </nav>
        <h1 className="font-dancing text-6xl md:text-7xl text-charcoal mb-6">
          My Books
        </h1>
        <p className="font-sans text-lg text-charcoal-light max-w-2xl mx-auto leading-relaxed">
          A collection of contemporary fiction exploring the depths of human
          experience, connection, and the search for meaning in our modern world
        </p>
      </header>

      <section className="px-6 lg:px-20">
        <div className="max-w-[1200px] mx-auto">
          <div className="space-y-10">
            {books.map((book) =>
              book.layout === 'featured' ? (
                <article
                  key={book.id}
                  className="bg-white border border-primary-100 rounded-xl p-8 md:p-12 shadow-sm hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12">
                    <div className="md:col-span-2 flex justify-center md:justify-start">
                      <div className="relative w-full max-w-sm aspect-[2/3] rounded-lg overflow-hidden shadow-xl">
                        <img
                          alt={book.title}
                          className="w-full h-full object-cover object-top"
                          src={book.image}
                        />
                        {book.badge && (
                          <div className="absolute top-4 right-4 bg-accent text-white text-xs uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg">
                            {book.badge}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="md:col-span-3 flex flex-col justify-center space-y-6">
                      <div>
                        <p className="text-xs uppercase tracking-widest text-accent mb-3">
                          {book.category}
                        </p>
                        <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-4">
                          {book.title}
                        </h2>
                        <p className="font-sans text-base md:text-lg text-charcoal-light leading-relaxed">
                          {book.fullDescription || book.description}
                        </p>
                      </div>

                      {book.purchaseLinks && (
                        <div className="flex flex-wrap gap-3">
                          {book.purchaseLinks.map((link) => (
                            <a
                              key={link.name}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 bg-charcoal text-white font-sans text-sm px-6 py-3 rounded-lg hover:bg-charcoal-light transition-colors duration-300 whitespace-nowrap"
                            >
                              <i className={`${link.icon} text-lg`}></i>
                              <span>{link.name}</span>
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              ) : (
                <article
                  key={book.id}
                  className="bg-white border border-primary-100 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex flex-col items-center text-center space-y-6">
                    <div className="w-full max-w-xs aspect-[2/3] rounded-lg overflow-hidden shadow-lg">
                      <img
                        alt={book.title}
                        className="w-full h-full object-cover object-top"
                        src={book.image}
                      />
                    </div>

                    <div className="space-y-4 max-w-md">
                      <h3 className="font-serif text-2xl md:text-3xl text-charcoal">
                        {book.title}
                      </h3>
                      <p className="font-sans text-sm md:text-base text-charcoal-light leading-relaxed">
                        {book.description}
                      </p>
                      <a
                        href="#"
                        className="inline-flex items-center justify-center border-2 border-charcoal text-charcoal font-sans text-sm tracking-wider px-8 py-3 rounded-lg hover:bg-charcoal hover:text-white transition-all duration-300 whitespace-nowrap"
                      >
                        View Details
                      </a>
                    </div>
                  </div>
                </article>
              )
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
