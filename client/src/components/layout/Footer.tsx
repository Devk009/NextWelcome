import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center md:justify-start">
            <Link href="/">
              <a className="text-xl font-bold text-white">NextWorld</a>
            </Link>
          </div>
          <div className="mt-4 md:mt-0">
            <p className="text-center md:text-right text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} NextWorld. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
