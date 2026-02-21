export default function ContactPage() {
    return (
        <div className="container mx-auto px-4 py-16">
            <div className="text-center max-w-3xl mx-auto">
                <h1 className="font-heading text-5xl font-bold text-eh-navy">Talk to Us Today</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 items-start">
                <div className="space-y-4 text-lg text-eh-charcoal">
                    <p>
                        <span className="font-bold text-eh-navy">Call or text. We pick up.</span><br />
                        <a href="tel:817-600-6469" className="hover:text-eh-gold">(817) 600-6469</a>
                    </p>
                    <p>
                        <span className="font-bold text-eh-navy">Our Office</span><br />
                        4928 White Oak Ln, River Oaks, TX 76114
                    </p>
                    <p>
                        <span className="font-bold text-eh-navy">Hours</span><br />
                        Mon–Fri 8am–6pm | Sat by appt
                    </p>
                    <p className="italic pt-4">
                        "Fill this out—send a pic if you’ve got one. We’ll reply in under an hour. Or just text: ‘Hey, kitchen remodel—here’s my space.’"
                    </p>
                </div>

                <form className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-bold text-eh-navy">Name</label>
                        <input type="text" id="name" name="name" className="w-full mt-1 p-2 border border-eh-gray rounded-md" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-bold text-eh-navy">Email</label>
                        <input type="email" id="email" name="email" className="w-full mt-1 p-2 border border-eh-gray rounded-md" />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-sm font-bold text-eh-navy">Phone</label>
                        <input type="tel" id="phone" name="phone" className="w-full mt-1 p-2 border border-eh-gray rounded-md" />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-bold text-eh-navy">Message</label>
                        <textarea id="message" name="message" rows={5} className="w-full mt-1 p-2 border border-eh-gray rounded-md"></textarea>
                    </div>
                    <div>
                        <label htmlFor="image" className="block text-sm font-bold text-eh-navy">Have a picture?</label>
                        <input type="file" id="image" name="image" className="w-full mt-1 p-2 border border-eh-gray rounded-md" />
                    </div>
                    <div>
                        <button type="submit" className="w-full bg-eh-gold text-eh-navy font-bold py-3 px-6 rounded-lg text-lg hover:bg-eh-silver">
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
