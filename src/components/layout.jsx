import { graphql, useStaticQuery } from 'gatsby'

import { Helmet } from 'react-helmet'
import React from 'react'
import { isSafari } from 'react-device-detect'

export default ({ children }) => {
  const {
    site: {
      siteMetadata: { title, name, description },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          name
        }
      }
    }
  `)

  const longTitle = `${name} – ${title}`

  return (
    <>
      <Helmet
        bodyAttributes={{
          class: 'bg-black',
        }}
      >
        <meta charSet="utf-8" />
        <title>{longTitle}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={longTitle} />
      </Helmet>
      {!isSafari ? (
        <div className="hidden xl:block pb-2">{children}</div>
      ) : (
        <div className="flex xl:hidden bg-red w-screen h-screen flex-col items-center justify-center px-3">
          <h1 className="text-xs text-yellow leading-none font-bold font-ttnorms text-center">
            Sharepic Generator <br />
            Solidarisch geht anders
          </h1>
          <h2 className="text-2xs text-black leading-none font-ttnorms text-center mt-2">
            Der Generator läuft leider nicht mit Safari. Bitte verwende Firefox
            oder einen anderen Browser.
          </h2>
        </div>
      )}

      <div className="flex xl:hidden bg-red w-screen h-screen flex-col items-center justify-center px-3">
        <h1 className="text-xs text-yellow leading-none font-bold font-ttnorms text-center">
          Sharepic Generator <br />
          Solidarisch geht anders
        </h1>
        <h2 className="text-2xs text-black leading-none font-ttnorms text-center mt-2">
          Der Generator kann leider nur auf einem Desktop-Gerät (Mindestbreite
          992 Pixel) verwendet werden.
        </h2>
      </div>
    </>
  )
}
