"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  LayoutDashboard,
  Wallet,
  Shield,
  Gift,
  Menu,
  X,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavLinks = [
  {
    to: "/dashboard",
    icon: LayoutDashboard,
    label: "Dashboard",
  },
  {
    to: "/dashboard/wallet",
    icon: Wallet,
    label: "Wallet",
  },
  {
    to: "/dashboard/vault",
    icon: Shield,
    label: "Vault",
  },
  {
    to: "/dashboard/rewards",
    icon: Gift,
    label: "Rewards",
  },
];

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen bg-background">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 h-screen w-64 bg-card border-r transform transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}>
        <div className="flex flex-col h-screen overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b flex-shrink-0">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <span className="text-sm font-bold text-primary-foreground">
                  AS
                </span>
              </div>
              <span className="font-bold text-lg">AutoStack</span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setSidebarOpen(false)}>
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            {NavLinks.map((link) => {
              const isActive = pathname === link.to;
              return (
                <Link key={link.to} href={link.to}>
                  <Button
                    variant={isActive ? "secondary" : "ghost"}
                    className="w-full justify-start h-12"
                    onClick={() => setSidebarOpen(false)}>
                    <link.icon className="h-4 w-4 mr-3" />
                    {link.label}
                    {isActive && <ChevronRight className="h-4 w-4 ml-auto" />}
                  </Button>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 h-screen overflow-y-auto">
        {/* Top Bar */}
        <header className="sticky top-0 z-30 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
          <div className="flex h-16 items-center gap-4 px-4 sm:px-6 lg:px-8">
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setSidebarOpen(true)}>
              <Menu className="h-4 w-4" />
            </Button>
            <div className="flex-1" />
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <Badge variant="secondary" className="sm:flex hidden">
                <Shield className="h-3 w-3 mr-1" />
                Not Connected
              </Badge>
              <Button variant="outline" size="sm">
                Connect Wallet
              </Button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
}
