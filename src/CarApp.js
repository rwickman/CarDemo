import React from 'react';
import React3 from 'react-three-renderer';
import ReactDOM from 'react-dom';
import garagefloor from './images/garagefloor.jpg'
import Ground from './Ground'
var THREE = require('three');
var OrbitControls = require('three-orbit-controls')(THREE)
var MTLLoader = require('three-mtl-loader');
var OBJLoader = require('three-obj-loader');
OBJLoader(THREE);


class CarTest extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.cameraPosition = new THREE.Vector3(0, -240, 1.2);
    this.state = {};
    //this.groundPosition = new THREE.Vector3(0, -250, 0);
    //this.groundRotation = new THREE.Euler(-Math.PI / 2, 0, 0);
    //this.groundRepeat = new THREE.Vector2(25, 25);
    this.carPosition = new THREE.Vector3(0,-10, 0);
    this.cardRotation = new THREE.Euler(-Math.PI / 2, 0, 0);
  }

  componentWillUnmount() {
  this.controls.dispose();
  delete this.controls;
  this.refs.group.remove(this.props.loadedObject);
}
  shouldComponentUpdate(nextProps, nextState){
    if(nextProps ===  this.props){
      return false;
    }else{
      return true;
    }
  }
  componentWillReceiveProps(nextProps){
  if(nextProps.loadedObject !== this.props.loadedObject){
    this.refs.group.remove(this.props.loadedObject);
    this.refs.group.add(nextProps.loadedObject);
    const controls = new OrbitControls(this.refs.camera);
    this.controls = controls;
    this.controls.maxDistance = 5;
    this.controls.enablePan = false;
    }
  }
  render() {
    const width = window.innerWidth; // canvas width
    const height = window.innerHeight; // canvas height
    var aspectratio = this.props.width / this.props.height;

    var cameraprops = {fov : 35, aspect : aspectratio,
                      near : 0.1, far : 1000,
                      position : new THREE.Vector3(0,0,5)};
    return (
      <div className='car'>
      <React3
    mainCamera="camera" // this points to the perspectiveCamera which has the name set to "camera" below
      width={width}
      height={height}
    >
      <scene>
        <perspectiveCamera
          name="camera"
          ref="camera"
          {...cameraprops}
          fov={75}
          aspect={width / height}
          near={0.1}
          far={1000}
          position={this.cameraPosition}
        >
        <pointLight
         color={0xffffff}
         intensity={1}
         />
         </perspectiveCamera>
         <ambientLight intensity={0.2}/>

        <group ref='group'

         />
      </scene>
    </React3>
    </div>
  );
  }
}

export default CarTest
