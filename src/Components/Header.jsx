import { React } from 'react';
import { useContext } from 'react';
import { HeaderContext } from '/src/contexts/HeaderContext.jsx';
import { OverlayContext } from '/src/contexts/OverlayContext.jsx';

import { navLinks } from '/src/Constant/index.js';
import iconMenu from '/src/assets/images/icon-menu.svg';
import logo from '/src/assets/images/logo.svg';
import iconCart from '/src/assets/images/icon-cart.svg';
import imageAvatar from '/src/assets/images/image-avatar.png'

import { CartContext } from '/src/contexts/CartContext.jsx';
import { CartBasketCount } from '/src/Components/Cart/CartBasketCount.jsx';

function Header() {
  const { isNavOpen, toggleIsNavOpen } = useContext(HeaderContext);
  const { toggleIsOverlayActive } = useContext(OverlayContext);
  const { isCartVisible, toggleCartVisible } = useContext(CartContext);

  const openMobileNavbar = () => {
    toggleIsNavOpen();
    toggleIsOverlayActive();
  }

  return (
    <header className='header bg-white fixed w-full 
      px-4 top-0 left-0 z-[15]'>

      <div className='max-w-[1100px] 
       ms-auto me-auto py-3 md:py-5 
       top-0 flex items-center
       gap-7 md:gap-8 md:border-b-1
     border-b-grayish-blue'>

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

        <span className='ms-auto flex items-center gap-4 
          md:gap-10' onClick={null}>
          <button className='relative'>
            <img src={iconCart} width={'25px'}
              onClick={toggleCartVisible} />

            {isCartVisible && <CartBasketCount />}
          </button>

          <button className='profile-avatar rounded-full'>
            <img src={imageAvatar} width={'40px'} />
          </button>
        </span>

      </div>
    </header>
  )
}

export { Header };