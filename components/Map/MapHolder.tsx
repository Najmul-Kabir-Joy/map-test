import React, { useMemo, useState, useEffect } from "react";
import Map, { Marker, NavigationControl, GeolocateControl } from "react-map-gl";
import { PopupInfo } from "../../types/types";
import MapPopup from "./MapPopup";
import Pin from "./Pin";
import ViewChanger from "./ViewChanger";
const MapHolder = () => {
  const [popupInfo, setPopupInfo] = useState<PopupInfo | null>(null);
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [viewHandler, setViewHandler] = useState<string>("streets-v11");
  const [cities, setCities] = useState<[]>([]);
  useEffect(() => {
    fetch("./cities.json")
      .then((res) => res.json())
      .then((data) => setCities(data));
  }, []);
  const pins = useMemo(
    () =>
      cities.map((city: PopupInfo, index) => (
        <Marker
          key={`marker-${index}`}
          longitude={city.longitude}
          latitude={city.latitude}
          anchor="bottom"
          onClick={(e) => {
            e.originalEvent.stopPropagation();
            setShowPopup(true);
            setPopupInfo(city);
          }}
        >
          <Pin />
        </Marker>
      )),
    [cities]
  );
  return (
    <div className="h-[760px] p-24 relative">
      <ViewChanger currentView={viewHandler} handleChange={setViewHandler} />
      <Map
        initialViewState={{
          latitude: 39.7618,
          longitude: -104.8806,
          zoom: 4,
          bearing: 0,
          pitch: 0,
        }}
        mapStyle={`mapbox://styles/mapbox/${viewHandler}`}
        mapboxAccessToken={
          "pk.eyJ1IjoibmFqbXVsMTc4IiwiYSI6ImNsOHJicW04ZjBtMDAzbnVrdWU1czdzaXUifQ.nsrIfmqbdmc_kzjeXd4AxQ"
        }
      >
        <NavigationControl position="bottom-right" showCompass={false} />
        <GeolocateControl position="bottom-right" />

        {pins}

        {showPopup && (
          <MapPopup data={popupInfo as PopupInfo} handleClose={setShowPopup} />
        )}
      </Map>
    </div>
  );
};

export default MapHolder;
