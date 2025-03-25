import React, { useState } from "react";
import "./Pagination.css";

const Pagination = ({ itemsPerPage, items }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    //  MCQS
    <div  className="pagination-container" >
      <ul className="mcq-list">
        {currentItems.map((item, index) => {
          const [question, ...options] = item.split(" A) ");
          return (
            <li
              key={index} className="mcq-list"
              
            >
              <h3 >
                {question}
              </h3>

              <ul className="option-list">
                {options.map((option, i) => (
                  <li
                    key={i} className="option-item" 
                  >
                    <input
                      type="radio"
                      name={`q${index}`}
                      id={`q${index}-option${i}`}
                    />

                    <label
                      htmlFor={`q${index}-option${i}`}>
                    
                      {String.fromCharCode(65 + i)}) {option}
                    </label>
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>

      {/* BUTTONS */}
      <div  className="pagination-buttons">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
