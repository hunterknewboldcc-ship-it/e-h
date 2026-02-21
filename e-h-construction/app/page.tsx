import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <section className="text-center py-20">
        <h1 className="font-heading text-5xl font-bold text-eh-navy">
          Your DFW Home, Rebuilt Right
        </h1>
        <p className="text-xl text-eh-charcoal mt-4">
          Custom remodels. No shortcuts. River Oaks to Dallas.
        </p>
        <Link href="/contact" className="mt-8 inline-block bg-eh-gold text-eh-navy font-bold py-4 px-8 rounded-lg text-lg hover:bg-eh-silver">
          Get Your Free Quote
        </Link>
      </section>

      <section className="bg-eh-gray py-8">
        <div className="text-center">
            <p className="text-2xl font-bold text-eh-navy">Text or Call Now – We Answer Fast</p>
            <p className="text-4xl font-heading text-eh-navy mt-2">(817) 600-6469</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-4xl font-bold text-eh-navy mb-6">From Dated to Dream</h2>
          <p className="text-lg text-eh-charcoal leading-relaxed">
            E&H Construction turns Fort Worth houses into homes people actually want to live in. We do kitchens, baths, floors, additions—everything under one roof. No subs, no surprises. Just solid work, on time, on budget.
          </p>
          <p className="text-lg text-eh-charcoal leading-relaxed mt-4">
            Ready? Let’s talk.
          </p>
        </div>
      </section>
    </div>
  );
}
