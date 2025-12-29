export default function ResourceCard({ image, badge, title, description, meta, onDownload }) {
  return (
    <div className="group bg-white rounded-lg overflow-hidden transition-all duration-500 hover:shadow-2xl">
      <div className="relative w-full h-96 overflow-hidden bg-cream">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full">
          <span className="text-xs font-sans font-medium text-charcoal tracking-wider">
            {badge}
          </span>
        </div>
      </div>

      <div className="p-8">
        <h3 className="font-dancing text-3xl text-charcoal mb-4 leading-tight">
          {title}
        </h3>

        <p className="font-sans text-sm text-charcoal-light leading-relaxed mb-6">
          {description}
        </p>

        <div className="flex items-center justify-between mb-6">
          <span className="text-xs text-charcoal-light font-sans">{meta}</span>
        </div>

        <button
          onClick={onDownload}
          className="w-full bg-charcoal text-white font-sans text-sm tracking-wider py-4 rounded-md transition-all duration-300 hover:bg-charcoal-light flex items-center justify-center gap-3"
        >
          <i className="ri-download-2-line text-lg" />
          <span>Download Free</span>
        </button>
      </div>
    </div>
  );
}
