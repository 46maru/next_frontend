"use client"

import { useEffect, useState } from "react"
import axios from 'axios'
import AddTodo from './AddTodo'
import TodoList from './TodoList'

interface Todo {
  id: number
  todo: string
  completed: boolean
}

export default function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([])

  useEffect(() => {
    fetchTodos()
  }, [])

  const fetchTodos = async () => {
    try {
      const response = await axios.get('https://todo-api-3c0434147085.herokuapp.com/api/todos')
      setTodos(response.data)
    } catch (error) {
      console.error("エラーが発生しました", error)
    }
  }

  return (
    <div className="container mx-auto px-4 max-w-2xl">
      <div className="space-y-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="px-6 py-5">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Todoの追加</h2>
            <AddTodo onAddTodo={fetchTodos} />
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="px-6 py-5">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Todoリスト</h2>
            <TodoList todos={todos} onUpdateTodo={fetchTodos} />
          </div>
        </div>
      </div>
    </div>
  )
}