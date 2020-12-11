import React, { useState } from "react";
import "./styles.css";

var foodMenu = {
  Vegetables: ["Shahi Paneer", "Aloo Dum", "Handi Paneer", "Matar Methi"],
  Sweets: [
    "Rasgulla",
    "Rasmalai",
    "Kheer Chamcham",
    "Kaju Katli",
    "Kesar Jalebi",
    "Thekua",
    "Besan Laddu"
  ],
  "Street food": [
    "Golgappe",
    "Pav-Bhaji",
    "Momos",
    "Manchurian",
    "Chinese Bhel"
  ],
  Breads: [
    "Tandoori Roti",
    "Missi Roti",
    "Laccha Parantha",
    "Aloo Parantha",
    "Gobhi Parantha",
    "Paneer Parantha",
    "Bajri Roti",
    "Makka Roti"
  ],
  Icecreams: ["Vanilla", "Chocolate", "ButterScotch", "Wicked Grape"],
  Pizza: ["Paneer Pizza", "Sweetcorn Pizza", "Farmhouse Pizza", "Zingy Parcel"],
  Pasta: ["Red Chilli Pasta", "White Sauce Pasta", "Red Sauce Pasta"],
  Beverages: [
    "Oreo Shake",
    "Cold Coffee",
    "Chocolate Shake",
    "Hot Ganache",
    "Coke"
  ]
};

var foodCategories = Object.keys(foodMenu);

export default function App() {
  var [options, setOptions] = useState("Vegetables");

  function setCategory(category) {
    var chosenCategory = category;
    setOptions(chosenCategory);
  }

  return (
    <div className="App">
      <h1>Foodie</h1>

      <h2>Food Savouries Available</h2>
      <div>
        Choose from the categories below to know the options available :-{" "}
      </div>
      {foodCategories.map((item) => {
        return (
          <button
            key={item}
            onClick={() => setCategory(item)}
            style={{
              padding: "0.5rem",
              margin: "1rem",
              cursor: "pointer",
              borderRadius: "0.5rem",
              marginTop: "2rem",
              marginBottom: "2rem"
            }}
          >
            {item}
          </button>
        );
      })}

      <hr />

      <div style={{ margin: "3rem" }}>
        {"The options available are :- "}
        {foodMenu[options].map((item) => {
          return (
            <button
              style={{
                padding: "0.5rem",
                margin: "auto",
                cursor: "pointer",
                display: "block",
                borderRadius: "0.5rem",
                marginTop: "1rem"
              }}
              key={item}
            >
              {item}
            </button>
          );
        })}
      </div>

      <div style={{ margin: "2rem" }}>By Lokesh Jain</div>
    </div>
  );
}
