// types/service.ts
export type Feature = {
  label: string
  included: boolean
}

export type Service = {
  id: string
  number: string
  title: string
  tagline: string
  price: string
  description: string
  features: string[]
  deliverables: string[]
  duration: string
  allFeatures: Feature[]
}

export const services: Service[] = [
  {
    id: 'essentiel',
    number: '01',
    title: 'Essentiel',
    tagline: 'Pour démarrer en ligne',
    price: '1 200€',
    description:
      "Le minimum vital pour exister sur le web. Un site simple, efficace et professionnel qui présente votre activité. Parfait pour les petits commerces qui veulent se lancer.",
    features: [
      'Design épuré et moderne',
      '3 à 5 pages (Accueil, Services, À propos, Contact)',
      'Responsive (mobile, tablette, desktop)',
      'Formulaire de contact',
      'Optimisation SEO de base',
      'Hébergement 1 an offert'
    ],
    deliverables: [
      "Site complet prêt à l'emploi",
      'Formation vidéo (1h)',
      "Guide d'utilisation simple",
      'Support email 1 mois'
    ],
    duration: '2 semaines',
    allFeatures: [
      { label: 'Design sur-mesure', included: false },
      { label: 'Jusqu’à 10 pages', included: false },
      { label: 'E-commerce intégré', included: false },
      { label: 'Responsive design', included: true },
      { label: 'Formulaire de contact', included: true },
      { label: 'Optimisation SEO de base', included: true },
      { label: 'Support prioritaire', included: false },
      { label: 'Formation incluse', included: true },
      { label: 'Hébergement offert 1 an', included: true },
      { label: 'Maintenance continue', included: false }
    ]
  },
  {
    id: 'premium',
    number: '02',
    title: 'Premium',
    tagline: 'Pour se démarquer',
    price: '2 400€',
    description:
      "Un site plus complet avec des fonctionnalités avancées. Idéal pour les commerces qui veulent vraiment marquer leur présence en ligne et faciliter la vie de leurs clients.",
    features: [
      'Design 100% sur-mesure',
      '6 à 10 pages personnalisées',
      'Galerie photos / Portfolio',
      'Google Maps intégré',
      'Formulaire de contact avancé',
      'Optimisation SEO poussée',
      'Hébergement 1 an offert',
      'Certificat SSL sécurisé'
    ],
    deliverables: [
      'Site complet et optimisé',
      'Formation en présentiel (2h)',
      'Documentation complète',
      'Support prioritaire 2 mois',
      '2 modifications gratuites après livraison'
    ],
    duration: '3-4 semaines',
    allFeatures: [
      { label: 'Design sur-mesure', included: true },
      { label: 'Jusqu’à 10 pages', included: true },
      { label: 'E-commerce intégré', included: false },
      { label: 'Responsive design', included: true },
      { label: 'Formulaire de contact', included: true },
      { label: 'Optimisation SEO de base', included: true },
      { label: 'Support prioritaire', included: true },
      { label: 'Formation incluse', included: true },
      { label: 'Hébergement offert 1 an', included: true },
      { label: 'Maintenance continue', included: false }
    ]
  },
  {
    id: 'shop',
    number: '03',
    title: 'Shop',
    tagline: 'Pour vendre en ligne',
    price: '3 200€',
    description:
      "Une boutique en ligne simple mais complète. Système de paiement sécurisé, gestion de vos produits, et tout ce qu'il faut pour commencer à vendre sur le web sans complications.",
    features: [
      'Design e-commerce professionnel',
      'Jusqu’à 50 produits',
      'Paiement en ligne sécurisé (Stripe)',
      'Panier et tunnel de commande',
      'Gestion simple des commandes',
      'Suivi des stocks basique',
      'Optimisation SEO e-commerce',
      'Hébergement 1 an offert'
    ],
    deliverables: [
      'Boutique en ligne fonctionnelle',
      'Formation approfondie (3h)',
      'Vidéos tutos de gestion',
      'Documentation e-commerce',
      'Support prioritaire 3 mois',
      'Ajout de 10 produits offert'
    ],
    duration: '4-5 semaines',
    allFeatures: [
      { label: 'Design sur-mesure', included: true },
      { label: 'Jusqu’à 10 pages', included: true },
      { label: 'E-commerce intégré', included: true },
      { label: 'Responsive design', included: true },
      { label: 'Formulaire de contact', included: true },
      { label: 'Optimisation SEO de base', included: true },
      { label: 'Support prioritaire', included: true },
      { label: 'Formation incluse', included: true },
      { label: 'Hébergement offert 1 an', included: true },
      { label: 'Maintenance continue', included: true }
    ]
  }
]

// Helper function pour récupérer un service par ID
export const getServiceById = (id: string): Service | undefined => {
  return services.find(service => service.id === id)
}

// Helper function pour récupérer les prix
export const getServicePrices = () => {
  return services.map(service => ({
    id: service.id,
    title: service.title,
    price: service.price
  }))
}
