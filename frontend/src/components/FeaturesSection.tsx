import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  PiggyBank,
  Target,
  Shield,
  Zap,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

export default function FeaturesSection() {
  const features = [
    {
      icon: PiggyBank,
      title: "Automated Savings",
      description:
        "AutoStack automates saving, so you can focus on what matters.",
    },
    {
      icon: Target,
      title: "Personalized Plans",
      description:
        "Get personalized savings and investment plans built for your goals.",
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description:
        "Save confidently with advanced encryption and top-notch security.",
    },
    {
      icon: Zap,
      title: "Easy for Everyone",
      description:
        "AutoStack makes saving easy, whether you're new to crypto or a pro.",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <Sparkles className="h-3 w-3 mr-2" />
            Why Choose AutoStack
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
            AutoStack makes saving and investing with
            <br className="hidden sm:block" />
            <span className="text-primary">
              crypto simple, secure, and rewarding.
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Experience the future of decentralized savings with cutting-edge
            technology and user-friendly design.
          </p>
          <Button size="lg" asChild>
            <Link href="/dashboard">
              Start saving
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-lg bg-primary text-primary-foreground">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {index + 1}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

       
      </div>
    </section>
  );
}
