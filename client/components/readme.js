import React from 'react'
// import Head from './head'
import ReactMarkdown from 'react-markdown'

const Readme = (props) => {
  return <ReactMarkdown source={props.readme} />
}

Readme.propTypes = {}

export default React.memo(Readme)
