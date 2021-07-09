import Layout from '../components/layout'
import { Link } from 'gatsby'
import React from 'react'

export default ({ children }) => (
  <Layout>
    <div className="bg-red">
      <div className="container grid-12 mb-2">
        <div className="col-span-12 py-2">
          <Link
            to="/"
            className="hover:underline uppercase text-white font-kapra font-bold"
          >
            ◂ zurück zur Übersicht
          </Link>
        </div>
      </div>
    </div>
    <div className="container grid-12">{children}</div>
  </Layout>
)
