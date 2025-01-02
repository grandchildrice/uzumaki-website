import Image from "next/image";

interface PersonProps {
  name: string;
  logo: string;
  website: string;
  topics: string[];
  description?: string;
}

const Person: React.FC<PersonProps> = ({
  name,
  logo,
  website,
  topics,
  description,
}) => {
  return (
    <a
      href={website}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center justify-start p-4 bg-gray-800 rounded-lg transition-transform hover:scale-105"
    >
      <Image
        src={logo}
        alt={`${name} logo`}
        width={100}
        height={100}
        className="mb-2"
      />
      <p className="text-center text-md font-bold">{name}</p>
      {description && (
        <p className="text-center text-sm text-gray-400 mb-2">{description}</p>
      )}
      <div className="flex flex-wrap justify-center gap-2 mt-2">
        {topics.map((topic, index) => (
          <span
            key={index}
            className="px-3 py-1 text-xs text-blue-400 bg-gray-700 rounded-full"
          >
            {topic}
          </span>
        ))}
      </div>
    </a>
  );
};

export default Person;
