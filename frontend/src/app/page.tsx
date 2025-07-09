import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center space-y-6">
          <Badge variant="secondary" className="mb-4">
            🚀 Decentralized Savings Platform
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">AutoStack</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Automate your savings and grow your wealth on-chain. Set goals,
            build streaks, and earn rewards while building your financial
            future.
          </p>
          <div className="flex gap-4 justify-center mt-8">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Get Started
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">🤖</span>
                Automated Savings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Set up recurring deposits and let AutoStack handle your savings
                automatically. No more manual transfers or forgotten
                contributions.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">🎯</span>
                Goal Tracking
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Create specific savings goals and track your progress with
                visual dashboards. Stay motivated with clear milestones and
                achievements.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">🏆</span>
                Streaks & Rewards
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Build savings streaks and earn rewards for consistent
                contributions. Gamify your financial habits and stay engaged.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div>
            <h3 className="text-3xl font-bold text-blue-600">$2.5M+</h3>
            <p className="text-gray-600">Total Savings</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-blue-600">15K+</h3>
            <p className="text-gray-600">Active Users</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-blue-600">500+</h3>
            <p className="text-gray-600">Goals Achieved</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-blue-600">99.9%</h3>
            <p className="text-gray-600">Uptime</p>
          </div>
        </div>
      </section>
    </main>
  );
}
