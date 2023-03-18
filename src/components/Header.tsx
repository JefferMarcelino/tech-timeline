"use client"

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import gitHubLogo from "/public/icons/github-logo.svg"
import moonLogo from "/public/icons/moon.svg"
import sunLogo from "/public/icons/sun.svg"

const Header = () => {
  const [ isDarkMode, setIsDarkMode ] = useState(false)

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
      setIsDarkMode(true)
    } else {
      document.documentElement.classList.remove('dark')
      setIsDarkMode(false)
    }
  }, [])

  return (
    <header className="p-2 w-full flex justify-end transition-colors">
      <div className='p-2 rounded-lg dark:bg-white flex justify-end items-center gap-2'>
        <Link href="https://github.com/JefferMarcelino/tech-timeline" target="_blank">
          <Image src={gitHubLogo } alt="GitHub's Logo" />
        </Link>
      
        <Image
          className="cursor-pointer"
          src={ isDarkMode ? sunLogo : moonLogo }
          alt="Theme Logo"
          onClick={() => {
            setIsDarkMode(!isDarkMode)
            if (!isDarkMode) {
              localStorage.theme = "dark"
              document.documentElement.classList.add('dark')
            } else {
              localStorage.theme = "light"
              document.documentElement.classList.remove('dark')
            }
          }}
        />
      </div>
    </header>
  )
}

export default Header;