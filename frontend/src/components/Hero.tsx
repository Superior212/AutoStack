"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import Link from "next/link";
import { WaitlistModal } from "./modals/Waitlist-modal";
import { ArrowRight, TrendingUp, Target, Zap } from "lucide-react";

export default function LatestHero() {
  const [showWaitlistModal, setShowWaitlistModal] = useState(false);

  return (
    <div
      className="relative min-h-screen overflow-hidden bg-background"
      id="hero">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />

      <div className="relative container mx-auto px-4 py-24 sm:py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <Badge
              variant="secondary"
              className="inline-flex items-center gap-2">
              <Zap className="h-3 w-3" />
              Next Generation DeFi Savings
            </Badge>

            {/* Main heading */}
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                Build better saving habits,
                <br />
                <span className="text-primary">one step at a time.</span>
              </h1>

              <p className="text-xl text-muted-foreground max-w-2xl">
                Whether you prefer to automate or save manually, AutoStack helps
                you understand your money and make smarter choices, without the
                pressure. Earn rewards while building your financial future.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/dashboard">
                  Start Saving Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={() => setShowWaitlistModal(true)}>
                Join Waitlist
              </Button>
            </div>

            
          </div>

          {/* Right column - Dashboard Preview */}
          <div className="relative">
            <Card className="relative overflow-hidden">
              <CardContent className="p-6">
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">
                      AutoStack Dashboard
                    </h3>
                    <div className="flex space-x-1">
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                      <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                      <div className="h-2 w-2 rounded-full bg-red-500"></div>
                    </div>
                  </div>

                  {/* Progress bars */}
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-muted-foreground">
                          Emergency Fund
                        </span>
                        <span className="font-medium">75%</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div
                          className="bg-green-500 h-2 rounded-full"
                          style={{ width: "75%" }}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-muted-foreground">
                          Vacation Fund
                        </span>
                        <span className="font-medium">45%</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div
                          className="bg-blue-500 h-2 rounded-full"
                          style={{ width: "45%" }}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-muted-foreground">
                          Investment Portfolio
                        </span>
                        <span className="font-medium">90%</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div
                          className="bg-purple-500 h-2 rounded-full"
                          style={{ width: "90%" }}></div>
                      </div>
                    </div>
                  </div>

                  {/* Quick stats */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                    <div className="text-center">
                      <div className="text-2xl font-bold">$2,450</div>
                      <div className="text-xs text-muted-foreground">
                        This Month
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">
                        +12.5%
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Growth
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4">
              <Card className="w-16 h-16 flex items-center justify-center bg-yellow-500 text-white border-0">
                <TrendingUp className="h-6 w-6" />
              </Card>
            </div>

            <div className="absolute -bottom-4 -left-4">
              <Card className="w-12 h-12 flex items-center justify-center bg-green-500 text-white border-0">
                <Target className="h-4 w-4" />
              </Card>
            </div>
          </div>
        </div>
      </div>

      <WaitlistModal
        open={showWaitlistModal}
        onOpenChange={setShowWaitlistModal}
      />
    </div>
  );
}
