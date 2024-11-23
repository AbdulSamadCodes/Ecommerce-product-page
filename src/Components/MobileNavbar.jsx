import { React } from 'react';

import { NavbarList } from '/src/Components/NavbarList.jsx'
import iconClose from '/src/assets/images/icon-close.svg';

function MobileNavbar() {
  const styles = ['mt-[60px]'];

  return (
    <nav className={`mobile_nav w-[60%] fixed top-0 left-0
     bottom-0 pt-[40px] pl-4 bg-black text-white`}>
      <button>
        <img src={iconClose} />
      </button>

      <NavbarList styles={styles}/>
    </nav>
  );
}

export { MobileNavbar };