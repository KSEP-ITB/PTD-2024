interface AssignmentCardProps {
  day: number
  title: string
  dueDate: string
  status: string
}

const AssignmentCard = ({ day, title, dueDate, status }: AssignmentCardProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Submit':
        return 'bg-white text-black'
      case 'Submitted':
        return 'bg-[#D3FFD3] text-black'
      case 'Expired':
        return 'bg-[#FFD3D3] text-black'
      default:
        return 'bg-white text-black'
    }
  }

  return (
    <div className="rounded-xl bg-gradient-to-r from-[#E84756] to-[#A958A7] p-6 text-white shadow-lg">
      <div className="flex items-center justify-between">
        <div>
          <p className="mb-1">Day {day}</p>
          <h2 className="text-xl font-bold">{title}</h2>
          <p className="text-sm">Due Date : {dueDate}</p>
        </div>
        <button className={`rounded-lg px-4 py-2 ${getStatusColor(status)}`}>
          {status}
        </button>
      </div>
    </div>
  )
}

export default AssignmentCard