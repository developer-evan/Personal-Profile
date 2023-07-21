import React from 'react'

function Navbar() {
  return (
    <div>
      <header className='flex justify-around p-3 items-center bg-slate-300'>
        <h2 className='font-bold text-sky-600 text-2xl'>Developer-evan</h2>
        <ul className='flex justify-evenly '>
            <li className='mx-4 font-bold'>Home</li>
            <li className='mx-4 font-bold'>Work</li>
            <li className='mx-4 font-bold'>Skills</li>
            <li className='mx-4 font-bold'>About</li>
            <li className='mx-4 font-bold'>Contact</li>
        </ul>
        <button className='bg-sky-600 text-white px-3 py-1'>Resume</button>
      </header>
    </div>
  )
}

export default Navbar
