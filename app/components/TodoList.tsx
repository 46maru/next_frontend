"use client"
import { useEffect, useState } from "react";
import axios from 'axios';

interface Todo {
  id: number;
  todo: string;
  completed: boolean;
}

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [newTodo, setNewTodo] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  useEffect (() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () =>{
    try {
      const response = await axios.get('http://localhost:8000/api/todos');
      setTodos(response.data);
    } catch(error) {
      console.error("エラーが発生しました", error);
    }
  }

  const addTodo = async () => {
    if (newTodo) {
      setIsLoading(true);
      try {
        console.log(newTodo);
        await axios.post('http://localhost:8000/api/todos/',
          { todo: newTodo },
          {headers: {'Content-Type': 'application/json'}}
        );
        setNewTodo("");
        await fetchTodos();
      } catch (error) {
        console.error("エラーが発生しました", error);
      }
      finally {
        setIsLoading(false);
      }
    }
  }

  return (
    <div className="w-full max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="px-4 py-5 sm:p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Todo リスト</h2>
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
        <ul className="space-y-2">
          {todos.map((todo, index) => (
            <li key={index} className="bg-gray-50 p-2 rounded-md flex items-center justify-between">
            {todo.todo}
            </li>
          ))}
        </ul>
        </div>
    </div>
    )
}