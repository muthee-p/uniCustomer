'use client'

import {useEffect} from 'react'
import Image from 'next/image'
import mapboxgl from '!mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css';

const MapPage =() => {
  
  useEffect(() =>{
      mapboxgl.accesstoken = process.env.MAPBOX_API_TOKEN;
      
      const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v12', // style URL
        center: [-74.5, 40], 
        zoom: 9, 
      });

      return () => map.remove();

  }, []);
  
  return (
    <div id='map' style={{width:'100%', height: '400px'}}>
      
    </div>
  )
}

export default MapPage