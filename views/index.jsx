const React = require("react");

class Index extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.hello}</h1>
      </div>
    );
  }
}

module.exports = Index;
