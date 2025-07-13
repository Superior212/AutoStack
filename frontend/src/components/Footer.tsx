import { Badge } from "@/components/ui/badge";
import { Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const socialLinks = [
    {
      icon: "/assets/x.svg",
      href: "https://x.com/AutoStack",
      label: "X (Twitter)",
    },
    {
      icon: "/assets/telegram.svg",
      href: "https://t.me/autostack",
      label: "Telegram",
    },
    {
      icon: "/assets/discord.svg",
      href: "https://discord.gg/autostack",
      label: "Discord",
    },
  ];

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Brand */}
          <div className="flex items-center space-x-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-primary">
              <span className="text-xs font-bold text-primary-foreground">
                AS
              </span>
            </div>
            <span className="font-semibold">AutoStack</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity">
                <div className="w-6 h-6 flex items-center justify-center">
                  <Image
                    src={social.icon}
                    width={24}
                    height={24}
                    className="w-6 h-6 object-contain"
                    alt={social.label}
                  />
                </div>
                <span className="sr-only">{social.label}</span>
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span>© 2024</span>
            <Badge variant="outline" className="text-xs">
              <Zap className="h-3 w-3 mr-1" />
              Stacks
            </Badge>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
