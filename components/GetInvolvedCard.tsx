import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface GetInvolvedCardProps {
  title: string
  description: string
  linkText: string
  linkHref: string
}

const GetInvolvedCard: React.FC<GetInvolvedCardProps> = ({ title, description, linkText, linkHref }) => {
  return (
    <div className="border border-gray-700 p-6 rounded-lg">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <Link href={linkHref} className="inline-flex items-center text-blue-400 hover:underline">
        {linkText} <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
    </div>
  )
}

export default GetInvolvedCard

