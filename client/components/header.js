import React from 'react'
// import Head from './head'
import { Link, useParams } from 'react-router-dom'

const Header = () => {
  const { user, repository } = useParams()

  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6 text white font-bold">
      <div id="repository-name"> {repository || user || 'Welcome!'} </div>
      <div className="flex justify-end">
        {user && (
          <Link to="/" id="go-back" className="mr-5">
            Go Home
          </Link>
        )}
        {repository && (
          <Link to={`/${user}`} id="go-repository-list">
            Go repository list
          </Link>
        )}
      </div>
    </nav>
  )
}

Header.propTypes = {}

export default React.memo(Header)
