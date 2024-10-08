import { useState } from 'react'
import axios from 'axios'

interface Todo {
  id: number
  todo: string
  completed: boolean
}

interface TodoListProps {
  todos: Todo[]
  onUpdateTodo: () => void
}

export default function TodoList({ todos, onUpdateTodo }: TodoListProps) {
  const [isUpdating, setIsUpdating] = useState<number | null>(null)

  const handleCheckboxChange = async (todo: Todo) => {
    setIsUpdating(todo.id)
    try {
      await axios.put(
        `https://todo-api-3c0434147085.herokuapp.com/api/todos/${todo.id}`,
        { ...todo, completed: true },
        { headers: { 'Content-Type': 'application/json' } }
      )
      onUpdateTodo()
    } catch (error) {
      console.error("エラーが発生しました", error)
    } finally {
      setIsUpdating(null)
    }
  }

  return (
    <ul className="space-y-2">
      {todos.filter(todo => !todo.completed).map((todo) => (
        <li key={todo.id} className="bg-gray-50 p-2 rounded-md flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleCheckboxChange(todo)}
              onTouchStart={() => handleCheckboxChange(todo)}
              disabled={isUpdating === todo.id}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <span>{todo.todo}</span>
          </div>
          {isUpdating === todo.id && <span className="text-sm text-gray-500">更新中...</span>}
        </li>
      ))}
    </ul>
  )
}