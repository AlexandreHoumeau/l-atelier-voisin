export type Project = {
    title: string;
    subtitle: string;
    slug: string;
    description: string;
    photos: string[]; // paths relative to project root, e.g. public/images/project/[slug]_1.jpg
    website: string;
    review: {
        quote: string;
        author: string;
    };
};

export const projects: Project[] = [
    {
        title: 'PILE.XP',
        subtitle: 'Agence d’architecture',
        slug: 'pile_xp',
        description:
            'Création du site internet de bout en bout. Mise à disposition d’une base de donnée pour modification. Site dynamique avec next.js et gestion de contenu avec Sanity.io.',
        photos: [
            '/images/projects/pile_xp_1.png',
            '/images/projects/pile_xp_2.png',
            '/images/projects/pile_xp_3.png'
        ],
        website: 'https://ateliervoisin.com/maison-lierre',
        review: {
            quote:
                "Superbe travail ! Le site reflète parfaitement l'identité de notre agence et la collaboration a été fluide et agréable du début à la fin.",
            author: 'Charlotte & Arthur'
        }
    },
    // {
    //     title: 'Atelier Nautique',
    //     slug: 'atelier-nautique',
    //     description:
    //         'A compact coastal workshop and studio redesigned for boat maintenance and small-scale fabrication, with durable finishes and maximised storage.',
    //     photos: [
    //         '/public/images/project/atelier-nautique_1.jpg',
    //         '/public/images/project/atelier-nautique_2.jpg',
    //         '/public/images/project/atelier-nautique_3.jpg'
    //     ],
    //     website: 'https://ateliervoisin.com/atelier-nautique',
    //     review: {
    //         quote:
    //             'Efficient, practical and beautifully detailed — the new workshop has transformed how we work and host clients.',
    //         author: 'Marc Lefèvre'
    //     }
    // },
    // {
    //     title: 'Loft Atelier',
    //     slug: 'loft-atelier',
    //     description:
    //         'Conversion of an industrial loft into a flexible live-work space that balances open communal areas with private studios and thoughtful acoustics.',
    //     photos: [
    //         '/public/images/project/loft-atelier_1.jpg',
    //         '/public/images/project/loft-atelier_2.jpg',
    //         '/public/images/project/loft-atelier_3.jpg'
    //     ],
    //     website: 'https://ateliervoisin.com/loft-atelier',
    //     review: {
    //         quote:
    //             'They delivered a space that feels generous and calm — perfect for creative work and everyday living.',
    //         author: 'Sophie Martin'
    //     }
    // }
];

export default projects;