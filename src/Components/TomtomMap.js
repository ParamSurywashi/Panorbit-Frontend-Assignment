import React,{useState, useRef, useEffect} from 'react'
import '@tomtom-international/web-sdk-maps/dist/maps.css'
import tomtom from '@tomtom-international/web-sdk-maps';

function TomtomMap() {
    const mapElement = useRef();
    const [mapLongitude, setMapLongitude] = useState(-121.91599);
const [mapLatitude, setMapLatitude] = useState(37.36765);
const [mapZoom, setMapZoom] = useState(13);
const [map, setMap] = useState({});


const increaseZoom = () => {
    if (mapZoom < 15) {
      setMapZoom(mapZoom + 1);
    }
  };
  
  const decreaseZoom = () => {
    if (mapZoom > 1) {
      setMapZoom(mapZoom - 1);
    }
  };
  
  const updateMap = () => {
    map.setCenter([parseFloat(mapLongitude), parseFloat(mapLatitude)]);
    map.setZoom(mapZoom);
  };
  useEffect(() => {
    let map = tomtom.map({
      key: "60AJ9UtkaPGodnvLn1oXfYkwWOggQmXK",
      container: mapElement.current,
      center: [mapLongitude, mapLatitude],
      zoom: mapZoom
    });
    setMap(map);
    return () => map.remove();
  }, []);


  return (
    <>
    <input
   type="text"
   name="longitude"
   value={mapLongitude}
   onChange={(e) => setMapLongitude(e.target.value)}
/>
   <div ref={mapElement} className="mapDiv"></div>
   </>
  )
}

export default TomtomMap