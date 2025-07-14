import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Shield,
  Lock,
  Unlock,
  Target,
  TrendingUp,
  Calendar,
  AlertTriangle,
  CheckCircle,
  Plus,
  Eye,
  EyeOff,
} from "lucide-react";

export default function VaultPage() {
  const vaults = [
    {
      id: 1,
      name: "Emergency Fund",
      target: 5000,
      current: 3200,
      deadline: "2024-12-31",
      status: "active",
    },
    {
      id: 2,
      name: "Vacation Fund",
      target: 2000,
      current: 800,
      deadline: "2024-06-30",
      status: "active",
    },
    {
      id: 3,
      name: "New Car",
      target: 15000,
      current: 4500,
      deadline: "2025-03-15",
      status: "active",
    },
  ];

  const securityFeatures = [
    {
      name: "Two-Factor Authentication",
      status: "enabled",
      icon: Shield,
    },
    {
      name: "Biometric Lock",
      status: "enabled",
      icon: Lock,
    },
    {
      name: "Auto-Lock Timer",
      status: "disabled",
      icon: Calendar,
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Vault</h1>
            <p className="text-muted-foreground">
              Secure your savings with smart vaults
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline">
              <Eye className="h-4 w-4 mr-2" />
              View All
            </Button>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Create Vault
            </Button>
          </div>
        </div>

        {/* Vault Overview */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Vault Overview
            </CardTitle>
            <CardDescription>
              Your secure savings vaults and progress
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="text-center p-4 rounded-lg bg-muted/50">
                <div className="text-2xl font-bold">3</div>
                <div className="text-sm text-muted-foreground">
                  Active Vaults
                </div>
              </div>
              <div className="text-center p-4 rounded-lg bg-muted/50">
                <div className="text-2xl font-bold">$8,500</div>
                <div className="text-sm text-muted-foreground">Total Saved</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-muted/50">
                <div className="text-2xl font-bold">$22,000</div>
                <div className="text-sm text-muted-foreground">
                  Total Target
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Vaults Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {vaults.map((vault) => {
            const progress = (vault.current / vault.target) * 100;
            return (
              <Card key={vault.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{vault.name}</CardTitle>
                    <Badge variant="secondary">{vault.status}</Badge>
                  </div>
                  <CardDescription>
                    Target: ${vault.target.toLocaleString()}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>{progress.toFixed(1)}%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full"
                        style={{ width: `${progress}%` }}></div>
                    </div>
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>${vault.current.toLocaleString()}</span>
                      <span>${vault.target.toLocaleString()}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Deadline</span>
                    <span>{new Date(vault.deadline).toLocaleDateString()}</span>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1">
                      <Plus className="h-4 w-4 mr-1" />
                      Add
                    </Button>
                    <Button size="sm" variant="outline">
                      <TrendingUp className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Security Features */}
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Security Features</CardTitle>
              <CardDescription>
                Manage your vault security settings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {securityFeatures.map((feature) => (
                <div
                  key={feature.name}
                  className="flex items-center justify-between p-3 rounded-lg border">
                  <div className="flex items-center space-x-3">
                    <feature.icon className="h-4 w-4 text-muted-foreground" />
                    <span className="font-medium">{feature.name}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    {feature.status === "enabled" ? (
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    ) : (
                      <AlertTriangle className="h-4 w-4 text-yellow-600" />
                    )}
                    <Badge
                      variant={
                        feature.status === "enabled" ? "default" : "secondary"
                      }>
                      {feature.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Create New Vault */}
          <Card>
            <CardHeader>
              <CardTitle>Create New Vault</CardTitle>
              <CardDescription>Set up a new savings goal</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="vault-name">Vault Name</Label>
                <Input id="vault-name" placeholder="e.g., Emergency Fund" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="target-amount">Target Amount</Label>
                <Input id="target-amount" type="number" placeholder="0.00" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="deadline">Target Date</Label>
                <Input id="deadline" type="date" />
              </div>
              <Button className="w-full">
                <Shield className="h-4 w-4 mr-2" />
                Create Vault
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common vault management actions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              <Button variant="outline" className="h-12">
                <Lock className="h-4 w-4 mr-2" />
                Lock All Vaults
              </Button>
              <Button variant="outline" className="h-12">
                <Unlock className="h-4 w-4 mr-2" />
                Unlock Vaults
              </Button>
              <Button variant="outline" className="h-12">
                <Target className="h-4 w-4 mr-2" />
                Set Goals
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
