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
    {
        title: 'Portfolio Alexandre Houmeau',
        subtitle: 'Développeur web',
        slug: 'ah-portfolio',
        description:
            'Refonte complète du portfolio personnel. Design sur mesure et développement avec Next.js pour une performance optimale et une expérience utilisateur fluide.',
        photos: [
            '/images/projects/ah_1.png',
            '/images/projects/ah_2.png',
            '/images/projects/ah_3.png'
        ],
        website: 'https://alexandre-houmeau.fr',
        review: {
            quote:
                'Le nouveau portfolio met vraiment en valeur mes compétences et projets. Le design est épuré et moderne, exactement ce que je recherchais.',
            author: 'Alexandre Houmeau'
        }
    }
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