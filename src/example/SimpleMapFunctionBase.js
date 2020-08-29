import React, { useState } from "react";
import NeshanMap from "../NeshanMap";
import NeshanMapLoader from "../NeshanMapLoader";
const SimpleMap = () => {
  const [ol, setOl] = useState();

  return (
    <>
      <NeshanMapLoader onLoad={setOl}>
        {ol && (
          <NeshanMap
            options={{
              key: "YOUR_API_KEY",
              maptype: "dreamy",
              poi: true,
              traffic: false,
              view: new ol.View({
                center: ol.proj.fromLonLat([51.338076, 35.699756]),
                zoom: 14,
              }),
            }}
            onInit={(myMap) => {
              var layer = new ol.layer.Vector({
                source: new ol.source.Vector({
                  features: [
                    new ol.Feature({
                      geometry: new ol.geom.Point(
                        ol.proj.fromLonLat([51.338076, 35.699756])
                      ),
                    }),
                  ],
                }),
                style: new ol.style.Style({
                  image: new ol.style.Icon({
                    color: "#BADA55",
                    crossOrigin: "anonymous",
                    src:
                      "https://openlayers.org/en/latest/examples/data/square.svg",
                  }),
                }),
              });
              myMap.addLayer(layer);
            }}
          />
        )}
      </NeshanMapLoader>
    </>
  );
};
export default SimpleMap;
