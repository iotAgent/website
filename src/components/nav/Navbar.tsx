import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { DOCUMENTATION_URL, GITHUB_ORG, GET_STARTED_URL } from "@/lib/constants";

export function Navbar() {
  return (
    <nav className="border-b py-4">
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="iotAgent Logo"
            width={120}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </Link>
        <div className="flex gap-4">
          <Button variant="ghost" asChild>
            <Link href={DOCUMENTATION_URL}>Documentation</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href={GITHUB_ORG} target="_blank">
              GitHub
            </Link>
          </Button>
          <Button asChild>
            <Link href={GET_STARTED_URL}>Get Started</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
} 