'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => setIsOpen(!isOpen)

  const navItems = [
    { href: '/', label: 'タスク一覧' },
    { href: '/completed', label: '実行済みタスク' },
  ]

  return (
    <>
      <button
        className="fixed top-4 left-4 z-40 md:hidden bg-white p-2 rounded-md shadow-lg"
        onClick={toggleMenu}
        aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}
      >
        <span className="sr-only">{isOpen ? "閉じる" : "メニュー"}</span>
        <div className={`w-6 h-0.5 bg-gray-600 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
        <div className={`w-6 h-0.5 bg-gray-600 mt-1.5 ${isOpen ? 'opacity-0' : ''}`} />
        <div className={`w-6 h-0.5 bg-gray-600 mt-1.5 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
      </button>

      <nav className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-30 ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
        <div className="flex flex-col h-full">
          <div className="p-5">
            <h1 className="text-2xl font-bold text-gray-800">TodoApp</h1>
          </div>
          <div className="flex-grow">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center px-5 py-3 text-gray-600 hover:bg-gray-100 ${
                  pathname === item.href ? 'bg-gray-100 text-green-500 font-semibold' : ''
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={toggleMenu}
          aria-hidden="true"
        />
      )}
    </>
  )
}