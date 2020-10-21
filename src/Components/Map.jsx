import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const MapComponent = (props) => {
  const [position, setPosition] = useState(undefined);
  const [center, setCenter] = useState();

  useEffect(() => {
    props.response.live
      ? setPosition({
          lat: props.response.live.latitude,
          lng: props.response.live.longitude,
        })
      : setPosition(undefined);
  }, [props.response.live]);

  const containerStyle = {
    height: "500px",
  };

  return (
    <LoadScript googleMapsApiKey="">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{ lat: 36, lng: -104 }}
        zoom={4}
      >
        {/* Child components, such as markers, info windows, etc. */}
        <Marker position={position} />
      </GoogleMap>
    </LoadScript>
  );
};

export default React.memo(MapComponent);
