import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  console.log("Starting database setup...")

  // Vérifier si la table Contact existe déjà
  try {
    const contactCount = await prisma.contact.count()
    console.log(`Database already contains ${contactCount} contacts`)
  } catch (error) {
    console.error("Error checking contacts table. It might not exist yet:", error)
    console.log("Run 'npx prisma migrate dev --name init' to create the tables")
  }

  // Ajouter des données de test si nécessaire
  if (process.env.NODE_ENV === "development") {
    try {
      const testContacts = [
        {
          name: "John Doe",
          email: "john@example.com",
          interest: "design-branding",
          budget: "50500",
          message: "I need help with my company's branding.",
        },
        {
          name: "Jane Smith",
          email: "jane@example.com",
          interest: "ecommerce",
          budget: "100000",
          message: "Looking to create an online store for my business.",
        },
      ]

      for (const contact of testContacts) {
        await prisma.contact.upsert({
          where: { email: contact.email },
          update: {},
          create: contact,
        })
      }

      console.log("Added test contacts to database")
    } catch (error) {
      console.error("Error adding test data:", error)
    }
  }

  console.log("Database setup complete!")
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
