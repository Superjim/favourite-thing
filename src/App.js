import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [colors, setColors] = useState({
    red: 0,
    blue: 0,
    green: 0,
    yellow: 0,
    purple: 0,
    orange: 0,
    pink: 0,
    black: 0,
    white: 0,
    gray: 0,
  });

  const colorEntries = Object.entries(colors);
  const sortedColorEntries = colorEntries.sort((a, b) => b[1] - a[1]);

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

  const handleClick = (amount) => {
    setColors({ ...colors, [currentColor]: colors[currentColor] + amount });
    const randomColor = colorList[Math.floor(Math.random() * colorList.length)];
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
        {sortedColorEntries.map(([color, count]) => (
          <li key={color}>
            {color}: {count}
          </li>
        ))}
      </ul>
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

export default App;
