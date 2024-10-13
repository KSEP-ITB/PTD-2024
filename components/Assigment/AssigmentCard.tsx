"use client"

import { deleteAssigmentForStudent } from '@/actions/assigment-actions'
import { useSession } from 'next-auth/react'
import { toast } from 'sonner'

interface AssignmentCardProps {
  id: string // Tambahkan id untuk menghapus tugas
  day: string
  title: string
  dueDate: string
  description: string
  onDelete: (id: string) => void // Callback untuk penghapusan tugas
}

const AssignmentCard = ({ id, day, title, description, dueDate, onDelete }: AssignmentCardProps) => {
  const { data: session } = useSession()

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

  const handleDelete = async () => {
    try {
      await deleteAssigmentForStudent(id)
      toast('Assignment deleted successfully')
      onDelete(id) // Panggil callback untuk menghapus dari daftar
    } catch (error) {
      toast('Failed to delete assignment')
    }
  }

  return (
    <div className="rounded-xl bg-gradient-to-r from-[#E84756] to-[#A958A7] p-6 text-white shadow-lg">
      <div className="flex items-center justify-between">
        <div>
          <p className="mb-1">Day {day}</p>
          <h2 className="text-xl font-bold">{title}</h2>
          <p className="text-sm">Due Date: {dueDate}</p>
        </div>
        <div className="flex space-x-2">
          {session?.user.role === "USER" && (
            <button className={`rounded-lg px-4 py-2 ${getStatusColor(status)}`}>
              Submit
            </button>
          )}
          {session?.user.role === "ADMIN" && (
            <button
              onClick={handleDelete}
              className="rounded-lg bg-red-600 px-4 py-2 text-white"
            >
              Delete
            </button>
          )}
        </div>
      </div>
      <p className='py-2'>
        {description}
      </p>
    </div>
  )
}

export default AssignmentCard
