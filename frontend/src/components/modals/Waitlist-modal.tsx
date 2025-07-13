"use client";

import type React from "react";

import { useState } from "react";
import { Country } from "country-state-city";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
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
import { toast } from "sonner";
import { CheckCircle, Mail, User, Globe } from "lucide-react";

interface WaitlistModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const initialFormData = {
  name: "",
  email: "",
  country: "",
};

export function WaitlistModal({ open, onOpenChange }: WaitlistModalProps) {
  const [formData, setFormData] = useState(initialFormData);
  const [emailError, setEmailError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateEmail = (email: string) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    setFormData((prev) => ({ ...prev, email }));
    if (email && !validateEmail(email)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setEmailError("");
    setIsSubmitting(false);
  };

  const handleClose = () => {
    onOpenChange(false);
    // Reset form after a short delay to allow the closing animation
    setTimeout(() => {
      resetForm();
      setIsSuccess(false);
    }, 300);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateEmail(formData.email)) {
      setIsSubmitting(true);
      try {
        const response = await fetch(
          "https://coinsafe-0q0m.onrender.com/api/waitlist",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );

        if (response.ok) {
          setIsSuccess(true);
          resetForm();
          // Show success toast
          toast.success("Success!", {
            description: "You've been added to the waitlist.",
            duration: 5000,
          });
        } else {
          throw new Error("Form submission failed");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        // Show error toast
        toast.error("Error", {
          description: "Failed to join the waitlist. Please try again.",
          action: {
            label: "Try again",
            onClick: () => handleSubmit(e),
          },
        });
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setEmailError("Please enter a valid email address");
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-md">
        {isSuccess ? (
          <div className="flex flex-col items-center text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <DialogTitle className="text-xl font-semibold mb-2">
              Thank you for joining the waitlist!
            </DialogTitle>
            <DialogDescription className="text-muted-foreground">
              We&apos;ll notify you as soon as AutoStack is ready for you to
              start saving and earning with ease. In the meantime, feel free to
              share the waitlist with friends and family—let&apos;s build a
              smarter way to save together!
            </DialogDescription>
            <Button onClick={handleClose} className="mt-6">
              Close
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-xl font-semibold">
                Join our waitlist
              </DialogTitle>
              <DialogDescription>
                Be the first to experience AutoStack! Sign up now to secure your
                spot and get early access to tools that make saving simple,
                secure, and rewarding.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Name
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, name: e.target.value }))
                  }
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Email address
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleEmailChange}
                  placeholder="Enter your email"
                  className={emailError ? "border-destructive" : ""}
                  required
                />
                {emailError && (
                  <p className="text-destructive text-sm">{emailError}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="country" className="flex items-center gap-2">
                  <Globe className="h-4 w-4" />
                  Country
                </Label>
                <Select
                  value={formData.country}
                  onValueChange={(value) =>
                    setFormData((prev) => ({ ...prev, country: value }))
                  }>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a country" />
                  </SelectTrigger>
                  <SelectContent>
                    {Country.getAllCountries().map((country) => (
                      <SelectItem key={country.isoCode} value={country.isoCode}>
                        {country.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex gap-3 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleClose}
                  className="flex-1">
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="flex-1"
                  disabled={
                    !formData.name ||
                    !formData.email ||
                    !formData.country ||
                    !!emailError ||
                    isSubmitting
                  }>
                  {isSubmitting ? "Submitting..." : "Join waitlist"}
                </Button>
              </div>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
