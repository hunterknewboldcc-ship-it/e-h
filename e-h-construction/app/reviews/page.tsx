import Review from '../components/Review';
import Link from 'next/link';

const reviews = [
  { text: 'They turned our 80s kitchen into something out of HGTV—on time, no mess.', author: 'J.M., Benbrook' },
  { text: 'Detail work was spot-on. No sloppy grout or crooked cabinets.', author: 'S.R., Arlington' },
  { text: 'Best price we got—didn’t skimp on quality.', author: 'T.L., Fort Worth' },
];

export default function ReviewsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="font-heading text-5xl font-bold text-eh-navy">What Folks Say</h1>
        <p className="text-lg text-eh-charcoal mt-4 italic">
          (We pull these live—stars don’t lie.)
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {reviews.map((review, index) => (
          <Review key={index} {...review} />
        ))}
      </div>

      <div className="text-center mt-16">
        <Link href="https://www.angi.com" target="_blank" rel="noopener noreferrer" className="text-lg text-eh-navy hover:text-eh-gold font-bold">
          See More on Angi
        </Link>
        <span className="mx-2">/</span>
        <Link href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="text-lg text-eh-navy hover:text-eh-gold font-bold">
          See More on Google
        </Link>
      </div>
    </div>
  );
}
