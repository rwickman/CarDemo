import React from 'react';
import ReactDOM from 'react-dom';

const MenuItem = (props) => {
	return(
  	<div className='col-md-12' >
      <a className='menuLink' onClick={() => props.clicked('click')}>Car Demo</a>
    </div>
  );
};

class Menu extends React.Component{
	render(){
  	return(
    	<div className='body'>
    	<div className="container menu">
        <div className="row">
          <h1 className='heading col-md-12'>AutoZone Build-A-Car</h1>
    	  <MenuItem clicked={this.props.clicked}/>
        </div>
      </div>
      </div>
    );
  }
}

export default Menu
