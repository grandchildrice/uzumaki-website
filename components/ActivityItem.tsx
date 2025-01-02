interface ActivityItemProps {
  date: string
  title: string
  description: string
}

const ActivityItem: React.FC<ActivityItemProps> = ({ date, title, description }) => {
  return (
    <div className="relative pl-8 pb-8 border-l border-gray-700">
      <div className="absolute left-0 top-0 w-4 h-4 bg-blue-400 rounded-full -translate-x-2"></div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 mb-2">{date}</p>
      <p>{description}</p>
    </div>
  )
}

export default ActivityItem

