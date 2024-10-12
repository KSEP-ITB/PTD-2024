"use client"

import Banner from '@/components/Assigment/AssigmentBanner'
import AssignmentCard from '@/components/Assigment/AssigmentCard'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const AssignmentsPage = () => {
  const { data } = useSession()
  const router = useRouter()

  if (!data) {
    router.push("/sign-in")
  }

  const assignments = [
    {
      day: 1,
      title: "Assignment Title",
      dueDate: "15-05-2025",
      status: "Submit"
    },
    {
      day: 1,
      title: "Assignment Title",
      dueDate: "15-05-2025",
      status: "Submitted"
    },
    {
      day: 1,
      title: "Assignment Title",
      dueDate: "15-05-2025",
      status: "Expired"
    }
  ]
  return (
    <div className="min-h-screen bg-[#FFCBD5]">
      <Banner />
      
      <div className="mx-auto max-w-2xl px-4 py-8">
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search..."
            className="w-full rounded-full border border-gray-300 px-4 py-2 focus:border-[#FF6B6B] focus:outline-none"
          />
        </div>
        <div className="space-y-4">
          {assignments.map((assignment, index) => (
            <AssignmentCard
              key={index}
              day={assignment.day}
              title={assignment.title}
              dueDate={assignment.dueDate}
              status={assignment.status}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
export default AssignmentsPage