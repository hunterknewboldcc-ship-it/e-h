import Link from 'next/link';
import Navigation from './Navigation';

const Header = () => {
  return (
    <header className="bg-eh-navy text-eh-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-heading text-eh-gold">
          E&H Construction
        </Link>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
