import React from 'react';
import ReactDOM from 'react-dom';


const Item = (props) => {
    return(
          <button onClick={()=> props.changeMtl(props.mtl, props.obj)} type="button" className="btn btn-default btn-sm item">
            <img className="img-thumbnail img-responsive image" src={props.image} />
            <p className='autoZoneOrange'>{props.name}</p>
          </button>
    );
};

class ItemList extends React.Component {
  state={
    parts:[]
  }
  render(){
    return(
      <div className='container'>
        <div className="footer navbar-fixed-bottom">
          <div className='btn-group'>
          {this.props.catalog.map((item) => <Item changeMtl={this.props.changeMtl} key={item.name} {...item} /> )}
        </div>
      </div>
      </div>
    );
  }
};



let floorMatts =[{

}]


export default ItemList;
