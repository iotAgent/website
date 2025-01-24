import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { DOCUMENTATION_URL, GITHUB_ORG, GET_STARTED_URL } from "@/lib/constants";

export function Navbar() {
  return (
    <nav className="border-b py-4 w-full overflow-x-hidden">
      <div className="container px-4 mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="iotAgent Logo"
            width={200}
            height={67}
            className="h-12 sm:h-16 w-auto"
            priority
          />
        </Link>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
          <Button variant="ghost" size="sm" className="whitespace-nowrap" asChild>
            <Link href={DOCUMENTATION_URL}>Documentation</Link>
          </Button>
          <Button variant="ghost" size="sm" className="whitespace-nowrap" asChild>
            <Link href={GITHUB_ORG} target="_blank">
              GitHub
            </Link>
          </Button>
          <Button size="sm" className="whitespace-nowrap" asChild>
            <Link href={GET_STARTED_URL}>Get Started</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
} 