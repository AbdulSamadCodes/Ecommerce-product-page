import { React } from 'react';
import { useReducer } from 'react';

import iconPlus from '/src/assets/images/icon-plus.svg';
import iconMinus from '/src/assets/images/icon-minus.svg';

import { initialState, handleCounter , ACTIONS} from '/src/Constant/CartCounter.js'


function CartCounter() {
  

  return (
    <div className='flex items-center gap-3'>
      <button className='counter__btn'>
        <img src={iconPlus} />
      </button>

      <p className='font-bold'>{state.count}</p>
    
      <button className='counter__btn'>
        <img src={iconMinus} />
      </button>
    </div>
  );
}

export { CartCounter };