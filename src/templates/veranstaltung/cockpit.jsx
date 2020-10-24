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
      <ColorCombinationsSelect state={state} setState={setState} />
      <input
        onChange={(e) => setState({ ...state, typeText: e.target.value })}
        value={state.typeText}
      />
      <textarea
        onChange={(e) => setState({ ...state, eventText: e.target.value })}
        value={state.eventText}
        className="border-1"
        rows={6}
        cols={30}
      />
      <input
        type="range"
        id="eventTextScale"
        name="eventTextScale"
        min={state.eventTextScaleRange[0]}
        max={state.eventTextScaleRange[1]}
        value={state.eventTextScale}
        onChange={(e) => setState({ ...state, eventTextScale: e.target.value })}
      />
      <input
        onChange={(e) => setState({ ...state, speakerText: e.target.value })}
        value={state.speakerText}
      />
      <input
        onChange={(e) => setState({ ...state, locationText: e.target.value })}
        value={state.locationText}
      />
      <input
        onChange={(e) => setState({ ...state, dateText: e.target.value })}
        value={state.dateText}
      />
      <button className="btn-download" onClick={() => html2image()}>
        Download
      </button>
    </div>
  );
};
