import React, { useEffect } from "react";
import neshan_map_loader from "./loaders/neshan_map_loader";

const NeshanMapLoader = (props) => {
  useEffect(() => {
    neshan_map_loader({
      onLoad: () => {
        if (props.onLoad) props.onLoad(window.ol);
      },
      onError: () => {
        console.error(
          "Neshan Maps Error: This page didn't load Neshan Maps correctly"
        );
      },
    });
  }, []);

  return <div>{props.children}</div>;
};

export default NeshanMapLoader;
