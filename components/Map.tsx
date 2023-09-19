"use client"

import { useRef, useState } from "react";
import Link from "next/link";
import { Image } from "cloudinary-react";
import ReactMapGL, { Marker, Popup, ViewState } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

// import { useLocalState } from "src/utils/useLocalState";
// import { HousesQuery_houses } from "src/generated/HousesQuery";
// import { SearchBox } from "./searchBox";

export {};
interface IProps {}

export default function Map({}: IProps) {
  const mapRef = useRef<ReactMapGL | null>(null);
  const [viewport, setViewport] = useState<ViewState>({
    latitude: -1.2,
    longitude: 36.8,
    zoom: 25,
  });
  

  return (
    <div className="bg-white h-screen">
      <ReactMapGL
        {...viewport}
        width="100%"
        height="100vh"
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
        ref={(instance) => (mapRef.current = instance)}
        minZoom={5}
        maxZoom={15}
        mapStyle="mapbox://styles/p254/clmq92bgd023d01pb3c9u4ua4"
      ></ReactMapGL>
    </div>
  );
}