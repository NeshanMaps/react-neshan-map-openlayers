import React, { useEffect, useRef } from "react";

const NeshanMap = (props) => {
  const { style, options, onInit } = props;
  const mapEl = useRef(null);

  const defaultStyle = {
    width: "600px",
    height: "450px",
    margin: 0,
    padding: 0,
    background: "#eee",
  };

  const defaultOptions = {
    key: "YOUR_API_KEY",
    view: new window.ol.View({
      center: window.ol.proj.fromLonLat([51.338076, 35.699756]),
      zoom: 14,
    }),
  };

  useEffect(() => {
    let map = new window.ol.Map({
      ...defaultOptions,
      ...options,
      ...{
        target: mapEl.current,
      },
    });
    if (onInit) onInit(map);
  });
  return <div ref={mapEl} style={{ ...defaultStyle, ...style }} />;
};

export default NeshanMap;
