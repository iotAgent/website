import Link from "next/link";
import { 
  Code2, 
  BookOpen, 
  MessageSquare, 
  Bug, 
  Heart,
  Stars
} from "lucide-react";
import { GITHUB_ORG, DISCORD_URL, DOCUMENTATION_URL } from "@/lib/constants";

const ways = [
  {
    title: "Code Contributions",
    description: "Help improve iotAgent by submitting pull requests",
    icon: Code2,
    url: `${GITHUB_ORG}/contribute`,
  },
  {
    title: "Documentation",
    description: "Help improve our docs and write guides",
    icon: BookOpen,
    url: DOCUMENTATION_URL,
  },
  {
    title: "Community Support",
    description: "Help others in our Discord community",
    icon: MessageSquare,
    url: DISCORD_URL,
  },
  {
    title: "Bug Reports",
    description: "Report bugs and help improve stability",
    icon: Bug,
    url: `${GITHUB_ORG}/issues`,
  },
  {
    title: "Feature Requests",
    description: "Suggest new features and improvements",
    icon: Stars,
    url: `${GITHUB_ORG}/issues`,
  },
  {
    title: "Sponsor",
    description: "Support the project financially",
    icon: Heart,
    url: `${GITHUB_ORG}/sponsors`,
  },
];

export function Contributing() {
  return (
    <div className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
      <div className="container relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            Join Our Community
          </h2>
          <p className="text-lg text-muted-foreground">
            iotAgent is built by the community for the community. There are many ways to contribute and be part of our journey.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ways.map((way) => (
            <Link 
              href={way.url} 
              key={way.title}
              className="group relative p-8 border rounded-xl hover:border-primary/50 transition-all hover:shadow-lg hover:-translate-y-1 bg-background"
            >
              <div className="rounded-lg bg-primary/5 w-14 h-14 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                <way.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">{way.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{way.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 