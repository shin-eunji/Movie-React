import React from "react";

function Food({ name }) {
  return <h1>I like {name}</h1>;
}

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Food name="potato" />
      {/* <Food
        fav="kimbob"
        something={true}
        papapapa={["hello", 1, 2, 3, 4, true]}
      /> */}
    </div>
  );
}

export default App;
