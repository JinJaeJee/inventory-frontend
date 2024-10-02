'use client'
import { useAppDispatch, useAppSelector } from '@/app/redux'
import { setIsSidebarCollapsed } from '@/state'
import { Bell, Menu, Settings, Sun } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  const dispatch = useAppDispatch()
  const isSidebarCollapsed = useAppSelector(state => state.global.isSidebarCollapsed)

  const toggleSidebar = () => {
    dispatch(setIsSidebarCollapsed(!isSidebarCollapsed))
  }
  return (
    <div className='flex justify-between items-center w-full mb-7'>
      {/*LEFT SIDE*/}
      <div className='flex justify-between items-center gap-5'>
        <button className='p-3 bg-gray-100 rounded-full hover:bg-blue-100' onClick={toggleSidebar}>
          <Menu className='w-4 h-4' />
        </button>

        <div className='relative'>
          <input
            type='search'
            placeholder='start type to search groups or product'
            className='pl-10 pr-4 py-2 w-50 md:w-80 border-2 border-gray-300 bg-white rounded-lg focus:outline-none focus:border-blue-500'
          />
          <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
            <Bell className='text-gray-500' size={20} />
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className='flex justify-between items-center gap-5'>
        <div className='hidden md:flex justify-between items-center gap-5'>
          <div>
            <button onClick={() => {}}>
              <Sun className='cursor-pointer text-gray-500' size={24} />
            </button>
          </div>
          <div className='relative'>
            <Bell className='cursor-pointer text-gray-500' size={24} />
          </div>
          <hr className='w-0 h-7 border border-solid border-l border-gray-300 mx-3' />
          <div className='flex items-center gap-3 cursor-pointer'>
            <div className='w-9 h-9'>Image</div>
            <span className='font-semibold'>Jiramet P.</span>
          </div>
        </div>
        <Link href={'/settings'}>
          <Settings className='cursor-pointer text-gray-500 ' size={24} />
        </Link>
      </div>
    </div>
  )
}

export default Navbar
