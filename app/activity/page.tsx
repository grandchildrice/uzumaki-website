import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

const activities = [
  {
    date: "2023-06-01",
    title: "Ethereum Research Workshop",
    description: "Hosted a workshop on zkVM advancements with leading researchers."
  },
  {
    date: "2023-05-15",
    title: "Published Research Paper",
    description: "Our paper on 'Optimizing Ethereum Consensus Mechanisms' was published in a peer-reviewed journal."
  },
  {
    date: "2023-04-20",
    title: "Collaboration Announcement",
    description: "Announced a new collaboration with XYZ University on client-side zk proving research."
  },
  {
    date: "2023-03-10",
    title: "Conference Presentation",
    description: "Presented our findings on incentive mechanisms at the International Blockchain Conference."
  }
]

export default function Activity() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" className="inline-flex items-center text-blue-400 hover:underline mb-4">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
      </Link>
      <h1 className="text-4xl font-bold mb-8 text-blue-400">Activity Log</h1>
      <div className="space-y-8">
        {activities.map((activity, index) => (
          <div key={index} className="relative pl-8 pb-8 border-l border-gray-700">
            <div className="absolute left-0 top-0 w-4 h-4 bg-blue-400 rounded-full -translate-x-2"></div>
            <h2 className="text-xl font-semibold mb-2">{activity.title}</h2>
            <p className="text-gray-400 mb-2">{activity.date}</p>
            <p>{activity.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

