import { React } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

import { useDebounce } from '/src/hooks/debounce.js'

import { navLinks } from '/src/Constant/index.js';
import logo from '/src/assets/images/logo.svg';


function Header() {
  const [] = useState();

  useEffect(() => {

  }); 

  return (
    <header className="header">
      <a href={`#`}>
        <img src={logo} width="110px"/>
      </a>
      <nav>

      </nav>
    </header>
  );  
}

export { Header };