import { React } from 'react';

import { navLinks } from '/src/Constant/index.js';

import iconMenu from '/src/assets/images/icon-menu.svg';
import logo from '/src/assets/images/logo.svg';
import iconCart from '/src/assets/images/icon-cart.svg';
import imageAvatar from '/src/assets/images/image-avatar.png'
import iconClose from '/src/assets/images/icon-close.svg';

import { useToggle } from '/src/hooks/useToggle.js';

function MobileNavbar({ handleMobileNav }) {

  return (
    <nav className={`mobile_navbar 
      w-[60%] fixed 
      top-0 left-0  bottom-0 bg-black p-6 
      transition-md:hidden`}>
      <button onClick={handleMobileNav}>
        <img src={iconClose} />
      </button>

      <ul className='flex flex-col gap-y-4 mt-[60px]'>
        {navLinks.map((navLink) => {
          const { id, title } = navLink;

          return <li key={id}>
            <a href="#" className='text-white
             font-semibold'>
              {title}
            </a>
          </li>
        })}
      </ul>

    </nav>
  );
}

function Header() {
  const [isNavOpen, toggleIsNavOpen] = useToggle(false);

  const handleMobileNav = () => {
    toggleIsNavOpen(prevState => !prevState);
  }

  return (
    <header className='header py-4 px-4 fixed
      top-0 left-0 right-0 flex items-center
      gap-4 md:gap-10 z-10'>
      <button className='md:hidden'>
        <img src={iconMenu} onClick={handleMobileNav} />
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

      {isNavOpen &&
        <MobileNavbar isActive={isNavOpen}
          handleMobileNav={handleMobileNav} />}
    </header>
  )
}

export { Header };