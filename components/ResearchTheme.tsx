import { Circle, ArrowRight, ArrowLeft, ArrowUp, ArrowDown } from 'lucide-react'

interface ResearchThemeProps {
  title: string
  description: string
}

const ResearchTheme: React.FC<ResearchThemeProps> = ({ title, description }) => {
  const getIcon = (title: string) => {
    switch (title.toLowerCase()) {
      case 'consensus':
        return <Circle className="w-12 h-12 text-blue-400" />
      case 'incentive mechanism':
        return <ArrowRight className="w-12 h-12 text-blue-400" />
      case 'zkvm':
        return <ArrowUp className="w-12 h-12 text-blue-400" />
      case 'client-side zk proving':
        return <ArrowDown className="w-12 h-12 text-blue-400" />
      default:
        return <ArrowLeft className="w-12 h-12 text-blue-400" />
    }
  }

  return (
    <div className="border border-gray-700 p-6 rounded-lg flex items-start space-x-4">
      <div className="flex-shrink-0">{getIcon(title)}</div>
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  )
}

export default ResearchTheme

