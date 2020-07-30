import React from "react";

class App extends React.Component {
  state = {
    count: 0,
  };

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
