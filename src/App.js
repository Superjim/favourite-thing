import "./App.css";
import React, { useState } from "react";

function App() {
  //set initial color, EDIT THESE TO PROVE IT WILL FAVOURITE CERTAIN COLORS
  const [colors, setColors] = useState({
    red: 50,
    blue: 50,
    green: 50,
    yellow: 50,
    purple: 50,
    orange: 50,
    pink: 50,
    black: 50,
    white: 50,
    gray: 50,
  });

  //should probably just map off colors.keys
  const colorList = [
    "red",
    "blue",
    "green",
    "yellow",
    "purple",
    "orange",
    "pink",
    "black",
    "white",
    "gray",
  ];

  //onClick
  const handleClick = (amount) => {
    const colorEntries = Object.entries(colors);

    //sort high -> low
    const sortedColorEntries = colorEntries.sort((a, b) => b[1] - a[1]);

    //need add 1, color weight 0 never get selected its outside of randint
    const weightedColors = sortedColorEntries.map(([color, count]) => ({
      color,
      weight: count + 1,
    }));

    //sum of all the total weight
    let weightTotal = 0;
    for (let i = 0; i < weightedColors.length; i++) {
      weightTotal += weightedColors[i].weight;
    }

    //gen int between 1 and total weight
    const random = weightTotal * Math.random();

    // start with 2, 3 and 5
    // total weight = 8
    // random int comes out as 4
    // weightsum += 2
    // 2 is less than randint 4
    // weightsum += 3, weightsum = 5
    // as 5 is more than 4, set current color to the color weighted with 4
    // break

    let weightSum = 0;

    let randomColor;
    for (let i = 0; i < weightedColors.length; i++) {
      weightSum += weightedColors[i].weight;
      if (random < weightSum) {
        randomColor = weightedColors[i].color;
        break;
      }
    }

    //dont bring a color to less than 0
    if (colors[currentColor] + amount >= 0) {
      setColors({ ...colors, [currentColor]: colors[currentColor] + amount });
    }

    //random, unweighted color
    //const randomColor = colorList[Math.floor(Math.random() * colorList.length)];

    setCurrentColor(randomColor);
  };

  const [currentColor, setCurrentColor] = useState(colorList[0]);

  return (
    <div className="App">
      <div className="thing-container">
        <button
          onClick={() => {
            handleClick(-1);
          }}
        >
          No
        </button>
        <div className="item-container">
          <Square color={currentColor} />
        </div>
        <button
          onClick={() => {
            handleClick(+1);
          }}
        >
          Yes
        </button>
      </div>
      <ul>
        {Object.entries(colors)
          .sort((a, b) => b[1] - a[1])
          .map(([color, count]) => (
            <li key={color}>
              {color}: {count}
            </li>
          ))}
      </ul>
      <Triangle color="red" />
      <Circle color="blue" />
    </div>
  );
}

const Square = (props) => {
  return (
    <svg width="100" height="100">
      <rect x="0" y="0" width="100" height="100" fill={props.color} />
    </svg>
  );
};

const Triangle = (props) => {
  return (
    <svg width="100" height="100">
      <polygon points="50,0 0,100 100,100" fill="blue" />
    </svg>
  );
};

const Circle = (props) => {
  return (
    <svg width="100" height="100">
      <circle cx="50" cy="50" r="40" fill="green" />
    </svg>
  );
};

export default App;
