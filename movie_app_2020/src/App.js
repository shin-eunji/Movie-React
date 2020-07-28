import React from "react";

function Food({ name, picture }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} />
    </div>
  );
}

const foodILike = [
  {
    name: "potato",
    image:
      "https://www.irishtimes.com/polopoly_fs/1.3967277.1564062363!/image/image.jpg_gen/derivatives/ratio_1x1_w1200/image.jpg",
  },
  {
    name: "potato",
    image:
      "https://www.irishtimes.com/polopoly_fs/1.3967277.1564062363!/image/image.jpg_gen/derivatives/ratio_1x1_w1200/image.jpg",
  },
  {
    name: "potato",
    image:
      "https://www.irishtimes.com/polopoly_fs/1.3967277.1564062363!/image/image.jpg_gen/derivatives/ratio_1x1_w1200/image.jpg",
  },
  {
    name: "potato",
    image:
      "https://www.irishtimes.com/polopoly_fs/1.3967277.1564062363!/image/image.jpg_gen/derivatives/ratio_1x1_w1200/image.jpg",
  },
];

function App() {
  return (
    <div className="App">
      {foodILike.map((current) => (
        <Food name={current.name} picture={current.image} />
      ))}
    </div>
  );
}

export default App;
