import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const sponsors = [
  { name: "Ethereum Foundation", logo: "/placeholder.svg" },
  { name: "Consensys", logo: "/placeholder.svg" },
  { name: "Web3 Foundation", logo: "/placeholder.svg" },
  { name: "Protocol Labs", logo: "/placeholder.svg" }
]

export default function Sponsors() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" className="inline-flex items-center text-blue-400 hover:underline mb-4">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
      </Link>
      <h1 className="text-4xl font-bold mb-8 text-blue-400">Our Sponsors</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {sponsors.map((sponsor, index) => (
          <div key={index} className="flex flex-col items-center">
            <Image src={sponsor.logo} alt={`${sponsor.name} logo`} width={150} height={150} className="mb-4" />
            <h2 className="text-xl font-semibold text-center">{sponsor.name}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}

