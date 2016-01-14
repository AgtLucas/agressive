import React from 'react'
import DocumentTitle from 'react-document-title'

export default class Layout extends React.Component {
  render() {
    const {main} = this.props

    return(
      <html>
        <head>
          <title>{DocumentTitle.rewind()}</title>
        </head>
        <body>
          <main dangerouslySetInnerHTML={{__html: main}} />
          <script src='/bundle.js'></script>
        </body>
      </html>
    )
  }
}
