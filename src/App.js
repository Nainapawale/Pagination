import React from "react";
import Pagination from "./Components/Pagination";

const App = () => {
  const images = [
    "/assets/img6.jpg",
    "/assets/img7.jpg",
    "/assets/img22.jpg",
    "/assets/img6.jpg",
    "/assets/img7.jpg",
    "/assets/img22.jpg",
    "/assets/img6.jpg",
    "/assets/img7.jpg",
    "/assets/img22.jpg",
    "/assets/img6.jpg",
    "/assets/img7.jpg",
    "/assets/img22.jpg",
    "/assets/img6.jpg",
    "/assets/img7.jpg",
    "/assets/img22.jpg",
    
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold text-center mb-4">
        Image Gallery with Pagination
      </h1>
      <Pagination imagesPerPage={10} images={images} />
    </div>
  );
};

export default App;
