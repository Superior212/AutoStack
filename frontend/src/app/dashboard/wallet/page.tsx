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
  Wallet,
  Send,
  Download,
  Copy,
  Eye,
  EyeOff,
  ArrowUpRight,
  ArrowDownRight,
  Plus,
  QrCode,
  History,
} from "lucide-react";

export default function WalletPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Wallet</h1>
            <p className="text-muted-foreground">
              Manage your funds and transactions
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline">
              <History className="h-4 w-4 mr-2" />
              History
            </Button>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Funds
            </Button>
          </div>
        </div>

        {/* Balance Overview */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Wallet className="h-5 w-5" />
              Balance Overview
            </CardTitle>
            <CardDescription>
              Your current wallet balance and recent activity
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Balance Display */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <p className="text-sm text-muted-foreground">Total Balance</p>
                <Button variant="ghost" size="sm">
                  <Eye className="h-4 w-4" />
                </Button>
              </div>
              <div className="text-4xl font-bold">$2,450.00</div>
              <div className="flex items-center justify-center gap-2 mt-2">
                <ArrowUpRight className="h-4 w-4 text-green-600" />
                <span className="text-sm text-green-600">
                  +$320.00 this month
                </span>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-4">
              <Button className="h-12">
                <Send className="h-4 w-4 mr-2" />
                Send
              </Button>
              <Button variant="outline" className="h-12">
                <Download className="h-4 w-4 mr-2" />
                Receive
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Wallet Details */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Wallet Address */}
          <Card>
            <CardHeader>
              <CardTitle>Wallet Address</CardTitle>
              <CardDescription>Your unique wallet identifier</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-3 bg-muted rounded-lg">
                <p className="text-sm font-mono break-all">
                  1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa
                </p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <Copy className="h-4 w-4 mr-2" />
                  Copy
                </Button>
                <Button variant="outline" size="sm">
                  <QrCode className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Your latest transactions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  {
                    type: "Received",
                    amount: "+$150.00",
                    time: "2 hours ago",
                    status: "completed",
                  },
                  {
                    type: "Sent",
                    amount: "-$75.00",
                    time: "1 day ago",
                    status: "completed",
                  },
                  {
                    type: "Received",
                    amount: "+$200.00",
                    time: "3 days ago",
                    status: "completed",
                  },
                ].map((tx, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-lg border">
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-2 h-2 rounded-full ${
                          tx.type === "Received" ? "bg-green-500" : "bg-red-500"
                        }`}
                      />
                      <div>
                        <p className="font-medium">{tx.type}</p>
                        <p className="text-sm text-muted-foreground">
                          {tx.time}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p
                        className={`font-medium ${
                          tx.type === "Received"
                            ? "text-green-600"
                            : "text-red-600"
                        }`}>
                        {tx.amount}
                      </p>
                      <Badge variant="secondary" className="text-xs">
                        {tx.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Send/Receive Section */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Send Funds */}
          <Card>
            <CardHeader>
              <CardTitle>Send Funds</CardTitle>
              <CardDescription>
                Transfer funds to another wallet
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="recipient">Recipient Address</Label>
                <Input id="recipient" placeholder="Enter wallet address" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="amount">Amount</Label>
                <Input id="amount" type="number" placeholder="0.00" />
              </div>
              <Button className="w-full">
                <Send className="h-4 w-4 mr-2" />
                Send Funds
              </Button>
            </CardContent>
          </Card>

          {/* Receive Funds */}
          <Card>
            <CardHeader>
              <CardTitle>Receive Funds</CardTitle>
              <CardDescription>
                Share your address to receive funds
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-muted rounded-lg text-center">
                <QrCode className="h-24 w-24 mx-auto mb-2 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">QR Code</p>
              </div>
              <Button variant="outline" className="w-full">
                <Copy className="h-4 w-4 mr-2" />
                Copy Address
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
