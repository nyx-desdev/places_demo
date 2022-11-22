import React, { useEffect, useRef } from "react";
import ReactMap from "react-map-gl";
import { useSelector } from "react-redux";
import { selectLatitude, selectLongitude } from "../store/mapSearchSlice";

const Map = () => {
  const mapRef = useRef();
  const lat = useSelector(selectLatitude);
  const lng = useSelector(selectLongitude);
  const [viewState, setViewState] = React.useState({
    longitude: lng,
    latitude: lat,
    zoom: 9,
  });

  useEffect(() => {
    mapRef.current?.flyTo({ center: [lng, lat], duration: 2000 });
  }, [lat, lng]);

  const handleMove = (evt) => {
    setViewState(evt.viewState);
  };

  return (
    <ReactMap
      {...viewState}
      ref={mapRef}
      mapboxAccessToken={process.env.REACT_APP_MAPBOX_API_KEY}
      onMove={(evt) => handleMove(evt)}
      style={{ height: 400 }}
      mapStyle="mapbox://styles/mapbox/streets-v11"
    />
  );
};

export default Map;
