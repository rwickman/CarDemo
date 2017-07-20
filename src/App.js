import React, { Component } from 'react';
import Car from './CarApp'
import logo from './logo.svg';
import './App.css';
import Menu from './Menu'
import ItemList from './Items'
import PartsList from './PartsMenu'
import CarTest from './CarAppTest'
import ResetButton from './Reset';
import React3 from 'react-three-renderer';
import defaultObj from './models/truck.obj';
import defaultMtl from './models/truck.mtl';
import block2Obj from './models/block2.obj';
import block2Mtl from './models/block2.mtl';
import seat1Obj from './models/seat1.obj';
import seat1Mtl from './models/seat1.mtl';
import MTLLoader from './loaders/MTLLoader';


var THREE = require('three');
var OrbitControls = require('three-orbit-controls')(THREE)

var OBJLoader = require('three-obj-loader');
OBJLoader(THREE);




class App extends Component {
  state ={clicked:''};
  clickHandler = (clickedLink) => {
      this.setState({
          clicked: {clickedLink} })
  };
  render() {
    const {clicked} = this.state;
    return (
      <div className="App">
      {clicked ? <CarDemoApp /> : <Menu clicked={this.clickHandler} /> }

      </div>
    );
  }
}

class CarUI extends Component {
  state={ catalog: [] }
  handleClick =(data) =>{
    this.setState({ catalog: data});
  };
  shouldComponentUpdate(nextProps, nextState){
    if(nextState.catalog ===  this.state.catalog){
      return false;
    }else{
      return true;
    }
  }
    render(){
      const {catalog} = this.state;
        return(
          <div>
          <PartsList handleClick={this.handleClick} />
            <ItemList catalog={catalog} changeMtl={this.props.changeMtl}/>

          </div>
        );
    }
}


function onProgress(xhr){
  console.log('Loaded the obj');
}

function onError(xhr){
  console.log('Error on obj');
}




class CarDemoApp extends Component{
  constructor(props){
    super(props)
    this.state = { carMtl: '' ,
                  carModel: '',
                  objFile: ''};

  }


  loader= (mtl, carObj) => {
  const mtlLoader = new THREE.MTLLoader();
  //mtlLoader.setBaseUrl('');
  mtlLoader.setPath("");
  mtlLoader.crossOrigin = '*';
  mtlLoader.load(mtl, materials => {
      materials.preload();
      // OBJ Loader
      const objLoader = new THREE.OBJLoader();;
      objLoader.setMaterials( materials );

      objLoader.setPath('');
      objLoader.load(carObj, object => {
        for(let child of object.children) {
           child.material.side = THREE.DoubleSide
       }


    this.setState({
        carModel: object,
        carMtl: mtl,
        objFile: carObj
      });

  }, onProgress, onError);
  }); }

  componentDidMount(){
    this.loader(defaultMtl, defaultObj);
  }

  changeMtl =(mtl, obj) =>{
    if(this.state.objFile ===  obj && this.state.carMtl === mtl){
      return false;
    }else{
      this.loader(mtl, obj);
    }
  };
  render(){
    const {color} = this.state;
      return(
        <div>
          <CarUI changeMtl={this.changeMtl}/>
          <ResetButton changeMtl={this.changeMtl}/>

          <Car color= {color} loadedObject={this.state.carModel}/>


        </div>
      );
  }
}

export default App;
