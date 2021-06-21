import Layout from "../components/layout";
import { Link } from "gatsby";
import React from "react";

export default ({ children }) => (
  <Layout>
    <div className="container grid-12">
      <div className="col-span-12 py-2">
        <Link
          to="/"
          className="hover:underline uppercase text-white font-sans font-bold"
        >
          ◂ zurück zur Übersicht
        </Link>
      </div>
      {children}
    </div>
  </Layout>
);
