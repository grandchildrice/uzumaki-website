/* eslint-disable react/no-unescaped-entities */
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Donate() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        href="/"
        className="inline-flex items-center text-blue-400 hover:underline mb-4"
      >
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
      </Link>
      <h1 className="text-4xl font-bold mb-8 text-blue-400">
        Donate to Our Research
      </h1>
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Amazon Wish List</h2>
          <p className="mb-4">
            Support our research by purchasing items from our Amazon Wish List.
            These items directly contribute to our ongoing projects and help us
            advance our research goals.
          </p>
          <Link
            href="https://www.amazon.jp/hz/wishlist/ls/16QCGM9CJ1NL5?ref_=wl_share"
            className="text-blue-400 hover:underline"
          >
            View our Amazon Wish List
          </Link>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4">Ethereum Donations</h2>
          <p className="mb-4">
            You can also support our work by making a direct donation to our
            Ethereum wallet. All contributions go towards funding our research
            initiatives and maintaining our research house.
          </p>
          <div className="bg-gray-800 p-4 rounded-lg">
            <p className="font-mono break-all">
              0xa1a8d76A0044ce9d8aeF7c5279111a3029f58a6a
            </p>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Other Ways to Contribute
          </h2>
          <p>
            If you're interested in contributing your time, expertise, or have
            other ideas for supporting our research, please don't hesitate to
            reach out. We're always open to collaboration and new ideas.
          </p>
          <Link href="/contact" className="text-blue-400 hover:underline">
            Contact us with your ideas
          </Link>
        </section>
      </div>
    </div>
  );
}
