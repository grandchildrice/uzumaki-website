import Link from "next/link";

interface ResearchOutputProps {
  title: string;
  date: string;
  link: string;
  type: string;
}

const ResearchOutput: React.FC<ResearchOutputProps> = ({
  title,
  date,
  link,
  type,
}) => {
  return (
    <a
      className="border border-gray-700 p-4 rounded-lg transition-transform hover:scale-105"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 mb-2">{date}</p>
      <div className="flex flex-wrap gap-2 my-2">
        <span className="px-3 py-1 text-xs text-blue-400 bg-gray-700 rounded-full">
          {type}
        </span>
      </div>
    </a>
  );
};

export default ResearchOutput;
