import { Home, Users, Calendar } from "lucide-react";

interface WhatWeDoProps {
  title: string;
  description: string;
}

const WhatWeDo: React.FC<WhatWeDoProps> = ({ title, description }) => {
  const getIcon = (title: string) => {
    switch (title.toLowerCase()) {
      case "house":
        return <Home className="w-12 h-12 text-blue-400" />;
      case "networking":
        return <Users className="w-12 h-12 text-blue-400" />;
      case "events":
        return <Calendar className="w-12 h-12 text-blue-400" />;
      default:
        return <Home className="w-12 h-12 text-gray-400" />;
    }
  };

  return (
    <div className="border border-gray-700 p-6 rounded-lg flex items-center space-x-4">
      <div className="flex-shrink-0">{getIcon(title)}</div>
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default WhatWeDo;
