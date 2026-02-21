import Link from 'next/link';
import Image from 'next/image';

interface ServiceProps {
  title: string;
  description: string[];
  beforeImage: string;
  afterImage: string;
}

const Service: React.FC<ServiceProps> = ({ title, description, beforeImage, afterImage }) => {
  return (
    <section className="py-12 border-b border-eh-gray">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="grid grid-cols-2 gap-4">
            <div>
                <Image src={beforeImage} alt={`${title} before`} width={400} height={400} className="rounded-lg shadow-md" />
                <p className="text-center mt-2 text-sm text-eh-charcoal">Before</p>
            </div>
            <div>
                <Image src={afterImage} alt={`${title} after`} width={400} height={400} className="rounded-lg shadow-md" />
                <p className="text-center mt-2 text-sm text-eh-charcoal">After</p>
            </div>
          </div>
          <div>
            <h2 className="font-heading text-4xl font-bold text-eh-navy mb-4">{title}</h2>
            <ul className="list-disc list-inside text-lg text-eh-charcoal space-y-2">
                {description.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
            <Link href={`/contact?service=${title}`} className="mt-6 inline-block bg-eh-gold text-eh-navy font-bold py-3 px-6 rounded-lg text-lg hover:bg-eh-silver">
                Quote My {title}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
