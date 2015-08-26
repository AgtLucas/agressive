import React from 'react';

export default class Layout extends React.Component {
  render() {
    const {main} = this.props;

    return(
      <html>
        <body>
          <main dangerouslySetInnerHTML={{__html: main}} />
          <script src='/bundle.js'></script>
        </body>
      </html>
    );
  }
};
