import React from "react";

class App extends React.Component {
  state = {
    count: 0,
  };

  // add = () => {
  //   this.setState((current) => ({ count: current.count + 1 }));
  // };
  // remove = () => {
  //   this.setState((current) => ({ count: current.count - 1 }));
  // };

  // componentDidMount() {
  //   console.log("component rendering");
  // }

  // componentDidUpdate() {
  //   console.log("I just Updated");
  // }

  // componentWillUnmount() {
  //   console.log("goodbye, console");
  // }

  render() {
    console.log("I'm render");
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.remove}>Minus</button>
      </div>
    );
  }
}

export default App;
