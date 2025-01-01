import { React } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';

import { HeaderContext } from '/src/contexts/HeaderContext.jsx';
import { OverlayContext } from '/src/contexts/OverlayContext.jsx';

import { navLinks } from '/src/Constant/index.js';
import iconClose from '/src/assets/images/icon-close.svg';

function Navbar() {
  const { toggleIsNavOpen } = useContext(HeaderContext);
  const { toggleIsOverlayActive } = useContext(OverlayContext);

  const MAX_PORTRAIT_WIDTH = 768;

  const closeMobileNavbar = () => {
    toggleIsNavOpen();
    toggleIsOverlayActive();
  }

  const closeOnResize = () => {
    if (window.innerWidth > MAX_PORTRAIT_WIDTH) {
      toggleIsNavOpen();
      toggleIsOverlayActive();
    }
  }

  useEffect(() => {
    window.addEventListener('resize', closeOnResize);

    return () => {
      window.removeEventListener('resize', closeOnResize);
    }
  }, []);


  return (
    <nav className={`mobile-navbar 
      w-[60%] fixed bg-white 
      top-0 left-0 bottom-0 px-4 py-6 
      z-30 md:hidden`}>

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