import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function About() {
  return (
    <div id="about-page" className="page-transition">
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              About Us
            </h1>
            <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
              Learn more about our React application and its features.
            </p>
          </div>

          <div className="mt-16 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=800&q=80" 
                alt="Code on a computer screen" 
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
            <div className="md:w-1/2 mt-6 md:mt-0">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                Just the basic for the audience 
                We're dedicated to creating simple, effective, and beautiful web applications using modern technologies like React. Our goal is to provide clean, maintainable code that serves as a solid foundation for your projects.
              </p>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Why React?</h2>
              <p className="text-gray-600 mb-6">
                React provides an excellent framework for building web applications with features like component-based architecture, virtual DOM, and a rich ecosystem - making it perfect for both simple and complex projects.
              </p>
              <div className="flex space-x-4">
                <Link href="/">
                  <Button variant="outline" className="inline-flex items-center">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Home
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button className="inline-flex items-center">
                    Contact Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
