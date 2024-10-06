import { CompletedTaskList } from '@/completed/components/CompletedTaskList'
import Sidebar from '@/components/Sidebar'

export default function CompletedTasksPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">完了済みタスク</h1>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-3/4">
          <CompletedTaskList />
        </div>
        <div className="md:w-1/4">
          <Sidebar />
        </div>
      </div>
    </div>
  )
}