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
  Gift,
  Trophy,
  Star,
  TrendingUp,
  Calendar,
  Award,
  Zap,
  Target,
  CheckCircle,
  Clock,
  Plus,
} from "lucide-react";

export default function RewardsPage() {
  const rewards = [
    {
      id: 1,
      name: "First Deposit",
      description: "Complete your first deposit",
      points: 100,
      status: "completed",
      icon: Star,
    },
    {
      id: 2,
      name: "Monthly Saver",
      description: "Save for 30 consecutive days",
      points: 250,
      status: "in-progress",
      progress: 15,
      icon: Calendar,
    },
    {
      id: 3,
      name: "Goal Achiever",
      description: "Reach your first savings goal",
      points: 500,
      status: "locked",
      icon: Target,
    },
  ];

  const achievements = [
    {
      id: 1,
      name: "Early Bird",
      description: "Complete 5 deposits before 9 AM",
      icon: Zap,
      earned: true,
      date: "2024-01-15",
    },
    {
      id: 2,
      name: "Consistent Saver",
      description: "Save money for 7 days in a row",
      icon: TrendingUp,
      earned: true,
      date: "2024-01-20",
    },
    {
      id: 3,
      name: "Goal Crusher",
      description: "Achieve 3 savings goals",
      icon: Trophy,
      earned: false,
      progress: 2,
    },
  ];

  const rewardHistory = [
    {
      id: 1,
      type: "Points Earned",
      amount: "+100",
      description: "First Deposit Bonus",
      date: "2024-01-15",
      status: "completed",
    },
    {
      id: 2,
      type: "Reward Claimed",
      amount: "-50",
      description: "Coffee Shop Voucher",
      date: "2024-01-10",
      status: "completed",
    },
    {
      id: 3,
      type: "Points Earned",
      amount: "+250",
      description: "Weekly Streak Bonus",
      date: "2024-01-08",
      status: "completed",
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Rewards</h1>
            <p className="text-muted-foreground">
              Earn points and unlock rewards for saving
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline">
              <Calendar className="h-4 w-4 mr-2" />
              History
            </Button>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Claim Rewards
            </Button>
          </div>
        </div>

        {/* Points Overview */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Gift className="h-5 w-5" />
              Points Overview
            </CardTitle>
            <CardDescription>
              Your current points balance and rewards progress
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="text-center p-4 rounded-lg bg-muted/50">
                <div className="text-2xl font-bold">1,250</div>
                <div className="text-sm text-muted-foreground">
                  Total Points
                </div>
              </div>
              <div className="text-center p-4 rounded-lg bg-muted/50">
                <div className="text-2xl font-bold">5</div>
                <div className="text-sm text-muted-foreground">
                  Rewards Claimed
                </div>
              </div>
              <div className="text-center p-4 rounded-lg bg-muted/50">
                <div className="text-2xl font-bold">8</div>
                <div className="text-sm text-muted-foreground">
                  Achievements
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Available Rewards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rewards.map((reward) => (
            <Card key={reward.id}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <reward.icon className="h-5 w-5 text-primary" />
                    <CardTitle className="text-lg">{reward.name}</CardTitle>
                  </div>
                  <Badge
                    variant={
                      reward.status === "completed"
                        ? "default"
                        : reward.status === "in-progress"
                        ? "secondary"
                        : "outline"
                    }>
                    {reward.status === "completed"
                      ? "Completed"
                      : reward.status === "in-progress"
                      ? "In Progress"
                      : "Locked"}
                  </Badge>
                </div>
                <CardDescription>{reward.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Points</span>
                  <span className="font-medium">{reward.points}</span>
                </div>
                {reward.status === "in-progress" && reward.progress && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>{reward.progress}/30 days</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full"
                        style={{
                          width: `${(reward.progress / 30) * 100}%`,
                        }}></div>
                    </div>
                  </div>
                )}
                <div className="flex items-center space-x-2">
                  {reward.status === "completed" ? (
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  ) : reward.status === "in-progress" ? (
                    <Clock className="h-4 w-4 text-yellow-600" />
                  ) : (
                    <Award className="h-4 w-4 text-muted-foreground" />
                  )}
                  <span className="text-sm text-muted-foreground">
                    {reward.status === "completed"
                      ? "Completed"
                      : reward.status === "in-progress"
                      ? "In Progress"
                      : "Locked"}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievements and History */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Achievements */}
          <Card>
            <CardHeader>
              <CardTitle>Achievements</CardTitle>
              <CardDescription>
                Your earned badges and accomplishments
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {achievements.map((achievement) => (
                <div
                  key={achievement.id}
                  className="flex items-center justify-between p-3 rounded-lg border">
                  <div className="flex items-center space-x-3">
                    <achievement.icon
                      className={`h-5 w-5 ${
                        achievement.earned
                          ? "text-yellow-600"
                          : "text-muted-foreground"
                      }`}
                    />
                    <div>
                      <p className="font-medium">{achievement.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    {achievement.earned ? (
                      <div>
                        <CheckCircle className="h-4 w-4 text-green-600 mb-1" />
                        <p className="text-xs text-muted-foreground">
                          {new Date(achievement.date).toLocaleDateString()}
                        </p>
                      </div>
                    ) : (
                      <div>
                        <p className="text-sm text-muted-foreground">
                          {achievement.progress}/3
                        </p>
                        <Badge variant="outline" className="text-xs">
                          In Progress
                        </Badge>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Reward History */}
          <Card>
            <CardHeader>
              <CardTitle>Reward History</CardTitle>
              <CardDescription>
                Your recent points and reward activity
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {rewardHistory.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between p-3 rounded-lg border">
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-2 h-2 rounded-full ${
                          item.type === "Points Earned"
                            ? "bg-green-500"
                            : "bg-blue-500"
                        }`}
                      />
                      <div>
                        <p className="font-medium">{item.description}</p>
                        <p className="text-sm text-muted-foreground">
                          {item.date}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p
                        className={`font-medium ${
                          item.type === "Points Earned"
                            ? "text-green-600"
                            : "text-blue-600"
                        }`}>
                        {item.amount}
                      </p>
                      <Badge variant="secondary" className="text-xs">
                        {item.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Manage your rewards and points</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              <Button variant="outline" className="h-12">
                <Gift className="h-4 w-4 mr-2" />
                Browse Rewards
              </Button>
              <Button variant="outline" className="h-12">
                <Trophy className="h-4 w-4 mr-2" />
                View Achievements
              </Button>
              <Button variant="outline" className="h-12">
                <TrendingUp className="h-4 w-4 mr-2" />
                Earn More Points
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
