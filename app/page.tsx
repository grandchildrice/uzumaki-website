"use client";
import ResearchTheme from "@/components/ResearchTheme";
import ResearchOutput from "@/components/ResearchOutput";
import ActivityItem from "@/components/ActivityItem";
import GetInvolvedCard from "@/components/GetInvolvedCard";
import Person from "@/components/Person";
import WhatWeDo from "@/components/WhatWeDo";
import SocialMediaButton from "@/components/SocialMediaButton";
import Link from "next/link";
import Image from "next/image";

const researchThemes = [
  {
    title: "MEV",
    description: "Improving blockchain consensus mechanisms",
  },
  {
    title: "PBS",
    description: "Designing effective network incentives",
  },
  { title: "zkVM", description: "Proving the computation result is true without reexecution" },
  {
    title: "Client-side zk proving",
    description: "Proving SNARKs on the client side",
  },
];

const wedo = [
  {
    title: "House",
    description:
      "A collaborative space for researchers to live, work, and innovate together.",
  },
  {
    title: "Networking",
    description:
      "Opportunities to connect with like-minded individuals and build impactful relationships.",
  },
  {
    title: "Events",
    description:
      "Regular workshops, hackathons, and discussions to share knowledge and spark ideas.",
  },
];

const researchOutputs = [
  {
    title: "Optimizing Ethereum Consensus",
    authors: "John Doe, Jane Smith",
    date: "2023-05-15",
    link: "#",
  },
  {
    title: "Incentive Structures in Networks",
    authors: "Alice Johnson, Bob Williams",
    date: "2023-04-02",
    link: "#",
  },
  {
    title: "Advancements in zkVM Technology",
    authors: "Charlie Brown, Diana Davis",
    date: "2023-03-10",
    link: "#",
  },
];

const activities = [
  {
    date: "2023-06-01",
    title: "Ethereum Research Workshop",
    description: "Hosted a workshop on zkVM advancements",
    link: "#",
  },
  {
    date: "2023-05-15",
    title: "Published Research Paper",
    description: "Paper on 'Optimizing Ethereum Consensus Mechanisms'",
    link: "#",
  },
  {
    date: "2023-04-20",
    title: "Collaboration Announcement",
    description: "New collaboration with XYZ University",
    link: "#",
  },
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const sponsors = [
  {
    name: "Ethereum Foundation",
    logo: "/sponsors/ef.jpg",
    website: "https://ethereum.org",
  },
  {
    name: "Consensys",
    logo: "/sponsors/ef.jpg",
    website: "https://consensys.net",
  },
  {
    name: "Web3 Foundation",
    logo: "/sponsors/ef.jpg",
    website: "https://web3.foundation",
  },
  {
    name: "Protocol Labs",
    logo: "/sponsors/ef.jpg",
    website: "https://protocol.ai",
  },
];

const residents = [
  {
    name: "vita",
    logo: "/residents/vita.jpeg",
    website: "https://x.com/keccak255",
    topics: ["Consensus", "MEV"],
    description: "Protocol Researcher at Titania Research",
  },
  {
    name: "gohan",
    logo: "/residents/gohan.jpg",
    website: "https://x.com/grandchildrice",
    topics: ["zkVM", "MPC", "Verifiable Credential"],
    description: "Master student at Waseda Univ, Grantee at PSE",
  },
  {
    name: "Alphaist",
    logo: "/residents/alpha.jpeg",
    website: "https://x.com/0xAlphaist",
    topics: ["MEV", "OFA", "DEX", "Market Microstructure"],
    description: "Application Researcher at Titania Research",
  },
  {
    name: "tei",
    logo: "/residents/tei.jpeg",
    website: "https://x.com/82y31",
    topics: ["MEV", "PBS", "Mechanism Design"],
    description: "Protocol Researcher at Titania Research",
  },
  {
    name: "banri",
    logo: "/residents/banri.jpeg",
    website: "https://protocol.ai",
    topics: ["Trading Strategy"],
    description: "Application Researcher at Titania Research",
  },
  {
    name: "adust",
    logo: "/residents/adust.jpg",
    website: "https://x.com/adust09",
    topics: ["VOLE", "MPC"],
    description: "Grantee at PSE",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="h-screen flex flex-col items-center justify-center">
        <div className="text-center">
          <div className="mb-8 relative w-48 h-48 mx-auto">
            <Image
              src="./logo.svg"
              alt="Uzumaki Research House"
              layout="fill"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-blue-400">
            Uzumaki Research House
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            A research hub in Japan to solve Ethereum&apos;s most critical
            problems.
          </p>
          <a
            href="#content"
            className="bg-blue-500 text-white px-8 py-3 rounded-full text-lg hover:bg-blue-600 transition duration-300"
          >
            Explore Our Research
          </a>
        </div>
      </div>

      <div id="content" className="container mx-auto px-4 py-16">
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-blue-400">
            Research Themes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {researchThemes.map((theme, index) => (
              <ResearchTheme
                key={index}
                title={theme.title}
                description={theme.description}
              />
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-blue-400">What we do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {wedo.map((doing, index) => (
              <WhatWeDo
                key={index}
                title={doing.title}
                description={doing.description}
              />
            ))}
          </div>
        </section>

        {/* add residents' research themes */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-blue-400">Residents</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {residents.map((resident, index) => (
              <Person key={index} {...resident} />
            ))}
          </div>
        </section>

        <section className="mb-16">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-3xl font-bold text-blue-400">
              Research Outputs
            </h2>
            <div className="text-right">
              <Link href="/researches" className="text-blue-400 hover:underline">
                See More
              </Link>
            </div>
          </div>
          <div className="grid gap-6">
            {researchOutputs.map((output, index) => (
              <ResearchOutput key={index} {...output} />
            ))}
          </div>
        </section>

        <section className="mb-16">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-3xl font-bold text-blue-400">
              Recent Activity
            </h2>
            <div className="text-right">
              <Link href="/activities" className="text-blue-400 hover:underline">
                See More
              </Link>
            </div>
          </div>

          <div className="space-y-8">
            {activities.map((activity, index) => (
              <ActivityItem key={index} {...activity} />
            ))}
          </div>
        </section>

        {/* <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-blue-400">
            Our Sponsors
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {sponsors.map((sponsor, index) => (
              <Sponsor key={index} {...sponsor} />
            ))}
          </div>
        </section> */}

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-blue-400">
            Get Involved
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <GetInvolvedCard
              title="Visit or Stay"
              description="Interested in visiting or staying at Uzumaki Research House?"
              linkText="Learn More"
              linkHref="https://grandchildrice.notion.site/f2503aa052084f039474859dccd39a17?pvs=105"
            />
            <GetInvolvedCard
              title="Donate"
              description="Support our research efforts through donations or our Amazon Wish List."
              linkText="Donate Now"
              linkHref="/donate"
            />
          </div>
        </section>

        <section>
          <div className="flex space-x-4 m-auto">
            <SocialMediaButton
              platform="Telegram"
              url="https://t.me/uzumakiethereum"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
