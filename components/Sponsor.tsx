import Image from "next/image";
import Link from "next/link";

interface SponsorProps {
  name: string;
  logo: string | null;
  link: string | null;
  isSvg: boolean;
}

const Sponsor = ({ name, logo, link, isSvg }: SponsorProps) => {
  const renderLogo = (logoSrc: string) => {
    if (isSvg) {
      return (
        <div className="aspect-square relative overflow-hidden rounded-md mb-3 flex items-center justify-center">
          <img
            src={logoSrc}
            alt={`${name} logo`}
            className="w-full h-full object-contain"
          />
        </div>
      );
    }
    
    return (
      <div className="aspect-square relative overflow-hidden rounded-md mb-3">
        <Image
          src={logoSrc}
          alt={`${name} logo`}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 25vw"
        />
      </div>
    );
  };

  return (logo != null && link != null) ? (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-300"
    >
      {renderLogo(logo)}
      <h3 className="text-center text-sm font-medium">{name}</h3>
    </Link>
  ) : (
    <div className="block p-4 bg-white/5 rounded-lg">
      {renderLogo("./logo.svg")}
      <h3 className="text-center text-sm font-medium">{name}</h3>
    </div>
  );
};

export default Sponsor;
