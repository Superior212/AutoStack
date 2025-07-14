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
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  Target,
  ArrowUpRight,
  ArrowDownRight,
  Plus,
  Eye,
} from "lucide-react";

export default function DashboardPage() {
  const stats = [
    {
      title: "Total Savings",
      value: "$2,450.00",
      change: "+12.5%",
      changeType: "positive",
      icon: DollarSign,
    },
    {
      title: "Monthly Goal",
      value: "$500.00",
      change: "75%",
      changeType: "positive",
      icon: Target,
    },
    {
      title: "This Month",
      value: "$320.00",
      change: "+8.2%",
      changeType: "positive",
      icon: TrendingUp,
    },
    {
      title: "Last Month",
      value: "$295.00",
      change: "-2.1%",
      changeType: "negative",
      icon: TrendingDown,
    },
  ];

  const recentTransactions = [
    {
      id: 1,
      type: "Deposit",
      amount: "$150.00",
      date: "Today",
      status: "completed",
    },
    {
      id: 2,
      type: "Withdrawal",
      amount: "-$75.00",
      date: "Yesterday",
      status: "completed",
    },
    {
      id: 3,
      type: "Deposit",
      amount: "$200.00",
      date: "2 days ago",
      status: "completed",
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground">
              Welcome back! Here&apos;s an overview of your savings.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline">
              <Eye className="h-4 w-4 mr-2" />
              View Details
            </Button>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Funds
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <stat.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="flex items-center text-xs text-muted-foreground">
                  {stat.changeType === "positive" ? (
                    <ArrowUpRight className="h-3 w-3 mr-1 text-green-600" />
                  ) : (
                    <ArrowDownRight className="h-3 w-3 mr-1 text-red-600" />
                  )}
                  {stat.change} from last month
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Savings Progress */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Savings Progress</CardTitle>
              <CardDescription>
                Track your progress towards your monthly goal
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Monthly Goal</span>
                  <span>$500.00</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full"
                    style={{ width: "75%" }}></div>
                </div>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Current: $375.00</span>
                  <span>75% Complete</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Common actions for your savings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-start" variant="outline">
                <Plus className="h-4 w-4 mr-2" />
                Add Funds
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <Target className="h-4 w-4 mr-2" />
                Set Goal
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <TrendingUp className="h-4 w-4 mr-2" />
                View Analytics
              </Button>
            </CardContent>
          </Card>

          {/* Recent Transactions */}
          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle>Recent Transactions</CardTitle>
              <CardDescription>Your latest savings activity</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentTransactions.map((transaction) => (
                  <div
                    key={transaction.id}
                    className="flex items-center justify-between p-3 rounded-lg border">
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-2 h-2 rounded-full ${
                          transaction.type === "Deposit"
                            ? "bg-green-500"
                            : "bg-red-500"
                        }`}
                      />
                      <div>
                        <p className="font-medium">{transaction.type}</p>
                        <p className="text-sm text-muted-foreground">
                          {transaction.date}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p
                        className={`font-medium ${
                          transaction.type === "Deposit"
                            ? "text-green-600"
                            : "text-red-600"
                        }`}>
                        {transaction.amount}
                      </p>
                      <Badge variant="secondary" className="text-xs">
                        {transaction.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
