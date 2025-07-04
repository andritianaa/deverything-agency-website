"use client";

import type React from "react";

import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "",
    budget: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "We'll get back to you soon.",
        });
        setFormData({
          name: "",
          email: "",
          interest: "",
          budget: "",
          message: "",
        });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col bg-white dark:bg-black rounded-2xl p-8 gap-8"
    >
      <div className="flex flex-col md:flex md:flex-row gap-6">
        <div className="w-full">
          <Label htmlFor="name">Your Name</Label>
          <Input
            id="name"
            type="text"
            placeholder="Enter your name"
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
            required
            className="w-full mt-2 rounded-full border px-5 py-3 outline-hidden transition dark:border-white/20 focus:border-black/50 dark:focus:border-white/50 dark:bg-black/40"
          />
        </div>
        <div className="w-full">
          <Label htmlFor="email">Your Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            required
            className="w-full mt-2 rounded-full border px-5 py-3 outline-hidden transition dark:border-white/20 focus:border-black/50 dark:focus:border-white/50 dark:bg-black/40"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex md:flex-row gap-6">
        <div className="w-full">
          <Label htmlFor="interest">What are you interested in?</Label>
          <Select
            value={formData.interest}
            onValueChange={(value) => handleChange("interest", value)}
          >
            <SelectTrigger className="w-full mt-2 text-base px-4 rounded-full py-2.5 border transition-all duration-500 dark:border-white/20 focus:outline-0 dark:bg-black/40">
              <SelectValue placeholder="Select your interest" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="design-branding">Design & Branding</SelectItem>
              <SelectItem value="ecommerce">Ecommerce</SelectItem>
              <SelectItem value="specialist">Specialist</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="w-full">
          <Label htmlFor="budget">Project budget</Label>
          <Select
            value={formData.budget}
            onValueChange={(value) => handleChange("budget", value)}
          >
            <SelectTrigger className="w-full mt-2 text-base px-4 rounded-full py-2.5 border transition-all duration-500 dark:text-white border-solid dark:border-white/20 focus:outline-0 dark:bg-black/40">
              <SelectValue placeholder="Select your budget" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10000">$10,000</SelectItem>
              <SelectItem value="50500">$50,500</SelectItem>
              <SelectItem value="100000">$100,000+</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="w-full">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          placeholder="Let tell us know your project about"
          rows={4}
          value={formData.message}
          onChange={(e) => handleChange("message", e.target.value)}
          required
          className="w-full mt-2 rounded-3xl border px-5 py-3 outline-hidden transition dark:border-white/20 focus:border-black/50 dark:focus:border-white/50 dark:bg-black/40"
        />
      </div>
      <div>
        <Button
          type="submit"
          disabled={isSubmitting}
          className="group w-fit text-white dark:text-black font-medium bg-black dark:bg-white rounded-full flex items-center gap-4 py-2 pl-5 pr-2 transition-all duration-200 ease-in-out hover:bg-transparent border hover:text-black border-black"
        >
          <span className="transform transition-transform duration-200 ease-in-out group-hover:translate-x-10">
            {isSubmitting ? "Sending..." : "Let's Collaborate"}
          </span>
          <div className="w-8 h-8 bg-white dark:bg-black rounded-full flex items-center justify-center transform transition-transform duration-200 ease-in-out group-hover:-translate-x-36 group-hover:rotate-45">
            <ArrowUpRight className="w-4 h-4 text-black dark:text-white" />
          </div>
        </Button>
      </div>
    </form>
  );
}
