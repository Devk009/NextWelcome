import { LucideIcon } from "lucide-react";

interface ContactCardProps {
  icon: LucideIcon;
  title: string;
  children: React.ReactNode;
}

export function ContactCard({ icon: Icon, title, children }: ContactCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="text-primary text-2xl mb-4">
        <Icon className="h-6 w-6 mx-auto" />
      </div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <div className="text-gray-600">
        {children}
      </div>
    </div>
  );
}
