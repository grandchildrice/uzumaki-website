import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

const researchOutputs = [
  {
    title: "Optimizing Ethereum Consensus Mechanisms",
    authors: "John Doe, Jane Smith",
    date: "2023-05-15",
    link: "#"
  },
  {
    title: "Incentive Structures in Decentralized Networks",
    authors: "Alice Johnson, Bob Williams",
    date: "2023-04-02",
    link: "#"
  },
  {
    title: "Advancements in zkVM Technology",
    authors: "Charlie Brown, Diana Davis",
    date: "2023-03-10",
    link: "#"
  },
  {
    title: "Client-Side ZK Proving: Challenges and Solutions",
    authors: "Eve Wilson, Frank Thomas",
    date: "2023-02-18",
    link: "#"
  }
]

export default function Research() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" className="inline-flex items-center text-blue-400 hover:underline mb-4">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
      </Link>
      <h1 className="text-4xl font-bold mb-8 text-blue-400">Research Outputs</h1>
      <div className="grid gap-6">
        {researchOutputs.map((output, index) => (
          <div key={index} className="border border-gray-700 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">{output.title}</h2>
            <p className="text-gray-400 mb-2">By {output.authors}</p>
            <p className="text-gray-400 mb-2">Published on {output.date}</p>
            <Link href={output.link} className="text-blue-400 hover:underline">
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

