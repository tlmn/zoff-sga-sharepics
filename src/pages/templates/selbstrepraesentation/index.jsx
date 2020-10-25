import React, { useRef, useState } from "react";

import { Link } from "gatsby";

export default () => {
  const [state, setState] = useState({
    currentSlide: 0,
    slides: [
      {
        bodyText: "SPD: Oops, I did it again",
        bodyTextScale: 100,
        bodyTextScaleRange: [60, 150],
      },
      {
        image: { url: null, position: { x: 0, y: 0 }, scale: 0 },
      },
      {
        bodyText: "SPD: Oops, I did it again",
        bodyTextScale: 100,
        bodyTextScaleRange: [60, 150],
      },
    ],
    colorTheme: "turquoise_darkGray",
    templateRef: useRef(null),
    templateScale: true,
  });

  return (
    <div className="container grid-12">
      <div className="col-span-12 py-1 flex justify-center">
        <Link to="/" className="hover:underline">
          zurück zur Übersicht
        </Link>
      </div>
    </div>
  );
};
