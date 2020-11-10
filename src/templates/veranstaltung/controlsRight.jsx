import ColorThemesSelect from "../../components/inputs/colorThemesSelect";
import React from "react";
import { html2image } from "../../lib/lib";

export default ({ state, setState }) => (
  <>
    <label>Kategorie</label>
    <input
      onChange={(e) =>
        setState({
          ...state,
          ...state.slides.splice(state.currentSlide, 1, {
            ...state.slides[state.currentSlide],
            data: {
              ...state.slides[state.currentSlide].data,
              type: {
                content: e.target.value,
              },
            },
          }),
        })
      }
      value={state.slides[state.currentSlide].data.type.content}
    />
    <label>Titel</label>
    <textarea
      onChange={(e) =>
        setState({
          ...state,
          ...state.slides.splice(state.currentSlide, 1, {
            ...state.slides[state.currentSlide],
            data: {
              ...state.slides[state.currentSlide].data,
              event: {
                ...state.slides[state.currentSlide].data.event,
                content: e.target.value,
              },
            },
          }),
        })
      }
      value={state.slides[state.currentSlide].data.event.content}
      className="border-1"
      rows={6}
      cols={30}
    />
    <label>Textgröße</label>
    <input
      type="range"
      id="eventTextScale"
      name="eventTextScale"
      min={state.slides[state.currentSlide].data.event.scaleRange[0]}
      max={state.slides[state.currentSlide].data.event.scaleRange[1]}
      value={state.slides[state.currentSlide].data.event.scale}
      onChange={(e) =>
        setState({
          ...state,
          ...state.slides.splice(state.currentSlide, 1, {
            ...state.slides[state.currentSlide],
            data: {
              ...state.slides[state.currentSlide].data,
              event: {
                ...state.slides[state.currentSlide].data.event,
                scale: e.target.value,
              },
            },
          }),
        })
      }
    />

    <label>Referent:in</label>
    <input
      onChange={(e) =>
        setState({
          ...state,
          ...state.slides.splice(state.currentSlide, 1, {
            ...state.slides[state.currentSlide],
            data: {
              ...state.slides[state.currentSlide].data,
              speaker: {
                content: e.target.value,
              },
            },
          }),
        })
      }
      value={state.slides[state.currentSlide].data.speaker.content}
    />

    <label>Ort</label>
    <input
      onChange={(e) =>
        setState({
          ...state,
          ...state.slides.splice(state.currentSlide, 1, {
            ...state.slides[state.currentSlide],
            data: {
              ...state.slides[state.currentSlide].data,
              location: {
                content: e.target.value,
              },
            },
          }),
        })
      }
      value={state.slides[state.currentSlide].data.location.content}
    />

    <label>Datum, Zeit</label>

    <input
      onChange={(e) =>
        setState({
          ...state,
          ...state.slides.splice(state.currentSlide, 1, {
            ...state.slides[state.currentSlide],
            data: {
              ...state.slides[state.currentSlide].data,
              date: {
                content: e.target.value,
              },
            },
          }),
        })
      }
      value={state.slides[state.currentSlide].data.date.content}
    />

    <label>Lokalgruppe (optional)</label>

    <textarea
      onChange={(e) =>
        setState({
          ...state,
          ...state.slides.splice(0, 1, {
            ...state.slides[0],
            data: {
              ...state.slides[0].data,
              localBranch: { content: e.target.value },
            },
          }),
        })
      }
      rows={2}
    >
      {state.slides[0].data.localBranch.content}
    </textarea>
    <button
      className="btn btn-download"
      onClick={() =>
        html2image(
          {
            state,
            setState,
          },
          `veranstaltung-${state.slides[0].data.event.content}`
        )
      }
    >
      Download
    </button>
  </>
);
