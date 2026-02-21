import Image from 'next/image';

interface GalleryImageProps {
  src: string;
  caption: string;
}

const GalleryImage: React.FC<GalleryImageProps> = ({ src, caption }) => {
  return (
    <div className="relative group rounded-lg overflow-hidden">
      <Image src={src} alt={caption} width={600} height={400} className="object-cover w-full h-full" />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="text-center text-white">
          <p className="font-bold text-lg">{caption}</p>
          <button className="mt-2 bg-eh-gold text-eh-navy font-bold py-2 px-4 rounded-lg">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default GalleryImage;
