import ResourceCard from "./ResourceCard";

export default function ResourcesPage() {
  const resources = [
    {
      title: "The Quiet Hours - First Chapter",
      badge: "Free Chapter",
      meta: "PDF • 2.4 MB",
      image: "https://readdy.ai/api/search-image?query=elegant%20book%20cover%20design%20with%20soft%20morning%20light%20streaming%20through%20window%20creating%20peaceful%20atmosphere%2C%20minimalist%20aesthetic%20with%20muted%20tones%20and%20gentle%20shadows%2C%20literary%20fiction%20style%20with%20sophisticated%20typography&width=400&height=600&seq=res1&orientation=portrait",
      description:
        "Experience the opening chapter of this haunting exploration of memory and identity. A perfect introduction to the world of The Quiet Hours.",
    },
    {
      title: "Between the Lines - Reading Guide",
      badge: "Reading Guide",
      meta: "PDF • 1.8 MB",
      image: "https://readdy.ai/api/search-image?query=elegant%20reading%20guide%20layout%20with%20open%20book%20and%20handwritten%20notes%20on%20clean%20white%20surface%2C%20soft%20natural%20lighting%2C%20minimalist%20book%20club%20aesthetic%20with%20warm%20neutral%20tones&width=400&height=600&seq=res2&orientation=portrait",
      description:
        "A comprehensive discussion guide featuring thought-provoking questions, character analyses, and themes to explore with your book club.",
    },
    {
      title: "Echoes of Tomorrow - Bonus Story",
      badge: "Bonus Content",
      meta: "PDF • 3.1 MB",
      image: "https://readdy.ai/api/search-image?query=artistic%20book%20cover%20with%20ethereal%20future%20cityscape%20at%20twilight%2C%20soft%20glowing%20lights%20and%20dreamy%20atmosphere%2C%20contemporary%20fiction%20aesthetic%20with%20elegant%20design%20elements&width=400&height=600&seq=res3&orientation=portrait",
      description:
        "An exclusive short story set in the world of Echoes of Tomorrow, revealing untold moments between beloved characters.",
    },
    {
      title: "Writing Process Behind the Scenes",
      badge: "Author Insights",
      meta: "PDF • 4.2 MB",
      image: "https://readdy.ai/api/search-image?query=writer%20workspace%20with%20vintage%20typewriter%20and%20scattered%20manuscript%20pages%2C%20warm%20desk%20lamp%20lighting%2C%20creative%20writing%20atmosphere%20with%20coffee%20cup%20and%20inspiration%20board&width=400&height=600&seq=res4&orientation=portrait",
      description:
        "Discover my creative process with this intimate look at how my novels come to life, including early drafts and inspiration sources.",
    },
    {
      title: "Character Development Workbook",
      badge: "Writing Resource",
      meta: "PDF • 2.9 MB",
      image: "https://readdy.ai/api/search-image?query=elegant%20workbook%20layout%20with%20character%20sketches%20and%20creative%20writing%20notes%2C%20organized%20aesthetic%20with%20soft%20colors%2C%20professional%20writing%20guide%20design&width=400&height=600&seq=res5&orientation=portrait",
      description:
        "For aspiring writers: my personal character development techniques and worksheets used to create complex, memorable characters.",
    },
    {
      title: "Curated Reading List",
      badge: "Reading List",
      meta: "PDF • 1.2 MB",
      image: "https://readdy.ai/api/search-image?query=beautifully%20arranged%20stack%20of%20contemporary%20fiction%20books%20on%20wooden%20surface%2C%20soft%20natural%20light%2C%20cozy%20reading%20nook%20aesthetic%20with%20warm%20tones&width=400&height=600&seq=res6&orientation=portrait",
      description:
        "My personal recommendations of contemporary fiction that has inspired and influenced my writing journey over the years.",
    },
  ];

  return (
    <main className="pt-32 pb-20">
      {/* Header */}
      <header className="text-center px-6 lg:px-20 mb-20">
        <nav className="text-xs text-charcoal-light mb-6">
          <a href="/" className="hover:text-charcoal transition-colors">Home</a>
          <span className="mx-2">/</span>
          <span>Free Resources</span>
        </nav>
        <h1 className="font-dancing text-6xl md:text-7xl text-charcoal mb-8">
          Free Books & Resources
        </h1>
        <p className="font-sans text-lg text-charcoal-light max-w-2xl mx-auto leading-relaxed">
          Download exclusive content, reading guides, and bonus chapters to deepen your journey through my stories
        </p>
      </header>

      {/* Resources Grid */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {resources.map((resource) => (
            <ResourceCard
              key={resource.title}
              {...resource}
              onDownload={() => console.log(`Downloading: ${resource.title}`)}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-32 text-center max-w-3xl mx-auto">
          <h2 className="font-dancing text-5xl md:text-6xl text-charcoal mb-6">
            Want More Exclusive Content?
          </h2>
          <p className="font-sans text-lg text-charcoal-light mb-8 leading-relaxed">
            Join my newsletter to receive early access to new releases, behind-the-scenes content, and exclusive bonus materials delivered directly to your inbox.
          </p>
          <a
            href="/#newsletter"
            className="inline-block bg-accent text-white font-sans text-sm tracking-wider px-10 py-4 rounded-md transition-all duration-300 hover:bg-accent-dark"
          >
            Subscribe to Newsletter
          </a>
        </div>
      </div>
    </main>
  );
}
