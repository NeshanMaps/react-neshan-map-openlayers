const BASE_URL = "https://static.neshan.org";
const DEFAULT_URL = `${BASE_URL}/sdk/openlayers/5.3.0/ol.js`;
const DEFAULT_URL_STYLE = `${BASE_URL}/sdk/openlayers/5.3.0/ol.css`;

export default (props) => {
  const createScript = () => {
    const { onError, onLoad } = props;

    const style = document.createElement("link");
    style.href = DEFAULT_URL_STYLE;
    style.rel = "stylesheet";
    document.head.appendChild(style);

    const script = document.createElement("script");

    script.src = DEFAULT_URL;

    script.onload = () => {
      if (onLoad) onLoad();
      return;
    };

    script.onerror = () => {
      if (onError) onError();
      return;
    };

    document.body.appendChild(script);
  };

  return createScript();
};
