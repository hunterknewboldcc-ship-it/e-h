import Service from '../components/Service';

const services = [
    {
        title: 'Kitchens',
        description: [
            'Island designs that actually work',
            'Soft-close cabinets, quartz tops',
            'Lighting that makes cooking fun',
            'From farmhouse to modern—your call',
            'Before: cramped, yellowed laminate. After: bright, open, yours.'
        ],
        beforeImage: 'https://placehold.co/400x400/E8E0D5/3F3F3F?text=Before',
        afterImage: 'https://placehold.co/400x400/FFFFFF/3F3F3F?text=After'
    },
    {
        title: 'Bathrooms',
        description: [
            'Showers, vanities, tile—done right.',
            'No leaks, no grout drama.'
        ],
        beforeImage: 'https://placehold.co/400x400/E8E0D5/3F3F3F?text=Before',
        afterImage: 'https://placehold.co/400x400/FFFFFF/3F3F3F?text=After'
    },
    {
        title: 'Whole-Home Remodels',
        description: [
            'Complete home transformations.',
            'From concept to completion.',
            'We handle everything.'
        ],
        beforeImage: 'https://placehold.co/400x400/E8E0D5/3F3F3F?text=Before',
        afterImage: 'https://placehold.co/400x400/FFFFFF/3F3F3F?text=After'
    },
    {
        title: 'Flooring',
        description: [
            'Hardwood, laminate, tile, and more.',
            'Expert installation.',
            'Durable and beautiful.'
        ],
        beforeImage: 'https://placehold.co/400x400/E8E0D5/3F3F3F?text=Before',
        afterImage: 'https://placehold.co/400x400/FFFFFF/3F3F3F?text=After'
    },
    {
        title: 'Additions & Patios',
        description: [
            'Expand your living space.',
            'Custom additions and patios.',
            'Seamless integration with your home.'
        ],
        beforeImage: 'https://placehold.co/400x400/E8E0D5/3F3F3F?text=Before',
        afterImage: 'https://placehold.co/400x400/FFFFFF/3F3F3F?text=After'
    },
    {
        title: 'Roofing & Exteriors',
        description: [
            'Protection from the elements.',
            'High-quality materials.',
            'Expert installation and repairs.'
        ],
        beforeImage: 'https://placehold.co/400x400/E8E0D5/3F3F3F?text=Before',
        afterImage: 'https://placehold.co/400x400/FFFFFF/3F3F3F?text=After'
    },
]

export default function ServicesPage() {
    return (
        <div>
            <h1 className="font-heading text-5xl font-bold text-eh-navy text-center py-10">Our Services</h1>
            {services.map(service => <Service key={service.title} {...service} />)}
        </div>
    )
}
