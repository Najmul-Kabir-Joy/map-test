import React, { useMemo, useState, useEffect } from "react";
import Map, { Marker, NavigationControl, GeolocateControl } from "react-map-gl";
import { getCoordination } from "../../helpers/CoordinationSetter";
import { useMapSearch } from "../../store/MapStore";
import { PopupInfo } from "../../types/types";
import MapPopup from "./MapPopup";
import Pin from "./Pin";
import ViewChanger from "./ViewChanger";
const MapHolder = () => {
  const { searchKey, quickAccessKey } = useMapSearch((state) => state);
  const [popupInfo, setPopupInfo] = useState<PopupInfo | null>(null);
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [viewHandler, setViewHandler] = useState<string>("streets-v11");
  const [viewState, setViewState] = React.useState({
    longitude: -100,
    latitude: 40,
    zoom: 4,
  });
  const [cities, setCities] = useState<PopupInfo[]>([]);
  useEffect(() => {
    fetch("./cities.json")
      .then((res) => res.json())
      .then((data) => setCities(data));
  }, []);
  const pins = useMemo(
    () =>
      cities
        .filter((city: PopupInfo) => {
          if (
            city.city.toLowerCase().includes(searchKey) ||
            city.state.toLowerCase().includes(searchKey)
          ) {
            return city;
          }
        })
        .map((city: PopupInfo, index) => (
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
    [cities, searchKey]
  );
  useEffect(() => {
    const { latitude, longitude } = getCoordination(quickAccessKey);
    setViewState({
      ...viewState,
      latitude: latitude,
      longitude: longitude,
      zoom: 5,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quickAccessKey]);

  return (
    <div className="h-[760px] p-24 relative">
      <ViewChanger currentView={viewHandler} handleChange={setViewHandler} />
      <Map
        // initialViewState={{
        //   latitude: latitude,
        //   longitude: longitude,
        //   zoom: 4,
        //   bearing: 0,
        //   pitch: 0,
        // }}
        {...viewState}
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
