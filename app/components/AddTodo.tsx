import { useState } from 'react'
import axios from 'axios'

interface AddTodoProps {
  onAddTodo: () => void
}

export default function AddTodo({ onAddTodo }: AddTodoProps) {
  const [newTodo, setNewTodo] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const addTodo = async () => {
    if (newTodo) {
      setIsLoading(true)
      try {
        await axios.post(
          'https://todo-api-3c0434147085.herokuapp.com/api/todos/',
          { todo: newTodo },
          { headers: { 'Content-Type': 'application/json' } }
        )
        setNewTodo("")
        onAddTodo()
      } catch (error) {
        console.error("エラーが発生しました", error)
      } finally {
        setIsLoading(false)
      }
    }
  }

  return (
    <div className="flex space-x-2 mb-4">
      <input
        type="text"
        placeholder="新しい Todo を入力"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            addTodo()
          }
        }}
        className="flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
      <button
        onClick={addTodo}
        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        {isLoading ? '追加中...' : '追加'}
      </button>
    </div>
  )
}