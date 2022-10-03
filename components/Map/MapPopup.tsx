import Image from "next/image";
import React from "react";
import Map, { Popup } from "react-map-gl";
import { PopupInfo } from "../../types/types";
import EyeIcon from "../assets/icons/EyeIcon";
import InfoIcon from "../assets/icons/InfoIcon";
import LocationIcon from "../assets/icons/LocationIcon";
const MapPopup = ({
  data,
  handleClose,
}: {
  data: PopupInfo;
  handleClose: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { latitude, longitude, city, image, state, checkins } = data;
  return (
    <Popup
      anchor="top-right"
      longitude={Number(longitude)}
      latitude={Number(latitude)}
      onClose={() => handleClose(false)}
      className="min-h-[332px] min-w-[312px]"
    >
      <div id="card-container" className="h-full w-full bg-white">
        <div id="image-holder" className="h-full w-full">
          <Image
            src={image}
            alt={city}
            height={"216px"}
            width={"312px"}
            objectFit={"cover"}
          />
        </div>
        <div id="body-holder">
          <div
            id="title-container"
            className="flex justify-between items-center p-2"
          >
            <h4 id="title" className="text-lg font-bold">
              {city}
            </h4>
            <InfoIcon />
          </div>
          <div id="content-container" className="px-2">
            <div
              id="content-wrapper"
              className="flex items-center gap-2 text-base"
            >
              <LocationIcon />
              <p id="location-text">{state}</p>
            </div>
            <div
              id="content-wrapper"
              className="flex items-center gap-2 mt-3 text-xs"
            >
              <EyeIcon />
              <p id="location-text">{checkins + " people visited"}</p>
            </div>
          </div>
        </div>
      </div>
    </Popup>
  );
};

export default MapPopup;
