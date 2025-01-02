import Link from 'next/link'

interface ResearchOutputProps {
  title: string
  authors: string
  date: string
  link: string
}

const ResearchOutput: React.FC<ResearchOutputProps> = ({ title, authors, date, link }) => {
  return (
    <div className="border border-gray-700 p-4 rounded-lg">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 mb-2">By {authors}</p>
      <p className="text-gray-400 mb-2">Published on {date}</p>
      <Link href={link} className="text-blue-400 hover:underline">
        Read More
      </Link>
    </div>
  )
}

export default ResearchOutput

