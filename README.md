# BezBez — Portfolio Full-Stack

Portfolio one-page moderne pour un développeur full-stack, construit avec l’App Router, TypeScript, Tailwind CSS et Framer Motion.

## Démarrage

```bash
npm install
cp env.example .env.local
npm run dev
```

Ouvrez ensuite [http://localhost:3000](http://localhost:3000).

## Formulaire de contact

1. Créez un formulaire sur [Formspree](https://formspree.io/).
2. Copiez l’identifiant du formulaire dans `.env.local` :

   ```bash
   NEXT_PUBLIC_FORMSPREE_FORM_ID=votre-identifiant-formspree
   ```

Le formulaire affiche automatiquement les états d’envoi, de succès et d’erreur. Sans identifiant, il invite à configurer Formspree plutôt que d’envoyer vers une fausse adresse.

## Contenu à personnaliser

- Les données de navigation, compétences et projets fictifs se trouvent dans `app/data/portfolio.ts`.
- Les liens, textes et mesures de projets sont centralisés dans ce même fichier.
- Le portrait illustré de remplacement se trouve dans `public/avatar.svg`.
- Les couleurs, typographies, ombres et animations sont définis dans `app/globals.css`.

## Scripts

```bash
npm run dev       # serveur de développement
npm run lint      # vérification ESLint
npm run build     # build de production
npm run start     # servir le build de production
```
