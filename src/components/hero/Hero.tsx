import { Button } from "@/components/ui/button";
import Link from "next/link";
import { GET_STARTED_URL, GITHUB_ORG } from "@/lib/constants";

export function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary/2 to-transparent" />
      <div className="container py-32 text-center relative">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        </div>
        <h1 className="text-7xl font-bold tracking-tight mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
          iotAgent
        </h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          An open-source IoT device management platform that simplifies connecting and managing your IoT fleet.
        </p>
        <div className="flex gap-6 justify-center">
          <Button size="lg" className="h-14 px-8 text-lg" asChild>
            <Link href={GET_STARTED_URL}>Get Started</Link>
          </Button>
          <Button size="lg" variant="outline" className="h-14 px-8 text-lg" asChild>
            <Link href={GITHUB_ORG} target="_blank">
              View on GitHub
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
} 