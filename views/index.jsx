const React = require("react");
const Layout = require("./Layout.jsx");

class Index extends React.Component {
  render() {
    return (
      <Layout>
        <div>
          <h1>{this.props.hello}</h1>
        </div>
      </Layout>
    );
  }
}

module.exports = Index;
