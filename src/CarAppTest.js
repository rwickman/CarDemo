import React from 'react';
import React3 from 'react-three-renderer';
import ReactDOM from 'react-dom';
var THREE = require('three');
var OrbitControls = require('three-orbit-controls')(THREE)
var MTLLoader = require('three-mtl-loader');
var OBJLoader = require('three-obj-loader');
OBJLoader(THREE);





class CarTest extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.cameraPosition = new THREE.Vector3(0, 0, 1.2);
    this.state = {};


  }

  componentDidMount() {

  }
  componentWillUnmount() {
  this.controls.dispose();
  delete this.controls;
  this.refs.group.remove(this.props.loadedObject);
}
  componentWillReceiveProps(nextProps){
  if(nextProps.loadedObject !== this.props.loadedObject){
    this.refs.group.add(nextProps.loadedObject);
    const controls = new OrbitControls(this.refs.camera);
    this.controls = controls;
    console.log('Props Loaded');
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
      {/*<mesh
        rotation={this.state.cubeRotation}
      >
        <boxGeometry
          width={1}
          height={1}
          depth={1}
        />
        <meshBasicMaterial
          color={0x00ff00}
        />

      </mesh> */}
        <group ref='group' />
      </scene>
    </React3>);
  }
}

export default CarTest
