import { Post } from "../types/blogType"


export const posts: Post[] = [
  {
    slug: "thinking-in-nextjs",
    title: "Penser en Next.js : au-delà de React",
    excerpt:
      "Next.js n’est pas juste un framework — c’est une manière de penser la structure, la performance et l’expérience développeur.",
    content: `
      Next.js t’oblige à raisonner en termes de *responsabilité côté serveur et côté client*.
      Ce n’est pas seulement un outil, c’est une philosophie : comprendre où ton code s’exécute, comment optimiser les temps de rendu, et comment organiser ton app pour qu’elle respire la clarté.
      Quand tu maîtrises Next.js, tu ne construis pas juste des pages : tu conçois des expériences web complètes, performantes et maintenables.`,
    date: "2025-10-02",
    tag: "Next.js",
    image: "/next-js-vs-react-developer-experience.png",
  },
  {
    slug: "react-hooks-revolution",
    title: "Les hooks React : une révolution douce",
    excerpt:
      "useState, useEffect, useRef, useReducer... ces mots magiques qui ont redéfini la façon dont on écrit du React moderne.",
    content: `
      Les hooks ne sont pas juste une nouveauté : c’est une manière plus naturelle d’écrire du React.
      Ils t’invitent à découper ton code en morceaux logiques et réutilisables. Fini les classes interminables, bienvenue aux fonctions élégantes et composables.
      Maîtriser les hooks, c’est comme apprendre à respirer dans l’écosystème React.`,
    date: "2025-09-28",
    tag: "React",
    image: "/next-js-vs-react-developer-experience.png",
  },
  {
    slug: "mastering-usetransition",
    title: "useTransition : fluidité et UX magique",
    excerpt:
      "Quand tu veux une interface fluide même pendant les transitions, useTransition devient ton meilleur ami.",
    content: `
      Ce hook est un bijou. Il te permet d’effectuer des mises à jour sans bloquer ton interface.
      Tu peux naviguer, filtrer, ou charger des données tout en gardant ton UI réactive.
      C’est littéralement le secret derrière les interfaces “smooth” que tu vois sur les apps pro.`,
    date: "2025-09-20",
    tag: "React",
    image: "/next-js-vs-react-developer-experience.png",
  },
  {
    slug: "frontend-mindset",
    title: "Le mindset d’un vrai dév frontend",
    excerpt:
      "Ce n’est pas juste du HTML et du CSS. C’est une mentalité. Comprendre l’utilisateur, anticiper son besoin et livrer la clarté.",
    content: `
      Être frontend, c’est penser à la fois design, accessibilité et performance.
      C’est savoir qu’un pixel mal placé peut casser une expérience.  
      C’est sentir la cohérence entre ton code et l’émotion de l’utilisateur.
      Bref : c’est être à la frontière entre l’humain et la machine.`,
    date: "2025-09-10",
    tag: "Philosophie",
    image: "/next-js-vs-react-developer-experience.png",
  },
  {
    slug: "building-without-backend",
    title: "Créer un projet sans backend : l’art du mock",
    excerpt:
      "Pas besoin d’un serveur pour créer un projet réaliste. Simule tes données, teste tes flux, et fais briller ton UI.",
    content: `
      Le secret pour progresser vite, c’est de ne pas attendre le backend.  
      Tu veux tester une interface de blog, un tableau de bord ou une app e-commerce ? Mocke tes données.
      Avec un simple tableau d’objets et un peu de logique, tu peux tout simuler : filtrage, tri, recherche, pagination.
      L’important, c’est de pratiquer la structure. Le backend viendra plus tard.`,
    date: "2025-09-03",
    tag: "Frontend",
    image: "/next-js-vs-react-developer-experience.png",
  },
  {
    slug: "from-frontend-to-ai",
    title: "Du frontend au machine learning : un pont d’avenir",
    excerpt:
      "Comprendre le web, c’est comprendre les données. Et les données, c’est le carburant de l’IA.",
    content: `
      Beaucoup de développeurs frontend ignorent à quel point leur travail prépare le terrain du machine learning.
      Quand tu manipules des APIs, que tu optimises des flux de données ou que tu structures des composants, tu penses déjà “data”.
      Le futur appartiendra à ceux qui sauront fusionner ces deux mondes : la beauté du frontend et la puissance de l’intelligence artificielle.`,
    date: "2025-08-25",
    tag: "Machine Learning",
    image: "/next-js-vs-react-developer-experience.png",
  }
];
