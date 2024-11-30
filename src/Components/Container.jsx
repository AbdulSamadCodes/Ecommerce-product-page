import { useContext } from 'react'; 
import { Header } from '/src/Components/Header.jsx';
import { MobileNavbar } from '/src/Components/MobileNavbar.jsx';
import { Main } from '/src/Components/Main.jsx';

function Container() {

  return (
      <div className='max-w-[1100px] ms-auto 
        me-auto px-6'>
          <Main />
      </div>
  );
}

export { Container };