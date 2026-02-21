import Image from 'next/image';

export default function AboutPage() {
  const address = "4928 White Oak Ln, River Oaks, TX 76114";
  const gmapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="font-heading text-5xl font-bold text-eh-navy">E&H Construction – Family-Owned, Fort Worth Proud</h1>
          <div className="text-lg text-eh-charcoal mt-6 space-y-4 leading-relaxed">
            <p>
              We started in River Oaks because we love this area—quiet streets, big yards, folks who value quality.
            </p>
            <p>
              No big corporate fluff. Just us: two brothers, a crew of locals, and a promise—we don’t cut corners.
            </p>
            <p>
              We’ve done roofs, full renos, even that one crazy bathroom with the waterfall shower. License? We keep it current—always check if you’re hiring.
            </p>
            <p className="font-bold">
              Why us? Because your house deserves better than ‘good enough’.
            </p>
            <div className="mt-6">
                <p><span className="font-bold">Address:</span> {address}</p>
                <p><span className="font-bold">Phone:</span> (817) 600-6469</p>
            </div>
          </div>
        </div>
        <div className="w-full h-96">
            <a href={gmapsUrl} target="_blank" rel="noopener noreferrer" className="block w-full h-full bg-eh-gray rounded-lg shadow-lg flex items-center justify-center text-eh-navy">
                <p className="text-center">Click to view map</p>
            </a>
        </div>
      </div>
    </div>
  );
}
