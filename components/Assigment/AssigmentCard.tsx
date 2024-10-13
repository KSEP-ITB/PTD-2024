"use client"

import { deleteAssigmentForStudent } from '@/actions/assigment-actions'
import { useSession } from 'next-auth/react'
import { toast } from 'sonner'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '../ui/button'
import { useState } from 'react'
import Link from 'next/link'

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
  const [file, setFile] = useState<File | null>(null)

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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0])
    }
  }

  const handleSubmit = async () => {
    if (!file) {
      toast('Please select a file to upload')
      return
    }

    try {
      // Simpan file menggunakan API upload (misalnya menggunakan FormData)
      const formData = new FormData()
      formData.append('file', file)

      // TODO: Implement file upload logic here
      // Example: await uploadFileToServer(formData)

      toast('File uploaded successfully')
    } catch (error) {
      toast('Failed to upload file')
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
            <Dialog>
              <DialogTrigger>
                <Button>
                  Submit
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Submit for {title} Task</DialogTitle>
                  <DialogDescription>
                    Upload your assignment file in PDF format.
                  </DialogDescription>
                </DialogHeader>
                <DialogContent>
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={handleFileChange}
                    className="mb-4"
                  />
                  <Button onClick={handleSubmit} disabled={!file}>
                    Upload
                  </Button>
                </DialogContent>
              </DialogContent>
            </Dialog>
          )}
          {session?.user.role === "ADMIN" && (
            <div>
              <button
                onClick={handleDelete}
                className="rounded-lg bg-red-600 px-4 py-2 text-white"
              >
                Delete
              </button>
              <Link href={`/assignments/${id}`}>
                <Button>
                  See Responden
                </Button>
              </Link>
            </div>
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
