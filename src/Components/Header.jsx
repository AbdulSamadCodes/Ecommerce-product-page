import { React } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

import { NavbarList } from '/src/Components/NavbarList.jsx'
import logo from '/src/assets/images/logo.svg';
import iconMenu from '/src/assets/images/icon-menu.svg';

import { MobileNavbar } from '/src/Components/MobileNavbar.jsx';

function Navbar() {
  const styles = ['flex','items-center','gap-4'];

  return (
    <nav className="flex items-center gap-x-4">
      <NavbarList styles={styles}/>
    </nav>
  );
}

function Header() {
  const [deviceType,setDeviceType] = useState('');
  
  const handleDeviceType = () => {
    window.innerWidth <= 575 ? setDeviceType('small') 
                             : setDeviceType('large');
   
  }

  useEffect(() => {
    window.addEventListener("resize",handleDeviceType);
    window.addEventListener("onload",handleDeviceType);

    return () => {
      window.removeEventListener("resize",handleDeviceType);
      window.removeEventListener("onload",handleDeviceType);
    };
  }); 

  return (
    <header className='header fixed 
      top-0 left-0 right-0 px-4
      py-4 flex items-center gap-4'  
      >

      {deviceType === "small" && <img src={iconMenu}/>}  
    
      <a href={`#`}>
        <img src={logo} width="110px"/>
      </a>

      { deviceType === "small" ? <MobileNavbar /> : <Navbar />}
    </header>
  );  
}

export { Header };