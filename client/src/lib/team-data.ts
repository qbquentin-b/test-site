export interface TeamMember {
  id: string;
  name: string;
  title: string;
  description: string;
  specialties: string[];
  interests: string[];
  image: string;
  isFounder?: boolean;
  experience?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "elodie",
    name: "Élodie Plommet",
    title: "Fondatrice & Ergothérapeute",
    experience: "Diplômée depuis 2008",
    description: "Fondatrice de Som'Ergo, Élodie a créé ce cabinet avec la vision d'offrir un accompagnement personnalisé et bienveillant à chaque étape de la vie. Forte de ses 15 années d'expérience, elle se spécialise dans l'approche holistique de l'ergothérapie.",
    specialties: ["Pédiatrie", "TND", "Ergonomie", "Personnes âgées"],
    interests: ["Innovation thérapeutique", "Formation continue", "Recherche clinique"],
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    isFounder: true
  },
  {
    id: "lea",
    name: "Léa Dupressoir",
    title: "Ergothérapeute",
    description: "Spécialisée dans l'accompagnement des troubles sensoriels et de l'intégration sensorielle chez l'enfant.",
    specialties: ["Troubles sensoriels", "Intégration sensorielle"],
    interests: ["Neurosciences", "Développement sensoriel", "Thérapies innovantes"],
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: "mathilde",
    name: "Mathilde Rouget",
    title: "Ergothérapeute",
    description: "Experte en ergonomie au travail et prévention des troubles musculo-squelettiques.",
    specialties: ["Ergonomie", "TMS"],
    interests: ["Santé au travail", "Prévention", "Aménagement de postes"],
    image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: "noemie",
    name: "Noémie",
    title: "Ergothérapeute",
    description: "Spécialisée dans l'accompagnement des tout-petits (0-5 ans), travaille avec bienveillance sur les TND et les troubles alimentaires pédiatriques.",
    specialties: ["0-5 ans", "TND", "Troubles alimentaires"],
    interests: ["Développement précoce", "Alimentation pédiatrique", "Approche familiale"],
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: "perrine",
    name: "Perrine Decourcelle",
    title: "Ergothérapeute",
    description: "Spécialisée dans la rééducation neurologique et l'accompagnement des personnes âgées.",
    specialties: ["Neurologie", "Seniors"],
    interests: ["Neuroplasticité", "Maintien autonomie", "Technologies d'aide"],
    image: "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: "berenice",
    name: "Bérénice Audureau",
    title: "Ergothérapeute",
    description: "Experte en graphomotricité et troubles des apprentissages chez l'enfant et l'adolescent.",
    specialties: ["Graphomotricité", "Apprentissages"],
    interests: ["Écriture manuelle", "Troubles DYS", "Outils numériques"],
    image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    id: "corinne",
    name: "Corinne Bourgois",
    title: "Ergothérapeute",
    description: "Spécialisée dans l'adaptation du logement et le maintien à domicile des personnes âgées.",
    specialties: ["Adaptation logement", "Domicile"],
    interests: ["Domotique", "Sécurité domicile", "Aide techniques"],
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  }
];
