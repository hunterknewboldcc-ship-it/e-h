import GalleryImage from '../components/GalleryImage';

const images = [
  { src: 'https://placehold.co/600x400/E8E0D5/3F3F3F?text=Kitchen', caption: '2025 Kitchen – White Oak Ln, River Oaks' },
  { src: 'https://placehold.co/600x400/FFFFFF/3F3F3F?text=Patio', caption: 'Patio Addition – Fort Worth Heights' },
  { src: 'https://placehold.co/600x400/A8B5A2/3F3F3F?text=Bathroom', caption: '2024 Bathroom - Arlington' },
  { src: 'https://placehold.co/600x400/2C3E50/FFFFFF?text=Remodel', caption: 'Whole Home - Benbrook' },
];

export default function GalleryPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="font-heading text-5xl font-bold text-eh-navy">Real Work. Real Homes.</h1>
        <p className="text-lg text-eh-charcoal mt-4 leading-relaxed">
          Scroll through what we’ve built around DFW—River Oaks, Benbrook, Arlington, you name it. Every job’s ours from demo to finish. Like what you see? Text us a pic of your space—we’ll tell you what’s possible.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
        {images.map(image => (
          <GalleryImage key={image.caption} {...image} />
        ))}
      </div>
    </div>
  );
}
