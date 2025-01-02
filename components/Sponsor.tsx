import Image from "next/image";

interface SponsorProps {
  name: string;
  logo: string;
  website: string;
  description?: string;
}

const Sponsor: React.FC<SponsorProps> = ({
  name,
  logo,
  website,
  description,
}) => {
  return (
    <a
      href={website}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center justify-center p-4 bg-gray-800 rounded-lg transition-transform hover:scale-105"
    >
      <Image
        src={logo}
        alt={`${name} logo`}
        width={100}
        height={100}
        className="mb-2"
      />
      <span className="text-center text-md">{name}</span>
      {description && <p className="text-center text-sm">{description}</p>}
    </a>
  );
};

export default Sponsor;
