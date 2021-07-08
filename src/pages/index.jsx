import Layout from "../components/layout";
import { Link } from "gatsby";
import React from "react";
import { templates } from "../config/vars";

export default () => {
  return (
    <Layout>
      <div className="bg-red font-kapra leading-normal">
        <div className="container py-2">
          <div className="mx-auto grid grid-cols-12 col-gap-4 row-gap-2 py-5">
            <div className="col-span-12 text-center">
              <h1 className="text-md text-yellow leading-tight font-bold font-ttnorms">
                Sharepic Generator <br />
                Solidarisch geht anders
              </h1>
            </div>
            {templates.map((template) => (
              <div className="col-span-12 sm:col-span-4 text-center">
                <Link
                  to={template.link}
                  className="no-underline hover:text-lightGray text-white font-bold"
                >
                  <span className="block text-base uppercase pb-1">
                    {template.name}
                  </span>
                  <img
                    src={template.thumbnailSrc}
                    alt={template.name}
                    className="hover:opacity-75 transition-all ease-in-out duration-200 border-4 border-white"
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};
