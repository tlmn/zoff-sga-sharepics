import ColorCombinationsSelect from "../../components/colorCombinationsSelect";
import React from "react";
import htmlToImage from "html-to-image";
import slugify from "react-slugify";

export default ({ state, setState }) => {
  const html2image = async () => {
    setState({ ...state, templateScale: false });
    htmlToImage
      .toJpeg(state.templateRef.current, {
        quality: 1,
        width: 1080,
        height: 1080,
      })
      .then(function (dataUrl) {
        var link = document.createElement("a");
        link.download = `sharepic-${slugify(state.bodyText)}.jpg`;
        link.href = dataUrl;
        link.click();
        setState({ ...state, templateScale: true });
      });
  };

  return (
    <div className="p-1 bg-turquoise">
      <input
        type="file"
        id="file"
        name="file"
        onChange={(e) =>
          e.target.files[0] !== null &&
          setState({
            ...state,
            image: {
              ...state.image,
              url: URL.createObjectURL(e.target.files[0]),
            },
          })
        }
      />
      <input
        type="range"
        id="imageScale"
        name="imageScale"
        min="0"
        defaultValue={state.image.scale}
        max="30"
        onChange={(e) =>
          setState({
            ...state,
            image: {
              ...state.image,
              scale: e.target.value,
            },
          })
        }
      />
      <button
        className="block border-2 border-black p-1 mt-2"
        onClick={() =>
          setState({
            ...state,
            image: {
              ...state.image,
              position: { x: 0, y: 0 },
            },
          })
        }
      >
        Reset Bildausschnitt
      </button>
      <ColorCombinationsSelect state={state} setState={setState} />
      <textarea
        onChange={(e) => setState({ ...state, bodyText: e.target.value })}
        value={state.bodyText}
        className="border-1"
        rows={3}
        cols={30}
      />
      <input
        type="range"
        id="bodyTextScale"
        name="bodyTextScale"
        min={state.bodyTextScaleRange[0]}
        max={state.bodyTextScaleRange[1]}
        value={state.bodyTextScale}
        onChange={(e) => setState({ ...state, bodyTextScale: e.target.value })}
      />
      <button className="btn-download" onClick={() => html2image()}>
        Download
      </button>
    </div>
  );
};
