import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    name: "Smart City Project",
    logo: "/fake-logo-1.png",
    url: "https://example.com/project1",
  },
  {
    name: "Industrial IoT Solutions",
    logo: "/fake-logo-2.png",
    url: "https://example.com/project2",
  },
  {
    name: "Agricultural Monitoring",
    logo: "/fake-logo-3.png",
    url: "https://example.com/project3",
  },
  // Add more projects as needed
];

export function ProjectCarousel() {
  return (
    <div className="container py-20">
      <h2 className="text-3xl font-bold text-center mb-10">
        Trusted by Industry Leaders
      </h2>
      <Carousel className="w-full max-w-xs sm:max-w-2xl mx-auto">
        <CarouselContent>
          {projects.map((project, index) => (
            <CarouselItem key={index} className="md:basis-1/3">
              <Link href={project.url} target="_blank" className="block p-4">
                <div className="h-32 flex items-center justify-center border rounded-lg hover:border-primary transition-colors">
                  <Image
                    src={project.logo}
                    alt={project.name}
                    width={100}
                    height={100}
                    className="object-contain"
                  />
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
} 