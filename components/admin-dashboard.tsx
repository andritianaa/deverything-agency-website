"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Trash2, RefreshCw, Mail, User, DollarSign, MessageSquare } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface Contact {
  id: string
  name: string
  email: string
  interest: string
  budget: string
  message: string
  createdAt: string
}

export function AdminDashboard() {
  const [contacts, setContacts] = useState<Contact[]>([])
  const [loading, setLoading] = useState(true)
  const { toast } = useToast()

  const fetchContacts = async () => {
    try {
      const response = await fetch("/api/contact")
      if (response.ok) {
        const data = await response.json()
        setContacts(data)
      }
    } catch (error) {
      toast({
        title: "Error fetching contacts",
        description: "Please try again later.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const deleteContact = async (id: string) => {
    try {
      const response = await fetch(`/api/contact/${id}`, {
        method: "DELETE",
      })
      if (response.ok) {
        setContacts(contacts.filter((contact) => contact.id !== id))
        toast({
          title: "Contact deleted",
          description: "Contact has been removed successfully.",
        })
      }
    } catch (error) {
      toast({
        title: "Error deleting contact",
        description: "Please try again later.",
        variant: "destructive",
      })
    }
  }

  useEffect(() => {
    fetchContacts()
  }, [])

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  const getBudgetColor = (budget: string) => {
    if (budget === "100000") return "bg-green-100 text-green-800"
    if (budget === "50500") return "bg-yellow-100 text-yellow-800"
    if (budget === "10000") return "bg-blue-100 text-blue-800"
    return "bg-gray-100 text-gray-800"
  }

  const getInterestColor = (interest: string) => {
    if (interest === "design-branding") return "bg-purple-100 text-purple-800"
    if (interest === "ecommerce") return "bg-orange-100 text-orange-800"
    if (interest === "specialist") return "bg-indigo-100 text-indigo-800"
    return "bg-gray-100 text-gray-800"
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <RefreshCw className="w-8 h-8 animate-spin" />
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-muted-foreground">Manage contact form submissions</p>
        </div>
        <Button onClick={fetchContacts} variant="outline">
          <RefreshCw className="w-4 h-4 mr-2" />
          Refresh
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Contacts</CardTitle>
            <User className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{contacts.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Design & Branding</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{contacts.filter((c) => c.interest === "design-branding").length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">High Budget</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{contacts.filter((c) => c.budget === "100000").length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">This Week</CardTitle>
            <Mail className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {
                contacts.filter((c) => {
                  const contactDate = new Date(c.createdAt)
                  const weekAgo = new Date()
                  weekAgo.setDate(weekAgo.getDate() - 7)
                  return contactDate > weekAgo
                }).length
              }
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Contact Submissions</h2>
        {contacts.length === 0 ? (
          <Card>
            <CardContent className="flex items-center justify-center py-12">
              <div className="text-center">
                <Mail className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">No contacts yet</h3>
                <p className="text-muted-foreground">Contact form submissions will appear here.</p>
              </div>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-4">
            {contacts.map((contact) => (
              <Card key={contact.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">{contact.name}</CardTitle>
                      <CardDescription>{contact.email}</CardDescription>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">{formatDate(contact.createdAt)}</span>
                      <Button variant="outline" size="sm" onClick={() => deleteContact(contact.id)}>
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex gap-2">
                      {contact.interest && (
                        <Badge className={getInterestColor(contact.interest)}>
                          {contact.interest.replace("-", " & ")}
                        </Badge>
                      )}
                      {contact.budget && (
                        <Badge className={getBudgetColor(contact.budget)}>
                          ${Number.parseInt(contact.budget).toLocaleString()}
                        </Badge>
                      )}
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Message:</h4>
                      <p className="text-muted-foreground">{contact.message}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
