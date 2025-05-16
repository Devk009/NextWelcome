import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

interface NavLinkProps {
  href: string;
  isActive: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

const NavLink = ({ href, isActive, children, onClick }: NavLinkProps) => (
  <Link href={href}>
    <span
      className={`py-2 text-sm font-medium cursor-pointer ${
        isActive 
          ? "text-primary font-semibold" 
          : "text-gray-600 hover:text-primary"
      }`}
      onClick={onClick}
    >
      {children}
    </span>
  </Link>
);

interface HeaderProps {
  currentPath: string;
}

export default function Header({ currentPath }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <span className="text-primary font-bold text-xl cursor-pointer">NextWorld</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLink href="/" isActive={currentPath === "/"}>Home</NavLink>
            <NavLink href="/about" isActive={currentPath === "/about"}>About</NavLink>
            <NavLink href="/contact" isActive={currentPath === "/contact"}>Contact</NavLink>
          </nav>
          
          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMobileMenu}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pt-2 pb-4 space-y-1">
            <NavLink 
              href="/" 
              isActive={currentPath === "/"} 
              onClick={closeMobileMenu}
            >
              Home
            </NavLink>
            <NavLink 
              href="/about" 
              isActive={currentPath === "/about"} 
              onClick={closeMobileMenu}
            >
              About
            </NavLink>
            <NavLink 
              href="/contact" 
              isActive={currentPath === "/contact"} 
              onClick={closeMobileMenu}
            >
              Contact
            </NavLink>
          </div>
        )}
      </div>
    </header>
  );
}
