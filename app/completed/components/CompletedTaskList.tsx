'use client'

import { useState, useEffect } from 'react'
import axios from 'axios'

type Todo = {
  id: number
  todo: string
  completed: boolean
}

export function CompletedTaskList() {
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([])

  useEffect(() => {
    fetchCompletedTodos()
  }, [])

  const fetchCompletedTodos = async () => {
    try {
      const response = await axios.get('https://todo-api-3c0434147085.herokuapp.com/api/todos')
      const allTodos: Todo[] = response.data
      const completed = allTodos.filter(todo => todo.completed)
      setCompletedTodos(completed)
    } catch (error) {
      console.error("エラーが発生しました", error)
    }
  }

  return (
    <ul className="space-y-4">
      {completedTodos.map((todo) => (
        <li key={todo.id} className="bg-white shadow rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-2">{todo.todo}</h3>
          <p className="text-sm text-gray-600">
            完了済み
          </p>
        </li>
      ))}
    </ul>
  )
}