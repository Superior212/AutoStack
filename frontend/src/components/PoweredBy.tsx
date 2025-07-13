import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Lock, Eye, ArrowRight, Sparkles, Zap } from "lucide-react";
import Link from "next/link";

const PoweredBy = () => {
  const securityFeatures = [
    {
      icon: Shield,
      title: "Stacks Blockchain",
      description: "Built on Stacks for secure, decentralized transactions",
    },
    {
      icon: Lock,
      title: "Smart Contracts",
      description: "Clarity smart contracts ensure transparent operations",
    },
    {
      icon: Eye,
      title: "Full Transparency",
      description: "Every transaction is visible on the Stacks blockchain",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <Sparkles className="h-3 w-3 mr-2" />
            Powered by Stacks
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">
            Built on trust, powered by
            <span className="text-primary"> Stacks</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            AutoStack leverages the Stacks blockchain for secure, transparent,
            and decentralized savings. Every transaction is immutable and
            verifiable.
          </p>
        </div>

        {/* Stacks Features Grid */}
        <div className="grid gap-6 md:grid-cols-3 mb-16">
          {securityFeatures.map((feature, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-lg bg-primary text-primary-foreground">
                    <feature.icon className="h-6 w-6" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stacks Integration CTA */}
        <div className="text-center">
          <Card className="border-0 shadow-lg">
            <CardContent className="pt-12 pb-12">
              <div className="flex items-center justify-center mb-4">
                <Zap className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-2xl font-bold">Stacks-Powered Savings</h3>
              </div>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Experience the future of decentralized finance with Stacks
                blockchain technology. Secure, transparent, and truly
                decentralized.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/dashboard">
                    Start saving
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg">
                  Learn about Stacks
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PoweredBy;
