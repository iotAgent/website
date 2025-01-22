import { 
  Cpu, 
  Shield, 
  Activity, 
  Scale, 
  Code2, 
  Plug 
} from "lucide-react";

const features = [
  {
    title: "Device Management",
    description: "Manage thousands of IoT devices from a single dashboard",
    icon: Cpu
  },
  {
    title: "Security & Compliance",
    description: "Enterprise-grade security with compliance standards",
    icon: Shield
  },
  {
    title: "Real-time Monitoring",
    description: "Monitor device health and performance in real-time",
    icon: Activity
  },
  {
    title: "Scalability",
    description: "Scale your IoT infrastructure without limitations",
    icon: Scale
  },
  {
    title: "API Integration",
    description: "Robust API for seamless integration with your stack",
    icon: Code2
  },
  {
    title: "Custom Plugins",
    description: "Extend functionality with custom plugins",
    icon: Plug
  }
];

export function Features() {
  return (
    <div className="container py-24">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl font-bold tracking-tight mb-4">
          Powerful Features for IoT Management
        </h2>
        <p className="text-lg text-muted-foreground">
          Everything you need to manage your IoT devices at scale
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="group relative p-8 border rounded-xl hover:border-primary/50 transition-all hover:shadow-lg hover:-translate-y-1"
          >
            <div className="rounded-lg bg-primary/5 w-14 h-14 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
              <feature.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
} 