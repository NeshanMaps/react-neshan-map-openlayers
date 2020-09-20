# ⚛️ A minimal React wrapper for OpenLayers 5+

### Developed by [Neshan Maps Platform team](https://platform.neshan.org).
### For Farsi/Persian document, [click here](https://developers.neshan.org/react-component/).

## Getting started
We have two components: `NeshanMapLoader`, `NeshanMap`.<br>
Please note that to use `NeshanMap` component you must first load `Openlayers` library.<br>
<br>
In the simple case you just need to add `options` prop to `NeshanMap` component under the `NeshanMapLoader` component.


```javascript
import React, { useState } from "react";
import NeshanMap, {NeshanMapLoader} from "react-neshan-map-openlayers";

const SimpleMap = () => {
  const [ol, setOl] = useState();

  return (
    <NeshanMapLoader onLoad={setOl}>
      {ol && (
        <NeshanMap
          options={{
            key: "YOUR_API_KEY",
            view: new ol.View({
              center: ol.proj.fromLonLat([51.338076, 35.699756]),
              zoom: 13,
            }),
          }}
        />
      )}
    </NeshanMapLoader>
  );
};
export default SimpleMap;


```

## Installation

npm:
```
npm install react-neshan-map-openlayers
```

## Features

### Neshan Maps API Loads on Demand

There is no need to place a `<script src=` tag at top of page. The Neshan Maps API loads upon the first usage of the `NeshanMap` component.

### Use Openlayers Maps API 

You can access to `map` objects by using `onInit`.

```javascript
...
<NeshanMapLoader onLoad={setOl}>
  {ol && (
    <NeshanMap
      options={{
        key: 'YOUR_API_KEY',
        maptype: 'dreamy',
        poi: true,
        traffic: false,
        view: new ol.View({
          center: ol.proj.fromLonLat([51.338076, 35.699756]),
          zoom: 14
        })
      }}

      onInit={(myMap) => {
        var layer = new ol.layer.Vector({
          source: new ol.source.Vector({
            features: [
              new ol.Feature({
                geometry: new ol.geom.Point(
                  ol.proj.fromLonLat([51.338076, 35.699756])
                )
              })
            ]
          }),
          style: new ol.style.Style({
            image: new ol.style.Icon({
              color: '#BADA55',
              crossOrigin: 'anonymous',
              src:
                'https://openlayers.org/en/latest/examples/data/square.svg'
            })
          })
        })
        myMap.addLayer(layer)
      }}

    />
  )}
</NeshanMapLoader>

```

[Example here](https://github.com/AliSeyfollahi/react-neshan-map-openlayers/blob/master/src/example/SimpleMapFunctionBase.js#L9)

