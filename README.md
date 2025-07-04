# Deverything Agency Website

Ce projet est un site web pour Deverything Agency, construit avec Next.js, Tailwind CSS, et Prisma avec PostgreSQL.

## Configuration de la base de données

1. Assurez-vous d'avoir PostgreSQL installé et en cours d'exécution sur votre machine.

2. Créez une base de données PostgreSQL:
   \`\`\`
   createdb Awake_agency
   \`\`\`

3. Configurez votre fichier `.env` avec l'URL de votre base de données:
   \`\`\`
   DATABASE_URL="postgresql://username:password@localhost:5432/Awake_agency?schema=public"
   \`\`\`
   Remplacez `username` et `password` par vos identifiants PostgreSQL.

4. Exécutez les migrations Prisma pour créer les tables:
   \`\`\`
   npx prisma migrate dev --name init
   \`\`\`

5. (Optionnel) Initialisez la base de données avec des données de test:
   \`\`\`
   npm run db:setup
   \`\`\`

## Développement

1. Installez les dépendances:
   \`\`\`
   npm install
   \`\`\`

2. Démarrez le serveur de développement:
   \`\`\`
   npm run dev
   \`\`\`

3. Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## Déploiement

Pour déployer sur Vercel:

1. Connectez votre dépôt GitHub à Vercel.
2. Configurez les variables d'environnement, notamment `DATABASE_URL` pointant vers une base de données PostgreSQL hébergée (comme Neon, Supabase, ou Railway).
3. Déployez!
