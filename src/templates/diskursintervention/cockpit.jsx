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
        onChange={(e) => setState({ ...state, categoryText: e.target.value })}
        value={state.categoryText}
      />
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
      <input
        onChange={(e) => setState({ ...state, logoLocalBranch: e.target.value })}
        value={state.logoLocalBranch}
      />
      <button className="btn-download" onClick={() => html2image()}>
        Download
      </button>
    </div>
  );
};
