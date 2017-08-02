import React from 'react';
import React3 from 'react-three-renderer';
import ReactDOM from 'react-dom';
import garagefloor from './images/garagefloor.jpg'
var THREE = require('three');

class Ground extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
    this.groundPosition = new THREE.Vector3(0, -250, 0);
    this.groundRotation = new THREE.Euler(-Math.PI / 2, 0, 0);
    this.groundRepeat = new THREE.Vector2(25, 25);
  }
  render(){
    return(
      <mesh
     position={this.groundPosition}
     rotation={this.groundRotation}

   >
     <planeBufferGeometry
       width={20000}
       height={20000}
     />
     <meshPhongMaterial
       color={0xffffff}
       specular={0x111111}
     >
       <texture
         url={garagefloor}
         wrapS={THREE.RepeatWrapping}
         wrapT={THREE.RepeatWrapping}
         repeat={this.groundRepeat}
         anisotropy={16}
       />
     </meshPhongMaterial>
   </mesh>
    );
  }
}

export default Ground
