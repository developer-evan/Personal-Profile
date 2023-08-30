import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className='fixed top-0 w-full bg-slate-300 md:flex md:justify-between md:items-center md:px-4'>
      <header className='flex justify-between p-3 items-center '>
        <h2 className='font-bold text-sky-600 text-lg md:text-2xl'>Developer-evan</h2>
        <button
          className='block md:hidden bg-slate-300 p-2'
          onClick={toggleMenu}
        >
          <svg
            className='h-6 w-6 text-sky-600'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            {menuOpen ? (
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M6 18L18 6M6 6l12 12'
              />
            ) : (
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16M4 18h16'
              />
            )}
          </svg>
        </button>
      </header>
      <ul
        className={`${
          menuOpen ? 'block' : 'hidden'
        } md:flex md:w-auto text-start bg-slate-300 p-4 md:p-0 md:static md:space-x-4`}
      >
     <a href='#home'  >      
      <li className='mx-4 font-bold' onClick={closeMenu}>
          Home
        </li>
        </a>

        <a href='#work-projects'  > 
        <li className='mx-4 font-bold' onClick={closeMenu}>
          Work
        </li>
        </a>
        <a href='#skills'  > 
        <li className='mx-4 font-bold' onClick={closeMenu}>
          Skills
        </li>
        </a>
        <a href='#about'  > 
        <li className='mx-4 font-bold' onClick={closeMenu}>
          About
        </li>
        </a>
        <a href='#contact'  > 
        <li className='mx-4 font-bold' onClick={closeMenu}>
          Contact
        </li>
        </a>


      </ul>
      <button className='hidden md:block bg-sky-600 text-white px-3 py-1'>
        Resume
      </button>
    </div>
  );
}

export default Navbar;
