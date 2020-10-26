import React, { useRef, useState } from "react";

import Cockpit from "../../../templates/zitat/cockpit";
import Layout from "../../../components/layout";
import { Link } from "gatsby";
import Template from "../../../templates/zitat/template";

export default () => {
  const [state, setState] = useState({
    currentSlide: 0,
    slides: [
      {
        data: {
          author: { content: "Rosa Luxemburg" },
          body: {
            content:
              "Eine vom Patriarchat befreite Gesellschaft? Viele sprechen davon aber wenige setzen es in die Praxis um.",
            scaleRange: [60, 150],
            scale: 100,
          },
        },
        ref: useRef(null),
      },
    ],
    colorTheme: "turquoise_darkGray",
    templateScale: true,
  });

  return (
    <Layout state={state}>
      <div className="container grid-12">
        <div className="col-span-12 py-1 flex justify-center">
          <Link to="/" className="hover:underline">
            zurück zur Übersicht
          </Link>
        </div>
        <div className="col-span-6">
          <Template state={state} />
        </div>
        <div className="col-span-4 col-start-8">
          <Cockpit state={state} setState={setState} />
        </div>
      </div>
    </Layout>
  );
};
