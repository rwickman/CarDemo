import React from 'react';
import ReactDOM from 'react-dom';
import defaultMtl from './models/truck.mtl';
import defaultObj from './models/truck.obj';

const ResetButton =  (props) => {
  return(
    <div className=''>
      <div className='resetButton'>
        <button onClick={()=> props.changeMtl(defaultMtl, defaultObj)} type="button" className="well btn btn-default btn-sm item">
          RESET
        </button>
      </div>
    </div>
  );
}

export default ResetButton;
