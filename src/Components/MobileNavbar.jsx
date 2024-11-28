import { React } from 'react';
import { useContext } from 'react';

import { HeaderContext } from '/src/contexts/HeaderContext.jsx';
import { OverlayContext } from '/src/contexts/OverlayContext.jsx';

import { navLinks } from '/src/Constant/index.js';
import iconClose from '/src/assets/images/icon-close.svg';

function Navbar() {
  const { setIsNavOpen } = useContext(HeaderContext);
  const { setIsOverlayActive } = useContext(OverlayContext);

  const closeMobileNavbar = () => {
    setIsNavOpen(false);
    setIsOverlayActive(false);
  }

  return (
    <nav className={`mobile_navbar 
      w-[60%] fixed 
      top-0 left-0 bottom-0 px-4 py-6 
      z-20 md:hidden`}>

      <button onClick={closeMobileNavbar}>
        <img src={iconClose} />
      </button>

      <ul className='flex flex-col gap-y-6 mt-[60px]'>
        {navLinks.map((navLink) => {
          const { id, title } = navLink;

          return <li key={id}>
            <a href="#" className='text-very-dark-blue
             font-bold'>
              {title}
            </a>
          </li>
        })}
      </ul>

    </nav>
  );
}

function MobileNavbar() {
  const { isNavOpen } = useContext(HeaderContext);

  return (
    isNavOpen && <Navbar />
  )
}

export { MobileNavbar }