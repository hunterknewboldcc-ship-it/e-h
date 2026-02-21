const Footer = () => {
  return (
    <footer className="bg-eh-navy text-eh-white p-4 mt-8">
      <div className="container mx-auto text-center">
        <p>© 2026 E&H Construction | River Oaks, TX</p>
        <p>(817) 600-6469 | @ehconstruction_ | Licensed & Insured</p>
        <div className="flex justify-center space-x-4">
            <a href="/privacy-policy">Privacy</a>
            <a href="/terms-of-service">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
