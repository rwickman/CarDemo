import React from 'react'
import seat1 from './images/Proelite.jpg'
import seat2 from './images/Plasticolor.jpg'
import seat3 from './images/TypeSRed.jpg'
import floorMat1 from './images/LloydMatUltimat.jpg'
import floorMat2 from './images/LloydMatVelourtex.jpg'
import floorMat3 from './images/LloydMatRubbertite.jpg'
import floorMat4 from './images/PlasticolorHondaElite.jpg'
import dashboardCover1 from './images/DashDesignsVelour.jpg'
import dashboardCover2 from './images/DashDesignsBrushedSuede.jpg'
import dashboardCover3 from './images/DashmatcCarpet.jpg'
import seat1Mtl from './models/seat1.mtl';
import seat1Obj from './models/seat1.obj';

function clicked() {
  console.log('Clicked');
}
const Part = (props) => {
  return(
    <div className=''>
      <div className ='col-sm-4 list-group'>
        <a onClick={()=>props.handleClick(carSeats)} href='#' className="list-group-item">Car Seat</a>

        <a onClick= {()=>props.handleClick(floorMats)}href='#' className="list-group-item">Floor Mats</a>

        <a onClick={()=>props.handleClick(dashboardCovers)}href='#' className="list-group-item">Dashboard Covers</a>

    </div>
  </div>
  );
};

const PartsList =(props) => {
    return(
      <div className ='container partsList'>
        <Part handleClick={props.handleClick}/>
      </div>
          );
        };


let carSeats = [
  {
  image: seat1,
  name:'Proelite',
  mtl: seat1Mtl,
  obj: seat1Obj
  },
  {
    image:seat2,
    name: 'Plasticolor',
    mtl: '',
    obj: ''
  },
  {
    image:seat3,
    name:'Type S Red',
    mtl: '',
    obj: ''
  },
];

let floorMats = [
  {
    image:floorMat1,
    name: 'Lloyd Mat Ultimat'
  },{
    image:floorMat2,
    name:'Lloyd Mat Velourtex'
  },{
    image:floorMat3,
    name:'Lloyd Mat Rubbertite',
  },{
    image:floorMat4,
    name:'Plasticolor Honda Elite'
  }
]

let dashboardCovers = [
  {
    image:dashboardCover1,
    name:'Dash Designs Velour'
  },{
    image: dashboardCover2,
    name: 'Dash Designs Brushed Suede'
  },{
      image: dashboardCover3,
      name: 'Dashmat Carpet'
  }
]

export default PartsList;
