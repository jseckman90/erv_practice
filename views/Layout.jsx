const React = require("react");

class Layout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
        </head>
        <body>
          <header>
            <h1>This is the header</h1>
          </header>
          <main>{this.props.children}</main>
          <footer>
            <h1>this is the footer</h1>
          </footer>
        </body>
      </html>
    );
  }
}

module.exports = Layout;
