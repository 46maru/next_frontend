import TodoList from '@/components/TodoList'
import Sidebar from '@/components/Sidebar'

export default function Home() {
  return (
    <main className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col items-center p-4">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Next.js Todo リスト</h1>
        <TodoList />
      </div>
    </main>
  )
}