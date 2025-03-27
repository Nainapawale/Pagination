import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Pagination.css";

const Pagination = ({ imagesPerPage, images }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(images.length / imagesPerPage);

  const indexOfLastItem = currentPage * imagesPerPage;
  const indexOfFirstItem = indexOfLastItem - imagesPerPage;
  const currentImages = images.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div className="container p-4">
      <h2 className="text-center fw-bold text-primary mb-4">
        📸 Beautiful Image Gallery
      </h2>

      {/* Image Grid */}
      <div className="container text-center">
        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-3">
          {currentImages.map((image, index) => (
            <div key={index} className="col">
              <div className="card shadow-lg border-0 rounded overflow-hidden image-card">
                <img
                  src={image}
                  alt={`Image ${index + 1}`}
                  className="card-img-top"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <nav aria-label="Page navigation" className="mt-4">
        <ul className="pagination justify-content-center">
          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <button
              className="page-link pagination-btn"
              onClick={() => handlePageChange(currentPage - 1)}
            >
              &laquo;
            </button>
          </li>

          {Array.from({ length: totalPages }, (_, index) => (
            <li
              key={index}
              className={`page-item ${
                currentPage === index + 1 ? "active" : ""
              }`}
            >
              <button
                className="page-link pagination-btn"
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            </li>
          ))}

          <li
            className={`page-item ${
              currentPage === totalPages ? "disabled" : ""
            }`}
          >
            <button
              className="page-link pagination-btn"
              onClick={() => handlePageChange(currentPage + 1)}
            >
              &raquo;
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
