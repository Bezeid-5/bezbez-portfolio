# Mohameden Debagh — Portfolio Full-Stack

Portfolio one-page de Mohameden Debagh, construit avec Next.js App Router, TypeScript, Tailwind CSS et Framer Motion.

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

- Le profil, les coordonnées, les compétences, le parcours et les projets se trouvent dans `app/data/portfolio.ts`.
- Les interfaces `Skill`, `Project`, `Experience` et `ContactInfo` facilitent la mise à jour de ces données.
- Le portrait est chargé depuis `public/profile.jpg`. Un fallback avec les initiales s’affiche si l’image est absente.
- Le CV téléchargeable doit se trouver dans `public/cv.pdf`.
- Les couleurs, typographies, ombres et animations sont définis dans `app/globals.css`.

## Scripts

```bash
npm run dev       # serveur de développement
npm run lint      # vérification ESLint
npm run build     # build de production
npm run start     # servir le build de production
```
