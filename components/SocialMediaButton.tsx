import { Twitter, Send } from "lucide-react";

interface SocialMediaButtonProps {
  platform: "X" | "Telegram";
  url: string;
}

const SocialMediaButton: React.FC<SocialMediaButtonProps> = ({
  platform,
  url,
}) => {
  const getIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case "x":
        return <Twitter className="w-6 h-6 text-blue-400" />;
      case "telegram":
        return <Send className="w-6 h-6 text-blue-400" />;
      default:
        return null;
    }
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center space-x-2 p-3 border border-gray-700 rounded-lg hover:bg-gray-800 transition-colors"
    >
      {getIcon(platform)}
      <span className="text-gray-400 text-sm font-medium">{platform}</span>
    </a>
  );
};

export default SocialMediaButton;
