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
import { activities, researchOutputs, researchThemes, residents, wedo } from "@/const/metadata";

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
