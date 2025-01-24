import { Button } from "@/components/ui/button";
import Link from "next/link";
import { GET_STARTED_URL, GITHUB_ORG } from "@/lib/constants";

export function Hero() {
  return (
    <div className="relative w-full overflow-x-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary/2 to-transparent" />
      <div className="container mx-auto px-4 py-16 md:py-32 text-center relative">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        </div>
        <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-4 md:mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
          iotAgent
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 md:mb-12 max-w-2xl mx-auto">
          An open-source IoT device management platform that simplifies connecting and managing your IoT fleet.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4 sm:px-0">
          <Button size="lg" className="w-full sm:w-auto h-12 md:h-14 px-6 md:px-8 text-base md:text-lg whitespace-nowrap" asChild>
            <Link href={GET_STARTED_URL}>Get Started</Link>
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto h-12 md:h-14 px-6 md:px-8 text-base md:text-lg whitespace-nowrap" asChild>
            <Link href={GITHUB_ORG} target="_blank">
              View on GitHub
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
} 