import React, { useRef } from "react";
import { formatEmojis, getColor } from "../../lib/lib";

import Draggable from "react-draggable";
import LogoArrow from "../../assets/svg/logo-arrow";

export default ({ state, setState }) => {
  const draggableRef = useRef(null);
  switch (state.currentSlide) {
    default:
      return (
        <div className="col-span-6 relative">
          <div
            className={`template ${
              state.templateScale ? `template-scale` : `relative`
            }`}
            style={{ backgroundColor: getColor(state, 0) }}
            ref={state.slides[state.currentSlide].ref}
          >
            <Draggable
              onDrag={(e, data) => {
                setState({
                  ...state,
                  ...state.slides.splice(state.currentSlide, 1, {
                    ...state.slides[state.currentSlide],
                    data: {
                      ...state.slides[state.currentSlide].data,
                      image: {
                        ...state.slides[state.currentSlide].data.image,
                        position: { x: data.x, y: data.y },
                      },
                    },
                  }),
                });
              }}
              onStop={(e, data) => {
                draggableRef.current.style.transform = "translate(0px, 0px)";
              }}
            >
              <div
                className="absolute top-0 left-0 right-0 w-full h-full z-50 cursor-pointer"
                draggable
                ref={draggableRef}
              />
            </Draggable>
            <div
              className="absolute top-0 left-0 right-0 z-20 w-full h-full"
              style={{
                background:
                  "linear-gradient(180deg, #000000 0%, rgba(196, 196, 196, 0) 69.27%)",
                mixBlendMode: "multiply",
                transform: "rotate(180deg)",
              }}
            />
            <div
              className="absolute // top-0 left-0 right-0 // z-10 // w-full h-full"
              style={{
                backgroundImage: `url(${
                  state.slides[state.currentSlide].data.image.url !== null
                    ? state.slides[state.currentSlide].data.image.url
                    : "/assets/images/defaultImages/diskursintervention-mit-bild-1.jpg"
                })`,
                height: "100%",
                filter: "grayscale(100%)",
                backgroundPositionX: `${
                  state.slides[state.currentSlide].data.image.position.x
                }px`,
                backgroundPositionY: `${
                  state.slides[state.currentSlide].data.image.position.y
                }px`,
                backgroundSize: `${
                  state.slides[state.currentSlide].data.image.scale * 10 + 100
                }%`,
              }}
            />
            <div className="p-4 // relative // h-full w-full // flex flex-col // border-1 // z-20 ">
              <div className="mb-3 flex-1 flex">
                <div
                  className={`h-full w-full flex items-${state.slides[0].data.body.textPosition} justify-center`}
                >
                  <div
                    className="stripeContainer mb-4"
                    style={{ transform: "rotate(-6deg)" }}
                  >
                    <span
                      className="self-center // text-center font-bold italic font-headline leading-none // stripeText"
                      style={{
                        fontSize: `${
                          state.slides[state.currentSlide].data.body.scale.value
                        }px`,
                        color: getColor(state, 1),
                        boxDecorationBreak: "clone",
                        backgroundColor: getColor(state, 0),
                        lineHeight: 1.5,
                        padding: "0 1rem",
                      }}
                      dangerouslySetInnerHTML={{
                        __html: formatEmojis(
                          state.slides[
                            state.currentSlide
                          ].data.body.content.replace(/\n/gi, `<br/>`)
                        ),
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="absolute right-0 bottom-0 mb-4 mr-4 z-20">
                <div className="flex items-center flex-col">
                  <LogoArrow fillColor={getColor(state, 0)} />
                  <div
                    className="uppercase font-headline text-center text-md leading-none mt-2 ml-2"
                    style={{
                      color: getColor(state, 0),
                      transform: "rotate(-6deg)",
                    }}
                    dangerouslySetInnerHTML={{
                      __html:
                        state.slides[0].data.localBranch.content === ""
                          ? "\u00a0"
                          : state.slides[0].data.localBranch.content.replace(
                              /\n/gi,
                              `<br/>`
                            ),
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
  }
};
