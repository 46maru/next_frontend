import { CompletedTaskList } from '@/completed/components/CompletedTaskList'
import Sidebar from '@/components/Sidebar'

export default function CompletedTasksPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">完了済みタスク</h1>
      <CompletedTaskList />
      <Sidebar />
    </div>
  )
}