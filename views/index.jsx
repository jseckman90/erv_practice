const React = require("react");
const Layout = require("./Layout.jsx");

const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

class Index extends React.Component {
  render() {
    return (
      <Layout>
        <div>
          <h1>{this.props.hello}</h1>
          <ul>
            {myArr.map((num) => (
              <li>{num}</li>
            ))}
          </ul>
        </div>
      </Layout>
    );
  }
}

module.exports = Index;
