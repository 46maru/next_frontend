import { CompletedTaskList } from '@/completed/components/CompletedTaskList'
import Sidebar from '@/components/Sidebar'

export default function CompletedTasksPage() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-64 p-8">
        <h1 className="text-3xl font-bold mb-6">完了済みタスク</h1>
        <main className="w-full p-4 border-gray-200 rounded-lg">
          <CompletedTaskList />
        </main>
      </div>
    </div>
  )
}