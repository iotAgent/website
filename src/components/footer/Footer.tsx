import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { 
  DISCORD_URL, 
  DOCUMENTATION_URL, 
  GITHUB_ORG, 
  LINKEDIN_URL, 
  TWITTER_URL 
} from "@/lib/constants";

export function Footer() {
  const socialLinks = [
    { name: "Twitter", url: TWITTER_URL },
    { name: "GitHub", url: GITHUB_ORG },
    { name: "Discord", url: DISCORD_URL },
    { name: "LinkedIn", url: LINKEDIN_URL },
  ];

  return (
    <footer className="border-t py-12 mt-20 w-full">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center sm:text-left">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logo.png"
                alt="iotAgent Logo"
                width={180}
                height={60}
                className="h-14 w-auto"
              />
            </Link>
            <p className="text-sm text-muted-foreground">
              Open-source IoT device management platform
            </p>
          </div>
          <div className="text-center sm:text-left">
            <h3 className="font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href={DOCUMENTATION_URL} className="text-sm text-muted-foreground hover:text-primary">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-muted-foreground hover:text-primary">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-center sm:text-left">
            <h3 className="font-bold mb-4">Community</h3>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.url}
                    target="_blank"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-center sm:text-left">
            <h3 className="font-bold mb-4">Newsletter</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Stay updated with our latest features and releases.
            </p>
            <Button className="w-full sm:w-auto">Subscribe</Button>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} iotAgent. All rights reserved.
        </div>
      </div>
    </footer>
  );
} 