import { React } from 'react';
import { useContext } from 'react';

import { HeaderContext } from '/src/contexts/HeaderContext.jsx';
import { OverlayContext } from '/src/contexts/OverlayContext.jsx';

import { navLinks } from '/src/Constant/index.js';
import iconMenu from '/src/assets/images/icon-menu.svg';
import logo from '/src/assets/images/logo.svg';
import iconCart from '/src/assets/images/icon-cart.svg';
import imageAvatar from '/src/assets/images/image-avatar.png'

function Header() {
  const { isNavOpen, setIsNavOpen } = useContext(HeaderContext);
  const { setIsOverlayActive } = useContext(OverlayContext);

  const openMobileNavbar = () => {
    setIsNavOpen(true);
    setIsOverlayActive(true);
  }

  return (
    <header className='header max-w-[1100px] 
      ms-auto me-auto py-4 px-4 fixed
      top-0 left-0 right-0 flex items-center
      gap-4 md:gap-10 z-10'>
      <button className='md:hidden' onClick={openMobileNavbar}>
        <img src={iconMenu} />
      </button>

      <a href="">
        <img href={'#'} src={logo} width={'110px'} />
      </a>

      {
        <nav className='navbar'>
          <ul className=' gap-12 hidden md:flex items-center'>
            {navLinks.map((navLink) => {
              const { id, title } = navLink;

              return <li key={id}>
                <a className='text-dark-grayish-blue'
                  href="#">
                  {title}
                </a>
              </li>
            })}
          </ul>
        </nav>
      }

      <span className='ms-auto flex items-center gap-4 md:gap-10'>
        <a href="#">
          <img src={iconCart} width={'25px'} />
        </a>

        <a href="#">
          <img src={imageAvatar} width={'30px'} />
        </a>
      </span>

    </header>
  )
}

export { Header };