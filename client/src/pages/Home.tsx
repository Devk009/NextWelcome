import { Link } from "wouter";
import { FeatureCard } from "@/components/ui/feature-card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Layout, Gauge, Redo2 } from "lucide-react";

export default function Home() {
  return (
    <div id="home-page" className="page-transition">
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Hello, World!
            </h1>
            <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
              Welcome to the home page of our Redo2 application.
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <FeatureCard
                icon={Redo2}
                title="Built with Redo2"
                description="Leveraging the power of Redo2 components for a responsive and interactive user experience.Hope you like it and appreciate it and make sure to hit like and be soulful"
              />
              <FeatureCard
                icon={Layout}
                title="Modern Design"
                description="Clean, responsive interface that works beautifully across all devices and screen sizes."
              />
              <FeatureCard
                icon={Gauge}
                title="Fast Performance"
                description="Optimized for speed and efficiency, providing a smooth experience for users."
              />
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link href="/about">
              <Button className="inline-flex items-center justify-center">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
