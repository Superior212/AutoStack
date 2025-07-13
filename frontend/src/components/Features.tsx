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
  TrendingUp,
  Shield,
  Zap,
  Users,
  Sparkles,
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: PiggyBank,
      title: "Automated Savings",
      description:
        "Set up recurring deposits with customizable intervals. Automated savings without manual intervention.",
      badge: "Popular",
      color: "bg-green-500",
    },
    {
      icon: Target,
      title: "Goal Tracking",
      description:
        "Create specific savings goals with visual progress tracking and milestone celebrations.",
      badge: "New",
      color: "bg-blue-500",
    },
    {
      icon: TrendingUp,
      title: "Smart Rewards",
      description:
        "Build savings streaks and earn badges, gas fee coverage, and token rewards.",
      badge: "Featured",
      color: "bg-purple-500",
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description:
        "Zero-knowledge proofs for transaction privacy and encrypted data storage.",
      badge: "Secure",
      color: "bg-orange-500",
    },
    {
      icon: Zap,
      title: "AI-Powered Insights",
      description:
        "Personalized savings recommendations and spending pattern analysis.",
      badge: "AI",
      color: "bg-pink-500",
    },
    {
      icon: Users,
      title: "Community Features",
      description:
        "Connect with other savers, share goals, and participate in community challenges.",
      badge: "Social",
      color: "bg-indigo-500",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <Sparkles className="h-3 w-3 mr-2" />
            Features
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">
            Discover an efficient way to save towards your goals
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            AutoStack helps you achieve more with your money by making saving
            effortless. Whether you&apos;re a beginner or a pro, our tools are
            designed to meet you where you are and help you grow.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg ${feature.color} text-white`}>
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {feature.badge}
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

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <Card className="border-0 shadow-lg bg-gradient-to-r from-primary/5 to-primary/10">
            <CardContent className="pt-12 pb-12">
              <h3 className="text-2xl font-bold mb-4">
                Ready to start your savings journey?
              </h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Start building your financial future with AutoStack today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Badge variant="secondary" className="text-sm px-4 py-2">
                  🚀 No setup required
                </Badge>
                <Badge variant="secondary" className="text-sm px-4 py-2">
                  🔒 Secure & Private
                </Badge>
                <Badge variant="secondary" className="text-sm px-4 py-2">
                  💰 Start for free
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Features;
