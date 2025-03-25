import React from "react";
import Pagination from "./Components/Pagination";
import "./Components/Pagination.css";

const App = () => {
  const items = [
    "What is the purpose of pagination? A) To slow down the website B) To organize content into manageable pages C) To remove content D) To duplicate items",

    "What determines how many pages are created in pagination? A) The number of items per page B) The total number of items C) Both A and B D) The number of components",

    "How is the current page managed in React? A) Using a variable B) Using useState hook C) Using a function D) Using CSS",
    "Which method is used to extract a portion of an array? A) split() B) slice() C) splice() D) map()",

    "What determines how many pages are created in pagination? A) The number of items per page B) The total number of items C) Both A and B D) The number of components",

    "What determines how many pages are created in pagination? A) The number of items per page B) The total number of items C) Both A and B D) The number of components",

    "What does the useState hook return? A) Only the current state value B) A function to update the state C) Both the state value and a function to update it D) None of the above",

    "Which method is used to extract a portion of an array? A) split() B) slice() C) splice() D) map() ",

    "What determines how many pages are created in pagination? A) The number of items per page B) The total number of items C) Both A and B D) The number of components",

    "Which method is used to extract a portion of an array? A) split() B) slice() C) splice() D) map() ",

    "Which method is used to extract a portion of an array? A) split() B) slice() C) splice() D) map() ",
  ];

  return (
    <div className="=mcq">
      <h1 style={{ textAlign: "center", backgroundColor:"lavender" }}>Pagination Example</h1>
      <Pagination itemsPerPage={3} items={items} />
    </div>
  );
};

export default App;
