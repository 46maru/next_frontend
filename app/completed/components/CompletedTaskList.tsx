'use client'

import { useState, useEffect } from 'react'

type Task = {
  id: number
  title: string
  completedAt: string
}

export function CompletedTaskList() {
  const [completedTasks, setCompletedTasks] = useState<Task[]>([])

  useEffect(() => {
    // 通常はここでAPIからデータを取得します
    // この例では、モックデータを使用しています
    const mockTasks: Task[] = [
      { id: 1, title: "買い物リストを作成(例)", completedAt: "2023-06-01 10:30" },
    ]
    setCompletedTasks(mockTasks)
  }, [])

  return (
    <ul className="space-y-4">
      {completedTasks.map((task) => (
        <li key={task.id} className="bg-white shadow rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-2">{task.title}</h3>
          <p className="text-sm text-gray-600">
            完了日時: {task.completedAt}
          </p>
        </li>
      ))}
    </ul>
  )
}