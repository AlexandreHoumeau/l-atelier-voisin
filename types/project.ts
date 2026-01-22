import { SanityImageSource } from "@sanity/image-url";

export type Project = {
    title: string;
    subtitle: string;
    slug: string;
    description: string;
    website: string;
    photos: SanityImageSource[];
    review: {
        quote: string;
        author: string;
    };
};


export const projects: Project[] = [
    {
        title: 'Chez Aimée',
        subtitle: 'Prothésiste Ongulaire — Bordeaux',
        slug: 'chez-aimee',
        description:
            'Développement du site vitrine pour Chez Aimée avec Next.js et déployé sur Vercel. Design épuré et moderne mettant en avant les services proposés et facilitant la prise de rendez-vous en ligne.',
        photos: [
            '/images/projects/chez_aimee_1.png',
            '/images/projects/chez_aimee_2.png',
            '/images/projects/chez_aimee_3.png'
        ],
        website: 'https://chez-aimee.vercel.app/',
        review: {
            quote:
                'Clara et Alexandre ont su capturer exactement ce que je voulais : un site à l’image de mon institut, original, clair et facile à naviguer pour mes clientes.',
            author: 'Aimée — Prothésiste Ongulaire'
        }
    },
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
        website: 'https://pile-xp.com',
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
        website: 'https://alexandre-houmeau.com',
        review: {
            quote:
                'Le nouveau portfolio met vraiment en valeur mes compétences et projets. Le design est épuré et moderne, exactement ce que je recherchais.',
            author: 'Alexandre Houmeau'
        }
    }
];

export default projects;