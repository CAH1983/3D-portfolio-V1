import React from 'react'

const NavBar = () => {
  return (
    <nav className="fixed z-50 flex items-center justify-center w-full px-6 top-2 ">

        <div className='flex items-center w-full p-4 md:w-880 bg-navBar rounded-2xl h-80'>
          <span className='text-lg font-medium text-slate-200'> Caroline Ho</span>

          <div className='items-center flex-1 hidden gap-6 ml-6'>

            <a href="#home" className='text-base font-medium duration-100 ease-in-out cursor-pointer text-textBase hover:text-slate-100'>Home</a>
            <a href="#about" className='text-base font-medium duration-100 ease-in-out cursor-pointer text-textBase hover:text-slate-100'>About</a>
            <a href="#project" className='text-base font-medium duration-100 ease-in-out cursor-pointer text-textBase hover:text-slate-100'>Project</a>
            <a href="#contactme" className='text-base font-medium duration-100 ease-in-out cursor-pointer text-textBase hover:text-slate-100'>Contact me</a>

          </div>
        </div>
        </nav>
  )
}

export default NavBar;
