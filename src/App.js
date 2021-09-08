import "./styles.css";
import { useState } from "react";

const foodDb = {
  indian: [
    {
      name: "Chiken tika masala",
      desc: "Marinated chicken chunks in spiced curry sauce",
      rating: "8.5/10"
    },
    {
      name: "Butter Chiken",
      desc: "Curry of chicken in a spiced tomato, butter and cream sauce",
      rating: "9.0/10"
    },
    {
      name: "Pav bhaji",
      desc: "Thick vegetable curry served with a soft bread roll",
      rating: "8.8/10"
    },
    {
      name: "Chiken Biryani",
      desc: "Mixed rice dish made with Indian spices and chiken",
      rating: "9.5/10"
    }
  ],

  italian: [
    {
      name: "Caprese Salad with Pesto Sauce",
      desc: "Juicy tomato and mozzarella cheese salad with pesto sauce",
      rating: "7.0/10"
    },
    {
      name: "Bruschetta",
      desc: "Grilled bread rubbed with garlic and topped with olive oil",
      rating: "9.0/10"
    },
    {
      name: "Spaghetti and Meatballs",
      desc: "Dish consisting of spaghetti, tomato sauce and meatballs",
      rating: "8.8/10"
    },
    {
      name: "Chicken Marsala",
      desc: "Dish of chicken escalopes in a Marsala wine sauce",
      rating: "8.5/10"
    }
  ],

  chinese: [
    {
      name: "Dumplings",
      desc: "Pieces of dough wrapped around a vegetable and chiken fillings",
      rating: "8.8/10"
    },
    {
      name: "Kung Pao Chicken",
      desc:
        "A spicy, stir-fried dish made with chicken cubes, vegetables, and chili peppers",
      rating: "8.5.0/10"
    },
    {
      name: "Peri Peri Chicken Satay Recipe",
      desc: "A mouth-watering chicken starter!",
      rating: "9.0/10"
    }
  ]
};

//var foodDbList = Object.keys(foodDb);

export default function App() {
  const [selectedfoodStyle, setFoodStyle] = useState("indian");

  function btnFoodStyleClickHandler(foodStyle) {
    return setFoodStyle(foodStyle);
  }

  return (
    <div className="App">
      <h1>🍻goodfoods</h1>
      <p style={{ fontSize: "smaller" }}>
        Checkout my favourite cusines. Select a style to get started
      </p>

      <div>
        {Object.keys(foodDb).map((foodStyle) => (
          <button
            onClick={() => btnFoodStyleClickHandler(foodStyle)}
            style={{
              padding: "0.5rem 2rem",
              border: "1px solid black",
              borderRadius: "0.5rem",
              backgroundColor: "#E5E7EB",
              margin: "0.85rem 0.3rem",
              cursor: "pointer",
              fontWeight: "bold"
            }}
          >
            {foodStyle}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ padding: "0.5rem" }}>
          {foodDb[selectedfoodStyle].map((foodItem) => (
            <li
              key={foodItem.name}
              style={{
                padding: "1rem",
                listStyle: "none",
                border: "2px solid #D1D5DB",
                width: "80%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              <div style={{ fontSize: "larger" }}> {foodItem.name} </div>
              <div style={{ fontSize: "smaller", margin: "0.5rem 0rem" }}>
                {" "}
                {foodItem.desc}{" "}
              </div>
              <div style={{ fontSize: "medium" }}> {foodItem.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
