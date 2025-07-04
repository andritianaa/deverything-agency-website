import { type NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params

    const contact = await prisma.contact.findUnique({
      where: { id },
    })

    if (!contact) {
      return NextResponse.json({ error: "Contact not found" }, { status: 404 })
    }

    await prisma.contact.delete({
      where: { id },
    })

    return NextResponse.json({ message: "Contact deleted successfully" }, { status: 200 })
  } catch (error) {
    console.error("Error deleting contact:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
