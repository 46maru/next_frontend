import TodoApp from '@/components/TodoApp'
import Sidebar from '@/components/Sidebar'

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row">
      <Sidebar />
      <div className="flex-1 md:ml-64 p-4 md:p-8 flex flex-col items-center">
        <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Todo</h1>
        <main className="w-full max-w-3xl p-4 border-gray-200 rounded-lg">
          <div className="flex justify-center items-center mb-4">
            <TodoApp />
          </div>
        </main>
      </div>
    </div>
  )
}